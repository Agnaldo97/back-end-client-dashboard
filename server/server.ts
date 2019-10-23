const config = require("./config");
const app = require("./app");
const { sequelize } = require("./sequelize");

(async () => {
  try {
    await sequelize.sync({ force: false });
  } catch (err) {
    console.log(err);
  }

  app.listen(config.PORT, () =>
    console.log(`server started: PORT: ${config.PORT} | ENV: ${config.ENV}`)
  );
})();
