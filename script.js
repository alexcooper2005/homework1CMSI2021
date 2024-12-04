document.addEventListener('DOMContentLoaded', () => {
    const principalInput = document.querySelector("#principal");
    const periodInput = document.querySelector("#period");
    const aprInput = document.querySelector("#interest");
    const yearsInput = document.querySelector("#years");
    const amountOutput = document.querySelector("#interestOutput");
    const totalOutput = document.querySelector("#totalOutput");

    function updateSliderValue(value) {
        document.getElementById("sliderInput").textContent = value;
    }

    function calculateInterest() {
        const principal = parseFloat(principalInput.value);
        const period = parseFloat(periodInput.value);
        const apr = parseFloat(aprInput.value) / 100;
        const years = parseFloat(yearsInput.value);

        if (
            isNaN(principal) || principal <= 0 ||
            isNaN(period) || period <= 0 ||
            isNaN(apr) || apr <= 0 ||
            isNaN(years) || years <= 0
        ) {
            amountOutput.textContent = "$0.00";
            totalOutput.textContent = "$0.00";
            return;
        }

        const totalAmount = principal * (1 + apr / period) ** (years * period);
        const interest = totalAmount - principal;

        amountOutput.textContent = "$" + interest.toFixed(2);
        totalOutput.textContent = "$" + totalAmount.toFixed(2);
    }
    principalInput.addEventListener("input", calculateInterest);
    periodInput.addEventListener("input", calculateInterest);
    aprInput.addEventListener("input", () => updateSliderValue(aprInput.value));
    yearsInput.addEventListener("input", calculateInterest);
});