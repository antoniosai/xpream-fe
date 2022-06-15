<style scoped>
::v-deep .action-header {
    margin-top: 1px !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center !important;
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

::v-deep .action-header > i.success {
    color: #13CE66;
}

::v-deep .action-header > i.success:hover {
    background: #13CE66;
    color: white;
    border-color: #13CE66;
}

::v-deep .action-header > i.danger {
    color: #FF4949;
}

::v-deep .action-header > i.danger:hover {
    background: #FF4949;
    color: white;
    border-color: #FF4949;
}

::v-deep .btn-add {
    width: 10px;
    height: 30px;
    padding: 0px 15px 0px 22px !important;
    text-align: center;
}

</style>

<template>
    <div>
        <div class="card-header">
            <div class="title-area">
                <h3 class="title">Database Editor</h3>
            </div>
            <div class="option-box">
                <div class="option-item">
                    <span style="white-space: nowrap">Aircraft Type</span>
                    <select id="aircraft-type" v-model="form.aircraft_type" @change="onChangeAircraft()">
                        <option value="" disabled selected>A/C Type</option>
                        <option v-for="aircraft in aircrafts" :key="aircraft.ID" v-bind:value="aircraft.ID">{{ aircraft.AIRCRAFT }}</option>
                    </select>
                </div>
                <div class="option-item">
                    <span style="white-space: nowrap">Editor Type</span>
                    <select v-model="editor_type" id="aircraft-type">
                        <option value="" disabled selected>Editor Type</option>
                        <!-- <option value="description">Description</option> -->
                        <option value="core_task">Core Task</option>
                        <option value="preparation">Preparation</option>
                        <option value="access">Access</option>
                        <option value="material_tools">Material & Tools</option>
                    </select>
                </div>
                <div class="option-item">
                    <span style="white-space: nowrap">MPD Number</span>
                    <input v-model="form.mpd_number" disabled class="" id="edt-mpd-number" name="edt-mpd-number" placeholder="">
                </div>
                <div class="option-item">
                    <button v-on:click="handleFindEditor()">
                        <i class="material-icons">search</i>
                        Search
                    </button>
                </div>
            </div>
        </div>
        <div class="card-content">
            <br>
            <loading style="margin-top: 50px;"
                :active.sync="loading.isLoading" 
                :can-cancel="false"
                :is-full-page="false"
                :color="loading.color"
                :loader="loading.loaderType">
            </loading>
            <!-- core task editor -->
            <div id="core-task" v-if="editor.core.isShow">
                <div class="is-row">
                    <div class="is-col is-25">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Detail Task Zone
                                </div> 
                            </div>
                            <div class="card-content">
                                <table>
                                    <tr>
                                        <td>Task Number</td>
                                        <td>:</td>
                                        <td>{{detail_task.TASK_NUMBER}}</td>
                                    </tr>
                                    <tr>
                                        <td>Section</td>
                                        <td>:</td>
                                        <td>{{detail_task.SECTION}}</td>
                                    </tr>
                                    <tr>
                                        <td>Skill Code</td>
                                        <td>:</td>
                                        <td>{{detail_task.SKILL_CODE}}</td>
                                    </tr>
                                    <tr>
                                        <td>Reference</td>
                                        <td>:</td>
                                        <td>{{detail_task.REFERENCE}}</td>
                                    </tr>

                                </table>
                            </div> 
                        </div>
                    </div>
                    <div class="is-col is-25">
                        <div class="card">
                            <div class="card-header no-border">
                                Master Zone
                            </div>
                            <div class="card-content">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="editor.core.field"
                                            :rows="editor.core.zone"
                                             max-height="200px"
                                             :fixed-header="true"
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
                                                perPageDropdown: editor.perPage,
                                                dropdownAllowAll: true,
                                                setCurrentPage: 1,
                                                nextLabel: '',
                                                prevLabel: '',
                                                rowsPerPageLabel: '',
                                                ofLabel: 'of',
                                                pageLabel: '', // for 'pages' mode
                                                allLabel: 'All',
                                            }"
                                        >
                                        </vue-good-table>

                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="is-col is-50">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Detail Task Zone
                                </div>    
                                <div class="option-box">
                                    <div class="option-item">
                                        <button class="btn-add" v-on:click="addRowCore(editor.core.detail_zone.length+1)">
                                            <i class="material-icons">add</i>   
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <table style="font-size: 9pt;" class="is-striped is-bordered" id="table-zone">
                                    <thead>
                                        <tr>
                                            <th style="text-align: center;" width="20%">Zone</th>
                                            <th style="text-align: center;">Men</th>
                                            <th style="text-align: center;">MH</th>
                                            <th style="text-align: center;" width="20%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(list, index) in editor.core.detail_zone" :key="list.IDX">
                                            <td>
                                                <input  type="hidden"  class="edt-core-id" v-bind:value="list.ID">
                                                <select style="font-size: 9pt" :disabled="list.ID !== ''" id="edt-core-zone" class="edt-core-zone">
                                                    <option v-for="core in editor.core.zone" :selected="core.ZONE == list.ZONE" :key="core.ID" v-bind:value="core.ID">{{ core.ZONE}}</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input style="font-size: 9pt"  type="number" min="1" class="edt-core-men" v-bind:value="list.MEN">
                                            </td>
                                            <td>
                                                <input style="font-size: 9pt" type="number" step="0.01"  class="edt-core-mh" v-bind:value="list.MH">
                                            </td>
                                            <td align="center">
                                                <div class="action">
                                                    <i v-if="list.MEN !== '' && list.MH !== ''" v-on:click="postCore(index, 'update')" class="material-icons success edit-user">edit</i>
                                                    <i v-else v-on:click="postCore(index, 'insert')" class="material-icons success edit-user">edit</i>
                                                    <i v-on:click="removeRowCore(index, list.ID)" class="material-icons danger delete-user btn-core-delete">delete</i>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- preparation editor -->
            <div id="preparation" v-if="editor.preparation.isShow">
                <div class="is-row">
                    <div class="is-col is-25">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Detail Task Zone
                                </div> 
                            </div>
                            <div class="card-content">
                                <table>
                                    <tr>
                                        <td>Task Number</td>
                                        <td>:</td>
                                        <td>{{detail_task.TASK_NUMBER}}</td>
                                    </tr>
                                    <tr>
                                        <td>Section</td>
                                        <td>:</td>
                                        <td>{{detail_task.SECTION}}</td>
                                    </tr>
                                    <tr>
                                        <td>Skill Code</td>
                                        <td>:</td>
                                        <td>{{detail_task.SKILL_CODE}}</td>
                                    </tr>
                                    <tr>
                                        <td>Reference</td>
                                        <td>:</td>
                                        <td>{{detail_task.REFERENCE}}</td>
                                    </tr>

                                </table>
                            </div> 
                        </div>
                    </div>
                    <div class="is-col is-25">
                        <div class="card">
                            <div class="card-header no-border">
                                Master Preparation
                            </div>
                            <div class="card-content">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="editor.preparation.field"
                                            :rows="editor.preparation.preparation"
                                             max-height="200px"
                                             :fixed-header="true"
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
                                                perPageDropdown: editor.perPage,
                                                dropdownAllowAll: true,
                                                setCurrentPage: 1,
                                                nextLabel: '',
                                                prevLabel: '',
                                                rowsPerPageLabel: '',
                                                ofLabel: 'of',
                                                pageLabel: '', // for 'pages' mode
                                                allLabel: 'All',
                                            }"
                                        >
                                        </vue-good-table>

                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="is-col is-50">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Detail Task Preparation
                                </div>    
                                <div class="option-box">
                                    <div class="option-item">
                                        <button class="btn-add" v-on:click="addRowPreparation(editor.preparation.detail_preparation.length+1)">
                                            <i class="material-icons">add</i>   
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <table style="font-size: 9pt;" class="is-striped is-bordered" id="table-zone">
                                    <thead>
                                        <tr>
                                            <th style="text-align: center;" width="60%">Preparation</th>
                                            <th width="20%" style="text-align: center;">MH</th>
                                            <th style="text-align: center;" width="20%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(list, index) in editor.preparation.detail_preparation" :key="list.IDX">
                                            <td>
                                                <input  type="hidden"  class="edt-preparation-id" v-bind:value="list.ID">
                                                <select style="font-size: 9pt" :disabled="list.ID !== ''" id="edt-preparation-preparation" class="edt-preparation-preparation">
                                                    <option v-for="prep in editor.preparation.preparation" :selected="prep.PREPARATION == list.PREPARATION" :key="prep.ID" v-bind:value="prep.ID">{{ prep.PREPARATION}}</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input style="font-size: 9pt"  type="number" min="1" class="edt-preparation-mh" v-bind:value="list.PREP_M_H">
                                            </td>
                                            <td align="center">
                                                <div class="action">
                                                    <i v-if="list.PREP_M_H !== ''" v-on:click="postPreparation(index, 'update')" class="material-icons success edit-user">edit</i>
                                                    <i v-else v-on:click="postPreparation(index, 'insert')" class="material-icons success edit-user">edit</i>
                                                    <i v-on:click="removeRowPreparation(index, list.ID)" class="material-icons danger delete-user btn-core-delete">delete</i>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- material editor -->
            <div id="material" v-if="editor.material.isShow">
                <div class="is-row">
                    <div class="is-col is-25">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Detail Task
                                </div> 
                            </div>
                            <div class="card-content">
                                <table>
                                    <tr>
                                        <td>Task Number</td>
                                        <td>:</td>
                                        <td>{{detail_task.TASK_NUMBER}}</td>
                                    </tr>
                                    <tr>
                                        <td>Section</td>
                                        <td>:</td>
                                        <td>{{detail_task.SECTION}}</td>
                                    </tr>
                                    <tr>
                                        <td>Skill Code</td>
                                        <td>:</td>
                                        <td>{{detail_task.SKILL_CODE}}</td>
                                    </tr>
                                    <tr>
                                        <td>Reference</td>
                                        <td>:</td>
                                        <td>{{detail_task.REFERENCE}}</td>
                                    </tr>

                                </table>
                            </div> 
                        </div>
                    </div>

                    <div class="is-col is-35">
                        <div class="card">
                            <div class="card-header no-border">
                                Master Part
                            </div>
                            <div class="card-content">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="editor.material.field"
                                            :rows="editor.material.part"
                                             max-height="200px"
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
                                                perPageDropdown: editor.perPage,
                                                dropdownAllowAll: true,
                                                setCurrentPage: 1,
                                                nextLabel: '',
                                                prevLabel: '',
                                                rowsPerPageLabel: '',
                                                ofLabel: 'of',
                                                pageLabel: '', // for 'pages' mode
                                                allLabel: 'All',
                                            }"
                                        >
                                        </vue-good-table>

                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>

                    <div class="is-col is-40">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Detail Task Material
                                </div>    
                                <div class="option-box">
                                    <div class="option-item">
                                        <button class="btn-add" v-on:click="addRowMaterial(editor.material.detail_material.length+1)">
                                            <i class="material-icons">add</i>   
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <table style="font-size: 9pt;" class="is-striped is-bordered" id="table-zone">
                                    <thead>
                                        <tr>
                                            <th style="text-align: center;" width="35%">Category</th>
                                            <th width="35%" style="text-align: center;">Part Number</th>
                                            <th style="text-align: center;" width="12%">QTY</th>
                                            <th style="text-align: center;" width="18%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(list, index) in editor.material.detail_material" :key="list.IDX">
                                            <td>
                                                <input  type="hidden"  class="edt-material-id" v-bind:value="list.ID">
                                                <select style="font-size: 9pt" :disabled="list.ID !== ''" id="edt-material-category" class="edt-material-category">
                                                    <option :selected="list.TASK_TYPE == 'CORE TASK'"  value="CORE TASK">CORE TASK</option>
                                                    <option :selected="list.TASK_TYPE == 'PREP TASK'" value="PREP TASK">PREP TASK</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="font-size: 9pt" :disabled="list.ID !== ''" id="edt-material-part" class="edt-material-part">
                                                    <option v-for="part in editor.material.part" :selected="part.PART_NUMBER == list.PART_NUMBER" :key="part.ID" v-bind:value="part.ID">{{ part.PART_NUMBER}}</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input style="font-size: 9pt"  type="number" min="1" class="edt-material-qty" v-bind:value="list.QTY">
                                            </td>
                                            <td align="center">
                                                <div class="action">
                                                    <i v-if="list.QTY !== ''" v-on:click="postMaterial(index, 'update')" class="material-icons success edit-user">edit</i>
                                                    <i v-else v-on:click="postMaterial(index, 'insert')" class="material-icons success edit-user">edit</i>
                                                    <i v-on:click="removeRowMaterial(index, list.ID, list.TASK_TYPE)" class="material-icons danger delete-user btn-core-delete">delete</i>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- access editor -->
            <div id="access" v-if="editor.access.isShow">
                <div class="is-row">
                     <div class="is-col is-25">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Detail Task
                                </div> 
                            </div>
                            <div class="card-content">
                                <table>
                                    <tr>
                                        <td>Task Number</td>
                                        <td>:</td>
                                        <td>{{detail_task.TASK_NUMBER}}</td>
                                    </tr>
                                    <tr>
                                        <td>Section</td>
                                        <td>:</td>
                                        <td>{{detail_task.SECTION}}</td>
                                    </tr>
                                    <tr>
                                        <td>Skill Code</td>
                                        <td>:</td>
                                        <td>{{detail_task.SKILL_CODE}}</td>
                                    </tr>
                                    <tr>
                                        <td>Reference</td>
                                        <td>:</td>
                                        <td>{{detail_task.REFERENCE}}</td>
                                    </tr>

                                </table>
                            </div> 
                        </div>
                    </div>

                     <div class="is-col is-25">
                        <div class="card">
                            <div class="card-header no-border">
                                Master Access
                            </div>
                            <div class="card-content">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="editor.access.field"
                                            :rows="editor.access.access"
                                             max-height="200px"
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
                                                perPageDropdown: editor.perPage,
                                                dropdownAllowAll: true,
                                                setCurrentPage: 1,
                                                nextLabel: '',
                                                prevLabel: '',
                                                rowsPerPageLabel: '',
                                                ofLabel: 'of',
                                                pageLabel: '', // for 'pages' mode
                                                allLabel: 'All',
                                            }"
                                        >
                                        </vue-good-table>

                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>

                    <div class="is-col is-50">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Detail Task Access
                                </div>    
                                <div class="option-box">
                                    <div class="option-item">
                                        <button class="btn-add" v-on:click="addRowAccess(editor.access.detail_access.length+1)">
                                            <i class="material-icons">add</i>   
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <table style="font-size: 9pt;" class="is-striped is-bordered" id="table-zone">
                                    <thead>
                                        <tr>
                                            <th style="text-align: center;" width="31%">Zone</th>
                                            <th width="31%" style="text-align: center;">Access Panel</th>
                                            <th style="text-align: center;" width="20%">Mhrs</th>
                                            <th style="text-align: center;" width="18%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(list, index) in editor.access.detail_access" :key="list.IDX">
                                            <td>
                                                <input  type="hidden"  class="edt-det_access-id" v-bind:value="list.ID">
                                                <select style="font-size: 9pt" :disabled="list.ID !== ''" id="edt-access-zone" class="edt-access-zone">
                                                    <option v-for="access_zone in editor.access.detail_zone" :selected="access_zone.ZONE == list.ZONE" :key="access_zone.ID" v-bind:value="access_zone.ID_DET_ZONE">{{ access_zone.ZONE}}</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select v-on:change="handlerChangeAccess(index)" style="font-size: 9pt" :disabled="list.ID !== ''" id="edt-access-access" class="edt-access-access">
                                                    <option v-for="access in editor.access.access" :selected="access.ACCESS == list.ACCESS" :key="access.ID" v-bind:value="access.ID">{{ access.ACCESS}}</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input v-if="list.MH !== ''" style="font-size: 9pt"  type="number" min="1" class="edt-access-mhrs" v-bind:value="list.MH">
                                                <input v-else style="font-size: 9pt" disabled  type="number" min="1" class="edt-access-mhrs" v-bind:value="editor.access.access[0].MH">
                                            </td>
                                            <td align="center">
                                                <div class="action">
                                                    <i v-if="list.MH !== ''" v-on:click="postAccess(index, 'update')" class="material-icons success edit-user">edit</i>
                                                    <i v-else v-on:click="postAccess(index, 'insert')" class="material-icons success edit-user">edit</i>
                                                    <i v-on:click="removeRowAccess(index, list.ID)" class="material-icons danger delete-user btn-core-delete">delete</i>
                                                </div>
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
    </div>
