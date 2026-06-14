<script lang="ts">
    import Grid from "src/lib/grid-row/Grid.svelte";
    import GridRow from "src/lib/grid-row/GridRow.svelte";
    import Email from "src/lib/Email.svelte";
</script>

<p>
    Whether you'd like to work with us, ask a question, or just say hello, we'd
    love to hear from you!
</p>

<div id="grid-container">
    <div class="grid-item">
        <h3>Careers</h3>
        <p>
            We don't have any open positions at the moment. However, if you
            would like to be notified when our job postings go live, you can
            <a href="https://forms.office.com/e/vJy48fNJXB" target="_blank"
                >subscribe to our mailing list here</a
            >.
        </p>
        <p>
            We have put together <a
                href="https://alan-turing-institute.github.io/REG-handbook/docs/join_us/recruitment_faqs/"
                target="_blank">a list of recruitment FAQs here</a
            > which explain what it's like to work with us and the application process.
        </p>
    </div>

    <div class="grid-item">
        <h3>Follow us on social media</h3>
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
    </div>

    <div class="grid-item">
        <h3>Email us</h3>
        <p>
            For any questions about recruitment, you can drop a line to <Email
                address="reg-recruitment-inbox"
            />.
        </p>
        <p>
            For all other queries, please contact Martin O'Reilly, Director of
            Research Engineering (<Email address="moreilly" />).
        </p>
    </div>

    <div class="grid-item">
        <h3>Our offices</h3>
        <p>
            The Alan Turing Institute is located in the British Library, at <a
                href="https://maps.app.goo.gl/Xj3ZmJPDwwD8RKMf7"
                target="_blank">96 Euston Road, NW1 2DB London</a
            >. It is a 5-minute walk from King&rsquo;s Cross.
        </p>
        <p>
            If you would like to arrange a visit, please do get in touch as we
            have to request a visitor&rsquo;s pass in advance.
        </p>
    </div>
</div>

<style>
    p {
        margin: 0;
    }

    div#grid-container {
        width: 90%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 20px;
    }

    @media (max-width: 600px) {
        div#grid-container {
            grid-template-columns: 1fr;
        }
    }

    div.grid-item {
        border: 1px solid rgba(53, 9, 66, 0.1);
        border-radius: 12px;
        padding: 22px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 0.9em;
        background-color: #fffdf8;
        box-shadow: var(--shadow-card);
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
    }

    div.grid-item:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-card-hover);
    }

    h3 {
        margin: 0;
        color: var(--deep);
    }
</style>
