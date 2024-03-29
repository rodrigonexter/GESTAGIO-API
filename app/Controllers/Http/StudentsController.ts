import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from '../../Models/Student'
import Database from '@ioc:Adonis/Lucid/Database'

export default class StudentsController {
  public async index() {
    const student = await Database.from('students')
    .join('courses', 'students.course_id', '=', 'courses.id')
    .select('students.id as id')
    .select('students.name as name')
    .select('students.phone as phone')
    .select('students.cpf as cpf')
    .select('students.address as address')
    .select('students.email as email')
    .select('students.student_id as student_id')
    .select('courses.id as course_id')
    .select('courses.name as course_name')

    return student
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const student = await Student.create(body)

    response.status(201)

    return {
      message: 'Student created!',
      data: student,
    }
  }

  public async show({ params }: HttpContextContract) {
    const student = await Student.find(params.id)
    return student
  }

  public async update({ request, params }: HttpContextContract) {
    //searching in database by id
    const student = await Student.find(params.id)
    // updating data

    // name, email, phone, cpf, address, student_id
    student.name = request.input('name')
    student.course_id = request.input('course_id')
    student.email = request.input('email')
    student.phone = request.input('phone')
    student.cpf = request.input('cpf')
    student.address = request.input('address')
    student.student_id = request.input('student_id')
    // save in database
    await student.save()

    return student
  }

  public async destroy({ params }: HttpContextContract) {
    const student = await Student.find(params.id)
    await student.delete()

    return {
      message: 'Student deleted',
      data: student,
    }
  }
}
