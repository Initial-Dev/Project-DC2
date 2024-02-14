import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import applyPassportStrategy from './auth/Passport.config';
import ExpressConfig from './config/express.config';
import setupProxies from './config/proxy';
import authRoutes from './routes/auth.routes';
import ROUTES from './routes/routes';
import userRoutes from './routes/user.routes';
import swaggerSpec from './swaggerConfig';
import cors from 'cors';

const app = ExpressConfig();
const PORT = process.env.PORT || 5000;

applyPassportStrategy(app);
app.use(cors());
app.use(morgan('combined'));

app.use('/auth/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/auth', authRoutes);
app.use('/', userRoutes);

setupProxies(app, ROUTES);

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
