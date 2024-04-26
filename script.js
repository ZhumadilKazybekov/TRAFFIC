function TraficLight () {
    const red = document.getElementById('red');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');

    function Red() {
        red.style.backgroundColor='red';
        yellow.style.backgroundColor='rgb(131, 131, 3)';
        green.style.backgroundColor='green';
        setTimeout(Yellow, 2000);
    }

    function Yellow() {
        red.style.backgroundColor='rgb(118, 3, 3)';
        yellow.style.backgroundColor='yellow';
        green.style.backgroundColor='green';
        setTimeout(Green, 2000);
    }

    function Green() {
        red.style.backgroundColor='rgb(118, 3, 3)';
        yellow.style.backgroundColor='rgb(131, 131, 3)';
        green.style.backgroundColor='greenYellow';
        setTimeout(Red, 2000);
    }

    Red();
}

TraficLight();