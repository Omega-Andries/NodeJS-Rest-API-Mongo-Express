export default function routes(app) {
    app.route('/contact')
        .get((req, _, next) => {
            // sudo middle ware
            console.log(req.originalUrl);
            next();
        }, getContacts)
        .post((req, _, next) => {
            console.log(req.originalUrl);
            next();
        }, addContacts);

    app.route('/contact/:contactId').put(updateContacts).delete(deletetContacts);
}

const getContacts = (req, res) => {
    res.send('Get request successful')
}

const addContacts = (req, res) => {
    res.send('Post request successful')
}

const updateContacts = (req, res) => {
    res.send('PUT request successful')
}

const deletetContacts = (req, res) => {
    res.send('Delete request successful')
}