const { response } = require("express");


API_KEY= 'e94ef6cf167986239c7e6513b1ae2294e3bcdf22'


const triggerSearch = function (event) {
    const search = issueSearch.value;
    console.log(search)

    event.preventDefault();

    fetch(`https://comicvine.gamespot.com/api/issues/?api_key=${API_KEY}&format=json&field_list=cover_date,deck,description,id,image,issue_number,name,volume&filter=name:${search}`)

}

// assumption that separate JS handling the creation of new elements on page - Dan


// Assumption that event will be written on button to trigger the following
const createComicData = function (event) {

    const name = document.getElementById('name').value;
    const issuenum = document.getElementById('issuenum').value;
    const volume = document.getElementById('volume').value;
    const comicvineid = document.getElementById('comicvineid').value;
    const pubdat = document.getElementById('coverdate').value;
    const publisher = document.getElementById('publisher').value;
    const condition = document.getElementById('condition').value;
    const image = document.getElementById('imagelink').value;
    const deck = document.getElementById('deck').value;
    const description = document.getElementById('description').value;

// add in additional data elements
    
    fetch('/api/comics', {
        method: 'POST',
        body: JSON.stringify({
            title: name,
            issue: issuenum,
            volume: volume,
            comicvine_id: comicvineid,
            published_date: pubdat,
            publisher: publisher,
            condition: condition,
            image: image,
            deck: deck,
            description: description
 
        })
    })
    
    .then(response => {
        if (response.status == 200) {
            alert('You added your comic!')
        }
        else {
            alert('Error, please try again!')
        }
    })

}