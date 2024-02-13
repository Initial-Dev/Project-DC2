import morgan from 'morgan';
import applyPassportStrategy from './auth/Passport.config';
import ExpressConfig from './config/express.config';
import setupProxies from './config/proxy';
import authRoutes from './routes/auth.routes';
import ROUTES from './routes/routes';

const app = ExpressConfig();
const PORT = process.env.PORT || 5000;

applyPassportStrategy(app);

app.use(morgan('combined'));

app.use('/auth', authRoutes);

setupProxies(app, ROUTES);

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));

app.get('/', (_req, res) => {
	res.send('Gateway OK !');
});
