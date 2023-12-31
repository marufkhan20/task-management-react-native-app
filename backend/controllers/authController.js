const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("../services/emailService");
const twilio = require("twilio");

const client = twilio(
  "AC910ac35b270527b97d83e122d6685efe",
  "294f64ca9cdd3f4c4fdb00932c1b758d"
);

// register controller
const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check user already existing
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: {
          email: "Email is already exist, Please try to another email!",
        },
      });
    }

    // password hash
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }

        // Create New User
        const newUser = new User({
          name,
          email,
          password: hash,
        });

        let user = await newUser.save();

        if (user?._id) {
          res.status(201).json(user);
        }
      });
    });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({
      error: err.message,
    });
  }
};

// add mobile number
const addNumberController = async (req, res) => {
  try {
    const { id, phone } = req.body || {};

    if (!phone) {
      return res.status(400).json({
        error: {
          phone: "Phone number is required!",
        },
      });
    }

    // geenerate 6 digit verify code
    const verifyCode = Math.floor(Math.random() * 9000) + 1000;

    // update user data
    const user = await User.findById(id);
    user.phone = phone;
    user.verifyCode = verifyCode;
    await user.save();

    if (user?._id) {
      // send verify code with message
      const response = await client.messages.create({
        body: `Your verification code is ${verifyCode} it will expire within 30 minutes`,
        from: "+15313314026",
        to: `+88${phone}`,
      });
      console.log(response);
      res.status(200).json({ _id: user._id });
    }
  } catch (err) {
    console.log("error", err);
    res.status(500).json({
      error: err,
    });
  }
};

// account verify controller
const accountVerifyController = async (req, res) => {
  try {
    const { id, code } = req.body || {};

    // find user by id
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({
        email: "User Not found!!",
      });
    }

    if (code !== user?.verifyCode) {
      return res.status(400).json({
        error: {
          code: "Invalid Verify Code!",
        },
      });
    }

    // verify user
    user.verified = true;
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// login controller
const loginController = async (req, res) => {
  const { email, password } = req.body;

  // check user available
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      error: {
        email: "User not found! Please try again!!",
      },
    });
  }

  // check password correct or incorrect
  bcrypt.compare(password, user.password, function (err, result) {
    if (err) {
      return res.status(500).json({
        error: "Server Error Occurred!",
      });
    }

    if (!result) {
      return res.status(400).json({
        error: {
          password: "Email or Password Incorrect!",
        },
      });
    } else if (!user?.verified) {
      return res.status(400).json({
        error: {
          email: "Your account is not verified! Please verify your account.",
        },
      });
    }

    // prepare the user object to generate token
    const userObject = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    // generate token
    const token = jwt.sign(userObject, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });

    res.status(200).json({
      user: userObject,
      token,
    });
  });
};

// get user by email controller
const getUserByEmailController = async (req, res) => {
  try {
    const { email } = req.params || {};

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: {
          email: "User Not found!!",
        },
      });
    }

    if (user?._id) {
      // prepare the user object to generate token
      const userObject = {
        _id: user._id,
        email: user.email,
      };

      // generate token
      const token = jwt.sign(userObject, process.env.JWT_SECRET, {
        expiresIn: "10m",
      });

      // generate 4 digit random verify code
      const verifyLink = `${process.env.CLIENT_URL}/reset-password/${token}`;

      // send mail with verify code
      sendMail({
        from: process.env.ADMIN_EMAIL,
        to: email,
        subject: "Forgot Your Account Password.",
        html: require("../services/forgotEmailTemplate")(verifyLink),
      });

      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// reset password controller
const resetPasswordController = async (req, res) => {
  try {
    let { token } = req.params || {};
    const { password } = req.body || {};

    if (!token) {
      return res.status(401).json({
        message: "Verification Failure!!",
      });
    }

    token = token.replace("Bearer ", "");

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (decode?._id) {
      // password hash
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          }

          // get user
          const user = await User.findById(decode?._id);

          // Create New User
          user.password = hash;

          await user.save();

          res.status(200).json(user);
        });
      });
    }
  } catch (err) {
    console.error(err);
    res.status(401).json({
      message: "Verify Token Expire!!",
    });
  }
};

module.exports = {
  registerController,
  accountVerifyController,
  loginController,
  getUserByEmailController,
  resetPasswordController,
  addNumberController,
};
