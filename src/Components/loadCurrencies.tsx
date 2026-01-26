export default function LoadCurrencies() {
    const currencySelect = document.getElementsByClassName("paycurrency")[0] as HTMLSelectElement;
    if (currencySelect.options.length > 0) return;

    fetch("https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json")
        .then((response) => response.json())
        .then((data) => {
            for (const currencyCode in data) {
                currencySelect.add(new Option(currencyCode, currencyCode));
            }
        });
}