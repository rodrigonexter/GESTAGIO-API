import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Teacher from '../../app/Models/Teacher'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    //name, email, phone, teacher_id
    await Teacher.createMany([
      {
        name: 'Athila Rocha',
        email: 'athila@gmail.com',
        phone: '38998989898',
        teacher_id: '2016201600',
      },
      {
        name: 'Luciana Assis',
        email: 'Luciana@gmail.com',
        phone: '2222222222',
        teacher_id: '2222222222',
      },
      {
        name: 'Alessando Vivas',
        email: 'linux@gmail.com',
        phone: '999999999999',
        teacher_id: '99999999999',
      },
    ])
  }
}
