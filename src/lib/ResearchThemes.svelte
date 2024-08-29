<script lang="ts">
    import Grid from "src/lib/grid-row/Grid.svelte";
    import GridRow from "src/lib/grid-row/GridRow.svelte";
</script>

<p>
    Research at the Turing is largely organised into three themes, namely:
    Health; Environment and Sustainability; and Defence and National Security.
    Apart from these, we also carry out foundational research in data science
    and AI, which spans all of these themes.
</p>

<p>(Something about DSaP?!)</p>

<p>Click on each of these links to learn more.</p>

<Grid>
    <GridRow
        pictureFirst={true}
        href="https://www.turing.ac.uk/research/transformation-health"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
        title="Health"
    >
        <p>
            “I tell you I must go!” I retorted, roused to something like
            passion. “Do you think I can stay to become nothing to you? Do you
            think I am an automaton?—a machine without feelings? and can bear to
            have my morsel of bread snatched from my lips, and my drop of living
            water dashed from my cup?
        </p>
    </GridRow>

    <GridRow
        pictureFirst={false}
        href="https://www.turing.ac.uk/research/environment-and-sustainability"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
        title="Environment and Sustainability"
    >
        <p>
            Do you think, because I am poor, obscure, plain, and little, I am
            soulless and heartless? You think wrong!—I have as much soul as
            you,—and full as much heart! And if God had gifted me with some
            beauty and much wealth, I should have made it as hard for you to
            leave me, as it is now for me to leave you.
        </p>
    </GridRow>

    <GridRow
        pictureFirst={true}
        href="https://www.turing.ac.uk/research/defence-and-national-security"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
        title="Defence and National Security"
    >
        <p>
            I am not talking to you now through the medium of custom,
            conventionalities, nor even of mortal flesh;—it is my spirit that
            addresses your spirit; just as if both had passed through the grave,
            and we stood at God’s feet, equal,—as we are!”
        </p>
    </GridRow>

    <GridRow
        pictureFirst={false}
        href="https://www.turing.ac.uk/research/research-programmes/fundamental-ai"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
        title="Foundational Research"
    >
        <p>Lorem ipsum, Jane's monologue ended there.</p>
    </GridRow>
</Grid>

<style>
    p {
        margin: 0;
    }
</style>
