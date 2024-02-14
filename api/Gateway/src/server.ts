import cors from 'cors';
import morgan from 'morgan';
import ExpressConfig from './config/express.config';
import setupProxies from './config/proxy';
import ROUTES from './routes/routes';

const app = ExpressConfig();
const PORT = process.env.PORT || 5000;

app.use(morgan('combined'));
app.use(cors());
setupProxies(app, ROUTES);

app.listen(PORT, () => console.log('Server Running on Port: ' + PORT));

app.get('/', (_req, res) => {
	res.send('Gateway OK !');
});
