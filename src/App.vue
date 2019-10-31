<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
     <FilterTodos/> 
    <Todos/>
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Todos from './components/Todos.vue'
import FilterTodos from './components/FilterTodos.vue'

export default {
  name: 'app',
  components: {
    AddTodo,
    Todos,
    FilterTodos
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';
</style>
