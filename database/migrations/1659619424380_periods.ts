import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'periods'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // student_id, company_id, teacher_id, supervisor, initial_date, final_date, wage, aid, health_insurance_code, health_insurance_company, weekly_working_hours, category, modality, activities_plan, report, status
      table.integer('internship_id').unsigned().references('students.id').onDelete('CASCADE')
      table.integer('student_id').unsigned().references('students.id').onDelete('CASCADE')
      table.integer('company_id').unsigned().references('companies.id').onDelete('CASCADE')
      table.integer('teacher_id').unsigned().references('teachers.id').onDelete('CASCADE')
      table.string('supervisor')
      table.dateTime('initial_date')
      table.dateTime('final_date')
      table.float('wage')
      table.float('aid')
      table.string('health_insurance_code')
      table.string('health_insurance_company')
      table.integer('weekly_working_hours')
      table.string('category')
      table.string('modality')
      table.string('activities_plan')
      table.string('report')
      table.string('status')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
