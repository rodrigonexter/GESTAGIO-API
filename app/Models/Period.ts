import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Period extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  // student_id, company_id, teacher_id, supervisor, initial_date, final_date, wage, aid, health_insurance_code, health_insurance_company, weekly_working_hours, category, modality, activities_plan, report, status

  @column()
  public internship_id: Number

  @column()
  public student_id: Number

  @column()
  public company_id: Number

  @column()
  public teacher_id: Number

  @column()
  public supervisor: String

  @column.date()
  public initial_date: DateTime

  @column.date()
  public final_date: DateTime

  @column()
  public wage: Number

  @column()
  public aid: Number

  @column()
  public health_insurance_code: String

  @column()
  public health_insurance_company: String

  @column()
  public weekly_working_hours: Number

  @column()
  public category: String

  @column()
  public modality: String

  @column()
  public activities_plan: String

  @column()
  public report: String

  @column()
  public status: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
