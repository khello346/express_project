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

const users = [
  {
    firstName: "toni",
    lastName: "khalil",
    password: "pass123",
    email: "alice@gmail.com",
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
    email: "charlie@gmail.com",
    phoneNumber: "555667788",
  },
];

console.log(users);

export default {
  createUser,
  userInfo,
  users,
};
