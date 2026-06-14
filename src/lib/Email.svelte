<script lang="ts">
    let { address }: { address: string } = $props();
</script>

<a href="mailto:{address}@turing.ac.uk">{address}@turing.ac.uk</a>

<style>
    a {
        font-family: monospace;
        font-size: 95%;
    }
</style>
