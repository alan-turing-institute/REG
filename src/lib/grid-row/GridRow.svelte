<script lang="ts">
    import GridImage from "src/lib/grid-row/GridImage.svelte";
    import GridText from "src/lib/grid-row/GridText.svelte";

    export let pictureFirst: boolean;
    export let href: string | null;
    export let title: string;
    export let imgSrc: string;

    let hovered: boolean = false;
</script>

<div class="grid-container picture-first" class:reversed={!pictureFirst}>
    <GridImage {href} {imgSrc} alt={title} bind:hovered />
    <GridText {href} {title} bind:hovered alignRight={!pictureFirst}>
        <slot />
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
