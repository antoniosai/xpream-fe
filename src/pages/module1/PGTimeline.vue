<template>
    <div>

        <div class="card">
            <div class="card-header no-border">
                <div class="title-area">
                    <h3 class="title" >Planning Gate #{{ pg.pg_id }} Timeline</h3>
                    <span class="subtitle total-project">Sales ID <strong>#{{pg.pg_id }}</strong> | A/C Type : <strong>{{ pg.ac_type }}</strong> <span v-if="pg.hangar && pg.line">| Hangar-Line : <strong>{{ pg.hangar.name + '-' + pg.line.line_name }}</strong> </span> | A/C Reg : <strong>{{ pg.ac_reg }}</strong> | AMS : <strong>{{ pg.ams_txt }}</strong> | Start Date : <strong>{{ pg.start_date_new ? pg.start_date_new : pg.start_date }}</strong> | End Date : <strong>{{ pg.end_date_new ? pg.end_date_new : pg.end_date }}</strong></span>
                    <!-- <span class="subtitle total-project"><strong>{{ line_detail.hangar.name }} - {{ line_detail.line_name }}</strong></span> -->
                </div>

            </div>
            <div class="card-content">
                <hr>
                    
                <div class="form_padding">
                    <div class="form-item is-bar">

                        <div class="is-row">
                            
                            <div class="is-col is-90">
                                <multiselect
                                    width="100%"
                                    v-model="value" 
                                    :custom-label="label" 
                                    label="name" 
                                    track-by="name" 
                                    :searchable="true" 
                                    :options="filters"
                                    :multiple="true"
                                    :show-no-results="false" 
                                    :hide-selected="true" 
                                    @input="filter"
                                ></multiselect>
                            </div>

                            <div class="is-col is-10">
                                <div class="pretty p-default" v-on:click="liveSearch" style="margin-top: 12px">
                                    <input v-on:click="selectAll" v-model="select" type="checkbox" />
                                    <div class="state p-primary">
                                        <label>{{ text_select }}</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        

                    </div>
                </div>

                <form style="text-align: center; margin: 0 auto; width: 100%">
                    <div class="option-item">
                        <input type="date" v-model="form.start_date" placeholder="">
                        &nbsp; -
                        <input type="date" v-model="form.end_date" placeholder="">

                        &nbsp;

                        <select v-model="form.order_date" @change="liveSearch">
                            <option value="DESC">Desc</option>
                            <option value="ASC">Asc</option>
                        </select>

                        &nbsp;

                    </div>
                
                </form>

                <br>

                <light-timeline :items='history'>
                    <template slot='tag' slot-scope='{ item }' style="padding-right: 30px">

                        <div style="text-align: center">
                            {{ item.upload_date.toLocaleDateString('id') }}
                        </div>

                    </template>
                    <template slot='content' slot-scope='{ item }' v-html="item.content">
                        <div class="card" style="margin-top: -18px">
                            <div>

                                <section class="wrapper_doc">
                                    <div class="wrapper_one" style="text-align: center">
                                        Project Start Date: <strong>{{ item.start_date.toLocaleDateString('id') }}</strong>
                                        <br>
                                        <span v-if="item.diff_date > 0" class="label" style="background-color: green">{{ item.diff_date }} day(s) Earlier</span>
                                        <span v-else class="label is-success">Late {{ item.diff_date }} day(s)</span>
                                        <br>
                                        Upload Date: <strong>{{ item.upload_date.toLocaleDateString('id') }}</strong>
                                    </div>
                                    <div class="wrapper_two">
                                        <strong>{{ item.title }} Document</strong>
                                        <br>
                                        {{ item.created_by }} ({{ item.doc.attc_created_by }}) created a Workscope Document at {{ item.upload_date.toLocaleDateString('id') }}<br><a :href="gsmart_attachment + item.doc.attc_created_by +'/' + item.doc.attc_file" target="_blank">Preview File</a>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </template>
                </light-timeline>

            </div>
        </div>
        <br>

    </div>
</template>

<script>

