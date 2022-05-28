const fs = require("fs").promises;
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const allContacts = await listContacts();
        console.table(allContacts);
        break;

      case "get":
        const ContactsById = await getContactById(id);
        console.table(ContactsById);
        break;

      case "add":
        const ContactAdd = await addContact(name, email, phone);
        console.table(ContactAdd);

        break;

      case "remove":
        const ContactRemov = await removeContact(id);
        console.table(ContactRemov);

        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error.message);
  }
};

invokeAction(argv);
