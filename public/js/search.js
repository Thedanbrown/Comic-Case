// Comic search function with connection to searchRoutes to best handle CORS error

const triggerSearch = function (event) {
    event.preventDefault();
    const nameSearch = document.getElementById('namesearch');
    const issueSearch = document.getElementById('issuesearch');
    const conditionEnter = document.getElementById('condition');

    const condition = conditionEnter.value;
    const name = nameSearch.value;
    console.log(name)

    const issue = issueSearch.value;
    console.log(issue)
    

    fetch('/api/search?' + new URLSearchParams ({name, issue, condition}))
    .catch((err) => {
        console.log(err)})
    .then ((response) => {
        console.log(response)
        return response.json();
    })
    .then ((response) => {
        comicCreation(response);
    })
}

const comicCreation = function (comic) {
    // comic.condition = "unknown";
    comic.description = "";
    fetch ('/api/comics', {
        method: 'POST',
        body: JSON.stringify(comic),
        headers: { 'Content-Type': 'application/json'},
    })
    .then((response) => {
        console.log(response);
        document.location.reload();
    })
    .catch((err) => {
        console.log(err)
    })
}

document.querySelector('#search-form').addEventListener('submit', triggerSearch);
document.querySelector('#creation-form').addEventListener('submit', triggerSearch);