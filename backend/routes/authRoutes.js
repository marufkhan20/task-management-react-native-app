const {
  registerController,
  loginController,
  accountVerifyController,
  getUserByEmailController,
  resetPasswordController,
  addNumberController,
} = require("../controllers/authController");

const router = require("express").Router();

// registration route
router.post("/register", registerController);

// add mobile number
router.post("/add-number", addNumberController);

// account verify
router.post("/account-verify", accountVerifyController);

// login route
router.post("/login", loginController);

// get user by email
router.get("/:email", getUserByEmailController);

// reset account password
router.put("/reset-password/:token", resetPasswordController);

module.exports = router;
