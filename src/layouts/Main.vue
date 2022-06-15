<style>
/* .sidebar-collapse .main-sidebar .main-menu .menu > li > a {
    position: fixed !important; 
} */

/* 
.slimscroll {
    position: fixed !important;
} */
</style>

<template>
    <div>
        <aside class="main-sidebar" style="height: 100%; overflow-y: auto; " v-if="isLoggedIn">
            <div class="main-logo">
                <Logo />
            </div>
            <Menu />
        </aside>
        <div class="content">
            <Header v-if="isLoggedIn" />
            <div class="main-content">
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
            <Footer v-if="isLoggedIn" />
        </div>
    </div>
</template>

<script>

// Importing all necessary component
import Logo from './partials/Logo'
import Menu from './partials/Menu'
import Header from './partials/Header'
import Footer from './partials/Footer'
// Using all needed library for this component (Main.vue)
import decode from 'jwt-decode'
import toastr from 'toastr'

export default {

    components: {
        Logo, Menu, Header, Footer
    },

    mounted() {
        $('#metismenu').metisMenu()
    },

    computed: {
        isLoggedIn: function () {
            return this.$store.getters.isLoggedIn
        },
    },

    methods: {
        
    }
}

</script>

<style scoped>
@import "/public/assets/css/app.css";

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>