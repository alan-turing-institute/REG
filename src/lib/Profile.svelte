<script lang="ts">
    import GridRow from "src/lib/grid/GridRow.svelte";
</script>

<p>
    We are a team of data scientists, software engineers, and compute
    specialists who build tools and software to support research in data science
    and artificial intelligence at The Alan Turing Institute.
</p>

<p>
    Although all of us have our own specialist backgrounds, we often work with
    researchers across other disciplines. Scroll down further to get a flavour
    of the kinds of projects we work on.
</p>

<div id="profile">
    <GridRow
        pictureFirst={true}
        textBigger={false}
        href="https://www.turing.ac.uk/research/transformation-health"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
        title="Our roles"
    >
        <p>Blah blah roles</p>
    </GridRow>

    <GridRow
        pictureFirst={true}
        textBigger={false}
        href="https://www.turing.ac.uk/research/environment-and-sustainability"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
        title="Meet the team"
    >
        <p>Blah blah team</p>
    </GridRow>
</div>

<style>
    div#profile {
        margin-top: 40px;
        padding: 0px 30px;
        display: grid;
        width: 100%;
        max-width: 100%;
        grid-template-rows: 1fr max-content;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
        gap: 5px 50px;
    }

    @media (max-width: 600px) {
        div#profile {
            padding: 0px 10px;
            gap: 0px 20px;
        }
    }
</style>
