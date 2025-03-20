import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Cart from "../src/Cart";


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
        render(<Cart cart={cart}/>)
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
})