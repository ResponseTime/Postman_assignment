import express from 'express'
import cors from 'cors'
import { Prisma, PrismaClient } from '@prisma/client'
import axios from 'axios'
const prisma = new PrismaClient()

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post("/postman/serve", async (req, res) => {
    try {
        const { url, method, headers, body } = req.body;
        let parsedBody = JSON.parse(body)
        let parsedHeaders: any = {}
        headers.map((head: any) => {
            parsedHeaders[head.key] = head.value
        })
        const options = {
            headers: parsedHeaders,
            method: method,
            url: url,
            data: JSON.stringify(parsedBody.body),
        }
        await prisma.history.create({
            data: {
                url: url,
                method: method,
                body: body as Prisma.JsonArray,
                headers: headers as Prisma.JsonArray
            }
        })
        try {
            const response = await axios.request(options)
            res.status(response.status).json(response.data)
        }
        catch (err: any) {
            return res.status(400).json(err)
        }
    }
    catch (err: any) {

        return res.status(500).json({ message: err.message })
    }

})
app.get("/postman/history", async (req, res) => {
    try {
        const data = await prisma.history.findMany()
        res.json(data)
    }
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
})

app.listen(8080, () => {
    console.log("server running")
})