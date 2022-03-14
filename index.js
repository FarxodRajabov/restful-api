import express from 'express'

import serverRoutes from './router/routess.js'


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(serverRoutes)



app.listen(2000, (req,res) => {
    console.log('has been startedd');
})