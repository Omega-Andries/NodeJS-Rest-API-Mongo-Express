import express from 'express';
import routes from './src/routes/crm.routes';

const app = express();
const PORT = 8080;

routes(app);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
    
})