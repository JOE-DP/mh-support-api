const PORT = 5000

const express = require('express')
const cors = require('cors')
app = express()

app.use(cors())

console.log("server doc init'd")

app.get('/', (req, res) => {
    res.send('Mental Health Support API')
})
app.get('/clientside/js/main.js', (req, res) => {
    res.sendFile(__dirname + '/clientside/js/main.js')
})

app.get('/api/support/byspec/:spec', (req, res) => {
    const spec = req.params.spec.toLowerCase()

    res.json(supportObject.filter(item => item.support.includes(spec)))
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


const supportObject = [{
    name: 'Samaritans', 
    support: ['suicide', 'addiction', 'depression'],
    location: 'UK',
    telephone: 116123,
    website: 'https://www.samaritans.org/'
}, {  name: 'Bipolar UK', 
    support: ['bipolar', 'depression'],
    location: 'UK',
    telephone: 'Unknown', 
    website: 'https://www.bipolaruk.org/crisis-support'
}, {  name: 'No Panic', 
    support: ['panic', 'OCD'],
    location: 'UK',
    telephone: 03007729844, 
    website: 'https://nopanic.org.uk/'
}]