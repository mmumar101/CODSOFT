// var buttons = document.querySelectorAll('button')
// buttons.style.backgroundColor='red'



// const number = ['yam', 'Rice', 'Beans', 'Meat', 'Fish', 'Cocumber']

//  const newnum = number.filter((num) => num.length > 3 )

var buttons = document.querySelectorAll('button')
var display = document.getElementById('display')
var operator = ''
var operand1 = ''
var operand2 = ''


function myCal(){
    var value = this.innerHTML
    if (value > 0 || value < 9 ) {
        if (operator == '') {
            operand1 += value
        } else {
            operand2 += value
        }
        display.value = operand1 + operator + operand2
    } else if ( value == '+' || value == '-' || value =='*' || value == '/' ) {
        operator = value
        display.value = operand1 + operator + operand2
    } else if (value == 'c') {
        operator = ''
        operand1 = ''
        operand2 = ''
        display.value=''
    } else if (value == '='){
        var result = eval(operand1 + operator + operand2)
        display.value = result
    }
}


for ( var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', myCal)
}