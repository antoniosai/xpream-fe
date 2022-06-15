<template>
    <div>
        <div>
            <loading :active.sync="loading.isLoading" :can-cancel="false" :is-full-page="true" :color="loading.color" :loader="loading.loaderType">
            </loading>
        </div>
    
        <div>
            <loading :active.sync="loading.isLoadingPaginate" :can-cancel="false" :is-full-page="true" :color="loading.color" :loader="loading.loaderType">
            </loading>
        </div>
        <div class="card" style="margin-bottom: 15px; top: 0; position: sticky; z-index: 2; width: 100%;">
            <div class="option-box">
                <div class="option-item">
                    <span style="white-space: nowrap">Location</span>
                    <select v-on:change="handlerFilterLine()" v-model="filter.location">
    <option value="">All Location</option>
    <option
    v-for="hangar in hangars"
    :key="hangar.ID"
    :value="hangar.id"
    >{{
    hangar.name + " - " + hangar.description
    }}</option
    >
    </select>
                </div>
                <div class="option-item">
                    <span style="white-space: nowrap">Line</span>
                    <select v-on:change="handlerFilter()" v-model="filter.line">
    <option value="" selected>All Line</option>
    <option
    v-for="line in lines"
    :key="line.id"
    :value="line.id"
    >{{
    line.line_name + " " + line.description
    }}</option
    >
    </select>
                </div>
                <div class="option-item">
                    <span style="white-space: nowrap">Status</span>
                    <select id="single-status" v-on:change="handlerFilter()" v-model="filter.status">
    <option value="">All Status</option>
    <option value="Prepared">Prepared</option>
    <option value="Progress">Progress</option>
    <option value="Released">Released</option>
    <option value="Freeze">Freeze</option>
    <option value="Parking">Parking</option>
    </select>
                </div>
                <div class="option-item">
                    Search
                    <input v-on:keyup.enter="handlerFilter()" v-model="filter.search" type="text" placeholder="Type and enter" />
                </div>
                <div class="option-item">
                    Per Page
                    <select v-on:change="handlerFilter()" v-model="filter.perPage" name="per-page" id="per-page">
    <option value="12">12</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option
    v-if="
    filter.status != '' ||
    filter.status != 'Released'
    "
    :value="paginate.total_page"
    >All</option
    >
    </select>
                </div>
            </div>
        </div>
        <div id="data-project"></div>
        <div v-if="!loading.isLoading" class="is-row">
            <div style="" class="is-col is-100 ms-container">
    
                <div class="is-row">
                    <div class="is-col is-20" v-for="(item, idx) of [70,27,62,88,40,80,77,98,66,30]">
                        <div class="ms-card">
                            <div class="ms-card-header">
                                Hangar 4 Line {{idx+1}}
                            </div>
                            <div class="ms-card-body">
                                <div class="panel panel-primary">
                                    <div class="panel-heading jc-between pointer" data-toggle="collapse" :href="'#collapseOne'+idx" aria-expanded="true" aria-controls="collapseOne" @click="clickable($event.target.children[1])">
                                        <h3 class="panel-title ev-none">Line Up</h3>
                                        <div class="flex ev-none">
                                            <span class="ms-badge">15</span>
                                            <i class="material-icons ev-none" style="margin:unset;font-size: 29px;color;#ccc">expand_more</i>
                                        </div>
                                    </div>
    
                                    <div :id="'collapseOne'+idx" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div class="panel-body">
    
                                            <div class="panel panel-info">
                                                <div class="panel-heading jc-between pointer" data-toggle="collapse" :href="'#collapseOneStatus'+idx" aria-expanded="true" aria-controls="collapseOneStatus" @click="clickable($event.target.children[1])" style="border-radius:10px !important">
                                                    <h3 class="panel-title ev-none">Status</h3>
                                                    <div class="flex ev-none">
                                                        <i class="material-icons ev-none" style="margin:unset;font-size: 29px;color;#ccc">expand_less</i>
                                                    </div>
                                                </div>
    
                                                <div :id="'collapseOneStatus'+idx" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOneStatus">
                                                    <div class="panel-body">
                                                        <div class="task-info blue" @click="onDetailTaskInfo($event)">
                                                            <div>
                                                                <h2>VP-CEI</h2>
                                                                <p>C03-Check + 12 Years</p>
                                                            </div>
                                                            <span class="ms-badge">6</span>
                                                        </div>
                                                        <div class="task-info blue">
                                                            <div>
                                                                <h2>VP-CEI</h2>
                                                                <p>C03-Check + 12 Years</p>
                                                            </div>
                                                            <span class="ms-badge">4</span></div>
                                                        <div class="task-info orange">
                                                            <p>Take a rest</p>
                                                            <span class="ms-badge">3</span>
                                                        </div>
                                                        <div class="task-info orange">
                                                            <p>Preparing material</p>
                                                            <span class="ms-badge">2</span></div>
                                                        <div class="task-info orange">
                                                            <p>Preparing tools</p>
                                                            <span class="ms-badge">1</span></div>
                                                        <div class="task-info dark">
                                                            <p>Idle</p>
                                                            <span class="ms-badge">2</span></div>
                                                    </div>
                                                </div>
                                            </div>
    
    
                                            <div class="panel panel-info">
                                                <div class="panel-heading jc-between pointer" data-toggle="collapse" :href="'#collapseOneDetailInformation'+idx" aria-expanded="true" aria-controls="collapseOneDetailInformation" @click="clickable($event.target.children[1])" style="border-radius:10px !important">
                                                    <h3 class="panel-title ev-none">Detail Information</h3>
                                                    <div class="flex ev-none">
                                                        <span class="ms-badge" style="background:inherit;border:none;padding:unset;height:unset;width:unset">15</span>
                                                        <i class="material-icons ev-none" style="margin:unset;font-size: 29px;color;#ccc">expand_more</i>
                                                    </div>
                                                </div>
    
                                                <div :id="'collapseOneDetailInformation'+idx" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOneDetailInformation">
                                                    <div class="panel-body">
                                                        <table class="table" border="1px" style="border-collapse:collapse">
                                                            <tr>
                                                                <th rowspan=10>
                                                                    <div class="td-val">15</div>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th rowspan=2>
                                                                    I Stamp
                                                                    <div class="th-val">3</div>
                                                                </th>
                                                                <td>AP
                                                                    <div class="td-val">1</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>EA
                                                                    <div class="td-val">1</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th rowspan=2>
                                                                    M Stamp
                                                                    <div class="th-val">2</div>
                                                                </th>
                                                                <td>AP
                                                                    <div class="td-val">6</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>EA
                                                                    <div class="td-val">4</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th rowspan=2>
                                                                    Others
                                                                    <div class="th-val">2</div>
                                                                </th>
                                                                <td>
                                                                    <div class="td-val">2</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
    
    
    
                                            <div class="panel panel-danger">
                                                <div class="panel-heading jc-between pointer panel-percent" data-toggle="collapse" :href="'#collapseOneComplience'+idx" aria-expanded="true" aria-controls="collapseOneOne" @click="clickable($event.target.children[1])" :style="percentBg(item, 'second-bg')">
                                                    <h3 class="panel-title ev-none" style=""></h3>
                                                    <div class="flex ev-none">
                                                        <span class="ms-badge panel-danger animation" :style="percentBg(item, 'color-bg')">{{item}}%</span>
                                                        <i class="material-icons ev-none" style="margin:unset;color:#3e3233;font-size: 29px;color;#ccc;z-index:1">expand_more</i>
                                                    </div>
                                                    <div class="percent-bg animation ev-none" :style="percentBg(item)">Complience</div>
                                                </div>
    
                                                <div :id="'collapseOneComplience'+idx" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOneComplience">
                                                    <div class="panel-body">
                                                        <div class="comp">
                                                            <div>
                                                                <p>Stamp Valid</p>
                                                                <b>3</b>
                                                            </div>
                                                            <div>
                                                                <p>Stamp Expired</p>
                                                                <b>4</b>
                                                            </div>
                                                            <div>
                                                                <p>Stamp will Expired</p>
                                                                <b>6</b>
                                                            </div>
    
                                                        </div>
    
                                                    </div>
                                                </div>
                                            </div>
    
    
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-primary">
                                    <div class="panel-heading jc-between pointer">
                                        <h3 class="panel-title">Absent</h3>
                                        <div class="flex ev-none">
                                            <span class="ms-badge" style="background:#f44336;color:white">20</span>
                                            <i class="material-icons ev-none" style="margin:unset;font-size: 29px;color;#ccc">expand_more</i>
                                        </div>
                                    </div>
                                    <div class="panel-body"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                <div class="is-col is-100 text-center">
                    <paginate :page-count="paginate.total" :container-class="'pagination'" :prev-text="'Prev'" :next-text="'Next'" :click-handler="handlerPaginate">
                    </paginate>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Paginate from "vuejs-paginate";
    import Loading from "vue-loading-overlay";
    import "vue-loading-overlay/dist/vue-loading.css";
    
    export default {
        data: () => ({
            docValue: "",
            loading: {
                isLoading: false,
                isLoadingPaginate: false,
                fullPage: false,
                loaderType: "dots",
                color: "#0065ff"
            },
            filter: {
                location: "",
                status: "Progress",
                line: "",
                search: "",
                page: 1,
                perPage: 12
            },
            paginate: {
                last: 0,
                total: 0,
                total_page: 0
            },
            data_pg: {},
            lines: [],
            hangars: [],
            status: []
        }),
    
        components: {
            Loading,
            paginate: Paginate,
        },
    
        mounted() {
            // this.initHangar();
            // this.initStatus();
            // this.initData().then(() => {
            // this.handlerGrid(this.data_pg.length);
            // });
        },
    
        methods: {
            onDetailTaskInfo(e) {
                console.log(e)
                 $('#exampleModal').modal('show');
            },
            percentBg(val, type = 'main-bg'){
                ll(val);
                let bgColor;
                if(type == 'main-bg') { 
                    if(val < 50) {
                        bgColor = '#f44336'
                    } else if(val >= 50 && val <70) {
                        bgColor = '#ff5722';
                    } else if(val >= 70 && val <80) {
                        bgColor = '#4caf50'
                    } else if(val >= 80) {
                        bgColor = '#2196f3'
                    }
                } else if(type == 'second-bg') {
                     if(val < 50) {
                        bgColor = '#ffc1bc'
                    } else if(val >= 50 && val <70) {
                        bgColor = '#ffd18e';
                    } else if(val >= 70 && val <80) {
                        bgColor = '#c7e5a4'
                    } else if(val >= 80) {
                        bgColor = 'rgb(32 150 243 / 37%)'
                    }
                } else if(type == 'color-bg') {
                     if(val < 50) {
                        bgColor = '#ad150a'
                    } else if(val >= 50 && val <70) {
                        bgColor = '#bb2d01';
                    } else if(val >= 70 && val <80) {
                        bgColor = '#237227'
                    } else if(val >= 80) {
                        bgColor = '#035595'
                    }
                }
                if(type == 'main-bg') {
                    return {width:`${val}%`, background:bgColor}
                } else  if(type == 'second-bg') {
                    return { background:bgColor}
                } else {
                    return {width:`${val}%`, color:bgColor}
                }

            },
            clickable(elms) {
                let elm;
                console.log(elms)


                if(elms.children.length>1) {
                    elm = elms.children[1]
                } else {
                    elm = elms.children[0]
                }
                
                elm.innerText === 'expand_more' ? elm.innerText = 'expand_less' : elm.innerText = 'expand_more'
            },
            initData: function() {
                return new Promise(resolve => {
                    this.loading.isLoading = true;
                    this.filter.page = 1;
                    axios
                        .post(
                            "/api/booking_and_submission/get_list_tracking",
                            this.filter
                        )
                        .then(res => {
                            this.data_pg = res.data.data;
                            this.paginate.total = res.data.last_page;
                            this.paginate.total_page = res.data.total;
                            this.loading.isLoading = false;
                            resolve();
                        })
                        .catch(e => {
                            console.log("Error: " + e);
                            resolve();
                        });
                });
            },
    
            initHangar: function() {
                axios.get("/api/booking_and_submission/show_hangar").then(res => {
                    this.hangars = res.data;
                });
            },
    
            initStatus: function() {
                axios.get("/api/project_status/get_status").then(res => {
                    this.status = res.data;
                });
            },
    
            handlerGrid: function(rows) {
                this.handlerClearCustomGrid().then(() => {
                    const template = ` <div class="is-col is-25 custom-card"></div>`;
                    let elem = document.getElementById("data-project");
                    let result = "";
                    let loop = 0;
    
                    if (rows > 0 && rows < 4) {
                        loop = 4 - rows;
                    } else {
                        if (rows % 4 > 0) {
                            loop = 4 - (rows % 4);
                        }
                    }
    
                    for (let i = 0; i < loop; i++) {
                        result += template;
                    }
    
                    elem.insertAdjacentHTML("beforeend", result);
                });
            },
    
            handlerPaginate: function(page) {
                this.runPaginate(page).then(() => {
                    this.handlerGrid(this.data_pg.length);
                });
            },
    
            runPaginate: function(page) {
                return new Promise(resolve => {
                    this.loading.isLoadingPaginate = true;
                    this.filter.page = page;
    
                    axios
                        .post(
                            "/api/production_control_hangar/get_list_tracking",
                            this.filter
                        )
                        .then(res => {
                            this.data_pg = res.data.data;
                            this.paginate.total = res.data.last_page;
                            this.paginate.total_page = res.data.total;
                            this.loading.isLoadingPaginate = false;
                            resolve();
                        })
                        .catch(e => {
                            console.log("Error: " + e);
                            this.loading.isLoadingPaginate = false;
                            resolve();
                        });
                });
            },
    
            handlerClearCustomGrid: function() {
                return new Promise(resolve => {
                    let elem = document.querySelectorAll(".custom-card");
                    elem.forEach((element, index) => {
                        element.remove();
                    });
                    resolve();
                });
            },
    
            handlerFilterLine: function() {
                axios
                    .get("/api/management/hangar/" + this.filter.location)
                    .then(res => {
                        this.lines = res.data.line;
                        this.handlerFilter();
                    });
            },
    
            handlerFilter: function() {
                this.loading.isLoading = true;
                this.filter.page = 1;
                axios
                    .post(
                        "/api/production_control_hangar/get_list_tracking",
                        this.filter
                    )
                    .then(res => {
                        this.data_pg = res.data.data;
                        this.paginate.total = res.data.last_page;
                        this.paginate.total_page = res.data.total;
                        this.loading.isLoading = false;
    
                        this.handlerGrid(res.data.data.length);
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                    });
            },
    
    
            hideModal: function(modal_name) {
                $("#" + modal_name).hide();
            },
    
            handleButton: function(id, status, color = "success") {
                let element = document.getElementById(id);
                return new Promise((resolve, reject) => {
                    if (status == "load") {
                        element.className += " is-loading";
                        element.disabled = true;
    
                        setTimeout(() => {
                            resolve();
                        }, 500);
                    } else {
                        element.className = `button is-${color}`;
                        element.disabled = false;
                        resolve();
                    }
                });
            },
    
        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    
    .panel-percent{
        border-radius:10px !important;position:relative
    }
    .comp {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
    }
    
    .comp div * {
        margin: unset;
        padding: unset;
    }
    
    .comp div:first-child {
        margin: unset;
    }
    
    .comp div:last-child {
        margin: unset;
    }
    
    .comp div {
        width: 100%;
        display: flex;
        margin: 10px 0;
        justify-content: space-between;
        align-items: center;
    }
    
    .panel-title {
        font-size: 14px;
    }
    
    .th-val {
        display: block;
        margin: 10px;
        font-weight: bold
    }
    
    .td-val {
        margin: 0 5px;
        font-weight: bold
    }
    
    .task-info:first-child {
        margin-top: inherit;
    }
    
    table.table tr th,
    table.table tr td {
        border-color: #cccccc;
        text-align: center;
        font-weight: normal;
    }

    @keyframes setWidth {
    from {opacity:0;width:0%}
    to {opacity:1;width:80%}
    }
    @keyframes setOpacity {
    from {opacity:0;}
    to {opacity:1;}
    }
    

    .panel-danger .ms-badge.animation{
    animation-name: setOpacity;
    animation-duration: 4s;
    }
    .percent-bg.animation{
    animation-name: setWidth;
    animation-duration: 2s;
    }
    .percent-bg {
        position: absolute;
        top: 0;
        transition:2s ease-in;
        left: 0;
        height: 100%;
        background: red;
        /* opacity: .2; */
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding-left: 15px;
        color: #fff;
    }
    
    .panel-info h3 {
        font-weight: 400;
    }
    
    .ms-container *:not(i) {
        font-family: 'Roboto', sans-serif !important;
    }
    
    .task-info.blue .ms-badge {
        background: #4dd663;
        border-color: #4dd663;
        //font-weight: 600;
        color: #000;
    }
    .ms-badge.panel-danger {
        background:inherit;border:none;padding:unset;height:unset;width:unset;z-index:1;
    }
    .task-info.orange .ms-badge {
        background: #cabb36;
        border-color: #cabb36;
        //font-weight: 600;
        color: #000;
    }
    
    .task-info.dark .ms-badge {
        background: #9d9c8f;
        border-color: #9d9c8f;
        //font-weight: 600;
        color: #000;
    }
    
    .task-info h2 {
        font-weight: 500;
        font-size: 16px;
    }
    
    .task-info p {
        margin: unset;
        font-size:13px;
    }
    
    .task-info.blue {
        background: #d7e9f1;
        color: #1c3098;
    }
    
    .task-info.dark {
        background: #e3e3e3;
        color: #000;
    }
    
    .task-info.orange {
        background: #dbdcb9;
        color: #958812;
    }
    
    .task-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 8px 0;
        padding: 4px 8px;
        border-radius: 7px;
    }
    
    .panel-heading>* {
        margin: unset
    }
    
    .flex {
        display: flex;
    }
    
    .jc-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .panel-heading+.panel-collapse>.panel-body {
        border-color: #cccccc !important;
    }
    
    .panel-heading {
        padding: 4px 15px;
    }
    
    .panel {
        margin-bottom: 9px;
        border-color: #cccccc !important;
        background: #f4f7fa !important;
    }
    
    .panel-body {
        padding: 6px;
    }
    
    .panel-primary>.panel-heading {
        background: #f4f7fa !important;
        color: #000000;
        border-color: #cccccc !important;
    }
    
    .panel-info .panel-body,
    .panel-danger .panel-body {
        background: #fff;
    }
    
    .panel-info>.panel-heading {
        background: #fff !important;
        color: #333;
        font-weight: 400;
        border-color: #cccccc !important;
    }
    
    .panel-danger>.panel-heading {
        /* background: #fed4d4 !important; */
        /*color: red;*/
        font-weight: 400;
        border-color: #white !important;
    }
    
    .panel,
    .panel-heading {
        border-radius: 10px;
    }
    
    .panel-body {
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    
    .panel>.panel-heading {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    .task-info .ms-badge {
        height: 25px;
        background: #fff;
        border-radius: 100%;
        line-height: normal;
        font-weight: normal;
        width: 25px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .ms-badge {
        border: 2.3px solid;
        font-weight: 500;
        background: #fff;
        border-radius: 30px;
        line-height: unset;
        display: flex;
        align-items: center;
        width: 35px;
        height: 25px;
        justify-content: center;
    }
    .ms-card {
        background: white;
        color: black;
        padding: 10px 15px;
        box-shadow: 0px 1px 7px -3px #939393;
        margin-bottom:15px;
    }
    
    .ms-card-header {
        text-align: right;
        margin-bottom: 12px;
        padding-right: 3px;
    }
    
    .is-row {
        margin-right: 10px;
    }
    
    .ev-none {
        pointer-events: none;
    }
    
    .pointer {
        cursor: pointer;
    }
</style>