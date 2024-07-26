const clock = document.querySelector('#clock');
//now in order to keep our clock updating time after each second we have another method and that is:
setInterval(function() {
    let date = new Date(); //This is the object that we have in javascript
    clock.innerHTML = date.toLocaleTimeString();
})