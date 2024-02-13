import dotenv from 'dotenv';
import swaggerJSDoc from 'swagger-jsdoc';

dotenv.config();

const options: swaggerJSDoc.Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Stock API',
			version: '1.0.0',
			description: 'API Stocks Microservice',
		},
		servers: [
			{
				url: `${process.env.API_URL || 'http://localhost:5000'}/stocks`,
			},
		],
	},
	apis: ['./src/routes/**/*.ts', './src/controllers/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
