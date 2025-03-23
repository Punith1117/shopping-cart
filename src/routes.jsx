import App from "./App";
import Default from "./Default";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
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