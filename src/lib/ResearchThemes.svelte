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

<p>Click on each of these links to learn more.</p>

<Grid>
    <GridRow
        pictureFirst={true}
        href="https://www.turing.ac.uk/science-innovation/defence-and-national-security"
        imgSrc={dandns}
        title="Defence and National Security"
    >
        <p class="quote small">
            To protect the UK, its people, and the places they inhabit
        </p>
        <p class="small">
            Rising technological change, global connectivity, and expanding data
            are creating new security risks while also making it harder for
            defence agencies to extract timely insights. Rapid innovation is
            also challenging lawmakers and policymakers to keep governance
            frameworks up to date. To protect people and national interests, the
            UK must stay ahead through continued investment in research,
            innovation, and advanced security technologies.
        </p>
    </GridRow>

    <GridRow
        pictureFirst={true}
        href="https://www.turing.ac.uk/science-innovation/health"
        imgSrc={health}
        title="Health"
    >
        <p class="quote small">
            To transform health and enable better outcomes for all
        </p>
        <p class="small">
            Health services such as the NHS face growing pressure and an
            increasingly urgent need for major transformation. Longer lifespans,
            rising long-term health conditions, unmet care needs, workforce
            strain, and escalating treatment costs are all intensifying the
            challenge. Addressing this will require stronger prevention of ill
            health alongside significant improvements in the productivity and
            effectiveness of health services.
        </p>
    </GridRow>

    <GridRow
        pictureFirst={true}
        href="https://www.turing.ac.uk/science-innovation/environment-and-sustainability"
        imgSrc={eands}
        title="Environment and Sustainability"
    >
        <p class="quote small">
            To address the climate and biodiversity crisis and the need for
            greater sustainability
        </p>
        <p class="small">
            Climate change is already reshaping the world, bringing more extreme
            weather, rising sea levels, and growing risks to food, water, and
            infrastructure in the UK and globally. Exceeding the 1.5&nbsp;°C warming
            threshold is expected to intensify these impacts, increasing floods,
            droughts, and pressure on societies and economies. Addressing this
            requires urgent international cooperation to cut emissions, build
            resilience, and accelerate innovation in forecasting,
            decarbonisation, and climate-adaptation technologies.
        </p>
    </GridRow>

    <GridRow
        pictureFirst={true}
        href="https://www.turing.ac.uk/science-innovation/fundamental-research"
        imgSrc={fundamentalai}
        title="Fundamental Research"
    >
        <p class="small">
            Fundamental research in data science and AI is central to the Turing
            2.0 strategy, supporting major challenges in environment, health,
            and national security. The programme focuses on interdisciplinary
            pathways that move ideas from basic research through application to
            real-world impact, while promoting accessible, sustainable, and
            trustworthy AI. Current work includes missions such as AI for
            Physical Systems, developing advanced methods to model, predict, and
            control complex real-world systems.
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
