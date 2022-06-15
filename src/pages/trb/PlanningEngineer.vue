<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li class="tab-link active" data-tab="tab-list-dashboard-feedback">Dashboard Feedback</li>
                <li class="tab-link" data-tab="tab-list-validation-clustering">Validation Clustering</li>
                <!-- <li class="tab-link" data-tab="tab-list-database-editor">Database Editor</li> -->
                <li class="tab-link" data-tab="tab-list-database-editor-2">Database Editor</li>
            </ul>
            <div class="card tab-content active" id="tab-list-dashboard-feedback" style="border-radius: 0px 8px 8px 8px;">
                <!-- Dashboard Feedback -->
                <Feedback/>

            </div>
            <div class="card tab-content" id="tab-list-validation-clustering">
                <!-- Validation Clustering -->
                <Validation/>

            </div>
            <!-- <div class="card tab-content" id="tab-list-database-editor"> -->
                <!-- Database Editor -->
                <!-- <Database/> -->
            <!-- </div> -->

            <div class="card tab-content" id="tab-list-database-editor-2">
                <!-- Database Editor  2-->
                <DBEditor/> 
            </div>
        </div>
    </div>
</template>

<script>

import Feedback from './pages/Feedback'
import Validation from './pages/Validation'
// import Database from './pages/Database'
import DBEditor from './pages/DBEditor'

export default {

    data: () => ({

        
    }),

    components: {
        Feedback, 
        Validation,
        // Database,
        DBEditor
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
