<template>
    <div>

        <div class="card-header ">
            <div class="title-area">
                <h3 class="title">{{ $route.meta.title }}</h3>
                <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
            </div>
            
        </div>

        <div class="card-content">

            <div class="is-row">
                <div class="is-col is-70">
                    <fieldset v-for="pos in form" :key="pos.id" style="margin-right: 20px">
                        <legend>{{ pos.name }}</legend>
                        <div class="is-row">
                        
                        <div class="is-col is-4 0">
                            <div class="form_padding">
                                <label>Query for {{ pos.name }}</label>
                                <input :disabled="pos.name === 'CAR'" type="text" v-model="pos.dynamic_query" :placeholder="pos.name + ' query'">
                            </div>
                        </div>

                        <div class="is-col is-20">
                            <label style="margin-bottom: 6px">Multiple Personel</label>
                            Off <input type="checkbox" class="switch" true-value="y" false-value="n" v-model="pos.multiple_personel">
                            On
                        </div>

                        

                    </div>
                    </fieldset>
                </div>

                
            </div>
            <div class="clearfix" style="margin-right: 20px">
                <div class="pull-right">
                    <button v-on:click="saveKeyword" class="button">Save</button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {

    components: {
        'multiselect': Multiselect
    },

    data: () => ({
        value: '',
        hangar: [],
        line: [],
        unit: [],

        selected_line: {},
        selected_hangar: {},
        form: [],
        position: [],

    }),

    mounted() {
        this.getPosition()
    },

    methods: {
        getPosition: function(){
            axios.get('/api/management/position/data/query_only')
            .then( res => {
                this.form = res.data
            })
        },

        getUnit: function() {
            axios.get('/api/management/employee/get_unit')
            .then( res => {
                this.unit = res.data
            })
        },

        saveKeyword: function() {
            axios.post('/api/management/position/save_keyword', this.form)
            .then( res => {
                if (res.data.status == 'success') {
                    toastr.success(res.data.message, 'Success!')
                }
            })
        },

        initHangar: function() {
            axios.get('/api/management/hangar')
            .then( res => {
                console.log(res.data.data)
                this.hangar = res.data.data
            })
        },

        setLineWithHangarId: function(hangar_id) {
            this.line = []
            this.selected_line = {}
            axios.get('/api/management/hangar/'+hangar_id)
            .then( res => {
                this.line = res.data.line
            })
        },

        lineChanged: function() {
            if(this.selected_line.line_name != null && this.selected_line.line_name != '') {
                this.getUnit()
                this.set_unit = true
            }
        },
    }
}
</script>