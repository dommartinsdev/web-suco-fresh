<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="@/assets/icons/brand.svg" width="185px">
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile" aria-controls="offcanvasRight">
                <img src="@/assets/icons/icon-menu.svg">
            </button>
            <div class="collapse navbar-collapse">
                <div class="navbar-nav ms-auto">
                    <a class="nav-link" href="/">INÍCIO</a>
                </div>
            </div>
        </div>
    </nav>
    <NavigationMobile/>
</template>
<style>
</style>
<script>
import NavigationMobile from '@/components/NavigationMobileVue.vue'
export default {
    name: 'NavigationVue',
    components:{
        NavigationMobile
    }
}
</script>
