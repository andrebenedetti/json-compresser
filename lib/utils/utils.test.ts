const { longestSubtring } = require(".")

describe("longestRepeatingSubstring", () => {
    it('should find the longest repeating substring when provided with 3 strings', () => {
        expect(longestSubtring("aaaab", "aaaabccc", "aazzzzzzzz")).toBe("aa")
        expect(longestSubtring("Accessories", "Accessories", "Accessories")).toBe("Accessories")
    })
})