import PGDetails from './PGDetails'

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {

    components: {
        'multiselect': Multiselect,
        PGDetails,
    },

    filters: {
        
    },

    data: () => ({

        gsmart_attachment: 'https://gsmart-beta.gmf-aeroasia.co.id/public/files/upgrade/',

        select: true,
        text_select: 'Deselect All',

        form: {
            start_date: '',
            end_date: '',
            order_date: 'DESC',
            search: ''
        },

        value: [
            {
                name: 'Slot',
                abbr: 'slot',
                value: true
            },
            {
                name: 'Workscope',
                abbr: 'ws',
                value: true
            },
            {
                name: 'COGS',
                abbr: 'cogs',
                value: true
            },
            {
                name: 'Profitable A.',
                abbr: 'pa',
                value: true
            },
            {
                name: 'Proposal',
                abbr: 'prop',
                value: true
            },
            {
                name: 'SOW',
                abbr: 'sow',
                value: true
            },
            {
                name: 'SO',
                abbr: 'so',
                value: true
            },
            {
                name: 'Project Charter',
                abbr: 'project_charter',
                value: true
            },
            {
                name: 'Gantt Chart',
                abbr: 'gantt_chart',
                value: true
            },
            {
                name: 'Final WS',
                abbr: 'final_ws',
                value: true,
            }
        ],

        filters: [
            {
                name: 'Slot',
                abbr: 'slot',
                value: true
            },
            {
                name: 'Workscope',
                abbr: 'ws',
                value: true
            },
            {
                name: 'COGS',
                abbr: 'cogs',
                value: true
            },
            {
                name: 'Profitable A.',
                abbr: 'pa',
                value: true
            },
            {
                name: 'Proposal',
                abbr: 'prop',
                value: true
            },
            {
                name: 'SOW',
                abbr: 'sow',
                value: true
            },
            {
                name: 'SO',
                abbr: 'so',
                value: true
            },
            {
                name: 'Project Charter',
                abbr: 'project_charter',
                value: true
            },
            {
                name: 'Gantt Chart',
                abbr: 'gantt_chart',
                value: true
            },
            {
                name: 'Final WS',
                abbr: 'final_ws',
                value: true,
            }
        ],

        pg_id: '',
        pg: {},
        history: []
    }),

    mounted() {
        this.pg_id = this.$route.params.pg_id
        this.initData()
    },

    methods: {
        initData: function () {
            axios.get('/api/slot_and_capacity/planning_gate/show/' + this.pg_id)
            .then(res => {
                this.history = []
                if (res.data.status == 'success') {
                    this.pg = res.data.data

                    this.filter()
                    
                    let pg_temp = this.pg

                    

                    this.filter()
                    // console.log(res.data)
                }
            })
        },

        filter: function() {

            let values = this.value
            let data = []
                this.history = []

            for(let index in values)
            {
                // values[index]['abbr']
                this.getDoc(values[index]['abbr'])
            }

            // this.initData()
        },

        getDoc: function(type_doc) {

            let pg_temp = this.pg


            if(type_doc == 'ws') {
                for (let index_ws in this.pg.ws) {
                

                    let ws = this.pg.ws[index_ws]

                    let start_date = new Date(pg_temp.start_date_new ? pg_temp.start_date_new : pg_temp.start_date)
                    let upload_date = new Date(ws.attc_created_date)

                    let diff_date = Math.abs(upload_date - start_date)

                    this.history.push({
                        title: 'Workscope',
                        doc: ws,
                        type: 'circle',
                        color: '#5472d3',
                        created_by: ws.attc_created_by,
                        start_date: start_date,
                        upload_date: new Date(ws.attc_created_date),
                        diff_date: Math.ceil(diff_date / (1000 * 60 * 60 * 24)),
                        tag: upload_date,
                        htmlMode: true
                    })

                    console.log(this.history)
                }
            }


            if(type_doc == 'pa') {
                for (let index_pa in this.pg.pa) {
                    let pa = this.pg.pa[index_pa]

                    let start_date = new Date(pg_temp.start_date_new ? pg_temp.start_date_new : pg_temp.start_date)
                    let upload_date = new Date(pa.attc_created_date)

                    let diff_date = Math.abs(upload_date - start_date)

                    this.history.push({
                        title: 'Profitable Availability',
                        doc: pa,
                        type: 'circle',
                        color: '#4caf50',
                        created_by: pa.attc_created_by,
                        start_date: start_date,
                        upload_date: new Date(pa.attc_created_date),
                        diff_date: Math.ceil(diff_date / (1000 * 60 * 60 * 24)),
                        tag: upload_date,
                        htmlMode: true,
                        // content: this.gsmartContentTemplate('Profitable Availability', pa)
                    })
                }
            }

            if(type_doc == 'sow') {
                for (let index_sow in this.pg.sow) {
                    let sow = this.pg.sow[index_sow]
                    let start_date = new Date(pg_temp.start_date_new ? pg_temp.start_date_new : pg_temp.start_date)
                    let upload_date = new Date(sow.attc_created_date)

                    let diff_date = Math.abs(upload_date - start_date)
                    this.history.push({
                        title: 'SOW',
                        doc: sow,
                        type: 'circle',
                        color: '#ffc107',
                        created_by: sow.attc_created_by,
                        start_date: start_date,
                        upload_date: new Date(sow.attc_created_date),
                        diff_date: Math.ceil(diff_date / (1000 * 60 * 60 * 24)),
                        tag: upload_date,
                        htmlMode: true,
                        // content: this.gsmartContentTemplate('SOW', sow)
                    })
                }
            }

            if(type_doc == 'prop') {
                for (let index_prop in this.pg.proposal) {
                    let prop = this.pg.proposal[index_prop]
                    let start_date = new Date(pg_temp.start_date_new ? pg_temp.start_date_new : pg_temp.start_date)
                    let upload_date = new Date(prop.attc_created_date)

                    let diff_date = Math.abs(upload_date - start_date)
                    this.history.push({
                        title: 'Proposal',
                        doc: prop,
                        type: 'circle',
                        color: '#ff7043',
                        created_by: prop.attc_created_by,
                        start_date: start_date,
                        upload_date: new Date(prop.attc_created_date),
                        diff_date: Math.ceil(diff_date / (1000 * 60 * 60 * 24)),
                        tag: upload_date,
                        htmlMode: true,
                        // content: this.gsmartContentTemplate('Proposal', prop)
                    })
                }
            }
        },

        label ({ name, abbr }) {
            return `${name}`
        },

        selectAll: function () {
            this.userIds = [];

            for (var filter in this.filters) {
                if (this.select == true) {
                    this.value = []
                    this.text_select = 'Select All'
                } else {
                    this.value = this.filters
                    this.text_select = 'Deselect All'
                }
            }

            
        },

        liveSearch: function()
        {
            
            if(this.form.order_date == 'ASC') {
                this.history.sort((a, b) => b.upload_date - a.upload_date)
            } else if(this.form.order_date == 'DESC') {
                this.history.sort((b, a) => b.upload_date - a.upload_date)
            }

         
        },

        

    },

    
}

</script>

<style scoped>
    .item-tag {
        margin-right: 420px
    }
    @import url(https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css);

    .wrapper_doc {
        margin: auto;
        padding: 10px;
    }

    .wrapper_one {
        float: left;
    }

    .wrapper_two {
        margin-left: 20%;
    }

    .center_vh {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }


</style>