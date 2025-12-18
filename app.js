const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/";
const options = document.querySelectorAll(".currency-box select");

for (select of options) {
    for (currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.value = currcode;
        newOption.innerText = currcode;
        select.append(newOption);
        if (select.name === "from" && currcode === "USD") {
            newOption.selected = true;
        if (select.name === "to" && currcode === "BDT") {
            newOption.selected = true;
        }
    }
    select.addEventListener("change", event => {
        loadFlag(event.target);
    });
}


loadFlag = (event) => {
    let currcode = event.value;
    let countrycode = countryList[currcode];
    // console.log(countrycode);

    if (event.name === "from") {
        let imgTagFrom = document.querySelector("#imgFrom");
        imgTagFrom.src = `https://flagsapi.com/${countrycode}/flat/64.png`;
    }
    if (event.name === "to") {
        let imgTagTo = document.querySelector("#imgTo");
        imgTagTo.src = `https://flagsapi.com/${countrycode}/flat/64.png`;
    }
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let amount = document.querySelector(".field input");
    let amountValue = amount.value;
    if (amountValue === "" || amountValue === "0" || amountValue < 0 || amountValue === null) {
        amountValue = 1;
        amount.value = "1";

    }
    // console.log(amountValue);
    convertCurrency(amountValue);
});
const convertCurrency = async (amount) => {
    let fromCurrency = document.querySelector(".currency-box select[name='from']").value;
    let toCurrency = document.querySelector(".currency-box select[name='to']").value;

    let fromCurrencyLower = fromCurrency.toLowerCase();
    let toCurrencyLower = toCurrency.toLowerCase();
    console.log(fromCurrencyLower);
    console.log(toCurrencyLower);
    const url = `${BASE_URL}/${fromCurrencyLower}.json`;

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

    const rates = data[fromCurrencyLower];
    console.log(rates);
    if (!rates) {
        console.error("Rates not found in response:", data);
        return;
    }

    const exchangeRate = rates[toCurrencyLower];
    if (exchangeRate === undefined) {
        console.error(`Exchange rate for ${toCurrencyLower} not found`);
        return;
    }

    const totalExchangedAmount = (amount * exchangeRate).toFixed(2);
    const exchangeRateText = document.querySelector(".result");
    exchangeRateText.innerText = `${amount} ${fromCurrency} = ${totalExchangedAmount} ${toCurrency}`;


};
