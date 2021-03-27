import axios from 'axios'

class Api {
  constructor() {
    this.api= axios.create(
      {
        baseURL:'http://localhost:5000'
      }
    )
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
  
}

export default new Api()


