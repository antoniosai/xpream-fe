<style scoped> 
::v-deep  .vgt-left-align {
    white-space: nowrap !important;
}

::v-deep .table.vgt-table{
    font-size: 9px !important; 
    border-collapse: collapse !important;
    background-color: #fff !important;
    width: 100% !important;
    max-width: 100% !important;
    table-layout: auto !important;
    border: 1px solid #dcdfe6 !important;
}

::v-deep .vgt-table.bordered td, .vgt-table.bordered th {
    border: 1px solid #dcdfe6  !important;
    height: 20px  !important;
    font-size: 9pt  !important;
}

::v-deep .vgt-wrap__footer {
    font-size: 9pt !important;
    /* color: #606266; */
    padding: 0.5em !important;
    height: 35px !important;
    border: 1px solid #dcdfe6 !important;
    background: #ffffff !important;
}


::v-deep .vgt-wrap__footer .footer__row-count__label {
    font-size: 9pt !important;
    color: #909399 !important;
}

::v-deep .vgt-wrap__footer .footer__navigation__page-btn.disabled, .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {
    opacity: .5 !important;
    cursor: not-allowed !important;
    box-shadow: 0 0 black !important;
    font-size: 9pt !important;
}

::v-deep .vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {
    display: inline-block !important;
    color: #909399 !important;
    margin: 0 16px !important;
    font-size: 9pt !important;
}

::v-deep .vgt-wrap__footer .footer__navigation__page-btn {
    text-decoration: none !important;
    color: #606266 !important;
    font-weight: 700 !important;
    white-space: nowrap !important;
    font-size: 9pt !important;
}

::v-deep .vgt-global-search__input .input__icon .magnifying-glass {
    margin-top: 8px !important;
    margin-left: 10px !important;
    display: block !important;
    width: 12px !important;
    height: 12px !important;
    border: 2px solid #d6dae2 !important;
    position: relative !important;
    border-radius: 50% !important;
}

::v-deep .vgt-input, .vgt-select{
    font-size: 9pt !important;
}

::v-deep .footer__row-count__label {
    margin-top: -7px !important;
}

::v-deep .footer__navigation{
    margin-top: -2px !important;
}

::v-deep .vgt-wrap__footer .footer__row-count__select {
    margin-top: -5px !important;
    width: 50px !important;
    padding: 0px 15px 0px 5px;
    border: 0px  !important;
    border-radius: 0px !important;
    color: #606266 !important;
    font-weight: 700 !important;
    font-size: 9pt !important;
    margin-left: 0px !important;
    height: 32px !important;
    line-height: 32px !important;
}

::v-deep .vgt-wrap__footer .footer__navigation__page-info__current-entry {
     width: 30px !important;
    text-align: center !important;
    display: inline-block !important;
    margin: 0 10px !important;
    font-weight: 700 !important;
    height: 25px !important;
}

::v-deep .vgt-global-search {
    background: #ffffff !important;
    border: 1px solid #dcdfe6  !important;
}

::v-deep .vgt-table thead th {
    background: #ffffff !important;
}

::v-deep .toolbar-default {
    margin-bottom: 0px !important;
}

::v-deep .is-data-label {
    display: inline-block;
    padding: 10px;
    height: 20px;
    width: 60px;
    color: white;
    font-size: 8pt !important;
    text-align: center;
}

::v-deep .is-data-success {
    background: green;
}

::v-deep .is-data-warning {
    background: #FFC107;
}

::v-deep .is-data-danger {
    background: red;
}

::v-deep input[type=checkbox]:hover {
    cursor: pointer !important;
}


::v-deep table td .is-label.is-focus, table th .is-label.is-focus {
    background: rgba(21,141,247,.07); 
    color: #158df7;
}


::v-deep table td .is-label.is-default, table th .is-label.is-default {
    background: #f3f3f3; 
    color: rgba(17,17,19,.85);
}

::v-deep input[type=file] {
    line-height: 0px !important;
}

::v-deep .notif {
    padding: 4px !important;
    border-radius: 5px !important;
    font-size: 12px !important;
    border: 1px solid #eaeaea !important;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07) !important;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07) !important;
    color: white !important;
    cursor: unset !important;
    font-weight: bold;
}

::v-deep .success-default {
    background-color: #0065FF !important;
}

::v-deep .danger-default {
    background-color: red !important;
}

