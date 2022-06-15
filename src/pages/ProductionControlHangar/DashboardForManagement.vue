<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
    ::v-deep .google-visualization-tooltip{
        position:absolute !important; top:0 !important;right:0 !important; z-index:+1;
    } 
    /*FAB*/
    .fab {
        position: fixed;
        width: 40px;
        right: 2%;
        top: 120px;
        margin-left: -33px;
        z-index: 100;
    }

    .fab:hover .fab-buttons {
        opacity: 1;
        visibility: visible;
    }

    .fab:hover .fab-buttons__link {
        transform: scaleY(1) scaleX(1) translateY(-16px) translateX(0px);
    }

    .fab-action-button:hover + .fab-buttons .fab-buttons__link:before {
        visibility: visible;
        opacity: 1;
        transform: scale(1);
        transform-origin: right center 0;
        transition-delay: 0.3s;
    }

    .fab-action-button {
        position: absolute;
        bottom: 0;
        display: block;
        width: 55px;
        height: 55px;
        background-color: red;
        border-radius: 50%;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }

    .fab-buttons {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 50px;
        list-style: none;
        margin: 0;
        padding: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.2s;
    }

    .fab-action-button__icon {
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAUklEQVRIx2NgGAWjABf4z/u/Hgp5KTNI6j8MSI0aRGWD/iv8d4BASg2qh+kbNWgQGPQ/Epr3HCg1aBOUXz9q0KhBOA1ygBX2uAp/IhPkKBhZAADf6MSoblJDqAAAAABJRU5ErkJggg==") center no-repeat;

    }

    .fab-buttons__item {
        display: block;
        text-align: center;
        margin: 12px 0;
    }

    fab-buttons__link {
        display: inline-block;
        width: 40px;
        height: 40px;
        text-decoration: none;
        background-color: red;
        border-radius: 50%;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        transform: scaleY(0.5) scaleX(0.5) translateY(0px) translateX(0px);
        -moz-transition: .3s;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
    }
    
    [data-tooltip]:before {
        top: 10%;
        margin-top: -30px;
        font-weight: 600;
        border-radius: 2px;
        background: #585858;
        color: #fff;
        content: attr(data-tooltip);
        font-size: 17px;
        text-decoration: none;
        visibility: hidden;
        opacity: 0;
        padding: 4px 7px;
        margin-right: 12px;
        position: absolute;
        transform: scale(0);
        right: 100%;
        white-space: nowrap;
        transform-origin: top right;
        transition: all .3s cubic-bezier(.25, .8, .25, 1);
    }

    [data-tooltip]:hover:before {
        visibility: visible;
        opacity: 1;
        transform: scale(1);
        transform-origin: right center 0;
    }
    /*END FAB -----------------------------------------------------*/



    .brandxpream {
        font-family: 'Russo One', sans-serif;
        font-size:19px;
    }

    .darkmode{
        background-color: rgb(8, 27, 60);
        color:rgb(149, 163, 210);
    }

    ::v-deep .mscontent::-webkit-scrollbar {
        /* Hide scrollbar for Chrome, Safari and Opera */
        display: none;
    }

        /* Hide scrollbar for IE, Edge and Firefox */
    ::v-deep.mscontent {
        padding:0px;
        white-space:nowrap;        
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    ::v-deep .card-dashboard-item {
        border-radius: 5px !important;
        padding-top: 7px;
        padding-left: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        margin-bottom: 15px;
    }

    ::v-deep .box-dashboard-item {
        width: 100%; 
        padding: 0px 5px 0px 0px !important;
    }

    ::v-deep .card-header.bb {
        padding: 0px 22px 7px 22px !important;
        border-bottom: 0px solid rgb(187, 181, 181);
        margin: 0 -15px 15px;
    }

    ::v-deep .card-dashboard-head {

        font-weight: bold;
        text-align: left !important;
        cursor: pointer;
        /*border: 1px solid #c7c7c7;*/
        padding: 0px 5px 0px 5px;
        /*border-radius: 8px;
        font-weight: bold;*/
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.02);   
        transition: 0.5s;     
    }

    ::v-deep .card-dashboard-head:hover {
        border: 1px solid #10cb69;     
    }    

    ::v-deep .card-dashboard-head-small {
        padding-top: 2px;
        font-size: 7pt;
        text-align: right !important;
    }

    ::v-deep .progress-default {
        width: 100%;
        height: 6px;
        background-color: #C5E4E1;
        margin-top: -15px;
    }

    ::v-deep .progress-run {
        width: 0%;
        height: 6px;
        background-color: #0E988E;
        margin-top: -6px;
    }

    ::v-deep .progress-run-blank {
        width: 0%;
        height: 6px;
        background-color: #ffffff00;
        margin-top: -6px;
    }
    ::v-deep .box-detail-dashboard {
        padding: 0px 15px 0px 5px;
        margin-bottom: -10px;
    }

    ::v-deep .box-progress-circle {
        padding-top: 5px;
        text-align: center;
    }

    ::v-deep .progress-circle-text {
        font-size: 9pt;
        font-weight: bold;
        color: #0E988E;
    }

    ::v-deep .box-data-dashboard {
        width: 100%;
        padding: 0px 5px 0px 0px;
    }

    ::v-deep .data-dashboard-day-status {
        font-size: 7pt;
        letter-spacing: 0.01px;
        word-spacing: 1px;
        text-align: center;
        
    }

    ::v-deep .data-dashboard-code{
        font-size: 7pt;
        letter-spacing: 0.01px;
        text-align: left;
        margin-right: -7px;
    }

    ::v-deep .data-dashboard-box-card {
        border: 1px solid #c7c7c7;
        font-size: 6.5pt;
        padding: 0px 5px 0px 5px;
        /*border-radius: 8px;
        font-weight: bold;*/
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.02);
    }

    ::v-deep .data-dashboard-box-card-blank {
        font-size: 6.5pt;
        padding: 0px 5px 0px 5px;
        /*border-radius: 8px;
        font-weight: bold;*/
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.02);
    }

    ::v-deep .data-dashboard-box-card.darkmode {
        border: 1px solid #082b69; 
    }

    ::v-deep .box-click {
        cursor: pointer !important;
    }

    ::v-deep .data-dashboard-main-type {
        font-size: 7pt !important;
        letter-spacing: 0.1px;
        text-align: right !important;
    }
    ::v-deep .data-dashboard-project-owner {
        font-size: 7pt;
        letter-spacing: 0.1px;
    }

    ::v-deep .dashboard-separator {
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        width: 100%;
        height: 20px;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.02);
        background-color: #F3F7FB;
        text-align: center;
        cursor: pointer;
    }

    ::v-deep .dashboard-separator.darkmode {
        border-top: 1px solid #082b69;
        border-bottom: 1px solid #082b69;
    }
    ::v-deep .dashboard-separator-preparation {
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        width: 100%;
        height: 20px;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.02);
        text-align: center;
        cursor: pointer;
    }

    ::v-deep .box-detail-progress-circle {
        text-align: center;
    }

    ::v-deep .box-detail-progress-circle span{
        font-size: 7pt;
        letter-spacing: 0.1px;
        word-spacing: 0.1px;
    }

    ::v-deep .dashboard-detail-circle-progress {
        padding-top: 2px;
    }

    ::v-deep .dashboard-info {
        font-size: 7pt;
        padding-left: 5px;
        padding-right: 5px;
    }

    ::v-deep .dashboard-info.darkmode {
        background-color: rgb(8, 27, 60);
    }

    ::v-deep .dashboard-info-item{
        text-align: left;
        padding-top: 1.5px;
    }

    ::v-deep .dashboard-info-item-highlight{
        color: white;
        padding: 1px 5px 2px 5px;
        border-radius: 5px;
    }

    ::v-deep .primary {
        background-color: #0E988E;
    }

     ::v-deep .warning {
        background-color: #ff9635;
    }

    ::v-deep .success {
        background-color: #28a745; 
    }

    ::v-deep .box-dashboard-content-highlight {
        padding: 5px;
    }

    ::v-deep .card-header-fix {
        margin: 0 -15px 15px;
        padding: 0px 15px 0px 0px;
        border-bottom: 1px solid #eaeaea;
        font-size: 7pt;
    }

    ::v-deep .dashboard-tabs {
        text-align: center;
        width: 100%;
        border: 1px solid #bbbbbb;
        /*border-radius: 5px;*/
        /*padding: 2px 0px 6px 0px;*/
        background-color: white;
        /*margin-top: 5px;*/
        cursor: pointer;
    }

    ::v-deep .dashboard-tabs.darkmode {
        border: 1px solid #6d6d6d;
        background-color: rgb(8, 27, 60);
        cursor: pointer;
    }

    ::v-deep .box-card-list-item-highlight {
        font-size: 8pt;
    }

    ::v-deep .card-list-item-highlight {
        border-bottom: 1px solid #eaeaea;
        margin-left: -15px;
        margin-right: -15px;
    }

    ::v-deep .card-list-item-highlight-row {
        padding: 5px 10px 0px 10px;
    }

    ::v-deep .dashboard-info-item-default {
        text-align: center; 
        background-color: #F8D3D1; 
        margin-left: -5px; 
        margin-top: 1.1px;
        color: rgb(100, 100, 100);
        height: 17px;
        width: 109%;
    }

    ::v-deep .dashboard-info-item-text {
        text-align: center; 
        margin-left: -5px; 
        margin-top: 1.1px;
        color: rgb(100, 100, 100);
        height: 17px;
        width: 109%;
    }

     ::v-deep .dashboard-info-item-progress {
        text-align: center; 
        background-color: #F96C67; 
        margin-left: -7px; 
        margin-top: 1px;
        height: 16px;
        width: 30%;
    }

    ::v-deep .progress {
        margin-top: -20px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 5px;
    }

    ::v-deep .default {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    ::v-deep .progress-text {
        margin-top: -40px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    ::v-deep .multiselect {
        font-size: 0.9375em !important;
        height: 34px !important;
    }

    ::v-deep .multiselect__placeholder {
        font-size: 0.9375em !important;
    }

    ::v-deep .multiselect__input {
        font-size: 0.9375em !important;
        height: 30px !important;
    }

    ::v-deep .multiselect__select {
        height: 34px !important;
        padding: 10px 8px !important;
    }

    ::v-deep .multiselect__tags {
        min-height: 34px !important;
        padding: 3px 40px 0 8px !important;
    }

    ::v-deep .multiselect__placeholder {
        margin-bottom: unset !important;
    }

    ::v-deep .is-custom-row > .is-col {
        margin-left: 5px !important;
    }

    ::v-deep .is-custom-row {
        margin-bottom: unset !important;
    }

    .switchprio {
        position: relative;
        width: 48px !important;
        height: 24px !important;
        -webkit-appearance: none;
        background: #eaeaea;
        outline: none;
        border-radius: 20px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        transition: 0.3s !important;
        cursor: pointer;
        border: none !important;
    }
    .switchprio:hover, .switchprio:focus, .switchprio:disabled {
        background: #eaeaea !important;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
    }
    .switchprio:hover:checked, .switchprio:focus:checked, .switchprio:disabled:checked {
        background: #49ff55 !important;
    }
    .switchprio:before {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        top: 0;
        left: 0;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
        transition: 0.3s;
        }
    .switchprio:checked:before {
        left: 24px;
    }
    .switchprio:focus {
        border: none;
    }

    .switchprio:checked {
        background: #49ff55;
    }    
</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body">
        <fullscreen ref="fullscreen" @change="fullscreenChange" :background="dark_mode=='darkmode'?'#030f24':'#fff'">
            <!-- card in progerss -->
            <!--div class="clearfix">
                <div class="pull-right">
                    <div style="padding-bottom: 0px; text-align: right;">
                        <div class="is-row is-custom-row">
                            <div class="is-col is-10">
                                <select v-model="filter.airframe_cat">
                                    <option value="">All Aircraft Category</option>
                                    <option value="Narrow Body">Narrow Body</option>
                                    <option value="Wide Body">Wide Body</option>
                                </select>
                            </div>
                            <div class="is-col is-10">
                                <select v-on:change="handlerFilterLine()" v-model="filter.hangar">
                                    <option  value="" selected>All Hangar</option>
                                    <option v-for="hangar in hangars" :key="hangar.ID"  :value="hangar.id" >{{hangar.name + ' - ' + hangar.description}}</option>
                                </select>
                            </div>
                            <div class="is-col is-10">
                                <select v-model="filter.line">
                                    <option  value="" selected>All Line</option>
                                    <option v-for="line in lines" :key="line.id"  :value="line.id" >{{line.line_name + ' ' + line.description}}</option>
                                </select>
                            </div>
                            <div class="is-col is-5">
                                <select v-model="filter.type">
                                    <option value="">All Group</option>
                                    <option value="GA">GA</option>
                                    <option value="NGA">NGA</option>
                                </select>
                            </div>
                            <div class="is-col-20">
                                <multiselect 
                                    v-model="filter.customer" 
                                    :options="ac_regs" 
                                    :multiple="true" 
                                    :close-on-select="false" 
                                    :clear-on-select="false" 
                                    :preserve-search="true" 
                                    placeholder="Customer" 
                                    label="customer" 
                                    track-by="customer" 
                                    :preselect-first="false"
                                    :taggable="true"
                                    @tag="addCustomerTag">
                                    <template slot="selection" slot-scope="{ values, isOpen }"><span style="font-size: 0.9375em; margin-top: 1px;" class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                                </multiselect>
                            </div>
                            <div class="is-col-10">
                                <multiselect 
                                    v-model="filter.ac_reg" 
                                    :options="ac_regs" 
                                    :multiple="true" 
                                    :close-on-select="false" 
                                    :clear-on-select="false" 
                                    :preserve-search="true" 
                                    placeholder="A/C Reg" 
                                    label="ac_reg" 
                                    track-by="ac_reg" 
                                    :preselect-first="false"
                                    :taggable="true"
                                    @tag="addAircraftRegTag">
                                    <template slot="selection" slot-scope="{ values, isOpen }"><span style="font-size: 0.9375em; margin-top: 1px;" class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                                </multiselect>
                            </div>
                            <div class="is-col is-20">
                                <button v-on:click="handlerFilter()">
                                    <i class='material-icons'>
                                        search
                                    </i> Filter
                                </button>
                                <button v-on:click="handlerResetFilter()" class="button is-danger">
                                    <i class='material-icons'>
                                        clear
                                    </i> Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <loading style="margin-top: 50px;"
                :active.sync="loading.isLoading" 
                :can-cancel="false"
                :is-full-page="false"
                :color="loading.color"
                :loader="loading.loaderType">
            </loading-->
            <transition name="fade">
                <div class="is-row" v-show="!controlpanel_show" style="margin-bottom: 0px;">
                    <div class="is-col is-10">
                        <button v-on:click="controlpanel_show = true" class="button is-default" style="padding: 3px 20px; margin: 0px 0px 10px 0px; color: black"><i class='material-icons'>settings</i></button>                                             
                    </div>
                    <div class="is-col is-40"> 
                            <div class="is-row" style="margin-bottom: 0px;">
                                <div class="is-col is-90"> 
                                    <multiselect 
                                        v-model="filter.customer" 
                                        :options="customers" 
                                        :multiple="true" 
                                        :close-on-select="true" 
                                        :clear-on-select="true" 
                                        :preserve-search="true" 
                                        placeholder="Customer" 
                                        label="cust_name" 
                                        track-by="cust_name" 
                                        :preselect-first="false"
                                        :show-labels="false"
                                        :taggable="true"
                                        @tag="addCustomerTag">
                                    </multiselect>
                                </div>
                            </div>
                    </div>
                    <div class="is-col is-20" style="margin-left:5px;"> 
                            <div class="is-row" style="margin-bottom: 0px;">
                                <div class="is-col is-90"> 
                                    <multiselect
                                        v-model="filter.ac_reg" 
                                        :options="ac_regs" 
                                        :multiple="true" 
                                        :close-on-select="true" 
                                        :clear-on-select="true" 
                                        :preserve-search="true" 
                                        placeholder="A/C Reg" 
                                        label="ac_reg" 
                                        track-by="ac_reg" 
                                        :preselect-first="false"
                                        :show-labels="false"
                                        :taggable="true"
                                        @tag="addAircraftRegTag">
                                    </multiselect>
                                </div>
                            </div>
                    </div> 
                    <div class="is-col is-10"> 
                        <button class="button is-secondary is-default" style="height:20px;" v-on:click="handlerRunFilter()">
                            <i class="material-icons">search</i>
                        </button>
                    </div>
                </div>         
            </transition>

            <transition name="fade">
            <div :class="'card ' + dark_mode" style="margin-bottom: 12px" v-show="controlpanel_show">
                <div class="card-header">
                    <div class="title-area" v-on:click="controlpanel_show = false">
                        <h3 class="title">
                        <span class="button is-default" style="padding: 3px 10px; margin: 0px 20px 0px 0px;color: black"><i class='material-icons'>settings</i></span>
                            Control Panel</h3>
                    </div>
                </div>
                <div class="card-content">
                    <!--div class="card-header no-border">
                        <div class="title-area">
                            <h5>Visibility</h5>
                        </div>
                    </div-->
                    <div class="card-content">
                        <div class="is-row"> 
                            <div class="is-col is-10">
                                <label :class="dark_mode">Fullscreen</label> 
                                <span :class="'button is-secondary is-success '+dark_mode" @click="togglefullscreen" style="height:20px;width:100%;"><i class='material-icons'>fullscreen</i></span>
                                <!--span :class="'button is-secondary is-success '+dark_mode" style="padding: 0 15px;" v-if="filter_show" v-on:click="filter_show = false">Hide Filters</span>
                                <span :class="'button is-secondary is-success '+dark_mode" style="padding: 0 15px;" v-if="!filter_show" v-on:click="filter_show = true">Show Filters</span>
                                <span :class="'button is-secondary is-success '+dark_mode" style="padding: 0 15px;">Hide Dashboard</span>
                                <span v-on:click="slide_left()" :class="'button is-secondary is-success '+dark_mode" style="padding: 0 15px;"> Show Dashboard</span-->
                            </div>
                            <div class="is-col is-30">
                                <div class="is-row">
                                    <div class="is-col is-10">
                                        <label :class="dark_mode">Slider Autoplay</label>                                        
                                            <select class="by_timeframe" v-model="settings.autoplay" @click="slider_reset_interval()">
                                                <option value='3000'>3s</option>
                                                <option value='5000'>5s</option>
                                                <option value='7000'>7s</option>
                                                <option value='10000'>10s</option>
                                                <option value='15000'>15s</option>                              
                                            </select>
                                    </div>
                                    <div class="is-col is-10">
                                        <label :class="dark_mode">Data Refresh Rate</label>                                        
                                            <select class="by_timeframe" v-model="settings.autorefresh" @click="dashboard_refresh_reset_interval()">
                                                <option :disabled='true' value='60000'>1m</option>
                                                <option :disabled='true' value='300000'>5m</option>
                                                <option value='600000'>10m</option>
                                                <option value='900000'>15m</option>
                                                <option value='1800000'>30m</option>
                                                <option value='3600000'>60m</option>
                                                <option value='7200000'>120m</option>  
                                            </select>
                                    </div>                                  
                                </div>
                            </div>                            
                            <div class="is-col is-60">
                            </div>
                        </div>   
                    </div>
                    <hr>
                    <transition name="fade">
                        <div v-show="filter_show">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    <h5>Filters</h5>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="is-row" style="position:relative;">
                                    <loading 
                                        :active.sync="loading.isLoadingIn" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="'dots'">
                                    </loading>
                                    <loading 
                                        :active.sync="loading.isLoadingUp" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="'dots'">
                                    </loading>
                                    <loading 
                                        :active.sync="loading.isLoadingMat" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="'dots'">
                                    </loading>
                                    <div class="is-col is-20">
                                        <div class="is-row">
                                            <div class="is-col is-20" style="position:relative;">
                                                <label :class="dark_mode">Hangar</label>
                                                <loading 
                                                    :active.sync="loading.process_hangar" 
                                                    :can-cancel="false"
                                                    :is-full-page="false"
                                                    :color="loading.color"
                                                    :loader="'dots'">
                                                </loading>                                                                                                 
                                                <select class="by_timeframe" v-model="filter.hangar" @change="handlerRunFilter('hangar')">
                                                    <option value="">All</option>
                                                    <option v-for="(hangar, index) in hangars" :key="index" :value="hangar.id">{{hangar.name}}</option>
                                                </select>
                                            </div>
                                            <div class="is-col is-40" style="position:relative;">
                                                <label :class="dark_mode">Line</label>
                                                <loading 
                                                    :active.sync="loading.process_line" 
                                                    :can-cancel="false"
                                                    :is-full-page="false"
                                                    :color="loading.color"
                                                    :loader="'dots'">
                                                </loading>                                        
                                                <select @change="handlerRunFilter()" v-model="filter.line" v-if="filter.hangar!==''">
                                                    <option value="" selected>All</option>
                                                    <option v-for="(line, index) in lines" :key="index" :value="line.id">{{line.description}}</option>
                                                </select>
                                                <select disabled v-else>
                                                    <option></option>
                                                </select>
                                            </div> 
                                            <div class="is-col is-20"> 
                                                <div class="form-item">
                                                    <label :class="dark_mode">Group</label>
                                                    <select v-model="filter.type" @change="handlerRunFilter()">
                                                        <option value="" selected>All</option>
                                                        <option value="GA">GA</option>
                                                        <option value="NGA">NGA</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="is-col is-50">  
                                        <div class="is-row">                                              
                                            <div class="is-col is-60"> 
                                                <label :class="dark_mode">Customer</label>
                                                    <div class="is-row">
                                                        <div class="is-col is-90"> 
                                                            <multiselect 
                                                                v-model="filter.customer" 
                                                                :options="customers" 
                                                                :multiple="true" 
                                                                :close-on-select="false" 
                                                                :clear-on-select="true" 
                                                                :preserve-search="true" 
                                                                placeholder="Customer" 
                                                                label="cust_name" 
                                                                track-by="cust_name" 
                                                                :preselect-first="false"
                                                                :show-labels="false"
                                                                :taggable="true"
                                                                @tag="addCustomerTag">
                                                            </multiselect>
                                                        </div>
                                                        <div class="is-col is-10" style="margin-left:0px;"> 
                                                            <button class="button is-secondary is-default" style="height:20px;padding:5px 0px 5px 0px;" v-on:click="handlerRunFilter()">
                                                                <i class="material-icons">search</i>
                                                            </button>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div class="is-col is-40" style="margin-left:5px;"> 
                                                <label :class="dark_mode">A/C Reg</label>
                                                    <div class="is-row">
                                                        <div class="is-col is-90"> 
                                                            <multiselect
                                                                v-model="filter.ac_reg" 
                                                                :options="ac_regs" 
                                                                :multiple="true" 
                                                                :close-on-select="false" 
                                                                :clear-on-select="true" 
                                                                :preserve-search="true" 
                                                                placeholder="A/C Reg" 
                                                                label="ac_reg" 
                                                                track-by="ac_reg" 
                                                                :preselect-first="false"
                                                                :show-labels="false"
                                                                :taggable="true"
                                                                @tag="addAircraftRegTag">
                                                            </multiselect>
                                                        </div>
                                                        <div class="is-col is-10" style="margin-left:0px;"> 
                                                            <button class="button is-secondary is-default" style="height:20px;padding:5px 0px 5px 0px;" v-on:click="handlerRunFilter()">
                                                                <i class="material-icons">search</i>
                                                            </button>
                                                        </div>
                                                    </div>
                                            </div> 
                                        </div>
                                    </div>                                                                      
                                    <div class="is-col is-30">
                                        <div class="is-row">
                                            <!--div class="is-col is-100">
                                                <div class="is-row"-->
                                                    <div class="is-col is-100">
                                                        <label :class="dark_mode">Start Date Interval for Upcoming Project</label>
                                                        <div class="is-row">
                                                            <div class="is-col is-40">
                                                                <input type="date" class="by_timeframe" v-model="start_date">
                                                            </div>
                                                            <div class="is-col is-40" style="margin-left:0px;">
                                                                <input type="date" class="by_timeframe" v-model="end_date">
                                                            </div>
                                                            <div class="is-col is-20" style="margin-left:0px;"> 
                                                            <button class="button is-secondary is-default" style="height:20px;" v-on:click="handlerRunFilter()">
                                                                <i class="material-icons">search</i>
                                                            </button>
                                                            </div>                                    
                                                        </div>
                                                        <label :class="dark_mode">Finish Date Interval for Released Project</label>
                                                        <div class="is-row">
                                                            <div class="is-col is-40">
                                                                <input type="date" class="by_timeframe" v-model="start_date2">
                                                            </div>
                                                            <div class="is-col is-40" style="margin-left:0px;">
                                                                <input type="date" class="by_timeframe" v-model="end_date2">
                                                            </div>
                                                            <div class="is-col is-20" style="margin-left:0px;"> 
                                                            <button class="button is-secondary is-default" style="height:20px;" v-on:click="handlerRunFilter()">
                                                                <i class="material-icons">search</i>
                                                            </button>
                                                            </div>                                                              
                                                        </div>                                                        
                                                    </div>
                                                <!--/div>
                                            </div-->
                                            <!--div class="is-col is-10">
                                                    <button @click="handlerRunFilter()" class="button is-warning" style="background-color: #fbc02d; color: white;width: 100%;">Filter</button>
                                            </div-->
                                        </div>
                                    </div>
                                </div> 
                            </div>  
                        </div>
                    </transition>                                    
                </div>
            </div>
            </transition>
            <div :class="'card '+dark_mode">
                <!--div class="card-content">
                    <div class="is-row">
                        <div class="is-col is-30">
                            <h3 class="title">
                                In Progress <span style="background-color: #28a745; color: white; font-size: 10pt;border-radius: 10px;">{{ count.data_inprogress }}</span>
                            </h3> 
                            <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                        </div>
                        <div class="is-col is-40 brandxpream" style="text-align:center;">
                            <span style="color:#84BD00; font-weight:900;">X</span><span style="color:#006298;font-weight:bold;">PREAM</span>
                        </div>
                        <div class="is-col is-30">
                            <img src="/assets/img/logo-gmf-blue.png">
                        </div>
                    </div>
                </div-->
                
                <div class="card-content">
                    <div class="is-row">
                        <div class="is-col is-20">
                            <div class="is-row" style="position:relative;">
                                <loading 
                                    :active.sync="loading.isLoadingUp" 
                                    :can-cancel="false"
                                    :is-full-page="false"
                                    :color="loading.color"
                                    :loader="loading.loaderType">
                                </loading>                                
                                <div class="is-col is-100">
                                    <h5 style="padding-bottom: 10px;"> 
                                        <span style="background-color: #0fa3b1; color: white; font-size: 10pt;border-radius: 10px;padding:2px 10px;">{{ count.data_upcoming }}</span> 
                                        Prepared
                                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                                    </h5>
                                </div>
                            </div>
                            <!--div class="option-box">
                                <div class="option-item">
                                </div>
                            </div-->  
                     
                            <div id="data-up-progress" class="is-row mscontent" @mouseover="slider_stop_interval()" @mouseleave="slider_reset_interval()" style="height:62vh;overflow-y:auto;margin-left: 10px;margin-top: 10px;">
                                <div v-if="data_upcoming.length < 1" class="is-col is-100">No data upcoming project available !</div>
                                <div>
                                <div class="item" v-for="(elem, index) in data_upcoming" :key="index" :style="dark_mode == 'darkmode' ? 'color:white;font-size:12px;width:100%;':'color:black;font-size:12px;width:100%;'">
                                <!--div v-else v-for="(elem, index) in data_upcoming" :key="index" class="is-col is-100"-->
                                <div class="is-col is-100">
                                    <div :class="'card card-dashboard-item '+dark_mode" :style="handlerStatus('Prepared')+'; margin-bottom: 0px; margin-top: 0.2vh; margin-right: 15px; height:12vh;'">
                                        <div class="card-header bb" style="margin-bottom: 0px;">
                                            <div class="box-dashboard-item">
                                                <div class="is-row" style="margin-bottom: 0px;">
                                                    <div class="is-col is-30">
                                                        <div v-on:click="handlerSelectTracking(elem.pg_id,'dashboard_summary')" class="card-dashboard-head" :style="dark_mode=='darkmode'?'color:white':''">{{elem.ac_reg ? elem.ac_reg.substring(0, 10) : ''}}</div>
                                                        <div class="data-dashboard-code" style="cursor:pointer;" v-on:click="$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: elem.pg_id, type: 'hangar'}})">
                                                            {{elem.ac_type}}
                                                        </div>                                                    
                                                    </div>
                                                    <div class="is-col is-70">
                                                        <div class="card-dashboard-head-small">{{elem.cust_name}}</div>
                                                        <div style="text-align:right; margin-top: 1px;">
                                                            <span :class="'data-dashboard-box-card '+dark_mode">{{elem.fo}}</span>
                                                            <span :class="'data-dashboard-box-card '+dark_mode">{{elem.linedesc}}</span>
                                                        </div>                                                   
                                                    </div>                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-content">
                                        </div>
                                        <div class="card-header bb" style="margin-top: -15px;"></div>
                                        <div>
                                            <div style="font-size: 7pt; font-weight: bold; margin-left: 10px; margin-bottom: 10px;">
                                                {{elem.main_type}}
                                            </div>
                                        </div>                                     
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            <hr>

                            <div class="is-row" style="position:relative;">
                                <loading 
                                    :active.sync="loading.isLoadingIn" 
                                    :can-cancel="false"
                                    :is-full-page="false"
                                    :color="loading.color"
                                    :loader="loading.loaderType">
                                </loading>
                                <div class="is-col is-100">
                                    <h5 style="padding-top: 10px;padding-bottom: 0px;"> 
                                        <span style="background-color: #554e60; color: white; font-size: 10pt;border-radius: 10px;padding:2px 10px;">{{ filter_freeze.length }}</span> 
                                        Freeze
                                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                                        <span style="background-color: #dadddf; color: white; font-size: 10pt;border-radius: 10px;padding:2px 10px;">{{ filter_parking.length }}</span> 
                                        Parking
                                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>                                        
                                    </h5>
                                </div>
                            </div>
                            <!--div class="option-box">
                                <div class="option-item">
                                </div>
                            </div-->                            
                            <div id="data-parking" class="is-row mscontent" @mouseover="slider_stop_interval()" @mouseleave="slider_reset_interval()" style="height:30vh;overflow-y:auto;position: relative;margin-left: 10px;margin-top: 10px;">                               
                                <div v-if="data_parking.length < 1" class="is-col is-100">No data available !</div>
                                <div>
                                <div class="item" v-for="(elem, index) in data_parking" :key="index" :style="dark_mode == 'darkmode' ? 'color:white;font-size:12px;width:100%;':'color:black;font-size:12px;width:100%;'">
                                <!--div v-else v-for="(elem, index) in data_upcoming" :key="index" class="is-col is-100"-->
                                <div class="is-col is-100">
                                    <div :class="'card card-dashboard-item '+dark_mode" :style="handlerStatus(elem.custom_status)+'; margin-bottom: 0px; margin-top: 0.5vh; margin-right: 15px; height:14vh;'">
                                        <div class="card-header bb" style="margin-bottom: 0px;">
                                            <div class="box-dashboard-item">
                                                <div class="is-row" style="margin-bottom: 0px;">
                                                    <div class="is-col is-30">
                                                        <div v-on:click="handlerSelectTracking(elem.pg_id,'dashboard_summary')" class="card-dashboard-head" :style="dark_mode=='darkmode'?'color:white':''">{{elem.ac_reg ? elem.ac_reg.substring(0, 10) : ''}}</div>
                                                        <div class="data-dashboard-code" style="cursor:pointer;" v-on:click="$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: elem.pg_id, type: 'hangar'}})">
                                                            {{elem.ac_type}}
                                                        </div>                                                    
                                                    </div>
                                                    <div class="is-col is-70">
                                                        <div class="card-dashboard-head-small">{{elem.cust_name}}</div>
                                                        <div style="text-align:right; margin-top: 1px;">
                                                            <span :class="'data-dashboard-box-card '+dark_mode">{{elem.location}}</span>
                                                        </div>                                                   
                                                    </div>                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-content">
                                        </div>
                                        <div class="card-header bb" style="margin-top: -15px;"></div>
                                        <div>
                                            <div style="font-size: 7pt; font-weight: bold; margin-left: 10px; margin-bottom: 10px;">
                                                {{elem.main_type}}
                                            </div>
                                        </div>                                     
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>

                        </div>

                        <div class="is-col is-80">
                            <div class="is-row">
                                <div class="is-col is-20" style="position:relative;">
                                    <loading 
                                        :active.sync="loading.isLoadingIn" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="loading.loaderType">
                                    </loading> 
                                    <h5> 
                                        <span style="background-color: #dba56b; color: white; font-size: 10pt;border-radius: 10px;padding:2px 10px;">{{ count.data_inprogress }}</span> 
                                        Progress 
                                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                                    </h5>
                                </div>
                                <div class="is-col is-60" style="text-align:center">                             
                                    <span class="brandxpream" style="text-align:center;">
                                        <span style="color:#84BD00; font-weight:900;">X</span><span style="color:#0f7cb8;font-weight:bold;">PREAM</span>
                                    </span> 
                                </div>
                                <div class="is-col is-20" style="text-align:center;">
                                    <button class="button is-primary" style="height:20px;" v-on:click="modalchartinfo()">
                                    <i class="material-icons">info</i>
                                    </button>
                                    <span style="padding: 0 10px;">Dark Mode</span>
                                    <input type="checkbox" class="switchprio unset" true-value="darkmode" false-value="" v-on:click="dark_mode == 'darkmode' ? dark_mode ='' : dark_mode ='darkmode'">
                                </div>
                            </div>      
                            <div id="data-in-progress"  class="is-row mscontent" @mouseover="slider_stop_interval()" @mouseleave="slider_reset_interval()" style="height:65vh;overflow-y:auto;margin-bottom:0px;margin-bottom:0px;">                               
                                <div v-if="data_inprogress.length < 1" class="is-col is-100">No data inprogress available !</div>
                                <div class="is-col is-100" v-else>
                                    <div>
                                    <div style="white-space:nowrap;">
                                        <!--div class="item" v-for="(list, idx) in lineid_list.filter(h => !h.linename.startsWith('H-4'))" :key="idx" :style="slider_width()"-->
                                        <div class="item" v-for="(elem, index) in data_inprogress_join_new()" :key="index" :style="slider_width()">
                                            <div class='is-row'>
                                                <!-- LINE KOSONG ------------------------------!-->
                                                <!--span v-if="data_inprogress_join_new(list.lineid).length === 0" style="width:100%;">
                                                    <div class='is-col is-100' v-for="c in 2" :key="c">
                                                        <div :class="'card card-dashboard-item '+dark_mode" :style="handlerStatus('Progress')+'; height:31vh; margin-bottom:1vh;'">
                                                            <div class="card-header bb">
                                                                <div class="box-dashboard-item">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-30">
                                                                            <div class="card-dashboard-head" style="color:white;">-</div>
                                                                            <div class="data-dashboard-code" style="color:white;">
                                                                            -
                                                                            </div>                                                    
                                                                        </div>
                                                                        <div class="is-col is-70">
                                                                            <div class="card-dashboard-head-small">-</div>
                                                                            <div style="text-align:right; margin-top: 1px;">
                                                                                <span :class="'data-dashboard-box-card-blank '+dark_mode">-</span>
                                                                            </div>                                                   
                                                                        </div>                                                
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="card-content">
                                                                <div class="progress-default"></div>
                                                                <div :style="handlerProjectPercentColorBar(0, 0)" class="progress-run-blank"></div>
                                                                <div class="box-detail-dashboard">
                                                                    <div class="is-row">
                                                                        <div class="is-col is-25">
                                                                            <div class="box-progress-circle">
                                                                                <VmProgress style="width:60px;" 
                                                                                    type="circle" 
                                                                                    stroke-width="6" 
                                                                                    :width=60
                                                                                    :percentage="0" 
                                                                                    :track-color="'#ffffff00'"
                                                                                    :strokeColor="'#ffffff00'">
                                                                                    <span :style="{color: handlerMainProgressColor(0, 0,0)}" class="progress-circle-text"></span>
                                                                                </VmProgress>
                                                                            </div>
                                                                            <div class="data-dashboard-day-status">-</div>
                                                                        </div>
                                                                        <div class="is-col is-50">
                                                                            <div class="box-data-dashboard">
                                                                                <div>
                                                                                    <div class="is-row" style="margin: unset !important; padding: unset !important; ">
                                                                                        <div class="is-col is-100" style="margin: unset; !important">
                                                                                            <div>
                                                                                                <div class="data-dashboard-day-status">-</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="is-col is-25">
                                                                            <div class="box-progress-circle">
                                                                                <VmProgress style="width:60px;" 
                                                                                    type="circle" 
                                                                                    stroke-width="6" 
                                                                                    :width=60
                                                                                    :percentage="0" 
                                                                                    :track-color="'#ffffff00'"
                                                                                    :strokeColor="'#ffffff00'">
                                                                                    <span :style="{color: handlerMainProgressColor(0, 0, 0)}" class="progress-circle-text"></span>
                                                                                </VmProgress>
                                                                            </div>
                                                                            <div class="data-dashboard-day-status">-</div>
                                                                        </div>                                                
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div style="font-size: 7pt; font-weight: bold; color: white; margin-left: 10px; margin-top: 10px; margin-bottom: 5px;">
                                                                -
                                                                </div>
                                                            </div>                                  
                                                        </div>
                                                    </div> 
                                                </span-->

                                                <!-- LINE PROJECT EXIST ------------------------------!-->
                                                <!--span v-for="(elem, index) in data_inprogress_join" :key="index" style="width:100%;"-->
                                                <span style="width:100%;">
                                                    <div class='is-col is-100' v-for="i in ['even','odd']" :key="i">
                                                        <div :class="'card card-dashboard-item '+dark_mode" :style="handlerStatus('Progress')+'; height:31vh; margin-bottom:1vh;'" v-if="elem[i].pg_id !==''">
                                                            <div class="card-header bb">
                                                                <div class="box-dashboard-item">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-30">
                                                                            <div class="card-dashboard-head" style="cursor:pointer;" v-on:click="$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: elem[i].pg_id, type: 'hangar'}})">{{elem[i].ac_reg ? elem[i].ac_reg.substring(0, 10) : ''}}</div>
                                                                            <div class="data-dashboard-code">
                                                                                {{elem[i].ac_type}}
                                                                            </div>                                                    
                                                                        </div>
                                                                        <div class="is-col is-70">
                                                                            <div class="card-dashboard-head-small">{{elem[i].cust_name}}</div>
                                                                            <div style="text-align:right; margin-top: 1px;">
                                                                                <span :class="'data-dashboard-box-card '+dark_mode">{{elem[i].location}}</span>
                                                                            </div>                                                   
                                                                        </div>                                                
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="card-content">
                                                                <div class="progress-default"></div>
                                                                <div :style="handlerProjectPercentColorBar(elem[i].tat, elem[i].day)" class="progress-run"></div>
                                                                <div class="data-dashboard-day-status">day {{elem[i].day == "" ? 0 : elem[i].day}} of {{elem[i].tat == "" ? 0 : elem[i].tat}} (<span :style="{color: handlerProjectPercentColor(elem[i].tat, elem[i].day)}">{{handlerProjectPercent(elem[i].tat, elem[i].day)}}%</span>)</div>
                                                                <div class="box-detail-dashboard">
                                                                    <div class="is-row">
                                                                        <div class="is-col is-25">
                                                                            <div class="box-progress-circle">
                                                                                <VmProgress style="width:60px;" 
                                                                                    type="circle" 
                                                                                    stroke-width="6" 
                                                                                    :width=60
                                                                                    :percentage="elem[i].progress_mhrs" 
                                                                                    :track-color="dark_mode=='darkmode' ? '#082b69' : '#e5e9f2'"
                                                                                    :strokeColor="handlerMainProgressColor(elem[i].progress_mhrs, elem[i].tat, elem[i].day)">
                                                                                    <span :style="{color: handlerMainProgressColor(elem[i].progress_mhrs, elem[i].tat, elem[i].day)}" class="progress-circle-text">{{elem[i].progress_mhrs}}%</span>
                                                                                </VmProgress>
                                                                            </div>
                                                                            <div class="data-dashboard-day-status">Plan Mhrs</div>
                                                                        </div>
                                                                        <div class="is-col is-50" style="position:relative;">
                                                                            <loading 
                                                                                
                                                                                :active.sync="loading.isLoadingMat" 
                                                                                :height=40
                                                                                :width=40
                                                                                :can-cancel="false"
                                                                                :is-full-page="false"
                                                                                :color="loading.color"
                                                                                :loader="'spinner'">
                                                                            </loading>
                                                                            <span v-if="filter_materialproject(elem[i].pg_id).length>0">                                                                        
                                                                            <GChart
                                                                                :type="dataChart.pieChart.type"
                                                                                :data="filter_materialproject(elem[i].pg_id)"
                                                                                :options="dataChart.pieChart.options"
                                                                            />
                                                                            <div class="data-dashboard-day-status">Materials</div>
                                                                            </span>
                                                                        </div>
                                                                        <div class="is-col is-25">
                                                                            <div class="box-progress-circle">
                                                                                <VmProgress style="width:60px;" 
                                                                                    type="circle" 
                                                                                    stroke-width="6" 
                                                                                    :width=60
                                                                                    :percentage="elem[i].progress" 
                                                                                    :track-color="dark_mode=='darkmode' ? '#082b69' : '#e5e9f2'"
                                                                                    :strokeColor="handlerMainProgressColor(elem[i].progress, elem[i].tat, elem[i].day)">
                                                                                    <span :style="{color: handlerMainProgressColor(elem[i].progress, elem[i].tat, elem[i].day)}" class="progress-circle-text">{{elem[i].progress}}%</span>
                                                                                </VmProgress>
                                                                            </div>
                                                                            <div class="data-dashboard-day-status">Qty Task</div>
                                                                        </div>                                                
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div style="font-size: 7pt; font-weight: bold; margin-left: 10px; margin-top: 10px; margin-bottom: 0px;">
                                                                    {{elem[i].main_type}}
                                                                </div>
                                                            </div> 
                                                            <div v-if="handlerMainProgressColor(elem[i].progress_mhrs, elem[i].tat, elem[i].day) !=='#0E988E' && handlerCalculateDelay(elem[i].progress_mhrs, elem[i].tat, elem[i].day)>0" style="text-align:rignt; margin: 0px 0px 5px 10px;">
                                                                <span class="data-dashboard-day-status">
                                                                    <span :style="'color: '+handlerMainProgressColor(elem[i].progress_mhrs, elem[i].tat, elem[i].day)+'; opacity: 0.9; font-size: 9px; border-radius: 7px;'">
                                                                        {{handlerCalculateDelay(elem[i].progress_mhrs, elem[i].tat, elem[i].day)}} Day(s) 
                                                                    </span>
                                                                    <span style="opacity: 0.7;">
                                                                    (early warning delay)
                                                                    </span>
                                                                </span>
                                                            </div> 
                                                            <div v-else style="text-align:rignt; margin: 0px 0px 5px 10px;">
                                                                <span class="data-dashboard-day-status">
                                                                    <span :style="'opacity: 0.9; font-size: 9px; border-radius: 7px;'">
                                                                        0 Day
                                                                    </span>
                                                                    <span style="opacity: 0.7;">
                                                                    (early warning delay)
                                                                    </span>
                                                                </span>
                                                            </div>                                                       

                                                        </div> 


                                                        <div v-else>
                                                            <div :class="'card card-dashboard-item '+dark_mode" :style="handlerStatus('Progress')+'; height:31vh; margin-bottom:1vh;'">
                                                            <div class="card-header bb">
                                                                <div class="box-dashboard-item">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-30">
                                                                            <div class="card-dashboard-head" style="color:white;">-</div>
                                                                            <div class="data-dashboard-code" style="color:white;">
                                                                            -
                                                                            </div>                                                    
                                                                        </div>
                                                                        <div class="is-col is-70">
                                                                            <div class="card-dashboard-head-small">-</div>
                                                                            <div style="text-align:right; margin-top: 1px;">
                                                                                <span :class="'data-dashboard-box-card '+dark_mode">{{elem[i].line_name}}</span>
                                                                            </div>                                                   
                                                                        </div>                                                
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="card-content">
                                                                <div class="progress-default"></div>
                                                                <div :style="handlerProjectPercentColorBar(0, 0)" class="progress-run-blank"></div>
                                                                <div class="box-detail-dashboard">
                                                                    <div class="is-row">
                                                                        <div class="is-col is-25">
                                                                            <div class="box-progress-circle">
                                                                                <VmProgress style="width:60px;" 
                                                                                    type="circle" 
                                                                                    stroke-width="6" 
                                                                                    :width=60
                                                                                    :percentage="0" 
                                                                                    :track-color="'#ffffff00'"
                                                                                    :strokeColor="'#ffffff00'">
                                                                                    <span :style="{color: handlerMainProgressColor(0, 0,0)}" class="progress-circle-text"></span>
                                                                                </VmProgress>
                                                                            </div>
                                                                            <div class="data-dashboard-day-status">-</div>
                                                                        </div>
                                                                        <div class="is-col is-50">
                                                                            <div class="box-data-dashboard">
                                                                                <div>
                                                                                    <div class="is-row" style="margin: unset !important; padding: unset !important; ">
                                                                                        <div class="is-col is-100" style="margin: unset; !important">
                                                                                            <div>
                                                                                                <div class="data-dashboard-day-status">-</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="is-col is-25">
                                                                            <div class="box-progress-circle">
                                                                                <VmProgress style="width:60px;" 
                                                                                    type="circle" 
                                                                                    stroke-width="6" 
                                                                                    :width=60
                                                                                    :percentage="0" 
                                                                                    :track-color="'#ffffff00'"
                                                                                    :strokeColor="'#ffffff00'">
                                                                                    <span :style="{color: handlerMainProgressColor(0, 0, 0)}" class="progress-circle-text"></span>
                                                                                </VmProgress>
                                                                            </div>
                                                                            <div class="data-dashboard-day-status">-</div>
                                                                        </div>                                                
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div style="font-size: 7pt; font-weight: bold; color: white; margin-left: 10px; margin-top: 10px; margin-bottom: 5px;">
                                                                -
                                                                </div>
                                                            </div>                                  
                                                        </div> 
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- H4 ------------------------------!-->
                                        <!--div class="item" v-for="(col,ix) in 8" :key="'h4-'+ix" :style="slider_width()">
                                            <div> 
                                                {{ lineid_list.filter(h => h.linename.startsWith('H-4'))[col-1].linename }}
                                            </div>
                                            <div>
                                                {{ lineid_list.filter(h => h.linename.startsWith('H-4'))[17-col-1].linename }}
                                            </div>
                                        </div-->
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="is-row" style="margin-top: 0px;">
                                <div class="is-col is-20" style="position:relative;">
                                    <loading 
                                        :active.sync="loading.isLoadingRel" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="loading.loaderType">
                                    </loading>                                     
                                    <h5> 
                                        <span style="background-color: #2cda9d; color: white; font-size: 10pt;border-radius: 10px;padding:0px 10px;">{{ count.data_released }}</span> 
                                        Released (NGA)
                                        <span class="subtitle total-project"></span>
                                    </h5>
                                </div>
                                <div class="is-col is-60" style="text-align:center">                             
                                </div>
                                <div class="is-col is-20" style="text-align:right;">
                                </div>
                            </div> 
                            <div id="data-released"  class="is-row mscontent" @mouseover="slider_stop_interval()" @mouseleave="slider_reset_interval()" style="height:30vh;overflow-y:auto;">                               
                                <div v-if="data_released.length < 1" class="is-col is-100">No data released project available !</div>
                                <div class="is-col is-100" v-else>
                                    <div>
                                    <div style="white-space:nowrap;">
                                        <div class="item" v-for="(elem, index) in data_released" :key="index" :style="slider_width()">
                                            <div class='is-row'>
                                                <div class='is-col is-100'>
                                                    <div :class="'card card-dashboard-item '+dark_mode" :style="handlerStatus('Released')+' ;height:30vh;'">
                                                        <div class="card-header bb">
                                                            <div class="box-dashboard-item">
                                                                <div class="is-row" style="margin-bottom: 0px;">
                                                                    <div class="is-col is-30">
                                                                        <div class="card-dashboard-head" style="cursor:pointer;" v-on:click="$router.push({name: 'pc_hangar.tracking.highlight', params: {pg_id: elem.pg_id, type: 'hangar'}})">{{elem.ac_reg ? elem.ac_reg.substring(0, 10) : ''}}</div>
                                                                        <div class="data-dashboard-code">
                                                                            {{elem.ac_type}}
                                                                        </div>                                                    
                                                                    </div>
                                                                    <div class="is-col is-70">
                                                                        <div class="card-dashboard-head-small">{{elem.cust_name}}</div>
                                                                        <div style="text-align:right; margin-top: 1px;">
                                                                            <span :class="'data-dashboard-box-card '+dark_mode">{{elem.linedesc}}</span>
                                                                        </div>                                                   
                                                                    </div>                                                
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="card-content">
                                                            <div class="progress-default"></div>
                                                            <div class="box-detail-dashboard">
                                                                <div class="data-dashboard-day-status">{{elem.deadline*-1}} days after released on {{elem.fo2}}</div>
                                                                <div class="is-row">
                                                                    <div class="is-col is-100" style="position:relative;">
                                                                        <loading 
                                                                            
                                                                            :active.sync="loading.isLoadingMat" 
                                                                            :height=40
                                                                            :width=40
                                                                            :can-cancel="false"
                                                                            :is-full-page="false"
                                                                            :color="loading.color"
                                                                            :loader="'spinner'">
                                                                        </loading>
                                                                        <span v-if="filter_copaproject(elem.pg_id).mychartstatus">                                                                          
                                                                        <highcharts                                      
                                                                        id='columnchart'
                                                                        :options="filter_copaproject(elem.pg_id)"
                                                                        ref="colcharts"                                    
                                                                        ></highcharts>
                                                                        
                                                                        </span>
                                                                    </div>                                               
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div style="font-size: 7pt; font-weight: bold; margin-left: 10px; margin-top: 10px; margin-bottom: 0px;">
                                                                {{elem.main_type}}
                                                            </div>
                                                        </div>                                                        
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </fullscreen>

        <div class="modal-box" id="modal-chartinfo" data-keyboard="false" data-backdrop="static">
            <div class="modal" style="width:90%;">
                <span class="close" v-on:click="hideModal('modal-chartinfo')"></span>
                    <div class="modal-header">
                        <h2 class="title">Dashboard Info</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <center>
                            <img src="/assets/img/slide2.jpg" height="80vh"><hr>
                            <img src="/assets/img/slide3.jpg" height="80vh">
                        </center>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-chartinfo')">Close</button>

                    </div>
                <!-- </form> -->
            </div>
        </div>

        </div>
    </div>

    
</template>

<script>
import Progress from 'vue-multiple-progress'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import Fullscreen from 'vue-fullscreen'
import { GChart } from 'vue-google-charts'

export default {
    components: {
        'VmProgress': Progress, Loading, 'multiselect': Multiselect, Fullscreen, GChart
    },
    

    computed: {       
        data_inprogress_join: function() {
            var newArr = [];
            if(this.count.data_inprogress>0){
                for (var i=1;i<=Math.ceil(this.count.data_inprogress/2);i++){
                    if(typeof this.data_inprogress[i+i-1] !== 'undefined') {
                        newArr.push({
                            even:this.data_inprogress[i+i-2], //0, 2, 4, 6, 8
                            odd:this.data_inprogress[i+i-1], //1, 3, 5, 7, 9
                        });
                    }
                    else{
                        newArr.push({
                            even:this.data_inprogress[i+i-2], //0, 2, 4, 6, 8
                            odd:{pg_id: ''}
                        });                        
                    }
                }
            }
            // console.log(this.data_inprogress)
            // console.log(newArr)
            return newArr;
        },

        customers: function(){
            let myfilter = this.data_inprogress.concat(this.data_upcoming).filter(function(o) {  
                return this[o.cust_code] ? false : this[o.cust_code] = true;
            }, {});

            return myfilter;

        },

        ac_regs: function(){
            let myfilter = this.data_inprogress.concat(this.data_upcoming).filter(function(o) {  
                return this[o.ac_reg] ? false : this[o.ac_reg] = true;
            }, {});

            return myfilter;

        }
    },

    watch: {
        dark_mode: function(val){
            if(val=='darkmode'){
                this.dataChart.pieChart.options.backgroundColor = '#081b3c';
            }
            else{
                this.dataChart.pieChart.options.backgroundColor = 'white';
            }
        }
    },

    data: () => ({
        lineid_list: [
            { lineid: '1', linename: 'H-1 Line 1', flag: 0 },
            { lineid: '2', linename: 'H-1 Line 2', flag: 0 },
            { lineid: '4', linename: 'H-3 Line 1', flag: 0 },
            { lineid: '5', linename: 'H-3 Line 2', flag: 0 },
            { lineid: '6', linename: 'H-3 Line 3', flag: 0 },
            { lineid: '12', linename: 'H-4 Line 1', flag: 1 },
            { lineid: '13', linename: 'H-4 Line 2', flag: 2 },
            { lineid: '14', linename: 'H-4 Line 3', flag: 3 },
            { lineid: '15', linename: 'H-4 Line 4', flag: 4 },
            { lineid: '16', linename: 'H-4 Line 5', flag: 5 },
            { lineid: '17', linename: 'H-4 Line 6', flag: 6 },
            { lineid: '18', linename: 'H-4 Line 7', flag: 7 },
            { lineid: '19', linename: 'H-4 Line 8', flag: 8 },
            { lineid: '20', linename: 'H-4 Line 9', flag: 9 },
            { lineid: '21', linename: 'H-4 Line 10', flag: 10 },
            { lineid: '22', linename: 'H-4 Line 11', flag: 11 },
            { lineid: '23', linename: 'H-4 Line 12', flag: 12 },
            { lineid: '24', linename: 'H-4 Line 13', flag: 13 },
            { lineid: '25', linename: 'H-4 Line 14', flag: 14 },
            { lineid: '26', linename: 'H-4 Line 15', flag: 15 },
            { lineid: '27', linename: 'H-4 Painting Area', flag: 16 },
            { lineid: '52', linename: 'H-4 INHAN Line 9', flag: 0 }
        ],
        hasAccess: false,
        grantAccess: false,
        loading: {
            process_hangar: false,
            process_line: false,
            isLoading: false,
            isLoadingUp: false,
            isLoadingIn: false,
            isLoadingRel: false,
            isLoadingMat: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
   

        progress: {
            width: 60,
        },

        count: {
            data_inprogress: 0,
            data_upcoming: 0,
            data_released: 0,
        },

        data_inprogress: [],
        data_upcoming: [],
        data_parking: [],
        data_released: [],
        listrevision_released: [],
        copa_projectreleased: [],
        data_material: [],
        filter: {
            airframe_cat: "",
            hangar: "",
            line: "",
            type: "",
            ac_reg: [],
            customer: []
        },
        container: {},
        //ac_regs: [],
        //customers: [],
        hangars: [],
        lines: [],
        form_highlight: {
            index: "",
            type: "",
            pg_id: "",
            highlight: ""
        },
        fullscreen: false,
        filter_show: true,
        controlpanel_show: false,
        settings: {
            autoplay: 5000,
            autorefresh: 900000
        },
        dark_mode: '',

        dataChart: {
            pieChart: {
                type:'PieChart',
                data: [],
                options:{
                    pieHole: 0.4,
                    pieSliceText: 'none',
                    legend: 'none',
                    chartArea:{left:0,top:10,bottom:5,width:'100%',height:'100%'},
                    height: 65,
                    backgroundColor: 'white',
                    tooltip: {trigger: 'focus', ignoreBounds:true, isHtml: true},
                    slices: {  
                        0: {color: '#f73600'},
                        1: {color: '#edca55'},
                        2: {color: '#0E988E'}  // hijau stabilo:#2ef656
                    }
                    // /title: 'My Daily Activities'
                }
            },


            columnChart: {
                mychartstatus:false,
            },

        },
        filter_parking: [],
        filter_freeze: [],
        dashboard_interval: [],
        slider_interval: [],
        matset_interval: [],
        slider: {
            element: {
                progress: {},
                prepared: {},
                parking: {},
                released: {}
            },
            item_width: {
                progress: 0,
                prepared: 0,
                parking: 0,
                released: 0
            },
            time: 500,
            position: {
                progress: {
                    index: 0,
                    scrollpos: 0
                },
                prepared: {
                    index: 0,
                    scrollpos: 0                    
                },
                parking: {
                    index: 0,
                    scrollpos: 0                    
                },
                released: {
                    index: 0,
                    scrollpos: 0                    
                }
            },
        },
        render: true,
        start_date: new Date(new Date().setTime(new Date().getTime() - (/*month*/1000*60*60*24*60) + (/*GMT*/7*60*60*1000))).toISOString().split('T')[0],//moment().subtract(12, "months").format('YYYY-MM-DD'),
        end_date: new Date(new Date().setTime(new Date().getTime() + (/*month*/1000*60*60*24*30) + (/*GMT*/7*60*60*1000))).toISOString().split('T')[0],//moment().add(6, "months").format('YYYY-MM-DD'),
        start_date2: new Date(new Date().setTime(new Date().getTime() - (/*month*/1000*60*60*24*30*1) + (/*GMT*/7*60*60*1000))).toISOString().split('T')[0],//moment().subtract(3, "months").format('YYYY-MM-DD'),
        end_date2: new Date(new Date().setTime(new Date().getTime()) + (/*GMT*/7*60*60*1000)).toISOString().split('T')[0],//moment().format('YYYY-MM-DD'),

    }),
    
    mounted() {
        if(
            !this.$bulkCan(
                'pc_hangar_summary_dashboard_view',
                'pc_hangar_summary_dashboard_edit',
            )
        ) {
            this.$router.push({name: 'access_denied'});
        }else {
            if(this.$can('pc_hangar_summary_dashboard_edit')) {
                this.grantAccess = true;
            }

            this.hasAccess = true;
            this.initHangar();
            this.initDataPrepared().then(()=>{
                //this.reset_slide('prepared');
            });
            this.initDataProgress().then(()=>{
                this.initmaterialsummary();
                this.slider_reset_interval();
            });
            this.initDataReleased().then(()=>{
                this.initcopasummary();
            });
            

            
            //this.initAircraftReg();
            //this.initCustomer();

        }
    },

    created() {
        document.addEventListener('visibilitychange', this.visibilityChange, false);
    },

    beforeDestroy() {
        this.slider_stop_interval();
        this.dashboard_refresh_stop_interval();
    },

    methods: {
        data_inprogress_join_new: function() {
            var newArr = [];

            this.lineid_list.forEach(x => {
                let dummy_even = { pg_id: '', lineid: x.lineid, line_name: x.linename }
                let dummy_odd = { pg_id: '', lineid: x.lineid, line_name: x.linename }

                let perline = this.data_inprogress.filter(d => d.line_id === x.lineid)

                if (perline.length === 0) {
                    newArr.push({
                        even: dummy_even,
                        odd: dummy_odd,
                        more: []
                    });
                } else { 
                    // 1 line > 1 project
                    if (typeof perline[1] !== 'undefined') {
                        let check_multiple_reg = perline.filter(reg => reg.ac_reg === perline[0].ac_reg)
                        let filter_perline_majorcheck = []
                        let filter_perline_minorcheck = []
                        if (check_multiple_reg.length > 0) {
                            filter_perline_majorcheck = perline.filter(ac => ac.rev_type === '6' || ac.rev_type === '7')
                            filter_perline_minorcheck = perline.filter(ac => ac.rev_type !== '6' && ac.rev_type !== '7')
                        }
                        newArr.push({
                            even: filter_perline_majorcheck.length ? filter_perline_majorcheck[0] : filter_perline_minorcheck[0],
                            odd: filter_perline_majorcheck.length ? filter_perline_majorcheck.length > 1 ? filter_perline_majorcheck[1] : filter_perline_minorcheck[0] : filter_perline_minorcheck[1],
                            more: perline.slice(2)
                        });
                    } else {
                        // 1 line = 1 project
                        newArr.push({
                            even: perline[0],
                            odd: { pg_id: '', lineid: x.lineid, line_name: x.linename },
                            more: []
                        });
                    }
                }
            })
            return newArr;
            /*
            this.lineid_list.forEach(x => {
                if (!x.linename.startsWith('H-4') && !x.linename.startsWith('INHAN')) {
                    let perline = this.data_inprogress.filter(d => d.line_id === x.lineid)
                    if (perline.length === 0) {
                        newArr.push({
                            even: { pg_id: '', lineid: x.lineid, line_name: x.linename },
                            odd: { pg_id: '', lineid: x.lineid, line_name: x.linename }
                        });
                    } else {
                        for (var i=1;i<=Math.ceil(perline.length/2);i++){
                            if(typeof perline[i+i-1] !== 'undefined') {
                                newArr.push({
                                    even: perline[i+i-2], //0, 2, 4, 6, 8
                                    odd: perline[i+i-1], //1, 3, 5, 7, 9
                                });
                            } else {
                                newArr.push({
                                    even: perline[i+i-2], //0, 2, 4, 6, 8
                                    odd: { pg_id: '', lineid: x.lineid, line_name: x.linename }
                                });                        
                            }
                        }
                    }
                } else if(x.linename.startsWith('H-4')) {
                    if (x.flag<9) {
                        let flagtop = x
                        let flagbottom = this.lineid_list.filter(ld => ld.flag === 17 - x.flag)[0]
                        let perline_top = this.data_inprogress.filter(d => d.line_id === flagtop.lineid)
                        let perline_bottom = this.data_inprogress.filter(d => d.line_id === flagbottom.lineid)                      
                        if (perline_top.length === perline_bottom.length) {
                            if (perline_top.length === 0) {
                                newArr.push({
                                    even: { pg_id: '', lineid: flagtop.lineid, line_name: flagtop.linename },
                                    odd: { pg_id: '', lineid: flagbottom.lineid, line_name: flagbottom.linename }
                                });
                            } else {
                                for (var j=1;j<=perline_top.length;j++){
                                    newArr.push({
                                        even: perline_top[j-1],
                                        odd: perline_bottom[j-1],
                                    });
                                }
                            }
                        } else if (perline_top.length > perline_bottom.length) {
                            for (var j=1;j<=perline_top.length;j++){
                                console.log(j)
                                var blankobject = { pg_id: '', lineid: flagbottom.lineid, line_name: flagbottom.linename }
                                newArr.push({
                                    even: perline_top[j-1],
                                    odd: perline_bottom[j-1] ? perline_bottom[j-1] : blankobject
                                });
                                
                            }
                        } else if (perline_top.length < perline_bottom.length) {
                            for (var j=1;j<=perline_bottom.length;j++){
                                console.log(j)
                                var blankobject = { pg_id: '', lineid: x.lineid, line_name: x.linename }
                                newArr.push({
                                    even: perline_top[j-1] ? perline_top[j-1] : blankobject,
                                    odd: perline_bottom[j-1]
                                }); 
                            }
                        }   
                    }
                }
            })
            console.log(newArr)
            return newArr;
            */
        },

        reset_slide: function(param){
            if(param=='progress'){
                this.slider.position.progress = {
                    index: 0,
                    scrollpos: 0
                    };
                //this.scrollToLeft(this.slider.element.progress, 0, 100);
                this.slider.element.progress.scrollLeft = 0;
            }
            if(param=='released'){
                this.slider.position.released = {
                    index: 0,
                    scrollpos: 0
                    };
                //this.scrollToLeft(this.slider.element.progress, 0, 100);
                this.slider.element.released.scrollLeft = 0;
            } 
            if(param=='prepared'){
                this.slider.position.prepared = {
                    index: 0,
                    scrollpos: 0
                    };
                this.slider.element.prepared.scrollTop = 0;
            }
            if(param=='parking'){
                this.slider.position.parking = {
                    index: 0,
                    scrollpos: 0
                    };
                this.slider.element.parking.scrollTop = 0;
            }                
        },

        scrollToLeft: function(element, to, duration) {
            if (duration <= 0) return;
            var difference = to - element.scrollLeft;
            var perTick = difference / duration * 10;
            //console.log(element, to, duration, difference, perTick);
            
            setTimeout(() => {
                element.scrollLeft = element.scrollLeft + perTick;
                this.scrollToLeft(element, to, duration - 10);
            }, 10);
        },

        scrollToTop: function(element, to, duration) {
            if (duration <= 0) return;
            var difference = to - element.scrollTop;
            var perTick = difference / duration * 10;
            //console.log(element, to, duration, difference, perTick);
            
            setTimeout(() => {
                element.scrollTop = element.scrollTop + perTick;
                this.scrollToTop(element, to, duration - 10);
            }, 10);
        },

        slide_move: function(){
            // console.log(this.slider.position.progress.index)
            if(this.slider.position.progress.index==this.data_inprogress_join_new().length-4){
                this.reset_slide('progress');
            }
            else{
                this.slider.element.progress = document.querySelector("#data-in-progress");
                this.slider.item_width.progress = parseFloat(parseFloat(this.slider.element.progress.scrollWidth)/this.data_inprogress_join_new().length)-5;//Math.ceil(this.count.data_inprogress/2));
                this.slider.position.progress.scrollpos += this.slider.item_width.progress;
                this.scrollToLeft(this.slider.element.progress, this.slider.position.progress.scrollpos, this.slider.time);
                this.slider.position.progress.index += 1;            
            }

            if(this.slider.position.released.index==this.data_released.length-4){
                this.reset_slide('released');
            }
            else{
                this.slider.element.released = document.querySelector("#data-released");
                //console.log(this.slider.element.prepared);
                this.slider.item_width.released = parseFloat(parseFloat(this.slider.element.released.scrollWidth)/this.data_released.length)-5;
                this.slider.position.released.scrollpos += this.slider.item_width.released;
                this.scrollToLeft(this.slider.element.released, this.slider.position.released.scrollpos, this.slider.time);
                this.slider.position.released.index += 1;
            }  

            if(this.slider.position.prepared.index==this.data_upcoming.length-5){
                this.reset_slide('prepared');
            }
            else{
                this.slider.element.prepared = document.querySelector("#data-up-progress");
                //console.log(this.slider.element.prepared);
                this.slider.item_width.prepared = parseFloat(parseFloat(this.slider.element.prepared.scrollHeight)/this.data_upcoming.length);
                this.slider.position.prepared.scrollpos += this.slider.item_width.prepared;
                this.scrollToTop(this.slider.element.prepared, this.slider.position.prepared.scrollpos, this.slider.time);
                this.slider.position.prepared.index += 1;
            }
            

            if(this.slider.position.parking.index==this.data_parking.length-2){
                this.reset_slide('parking');
            }
            else{
                this.slider.element.parking = document.querySelector("#data-parking");
                //console.log(this.slider.element.prepared);
                this.slider.item_width.parking = parseFloat(parseFloat(this.slider.element.parking.scrollHeight)/this.data_parking.length)-5;
                this.slider.position.parking.scrollpos += this.slider.item_width.parking;
                this.scrollToTop(this.slider.element.parking, this.slider.position.parking.scrollpos, this.slider.time);
                this.slider.position.parking.index += 1;
            }             
        },

        slider_width: function(){
            //let colitem = 1/Math.ceil(this.count.data_inprogress/2);
            let style = '';
            
            if(this.dark_mode=='darkmode'){
                style = 'color:white;font-size:12px;width:23%;margin-left:2%;display: inline-block;';
            }
            else{
                style = 'color:black;font-size:12px;width:23%;margin-left:2%;display: inline-block;';
            }
            return style;
            //console.log(this.dark_mode);
            //console.log(this.dark_mode+' '+colitem);
        },


        start_interval() {
            this.dashboard_refresh_reset_interval();
            this.slider_reset_interval();
        },

        dashboard_refresh_start_interval(){
            this.dashboard_interval.push(setInterval(() => {
                this.initDataProgress().then(() => {
                    this.initmaterialsummary();
                });
                this.initDataPrepared();
                this.initDataReleased();
                
            }, this.settings.autorefresh))
            
            console.log('autorefresh start id:'+this.dashboard_interval);
        },

        material_refresh_start_interval(){
            this.matset_interval.push(setInterval(() => {
                this.initmaterialsummary();                
            }, this.settings.autorefresh))
            console.log('autorefresh mat start id:'+this.matset_interval);
        },

        slider_start_interval(){
            this.slider_interval.push(setInterval(() => {
                this.slide_move();
            }, this.settings.autoplay))
            //.log('autoslide start id:'+this.slider_interval);
        },

        dashboard_refresh_stop_interval() {
            return new Promise((resolve, reject) => {
                for(let i=0;i<this.dashboard_interval.length;i++){
                    clearInterval(this.dashboard_interval[i]);
                }
                this.dashboard_interval=[];             
                resolve();
            })
        },

        material_refresh_stop_interval() {
            return new Promise((resolve, reject) => {
                for(let i=0;i<this.matset_interval.length;i++){
                    clearInterval(this.matset_interval[i]);
                }
                this.matset_interval=[];           
                resolve();
            })
        },

        slider_stop_interval() {
            return new Promise((resolve, reject) => {
                for(let i=0;i<this.slider_interval.length;i++){
                    clearInterval(this.slider_interval[i]);
                }
                this.slider_interval=[];
                resolve();
            })
        },

        slider_reset_interval(){
            this.slider_stop_interval().then(()=> {
                this.slider_start_interval();
            })
            //console.log(this.slider.interval);
        },

        dashboard_refresh_reset_interval(){
            this.dashboard_refresh_stop_interval().then(()=> {
                this.dashboard_refresh_start_interval();
            })
            //console.log(this.slider.interval);
        },

        material_refresh_reset_interval(){
            this.material_refresh_stop_interval().then(()=> {
                this.material_refresh_start_interval();
            })
            //console.log(this.slider.interval);
        },

        slide: function (data) {
            /*console.log({page:data.currentPage,data:Math.ceil(this.count.data_inprogress/2)-3});
            if(data.currentPage == Math.ceil(this.count.data_inprogress/2)-3){
                this.initDataProgress();
            }*/
        },

        togglefullscreen () {
            this.$refs['fullscreen'].toggle()
        },

        fullscreenChange (fullscreen) {
            this.fullscreen = fullscreen
        },

        initDataProgress: function() {
            this.loading.isLoadingIn = true;

            return new Promise((resolve, reject) => {
                axios.post('/api/dashboard/get_data_project_progress', {
                    airframe_cat: this.filter.airframe_cat,
                    hangar: this.filter.hangar,
                    line: this.filter.line,
                    type: this.filter.type,
                    ac_reg: this.filter.ac_reg,
                    customer: this.filter.customer,
                    start_date: this.start_date,
                    end_date: this.end_date,
                    start_date2: this.start_date2,
                    end_date2: this.end_date2
                })
                .then( res => {
                    this.data_parking = res.data.data_parking;
                    this.data_inprogress = res.data.data_inprogress;
                    this.filter_parking = res.data.data_parking.filter(function(e){return e.custom_status=='Parking';});
                    this.filter_freeze = res.data.data_parking.filter(function(e){return e.custom_status=='Freeze';})
                    this.count.data_inprogress = res.data.data_inprogress_count;
                    this.loading.isLoadingIn = false;
                    

                    //console.log(this.customers);
                          
                    //console.log(this.data_parking.filter(function(e){return e.custom_status=='Parking';}));
          

                    resolve();
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Failed get data in-progress project");
                    this.loading.isLoadingIn = false;
                })
            })
        },

        initDataReleased: function() {
            this.loading.isLoadingRel = true;

            return new Promise((resolve, reject) => {
                axios.post('/api/dashboard/get_data_project_released', {
                    airframe_cat: this.filter.airframe_cat,
                    hangar: this.filter.hangar,
                    line: this.filter.line,
                    type: this.filter.type,
                    ac_reg: this.filter.ac_reg,
                    customer: this.filter.customer,
                    start_date: this.start_date,
                    end_date: this.end_date,
                    start_date2: this.start_date2,
                    end_date2: this.end_date2
                })
                .then( res => {
                    this.listrevision_released = res.data.data_released.map(obj => obj.pg_id);
                    //console.log(array_content);
                    this.data_released = res.data.data_released;
                    this.count.data_released = res.data.data_released_count;
                    this.loading.isLoadingRel = false;
                    resolve();
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Failed get data released project");
                    this.loading.isLoadingRel = false;
                })
            })
        },

        initmaterialsummary: function() {
            this.loading.isLoadingMat = true;
            axios.get('/api/dashboard/get_material_summary')
            .then( res => {
                if(res.data.success){
                    //res.data.data[0].map((_, colIndex) => res.data.data.map(row => row[colIndex]));
                    //console.log(res.data.data);
                    this.dataChart.pieChart.data = res.data.data;
                    this.loading.isLoadingMat = false;
                    
                }
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Failed get data material");
                this.loading.isLoadingMat = false;
            })
        },

        transpose: function(arr) {
            var k = arr.length;  
            var l = arr[0].length;  
            var arr1 = [];  
            var arr2 = [];  
            for (var j = 0; j < l; j++) {  
                arr1 = [];  
                for (var i = 0; i < k; i++) {  
                    arr1.push(arr[i][j]);  
                }  
                arr2.push(arr1);  
            }  
            return arr2;  
        },
        
        filter_materialproject: function(pg_id){
            //console.log(pg_id);
            let mat_data = this.dataChart.pieChart.data.filter(function(e){return e.pg_id==pg_id});
            //let array_header = Object.keys(mat_data[0]);
            let array_content = mat_data.map(obj => Object.values(obj));
            let temp_array = [];

            if(mat_data.length>0){
                let array_header = Object.keys(mat_data[0]);
                array_content = [array_header, ... array_content];
                array_content = this.transpose(array_content);

                temp_array[0] = ['material_status','qty', {type: 'string', role: 'tooltip', 'p': {'html': true}}];
                
                let temp_tooltip = this.generate_html_tooltip(array_content);
                array_content[19].push(temp_tooltip[0]);
                array_content[20].push(temp_tooltip[1]);
                array_content[21].push(temp_tooltip[2]);
                temp_array[1] = array_content[19];
                temp_array[2] = array_content[20];
                temp_array[3] = array_content[21];
            }
            return temp_array;
        },

        

        generate_html_tooltip: function(arr){
            let html_tooltip = [];
            let htmltable = ['','',''];
            for(let i=1;i<arr.length;i++){
                if(i>1 && i<=9){

                    if(arr[i][1]>0){
                        htmltable[0] += "<tr><td>"+arr[i][0]+"</td><td>"+arr[i][1]+"</td></tr>";
                    }
                    html_tooltip[0] = "<div style='margin:5px;padding:5px;color:#e0324e;font-weight:bold;'><table style='font-size:10px;'>"+htmltable[0]+"</table></div>";
                }
                
                else if(i>9 && i<=14){
                    
                    if(arr[i][1]>0){
                        htmltable[1] += "<tr><td>"+arr[i][0]+"</td><td>"+arr[i][1]+"</td></tr>";
                    }
                    html_tooltip[1] = "<div style='margin:5px;padding:5px;color:#b39314;font-weight:bold;'><table style='font-size:10px;'>"+htmltable[1]+"</table></div>";
                }
                else if(i>14 && i<=18){

                    if(arr[i][1]>0){
                        htmltable[2] += "<tr><td>"+arr[i][0]+"</td><td>"+arr[i][1]+"</td></tr>";
                    }
                    html_tooltip[2] = "<div style='margin:5px;padding:5px;color:#1c928c;font-weight:bold;'><table style='font-size:10px;'>"+htmltable[2]+"</table></div>";                    
                }               
            }

            return html_tooltip;
        },

        initcopasummary: function() {
            this.loading.isLoadingMat = true;
            axios.post('/api/dashboard/get_copa_summary', {list_revision: this.listrevision_released})
            .then( res => {
                if(res.data.success){
                    //this.dataChart.listcopaChart = [];
                    this.copa_projectreleased = res.data.data;
                    //console.log(this.dataChart.listcopaChart);
                }
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Failed get data material");
                this.loading.isLoadingMat = false;
            })
        },

        filter_copaproject: function(pg_id){
            
            let copa_data = this.copa_projectreleased.filter(function(e){return e.REVNR==pg_id});
            //console.log(copa_data);
            if(copa_data.length>0){
                
                let profit = copa_data[0].REVENUE-copa_data[0].COST;
                //console.log({profit:profit});
                profit = Math.round(profit);
                //console.log({parse_profit:profit});
                let chart_formatter = {
                    mychartstatus:true,
                    colors: ['#000000', '#3690DA', profit>0 ? '#46DC6A':'#E24646'], //E24646
                    chart: {
                        backgroundColor: this.dark_mode=='darkmode' ? '#0a2b6d':'white',
                        type: 'column',
                        height: 110,
                    },
                    title: {
                        text: '',
                        align: 'center',
                        verticalAlign: 'middle',
                    },
                    credits: {
                        enabled: true,
                        text: 'COPA Report',
                        //href: ''
                    },
                    xAxis: {
                        labels: {
                            enabled: false,
                            style: {
                                fontSize: '9px'
                            }
                        },

                        categories: ['COPA Report'],
                    },

                    yAxis: {
                        allowDecimals: true,
                        //min: 0,
                        title: {
                            text: 'USD'
                        },
                        labels: {
                            style: {
                                fontSize: '9px'
                            },
                            align: 'left',
                            x: 0,
                            y: -2
                        }
                        
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal'
                        }
                    },
                    legend: {
                        enabled: false,
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        borderWidth: 0,
                    },         
                    series: [
                    {
                        name: 'Revenue',
                        data: [copa_data[0].REVENUE],
                        stack: 'revenue'
                    },
                    {
                        name: 'Cost',
                        data: [copa_data[0].COST],
                        stack: 'cost'
                    },
                    {
                        name: 'Profit',
                        data: [profit],
                        stack: 'profit'
                    },]
                };

                return chart_formatter;
            }

            else{
                return this.dataChart.columnChart;
            }
        },

        initDataPrepared: function() {
            this.loading.isLoadingUp = true;

            return new Promise((resolve, reject) => {
                axios.post('/api/dashboard/get_data_project_prepared', {
                    airframe_cat: this.filter.airframe_cat,
                    hangar: this.filter.hangar,
                    line: this.filter.line,
                    type: this.filter.type,
                    ac_reg: this.filter.ac_reg,
                    customer: this.filter.customer,
                    start_date: this.start_date,
                    end_date: this.end_date,
                    start_date2: this.start_date2,
                    end_date2: this.end_date2
                })
                .then( res => {
                    this.data_upcoming = res.data.data_upcoming;
                    this.count.data_upcoming = res.data.data_upcoming_count;
                    this.loading.isLoadingUp = false;                  

                    resolve();
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Failed get data upcoming project");
                    this.loading.isLoadingUp = false;
                })
            })
        },

        handlerSelectTracking: function(pg_id, value) {
            if(value == "") return;
            let routeData = this.$router.resolve({name: 'pc_hangar.tracking.'+value, params: {pg_id: pg_id}});
            
            if(value === 'dashboard_summary' || value === "highlight") {
                routeData = this.$router.resolve({name: 'pc_hangar.tracking.'+value, params: {pg_id: pg_id, type: 'hangar'}});
            }

            window.open(routeData.href, '_blank');
        },

        handlerStatus(status) {
            let result = "border-right: 1px solid #eaeaea; border-top: 1px solid #eaeaea; border-bottom: 1px solid #eaeaea; border-left: 6px solid ";
            if(this.dark_mode=='darkmode'){
                result = "border-right: 1px solid #082b69; border-top: 1px solid #082b69; border-bottom: 1px solid #082b69; border-left: 6px solid ";
            }

            if(status === "Prepared") {
                result = result + "#0fa3b1";
            }else if(status === "Progress") {
                result = result + "#ffc107";
            }else if(status === "Released") {
                result = result + "#2cda9d";
            }else if(status === "Freeze") {
                result = result + "#554e60";
            }else if(status === "Parking") {
                result = result + "#dadddf";
            }else {
                result = result + "black";
            }

            return result;
        },
        /*initAircraftReg: function() {
            axios.get('/api/slot_and_capacity/planning_gate/get_aircraft_reg')
            .then( res => {
                this.ac_regs = res.data;
            })
            .catch(e => {
                console.log("Error: " +e);
                toastr.error("Failed get aircraft reg");
            })
        },*/
        /*
        initCustomer: function() {
            axios.get('/api/management/customer_all')
            .then( res => {
                this.customers = res.data;
            })
            .catch(e => {
                console.log("Error: " +e);
                toastr.error("Failed get customer");
            })
        },*/

        initHangar: function() {
            this.loading.process_hangar = true;
            axios.get('/api/booking_and_submission/show_hangar_by_line')
            .then( res => {
                this.hangars = res.data
                this.loading.process_hangar = false;
            })
        },

        handlerToggle: function(toggler, elem) {
            let elm_toggle = document.getElementById(toggler);

            if(elm_toggle.innerHTML == "expand_more") {
                elm_toggle.innerHTML = "expand_less";
                $('#' +elem).slideDown(400);
            }else {
                elm_toggle.innerHTML = "expand_more";
                $('#' +elem).slideUp(400);
            }
        },

        handlerTabs: function(elem_show, elem_hide, elem_tab, elem_nontab) {
            let elem = document.getElementById(elem_tab);
            let elem_non = document.getElementById(elem_nontab);
            elem.style.backgroundColor = "#F3F7FB";
            elem_non.style.backgroundColor = "white";

            $('#' +elem_show).show();
            $('#' +elem_hide).hide();
        },

        handlerGrid: function(rows, id) {
            let type = id == "data-in-progress" ? "in" : "up";
            const template = ` <div class="is-col is-20 is-additional-${type}-row"></div>`;
            let elem = document.getElementById(id);
            let result = "";
            let loop = 0;

            if(rows > 0  && rows < 5) {
                loop = 5 - rows;
            }else {
                if((rows % 5) > 0) {
                    loop = 5 - (rows % 5);
                }
            }

            for(let i = 0; i < loop; i++) {
                result += template;
            }
            
            elem.insertAdjacentHTML("beforeend", result);

        },

        handlerCountMaterial: function(rows) {
            let count = 0;
            rows && rows.forEach(element => {
                count += parseInt(element.total);
            });

            return count;
        },

        handlerMainProgressColor: function(progress, tat, day) {
            let color = "#0E988E";
            let x = day == "" ? 0 : day;
            let y = tat == "" ? 0 : tat;
            let z = x / y;
            z = isNaN(z) ? 0 : z;

            if(z > 0) {
                z = (z*100);

                if(z > 100) {
                    z = 100;
                }

                z = z.toFixed(2);
            }

            let res = progress/z;
            if(progress == 0) {
                color = "#dc3545";
            }else if(res >= 1) {
                color = "#0E988E";
            }else if(res >= 0.95 && res < 1) {
                color = "#ff9635";
            }else {
                color = "#dc3545";
            }

            return color;
        },

        handlerCalculateDelay: function(progress, tat, day){
            let x = day == "" ? 0 : day;
            let y = tat == "" ? 0 : tat;
            let z = x / y;
            z = isNaN(z) ? 0 : z;

            if(z > 0) {
                z = (z*100);

                if(z > 100) {
                    z = 100;
                }

                z = z.toFixed(2);
            }

            let res = (1-(progress/z))*day;

            return res.toFixed(0);
        },

        handlerProjectPercent: function(tat, day) {
            let x = day == "" ? 0 : day;
            let y = tat == "" ? 0 : tat;
            let z = x / y;

            z = isNaN(z) ? 0 : z;

            if(z > 0) {
                z = (z*100);

                if(z > 100) {
                    z = 100;
                }

                z = Math.round(z);
            }
            else{
                z = 0;
            }

            return z;
        },

        handlerProjectPercentColor: function(tat, day) {
            let x = day == "" ? 0 : day;
            let y = tat == "" ? 0 : tat;
            let z = x / y;
            let color = "black";

            if(this.dark_mode=='darkmode'){
                color = 'rgb(149, 163, 210)';
            }

            z = isNaN(z) ? 0 : z;

            if(z > 0) {
                z = (z*100);

                if(z > 100) {
                    color = "#F96C67";
                }
            }

            return color;
        },

        handlerProjectPercentColorBar: function(tat, day) {
            let x = day == "" ? 0 : day;
            let y = tat == "" ? 0 : tat;
            let z = x / y;
            let color = "#0E988E";
            z = isNaN(z) ? 0 : z;

            if(z > 0) {
                z = (z*100);

                if(z > 100) {
                    z = 100;
                    color = "#F96C67";
                }
            }

            z = Math.round(z);

            let res = {
                backgroundColor: color,
                width: z + "%"
            };

            return res;
        },

        addAircraftRegTag (newTag) {
            this.filter.ac_reg.push(newTag);
        },

        addCustomerTag (newTag) {
            //this.customers.push(tag)
            this.filter.customer.push(newTag);
            //console.log(newTag);
        },

        handlerFilterLine: function() {
            this.filter.line = "";
            this.lines = [];
            this.loading.process_line = true;
            axios.get('/api/booking_and_submission/show_line_by_hangar/' + this.filter.hangar)
            .then( res => {
                this.lines = res.data.line;
                this.loading.process_line = false;
                
            })
        },

        handlerRunFilter: function(param) {
            if(param=='hangar'){
                this.handlerFilterLine();       
            }
            return new Promise((resolve, reject) => {
                    this.initDataPrepared().then(() => {
                        this.reset_slide('prepared');
                    });
                    this.initDataProgress().then(() => {
                        this.initmaterialsummary();
                        this.reset_slide('progress');
                        this.reset_slide('parking');
                        //this.reset_slide('released');
                    });
                    this.initDataReleased().then(() => {
                        this.initcopasummary();
                        this.reset_slide('released');
                        //this.reset_slide('released');
                    });
                    //this.forceRerender();
                    resolve();
                })
            
        },

        handlerResetFilter: function() {
            this.loading.isLoading = true;
            this.filter.airframe_cat = "";
            this.filter.hangar = "";
            this.filter.line = "";
            this.filter.type = "";
            this.filter.ac_reg = [];
            this.filter.customer = [];
            this.filter_up.start_date = "";
            this.filter_up.end_date = "";

            this.handlerRunFilter().then(() => {
                this.handlerGrid(this.data_inprogress.length, 'data-in-progress');
                this.handlerGrid(this.data_upcoming.length, 'data-up-progress');
                this.loading.isLoading = false;
                // this.handlerRunFilterUp().then(() => {
                // })
                
            });
        },

        handler_date_upcomming: function(start_date) {
            let diffDays = "D -?";

            if(start_date != "") {
                let start = new Date(start_date);
                let now = new Date();
                start.setHours(0,0,0,0)
                now.setHours(0,0,0,0)
    
                let timeDiff = now.getTime() - start.getTime();
                diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                diffDays = diffDays + 1; 

                if(diffDays >= 0 ) {
                    diffDays = "D +" + diffDays;
                }else {
                    "D " + diffDays;
                }
            }
            
            return diffDays;
        },

        handlerModalHighlight: function(index, type) {
            this.form_highlight.index = index;
            this.form_highlight.type = type;
            this.form_highlight.pg_id = this[type][index].pg_id;
            this.form_highlight.highlight = this[type][index].highlight;

            $("#modal-project-highlight").show();
        },

        modalchartinfo: function() {

            $("#modal-chartinfo").show();
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
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
                    element.className = "button is-success";
                    element.disabled = false;
                    resolve();
                }
            })
        },

        handlerPostHighlight: function() {
            this.handleButton('btn-save-highlight', 'load').then(() => {
                axios.post('/api/dashboard/post_highlight', {
                    pg_id: this.form_highlight.pg_id,
                    highlight: this.form_highlight.highlight
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message);
                        this[this.form_highlight.type][this.form_highlight.index].highlight = this.form_highlight.highlight;

                        setTimeout(()=> {
                            this.hideModal('modal-project-highlight');
                        }, 500)

                    }else {
                        toastr.error(res.data.message);
                    }

                    this.handleButton('btn-save-highlight', 'stop');

                })
                .catch(e => {
                    this.handleButton('btn-save-highlight', 'stop');
                    toastr.error("Undefined error");
                    console.log(e);
                })
            })
        }
    }
}
</script>
