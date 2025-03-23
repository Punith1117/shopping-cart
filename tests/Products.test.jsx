import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Products from "../src/Products";
import userEvent from "@testing-library/user-event";

let addToCartFunc = vi.fn()
let removeFromCartFunc = vi.fn()

vi.mock('react-router-dom', () => {
    return {
        useOutletContext: () => ({
            products: [
                {
                    id: 1,
                    title: 'A',
                    price: '3',
                    description: 'a',
                    image: 'a'
                },
                {
                    id: 2,
                    title: 'B',
                    price: '6',
                    description: 'b',
                    image: 'b'
                },
                {
                    id: 3,
                    title: 'C',
                    price: '9',
                    description: 'c',
                    image: 'c'
                }
            ],
            isInCart: (id) => {
                let cart = [
                    {
                        id: 3,
                        title: 'C',
                        price: '10',
                        description: 'c',
                        image: 'c'
                    }
                ]
                return cart.some(item => item.id === id);
            },
            addToCart: addToCartFunc,
            removeFromCart: removeFromCartFunc
        })
    }
})

describe('Products', () => {
    it('should display all the products', () => {
        render(<Products ></Products>)
        let displayedProducts = screen.getAllByTestId('product')
        expect(displayedProducts).toHaveLength(3)
    })
    it('should display title, description, price of each product', () => {
        render(<Products />)
        let title = screen.getByText('A')
        let price = screen.getByText('3')
        let description = screen.getByText('a')
        expect(title).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(description).toBeInTheDocument()
    })
    it('should display image of the product', () => {
        render(<Products />)
        let image = screen.getAllByTestId('product-image')[0]
        expect(image).toHaveAttribute('src', 'a')
    })
    it('should display a button to add the product to cart if the product is not in the cart', () => {
        render(<Products />)
        let buttons = screen.getAllByRole('button', { name: 'Add To Cart' })
        expect(buttons).toHaveLength(2)
    })
    it('should display a button to remove the product from cart if the product is in the cart', () => {
        render(<Products />)
        let buttons = screen.getAllByRole('button', { name: 'Remove From Cart' })
        expect(buttons).toHaveLength(1)
    })
})

describe('Add To Cart button', () => {
    it('should call addToCart function on click with product object as parameter', async () => {
        render(<Products />)
        let user = userEvent.setup()
        let addButton = screen.getAllByRole('button', { name: 'Add To Cart' })[0]
        await user.click(addButton)
        expect(addToCartFunc).toHaveBeenCalledWith({
            id: 1,
            title: 'A',
            price: '3',
            description: 'a',
            image: 'a'
        })
    })
})

describe('Remove From Cart button', () => {
    it('should call removeFromCart function on click', async () => {
        render(<Products />)
        let user = userEvent.setup()
        let removeButton = screen.getByRole('button', { name: 'Remove From Cart' })
        await user.click(removeButton)
        expect(removeFromCartFunc).toHaveBeenCalledWith(3)
    })
})