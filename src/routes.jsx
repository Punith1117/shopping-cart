import App from "./App";
import Default from "./Default";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Default />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "cart",
                element: <Cart />
            },
        ]
    },
];

export default routes;