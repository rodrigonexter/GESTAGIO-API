import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'coordinators'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // space for all atributes of entity name, email and password
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
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
