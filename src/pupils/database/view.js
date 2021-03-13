// create or connect to database
var ts1DB =  new PouchDB('ts1dB')
// remote db
var Remotets1DB = new PouchDB('https://e6b140c8-fa3f-4bf4-854a-ce9d2befab62-bluemix.cloudant.com')

// elements
const viewBtn = document.getElementById('view-btn')
const viewer = document.getElementById('viewer')

// fetch records on click event
viewBtn.addEventListener('click', async () => {
  viewer.innerHTML = ' '  
  document.getElementById('mySearch').style.visibility = "visible"
  try {
      var result = await ts1DB.allDocs({
        include_docs: true,
        limit: 10
      })
    } catch (err) {
      console.log(err);
    }
    console.log(result)

    for (let i in result.rows){
      var divLi = '<div id="li"><div class="res-li scale-in-center"><label>' + result.rows[i].doc.Pupil_fName + ' ' + result.rows[i].doc.Pupil_sName + '</label><div class="res-li-bio"><label>' + result.rows[i].doc.Pupil_Birthdate + '</label><label>Special Needs: ' + result.rows[i].doc.Pupil_Needs + '</label></div></div><div class="res-li-btns"><button onclick="ts1DB.remove('+'\'' + result.rows[i].doc._id + '\',\'' + result.rows[i].doc._rev + '\'); this.parentNode.parentNode.parentNode.remove();") class="res-li-btns-dl" id="res-li-btns-dl" key="' + result.rows[i].doc._id + '"></button></div></div>'
      
      var li = document.createElement("li");
    //  li.appendChild(document.createTextNode('Name: ' + result.rows[i].doc.Pupil_fName + ' ' + result.rows[i].doc.Pupil_sName));
    //  li.appendChild(document.createTextNode(divLi));
      li.innerHTML = divLi
      viewer.appendChild(li)
      viewer.scrollIntoView({behavior: 'smooth'})
    }
//     var resultMap = result.docs.map((rDoc) => {
//         '<li>' + rDoc + '</li>'
//       })
//     viewer.innerHTML = resultMap
})