</template>

<script>

import Loading from 'vue-loading-overlay'
import axios from 'axios'
import 'vue-loading-overlay/dist/vue-loading.css'

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

import FieldZone from "./datatable/FieldZone.js";
import FieldPreparation from "./datatable/FieldPreparation.js";
import FieldMaterial from "./datatable/FieldMaterial.js";
import FieldAccess from "./datatable/FieldAccess.js";



export default {
    components: {
        Loading,
        VueGoodTable,
    },

    data: () => ({
        detail_task: '',
        aircrafts: [],
        form: {
            aircraft_type: '',
            mpd_number: '',
        },
        editor_type: '',
        editor: {
            core: {
                isShow: false,
                zone: [],
                detail_zone:[],
                field: FieldZone,
            },
            preparation: {
                isShow: false,
                preparation: [],
                detail_preparation: [],
                field: FieldPreparation
            },
            material: {
                isShow: false,
                part: [],
                detail_material: [],
                field: FieldMaterial
            },
            access: {
                isShow: false,
                access: [],
                detail_access: [],
                detail_zone: [],
                field: FieldAccess
            },

            perPage: [10, 50, 100],
        },
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        }
    }),

    mounted() {
        this.initAircraft();
    },

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

        initZone: function() {
            return new Promise((resolve, reject) => {
                axios.get('/api/task/get_zone')
                .then( res => {
                    this.editor.core.zone = res.data;
                    resolve();
                })  
            })
        }, 
        
        initDetailZone: function() {
            return new Promise((resolve, reject) => {
                axios.post('/api/task/get_detail_zone', this.form)
                .then(res => {
                    this.editor.core.detail_zone = res.data;
                    resolve();
                })
            })
        },

        initPreparation: function() {
            return new Promise((resolve, result) => {
                axios.get('/api/task/get_preparation')
                .then(res => {
                    this.editor.preparation.preparation = res.data;
                    resolve();  
                })
            })
        },
        

        initDetailPreparation: function() {
            return new Promise((resolve, reject) => {
                axios.post('/api/task/get_detail_preparation', this.form)
                .then(res => {
                    this.editor.preparation.detail_preparation = res.data;
                    resolve();
                })
            })
        },

        initMaterial: function() {
            return new Promise((resolve, reject) => {
                axios.get('/api/task/get_material')
                .then(res => {
                    this.editor.material.part = res.data;
                    resolve();
                })
            })
        },

        initDetailMaterial: function() {
            return new Promise((resolve, reject) => {
                axios.post('/api/task/get_detail_material', this.form)
                .then(res => {
                    this.editor.material.detail_material = res.data;
                    resolve();
                })
            })
        },

        initAccess: function() {
            return new Promise((resolve, reject) => {
                axios.get('/api/task/get_access')
                .then(res => {
                    this.editor.access.access = res.data;
                    resolve();
                })
            })
        },

        initDetailAcessZone: function() {
            return new Promise((resolve, reject) => {
                axios.post('/api/task/get_detail_access_zone', this.form)
                .then(res => {
                    this.editor.access.detail_zone = res.data;
                    resolve();
                })
            })
        },

        initDetailAccess: function() {
            return new Promise((resolve, reject) => {
                axios.post('/api/task/get_detail_access', this.form)
                .then(res => {
                    this.editor.access.detail_access = res.data;
                    resolve();
                })
            })
        },

        /**
        * Core Editor
        */
        addRowCore: function(id) {
            this.editor.core.detail_zone.push({
                IDX: id,
                ID: "",
                ZONE: "",
                MEN: "",
                MH: "" 
            })
        },

        removeRowCore: function(row_index, id) {
            swal({
                    title: "Continue remove this item ?",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        if(id !== '') {
                            axios.get('/api/task/delete_detail_zone/' + id)
                            .then(res => {
                                if(res.data.success) {
                                    toastr.success(res.data.message)
                                    this.editor.core.detail_zone.splice(row_index, 1);
                                    this.handlerFindCoreEditor();
                                }else {
                                    toastr.warning(res.data.message)
                                }
                                this.loading.isLoading = false;
                            })
                            .catch(e => {
                                console.log("Error: "+e);
                            })
                        }else {
                            this.editor.core.detail_zone.splice(row_index, 1);
                            toastr.success("Success remove item")
                        }
                    } else {
                        this.loading.isLoading = false;
                        toastr.info("Canceled");
                    }
                });
        },

        handleFindEditor: function() {
            this.loading.isLoading = true;
            this.editor.core.isShow = false;
            this.editor.preparation.isShow = false;
            this.editor.material.isShow = false;
            this.editor.access.isShow = false;

            axios.post('/api/task/get_detail_task', this.form)
            .then(res => {
                if(res.data.hasOwnProperty("ID")) {
                    this.detail_task = res.data;

                    switch(this.editor_type) {
                        case "description" :
                            break;
                        case "core_task" :
                            // core task handler
                            this.handlerFindCoreEditor();
                            break;
                        case "preparation" :
                            // preparation handler
                            this.handlerFindPreparationEditor();
                            break;
                        case "access" :
                            // access handler
                            this.handlerFindAccessEditor();
                            break;
                        case "material_tools" :
                            this.handlerFindMaterialEditor();
                            break;
                        default:
                            toastr.warning('Wrong editor type');

                    }
                }else{
                    this.loading.isLoading = false;
                    toastr.warning("No data found")
                }
            })
            .catch(e => {
                console.log("Error: "+e);
                this.loading.isLoading = false;

            })
        },

        /**
         * Core editor
         */
        handlerFindCoreEditor: function() {
            this.loading.isLoading = true;
            this.initZone().then(() => {
                this.initDetailZone().then(() => {
                    this.loading.isLoading = false;
                    this.editor.core.isShow = true;
                })
            })  
        },
        

        postCore: function(index, status) {
            this.loading.isLoading = true;
            let edt_core_id = document.getElementsByClassName('edt-core-id')[index].value;
            let edt_core_zone = document.getElementsByClassName('edt-core-zone')[index].value;
            let edt_core_men = document.getElementsByClassName('edt-core-men')[index].value;
            let edt_core_mh = document.getElementsByClassName('edt-core-mh')[index].value;
            
            let data_validation = [
                {'element': edt_core_zone, 'type' : 'Zone', 'data' : 'string'},
                {'element': edt_core_men, 'type' : 'Men', 'data' : 'number'},
                {'element': edt_core_mh, 'type' : 'Mh', 'data' : 'number'}
            ];

            if(!this.validation(data_validation)) {
                this.loading.isLoading = false;
                return;
            } 
            if(status == "update") {
                swal({
                    title: "Continue update this item ?",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/task/update_detail_zone', {
                            id: edt_core_id,
                            id_task: this.detail_task.ID,
                            id_zone: edt_core_zone,
                            men: edt_core_men,
                            mh: edt_core_mh

                        })
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.handlerFindCoreEditor();
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                        })
                    } else {
                        this.loading.isLoading = false;
                        toastr.info("Canceled");
                    }
                });
            }else if(status == "insert") {
                swal({
                    title: "Continue add this item ?",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/task/insert_detail_zone', {
                            id_task: this.detail_task.ID,
                            id_zone: edt_core_zone,
                            men: edt_core_men,
                            mh: edt_core_mh
                        })
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.handlerFindCoreEditor();
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                        })
                    } else {
                        this.loading.isLoading = false;
                        toastr.info("Canceled");
                    }
                });
            }else {
                this.loading.isLoading = false;
            }
        },

        /**
         * Preparation editor
         */
        handlerFindPreparationEditor: function() {
            this.loading.isLoading = true;
            this.initPreparation().then(() => {
                this.initDetailPreparation().then(() => {
                    this.loading.isLoading = false;
                    this.editor.preparation.isShow = true;
                })
            })  
        },

        addRowPreparation: function(id) {
            this.editor.preparation.detail_preparation.push({
                IDX: id,
                ID: "",
                PREPARATION: "",
                PREP_M_H: "",
            })
        },

        removeRowPreparation: function(row_index, id) {
            swal({
                title: "Continue remove this item ?",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    if(id !== '') {
                        axios.get('/api/task/delete_detail_preparation/' + id)
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.editor.preparation.detail_preparation.splice(row_index, 1);
                                this.handlerFindPreparationEditor();
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                        })
                    }else {
                        this.editor.preparation.detail_preparation.splice(row_index, 1);
                        toastr.success("Success remove item")
                    }
                } else {
                    this.loading.isLoading = false;
                    toastr.info("Canceled");
                }
            });
        },

        postPreparation: function(index, status) {
            this.loading.isLoading = true;
            let edt_det_preparation_id = document.getElementsByClassName('edt-preparation-id')[index].value;
            let edt_preparation_id = document.getElementsByClassName('edt-preparation-preparation')[index].value;
            let edt_preparation_mh = document.getElementsByClassName('edt-preparation-mh')[index].value;

            let data_validation = [
                {'element': edt_preparation_id, 'type' : 'Preparation', 'data' : 'string'},
                {'element': edt_preparation_mh, 'type' : 'MH', 'data' : 'number'}
            ];

            if(!this.validation(data_validation)) {
                this.loading.isLoading = false;
                return;
            } 
            if(status == "update") {
                swal({
                    title: "Continue update this item ?",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/task/update_detail_preparation', {
                            id: edt_det_preparation_id,
                            id_preparation: edt_preparation_id,
                            mh: edt_preparation_mh

                        })
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.handlerFindPreparationEditor();
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                        })
                    } else {
                        this.loading.isLoading = false;
                        toastr.info("Canceled");
                    }
                });
            }else if(status == "insert") {
                swal({
                    title: "Continue add this item ?",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/task/insert_detail_preparation', {
                            id_task: this.detail_task.ID,
                            id_preparation: edt_preparation_id,
                            mh: edt_preparation_mh
                        })
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.handlerFindPreparationEditor();
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                        })
                    } else {
                        this.loading.isLoading = false;
                        toastr.info("Canceled");
                    }
                });
            }else {
                this.loading.isLoading = false;
            }
        },

        /**
         * Material editor
         */
        handlerFindMaterialEditor: function() {
            this.loading.isLoading = true;
            this.initMaterial().then(() => {
                this.initDetailMaterial().then(() => {
                    this.loading.isLoading = false;
                    this.editor.material.isShow = true;
                })
            })  
        },

        /**
        * Material Editor
        */
        addRowMaterial: function(id) {
            this.editor.material.detail_material.push({
                IDX: id,
                // IDT: this.editor.material.detail_material[0].IDT,
                EXPENDABLE: "",
                ID: "",
                PART_DESC: "",
                PART_NUMBER: "" ,
                QTY: "" ,
                TASK_TYPE: ""
            })
        },

        removeRowMaterial: function(row_index, id, type) {
            swal({
                title: "Continue remove this item ?",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    if(id !== '') {
                        axios.get('/api/task/delete_detail_material/' + id + '/' +type)
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.handlerFindMaterialEditor();
                                this.editor.material.detail_material.splice(row_index, 1);
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                        })
                    }else {
                        this.editor.material.detail_material.splice(row_index, 1);
                        toastr.success("Success remove item")
                    }
                } else {
                    this.loading.isLoading = false;
                    toastr.info("Canceled");
                }
            });
        },

        postMaterial: function(index, status) {
            this.loading.isLoading = true;

            let edt_det_material_id = document.getElementsByClassName('edt-material-id')[index].value;
            let edt_material_category = document.getElementsByClassName('edt-material-category')[index].value;
            let edt_material_part = document.getElementsByClassName('edt-material-part')[index].value;
            let edt_material_qty = document.getElementsByClassName('edt-material-qty')[index].value;

            let idt = "";
            if(edt_material_category == "PREP TASK") {
                let temp_idt = this.editor.material.detail_material.filter(d => d.TASK_TYPE === 'PREP TASK');
                idt = temp_idt[0].IDT;
            }else {
                idt = this.detail_task.ID;
            }

            let data_validation = [
                {'element': edt_material_category, 'type' : 'Category', 'detail_zonedata': 'string'},
                {'element': edt_material_part, 'type' : 'Part number', 'data': 'string'},
                {'element': edt_material_qty, 'type' : 'QTY', 'data': 'number'}
            ];

            if(!this.validation(data_validation)) {
                this.loading.isLoading = false;
                return;
            } 
            if(status == "update") {
                swal({
                    title: "Continue update this item ?",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/task/update_detail_material', {
                            id: edt_det_material_id,
                            idt: idt,
                            id_part: edt_material_part,
                            qty: edt_material_qty,
                            category: edt_material_category

                        })
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.handlerFindMaterialEditor();
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                        })
                    } else {
                        this.loading.isLoading = false;
                        toastr.info("Canceled");
                    }
                });
            }else if(status == "insert") {
                swal({
                    title: "Continue add this item ?",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/task/insert_detail_material', {
                            idt: idt,
                            id_part: edt_material_part,
                            qty: edt_material_qty,
                            category: edt_material_category
                        })
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.handlerFindMaterialEditor();
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                            this.loading.isLoading = false;

                        })
                    } else {
                        this.loading.isLoading = false;
                        toastr.info("Canceled");
                    }
                });
            }else {
                this.loading.isLoading = false;
            }
        },

        /**
         * Material editor
         */
        handlerFindAccessEditor: function() {
            this.loading.isLoading = true;
            this.initAccess().then(() => {
                this.initDetailAcessZone().then(() => {
                    this.initDetailAccess().then(() => {
                        this.loading.isLoading = false;
                        this.editor.access.isShow = true;
                    })
                })
            })  
        },

        addRowAccess: function(id) {
            this.editor.access.detail_access.push({
                IDX: id,
                ID: "",
                ACCESS: "",
                MH: "",
                ZONE: ""
            })
        },

        removeRowAccess: function(row_index, id) {
            swal({
                title: "Continue remove this item ?",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    if(id !== '') {
                        axios.get('/api/task/delete_detail_access/' + id)
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.handlerFindAccessEditor();
                                this.editor.access.detail_access.splice(row_index, 1);
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                        })
                    }else {
                        this.editor.access.detail_access.splice(row_index, 1);
                        toastr.success("Success remove item")
                    }
                } else {
                    this.loading.isLoading = false;
                    toastr.info("Canceled");
                }
            });
        },

        postAccess: function(index, status) {
            this.loading.isLoading = true;

            let edt_det_access_id = document.getElementsByClassName('edt-det_access-id')[index].value;
            let edt_det_access_zone_id = document.getElementsByClassName('edt-access-zone')[index].value;
            let edt_access_id = document.getElementsByClassName('edt-access-access')[index].value;
            let edt_access_mh = document.getElementsByClassName('edt-access-mhrs')[index].value;

            let data_validation = [
                {'element': edt_access_mh, 'type' : 'MH', 'data' : 'number'}
            ];

            if(!this.validation(data_validation)) {
                this.loading.isLoading = false;
                return;
            } 
            if(status == "update") {
                swal({
                    title: "Continue update this item ?",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/task/update_access', {
                            id: edt_access_id,
                            mh: edt_access_mh

                        })
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.handlerFindAccessEditor();
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                        })
                    } else {
                        this.loading.isLoading = false;
                        toastr.info("Canceled");
                    }
                });
            }else if(status == "insert") {
                swal({
                    title: "Continue add this item ?",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/task/insert_detail_access', {
                            id_task: this.detail_task.ID,
                            id_det_zone: edt_det_access_zone_id,
                            id_access: edt_access_id
                        })
                        .then(res => {
                            if(res.data.success) {
                                toastr.success(res.data.message)
                                this.handlerFindAccessEditor();
                            }else {
                                toastr.warning(res.data.message)
                            }
                            this.loading.isLoading = false;
                        })
                        .catch(e => {
                            console.log("Error: "+e);
                        })
                    } else {
                        this.loading.isLoading = false;
                        toastr.info("Canceled");
                    }
                });
            }else {
                this.loading.isLoading = false;
            }
        },

        handlerChangeAccess: function(index) {
            let edt_access_id = document.getElementsByClassName('edt-access-access')[index].value;
            let edt_access_mh = document.getElementsByClassName('edt-access-mhrs');

            let temp_mh = this.editor.access.access.filter(d => d.ID === edt_access_id);
            let mh = temp_mh[0].MH;
            edt_access_mh[index].value = mh;

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

        /**
         * Enable field Task Number when Aircraft Type is selected
        */
        onChangeAircraft: function() {
            if(this.form.aircraft_type !== "") {
                document.getElementById("edt-mpd-number").disabled = false;
            }else {
                document.getElementById("edt-mpd-number").disabled = true;
                document.getElementById("edt-mpd-number").value = "";
            }
        }

    },
}



</script>
