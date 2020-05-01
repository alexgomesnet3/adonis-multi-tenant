'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with invites
 */
class InviteController {
  /**
   * Show a list of all invites.
   * GET invites
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new invite.
   * GET invites/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new invite.
   * POST invites
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single invite.
   * GET invites/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing invite.
   * GET invites/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update invite details.
   * PUT or PATCH invites/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a invite with id.
   * DELETE invites/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = InviteController
