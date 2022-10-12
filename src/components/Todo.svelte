<script>
  import { todosArray } from "../store/store";
  export let todo;

  let edit = false;

  function completeTodo(id) {
    todosArray.update((value) => {
      return {
        ...value,
        todos: value.todos.map((todo) => {
          if (todo.id === id) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        }),
      };
    });
  }

  function removeTodo(id) {
    todosArray.update((value) => {
      return {
        ...value,
        todos: value.todos.filter((todo) => todo.id !== id),
      };
    });
  }

  function toggleEdit() {
    edit = true;
  }

  function handleEdit(event, id) {
    let newVal = event.target.value;
    if (event.key === "Enter") {
      todosArray.update((value) => {
        return {
          ...value,
          todos: value.todos.map((todo) => {
            if (todo.id === id) {
              todo.text = newVal;
            }
            return todo;
          }),
        };
      });

      edit = false;
    }
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css"
  />
</svelte:head>

<main>
  <li class="list-items">
    <div class="list-todo">
      <div class="check">
        <input
          on:click={() => completeTodo(todo.id)}
          checked={todo.isCompleted}
          type="checkbox"
          id="toggle-complete"
          class="toggle-complete"
        />
        <label for="toggle-complete" />
      </div>
      {#if edit}
        <div class="input-container">
          <input
            on:keydown={(event) => handleEdit(event, todo.id)}
            class="update"
            type="text"
            value={todo.text}
          />
        </div>
      {:else}
        <div class="input-container">
          <div
            on:dblclick={toggleEdit}
            class={todo.isCompleted ? "checked" : "todo-value"}
          >
            {todo.text}
          </div>
        </div>
      {/if}
      <div class="remove-container">
        <div class={"remove"} on:click={() => removeTodo(todo.id)}>
          <i class="mi mi-close" />
        </div>
      </div>
    </div>
  </li>
</main>

<style>
  main {
    width: 100%;
    height: 50px;
    margin: 0px;
    background-color: white;
    border-bottom: 1px solid #d9d9d9;
  }
  .list-items {
    height: 100%;
    width: 350px;
  }
  .list-todo {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0px;
  }
  .check {
    display: flex;
    width: 15%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .toggle-complete {
    width: 20px;
    height: 20px;
    margin: 0px;
  }
  .input-container {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .todo-value {
    display: flex;
    margin: 0px 10px;
    height: 100%;
    width: 100%;
    padding: 5px 0px;
    align-items: center;
  }
  li {
    list-style: none;
    margin: 0px;
  }
  .update {
    width: 100%;
    height: 100%;
    margin: 0px;
    border: none;
    padding: 5px 10px;
  }
  input:focus {
    outline: none;
  }
  .remove-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    margin: 0px;
    color: #cc9a9a;
  }
  .checked {
    display: flex;
    margin: 0px 10px;
    height: 100%;
    width: 100%;
    padding: 5px 0px;
    align-items: center;
    color: #d9d9d9;
    text-decoration: line-through;
  }
</style>
