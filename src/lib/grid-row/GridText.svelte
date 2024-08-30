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
        text-decoration: none;
    }

    a h3 {
        margin: 0;
        color: black;
        transition:
            color 0.3s,
            background-size 0.3s;
        background: linear-gradient(
                to right,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 1)
            ),
            linear-gradient(
                to right,
                rgba(186, 50, 227, 1),
                rgba(124, 11, 158, 1)
            );
        background-size:
            100% 1.5px,
            0 1.5px;
        background-position:
            100% 100%,
            0 100%;
        background-repeat: no-repeat;
    }
    a.hovered h3 {
        color: #7c0b9e;
        background-size:
            0 1.5px,
            100% 1.5px;
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
