import { describe, expect, it } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";

describe('App', () => {
    it('heading should have text Vite + React', () => {
        render(<App></App>)
        expect(screen.getByRole('heading').textContent).toBe('Vite + React')
    })
})