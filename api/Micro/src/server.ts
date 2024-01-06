import ExpressConfig from "./config/express.config"

const app = ExpressConfig()
const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log("Server Running on Port: " + PORT))

app.get('/', (_req, res) => {
    console.log("Micro OK")
    res.send('Micro OK !')
})