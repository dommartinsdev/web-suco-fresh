<template>
    <section class="sf-store">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220896.46362881432!2d-51.44776185200261!3d-30.108295616877896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS%2C%20Brazil!5e0!3m2!1sen!2sus!4v1656626925930!5m2!1sen!2sus" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-lg-6">
                    <h3>MERCADOS LOCAIS</h3>
                    <h4>Clique aqui e comece a digitar. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.</h4>
                    <h5>Porto Alegre</h5>
                    <p>Rua do Ouro 797, 4150-555 Porto ALegre</p>
                    <p>E-mail: sucofresh@gmail.com</p>
                </div>
            </div>
            <div class="row d-flex align-items-center mt-5">
                <div class="col-lg-6 order-1 order-lg-0">
                    <h3>SUPERMERCADOS</h3>
                    <h4>Clique aqui e comece a digitar. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.</h4>
                    <h5>Canoas</h5>
                    <p>Av. Tomás Cabreira 200, 8500-802 Canoas</p>
                    <p>E-mail: sucofresh@gmail.com</p>
                </div>
                <div class="col-lg-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110662.78173709702!2d-51.31481506318983!3d-29.91580039241142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197aa8021e5571%3A0xd0de460f7518f586!2sCanoas%2C%20RS%2C%20Brazil!5e0!3m2!1sen!2sus!4v1656627649367!5m2!1sen!2sus" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
    .sf-store {
        padding: 80px 0px;
    }
    .sf-store h3 {
        font-size: 35px;
        font-weight: 300;
        margin-bottom: 15px;
    }
    .sf-store h4 {
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: 300;
    }
    
    @media (max-width: 575.98px) {}
    @media (max-width: 767.98px) {
        .sf-store {
            padding: 40px 0px;
        }
        .sf-store iframe {
            margin-bottom: 30px;
        }
    }
    @media (max-width: 991.98px) {}
    @media (max-width: 1199.98px) {}
    @media (max-width: 1399.98px) {}
</style>
<script>
export default {
    name:'StoreView',
    components:{}
}
</script>