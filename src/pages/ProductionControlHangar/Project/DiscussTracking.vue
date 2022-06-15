<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
::v-deep .ql-formats .ql-video,
::v-deep .ql-formats .ql-strike,
::v-deep .ql-formats .ql-code-block,
::v-deep .ql-formats .ql-indent,
::v-deep .ql-formats {
    display: none;
}
::v-deep .editor-preview.ql-editor {
    /* font-size: 15px; */
    /* font-family: system-ui; */
    min-height: unset;
}

.resize-icon:before {
    content: "";
    display: block;
    width: 31px;
    /* background: blue; */
    border-top: 4px double white;
    /* height: 2px; */
    margin: 0 auto;
}

.media .media-object {
    min-width: 45px !important;
    height: 45px;
    object-fit: cover;
    object-position: center;
}

.test > div {
    width: 100%;
    color: #222 !important;
    margin: 59px 17px;
    transition: 0.3s;
    font-size: normal;
}
::v-deep div#quill-container {
    /* height: 250px !important; */
    display: table;
    width: 100%;
    /* max-height: 100%;     */
}
::v-deep div#quill-container .ql-editor {
    min-height: 205px;
}
.test > div:nth-child(2) {
    overflow-y: auto;
}
.test > div:nth-child(1) {
    overflow-y: auto;
}
.test > div:nth-child(1) {
    overflow-y: auto;
    margin-top: 0;
    height: 250px;
}

.test #editor-preview.editor-control-on {
    visibility: visible;
    width: 100%;
    opacity: 1;
    margin: 59px 17px;
    padding: inherit;
}

.test #editor-preview.editor-control-off {
    visibility: hidden;
    width: 0px;
    opacity: 0;
    margin: unset;
    padding: unset;
}
span.handling-preview {
    cursor: pointer;
    position: absolute;
    right: 46px;
    top: 24px; /* border-bottom: 1px solid #81bb00; */
    padding: 1px 5px; /* background: #81bb00; */
    color: #7c7c7c;
}

.widget .panel-body {
    padding: 0px;
}
.widget .list-group {
    margin-bottom: 0;
}
.widget .panel-title {
    display: inline;
}
.widget .label-info {
    float: right;
}
.widget li.list-group-item {
    border-radius: 0;
    border: 0;
    border-top: 1px solid #ddd;
}
.widget li.list-group-item:hover {
    background-color: rgba(86, 61, 124, 0.1);
}
.widget .mic-info {
    color: #666666;
    font-size: 11px;
}
.widget .action {
    margin-top: 5px;
}
.widget .comment-text {
    font-size: 12px;
}
.widget .btn-block {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}
#box-discuss.panel-body {
    background: rgb(244, 247, 250);
}
#box-discuss.panel-body .panel-body {
    padding: 10px 5px;
}
#box-discuss.panel-body::-webkit-scrollbar {
    width: 20px;
}
#box-discuss.panel-body::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
}
#box-discuss.panel-body::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
}
#box-discuss.panel-body::-webkit-scrollbar-track {
    background-color: transparent;
}
.panel-actions > div {
    transition: 0.2s;
}
.panel-actions > div:hover {
    background: #eee;
}

