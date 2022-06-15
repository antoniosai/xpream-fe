<style scoped>
::v-deep .is-det-quote span {
    white-space: nowrap !important;
    font-size:9pt !important;
}

::v-deep .card-det-quote {
    height: 165px !important;
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

::v-deep .btn-panel-toggle {
    cursor: pointer !important;
}

::v-deep .tbl-quotation-rev {
    font-size: 9pt !important;
}

::v-deep .tbl-quotation-rev td {
    height: 2px !important;
    padding: 3px !important;
    border: none !important ;
}

::v-deep .tbl-quotation-rev td:nth-child(1)  {
    text-align: right !important;
}

::v-deep .tbl-quotation-rev td:nth-child(2), .tbl-quotation-rev td:nth-child(3) {
    text-align: left !important;
    /* white-space: normal; */
}

::v-deep legend {
    line-height: unset !important;
}

</style>

<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body">
            <div class="card">
                <div class="card-header ">
                    <div class="title-area">
                        <h5 class="title">
                            {{ quotation.detail }}
                            <template>
                                <span v-if="quotation.isStatusShow" class="all">{{quotation.status}}</span>  
                            </template>

                        </h5>
                        <span class="subtitle total-project">{{ quotation.title }}</span>

                    </div>

                    <div class="option-box">
                        <template v-if="quotation.isOptionShow">
                            <div class="option-item">
                                <button v-on:click="handlerModalCreateQuotation()">Create Quotation</button>
                                <span>&nbsp;</span>
                                <button class="button is-danger is-small" style="width: 34px; height: 34px; padding-right: 10px; padding-left: 17px;">
                                    <i class="material-icons" style="font-size: 12pt;">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="card-content" id="content-quotation">
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

                        <template v-if="!quotation.isQuotationEmpty">
                            <div class="is-row">
                                <div class="is-col is-25">
                                    <div style="text-align: center; background-color: #00C2EB; color: white;" class="card card-det-quote">
                                        <div class="is-row">
                                            <table class="tbl-quotation-rev">
                                                 <tr>
                                                     <td>Customer</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.CUSTOMER_NAME}}</b></td>
                                                 </tr>
                                                  <tr>
                                                     <td>Ext. Reference</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.EXT_REF}}</b></td>
                                                 </tr>
                                                 <tr>
                                                     <td>Contract</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.CONTRACT}}</b></td>
                                                 </tr>
                                                 <tr>
                                                     <td>Issued By</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.ISSUED_BY_NAME}}</b></td>
                                                 </tr>
                                                  <tr>
                                                     <td>Responsible</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.RESPONSIBLE_CONTACT}}</b></td>
                                                 </tr>
                                                 <tr>
                                                     <td>Cust. Contact</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.CUSTOMER_CONTACT}}</b></td>
                                                 </tr>
                                             </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col is-25">
                                    <div style="text-align: center; background-color: #00A664; color: white;" class="card card-det-quote">
                                         <div class="is-row">
                                             <table class="tbl-quotation-rev">
                                                 <tr>
                                                     <td>Quotation Date</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.CREATED_AT.substring(0, 10)}}</b></td>
                                                 </tr>
                                                  <tr>
                                                     <td>Expire Date</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.EXPIRE_DATE}}</b></td>
                                                 </tr>
                                                 <tr>
                                                     <td>PCRD</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.PRICING_COND_REF_DATE}}</b></td>
                                                 </tr>
                                                 <tr>
                                                     <td>Currency</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.CURRENCY}}</b></td>
                                                 </tr>
                                                  <tr>
                                                     <td>Rate</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.RATE}}</b></td>
                                                 </tr>
                                             </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col is-25">
                                    <div style="text-align: center; background-color: #F69A3A; color: white;" class="card card-det-quote">
                                         <div class="is-row">
                                            <table class="tbl-quotation-rev">
                                                 <tr>
                                                     <td>Contract Type</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.CONTRACT}}</b></td>
                                                 </tr>
                                                  <tr>
                                                     <td>Aircraft</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.AIRCRAFT}}</b></td>
                                                 </tr>
                                                 <tr>
                                                     <td>MP</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.MAINTENANCE_PROGRAM}}</b></td>
                                                 </tr>
                                                 <tr>
                                                     <td>Station</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.STATION}}</b></td>
                                                 </tr>
                                                  <tr>
                                                     <td>Turnaround</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.TURN_AROUND_TIME}} day(s)</b></td>
                                                 </tr>
                                             </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col is-25">
                                    <div style="text-align: center; background-color: #E2493F; color: white;" class="card card-det-quote">
                                         <div class="is-row">
                                            <table class="tbl-quotation-rev">
                                                 <tr>
                                                     <td>Date of Service</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.DATE_SERVICE}}</b></td>
                                                 </tr>
                                                  <tr>
                                                     <td>VOQ</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.VALID_UNTIL}}</b></td>
                                                 </tr>
                                                 <tr>
                                                     <td>Groundtime Stars</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.GROUNDTIME_START.substring(0, 16)}}</b></td>
                                                 </tr>
                                                 <tr>
                                                     <td>Groundtime Ends</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.GROUNDTIME_END.substring(0, 16)}}</b></td>
                                                 </tr>
                                                  <tr>
                                                     <td>Payment Condition</td>
                                                     <td>:</td>
                                                     <td><b>{{rev_detail.PAYMENT_CONDITION}}</b></td>
                                                 </tr>
                                             </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- panel pricing condition -->
                            <div>
                                <div class="panel panel-default">
                                    <div class="panel-heading panel-heading-default">
                                        <div style="text-align: left" class="action-header"> 
                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-pricing', 'pricing')">
                                                <i id="btn-panel-pricing" class='material-icons'>
                                                    keyboard_arrow_right
                                                </i>
                                                <div style="margin-top: -27px; margin-left: 23px;  "> Pricing Conditions </div>
                                            </div> 
                                        </div>
                                    </div>
                                        <transition v-show="panel.pricing" name="panel-collapse">
                                        <div v-show="panel.pricing" class="panel-body">
                                            <div class="is-row">
                                                <div class="is-col is-50">
                                                    <div id="vueapp" class="vue-app">
                                                        <kendo-treeview>
                                                            <li data-expanded="false">
                                                                <span class="k-icon k-i-toggle-full-screen-mode"></span>
                                                                Resource Conditions [<b>3</b>]
                                                                <ul>
                                                                    <div style="margin-left: 29px; margin-bottom: 8px; margin-top: 5px;">
                                                                        <span class="k-icon k-i-ungroup"></span> <b>MECHANIC</b>
                                                                        <span> - 90.00 CHF</span>
                                                                        <div style="margin-left: 22px; font-size: 10pt;">
                                                                            Target = STAFF/Type of Work(Commercial) = MECH/ATA Chapter
                                                                        </div>
                                                                    </div>
                                                                    <div style="margin-left: 29px;  margin-bottom: 8px;">
                                                                        <span class="k-icon k-i-ungroup"></span> <b>AVIONIC</b>
                                                                        <span> - 100.00 CHF</span>
                                                                        <div style="margin-left: 22px; font-size: 10pt;">
                                                                            Target = STAFF/Type of Work(Commercial) = AVIONIC/ATA Chapter
                                                                        </div>
                                                                    </div>
                                                                    <div style="margin-left: 29px;  margin-bottom: 8px;">
                                                                        <span class="k-icon k-i-ungroup"></span> <b>CABIN</b>
                                                                        <span> - 80.00 CHF</span>
                                                                        <div style="margin-left: 22px; font-size: 10pt;">
                                                                            Target = STAFF/Type of Work(Commercial) = CABI/ATA Chapter
                                                                        </div>
                                                                    </div>
                                                                </ul>
                                                            </li>
                                                            <li data-expanded="false">
                                                                <span class="k-icon k-i-gear"></span>
                                                                Material Conditions [<b>2</b>]
                                                                <ul>
                                                                    <div style="margin-left: 29px; margin-bottom: 8px; margin-top: 5px;">
                                                                        <span class="k-icon k-i-ungroup"></span> <b>EXPENDABLE</b>
                                                                        <span> - Avereage Price + 10.00%</span>
                                                                        <div style="margin-left: 22px; font-size: 10pt;">
                                                                            Target = PART/Mat Class = E/Mat Type = /ATA Chapter
                                                                        </div>
                                                                    </div>
                                                                    <div style="margin-left: 29px;  margin-bottom: 8px;">
                                                                        <span class="k-icon k-i-ungroup"></span> <b>CONSUMABLE</b>
                                                                        <span> - Avereage Price + 10.00%</span>
                                                                        <div style="margin-left: 22px; font-size: 10pt;">
                                                                            Target = PART/Mat Class = R/Mat Type = /ATA Chapter
                                                                        </div>
                                                                    </div>
                                                                </ul>
                                                            </li>
                                                            <li data-expanded="false">
                                                                <span class="k-icon k-i-select-box"></span>
                                                                Surcharge Conditions [<b>1</b>]
                                                                <ul>
                                                                    <div style="margin-left: 29px; margin-bottom: 8px; margin-top: 5px;">
                                                                        <span class="k-icon k-i-ungroup"></span> <b>COMPONENT HANDLING</b>
                                                                        <span> - 50.00 CHF</span>
                                                                        <div style="margin-left: 22px; font-size: 10pt;">
                                                                            Target = PART/Mat Class = E/Mat Type = /ATA Chapter
                                                                        </div>
                                                                    </div>
                                                                </ul>
                                                            </li>
                                                            <li data-expanded="false">
                                                                <span class="k-icon k-i-delicious-box"></span>
                                                                CAP Limit Conditions [<b>2</b>]
                                                                <ul>
                                                                    <div style="margin-left: 29px; margin-bottom: 8px; margin-top: 5px;">
                                                                        <span class="k-icon k-i-ungroup"></span> <b>MHRS-CAP</b>
                                                                        <span> - Cap 20.00 Hrs(Colect Level Event)</span>
                                                                        <div style="margin-left: 22px; font-size: 10pt;">
                                                                            Target = STAFF/Type of Work(Commercial) = /ATA Chapter
                                                                        </div>
                                                                    </div>
                                                                    <div style="margin-left: 29px;  margin-bottom: 8px;">
                                                                        <span class="k-icon k-i-ungroup"></span> <b>C/E-MAT-CAP</b>
                                                                        <span> - Cap 100.00 CHF (Colect Lecel Event)</span>
                                                                        <div style="margin-left: 22px; font-size: 10pt;">
                                                                            Target = PART/Mat Class = C-E/Mat Type = /ATA Chapter
                                                                        </div>
                                                                    </div>
                                                                </ul>
                                                            </li>
                                                        </kendo-treeview>
                                                    </div>
                                                </div>
                                                <div class="is-col is-50">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading panel-heading-default">
                                                            <div style="text-align: left" class="action-header"> 
                                                                Condition Information                                                                    
                                                            </div>
                                                        </div>
                                                        <div class="panel-body">


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </transition>
                                </div>
                            </div>

                            <!-- panel quotation scope -->
                            <div>
                                <div class="panel panel-default">
                                    <div class="panel-heading panel-heading-default">
                                        <div style="text-align: left" class="action-header"> 
                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-scope', 'scope')">
                                                <i id="btn-panel-scope" class='material-icons'>
                                                    keyboard_arrow_right
                                                </i>
                                                <div style="margin-top: -27px; margin-left: 23px;  "> Quotation Scope </div>
                                            </div> 
                                        </div>
                                    </div>
                                        <transition v-show="panel.scope" name="panel-collapse">
                                        <div v-show="panel.scope" class="panel-body">
                                            <div class="is-row">
                                                <div class="is-col is-50">
                                                    <div>
                                                        <div class="panel panel-default">
                                                            <div class="panel-heading panel-heading-default">
                                                                <div style="text-align: left" class="action-header"> 
                                                                    Maintenance Event                                                                    
                                                                </div>
                                                            </div>
                                                            <div class="panel-body">


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="is-col is-50">
                                                    <div>
                                                        <div class="panel panel-default">
                                                            <div class="panel-heading panel-heading-default">
                                                                <div style="text-align: left" class="action-header"> 
                                                                    Available Items                                                                    
                                                                </div>
                                                            </div>
                                                            <div class="panel-body">


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </transition>
                                </div>
                            </div>

                            <!-- panel quotation chapters -->
                            <div>
                                <div class="panel panel-default">
                                    <div class="panel-heading panel-heading-default">
                                        <div style="text-align: left" class="action-header"> 
                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-chapters', 'chapters')">
                                                <i id="btn-panel-chapters" class='material-icons'>
                                                    keyboard_arrow_right
                                                </i>
                                                <div style="margin-top: -27px; margin-left: 23px;  "> Quotation Chapters </div>
                                            </div> 
                                        </div>
                                    </div>
                                        <transition v-show="panel.chapters" name="panel-collapse">
                                        <div v-show="panel.chapters" class="panel-body">
                                            <!-- panel routine -->
                                            <div>
                                                <div class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left" class="action-header"> 
                                                            <div>
                                                                <i class='material-icons'>
                                                                    layers
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 30px;  "> 01-ROUTINE </div>
                                                            </div> 
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="panel-body">


                                                    </div>
                                                </div>
                                            </div>

                                            <!-- panel routine -->
                                            <div>
                                                <div class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left;" class="action-header"> 
                                                            <div>
                                                                <i class='material-icons'>
                                                                    layers
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 30px;  "> 02-NON-ROUTINE </div>
                                                            </div> 
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="panel-body">


                                                    </div>
                                                </div>
                                            </div>

                                            <!-- panel routine -->
                                            <div>
                                                <div class="panel panel-default">
                                                    <div class="panel-heading panel-heading-default">
                                                        <div style="text-align: left" class="action-header"> 
                                                            <div>
                                                                <i class='material-icons'>
                                                                    layers
                                                                </i>
                                                                <div style="margin-top: -27px; margin-left: 30px;  "> 03-FINDINGS </div>
                                                            </div> 
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="panel-body">


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </div>

                            <!-- panel quotation references -->
                            <div>
                                <div class="panel panel-default">
                                    <div class="panel-heading panel-heading-default">
                                        <div style="text-align: left" class="action-header"> 
                                            <div class="btn-panel-toggle" v-on:click="handlerCollapse('btn-panel-references', 'references')">
                                                <i id="btn-panel-references" class='material-icons'>
                                                    keyboard_arrow_right
                                                </i>
                                                <div style="margin-top: -27px; margin-left: 23px;  "> Quotation References </div>
                                            </div> 
                                        </div>
                                    </div>
                                        <transition v-show="panel.references" name="panel-collapse">
                                        <div v-show="panel.references" class="panel-body">
                                            <!-- table zone -->

                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            Data revision not available
                        </template>

                    </div>
                </div>
            </div>

            <!-- modal create quotation -->
            <div class="modal-box" id="modal-create-quotation">
                <div class="modal md">
                    <span class="close" v-on:click="hideModal('modal-create-quotation')"></span>
                        <div class="modal-header">
                            <h2 class="title">Create Quotation</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <template v-if="quotation.isFirstForm">
                                 <div class="form-item is-inline">
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Ext. Reference</label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.ext_ref" type="text" id="ext_ref" name="name">
                                         </div>
                                     </div>
                                </div>
                                <div class="form-item is-inline">
                                    <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Expire Date <span class="is-req">*</span></label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.expire_date" id="expire_date" type="date" name="name">
                                         </div>
                                     </div>
                                </div>
                                <div class="form-item is-inline">
                                    <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Currency <span class="is-req">*</span></label>
                                         </div>
                                         <div style="margin-left: -35px;" class="is-col is-30">
                                            <select v-model="form.currency" name="" id="currency" v-on:change="handlerChangeCurrency()">
                                                <option selected disabled value="">Currency</option>
                                                <option v-for="cur in currency" :key="cur.code" v-bind:value="cur.code">{{cur.code}}</option>
                                            </select>
                                         </div>
                                         <div class="is-col is-50">
                                             <input v-model="form.currency_label" disabled type="text" name="" id="currency_label">
                                         </div>
                                     </div>
                                </div>
                                <div class="form-item is-inline">
                                    <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Rate</label>
                                         </div>
                                         <div style="margin-left: -35px;" class="is-col is-30">
                                            <input v-model="form.rate" disabled type="text" name="name">
                                         </div>
                                         <div class="is-col is-50">
                                            <input v-model="form.rate_detail" disabled type="text" name="name">
                                         </div>
                                     </div>
                                </div>
                                <div class="form-item is-inline">
                                    <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Contract</label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.contract" type="text" name="" id="">
                                         </div>
                                     </div>
                                </div>
                                <div class="form-item is-inline">
                                    <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Responsible (Contact)</label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.responsible" type="text" name="name">
                                         </div>
                                     </div>
                                </div>
                                <div class="form-item is-inline">
                                    <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Backlink to Quotation</label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.backlink" type="text" name="name">
                                         </div>
                                     </div>
                                </div>
                                <div class="form-item is-inline">
                                    <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Customer Contact</label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.cust_contact" type="text" name="name">
                                         </div>
                                     </div>
                                </div>
                            </template>
                            <template v-if="quotation.isSecondForm">
                                <div class="form-item is-inline">
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Date of Service <span class="is-req">*</span></label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.date_of_service" type="date" name="">
                                         </div>
                                     </div>
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Aircraft <span class="is-req">*</span></label>
                                         </div>
                                         <div class="is-col is-60">
                                            <input v-on:click="handlerModalAircraft()" v-model="form.aircraft_reg" type="text" name="">
                                         </div>
                                         <div class="is-col is-20">
                                             <select v-model="form.aircraft_type" name="" id="">
                                                 <option selected disabled value="">AC Type</option>
                                                 <option v-for="type in ac_type" :key="type.ID" v-bind:value="type.ID">{{type.AIRCRAFT}}</option>
                                             </select>
                                         </div>
                                     </div>
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Maintenance Program</label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.maintenance_program" type="text" name="">
                                         </div>
                                     </div>
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Turnaround Time</label>
                                         </div>
                                         <div  class="is-col is-60">
                                            <input min="0" v-model="form.turnaround_time" type="number" name=""> 
                                         </div>
                                         <div class="is-col is-20">
                                             <span style="margin-left: -10px; display:inline-block; margin-top: 7px;">Day(s) </span>
                                         </div>
                                     </div>
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Groundtime Starts (<span style="font-weight: normal">Date/Time</span>)<span class="is-req">*</span></label>
                                         </div>
                                         <div class="is-col is-60">
                                            <input v-model="form.groundtime_start_date" type="date" name="">
                                         </div>
                                         <div class="is-col is-20">
                                            <input v-model="form.groundtime_start_time" type="time" name="">

                                         </div>
                                     </div>
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Groundtime Ends (<span style="font-weight: normal">Date/Time</span>)<span class="is-req">*</span> </label>
                                         </div>
                                         <div class="is-col is-60">
                                            <input v-model="form.groundtime_end_date" type="date" name="">

                                         </div>
                                         <div class="is-col is-20">
                                            <input v-model="form.groundtime_end_time" type="time" name="">
                                         </div>
                                     </div>
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Station</label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.station" type="text" name="">
                                         </div>
                                     </div>
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Valid Until</label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.valid_until" type="date" name="">
                                         </div>
                                     </div>
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Pricing Condition Reference Date</label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.pricing_condition" type="date" name="">
                                         </div>
                                     </div>
                                     <div class="is-row">
                                         <div class="is-col is-20">
                                            <label>Payment Condition</label>
                                         </div>
                                         <div class="is-col is-80">
                                            <input v-model="form.payment_condition" type="text" name="">
                                         </div>
                                     </div>
                                </div>
                            </template>
                            
                        </div>
                        <div class="modal-footer" >
                            <button v-on:click="handlerButton('prev')"  :disabled="quotation.prev" style="margin-left: 0px;" class="button"  type="button" id="btn-save-quotation"><i class="material-icons">chevron_left</i> Prev</button>
                            <button v-on:click="handlerButton('next')" :disabled="quotation.next" style="margin-left: 0px;" class="button"  type="button" id="btn-save-quotation">Next <i class="material-icons">chevron_right</i> </button>
                            <button :disabled="quotation.finish" style="margin-left: 0px;" v-on:click="handlerSaveQuotation()" type="button" class="button" id="btn-create-quotation-revision">Finish</button>
                            <button style="margin-left: 0px;" class="button is-default" v-on:click="hideModal('modal-create-quotation')">Cancel</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /modal create quotation -->

            <!-- modal select aircraft -->
             <div class="modal-box" id="modal-select-aircraft">
                <div class="modal md">
                    <span class="close" v-on:click="hideModal('modal-select-aircraft')"></span>
                        <div class="modal-header">
                            <h2 class="title">Aircraft List</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
                                <div>
                                    <loading    
                                        :active.sync="loading.isLoadingAircraft" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="loading.loaderType">
                                    </loading>
                                        <template>
                                            <div>
                                                <vue-good-table
                                                    :columns="aircraft.fields"
                                                    :rows="aircraft.rows"
                                                    @on-row-dblclick="onRowAircraftDoubleClick"
                                                    styleClass="vgt-table bordered striped condensed"
                                                    max-height="388px"  
                                                    :sort-options="{
                                                        enabled: true,
                                                        initialSortBy: {field: 'ac_reg', type: 'asc'}
                                                    }"                                        
                                                    :search-options="{
                                                        enabled: true,
                                                        trigger: 'keyup',
                                                        skipDiacritics: true,
                                                        placeholder: 'Fill to search'
                                                    }"
                                                    :pagination-options="{
                                                        enabled: true,
                                                        mode: 'records',
                                                        perPage: -1,
                                                        position: 'bottom',
                                                        perPageDropdown: aircraft.perPage,
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
                                        <label for=""><span style="font-size: 8pt!important; " class="is-req">*Double click to select item.</span></label>
                                </div>                                
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-select-aircraft')">Close</button>
                        </div>
                </div>
            </div>
            <!-- /modal select aircfatr -->

        </div>
    </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';
