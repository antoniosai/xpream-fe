<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
    .brandxpream {
        font-family: 'Russo One', sans-serif;
    }

    .flip-list-move {
      transition: transform 0.5s;
    }
    .no-move {
      transition: transform 0s;
    }
    .ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }
    .list-group {
      min-height: 20px;
    }
    .list-group-item {
      cursor: move;
    }
    .list-group-item i {
      cursor: pointer;
    }

    ::v-deep .card-dashboard-item {
        border-radius: 5px !important;
        padding-top: 7px;
        padding-left: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
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

    ::v-deep .box-detail-dashboard {
        padding: 5px 15px 0px 5px;
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
        text-align: left;
        
    }

    ::v-deep .data-dashboard-code{
        font-size: 7pt;
        letter-spacing: 0.01px;
        text-align: right;
        margin-right: -7px;
    }

    ::v-deep .data-dashboard-box-card {
        border: 1px solid #c7c7c7;
        font-size: 7pt;
        padding: 1px 5px 3px 5px;
        border-radius: 8px;
        font-weight: bold;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.02);
    }

    ::v-deep .data-dashboard-main-type {
        font-size: 8pt !important;
        letter-spacing: 0.1px;
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
        border-radius: 5px;
        padding: 2px 0px 6px 0px;
        background-color: white;
        margin-top: 5px;
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
        width: 230px !important;
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

    @import url('https://fonts.googleapis.com/css2?family=Hi+Melody&display=swap');

    .card-background{
        background-image: url('data:image/png;base64,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')
        ;background-repeat: no-repeat;
        background-position: center center;
        background-size: 40% 140%;
        
    }

    .handwrite-text {
        font-family: 'Hi Melody', cursive;
        font-size: 25px;
        line-height: 1.2;
        background-image: lightblue;
    }

    .highlighted-text {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMjAwMTA5MDQvL0VOIgogICAgICAgICAgICAgICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+Cgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICB3aWR0aD0iMWluIiBoZWlnaHQ9IjAuNWluIgogICAgIHZpZXdCb3g9IjAgMCAzMDAgMTUwIj4KICA8cGF0aAogICAgICAgIGZpbGw9IiNmZmUwMDAiIHN0cm9rZT0ibm9uZSIKICAgICAgICBkPSJNIDEyLjAwLDQ4LjAwCiAgICAgICAgICAgQyAxMi4wMCw1MC4wOSAxMS43OSw1NC45OSAxMi42MCw1Ni43MgogICAgICAgICAgICAgMTUuNTksNjMuMTggMjYuMDksNTYuNjQgMzMuMDAsNjMuMDAKICAgICAgICAgICAgIDMwLjg0LDYzLjE4IDIzLjA1LDYzLjg3IDIxLjgwLDY1LjAyCiAgICAgICAgICAgICAxOC4wMiw2Ny44OCAyMS4yOSw3Ni4zNSAyMS44MCw4MC4wMAogICAgICAgICAgICAgMjEuODAsODAuMDAgMjEuODAsODYuMDAgMjEuODAsODYuMDAKICAgICAgICAgICAgIDIxLjgwLDg2LjAwIDQwLjAwLDg3LjAwIDQwLjAwLDg3LjAwCiAgICAgICAgICAgICAzOS45Myw4OC44OCA0MC4wNiw5MS4wNCAzOC45OCw5Mi42OQogICAgICAgICAgICAgMzcuNTEsOTQuOTMgMzUuMTUsOTQuNzUgMzIuNTksOTYuMjAKICAgICAgICAgICAgIDI4LjMzLDk4LjYxIDI2Ljg3LDEwMi4yMiAyNy4zNCwxMDcuMDAKICAgICAgICAgICAgIDI3LjM0LDEwNy4wMCAzMC4wMiwxMjMuNDEgMzAuMDIsMTIzLjQxCiAgICAgICAgICAgICAzMS44MiwxMjUuNzUgNDAuMDEsMTI3Ljk1IDQzLjAwLDEyOC4wMAogICAgICAgICAgICAgNDMuMDAsMTI4LjAwIDg3LjAwLDEyOC4wMCA4Ny4wMCwxMjguMDAKICAgICAgICAgICAgIDg4LjA4LDEyMS41NiA5MS4xNiwxMjEuODAgOTcuMDAsMTIyLjA0CiAgICAgICAgICAgICA5Ny4wMCwxMjIuMDQgMTA5LjAwLDEyMy4wMCAxMDkuMDAsMTIzLjAwCiAgICAgICAgICAgICAxMDkuMDAsMTIzLjAwIDEyOC4wMCwxMjMuMDAgMTI4LjAwLDEyMy4wMAogICAgICAgICAgICAgMTI4LjAwLDEyMy4wMCAxODIuMDAsMTIyLjAwIDE4Mi4wMCwxMjIuMDAKICAgICAgICAgICAgIDE5NC41OCwxMjEuOTcgMTg4LjQyLDExOS4wMyAyMDEuMDAsMTE5LjAwCiAgICAgICAgICAgICAyMDEuMDAsMTE5LjAwIDI0My4wMCwxMTkuMDAgMjQzLjAwLDExOS4wMAogICAgICAgICAgICAgMjQzLjAwLDExOS4wMCAyNTguMDAsMTE4LjAwIDI1OC4wMCwxMTguMDAKICAgICAgICAgICAgIDI1OS41MywxMDkuMTAgMjY2LjAxLDExMy4zNyAyNzAuNDAsMTA5LjE1CiAgICAgICAgICAgICAyNzIuNjEsMTA3LjAzIDI3Mi4zMCwxMDAuODUgMjcyLjAwLDk4LjAwCiAgICAgICAgICAgICAyNzIuMDAsOTguMDAgMjgwLjAwLDk3LjAwIDI4MC4wMCw5Ny4wMAogICAgICAgICAgICAgMjgwLjAwLDk0LjEwIDI4MC4yNiw4OC41NSAyNzkuMjYsODYuMDIKICAgICAgICAgICAgIDI3Ni40OSw3OC45OCAyNjQuNjMsNzYuODggMjU4LjAwLDc2LjAwCiAgICAgICAgICAgICAyNjUuMTUsNjkuMTkgMjc2LjQwLDczLjAzIDI3NC44NSw2Mi4wNAogICAgICAgICAgICAgMjc0LjQ3LDU5LjM1IDI3My43Myw1OC44NSAyNzIuMDAsNTcuMDAKICAgICAgICAgICAgIDI4MS42OCw1My43NyAyODEuMDAsNTQuMjggMjgxLjAwLDQ0LjAwCiAgICAgICAgICAgICAyODEuMDAsNDQuMDAgMjU4LjAwLDQyLjM4IDI1OC4wMCw0Mi4zOAogICAgICAgICAgICAgMjUwLjAwLDQwLjg0IDI1MS40OCwzOC4wMyAyMzUuMDAsMzguMDAKICAgICAgICAgICAgIDIzNS4wMCwzOC4wMCAxODkuMDAsMzkuMDAgMTg5LjAwLDM5LjAwCiAgICAgICAgICAgICAxODkuMDAsMzkuMDAgMTc3LjAwLDM5LjgyIDE3Ny4wMCwzOS44MgogICAgICAgICAgICAgMTc3LjAwLDM5LjgyIDE1OS4wMCwzOC4wMCAxNTkuMDAsMzguMDAKICAgICAgICAgICAgIDE1OS4wMCwzOC4wMCAxMjguMDAsMzguMDAgMTI4LjAwLDM4LjAwCiAgICAgICAgICAgICAxMTYuOTAsMzguMDIgMTIwLjE2LDM5LjQwIDExMy4wMCw0MC42NwogICAgICAgICAgICAgMTEzLjAwLDQwLjY3IDk3LjAwLDQyLjE3IDk3LjAwLDQyLjE3CiAgICAgICAgICAgICA5Ny4wMCw0Mi4xNyA4Ny4wMCw0My44MyA4Ny4wMCw0My44MwogICAgICAgICAgICAgODcuMDAsNDMuODMgNTcuMDAsNDUuMDAgNTcuMDAsNDUuMDAKICAgICAgICAgICAgIDU3LjAwLDQ1LjAwIDMyLjAwLDQ4LjAwIDMyLjAwLDQ4LjAwCiAgICAgICAgICAgICAzMi4wMCw0OC4wMCAxMi4wMCw0OC4wMCAxMi4wMCw0OC4wMCBaIiAvPgo8L3N2Zz4K');
        background-position: 50% 50%;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 5px;
        background-repeat: no-repeat;
        background-size: cover;
        font-size: 32px;
      }

    .ribbon-highlight{
        display: inline;
        border-bottom: 5px solid #30c8ff;
    }

    .text-hilite{
        display: inline;
        border-bottom: 3px solid #30c8ff;
    }

    mark {
        position: relative;
        background-color: #fff;
    }
    mark:after {
        border: .25em solid rgb(255, 25, 0);
        border-top: none;
        border-radius: 1.5em 1em 2em 1.5em;
        bottom: -.3em;
        content: '';
        left: -.3em;
        position: absolute;
        right: -.3em;
        top: -.1em;
    }
    mark:before {
        border-top: .25em solid rgb(255, 25, 0);
        border-radius: .5em;
        content: '';
        height: 1em;
        left: 0;
        position: absolute;
        top: -.3em;
        transform: rotate(-10deg);
        width: 2em;
    }
</style>

<template>

    <div>


        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li v-on:click="welcome" :class="tab1" data-tab="mrm">Welcome</li>
                <li v-show="!cust_access" v-on:click="odcls" :class="tab2" data-tab="odc">One-Day Closing Status</li>
            </ul>
            <div :class="cardtab1" id="welcome" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header no-border">
                    <div class="title-area">
                    <center>
                        <!--h3 class="title">Welcome to XPREAM</h3--><br><br>
                        <!--img src="/assets/img/tjlogo.png" width='40%'-->
                    </center>
                    </div>
                </div>
                <div class="card-content">
                        <div class="brandxpream" style="text-align:center; font-size:40px;">
                            <img src="/assets/img/xpream_logo.png" style="max-width:300px;"/>
                        </div>
                </div>
                <br>
                <div v-if="checkbirthdate()" class="card-content card-background"><hr><br><br>
                    <center>
                        <span class="handwrite-text">
                            <span style="color: #00308F; font-weight: bold; font-size:35px;">Happy Birthday!</span><br><br>
                            <span style="font-weight: bold;color: white;background: #95bd67"> &nbsp;&nbsp;{{user.name}}&nbsp;&nbsp; </span><br><br>
                             <span class="text-hilite">Our warmest wishes <br>for your health, happiness, prosperity and success!</span><br><br>
                             <span style="color: #95bd67; font-weight: bold; font-size:30px;">Have an amazing day!</span><br><br>
                        </span>
                    </center>
                </div>
                <!--div class="card-content card-background">
                    <center>
                        <span v-if="analytics.success==1" class="handwrite-text">
                            
                            <span style="color: #00308F; font-weight: bold; font-size:35px;">Dear XPREAM Warriors!</span>
                            <br><br>
                            Hai <span class="ribbon-highlight" style="font-weight: bold;">{{user.name}}</span>, Terima kasih banyak atas kontribusimu dalam penggunaan aplikasi <span class="text-hilite">XPREAM</span> di tahun 2020 ini<br>
                            Dari sebanyak <span class="highlighted-text" style="font-weight: bold;">{{
                                parseFloat(analytics.data.login01) + 
                                parseFloat(analytics.data.login02) + 
                                parseFloat(analytics.data.login03) + 
                                parseFloat(analytics.data.login04) + 
                                parseFloat(analytics.data.login05) + 
                                parseFloat(analytics.data.login06) + 
                                parseFloat(analytics.data.login07) + 
                                parseFloat(analytics.data.login08) + 
                                parseFloat(analytics.data.login09) + 
                                parseFloat(analytics.data.login10) + 
                                parseFloat(analytics.data.login11) + 
                                parseFloat(analytics.data.login12)
                                }}</span> kali <span class="text-hilite">login</span> mu di aplikasi <span class="text-hilite">XPREAM</span> sepanjang 2020 sejak proyek pertama dimulai pada Mei hingga 16 Desember lalu, <br>
                            kamu sudah berkontribusi terhadap berjalannya
                            <span class="highlighted-text" style="font-weight: bold;">{{analytics.data.project_cnt}}</span>
                            <span class="text-hilite">proyek</span> perawatan pesawat di <span class="text-hilite">GMF</span><br>
                            dengan total transaksi aktif pada aplikasi <span class="text-hilite">XPREAM</span> sebanyak 
                            <span class="highlighted-text" style="font-weight: bold;">{{analytics.data.jcmdr_trx}}</span> 
                            kali pada Jobcard dan MDR Tracking,<br>
                            <span class="highlighted-text" style="font-weight: bold;">{{analytics.data.mrm_trx}}</span>
                             kali pada Material Request Monitoring<br>
                             dan
                             <span class="highlighted-text" style="font-weight: bold;"> {{
                                parseFloat(analytics.data.project_up_trx) +
                                parseFloat(analytics.data.project_pg_trx)
                                }}</span> kali pada transaksi project lainnya<br>
                            kamu berada di urutan ke &nbsp;&nbsp;
                            <mark style="font-weight: bold; padding:0px 15px;height:20px;">
                                {{parseFloat(analytics.data.rank)}}</mark> &nbsp;&nbsp; user ter-aktif saat ini di XPREAM<br><br>
                                Semoga <span class="ribbon-highlight" style="font-weight: bold;">{{user.name}}</span> sehat selalu, sukses dan tetap menjadi bagian dari semangat menuju GMF yang lebih hebat.<br>
                                <span class="text-hilite">"Your trust is our greatest motivation"</span>

                            <br><br>
                        </span>
                    </center>
                </div-->
                <div class="card-footer">
                   <span style="font-size:9px">X581967</span>
                </div>
            </div>
            <div :class="cardtab2" id="odc" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">SAP SWIFT Closing Status Performace</h3>
                    </div>
                    <div class="option-box">
                    </div>
                </div>
                <div class="card-content">
                    <div class="toolbar">
                        <div class="toolbar-left">
                            <div class="toolbar toolbar-default">
                                <span style="padding-top: 6px; padding-right: 4px;">Hangar </span>
                                <select v-on:change="handlerfilterline()" v-model="table.serverParams.filterhangar">
                                    <option value="">All</option>
                                    <option value="H-1">Hangar 1</option>
                                    <option value="H-3">Hangar 3</option>
                                    <option value="H-4">Hangar 4</option>
                                    <option value="HSUB">KSO-SUB</option>
                                    <option value="PCB">Pondok Cabe</option>
                                </select>
                            </div>                        
                        </div>
                        <div class="toolbar-left">
                            <div class="toolbar toolbar-default">
                                <span style="padding-top: 6px; padding-right: 4px; padding-left: 5px;">Line </span>
                                <select v-on:change="handlerfilterline()" v-model="table.serverParams.filterline">
                                    <option value="">All</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>                                                              
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>    
                                </select>
                            </div>                        
                        </div>
                        <div class="toolbar-right">
                            <div class="toolbar-item" style="margin-right: 10px;">
                                <button v-on:click="handlerlayout()" class="button is-success">
                                    <i class='material-icons'>
                                        grid_on
                                    </i>
                                    Layout
                                </button>
                            </div>                         
                        </div>
                    </div>
                    <div id="list-sync_wrapper" class="dataTables_wrapper no-footer">
                        <div class="dataTables_length" id="list-sync_length">
                            <label>Show 
                                <select name="list-sync_length"
                                    aria-controls="list-sync" class="">
                                    <option value="10">10</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="-1">All</option>
                                </select> entries
                            </label>
                        </div>
                             <loading style="margin-top: 50px;"
                                :active.sync="loading.isLoading" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>                       
                        <vue-good-table
                            :columns="table.fields" 
                            ref="table-odcs"
                            :rows="table.rows"
                            :line-numbers="true"
                            mode="remote"
                            :search-options="{
                                enabled: false,
                                trigger: 'enter',
                                skipDiacritics: true,
                                placeholder: 'Type and enter to search'
                            }"
                            :select-options="{ 
                                enabled: true,
                                selectOnCheckboxOnly: true
                            }"                            
                            @on-search="onColumnSearch"
                            @on-page-change="onPageChange"
                            @on-sort-change="onSortChange"
                            @on-column-filter="onColumnFilter"
                            @on-per-page-change="onPerPageChange"

                            :totalRows="table.totalRows"
                            :pagination-options="{
                                enabled: true,
                                mode: 'records',
                                perPage: table.serverParams.perPage,
                                position: 'bottom',
                                perPageDropdown:  table.perPageDropDown,
                                dropdownAllowAll: true,
                                setCurrentPage: table.serverParams.page,
                                nextLabel: 'Next',
                                prevLabel: 'Prev',
                                rowsPerPageLabel: 'Rows per page',
                                ofLabel: 'of',
                                pageLabel: 'page', // for 'pages' mode
                                allLabel: 'All',
                            }"
                            styleClass="vgt-table striped condensed">
                            <div slot="selected-row-actions">
                                <button v-on:click="hiderow()" class="button"><i class='material-icons'>visibility</i>Hide</button>
                                <button v-on:click="showrow()" class="button"><i class='material-icons'>visibility</i>Show All</button>
                            </div>                            
                            <div slot="table-actions">
                            </div>
                            
                            <template slot="table-row"  slot-scope="props">
                                <span v-if="props.column.field == 'linktracking'">

                                    <a :href="props.formattedRow[props.column.field]" target="_blank">
                                        <button v-if="props.formattedRow['source']=='XPREAM'" class="button is-secondary is-success" style="line-height:25px; padding:0px 10px;">Job Tracking</button>
                                        <button v-else style="line-height:25px; padding:0px 10px;" class="button is-secondary">Job Tracking</button>
                                    </a>
                                </span>
                                <span v-else-if="props.column.field == 'linkmrm'">
                                    <a :href="props.formattedRow[props.column.field]" target="_blank">
                                        <button v-if="props.formattedRow['source']=='XPREAM'" class="button is-secondary is-success" style="line-height:25px; padding:0px 10px;">MRM</button>
                                        <button v-else style="line-height:25px; padding:0px 10px;" class="button is-secondary">MRM</button>
                                    </a>
                                </span>
                                <span v-else-if="props.column.field == 'perfjob'" style="color:blue; font-weight:bold; font-size:14px;">
                                    {{props.formattedRow[props.column.field]}}
                                </span>
                                <span v-else>
                                    <div class="flex-middle-default">
                                        {{props.formattedRow[props.column.field]}}
                                    </div>
                                </span>



                            </template>

                        </vue-good-table>
                    </div>
                </div>
            </div>


                 <!-- modal layout -->
                <div class="modal-box" id="modal-layout" data-keyboard="false" data-backdrop="static">
                    <div class="modal sm">
                        <span class="close" v-on:click="hideModal('modal-layout')"></span>
                            <div class="modal-header">
                                <h2 class="title">Arrange Table Layout</h2>
                            </div>
                            <div class="modal-body" style="position: relative; height:500px; overflow-y:auto;">
                                <draggable 
                                :list="table.fields"
                                class="list-group"
                                ghost-class="ghost"
                                v-bind="dragOptions"
                                @start="drag = true"
                                @end="drag = false"
                                >
                                <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                                    <div class="list-group-item" v-for="(element, index) in table.fields" :key="index + 0">
                                    <i :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
                                  " @click="element.fixed = !element.fixed" aria-hidden="true"></i>
                                    <span v-if="element.label !== 'ID'">
                                        <div class="is-row" v-if="element.hidden==false" style="font-weight:bold;">
                                            <div class="is-col is-70">
                                                {{element.label}}
                                            </div>
                                            <div class="is-col is-10">
                                                <button class="button is-100 is-secondary is-success" style="padding:0px !important;" v-on:click="element.hidden = true">HIDE</button>
                                            </div>
                                        </div>
                                        <div class="is-row" v-else>
                                            <div class="is-col is-70">
                                               {{element.label}}
                                            </div>
                                            <div class="is-col is-10">
                                                <button class="button is-100 is-default" v-on:click="element.hidden = false">SHOW</button>
                                            </div>                                               
                                        </div>
                                    </span>
                                    </div>
                                </transition-group>
                                </draggable>
                            </div>
                            <div class="modal-footer" style="">
                                <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-layout')">Close</button>
                                <!--button v-on:click="" class="button is-success" type="submit" id="btn-save-layout"> Save </button-->
                            </div>
                        <!-- </form> -->
                    </div>
                </div>

        </div>

    

    </div>
    
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

