'use strict'

const User = use('App/Models/User')

const Role = use('Adonis/Acl/Role')
const Permission = use('Adonis/Acl/Permission')

class DatabaseSeeder {
  async run () {
    // Created one User with seeds
    const user = await User.create({
      name: 'Alex Gomes',
      email: 'alex.gomes.net3@gmail.com',
      password: '123123'
    })
    // Create name permissions for invites and users
    const createInvite = await Permission.create({
      slug: 'invites_create',
      name: 'Convidar membros'
    })

    const createProject = await Permission.create({
      slug: 'projects_create',
      name: 'Criar projetos'
    })

    const admin = await Role.create({
      slug: 'administrator',
      name: 'Administrador'
    })

    const moderator = await Role.create({
      slug: 'moderator',
      name: 'Moderador'
    })

    await Role.create({
      slug: 'visitor',
      name: 'Visitante'
    })
    // Attach Permissions for admins and moderator
    await admin.permissions().attach([createInvite.id, createProject.id])
    await moderator.permissions().attach([createProject.id])
    // Creating a team related to the previously created user
    const team = await user.teams().create({
      name: 'Net3 Apps',
      user_id: user.id
    })
    // Below find relationship user with team
    const teamJoin = await user.teamJoins()
      .where('team_id', team.id)
      .first()
    // Attach user team found, with respective roles and permissions
    await teamJoin.roles().attach([admin.id])
  }
}

module.exports = DatabaseSeeder
