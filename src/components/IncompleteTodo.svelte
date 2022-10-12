<script>
  import { todosArray } from "../store/store";

  $:incompleteTodo = $todosArray.todos.filter((todo)=>!todo.isCompleted).length
</script>

<main>
  <div class="incomplet-todos">
    {incompleteTodo}
    {incompleteTodo === 1 ? "item" : "items"} left
  </div>
</main>

<style>
  main {
    font-size: 11px;
  }
</style>
