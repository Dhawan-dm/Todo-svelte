<script>
  import List from "./components/List.svelte";
</script>

<main>
  <div class="container">
    <List />
  </div>
</main>

<style>
	:global(body){
		margin: 0px;
		padding: 0px;
	}
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    background: #f5f5f5;
    color: #4d4d4d;
  }
</style>
