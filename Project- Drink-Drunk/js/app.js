function inputAge() {
    x = document.getElementById('inAge').value;
    if (x <= 0){
        document.getElementById('outAge').innerHTML = 'Wow! Devi ancora nascere e già vuoi bere? Assurdo!'
    } else if (x < 18){
        document.getElementById('outAge').innerHTML = "Ehi Poppante! Non puoi bere , ritenta fra qualche anno!"
    } else if (x > 150){
        document.getElementById('outAge').innerHTML = 'Se sei ancora vivo a questa età significa che sei immortale , quindi puoi bere quanto vuoi!'
    } else if (x > 69){
        document.getElementById('outAge').innerHTML = 'Caspita nonno! Ancora beve alla tua età?'
    } else {
        document.getElementById('outAge').innerHTML = 'Puoi bere! Ma non esagerare!'
    }
}