<style scoped>

    ::v-deep .resource_marker{
        text-align: center;
        cursor: pointer;
    }
    ::v-deep .resource_marker div{
        width: 28px;
        height: 28px;
        line-height: 29px;
        display: inline-block;
        border-radius: 15px;
        color: #FFF;
        margin: 3px;
        font-size: 9pt;
    }

    ::v-deep .resource_marker.shift_one div {
        background: #51c185;
    }

    ::v-deep .resource_marker.shift_two div{
        background: #ff8686;
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

    ::v-deep .action > i.success {
        color: white;
        background-color: #13CE66;
    }

    ::v-deep .action > i.danger {
        color: white;
        background-color: #ee2455;
    }

    ::v-deep .action > i.warning {
        color: white;
        background-color: #158df7;
    }

    ::v-deep .noaction {
        cursor: unset !important;
    }
    
</style>

<template>
  <div ref="gantt"></div>
</template>

<script>
import './datatable/gantt';
import 'dhtmlx-gantt/codebase/ext/dhtmlxgantt_marker';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import 'dhtmlx-gantt/codebase/skins/dhtmlxgantt_skyblue.css';
import './datatable/api';


export default {
    name: 'gantt',
    props: {
        tasks: {
            // type: Object,
            default () {
                return {
                    data: [],
                    links: []
                }
            }
        },

        columns: {
            data: []
        },

        pg: {
            data: []
        },

        daily: {
            data: []
        }
    },

    mounted: function () {
        this.initGantt();
        gantt.config.branch_loading = true;
        gantt.config.date_format = "%Y-%m-%d %H:%i:%s";
        gantt.config.autosize = "y";
        gantt.init(this.$refs.gantt)
        gantt.parse(this.$props.tasks)
    },

    methods: {
        initGantt: function () {
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
 
            var getPg = this.$props.pg;

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

            function convertDate(date) {
                var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                return [year, month, day].join('-');
            }

            var daily = this.$props.daily;

            var renderResourceLine = function (resource, timeline) {
                var tasks = gantt.getTaskByTime()
                var timetable = calculateResourceLoad(tasks, timeline.getScale());

                var row = document.createElement("div");
                for (var i = 0; i < timetable.length; i++) {

                    var day = timetable[i];
                    let plan_date = convertDate(day.start_date);


                    let temp_plan_date = new Date(plan_date);
                    let max_date = new Date(daily[daily.length-1]['plan_date']);
                    temp_plan_date.setHours(0,0,0,0)
                    max_date.setHours(0,0,0,0)

                    
                    if(temp_plan_date <= max_date) {

                        var css = "";
                        var sizes = timeline.getItemPosition(resource, day.start_date, day.end_date);
                        var el = document.createElement('div'); 
                        el.className = css;

                        el.style.cssText = [
                            'left:' + sizes.left + 'px',
                            'width:' + sizes.width + 'px',
                            'position:absolute',
                            'height:' + (gantt.config.row_height - 1) + 'px',
                            'line-height:' + sizes.height + 'px',
                            'top:' + sizes.top + 'px',
                        ].join(";");

                        var tr = document.createElement('tr');
                        tr.style.cssText = [
                            'width: 100%',
                        ];
                        for(let j = 0; j < 2; j++) {
                            let td = document.createElement('td');
                            let div_e = document.createElement('div');
                            let shift = "shift-1";
                            let index = `shift-1-${i}-${resource.key}`;
                            let type_edit = "";
                            let data_plan = "";
                            let status_edit = "";

                            if(j == 1) {
                                shift = "shift-2";
                                index = `shift-2-${i}-${resource.key}`;
                            }

                            td.style.cssText = [
                                'padding: 0px',
                                'border: none',
                                'padding-left: 7px',
                                'padding-top: 4px'
                            ].join(";");

                            let icon = "";
                            let type = "";
                            let func_name = "";

                            switch(resource.key) {
                                    case "menu-1": 
                                        func_name = "noAction";
                                        data_plan = daily.filter(d => d.plan_date === plan_date);
                                        if(
                                            ((data_plan[0].plan_data.job_first_shift_system ||
                                            data_plan[0].plan_data.job_first_shift_cabin ||
                                            data_plan[0].plan_data.job_first_shift_structure) && j == 0) ||
                                            ((data_plan[0].plan_data.job_second_shift_system ||
                                            data_plan[0].plan_data.job_second_shift_cabin ||
                                            data_plan[0].plan_data.job_second_shift_structure) && j == 1)
                                        ) {
                                            icon = "check_circle";
                                            type = "success noaction";
                                        }
                                        /*data_plan = daily.filter(d => d.plan_date === plan_date);
                                        if(data_plan.length > 0) {
                                            if(j == 0) {
                                                if(data_plan[0].plan_data.job_first_shift_system && data_plan[0].plan_data.job_first_shift_cabin && data_plan[0].plan_data.job_first_shift_structure) {
                                                    icon = "check_circle";
                                                    type = "success noaction"
                                                }else {
                                                    icon = "remove_circle";
                                                    type = "danger noaction"
                                                }
                                            }else {
                                                if(data_plan[0].plan_data.job_second_shift_system && data_plan[0].plan_data.job_second_shift_cabin && data_plan[0].plan_data.job_second_shift_structure) {
                                                    icon = "check_circle";
                                                    type = "success noaction"
                                                }else {
                                                    icon = "remove_circle";
                                                    type = "danger noaction"
                                                }
                                            }
                                        }
                                        */
                                    break;
                                    case "menu-2" :
                                        func_name = "noAction";
                                        data_plan = daily.filter(d => d.plan_date === plan_date);
                                        if(data_plan.length > 0) {
                                            if(j == 0) {
                                                if(data_plan[0].plan_data.manpower_first_shift_system && data_plan[0].plan_data.manpower_first_shift_cabin && data_plan[0].plan_data.manpower_first_shift_structure) {
                                                    icon = "check_circle";
                                                    type = "success noaction"
                                                }else {
                                                    icon = "remove_circle";
                                                    type = "danger noaction"
                                                }
                                            }else {
                                                if(data_plan[0].plan_data.manpower_second_shift_system && data_plan[0].plan_data.manpower_second_shift_cabin && data_plan[0].plan_data.manpower_second_shift_structure) {
                                                    icon = "check_circle";
                                                    type = "success noaction"
                                                }else {
                                                    icon = "remove_circle";
                                                    type = "danger noaction"
                                                }
                                            }
                                        }
                                    break;
                                    case "menu-3":
                                        /*icon = "dvr";
                                        type = "warning noaction";
                                        func_name = "noAction";*/
                                    break;
                                    case "menu-4":
                                        type_edit = "System";
                                        status_edit = "daily";
                                        func_name = "handlerOpenModalDailyMenu";
                                        data_plan = daily.filter(d => d.plan_date === plan_date);
                                        if(data_plan.length > 0) {
                                            if(j == 0) {
                                                if(data_plan[0].plan_data.job_first_shift_system) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }else {
                                                if(data_plan[0].plan_data.job_second_shift_system) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }
                                        }
                                    break;
                                    case "menu-5":
                                        type_edit = "Cabin";
                                        status_edit = "daily";
                                        func_name = "handlerOpenModalDailyMenu";
                                        data_plan = daily.filter(d => d.plan_date === plan_date);
                                        if(data_plan.length > 0) {
                                            if(j == 0) {
                                                if(data_plan[0].plan_data.job_first_shift_cabin) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }else {
                                                if(data_plan[0].plan_data.job_second_shift_cabin) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }
                                        }
                                    break;
                                    case "menu-6":
                                        type_edit = "Structure";
                                        status_edit = "daily";
                                        func_name = "handlerOpenModalDailyMenu";
                                        data_plan = daily.filter(d => d.plan_date === plan_date);
                                        if(data_plan.length > 0) {
                                            if(j == 0) {
                                                if(data_plan[0].plan_data.job_first_shift_structure) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }else {
                                                if(data_plan[0].plan_data.job_second_shift_structure) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }
                                        }
                                    break;
                                    case "menu-7":
                                        type_edit = "System";
                                        status_edit = "manpower";
                                        func_name = "handlerOpenModalDailyMenu";
                                        data_plan = daily.filter(d => d.plan_date === plan_date);
                                        if(data_plan.length > 0) {
                                            if(j == 0) {
                                                if(data_plan[0].plan_data.manpower_first_shift_system) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }else {
                                                if(data_plan[0].plan_data.manpower_second_shift_system) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }
                                        }
                                    break;
                                    case "menu-8":
                                        type_edit = "Cabin";
                                        status_edit = "manpower";
                                        func_name = "handlerOpenModalDailyMenu";
                                        data_plan = daily.filter(d => d.plan_date === plan_date);
                                        if(data_plan.length > 0) {
                                            if(j == 0) {
                                                if(data_plan[0].plan_data.manpower_first_shift_cabin) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }else {
                                                if(data_plan[0].plan_data.manpower_second_shift_cabin) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }
                                        }
                                    break;
                                    case "menu-9":
                                        type_edit = "Structure";
                                        status_edit = "manpower";
                                        func_name = "handlerOpenModalDailyMenu";
                                        data_plan = daily.filter(d => d.plan_date === plan_date);
                                        if(data_plan.length > 0) {
                                            if(j == 0) {
                                                if(data_plan[0].plan_data.manpower_first_shift_structure) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }else {
                                                if(data_plan[0].plan_data.manpower_second_shift_structure) {
                                                    icon = "check_circle";
                                                    type = "success"
                                                }else {
                                                    icon = "add_circle";
                                                    type = "danger"
                                                }
                                            }
                                        }
                                    break;
                                    case "menu-10":
                                        type_edit = "System";
                                        status_edit = "handover";
                                        func_name = "handlerOpenDailyReport";
                                        icon = "dvr";
                                        type = "warning";
                                    break;
                                    case "menu-11":
                                        type_edit = "Cabin";
                                        status_edit = "handover";
                                        func_name = "handlerOpenDailyReport";
                                        icon = "dvr";
                                        type = "warning";
                                    break;
                                    case "menu-12":
                                        type_edit = "Structure";
                                        status_edit = "handover";
                                        func_name = "handlerOpenDailyReport";
                                        icon = "dvr";
                                        type = "warning";
                                    break;
                                    default:
                                        // no action;
                                    break;
                                }


                            div_e.className = "action";
                            if(type && icon) {
                                div_e.innerHTML = `<i onclick="${func_name}('${getPg}', '${convertDate(day.start_date)}', '${shift}', '${index}', '${type_edit}', '${status_edit}')" class='material-icons ${type}'>${icon}</i>`;
                            }
                            td.append(div_e);
                            tr.append(td);
                        }
                        
                        el.append(tr);
                        row.appendChild(el);
                    }

                    
                }
                return row;
            };

            var resourceLayers = [
                renderResourceLine,
                "taskBg"
            ];
            
            gantt.config.scale_unit = "year";
            gantt.config.date_scale = "%Y";
            gantt.config.min_column_width = 75;
            // gantt.config.scale_height = 30;
            gantt.config.drag_move = false;
            gantt.config.drag_resize = false;
            gantt.config.drag_links = false;
            gantt.config.drag_progress = false;
            gantt.config.drag_project = false;
            gantt.config.auto_scheduling = false;
            gantt.config.open_tree_initially = true;

            gantt.templates.task_text = function(start, end, task){
                return task.text;
            };
            gantt.config.subscales = [{
                    unit: "month",
                    step: 1,
                    template: monthScaleTemplate
                },
                {
                    unit: "day",
                    step: 1,
                    template: weekScaleTemplate
                }
            ];

            gantt.config.sort = true;
            gantt.templates.task_class = function (start, end, task) {
                switch (task.level) {
                    case "1":
                        return "level_1";
                        break;
                    case "2":
                        return "level_2";
                        break;
                    case "3":
                        return "level_3";
                        break;
                }
            };

            gantt.config.columns = this.$props.columns

            var resourceGridConfig = {
                columns: [
                    {
                        name: "name", label: "Menu", tree:true, template: function (resource) {
                            return resource.label;
                        }
                    }
                ]
            };

            gantt.config.layout = {
                css: "gantt_container",
                rows: [{
                        cols: [{
                                view: "grid",
                                group: "grids",
								scrollY: "scrollVer",
                                scrollX:"scrollHor",
                            },
                            {
                                resizer: true,
                                width: 1
                            },
                            {
                                view: "timeline",
                                scrollX: "scrollHor",
                                scrollY: "scrollVer"
                            },
                            {
                                view: "scrollbar",
                                id: "scrollVer",
                                group: "vertical"
                            }
                            
                        ],
                        gravity: 0
                    },
                    {
                        resizer: true,
                        width: 1,
                    },
                    {
                        view: "scrollbar",
                        id: "scrollHor"
                    }
                ]
            };
            
            var resourcesStore = gantt.createDatastore({
                name: "resources",
                type: "treeDatastore",
                //initItem: function (item) {
                //     item.id = item.key || gantt.uid();
                //     return item;
                // }

                initItem: function (item) {
                    item.parent = item.parent || gantt.config.root_id;
                    item[gantt.config.resource_property] = item.parent;
                    item.open = false;
                    return item;
                }
            });

            var tasksStore = gantt.getDatastore("task");
            tasksStore.attachEvent("onStoreUpdated", function (id, item, mode) {
                resourcesStore.refresh();
            });


            resourcesStore.parse([
                {id: 1, key: 'menu-1', label: "Daily Menu", parent:null},
                // {id: 2, key: 'menu-2', label: "Manpower Assignment", parent:null},
                {id: 3, key: 'menu-3', label: "Hand Over", parent:null},
                {id: 4, key: 'menu-4', label: "System", parent:1},
                {id: 5, key: 'menu-5', label: "Cabin", parent:1},
                {id: 6, key: 'menu-6', label: "Structure", parent:1},
                // {id: 7, key: 'menu-7', label: "System", parent:2},
                // {id: 8, key: 'menu-8', label: "Cabin", parent:2},
                // {id: 9, key: 'menu-9', label: "Structure", parent:2},
                {id: 10, key: 'menu-10', label: "System", parent:3},
                {id: 11, key: 'menu-11', label: "Cabin", parent:3},
                {id: 12, key: 'menu-12', label: "Structure", parent:3},

            ]);

        }
    }
}
</script>


<style>
    @import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";
</style>