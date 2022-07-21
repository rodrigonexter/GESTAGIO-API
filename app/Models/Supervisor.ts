import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Supervisor extends BaseModel {
  // name, email, phone, company_id
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: String

  @column()
  public email: String

  @column()
  public phone: String

  @column()
  public company_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
