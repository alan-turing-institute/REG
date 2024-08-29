<script lang="ts">
    export let href: string | null;
    export let title: string;
    export let hovered: boolean;
    export let alignRight: boolean;
</script>

<div class="text" class:alignRight>
    {#if href !== null}
        <a
            {href}
            target="_blank"
            on:mouseenter={() => (hovered = true)}
            on:mouseleave={() => (hovered = false)}
            class:hovered
        >
            <h3>{title}</h3>
        </a>
    {:else}
        <h3>{title}</h3>
    {/if}
    <slot />
</div>

<style>
    div.text {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    a {
        transition: color 0.3s;
        height: min-content;
        padding: 0;
        margin: 0;
        color: inherit;
        transition: color 0.3s;
        text-decoration: underline;
    }

    h3 {
        margin: 0;
        padding: 0;
        font-size: 125%;
    }

    a.hovered {
        color: #026070;
    }

    div.text {
        font-size: 90%;
    }

    div.alignRight {
        text-align: right;
    }

    @media (max-width: 600px) {
        div.text {
            text-align: center;
        }

        div.alignRight {
            text-align: center;
        }
    }
</style>
