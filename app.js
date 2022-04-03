function productUpdateNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }

    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;
    // Getting Case Total 
    const procutTotal = document.getElementById(product + '-total');
    procutTotal.innerText = productNumber * price;

    calculateTotal()
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseFloat(productInput.value);

    return productNumber;

}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    
    // Update on html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// Phone Increasing and Decreasing 

document.getElementById('phone-plus').addEventListener('click', function(){
    productUpdateNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    productUpdateNumber('phone', 1219, false);
})

// Case Increaseing and Decreasing  


document.getElementById('case-plus').addEventListener('click', function(){
    productUpdateNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    productUpdateNumber('case', 59, false);
})