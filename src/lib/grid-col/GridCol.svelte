<script lang="ts">
    import GridImage from "src/lib/grid-col/GridImage.svelte";
    import GridText from "src/lib/grid-col/GridText.svelte";
    import type { Snippet } from "svelte";

    let {
        href,
        title,
        imgSrc,
        altText = title,
        children,
    }: {
        href: string;
        title: string;
        imgSrc: string;
        altText?: string;
        children?: Snippet;
    } = $props();

    let hovered: boolean = $state(false);
</script>

<GridImage {href} {imgSrc} alt={altText} bind:hovered />
<GridText {href} {title} bind:hovered>
    {@render children?.()}
</GridText>
