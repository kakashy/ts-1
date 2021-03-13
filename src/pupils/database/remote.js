// remote db
var Remotets1DB = new PouchDB('apikey-b0a7c4121b5c4a799196dd2164bb5f6b:dddf59c06d2180203c9ae04231ecdd3f787ed6b8@https://e6b140c8-fa3f-4bf4-854a-ce9d2befab62-bluemix.cloudant.com/ts1')

// create or connect to database
var ts1DB =  new PouchDB('ts1dB')
var ts1dB =  new PouchDB('ts1DB')

// grab cloud btn
var cloudBtn = document.getElementById('cloud-btn')
var cloudCancelBtn = document.getElementById('cloud-cancel-btn')

var syncStatus = document.getElementById('sync-status')

// sync
cloudBtn.addEventListener('click', () => {
//    var sync = PouchDB.sync(ts1DB, Remotets1DB, {
//      live: true
//    }).on('change', function (info) {
//      // handle change
//        console.log(info)
//
//    }).on('paused', function (err) {
//      // replication paused (e.g. replication up to date, user went offline)
//        console.log(err)
//
//    }).on('active', function () {
//      // replicate resumed (e.g. new changes replicating, user went back online)
//        console.log('We are back 🎉')
//
//    }).on('denied', function (err) {
//      // a document failed to replicate (e.g. due to permissions)
//        console.log(err)
//    }).on('complete', function (info) {
//      // handle complete
//        console.log(info)
//
//    }).on('error', function (err) {
//      // handle error
//        console.log(err)
//      sync.cancel()
//    });

    // sync.cancel();

 var sync = ts1DB.replicate.from(ts1dB)
  
  .on('change', function (info) {
      // handle change
      cloudBtn.style.color = '#0FD2FF'
      console.log('Change on replication')

  }).on('paused', function (err) {
    // replication paused (e.g. replication up to date, user went offline)
    cloudBtn.style.color = '#11FF12'
  }).on('active', function () {
      // replicate resumed (e.g. new changes replicating, user went back online)
      cloudBtn.style.color = '#FF5112'
      console.log('Active on replication')
  }).on('denied', function (err) {
      // a document failed to replicate (e.g. due to permissions)
      cloudBtn.style.color = '#FF1110'
  })
.on('error', function(err){
      console.log(err)
      cloudBtn.style.color = '#FF1110'

})

  .on('complete', function (info){
    console.log(info)
    console.log('Replication is complete. Should be syncing now')   
    var trueSync = PouchDB.sync(ts1DB, ts1dB, {
      live: 'true',
      retry: 'true'
  })
  .on('change', function (info) {
      // handle change
      cloudBtn.style.color = '#0FD2FF'
      console.log('Chaange')
    }).on('paused', function (err) {
      // replication paused (e.g. replication up to date, user went offline)
      cloudBtn.style.color = '#11FF12'
      console.log('Sync: Everything\'s up to date')
    }).on('active', function () {
      // replicate resumed (e.g. new changes replicating, user went back online)
      cloudBtn.style.color = '#FF5112'
      console.log('Sync: Online! Sync is syncing')
    }).on('denied', function (err) {
      // a document failed to replicate (e.g. due to permissions)
      cloudBtn.style.color = '#FF1110'
      console.log(err)
    })
  .on('complete', function(info){
      console.log(info)
      cloudBtn.style.color = '#11FF12'
      console.log('Sync: Complete!')
  })
  .on('error', function(err){
      console.log('We ran into an error: ' + err)
      cloudBtn.style.color = '#FF1110'
  })

})
    cloudCancelBtn.style.visibility = 'visible'
    cloudCancelBtn.style.color = '#e80000'

cloudCancelBtn.addEventListener('click', () => {
  sync.cancel()
  PouchDB.sync(ts1DB, ts1dB).cancel()
  cloudCancelBtn.style.color = 'var(--btn-bg)'
  cloudCancelBtn.style.visibility = 'hidden'
  cloudBtn.style.color = 'var(--btn-bg)'

  console.log(':( sync got cancelled')
})

})