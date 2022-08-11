import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from '../../Models/Company'

export default class CompaniesController {
  public async index() {
    const company = await Company.all()
    return company
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const company = await Company.create(body)

    response.status(201)

    return {
      message: 'Company created!',
      data: company,
    }
  }

  public async show({ params }: HttpContextContract) {
    const company = await Company.find(params.id)
    return company
  }

  public async update({ request, params }: HttpContextContract) {
    //searching in database by id
    const company = await Company.find(params.id)
    // updating data
    // name, companyId, phone, address, supervisor
    company.name = request.input('name')
    company.company_id = request.input('company_id')
    company.phone = request.input('phone')
    company.email = request.input('email')
    company.address = request.input('address')
    // save in database
    await company.save()

    return company
  }

  public async destroy({ params }: HttpContextContract) {
    const company = await Company.find(params.id)
    await company.delete()

    return {
      message: 'Company deleted',
      data: company,
    }
  }
}
