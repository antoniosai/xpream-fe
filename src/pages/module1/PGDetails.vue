<template>
    <div style="text-align: center">
        <span v-if="pg.ac_reg">A/C Reg: <strong>{{ pg.ac_reg }}</strong></span> | <span v-if="pg.ac_type">A/C Type: <strong>{{ pg.ac_type }}</strong></span> | <span v-if="pg.cust_code">Customer Code: <strong>{{ pg.cust_code }}</strong></span>
        <br>
        <span v-if="pg.ams">AMS: <strong>{{ pg.ams_text }}</strong></span> | <span v-if="pg.gsmart_id">Sales ID: <strong>#{{ pg.gsmart_id }}</strong></span> | Project ID: <strong>#{{ pg.pg_id }}</strong> | Start Date: <strong>#{{ pg.start_date }}</strong> | End Date: <strong>#{{ pg.end_date }}</strong>
        <br>
        
        <span v-if="pg.hangar && pg.line">
            Current Hangar & Line: <strong>{{ pg.hangar.name }}</strong>
            <br>
        </span>
        <span v-if="pg.main_type">
            Inspection: <strong>{{ pg.main_type }}</strong>
            <br>
        </span>
    </div>
</template>

<script>
export default {
    props: ['pg']    
}
</script>