<style scoped>
    ::v-deep .status-handler {
        color: white;
        font-size: 8pt;
        border-radius: 5px;
    }

    ::v-deep .status-handler.success {
        background-color: #13CE66;
        padding: 4px !important;

    }

    ::v-deep .status-handler.primary {
        background-color: #026396;
        padding: 2px 4px 2px 4px !important;

    }

    ::v-deep .status-handler.danger {
        background-color: #dc3545;
        padding: 4px !important;
    }

    ::v-deep .status-handler.unknown {
        background-color: black;
        padding: 4px !important;
    }

    ::v-deep .status-handler.warning {
        background-color: #ffc107;
        padding: 4px !important;
    }

        ::v-deep .action > i {
        padding: 5px;
        background: #fff;
        border-radius: 5px;
        font-size: 18px;
        border: 1px solid #eaeaea;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
        cursor: pointer;
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

    ::v-deep .action > i.primary {
        color: #026396;
    }

    ::v-deep .action > i.success:hover {
        background-color: #13CE66;
        color: white;
    }

    ::v-deep .action > i.primary:hover {
        background-color: #026396;
        color: white;
    }

    ::v-deep .tooltip-x {
        position: relative !important;
        display: inline-block !important;
    }

    ::v-deep .tooltip-x .tooltiptext-x {
        visibility: hidden !important;
        width: 120px !important;
        background-color: black !important;
        color: #fff !important;
        text-align: center !important;
        border-radius: 6px !important;
        padding: 5px 0 !important;
        
        /* Position the tooltip */
        position: absolute !important;
        z-index: 1 !important;
        bottom: 100% !important;
        left: 50% !important;
        margin-left: -60px !important;
        white-space: nowrap !important;
    }

    ::v-deep .tooltip-x .tooltiptext-x .tooltiptext-sub {
        font-size: 9px !important;
    }


    ::v-deep .tooltip-x:hover .tooltiptext-x {
        visibility: visible !important;
    }
</style>

<template>
    <div class="card" :style="handlerStatus($props.data_pg.custom_status)">
        <div class="card-header bb" style="margin-bottom: 10px;">
            <div class="title-area">
                <h3 class="title">
                    <i style="font-size: 13pt; font-weight: bold;" class='material-icons'>
                        flight
                    </i>
                    &nbsp;
                    {{$props.data_pg.ac_reg}}
                </h3>
            </div>
            <div class="option-box">
                <div class="option-item">
                    {{$props.data_pg.cust_name ?  $props.data_pg.cust_name.substring(0, 25) : $props.data_pg.cust_name}}
                </div>
            </div>
        </div>
        <div class="card-content">
            <div class="is-row">
                <div class="is-col is-50">
                    <div style="margin-bottom: 1px;">
                        <div style="font-size: 10pt; font-weight: bold;">
                            <a v-bind:href="'/production_control_hangar/tracking/'+$props.data_pg.pg_id+'/hangar/dashboard'">{{$props.data_pg.pg_id}}</a>  
                        </div>
                    </div>
                    <div :style="$props.grant_access_status ? 'cursor: pointer' : ''" v-on:click="handlerModalUpdateStatus()">
                        <span class="status-handler success" v-if="$props.data_pg.custom_status === 'Prepared'">Prepared</span>
                        <span class="status-handler warning" v-else-if="$props.data_pg.custom_status === 'Progress'">Progress</span>
                        <span class="status-handler primary" v-else-if="$props.data_pg.custom_status === 'Released'">Released</span>
                        <span class="status-handler danger" v-else-if="$props.data_pg.custom_status === 'Canceled'">Canceled</span>
                        <span class="status-handler danger" v-else-if="$props.data_pg.custom_status === 'Freeze'">Freeze</span>
                        <span class="status-handler danger" v-else-if="$props.data_pg.custom_status === 'Parking'">Parking</span>
                        <span class="status-handler unknown" v-else>UNKNOWN</span>
                    </div>
                </div>
                <div class="is-col is-30" style="text-align: right;">
                    <select v-on:change="handlerSelectTracking()" style="width: 100px;" :id="'select-tracking-'+$props.idx">
                        <option value="">Tracking</option>
                        <option value="dashboard_summary">Dashboard</option>
                        <option value="jobcard">Jobcard</option>
                        <option value="mdr">MDR</option>
                        <option value="mrm">MRM</option>
                        <option value="prm" disabled>PRM</option>
                        <option value="csp">CSP</option>
                        <option value="crm">CRM</option>
                        <option value="highlight">Performance</option>
                    </select>                  
                </div>
            </div>
            <div style="font-size: 9pt; font-weight: normal;">
                <div class="is-row">
                    <div class="is-col is-70">
                        <div>
                            <i style="font-size: 12pt; font-weight: bold;" class='material-icons'>
                                update
                            </i> 
                            <div style="margin-top: -21px; margin-left: 20px;">
                                <span>{{handlerDate($props.data_pg.start_date, $props.data_pg.start_date_new)}}</span> - 
                                <span :style="`${$props.data_pg.deadline <= 0 && $props.data_pg.custom_status !== 'Released' ? 'background-color: #dc3545; color: white;' : ''}`">{{handlerDate($props.data_pg.end_date, $props.data_pg.end_date_new)}}</span>
                            </div>
                        </div>
                        <div>
                            <i style="font-size: 12pt; font-weight: bold;" class='material-icons'>
                                location_on
                            </i> 
                            <div style="margin-top: -20px; margin-left: 20px;">
                                {{$props.data_pg.linedesc}} 
                            </div>
                        </div>
                    </div>
                    <div class="is-col is-30">
                        <div>
                            <div class="is-row" style="margin-right: 15px;">
                                <div class="is-row is-10"></div>
                                <div class="is-col is-30" style="text-align: right;">
                                    <div v-if="$props.grant_access_date" class="action tooltip-x">
                                        <span  class="tooltiptext-x">Update Date</span>
                                        <i v-on:click="handlerModalUpdateDate" class="material-icons success" tabindex="0">date_range</i>
                                    </div>
                                </div>
                                <div class="is-col is-30" style="text-align: right;">
                                    <div class="action tooltip-x">
                                        <span  class="tooltiptext-x">
                                            Synchronize
                                            <!--br>
                                            <span class="tooltiptext-sub">
                                                Last Sync :
                                                <br>
                                                {{handlerDateSync($props.data_pg.last_sync)}}
                                            </span-->
                                        </span>
                                        <i v-on:click="handlerSynchronize" class="material-icons warning" tabindex="0">sync</i>
                                    </div>
                                </div>
                                <!--div class="is-col is-30" style="text-align: right;">
                                    <div class="action tooltip-x">
                                        <span  class="tooltiptext-x">Project Highlight</span>
                                        <i v-on:click="handlerModalHighLight" class="material-icons primary" tabindex="0">insert_chart</i>
                                    </div>
                                </div-->
                            </div>
                        </div>
                    </div>
                </div>                             
            </div>
        </div>
        <div class="card-header bb" style="margin-top: -30px;"></div>
        <div>
            <div style="font-size: 8pt; font-weight: bold;">
                {{$props.data_pg.main_type}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'card-tracking',
    props: {
        data_pg: {
            pg_id: "",
            main_type: "",
            linedesc: "",
            cust_name: "",
            ac_reg: "",
            start_date: "",
            start_date_new: "",
            end_date: "",
            end_date_new: "",
            last_sync: "",
            custom_status: "",
            deadline: "",
        },
        idx: "",
        grant_access_highlight: false,
        grant_access_date: false,
        grant_access_status: false,
    },

    data: () => ({
        
    }),

    components: {
    },

    mounted() {
    },

    methods: {
        handlerDate: function(date1, date2) {
            let result = "";
            let d = "";

            if(date2) {
                d = date2.split("-");
            }else if(date1) {
                d = date1.split("-");
            }
            
            if(d.length > 0) {
                result = `${d[2]}/${d[1]}/${d[0]}`;
            }

            return result;
        },

        handlerDateSync: function(date) {
            const month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let result = date;
            if(date !== null) {
                const d = new Date(date);
                let hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
                let minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
                let seconds = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
                result = `${d.getDate()} ${month_names[d.getMonth()]} ${d.getFullYear()} ${hours}:${minutes}:${seconds}`;
            }
            return result;
        },

        handlerStatus(status) {
            let result = "border-left: 6px solid ";

            if(status === "Prepared") {
                result = result + "#13CE66";
            }else if(status === "Progress") {
                result = result + "#ffc107";
            }else if(status === "Released") {
                result = result + "#026396";
            }else if(status === "Canceled") {
                result = result + "#dc3545";
            }else if(status === "Freeze") {
                result = result + "#dc3545";
            }else if(status === "Parking") {
                result = result + "#dc3545";
            }else {
                result = result + "black";
            }

            return result;
        },

        handlerSynchronize: function() {
            this.$emit('sync', this.$props.data_pg.pg_id);
        },

        handlerSelectTracking: function() {
            let value = document.getElementById(`select-tracking-${this.$props.idx}`).value;
            this.$emit('option-change', this.$props.data_pg.pg_id, value);
            document.getElementById(`select-tracking-${this.$props.idx}`).value ='';
        },

        handlerModalHighLight: function() {
            this.$emit('modal-highlight', this.$props.idx);
        },

        handlerModalUpdateDate: function() {
            this.$emit('modal-date', this.$props.idx);
        },

        handlerModalUpdateStatus: function() {
            if(!this.$props.grant_access_status) return;
            this.$emit('modal-status', this.$props.idx);
        },

    }
}
</script>