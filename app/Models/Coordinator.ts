import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Coordinator extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  // space for all atributes of entity name, email and password
  @column()
  public name: String

  @column()
  public email: String

  @column()
  public password: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
