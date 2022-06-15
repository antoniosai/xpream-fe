<style scoped>


::v-deep .ccard{
    min-width:600px !important;
    max-width:600px !important;
}

::v-deep .cfeedback{
    min-width:20% !important;
}

::v-deep .panel-heading{
    background: #ffffff !important;
}
::v-deep .btn-feedback {
    padding: 0px 0px 0px 7px !important;
    width: 17px !important;
    height: 17px !important;
}

::v-deep .modal-link {
    padding: 4px;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    cursor: pointer;
}

::v-deep .feedback-icon {
    font-size: 9pt !important;
}

::v-deep .modal-link:hover {
    color: #2183f7;
}

::v-deep .label-feedback-type {
    width: 70px;
    background-color: #3384ff; 
    font-size: 7pt; 
    color: white; 
    margin-top: 4px; 
    margin-right: 2px
}

::v-deep .label-feedback-priority {
    width: 60px;
    font-size: 7pt; 
    color: white; 
    margin-top: 4px; 
    margin-right: 2px
}

::v-deep .label-feedback-priority-low {
    background-color: green !important; 
}

::v-deep .label-feedback-priority-medium {
    background-color: #FFC107 !important; 
}

::v-deep .label-feedback-priority-urgent {
    background-color: red !important; 
}

::v-deep .box-feedback {
    padding: 0px 0px 10px 0px;
}

::v-deep .label-feedback-time {
    background-color: #eee; 
    font-size: 7pt; 
    color: black; 
    margin-top: 4px; 
    margin-right: 2px
}

::v-deep .label-feedback-head {
    margin: -5px 0px 0px 0px;
    cursor: pointer;
}

::v-deep .label-feedback-head:hover {
    color: #0065FF;
}

::v-deep .div-scroll {
    padding-top: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
    overflow-y: auto;
    max-height: 82vh;
}

::v-deep .div-scroll-2 {
    padding-top: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
    max-height: 74.5vh;
    overflow-y: auto;
    box-sizing: border-box;
}

::v-deep .fix-div-scroll {
    margin-top: 20px;
}

::v-deep .default-table{
    border: unset;
    padding: 0px 4px 1px 0px;
}

::v-deep .pagination-default{
    margin-top: -25px;
    height: 10px !important;
    font-size: 8pt !important;
    padding-bottom: 20px !important;
}

::v-deep .pagination-is-active{
    background-color: #0065ff !important;
    border-color: #0065ff !important;
    color: #fff !important;
}

::v-deep .flex-middle-default {
    padding: 4px 0px 3px 0px !important;
}

::v-deep .slide-leave-active,
.slide-enter-active {
  transition: 1s;
}

::v-deep .slide-enter {
  transform: translate(100%, 0);
}

::v-deep .slide-leave-to {
  transform: translate(100%, 0);
}

::v-deep .feedback-position {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 100%;
    z-index:99;
}

::v-deep .fab-main .material-icons.close[data-v-00c57f94] {
    opacity: 0 !important;
    position: absolute !important;
}

::v-deep .material-icons.md-24[data-v-00c57f94] {
    font-size: 24px !important;
}

::v-deep .fab-main .material-icons[data-v-00c57f94] {
    color: white !important;
    -webkit-transition: .4s all !important;
    transition: .4s all !important;
    margin: 0px auto !important;
}

