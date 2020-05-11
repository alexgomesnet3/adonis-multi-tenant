'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store').validator('Session')

Route.get('users', 'UserController.index')
Route.post('users', 'UserController.store').validator('User')

Route.group(() => {
  Route.resource('teams', 'TeamController')
    .apiOnly()
    .validator(new Map([[['team.store', 'team.update'], ['Team']]]))
}).middleware('auth')

Route.group(() => {
  Route.post('invites', 'InviteController.store').validator('Invite').middleware('can:invites_create')

  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store', 'projects.update'], ['Project']]]))
    .middleware(new Map([[['projects.store', 'projects.update'], ['can:projects_create']]]))
}).middleware(['auth', 'team'])
