import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Internship from '../../app/Models/Internship'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    // student_id, company_id, company_supervisor, initialDate, endDate, renovattion1, renovattion2, renovattion3, weekHours, wage, assistance, category, activiesPlan, semiannualReport
    await Internship.createMany([
      {
        student_id: 1,
        company_id: 1,
        company_supervisor: 'José Silva',
        initial_date: '2021-12-12',
        end_date: '2021-12-12',
        renovattion1: '2021-12-12',
        renovattion2: '2021-12-12',
        renovattion3: '2021-12-12',
        week_hours: 30,
        wage: 600,
        assistance: 250,
        category: 'Remoto',
        activies_plan: '#',
        semiannual_report1: '#',
        semiannual_report2: '#',
        semiannual_report3: '#',
        semiannual_report4: '#',
      },
    ])
  }
}
