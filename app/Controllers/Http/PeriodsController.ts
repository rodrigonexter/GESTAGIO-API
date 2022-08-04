import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Period from 'App/Models/Period'

export default class PeriodsController {
  public async index() {
    const periods = await Period.all()

    console.log(periods)
    return periods
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
    const period = await Period.find(params.id)
    return {
      data: period,
    }
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
