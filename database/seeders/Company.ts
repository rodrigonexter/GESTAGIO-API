import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Company from '../../app/Models/Company'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    // name, companyId, phone, address, supervisor
    await Company.createMany([
      {
        name: 'JBS',
        company_id: '19.653.482/0001-07',
        phone: '(79) 99587-2937',
        email: 'jbs@gmail.com',
        address: 'Rua do fogo, 456, Diamantina, Minas Gerais',
      },
      {
        name: 'GOOGLE',
        company_id: '19.653.482/0001-07',
        phone: '(79) 99587-2937',
        email: 'jbs@gmail.com',
        address: 'Rua do fogo, 456, Diamantina, Minas Gerais',
      },
    ])
  }
}
