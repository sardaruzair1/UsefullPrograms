function convertCurrency() {
    // Get the input value in US dollars
    var usdPrice = parseFloat(document.getElementById("usdInput").value);

    // Conversion rates
    var kuwaitConversionRate = 0.303;   // 1 USD = 0.303 KWD
    var omanConversionRate = 0.385;     // 1 USD = 0.385 OMR
    var uaeConversionRate = 3.67;       // 1 USD = 3.67 AED

    // Convert the price to Kuwaiti dinar
    var kuwaitPrice = (usdPrice * kuwaitConversionRate).toFixed(2);
    document.getElementById("kuwaitInput").value = kuwaitPrice;

    // Convert the price to Omani rial
    var omanPrice = (usdPrice * omanConversionRate).toFixed(2);
    document.getElementById("omanInput").value = omanPrice;

    // Convert the price to UAE dirham
    var uaePrice = (usdPrice * uaeConversionRate).toFixed(2);
    document.getElementById("uaeInput").value = uaePrice;
  }