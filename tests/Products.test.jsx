import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Products from "../src/Products";
import userEvent from "@testing-library/user-event";

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

describe('Add To Cart button', () => {
    it('should call addToCart function on click with product object as parameter', async () => {
        let products = [ {id: 1}]
        let cart = []
        let addToCart = vi.fn()
        render(<Products products={products} cart={cart} isInCart={isInCart} addToCart={addToCart} />)
        let user = userEvent.setup()
        let addButton = screen.getByRole('button', { name: 'Add To Cart' })
        await user.click(addButton)
        expect(addToCart).toHaveBeenCalledWith({id: 1}, cart)
    })
})

describe('Remove From Cart button', () => {
    it('should call removeFromCart function on click', async () => {
        let products = [ {id: 2}]
        let cart = [ {id: 2} ]
        let removeFromCart = vi.fn()
        render(<Products products={products} cart={cart} isInCart={isInCart} removeFromCart={removeFromCart} />)
        let user = userEvent.setup()
        let removeButton = screen.getByRole('button', { name: 'Remove From Cart' })
        await user.click(removeButton)
        expect(removeFromCart).toHaveBeenCalledWith(2, cart)
    })
})