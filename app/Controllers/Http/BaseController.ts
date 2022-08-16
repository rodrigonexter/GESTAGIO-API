import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Coordinator from '../../Models/Coordinator'

export default class CoordinatorsController {
  public async index() {}

  public async store({ request, response }: HttpContextContract) {}

  public async show({ params }: HttpContextContract) {}

  public async update({ request, params }: HttpContextContract) {}

  public async destroy({ params }: HttpContextContract) {}
}

// 16.14.2
