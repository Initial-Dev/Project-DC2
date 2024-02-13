import dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';
import ExpressConfig from './config/express.config';
import routes from './routes';
import swaggerSpec from './swaggerConfig';

dotenv.config();

const app = ExpressConfig();
const PORT = process.env.PORT || 5004;

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/', routes.stockRoutes);

app.get('/ready', (_req, res) => {
	res.send('Stocks microservice ready !');
});

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
