import express from 'express'
import type {Request} from 'express'

import {genRange} from '@/utils'

const app = express()

const {APP_PORT = 3000} = process.env

app.get('/range', (req: Request<{}, {}, {}, {from?: string; to?: string; step?: string}>, res) => {
  const [from, to, step] = [req.query.from, req.query.to, req.query.step].map(Number)

  try {
    res.send(`<h2>Generated range: </h2><ul>${Array.from(genRange({from: from || undefined, to: to, step: step || undefined})).map(num => `<li>${num}</li>`).join('')}</ul>`)
  } catch (err) {
    console.error(err)
    res.status(500).send('Unknown error')
  }
})

app.get('*', (_, res) => {
  res.send('<h2>Hello, world!</h2>')
})

app.listen(APP_PORT, () => console.log(`Server listening on port ${APP_PORT}\n\n\t\thttp://localhost:${APP_PORT}\n\n`))
