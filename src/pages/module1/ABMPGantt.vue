<template>
    <div>

        <div class="content-header"></div>
        <div class="content-body">
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
                                    <select @change="timeframeby(timeframe)" v-model="timeframe" class="by_timeframe">
                                        <option v-for="(item, index) in timeframeoptions" :key="index" :value="item.value">{{item.text}}
                                        </option>
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
                                    <span>Export to &nbsp;</span>
                                    <button v-on:click="printAbmpModal('printarea', 'pdf')" style="margin-right: 5px">PDF</button>
                                    <button v-on:click="printAbmpModal('printarea', 'png')" style="margin-right: 5px">PNG</button>
                                    <button v-on:click="printAbmpModal('printarea', 'msproject')" style="margin-right: 5px">MS Project</button>
                                    <button v-on:click="printAbmpModal('printarea', 'excel')" style="margin-right: 5px">Excel</button>

                                    <div id="dropdown" class="dropdown is-hidden">
                                        <a href="#">Item 1</a>

                                        <a href="#" class="is-active">Item 2</a>

                                        <a href="#" class="is-separator">Item 3</a>
                                        <a href="#">Item 4</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="card-content" id="printarea">
                            <div class="skrol" id="load_table_airframe">
                                <div id="show_gantt" style='width:100%; height:500px;'></div>
                            </div>
                            <table class="table table-condensed">
                                <tbody>
                                    <tr>
                                        <td style="text-align: center"><b>Plan Level 1</b></td>
                                        <td style="text-align: center"><b>Plan Level 2</b></td>
                                        <td style="text-align: center"><b>Plan Level 3</b></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center">
                                            <div style="width:100%;height:15px;background:#8bc34a;"></div>
                                        </td>
                                        <td style="text-align: center">
                                            <div style="width:100%;height:15px;background:#fbc02d;"></div>
                                        </td>
                                        <td style="text-align: center">
                                            <div style="width:100%;height:15px;background:#ef5350;"></div>
                                        </td>
                                       
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Filter Date Modal -->
        <div class="modal-box" id="datefilter_modal">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('datefilter_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Please Select a Periode</h2>
                </div>
                <div class="modal-body">

                    <p>Please set Start Date and End Date before you start Exporting ABMP Report</p>

                    <div class="card">
                        <div class="is-row">
                            <div class="is-col is-50">
                                <label>Start Date</label>   
                                <input type="date" v-model="exports.start_date">
                            </div>
                            <div class="is-col is-50">
                                <label>End Date</label>
                                <input type="date" v-model="exports.end_date">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button class="button is-success" v-on:click="printAbmpAction">Export</button>
                </div>
            </div>
        </div>
        <!-- / Filter Date Modal -->

    </div>
</template>

<script>

// dhtmlxgantt.js

import './lib/dhtmlxgantt'
import './lib/dhtmlxgantt_tooltip'
import './lib/api'
import 'dhtmlx-gantt/codebase/ext/dhtmlxgantt_marker'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'
import 'dhtmlx-gantt/codebase/skins/dhtmlxgantt_skyblue.css'

import ABMPHeader from './abmp_partials/Header'

export default {

    data: () => ({

        timeframe: 'weekly',
        timeframeoptions: [
            {text: 'Weekly', value: 'weekly'},
            {text: 'Monthly', value: 'monthly'},
        ],

        hangar: [],
        line: [],
        form: {
            //timeframe: 'weekly',
            location: 'all',
            level: 'all',
            line: 'all',
            start_date: 'all',
            end_date: 'all',
            search_query: ''
        },
        api_url: '/api/slot_and_capacity/abmp_report',
        gantt_: {
            data:[]
        },
        start_date: '',
        end_date: '',
        exports: {
            start_date: '',
            end_date: '',
            type: '',
            div_name: ''
        }
    }),

    components: {
    
    },


    mounted() {

        
        this.initGantt('weekly')
        // gantt.clearAll()
        gantt.config.branch_loading = true;
        gantt.config.date_format = "%Y-%m-%d";
        gantt.init('show_gantt')
        // gantt.parse(this.$props.tasks)

        this.initData()
        this.initHangar()

    },

    methods: {
        initData: function() {


            var url = this.api_url

            let params = this.form
            
            axios.get('/api/slot_and_capacity/abmp_report', { params })
            .then( res => {
                gantt.clearAll()
                gantt.parse(res.data)
            })

            // gantt.parse(this.gantt);
    
            // gantt.load(url);
            
            // var dp = new gantt.dataProcessor(url);
            // dp.init(gantt);
            // dp.setTransactionMode("REST");

        },

        initHangar: function() {
            axios.get('/api/management/hangar')
            .then( res => {
                this.hangar = res.data.data
            })
        },

        timeframeby(period){
            this.initGantt(period);
            this.initData();
        },

        initGantt: function (period) {

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;

            var date_to_str = gantt.date.date_to_str(gantt.config.task_date);
            var today = new Date(today);
            gantt.addMarker({
                start_date: today,
                css: "status_line",
                text: "Today",
                title: "Today"
            });

            var monthScaleTemplate = function (date) {
                var dateToStr = gantt.date.date_to_str("%M");
                return dateToStr(date);
            };
 

            var weekScaleTemplate = function (date) {
                var dateToStr = gantt.date.date_to_str("%d");
                return dateToStr(date);
            };

            function calculateResourceLoad(tasks, scale) {
                var step = scale.unit;
                var timegrid = {};

                for (var i = 0; i < tasks.length; i++) {
                    var task = tasks[i];

                    var currDate = gantt.date[step + "_start"](new Date(task.start_date));

                    while (currDate < task.end_date) {

                        var date = currDate;
                        currDate = gantt.date.add(currDate, 1, step);

                        if (!gantt.isWorkTime({date: date, task: task})) {
                            continue;
                        }

                        var timestamp = date.valueOf();
                        if (!timegrid[timestamp])
                            timegrid[timestamp] = 0;

                        timegrid[timestamp] += 8;
                    }
                }

                var timetable = [];
                var start, end;
                for (var i in timegrid) {
                    start = new Date(i * 1);
                    end = gantt.date.add(start, 1, step);
                    timetable.push({
                        start_date: start,
                        end_date: end,
                        value: timegrid[i]
                    });
                }

                return timetable;
            }
            
            gantt.config.scale_unit = "year";
            gantt.config.date_scale = "%Y";
            gantt.config.min_column_width = 75;
            gantt.config.scale_height = 80;
            gantt.config.drag_move = false;
            gantt.config.drag_resize = false;
            gantt.config.drag_links = false;
            gantt.config.drag_progress = false;
            gantt.config.drag_project = false;

            if(period == 'weekly'){
                 gantt.config.scales = [
                    {unit: "month", step: 1, format: "%F, %Y"},
                ]

                gantt.config.subscales = [
                    { unit: "month", step: 1, template: monthScaleTemplate },
                    { unit: "week", step: 1, template: weekScaleTemplate }
                ]; 
            }

            else if(period=='monthly'){
                 gantt.config.scales = [
                    {unit: "year", step: 1, format: "%F, %Y"},
                ]

                gantt.config.subscales = [
                    { unit: "month", step: 1, template: monthScaleTemplate }
                ];            
            }
            

            gantt.config.sort = true;

            gantt.config.row_height = 30

            gantt.config.grid_resize = true
            gantt.config.grid_resizer_attribute = "gridresizer"
            gantt.config.grid_resizer_column_attribute = "col_index"

            // Test
            gantt.config.auto_scheduling = true;
            gantt.config.auto_scheduling_initial = false;
            gantt.config.auto_scheduling_strict = false;
            gantt.config.api_date = "%Y-%n-%d %H:%i";
            gantt.config.xml_date = "%Y,%n,%d";
            gantt.config.work_time = true;
            gantt.config.correct_work_time = true;
            gantt.config.date_grid = "%j-%M-%Y";
            gantt.config.duration_unit = "day";
            gantt.config.step = 1;
            gantt.config.details_on_create = true;
            gantt.config.highlight_critical_path = true;
            gantt.config.show_progress = true;
            gantt.config.skip_off_time = true;
            gantt.config.drag_move = true;
            gantt.config.drag_progress = true;
            gantt.config.drag_lightbox = false;
            gantt.config.fit_tasks = true;
            gantt.config.grid_width = 400;
            gantt.config.order_branch = true;
            gantt.config.order_branch_free = true;
            gantt.config.open_tree_initially = false;
            gantt.config.touch = "true";
            gantt.config.static_background = true;
            gantt.config.show_task_cells = false;
            gantt.config.optimize_render = true;
            // End Test

            gantt.templates.task_text = function(start, end, task){
                return task.inspection;
            };

            gantt.templates.rightside_text = function(start, end, task){
                let end_date = new Date(task.end_date)

                return end_date.toLocaleDateString('id')
            };

            gantt.templates.leftside_text = function(start, end, task){
                let start_date = new Date(task.start_date)

                return start_date.toLocaleDateString('id')
            };

            gantt.templates.task_time = function(start,end,task){
                return gantt.templates.task_date(task.start_date)+" - "+gantt.templates.task_end_date(task.end_date);
            };

            // gantt.templates.task_class = function (start, end, task) {
            //     switch (task.level) {
            //         case "1":
            //             return "level_1";
            //             break;
            //         case "2":
            //             return "level_2";
            //             break;
            //         case "3":
            //             return "level_3";
            //             break;
            //     }
            // };


            gantt.templates.tooltip_text = function(start,end,task){
                return "<b>Inspection:</b> "+task.inspection
            };

            gantt.config.columns = [
                {
                    name: "text",
                    align: "center",
                    label: "Resource",
                    resize: true,
                },
                {
                    name: "ac_reg",
                    align: "center",
                    label: "A/C Reg",
                    resize: true,
                },
                {
                    name: "ac_type",
                    align: "center",
                    label: "A/C Type",
                    resize: true,
                },
                {
                    name: "inspection",
                    align: "center",
                    label: "Inspection",
                    resize: true,
                },
                {
                    name: "revision",
                    align: "center",
                    label: "Revision",
                    resize: true,
                },
                {
                    name: "releaseman",
                    align: "center",
                    label: "Releaseman",
                    resize: true,
                },
                {
                    name: "customer",
                    align: "center",
                    resize: true,
                    label: "Customer",
                },
                {
                    name: "ams",
                    align: "center",
                    resize: true,
                    label: "AMS",
                },
                {
                    name: "project_owner",
                    align: "center",
                    label: "P. Owner",
                    resize: true,
                },
                {
                    name: "duration",
                    align: "center",
                    label: "Duration",
                    resize: true,
                },
                {
                    name: "progress", 
                    label: "Progress", 
                    width: 120,
                    template: function(task){
                        if (task.progress) return Number(task.progress).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})
                        else return '0%';
                    }
                }
            ]
            


        },

        hideModal: function(divName) {
            $('#'+divName).hide()

            this.exports.end_date = ''
            this.exports.start_date = ''
        },

        handlerHeader: function(version, ac_reg, ac_type, main_type, customer, rev_no, start_date, end_date) {
            let result = `
                <table style="width: 100%; border-collapse: collapse">
                    <tr>
                        <td style="border: 1px solid #cecece; width: 270px">
                            <div style="padding: 10px; text-align: center">
                                Print Date: ${new Date().toLocaleDateString('id')}
                                <br><br>
                                <img style="width: 240px; height: 50px; margin-right: 20px" src="https://1.bp.blogspot.com/-gbrr0Hb5SEw/WI76z4wmXgI/AAAAAAAAAEU/OMdha9gjIq4k4vsbRwx4uma7Rs055LvVwCEw/s1600/Logo-GMF2.jpg" alt="">
                            </div>
                        </td>
                        <td style="text-align: center; background-color: #fff; border: 1px solid #cecece; font-family: Arial, Helvetica, sans-serif;">
                            <div style="padding: 10px 0px 0px 0px;">
                                <p style="line-height: 5px; font-size: 13pt;">
                                    <b>Aircraft Base Maintenance Planning</b>
                                </p>
                                <p style="line-height: 5px; font-size: 11pt;">
                                    <p>Periode</p>
                                    <b>${this.exports.start_date} / ${this.exports.end_date}</b>
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            `;

            return result;
        },

        handlerFooter: function(project_owner, project_sponsor) {
            let result = `
                <table class="table table-condensed" style="width: 100%; margin-top: 20px; margin-bottom: 20px">
                    <tbody>
                        <tr>
                            <td style="text-align: center"><b>Plan Level 1</b></td>
                            <td style="text-align: center"><b>Plan Level 2</b></td>
                            <td style="text-align: center"><b>Plan Level 3</b></td>
                        </tr>
                        <tr>
                            <td>
                                <div style="width:100%;height:15px;background:#8bc34a;"></div>
                            </td>
                            <td>
                                <div style="width:100%;height:15px;background:#fbc02d;"></div>
                            </td>
                            <td>
                                <div style="width:100%;height:15px;background:#ef5350;"></div>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
                <table style="width: 100%; border-collapse: collapse; border: 1px solid #cecece; color: #575656;">
                    <tr>
                        <td style="border: 1px solid #cecece; text-align: center; width: 33%">
                            <div style="font-family: Arial, Helvetica, sans-serif; padding: 3px 0px 3px 0px;">
                                <p style="line-height: 8px; font-size: 9pt;"><b>Prepared : </b></p>
                                <br>
                    
                                <p style="line-height: 8px; font-size: 8pt;"></p>
                            </div>
                        </td>
                        <td style="border: 1px solid #cecece; text-align: center; width: 33%">
                            <div style="font-family: Arial, Helvetica, sans-serif; padding: 3px 0px 3px 0px;">
                                <p style="line-height: 8px; font-size: 9pt;"><b>Cheked By : </b></p>
                                <br>
                    
                                <p style="line-height: 8px; font-size: 8pt;"></p>
                            </div>
                        </td>
                        <td style="border: 1px solid #cecece; text-align: center; width: 33%">
                            <div style="font-family: Arial, Helvetica, sans-serif; padding: 3px 0px 3px 0px;">
                                <p style="line-height: 8px; font-size: 9pt;"><b>Approved : </b></p>
                                <br>
                    
                                <p style="line-height: 8px; font-size: 8pt;"></p>
                            </div>
                        </td>
                    </tr>
                </table>
                <div style="padding: 0px 0px 0px 10px;">
                    <p style="font-size: 10pt; color: #575656">Form No.: GMF/Q-462</p>
                </div>
            `;

            return result;
        },

        printAbmpModal: function(divName, format) {
            this.exports.div_name = divName
            this.exports.type = format

            $('#datefilter_modal').show()
        },

        printAbmpAction: function() {
            let type = this.exports.type
            let div_name = this.exports.div_name

            if(this.exports.start_date == '') {
                return toastr.error('Please input Start Date')
            } else if (this.exports.end_date == '') {
                return toastr.error('Please input End Date')
            }

            if(this.exports.end_date <= this.exports.start_date) {
                return toastr.error('Start Date can\'t be same or greater than End Date', 'Oopps!')
            }

            this.printAbmp(div_name, type)
        },

        printAbmp: function(divName, format) {

            let start_date = this.exports.start_date
            let end_date = this.exports.end_date

            // Select date first()
            gantt.config.start_date = new Date(start_date)
            gantt.config.end_date = new Date(end_date)

            this.form.start_date = start_date
            this.form.end_date = end_date

            if(format == 'png') {
                gantt.exportToPNG({
                    name: "abmp_report_periode"+ this.exports.start_date + " - " + this.exports.end_date + ".png",
                    header: `
                        <link rel="stylesheet" href="/css/gantt.css" type="text/css">
                        <style>
                            .gantt_grid_scale .gantt_grid_head_cell {
                                color: rgb(75, 75, 75) !important;
                                font-weight: bold !important;
                                border-right: 1px solid #cecece !important;
                            }

                            .gantt_scale_cell { 
                                color: rgb(75, 75, 75) !important;
                                font-weight: bold !important;
                                border-right: 1px solid #cecece !important;
                            }

                            .level_1 {
                                background-color: #8bc34a !important;
                                border: 2px solid #8bc34a !important;
                                color: #ef5350 !important;
                            }

                            .level_1 .gantt_task_progress {
                                background-color: #8bc34a !important;
                            }

                            .level_2 {
                                background-color: #fbc02d !important;
                                border: 2px solid #fbc02d !important;
                                color: #fbc02d !important;
                            }

                            .level_2 .gantt_task_progress {
                                background-color: #fbc02d !important;
                            }

                            .level_3 {
                                background-color: #ef5350 !important;
                                border: 2px solid #ef5350 !important;
                                color: #ef5350 !important;
                            }

                            .level_3 .gantt_task_progress {
                                background-color: #ef5350 !important;
                            }
                        </style>
                        ${this.handlerHeader(
                            '', "-", "-", "-", "-", "-", "-", "-"
                        )}
                    `,
                    footer:`${this.handlerFooter(
                        'Jajang',
                        'Maman'
                    )}`,
                    locale:"en",
                    skin:'terrace',
                    raw:true
                });
            } else if(format == 'pdf') {
                gantt.exportToPDF({
                    name: "abmp_report_periode"+ this.exports.start_date + " - " + this.exports.end_date + ".pdf",
                    header: `
                        <link rel="stylesheet" href="/css/gantt.css" type="text/css">
                        <style>
                            .gantt_grid_scale .gantt_grid_head_cell {
                                color: rgb(75, 75, 75) !important;
                                font-weight: bold !important;
                                border-right: 1px solid #cecece !important;
                            }

                            .gantt_scale_cell { 
                                color: rgb(75, 75, 75) !important;
                                font-weight: bold !important;
                                border-right: 1px solid #cecece !important;
                            }

                            .level_1 {
                                background-color: #8bc34a !important;
                                border: 2px solid #8bc34a !important;
                                color: #ef5350 !important;
                            }

                            .level_1 .gantt_task_progress {
                                background-color: #8bc34a !important;
                            }

                            .level_2 {
                                background-color: #fbc02d !important;
                                border: 2px solid #fbc02d !important;
                                color: #fbc02d !important;
                            }

                            .level_2 .gantt_task_progress {
                                background-color: #fbc02d !important;
                            }

                            .level_3 {
                                background-color: #ef5350 !important;
                                border: 2px solid #ef5350 !important;
                                color: #ef5350 !important;
                            }

                            .level_3 .gantt_task_progress {
                                background-color: #ef5350 !important;
                            }
                        </style>
                        ${this.handlerHeader(
                            '', "-", "-", "-", "-", "-", "-", "-"
                        )}
                    `,
                    footer:`${this.handlerFooter(
                        'Jajang',
                        'Maman'
                    )}`,
                    locale:"en",
                    skin:'terrace',
                    raw:true
                })
            } else if(format == 'excel') {
                gantt.exportToExcel({
                    name:"abmp_report.xlsx",
                });
            } else if(format == 'msproject') {
                gantt.exportToMSProject({
                    name:"abmp_report.xml",
                });
            }

            this.form = {
                timeframe: 'weekly',
                location: 'all',
                level: 'all',
                line: 'all',
                start_date: 'all',
                end_date: 'all',
                search_query: ''
            }

            gantt.config.start_date = ''
            gantt.config.end_date = ''

            gantt.clearAll()
            this.initData()

            
            

            // gantt.config.start_date = new Date(2020, 2, 5);
            // gantt.config.end_date = new Date(2020, 2, 9);


            // gantt.exportToPNG()
            // abmp_gantt.css

            

            // gantt.exportToPDF({
            //     name:"mygantt.pdf",
            //     header:"<h1>My company</h1>",
            //     footer:"<h4>Bottom line</h4>",
            //     locale:"en",
            //     skin:'terrace',
            //     raw:true
            // });

        },

        liveSearch: function () {

            if(this.form.location != 'all') {   
                this.setLineWithHangarId(this.form.location)
            } 
            
            if(this.form.location == 'all'){
                this.form.line = 'all'
                this.line = []
            }

            this.initData()
        },

        setLineWithHangarId: function(hangar_id) {
            this.line = []
            this.form.line = 'all'
            axios.get('/api/management/hangar/'+hangar_id)
            .then( res => {
                this.line = res.data.line
            })
        },
    }
}
</script>

<style scoped>
    ::v-deep label {
        font-size: 12px
    }

    ::v-deep .level_1 {
        background-color: #8bc34a !important;
        border: 2px solid #8bc34a !important;
        color: #ef5350 !important;
    }

    ::v-deep .level_1 .gantt_task_progress {
        background-color: #8bc34a !important;
    }

    ::v-deep .level_2 {
        background-color: #fbc02d !important;
        border: 2px solid #fbc02d !important;
        color: #fbc02d !important;
    }

    ::v-deep .level_2 .gantt_task_progress {
        background-color: #fbc02d !important;
    }

    ::v-deep .level_3 {
        background-color: #ef5350 !important;
        border: 2px solid #ef5350 !important;
        color: #ef5350 !important;

    }

    ::v-deep .level_3 .gantt_task_progress {
        background-color: #ef5350 !important;
    }

    ::v-deep .gantt_cell {
        font-size: 9px
    }

    ::v-deep .gantt_task_content { line-height: inherit; overflow: hidden; height: 100%; }

    ::v-deep .status_line {
        color: white !important;
        font-weight: bold !important;
        background-color: red !important;
        opacity: 1 !important;
        
    }


    @import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";
</style>