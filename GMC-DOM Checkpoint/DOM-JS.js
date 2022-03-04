var likeButton = document.getElementsByClassName("heart-off");
var removeButton = document.getElementsByClassName("remove");
var itemDiv = document.getElementsByClassName('item');
var numbersDiv = document.getElementsByClassName('numbers');
var addition = document.getElementsByClassName("addition");
var subtraction = document.getElementsByClassName("minus-sign");
var quantity = document.getElementsByClassName('quantity');
var price = document.getElementsByClassName('price');
var total = document.getElementsByClassName('total');
var subTotal = document.getElementById('subtotal');

console.log(numbersDiv)




for(let i=0; i < likeButton.length; i++){
    likeButton[i].addEventListener('click', function(){
        likeButton[i].classList.toggle('heart-on');
    });
}

for(let i = 0; i < removeButton.length; i++){
    removeButton[i].addEventListener('click', function() {
        itemDiv[i].classList.add('remove-div');
        numbersDiv[i].style.display ="none"
        subTotal.innerHTML = +subTotal.innerHTML - +total[i].innerHTML;
    });
}

for(let i=0; i < addition.length; i++){
    addition[i].addEventListener('click', function() {
        quantity[i].innerHTML++;
        total[i].innerHTML = +price[i].innerHTML * +quantity[i].innerHTML;
        subTotal.innerHTML = +subTotal.innerHTML + +price[i].innerHTML;
    } )
}

for(let i=0; i < addition.length; i++){
    subtraction[i].addEventListener('click', function() {
        if(quantity[i].innerHTML == 0) {
            itemDiv[i].classList.add('remove-div');
            numbersDiv[i].style.display ="none"
        }else{
            quantity[i].innerHTML--;
            total[i].innerHTML = +price[i].innerHTML * +quantity[i].innerHTML;
            subTotal.innerHTML = +subTotal.innerHTML - +price[i].innerHTML;
        }
    } )
}


