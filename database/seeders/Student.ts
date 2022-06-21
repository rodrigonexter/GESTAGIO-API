import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Student from 'App/Models/Student'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    // name, email, phone, cpf, address, student_id
    await Student.createMany([
      {
        name: 'Rodrigo Souza Campos',
        email: 'rodrigo@gmail.com',
        phone: '(38) 99893-8650)',
        cpf: '12390742735',
        address: 'Teófilo Otoni, MG',
        student_id: '20162016030',
      },
      {
        name: 'Frederico Bouça Piteira',
        email: 'rodrigo@gmail.com',
        phone: '(38) 99893-8650)',
        cpf: '12390742735',
        address: 'Teófilo Otoni, MG',
        student_id: '20162016030',
      },
      {
        name: 'Sol Lacerda Mondragão',
        email: 'rodrigo@gmail.com',
        phone: '(38) 99893-8650)',
        cpf: '12390742735',
        address: 'Teófilo Otoni, MG',
        student_id: '20162016030',
      },
      {
        name: 'Celeste Vila-Chã Nascimento',
        email: 'rodrigo@gmail.com',
        phone: '(38) 99893-8650)',
        cpf: '12390742735',
        address: 'Teófilo Otoni, MG',
        student_id: '20162016030',
      },
    ])
  }
}
