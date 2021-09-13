const contacts = require("./db/contacts.json");
/*
const data = fs.readFileSync("./products.json");
const products = JSON.parse(data);
*/
const contactsList = async () => contacts;

module.exports = contactsList;