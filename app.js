import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

// como leer un json en ESmodules
// import fs from 'node.fs'
// const movies = JSON.parse(fs.readFileSync('./movies.jsonj', utf-8))

// como leer in json en ESModules recomendado por ahora
// mover a until  
// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)
// export const readJSON = (path) => require(path)

// const movies = readJSON('./movies.json')