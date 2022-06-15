<template>
    <div>

        <loading 
        :loader="loading.loader"
        :color="loading.color"
        :width="loading.width"
        :height="loading.width"
        :active.sync="loading.isLoading" 
        :can-cancel="true" 
        :is-full-page="loading.fullPage"></loading>

        <div class="content-header"></div>
        <div class="content-body" id="primaryContent">
            <div class="is-row" style="width: auto; display: block;">
                <div class="is-col">
                    <div class="card">
                        <div class="card-header no-border">
                            <div class="title-area">
                                <h3 class="title">{{ $route.meta.title }}</h3>
                                <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                            </div>
                            <div class="option-box">
                                <div class="option-item">
                                    <span>Timeframe</span>
                                    <select @change="liveSearch" v-model="form.timeframe" class="by_timeframe">
                                        <option value="daily">Daily</option>
                                        <option value="weekly" selected>Weekly</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                </div>
                                <div class="option-item">
                                    <span>Location</span>
                                    <select @change="liveSearch" v-model="form.location" class="by_location">
                                        <option value="all">All Location</option>
                                        <option v-bind:value="h.id" v-for="h in hangar" :key="h.id">{{ h.name + ' - ' + h.description }}</option>
                                    </select>
                                </div>
                                <div class="option-item">
                                    <span>Line</span>
                                    <select @change="liveSearch" v-model="form.line" class="by_location">
                                        <option value="all">All Line</option>
                                        <option v-bind:value="l.id" v-for="l in line" :key="l.id">{{ l.line_name }}</option>
                                    </select>
                                </div>
                                <div class="option-item">
                                    <span>Level</span>
                                    <select @change="liveSearch" v-model="form.level" class="by_location">
                                        <option value="all">All Level</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <!-- <option value="4">4</option> -->
                                    </select>
                                </div>
                                <div class="option-item">
                                    <span>Filter</span>
                                    <input class="by_search" type="search" name="search" v-model="form.search_query" v-on:keyup.enter="liveSearch" placeholder="Type and enter">
                                </div>
                                <div class="option-item">
                                    <button v-on:click="printDiv('printarea')">Print ABMP</button>
                                </div>
                            </div>
                        </div>

                        <div id="printarea">
                            <div class="card-content">

                                <div id="project_timeline"></div>

                            </div>

                                <!-- <div class="skrol" id="load_table_airframe">
                                    <div id="show_gantt" style='width:100%; height:100%;'></div>
                                </div> -->

                            <table class="table table-condensed">
                                <tbody>
                                    <tr>
                                        <td style="text-align: center"><b>Plan Level 1</b></td>
                                        <td style="text-align: center"><b>Plan Level 2</b></td>
                                        <td style="text-align: center"><b>Plan Level 3</b></td>
                                        <td style="text-align: center"><b>Plan Progres</b></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style="width:100%;height:9px;background:#66bb6a;"></div>
                                        </td>
                                        <td>
                                            <div style="width:100%;height:9px;background:#ffd600;"></div>
                                        </td>
                                        <td>
                                            <div style="width:100%;height:9px;background:#d84315;"></div>
                                        </td>
                                        <td>
                                            <div style="width:100%;height:9px;background:#9e9e9e;"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table style="margin-top: 25px" table="supervisor">
                                <tbody>
                                    <tr>
                                        <td>Prepard By: <strong>Amanah</strong></td>
                                        <td>Checked By: <strong>Nano Wilda K.</strong></td>
                                        <td>Approved By: <strong>M. Budiman</strong></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <script id="item-template" type="text/x-handlebars-template">
            <table class="score">
                <tr>
                    <td colspan="3" class="description">sd</td>
                </tr>
                <tr>
                    <td>aa</td>
                    <th>aa - aa</th>
                    <td>aa</td>
                </tr>
                <tr>
                    <td><img src="https://flagpedia.net/data/flags/mini/aa.png" width="31" height="20" alt="aa" /></td>
                    <th></th>
                    <td><img src="https://flagpedia.net/data/flags/mini/aa.png" width="31" height="20" alt="aa" /></td>
                </tr>
            </table>

        </script>

    </div>

