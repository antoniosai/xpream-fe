<style scoped>

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
                                <h3 class="title">{{ $route.meta.title }}</h3>
                                <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                            </div>
                            
                            <div class="option-box">
                                <div class="option-item">
                                    <span style="white-space: nowrap">Type</span>
                                    <select id="task-type" v-model="form.task_type" @change="onChangeAircraft()">
                                        <option value="">Task Type</option>
                                        <option value="GA">GA</option>
                                        <option value="Non GA">Non GA</option>
                                    </select>
                                </div>
                                <div class="option-item">
                                    <span style="white-space: nowrap">A/C Type</span>
                                    <select id="aircraft-type" v-model="form.aircraft_type" @change="onChangeAircraft()">
                                        <option value="" selected>A/C Type</option>
                                        <option v-for="aircraft in aircrafts" :key="aircraft.ID" v-bind:value="aircraft.ID">{{ aircraft.AIRCRAFT }}</option>
                                    </select>
                                </div>
                                 <div class="option-item">
                                    <span style="white-space: nowrap">Search By</span>
                                    <select v-model="form.search_type" id="category" @change="onChangeAircraft()">
                                        <option  value="" disabled selected>Search By</option>
                                        <option value="mpd">MPD Number</option>
                                        <option value="noorder">Jobcard Number</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                
                                <div class="option-item">
                                    <span style="white-space: nowrap">Ref No</span>
                                    <input  v-model="form.search_data" disabled class="" id="task-number" name="search" placeholder="">
                                </div>
                                <div class="option-item">
                                    <button v-on:click="findTask()">
                                        <i class="material-icons">search</i>
                                        Find
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="row ">
                                <div class="col-md-12">
                                    <div class="div-scroll">
                                        <loading 
                                            :active.sync="loading.isLoading" 
                                            :can-cancel="true"
                                            :is-full-page="true"
                                            :color="loading.color"
                                            :loader="loading.loaderType">
                                        </loading>
                                        <span v-if="!isDataFound" class="subtitle total-project">{{resultMessage}}</span>
                                        <div v-if="isDataFound">
                                            <div style="overflow-x:auto; padding-right: 10px;">
                                                <div  class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left" class="action-header"> 
                                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-desc', 'description')">
                                                                <i id="btn-panel-desc" class='material-icons'>
                                                                    keyboard_arrow_down
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 23px;  "> Description </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    <transition v-show="panel.description" name="panel-collapse">
                                                        <div v-show="panel.description"  class="panel-body">
                                                            <span style="font-size: 9pt; " v-html="task.task_detail[0].DESCRIPTION"></span>
                                                        </div>
                                                    </transition>

                                                </div>

                                                <!-- panel core task -->
                                                <div class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left" class="action-header"> 
                                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-core', 'core')">
                                                                <i id="btn-panel-core" class='material-icons'>
                                                                    keyboard_arrow_right
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 23px;  "> Core Task </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                     <transition v-show="panel.core" name="panel-collapse">
                                                        <div v-show="panel.core" class="panel-body">
                                                            <!-- table zone -->
                                                            <template>
                                                                <div>
                                                                    <vue-good-table
                                                                        :columns="field.zone"
                                                                        :rows="task_detail.zone"
                                                                        styleClass="vgt-table bordered striped"
                                                                        :search-options="{
                                                                            enabled: true,
                                                                            trigger: 'keyup',
                                                                            skipDiacritics: true,
                                                                            placeholder: 'Fill to search'
                                                                        }"
                                                                        :pagination-options="{
                                                                            enabled: true,
                                                                            mode: 'records',
                                                                            perPage: 10,
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
                                                                    <template slot="table-column" slot-scope="props">
                                                                        <span v-if="props.column.label =='Zone'">
                                                                            <div class="action">
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('ACCESS TASK','ACCESS ZONE')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                            <!-- {{props.column.label}} <button v-on:click="modalFeedback('ACCESS TASK','ACCESS ZONE')" class="btn-feedback"><i class="material-icons feedback-icon">forum</i></button> -->
                                                                        </span>
                                                                        <span v-if="props.column.label =='Men'">
                                                                            <div class="action">
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('CORE TASK','MEN')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                            <!-- {{props.column.label}} <button v-on:click="modalFeedback('CORE TASK','MEN')" class="btn-feedback"><i class="material-icons feedback-icon">forum</i></button> -->
                                                                        </span>
                                                                        <span v-if="props.column.label =='Mhrs'">
                                                                            <div class="action" >
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('CORE TASK','MHRS')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                            <!-- {{props.column.label}} <button v-on:click="modalFeedback('CORE TASK','MHRS')" class="btn-feedback"><i class="material-icons feedback-icon">forum</i></button> -->
                                                                        </span>
                                                                        <!-- <span v-else>
                                                                            {{props.column.label}}
                                                                        </span> -->
                                                                    </template>
                                                                    </vue-good-table>

                                                                </div>
                                                            </template>
                                                        </div>
                                                    </transition>
                                                </div>

                                                <!-- panel preparation -->
                                                <div class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left" class="action-header"> 
                                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-prep', 'preparation')">
                                                                <i id="btn-panel-prep" class='material-icons'>
                                                                    keyboard_arrow_right
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 23px;  ">Preparation </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    <transition v-show="panel.preparation" name="panel-collapse">
                                                        <div v-show="panel.preparation" class="panel-body">
                                                            <!-- table preparation -->
                                                                <template>
                                                                <div>
                                                                    <vue-good-table
                                                                        :columns="field.preparation"
                                                                        :rows="task_detail.preparation"
                                                                        styleClass="vgt-table bordered striped"
                                                                        :search-options="{
                                                                            enabled: true,
                                                                            trigger: 'keyup',
                                                                            skipDiacritics: true,
                                                                            placeholder: 'Fill to search'
                                                                        }"
                                                                        :pagination-options="{
                                                                            enabled: true,
                                                                            mode: 'records',
                                                                            perPage: 10,
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
                                                                    <template slot="table-column" slot-scope="props">
                                                                        <span v-if="props.column.label =='Preparation'">
                                                                            <div class="action" >
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('PREPARATION','PREPARATION')"  class="material-icons primary">notes</i>
                                                                            </div>
                                                                            <!-- {{props.column.label}} <button v-on:click="modalFeedback('PREPARATION','PREPARATION')" class="btn-feedback"><i style="" class="material-icons feedback-icon">forum</i></button> -->
                                                                        </span>
                                                                        <span v-if="props.column.label =='Mhrs'">
                                                                            <div class="action">
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('PREPARATION','PREP MHRS')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                            <!-- {{props.column.label}} <button v-on:click="modalFeedback('PREPARATION','PREP MHRS')" class="btn-feedback"><i class="material-icons feedback-icon">forum</i></button> -->
                                                                        </span>
                                                                    </template>
                                                                    </vue-good-table>
                                                                </div>
                                                            </template>
                                                        </div>
                                                    
                                                    </transition>
                                                </div>

                                                <!-- panel reference -->                            
                                                <div class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left" class="action-header"> 
                                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-ref', 'reference')">
                                                                <i id="btn-panel-ref" class='material-icons'>
                                                                    keyboard_arrow_right
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 23px;  ">Reference </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    <transition v-show="panel.reference" name="panel-collapse">
                                                        <div v-show="panel.reference" class="panel-body">
                                                            <!-- table preparation -->
                                                                <template>
                                                                <div>
                                                                    <vue-good-table
                                                                        :columns="field.reference"
                                                                        :rows="task_detail.reference"
                                                                        styleClass="vgt-table bordered striped"
                                                                        :search-options="{
                                                                            enabled: true,
                                                                            trigger: 'keyup',
                                                                            skipDiacritics: true,
                                                                            placeholder: 'Fill to search'
                                                                        }"
                                                                        :pagination-options="{
                                                                            enabled: true,
                                                                            mode: 'records',
                                                                            perPage: 10,
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
                                                                    <template slot="table-column" slot-scope="props">
                                                                        <span v-if="props.column.label =='Reference Information'">
                                                                            <div class="action" >
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('REFERENCE','REF INFO')"  class="material-icons primary">notes</i>
                                                                            </div>
                                                                            <!-- {{props.column.label}} <button v-on:click="modalFeedback('PREPARATION','PREPARATION')" class="btn-feedback"><i style="" class="material-icons feedback-icon">forum</i></button> -->
                                                                        </span>
                                                                        <span v-else-if="props.column.label =='Men'">
                                                                            <div class="action">
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('REFERENCE','REF MEN')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                        </span>
                                                                        <span v-else-if="props.column.label =='MH'">
                                                                            <div class="action">
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('REFERENCE','REF MH')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                        </span>
                                                                        <span v-else>
                                                                            {{props.column.label}}
                                                                        </span>
                                                                    </template>
                                                                    </vue-good-table>
                                                                </div>
                                                            </template>
                                                        </div>
                                                    
                                                    </transition>
                                                </div>

                                                <!-- panel access -->
                                                <div class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left" class="action-header"> 
                                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-access', 'access')">
                                                                <i id="btn-panel-access" class='material-icons'>
                                                                    keyboard_arrow_right
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 23px;  ">Access </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    <transition v-show="panel.access" name="panel-collapse">
                                                        <div v-show="panel.access" class="panel-body">

                                                            <!-- table access -->
                                                            <template>
                                                                <div>
                                                                    <vue-good-table
                                                                        :columns="field.access"
                                                                        :rows="task_detail.access"
                                                                        styleClass="vgt-table bordered striped"
                                                                        :search-options="{
                                                                            enabled: true,
                                                                            trigger: 'keyup',
                                                                            skipDiacritics: true,
                                                                            placeholder: 'Fill to search'
                                                                        }"
                                                                        :pagination-options="{
                                                                            enabled: true,
                                                                            mode: 'records',
                                                                            perPage: 10,
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
                                                                    <template slot="table-column" slot-scope="props">
                                                                        <span v-if="props.column.field =='ZONE'">
                                                                            <div class="action" >
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('ACCESS TASK','ACCESS ZONE')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                        </span>
                                                                        <span v-else-if="props.column.field =='ACCESS'">
                                                                            <div class="action" >
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('ACCESS TASK','ACCESS PANEL')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                        </span>
                                                                        <span v-else-if="props.column.field =='MH'">
                                                                            <div class="action" >
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('ACCESS TASK','ACCESS MHRS')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                        </span>
                                                                        <span v-else>
                                                                            {{props.column.label}}
                                                                        </span>
                                                                    </template>
                                                                    </vue-good-table>
                                                                </div>
                                                            </template>
                                                        </div>
                                                    </transition>
                                                </div>

                                                <!-- panel material -->
                                                <div class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left" class="action-header"> 
                                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-material', 'material')">
                                                                <i id="btn-panel-material" class='material-icons'>
                                                                    keyboard_arrow_right
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 23px;  ">Material & Tools </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    <transition v-show="panel.material" name="panel-collapse">
                                                        <div v-show="panel.material" class="panel-body">
                                                            <!-- table material -->
                                                            <template>
                                                                <div>
                                                                    <vue-good-table
                                                                        :columns="field.material"
                                                                        :rows="task_detail.material"
                                                                        styleClass="vgt-table bordered striped"
                                                                        :search-options="{
                                                                            enabled: true,
                                                                            trigger: 'keyup',
                                                                            skipDiacritics: true,
                                                                            placeholder: 'Fill to search',
                                                                        }"
                                                                        :pagination-options="{
                                                                            enabled: true,
                                                                            mode: 'records',
                                                                            perPage: 10,
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
                                                                    <template slot="table-column" slot-scope="props">
                                                                        <span v-if="props.column.label =='P/N'">
                                                                            <div class="action" >
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('MATERIAL & TOOLS','PART NUMBER')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                            <!-- {{props.column.label}} <button v-on:click="modalFeedback('MATERIAL & TOOLS','PART NUMBER')"  class="btn-feedback"><i class="material-icons feedback-icon">forum</i></button> -->
                                                                        </span>
                                                                        <span v-else-if="props.column.label =='QTY'">
                                                                            <div class="action" >
                                                                                {{props.column.label}}
                                                                                <i v-on:click="modalFeedback('MATERIAL & TOOLS','PART QTY')" class="material-icons primary">notes</i>
                                                                            </div>
                                                                            <!-- {{props.column.label}} <button v-on:click="modalFeedback('MATERIAL & TOOLS','PART QTY')" class="btn-feedback"><i class="material-icons feedback-icon">forum</i></button> -->
                                                                        </span>
                                                                        <span v-else>
                                                                            {{props.column.label}}
                                                                        </span>
                                                                        
                                                                    </template>
                                                                    </vue-good-table>
                                                                </div>
                                                            </template>
                                                        </div>
                                                    </transition>
                                                                <!-- table zone -->
                                                </div>

                                                <!-- panel safety -->
                                                <div class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left" class="action-header"> 
                                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-safety', 'safety')">
                                                                <i id="btn-panel-safety" class='material-icons'>
                                                                    keyboard_arrow_right
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 23px;  ">Safety Precaution </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    <transition v-show="panel.safety" name="panel-collapse">
                                                        <div v-show="panel.safety" class="panel-body">
                                                        </div>   
                                                    </transition>
                                                </div>

                                                <!-- panel history -->
                                                <div class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left" class="action-header"> 
                                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-history', 'history')">
                                                                <i id="btn-panel-history" class='material-icons'>
                                                                    keyboard_arrow_right
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 23px;  ">History </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                     <transition v-show="panel.history" name="panel-collapse">
                                                        <div v-show="panel.history" class="panel-body">
                                                            <!-- table history -->
                                                            <div style="box-sizing: border-box; position: relative; min-height: 20px;">
                                                                <div>
                                                                    <loading 
                                                                        :active.sync="loading.isLoadingHistory" 
                                                                        :can-cancel="false"
                                                                        :is-full-page="false"
                                                                        :color="loading.color"
                                                                        :loader="loading.loaderType">
                                                                    </loading>
                                                                </div>
                                                                <template>
                                                                    <div>
                                                                        <vue-good-table v-if="isHistoryFound"
                                                                            :columns="field.history"
                                                                            :rows="history.data"
                                                                            styleClass="vgt-table bordered striped"
                                                                            mode="remote"
                                                                            :search-options="{
                                                                                enabled: true,
                                                                                trigger: 'enter',
                                                                                skipDiacritics: true,
                                                                                placeholder: 'Fill and enter to search'
                                                                            }"
                                                                            @on-search="onColumnSearch"
                                                                            @on-page-change="onPageChange"
                                                                            @on-sort-change="onSortChange"
                                                                            @on-column-filter="onColumnFilter"
                                                                            @on-per-page-change="onPerPageChange"
                                                                            :totalRows="history.total"
                                                                            :pagination-options="{
                                                                                enabled: true,
                                                                                mode: 'pages',
                                                                                perPage: serverParams.perPage,
                                                                                position: 'bottom',
                                                                                perPageDropdown:  datatable.perPage,
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
                                                                            <span v-if="props.column.field == 'JC'">
                                                                                <div class="flex-middle" v-on:click="modalDetailHistory(props.formattedRow['REVNR'], 'JC')">
                                                                                    {{props.formattedRow[props.column.field]}}
                                                                                    <i class="material-icons warning sync" style="margin-left:10px">playlist_add</i>
                                                                                </div>
                                                                            </span>
                                                                            <span v-else-if="props.column.field == 'MDR'">
                                                                                <div class="flex-middle" v-on:click="modalDetailHistory(props.formattedRow['REVNR'], 'MDR')">
                                                                                    {{props.formattedRow[props.column.field]}}
                                                                                    <i class="material-icons warning sync" style="margin-left:10px" >playlist_add</i>
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
                                                        </div>
                                                     </transition>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="is-col is-25">
                    <div class="card">
                        <div class="card-header no-border">
                            <div class="title-area">
                                <h3 class="title">Knowledge Management</h3>
                                <span class="subtitle total-project">Click for details</span>
                            </div>
                        </div>
                        <!-- <div class="card-content"></div> -->
                        <div class="card-content">
                            <div>
                                <div v-if="isDataFound">
                                    <button v-on:click="handleModalKnowledge()" style="width: 100%">
                                        Add New
                                    </button>
                                    <div class="div-scroll-2 fix-div-scroll">
                                        <div v-for="list in knowledge" :key="list.ID">
                                            <div v-if="list.TYPE == 'Video'" class="card-block">
						                        <iframe scrolling="no" :src="list.LINK" width="100%" height="170px" allowfullscreen></iframe>
                                            </div>
                                            <div v-if="list.TYPE == 'Image'" class="card-block card-image">
                                                <img style="height: 170px; width: 100%"  v-img :src="list.LINK"  alt="">
                                            </div>
                                            <div v-if="list.TYPE == 'Other'" class="card-block card-image">
                                                <a :href="list.LINK" download target="_blank">
                                                    <div class="box-knowledge-other">
                                                        <i class='material-icons'>
                                                            cloud_download
                                                        </i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="is-row">
                <transition v-show="show" name="slide">
                    <div v-show="show" class="is-col is-25 feedback-position">
                        <div class="card">
                            <loading 
                                :active.sync="loading.isLoadingFeed" 
                                :can-cancel="true"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>
                            <div class="card-header no-border">
                                <div class="title-area">
                                    <h3 class="title">Feedback Status</h3>
                                    <span class="subtitle total-project">Click ticket number for details</span>
                                </div>
                                <div class="option-box">
                                    <span style="margin-top: -20px; cursor: pointer;" v-on:click="show = false" class="clickable pull-right"><i class="material-icons">menu</i></span>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="div-scroll fix-div-scroll">
                                    <div v-for="(data_feedback, index) in data_feedbacks" :key="data_feedback.ID">
                                        <div class="box-feedback" style="padding: 4px 0px 15px 0px;">
                                            <h5 v-on:click="modalDetailFeedback(index)" class="label-feedback-head">
                                                <span> {{data_feedback.TICKET_NUMBER}} </span> - 
                                                [{{data_feedback.FEEDBACK_TYPE}}]
                                            </h5>
                                            <small class="label clickable label-feedback-type">{{data_feedback.STATUS}}</small>
                                            <small v-if="data_feedback.PRIORITY == 'LOW'" class="label clickable label-feedback-priority" :class="priorityClass(index)">{{data_feedback.PRIORITY}}</small>
                                            <small v-if="data_feedback.PRIORITY == 'MEDIUM'" class="label clickable label-feedback-priority" :class="priorityClass(index)">{{data_feedback.PRIORITY}}</small>
                                            <small v-if="data_feedback.PRIORITY == 'URGENT'" class="label clickable label-feedback-priority" :class="priorityClass(index)">{{data_feedback.PRIORITY}}</small>
                                            <small class="label label-feedback-time"><b>{{data_feedback.CREATED_AT.substring(0, 19)}}</b></small>
                                        </div>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
                <div class="is-col is-75">
                </div>                
            </div>

            <!-- Feedback Modal-->
            <div class="modal-box" id="modal-feedback">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-feedback')"></span>
                    <!-- <form @submit.prevent="addFeedback"> -->
                        <div class="modal-header">
                            <h2 class="title">Add Feedback</h2>
                        </div>

                        <div class="modal-body" style="position: relative">
                            <center><b> <h4 id="feedback-head" style="padding-bottom: 15px;"></h4> </b></center>
                            <hr>
                            <input id="feedback-id-task" v-model="feedback.id_task" type="hidden" name="id_task">
                            <div class="form-item">
                                <div class="is-row">
                                    <div class="is-col is-30"> 
                                        <label>A/C Type</label>
                                    </div>
                                    <div class="is-70"> 
                                        <input id="feedback-ac-type" disabled  type="text">
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-item">
                                <div class="is-row">
                                    <div class="is-col is-30"> 
                                        <label>Reference</label>
                                    </div>
                                    <div class="is-70"> 
                                        <input id="feedback-reference" disabled type="text">
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-item">
                                <div class="is-row">
                                    <div class="is-col is-30"> 
                                        <label>Feedback Type</label>
                                    </div>
                                    <div class="is-70"> 
                                        <input id="feedback-type" v-model="feedback.feedback_type" disabled type="text">
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-item">
                                <div class="is-row">
                                    <div class="is-col is-30"> 
                                        <label>Priority</label>
                                    </div>
                                    <div class="is-70">
                                        <div class="is-row">
                                            <div class="is-col is-70">
                                                <input id="prior-feedback"  v-model="feedback.priority"  v-on:change="changePriorCapt()" style="margin-top: -6px;" type="range" min="1" max="3" step="1" value="1">
                                            </div>
                                            <div class="is-col is-30">
                                                <span id="prior-caption" style="color: green">LOW</span>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-item">
                                <div class="is-row">
                                    <div class="is-col is-30"> 
                                        <label>Attachment</label>
                                    </div>
                                    <div class="is-70"> 
                                        <input style="all: unset"  id="file" class="form-control" ref="file" type="file" v-on:change="onChangeFileUpload()">
                                    </div>
                                </div>
                                <small style="color: red; font-size: 8pt;">*(Maximum upload file size: 2 MB)</small>

                            </div>
                             <div class="form-item">
                                 <textarea v-model="feedback.feedback" placeholder="Insert your comment or feedback here" rows="5"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-feedback')">Cancel</button>
                            <button v-on:click="addFeedback()" type="button" class="button" id="btn-save-feedback"> Save</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- / Feedback Modal -->

            <!-- Detail Feedback Modal-->
            <div class="modal-box" id="modal-detail-feedback">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-detail-feedback')"></span>
                        <div class="modal-header">
                            <h2 class="title">Feedback</h2>
                        </div>

                        <div class="modal-body" style="position: relative">
                            <table>
                                <tr>
                                    <td width="24%" class="default-table"> Ticket Number</td>
                                    <td class="default-table"> : </td>
                                    <td width="74%" class="default-table">
                                        <b><span id="det-ticket-number"></span></b>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="24%" class="default-table"> Task Reference</td>
                                    <td class="default-table"> : </td>
                                    <td width="74%" class="default-table">
                                        <b><span id="det-task-number"></span></b>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="default-table">Aircraft Type</td>
                                    <td class="default-table"> : </td>
                                    <td class="default-table">
                                        <b><span id="det-aircraft"></span></b>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="default-table">Feedback Type</td>
                                    <td class="default-table"> : </td>
                                    <td class="default-table">
                                        <b><span id="det-feedback-type"></span></b>
                                    </td>
                                </tr>
                                 <tr>
                                    <td class="default-table">Created At</td>
                                    <td class="default-table"> : </td>
                                    <td class="default-table">
                                        <b><span id="det-feedback-created-at"></span></b>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="default-table">Status</td>
                                    <td class="default-table"> : </td>
                                    <td class="default-table">
                                        <b><span id="det-feedback-status"></span></b>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="default-table">Priority</td>
                                    <td class="default-table"> : </td>
                                    <td class="default-table">
                                        <small id="det-feedback-priority"  class="label clickable label-feedback-priority"></small>
                                    </td>
                                </tr>
                            </table>
                            <br>
                            <div>
                                <b>Feedback</b>
                                <p id="det-feedback-capt" style="font-size: 13.125px"></p>
                            </div>
                            <div id="det-feedback-attachment"></div>

                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-detail-feedback')">Close</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- / Detail Feedback Modal -->

            <!-- Detail History Modal -->
            <div class="modal-box" id="modal-detail-history">
                <div class="modal md">
                    <span class="close" v-on:click="hideModal('modal-detail-history')"></span>
                        <div class="modal-header">
                            <h2 class="title">Detail Revision</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <div>
                                <loading 
                                    :active.sync="loading.isLoadingDetailHistory" 
                                    :can-cancel="false"
                                    :is-full-page="false"
                                    :color="loading.color"
                                    :loader="loading.loaderType">
                                </loading>
                            </div>
                            <table>
                                <tr>
                                    <td width="18%" class="default-table"> Revision Number</td>
                                    <td class="default-table"> : </td>
                                    <td width="81%" class="default-table">
                                        <b><span id="det-rev-number"></span></b>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="18%" class="default-table"> Related Type</td>
                                    <td class="default-table"> : </td>
                                    <td width="81%" class="default-table">
                                        <b><span id="det-rev-type"></span></b>
                                    </td>
                                </tr>
                            </table>
                            <br>
                            <template>
                                <div>
                                    <vue-good-table
                                        :columns="detail_revision.field"
                                        :rows="detail_revision.rows"
                                        styleClass="vgt-table bordered striped"
                                        :search-options="{
                                            enabled: true,
                                            trigger: 'keyup',
                                            skipDiacritics: true,
                                            placeholder: 'Fill to search'
                                        }"
                                        :pagination-options="{
                                            enabled: true,
                                            mode: 'records',
                                            perPage: 10,
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
                                    </vue-good-table>

                                </div>
                            </template>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-detail-history')">Close</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- / Detail History Modal -->

            <!-- Modal add Knowledge -->
            <div class="modal-box" id="modal-add-knowledge">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-add-knowledge')"></span>
                        <div class="modal-header">
                            <h2 class="title">Add Knowledge Management</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <div class="form-item">
                                <label>File Type <span class="is-req">*</span></label>
                                <select v-model="form_knowledge.type" name="" id="">
                                    <option selected disabled value="">Link Type</option>
                                    <option value="Video">Video</option>
                                    <option value="Image">Image</option>
                                    <option value="Other">Other</option>    
                                </select>
                                
                            </div>
                            <div class="form-item">
                                <label>File Link <span class="is-req">*</span> <span class="is-desc"></span></label>
                                <textarea  v-model="form_knowledge.link" placeholder="Please enter a valid link"  name="" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-add-knowledge')">Close</button>
                            <button v-on:click="addKnowledge()" class="button"  type="button" id="btn-save-knowledge"> Save</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /Modal add knowledge -->

            <!-- Floating -->
            <fab
                :position="position"
                :bg-color="bgColor"
                :icon-size="size"
                :actions="fabActions"
                :main-icon="mainIcon"
                :enable-rotation="true"
                @feedbackHandler="feedbackHandler"
                @feedbackHandlerStatusOpen="feedbackHandlerFilter(1)"
                @feedbackHandlerStatusProgress="feedbackHandlerFilter(2)"
                @feedbackHandlerStatusClose="feedbackHandlerFilter(3)"
            >
            </fab>
            <!-- / Floating -->
        </div>
    </div>

