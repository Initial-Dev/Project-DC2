import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Stock API',
			version: '1.0.0',
			description: 'A simple Express Stock API',
		},
		servers: [
			{
				url: 'http://localhost:5004/',
			},
		],
	},
	apis: ['./src/routes/**/*.ts', './src/controllers/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
