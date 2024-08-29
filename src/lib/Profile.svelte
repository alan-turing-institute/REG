<script lang="ts">
    import GridCol from "src/lib/grid-col/GridCol.svelte";
</script>

<div id="container">
    <p>
        We are a team of data scientists, software engineers, and compute
        specialists who build tools and software to support research in data
        science and artificial intelligence at The Alan Turing Institute.
    </p>

    <p>
        In particular, we take traditional research outputs such as algorithms
        or models and transform them into software that is reproducible,
        scalable, and sustainable.
    </p>

    <div id="profile">
        <GridCol
            href="https://www.turing.ac.uk/research/research-engineering/meet-the-team"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
            title="Meet the Research Engineering team"
        >
            <p>
                Learn more about our three job roles, and meet some of the
                people in our team.
            </p>
        </GridCol>

        <GridCol
            href="https://www.turing.ac.uk/"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
            title="The Alan Turing Institute"
        >
            <p>
                The Alan Turing Institute is the UK's national institute for
                data science and artificial intelligence.
            </p>
        </GridCol>
    </div>

    <p class="nobottom">
        Although all of us have our own specialist backgrounds, we often work
        with researchers across other disciplines. Scroll down further to get a
        flavour of the kinds of projects we work on.
    </p>
</div>

<style>
    div#container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    p {
        margin: 0px;
    }

    div#profile {
        padding: 15px 30px;
        margin: 0 auto;
        display: grid;
        width: 80%;
        max-width: 800px;
        grid-template-rows: 1fr max-content max-content;
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
