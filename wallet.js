const express = require('express')
const app = express()
const jwt =require('jsonwebtoken')
const Web3 =require('web3')
const port = 5500
const web3 =new Web3('https://cloudflare-eth.com/')
const jwtSecret = 'some seceret value'

app.use(express.static('public'))

app.get('/nonce', (req, res) => {
    const nonce =new Date().getTime()
    const address =req.query.address 

    const tempToken =jwt.sign({nounce,address}, jwtSecret, { expiresIn: '60s'})
    const message = getSignMessage(address, nounce)

    res.json({tempToken,message})
})

const getSignMessage = (address,nounce) => {
    return ` please sign this message for address ${address}:\n\n `
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})