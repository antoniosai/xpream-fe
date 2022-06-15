

<template>
    <div>
        <div class="card-header ">
            <div class="title-area">
                <h3 class="title">{{ $route.meta.title }}</h3>
                <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
            </div>
            
            <div class="option-box">
                <div class="option-item">
                    <span style="white-space: nowrap">Select Hangar</span>
                    <select v-model="selected_hangar" @change="setLineWithHangarId(selected_hangar.id)">
                        <option value="" selected disabled>All Hangar</option>
                        <option v-bind:value="h" v-for="h in hangar" :key="h.id">{{ h.name + ' - ' + h.description }}</option>
                    </select>
                </div>
                <div class="option-item">
                    <span style="white-space: nowrap">Select Line</span>
                    <select v-model="selected_line" @change="lineChanged()">
                        <option value="" selected disabled>All Lines</option>
                        <option v-bind:value="l" v-for="l in line" :key="l.id">{{ l.line_name + ' ' + l.description }}</option>
                    </select>
                </div>
                <div class="option-item" v-if="selected_line.line_name != null && selected_line.line_name != ''">
                    <button v-on:click="helpModal">
                        <i class='material-icons'>help_outline</i> Help
                    </button>
                </div>

            </div>
        </div>
        <div class="card-content">

            <div class="is-row" v-if="selected_line.line_name != null && selected_line.line_name != ''">
                <div class="is-col is-40">
                    <loading 
                    :loader="'dots'"
                    :color="'#1976d2'"
                    :width="loading.width"
                    :height="loading.height"
                    :active.sync="loading.isLoadingUnit" 
                    :can-cancel="loading.cancle" 
                    :is-full-page="loading.fullPage"/>
                    <fieldset v-if="position_unit.length != 0">
                        <legend>Select Default Unit at {{ selected_hangar.name }} - {{ selected_line.line_name }}</legend>
                        <form v-on:submit.prevent="submitUnit">
                            <div class="is-col is-100" style="margin-top: 15px" v-for="unt in position_unit" :key="unt.position.id">
                                <div class="form-padding">
                                    <label>Unit for {{ unt.position.name }}</label>
                                    <multiselect 
                                        v-if="unt.position.dynamic_query != '!xpream-users!'"
                                        v-model="unt.model"
                                        :multiple="true"
                                        :options="unit" 
                                        :searchable="true" 
                                        :close-on-select="false" 
                                        :show-labels="false" 
                                        placeholder="Select Unit"
                                    />

                                    <multiselect 
                                        v-else 
                                        disabled
                                        v-model="unt.model" 
                                        :multiple="true"
                                        :options="[]" 
                                        :searchable="false" 
                                        :close-on-select="false" 
                                        :show-labels="false" 
                                        placeholder=""
                                        @search-change="asyncFind($event, pos)"
                                    />

                                    
                                </div>
                                
                            </div>
                            <br>

                            <div class="clearfix" v-if="position_unit.length != 0">
                                <div class="pull-right">
                                    <button type="submit" class="button is-big"><i class='material-icons'>save</i>Save Default Unit for {{ selected_hangar.name }} - {{ selected_line.line_name }}</button>
                                </div>
                            </div>
                        </form>
                    </fieldset>
                    <div v-else>
                            
                        <button v-on:click="createBaseTemplate(selected_line.id)" class="button is-big" style="width: 100%"><i class='material-icons'>create_new_folder</i> Set Default Unit</button>
                    </div>
                </div>
                <div class="is-col is-60">
                    <fieldset>
                        <loading 
                        :loader="'dots'"
                        :color="'#1976d2'"
                        :width="loading.width"
                        :height="loading.height"
                        :active.sync="loading.isLoadingUnit" 
                        :can-cancel="loading.cancle" 
                        :is-full-page="loading.fullPage"/>
                        <legend>Select Default Position at {{ selected_hangar.name }} - {{ selected_line.line_name }}</legend>
                        <form v-on:submit.prevent="submitTeam">

                            <div class="is-col is-100" style="margin-top: 15px" v-for="pos in form" :key="pos.id">
                                <div class="form_padding">
                                    <label>{{ pos.name }}</label>
                                    <!-- <multiselect 
                                        v-model="pos.model" 
                                        :multiple="isMultiple(pos.multiple_personel)"
                                        :options="pos.employees" 
                                        :custom-label="employeeLabel" 
                                        :placeholder=pos.name
                                        label="nama" 
                                        track-by="nama" 
                                    /> -->

                                    <!-- <multiselect 
                                        v-if="pos.query != '!xpream-users!'"
                                        v-model="pos.model" 
                                        placeholder="Click here to Select Employee" 
                                        :options="pos.employees"
                                        :multiple="isMultiple(pos.multiple_personel)"
                                        :custom-label="employeeLabel" 
                                        :searchable="true" 
                                        :show-no-results="false" 
                                        :hide-selected="true" 
                                        >
                                    </multiselect> -->
                                    <multiselect
                                        style="max-width: 750px"
                                        v-model="pos.model" 
                                        placeholder="Type at least 2 characters to Get Employee" 
                                        :options="pos.employees"
                                        :multiple="isMultiple(pos.multiple_personel)"
                                        :custom-label="employeeLabel" 
                                        label="nopeg" 
                                        track-by="nopeg" 
                                        :searchable="true" 
                                        :loading="isLoading" 
                                        :internal-search="true" 
                                        :clear-on-select="false" 
                                        :close-on-select="true" 
                                        :options-limit="300" 
                                        :limit="3" 
                                        :limit-text="limitText" 
                                        :max-height="600" 
                                        :show-no-results="false" 
                                        :hide-selected="true" 
                                        >
                                    </multiselect>
                                </div>
                            </div>

                            <br>

                            <div class="clearfix">
                                <div class="pull-right">
                                    <button type="submit" class="button is-big"><i class='material-icons'>save</i>Save Base Template for {{ selected_hangar.name }} - {{ selected_line.line_name }}</button>
                                </div>
                            </div>


                        </form>
                        
                    </fieldset>
                    <!-- <h1>Selected {{ selected_hangar.name }} - {{ selected_line.line_name }}</h1> -->
                </div>
            </div>
            <div v-else>
                <div class="alert is-focus">
                    <h2>Select Hangar & Line First</h2>
                </div>
            </div>
        </div>

        <!-- Add Project Modal -->
        <div class="modal-box" id="help_modal">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('help_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Help</h2>
                </div>
                <div class="modal-body">
                    <ul class="a">
                        <li>
                            After You Changed Default Unit, make sure you have to click this button on below of the page
                            <button class="button is-big"><i class='material-icons'>save</i>Save Default Unit for {{ selected_hangar.name }} - {{ selected_line.line_name }}</button>
                        </li>
                        <li style="margin-top: 20px">
                            Don't let Default Unit is empty. If it's empty you won't get list of Employee on it's position
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- / Add Project Modal -->
    </div>
</template>

<script>

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

import toastr from 'toastr'

import swal from 'sweetalert'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {

    components: {
        Loading, 'multiselect': Multiselect
    },

    computed: {
    },

    data: () => ({
        isLoading: false,
        unit: [],
        position_unit: [],

        hangar: [],
        line: [],
        selected_line: {},
        selected_hangar: {},
        options: {
            project_owner: [],
            general_manager: [],
            cssm: [],
            car: [],
        },

        form: [],

        team: {
            project_owner: null,
            general_manager: null,
            cssm: null,
            car: null,
        },

        loading: {
            button_processing: false,
            height: 70,
            width: 70,  
            isLoadingUnit: false,
            isLoadingEmployee: false,
            fullPage: true,
            cancel: true,
            progressBar: 0
        },

    }),

    watch: {
    },

    mounted() {
        this.initHangar()
        // this.initData()
    },

    watch: {},

    methods: {
        

        // Multiselect
        limitText: function (count) {
            return `and ${count} others`
        },

        onChange: function (value) {
            toastr.success(value)
        },

        asyncFind: function (query, emp) {
            // this.isLoading = true
            if(query.length >= 2)
            {
                emp.employees = []
                axios.post('/api/management/employee/search', {
                    search_query: query,
                    unit: emp.unit,
                    jabatan: emp.query
                })
                .then(res => {
                    emp.employees = res.data
                })
                // axios.get()
            }
        },
        clearAll: function () {
            // this.selectedCountries = []
        },

        // End of Multiselecct

        initHangar: function() {
            axios.get('/api/management/hangar')
            .then( res => {
                this.hangar = res.data.data
            })
        },
        
        initPosition: function() {
            axios.get('/api/management/employee/get_unit_and_position/' + this.selected_line.id)
            .then( res => {
                this.position_unit = res.data
            })
        },

        initData: function() {
            
            var filter = {
                line_id: this.selected_line.id,
            }

            axios.get('/api/management/employee/all_data?line_id='+filter.line_id)
            .then( res => {
                this.form = res.data
            })
        },

        helpModal: function() {
            $('#help_modal').show()
        },

        hideModal: function (modal_name) {
            // deleteformhere
            $('#' + modal_name).hide()
        },

        getCurrentEmp: function() {
            axios.get('/api/management/employee/get_unit')
            .then( res => {
                this.unit = res.data
            })
        },

        getUnit: function() {
            axios.get('/api/management/employee/get_unit')
            .then( res => {
                this.unit = res.data
            })
        },

        setLineWithHangarId: function(hangar_id) {
            // this.form = []
            this.line = []
            this.selected_line = {}
            axios.get('/api/management/hangar/'+hangar_id)
            .then( res => {
                this.line = res.data.line
            })
        },

        lineChanged: function() {
            if(this.selected_line.line_name != null && this.selected_line.line_name != '') {
                this.initData()
                this.getUnit()
                this.initPosition()
                this.form = []
            }
        },

        isMultiple: function(val) {
            if (val == 'y') {
                return true
            } else {
                return false
            }
        },

        getTemplate: function() {
            toastr.error(this.line.line_name)
        },

        createBaseTemplate: function(line_id) {
            axios.post('/api/management/employee/create_base_template', { line_id: line_id })
            .then( res => {
                if(res.data.status == 'success') {
                    toastr.success(res.data.message, 'Success!')                    
                    this.initPosition()
                }
            })
        },

        getPosition: function() {
            axios.get('/api/management/employee/project owner')
            .then( res => {
                this.options.project_owner = res.data
                this.options.general_manager = res.data
                this.options.cssm = res.data
                this.options.car = res.data
            })
        },

        employeeLabel ({ nopeg, unit, nama, jabatan }) {

            let identify = ''
            let site = ''

            if(jabatan) {
                identify = " | " + jabatan
            }

            if(unit) {
                site =  unit + " | " 
            }
            
            return nopeg + " | " + site + nama + identify

            // return `${nopeg} | ${nama} — [${jabatan}]`
        },

        userLabel ({ id, name, username, email }) {
            return `#${id} | ${name} — [${email}]`
        },

        submitUnit: function() {

            swal({
                title: 'You Are Going to Saving Default Unit for ' + this.selected_hangar.name + this.selected_line.line_name,
                text: "Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                this.loading.isLoadingUnit = true
                if (value) {
                    let data = {
                        hangar_id: this.selected_hangar.id,
                        line_id: this.selected_line.id,
                        data: this.position_unit,
                    }

                    axios.post('/api/management/employee/submit_unit', data)
                    .then( res => {
                        toastr.success('Sucessfully saved Default Unit for ' + this.selected_hangar.name + this.selected_line.line_name, 'Success')
                        this.initData()
                        this.loading.isLoadingUnit = false
                    })
                } else {
                    toastr.info("Canceled")
                    this.loading.isLoadingUnit = false
                }
            })

        },

        searchEmp: function() {

            let params = {

            }

            axios.post('/api/management/employee/search', params)
            .then(res => {
                
            })
        },

        submitTeam: function() {
            

            let data = {
                hangar_id: this.selected_hangar.id,
                line_id: this.selected_line.id,
                data: this.form,
            }

            swal({
                title: "You are going to Setting Up Default Template for " + this.selected_hangar.name + " - " + this.selected_line.line_name,
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoadingUnit = true

                    axios.post('/api/management/employee/submit_team', data)
                    .then( res => {
                        if(res.data.status == 'success')
                        {
                            toastr.success('Successfully saved Template for ' + this.selected_hangar.name + ' - ' + this.selected_line.line_name)
                            this.loading.isLoadingUnit = false
                        }
                    })
                    .catch( e => {
                        this.loading.isLoadingUnit = false
                    })
                } else {
                    this.loading.isLoadingUnit = false
                    toastr.info("Canceled")
                }
            })
            this.loading.v = false
            
        },

        revChange: function() {
            // alert(this.modal.rev.)
            // console.log(this.team.project_owner)
        },

    }
}
</script>

<style scoped>

    ::v-deep ul, li {
        list-style: none;
    }
    ::v-deep ul.a {
        list-style: unset;
        list-style-type: circle;
    }
</style>