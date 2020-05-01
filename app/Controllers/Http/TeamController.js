'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with teams
 */
class TeamController {
  /**
   * Show a list of all teams.
   * GET teams
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new team.
   * GET teams/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new team.
   * POST teams
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single team.
   * GET teams/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing team.
   * GET teams/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update team details.
   * PUT or PATCH teams/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a team with id.
   * DELETE teams/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TeamController
