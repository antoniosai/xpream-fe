<style  scoped>

</style>

<template>
  <div style="position:relative;">
    <loading style="margin-top: 50px;"
        :active.sync="loading.isLoading" 
        :can-cancel="false"
        :is-full-page="false"
        :color="loading.color"
        :loader="loading.loaderType">
    </loading>      
    <vue-good-table
        styleClass="vgt-table bordered"
        :columns="columns"
        :rows="rows"
        :search-options="{
            enabled: true,
            trigger: 'enter',
            skipDiacritics: true,
            placeholder: 'Fill and enter to search',
        }"
        :sort-options="{
            enabled: true,
            initialSortBy: {field: 'SUMLABST', type: 'desc'}
        }"
        :line-numbers="true"
        :pagination-options="{
            enabled: true,
            mode: 'pages',
            perPage: 10,
            position: 'bottom',
            perPageDropdown:  [10, 50, 100],
            dropdownAllowAll: true,
            setCurrentPage: 1,
            nextLabel: 'Next',
            prevLabel: 'Prev',
            rowsPerPageLabel: 'Rows per page',
            ofLabel: 'of',
            pageLabel: 'page',
            allLabel: 'All',
        }"        
    >
        <div slot="table-actions">
            <div class="toolbar toolbar-default">
                <!--div class="toolbar-item" style="margin-right: -8px;">
                    <div class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                        <span class="tooltiptext-x">Export Excel</span>
                        <i class="material-icons warning sync_order" >file_download</i>
                    </div>
                </div-->                                                
                <div class="toolbar-item" style="margin-right: 10px;">
                    <button class="button" @click="initData">
                        <i class='material-icons'>
                            sync
                        </i>
                        Refresh
                    </button>                                                   
                </div>                                                                                                   
            </div>
        </div> 
        <template slot="table-row" slot-scope="props">                                           
            <span v-if="props.column.field == 'AUFNR'">
                <span v-if="props.row.AUFNR.length>0">
                    <table>
                        <tbody>
                            <tr v-for="(aufnr, idx) in props.row.AUFNR" :key="idx">
                                <td>{{aufnr.matorder}}</td>
                                <td>{{aufnr.matqtyrem}}</td>
                                <td>
                                    <span style="background-color: #E74C3C;" class="status-handler" v-if="aufnr.matstatus === '18'">Waiting Purchase Order</span>
                                    <span style="background-color: gray;" class="status-handler" v-if="aufnr.matstatus === ''">Undefined</span>
                                    <span style="background-color: #7B241C;" class="status-handler" v-if="aufnr.matstatus === '13'">Available at GMF Central Store</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </span>                                          
            </span>

            <span v-else-if="props.column.field == 'STOCK'">
                <span v-if="props.row.STOCK.length>0">
                    <table>
                        <tbody>
                            <tr v-for="(stock, idx) in props.row.STOCK" :key="idx">
                                <td>{{stock.stockplant}}</td>
                                <td>{{stock.stocksloc}}</td>
                                <td>{{stock.stockbatch}}</td>
                                <td>{{stock.stockqty}}</td>
                            </tr>
                        </tbody>
                    </table>                    
                </span>                                          
            </span> 

            <span v-else-if="props.column.field == 'SHORTAGE'">
                <div class="flex-middle-default">
                    <span v-if="props.row.SHORTAGE<0">
                        <span class="status-handler" style="background-color:#E74C3C; font-size:15px;">{{props.row.SHORTAGE*-1}}</span>
                    </span>
                </div>
            </span>

            <span v-else>
                <div class="flex-middle-default">
                    {{props.formattedRow[props.column.field]}}
                </div>
            </span>
        </template>
    </vue-good-table>
    
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';
import Loading from 'vue-loading-overlay';
import axios from 'axios';

export default {
    name: 'timeline',
    props: {
        data: {
        }
    },
    components: {
        Loading, 
        VueGoodTable
    },

    data: () => ({
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },         
        columns: [
            {
            label: 'Part Number',
            field: 'MATNR',
            },      
            {
            label: 'Urestricted',
            field: 'SUMLABST',
            type: 'decimal'
            },
            {
            label: 'Plant/Sloc/Batch/Qty',
            field: 'STOCK',
            },          
            {
            label: 'Remaining Qty',
            field: 'REMQTY',
            type: 'decimal'
            },
            {
            label: 'Order/Qty/MatStatus',
            field: 'AUFNR',
            },            {
            label: 'Shortage',
            field: 'SHORTAGE',
            type: 'decimal'
            },
        ],
        rows: [
        ],
    }),
    mounted() {

    },
    created() {
        this.initData()
    },
    methods: {
        initData: function() {
            this.loading.isLoading = true
            axios.post('/api/production_control_hangar/stockoverview', {
                revnr: this.$props.data.pg_id
            })
            .then(res => {
                this.loading.isLoading = false
                const restruct = res.data.data.map(d => {
                    let temp = {}
                    temp['SHORTAGE'] = d.SUMLABST-d.REMQTY
                    temp['MATNR'] = d.MATNR
                    temp['SUMLABST'] = d.SUMLABST
                    temp['REMQTY'] = d.REMQTY
                    let temp_a = d.AUFNR == null ? [] : d.AUFNR.split(',')
                    if (temp_a.length>0) {
                        temp['AUFNR'] = temp_a.map(f => {
                            let tempaufnr = {}
                            tempaufnr['matorder'] = f.split(':')[0]
                            tempaufnr['matstatus'] = f.split(':')[1]
                            tempaufnr['matqtyrem'] = f.split(':')[2]
                            return tempaufnr
                        })
                    } else {
                        temp['AUFNR'] = temp_a
                    }
                    let temp_s = d.STOCK == null ? [] : d.STOCK.split(',')
                    if (temp_s.length>0) {
                        temp['STOCK'] = temp_s.map(g => {
                            let tempstock = {}
                            tempstock['stockplant'] = g.split(':')[0]
                            tempstock['stocksloc'] = g.split(':')[1]
                            tempstock['stockbatch'] = g.split(':')[2]
                            tempstock['stockqty'] = g.split(':')[3]
                            return tempstock
                        })
                    } else {
                        temp['STOCK'] = temp_s
                    }
                    return temp
                })
                console.log(restruct)

                this.rows = restruct
            })
            .catch(e => {
                console.log("Error: "+e)
                this.loading.isLoading = true
            })             
        }
    }
}

</script>