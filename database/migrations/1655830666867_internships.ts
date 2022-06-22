import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'internships'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // student_id, company_id, company_supervisor, initial_date, end_date, renovattion1, renovattion2, renovattion3, week_hours, wage, assistance, category, activies_plan, semiannual_report1, semiannual_report2, semiannual_report3, semiannual_report4,

      table.integer('student_id').notNullable()
      table.integer('company_id').notNullable()
      table.string('company_supervisor').notNullable()
      table.date('initial_date').notNullable()
      table.date('end_date').notNullable()
      table.date('renovattion1')
      table.date('renovattion2')
      table.date('renovattion3')
      table.integer('week_hours')
      table.float('wage')
      table.float('assistance')
      table.string('category').notNullable()
      table.string('activies_plan').notNullable()
      table.string('semiannual_report1').notNullable()
      table.string('semiannual_report2').notNullable()
      table.string('semiannual_report3').notNullable()
      table.string('semiannual_report4').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
