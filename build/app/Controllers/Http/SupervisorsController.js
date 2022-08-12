"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Supervisor_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Supervisor"));
class SupervisorsController {
    async index() {
        const supervisor = await Supervisor_1.default.all();
        return supervisor;
    }
    async store({ request, response }) {
        const body = request.body();
        const supervisor = await Supervisor_1.default.create(body);
        response.status(201);
        return {
            message: 'Supervisor created!',
            data: supervisor,
        };
    }
    async show({ params }) {
        const supervisor = await Supervisor_1.default.query().where('company_id', '=', params.id);
        return supervisor;
    }
    async update({ request, params }) {
        const supervisor = await Supervisor_1.default.find(params.id);
        supervisor.name = request.input('name');
        supervisor.email = request.input('email');
        supervisor.phone = request.input('phone');
        supervisor.company_id = request.input('company_id');
        await supervisor.save();
        return supervisor;
    }
    async destroy({ params }) {
        const supervisor = await Supervisor_1.default.find(params.id);
        await supervisor.delete();
        return {
            message: 'Supervisor deleted',
            data: supervisor,
        };
    }
}
exports.default = SupervisorsController;
//# sourceMappingURL=SupervisorsController.js.map