import swal from 'sweetalert'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import FieldAircraft from "../datatable/FieldAircraft.js";
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-good-table/dist/vue-good-table.css';

// import "vuetify/dist/vuetify.min.css"; 
import Vue from 'vue'

// import '@progress/kendo-ui'
import '@progress/kendo-ui/js/kendo.treeview'
import '@progress/kendo-theme-default/dist/all.css'

import { TreeView,
        TreeViewItem,
        TreeViewInstaller } from '@progress/kendo-treeview-vue-wrapper'

Vue.use(TreeViewInstaller)


export default {
    components: {
        Loading,
        VueGoodTable,
        TreeView
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'))
        },

        quoteNumber() {
            var page_url = window.location.href.split( '/' );
            var quote_number = page_url[ page_url.length - 2];
            return quote_number;
        },

        quoteNumberRev() {
            var page_url = window.location.href;
            var rev_number = page_url.substr(page_url.lastIndexOf('/') + 1);
            return rev_number;
        },
    },

    data: () => ({

        loading: {
            isLoadingAircraft: false,
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        

        quotation: {
            title: '',
            type: '',
            number: '',
            detail: '',
            isOptionShow: false,
            isStatusShow: false,
            isQuotationEmpty: true,
            isQuotationFound: false,
            prev: true,
            next: false,
            finish: true,
            isFirstForm: true,
            isSecondForm: false,
            status: 'Draft',
        },
        panel: {
            pricing: false,
            scope: false,
            chapters: false,
            references: false
        },
        currency: [],
        ac_type: [],
        rev_detail: [],
        form: {
            quotation_number: '',
            ext_ref: '',
            expire_date: '',
            currency: '',
            currency_label: '',
            rate: '',
            rate_detail: '',
            contract: '',
            responsible: '',
            backlink: '',
            cust_contact: '',
            date_of_service: '',
            aircraft_reg: '',
            aircraft_id: '',
            aircraft_type: '',
            maintenance_program: '',
            turnaround_time: '',
            groundtime_start_date: '',
            groundtime_start_time: '',
            groundtime_end_date: '',
            groundtime_end_time: '',
            station: '',
            valid_until: '',
            pricing_condition: '',
            payment_condition: ''               
        },
        aircraft: {
            fields: FieldAircraft,
            rows: [],
            perPage: 10,
        },
    }),

    mounted() {
        this.initQuote();  
    },

    watch: {},

    methods: {
        initQuotation: function(quotation_number){
            return new Promise((resolve, reject) => {
                axios.get('/api/quotation/get_quotation/' + quotation_number)
                .then(res => {
                    if(res.data.hasOwnProperty('QUOTATION_NUMBER')) {
                        this.quotation.title = res.data.TITLE;
                        this.quotation.type = res.data.QUOTATION_TYPE;
                        this.quotation.number = res.data.QUOTATION_NUMBER;  
                        this.quotation.isQuotationFound = true;
                        resolve();
                    }else {
                        this.quotation.isQuotationFound = false;
                        document.getElementById("content-quotation").innerHTML = "Quotation not found";
                        resolve();
                    }
                })
                .catch(e => {
                    console.log("Error: " + e);
                    resolve();
                })
            })
        },

        initQuote: function() {
            let rev_number = this.quoteNumberRev;
            let quote_number = this.quoteNumber;

            if(isNaN(rev_number) || rev_number < 0) {
                window.open('/trb/detail_quotation/404', '_self');
                return;
            }

            this.initQuotation(this.quoteNumber).then(() => {
                if(!this.quotation.isQuotationFound) return;

                if(rev_number < 1) {
                    this.quotation.detail = `Opportunity ${this.quotation.number}/${rev_number} (${this.quotation.type} Quotation)`;
                    this.quotation.isQuotationEmpty = true;
                    this.quotation.isOptionShow = true;
                    this.quotation.isStatusShow = false;
                }else {
                    this.quotation.detail = `${this.quotation.type} ${this.quotation.number}/${rev_number}`;
                    this.initQuotationRev(this.quotation.number, rev_number).then(() => {
                        
                    });
                }

            })
        },

        initCurrency: function() {
            axios.get('/api/currency/get_currency')
            .then(res => {
                this.currency = res.data;
            })
            .catch(res => {
                console.log("Error: " + e);
            })
        },

        initAircraft: function() {
            axios.get('/api/aircraft/get_aircraft')
            .then( res => {
                this.ac_type = res.data.data
            })
        },

        initQuotationRev: function(quotation_number, revision_number) {
            return new Promise((resolve, reject) => {
                axios.post('/api/quotation/get_quotation_rev', {
                    quotation_number: quotation_number,
                    revision_number: revision_number
                })
                .then(res => {
                    if(res.data.hasOwnProperty("ID")) {
                        this.rev_detail = res.data;
                        this.quotation.isQuotationEmpty = false;
                    }else {
                        this.quotation.isQuotationEmpty = true;
                    }
                    resolve();
                })
            })
            .catch(e => {
                console.log("Error: " +e);
                resolve();
            })
        },

        /**
         * Hide modal
         * @param modal_name String
         */
        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
        },

        handlerModalCreateQuotation: function() {
            this.initCurrency();
            this.initAircraft();
            $("#modal-create-quotation").show();
        },

        handlerButton: function(status) {
            if(status == "next") {
                this.quotation.isFirstForm = false;
                this.quotation.isSecondForm = true;
                this.quotation.next = true;
                this.quotation.prev = false;
                this.quotation.finish = false;

            }else {
                this.quotation.isFirstForm = true;
                this.quotation.isSecondForm = false;
                this.quotation.next = false;
                this.quotation.prev = true;
                this.quotation.finish = true;

            }
        },

        handlerCreateQuotation: function() {
            window.open('/trb/detail_quotation/MQ-19807/1', '_self')
        },

        handlerCollapse: function(elem, name) {
            let toogle = ["keyboard_arrow_right", "keyboard_arrow_down"];
            this.panel[name] = !this.panel[name];

            if(this.panel[name]) {
                document.getElementById(elem).innerHTML = toogle[1];
            }else{
                document.getElementById(elem).innerHTML = toogle[0];
            }
        },

        handlerChangeCurrency: function() {
            let data = this.currency.filter(d => d.code === this.form.currency);
            this.form.currency_label = data[0].label;
            this.form.rate = data[0].value;
            this.form.rate_detail = `X IDR = 1 ${data[0].code}`
        },

        handlerFindAircraft: function(){
            return new Promise((resolve, reject) => {
                axios.get('/api/gsmart/get_aircraft')
                .then(res => {
                    this.aircraft.rows = res.data;
                    resolve();
                })
                .catch(e => {
                    console.log("Error " + e);
                    resolve();
                })
            });
        },

        handlerModalAircraft: function(){
            this.aircraft.rows = [];
            this.loading.isLoadingAircraft = true;
            $("#modal-select-aircraft").show();
            this.handlerFindAircraft().then(() => {
                this.loading.isLoadingAircraft = false;
            })

        },

        /**
         * Handle row selection
         * @param param object data from selected row
         */
        onRowAircraftDoubleClick(params) {
            this.form.aircraft_reg = `${params.row.ac_reg} (${params.row.cus_name})`
            this.form.aircraft_id = params.row.id

            this.hideModal('modal-select-aircraft');
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

        handlerSaveQuotation: function(){
            let data_validation = [
                {'element': this.form.expire_date, 'type' : 'Expire date', 'data' : 'string'},
                {'element': this.form.currency, 'type' : 'Currency', 'data' : 'string' },
                {'element': this.form.date_of_service, 'type' : 'Date of service', 'data' : 'string'},
                {'element': this.form.aircraft_id, 'type' : 'Aircraft', 'data' : 'string'},
                {'element': this.form.aircraft_type, 'type' : 'Aircraft type', 'data' : 'string'},
                {'element': this.form.groundtime_start_date, 'type' : 'Groundtime start date', 'data' : 'string'},
                {'element': this.form.groundtime_start_time, 'type' : 'Groundtime start time', 'data' : 'string'},
                {'element': this.form.groundtime_end_date, 'type' : 'Groundtime end date', 'data' : 'string'},
                {'element': this.form.groundtime_end_time, 'type' : 'Groundtime end time', 'data' : 'string'},
            ];
            if(!this.validation(data_validation)) return;

            this.form.quotation_number = this.quotation.number;

            this.handleButton('btn-create-quotation-revision', 'load').then(() => {
                axios.post('/api/quotation/add_quotation_revision', this.form)
                .then(res => {
                    if(res.data.success) {
                        let quotation_number = this.form.quotation_number.split("/").join("-");
                        toastr.success(res.data.message);
                        setTimeout(() => {
                            window.open(`/trb/detail_quotation/${quotation_number}/${res.data.data}`, '_self');
                        }, 800)
                    }else {
                        toastr.warning(res.data.message);
                    }
                    this.handleButton('btn-create-quotation-revision', 'stop');
                })
                .catch(e => {
                    console.log("Error " +e);
                    this.handleButton('btn-create-quotation-revision', 'stop');
                })
            });


        },

        validation: function(elements) {
            for(let i = 0; i < elements.length; i++) {
                if(elements[i].data == "number") {
                    if(elements[i].element <= 0) {
                        toastr.warning(elements[i].type + ' cant be empty');
                        return false;
                    }
                }else {
                    if(elements[i].element == "") {
                        toastr.warning(elements[i].type + ' cant be empty');
                        return false;
                    }
                }
            }
            return true;
        },
        
    }





}
</script>