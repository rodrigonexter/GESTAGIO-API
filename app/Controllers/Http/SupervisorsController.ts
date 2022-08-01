import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Supervisor from 'App/Models/Supervisor'

export default class SupervisorsController {
  public async index() {
    const supervisor = await Supervisor.all()
    return supervisor
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const supervisor = await Supervisor.create(body)

    response.status(201)

    return {
      message: 'Supervisor created!',
      data: supervisor,
    }
  }

  public async show({ params }: HttpContextContract) {
    const supervisor = await Supervisor.query().where('company_id', '=', params.id)

    return supervisor
  }

  public async update({ request, params }: HttpContextContract) {
    //searching in database by id
    const supervisor = await Supervisor.find(params.id)
    // updating data

    // name, email, phone, company_id
    supervisor.name = request.input('name')
    supervisor.email = request.input('email')
    supervisor.phone = request.input('phone')
    supervisor.company_id = request.input('company_id')

    // save in database
    await supervisor.save()

    return supervisor
  }

  public async destroy({ params }: HttpContextContract) {
    const supervisor = await Supervisor.find(params.id)
    await supervisor.delete()

    return {
      message: 'Supervisor deleted',
      data: supervisor,
    }
  }
}
