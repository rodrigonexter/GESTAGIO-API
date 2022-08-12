"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Student_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Student"));
class default_1 extends Seeder_1.default {
    async run() {
        await Student_1.default.createMany([
            {
                name: 'Rodrigo Souza Campos',
                course_id: 1,
                email: 'rodrigo@gmail.com',
                phone: '(38) 99893-8650)',
                cpf: '12390742735',
                address: 'Teófilo Otoni, MG',
                student_id: '20162016030',
            },
            {
                name: 'Frederico José',
                course_id: 1,
                email: 'rodrigo@gmail.com',
                phone: '(38) 99893-8650)',
                cpf: '12390742735',
                address: 'Teófilo Otoni, MG',
                student_id: '20162016030',
            },
            {
                name: 'Maria Nunes',
                course_id: 1,
                email: 'rodrigo@gmail.com',
                phone: '(38) 99893-8650)',
                cpf: '12390742735',
                address: 'Teófilo Otoni, MG',
                student_id: '20162016030',
            },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Student.js.map