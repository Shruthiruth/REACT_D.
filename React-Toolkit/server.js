import jsonServer from "json-server";
import auth from "json-server-auth";
import cors from "cors";
const app = jsonServer.create();
const router = jsonServer.router("db.json");
app.db = router.db;

const rules = auth.rewriter({

    users: 640,

    orders: 600,

    products: 444

});

app.use(cors());

app.use(jsonServer.defaults());

// apply route permissions

app.use(rules)

// auth widdleware
app.use(auth);

app.use(router);
app.listen(5007, () => {
    console.log("JSON Server is running on http://localhost:5007");
});