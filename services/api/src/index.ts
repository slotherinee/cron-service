import { log } from '@cron/shared'
import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (_, res) => {
  res.send('Hello, World!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => log(`Server is running on port ${PORT}`))
