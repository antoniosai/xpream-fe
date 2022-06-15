<style scoped>
    ::v-deep .action > i {
        padding: 4px;
        background: #fff;
        border-radius: 5px;
        font-size: 16px;
        border: 1px solid #eaeaea;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
        cursor: pointer;
    }

    ::v-deep .action > i.success {
        color: #13CE66;
        background-color: white;
    }

    ::v-deep .action > i.danger {
        color: white;
        background-color: #ee2455;
    }

    ::v-deep .action > i.warning {
        color: white;
        background-color: #158df7;
    }

    ::v-deep .action > i.success:hover {
        background-color: #13CE66;
        color: white;
    }


</style>

<template>
    <div>
        <div>
            <div class="card-header">
                <div class="title-area">
                    <h3 class="title">Mapping Aircraft</h3>
                    <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                </div>

                <div class="option-box">
                    <div class="option-item">
                        <button  class="button is-success" v-on:click="handlerModalNewMapping()">
                            <i class='material-icons'>
                                add_circle
                            </i>
                            New Mapping
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <loading 
                    :active.sync="loading.isLoading" 
                    :can-cancel="false"
                    :is-full-page="true"
                    :color="loading.color"
                    :loader="loading.loaderType">
                </loading>
                <div>
                    <div class="is-row">
                        <div v-for="elem in pmps" :key="elem.ID" class="is-col">
                            <div class="card">
                                <div class="card-header">
                                    <div class="title-area">
                                        <h5>{{elem.PMPS_CODE}}</h5> 
                                        <span class="subtitle total-project">Click for details</span>
                                    </div>
                                    <div class="option-box">
                                        <div class="option-item">
                                            <div class="action">
                                                <i v-on:click="handlerModalNewMappingAircraft(elem.ID, '', '', 'insert')" class="material-icons success" tabindex="0">add_circle_outline</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <span v-on:click="handlerModalNewMappingAircraft(elem.ID, det.ID, det.MAP_AC_TYPE, 'update')" v-for="det in elem.DETAIL" :key="det.ID" class="label clickable" style="background-color: rgb(51, 132, 255); margin-top: 4px; margin-right: 6px;">#{{det.MAP_AC_TYPE}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal add mapping -->
        <div class="modal-box" id="modal-new-mapping">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-new-mapping')"></span>
                    <div class="modal-header">
                        <h2 class="title"><span id="status-post"></span> New Mapping</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <div class="form-item">
                            <label for="">PMPS Code</label>
                            <input v-model="pmps_code" type="text" placeholder="PMPS code">
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-new-mapping')">Close</button>
                        <button class="button is-success" v-on:click="handlerSavePMPS()" type="submit" id="btn-save-mapping">Save</button>

                    </div>
                <!-- </form> -->
            </div>
        </div>
        <!-- modal add mapping -->
        <!-- modal add aircraft -->
        <div class="modal-box" id="modal-new-aircraft-mapping">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-new-aircraft-mapping')"></span>
                    <div class="modal-header">
                        <h2 class="title"><span id="status-post"></span> <span id="status-mapping"></span> Mapping</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <div class="form-item">
                            <label for="">Aircraft Type</label>
                            <input type="hidden" v-model="form.id_mapping">
                            <input type="hidden" v-model="form.id_mapping_ac">
                            <input type="hidden" v-model="form.status">
                            <input v-model="form.ac_type" type="text" placeholder="PMPS code">
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-new-aircraft-mapping')">Close</button>
                        <button class="button is-success" v-on:click="handlerSaveMappingPMPS()" type="submit" id="btn-save-mapping-aircraft">Save</button>

                    </div>
                <!-- </form> -->
            </div>
        </div>
        <!-- modal add aircraft -->
    </div>
</template>



<script>

import Loading from 'vue-loading-overlay'
import Axios from 'axios'

export default {
    data: () => ({
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        pmps: [],
        pmps_code: "",

        form: {
            id_mapping: "",
            ac_type: "",
            status: "",
            id_mapping_ac: ""
        }
    }),

    

    components: {
        Loading
    },

    mounted() {
        this.initData();
    },

    methods: {
        initData: function() {
            this.loading.isLoading = true;
            axios.get('/api/management/get_pmps_data')
            .then(res => {
                this.pmps = res.data;
                this.loading.isLoading = false;
            })
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
        },

        handlerModalNewMapping: function() {
            this.pmps_code = "";
            $('#modal-new-mapping').show();
        },

        handlerModalNewMappingAircraft: function(id, mapping, ac_type, status) {
            this.form.id_mapping = id;
            this.form.status = status;
            this.form.id_mapping_ac = mapping;
            this.form.ac_type = ac_type;

            document.getElementById("status-mapping").innerHTML = status == "insert" ? "New" : "Update";
            $('#modal-new-aircraft-mapping').show();
        },

        handlerSavePMPS: function() {
            if(!this.validation()) return;

            this.handleButton('btn-save-mapping', 'load').then(() => {
                axios.post('/api/management/add_pmps', {
                    pmps_code: this.pmps_code
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message);
                        this.initData();

                        setTimeout(()=> {
                            this.hideModal('modal-new-mapping');
                        }, 1000)

                    }else {
                        toastr.error(res.data.message);
                    }

                    this.handleButton('btn-save-mapping', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-save-mapping', 'stop');
                })
            })
        },

        handlerSaveMappingPMPS: function() {
            if(!this.validationMapping()) return;

            this.handleButton('btn-save-mapping-aircraft', 'load').then(() => {
                axios.post('/api/management/post_mapping_pmps', this.form)
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message);
                        this.initData();

                        setTimeout(()=> {
                            this.hideModal('modal-new-aircraft-mapping');
                        }, 1000)

                    }else {
                        toastr.error(res.data.message);
                    }

                    this.handleButton('btn-save-mapping-aircraft', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-save-mapping-aircraft', 'stop');
                })
            })
        },


        handleButton: function(id, status) {
            let element = document.getElementById(id);
            return new Promise((resolve, reject) => {
                if(status == "load") {
                    element.className += " is-loading";
                    element.disabled = true;

                    setTimeout(() => {
                       resolve(); 
                    }, 500);

                }else {
                    element.className = "button";
                    element.disabled = false;
                    resolve();
                }
            })
        },

        validation: function() {
            if(this.pmps_code == "") {
                toastr.warning("PMPS code can't be empty");
                return false;
            }

            return true;
        },

        validationMapping: function() {
            if(this.form.ac_type == "") {
                toastr.warning("Aircraft type can't be empty");
                return false;
            }

            return true;
        }
    }
}
</script>