const createComicData = function (event) {

  const name = document.getElementById('name').value;
  const issuenum = document.getElementById('issuenum').value;
  // const volume = document.getElementById('volume').value;
  // const comicvineid = document.getElementById('comicvineid').value;
  const pubdat = document.getElementById('coverdate').value;
  const publisher = document.getElementById('publisher').value;
  const condition = document.getElementById('condition').value;
  const image = document.getElementById('imagelink').value;
  const deck = document.getElementById('deck').value;
  // const description = document.getElementById('description').value;

// add in additional data elements
  fetch('/api/comics', {
      method: 'POST',
      body: JSON.stringify({
          title: name,
          issue: issuenum,
          // volume: volume,
          // comicvine_id: comicvineid,
          published_date: pubdat,
          publisher: publisher,
          condition: condition,
          image: image,
          deck: deck,
          // description: description

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