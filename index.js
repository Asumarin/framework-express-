const PORT = process.env.PORT || 5000;
const Application = require("./framework/Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parseJson");
const parseUrl = require("./framework/parseUrl");

const app = new Application();

app.use(jsonParser);
app.use(parseUrl("http://localhost:5000"));
app.use((req, res) => {
  if ((res.statusCode = 404)) {
    res.write(`Resourse ${req.url} not found`);
    res.end();
  }
});

app.addRouter(userRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
