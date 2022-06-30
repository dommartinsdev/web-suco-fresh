<template>
    <section class="sf-contact">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <h2>Contato</h2>
                    <h4>Se estiver na área, venha provar uma amostra ou compre a sua dose diária de frescura.</h4>
                    <h5>Porto Alegre</h5>
                    <p>Rua do Ouro 797, 4150-555 Porto ALegre</p>
                    <p>E-mail: sucofresh@gmail.com</p>
                </div>
                <div class="col-lg-6">
                    <label class="form-label">Nome</label>
                    <input type="text" class="form-control rounded-0 mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control rounded-0 mb-3">
                    <label class="form-label">Mensagem</label>
                    <textarea cols="30" rows="5" class="form-control rounded-0 mb-3"></textarea>
                    <input type="submit" value="Enviar" class="btn rounded-0 bg-dark text-white">
                </div>
            </div>
        </div>
    </section>
</template>
<style>
    .sf-contact {
        padding: 80px 0px;
    }
    .sf-contact h2 {
        font-size: 45px;
        font-weight: 600;
        margin-bottom: 15px;
    }
    .sf-contact h4 {
        font-weight: 300;
        font-size: 22px;
        margin-bottom: 15px;
    }
    @media (max-width: 575.98px) {}
    @media (max-width: 767.98px) {
        .sf-contact {
            padding: 40px 0px;
        }
    }
    @media (max-width: 991.98px) {}
    @media (max-width: 1199.98px) {}
    @media (max-width: 1399.98px) {}
</style>
<script>
export default {
    name:'ContactView',
    components:{}
}
</script>