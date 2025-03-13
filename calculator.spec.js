describe("Loan Calculator", function() {
    it("should calculate the monthly payment correctly", function() {
        expect(calculateMonthlyPayment(10000, 5, 5)).toBe("188.71");
    });

    it("should handle zero interest rate", function() {
        expect(calculateMonthlyPayment(12000, 4, 0)).toBe("250.00");
    });
});
