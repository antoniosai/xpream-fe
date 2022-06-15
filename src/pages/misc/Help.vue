<template>

    <div>


        <div class="content-header"></div>
        <div class="content-body">

            ok

        </div>

    </div>
    
</template>

<script>

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {

    components: {
        Loading
    },

    data: () => ({
        loading: {
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: true,
            cancel: true
        },
    }),

    mounted() {
    },

    methods: {


    },
}
</script>