::v-deep .vgt-left-align {
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

::v-deep .action {
    margin-top: 1px !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left !important;
    text-align: left !important;
}

::v-deep .action-header {
    height: 30px !important;
    margin: 0px 0px 0px 0px !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left !important;
}

::v-deep .action > i {
    margin: -3px 0px 0px 3px;
    padding: 4px;
    background: #fff;
    border-radius: 5px;
    font-size: 12px !important;
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    cursor: pointer;
}

::v-deep action > i.warning {
    color: #FFAB00;
}

::v-deep .action > i.warning:hover {
    background: #FFAB00;
    color: white;
    border-color: #FFAB00;
}
::v-deep .action > i.primary {
    color: #0065FF;
}

::v-deep .action > i.primary:hover {
    background: #0065FF;
    color: white;
    border-color: #0065FF;
}

::v-deep .action-header > i {
    margin: -1px 0px 0px 3px;
    padding: 4px;
    background: #fff;
    border-radius: 5px;
    font-size: 16px !important;
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    cursor: pointer;
}

::v-deep .action-header > i.primary {
    color: #0065FF;
}

::v-deep .action-header > i.primary:hover {
    background: #0065FF;
    color: white;
    border-color: #0065FF;
}

::v-deep .vgt-global-search {
    background: #ffffff !important;
    border: 1px solid #dcdfe6  !important;
}

::v-deep .vgt-table thead th {
    background: #ffffff !important;
}


::v-deep .card-image {
    cursor: pointer !important;
}

::v-deep .card-image:hover {
    cursor: pointer !important;
}

::v-deep .card-block {
    padding-bottom: 10px;
}

::v-deep .panel-toggle {
    cursor: pointer;
}

::v-deep .panel-heading-default {
    padding: 10px 0px 0px 15px !important;
}

::v-deep .panel-collapse-enter-active,
.panel-collapse-leave-active{
    transition: 200ms ease-out;
    overflow: hidden;
}

::v-deep .panel-collapse-enter,
.panel-collapse-leave-to  {
    height: 0;
    padding: 0 10px;
    opacity: 0;
}

::v-deep .box-knowledge-other {
    width: 100% !important;
    height: 170px !important;
    background-color: rgb(230, 230, 230) !important;
    text-align: center !important;
}

::v-deep .box-knowledge-other i {
    font-size: 50pt !important;
    margin-top: 50px !important; 
    color: white !important;
}

::v-deep .box-knowledge-other i:hover {
    opacity: 0.7 !important; 
}

::v-deep .btn-panel-toggle {
    cursor: pointer !important;
}


</style>

<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body">
            <div class="is-row">
                <div class="is-col is-75">
                    <div class="card">
                        <div class="card-header ">
                            <div class="title-area">
                                <h3 class="title">Task Review</h3>
                                <span class="subtitle total-project">feedback list</span>
                            </div>
                            
                            <div class="option-box">
                                <div class="option-item">
                                </div>
                                <div class="option-item">
                                </div>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="row ">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="datatable.fields"
                                            :rows="data_feedbacks"
                                            ref="table-list-feedback"
                                            styleClass="vgt-table condensed"
                                            :search-options="{
                                                enabled: true,
                                                trigger: 'keyup',
                                                skipDiacritics: true,
                                                placeholder: 'Fill to search'
                                            }"
                                            :pagination-options="{
                                                enabled: true,
                                                mode: 'records',
                                                perPage: 5,
                                                position: 'bottom',
                                                perPageDropdown: datatable.perPage,
                                                dropdownAllowAll: true,
                                                setCurrentPage: 1,
                                                nextLabel: 'Next',
                                                prevLabel: 'Prev',
                                                rowsPerPageLabel: 'Rows per page',
                                                ofLabel: 'of',
                                                pageLabel: 'page', // for 'pages' mode
                                                allLabel: 'All',
                                            }"
                                        >
                                            <template slot="table-row" slot-scope="props">
                                                <span v-if="props.column.field =='TICKET_NUMBER'">
                                                    <span v-on:click="openmodal_discuss(props.formattedRow['REF_NUMBER'],props.index)" style="cursor:pointer;">
                                                        <div class="card" style="background-color:#c9eaf3;margin-bottom:10px;">
                                                            <div class="card-content">
                                                                 <div class="is-row" style="margin-bottom:0px;">
                                                                    <div class="is-col is-80">
                                                                        <div class="is-row" style="margin-bottom:0px;">
                                                                            <div class="is-col is-30" style="border:1px solid #e3e3e3; border-radius:3px; padding:5px; margin-0px; font-size:16px; font-weight:bold; background-color:white;">
                                                                                {{props.formattedRow['TICKET_NUMBER']}}
                                                                                
                                                                            </div>
                                                                            <div class="is-col is-70">
                                                                                <div class="is-row" style="margin-bottom:0px;margin-top:0px;">
                                                                                    <div class="is-col is-20" style="border:1px solid #e3e3e3; border-radius:3px;font-weight:bold;padding:0px;">
                                                                                        <button class="button is-secondary" style="width:100%;padding:5px;line-height:normal;">{{props.formattedRow['ac_reg']}}</button>
                                                                                    </div>
                                                                                    <div class="is-col is-20" style="border:1px solid #e3e3e3; border-radius:3px;font-weight:bold;padding:0px;">
                                                                                        <button class="button is-secondary is-secondary" style="width:100%;padding:5px;line-height:normal;">{{props.formattedRow['ac_type']}}</button>
                                                                                    </div>
                                                                                    <div class="is-col is-60" style="font-weight:bold; text-align:right;padding:0px;">
                                                                                        <button v-if="props.formattedRow['STATUS']=='OPEN'" class="button is-danger" style="width:100%;padding:5px;line-height:normal;">{{props.formattedRow['STATUS']}}</button>
                                                                                        <button v-else-if="props.formattedRow['STATUS']=='PROGRESS'" class="button is-warning" style="width:100%;padding:5px;line-height:normal;">{{props.formattedRow['STATUS']}}</button>
                                                                                        <button v-else-if="props.formattedRow['STATUS']=='CLOSE'" class="button is-success" style="width:100%;padding:5px;line-height:normal;">{{props.formattedRow['STATUS']}}</button>
                                                                                        <button v-else class="button is-default" style="width:100%;padding:5px;line-height:normal;">{{props.formattedRow['STATUS']}}</button>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="is-row" style="margin-bottom:0px;margin-top:5px;">
                                                                                    <div class="is-col is-80" style="border:1px solid #e3e3e3; border-radius:3px;text-align:right;">
                                                                                        {{props.formattedRow['main_type']}}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="is-row" style="margin-bottom:0px;">
                                                                            <div class="is-col is-80">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Order Ref :</td><td>{{props.formattedRow['REF_ORDER']}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Order Desc :</td><td style="white-space: normal;">{{props.formattedRow['DESCRIPTION']}}</td>
                                                                                    </tr>                                                                            
                                                                                </table>
                                                                            </div>
                                                                        </div> 
                                                                    </div>
                                                                 </div>                                                               
                                                            </div>
                                                        </div>
                                                    </span>
                                                </span>
                                                <span v-if="props.column.field =='FEEDBACK'">
                                                    <div class="card" style="background-color:#f2ffcd;margin-bottom:10px;height:95%;cursor:pointer;" v-on:click="openmodal_discuss(props.formattedRow['REF_NUMBER'],props.index)">
                                                        <div class="card-content">
                                                            <div class="is-row" style="margin-bottom:0px;">
                                                                <div class="is-col is-80" style="white-space: normal;">
                                                                    {{props.formattedRow['FEEDBACK']}}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </template>

                                        </vue-good-table>

                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="is-col is-25">
                    <div class="card">
                        <div class="card-header no-border">
                            <div class="title-area">
                                <h3 class="title">Dashboard</h3>
                                <span class="subtitle total-project">Click for details</span>
                            </div>
                        </div>
                        <!-- <div class="card-content"></div> -->
                        <div class="card-content">
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-box" style="z-index: 99999;" id="modal-attachment" data-keyboard="false" data-backdrop="static">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-attachment')"></span>
                    <div class="modal-header">
                            <h2 class="title">Attachment</h2>
                            <p>maximum 10MB</p>
                    </div>
                    <div class="modal-body" style="position: relative; font-size:12px;">
                        <div class="is-row">
                            <div class="is-col is-80">
                            <!--accepted-file-types="image/jpeg, image/png"-->
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
                    <span v-if="discuss.ticket!==null">
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
            <!-- / Feedback Modal -->

            <!-- Detail Feedback Modal-->
            <div class="modal-box" id="modal-detail-feedback">
            </div>
            <!-- / Detail Feedback Modal -->

            <!-- Detail History Modal -->
            <div class="modal-box" id="modal-detail-history">
            </div>
            <!-- / Detail History Modal -->

            <!-- Modal add Knowledge -->
            <div class="modal-box" id="modal-add-knowledge">
            </div>
            <!-- /Modal add knowledge -->
        </div>
    </div>

</template>

<script>


import swal from 'sweetalert'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

import vueFilePond from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

import VueImg from 'v-img';

import Vue from 'vue';
Vue.use(VueImg);

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
        }
    },

    data: () => ({
        myFiles: [],
        totalRecords: 0,
        rows: [],
        serverParams: {
            columnFilters: {
            },
            sort: {
                type: '',
                field: ''
            },
            page: 1, 
            perPage: 5,
            mpd: '55-804-00',
            searchTerm: ''
        },
        knowledge: [],
        bgColor: 'blue',
        position: 'top-right',
        size: 'small',
        mainIcon: 'chat',
        data_feedbacks: [],
        aircrafts: [],
        task: [],
        history: [],
        show: false,
        task_number: '',
        form: {
            aircraft_type: '',
            search_data: '',
            search_type: '',
            task_type: ''
        },
        form_knowledge: {
            type: '',
            link: ''
        },
        loading: {
            isLoading: false,
            isLoadingDetailHistory: false,
            isLoadingFeed: true,
            isLoadingHistory: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        feedback: {
            task_number: '',
            feedback_type: '',
            priority: '1',
            feedback: '',
            attachment: '',
            id_user: '',
            id_aircraft: '',
        },
        task_detail: {
            access: [],
            material: [],
            zone: [],
            preparation: [],
            reference: [],
        },
        datatable: {
            perPage: [5, 10, 50, 100],
            fields: [
                    {
                        label: 'Ticket',
                        field: 'TICKET_NUMBER',       
                        hidden: false,
                        filterable: false,
                        thClass: 'ccard',
                        tdClass: 'ccard',                        
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'Order Ref',
                        field: 'REF_ORDER',       
                        hidden: true,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'Order Type',
                        field: 'AUART',       
                        hidden: true,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    }, 
                    {
                        label: 'Description',
                        field: 'DESCRIPTION',       
                        hidden: true,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'A/C Type',
                        field: 'ac_type',       
                        hidden: true,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'A/C Reg',
                        field: 'ac_reg',       
                        hidden: true,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'Maintenance',
                        field: 'main_type',       
                        hidden: true,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },                                                                                                    
                    {
                        label: 'Status',
                        field: 'STATUS',       
                        hidden: true,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    }, 
                    {
                        label: 'Feedback',
                        field: 'FEEDBACK',       
                        hidden: false,
                        thClass: 'cfeedback',
                        tdClass: 'cfeedback',
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'Category',
                        field: 'CATEG',       
                        hidden: true,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    } ,                    
                    {
                        label: 'is_approve',
                        field: 'APPROVAL',       
                        hidden: true,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },                                        
                    {
                        label: 'ID Channel',
                        field: 'REF_NUMBER',       
                        hidden: true,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },                    
                    ]
        },

        panel: {
            description: true,
            core: false,
            preparation: false,
            access: false,
            material: false,
            safety: false,
            history: false,
            reference: false,
        },
        isDataFound: false,
        isHistoryFound: false,
        resultMessage: 'Select Aircraft Type and input Task Number !',
        is_find_history: false,
        discuss: {
            messageList: [],
            ticket: null,
            newcomment: '',
            listen: null,
            last_update: null
        },
    }),

    mounted() {
        //console.log(this.$route.params.trb);
        this.getFeedback()
        .then(() => {
            if(this.$route.params.trb || false){
                //console.log(this.data_feedbacks);
                let index = this.data_feedbacks.map(function(e) { return e.TICKET_NUMBER; }).indexOf(this.$route.params.trb);
                //console.log(index);
                this.openmodal_discuss(this.data_feedbacks[index].REF_NUMBER,index);
            }
        });
        //console.log(this.data_feedbacks);
    },

    watch: {

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


        initAircraft: function() {
            axios.get('/api/aircraft/get_aircraft')
            .then( res => {
                this.aircrafts = res.data.data
            })
        },

        initKnowledge: function() {
            axios.post('/api/knowledge/get_knowledge_by_task', {
                aircraft_type: this.form.aircraft_type,
                task_number: this.task_number
            })
            .then(res => {
                if(res.data.success) {
                    this.knowledge = res.data.data;
                }
            })
            .catch(e => {
                console.log("Error "+e);
                toastr.error("Undefined error");

            })
        },

        /**
         * Enable field Task Number when Aircraft Type is selected
        */
        onChangeAircraft: function() {
            if(this.form.aircraft_type !== "" && this.form.search_type !== "") {
                document.getElementById("task-number").disabled = false;
            }else {
                document.getElementById("task-number").disabled = true;
                document.getElementById("task-number").value = "";
            }
        },

        /**
        * Find task using Aircraft Type and Task Number
        */
        findTask: function() {
            if(!this.validationFindTask()) return;

            this.loading.isLoading = true;
            
            this.isDataFound =  false
            this.panel.description = true,
            this.panel.core = false,
            this.panel.preparation = false,
            this.panel.access = false,
            this.panel.material = false,
            this.panel.safety = false,
            this.panel.history = false,
            this.panel.reference = false,

            this.history = [];
            this.isHistoryFound =  false;
            this.is_find_history = false;

            axios.post('/api/task/get_task', this.form, {timeout: 5000})
            .then(res => {
                if(res.data.success) {
                    this.loading.isLoading = false
                    if(res.data.data.task_detail.length < 1) {
                        this.loading.isLoading = false
                        this.resultMessage = "Data not found !"
                        this.isDataFound =  false
                        this.task_number = '';
                        this.serverParams.mpd = 'nompdfound';
    
                    }else {
                        this.isDataFound =  true
                        this.task_number = res.data.data.task_detail[0].TASK_NUMBER;
                        this.serverParams.mpd = res.data.data.task_detail[0].TASK_NUMBER;
                        this.task_detail.access = res.data.data.access;
                        this.task_detail.material = res.data.data.part;
                        this.task_detail.zone = res.data.data.zone;
                        this.task_detail.preparation = res.data.data.preparation;
                        this.task_detail.reference = res.data.data.reference;
                        this.initKnowledge();
                    }
                }else {
                    this.loading.isLoading = false
                    this.resultMessage = "Data not found !"
                    this.isDataFound =  false
                    this.task_number = '';
                    this.serverParams.mpd = 'nompdfound';
                }
                this.getFeedback();
                this.task = res.data.data;
                this.is_find_history = false;
                // this.findHistory();
            })
            .catch(e => {
                this.loading.isLoading = false
                toastr.error("Undefined error");
                console.log("Error: "+e)
            })
        },

        /**
         * Validation input
         */
        validationFindTask: function() {
            if(this.form.task_type === "") {
                toastr.warning('Task type cant be empty')
                return false
            }
            if(this.form.aircraft_type === "") {
                toastr.warning('Aircraft type cant be empty')
                return false
            }
            if(this.form.search_type === "other") {
                this.modalFeedback("OTHER", "OTHER");
                return;
            }else {
                if(this.form.search_data === "") {
                    toastr.warning('Task number cant be empty')
                    return false
                }
            }
            return true
        },

        /**
         * Show feedback modal
         * @param type String
         * @param feedback_type String
         */
        modalFeedback: function(type, feedback_type) {

            if(this.task.task_detail === undefined) {
                let ac_type = this.aircrafts.filter(d => d.ID === this.form.aircraft_type);
                document.getElementById('feedback-ac-type').value = ac_type[0].AIRCRAFT;
                document.getElementById('feedback-reference').value = this.form.search_data;
                this.feedback.task_number = this.form.search_data;
                this.feedback.id_aircraft = this.form.aircraft_type;
            }else {
                document.getElementById('feedback-ac-type').value = this.task.task_detail[0].AIRCRAFT;
                document.getElementById('feedback-reference').value = this.task.task_detail[0].TASK_NUMBER;
                this.feedback.task_number = this.task.task_detail[0].TASK_NUMBER;
                this.feedback.id_aircraft = this.task.task_detail[0].ID_AIRCRAFT;
            }

            document.getElementById('feedback-head').innerHTML = type;
            document.getElementById('file').value = "";
            document.getElementById('prior-caption').style.color = 'green';
            document.getElementById('prior-caption').innerHTML = 'LOW';

            this.feedback.priority = 1;
            this.feedback.feedback_type = feedback_type;
            this.feedback.feedback = '';
            this.feedback.attachment = '';

            $('#modal-feedback').show();
        },

        /**
         * Hide modal
         * @param modal_name String
         */
        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
            if(modal_name=='modal-discuss'){
                this.chat_stoplistening();
            }
        },

        /**
         * Change range priority sign
         */
        changePriorCapt: function() {
            if(parseInt(this.feedback.priority) === 1) {
                document.getElementById('prior-caption').style.color = 'green';
                document.getElementById('prior-caption').innerHTML = 'LOW';
            }else if(parseInt(this.feedback.priority) === 2) {
                document.getElementById('prior-caption').style.color = '#FFC107';
                document.getElementById('prior-caption').innerHTML = 'MEDIUM';
            }else {
                document.getElementById('prior-caption').style.color = 'red';
                document.getElementById('prior-caption').innerHTML = 'URGENT';

            }

        },

        /**
         * Add new feedback
         */
        addFeedback: function() {
            if(!this.validationFeedback()) {
                return;
            }

            this.handleButton('btn-save-feedback', 'load').then(() => {
                let formData = new FormData();
                let temp_priority;
                formData.append('ref_number', this.feedback.task_number);
                formData.append('id_aircraft', this.feedback.id_aircraft);
                formData.append('feedback_type', this.feedback.feedback_type);
                formData.append('task_type', this.form.task_type);
                if(this.feedback.priority == '1') {
                    temp_priority = "LOW";
                }else if(this.feedback.priority == '2') {
                    temp_priority = "MEDIUM";
                }else {
                    temp_priority = "URGENT";
                }
                formData.append('priority', temp_priority);
                formData.append('feedback', this.feedback.feedback);
                if(this.feedback.attachment != "") {
                    formData.append('attachment', this.feedback.attachment);
                }
    
                formData.append('nopeg', this.user.username);
                axios.post('/api/feedback/add_feedback', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                  })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        this.getFeedback();
                        setTimeout(()=> {
                            this.hideModal('modal-feedback');
                        }, 1000)
                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-save-feedback', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    toastr.error("Undefined error");
                    this.handleButton('btn-save-feedback', 'stop');

                })
            })


        },

        validationFeedback: function() {
            if(this.feedback.feedback == "") {
                toastr.warning('Feedback cant be empty');
                return false;
            }
            return true;
        },

        /**
         * Handle selected input file
         */
        onChangeFileUpload: function(){
            if(document.getElementById("file").files.length != 0 ){
                this.feedback.attachment = this.$refs.file.files[0];
            }
        },

        /**
         * Get feedback data from user
         */
        getFeedback: function() {
            return new Promise((resolve) => {
                this.loading.isLoadingFeed = true;
                axios.post('/api/feedback/get_feedback', {
                    nopeg: this.user.username,
                    aircraft_type:"",
                })
                .then(res => {
                    this.data_feedbacks = res.data.data;
                    //console.log(this.data_feedbacks)
                    this.loading.isLoadingFeed = false;
                    resolve();

                })
                .catch(e => {
                    toastr.error("Undefined error");
                    this.loading.isLoadingFeed = false;
                    console.log("Error: "+e);
                    resolve();
                })
            })
        },

        /**
         * Handle class for each priority level
         */
        priorityClass: function(index) {
            return{
                'label-feedback-priority-low': this.data_feedbacks[index].PRIORITY == "LOW",
                'label-feedback-priority-medium': this.data_feedbacks[index].PRIORITY == "MEDIUM",
                'label-feedback-priority-urgent': this.data_feedbacks[index].PRIORITY == "URGENT"
            }
        },

        /**
         * Open modal detail feedback
         */
        modalDetailFeedback: function(index) {
            let ac_type = this.aircrafts.filter(d => d.ID === this.data_feedbacks[index].ID_AIRCRAFT);
            
            if(this.task.task_detail === undefined) {
                document.getElementById('det-task-number').innerHTML = "OTHER";
                document.getElementById('det-aircraft').innerHTML = ac_type[0].AIRCRAFT;
            }else {
                document.getElementById('det-task-number').innerHTML = this.task.task_detail[0].TASK_NUMBER;
                document.getElementById('det-aircraft').innerHTML = this.task.task_detail[0].AIRCRAFT;
            }


            document.getElementById('det-ticket-number').innerHTML = this.data_feedbacks[index].TICKET_NUMBER;
            
            document.getElementById('det-feedback-type').innerHTML = this.data_feedbacks[index].FEEDBACK_TYPE;
            document.getElementById('det-feedback-created-at').innerHTML = this.data_feedbacks[index].CREATED_AT.substring(0,19);
            document.getElementById('det-feedback-status').innerHTML = this.data_feedbacks[index].STATUS;
            if(this.data_feedbacks[index].PRIORITY == "LOW") {
                document.getElementById('det-feedback-priority').innerHTML = 'LOW';
                document.getElementById('det-feedback-priority').classList.remove('label-feedback-priority-medium');
                document.getElementById('det-feedback-priority').classList.remove('label-feedback-priority-urgent');
                document.getElementById('det-feedback-priority').className += ' label-feedback-priority-low';
            }

            if(this.data_feedbacks[index].PRIORITY == "MEDIUM") {
                document.getElementById('det-feedback-priority').innerHTML = 'MEDIUM';
                document.getElementById('det-feedback-priority').classList.remove('label-feedback-priority-low');
                document.getElementById('det-feedback-priority').classList.remove('label-feedback-priority-urgent');
                document.getElementById('det-feedback-priority').className += ' label-feedback-priority-medium';
            }

            if(this.data_feedbacks[index].PRIORITY == "URGENT") {
                document.getElementById('det-feedback-priority').innerHTML = 'URGENT';
                document.getElementById('det-feedback-priority').classList.remove('label-feedback-priority-low');
                document.getElementById('det-feedback-priority').classList.remove('label-feedback-priority-medium');
                document.getElementById('det-feedback-priority').className += ' label-feedback-priority-urgent';
            }

            document.getElementById('det-feedback-capt').innerHTML = this.data_feedbacks[index].FEEDBACK;
            if(this.data_feedbacks[index].ATTACHMENT == "") {
                document.getElementById('det-feedback-attachment').innerHTML = '';
            }else {
                document.getElementById('det-feedback-attachment').innerHTML = `
                    <a id="det-feedback-attachment" style="font-size: 13.125px" href="/uploads/feedback/${this.data_feedbacks[index].ATTACHMENT}" download>&#128279; Download Attachment</a>
                `;
            }
            $('#modal-detail-feedback').show();
        },

        modalDetailHistory: function(rev_number, type) {
            this.detail_revision.rows = [];
            this.loading.isLoadingDetailHistory = true;
            document.getElementById('det-rev-number').innerHTML = rev_number;
            document.getElementById('det-rev-type').innerHTML = type + ' QTY';

            axios.get(`/api/task/get_detail_history/${type}/${this.task_number}/${rev_number}`)
            .then( res => {
                if(res.data.success) {
                    this.detail_revision.rows = res.data.data;
                }
                this.loading.isLoadingDetailHistory = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoadingDetailHistory = false;
            })
            $('#modal-detail-history').show();
        },

        /**
         * Show hide feedback
         */
        feedbackHandler: function() {
            this.getFeedback();
            if(this.show == false) {
                this.show = true
            }
        },

        /**
        * Filter feedback
        */
        feedbackHandlerFilter: function(status) {
            this.loading.isLoadingFeed = true;
            axios.post('/api/feedback/get_feedback_by_status', {
                nopeg: this.user.username,
                aircraft_type: "",
                id_status: status
            })
            .then(res => {
                if(this.show == false) {
                    this.show = true;
                }
                this.data_feedbacks = res.data.data
                this.loading.isLoadingFeed = false;

            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoadingFeed = false;
            })
        },

        /**
         * Find history revision
         */
        findHistory: function() {
            this.loading.isLoadingHistory = true ;
            axios.post('/api/task/get_history',{
                mpd: this.serverParams.mpd,
            })
            .then(res => {
                this.history = res.data;
                this.isHistoryFound =  true;
                this.loading.isLoadingHistory = false ;
                this.is_find_history = true;
            })
            .catch(e => {
                console.log("Error: "+e)
                this.loading.isLoadingHistory = false ;
                this.is_find_history = true;
                toastr.error("Undefined error");
            })
        },

        handlePaginationHistory: function(params) {
            this.loading.isLoadingHistory = true;
            return new Promise((resolve, reject) => {
                axios.post('/api/task/get_history', params)
                .then(res => {
                    this.history = res.data;
                    this.history.total = res.data.total
                    resolve();
                })
                .catch(e => {
                    console.log("Error: "+e)
                    toastr.error("Undefined error");
                    this.loading.isLoadingHistory = false;
                    resolve();
                })
            })
        },

        /**
         * Datatable History - Server Side
         */
        updateParams(newProps) {
            this.serverParams = Object.assign({}, this.serverParams, newProps);
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
            this.loadItems();

        },

        // load items is what brings back the rows from server
        loadItems() {
            this.handlePaginationHistory(this.serverParams).then(()=> {
                this.loading.isLoadingHistory = false;
            });
            
        },

        getQueryStringParameter: function(paramToRetrieve) {
            var params = document.URL.split("?")[1].split("&amp;");
            for (var i = 0; i < params.length; i = i + 1) {
                var singleParam = params[i].split("=");
                if (singleParam[0] == paramToRetrieve) return singleParam[1];
            }
        },

        handleModalKnowledge: function() {
            this.form_knowledge.type = "";
            this.form_knowledge.link = "";
            $('#modal-add-knowledge').show();
        },

        addKnowledge: function() {
            if(!this.validationAddKnowledge()) {
                return;
            }

            this.handleButton('btn-save-knowledge', 'load').then(() => {
                axios.post('/api/knowledge/add_knowledge', {
                    task_number : this.task.task_detail[0].TASK_NUMBER,
                    type: this.form_knowledge.type,
                    link:  this.form_knowledge.link,
                    id_user: this.user.id,
                    id_aircraft: this.task.task_detail[0].ID_AIRCRAFT,
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message);
                        this.hideModal("modal-add-knowledge");
                    }else {
                        toastr.warning(res.data.message);
                    }
                    this.handleButton('btn-save-knowledge', 'stop');
                })
                .catch(e => {
                    console.log("Error " +e);
                    toastr.error("Undefined error");
                    this.handleButton('btn-save-knowledge', 'stop');
                })
            });
        },

        validationAddKnowledge: function() {
            if(this.form_knowledge.type == "") {
                toastr.warning('File type cant be empty');
                return;
            }

            if(this.form_knowledge.link == "") {
                toastr.warning('File link cant be empty');
                return;
            }

            return true;
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

        handlerCollapse: function(elem, name) {
            let toogle = ["keyboard_arrow_right", "keyboard_arrow_down"];
            this.panel[name] = !this.panel[name];

            if(this.panel[name]) {
                document.getElementById(elem).innerHTML = toogle[1];
            }else{
                document.getElementById(elem).innerHTML = toogle[0];
            }

            if(name == "history" && !this.is_find_history) {
                this.findHistory();
            }
        },
        
        test: function() {
            alert("ok");
        },     

    }
}

</script>