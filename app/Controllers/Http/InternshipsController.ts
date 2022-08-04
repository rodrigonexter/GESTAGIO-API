import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Internship from 'App/Models/Internship'
import Database from '@ioc:Adonis/Lucid/Database'

export default class InternshipsController {
  public async index() {
    // const internships = await Internship.all()
    const internships = await Database.from('students')
    .join('internships', 'students.id', '=', 'internships.student_id')
    .join('companies','companies.id','=','internships.company_id')
    .join('teachers','teachers.id','=','internships.teacher_id')
    .select('internships.id')
    .select('students.id as student_id')
    .select('students.name as student_name')
    .select('companies.id as company_id')
    .select('companies.name as company_name')
    .select('teachers.id as teacher_id')
    .select('teachers.name as teacher_name')
    .select('internships.supervisor')
    .select('internships.initial_date')
    .select('internships.final_date')
    .select('internships.wage')
    .select('internships.aid')
    .select('internships.health_insurance_code')
    .select('internships.health_insurance_company')
    .select('internships.weekly_working_hours')
    .select('internships.category')
    .select('internships.modality')
    .select('internships.status')
    .select('internships.activities_plan')
    .select('internships.report')

    // .join('internships','students.id','=','internships.student_id')
    // .join('companies','companies.id','=','internships.company_id')

    console.log(internships)
    return internships

  /* student_id,
   company_id,
   teacher_id,
   supervisor,
   initial_date,
   final_date,
   wage,
   aid,
   health_insurance_code,
   health_insurance_company,
   weekly_working_hours,
   category,
   modality,
    activities_plan, report, status */
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const internship = await Internship.create(body)

    response.status(201)

    return {
      message: 'Internship created!',
      data: internship,
    }
  }

  public async show({ params }: HttpContextContract) {
    const internship = await Internship.find(params.id)
    return {
      data: internship,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    //searching in database by id
    const internship = await Internship.find(params.id)
    // updating data

    internship.student_id = request.input('student_id')
    internship.company_id = request.input('company_id')
    internship.teacher_id = request.input('teacher_id')
    internship.supervisor = request.input('supervisor')
    internship.initial_date = request.input('initial_date')
    internship.final_date = request.input('final_date')
    internship.wage = request.input('wage')
    internship.aid = request.input('aid')
    internship.health_insurance_code = request.input('health_insurance_code')
    internship.health_insurance_company = request.input('health_insurance_company')
    internship.weekly_working_hours = request.input('weekly_working_hours')
    internship.category = request.input('category')
    internship.modality = request.input('modality')
    internship.activities_plan = request.input('activities_plan')
    internship.report = request.input('report')
    internship.status = request.input('status')

    // save in database
    await internship.save()

    return internship
  }

  public async destroy({ params }: HttpContextContract) {
    const internship = await Internship.find(params.id)
    await internship.delete()

    return {
      message: 'Internship deleted',
      data: internship,
    }
  }
}
