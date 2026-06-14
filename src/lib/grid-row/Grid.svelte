<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children?: Snippet } = $props();
</script>

<div id="grid-container">
    {@render children?.()}
</div>

<style>
    div#grid-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 30px;
        margin: 20px auto;
    }

    @media (max-width: 600px) {
        div#grid-container {
            padding: 0px 10px;
            gap: 20px 20px;
        }
    }
</style>
