<template>
  <div>
    <h2>Todos</h2>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>

      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{todo.title}}
        <span @click="deleteTodo(todo.id)">X</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"])
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style lang="scss">
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  position: relative;
  z-index: 1;

  span {
    position: absolute;
    top: 0;
    right: 0;
    background: rgb(37, 148, 98);
    width: 30px;
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #fff;
      color: #41b883;
    }
  }
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;

  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }

  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  }
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>