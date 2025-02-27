const createUser = async (
  firstName,
  lastName,
  password,
  email,
  phoneNumber
) => {
  console.log("i am in my service file ");
  console.log(
    "the data i received is : \n firstName : ",
    firstName,
    "\n lastName : ",
    lastName,
    "\n password : ",
    password,
    "\n email : ",
    email,
    "\n phoneNumber : ",
    phoneNumber
  );
  console.log();
};

//the new APIs :
const userInfo = async (login, changeUserInfo, changePassword) => {
  console.log("i am in my service file ");
  console.log(
    "the data i received is : \n loginInfo : ",
    login,
    "\n changeUserInfo : ",
    changeUserInfo,
    "\n changePassword : ",
    changePassword
  );
  console.log();
};

export const users = [
  {
    firstName: "toni",
    lastName: "khalil",
    password: "pass123",
    email: "jiba@gmail.com",
    phoneNumber: "1234567890",
  },
  {
    firstName: "Bob",
    lastName: "akiki",
    password: "secret123",
    email: "bob@gmail.com",
    phoneNumber: "9876543210",
  },
  {
    firstName: "charbel",
    lastName: "jdk",
    password: "popo123",
    email: "charb@gmail.com",
    phoneNumber: "555667788",
  },
];

console.log(users);

const createUser1 = (firstName, lastName, password, email, phoneNumber) => {
  console.log(" new user");
};

const loginUser = (email, password) => {
  console.log("Log in");
};
const getUserInfo = (email) => {
  console.log("getting new email");
};
const updateUser = (email, newInfo) => {
  console.log("Update user info");
};
const changePassword = (email, oldPassword, newPassword) => {
  console.log("Change password");
};
export default {
  createUser1,
  loginUser,
  getUserInfo,
  updateUser,
  changePassword,
};
