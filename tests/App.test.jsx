import { vi, describe, expect, it, beforeEach } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Products from "../src/Products";
import Home from "../src/Home";
import Cart from "../src/Cart";
import Default from "../src/Default";
import userEvent from "@testing-library/user-event";

describe('App', () => {
    beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
              json: () => Promise.resolve({product: { id: 1, title: 'shirt'}}),
            })
        );
        let products = [
            {
                id: 1,
                imageUrl: 'x',
                title: 'a',
                description: 'abc',
                price: 20
            },
            {
                id: 2,
                imageUrl: 'x',
                title: 'a',
                description: 'abc',
                price: 20
            }
        ]
        let cart = [
            {
                id: 1,
                imageUrl: 'a',
                title: 'b',
                description: 'c',
                price: 10
            }
        ]
        let isInCart = vi.fn()
        let addToCart = vi.fn()
        let removeFromCart = vi.fn()
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route index element={<Default/>}></Route>
                    </Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/products" element={<Products products={products} isInCart={isInCart} addToCart={addToCart} removeFromCart={removeFromCart} />}></Route>
                    <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />}></Route>
                </Routes>
            </MemoryRouter>
        )
    })

    it('should call fetch on render to fetch products from api', () => {
        expect(fetch).toHaveBeenCalledTimes(1)
    })
    it('should have sidebar component', () => {
        expect(screen.getByRole('link', {name: 'Home'})).toBeInTheDocument()
    })
    it('should display Default component as child component', () => {
        expect(screen.getByText('We have everything you need!')).toBeInTheDocument()
    })
    it('should display Home component on clicking Home link', async () => {
        let home = screen.getByText('Home')
        let user = userEvent.setup()
        await user.click(home)
        expect(screen.getByText('Fake Store')).toBeInTheDocument()
    })
    it('should display Products component on clicking Products link', async () => {
        let productsLink = screen.getByText('Products')
        let user = userEvent.setup()
        await user.click(productsLink)
        expect(screen.getAllByTestId('product')).toHaveLength(2)
    })
    it('should display Cart component on clicking Cart link', async () => {
        let cartLink = screen.getByText('Cart')
        let user = userEvent.setup()
        await user.click(cartLink)
        expect(screen.getAllByTestId('cart-item')).toHaveLength(1)
    })
})