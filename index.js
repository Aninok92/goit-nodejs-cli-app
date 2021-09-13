const contactsOperations = require("./contacts");
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async({ action='list', id, name, email, phone })=> {
    try {
      switch (action) {
          case 'list':
              const data = await contactsOperations.listContacts();
              console.table(data);
              break;
          case 'get':
              const contactById = await contactsOperations.contactById(Number(id));
              console.log(contactById);
              break;
          case 'add':
              const newContact = await contactsOperations.addContact(name, email, phone);
              console.log(newContact);
              break;
          
            case 'remove':
              const contactsAfterRemove = await contactsOperations.removeContact(id);
              console.table(contactsAfterRemove);
              break;      
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
    } catch(error) {
        console.log(error)
 }
}

invokeAction(argv);