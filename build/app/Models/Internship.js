"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const luxon_1 = require("luxon");
class Internship extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Internship.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Internship.prototype, "student_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Internship.prototype, "company_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Internship.prototype, "teacher_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Internship.prototype, "supervisor", void 0);
__decorate([
    Orm_1.column.date(),
    __metadata("design:type", luxon_1.DateTime)
], Internship.prototype, "initial_date", void 0);
__decorate([
    Orm_1.column.date(),
    __metadata("design:type", luxon_1.DateTime)
], Internship.prototype, "final_date", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Internship.prototype, "wage", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Internship.prototype, "aid", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Internship.prototype, "health_insurance_code", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Internship.prototype, "health_insurance_company", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Internship.prototype, "weekly_working_hours", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Internship.prototype, "category", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Internship.prototype, "modality", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Internship.prototype, "activities_plan", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Internship.prototype, "report", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Internship.prototype, "status", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Internship.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Internship.prototype, "updatedAt", void 0);
exports.default = Internship;
//# sourceMappingURL=Internship.js.map