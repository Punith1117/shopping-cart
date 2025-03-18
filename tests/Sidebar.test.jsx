import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Sidebar from "../src/Sidebar";
import { MemoryRouter } from "react-router-dom";

describe('Sidebar', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Sidebar/>
            </MemoryRouter>
        )
    })
    it('should contain link to navigate to home page', () => {
        let home = screen.getByText('Home')
        expect(home).toBeInTheDocument()
    })
    it('should contain link to navigate to products page', () => {
        let products = screen.getByText('Products')
        expect(products).toBeInTheDocument()
    })
    it('should contain link to navigate to cart page', () => {
        let cart = screen.getByText('Cart')
        expect(cart).toBeInTheDocument()
    })
})