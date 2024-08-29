<script lang="ts">
    import Grid from "src/lib/grid-row/Grid.svelte";
    import GridRow from "src/lib/grid-row/GridRow.svelte";

    import treg from "src/assets/treg.png";
    import handbook from "src/assets/handbook.png";
</script>

<p>
    We are a distributed team, with members based across the UK (and sometimes
    beyond). The vast majority of our activities are designed for a hybrid
    working model.
</p>

<p>
    Each year, there are several occasions where more of us tend to come
    together in person (which gives us the chance to take the photos you see
    here!):
</p>

<ul>
    <li>
        Away Days, where we brainstorm ways of improving what we do as a team;
    </li>
    <li>
        AIUK, the Turing's <a href="https://ai-uk.turing.ac.uk/" target="_blank"
            >flagship conference</a
        >;
    </li>
    <li>
        Hack Week, where we take a week off work to create fun (and sometimes
        useful!) projects;
    </li>
    <li>
        RSECon, the annual <a
            href="https://rsecon24.society-rse.org/"
            target="_blank">conference for research software engineering</a
        >.
    </li>
</ul>

<Grid>
    <GridRow
        pictureFirst={true}
        href="https://medium.com/@turinghut23/a-look-back-at-reg-hack-week-f7549462d049"
        imgSrc={treg}
        title="Hack Week 2024"
    >
        <p>
            We published a blog post about our experiences at Hack Week this
            year, and all the projects we worked on! (Yes, including dinosaurs.
            🦖)
        </p>
    </GridRow>

    <GridRow
        pictureFirst={true}
        href="https://alan-turing-institute.github.io/REG-handbook/"
        imgSrc={handbook}
        title="Our handbook"
    >
        <p>
            For a more detailed look at how we work, do check out our handbook:
            this is a living document that documents our practices and
            processes.
        </p>
    </GridRow>
</Grid>

<p>
    Apart from project work, we also have 20% of our time set aside for personal
    development as well as internal team responsibilities. Some of our outputs
    from this time include:
</p>

<ul>
    <li>
        <a
            href="https://alan-turing-institute.github.io/TuringDataStories/"
            target="_blank">Turing Data Stories</a
        >, a series of short, engaging, and accessible stories about using data
        science to analyse cultural phenomena in our world.
    </li>
    <li>
        <a
            href="https://alan-turing-institute.github.io/summer-experience-challenges/"
            target="_blank">A series of challenges</a
        > for the Turing Summer Experience, a week-long summer school aimed at improving
        access to data science careers for underrepresented groups.
    </li>
    <li>
        Numerous contributions to open-source software libraries, which we have
        written <a
            href="https://www.turing.ac.uk/blog/open-source-software-why-it-matters-and-how-get-involved"
            target="_blank">a blog post</a
        > about.
    </li>
</ul>

<style>
    p {
        margin: 0;
    }

    ul {
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>
