import userService from "./user.service.js";

const signUp = async (req, res) => {
  try {
    const { email, firstName, lastName, password, phoneNumber } = req.body;
    await userService.createUser(
      email,
      firstName,
      lastName,
      password,
      phoneNumber
    );

    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//ADDING NEW APIs :
const changeInfo = async (req, res) => {
  try {
    const { login, changeUserInfo, changePassword } = req.body;
    await userService.userInfo(login, changeUserInfo, changePassword);
    res
      .status(200)
      .json({ message: "User info has been changed successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  signUp,
  changeInfo,
};
