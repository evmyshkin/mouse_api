const express = require(`express`);
require(`dotenv`).config();

const { requestHandler, generatorHandler, healthCheckHandler } = require("./request-handler");

const app = express();
app.use(express.json());

// Открываем порт
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("✅ Server Listening on PORT:", PORT);
});

requestHandler(app);
generatorHandler(app);
healthCheckHandler(app);
console.log("✅ Handlers Launched")