::v-deep table td .is-label {
    padding: 2px 6px !important;
    /* font-size: 8pt !important */
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

::v-deep .tooltip-x:hover .tooltiptext-x {
    visibility: visible !important;
}


</style>

<template>
    <div>
        <div class="card-header">
            <div class="title-area">
                <h3 class="title">
                    Feedback
                    <span class="all">{{datatable.serverParams.filter.status}}</span>
                </h3>
            </div>

            <div class="option-box">
                <div class="option-item">
                    <span style="white-space: nowrap">Status</span>
                    <select v-on:change="handlerFilter()" v-model="datatable.serverParams.filter.status">
                        <option value="" selected>All Status</option>
                        <option value="Open">Open</option>
                        <option value="Progress">Progress</option>
                        <option value="Close" >Close</option>
                    </select>
                </div>
                <div class="option-item">
                    <span style="white-space: nowrap">Approval</span>
                    <select v-on:change="handlerFilter()"  v-model="datatable.serverParams.filter.approval">
                        <option  value="all" selected>all</option>
                        <option  value="" selected>awaiting verification</option>
                        <option  value="resolve" >resolve</option>
                        <option  value="reject" >reject</option>
                    </select>
                </div>
                <div class="option-item">
                    <span  style="white-space: nowrap">Priority</span>
                    <select v-on:change="handlerFilter()" v-model="datatable.serverParams.filter.priority">
                        <option  value="" >All Priority</option>
                        <option  value="1" >Low</option>
                        <option  value="2">Medium</option>
                        <option  value="3">Urgent</option>
                    </select>
                </div>               
            </div>
        </div>
        <div class="card-content">
             <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
                <div>
                    <loading style="margin-top: 50px;"
                        :active.sync="loading.isLoading" 
                        :can-cancel="false"
                        :is-full-page="false"
                        :color="loading.color"
                        :loader="loading.loaderType">
                    </loading>
                </div>
                <template>
                    <div class="feedback">
                        <vue-good-table
                            ref="tableFeedback"
                            :columns="datatable.fields"
                            :rows="datatable.rows"  
                            styleClass="vgt-table bordered striped"
                            mode="remote"
                            max-height="510px"
                            :search-options="{
                                enabled: true,
                                trigger: 'enter',
                                skipDiacritics: true,
                                placeholder: 'Fill and enter to search',
                                
                            }"
                            :sort-options="{
                                enabled: true,
                                 initialSortBy: {
                                    field: 'TICKET_NUMBER',
                                    type: 'desc',
                                }
                            }"
                            :select-options="{ 
                                enabled: true,
                                selectOnCheckboxOnly: true
                            }"
                            @on-selected-rows-change="selectionChanged"
                            @on-search="onColumnSearch"
                            @on-page-change="onPageChange"
                            @on-sort-change="onSortChange"
                            @on-column-filter="onColumnFilter"
                            @on-per-page-change="onPerPageChange"
                            :totalRows="datatable.totalRows"
                            :pagination-options="{
                                enabled: true,
                                mode: 'pages',
                                perPage: datatable.serverParams.perPage,
                                position: 'bottom',
                                perPageDropdown:  datatable.perPageDropDown,
                                dropdownAllowAll: true,
                                setCurrentPage: datatable.serverParams.page,
                                nextLabel: 'Next',
                                prevLabel: 'Prev',
                                rowsPerPageLabel: 'Rows per page',
                                ofLabel: 'of',
                                pageLabel: 'page', // for 'pages' mode
                                allLabel: 'All',
                            }"
                        >
                        <div slot="table-actions">
                            <div class="toolbar toolbar-default">
                                <div class="toolbar-left">
                                    <div class="toolbar-item toolbar-dropdown" style="position: relative">
                                        <select v-model="form.approval" name="update_approval" id="sel-approval">
                                            <option value="">Update Approval</option>
                                            <option value="resolve">resolve</option>
                                            <option value="reject">reject</option>
                                        </select>
                                        <button v-on:click="handleUpdateApproval()" class="button" type="button" id="update_approval" disabled="disabled">Update</button>
                                    </div>
                                    <div class="toolbar-item toolbar-dropdown">
                                        <select v-model="form.status" id="sel-status"  name="update_status">
                                            <option value="">Update Status</option>
                                            <option value="1">Open</option>
                                            <option value="2">Progress</option>
                                            <option value="3">Close</option>
                                        </select>
                                        <button v-on:click="handleUpdateStatus()" class="button" type="button" id="update_status" disabled="">Update</button>
                                    </div>
                                    <div class="toolbar-item">
                                        <div v-on:click="handlerExportFeedback()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#28a745; margin-right: -2px; margin-left: -7px; padding-top: 6px;" tabindex="0">
                                            <span class="tooltiptext-x">Export Excel</span>
                                            <i class="material-icons warning sync_order" >file_download</i>
                                        </div>
                                    </div>
                                    <div class="toolbar-item">
                                        <div v-on:click="syncDataFeedback()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#0065FF; margin-right: 3px; margin-left: -5px; padding-top: 6px;" tabindex="0">
                                            <span class="tooltiptext-x">Refresh</span>
                                            <i class="material-icons warning sync_order" >sync</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <template slot="table-row" slot-scope="props">
                            <span v-if="props.column.field == 'PRIORITY'">
                                <select v-model="datatable.rows[props.index].PRIORITY" :id="'priority-' +props.index" v-on:change="handleUpdateSingleData('PRIORITY', props.formattedRow['ID'], 'priority-' +props.index)">
                                    <option value=1>low</option>
                                    <option value=2>medium</option>
                                    <option value=3>high</option>
                                </select>
                            </span>
                            <span v-else-if="props.column.field == 'STATUSNAME'">
                                <div style="width: 100%; text-align: center;">
                                    <!--select v-model="datatable.rows[props.index].ID_STATUS" :id="'status-' +props.index" v-on:change="handleUpdateSingleData('STATUS', props.formattedRow['ID_STATUS'], 'status-' +props.index)">
                                        <option value="">Waiting for Verification</option>
                                        <option value=1>Open</option>
                                        <option value=2>Progress</option>
                                        <option value=3>Close</option>
                                    </select-->


                                    <span v-if="props.formattedRow['STATUSNAME'] == 'OPEN'" class="is-label is-focus">{{props.formattedRow[props.column.field]}}</span>
                                    <span  v-else-if="props.formattedRow['STATUSNAME'] == 'PROGRESS'" class="is-label is-warning">{{props.formattedRow[props.column.field]}}</span>
                                    <span v-else-if="props.formattedRow['STATUSNAME'] == 'CLOSE'" class="is-label is-default">{{props.formattedRow[props.column.field]}}</span>
                                    <span v-else>{{props.formattedRow[props.column.field]}}</span>     
                                </div>
                            </span>
                            <span v-else-if="props.column.field == 'FEEDBACK'">
                                <button v-on:click="openmodal_discuss(props.formattedRow['REF_NUMBER'],props.index)" style="min-width:120px;height: 28px;line-height:28px;color:#465368;width:100%;background-color: #ffffff;border: 1px solid #7ecc80;" class="remarksS remarksS-803356826"  remarkss=""  tabindex="0">
                                    Click for details
                                </button>
                            </span>
                            <span v-else-if="props.column.field == 'APPROVAL'">
                                <!-- <div style="width: 100%; text-align: center;">
                                    <span v-if="props.formattedRow['APPROVAL'] === 'APPROVED'" class="is-label is-focus">{{props.formattedRow[props.column.field]}}</span>
                                    <span  v-if="props.formattedRow['APPROVAL'] === 'REFUSED'" class="is-label is-warning">{{props.formattedRow[props.column.field]}}</span>
                                </div> -->
                                <div class="action">
                                    <i v-if="props.formattedRow['APPROVAL'] === 'resolve'" class="material-icons notif success-default">check</i>
                                    <i v-else-if="props.formattedRow['APPROVAL'] === 'reject'" class="material-icons notif danger-default">clear</i>  
                                </div>
                            </span>
                            <span v-else>
                                <div class="flex-middle-default">
                                    {{props.formattedRow[props.column.field]}}
                                </div>
                            </span>
                        </template>
                        </vue-good-table>
                    </div>
                </template>
                
            </div>

            <div class="modal-box" style="z-index: 99999;" id="modal-attachment" data-keyboard="false" data-backdrop="static">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-attachment')"></span>
                    <div class="modal-header">
                            <h2 class="title">Attachment</h2>
                            <p>maximum 5MB</p>
                    </div>
                    <div class="modal-body" style="position: relative; font-size:12px;">
                        <div class="is-row">
                            <div class="is-col is-80">
                            <file-pond
                                name="test"
                                ref="pond"
                                class-name="my-pond"
                                label-idle="Add attachment (drag-drop / browse / paste) here"
                                allow-multiple="false"

                                v-bind:files="myFiles"
                                v-on:updatefiles="checkfile"
                                v-on:init="handleFilePondInit"/> 
                            </div>  
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button v-if="myFiles.length" type="button" v-on:click="submitattachment(data_feedbacks[discuss.ticket].REF_NUMBER)" class="button is-primary" id="btn-save-feedback" style="height:30px;"><i class='material-icons'>send</i></button>

                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-attachment')">Cancel</button>
                    </div>
                </div>
            </div>

            <!-- Feedback Modal-->
            <div class="modal-box" id="modal-discuss" data-keyboard="false" data-backdrop="static">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-discuss')"></span>
                    <span v-if="data_feedbacks.length && discuss.ticket!==null">
                        <div class="modal-header">
                            <h2 class="title">{{data_feedbacks[discuss.ticket].TICKET_NUMBER}}</h2>
                        </div>
                        <div class="modal-body" style="position: relative; font-size:12px;">
                            <div class="is-row" style="height:15vh; overflow-y:auto;">
                                <div class="is-col is-80" style="border:1px solid #f2fece; border-radius:3px; padding:10px; background-color: #f2fece;">
                                    {{data_feedbacks[discuss.ticket].FEEDBACK}}
                                </div>
                            </div>
                            <div class="is-row" style="height:10vh; overflow-y:auto;">
                                <div class="is-col is-80" style="border:1px solid #f2fece; border-radius:3px; padding:10px; background-color: #f2fece;">
                                    ({{data_feedbacks[discuss.ticket].REF_ORDER}}) {{data_feedbacks[discuss.ticket].DESCRIPTION}}
                                </div>
                            </div>                            
                            <div class="is-row" style="height:50vh; overflow-y:auto;  display: flex; flex-direction: column-reverse;" id="chatelement">
                                <div class="is-col is-80">
                                    <div class="is-row" v-for="(mychat, index) in discuss.messageList" :key="index">
                                        <div :class="mychat.author=='me' ? 'is-col is-30':'is-col is-70'" :style="mychat.author=='me' ? '':'border:1px solid #e3e3e3; border-radius:3px; padding:10px; background-color: #e3e3e3;'">
                                            <span v-if="mychat.author=='me'"></span>
                                            <span v-else>
                                                <span v-if="mychat.type=='commentCard'">{{mychat.data.text}}</span>
                                                <span v-else-if="mychat.type=='addAttachmentToCard'">
                                                    <a :href="mychat.data.attachment.url" target="_blank">
                                                        <span v-if="mychat.data.attachment.previewUrl || false"><img :src="mychat.data.attachment.previewUrl"></span>
                                                        <span v-else><i class='material-icons'>file_copy</i> file_{{mychat.data.attachment.id}}</span>
                                                    </a>
                                                </span>
                                            </span>
                                        </div>
                                        <div :class="mychat.author=='me' ? 'is-col is-70':'is-col is-30'" :style="mychat.author=='me' ? 'border:1px solid #e0eeff; border-radius:3px; padding:10px; background-color: #e0eeff;':''">
                                            <span v-if="mychat.author!=='me'"></span>
                                            <span v-else>
                                                <span v-if="mychat.type=='commentCard'">{{mychat.data.text}}</span>
                                                <span v-else-if="mychat.type=='addAttachmentToCard'">
                                                    <a :href="mychat.data.attachment.url" target="_blank">
                                                        <span v-if="mychat.data.attachment.previewUrl || false"><img :src="mychat.data.attachment.previewUrl"></span>
                                                        <span v-else><i class='material-icons'>file_copy</i> file_{{mychat.data.attachment.id}}</span>
                                                    </a>
                                                </span>
                                            </span>
                                        </div>                                       
                                    </div>
                                </div>
                            </div>
                            <hr>                        
                            <div class="is-row">
                                <div class="is-col is-70">
                                    <input placeholder="type a message here ..." @keyup.enter="submitcomment(data_feedbacks[discuss.ticket].REF_NUMBER, discuss.ticket)" type="text" v-model="discuss.newcomment">
                                </div>
                                <div class="is-col is-5">
                                    <button v-on:click="submitcomment(data_feedbacks[discuss.ticket].REF_NUMBER, discuss.ticket)" type="button" class="button is-primary" id="btn-save-feedback" style="height:30px;"><i class='material-icons'>send</i></button>
                                </div>
                                <div class="is-col is-5">
                                    <button v-on:click="modalattachment()" type="button" class="button is-success" id="btn-save-feedback" style="height:30px;"><i class='material-icons'>attach_file</i></button>
                                </div>
                            </div>                            
                        </div>
                        <div class="modal-footer">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-discuss')">Cancel</button>
                        </div>
                    </span>
                </div>               
            </div>


            <!-- Modal Detail Feedback -->
            <div class="modal-box" id="modal-content-feedback">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-content-feedback')"></span>
                        <div class="modal-header">
                            <h2 class="title">Feedback</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <label>Feedback Content</label>
                            <textarea  tabindex="-1" rows="10" style="width: 100%;" disabled name="feedback_content" class="remarks" id="det-feedback-content"></textarea>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-content-feedback')">Close</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- / Modal Detail Feedback -->

            <!-- Modal Response Feedback -->
            <div class="modal-box" id="modal-response-feedback">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-response-feedback')"></span>
                        <div class="modal-header">
                            <h2 class="title">Feedback</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <label>Feedback Response</label>
                            <textarea v-model="feedbackResponse.feedback_response"   tabindex="-1" rows="10" style="width: 100%;" name="feedback_content" class="remarks" id="det-feedback-response"></textarea>
                            <div id="set-attachment">
                                <br>
                                <label for="">Attachment Response</label>
                                <input id="attachment" ref="attachment" type="file" v-on:change="onChangeFileUpload()">
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-response-feedback')">Close</button>
                            <button v-on:click="handlerSaveFeedbackResponse()" type="submit" id="btn-save-response"><i class="material-icons">check</i> Save</button>

                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- / Modal Response Feedback -->
        </div>
    </div>
