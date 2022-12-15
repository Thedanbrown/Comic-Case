const router = require('express').Router();
const fetch = require('node-fetch');
const { title } = require('process');

const API_KEY = process.env.Api_key;

router.get('/', (req, res) => {
    const {name, issue, condition} = req.query;
console.log(req.query)
    fetch(`https://comicvine.gamespot.com/api/issues/?api_key=${API_KEY}&limit=1&format=json&field_list=cover_date,deck,description,id,image,issue_number,name,volume&filter=name:${name},issue_number:${issue}`)
    .then(data => {
        return data.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.results)
        const response = {
            title: data.results[0].name,
            issue: data.results[0].issue_number,
            cover_date: data.results[0].cover_date,
            image: data.results[0].image.small_url,
            description: data.results[0].description,
            volume: data.results[0].volume.name,
            condition  
        };
        res.json(response);
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router