document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const exchangeRate = 14.75;
    const currencyOption = document.getElementById('currency-option').value;
    let convertedAmount;

    if (!isNaN(amount)) {
        if (currencyOption === 'RtoC') {
            // Convertir de CLP a ROBUX
            convertedAmount = amount * exchangeRate;
            document.getElementById('converted-amount').textContent = `CLP: ${convertedAmount.toFixed(2)}`;
        } else {
            // Convertir de ROBUX a CLP
            convertedAmount = amount / exchangeRate;
            document.getElementById('converted-amount').textContent = `ROBUX: ${convertedAmount.toFixed(2)}`;
        }
    }
});
