'use strict'

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    // Created one User with seeds
    const user = await User.create({
      name: 'Alex Gomes',
      email: 'alex.gomes.net3@gmail.com',
      password: '123123'
    })
    // Creating a team related to the previously created user
    await user.teams().create({
      name: 'Net3 Apps',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
