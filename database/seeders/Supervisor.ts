import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Supervisor from 'App/Models/Supervisor'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Supervisor.createMany([
      {
        name: 'José Souza Campos',
        email: 'rodrigo@gmail.com',
        phone: '(38) 99893-8650)',
        company_id: 1,
      },
      {
        name: 'Rodrigo Souza Campos',
        email: 'rodrigo@gmail.com',
        phone: '(38) 99893-8650)',
        company_id: 1,
      },
      {
        name: 'Ricardo Souza Campos',
        email: 'rodrigo@gmail.com',
        phone: '(38) 99893-8650)',
        company_id: 2,
      },
    ])
  }
}
