const PORT = 5000

const express = require('express')
const cors = require('cors')
app = express()

app.use(cors())

console.log("server doc init'd")

app.get('/', (req, res) => {
    res.send("Disclaimer: this API has been developed as part of a learning experience and it is not monitored or updated, therefore I do not take any responsibility for any negative outcomes of using the services, and if someone needs mental health support, it is always best to seek professional medical support. I also have no connection to any of the organisations used in this API. For information and instructions to use this API visit: https://joe-dp.github.io/mh-support-api/")
})


app.get('/api/support/byspec/:spec', (req, res) => {
    const spec = req.params.spec.toLowerCase()

    res.json(supportObject.filter(item => item.support.includes(spec)))
})

app.get('/api/support/byname/:name', (req, res) => {
    const name = req.params.name.toLowerCase()

    res.json(supportObject.filter(item => item.name.split(" ").join("").toLowerCase() == name.split(" ").join("").toLowerCase()))
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


const supportObject = [{
    name: 'Suicide charity', 
    support: ['suicide', 'addiction', 'depression'],
    location: 'UK',
    telephone: 'phone number',
    website: 'link to a website'
}, {  name: 'Bipolar charity', 
    support: ['bipolar', 'depression'],
    location: 'UK',
    telephone: 'Unknown', 
    website: 'link to a website'
}, {  name: 'Panic/ODC charity', 
    support: ['panic', 'OCD'],
    location: 'UK',
    telephone: 'phone number', 
    website: 'link to a website'
}, {  name: 'Bereavement charity', 
    support: ['suicide', 'bereavement'],
    location: 'unknown',
    telephone: 'unknown', 
    website: 'link to a website'
}, {  name: 'Mental health charity', 
    support: ['suicide', 'bereavement', 'bipolar', 'depression', 'addiction'],
    location: 'unknown',
    telephone: 'phone number',
    website: 'link to a website'
}]