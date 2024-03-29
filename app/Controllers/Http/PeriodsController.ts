import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Period from 'App/Models/Period'

export default class PeriodsController {
  public async index() {
    const internships = await Database.from('students')
    .join('internships', 'students.id', '=', 'internships.student_id')
    .join('companies','companies.id','=','internships.company_id')
    .join('teachers','teachers.id','=','internships.teacher_id')
    .join('periods','periods.internship_id', '=', 'internships.id')
    .select('periods.id')
    .select('periods.internship_id')
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


    console.log(internships)
    return internships
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const period = await Period.create(body)

    response.status(201)

    return {
      message: 'Period created!',
      data: period,
    }
  }

  public async show({ params }: HttpContextContract) {
    const periods = await Database.from('internships')
    .where('periods.internship_id', params.id)
    .join('periods', 'internships.id', '=', 'periods.internship_id')
    .join('students', 'students.id', '=', 'periods.student_id')
    .join('companies', 'companies.id', '=', 'periods.company_id')
    .join('teachers', 'teachers.id', '=', 'periods.teacher_id')
    .select('periods.id as id')
    .select('periods.internship_id')
    .select('periods.student_id as student_id')
    .select('students.name as student_name')
    .select('periods.company_id as company_id')
    .select('companies.company_id as company_id')
    .select('companies.name as company_name')
    .select('companies.email as company_email')
    .select('companies.phone as company_phone')
    .select('companies.address as company_address')
    .select('teachers.id as teacher_id')
    .select('teachers.name as teacher_name')
    .select('periods.supervisor')
    .select('periods.initial_date')
    .select('periods.final_date')
    .select('periods.wage')
    .select('periods.aid')
    .select('periods.health_insurance_code')
    .select('periods.health_insurance_company')
    .select('periods.weekly_working_hours')
    .select('periods.category')
    .select('periods.modality')
    .select('periods.status')
    .select('periods.activities_plan')
    .select('periods.report')

    console.log(periods)
    return periods
  }

  public async update({ request, params }: HttpContextContract) {
    //searching in database by id
    const period = await Period.find(params.id)
    // updating data
    period.internship_id = request.input('internship_id')
    period.student_id = request.input('student_id')
    period.company_id = request.input('company_id')
    period.teacher_id = request.input('teacher_id')
    period.supervisor = request.input('supervisor')
    period.initial_date = request.input('initial_date')
    period.final_date = request.input('final_date')
    period.wage = request.input('wage')
    period.aid = request.input('aid')
    period.health_insurance_code = request.input('health_insurance_code')
    period.health_insurance_company = request.input('health_insurance_company')
    period.weekly_working_hours = request.input('weekly_working_hours')
    period.category = request.input('category')
    period.modality = request.input('modality')
    period.activities_plan = request.input('activities_plan')
    period.report = request.input('report')
    period.status = request.input('status')

    // save in database
    await period.save()

    return period
  }

  public async destroy({ params }: HttpContextContract) {
    const period = await Period.find(params.id)
    await period.delete()

    return {
      message: 'Period deleted',
      data: period,
    }
  }
}
