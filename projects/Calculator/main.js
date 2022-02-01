let inputScreen = document.getElementById('inputScreen');

let numbers = document.getElementsByClassName('number');

let operators = document.getElementsByClassName('operator');

let i = 0;

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {

        inputScreen.value += this.value;

    });
}

for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {


        let indexString = parseInt(inputScreen.value.length) - 1;

        if (inputScreen.value[indexString] === '*') {
            inputScreen.value += "";
        } else if (inputScreen.value[indexString] === '+') {
            inputScreen.value += "";
        } else if (inputScreen.value[indexString] === '-') {
            inputScreen.value += "";
        } else if (inputScreen.value[indexString] === '/') {
            inputScreen.value += "";
        } else {
            inputScreen.value += this.value;
        }

    });
}

document.getElementById('zero').addEventListener('click', function () {

    inputScreen.value += this.value;

});

document.getElementById('dote').addEventListener('click', function () {

    
   


   if( this.classList.value == 'active'){
       inputScreen.value += '';
   }
   else{
    this.classList.add('active');
    inputScreen.value += '.';
   }
        
        


 

    });

function clean() {
    inputScreen.value = "";
    document.getElementById('dote').classList.remove('active');
}

function delet() {
    var inputScreenValue = document.getElementById('inputScreen').value;
    document.getElementById('inputScreen').value = inputScreenValue.substring(0, inputScreenValue.length - 1)
}

let equal = document.getElementById('equal');

equal.addEventListener('click', function () {

    inputScreen.value = eval(inputScreen.value);
    document.getElementById('dote').classList.remove('active');

});