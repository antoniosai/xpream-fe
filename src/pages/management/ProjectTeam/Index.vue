<template>

    <div>
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li class="tab-link active" data-tab="tab-list-pattern">Position Keywords</li>
                <li class="tab-link" data-tab="tab-list-master">Per Line</li>
            </ul>
            <div class="card tab-content active" id="tab-list-pattern" style="border-radius: 0px 8px 8px 8px;">
                
                <Position />

            </div>
            <div class="card tab-content" id="tab-list-master">
                
                <Team />

            </div>
        </div>
    </div>


</template>

<script>


import Position from './Position'
import Team from './Team'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {

    components: {
        Position, Team,
        Loading
    },

    computed: {
    },

    data: () => ({
    }),

    watch() {

    },

    mounted() {
        this.tabJs()
    },

    watch: {},

    methods: {

        tabJs: function() {
            $('ul.tab-menu li').click(function () {
                var tab_id = $(this).attr('data-tab');

                $('ul.tab-menu li').removeClass('active');
                $('.tab-content').removeClass('active');

                $(this).addClass('active');
                $("#" + tab_id).addClass('active');
            });
        }
    }
}
</script>

<style>

    /* Dot */
    ::v-deep .clickable {
        cursor: pointer; 
    }

    ::v-deep .dot {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer; 
    }
    
</style>