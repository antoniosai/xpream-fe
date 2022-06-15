<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li class="tab-link active" data-tab="tab-list-indirect">Indirect Employee</li>
            </ul>
            <div class="card tab-content active" id="tab-list-indirect" style="border-radius: 0px 8px 8px 8px;">
                <IndirectEmp />
            </div>
        </div>
    </div>
</template>

<script>

import IndirectEmp from './DynamicQuery/IndirectEmp';

export default {

    data: () => ({
    }),

    components: {
        IndirectEmp
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
