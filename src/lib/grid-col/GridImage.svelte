<script lang="ts">
    export let href: string;
    export let imgSrc: string;
    export let alt: string;

    export let hovered: boolean;
</script>

<a
    {href}
    target="_blank"
    on:mouseenter={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
    class:hovered
>
    <img src={imgSrc} {alt} class:hovered />
</a>

<style>
    a, a:hover {
        /* Override global style as we don't want images to be underlined */
        background-size: 100% 0px, 0 2px;
    }

    img {
        height: 100%;
        max-height: 200px;
        width: 100%;
        border-radius: 5px;
        transition: opacity 0.3s, box-shadow 0.3s;
        object-fit: cover;
    }

    img.hovered {
        opacity: 0.9;
        box-shadow: 0 0 5px 2px #7c0b9e;
    }
</style>
