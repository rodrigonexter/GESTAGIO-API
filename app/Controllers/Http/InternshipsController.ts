import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Internship from '../../Models/Internship'

export default class InternshipsController {
  public async index() {
    const internship = await Internship.all()
    return internship
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
    // student_id, company_id, company_supervisor, initial_date, end_date, renovattion1, renovattion2, renovattion3, week_hours, wage, assistance, category, activies_plan, semiannual_report1, semiannual_report2, semiannual_report3, semiannual_report4

    const internship = await Internship.find(params.id)
    // updating data
    internship.student_id = request.input('student_id')
    internship.company_id = request.input('company_id')
    internship.company_supervisor = request.input('company_supervisor')
    internship.initial_date = request.input('initial_date')
    internship.end_date = request.input('end_date')
    internship.renovattion1 = request.input('renovattion1')
    internship.renovattion2 = request.input('renovattion2')
    internship.renovattion3 = request.input('renovattion3')
    internship.week_hours = request.input('week_hours')
    internship.wage = request.input('wage')
    internship.assistance = request.input('assistance')
    internship.category = request.input('category')
    internship.activies_plan = request.input('activies_plan')
    internship.semiannual_report1 = request.input('semiannual_report1')
    internship.semiannual_report2 = request.input('semiannual_report2')
    internship.semiannual_report3 = request.input('semiannual_report3')
    internship.semiannual_report4 = request.input('semiannual_report4')
    internship.name = request.input('name')

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
