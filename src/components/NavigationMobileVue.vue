<template>
    <div class="offcanvas offcanvas-end border-0" tabindex="-1" id="mobile" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <a class="navbar-brand" href="/">
                <img src="@/assets/icons/brand.svg" width="185px">
            </a>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="/">INÍCIO</a>
            </div>
        </div>
    </div>
</template>
<style>
    .offcanvas {
        padding: 30px;
    }
    .offcanvas .nav-link {
        font-size: 18px;
        color: var(--color-dark-normal);
    }
    .offcanvas .btn-close {
        background-image: url('@/assets/icons/icon-close.svg');
        opacity: 1;
    }
</style>
<script>
export default {
    name: 'NavigationMobileVue'
}
</script>