import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  // name, companyId, phone, address, supervisor

  @column()
  public name: String

  @column()
  public company_id: String

  @column()
  public phone: String

  @column()
  public email: String

  @column()
  public address: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
