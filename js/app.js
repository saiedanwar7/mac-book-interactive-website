
function getInputValue(field){
    const PriceField = document.getElementById(field);
    const getPriceField = parseInt(PriceField.innerText);
    return getPriceField;
}

function totalPrice(){
    const bestPrice = getInputValue('best-price-field');
    const ramPrice  = getInputValue('ram-cost-field');
    const storagePrice = getInputValue('storage-cost-field');
    const deliveryPrice = getInputValue('delivery-cost-field');
   
    document.getElementById('total-price-field').innerText = bestPrice + ramPrice + storagePrice + deliveryPrice;
    document.getElementById('total-all-price').innerText = document.getElementById('total-price-field').innerText;
}

/*----- Specification Cost Count Function-----
---------------------------------------------*/

function priceField(fieldNumber, value){
    const costField = document.getElementById(fieldNumber);
    if(value == 1){
        costField.innerText = 0;

    }
    else if(value == 2){
        costField.innerText = 180;
    }
    else if(value == 3){
        costField.innerText = 100;
    }
    else{
        costField.innerText = 20;
    }
}

/*---------- RAM add -----------
----------------------------------*/
document.getElementById('ram-8gb-btn').addEventListener('click', function(){
    priceField('ram-cost-field', 1);
    totalPrice()
})

document.getElementById('ram-16gb-btn').addEventListener('click', function(){
    priceField('ram-cost-field', 2);
    totalPrice()
})

/* ----------- Storage Add ---------
------------------------------------*/

document.getElementById('ssd-256gb-btn').addEventListener('click', function(){
        priceField('storage-cost-field', 1);
        totalPrice()       
});

document.getElementById('ssd-512gb-btn').addEventListener('click', function(){
        priceField('storage-cost-field', 3);
        totalPrice()
});


document.getElementById('ssd-1tb-btn').addEventListener('click', function(){
       priceField('storage-cost-field', 2);
       totalPrice()   
});

/* ----------- Delivery Cost Add ---------
------------------------------------------*/

document.getElementById('delivery-free-btn').addEventListener('click', function(){
    priceField('delivery-cost-field', 1);
    totalPrice() 
});

document.getElementById('delivery-paid-btn').addEventListener('click', function(){
    priceField('delivery-cost-field');
    totalPrice()
   
});

/*----------- Promo-Code ----------
-----------------------------------*/
function promoCodeApply(){
    const promoCodeInputField = document.getElementById('promo-code-inputField');
    const promoCodeInput = promoCodeInputField.value;
    const previousTotalPrice = parseFloat(document.getElementById('total-price-field').innerText);
    promoCodeInputField.value = '';

    if(promoCodeInput == 'stevekaku'){
        // ---------- 20% discount ---------
        const totalDiscount = previousTotalPrice * 0.2;  
        const totalPrice = previousTotalPrice - totalDiscount;
        document.getElementById('total-all-price').innerText = totalPrice;
    }
    else if (promoCodeInput == ''){
        alert('Please, Enter a Promo Code!!')
    }
    else{
        alert('Invalid Promo Code')
    }
}

document.getElementById('promo-code-applyBtn').addEventListener('click', function(){
   promoCodeApply()
});