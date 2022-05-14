<script lang="ts">
    import { navigate } from 'svelte-navigator'
    export let path;

    navigate(path)
</script>