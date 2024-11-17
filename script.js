var from = document.getElementById('from');
var to = document.getElementById('to');
var fromInput = from.value;
var massList = document.getElementById('mass-list');
var selectMass = document.querySelectorAll('#mass-list p');
var arrow = document.getElementById('arrow');
var massList2 = document.getElementById('mass-list2');
var selectMass2 = document.querySelectorAll('#mass-list2 p');
var arrow2 = document.getElementById('arrow2');
var section = document.getElementById('section');



from.addEventListener('input', function() {
    var fromValue = parseFloat(from.value);//ensures that the value is treated as a number for calculation.
    var toValue;

    if (from.placeholder === 'Kilogram' && to.placeholder === 'Gram') {
        toValue = fromValue * 1000;
        to.value = toValue;
    }else if (from.placeholder === 'Kilogram' && to.placeholder === 'Pounds') {
        toValue = fromValue * 2.20462;
        to.value = toValue;
    }else if (from.placeholder === 'Kilogram' && to.placeholder === 'Kilogram') {
        toValue = fromValue;
        to.value = toValue;
    }else if (from.placeholder === 'Kilogram' && to.placeholder === 'Milligram') {
        toValue = fromValue * 1000000;
        to.value = toValue;
    }else if (from.placeholder === 'Gram' && to.placeholder === 'Gram') {
        toValue = fromValue;
        to.value = toValue;
    }else if (from.placeholder === 'Gram' && to.placeholder === 'Kilogram') {
        toValue = fromValue / 1000;
        to.value = toValue;
    }else if (from.placeholder === 'Gram' && to.placeholder === 'Milligram') {
        toValue = fromValue * 1000;
        to.value = toValue;
    }else if (from.placeholder === 'Gram' && to.placeholder === 'Pounds') {
        toValue = fromValue * 0.00220462;
        to.value = toValue;
    }else if (from.placeholder === 'Milligram' && to.placeholder === 'Gram') {
        toValue = fromValue / 1000;
        to.value = toValue;
    }else if (from.placeholder === 'Milligram' && to.placeholder === 'Kilogram') {
        toValue = fromValue / 1000000;
        to.value = toValue;
    }else if (from.placeholder === 'Milligram' && to.placeholder === 'Milligram') {
        toValue = fromValue;
        to.value = toValue;
    }else if (from.placeholder === 'Milligram' && to.placeholder === 'Pounds') {
        toValue = fromValue / 453592;
        to.value = toValue;
    }else if (from.placeholder === 'Pounds' && to.placeholder === 'Gram') {
        toValue = fromValue / 0.00220462;
        to.value = toValue;
    }else if (from.placeholder === 'Pounds' && to.placeholder === 'Kilogram') {
        toValue = fromValue / 2.20462;
        to.value = toValue;
    }else if (from.placeholder === 'Pounds' && to.placeholder === 'Milligram') {
        toValue = fromValue * 453592;
        to.value = toValue;
    }else if (from.placeholder === 'Pounds' && to.placeholder === 'Pounds') {
        toValue = fromValue;
        to.value = toValue;
    }
})

to.addEventListener('input', function(){
    var toValue = parseFloat(to.value);
    var fromValue;

    if(to.placeholder === 'Gram' && from.placeholder === 'Gram'){
        fromValue = toValue;
        from.value = fromValue;
    }else if(to.placeholder === 'Gram' && from.placeholder === 'Kilogram'){
        fromValue = toValue / 1000;
        from.value = fromValue;
    }else if(to.placeholder === 'Gram' && from.placeholder === 'Milligram'){
        fromValue = toValue * 1000;
        from.value = fromValue;
    }else if(to.placeholder === 'Gram' && from.placeholder === 'Pounds'){
        fromValue = toValue * 0.00220462;
        from.value = fromValue;
    }else if(to.placeholder === 'Kilogram' && from.placeholder === 'Gram'){
        fromValue = toValue * 1000;
        from.value = fromValue;
    }else if(to.placeholder === 'Kilogram' && from.placeholder === 'Kilogram'){
        fromValue = toValue;
        from.value = fromValue;
    }else if(to.placeholder === 'Kilogram' && from.placeholder === 'Milligram'){
        fromValue = toValue * 1000000;
        from.value = fromValue;
    }else if(to.placeholder === 'Kilogram' && from.placeholder === 'Pounds'){
        fromValue = toValue * 2.20462;
        from.value = fromValue;
    }else if(to.placeholder === 'Milligram' && from.placeholder === 'Gram'){
        fromValue = toValue / 1000;
        from.value = fromValue;
    }else if(to.placeholder === 'Milligram' && from.placeholder === 'Kilogram'){
        fromValue = toValue / 1000000;
        from.value = fromValue;
    }else if(to.placeholder === 'Milligram' && from.placeholder === 'Milligram'){
        fromValue = toValue;
        from.value = fromValue;
    }else if(to.placeholder === 'Milligram' && from.placeholder === 'Pounds'){
        fromValue = toValue / 453592;
        from.value = fromValue;
    }else if(to.placeholder === 'Pounds' && from.placeholder === 'Gram'){
        fromValue = toValue / 0.00220462;
        from.value = fromValue;
    }else if(to.placeholder === 'Pounds' && from.placeholder === 'Kilogram'){
        fromValue = toValue / 2.20462;
        from.value = fromValue;
    }else if(to.placeholder === 'Pounds' && from.placeholder === 'Milligram'){
        fromValue = toValue * 453592;
        from.value = fromValue;
    }else if(to.placeholder === 'Pounds' && from.placeholder === 'Pounds'){
        fromValue = toValue;
        from.value = fromValue;
    }
})

// event for clearing fields
from.addEventListener('input', removeField);
to.addEventListener('input', removeField);

function removeField(e){
    if (from.value === '' || to.value === '') {
        from.value = '';
        to.value = '';
    }
}

// event to toggle list item
arrow.addEventListener('click', toggleMassItem);

arrow2.addEventListener('click', toggleMassItem2);


// toggles the listItem
function toggleMassItem(event) {
    massList.classList.toggle('hide');
    arrow.classList.toggle('rotate');
    event.stopPropagation();
    console.log('hello');
    massList2.classList.add('hide');
    arrow2.classList.remove('rotate');
}

function toggleMassItem2(event) {
    massList2.classList.toggle('hide');
    arrow2.classList.toggle('rotate');
    event.stopPropagation();
    console.log('hello');
    massList.classList.add('hide');
    arrow.classList.remove('rotate');
}

// removes the listItem when i click on the body
document.addEventListener('click', function () {
    if (!massList.classList.contains('hide')) {
        massList.classList.add('hide'); // Hide the element
        arrow.classList.toggle('rotate');  
    }
})

document.addEventListener('click', function () {
    if (!massList2.classList.contains('hide')) {
        massList2.classList.add('hide'); // Hide the element
        arrow2.classList.toggle('rotate');  
    }
})

// select item
selectMass.forEach(mass => {
    mass.addEventListener('click', function(event) {
        from.placeholder = this.textContent;
    })
})

selectMass2.forEach(mass2 => {
    mass2.addEventListener('click', function(event) {
        to.placeholder = this.textContent;
        massList2.classList.toggle('hide');
        arrow2.classList.remove('rotate');
    })
})