::v-deep .vld-overlay.is-full-page{
    z-index:999999999999999999999999;
}
</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_dashboard',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.dashboard_summary',
                            params: {
                                pg_id: $route.params.pg_id,
                                type: 'hangar'
                            }
                        })
                    "
                    class="tab-link"
                    data-tab="dashboard"
                >
                    Dashboard
                </li>
                <li
                    v-if="$bulkCan('pc_hangar_tracking_system_view_highlight')"
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.highlight',
                            params: {
                                pg_id: $route.params.pg_id,
                                type: 'hangar'
                            }
                        })
                    "
                    class="tab-link"
                    data-tab="highlight"
                >
                    Performance
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_jc_mdr',
                            'pc_hangar_tracking_system_edit_jc_mdr',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.jobcard',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="jobcard"
                >
                    Jobcard
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_jc_mdr',
                            'pc_hangar_tracking_system_edit_jc_mdr',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.mdr',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="mdr"
                >
                    MDR
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_mrm',
                            'pc_hangar_tracking_system_edit_mrm',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.mrm',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="mrm"
                >
                    MRM
                </li>
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mcms', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">ZMCMS<span class="status-handler success" style="font-size:11px;margin-left:6px;">beta</span></li> -->
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_prm', 'pc_hangar_tracking_system_edit_prm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" class="tab-link" data-tab="prm">PRM</li> -->
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_csp',
                            'pc_hangar_tracking_system_edit_csp',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.csp',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="csp"
                >
                    CSP
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_crm',
                            'pc_hangar_tracking_system_edit_crm'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.crm',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="crm"
                >
                    CRM
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_project_charter'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.project_charter',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="project-charter"
                >
                    Project Team & Charter
                </li>
                <li
                    v-if="
                        $bulkCan('pc_hangar_tracking_system_view_gantt_chart')
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.gantt_chart',
                            params: { pd_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="gantt-chart"
                >
                    Gantt Chart
                </li>

                <li
                    v-if="
                        $bulkCan('pc_hangar_tracking_system_discuss')
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.discuss',
                            params: { pd_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link active"
                    data-tab="discuss"
                >
                    Discuss
                </li>
            </ul>
            <div
                class="card tab-content active"
                id="discuss"
                style="border-radius: 0px 8px 8px 8px;"
            >

                <loading
                        :active.sync="loading.isLoading"
                        :can-cancel="false"
                        :is-full-page="loading.fullPge"
                        :color="loading.color"
                        :loader="loading.loaderType"
                    >
                </loading>
                <div class="card-content">
                    <!-- <div class="brandxpream" style="text-align:center; font-size:40px;">
                            <span style="color:#84BD00; font-weight:900;">X</span><span style="color:#006298;font-weight:bold;">PREAM</span>
                        </div> -->

                    <button
                        onclick="(function(){ _getId('QWERTYIZO_').classList.contains('animate__slideOutDown') ? _getId('QWERTYIZO_').classList.replace('animate__slideOutDown','animate__slideInUp') : _getId('QWERTYIZO_').classList.add('animate__slideInUp') })();"
                        style="position: fixed; bottom: 50px; right: 50px; box-shadow: black 2px 2px 2px; border-radius: 100%; width: 50px; display: flex; height: 50px; justify-content: center; background: #0e1b31;z-index:9999991"
                    >
                        <i class="material-icons m0" style="font-size:24px"
                            >add</i
                        >
                    </button>

                    

                    <div
                        class="panel panel-default animate__animated animate__faster"
                        id="container-discuss"
                        style="transition:.3s"
                    >
                        <div
                            class="panel-heading"
                            style="padding:0 15px; display:flex;justify-content:space-between;align-items:center;background-image:linear-gradient(to left, rgba(255,0,0,0), rgb(14 27 49))"
                        >
                            <h3
                                class="panel-title"
                                style="display: flex; align-items: center;color:#fff"
                            >
                                <span class="material-icons mr5">comment</span>
                                Disussion
                                <span
                                    class="ml5 badge badge-info"
                                    style="background:#fff;color:rgb(14 27 49)"
                                    >{{ discuss.total }}</span
                                >
                            </h3>
                            <div
                                style="display: flex;margin:unset"
                                class="panel-actions"
                            >
                                <div
                                    class="mr5"
                                    id="full-screen"
                                    onclick="(function(){
                                    _getId('full-screen').style.display = 'none'
                                    _getId('exit-full-screen').style.display = 'flex'
                                    console.log('click fullscreen')
                                    _getId('container-discuss').style.cssText = `transition: all 0.3s ease 0s; top: 20px; width: calc(100% - 40px); position: fixed; left: 20px; /* right: 20px; */ height: calc(100% - 40px); z-index: 9999990;box-shadow:rgb(0 0 0 / 75%) 0px 0px 18px 43px`
                                    _getId('box-discuss').style.height = 'calc(100% - 50px'
                                    $('#box-discuss').animate({ scrollTop:$('#box-discuss')[0].scrollHeight }, 600);
                                    })()"
                                    style="display:flex;padding:10px 4px;cursor:pointer"
                                    title="Fullscreen Mode"
                                >
                                    <i
                                        class="material-icons mr0"
                                        style="font-size:26px;"
                                        >fullscreen</i
                                    >
                                </div>

                                <div
                                    class="mr5"
                                    id="exit-full-screen"
                                    style="display:none;padding:10px 4px;cursor:pointer"
                                    title="Exit Fullscreen Mode"
                                    onclick="(function(){
                                    _getId('exit-full-screen').style.display = 'none'
                                    _getId('full-screen').style.display = 'flex'
                                    _getId('box-discuss').style.height = '83vh'
                                    $('#box-discuss').animate({ scrollTop:$('#box-discuss')[0].scrollHeight }, 600);
                                    console.log('click exit')
                                        _getId('container-discuss').style.cssText = `transition:.3s;top: unset; width: inherit; height: inherit; position: inherit; left: unset; right: unset; height: inherit z-index: inherit;`
                                    })()"
                                >
                                    <i
                                        class="material-icons mr0"
                                        id=""
                                        style="font-size:26px;"
                                        >fullscreen_exit</i
                                    >
                                </div>
                                <div
                                    class=""
                                    @click="initDiscuss"
                                    style="display: flex; align-items: center;padding:10px 4px;cursor:pointer"
                                    title="Refresh Discuss"
                                >
                                    <i
                                        class="material-icons"
                                        style="font-size:23px;"
                                        >autorenew</i
                                    >
                                </div>
                            </div>
                        </div>
                        <div
                            class="panel-body"
                            style="box-shadow:0px 5px 10px 0px #ddd;height: 83vh;; overflow: auto;"
                            id="box-discuss"
                        >
                            <div v-for="(item, i) in discuss.data" :key="i">
                                <div
                                    class="panel panel-default "
                                    style="position:relative;"
                                >
                                    <div class="panel-body" style="padding:unset">
                                        <section class="post-heading" style="padding: 5px 10px;">
                                            <div class="row">
                                                <div class="col-md-11">
                                                    <div class="media">
                                                        <div class="media-left">
                                                                <img
                                                                    class="media-object photo-profile"
                                                                    :src="item.avatar"
                                                                    width="40"
                                                                    height="40"
                                                                    alt="..."
                                                                />
                                                        </div>
                                                        <div class="media-body">
                                                            <h5
                                                                class="media-heading" style="margin:5px 0 0 0"
                                                            >
                                                                {{ item.name }}
                                                                <template
                                                                    v-if="
                                                                        discuss.userId == item.user_id
                                                                    "
                                                                >
                                                                    <span
                                                                        class="badge primary"
                                                                        style="background:#3e52b5"
                                                                        >You</span
                                                                    ></template
                                                                >
                                                            </h5>
                                                            <span
                                                                class="anchor-time" style="margin:unset"
                                                                >{{ item.created_at }}</span
                                                            >
                                                            <div
                                                                class="action"
                                                                v-show="discuss.userId == item.user_id"
                                                                style="position: absolute; right: 20px; top: 20px; }"
                                                            >
                                                                <button
                                                                    class="mr5 "
                                                                    type="button"
                                                                    id="reply"
                                                                    style="width: 29px; height: 29px; border-radius: 100%; padding: unset;background:#ffc107"
                                                                    @click="
                                                                        onEditDiscuss(
                                                                            i
                                                                        )
                                                                    "
                                                                >
                                                                    <i
                                                                        class="material-icons m0"
                                                                        >mode_edit</i
                                                                    >
                                                                </button>
                                                                <button
                                                                    class=""
                                                                    type="button"
                                                                    id="reply"
                                                                    style="width: 29px; height: 29px; border-radius: 100%;  padding: unset;background:#f44336"
                                                                    @click="
                                                                        onDeleteDiscuss(
                                                                            i
                                                                        )
                                                                    "
                                                                >
                                                                    <i
                                                                        class="material-icons m0"
                                                                        >delete</i
                                                                    >
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <a href="#"
                                                        ><i
                                                            class="glyphicon glyphicon-chevron-down"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                        </section>
                                       
                                    <section
                                            class="post-body editor-preview ql-editor"
                                        v-html="item.body">
                                        <!-- <p>Thanks for joining Vue Forum, and welcome!</p><ul><li>I’m only a robot, but&nbsp;<a href="https://forum.vuejs.org/about" rel="noopener noreferrer" target="_blank" style="color: var(--tertiary);">our friendly staff</a>&nbsp;are also here to help if you need to reach a person.</li><li>For safety reasons, we temporarily limit what new users can do. You’ll gain&nbsp;<a href="https://blog.discourse.org/2018/06/understanding-discourse-trust-levels/" rel="noopener noreferrer" target="_blank" style="color: var(--tertiary);">new abilities</a>&nbsp;(and&nbsp;<a href="https://forum.vuejs.org/badges" rel="noopener noreferrer" target="_blank" style="color: var(--tertiary);">badges</a>) as we get to know you.</li><li>We believe in&nbsp;<a href="https://forum.vuejs.org/guidelines" rel="noopener noreferrer" target="_blank" style="color: var(--tertiary);">civilized community behavior</a>&nbsp;at all times.</li></ul> -->
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div
                    id="QWERTYIZO_"
                    class="test animate__animated animate__faster "
                    style="height:375px; -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 100%, 0);display: flex; width: 100%; position: fixed; bottom: 0; justify-content: space-between; background: white; left: 0; z-index: 9999992; box-shadow: 0 -1px 40px rgb(0 0 0 / 12%); flex-direction: row-reverse;"
                >
                    <span
                        class="resize-icon"
                        id="QWERTYIZO_onresize"
                        style="cursor: row-resize; padding: 4px 0px; background: #0b1323d4; width: 100%; height: 11px; position: absolute;"
                        @mousedown="onResizeQWERTYIZO($event)"
                        onselectstart="return false"
                    ></span>
                    <span
                        class="handling-preview material-icons"
                        title="Show/hide preview"
                        onclick="(function(){ _getId('editor-preview').classList.contains('editor-control-on') ? _getId('editor-preview').classList.replace('editor-control-on','editor-control-off') : _getId('editor-preview').classList.replace('editor-control-off','editor-control-on') })(); "
                        >dvr</span
                    >
                    <span
                        style="cursor: pointer; position: absolute; right: 15px; top: 24px; color: red; font-weight: bold;"
                        onclick="(function(){ 
                            if(!_getId('save-btn').disabled) {
                                if (confirm('Are you sure you want to close? data will not be saved')) {
                                    if(_getId('QWERTYIZO_').classList.contains('animate__slideInUp')) {
                                        _querySelector('div#quill-container .ql-editor').innerHTML = '';
                                        _getId('QWERTYIZO_').classList.replace('animate__slideInUp','animate__slideOutDown')
                                    }
                                }
                            
                            } else {
                                 if(_getId('QWERTYIZO_').classList.contains('animate__slideInUp')) {
                                    _getId('QWERTYIZO_').classList.replace('animate__slideInUp','animate__slideOutDown')
                                }
                            }
                              })(); "
                        class="material-icons"
                        >close</span
                    >

                    <div
                        class="editor-preview ql-editor editor-control-on"
                        id="editor-preview"
                    >
                        <div v-html="editorContent"></div>
                    </div>
                    <div style="transition:.3s">
                        <vue-editor v-model="editorContent"></vue-editor>
                        <button
                            style="margin-top:15px;background:#3a3a3a"
                            id="save-btn"
                            :disabled="isDisabled"
                            @click="onSaveDiscuss"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { VueEditor } from "vue2-editor";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
    data: () => ({
        hasAccess: false,
        grant_access: false,
        cust_access: false,
        editorContent: '',
        isDisabled: true,
        discuss : {
            id: undefined,
            userId: _getUserId(),
            total: 0,
            data: [],
        },
        loading: {
            isLoading: false,
            fullPage: true,
            loaderType: "dots",
            color: "#0065ff"
        },
    }),
    watch: {
        editorContent: function (n, o) {
            //validate whitespace
            if(n.split(' ').join('') == '<p></p>' || n.split(' ').join('') == '') {
                this.isDisabled = true
                this.discuss.id = undefined;
            } else {
                this.isDisabled = false
            }
        },
        'discuss.id': {
            handler:(n, o) => {
                ll(n, o);
            },
            deep:true
        },
    },

    components: {
        VueEditor,
        Loading,
    },

    mounted() {
        this.initDiscuss();
        this.$cekCustomerProject(this.$route.params.pg_id).then(res => {
            if (!res) {
                this.$router.push({ name: "access_denied" });
            } else {
                if (
                    !this.$bulkCan(
                        "pc_hangar_tracking_system_view_project_charter",
                        "pc_hangar_tracking_system_edit",
                        "pc_hangar_tracking_system_view"
                    )
                ) {
                    this.$router.push({ name: "access_denied" });
                } else {
                    this.hasAccess = true;
                    this.permissionHandler();
                }
            }
        });
        // this.loading.isLoading = false;
    },

    methods: {
        async initDiscuss() {
                this.loading.isLoading = true;

                try {
                    let { total } = await(await axios.get(`/api/discuss-tracking/count/${this.$route.params.pg_id}`)).data
                    this.discuss.total = total;

                    let { success, message, data } = await(await axios.get(`/api/discuss-tracking/get/${this.$route.params.pg_id}`)).data
                    if (!success) {
                        return toastr.warning(message);
                    }
                    this.discuss.data = _lowerObject(data, true);
                    
                    setTimeout(() => {
                        $("#box-discuss").animate(
                            { scrollTop: $("#box-discuss")[0].scrollHeight },
                            600
                        );
                    });
                    this.loading.isLoading = false;

                } catch (e) {
                lll(e)
                this.loading.isLoading = false;
            }
        },
      
        onEditDiscuss(idx) {
            _getId("QWERTYIZO_").classList.contains("animate__slideOutDown")
                ? _getId("QWERTYIZO_").classList.replace(
                      "animate__slideOutDown",
                      "animate__slideInUp"
                  )
                : _getId("QWERTYIZO_").classList.add("animate__slideInUp");

                const { id, body } = _removeObserv(this.discuss.data[idx])

                this.discuss.id = id;
                this.editorContent = body;


        },

        async onDeleteDiscuss(idx) {
            
            if (confirm("Are you sure you want to delete?")) {
                this.loading.isLoading = true;
                const { id } = _removeObserv(this.discuss.data[idx]);
                const { success, message } = await(await axios.get(`/api/discuss-tracking/delete/${id}`)).data
                
                if (!success) {
                    this.loading.isLoading = false;
                    return toastr.warning(message);
                } else {
                    this.loading.isLoading = false;
                    this.initDiscuss();
                    toastr.success(message);
                    setTimeout(() => {
                        $("#box-discuss").animate(
                            { scrollTop: $("#box-discuss")[0].scrollHeight },
                            600
                        );
                    });
                }
        
            }
        },
        async onSaveDiscuss() {
            
            this.loading.isLoading = true;
            this.isDisabled = true

            try {
                   const { success, message, data } = await(await axios.post('/api/discuss-tracking/save', {
                            'id': this.discuss.id,
                            'pg_id': this.$route.params.pg_id,
                            'user_id': JSON.parse(localStorage.getItem('user')).id,
                            'body' : this.editorContent
                    })).data
                if (!success) {
                    this.loading.isLoading = false;
                    return toastr.warning(message);
                } else {
                    this.loading.isLoading = false;
                    toastr.success(message);
                }

                this.isDisabled = false

                _querySelector("div#quill-container .ql-editor").innerHTML = "";
                _getId("QWERTYIZO_").classList.replace(
                    "animate__slideInUp",
                    "animate__slideOutDown"
                );

                this.initDiscuss();

            $("#box-discuss").animate(
                { scrollTop: $("#box-discuss")[0].scrollHeight },
                600
            );

            } catch (e) {
                lll(e)
            }
        },
        onResizeQWERTYIZO(e) {
            this.startX = e.clientX;
            this.startY = e.clientY;
            this.startWidth = parseInt(_getId("QWERTYIZO_").style.height, 10);
            this.startHeight = parseInt(_getId("QWERTYIZO_").style.height, 10);

            document.documentElement.addEventListener(
                "mousemove",
                this.doDragQWERTYIZO,
                false
            );
            document.documentElement.addEventListener(
                "mouseup",
                this.stopDragQWERTYIZO,
                false
            );
        },

        doDragQWERTYIZO(e) {
            let totalSize = this.startHeight + e.clientY - this.startY;

            _getId("QWERTYIZO_").style.height = totalSize + "px";
            _getId("quill-container").style.height = totalSize - 190 + "px";

            if (totalSize < 375) {
                _getId("QWERTYIZO_").style.height = 375 + "px";
                _getId("quill-container").style.height = 375 - 190 + "px";
            }
        },

        stopDragQWERTYIZO(e) {
            document.documentElement.removeEventListener(
                "mousemove",
                this.doDragQWERTYIZO,
                false
            );
            document.documentElement.removeEventListener(
                "mouseup",
                this.stopDragQWERTYIZO,
                false
            );
        },
        updateContent() {
            this.editorContent = "<h5>Some Updated Content From Parent</h5>";
        },
        
        permissionHandler: function() {
            this.grant_access = false;
            this.cust_access = false;

            this.$isReleased(this.$route.params.pg_id).then(res => {
                if (res) {
                    if (
                        this.$bulkCan(
                            "pc_hangar_tracking_system_edit",
                            "pc_hangar_tracking_system_edit_crm"
                        )
                    ) {
                        this.grant_access = true;
                    }
                    if (this.$can("pc_hangar_tracking_system_customer_edit")) {
                        this.cust_access = true;
                    }

                    axios
                        .get(
                            "/api/management/job_mdr_track/linerev/" +
                                this.$route.params.pg_id
                        )
                        .then(res => {
                            this.acreginfo = res.data.info.ac_reg;
                            this.projectinfo = res.data.info.main_type;
                            if (res.data.info.access == "failed") {
                                this.grant_access = false;
                            }
                        });
                }
            });
        }
    }
};
</script>
