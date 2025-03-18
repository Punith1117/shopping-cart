import { vi, describe, expect, it } from "vitest";
import App from "../src/App";
import { render } from "@testing-library/react";
import { act } from "react";

describe('App', () => {
    it('should call fetch on render to fetch products from api', () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
              json: () => Promise.resolve({product: { id: 1, title: 'shirt'}}),
            })
        );
        render(<App></App>)
        expect(fetch).toHaveBeenCalledTimes(1)
    })
})