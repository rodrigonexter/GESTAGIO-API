/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Parabéns Rodrigo!!!'
})

Route.group(() => {
  // Routes of Course
  Route.resource('courses', 'CoursesController').apiOnly()
  // Routes of Coordinator
  Route.resource('users', 'UsersController').apiOnly()
  // Routes of Company
  Route.resource('companies', 'CompaniesController').apiOnly()
  // Routes of Student
  Route.resource('students', 'StudentsController').apiOnly()
  // Routes of Student
  Route.resource('teachers', 'TeachersController').apiOnly()
  // Routes of Internships
  Route.resource('internships', 'InternshipsController').apiOnly()
  //roites of supervisors
  Route.resource('supervisors', 'SupervisorsController').apiOnly()
})

Route.post('login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  try {
    const token = await auth.use('api').attempt(email, password)
    return token
  } catch {
    return response.unauthorized('Usuário ou Senha inválidos')
  }
})
