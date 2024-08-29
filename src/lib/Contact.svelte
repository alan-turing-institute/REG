<script lang="ts">
    import Grid from "src/lib/grid-row/Grid.svelte";
    import GridRow from "src/lib/grid-row/GridRow.svelte";
    import Email from "src/lib/Email.svelte";
</script>

<p>
    Whether you'd like to work with us, ask a question, or just say hello, we'd
    love to hear from you!
</p>

<Grid>
    <GridRow
        pictureFirst={true}
        href={null}
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
        title="Careers"
    >
        <p>
            We will be recruiting in the near future, hopefully in autumn 2024!
            You can <a
                href="https://alan-turing-institute.github.io/REG-handbook/docs/join_us/recruitment_faqs/"
                target="_blank">read our recruitment FAQs here</a
            >.
        </p>
        <p>
            If you want to be notified when our job postings go live, you can
            also
            <a href="https://forms.office.com/e/vJy48fNJXB" target="_blank"
                >subscribe to our mailing list here</a
            >.
        </p>
    </GridRow>

    <GridRow
        pictureFirst={false}
        href={null}
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
        title="Follow us on social media"
    >
        <p>
            Although we spend most of our time contributing code on GitHub, you
            can also find us on <a
                href="https://www.linkedin.com/showcase/turing-research-engineering/"
                target="_blank">LinkedIn</a
            >
            and
            <a href="https://twitter.com/turinghut23" target="_blank">Twitter</a
            >.
        </p>
    </GridRow>

    <GridRow
        pictureFirst={true}
        href={null}
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
        title="Email us"
    >
        <p>
            For any questions about recruitment, you can drop a line to <Email
                address="reg-recruitment-inbox"
            />.
        </p>
        <p>
            If you'd like to hear more about or work with us on equality,
            diversity, and inclusion, please contact our EDI leads Kat and Penny
            (<Email address="kgoldmann" />; <Email address="pyong" />).
        </p>
        <p>
            For all other queries, please contact Martin O'Reilly, Director of
            Research Engineering (<Email address="moreilly" />).
        </p>
    </GridRow>

    <GridRow
        pictureFirst={false}
        href={null}
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
        title="Our offices"
    >
        <p>
            The Alan Turing Institute is located in the British Library, at <a
                href="https://maps.app.goo.gl/Xj3ZmJPDwwD8RKMf7"
                target="_blank">96 Euston Road, NW1 2DB London</a
            >. It is a 5-minute walk from King&rsquo;s Cross.
        </p>
        <p>
            If you would like to arrange a visit, please do get in touch as we
            have to request a visitor&rsquo;s pass.
        </p>
    </GridRow>
</Grid>

<style>
    p {
        margin: 0;
    }
</style>
