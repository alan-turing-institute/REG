<script lang="ts">
    export let imgSrc: string;
    export let alt: string;

    export let hovered: boolean;
    
    // Keep href prop for backwards compatibility but don't use it
    export let href: string | null;
    // eslint-disable-next-line no-unused-vars
    href; // Suppress unused variable warning
</script>

<div
    class="image-container"
    on:mouseenter={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
    class:hovered
    role="img"
    aria-label={alt}
>
    <img src={imgSrc} {alt} class:hovered />
</div>

<style>
    .image-container {
        margin: 0;
        padding: 0;
        min-width: 100px;
        width: 30%;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    img {
        width: 100%;
        border-radius: 5px;
        transition:
            opacity 0.3s,
            box-shadow 0.3s;
        object-fit: cover;
    }

    img.hovered {
        opacity: 0.9;
        box-shadow: 0 0 5px 2px #7c0b9e;
    }
</style>
