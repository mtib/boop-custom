/**
    {
        "api":1,
        "name":"Swap EUR and DKK",
        "description":"Swaps EUR and DKK values in text.",
        "author":"Markus Becker",
        "icon":"translation",
        "tags":"currency,conversion"
    }
**/

function main(state) {
    state.text = state.text.replaceAll(/(\d+\.?\d+)\s?(DKK|EUR|€)/ig, (m, p1, p2) => { if (p2.toUpperCase() == "EUR" || p2 == "€") { return (Number(p1) * 7.5).toFixed(2) + " DKK" } else { return `${(Number(p1) * 1.0 / 7.5).toFixed(2)} EUR` } })
}
