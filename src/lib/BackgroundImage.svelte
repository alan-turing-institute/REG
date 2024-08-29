<script lang="ts">
    export let imagePath: string;
    export let opacity: number;
</script>

<svelte:head><link rel="preload" href={imagePath} as="image" /></svelte:head>

<picture style="--opacity: {opacity}">
    <img src={imagePath} alt="" />
</picture>

<style>
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }
    picture {
        position: fixed;
        overflow: hidden;
        opacity: var(--opacity);
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }
</style>
