import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Products from "../src/Products";

describe('Products', () => {
    it('should display all the products', () => {
        let products = [
            { id: 1 }, { id: 2 }, { id: 3 }
        ]
        render(<Products products={products}></Products>)
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
        render(<Products products={products}/>)
        let title = screen.getByText('ABC')
        let price = screen.getByText('10')
        let description = screen.getByText('abcd')
        expect(title).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(description).toBeInTheDocument()
    })
    it('should display image of the product', () => {
        let products = [ { id: 1, imageUrl: 'abcd'}]
        render(<Products products={products}/>)
        let image = screen.getAllByTestId('product-image')[0]
        expect(image).toHaveAttribute('src', 'abcd')
    })
})