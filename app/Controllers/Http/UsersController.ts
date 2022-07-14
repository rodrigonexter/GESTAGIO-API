import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

//email type password
export default class UsersController {
  public async index() {
    const user = await User.all()
    return user
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const user = await User.create(body)

    response.status(201)

    return {
      message: 'User created!',
      data: user,
    }
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.find(params.id)
    return {
      data: user,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    //searching in database by id
    const user = await User.find(params.id)
    // updating data

    user.email = request.input('email')
    user.password = request.input('password')
    // save in database
    await user.save()

    return user
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.find(params.id)
    await user.delete()

    return {
      message: 'User deleted',
      data: user,
    }
  }
}

