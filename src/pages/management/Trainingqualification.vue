<style scoped>

::v-deep .query-table {
    padding: 20px;
    border-radius: 8px;
    background-color: #e8eaf6;
    margin-bottom: 20px;
}

::v-deep .cdesc {
    max-width: 400px !important;
    white-space: normal !important;
    overflow: auto;
}

::v-deep .vgt-left-align {
    white-space: normal !important;
}

::v-deep .table.vgt-table {
    font-size: 9px !important;
    border-collapse: collapse !important;
    background-color: #fff !important;
    width: 100% !important;
    max-width: 100% !important;
    table-layout: auto !important;
    border: 1px solid #dcdfe6 !important;
}

::v-deep .vgt-table.bordered td,
.vgt-table.bordered th {
    border: 1px solid #dcdfe6 !important;
    height: 20px !important;
    font-size: 9pt !important;
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

::v-deep .vgt-wrap__footer .footer__navigation__page-btn.disabled,
.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
    box-shadow: 0 0 black !important;
    font-size: 9pt !important;
}

::v-deep .vgt-wrap__footer .footer__navigation__info,
.vgt-wrap__footer .footer__navigation__page-info {
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

::v-deep .vgt-input,
.vgt-select {
    font-size: 9pt !important;
}

::v-deep .footer__row-count__label {
    margin-top: -7px !important;
}

::v-deep .footer__navigation {
    margin-top: -2px !important;
}

::v-deep .vgt-wrap__footer .footer__row-count__select {
    margin-top: -5px !important;
    width: 50px !important;
    padding: 0px 15px 0px 5px;
    border: 0px !important;
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
    border: 1px solid #dcdfe6 !important;
}

::v-deep .vgt-table thead th {
    background: #ffffff !important;
}

::v-deep .action > i.primary {
    color: rgb(51, 132, 255);
}

::v-deep .action > i.primary:hover {
    background-color: rgb(51, 132, 255);
    color: white;
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

.test {
    border: 1px solid red !important;
}
::v-deep .fab-action-button {
    display: none !important;
}
</style>

<template>
    <div>
        <div
            class="card tab-content active"
            style="border-radius: 0px 8px 8px 8px;margin-top:60px;"
        >
            <div class="card-header">
                <div class="title-area">
                    <h3 class="title">Master Data</h3>
                    <span class="subtitle total-project">Unit : <strong><i>{{ selected_unit ? selected_unit : 'Not Selected' }}</i></strong> | Sub-Unit : <strong><i>{{ selected_sub_unit ? selected_sub_unit : 'Not Selected' }}</i></strong></span>
                </div>

                <div class="option-box">
                    <div class="option-item">
                        <span v-if="grant_edit.is_edit && grant_edit.all_unit">
                            <select v-model="selected_unit" @change="changeUnit()">
                                <option value>Pilih Dinas</option>
                                <option
                                    v-for="(unt, idx) in allunit"
                                    :value="unt"
                                    :key="idx"
                                >{{ unt}}</option>>
                            </select>

                            <select v-model="selected_sub_unit" :disabled="selected_unit == ''" @change="setSubUnit">
                                <option value selected>All Unit</option>
                                <option
                                    v-for="(a, idx) in sub_unit"
                                    :value="a.unit"
                                    :key="idx"
                                >{{ a.unit}}</option>>
                            </select>
                        </span>

                        <span v-else>
                            <label>{{selected_unit}}</label>
                        </span>
                    </div>
                    <div class="option-item" style="margin-right: -10px;">
                        <button
                            v-on:click="refresh()"
                            class="button"
                            :disabled="selected_unit == ''"
                        >
                            <i class="material-icons">refresh</i>
                            Refresh
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="is-row">
                    <div class="is-col">
                        
                        
                        <div class="card">
                            <loading
                                :active.sync="loading.job_title.isLoading" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.job_title.color"
                                :loader="loading.job_title.loaderType">
                            </loading>
                            <div class="card-header no-border">
                                <div class="title-area">Job Title Mapping</div>
                                <div class="option-box">
                                    <div class="option-item">
                                        <div class="action">
                                            <i
                                                id="add-row"
                                                v-on:click="handlerShowModal('Add', 'Job Title', '', 'jobtitle')"
                                                class="material-icons primary add-row"
                                                tabindex="0"
                                            >add_circle_outline</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="field.jobtitle"
                                            :rows="jobtitle"
                                            styleClass="vgt-table bordered striped"
                                            :search-options="{
                                    enabled: true,
                                    trigger: 'keyup',
                                    skipDiacritics: true,
                                    placeholder: 'Fill to search'
                                    }"
                                            max-height="350px"
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
                                            <template slot="table-row" slot-scope="props">
                                                <span v-if="props.column.field == 'action'">
                                                    <div class="action">
                                                        <i
                                                            v-on:click="handlerShowModal('Update', 'Job Title', props.formattedRow['id'], 'jobtitle')"
                                                            class="material-icons success edit-user"
                                                        >edit</i>
                                                        <i
                                                            v-on:click="handlerDelete('jobtitle',props.formattedRow['id'])"
                                                            class="material-icons danger delete-user"
                                                        >delete</i>
                                                    </div>
                                                </span>
                                                <span
                                                    v-else-if="props.column.field == 'id'"
                                                >{{('0000' + props.formattedRow[props.column.field]).slice(-4)}}</span>
                                                <span
                                                    v-else
                                                >{{props.formattedRow[props.column.field]}}</span>
                                            </template>
                                        </vue-good-table>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="is-col">
                        <div class="card">
                            
                            <loading
                                :active.sync="loading.training.isLoading" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.training.color"
                                :loader="loading.training.loaderType">
                            </loading>
                            <div class="card-header no-border">
                                <div class="title-area">Training Keyword Mapping</div>
                                <div class="option-box">
                                    <div class="option-item">
                                        <div class="action">
                                            <i
                                                id="add-row"
                                                v-on:click="handlerShowModal('Add', 'Training', '', 'training')"
                                                class="material-icons primary add-row"
                                                tabindex="0"
                                            >add_circle_outline</i>
                                        </div>
                                    </div>
                                    <div class="option-item">
                                        <div>
                                            <button
                                                v-on:click="trainset.adv_setting = !trainset.adv_setting"
                                                tabindex="0"
                                            >advanced</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="field.training"
                                            :rows="training"
                                            styleClass="vgt-table bordered striped"
                                            :search-options="{
                                                enabled: true,
                                                trigger: 'keyup',
                                                skipDiacritics: true,
                                                placeholder: 'Fill to search'
                                            }"
                                            max-height="350px"
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
                                            <template slot="table-row" slot-scope="props">
                                                <span v-if="props.column.field == 'action'">
                                                    <div
                                                        class="action"
                                                        v-if="props.formattedRow['unit']!=='all'"
                                                    >
                                                        <i
                                                            v-on:click="handlerShowModal('Update', 'Training', props.formattedRow['id'], 'training')"
                                                            class="material-icons success edit-user"
                                                        >edit</i>
                                                        <i
                                                            v-on:click="handlerDelete('training',props.formattedRow['id'])"
                                                            class="material-icons danger delete-user"
                                                        >delete</i>
                                                    </div>
                                                </span>
                                                
                                                <span v-if="props.column.field == 'unit'">
                                                    {{ selected_sub_unit ? selected_sub_unit : selected_unit }}
                                                </span>
                                                <span
                                                    v-else-if="props.column.field == 'id'"
                                                >{{('0000' + props.formattedRow[props.column.field]).slice(-4)}}</span>
                                                <span
                                                    v-else-if="props.column.field == 'need_reccurent'"
                                                >{{props.formattedRow[props.column.field]=='1' ? 'Yes':'No'}}</span>
                                                <span
                                                    v-else
                                                >{{props.formattedRow[props.column.field]}}</span>
                                            </template>
                                        </vue-good-table>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="is-col">
                        <div class="card">
                            
                            <loading
                                :active.sync="loading.matrix.isLoading" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.matrix.color"
                                :loader="loading.matrix.loaderType">
                            </loading>
                            <div class="card-header no-border">
                                <div class="title-area">Training Matrix</div>
                                <div class="option-box">
                                    <div class="option-item">
                                        <div class="action">
                                            <i
                                                id="add-row"
                                                v-on:click="handlerShowModal('Add', 'Training Matrix', '', 'matrix')"
                                                class="material-icons primary add-row"
                                                tabindex="0"
                                            >add_circle_outline</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="field.matrix"
                                            :rows="matrix"
                                            styleClass="vgt-table bordered striped"
                                            :search-options="{
                                    enabled: true,
                                    trigger: 'keyup',
                                    skipDiacritics: true,
                                    placeholder: 'Fill to search'
                                    }"
                                            max-height="350px"
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
                                            <template slot="table-row" slot-scope="props">
                                                <span v-if="props.column.field == 'action'">
                                                    <div class="action">
                                                        <i
                                                            v-on:click="handlerShowModal('Update', 'Training Matrix', props.formattedRow['id'], 'matrix')"
                                                            class="material-icons success edit-user"
                                                        >edit</i>
                                                        <i
                                                            v-on:click="handlerDelete('matrix',props.formattedRow['id'])"
                                                            class="material-icons danger delete-user"
                                                        >delete</i>
                                                    </div>
                                                </span>
                                                <span
                                                    v-else-if="props.column.field == 'id'"
                                                >{{('0000' + props.formattedRow[props.column.field]).slice(-4)}}</span>
                                                <span
                                                    v-else
                                                >{{props.formattedRow[props.column.field]}}</span>
                                            </template>
                                        </vue-good-table>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal add data -->
        <div class="modal-box" id="modal-add-data">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('modal-add-data')"></span>
                <div class="modal-header">
                    <h2 class="title">
                        <span>{{key_select.status}} {{key_select.type}}</span>
                    </h2>
                </div>
                <div class="modal-body" style="position: relative">

                    <div class="is-row" v-if="key_select.item=='jobtitle'">
                        
                        <div class="is-col is-90">

                            <div class="table-responsive query-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Field</th>
                                            <th>Operator</th>
                                            <th>Value</th>
                                            <th></th>
                                            <th>
                                                <!-- <button
                                                    class="button btn-block is-primary"
                                                    type="submit"
                                                    @click="validateWhereClause('jobtitle')"
                                                >Validate</button> -->
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(jobtitle_clause, index) in form.jobtitle_clause" :key="index">
                                            <td>
                                                <select v-model="jobtitle_clause.field">
                                                    <option v-for="(field, index) in available_fields" :key="index" :value="field">{{ field }}</option>
                                                </select>
                                                <!-- <input type="text" placeholder="Input Column/Field to Filter" v-model="jobtitle_clause.field"> -->
                                            </td>
                                            <td>
                                                <select v-model="jobtitle_clause.operator">
                                                    <option  v-for="(operator, index) in available_query_operator" :key="index" :value="operator.symbol">{{ operator.text }}</option>
                                                </select>
                                            </td>
                                            <td><input type="text" v-model="jobtitle_clause.value" placeholder="You Are Allowed to use Wildcard"></td>
                                            <td>
                                                <select v-model="jobtitle_clause.seperator" v-if="index != form.jobtitle_clause.length - 1">
                                                    <option value="or" selected>OR</option>
                                                    <option value="and">AND</option>
                                                </select>
                                            </td>
                                            <td>
                                                <div class="action">
                                                    <i v-on:click="addJobTitleClause" class="material-icons success edit-user">add</i>
                                                    <i v-if="index != 0" v-on:click="deleteJobTitleClause(index)"
                                                        class="material-icons danger delete-user">delete</i>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr>

                                <div class="clearfix">
                                    <div class="pull-right">
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="form-item is-col is-90">
                            <input disabled v-model="form.jobtitle" type="text" name="name" />
                            <div class="is-desc">
                                <span class="post-type"></span>Job Title Criteria (Query Language)
                            </div>
                        </div>
                        <div class="form-item is-col is-20">
                            <input v-model="form.type" type="hidden" />
                            <input v-model="form.status" type="hidden" />
                            <input v-model="form.id" type="hidden" />
                            <input v-model="form.group_name" type="text" />
                            <div class="is-desc">Group Name</div>
                        </div>
                    </div>
                    <div class="is-row" v-else-if="key_select.item=='training'">
                        <div class="is-col is-90">

                            <div class="table-responsive query-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Field</th>
                                            <th>Operator</th>
                                            <th>Value</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(training_clause, index) in form.training_clause" :key="index">
                                            <td>
                                                <!-- <input type="text" placeholder="Input Column/Field to Filter" v-model="training_clause.field"> -->
                                                <select v-model="training_clause.field">
                                                    <option v-for="(field, index) in available_fields" :key="index" :value="field">{{ field }}</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select v-model="training_clause.operator">
                                                    <option  v-for="(operator, index) in available_query_operator" :key="index" :value="operator.symbol">{{ operator.text }}</option>
                                                    <!-- <option value="LIKE">Contains</option> -->
                                                </select>
                                            </td>
                                            <td><input type="text" v-model="training_clause.value" placeholder="You Are Allowed to use Wildcard"></td>
                                            <td>
                                                <select v-model="training_clause.seperator" v-if="index != form.training_clause.length - 1">
                                                    <option value="or" selected>OR</option>
                                                    <option value="and">AND</option>
                                                </select>
                                            </td>
                                            <td>
                                                <div class="action">
                                                    <i
                                                        v-on:click="addTrainingClause"
                                                        class="material-icons success edit-user"
                                                    >add</i>
                                                    <i
                                                        v-if="index != 0"
                                                        v-on:click="deleteTrainingClause(index)"
                                                        class="material-icons danger delete-user"
                                                    >delete</i>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr>

                                <!-- <div class="clearfix">
                                    <div class="pull-right">
                                        <button
                                            class="button is-primary"
                                            type="submit"
                                            @click="validateWhereClause('training')"
                                        >Check / Validate Query</button>
                                    </div>
                                </div> -->
                            </div>

                            
                            
                        </div>
                        <!-- To Be Removed -->
                        <div class="form-item is-col is-90">
                            <input v-model="form.training_query" disabled type="text" name="name" />
                            <div class="is-desc">
                                <span class="post-type"></span>Training Criteria (Query Language)
                            </div>
                        </div>
                        <!-- /To Be Removed -->
                        <div class="form-item is-col is-20">
                            <input v-model="form.type" type="hidden" />
                            <input v-model="form.status" type="hidden" />
                            <input v-model="form.id" type="hidden" />
                            <input v-model="form.training_name_mapping" type="text" />
                            <div class="is-desc">Group Name</div>
                        </div>
                        <hr />
                        <div class="form-item is-col is-20">
                            <select v-model="form.need_reccurent">
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                            <div class="is-desc">Recurrent</div>
                        </div>
                        <div class="form-item is-col is-20" v-if="trainset.adv_setting">
                            <select v-model="form.query_level">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <div class="is-desc">
                                <span class="post-type"></span>Query Level
                            </div>
                        </div>
                        <div class="form-item is-col is-50" v-if="trainset.adv_setting">
                            <select v-model="form.id_relation">
                                <option
                                    v-for="(el, idx) in training_level1"
                                    :key="idx"
                                    :value="el.id"
                                >[{{('0000' + el.id).slice(-4)}}] - {{el.training_name_mapping}}</option>
                            </select>

                            <div class="is-desc">
                                <span class="post-type"></span>Relation
                            </div>
                        </div>
                    </div>
                    <div class="is-row" v-else-if="key_select.item=='matrix'">
                        <div class="form-item is-col is-40">
                            <select v-model="form.id_jobtitle">
                                <option
                                    v-for="(el, idx) in jobtitle"
                                    :key="idx"
                                    :value="el.id"
                                >[{{('0000' + el.id).slice(-4)}}] - {{el.group_name}}</option>
                            </select>
                            <div class="is-desc">Job Title Group Name</div>
                        </div>
                        <div class="form-item is-col is-40">
                            <select v-model="form.id_training_keyword">
                                <option
                                    v-for="(el, idx) in training_level1"
                                    :key="idx"
                                    :value="el.id"
                                >[{{('0000' + el.id).slice(-4)}}] - {{el.training_name_mapping}}</option>
                            </select>
                            <div class="is-desc">Training Group Name</div>
                        </div>
                        <div class="form-item is-col is-10">
                            <select v-model="form.is_mandatory">
                                <option value="0">Competence</option>
                                <option value="1">Mandatory</option>
                            </select>
                            <div class="is-desc">Mandatory</div>
                        </div>
                    </div>

                    <div class="is-row" style="font-size:9px;">
                        <div
                            class="is-col is-40"
                            v-if="key_select.data.hasOwnProperty('created_by')"
                        >created by : {{key_select.data.created_by}}</div>
                        <div
                            class="is-col is-40"
                            v-if="key_select.data.hasOwnProperty('created_at')"
                        >created at: {{key_select.data.created_at}}</div>
                        <div
                            class="is-col is-40"
                            v-if="key_select.data.hasOwnProperty('updated_by')"
                        >updated by : {{key_select.data.updated_by}}</div>
                        <div
                            class="is-col is-40"
                            v-if="key_select.data.hasOwnProperty('updated_at')"
                        >updated at : {{key_select.data.updated_at}}</div>
                    </div>
                </div>
                <div class="modal-footer" style>
                    <button
                        class="button is-primary is-default cancel"
                        v-on:click="hideModal('modal-add-data')"
                    >Close</button>
                    <button
                        class="button is-success"
                        v-on:click="handlerPostData()"
                        type="submit"
                        id="btn-save-data"
                    ></button>
                </div>
                <!-- </form> -->
            </div>
        </div>
        <!-- modal add pattern -->
    </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import axios from "axios";