</template>

<script>

import Loading from 'vue-loading-overlay'
import axios from 'axios'
import 'vue-loading-overlay/dist/vue-loading.css'

//vue-good
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

import FieldFeedback from '../datatable/FieldFeedback';
import XLSX from 'xlsx';

import vueFilePond from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

const FilePond = vueFilePond( FilePondPluginFileValidateType, FilePondPluginImagePreview );

export default {

    components: {
        Loading,
        VueGoodTable,
        FilePond
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'))
        },

        data_feedbacks: function() {
            return this.datatable.rows;
        }
    },



    data: () => ({
        myFiles: [],
        discuss: {
            messageList: [],
            ticket: null,
            newcomment: '',
            listen: null,
            last_update: null
        },        
        aircrafts: [],
        datatable: {
            fields: FieldFeedback,
            rows: [],
            totalRows: '',
            serverParams: {
                columnFilters: {
                },
                sort: {
                    type: '',
                    field: ''
                },
                page: 1, 
                perPage: 10,
                searchTerm: '',
                filter: {
                    status: '',
                    approval: '',
                    priority: '',
                    aircraft: '',
                    task_type: ''
                }
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },
        form: {
            status: '',
            approval: ''
        },

        feedbackResponse: {
            feedback_id: '',
            feedback_response: '',
            attachment: ''
        },

        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        }
    }),

    mounted() {
        this.initData();
        //this.initAircraft();
    },

    methods: {

        handleFilePondInit: function() {
            //this.myFiles = this.$refs.pond.getFiles();
        },

        checkfile: function(error,file) {
            this.myFiles = this.$refs.pond.getFiles();
            //console.log(this.myFiles[0].file);
        },

        modalattachment: function(){
            $('#modal-attachment').show();
        },        

        chat_listener(ticket,index) {
            this.discuss.listen = setInterval(() => {
                /*this.search_channel(ticket,index).then(() => {
                    $("#chatelement").animate({ scrollTop: $('#chatelement').prop("scrollHeight")}, 1000);
                });*/
                this.chat_checkchannelupdate(ticket,index);
            }, 5000)
        },

        chat_stoplistening () {
            clearInterval(this.discuss.listen);
        },

        chat_checkchannelupdate(ticket,index){
            if(ticket==null){
                return;
            }
            else{
                axios.get('/api/feedback/listen_tochannel/'+ticket)
                .then(res => {
                    if(res.data && res.data[0] && res.data[0].CHANNEL_UPDATE) {
                        if(this.data_feedbacks[index].CHANNEL_UPDATE!=res.data[0].CHANNEL_UPDATE){
                            this.search_channel(ticket,index).then(() => {
                                //$("#chatelement").animate({ scrollTop: $('#chatelement').prop("scrollHeight")}, 1000);
                                this.data_feedbacks[index].CHANNEL_UPDATE=res.data[0].CHANNEL_UPDATE;
                            });
                            
                        }
                        //this.last_update = res.data;
                        //console.log(this.last_update);
                    }
                }).catch(e => {
                    toastr.error("Undefined error");
                    console.log("Error: "+e)
                })                
            }
        },

        submitcomment: function(ticket,index){
            if(this.discuss.newcomment=='' || ticket==null){
                return;
            }
            else{
                axios.post('/api/feedback/add_comment_tochannel', {
                    card_id: ticket,
                    comment: '['+this.user.username+'] '+this.discuss.newcomment
                }).then(res => {
                    if(res.data.success) {
                        this.search_channel(ticket,index).then(() => {
                            //$("#chatelement").animate({ scrollTop: $('#chatelement').prop("scrollHeight")}, 1000);
                        });
                        this.discuss.newcomment='';
                    }
                    else{
                        toastr.error(res.data.message);
                    }
                }).catch(e => {
                    toastr.error("Undefined error");
                    console.log("Error: "+e)
                })
            }
        },

        submitattachment(ticket){
            //console.log(this.myFiles);

            axios.get('/api/feedback/add_attachment_tochannel/'+ticket)
            .then(res => {
                if(res.data.success){
                    let myuser = this.user.username;
                    for (let i = 0; i < this.myFiles.length; i++) {
                        let formData = new FormData();
                        
                        formData.append('file', this.myFiles[i].file);
                        formData.append('name', myuser);
                        
                        var instance = axios.create();
                        delete instance.defaults.headers.common['X-CSRF-TOKEN'];
                        delete instance.defaults.headers.common['Authorization'];
                        delete instance.defaults.headers.common['X-Requested-With'];
                        instance({
                            method: 'post',
                            url: res.data.data.url,
                            data: formData,
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                'Accept': '*/*'
                            }
                        }).then(res => {
                                if(res.status==200) {
                                    this.search_channel(ticket,this.discuss.ticket);
                                }
                                else{
                                    toastr.error(res.statusText);
                                }
                            console.log(res);
                        }).catch(e => {
                            toastr.error("Undefined error");
                            console.log("Error: "+e)
                        })
                    }

                    this.hideModal('modal-attachment');
                    this.discuss.newcomment='';
                    this.myFiles=[];                    
                    
                }
            }).catch(e => {
                toastr.error("Undefined error");
                console.log("Error: "+e)
            })           
        },

        openmodal_discuss: function(ticket,index){
            this.discuss = {
                messageList: [],
                ticket: null,
                newcomment: '',
            };
            this.search_channel(ticket,index).then(() => {
                $('#modal-discuss').show();
                this.chat_listener(ticket,index);
                //$("#chatelement").scrollTop($("#chatelement").prop("scrollHeight"));
                   
            });
        },

        search_channel: function(ticket,index) {
            return new Promise((resolve, reject) => {
                if(ticket==null){
                    toastr.error("Failed load channel");
                    return;
                }
                axios.get('/api/feedback/get_feedback_channel/'+ticket)
                .then(res => {
                    if(res.data.success) {
                        let formatter = res.data.data;
                        let myuser = this.user.username;
                        formatter.forEach(function(obj) {
                            if (obj.type === 'commentCard') {
                                let id_parsing = obj.data.text.match(/\[(.*?)\]/);
                                if(id_parsing && id_parsing[1]){
                                    if(id_parsing[1] == myuser){
                                        obj.data.text = obj.data.text.replace('['+id_parsing[1]+'] ','');
                                        obj.author = 'me';
                                    }
                                    else{
                                        obj.author = 'support';
                                    }
                                }
                                else{
                                    obj.author = 'support';
                                }
                            }
                            else if(obj.type === 'addAttachmentToCard'){
                                if(obj.data.attachment.name == myuser){
                                    obj.author = 'me';
                                }
                                else{
                                    obj.author = 'support';
                                }                          
                            }
                        });
                        //this.loading.isLoading = false
                        //toastr.success(res.data.message, 'Success');
                        formatter.sort(function(a,b) {
                            let a1 = new Date(a.date);
                            let b1 = new Date(b.date);
                            return a1<b1 ? -1: a1 > b ? 1 : 0;
                        });           
                        this.discuss.ticket = index;
                        this.discuss.messageList = formatter;
                        resolve();
                    }else {
                        //this.loading.isLoading = false
                        toastr.warning(res.data.message);
                        reject();
                    }
                })
                .catch(e => {
                    this.loading.isLoading = false
                    toastr.error("Undefined error");
                    console.log("Error: "+e);
                    reject();
                })
            })
        },

        initData: function() {
            this.loading.isLoading = true;
            //this.datatable.serverParams.filter.status = "";
            //this.datatable.serverParams.filter.approval = "";
            //this.datatable.serverParams.filter.priority = "";            
            axios.post('/api/feedback/get_all_feedback', this.datatable.serverParams)
            .then(res => {
                this.datatable.rows = res.data.data
                this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
                

            })
            .catch(e => {
                console.log("Error: "+e)
            })
        },

        /**
         * Show Aircraft Type to select option whene page loaded
         */
        /*initAircraft: function() {
            axios.get('/api/aircraft/get_aircraft')
            .then( res => {
                this.aircrafts = res.data.data
            })
        },*/

        syncDataFeedback: function() {
            this.datatable.serverParams.searchTerm = '';
            this.datatable.serverParams.page = 1;
            //this.datatable.serverParams.filter.status = "";
            //this.datatable.serverParams.filter.approval = "";
            //this.datatable.serverParams.filter.priority = "";
            this.form.status = "";
            this.form.approval = "";
            this.initData();
            this.$refs['tableFeedback'].reset();
        },

        handlerFilter: function() {
            this.loading.isLoading = true;
            this.datatable.serverParams.page = 1;
            axios.post('/api/feedback/get_all_feedback', this.datatable.serverParams)
            .then(res => {
                this.datatable.rows = res.data.data
                this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
            })
        },

        /**
         * Hide modalsh
         * @param modal_name String
         */
        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
            if(modal_name=='modal-discuss'){
                this.chat_stoplistening();
            }

        },

        /**
         * Show feedback modal
         * @param data String
         */
        /*modalFeedback: function(data) {
            //document.getElementById("det-feedback-content").value = data;
            $('#modal-content-feedback').show();
        },*/

        modalFeedbackResponse: function(feedback_id, feedback_response) {
            this.feedbackResponse.feedback_id = feedback_id;
            if(feedback_response !== null) {
                document.getElementById('det-feedback-response').value = feedback_response;
                document.getElementById('det-feedback-response').disabled = true;
                document.getElementById('set-attachment').style.display = 'none';
                document.getElementById('btn-save-response').style.display = 'none';
            }else {
                document.getElementById('det-feedback-response').value = "";
                document.getElementById('det-feedback-response').disabled = false;
                document.getElementById('set-attachment').style.display = 'block';
                document.getElementById('btn-save-response').style.display = 'inline-block';
            }
            $('#modal-response-feedback').show();
        },

        handlerSaveFeedbackResponse: function() {
            let formData = new FormData();
            formData.append('feedback_id', this.feedbackResponse.feedback_id);
            formData.append('feedback_response', this.feedbackResponse.feedback_response);
            if(this.feedbackResponse.attachment != "") {
                formData.append('attachment', this.feedbackResponse.attachment);
            }

            axios.post('/api/feedback/update_response_feedback', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    this.initData();
                    setTimeout(()=> {
                        this.hideModal('modal-response-feedback');
                    }, 500)
                }else {
                    toastr.error(res.data.message);
                }
            })
            .catch(e => {
                console.log("Error: "+e)
            })
        },

        /**
         * Handle selected input file
         */
        onChangeFileUpload: function(){
            if(document.getElementById("attachment").files.length != 0 ){
                this.feedbackResponse.attachment = this.$refs.attachment.files[0];
            }
        },

        /**
         * Handle datatable request change
         */
        handleDatatableChange: function(params) {
            this.loading.isLoading = true;
            return new Promise((resolve, reject) => {
                axios.post('/api/feedback/get_all_feedback', params)
                .then(res => {
                    this.datatable.rows = res.data.data
                    this.datatable.totalRows = res.data.total
                    resolve();
                })
                .catch(e => {
                    console.log("Error: "+e)
                    resolve();
                })
            })
        },

        /**
         * Handle attachment view
         */
        handlerAttachment: function(data) {
            window.open('/uploads/feedback/'+data, "_blank");
        },

        /**
         * Handle update status from selected row
         */
        handleUpdateStatus: function() {
            if(!this.updateValidation('sel-status', 'Feedback status')) return;
            axios.post('/api/feedback/update_status_feedback', {
                id_feedback: this.datatable.selectedRows,
                id_status: this.form.status
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    this.initData();
                }else {
                    toastr.error(res.data.message);
                }
            })
            .catch(e =>{
                console.log("Error: "+e)
            })
        }, 

        /**
         * Handle update status from selected row
         */
        handleUpdateApproval: function() {
            if(!this.updateValidation('sel-approval', 'Approval status')) return;
            axios.post('/api/feedback/update_approval_feedback', {
                id_feedback: this.datatable.selectedRows,
                approval: this.form.approval
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    this.initData();
                }else {
                    toastr.error(res.data.message);
                }
            })
            .catch(e =>{
                console.log("Error: "+e)
            })
        }, 

        handleUpdateSingleData: function(column, id_data, elem) {
            let elm = "";
            elm = document.getElementById(elem).value;
            axios.post('/api/feedback/update_singledata_feedback', {
                column: column,
                id_data: id_data,
                data_update: elm
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    this.initData();
                }else {
                    toastr.error(res.data.message);
                }
            })
            .catch(e =>{
                console.log("Error: "+e)
            })
        }, 
        /**
         * Handle validation for update data
         * @param field String field id
         * @param type String 
         */
        updateValidation: function(field, type) {
            let data = document.getElementById(field).value;
            if(data == "") {
                toastr.warning(type +' cant be empty');
                return false;
            } 
            return true;
        },

         /**
         * Datatable - Server Side
         */
        updateParams(newProps) {
            this.datatable.serverParams = Object.assign({}, this.datatable.serverParams, newProps);
        },
        
        onPageChange(params) {
            this.updateParams({page: params.currentPage});
            this.loadItems();
        },

        onPerPageChange(params) {
            this.updateParams({perPage: params.currentPerPage});
            this.loadItems();
        },

        onSortChange(params) {
            this.updateParams({
                sort: {
                    type: params[0].type,
                    field: params[0].field,
                },
            });
            this.updateParams({page: 1});
            this.loadItems();
        },
        
        onColumnFilter(params) {
            this.updateParams(params);
            this.loadItems();
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({page: 1});
            this.loadItems();

        },

        /**
         * load items is what brings back the rows from server
         */
        loadItems() {
            this.handleDatatableChange(this.datatable.serverParams).then(()=> {
                this.loading.isLoading = false;
            });
            
        },

        /**
         * Handle row selection
         * @param param object data from selected row
         */
        selectionChanged(params) {
            this.datatable.selectedRows = [];
            for(let i = 0; i < params.selectedRows.length; i++) {
                this.datatable.selectedRows.push(params.selectedRows[i].ID)
            }

            if(this.datatable.selectedRows.length > 0) {
                document.getElementById("update_status").disabled = false;
                document.getElementById("update_approval").disabled = false;
            }else {
                document.getElementById("update_status").disabled = true;
                document.getElementById("update_approval").disabled = true;
            }
        },

        handlerExportFeedback: function() {
            this.loading.isLoading = true;
            axios.get(`/api/feedback/export_feedback`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    return;
                }

                this.handlerExport(res.data, 'Feedback').then(() => {
                    this.loading.isLoading = false;
                });
            })
            .catch(e => {
                console.log("Error: " + e);
                this.loading.isLoading = false;
                toastr.error("Undefined error")
            })
        },

        handlerExport: function(data, name) {
            return new Promise((resolve, reject) => {
                let tmp = XLSX.utils.json_to_sheet(data)                 
                let wb = XLSX.utils.book_new();

                XLSX.utils.book_append_sheet(wb, tmp, 'Feedback') 
                XLSX.writeFile(wb, `${name}.xlsx`)

                resolve();
            })
        }
    }
}
</script>