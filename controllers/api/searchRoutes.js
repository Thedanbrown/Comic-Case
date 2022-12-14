const router = require('express').Router();
const fetch = require('node-fetch');
const { title } = require('process');

const API_KEY = 'e94ef6cf167986239c7e6513b1ae2294e3bcdf22'

router.get('/', (req, res) => {
    const {name, issue} = req.query;
console.log(req.query)
    fetch(`https://comicvine.gamespot.com/api/issues/?api_key=${API_KEY}&limit=1&format=json&field_list=cover_date,deck,description,id,image,issue_number,name,volume&filter=name:${name},issue_number:${issue}`)
    .then(data => {
        return data.json();
    })
    .then(data => {
        console.log(data);
        res.sendStatus(200)
    })
    
    .catch((err) => {
        console.log(err)})
})

module.exports = router