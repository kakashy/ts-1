var ts1DB =  new PouchDB('ts1dB', {auto_compaction: true})

// ## SCHOOL DETAILS ##
// grab elements
var scPopParagraph = document.getElementById('school-population')

var popResult = ts1DB.info().then(function (info){
  localStorage.setItem('tsDocs', info.doc_count)
  scPopParagraph.innerHTML = 'There are currently ' + localStorage.getItem('tsDocs') + ' records of Pupils.'
})
