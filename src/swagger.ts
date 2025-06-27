const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Client API",
    description: "API para gestión de clientes",
  },
  schemes: ["https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  servers: [
    {
      url: "https://clientmanagementapi-production.up.railway.app",
    },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      scheme: "bearer",
      bearerFormat: "JWT",
      in: "header",
      name: "Authorization",
      description: "Introduce el token con formato: Bearer <token>",
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const outputFile = "./swagger.json";
const routes = ["./app.ts"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
