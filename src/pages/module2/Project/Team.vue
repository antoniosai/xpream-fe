<template>
    <div>

        <loading 
        :loader="loading.loader"
        :color="loading.color"
        :width="loading.width"
        :height="loading.width"
        :active.sync="loading.isLoading" 
        :can-cancel="true" 
        :is-full-page="loading.fullPage"></loading>

        <div class="card-content">

            <h1>Test</h1>
            
            
        </div>
    </div>
</template>

<script>

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {

    components: {
        Loading, VueGoodTable
    },

    data: () => ({

        loading: {
            loader: 'dots',
            color: '#1976d2',
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: true,
        },

        table: {
            columns: [
                {
                    label: 'Hgr-Line',
                    field: 'hangar_line',
                    
                    width: '120px'
                }, 
                {
                    label: 'Project Sponsor',
                    field: 'project_sponsor',
                    filterOptions: {
                        enabled: true
                    },
                },
                {
                    label: 'General Manager',
                    field: 'general_manager',
                    filterOptions: {
                        enabled: true
                    },
                },
                {
                    label: 'Project Owner',
                    field: 'project_owner',
                    filterOptions: {
                        enabled: true
                    },
                },
                {
                    label: 'Status',
                    field: 'status'
                },
                {
                    label: '',
                    field: 'action'
                }
            ],
            options: {
                pagination: {
                    enabled: true,
                    mode: 'records',
                    perPage: 10,
                    position: 'bottom',
                    perPageDropdown: [10, 20, 50, 100],
                    dropdownAllowAll: false,
                    setCurrentPage: 2,
                    nextLabel: 'next',
                    prevLabel: 'prev',
                    rowsPerPageLabel: 'Rows per page',
                    ofLabel: 'of',
                    pageLabel: 'page', // for 'pages' mode
                    allLabel: 'All',
                },
                search: {
                    enabled: true,
                    initialSortBy: {field: 'hangar_line', type: 'asc'}
                }
                
            },
            serverParams: {
                columnFilters: {
                },
                sort_type: '',
                sort_field: '',
                page: 1, 
                perPage: 10,
                level: 'all',
                report: 'all',
                search_query: '',
                location: 'all',
                airframe_category: 'all',
                customer_category: 'all',
                project_status: 'all',
                doc_type: 'all',
                searchTerm: ''
            },
        },

        api: {
            master: '/api/management/line'
        },

        form: {
            hangar: []
        },

        filter: {
            per_page: 10,
            hangar: 'all',
        },

        lines: []
    }),

    mounted() {
        // this.initData()
        // this.initHangar()
    },

    methods: {

        initData: function() {
            
            var vm = this

            vm.loading.isLoading = true

            axios.get('/api/management/line', { params: vm.filter })
            .then( res => {
                vm.lines = res.data
                vm.loading.isLoading = false
            })
        },

        initHangar: function() {

            var vm = this

            vm.loading.isLoading = true

            axios.get('/api/management/hangar')
            .then( res => {
                vm.form.hangar = res.data

                vm.loading.isLoading = false
            })
        },

    }
}
</script>

<style scoped>
    ::v-deep .team_table {
        text-align: center;
    }
</style>