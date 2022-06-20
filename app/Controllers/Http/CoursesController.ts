import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from '../../Models/Course'

export default class CoursesController {
  public async index() {
    const course = await Course.all()
    return course
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const course = await Course.create(body)

    response.status(201)

    return {
      message: 'Course created!',
      data: course,
    }
  }

  public async show({ params }: HttpContextContract) {
    const course = await Course.find(params.id)
    return {
      data: course,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    //searching in database by id
    const course = await Course.find(params.id)
    // updating data
    course.name = request.input('name')
    course.description = request.input('description')
    course.department = request.input('department')
    // save in database
    await course.save()

    return course
  }

  public async destroy({ params }: HttpContextContract) {
    const course = await Course.find(params.id)
    await course.delete()

    return {
      message: 'Course deleted',
      data: course,
    }
  }
}
