const listContacts = require("./listContacts");

const contactById = async(id) => {
    const contacts = await listContacts();
    const contact = contacts.find(item => item.id === id || item.id === Number(id));
    if(!contact) {
        return null;
    }
    return contact;
}

module.exports = contactById;