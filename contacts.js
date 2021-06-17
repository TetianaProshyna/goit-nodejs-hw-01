import fs from "fs";
import path from "path";

const contactsPath = path.resolve("db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    console.table(JSON.parse(data));
    err && console.log(err.message);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    err && console.log(err.message);
    const result = JSON.parse(data).find((el) => el.id === contactId);
    console.log(result);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    err && console.log(err.message);
    const result = JSON.parse(data).filter((el) => el.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(result), (err) => {
      err && console.log(err.message);
    });
  });
}

function addContact(name, email, phone) {
  const contact = {
    id: Date.now(),
    name,
    email,
    phone,
  };
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    err && console.log(err.message);
    const result = JSON.parse(data);
    result.push(contact);
    fs.writeFile(contactsPath, JSON.stringify(result), (err) => {
      err && console.log(err.message);
    });
  });
}
export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
