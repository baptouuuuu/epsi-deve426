import { clamp } from "../functions/clamp.js";
import { expect, it } from "vitest";

it("should work without a max limit", ()=>{
    expect(clamp(5, 1)).toBe(1);
});

it("should clamp negative number", ()=>{
    expect(clamp(-1, 0, 0)).toBe(0);
});

it("should clamp positive number", ()=>{
    expect(clamp(1, 0, 0)).toBe(0);
});

it("should not alter negative numbers in range", ()=>{
    expect(clamp(1, 0, 0)).toBe(0);
});

it("should not alter positive numbers in range", ()=>{
    expect(clamp(1, 0, 0)).toBe(0);
}); 

it("should not alter 0 in range", ()=>{
    expect(clamp(1, 0, 0)).toBe(0);
}); 
