function calculateMonthlyPayment(principal, years, rate) {
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    if (monthlyRate === 0) return (principal / n).toFixed(2);
    const payment = (principal * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -n));
    return payment.toFixed(2);
}

document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const years = parseFloat(document.getElementById('years').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const monthly = calculateMonthlyPayment(amount, years, rate);
    document.getElementById('monthly-payment').innerText = 'Monthly Payment: $' + monthly;
});
