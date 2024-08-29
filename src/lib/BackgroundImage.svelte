<script lang="ts">
    export let imagePath: string;
    export let opacity: number;
</script>

<svelte:head><link rel="preload" href={imagePath} as="image" /></svelte:head>

<div
    class="background-image"
    style="background-image: {`url(${imagePath})`}; opacity: {opacity}"
></div>

<style>
    .background-image {
        background-image: var(--background-image);
        background-size: cover;
        background-position: center;
        position: fixed;
        opacity: var(--opacity);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>
