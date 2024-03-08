import { getUserById } from "../functions/getUsers";
import { describe, expect, it, test, vi } from "vitest";
import { sql } from "../internal/sql";

vi.mock("../internal/sql.js", () => ({
    sql: vi.fn(function (strings, ...values) {
        const query = strings.reduce(
            (acc, str, i) => acc + str + (values[i]  || ""),
            ""
        );
        return { text: query };
    }),
}));

describe("getUserById", () => {
    it("works!", () => {
        const user = getUserById(1);
        expect(sql).toReturn({ text: "SELECT  * FROM users WHERE id=1" });
    });
});