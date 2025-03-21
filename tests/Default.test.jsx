import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { beforeEach, describe, expect, it, vi} from "vitest";
import Default from "../src/Default";
import userEvent from "@testing-library/user-event";

describe('Default', () => {
    beforeEach(() => {
        let Mock = vi.fn(() => {
            return(
                <div>Products</div>
            )
        })
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<Default/>}></Route>
                    <Route path="/products" element={<Mock/>}></Route>
                </Routes>
            </MemoryRouter>
        )
    })
    it('should display catching line', () => {
        let catchingLine = screen.getByText('We have everything you need!')
        expect(catchingLine).toBeInTheDocument()
    })
    it('should display all - electronics, jewelery, women and men\'s categories of products available', () => {
        let electronics = screen.getByText('electronics')
        let jewelery = screen.getByText('jewelery')
        let menClothing = screen.getByText('men\'s clothing')
        let womenClothing = screen.getByText('women\'s clothing')

        expect(electronics).toBeInTheDocument()
        expect(jewelery).toBeInTheDocument()
        expect(menClothing).toBeInTheDocument()
        expect(womenClothing).toBeInTheDocument()
    })
    it('should navigate to products page on clicking Shop-Now', async () => {
        let link = screen.getByText('Shop Now')
        let user = userEvent.setup()
        await user.click(link)
        expect(screen.getByText('Products')).toBeInTheDocument()
    })
})