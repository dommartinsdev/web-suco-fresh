<template>
    <footer class="ea-footer">
        <div class="container py-4">
            <div class="row align-items-center">
                <div class="col-lg-2 m-0 text-center">
                    <img src="../assets/icons/brand.svg" alt="" width="200px">
                </div>
                <div class="col-lg-8">
                    <div class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" href="/">INÍCIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about">SOBRE NÓS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="store">ONDE COMPRAR</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact">CONTATO</a>
                        </li>
                    </div>
                </div>
                <div class="col-lg-2 text-center ea-user">
                    <a href="https://vuejs.org/">
                        <img src="../assets/icons/icon-vue.svg" alt="" width="25px">
                    </a>
                    <a href="https://www.linkedin.com/in/jesse-martins/" alt="">
                        <img src="../assets/icons/icon-linkedin.svg" alt="" width="25px">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style>
.ea-footer p {
    margin: 0px;
    font-size: 18px;
    font-weight: 300;
}

.ea-footer .nav-link {
    font-size: 18px;
    color: var(--color-blue);
}

.ea-user img {
    margin: 0px 10px 0px 5px;
}

@media (max-width: 575.98px) {}

@media (max-width: 767.98px) {}

@media (max-width: 991.98px) {}

@media (max-width: 1199.98px) {}

@media (max-width: 1399.98px) {}
</style>
<script>
export default {
    name: 'FooterVue',
}
</script>