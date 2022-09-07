const labelFromCurrency = document.getElementById('from_currency')
const labelToCurrency = document.getElementById('to_currency')
const inputFromAmmount = document.getElementById('from_ammount')
const inputToAmmount = document.getElementById('to_ammount')
const valueConverted = document.getElementById('valueConverted')
const swapButton = document.getElementById('swap')

labelFromCurrency.addEventListener('change', convert)
labelToCurrency.addEventListener('change', convert)
inputFromAmmount.addEventListener('input', convert)
inputToAmmount.addEventListener('input', convert)
swapButton.addEventListener('click', infoSwap)

main()

function main() {
    let currency = {
        "BRL": "Real",
        "EUR": "Euro",
        "USD": "Dolar"
    }
    options = []
    for (let [key, value] of Object.entries(currency)){
        options.push(`<option value='${key}'>${value}</option>`)
    }

    labelFromCurrency.innerHTML = options.join('\n')
    labelFromCurrency.value = "USD"
    labelToCurrency.innerHTML = options.join('\n')
    convert()
}

function infoSwap() {
    let temp = labelFromCurrency.value
    labelFromCurrency.value = labelToCurrency.value
    labelToCurrency.value = temp 
    convert()
}

async function getURL(url) {
    return (await fetch(url)).json()
}

function getInfoSelect(select) {
    return select.options[select.selectedIndex].text
}

async function convert() {
    let from = labelFromCurrency.value
    let to = labelToCurrency.value

    let { rates } = await getURL(`https://api.exchangerate-api.com/v4/latest/${from}`)
    
    let rate = rates[to]
    valueConverted.innerText = `1 ${getInfoSelect(labelFromCurrency)} = ${rate} ${getInfoSelect(labelToCurrency)}`
    inputToAmmount.value = (inputFromAmmount.value * rate).toFixed(2)
}