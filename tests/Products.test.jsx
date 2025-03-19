import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Products from "../src/Products";

let isInCart = vi.fn(
    (id, cart) => {
        if (cart == null || cart == undefined) return undefined
        if (cart.length == 0) return false
        for(let item of cart) {
            if (item.id == id) return true
        }
})

describe('Products', () => {
    it('should display all the products', () => {
        let products = [
            { id: 1 }, { id: 2 }, { id: 3 }
        ]
        render(<Products products={products} isInCart={isInCart}></Products>)
        let displayedProducts = screen.getAllByTestId('product')
        expect(displayedProducts).toHaveLength(3)
    })
    it('should display title, description, price of each product', () => {
        let products = [
            {
                id: 1,
                title: 'ABC',
                price: '10',
                description: 'abcd',
            }
        ]
        render(<Products products={products} isInCart={isInCart} />)
        let title = screen.getByText('ABC')
        let price = screen.getByText('10')
        let description = screen.getByText('abcd')
        expect(title).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(description).toBeInTheDocument()
    })
    it('should display image of the product', () => {
        let products = [ { id: 1, imageUrl: 'abcd'}]
        render(<Products products={products} isInCart={isInCart} />)
        let image = screen.getAllByTestId('product-image')[0]
        expect(image).toHaveAttribute('src', 'abcd')
    })
    it('should display a button to add the product to cart if the product is not in the cart', () => {
        let products = [ {id: 1} ]
        let cart = []
        render(<Products products={products} cart={cart} isInCart={isInCart} />)
        let addToCart = screen.getByRole('button', { name: 'Add To Cart' })
        expect(addToCart).toBeInTheDocument()
    })
    it('should display a button to remove the product from cart if the product is in the cart', () => {
        let products = [ {id: 1} ]
        let cart = [ {id: 1} ]
        render(<Products products={products} cart={cart} isInCart={isInCart} />)
        let removeFromCart = screen.getByRole('button', { name: 'Remove From Cart' })
        expect(removeFromCart).toBeInTheDocument()
    })
})