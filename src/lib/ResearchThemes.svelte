<script lang="ts">
    import Grid from "src/lib/grid-row/Grid.svelte";
    import GridRow from "src/lib/grid-row/GridRow.svelte";

    import eands from "src/assets/eands.png";
    import health from "src/assets/health.png";
    import dandns from "src/assets/dandns.png";
    import fundamentalai from "src/assets/fundamentalai.png";
</script>

<p>
    Research at the Turing is largely organised into three themes, namely:
    Transformation of Health; Environment and Sustainability; and Defence and
    National Security. Apart from these, we also carry out foundational research
    in data science and AI, which spans all of these themes.
</p>

<p>(Something about DSaP?!)</p>

<p>Click on each of these links to learn more.</p>

<Grid>
    <GridRow
        pictureFirst={true}
        href="https://www.turing.ac.uk/research/transformation-health"
        imgSrc={health}
        title="Transformation of Health"
    >
        <p class="quote small">
            To transform health and enable better outcomes for all
        </p>
        <p class="small">
            There are many challenges which will need to be addressed to ensure
            the future health of the population, including the demographic
            pressures of an ageing population, increasing levels of multiple
            long term conditions, the rising personal and societal costs of poor
            health and persistent inequalities in health outcomes across
            populations. To solve these it will be necessary to take a more
            integrated approach across multiple fields. The revolution in data
            science and AI enables a more proactive focus on the prevention, the
            earlier identification of disease, and earlier better targeted
            interventions to improve health for all.
        </p>
    </GridRow>

    <GridRow
        pictureFirst={false}
        href="https://www.turing.ac.uk/research/environment-and-sustainability"
        imgSrc={eands}
        title="Environment and Sustainability"
    >
        <p class="quote small">
            To address the climate and biodiversity crisis and the need for
            greater sustainability
        </p>
        <p class="small">
            The world is under threat from the twin crises of climate change and
            biodiversity loss. We understand the causes: they include climate
            change, land use change and pollution. To act on this we need to
            slow the pace of global heating, predict and mitigate climate
            impacts, and provide clear evidence to develop national and
            international policy to meet net zero targets. At the Turing we are
            working on a range of projects to address different aspects of these
            challenges, in areas such as in weather forecasting, sea-ice
            modelling, nuclear fusion, and renewables forecasting.
        </p>
    </GridRow>

    <GridRow
        pictureFirst={true}
        href="https://www.turing.ac.uk/research/defence-and-national-security"
        imgSrc={dandns}
        title="Defence and National Security"
    >
        <p class="quote small">
            To protect the UK, its people and the places they inhabit
        </p>
        <p class="small">
            The explosion of human connectivity and information availability
            creates new ways in which bad actors can cause harm to people,
            businesses, and societies, and makes it harder for defence and
            security agencies to identify, and act on insights. The UK must
            continue to stay ahead in researching, developing, and integrating
            technologies to meet these challenges. The Turing is committed to
            working providing better analysis of data at scale, helping to find
            key intelligence amongst an expanse of data and make informed
            decisions from resulting analysis; building resilient and secure
            methods of protecting networks and privacy; and developing
            evidence-based assessments of emerging technologies to help
            policymakers develop timely and effective legislation and policy.
        </p>
    </GridRow>

    <GridRow
        pictureFirst={false}
        href="https://www.turing.ac.uk/research/research-programmes/fundamental-ai"
        imgSrc={fundamentalai}
        title="Foundational Research"
    >
        <p class="small">
            Fundamental research in data science and artificial intelligence is
            a key capability in the Turing 2.0 strategy, to support the delivery
            of strategic goals and enable the application of AI methodology
            across the three grand challenges. The initial focus is on the
            development is AI for physical systems, with the aim of developing
            the next generation of foundational methods, tools and theory to
            enable modelling, prediction and control of physical systems. This
            will focus on three strands: probabilistic and generative models for
            modelling and prediction of physical systems; bridging the divide
            between data-driven and mechanistic models; and accelerating
            large-scale computational simulations through machine learning.
        </p>
    </GridRow>
</Grid>

<style>
    p {
        margin: 0;
    }

    p.quote {
        font-style: italic;
    }
    p.quote::before {
        content: "“";
    }
    p.quote::after {
        content: "”";
    }

    p.small {
        font-size: 0.9em;
    }
</style>
