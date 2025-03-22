import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Cart from "../src/Cart";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Cart', () => {
    let cart = [
        {
            id: 1,
            title: 'a',
            description: 'aa',
            price: 1,
            imageUrl: 'link1'
        }, 
        {
            id: 2,
            title: 'b',
            description: 'bb',
            price: 2,
            imageUrl: 'link2'
        }
    ]
    
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Cart cart={cart}/>}></Route>
                    <Route path="/pay"></Route>
                </Routes>
            </MemoryRouter>
        )
    })
    
    it('should display all the products in cart', () => {
        let products = screen.getAllByTestId('cart-item')
        expect(products.length).toBe(cart.length)
    })
    
    it('should display title, description and price of each product', () => {
        expect(screen.getByText(cart[0].title)).toBeInTheDocument()
        expect(screen.getByText(cart[0].description)).toBeInTheDocument()
        expect(screen.getByText(cart[0].price)).toBeInTheDocument()
    })
    
    it('should display image with imageUrl', () => {
        let image = screen.getAllByRole('img', {name: 'product-image'})[0]
        expect(image).toHaveAttribute('src', 'link1')
    })
    
    it('should display remove-from-cart button', () => {
        let button = screen.getAllByText('Remove From Cart')[0]
        expect(button).toBeInTheDocument()
    })
    
    it('should display total price to pay', () => {
        let expectedTotal = cart.reduce((total, product) => total + product.price, 0);
        expect(screen.getByText(expectedTotal)).toBeInTheDocument()
    })
    
    it('should display link to pay and place order', () => {
        let link = screen.getByRole('link', {name: 'Pay and Place Order'})
        expect(link).toBeInTheDocument()
    })
})

describe('Remove-From-Cart button', () => {
    let cart = [
        {
            id: 1,
            title: 'a',
            description: 'aa',
            price: 1,
            imageUrl: 'link1'
        }, 
        {
            id: 2,
            title: 'b',
            description: 'bb',
            price: 2,
            imageUrl: 'link2'
        }
    ]
    let removeFromCart = vi.fn()

    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}></Route>
                    <Route path="/pay"></Route>
                </Routes>
            </MemoryRouter>
        )
    })
    
    it('should call removeFromCart function on click', async () => {
        let button = screen.getAllByText('Remove From Cart')[0]
        let user = userEvent.setup()
        await user.click(button)
        expect(removeFromCart).toBeCalledTimes(1)
    })
    
    it('should call removeFromCart function with product id and cart as parameter', async () => {
        let button = screen.getAllByText('Remove From Cart')[0]
        let user = userEvent.setup()
        await user.click(button)
        expect(removeFromCart).toHaveBeenCalledWith(1)
    })
})