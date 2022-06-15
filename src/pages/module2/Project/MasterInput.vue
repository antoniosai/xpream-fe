<template>
    <div>
        
        <loading 
            :loader="'dots'"
            :color="'#1976d2'"
            :width="loading.width"
            :height="loading.height"
            :active.sync="loading.isLoading" 
            :can-cancel="loading.cancle" 
            :is-full-page="loading.fullPage"/>
        
        <div class="card">

            <div class="card-header no-border">
                <div class="title-area">
                    <h3 class="title">Aircraft General Data</h3>
                    <span class="subtitle total-project">Sales ID <strong>#{{pg.pg_id }}</strong> | A/C Type : <strong>{{ pg.ac_type }}</strong> <span v-if="pg.hangar && pg.line">| Hangar-Line : <strong>{{ pg.hangar.name + '-' + pg.line.line_name }}</strong> </span> | A/C Reg : <strong>{{ pg.ac_reg }}</strong> | AMS : <strong>{{ pg.ams_text }}</strong></span>
                    <!-- <span class="subtitle total-project"><strong>{{ line_detail.hangar.name }} - {{ line_detail.line_name }}</strong></span> -->
                </div>
                <div class="content-header">
                    <div class="option-box">
                        <button v-on:click="initData" class="button is-success"><i class="material-icons">settings_backup_restore</i> Reset</button>&nbsp;&nbsp;
                        <button v-on:click="exportToPDF" class="button is-danger"><i class="material-icons">picture_as_pdf</i> Export PDF</button>&nbsp;&nbsp;
                        <button v-on:click="save" class="button"><i class="material-icons">save</i> Save Aircraft General Data</button>
                    </div>
                </div>
            </div>

            <hr>

            <div class="panel-group" id="accordion">

                <div class="panel panel-default" v-for="(cat, index) in ac_data" :key="index" style="margin-bottom: 10px">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" :href="'#'+cat.slug">
                                #{{ index+1 }} - {{ cat.name }}
                            </a>
                        </h4>
                    </div>
                    <div :id="cat.slug" class="panel-collapse collapse" :class="index == 0 ? 'in' : ''">
                        <div class="panel-body">
                            <div class="is-row">
                                <div class="is-col is-50" v-for="form in cat.form" :key="form.id" style="margin-bottom: 10px">
                                    <label>{{ form.text | capitalize }}</label>
                                    <input v-if="form.keyword == 'aircraft-type'" disabled type="text" v-model="pg.ac_type" />
                                    <input v-else-if="form.keyword == 'inspection-type'" disabled type="text" v-model="pg.main_type" />
                                    <input v-else type="text" :placeholder="'Input with ' + form.text" v-model="form.value" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>


    </div>
</template>

<script>

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {

    components: {
        Loading
    },

    props: ['pg'],

    data: () => ({
        loading: {
            loader: 'dots',
            color: '#1976d2',
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: true,
        },
    }),

    methods: {
        initData: function() {
            axios.get('/api/slot_and_capacity/planning_gate/master_data/' + this.pg.pg_id)
            .then( res => {
                this.pg = res.data
            })
        }
    }
}
</script>