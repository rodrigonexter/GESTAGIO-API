import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Course from '../../app/Models/Course'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Course.createMany([
      {
        name: 'Sistemas de Informação',
        description: 'Curso voltado para a formação ampla na área de tecnologia da informação',
        department: 'DECOM - DEPARTAMENTO DE COMPPUTAÇÃO',
      },
      {
        name: 'Análise e Desenvolvimento de Sistemas',
        description: 'Curso voltado para a formação ampla na área de tecnologia da informação',
        department: 'DECOM - DEPARTAMENTO DE COMPPUTAÇÃO',
      },
      {
        name: 'Ciência da Computação',
        description: 'Curso voltado para a formação ampla na área de tecnologia da informação',
        department: 'DECOM - DEPARTAMENTO DE COMPPUTAÇÃO',
      },
      {
        name: 'Engenharia da Computação',
        description: 'Curso voltado para a formação ampla na área de tecnologia da informação',
        department: 'DECOM - DEPARTAMENTO DE COMPPUTAÇÃO',
      },
      {
        name: 'Engenharia de Software',
        description: 'Curso voltado para a formação ampla na área de tecnologia da informação',
        department: 'DECOM - DEPARTAMENTO DE COMPPUTAÇÃO',
      },
    ])
  }
}
