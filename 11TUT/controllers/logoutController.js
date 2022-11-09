// const usersDB = {
//   users: require("../model/users.json"),
//   setUsers: function (data) {
//     this.users = data;
//   },
// };

// const fsPromises = require("fs").promises;
// const path = require("path");

// const handleLogout = async (req, res) => {
//   // note for front-end: On client, also delete the accessToken
//   const cookies = req.cookies;
//   //   ?. is optional chaining: if we have cookies, then we also check to see if there is a jwt property. if this do not exist then we're going to return something (401) in this case
//   if (!cookies?.jwt) {
//     return res.sendStatus(204); //  No content
//   }

//   const refreshToken = cookies.jwt;

//   //   is refreshToken in db
//   const foundUser = usersDB.users.find(
//     (person) => person.refreshToken === user
//   );
//   if (!foundUser) {
//     res.clearCookie("jwt", { httpOnly: true });
//     return res.sendStatus(204); // Suuccessful but no content
//   }

//   // delete the refreshToken in the db
//   const otherUsers = usersDB.users.filter(
//     (person) => person.refreshToken !== foundUser.refreshToken
//   );
//   const currentUser = { ...foundUser, refreshToken: "" };
//   usersDB.setUsers([...otherUsers, currentUser]);
//   await fsPromises.writeFile(
//     path.join(__dirname, "..", "model", "users.json"),
//     JSON.stringify(usersDB.users)
//   );

//   res.clearCookie("jwt", { httpOnly: true }); // secure: true - only serves on https, we'd add this in production, we're not adding this currently in dvelopment
//   res.sendStatus(204);
// };

// module.exports = { handleLogout };

const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogout = async (req, res) => {
  // On client, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const foundUser = usersDB.users.find(
    (person) => person.refreshToken === refreshToken
  );
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204);
  }

  // Delete refreshToken in db
  const otherUsers = usersDB.users.filter(
    (person) => person.refreshToken !== foundUser.refreshToken
  );
  const currentUser = { ...foundUser, refreshToken: "" };
  usersDB.setUsers([...otherUsers, currentUser]);
  await fsPromises.writeFile(
    path.join(__dirname, "..", "model", "users.json"),
    JSON.stringify(usersDB.users)
  );

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.sendStatus(204);
};

module.exports = { handleLogout };
