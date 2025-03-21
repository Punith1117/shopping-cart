import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Home from "../src/Home";

describe('Home', () => {
    beforeEach(() => {
        render(<Home/>)
    })
    it('should display brand name', () => {
        expect(screen.getByText('Fake Store')).toBeInTheDocument()
    })
})