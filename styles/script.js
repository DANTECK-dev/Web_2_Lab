window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
    window.setInterval(function(){
        var now = new Date();
        var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
}
