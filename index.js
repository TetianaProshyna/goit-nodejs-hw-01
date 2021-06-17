import func from "./contacts.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      func.listContacts();
      break;

    case "get":
      func.getContactById(id);
      break;

    case "add":
      func.addContact(name, email, phone);
      break;

    case "remove":
      func.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
