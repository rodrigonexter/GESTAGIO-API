import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Coordinator from '../../Models/Coordinator'

export default class CoordinatorsController {
  public async index() {
    const coordinators = await Coordinator.all()
    return coordinators
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const coordinator = await Coordinator.create(body)

    response.status(201)

    return {
      message: 'Coordinator created!',
      data: coordinator,
    }
  }

  public async show({ params }: HttpContextContract) {
    const coordinator = await Coordinator.find(params.id)
    return {
      data: coordinator,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    //searching in database by id
    const coordinator = await Coordinator.find(params.id)
    // updating data
    coordinator.name = request.input('name')
    coordinator.email = request.input('email')
    coordinator.password = request.input('password')
    // save in database
    await coordinator.save()

    return coordinator
  }

  public async destroy({ params }: HttpContextContract) {
    //const coordinator = await Coordinator.query().where('id', params.id).delete()
    const coordinator = await Coordinator.find(params.id)
    await coordinator.delete()

    return {
      message: 'Cordinator deleted',
      data: coordinator,
    }
  }
}
