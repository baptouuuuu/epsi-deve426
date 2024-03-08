import { getProductTitle } from "../functions/getProductTitle";
import { expect, it, test, vi } from "vitest";

// Si on envoie produit 1 cela dois être égla à Iphone 9

const mockFetch = (url) => {
        return {
            json: () => ({ title: "iPhone 9" }),
        };
    };

test("Should return the title of the product", async () => {
    vi.stubGlobal("fetch", mockFetch);

    const title = await getProductTitle(1);
    expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products/1");
    expect(title).toEqual("iPhone 9");
});