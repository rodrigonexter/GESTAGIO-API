"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = __importDefault(require("../../Models/Company"));
class CompaniesController {
    async index() {
        const company = await Company_1.default.all();
        return company;
    }
    async store({ request, response }) {
        const body = request.body();
        const company = await Company_1.default.create(body);
        response.status(201);
        return {
            message: 'Company created!',
            data: company,
        };
    }
    async show({ params }) {
        const company = await Company_1.default.find(params.id);
        return company;
    }
    async update({ request, params }) {
        const company = await Company_1.default.find(params.id);
        company.name = request.input('name');
        company.company_id = request.input('company_id');
        company.phone = request.input('phone');
        company.email = request.input('email');
        company.address = request.input('address');
        await company.save();
        return company;
    }
    async destroy({ params }) {
        const company = await Company_1.default.find(params.id);
        await company.delete();
        return {
            message: 'Company deleted',
            data: company,
        };
    }
}
exports.default = CompaniesController;
//# sourceMappingURL=CompaniesController.js.map