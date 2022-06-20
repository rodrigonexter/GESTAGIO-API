import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  // name, companyId, phone, address, supervisor

  @column()
  public name: String

  @column()
  public companyId: String

  @column()
  public phone: String

  @column()
  public address: String

  @column()
  public supervisor: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
