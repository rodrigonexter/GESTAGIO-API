"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Course_1 = __importDefault(require("../../app/Models/Course"));
class default_1 extends Seeder_1.default {
    async run() {
        await Course_1.default.createMany([
            {
                name: 'Sistemas de Informação',
                description: 'Curso voltado para a formação ampla na área de tecnologia da informação',
                department: 'DECOM - DEPARTAMENTO DE COMPPUTAÇÃO',
            },
            {
                name: 'Análise e Desenvolvimento de Sistemas',
                description: 'Curso voltado para a formação ampla na área de tecnologia da informação',
                department: 'DECOM - DEPARTAMENTO DE COMPPUTAÇÃO',
            },
            {
                name: 'Ciência da Computação',
                description: 'Curso voltado para a formação ampla na área de tecnologia da informação',
                department: 'DECOM - DEPARTAMENTO DE COMPPUTAÇÃO',
            },
            {
                name: 'Engenharia da Computação',
                description: 'Curso voltado para a formação ampla na área de tecnologia da informação',
                department: 'DECOM - DEPARTAMENTO DE COMPPUTAÇÃO',
            },
            {
                name: 'Engenharia de Software',
                description: 'Curso voltado para a formação ampla na área de tecnologia da informação',
                department: 'DECOM - DEPARTAMENTO DE COMPPUTAÇÃO',
            },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Course.js.map