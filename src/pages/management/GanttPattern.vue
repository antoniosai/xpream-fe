<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li class="tab-link active" data-tab="tab-list-pattern">Pattern</li>
                <li class="tab-link" data-tab="tab-list-master">Master</li>
                <li class="tab-link" data-tab="tab-list-pmps">Mapping Aircraft</li>
            </ul>
            <div class="card tab-content active" id="tab-list-pattern" style="border-radius: 0px 8px 8px 8px;">
                <GanttPattern />

            </div>
            <div class="card tab-content" id="tab-list-master">
                <Master />
            </div>
            <div class="card tab-content" id="tab-list-pmps">
                <PMPS />
            </div>
        </div>
    </div>
</template>

<script>

import GanttPattern from './Gantt/Pattern'
import Master from './Gantt/Master'
import PMPS from './Gantt/PMPS'

export default {

    data: () => ({

        
    }),

    components: {
        GanttPattern, Master, PMPS
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
