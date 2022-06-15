<template>

    <div style="min-height: 100vh">
        <div class="is-row">
            <div class="is-col">
                <table class="is-bordered" v-if="dailyReport">
                    <tr>
                        <td>Date : {{ dailyReport.updated_at }}</td>
                        <td>Shift : {{ dailyReport.shift }}</td>
                        <td>A/C Reg : {{ dailyReport.ac_reg }}</td>
                        <td>Maintenance Type : {{ dailyReport.main_type }}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="is-row">
            <div class="is-col">
                <div class="card">
                    <div class="card-header no border">
                        <div class="title-area">
                            <!--button class="button is-success" v-if="founded && loading.isLoading == false" v-on:click="handlerModalPrintReport()">
                                <i class='material-icons'>
                                    insert_drive_file
                                </i>
                                PDF
                            </button-->
                            <span class="action-report">
                                <i class="material-icons primary add-row" tabindex="0" style="margin-left:20px;">
                                    event_note
                                </i> Today's menu
                                <i class="material-icons danger add-row" tabindex="0" style="margin-left:20px;">
                                    event_note
                                </i> Carry-over's menu
                                <i class="material-icons grey add-row" tabindex="0" style="margin-left:20px;">
                                    fact_check
                                </i> Tracking status
                                <i class="material-icons barcode add-row" tabindex="0" style="margin-left:20px;">
                                    qr_code
                                </i> RTMS barcode
                                <i class="material-icons additional add-row" tabindex="0" style="margin-left:20px;">
                                    event_busy
                                </i> Manually added
                            </span>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="is-table-container">
                            <table class="is-bordered is-striped" style="font-size:11px;">
                                <thead>
                                    <tr>
                                        <th rowspan="2" style="text-align: center" width="5%">
                                        </th>
                                        <th style="text-align: center;" rowspan="2" width="8%">Order No, Type & Tracking Status</th>
                                        <th style="text-align: center;" rowspan="2" width="20%">Description</th>
                                        <!--th style="text-align: center;" rowspan="2" width="4%">Type</th-->
                                        <th style="text-align: center" rowspan="2" width="4%">Skill</th>
                                        <!--th style="text-align: center" rowspan="2" width="14%">Manpower Plan</th-->
                                        <!--th style="text-align: center;" rowspan="2" width="4%">Tools</th-->
                                        <th style="text-align: center" rowspan="2" width="4%">Total Plan Mhrs</th>
                                        <th rowspan="2" style="text-align: center" width="5%">Daily Actual Mhrs</th>
                                        <th style="text-align: center" rowspan="2" width="14%">Manpower Act</th>
                                        <!--th rowspan="2" style="text-align: center" width="5%">Barcode Status</th-->
                                        <th style="text-align: center;" colspan="3" width="10%">Actual Status</th>
                                        <!--th style="text-align: center" rowspan="2" width="8%">Mhrs Status</th-->
                                        <th style="text-align: center" rowspan="2" width="16%">Remarks</th>
                                    </tr>
                                    <tr>
                                        <th style="text-align: center;">O</th>
                                        <th style="text-align: center;">P</th>
                                        <th style="text-align: center;">C</th>
                                    </tr>
                                </thead>
                                <tbody v-if="dailyReportDetail">
                                    <!-- {{ JSON.stringify(dailyReportDetail)}} -->
                                    <tr v-for="(row, index) in dailyReportDetail" :key="index" :style="row.toggle === '1' ? '' : 'color:#c9c6c6;'">
                                        <td style="text-align: center;">
                                            <div class="action-report tooltip-x">
                                                <span  v-if="row.is_daily === 'Y'" class="tooltiptext-x">Today's menu</span>
                                                <span  v-else-if="row.is_daily === 'C'" class="tooltiptext-x">Carry-over's menu</span>
                                                <span v-else-if="row.is_daily === 'B'" class="tooltiptext-x">RTMS barcode</span>
                                                <span v-else class="tooltiptext-x">Manually added</span>
                                                <i v-if="row.is_daily === 'Y'" class="material-icons primary add-row" tabindex="0">
                                                    event_note
                                                </i>
                                                <i v-else-if="row.is_daily === 'C'" class="material-icons danger add-row" tabindex="0">
                                                    event_note
                                                </i>
                                                <i v-else-if="row.is_daily === 'T'" class="material-icons grey add-row" tabindex="0">
                                                    fact_check
                                                </i>
                                                <i v-else-if="row.is_daily === 'B'" class="material-icons barcode add-row" tabindex="0">
                                                    qr_code
                                                </i>
                                                <i v-else-if="row.is_daily === 'A'" class="material-icons additional add-row" tabindex="0">
                                                    event_busy
                                                </i>
                                            </div><br>
                                            <input 
                                                type="checkbox" 
                                                style="margin-top:15px;"
                                                class="switch unset" 
                                                :value="row.toggle"
                                                :checked="row.toggle" disabled
                                            >
                                        </td>
                                        <td>
                                            {{row.aufnr}} <br>
                                            <div>
                                                <div class="skill-resume" :style="row.toggle !== '1' ? 'color:#c9c6c6;margin-top:10px !important;' : 'color:black !important;margin-top:10px !important;'">
                                                    {{row.order_type === 'GA01' ? 'Jobcard' : row.order_type === 'GA02' ? 'MDR' : ''}}
                                                </div>
                                                <div class="skill-resume" :style="(
                                                    row.toggle !== '1' ? 'color:#c9c6c6 !important;' :
                                                    row.order_status === 'DONE' ? 'color:#13ce66 !important;' : 
                                                    row.order_status === 'PROGRESS' ? 'color:#ffc107 !important;' :
                                                    row.order_status === 'OPEN' ? 'color:#026396 !important;' :
                                                    'color:#dc3545 !important;'
                                                )">
                                                    {{row.order_status}}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div style="padding: 5px 0px 5px 0px;">
                                                {{ row.description }}
                                                <!--button v-on:click="handlerModalOrderDesc(row.description, row.aufnr, row.desc, row.is_daily, index)" style="min-width:120px;height: 28px;line-height:28px;color:#465368;width:100%;background-color: #ffffff;border: 1px solid #7ecc80;" class="remarksS remarksS-803356826"  remarkss=""  tabindex="0">
                                                    Input Details
                                                </button-->
                                            </div>
                                        </td>
                                        <!--td>{{row.order_type}}</td-->
                                        <td>
                                            <div style="margin-left: 6px; padding: 5px 0px 5px 0px;">
                                                <div v-if="row.skill_set" v-html="row.toggle !== '1' ? '' : handlerSkillColorResume(row.skill_set)"></div>
                                            </div>
                                        </td>
                                        <!--td>
                                            <div style="padding: 5px 0px 5px 0px; white-space:nowrap;" v-if="row.power.length>0">
                                                <div v-for="(power, index) in row.power" :key="index">
                                                    <div style="font-size: 9pt; text-align: center;" :class="'card card-power-selected ' + handlerColorManpower(power.NOPEG.SKILLCATEG, row.toggle)">
                                                        {{ power.NOPEG.NAMA }} ({{ power.NOPEG.SKILLCATEG }})
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </td-->
                                        <!--td style="text-align: center;">
                                            <div class="action-2">
                                                <i v-on:click="handlerModalToolsReport(row.aufnr)" class="material-icons primary add-row" tabindex="0">widgets</i>
                                            </div>
                                        </td-->
                                        <td style="text-align: center;">{{row.plan_mhrs}} H</td>
                                        <td style="text-align: center;">
                                            <div style="padding: 5px 0px 5px 0px;" v-if="row.act_manpower && row.act_manpower.length>3">
                                                {{ ((JSON.parse(row.act_manpower).reduce(function (total, currentValue) {
                                                        return total + (
                                                            currentValue.OPS.length > 0 ?
                                                            currentValue.OPS.reduce(function (subtotal, subValue) { 
                                                                return subtotal + subValue.ACTMH
                                                            }, 0) :
                                                            0
                                                        );
                                                    }, 0)
                                                    )/60).toFixed(2)
                                                }} H
                                            </div>
                                        </td>
                                        <td>
                                            <!-- @ms -->
                                            <div v-if="row.act_manpower && row.act_manpower.length>3" style="padding: 5px 0px 5px 0px; white-space:nowrap;">
                                                <div v-for="(power, indexactmp) in JSON.parse(row.act_manpower)" :key="indexactmp">
                                                    <table style="margin-bottom:10px; width:100%;">
                                                        <tr>
                                                            <td colspan="3" style="padding:0px;">
                                                                <div style="font-size: 9pt; text-align: center;" :class="'card card-power-selected ' + handlerColorManpower(power.NOPEG.SKILLCATEG, row.toggle)">
                                                                    {{ power.NOPEG.NAMA }} ({{ power.NOPEG.SKILLCATEG }})
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr v-for="(ops, indexops) in power.OPS" :key="indexops" :class="ops.STATUS === 'START' ? 'blink_me' : ''">
                                                            <td :style="ops.STATUS === 'START' ? 'background-color:red;color:white;' : ''"> 
                                                                {{ ops.OPS }} 
                                                            </td>
                                                            <td :style="ops.STATUS === 'START' ? 'background-color:red;color:white;' : ''"> 
                                                                <span v-if="ops.STATUS !== 'START'">
                                                                    {{ (ops.ACTMH/60).toFixed(2) }} H
                                                                </span>
                                                            </td>
                                                            <td :style="ops.STATUS === 'START' ? 'background-color:red;color:white;' : ''">
                                                                {{ ops.STATUS }}
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </td>
                                        <!--td style="text-align: center;">
                                            <div v-if="row.act_manpower.length>0">
                                                <div style="padding: 3px 0px 3px 0px;" v-for="(power, indexactmp) in row.act_manpower" :key="indexactmp">
                                                    <span :style="(row.toggle !== '1' ? 'background-color:#c9c6c6;' : 'background-color: #13CE66;') + ' font-size: 9pt; width: 72px;'" v-if="power.BARCODE_STATUS === 'START'" class="label is-success">RUNNING</span>
                                                    <span :style="(row.toggle !== '1' ? 'background-color:#c9c6c6;' : 'background-color: #6c757d; ') + ' font-size: 9pt; width: 72px;'" v-else-if="power.BARCODE_STATUS !== null && power.BARCODE_STATUS !== 'START'" class="label is-success">STOP</span>
                                                </div>
                                            </div>
                                        </td-->
                                        <td>
                                            <input v-if="row.toggle == '1'" class="radio-status" value="O" :checked="row.act_status === 'O'" type="radio" disabled>
                                        </td>
                                        <td>
                                            <input v-if="row.toggle == '1'" class="radio-status" value="P" :checked="row.act_status === 'P'" type="radio" disabled>
                                        </td>
                                        <td>
                                            <input v-if="row.toggle == '1'" class="radio-status" value="C" :checked="row.act_status === 'C'" type="radio" disabled>
                                        </td>
                                        <!--td>
                                            <div v-html="mhrsstatus(row.act_manpower,row.plan_mhrs)" style="padding: 5px 0px 5px 0px;">
                                            </div>

                                        </td-->
                                        <td>
                                            <!--div style="padding: 5px 0px 5px 0px;">
                                                <button v-on:click="handlerModalOrderRemarks(row.remarks, row.aufnr, row.is_daily, index)" style="min-width:120px;height: 28px;line-height:28px;color:#465368;width:100%;background-color: #ffffff;border: 1px solid #7ecc80;" class="remarksS remarksS-803356826"  remarkss=""  tabindex="0">
                                                    Input Details
                                                </button>
                                            </div-->
                                            <textarea :value="row.remarks" readonly></textarea>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    name:"detail-hand-over",
    props: {
        data: {
            dailyReport: {},
            dailyReportDetail:[]        
        }
    },

    data:() => ({
        dailyReport: null,
        dailyReportDetail:null
    }),


    watch: { 
      	data: function(newVal, oldVal) { 
            this.dailyReport = _lowerObject(newVal.dailyReport);  
            this.dailyReportDetail = _lowerObject(newVal.dailyReportDetail, true);
            _waitingIframe("waiting-iframe", false);
        }
      },

    mounted() {
        this.dailyReport = _lowerObject(this.$props.data.dailyReport);
        this.dailyReportDetail = _lowerObject(this.$props.data.dailyReportDetail, true);
        _waitingIframe("waiting-iframe", false);
    },

    methods:{
        handlerSkillColorResume: function(data_skill){
            let result = "";

            if(data_skill !== null) {
                let fix_skill = data_skill.split(' ').join('');

                let arr_skill = fix_skill.split(",");

                for(let i = 0; i < arr_skill.length; i++) {
                    let temp_skill = "";
                    switch(arr_skill[i]) {
                        case "AP":
                            temp_skill = `<div class='skill-resume skill-a1-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "A1":
                            temp_skill = `<div class='skill-resume skill-a1-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "A2":
                            temp_skill = `<div class='skill-resume skill-a2-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "EA":
                            temp_skill = `<div class='skill-resume skill-e1-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "E1":
                            temp_skill = `<div class='skill-resume skill-e1-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "E2":
                            temp_skill = `<div class='skill-resume skill-e2-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "STR":
                            temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "S":
                            temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "S1":
                            temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "S2":
                            temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "CBN":
                            temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "C":
                            temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "C1":
                            temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "C2":
                            temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "IS":
                            temp_skill = `<div class='skill-resume skill-is-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "Q":
                            temp_skill = `<div class='skill-resume skill-q-resume'>${arr_skill[i]}</div>`;
                            break;
                        default:
                            temp_skill = `<div class='skill-resume skill-default-resume'>${arr_skill[i]}</div>`;
                            break;
                    }

                    result +=  temp_skill;
                }

            }

            return result;

        },

        handlerColorManpower: function(skill, disabled) {
            let result = "";
            if (disabled !== '1') {
                result = "skill-disabled"
                return result;
            }
            switch(skill) {
                case "A1":
                    result = "skill-a1-resume";
                    break;
                case "A2":
                    result = "skill-a2-resume";
                    break;
                case "E1":
                    result = "skill-e1-resume";
                    break;
                case "E2":
                    result = "skill-e2-resume";
                    break;
                case "S":
                    result = "skill-s-resume";
                    break;
                case "C":
                    result = "skill-c-resume";
                    break;
                case "IS":
                    result = "skill-is-resume";
                    break;
                default:
                    result = "skill-default-resume";
                    break;
            }

            return result;
        },

    }


}
</script>

<style>

</style>