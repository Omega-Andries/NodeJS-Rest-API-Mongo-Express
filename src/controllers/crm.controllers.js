import mongoose from "mongoose";
import { ContactSchema } from "../models/crm.models";

const Contact = mongoose.model('Contact', ContactSchema);

export function getContacts(req, res) {
    Contact.find().then((contacts) => res.json(contacts)).catch((err) => res.send(err));
}

export function addNewcontact(req, res) {
    let newContact = new Contact(req.body);
    newContact.save(newContact).then((contact) => res.json(contact)).catch((err) => res.send(err))
}

export function getContact(req, res) {
    Contact.findById(req.params.contactId).then((contact) => res.json(contact)).catch((err) => res.send(err));
}

export function updateContact(req, res) {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body,{ new: true })
        .then((contact) => res.json(contact))
        .catch((err) => res.send(err));
}

export function deleteContact(req, res) {
    Contact.deleteOne({ _id: req.params.contactId }).then(() => res.send('Contact deleted')).catch(err => res.send(err));
}