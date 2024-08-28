<script lang="ts">
    import GridImage from "src/lib/grid/GridImage.svelte";
    import GridText from "src/lib/grid/GridText.svelte";

    export let pictureFirst: boolean;
    export let textBigger: boolean;

    export let href: string;
    export let title: string;
    export let imgSrc: string;

    let hovered: boolean = false;
</script>

{#if pictureFirst}
    <GridImage {href} {imgSrc} alt={title} bind:hovered />
    <GridText {href} {title} {textBigger} bind:hovered>
        <slot />
    </GridText>
{:else}
    <GridText {href} {title} {textBigger} bind:hovered>
        <slot />
    </GridText>
    <GridImage {href} {imgSrc} alt={title} bind:hovered />
{/if}
