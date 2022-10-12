import { writable } from 'svelte/store'

export const todosArray = writable({
    todos:[],
    show:"all"
});