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



from.addEventListener('input', function(){
    var fromValue = parseFloat(from.value);
    var toValue = to.value;

    if(from.placeholder === 'kilogram' && to.placeholder === 'gram'){
        toValue = fromValue * 1000;
    }
    // to.value = fromInput * 1000;
    

})

// from.addEventListener('click', toggleMassItem);
arrow.addEventListener('click', toggleMassItem);
// to.addEventListener('click', toggleMassItem2);
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

