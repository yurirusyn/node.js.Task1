const fs = require("fs").promises;
const path = require("path");
// const contactsPath = path.resolve("./db/contacts.json");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "/db/contacts.json");

const updateContact = async (contact) => {
  await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  console.table(JSON.parse(data));
  return JSON.parse(data);
};

const getContactById = async (getContactById) => {
  const books = await listContacts();
  const result = books.find((item) => item.id === getContactById);
  if (!result) {
    return null;
  }
  console.table(result);
  return result;
};

const addContact = async (name, email, phone) => {
  const books = await listContacts();
  const newBook = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  books.push(newBook);
  await updateContact(books);
  return newBook;
};

const removeContact = async (contactId) => {
  const books = await listContacts();
  const idx = books.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [result] = books.splice(idx, 1);
  await updateContact(books);
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
