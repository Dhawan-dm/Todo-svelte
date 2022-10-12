<script>
  import { todosArray } from "../store/store";

  let text = "";

  function handleSubmit() {
    let newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      isCompleted: false,
    };

    todosArray.update((value) => {
      return {
        ...value,
        todos: [newTodo, ...value.todos],
      };
    });

    text = "";
  }

  function handleToggleTodo() {
    let check = 0;
    let incompleteTodo;
    todosArray.update((value) => {
      const uncheckAll = () => {
        incompleteTodo = value.todos.map((todo) => {
          if (todo.isCompleted) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        });
      };
      let completeTodo = value.todos.map((todo) => {
        if (!todo.isCompleted) {
          todo.isCompleted = !todo.isCompleted;
          check = 1;
        }
        return todo;
      });
      if (check === 0) {
        uncheckAll();
      }
      if (check === 0) {
        return {
          ...value,
          todos: incompleteTodo,
        };
      } else {
        return {
          ...value,
          todos: completeTodo,
        };
      }
    });
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css"
  />
</svelte:head>

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="check-all-container">
      <i class="mi mi-chevron-down" on:click={handleToggleTodo} />
    </div>

    <input
      bind:value={text}
      type="text"
      id="add-todo"
      class="add-todo"
      placeholder="what needs to be done"
    />
  </form>
</main>

<style>
  main {
    width: 50%;
    background-color: white;
  }

  form {
    display: flex;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid #d9d9d9;
  }
  .check-all-container {
    display: flex;
    width: 15%;
    justify-content: center;
    align-items: center;
  }
  i {
    font-size: 20px;
    color: #d9d9d9;
  }
  .add-todo {
    margin: 0px;
    width: 100%;
    height: 50px;
    border: none;
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  }
  input::placeholder {
    color: #d9d9d9;
  }
  input:focus {
    outline: none;
  }
</style>
