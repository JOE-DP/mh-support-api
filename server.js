const PORT = 5000

const express = require('express')
const cors = require('cors')
app = express()

app.use(cors())

console.log("server doc init'd")

app.get('/', (req, res) => {
    res.send('Mental Health Support API, to search by mental health concerns use: https://mh-support-api.herokuapp.com/api/support/byspec/[mental health concern paramater]')
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
    telephone: '116123',
    website: 'https://www.samaritans.org/'
}, {  name: 'Bipolar UK', 
    support: ['bipolar', 'depression'],
    location: 'UK',
    telephone: 'Unknown', 
    website: 'https://www.bipolaruk.org/crisis-support'
}, {  name: 'No Panic', 
    support: ['panic', 'OCD'],
    location: 'UK',
    telephone: '03007729844', 
    website: 'https://nopanic.org.uk/'
}, {  name: 'Support After Suicide Partnership', 
    support: ['suicide', 'bereavement'],
    location: 'unknown',
    telephone: 'unknown', 
    website: 'https://supportaftersuicide.org.uk/'
}, {  name: 'mind', 
    support: ['suicide', 'bereavement', 'bipolar', 'depression', 'addiction'],
    location: 'unknown',
    telephone: '03001233393', 
    website: 'https://www.mind.org.uk/'
}]