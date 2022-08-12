"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return 'Parabéns Rodrigo!!!';
});
Route_1.default.group(() => {
    Route_1.default.resource('courses', 'CoursesController').apiOnly();
    Route_1.default.resource('users', 'UsersController').apiOnly();
    Route_1.default.resource('companies', 'CompaniesController').apiOnly();
    Route_1.default.resource('students', 'StudentsController').apiOnly();
    Route_1.default.resource('teachers', 'TeachersController').apiOnly();
    Route_1.default.resource('internships', 'InternshipsController').apiOnly();
    Route_1.default.resource('supervisors', 'SupervisorsController').apiOnly();
    Route_1.default.resource('periods', 'PeriodsController').apiOnly();
});
Route_1.default.post('login', async ({ auth, request, response }) => {
    const email = request.input('email');
    const password = request.input('password');
    try {
        const token = await auth.use('api').attempt(email, password);
        return token;
    }
    catch {
        return response.unauthorized('Usuário ou Senha inválidos');
    }
});
//# sourceMappingURL=routes.js.map