import collect from 'collect.js';
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

import "vue-loading-overlay/dist/vue-loading.css";
import FieldJobTitle from "./datatable/FieldJobTitle";
import FieldTraining from "./datatable/FieldTraining";
import FieldMatrix from "./datatable/FieldMatrix";

export default {
    data: () => ({

        
        loading: {
            job_title: {
                button_processing: false,
                isLoading: false,
                fullPage: false,
                loaderType: 'bars',
                color: '#0065ff',
            },
            training: {
                button_processing: false,
                isLoading: false,
                fullPage: false,
                loaderType: 'bars',
                color: '#0065ff',
            },
            matrix: {
                button_processing: false,
                isLoading: false,
                fullPage: false,
                loaderType: 'bars',
                color: '#0065ff',
            },
        },

        allunit: [
            "JKTTA",
            "JKTTB",
            "JKTTC",
            "JKTTD",
            "JKTTE",
            "JKTTF",
            "JKTTG",
            "JKTTH",
            "JKTTI",
            "JKTTJ",
            "JKTTL",
            "JKTTM",
            "JKTTN",
            "JKTTP",
            "JKTTQ",
            "JKTTR",
            "JKTTS",
            "JKTTU",
            "JKTTV",
            "JKTTW",
            "JKTTB",
            "JKTTX",
            "JKTTB",
            "JKTTY",
            "JKTTZ",
            "AMQ-MM",
            "BDJ-MM",
            "BDO-MM",
            "BTH-MM",
            "BTJ-MM",
            "DJB-MM",
            "DJJ-MM",
            "JED-MM",
            "JOG-MM",
            "KOE-MM",
            "LOP-MM",
            "MDC-MM",
            "PDG-MM",
            "PKU-MM",
            "PLM-MM",
            "SIN-MM",
            "SOQ-MM",
            "SRG-MM",
            "TIM-MM",
            "TKG-MM",
        ],
        sub_unit: [],
        jobtitle: [],
        training: [],
        matrix: [],
        field: {
            jobtitle: FieldJobTitle,
            training: FieldTraining,
            matrix: FieldMatrix,
        },
        datatable: {
            perPage: [10, 50, 100],
        },
        available_fields: [
            'traintype',
            'jabatan'
        ],
        available_query_operator: [
            {symbol: 'like', text: 'Contains'},
            {symbol: '=', text: 'Equal To'},
            {symbol: '<>', text: 'Not Equal To'},
            {symbol: '<=', text: 'Less than or equal to'},
            {symbol: '>=', text: 'Greater than or equal to'},
            {symbol: '<', text: 'Less than'},
            {symbol: '>', text: 'Greater than'},
        ],
        form: {
            sub_unit: '',
            training_clause: [],
            jobtitle_clause: [],
        },
        key_select: {
            id: "",
            type: "",
            status: "",
            item: "",
            data: "",
        },
        post_to: "",
        selected_unit: "",
        selected_sub_unit: "",
        trainset: {
            adv_setting: false,
        },
        training_level1: "",
    }),

    components: {
        Loading,
        VueGoodTable,
    },

    computed: {
        user: function () {
            return JSON.parse(localStorage.getItem("user"));
        },
        grant_edit: function () {
            let val = false;
            this.user.role.permission.forEach(function (el) {
                if (el.slug == "traininglcu" || el.slug == "trainingcenter") {
                    val = {
                        is_edit: true,
                        all_unit: false,
                    };
                    if (el.slug == "trainingcenter") {
                        val = {
                            is_edit: true,
                            all_unit: true,
                        };
                    }
                }
            });
            return val;
        },
        unitSelected() {
            if (this.selected_sub_unit !== "") {
                return this.selected_sub_unit;
            } else {
                return this.selected_unit;
            }
        },
    },

    watch: {
        "trainset.adv_setting"(val) {
            this.field.training[10].hidden = !val;
            this.field.training[11].hidden = !val;
            this.initTraining();
        },
        selected_unit: async function (unit) {
            if (unit) {
                const data = await (
                    await (
                        await axios.get(
                            `/api/people_development/training/get_unit/${unit}`
                        )
                    ).data
                ).data;
                console.log(data);
                if (data.length) {
                    this.sub_unit = data;
                }
            }

            this.refresh();
        },

        // Watcher for form.training_clause
        form: {
            handler(val){

                // Handling this.form.training_clause
                let query_training = "";
                for(var i = 0; i < val.training_clause.length; i++)
                {
                    query_training += 
                        val.training_clause[i].field + " " + 
                        val.training_clause[i].operator + " '" + 
                        val.training_clause[i].value + "' "

                    query_training += val.training_clause[i].seperator ? val.training_clause[i].seperator + " " : ' '
                }

                if(val.training_clause.length == 1) {
                    this.form.training_clause[0].seperator = null
                    this.form.training_query =  query_training.replace("or", "").replace("and", "").trim();
                } else {
                    this.form.training_query = query_training;
                }
                // ~End Handling this.form.training_clause

                // Handling this.form.jobtitle_clause
                let query_jobtitle = "";
                for(var i = 0; i < val.jobtitle_clause.length; i++)
                {
                    query_jobtitle += 
                        val.jobtitle_clause[i].field + " " + 
                        val.jobtitle_clause[i].operator + " '" + 
                        val.jobtitle_clause[i].value + "' "

                    query_jobtitle += val.jobtitle_clause[i].seperator ? val.jobtitle_clause[i].seperator + " " : ' '
                }

                if(val.jobtitle_clause.length == 1) {
                    this.form.jobtitle_clause[0].seperator = null
                    this.form.jobtitle =  query_jobtitle.replace("or", "").replace("and", "").trim();
                } else {
                    this.form.jobtitle = query_jobtitle;
                }
                // ~End Handling this.form.jobtitle_clause


                console.log(query_training);
            },
            deep: true
        }
    },

    mounted() {
        this.init().then(() => {
            this.refresh();
        });
    },

    methods: {
        changeUnit: function () {
            this.selected_sub_unit = "";

            // if(this.selected_unit) {
            //     this.refresh();
            // }
        },
        setSubUnit: function() {
            this.form.sub_unit = this.selected_sub_unit;
            this.refresh();
        },
        refresh: function () {
            this.initJobTitle();
            this.initTraining();
            this.initMatrix();

            this.field.training[1].label = this.selected_sub_unit ? "Unit" : "Dinas"
        },

        init: function () {
            return new Promise((resolve) => {
                this.selected_unit = this.user.unit.substr(0, 5);
                resolve();
            });
        },

        initJobTitle: function () {
            console.log(this.unitSelected, "okelah");
            
            this.loading.job_title.isLoading = true;
            axios
                .get("/api/management/masterjobtitle/" + this.unitSelected)
                .then((res) => {
                    this.jobtitle = res.data.data;
                    //console.log
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then( e => {
                    this.loading.job_title.isLoading = false;
                });
        },

        initTraining: function () {
            let adv = "n";
            if (this.trainset.adv_setting) {
                adv = "a";
            }

            this.loading.training.isLoading = true;
            axios
                .get(
                    "/api/management/mastertraining/" +
                        adv +
                        "/" +
                        this.unitSelected
                )
                .then((res) => {
                    this.training = res.data.data;
                    this.training_level1 = this.training.filter(
                        (d) => d.query_level == "1"
                    );
                    //console.log(this.training_level1);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then( e => {
                    this.loading.training.isLoading = false;
                });

                
        },

        initMatrix: function () {
            this.loading.matrix.isLoading = true
            axios
                .get("/api/management/mastermatrix/" + this.unitSelected)
                .then((res) => {
                    this.matrix = res.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then( e => {
                    this.loading.matrix.isLoading = false;
                });
        },

        hideModal: function (modal_name) {
            $("#" + modal_name).hide();
        },

        initTrainingClause: function(training_query) {

            if(training_query) {
                return this.transformQueryStringIntoTrainingClause(training_query);
            } else {
                return [
                    {
                        field: '',
                        operator: 'like',
                        value: '',
                        seperator: null,
                    }
                ];
            }
        },

        initJobTitleClause: function(training_query) {

            if(training_query) {
                return this.transformQueryStringIntoTrainingClause(training_query);
            } else {
                return [
                    {
                        field: '',
                        operator: 'like',
                        value: '',
                        seperator: null,
                    }
                ];
            }
        },

        transformQueryStringIntoTrainingClause: function(query) {

            query = query.replace(/['"]+/g, ''); // Remove single or double quotes
            query = query.replace('=', ' = '); // Add space between =
            query = query.replace(/ +(?= )/g,''); // Remove double spaces

            let training_clause = [];
            let splitted_or = query.includes(" or ") ? query.split(" or").filter(f => {return !f.includes("and")}).map( m => m.trim() ) : [];
            let splitted_and = query.includes(" and " ) ? query.split("and").filter(f => {return !f.includes("or")}).map( m => m.trim() ) : [];

            if(!query.includes(" and ") && !query.includes(" or "))
            {
                let splitted_raw = query.split(" ");

                training_clause.push({
                    field: splitted_raw[0],
                    operator: splitted_raw[1],
                    value: splitted_raw.slice(2, 10).join(" "),
                    seperator: null,
                });
                
            }

            splitted_and.forEach((m, index) => {
                let splitted = m.split(" ");
                
                training_clause.push({
                    field: splitted[0],
                    operator: splitted[1],
                    value: splitted.slice(2, 10).join(" "),
                    seperator: index != (splitted_and.length - 1) ? 'and' : null,
                });
            });

            splitted_or.forEach((m, index) => {
                let splitted = m.split(" ");
                
                training_clause.push({
                    field: splitted[0],
                    operator: splitted[1],
                    value: splitted.slice(2, 10).join(" "),
                    seperator: index != (splitted_or.length - 1) ? 'or' : null,
                });
            });

            const collection = collect(training_clause);

            const sorted = collection.sortBy('seperator');

            return sorted.all();
        },

        transformQueryStringIntoJobTitleClause: function (query) {
            

            query = query.replace(/['"]+/g, ''); // Remove single or double quotes
            query = query.replace('=', ' = '); // Add space between =
            query = query.replace(/ +(?= )/g,''); // Remove double spaces


            let training_clause = [];
            let splitted_or = query.includes(" or ") ? query.split(" or").filter(f => {
                return !f.includes("and")
            }).map(m => m.trim()) : [];
            let splitted_and = query.includes(" and ") ? query.split("and").filter(f => {
                return !f.includes(" or")
            }).map(m => m.trim()) : [];

            if (!query.includes(" and ") && !query.includes(" or ")) {
                let splitted_raw = query.split(" ");

                training_clause.push({
                    field: splitted_raw[0],
                    operator: splitted_raw[1],
                    value: splitted_raw.slice(2, 10).join(" "),
                    seperator: null,
                });

            }

            splitted_and.forEach(m => {
                let splitted = m.split(" ");

                training_clause.push({
                    field: splitted[0],
                    operator: splitted[1],
                    value: splitted.slice(2, 10).join(" "),
                    seperator: index != (splitted_and.length - 1) ? 'and' : null,
                });
            });

            splitted_or.forEach((m, index) => {
                let splitted = m.split(" ");

                training_clause.push({
                    field: splitted[0],
                    operator: splitted[1],
                    value: splitted.slice(2, 10).join(" "),
                    seperator: index != (splitted_or.length - 1) ? 'or' : null,
                });
            });

            const collection = collect(training_clause);

            const sorted = collection.sortBy('seperator');

            return sorted.all();
        },

        addTrainingClause: function() {
            if(this.form.training_clause.length >= 5) {
                toastr.warning('You cant put Query more than 5', 'Oopps!!')
                return false;
            } else {

                if (this.form.training_clause.length > 0) {

                    let beforeLast = this.form.training_clause[this.form.training_clause.length - 1]

                    if (!beforeLast.seperator) {
                        this.form.training_clause[this.form.training_clause.length - 1].seperator = "or";
                    }
                }

                this.form.training_clause.push({
                    field: '',
                    operator: 'like',
                    value: '',
                    seperator: null,
                });
            }
        },

        addJobTitleClause: function() {
            if(this.form.jobtitle_clause.length >= 5) {
                toastr.warning('You cant put Query more than 5', 'Oopps!!')
                return false;
            } else {

                if (this.form.jobtitle_clause.length > 0) {

                    let beforeLast = this.form.jobtitle_clause[this.form.jobtitle_clause.length - 1]

                    if (!beforeLast.seperator) {
                        this.form.jobtitle_clause[this.form.jobtitle_clause.length - 1].seperator = "or";
                    }
                }
                
                this.form.jobtitle_clause.push({
                    field: '',
                    operator: 'like',
                    value: '',
                    seperator: null,
                });
                // Set Default Or

            }
        },
        
        validateWhereClause: function(type) {

            let where_clause = [];

            if(type == 'training') {
                where_clause = this.form.training_clause
            } else if(type == 'jobtitle') {
                where_clause = this.form.jobtitle_clause
            }

            console.log(where_clause)
            // Validate Array
            
            for(var i = 0; i < where_clause.length; i++) {
                if (!where_clause[i].operator) {
                    toastr.error("Field at No. " + i+1 + " must be selected", "Something wrong, Field not Valid!");
                    return false;
                }

                if(!where_clause[i].value) {
                    toastr.error("Value at No. " + i+1 + " cant be blank", "Something wrong, Value not Valid!");
                    return false;
                } 
                
                if (!where_clause[i].operator) {
                    toastr.error("Operator at No. " + i+1 + " must be selected", "Something wrong, Operator not Valid!");
                    return false;
                }

            }

        },

        deleteTrainingClause: function(index) {
            this.form.training_clause.splice(index, index);
        },

        deleteJobTitleClause: function(index) {
            this.form.jobtitle_clause.splice(index, index);
        },

        handlerShowModal: function (status, type, id, item) {
            this.key_select = {
                id: "",
                type: "",
                status: "",
                item: "",
                data: "",
            };
            console.log("Item => " , item);
            console.log("Status => " , status);
            //console.log(this.key_select)
            if (status == "Add") {
                this.key_select.item = item;
                document.getElementById("btn-save-data").innerHTML = "Save";
                if (item == "jobtitle") {
                    this.form = {
                        group_name: "",
                        jobtitle: "",
                        jobtitle_clause: this.initJobTitleClause(null),
                        training_clause: this.initTrainingClause(null),
                        item: item,
                        status: status,
                        unit: this.selected_unit,
                    };
                } else if (item == "training") {
                    this.form = {
                        training_name_mapping: "",
                        training_query: "",
                        training_clause: this.initTrainingClause(null),
                        jobtitle_clause: this.initJobTitleClause(null),
                        query_level: "1",
                        id_relation: "",
                        need_reccurent: "0",
                        item: item,
                        status: status,
                        unit: this.selected_unit,
                    };
                } else {
                    this.form = {
                        id_jobtitle: "",
                        id_training_keyword: "",
                        is_mandatory: 0,
                        item: item,
                        status: status,
                        unit: this.selected_unit,
                    };
                }
            } else {
                this.key_select = {
                    id: id,
                    type: type,
                    status: status,
                    item: item,
                    data: this[item].filter((d) => d.id === id)[0],
                };

                document.getElementById("btn-save-data").innerHTML = "Update";
                this.form = {};
                if (item == "jobtitle") {
                    this.form = {
                        id: this.key_select.data.id,
                        group_name: this.key_select.data.group_name,
                        jobtitle: this.key_select.data.jobtitle,
                        jobtitle_clause: this.initJobTitleClause(this.key_select.data.jobtitle),
                        training_clause: this.initTrainingClause(null),
                        item: item,
                        status: status,
                        unit: this.selected_unit,
                    };
                } else if (item == "training") {
                    this.form = {
                        id: this.key_select.data.id,
                        training_name_mapping:
                            this.key_select.data.training_name_mapping,
                        training_clause: this.initTrainingClause(this.key_select.data.training_query),
                        training_query: this.key_select.data.training_query,
                        jobtitle_clause: this.initJobTitleClause(null),
                        query_level: this.key_select.data.query_level,
                        id_relation: this.key_select.data.id_relation,
                        need_reccurent: this.key_select.data.need_reccurent,
                        item: item,
                        status: status,
                        unit: this.selected_unit,
                    };
                } else {
                    this.form = {
                        id: this.key_select.data.id,
                        id_jobtitle: this.key_select.data.id_jobtitle,
                        id_training_keyword:
                            this.key_select.data.id_training_keyword,
                        is_mandatory:
                            this.key_select.data.is_mandatory == "mandatory"
                                ? 1
                                : 0,
                        item: item,
                        status: status,
                        unit: this.selected_unit,
                    };
                }
            }
            $("#modal-add-data").show();
        },

        validate: function () {
            if (this.form.item == "jobtitle") {
                if (this.form.jobtitle == "" || this.form.group_name == "") {
                    toastr.warning("Field can't be empty");
                    return false;
                }
            }
            if (this.form.item == "training") {
                if (
                    this.form.training_query == "" ||
                    this.form.training_name_mapping == ""
                ) {
                    toastr.warning("Field can't be empty");
                    return false;
                }
            }
            if (this.form.item == "matrix") {
                if (
                    this.form.id_jobtitle == "" ||
                    this.form.id_training_keyword == ""
                ) {
                    toastr.warning("Field can't be empty");
                    return false;
                }
            }
            return true;
        },

        handleButton: function (id, status) {
            let element = document.getElementById(id);
            return new Promise((resolve, reject) => {
                if (status == "load") {
                    element.className += " is-loading";
                    element.disabled = true;

                    setTimeout(() => {
                        resolve();
                    }, 500);
                } else {
                    element.className = "button";
                    element.disabled = false;
                    resolve();
                }
            });
        },

        handlerPostData: function () {
            if (!this.validate()) return;
            if (this.form.status == "Add") {
                this.post_to = "/api/management/mastertraining_add";
            } else if (this.form.status == "Update") {
                this.post_to = "/api/management/mastertraining_update";
            }
            this.handleButton("btn-save-data", "load").then(() => {
                if (this.form.item) {
                    this.form.sub_unit = this.selected_sub_unit;
                    axios
                        .post(this.post_to, this.form)
                        .then((res) => {
                            if (res.data.success) {
                                toastr.success(res.data.message, "Success");

                                switch (this.form.item) {
                                    case "jobtitle":
                                        this.initJobTitle();
                                        break;
                                    case "training":
                                        this.initTraining();
                                        break;
                                    case "matrix":
                                        this.initMatrix();
                                        break;
                                }

                                setTimeout(() => {
                                    this.hideModal("modal-add-data");
                                }, 1000);
                            } else {
                                toastr.warning(res.data.message);
                            }
                            this.handleButton("btn-save-data", "stop");
                        })
                        .catch((e) => {
                            console.log("Error: " + e);
                            this.handleButton("btn-save-data", "stop");
                        });
                }
                    
            });
        },

        handlerDelete: function (item, id) {
            if (!this.grant_edit.is_edit) return false;
            swal({
                title: "Delete Item",
                text: "Are you sure that you want to delete this item?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((value) => {
                if (value) {
                    axios
                        .get(
                            "/api/management/mastertraining_delete/" +
                                item +
                                "/" +
                                id
                        )
                        .then((res) => {
                            if (res.data.success) {
                                toastr.success(res.data.message);
                                switch (item) {
                                    case "jobtitle":
                                        this.initJobTitle();
                                        break;
                                    case "training":
                                        this.initTraining();
                                        break;
                                    case "matrix":
                                        this.initMatrix();
                                        break;
                                }
                            } else {
                                toastr.error(res.data.message);
                            }
                        })
                        .catch((e) => {
                            console.log("Error: " + e);
                            toastr.error("Undefined error");
                        });
                } else {
                    toastr.info("Canceled");
                    return;
                }
            });
        },
    },
};
</script>
