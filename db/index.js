import knex from 'knex'
import { fileURLToPath } from 'url'

const path = new URL('./db.sqlite', import.meta.url)

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: fileURLToPath(path)
  },
  useNullAsDefault: true
})

export default db