<script lang="ts">
    export let href: string | null;
    export let imgSrc: string;
    export let alt: string;

    export let hovered: boolean;
</script>

{#if href !== null}
    <a
        {href}
        target="_blank"
        on:mouseenter={() => (hovered = true)}
        on:mouseleave={() => (hovered = false)}
        class:hovered
        class="image-container"
    >
        <img src={imgSrc} {alt} class:hovered />
    </a>
{:else}
    <div class="image-container">
        <img src={imgSrc} {alt} />
    </div>
{/if}

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

    a, a:hover {
        /* Override global style as we don't want images to be underlined */
        background-size: 100% 0px, 0 2px;
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
