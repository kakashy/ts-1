async function deleto(){
    // create or connect to database
var ts1DB =  new PouchDB('ts1dB', {auto_compaction: true})


// user id
var pupID = key.value
console.log(pupID)

    // grab particular pupil's document from the database
    try {
        var doc=await ts1DB.get(pupID);
        var response = await ts1DB.remove(doc);

        console.log(response)
      } catch (err) {
        console.log(err);
      }
}
