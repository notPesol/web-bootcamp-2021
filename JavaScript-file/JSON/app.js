const data1 = '{ "ticker": { "base": "BTC", "target": "USD", "price": "40401.40029915", "volume": "73005.39293210", "change": "143.49024023" }, "timestamp": 1623677042, "success": true, "error": "" }'

const data2 = {
    "ticker": {
        "base": "BTC",
        "target": "USD",
        "price": "40451.74690186",
        "volume": "48491.20425158",
        "change": "-4.62995532",
        "markets": [
            {
                "market": "BitFinex",
                "price": "40430.00000000",
                "volume": 9487.08766412
            },
            {
                "market": "Bitstamp",
                "price": "40482.03000000",
                "volume": 6001.35723704
            },
            {
                "market": "Bittrex",
                "price": "40459.51000000",
                "volume": 571.89737344
            },
            {
                "market": "Cex.io",
                "price": "40446.70000000",
                "volume": 238.37134066
            },
            {
                "market": "Coinbase Pro",
                "price": "40445.00000000",
                "volume": 20856.00075708
            },
            {
                "market": "Exmo",
                "price": "40459.95000000",
                "volume": 361.67481141
            },
            {
                "market": "Hitbtc",
                "price": "40437.12705000",
                "volume": 1588.80035
            },
            {
                "market": "Kraken",
                "price": "40470.80000000",
                "volume": 9381.50203099
            },
            {
                "market": "YoBit",
                "price": "41242.02968887",
                "volume": 4.51268684
            }
        ]
    },
    "timestamp": 1623728823,
    "success": true,
    "error": ""
}
const obj1 = JSON.parse(data1)

for (let i = 0; i < data2.ticker.markets.length; i++) {
    console.log(data2.ticker.markets[i].market)
    console.log(data2.ticker.markets[i].price)
    console.log('#############################')
}