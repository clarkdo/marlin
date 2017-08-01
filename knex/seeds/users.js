const uuid = require('uuid')

const table = 'users'
const users = [
  { email: 'john.doe@example.com', name: 'John Doe' },
  { email: 'jane.doe@example.com', name: 'Jane Doe' }
]

module.exports.seed = async (knex) => {
  // Deletes ALL existing entries
  const rows = await knex(table).del()
  console.log(`${rows} deleted from ${table}`)
  return knex(table).insert(
    users.map(
      ({ name, email }) => ({
        id: uuid(),
        name,
        email,
        email_confirmed: true
      })
    )
  )
}
