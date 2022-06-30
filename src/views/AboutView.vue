<template>
    <section class="sf-about-01">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-6 text-center">
                    <img src="@/assets/images/img-05.png" alt="" width="80%">
                </div>
                <div class="col-lg-6">
                    <h2>QUEM SOMOS</h2>
                    <p>Clique aqui e comece a digitar. Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.</p>
                    <p class="fst-italic">Equipe Suco Fresh</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'AboutView',
    components: {}
}
</script>
<style>
    .sf-about-01 {
        padding: 80px 0px;
    }
    .sf-about-01 h2 {
        font-size: 60px;
        font-weight: 300;
    }
    .sf-about-01 p {
        margin-bottom: 15px !important;
    }
    @media (max-width: 575.98px) {}
    @media (max-width: 767.98px) {
        .sf-about-01 {
            padding: 40px 0px;
        }
        .sf-about-01 img {
            margin-bottom: 30px;
        }
    }
    @media (max-width: 991.98px) {}
    @media (max-width: 1199.98px) {}
    @media (max-width: 1399.98px) {}
</style>