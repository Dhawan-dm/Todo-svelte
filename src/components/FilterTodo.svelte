<script>
    import { todosArray } from "../store/store";
    function filterTodo(filter){
        todosArray.update(value=>{
            return{
                ...value,
                show:filter
            }
        })
    }
</script>

<main>
    <div class="filters">
        <div id="all" class="filter-options" on:click={()=>{filterTodo("all")}}>All</div>
        <div id="active" class="filter-options" on:click={()=>{filterTodo("active")}}>active</div>
        <div id="completed" class="filter-options" on:click={()=>{filterTodo("completed")}}>completed</div>
    </div>
</main>

<style>
    main{
        width: 50%;
        margin:0px 50px;
    }
    .filters{
        display:flex;
        width: 100%;
    }
    .filter-options{
        margin:0px 20px;
    }
</style>    