// remote db
var Remotets1DB = new PouchDB('https://e6b140c8-fa3f-4bf4-854a-ce9d2befab62-bluemix.cloudant.com')

// create or connect to database
var ts1DB =  new PouchDB('ts1dB', {auto_compaction: true})

// inputs
var regPupfName = document.getElementById('reg-pup-fName');
var regPupsName = document.getElementById('reg-pup-sName')
var regPupsBirth = document.getElementById('birthDate')
var specialNeeds = document.getElementById('special-needs')
var guardName = document.getElementById('guard-name')
var guardNumber = document.getElementById('guard-number')

var regStatus = document.getElementById('register-status')
// buttons
const regBtn = document.getElementById('submit-pup');
var crashBtn = document.getElementById('crash-db')

// register event
regBtn.addEventListener('click', () => {
    // inform user of register event
    regStatus.style.visibility = 'visible'
    regStatus.innerHTML = 'Creating a new record for the pupil..'

    // send deets to database 🚀
    var date = new Date();
    // var doc = {
    //     "dept": "Pupils",
    //     "Pupil_fName": regPupfNAme.value,
    //     "Pupil_sName": regPupsName.value,
    //     "Pupil_Birthdate": regPupsBirth.value,
    //     "Pupil_Needs": specialNeeds.value,
    //     "Guardian": [
    //         {
    //             "Name": guardName,
    //             "Phone_Number": guardNumber
    //         }
    //     ]
    // };

    // convert to string
    // var docPut = JSON.stringify(doc);
    ts1DB.put({
        _id: date,
        "dept": "Pupils",
        "Pupil_fName": regPupfName.value,
        "Pupil_sName": regPupsName.value,
        "Pupil_Birthdate": regPupsBirth.value,
        "Pupil_Needs": specialNeeds.value,
        "Guardian": [
             {
                 "Name": guardName.value,
                 "Phone_Number": guardNumber.value
             }
         ]
    }).then(function (response){
        console.log(response)
    })
    .catch(function (err) {
        console.log(err);
        regStatus.style.visibility = 'visible'
        regStatus.innerHTML = 'Something went wrong'
        regStatus.style.backgroundColor = '#FF1110'
        regStatus.style.color = '#000'
        crashBtn.style.visibility = 'visible'
        setTimeout(function regstat(){ regStatus.style.visibility = 'hidden'}, 10000);
        if (err.status == 500){
           regStatus.innerHTML = 'There\'s a problem with the database. Please close this application and retry.'
           regStatus.style.visibility = 'visibility'
        }
      });;

    regStatus.style.backgroundColor = '#11FF12'
    regStatus.innerHTML = 'Done!'
    setTimeout(function(){ regStatus.style.visibility = 'hidden'}, 5000);
})