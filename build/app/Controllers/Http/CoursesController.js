"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Course_1 = __importDefault(require("../../Models/Course"));
class CoursesController {
    async index() {
        const course = await Course_1.default.all();
        return course;
    }
    async store({ request, response }) {
        const body = request.body();
        const course = await Course_1.default.create(body);
        response.status(201);
        return {
            message: 'Course created!',
            data: course,
        };
    }
    async show({ params }) {
        const course = await Course_1.default.find(params.id);
        return {
            data: course,
        };
    }
    async update({ request, params }) {
        const course = await Course_1.default.find(params.id);
        course.name = request.input('name');
        course.description = request.input('description');
        course.department = request.input('department');
        await course.save();
        return course;
    }
    async destroy({ params }) {
        const course = await Course_1.default.find(params.id);
        await course.delete();
        return {
            message: 'Course deleted',
            data: course,
        };
    }
}
exports.default = CoursesController;
//# sourceMappingURL=CoursesController.js.map