import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos(state){
    return state.todos
  }
};

const actions = {
  // view todo item 
  async fetchTodos({commit}){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos', response.data)
  },
  // add todo item 
  async addTodo({commit}, title){
    const response =  await axios.post('https://jsonplaceholder.typicode.com/todos',{ title, completed: false});
    commit('newTodo', response.data)
  },
  // delete todo 
  async deleteTodo({commit},id){
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo',id)
  },
  // filter todos 
  async filterTodos({commit}, e){
    // Get selected number//
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

    commit('setTodos', response.data)
    
  }
};

const mutations = {
  setTodos:(state, todos) => (state.todos = todos),
  newTodo: (state, todo) => (state.todos.unshift(todo)),
  removeTodo: (state, id) => (state.todos = state.todos.filter(item=>item.id !== id))
};

export default{
  state,
  getters,
  actions,
  mutations
}