import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'supervisors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      // name, email, phone, company_id

      table.increments('id')
      table.string('name')
      table.string('email')
      table.string('phone')
      table.integer('company_id').unsigned().references('companies.id').onDelete('CASCADE') // FK
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
