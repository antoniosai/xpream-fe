<style scoped>

</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body">
            <div class="card">
                <div class="card-header ">
                    <div class="title-area">
                        <h3 class="title">{{ $route.meta.title }}</h3>
                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                    </div>

                    <div class="option-box"></div>
                </div>
                <div class="card-content">

                </div>
            
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: {
        Loading,
    },

    computed: {

    },

    data: () => ({
        loading: {
            isLoading: false,
            isLoadingPaginate: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        hasAccess: false,
    }),

    mounted() {
        if(!this.$can('p_dev_availability_qualification')) {
            this.$router.push({name: 'access_denied'});
        }else {
            this.hasAccess = true;
        }
    },

    watch: {},

    methods: {
    }
}
</script>