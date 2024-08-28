<script lang="ts">
    export let address: string;
</script>

<a href="mailto:{address}">{address}</a>

<style>
    a {
        font-family: monospace;
        color: #b3cffc;
    }

    a:hover {
        color: #8ab4f8;
    }

    a:visited {
        color: #b3cffc;
    }
</style>
