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
  const contacs = await listContacts();
  const result = contacs.find((item) => item.id === getContactById);
  if (!result) {
    return null;
  }
  console.table(result);
  return result;
};

const addContact = async (name, email, phone) => {
  const contacs = await listContacts();
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  contacs.push(newContact);
  await updateContact(contacs);
  return newContact;
};

const removeContact = async (contactId) => {
  const contacs = await listContacts();
  const idx = contacs.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [result] = contacs.splice(idx, 1);
  await updateContact(contacs);
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
