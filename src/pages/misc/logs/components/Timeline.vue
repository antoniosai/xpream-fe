<style  scoped>
.timeline {
    margin-bottom: 10px;
}


.timeline-bullet .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.timeline-bullet .straight-line {
    width: 3px;
    height: 50px;
    margin-left: 8px;
    margin-top: 3px;
}

.timeline-content {
    margin-left: -15px;
}

.timeline-content .title{
    font-weight: bold;
    margin-bottom: 3px;
}

.timeline-content .subtitle {
    font-weight: normal;
    white-space: nowrap
}

.timeline-content .body i {
    font-size: 12pt; 
    margin-top: 2px;
}

.timeline-content .body div {
    margin-left: 15px; 
    margin-top: -21px;
}


</style>

<template>
    <div class="timeline">
        <div class="is-row">
            <div class="is-col is-10">
                <div class="timeline-bullet">
                    <div :style="`background: ${$props.index === 0 ? '#1f8546' : 'grey'}`" class="circle"></div>
                    <div :style="`background: ${$props.index === 0 ? '#1f8546' : 'grey'}`" class="straight-line"></div>
                </div>
            </div>
            <div class="is-col is-65">
                <div class="timeline-content">
                    <div :style="`color: ${$props.index === 0 ? '#1f8546' : '#575757'}`" class="title">{{handlerDate($props.data.created_at)}}</div>
                    <div class="subtitle">[<b>{{$props.data.column_name}}</b>] {{handlerName($props.data.name)}} ({{$props.data.username}})</div>
                    <div class="body">
                        <i class='material-icons'>
                            subdirectory_arrow_right
                        </i> 
                        <div>
                            {{$props.data.description || "NULL"}} 
                        </div>
                    </div>
                </div>
            </div>
            <div class="is-col is-25">
                <div style="white-space: nowrap">{{handlerTime($props.data.created_at) + ` WIB` || ""}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'timeline',
    props: {
        data: {
            aufnr: "",
            column_name: "",
            created_at: "",
            data_id: "",
            description: "",
            revnr: "",
            name: "",
            username: "",
        },
        index: ""
    },
    components: {

    },
    data: () => ({

    }),
    mounted() {},
    methods: {
        handlerDate: function(date) {
            const month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let result = date;
            if(date !== null) {
                const d = new Date(date);
                let hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
                let minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
                let seconds = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
                result = `${d.getDate()} ${month_names[d.getMonth()]} ${d.getFullYear()}`;
            }
            return result;
        },

        handlerTime: function(date) {
            let result = date;
            if(date !== null) {
                const d = new Date(date);
                let hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
                let minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
                let seconds = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
                result = `${hours}:${minutes}:${seconds}`;
            }
            return result;
        },

        handlerName: function(name) {
            if(name === "") return "";

            let tmp_name = name.split(" ");

            if(tmp_name.length < 3) {
                return name;
            }

            let result = "";

            tmp_name.forEach((elm, index) => {
                if(result === "") {
                    result = elm;
                }else {
                    if(index < 2) {
                        result = result + ` ${elm}`;
                    }else {
                        result = result + `. ${elm.charAt(0)}`;
                    }
                }
            });

            return result;

        },
    }
}

</script>