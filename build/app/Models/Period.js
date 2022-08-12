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
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
class Period extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Period.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Period.prototype, "internship_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Period.prototype, "student_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Period.prototype, "company_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Period.prototype, "teacher_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Period.prototype, "supervisor", void 0);
__decorate([
    Orm_1.column.date(),
    __metadata("design:type", luxon_1.DateTime)
], Period.prototype, "initial_date", void 0);
__decorate([
    Orm_1.column.date(),
    __metadata("design:type", luxon_1.DateTime)
], Period.prototype, "final_date", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Period.prototype, "wage", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Period.prototype, "aid", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Period.prototype, "health_insurance_code", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Period.prototype, "health_insurance_company", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Period.prototype, "weekly_working_hours", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Period.prototype, "category", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Period.prototype, "modality", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Period.prototype, "activities_plan", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Period.prototype, "report", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Period.prototype, "status", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Period.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Period.prototype, "updatedAt", void 0);
exports.default = Period;
//# sourceMappingURL=Period.js.map