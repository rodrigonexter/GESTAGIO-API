import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Coordinator from '../../app/Models/Coordinator'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Coordinator.createMany([
      {
        name: 'Rodrigo Campos',
        email: 'rodrigo@teste.com',
        password: 'senhateste123',
      },
      {
        name: 'João Campos',
        email: 'joao@teste.com',
        password: 'senhateste123',
      },
      {
        name: 'Ricardo Campos',
        email: 'ricardo@teste.com',
        password: 'senhateste123',
      },
      {
        name: 'Jose Campos',
        email: 'jose@teste.com',
        password: 'senhateste123',
      },
    ])
  }
}