</template>

<script>


import swal from 'sweetalert'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import fab from 'vue-fab'

// datatable fields
import FieldHistory from "./datatable/FieldHistory.js";
import FieldAccess from "./datatable/FieldAccess.js";
import FieldMaterial from "./datatable/FieldMaterial.js";
import FieldZone from "./datatable/FieldZone.js";
import FieldPreparation from "./datatable/FieldPreparation.js";
import FieldDetailRevision from "./datatable/FieldDetailRevision.js";
import FieldReference from "./datatable/FieldReference.js";

//vue-good
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

import VueImg from 'v-img';

import Vue from 'vue'
Vue.use(VueImg);

export default {

    components: {
        Loading,
        fab,
        VueGoodTable,
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'))
        }
    },

    data: () => ({
        totalRecords: 0,
        rows: [],
        detail_revision: {
            rows: [],
            field: FieldDetailRevision
        },
        serverParams: {
            columnFilters: {
            },
            sort: {
                type: '',
                field: ''
            },
            page: 1, 
            perPage: 10,
            mpd: '55-804-00',
            searchTerm: ''
        },

        knowledge: [],
        bgColor: 'blue',
        position: 'top-right',
        size: 'small',
        mainIcon: 'chat',
        fabActions: [
            {
                name: 'feedbackHandlerStatusClose',
                icon: 'assignment_turned_in',
                tooltip: 'Close',
                color: '#07A753'
            },
            {
                name: 'feedbackHandlerStatusProgress',
                icon: 'assignment_returned',
                tooltip: 'Progress',
                color: '#FFC043'
            },
                      {
                name: 'feedbackHandlerStatusOpen',
                icon: 'assistant',
                tooltip: 'Open',
                color: '#E13247'
            },
            {
                name: 'feedbackHandler',
                icon: 'list',
                tooltip: 'All Feedback',
                color: '#00A3B6'
            },

        ],

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
        field: {
            access: FieldAccess,
            material: FieldMaterial,
            zone: FieldZone,
            preparation: FieldPreparation,
            history: FieldHistory,
            reference: FieldReference
        },
        datatable: {
            perPage: [10, 50, 100],
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
    }),

    mounted() {
        this.initAircraft();
        this.getFeedback();
    },

    watch: {},

    methods: {
        /**
         * Show Aircraft Type to select option whene page loaded
         */
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
            this.loading.isLoadingFeed = true;
            axios.post('/api/feedback/get_feedback', {
                nopeg: this.user.username,
                aircraft_type:"",
            })
            .then(res => {
                this.data_feedbacks = res.data.data
                this.loading.isLoadingFeed = false;

            })
            .catch(e => {
                toastr.error("Undefined error");
                this.loading.isLoadingFeed = false;
                console.log("Error: "+e)
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
        }
    }
}

</script>