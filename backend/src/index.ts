import express from 'express'
const app = express()

const port = 9000;

app.get('/', (req, res) => {
    res.send('Oda')
})

app.listen(port,  () => {
    console.log('asdfasdf')
})