<template>
    <section class="sf-home-01">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-6">
                    <h1>SUCOS<br>NATURAIS<br>DE LARANJA</h1>
                    <p>Descubra o sabor das nossas laranjas e sumos naturais, feitos das melhores e mais doces laranjas.
                    </p>
                </div>
                <div class="col-lg-6 text-center">
                    <img src="@/assets/images/img-01.png" width="80%">
                </div>
            </div>
        </div>
    </section>
    <section class="sf-home-02">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-6 text-center order-1 order-lg-0">
                    <img src="@/assets/images/img-02.png" width="80%">
                </div>
                <div class="col-lg-6 order-0 order-lg-1">
                    <h1>DAS NOSSAS<br />PRÓPRIAS<br />PLANTAÇÕES</h1>
                    <p>Plantação caseira numa pequena quinta no coração do Algarve. As nossas laranjas estão cheias de
                        luz solar, sem herbicidas, insecticidas ou fertilizantes.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="sf-home-03">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-6 order-0 order-lg-0">
                    <h1>CONTÉM VITAMINAS E<br /> ANTIOXIDANTES</h1>
                    <p>O sumo natural produzido é rico em vitaminas C, A e minerais, como o Ferro e Cálcio.</p>
                </div>
                <div class="col-lg-6 text-center order-1 order-lg-1">
                    <img src="@/assets/images/img-03.png" width="80%">
                </div>
            </div>
        </div>
    </section>
    <section class="sf-home-04">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-6 text-center order-1 order-lg-0">
                    <img src="@/assets/images/img-04.png" width="80%">
                </div>
                <div class="col-lg-6 order-0 order-lg-1">
                    <h1>A SUA DOSE<br /> DIÁRIA DE FRESCURA</h1>
                    <p>Compre o nosso sumo no seu mercado local ou encomende-o para sua casa, desfrutando dos benefícios
                        de ter uma dose de frescura diária.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="sf-home-05">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-12 text-center">
                    <h2>SIGA O SABOR</h2>
                    <p>Encomende o nosso sumo online, compre-o num mercado local ou venha até nós. Teremos muito gosto
                        em oferecer-lhe o nosso melhor sumo natural.</p>
                    <a class="btn btn-outline-dark rounded-0 py-3 px-5 mt-3" href="/contact">Entre contato</a>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.sf-home-01,
.sf-home-02,
.sf-home-03,
.sf-home-04 {
    padding: 40px 0px 40px;
}

.sf-home-01 h1,
.sf-home-02 h1,
.sf-home-03 h1,
.sf-home-04 h1 {
    font-size: 60px;
    font-weight: 300;
    color: var(--color-dark-bold);
}

.sf-home-01 p,
.sf-home-02 p,
.sf-home-03 p,
.sf-home-04 p {
    color: var(--color-dark-light);
    font-weight: 300;
}

.sf-home-05 {
    padding: 40px 0px;
}

.sf-home-05 h2 {
    font-size: 50px;
    font-weight: 300;
    color: var(--color-dark-bold);
}

.sf-home-05 p {
    color: var(--color-dark-light);
    font-weight: 300;
}

@media (max-width: 575.98px) {

    .sf-home-01,
    .sf-home-02,
    .sf-home-03,
    .sf-home-04 {
        padding: 20px 0px;
    }

    .sf-home-01 h1,
    .sf-home-02 h1,
    .sf-home-03 h1,
    .sf-home-04 h1 {
        font-size: 45px;
        font-weight: 300;
        color: var(--color-dark-bold);
    }

    .sf-home-01 img,
    .sf-home-02 img,
    .sf-home-03 img,
    .sf-home-04 img {
        margin-top: 30px;
    }
}

@media (max-width: 767.98px) {}

@media (max-width: 991.98px) {}

@media (max-width: 1199.98px) {}

@media (max-width: 1399.98px) {}
</style>
<script>
export default {
    name: 'HomeView',
    components: {}
}
</script>