import draggable from 'vuedraggable';

export default {

    components: {
        VueGoodTable, Loading, draggable
    },

    data: () => ({
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        table_show: false,

        sync_history: {},

        table: {
            rows: [],
            fields: [          
                {
                     label: 'LINE',
                     field: 'line',
                     hidden: false,
                 },
                {
                    label: 'A/C Reg',
                    field: 'acreg',
                    hidden: false,
                },
                {
                    label: 'Maintenance Type',
                    field: 'maintype',
                    hidden: false,
                },
                {
                    label: 'Revision No',
                    field: 'revision',
                    hidden: false,
                },
                {
                    label: 'Progress',
                    field: 'prog',
                    hidden: false,
                },                
                {
                    label: 'Performance',
                    field: 'perfjob',
                    hidden: false,
                },                
                {
                    label: 'CRTD',
                    field: 'CRTD',
                    hidden: false,
                },
                {
                    label: 'REL',
                    field: 'REL',
                    hidden: false,
                },
                {
                    label: 'REL PCNF',
                    field: 'RELPCNF',
                    hidden: false,
                },                
                {
                    label: 'REL CNF',
                    field: 'RELCNF',
                    hidden: false,
                },
                {
                    label: 'TECO',
                    field: 'TECOCLSD',
                    hidden: false,
                },                              
                {
                    label: 'Act Close',
                    field: 'actclose',
                    hidden: false,
                },
                {
                    label: 'DataSource',
                    field: 'source',
                    hidden: false,
                },
                 {
                    label: 'Job Tracking',
                    field: 'linktracking',
                    hidden: false,
                },
                {
                    label: 'MRM',
                    field: 'linkmrm',
                    hidden: false,
                },
                {
                    label: 'Last Update',
                    field: 'SYNC',  
                    hidden: false,                
                },                                                
            ],
            totalRows: '',
            serverParams: {
                columnFilters: {
                },
                usertype: 'all',
                sort_type: '',
                sort_field: '',
                page: 1, 
                perPage: 10,
                search_query: '',
                searchTerm: '',
                filterline: '',
                filterhangar: '',
            },
            perPageDropDown: [10, 25, 50, 100],
        },

        tab1: 'tab-link active',
        tab2: 'tab-link',
        cardtab1: 'card tab-content active',
        cardtab2: 'card tab-content',
        cust_access: false,
        drag: false,

        analytics: {
            data: [],
            success: 0
        },
    }),

    mounted() {
        //window.location.reload(true);
        this.permissionHandler();  
        //this.initanalytics();
    },

    computed: {     
        dragOptions() {
          return {
            animation: 200,
            group: "description",
            disabled: false,
            ghostClass: "ghost"
          };
        },
        user: function () {
            return JSON.parse(localStorage.getItem('user'));
        }
    },
    methods: {
        /*initanalytics: function() {
            axios.get('/api/dashboard/analytics_2020')
            .then( res => {
                if(res.data.success){
                this.analytics.data = res.data.data[0];
                this.analytics.success = res.data.success;
                console.log(this.analytics.data);
                }
            })
        },*/

        checkbirthdate: function(){
            let currentdate = new Date(new Date().setTime(new Date().getTime()) + (/*GMT*/7*60*60*1000)).toISOString().split('T')[0];
            let datemonth = currentdate.substr(4);
            let birthdate = null;
            if(this.user.length>4){
                birthdate = this.user.birthday.substr(4);
            }
            
            //console.log(datemonth);
            //console.log(birthdate);
            if(datemonth==birthdate){
                return true;
            }
            else{
                return false;
            }
        },


        hiderow: function(){
            for (let i = 0; i < this.$refs['table-odcs'].selectedRows.length; ++i) {
                //console.log(this.$refs['table-odcs'].selectedRows[i].originalIndex);
                $("tbody tr:eq("+this.$refs['table-odcs'].selectedRows[i].originalIndex+")").attr("hidden",true);
            }

        },
        showrow: function(){
            $("tbody tr").attr("hidden",false);
        },
        handlerlayout: function() {

            $('#modal-layout').modal('show');

        },

        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },

        permissionHandler: function() {
            if(this.$can('pc_hangar_tracking_system_customer_edit')) {
                this.cust_access = true;
            }
        },

        handlerfilterline(){
            this.table.serverParams.page = 1;
            this.initData();
        },

        odcls: function(){
            if(this.cust_access) return;      
            this.tab2 = 'tab-link active';
            this.tab1 = 'tab-link';
            this.cardtab2 = 'card tab-content active';
            this.cardtab1 = 'card tab-content';            
            this.initData();

        },

        welcome: function(){
            this.tab1 = 'tab-link active';
            this.tab2 = 'tab-link';
            this.cardtab1 = 'card tab-content active';
            this.cardtab2 = 'card tab-content';            
        },

        initData: function() {
            this.loading.isLoading = true
            axios.post('/api/dashboard/spreadsheet_data', this.table.serverParams)
            .then( res => {
                this.table.rows = res.data.data
                this.table.totalRows = res.data.total
                this.loading.isLoading = false
                //this.syncHistory()
            })
        },

        updateParams(newProps) {
            this.table.serverParams = Object.assign({}, this.table.serverParams, newProps)
        },
        
        onPageChange(params) {
            this.updateParams({page: params.currentPage})
            this.initData()
        },

        onPerPageChange(params) {
            this.updateParams({perPage: params.currentPerPage})
            this.updateParams({page: 1})
            this.initData()
        },

        onSortChange(params) {
            this.updateParams({
                sort_type: params[0].type,
                sort_field: params[0].field
            });
            this.updateParams({page: 1})
            this.initData()
        },
        
        onColumnFilter(params) {
            this.updateParams(params)
            this.updateParams({page: 1})
            this.initData()
        },

        onColumnSearch(params) {
            this.updateParams(params)
            this.updateParams({page: 1})

            this.initData()
        },

        // load items is what brings back the rows from server

    },
}
</script>