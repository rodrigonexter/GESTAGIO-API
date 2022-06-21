import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Internship extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  // student_id, company_id, company_supervisor, initialDate, endDate, renovattion1, renovattion2, renovattion3, weekHours, wage, assistance, category, activiesPlan, semiannualReport

  @column()
  public student_id: Number

  @column()
  public company_id: Number

  @column()
  public company_supervisor: String

  @column()
  public initialDate: Date

  @column()
  public endDate: Date

  @column()
  public renovattion1: Date

  @column()
  public renovattion2: Date

  @column()
  public renovattion3: Date

  @column()
  public weekHours: Number

  @column()
  public wage: Number

  @column()
  public assistance: Number

  @column()
  public category: String

  @column()
  public activiesPlan: String

  @column()
  public semiannualReport1: String

  @column()
  public semiannualReport2: String

  @column()
  public semiannualReport3: String

  @column()
  public semiannualReport4: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
