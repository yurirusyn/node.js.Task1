const fs = require("fs").promises;
// const path = require("path");
// const contactsPath = path.resolve("./db/contacts.json");
// const { v4: uuidv4 } = require("uuid");

function listContacts() {
  fs.readFile("./db/contacts.json", "utf-8")
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

function getContactById() {
  //   fs.readFile(contactsPath, "utf-8", (err, data) => {
  //     if (err) {
  //       console.error("error:", err);
  //     }
  //     let contacts = JSON.stringify(data);
  //     console.log(data.toString());
  //   });
  //   console.log(44);
}

function listContacts2() {
  fs.readFile(contactsPath, "utf-8").then((data) =>
    console.log(data.toString())
  );
}
// var jsonData =
//   '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';

// var jsonObj = JSON.parse(jsonData);
// console.log(jsonObj);
// var jsonContent = JSON.stringify(jsonObj);
// console.log(jsonContent);
// fs.writeFile("./db/contacts.json", jsonContent, "utf8", function (err) {
//   if (err) {
//     console.log("An error occured while writing JSON Object to File.");
//     return console.log(err);
//   }

//   console.log("JSON file has been saved.");
// });
// function addContact(name, email, phone) {
//   fs.writeFile("./db/contacts.json");
// }

module.exports = {
  listContacts,
  getContactById,
  listContacts2,
};
