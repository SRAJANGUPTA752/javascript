const form = document.querySelector('form');
console.log(form);
//now we want to prevent the default operations that one can perform on form hence to do so we can do:
form.addEventListener('submit', function(e) {
    e.preventDefault();
    //now we will access the height and weight that the user will inout into the system
    const height = document.querySelector('#height').value; //this .value helps us to get the value of the element that we are selecting
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#results');
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'please enter a valid height';
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please enter a valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `your bmi is ${bmi}`;
    }

});