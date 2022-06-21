import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teacher from '../../Models/Teacher'

export default class TeachersController {
  public async index() {
    const teacher = await Teacher.all()
    return teacher
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const teacher = await Teacher.create(body)

    response.status(201)

    return {
      message: 'Teacher created!',
      data: teacher,
    }
  }

  public async show({ params }: HttpContextContract) {
    const teacher = await Teacher.find(params.id)
    return {
      data: teacher,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    //searching in database by id
    const teacher = await Teacher.find(params.id)
    // updating data

    // name, email, phone, cpf, address, teacher_id
    teacher.name = request.input('name')
    teacher.email = request.input('email')
    teacher.phone = request.input('phone')
    teacher.cpf = request.input('cpf')
    teacher.address = request.input('address')
    teacher.teacher_id = request.input('teacher_id')
    // save in database
    await teacher.save()

    return teacher
  }

  public async destroy({ params }: HttpContextContract) {
    const teacher = await Teacher.find(params.id)
    await teacher.delete()

    return {
      message: 'Teacher deleted',
      data: teacher,
    }
  }
}

