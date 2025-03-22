import { vi, describe, expect, it, beforeEach } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Products from "../src/Products";
import Home from "../src/Home";
import Cart from "../src/Cart";

describe('App', () => {
    beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
              json: () => Promise.resolve({product: { id: 1, title: 'shirt'}}),
            })
        );
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<App/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
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
})