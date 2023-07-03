import express from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './app.jsx'

const app = express();
const port = process.env.PORT ?? 3000

// express.static is a built-in middleware function in Express.
// It serves static files and is based on serve-static.
const root = path.resolve(__dirname, '.', 'dist')
const options = { maxAge: '30d' } // cache files for 30 days
app.use(express.static(root, options))

app.get('/', async (_req, res) => {
  try {
    const indexFilePath = path.resolve(__dirname, '../public/index.html')
    const indexFile = await fs.readFile(indexFilePath, 'utf8')

    const rendered = ReactDOMServer.renderToString(<App />) // render react components to string
    const html = indexFile.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)

    res.send(html) // send the rendered react components to client
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(port, () => {
  console.info(`React SSR App listening at http://localhost:${port}`)
})
