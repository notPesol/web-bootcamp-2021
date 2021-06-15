const req = new XMLHttpRequest()

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.onload = function () {
    console.log('load SUCCESS')
    const data = JSON.parse(this.responseText)
    console.log(data.ticker.price)
}
req.onerror = function () {
    console.log('ERROR!!!!')
    console.log(this)
}

req.send()