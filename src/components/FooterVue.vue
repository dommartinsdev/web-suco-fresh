<template>
    <footer class="sf-footer py-5">
        <div class="container text-center">
            <p>@ {{new Date().getFullYear()}} - Todos os direitos reservados.</p>
            <p>Desenvolvido por <a class="text-dark" href="https://www.linkedin.com/in/jesse-martins/">Jessé Martins</a></p>
        </div>
    </footer>
</template>
<style>
    p {
        margin: 0px !important;
        font-size: 18px;
        font-weight: 300;
    }
</style>
<script>
export default {
    name:'FooterVue',
}
</script>