"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Teacher_1 = __importDefault(require("../../app/Models/Teacher"));
class default_1 extends Seeder_1.default {
    async run() {
        await Teacher_1.default.createMany([
            {
                name: 'Athila Rocha',
                email: 'athila@gmail.com',
                phone: '38998989898',
                teacher_id: '2016201600',
            },
            {
                name: 'Luciana Assis',
                email: 'Luciana@gmail.com',
                phone: '2222222222',
                teacher_id: '2222222222',
            },
            {
                name: 'Alessando Vivas',
                email: 'linux@gmail.com',
                phone: '999999999999',
                teacher_id: '99999999999',
            },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Teacher.js.map