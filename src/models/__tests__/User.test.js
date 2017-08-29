// @flow

import User from '../User'

describe('user', () => {
  it('should whitelist props given', () => {
    expect(
      new User({
        name: 'The Hulk',
        superhero: true
      })
    ).not.toHaveProperty('superhero')
  })

  it('find all users', async () => {
    let users = await User.find()
    expect(users).toHaveLength(2)
    expect(users[0]).toMatchObject({
      email: 'john.doe@example.com',
      name: 'John Doe'
    })
    expect(users[1]).toMatchObject({
      email: 'jane.doe@example.com',
      name: 'Jane Doe'
    })
  })

  it('find unique user', async () => {
    let user = await User.findOne({name: 'Jane Doe'})
    expect(user).toMatchObject({
      email: 'jane.doe@example.com',
      name: 'Jane Doe'
    })
  })

  it('find any user', async () => {
    let user = await User.any({email: 'john.doe@example.com'})
    expect(user).toEqual(1)
    user = await User.any({email: 'mike.doe@example.com'})
    expect(user).toEqual(0)
  })
})