</template>

<script>

import $axios from './../../api'

// import vis from 'vis-timeline'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {

    data: () => ({

        hangar: [],
        line: [],

        form: {
            timeframe: 'weekly',
            location: 'all',
            level: 'all',
            line: 'all',
            search_query: ''
        },

        timeline: '',

        loading: {
            loader: 'dots',
            color: '#1976d2',
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: true,
        },

        api_url: '/api/slot_and_capacity/timeline',
        vis: {
            maxHeight: 500
        },
        gantt: {
            data:[]
        }
    }),

    components: {
        Loading
    },


    mounted() {
        // this.initData()
        // this.initGantt()
        // gantt.config.branch_loading = true;
        // gantt.config.date_format = "%Y-%m-%d %H:%i";
        // gantt.init('show_gantt')

        this.initData()
        this.initHangar()

    },

    methods: {
        initData: function() {

            this.isLoading = true

            let url = this.api_url

            let params = this.form
            
            axios.get('/api/slot_and_capacity/timeline', { params })
            .then( res => {
                // gantt.parse(res.data)

                this.initTimeline(res.data.header, res.data.data)
                this.isLoading = false
            })
        },

        initHangar: function() {
            axios.get('/api/management/hangar')
            .then( res => {
                this.hangar = res.data.data
            })
        },

        liveSearch: function () {

            if(this.form.location != 'all') {   
                this.setLineWithHangarId(this.form.location)
            } 
            
            if(this.form.location == 'all'){
                this.form.line = 'all'
                this.line = []
            }

            this.timeline.destroy()
            this.initData()
        },

        printDiv: function(divName) {

            this.vis.maxHeight = 1000
            let printContents = document.getElementById(divName).innerHTML
            let originalContents = document.body.innerHTML

            document.body.innerHTML = printContents;

            window.print();

            document.body.innerHTML = originalContents;
        },

        setLineWithHangarId: function(hangar_id) {
            this.line = []
            // this.form.line = 'all'
            axios.get('/api/management/hangar/'+hangar_id)
            .then( res => {
                this.line = res.data.line
            })
        },

        changeViewScaleTimeline: function(timeline, scale) {
            let start, end;
            let startDate = new Date();
            let endDate = new Date();

            setTimeout(function () {
                if(scale === 'daily') {
                    start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() - 7);
                    end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() + 7);
                } else if (scale === 'weekly') {
                    start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() - (7 * 4));
                    end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() + (7 * 4));
                } else if (scale === 'monthly') {
                    start = new Date(startDate.setMonth(startDate.getMonth() - 6));
                    end = new Date(endDate.setMonth(endDate.getMonth() + 6));
                }
                
                timeline.setWindow(start, end);

                setTimeout(() => {
                    let currentDate = new Date();
                    timeline.moveTo(currentDate);
                    // if(move) timeline.moveTo(currentDate);
                }, 1000);
            }, 1000);
        },

        initTimeline: function(header, data) {
            let container = document.getElementById('project_timeline')

            let groups = new vis.DataSet(header)
            let items = new vis.DataSet(data);

            let options = {
                stack: true,
                maxHeight: this.vis.maxHeight,
                horizontalScroll: false,
                verticalScroll: true,
                zoomKey: "ctrlKey",
                start: Date.now() - 1000 * 60 * 60 * 24 * 3, // minus 3 days
                end: Date.now() + 1000 * 60 * 60 * 24 * 21, // plus 1 months aprox.
                orientation: {
                    axis: "both",
                    item: "top"
                }
            }

            this.timeline = new vis.Timeline(container, items, groups, options)
            this.changeViewScaleTimeline(this.timeline, this.form.timeframe)
            
            // let layer = ''
            //     layer += '<table border="1" class="vis-table" id="timeline_table" style="font-size: 9.5px; text-align: center; border-bottom: none !important; max-width: 800px">'
            //         layer += '<tr>'
            //             layer += '<td class="c1" width="10">A/C Reg</td>'
            //             layer += '<td class="c2" width="10">AMS</td>'
            //             layer += '<td class="c3" width="10">AMS</td>'
            //             layer += '<td class="c4" width="10">AMS</td>'
            //             layer += '<td class="c5" width="70">AMS</td>'
            //             layer += '<td class="c6" width="10">AMS</td>'
            //             layer += '<td class="c7" width="10">AMS</td>'
            //             layer += '<td class="c8" width="10">AMS</td>'
            //             layer += '<td class="c9" width="10">AMS</td>'
            //         layer += '</tr>'
            //     layer += '</table>'

          
            let max0, max1 = 20, max2 = 20, max3 = 20, max4 = 20, max5 = 20, max6 = 20, max7 = 20, max8 = 20, max9 = 20, max10 = 0

            let c0 = 0;    
            $('.c0').each(function() {
                max0 = Math.max($(this).width(), max0);
            }).width(max0);
            $('.c0').attr('width', '17px');

            let c1 = 0;    
            $('.c1').each(function() {
                max1 = Math.max($(this).width(), max1);
            }).width(max1);
            $('.c1').attr('width', max1);

            let c2 = 0;    
            $('.c2').each(function() {
                max2 = Math.max($(this).width(), max2);
            }).width(max2);
            $('.c2').attr('width', max2);

            let c3 = 0;    
            $('.c3').each(function() {
                max3 = Math.max($(this).width(), max3);
            }).width(max3);
            $('.c3').attr('width', max3);

            let c4 = 0;    
            $('.c4').each(function() {
                max4 = Math.max($(this).width(), max4);
            }).width(max2);
            $('.c4').attr('width', max4);

            let c5 = 0;    
            $('.c5').each(function() {
                max5 = Math.max($(this).width(), max5);
            }).width(max5);
            $('.c5').attr('width', max5);

            let c6 = 0;    
            $('.c6').each(function() {
                max6 = Math.max($(this).width(), max6);
            }).width(max6);
            $('.c6').attr('width', max6);

            let c7 = 0;    
            $('.c7').each(function() {
                max7= Math.max($(this).width(), max7);
            }).width(max7);
            $('.c7').attr('width', max7);

            let c8 = 0;    
            $('.c8').each(function() {
                max8 = Math.max($(this).width(), max8);
            }).width(max8);
            $('.c8').attr('width', max8);

            let c9 = 0;    
            $('.c9').each(function() {
                max9 = Math.max($(this).width(), max9);
            }).width(max9);
            $('.c9').attr('width', max9);

            

            // $('.vis-timeline').first().prepend(layer);
            

            // $('.vis-timeline').first().prepend(table_header);

            // $('.vis-timeline').first().prepend(table_header);
            $('.vis_table').removeAttr("border")

            return this.timeline
        },

    }
}
</script>

<style type="text/css" media="print" scoped>
  @page { 
      size: landscape; 
    }
</style>

<style scoped>
    ::v-deep .vis-labelset .vis-label {
        border-bottom: 0px solid #fff;
    }

    ::v-deep .vis-item.green {
        background-color: #43a047;
        border-color: #fff;
        color: white;
        font-family: monospace;
        box-shadow: 0 0 10px grey;
    }

    ::v-deep .vis-item.yellow {
        background-color: #ffd600;;
        border-color: #fff;
        color: white;
        font-family: monospace;
        box-shadow: 0 0 10px grey;
    }

    ::v-deep .vis-item.red {
        background-color: #d84315;
        border-color: #fff;
        color: white;
        font-family: monospace;
        box-shadow: 0 0 10px grey;
    }

    ::v-deep .vis-item.grey {
        background-color: #9e9e9e;
        border-color: #fff;
        color: white;
        font-family: monospace;
        box-shadow: 0 0 10px grey;
    }

    ::v-deep tr { border-bottom: none !important; }

</style>