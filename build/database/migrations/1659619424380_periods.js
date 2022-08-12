"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'periods';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('internship_id').unsigned().references('students.id').onDelete('CASCADE');
            table.integer('student_id').unsigned().references('students.id').onDelete('CASCADE');
            table.integer('company_id').unsigned().references('companies.id').onDelete('CASCADE');
            table.integer('teacher_id').unsigned().references('teachers.id').onDelete('CASCADE');
            table.string('supervisor');
            table.dateTime('initial_date');
            table.dateTime('final_date');
            table.float('wage');
            table.float('aid');
            table.string('health_insurance_code');
            table.string('health_insurance_company');
            table.integer('weekly_working_hours');
            table.string('category');
            table.string('modality');
            table.string('activities_plan');
            table.string('report');
            table.string('status');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1659619424380_periods.js.map