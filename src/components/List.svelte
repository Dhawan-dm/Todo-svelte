<script>
  import { each } from "svelte/internal";
  import AddTodo from "./AddTodo.svelte";
  import Todo from "./Todo.svelte";
  import IncompleteTodo from "./IncompleteTodo.svelte";
  import FilterTodo from "./FilterTodo.svelte";
  import { todosArray } from "../store/store";
</script>

<main>
  <div class="title-container">
    <h1 class="title">todos</h1>
  </div>

  <section class="todos">
    <AddTodo />
    {#if $todosArray.todos.length}
      <ul class="list">
        {#each $todosArray.todos as todo (todo.id)}
          {#if ($todosArray.show === "active" && !todo.isCompleted) || ($todosArray.show === "completed" && todo.isCompleted) || $todosArray.show === "all"}
            <Todo {todo} />
          {/if}
        {/each}
      </ul>
      <div class="bottom">
        <IncompleteTodo />
        <FilterTodo />
      </div>
    {/if}
  </section>
</main>

<style>
  main {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .title-container {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 24px;
    color: rgba(175, 47, 47, 0.15);
  }
  .todos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .list {
    padding: 0px;
    margin: 0px;
    width: 50%;
  }
  .bottom {
    display: flex;
    width: 46%;
    height: 25px;
    align-items: center;
    padding: 5px 15px;
    background-color: white;
    font-size: 11px;
  }
</style>
