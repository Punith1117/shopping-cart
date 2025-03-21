import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { beforeEach, describe, expect, it} from "vitest";
import Default from "../src/Default";

describe('Default', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<Default/>}></Route>
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
})