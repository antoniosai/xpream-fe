<template>
    <div class="card">
        <ProjectCharter />
    </div>
</template>

<script>

import ProjectCharter from './Charter'
import ProjectTeam from './Team'

export default {

    data: () => ({

        
    }),

    components: {
        ProjectCharter, ProjectTeam
    },


    mounted() {
        this.tabJs()
    },

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

<style scoped>
    ::v-deep label {
        font-size: 12px
    }
</style>

