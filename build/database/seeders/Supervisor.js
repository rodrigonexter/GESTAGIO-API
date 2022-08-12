"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Supervisor_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Supervisor"));
class default_1 extends Seeder_1.default {
    async run() {
        await Supervisor_1.default.createMany([
            {
                name: 'José Souza Campos',
                email: 'rodrigo@gmail.com',
                phone: '(38) 99893-8650)',
                company_id: 1,
            },
            {
                name: 'Rodrigo Souza Campos',
                email: 'rodrigo@gmail.com',
                phone: '(38) 99893-8650)',
                company_id: 1,
            },
            {
                name: 'Ricardo Souza Campos',
                email: 'rodrigo@gmail.com',
                phone: '(38) 99893-8650)',
                company_id: 2,
            },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Supervisor.js.map