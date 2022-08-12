"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Company_1 = __importDefault(require("../../app/Models/Company"));
class default_1 extends Seeder_1.default {
    async run() {
        await Company_1.default.createMany([
            {
                name: 'JBS',
                company_id: '19.653.482/0001-07',
                phone: '(79) 99587-2937',
                email: 'jbs@gmail.com',
                address: 'Rua do fogo, 456, Diamantina, Minas Gerais',
            },
            {
                name: 'GOOGLE',
                company_id: '19.653.482/0001-07',
                phone: '(79) 99587-2937',
                email: 'jbs@gmail.com',
                address: 'Rua do fogo, 456, Diamantina, Minas Gerais',
            },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Company.js.map