import axios from 'axios'

class Api {
  constructor() {

    this.api= axios.create(
      {
        baseURL:'http://localhost:5000'
      }
      
    )

    this.api.interceptors.request.use( config => {
      const token = localStorage.getItem('token');
      config.headers.Authorization = `Bearer ${token}`
      return config
    })

    this.api.interceptors.response.use( response => { return response}, error =>{

        localStorage.removeItem('token');
        window.location = `/login`
    })

  }

  async getAll() {
    let newTodos = await this.api.get('/list')
    return newTodos
  }

  async update(id, payload) {
    let updatedTodo = await this.api.put(`/${id}`, payload);
    return updatedTodo
  }

  async create(payload) {
    let newTodo = await this.api.post('/', payload)
    return newTodo;
  }

  async delete(id) {
    await this.api.delete(`/${id}`)
  }

  async login(login) {
    const { data } = await this.api.post('/login', login);
    localStorage.setItem('token', data.token);
  }
  
}

export default new Api()


