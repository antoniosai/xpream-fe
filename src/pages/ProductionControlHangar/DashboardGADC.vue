<style scoped>
    ::v-deep .value {
        text-align: center !important;
    }

    ::v-deep .progress {
        color: #ffc107 !important;
        background-color: unset !important;
        border-radius: unset !important;
        -webkit-box-shadow: unset !important;
        box-shadow: unset !important;
    }

    ::v-deep .done {
        color: #28a745 !important;
    }

    ::v-deep .remaining {
        color: #dc3545 !important;
    }

    ::v-deep .average {
        color: #dc3545 !important;
    }

    ::v-deep .tat {
        color: #17a2b8 !important;
    }

    ::v-deep .small-title {
        font-size: 10pt !important;
    } 

    ::v-deep .is-secondary {
        color: #13CE66 !important;
        border: 2px solid #13CE66 !important;
        height: 32.94px !important;
    }

    ::v-deep .is-secondary:hover {
        color: white !important;
        background: #13CE66 !important;
    }

 
    
</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li class="tab-link active" data-tab="dashboard">Dashboard</li>
                <li class="tab-link" data-tab="mrm" v-on:click="$router.push({name: 'pc_hangar.centralmrm'})">GADC Request Monitoring</li>
            </ul>
            <div class="card tab-content active" id="dashboard" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">Dashboard Summary</h3>
                    </div>
                    <div class="option-box">
                        <div class="option-item">
                            <span style="white-space: nowrap">Location</span>
                            <select v-model="location" v-on:change="handlerChangeLocation()">
                                <option value="all">All Location</option>
                                <option v-for="hangar in hangars" :key="hangar.ID"  :value="hangar.id" >{{hangar.name + ' - ' + hangar.description}}</option>
                            </select>
                        </div>
                        <div class="option-item">
                            <button v-on:click="datarefresh" class="button is-success">
                                <i class='material-icons'>
                                    sync
                                </i>
                                Refresh
                            </button>                         
                        </div>
                    </div>
                </div>
                <div class="card-content">                          
                    <div class="is-row">
                        <div class="is-col is-20">
                            <button :class="`button ${selected_ac === 'all' ? 'is-success' : 'is-secondary'}`" style="width:150px; margin-top:10px;" v-on:click="handlerchangeacreg('all')">All</button>
                            <button 
                                v-for="(elem, index) in options_ac"
                                v-bind:key="index"
                                style="width:150px; margin-top:-3px;" 
                                v-on:click="handlerchangeacreg(elem.ac_reg)"
                                :class="`button ${selected_ac === elem.ac_reg ? 'is-success' : 'is-secondary'}`"
                            >
                                {{elem.ac_reg}}
                            </button>
                        </div>
                        <div class="is-col is-80">
                            <loading
                                :active.sync="loading.isLoading" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>                        
                            <GChart
                                type="BarChart"
                                :data="chart.statusMaterial.chartData"
                                :options="chart.statusMaterial.chartOptions"
                            />
                        </div>
                    </div>                                                                       

                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: {
        GChart,
        Loading,
    },

    data: () => ({
        hasAccess: false,
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        chart: {

            statusMaterial: {
                chartData: [
                    ['MATFULSTAT', 'TOTAL', 'COLOR', 'ANNOTATION'],
                    ['', 0, '', '']
                ],
                chartOptions: {
                    title: 'ALL',
                    //bar: {groupWidth: "100%"},
                    height: 500,
                    vAxis: {textPosition: 'none'},
                    legend: { position: 'none', maxLines: 3 },
                    hAxis: {
                        minValue: 0,
                    },
                }
            },
            
        },

        default_chart_stack_option: {
            height: 100,
            legend: { position: 'top', maxLines: 3 },
            isStacked: 'percent',
            hAxis: {
                minValue: 0,
                ticks: [0, .25, .5, .75, 1],
            },
            vAxis: {
                minValue: 0,
            },            
            series: {
                0:{color:'#28a745'},
                1:{color:'#ffc107'},
                2:{color:'#dc3545'},
            }
        },

        default_chart_column_stack_option: {
            height: 350,
            legend: { position: 'top', maxLines: 3 },
            isStacked: 'percent',
            hAxis: {
                minValue: 0,
                ticks: [0, .25, .5, .75, 1],
            },
            vAxis: {
                minValue: 0,
            },            
            series: {
                0:{color:'#28a745'},
                1:{color:'#ffc107'},
                2:{color:'#dc3545'},
            }
        },

        default_chart_column_stack_normal_option: {
            height: 350,
            legend: { position: 'top', maxLines: 3 },
            isStacked: 'true',
            hAxis: {
                minValue: 0,
                // ticks: [0, .25, .5, .75, 1],
            },
            vAxis: {
                minValue: 0,
            },            
            series: {
                0:{color:'#28a745'},
                1:{color:'#ffc107'},
                2:{color:'#dc3545'},
            }
        },
        options_ac: [],
        hangars: [],
        location: "all",
        selected_ac: "all",
    }),

    mounted() {
        this.hasAccess = true;
        this.datarefresh();
        this.initfilteracreg();
        this.initHangar();
    },

    methods: {

        initfilteracreg: function() {
            axios.get(`/api/production_control_hangar/gadc/getacreg_active/${this.location}`)
            .then(res => {
                this.options_ac = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
            })
        },

        handlerchangeacreg: function(acreg){
            this.loading.isLoading = true;
            this.selected_ac = acreg;
            this.chart.statusMaterial.chartOptions.title = acreg.toUpperCase();
            axios.get(`/api/production_control_hangar/gadc/status_material_summary/${acreg}/${this.location}`)
            .then(res => {
                this.chart.statusMaterial.chartData = res.data;
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
                this.loading.isLoading = false;
            })        

        },

        handlerChangeLocation: function() {
            this.initfilteracreg();
            this.selected_ac ="all";
            this.initStatusMaterial();
        },

        datarefresh: function(){
            this.initStatusMaterial().then(() => {
                this.loading.isLoading = false;
            });
        },

        initStatusMaterial: function() {
            this.loading.isLoading = true;
            this.chart.statusMaterial.chartOptions.title = "ALL";
            return new Promise((resolve, reject) => {
                axios.get(`/api/production_control_hangar/gadc/status_material_summary/all/${this.location}`)
                .then(res => {
                    this.chart.statusMaterial.chartData = res.data;
                    this.loading.isLoading = false;
                    resolve();
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Undefined error");
                    this.loading.isLoading = false;
                    resolve();
                })
            })
        },

        initHangar: function() {
            axios.get('/api/booking_and_submission/show_hangar')
            .then( res => {
                this.hangars = res.data
            })
        },
    }
}
</script>
