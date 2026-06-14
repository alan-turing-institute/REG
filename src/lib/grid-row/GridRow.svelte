<script lang="ts">
    import GridImage from "src/lib/grid-row/GridImage.svelte";
    import GridText from "src/lib/grid-row/GridText.svelte";
    import type { Snippet } from "svelte";

    let {
        pictureFirst,
        href,
        title,
        imgSrc,
        children,
    }: {
        pictureFirst: boolean;
        href: string | null;
        title: string;
        imgSrc: string;
        children?: Snippet;
    } = $props();

    let hovered: boolean = $state(false);
</script>

<div class="grid-container picture-first" class:reversed={!pictureFirst}>
    <GridImage {href} {imgSrc} alt={title} bind:hovered />
    <GridText {href} {title} bind:hovered alignRight={!pictureFirst}>
        {@render children?.()}
    </GridText>
</div>

<style>
    div.grid-container {
        display: flex;
        width: 85%;
        margin: 0 auto;
        gap: 0 50px;
        align-items: center;
    }

    div.reversed {
        flex-direction: row-reverse;
    }

    @media (max-width: 600px) {
        div.grid-container {
            display: flex;
            flex-direction: column;
        }
        div.reversed {
            flex-direction: column;
        }
    }
</style>
