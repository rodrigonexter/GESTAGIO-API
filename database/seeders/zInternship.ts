import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Internship from '../../app/Models/Internship'

export default class extends BaseSeeder {
  public async run() {
    // student_id, company_id, teacher_id, supervisor, initial_date, final_date, wage, aid, health_insurance_code, health_insurance_company, weekly_working_hours, category, modality, activities_plan, report, status

    await Internship.createMany([
      {
        student_id: 1,
        company_id: 1,
        teacher_id: 1,
        supervisor: 'Joao Souza',
        initial_date: '2023-12-13', //yyyy-mm-dd
        final_date: '2024-12-12',
        wage: 600,
        aid: 200,
        health_insurance_code: '3748374837',
        health_insurance_company: 'BR Seguros',
        weekly_working_hours: 20,
        category: 'Estágio Obrigatório',
        modality: 'Presencial',
        activities_plan: 'Pendente',
        report: 'Enviado',
        status: 'Em andamento',
      },

      {
        student_id: 2,
        company_id: 2,
        teacher_id: 2,
        supervisor: 'Joao Souza',
        initial_date: 2022-12-13, //yyyy-mm-dd
        final_date: 2023-12-12,
        wage: 600,
        aid: 200,
        health_insurance_code: '3748374837',
        health_insurance_company: 'BR Seguros',
        weekly_working_hours: 20,
        category: 'Estágio Obrigatório',
        modality: 'Presencial',
        activities_plan: 'Pendente',
        report: 'Enviado',
        status: 'Em andamento',
      },
    ])
  }
}
