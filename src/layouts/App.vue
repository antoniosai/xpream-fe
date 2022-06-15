<template>
    <div>
        <component :is="layout">
                <router-view></router-view>
        </component>
    </div>
</template>

<script>


import decode from 'jwt-decode'
const default_layout = 'imte-layout'

export default {

    components: {
    },

    mounted() {
        toastr.success('From APP.vue')
        $('#metismenu').metisMenu();
        const token = localStorage.getItem('token');
        const { exp } = decode(token)
    },

    computed: {
        layout() {
            return (this.$route.meta.layout || default_layout)
        },
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
        
    }
}
</script>

<style>
</style>