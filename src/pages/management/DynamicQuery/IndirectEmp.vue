<style scoped>
::v-deep .action > i.primary {
    color: #026396;
}

::v-deep .action > i.primary:hover {
    background-color: #026396;
    color: white;
}

::v-deep .action > i.danger {
    color: #ee2455;
}

::v-deep .action > i.danger:hover {
    background-color: #ee2455;
    color: white;
}

::v-deep .action > i.warning {
    color: #ffc107;
}

::v-deep .action > i.warning:hover {
    background-color: #ffc107;
    color: white;
}

::v-deep .action > i.success {
    color: #13CE66;
}

::v-deep .action > i.success:hover {
    background-color: #13CE66;
    color: white;
}


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
</style>

<template>
    <div>
        <div>
            <div class="card-header">
                <div class="title-area">
                    <h3 class="title">Indirect Employee</h3>
                    <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                </div>

                <div class="option-box">
                        <div class="option-item">
                        <button class="button is-success" v-on:click="handlerOpenModal()">
                            <i class='material-icons'>
                                add_circle
                            </i>
                            New Query
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
                    <fieldset  v-for="(indirect, index) in indirects" :key="indirect.ID" style="margin-right: 20px; padding: 25px;">
                        <legend>{{indirect.SLUG}} </legend> 
                        <div class="is-row">
                            <div class="is-col is-30">
                                <div class="form_padding">
                                    <label>Query for {{indirect.SLUG}} Unit</label> 
                                    <input v-model="indirect.UNIT" type="text" :placeholder="'Query for ' + indirect.SLUG + ' Unit'">
                                </div>
                            </div> 
                            <div class="is-col is-30">
                                <div class="form_padding">
                                    <label>Query for {{indirect.SLUG}}</label> 
                                    <input v-model="indirect.TITLE" type="text"  :placeholder="'Query for ' + indirect.SLUG">
                                </div>
                            </div>
                            <div class="is-col is-10">
                                <label style="margin-bottom: 6px;">Active</label>
                                Off <input type="checkbox" :checked="indirect.ACTIVE == 1" v-on:change="handlerActive(index)" true-value="1" false-value="0" class="switch">On
                            </div>
                            <div style="text-align: center;" class="is-col is-10">
                                <label style="margin-bottom: 6px;">Action</label>
                                <div class="action">
                                    <i v-on:click="checkQuery(index)" class="material-icons primary" tabindex="0">refresh</i>
                                    <i v-on:click="updateQuery(index)" class="material-icons warning" tabindex="0">save</i>
                                    <i v-on:click="handlerRemoveQuery(index)" class="material-icons danger" tabindex="0">delete</i>
                                </div>
                            </div>
                            <div class="is-col is-20"></div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>

        <!-- modal add query -->
        <div class="modal-box" id="modal-new-indirect">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-new-indirect')"></span>
                    <div class="modal-header">
                        <h2 class="title"><span id="status-post"></span> New Query</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <div class="form-item">
                            <label for="">Query Slug</label>
                            <input v-model="form.slug" type="text" placeholder="Query slug">
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-new-indirect')">Close</button>
                        <button class="button is-success" v-on:click="handlerSaveIndirect()" type="submit" id="btn-save-indirect">Save</button>

                    </div>
                <!-- </form> -->
            </div>
        </div>
        <!-- modal add pattern -->
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay'

export default {
    data: () => ({
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        indirects: [],
        form: {
            slug: "",
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
            axios.get('/api/management/dynamic/get_all_indirect')
            .then(res => {
                this.indirects = res.data;
                this.loading.isLoading = false;
            })
        },

        checkQuery: function(index) {
            if(!this.validate(index)) return;

            axios.post('/api/management/dynamic/check_indirect_query', {
                unit: this.indirects[index].UNIT,
                title: this.indirects[index].TITLE
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                }else {
                    toastr.warning(res.data.message);
                }
            })
            .catch(e => {
                console.log("Error: " +e);
            })
        },

        updateQuery: function(index) {
            if(!this.validate(index)) return;
            swal({
                title: "Continue update this item ?",
                text: "This action will update query of existing data",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoading = true;

                    axios.post('/api/management/dynamic/update_indirect_query', {
                        id: this.indirects[index].ID,
                        unit: this.indirects[index].UNIT,
                        title: this.indirects[index].TITLE
                    })
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message);
                            this.initData();
                        }else {
                            toastr.warning(res.data.message);
                        }
                        this.loading.isLoading = false;

                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        this.loading.isLoading = false;
                    })
                } else {
                    this.loading.isLoadingSave = false;
                    toastr.info("Canceled");
                }
            });
        },

        handlerActive: function(index) {
            this.indirects[index].ACTIVE = !this.indirects[index].ACTIVE;

            setTimeout(() => {
                axios.post('/api/management/dynamic/update_indirect_active', {
                    id: this.indirects[index].ID,
                    active: this.indirects[index].ACTIVE
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message)
                    }else {
                        toastr.error(res.data.message)
                    }
                })
            }, 200)

        },

        validate: function(index) {
            if(this.indirects[index].UNIT === "") {
                toastr.warning("Query for unit can't be empty");
                return false;
            }

            if(this.indirects[index].TITLE === "") {
                toastr.warning("Query for title can't be empty");
                return false;
            }

            return true;
        },

        validateNewQuery: function() {
            if(this.form.slug == "") {
                toastr.warning("Slug query can't be empty");
                return false;
            }
            return true;
        },

        handlerOpenModal: function() {
            this.form.slug = "";
            $('#modal-new-indirect').show();
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
        },

        handlerSaveIndirect: function() {
            if(!this.validateNewQuery()) return;

            this.handleButton('btn-save-indirect', 'load').then(() => {
                axios.post('/api/management/dynamic/add_indirect_query', this.form)
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message)
                        this.initData();

                        setTimeout(()=> {
                            this.hideModal('modal-new-indirect');
                        }, 1000)

                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-save-indirect', 'stop');
                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-save-indirect', 'stop');

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

        handlerRemoveQuery: function(index) {
            swal({
                title: "Continue remove this item ?",
                text: "This action remove selected data",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoading = true;

                    axios.get('/api/management/dynamic/remove_indirect_query/' + this.indirects[index].ID)
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message);
                            this.initData();
                        }else {
                            toastr.warning(res.data.message);
                        }
                        this.loading.isLoading = false;

                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        this.loading.isLoading = false;
                    })
                } else {
                    this.loading.isLoadingSave = false;
                    toastr.info("Canceled");
                }
            });
        }
    }
}
</script>