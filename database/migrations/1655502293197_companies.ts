import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // name, companyId, phone, address, supervisor
      table.string('name').notNullable()
      table.string('company_id').notNullable()
      table.string('phone').notNullable()
      table.string('address').notNullable()
      table.string('supervisor').notNullable()

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
