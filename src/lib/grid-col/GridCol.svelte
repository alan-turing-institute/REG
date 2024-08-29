<script lang="ts">
    import GridImage from "src/lib/grid-col/GridImage.svelte";
    import GridText from "src/lib/grid-col/GridText.svelte";

    export let href: string;
    export let title: string;
    export let imgSrc: string;

    let hovered: boolean = false;
</script>

<GridImage {href} {imgSrc} alt={title} bind:hovered />
<GridText {href} {title} bind:hovered>
    <slot />
</GridText>
