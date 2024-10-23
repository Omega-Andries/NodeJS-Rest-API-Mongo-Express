import { addNewcontact, getContacts, getContact, updateContact, deleteContact } from "../controllers/crm.controllers";

export default function routes(app) {
    app.route('/contacts')
        .get((req, _, next) => {
            // sudo middle ware
            console.log(req.originalUrl);
            next();
        }, getContacts)
        .post(addNewcontact);

    app.route('/contacts/:contactId').get(getContact).put(updateContact).delete(deleteContact);
}
