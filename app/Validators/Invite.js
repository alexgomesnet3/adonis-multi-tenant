'use strict'

class Invite {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      invites: 'required|array',
      // Abaixo observe a notação de ponto para adentrar a uma propriedade específica
      'invites.*': 'required|email'

    }
  }
}

module.exports = Invite
