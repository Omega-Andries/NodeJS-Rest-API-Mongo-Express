import express from 'express';
import routes from './src/routes/crm.routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

// Connect to db;
mongoose.Promise = global.Promise;
mongoose.connect(process.env.LOCAL_DB_URL);

// Body parser setup;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));