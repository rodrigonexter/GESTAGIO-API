import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  // name, email, phone, cpf, address, student_id

  @column()
  public name: String

  @column()
  public course_id: number

  @column()
  public email: String

  @column()
  public phone: String

  @column()
  public cpf: String

  @column()
  public address: String

  @column()
  public student_id: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
