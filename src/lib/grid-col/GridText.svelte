<script lang="ts">
    export let href: string;
    export let title: string;
    export let hovered: boolean;
</script>

<div class="text">
    <a
        class="text"
        {href}
        target="_blank"
        on:mouseenter={() => (hovered = true)}
        on:mouseleave={() => (hovered = false)}
        class:hovered
    >
        <h3>{title}</h3>
    </a>
</div>
<div class="text">
    <slot />
</div>

<style>
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
        color: #026070;
    }

    div.text {
        font-size: 90%;
    }
</style>
