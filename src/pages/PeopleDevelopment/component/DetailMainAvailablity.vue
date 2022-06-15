<template>
<div>
    <div class="dashboard" id="dashboard" style="z-index: 1000044;left: 0; top: 0; background: white; height: 100%; top: 0; ">
        <div class="is-col is-100" id="dashboard-body" style="max-height: 95vh; overflow: auto;">
            <div class="is-col is-100" style="text-align:right">Current time: {{ time }}</div>
            <div style="display:grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap:1.3rem;padding-bottom: 40px;" v-if="users.length">
                <div :class="'status-job '+ item.on_job_status +' '+ isWastingTime(item.is_warning)" style="padding: 15px; font-family: 'Be Vietnam Pro', sans-serif;align-items: center; border:3px solid #ddd;padding:10px;align-items: center; border-radius: 5px;" v-for="(item, WaWastingTime) of users" :key="WaWastingTime">
                    <span v-if="item.is_late > 0" style="position: absolute; left: 16px;top: 77px;float: right; height: 30px; width: 50px; font-size:9px; background-color: yellow; color:black; border-radius: 5px; text-align:center;" >Late {{ item.is_late }} minutes</span>
                    <div style="display: flex;">
                        <div style="max-width: 60px;min-width: 60px; margin-right: 10px;">
                            <img style="object-fit: cover; object-position: center;border-radius: 100px;background:white;" :src="getAvatar(item.username)" onerror="this.src='/assets/img/avatar.png'">
                        </div>
                        <div>
                            <div style="display:flex;flex-direction: row-reverse;justify-content:space-between">
                                <span style="font-weight:700">{{item.username}}</span>
                                <span>{{_splitName(item.name)}}</span>
                            </div>
                            <div style="display:flex;">
                                <div style="display: flex; font-size: 11px; justify-content: space-between;margin-bottom: 4px;">
                                    <div style="border-top: 1px dotted;">
                                        <div>Clock-in :</div>
                                        <span style="font-style: italic; backdrop-filter: brightness(0.8); padding: 2px 3px;">Actual {{ item.clockin ? item.clockin.slice(0,5) : 'N/A' }}</span>
                                        <span style="font-style: italic; backdrop-filter: brightness(0.8); padding: 2px 3px;">Plan {{item.planstart ? item.planstart.slice(0,5) : 'N/A' }}</span>
                                    </div>
                                </div>
                                <div style="display: flex; font-size: 11px; justify-content: space-between;margin-bottom: 4px;">
                                    <div style="border-top: 1px dotted;">
                                        <div>Job :</div>
                                        <span style="font-style: italic; backdrop-filter: brightness(0.8); padding: 2px 3px;">Total {{item.aggr ? item.aggr : 'N/A'}}</span>
                                        <span style="font-style: italic; backdrop-filter: brightness(0.8); padding: 2px 3px;">Current {{item.job_order ? item.job_order : 'N/A'}}</span>
                                    </div>
                                </div>
                                <span v-if="item.reason && item.on_job_status === 'break'">
                                    <div v-if="item.reason.reason" style="font-size: 11px; border-top: 1px dotted;"> 
                                        <div>Break Status :</div>
                                        <span style="font-style: italic; backdrop-filter: brightness(0.8); padding: 2px 3px;">{{ item.reason.reason }}</span>
                                        <span style="font-style: italic; backdrop-filter: brightness(0.8); padding: 2px 3px;"> {{ plannedEndTime(item.username, item.planned_end_time, item.reason.std_duration) }}</span>
                                        <!--span style="font-style: italic; backdrop-filter: brightness(0.8); padding: 2px 3px;"> {{item.reason.std_duration}}  {{ item.ttl }} of {{item.reason.std_duration}} minutes</span-->
                                    </div>
                                </span>
                            </div>
                            <div class="mt-1" style="padding:3px 0;display: flex; flex-direction: column; font-size: 12px; border-top: 1px dotted;">
                                <div>GL : {{ item.GL }}</div>
                                <div style="display: flex; justify-content: space-between;">
                                    <div>Stamp No : 
                                        <span :class="'validity ' + isValid(item.STAMPVALID)">{{ item.STAMPNO ? item.STAMPNO : '-' }}</span>
                                    </div>
                                    <div>Amel No : 
                                        <span v-if="!item.AMELVALID"> - </span>
                                        <span v-else :class="'validity ' + isValid(item.AMELVALID)">{{ item.AMELNO ? item.AMELNO : '-' }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else style="display: flex; align-items: center; justify-content: center; height: 65vh;font-size:18px;">
                Loading...
            </div>
        </div>

    </div>
</div>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'

export default {
    props: {
        manpower:null
    },

    data() {
        return {
            date: moment(),
            users:[]
        }
    },
    computed: {
        time: function(){
            return this.date.format('YYYY-MM-DD hh:mm:ss');
        }
    },

    created: function(){   
        setInterval(() => {
            this.date = moment(this.date.add(1, 'seconds'))
            // console.log(this.date)
        }, 1000);
    },

    watch: {
        manpower: {
            handler (n) {
                this.syncUser(n)
            },
            deep:true
        }
        
    },

    methods: {
        
        isValid(val) {
            let [
                dateNow,
                date
            ] = [
                moment(this.time).valueOf(),
                moment(val).valueOf()
            ]


            return (dateNow < date) ? 'is-valid' : 'is-invalid'

        },

        plannedEndTime(username, val, std_duration) {
            
            let planneddtime_display = moment(val).format("HH:mm");
            //console.log(name, val, planneddtime_display)
            let plannedtime_min = moment(val);
            let watchnow = moment(this.time);
            let diffmin = plannedtime_min.diff(watchnow, 'minutes');
            let diffsec = plannedtime_min.diff(watchnow, 'seconds');
            if (!isNaN(diffmin)) {
                if (diffsec >= 0) {
                    return 'until ' + planneddtime_display + ' ('+ (diffmin) + ' minutes left' +')';
                } else {
                    return 'until ' + planneddtime_display + ' (ran over by ' + +(-1*diffmin) + ' minutes)';
                }
            }
            // return moment(val)
            // console.log(diffmin)
        },

        countBreackInterval(val) {
            // console.log(val)
            return val
        },
        
        getAvatar(username) {
            return `/uploads/avatar/${username}.jpg`;
        },

         _splitName(val){
            let shortName;
            const fullname = val.split(' ');

            if(fullname.length > 1) {
                return `${fullname[0]} ${fullname[1]}`
            }
            return shortName = fullname[0];
        },

        isWastingTime(val) {
            if(val) {
                return 'is-wasting-time'
            } else {
                return '-'
            }
        },

        syncUser(data) {

            let {user, attendance, next_shift_switch_on_off, filter_unit} = data ;
            
            if(filter_unit['is'] === true) {
                user = user.filter(i => i.unit == filter_unit['unit']);
            }

            if(attendance) {
                if(attendance.Available.length && user.length) {
                    for(const a of user) {
                        for(const b of attendance.Available) {
                            if(a.username == b.personnel_number) {
                                a.planstart = _.cloneDeep(JSON.parse(b.dws).plan_start)
                                a.clockin = _.cloneDeep(b.clock[1][0].slice(11))
                                let f1 = moment(a.clockin, "HH:mm:ss");
                                let p1 = moment(a.planstart, "HH:mm:ss");
                                let minutes = f1.diff(p1, 'minutes');
                                // console.log(f1, p1, minutes)
                                if (minutes > 0) {
                                    a.is_late = minutes
                                }
                            }
                        }
                    }
                }

                if(attendance.Unavailable.length && user.length) {

                    for(const a of user) {
                        for(const b of attendance.Absence) {
                            if(a.username == b.personnel_number) {
                                a.planstart = _.cloneDeep(b.dws.plan_start)
                                a.on_job_status = 'absence';
                            }

                            if(a.username == b.username) {
                                a.planstart = _.cloneDeep(b.dws.plan_start)
                                a.on_job_status = 'absence';
                            }
                        }
                    }

                    if(next_shift_switch_on_off) {

                        for(const a of user) {
                            for(const b of attendance.NextShift) {
                                if(a.username == b.personnel_number) {
                                    a.planstart = _.cloneDeep(b.dws.plan_start)
                                    a.on_job_status = 'next-shift';
                                }

                                if(a.username == b.username) {
                                    a.planstart = _.cloneDeep(b.dws.plan_start)
                                    a.on_job_status = 'next-shift';
                                }
                            }
                        }

                    } else {

                        for(const a of user) {
                            for(const b of attendance.NextShift) {
                                if(a.username == b.personnel_number) {
                                    a.planstart = _.cloneDeep(b.dws.plan_start)
                                    a.on_job_status = 'next-shift d-none';
                                }

                                if(a.username == b.username) {
                                    a.planstart = _.cloneDeep(b.dws.plan_start)
                                    a.on_job_status = 'next-shift d-none';
                                }
                            }
                        }

                    }


                    for(const a of user) {
                        for(const b of attendance.Off) {
                            if(a.username == b.personnel_number) {
                                a.on_job_status = 'off';
                            }

                            if(a.username == b.username) {
                                a.on_job_status = 'off';
                            }
                        }
                    }

                }
            }
            
            this.users = user;

        }
    },

    mounted() {
        this.syncUser(this.$props.manpower);
        ll(this.$props.manpower.description, 'mounted');
    },
    destroyed() {
        ll(this.$props.manpower.description, 'unmounted');
    }
}
</script>


<style scoped>
.validity{
    padding:0px 5px;
    color:#fff;
    font-family: system-ui !important;
}
.validity.is-invalid{
    background:#fd4949;
}
.validity.is-valid{
    background: #ffffff;
    color: #000;
}
.status-job{
    position:relative;
    background: #92231b;
    color:#fff;
}

.status-job.onjob {
color: #fff;
   background: rgb(62 201 68) !important;
}

.status-job.finish {
    color: #fff;
    background: #2479bf !important;
}

.status-job.break {
    color: #fff;
    background: #f5a228 !important; 
}

@keyframes blinker {
  from {opacity: 1.0;}
  to {opacity: 0.0;}
}

.status-job.finish.is-wasting-time,
.status-job.break.is-wasting-time {
	animation-name: blinker;
	animation-duration: 0.6s;
	animation-iteration-count:infinite;
	animation-timing-function:ease-in-out;
	animation-direction: alternate;
}
.status-job.absence {
    color: #fff;
    background: gray !important; 
}
.status-job.next-shift {
    color: #fff;
    background: #009688 !important; 
}

.status-job.off {
    color: #fff;
    background: #000 !important; 
}
.status-job.next-shift.d-none {
    display: none;
}

</style>