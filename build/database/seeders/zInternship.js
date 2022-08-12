"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Internship_1 = __importDefault(require("../../app/Models/Internship"));
class default_1 extends Seeder_1.default {
    async run() {
        await Internship_1.default.createMany([
            {
                student_id: 1,
                company_id: 1,
                teacher_id: 1,
                supervisor: 'Joao Souza',
                initial_date: '2024-12-12',
                final_date: '2024-12-12',
                wage: 600,
                aid: 200,
                health_insurance_code: '3748374837',
                health_insurance_company: 'BR Seguros',
                weekly_working_hours: 20,
                category: 'Estágio Obrigatório',
                modality: 'Presencial',
                activities_plan: 'Pendente',
                report: 'Enviado',
                status: 'Em andamento',
            },
            {
                student_id: 2,
                company_id: 2,
                teacher_id: 2,
                supervisor: 'Joao Souza',
                initial_date: '2024-12-12',
                final_date: '2024-12-12',
                wage: 600,
                aid: 200,
                health_insurance_code: '3748374837',
                health_insurance_company: 'BR Seguros',
                weekly_working_hours: 20,
                category: 'Estágio Obrigatório',
                modality: 'Presencial',
                activities_plan: 'Pendente',
                report: 'Enviado',
                status: 'Em andamento',
            },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=zInternship.js.map