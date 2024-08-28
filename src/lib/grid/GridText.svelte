<script lang="ts">
    export let textBigger: boolean;
    export let href: string;
    export let title: string;
    export let hovered: boolean;
</script>

<a
    class="text"
    {href}
    target="_blank"
    on:mouseenter={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
    class:bigger={textBigger}
    class:hovered
>
    <div class="text">
        <h3>{title}</h3>
        <slot />
    </div>
</a>

<style>
    a.bigger {
        grid-column: span 2;
    }
    a {
        transition: color 0.3s;
        height: min-content;
        padding-top: 10px;
        color: inherit;
        text-decoration: none;
        transition: color 0.3s;
    }

    h3 {
        margin: 0;
        font-size: 125%;
        text-decoration: underline;
    }

    a.hovered {
        color: #02444f;
    }

    div.text {
        font-size: 0.9em;
    }
</style>
