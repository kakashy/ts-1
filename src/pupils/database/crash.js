// create or connect to database
var ts1DB =  new PouchDB('ts1dB')

var regStatus = document.getElementById('register-status')

// grab btn
var crashBtn = document.getElementById('crash-db')

crashBtn.addEventListener('click', () => {
    ts1DB.destroy().then(function (response){
        regStatus.innerHTML = 'The old database has been deleted and a new one has been made'
        regStatus.style.visibility = 'visible'
        regStatus.style.backgroundColor = '#11FF12'
        setTimeout(function regstat(){ regStatus.style.visibility = 'hidden'}, 5000);
        crashBtn.style.visibility = 'hidden'
    }).catch(function (err){
        console.log(err)
        regStatus.innerHTML = 'Something else went wrong 😮. Please contact admin'
        regStatus.style.visibility = 'visible'
        regStatus.style.backgroundColor = '#FF1110'
        setTimeout(function reghide(){ regStatus.style.visibility = 'hidden'}, 150000);
    })
    ts1DB.close()
})