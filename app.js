const dotenv = require('dotenv');
const express = require ('express');
dotenv.config();
console.log('Environment variables loaded:', process.env);

//Mise en place du router
const router = require('./app/routers')
const app = express();

//activer ejs
app.set('views', './app/views/pages');

app.set("view engine", "ejs");
app.use(express.static(`./public`));

app.use("/", router.home);
app.use("/catalogue", router.catalogue);
app.use("/details", router.detail);
app.use("/boutique", router.boutique);

app.use(function(req, res, next) {
  res.status(404).render('404');
});

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});