<style scoped>
.fab {
    position: fixed;
    width: 40px;
    right: 2%;
    top: 130px;
    margin-left: -33px;
    z-index: 999999;
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
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAdklEQVR4Ae3PwQmAQAxE0ZRjGXZmCZZkOZaxstd/k4wOC/MhkFN4qbR047uOgP4CBRTQ3AcKKKCAmgUU0D2PNGfvgIjZSpAARIwBRAyOqOZ6AyKGUG0EMWL8IGLcIOYH6eNjpx6kRxHkR5U9oMoeUGUPqEor9wC4QnWniiG93gAAAABJRU5ErkJggg==") center no-repeat;

 }

.fab-buttons__item {
    display: block;
    text-align: center;
    margin: 12px 0;
}

/*.fab-buttons__link {
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
*/
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

.icon-material {
    display: inline-block;
    width: 60px;
    height: 60px;
}
/*
.icon-material_fb {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icG9zdC1mYWNlYm9vayI+CgkJPHBhdGggZD0iTTQ1OSwwSDUxQzIyLjk1LDAsMCwyMi45NSwwLDUxdjQwOGMwLDI4LjA1LDIyLjk1LDUxLDUxLDUxaDQwOGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxVjUxQzUxMCwyMi45NSw0ODcuMDUsMCw0NTksMHogICAgIE00MzMuNSw1MXY3Ni41aC01MWMtMTUuMywwLTI1LjUsMTAuMi0yNS41LDI1LjV2NTFoNzYuNXY3Ni41SDM1N1Y0NTloLTc2LjVWMjgwLjVoLTUxVjIwNGg1MXYtNjMuNzUgICAgQzI4MC41LDkxLjgsMzIxLjMsNTEsMzY5Ljc1LDUxSDQzMy41eiIgZmlsbD0iIzc1NzU3NSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=") center no-repeat;
}
*/

.rate {
    float: center;
    height: 46px;
    padding: 0 10px;
    margin: auto;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:45px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}

/* Modified from: https://github.com/mukulkant/Star-rating-using-pure-css */


 
</style>


<template>
    <footer>
            <div class="modal-box" id="modal-add-feedback">
                <div class="modal md">
                    <span class="close" v-on:click="hideModal('modal-add-feedback')"></span>
                        <div class="modal-header">
                            <h2 class="title">Let's Rate and Review</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <center>
                            <h4>Rate your exprerience</h4>
                            <div class="is-row">
                                <div class="form-item rate">
                                    <input v-model="form.stars" type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5 stars</label>
                                    <input v-model="form.stars" type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4 stars</label>
                                    <input v-model="form.stars" type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3 stars</label>
                                    <input v-model="form.stars" type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2 stars</label>
                                    <input v-model="form.stars" type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1 star</label>
                                </div>
                            </div>
                            </center><hr><br>
                            <div class="form-item">
                                <center>
                                <label><h4>Write your comment & review about Xpream features<span class="is-desc"></span></h4></label>
                                <textarea v-model="form.comment" placeholder="This form is for providing feedback about how our features can be improved, reporting bug, or anything"  name="" id="" cols="30" rows="5"></textarea>
                                </center>
                            </div>                            
                            <div class="form-item">
                                <label>Attach document (file/image) if necessary<span class="is-desc"></span></label>
                                <input style="all: unset"  id="file" class="form-control" ref="file" type="file" v-on:change="onChangeFileUpload()">
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-add-feedback')">Close</button>
                            <button v-on:click="addfeedback()" class="button"  type="button" id="btn-save-knowledge"> Save</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>

            <div v-on:click="handleModalFeedback" class="fab" data-tooltip="Give Us Feedback!" v-if="$route.name!=='pc_hangar.summary_dashboard' && $route.name!=='pc_hangar.tracking.dashboard_summary'">
            <span class="fab-action-button">   
                    <i class='fab-action-button__icon'></i>
            </span>
            <!--
            <ul class="fab-buttons">
                <li class="fab-buttons__item">
                <a v-on:click="handleModalFeedback" class="fab-buttons__link" data-tooltip="Give Us Feedback!">
                    <i class="icon-material icon-material_fb"></i>
                </a>
                </li>
            </ul>-->
            </div>

    </footer>
</template>

<script>

export default {
    
    components: {
    },

    computed: {
        user: function () {
            return JSON.parse(localStorage.getItem('user'));
        }
    },

    data: () => ({
        form: {
            comment: '',
            stars: '',
            attach: ''
        },

    }),

    mounted() {
    },

    methods: {
        handleModalFeedback: function() {
            this.form.comment = '';
            this.form.stars = '';
            this.form.attach = '';
            $('#modal-add-feedback').show();
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
                element.className = "button";
                element.disabled = false;
                resolve();
                }
            })
        },
        onChangeFileUpload: function(){
            if(document.getElementById("file").files.length != 0 ){
                this.form.attach = this.$refs.file.files[0];
                //console.log(this.$refs.file.files);
            }
        },        
        addfeedback: function() {
            var now = new Date();
            var todayhour   = now.getHours();
            var todayminute = now.getMinutes();
            var todaysecond = now.getSeconds();
            var todaydate = now.getDate();
            var todaymonth = now.getMonth()+1;
            var todayyear = now.getFullYear();
            if (todaydate < 10) { todaydate = "0" + todaydate; }
            if (todaymonth < 10) { todaymonth = "0" + todaymonth; }
            if (todayhour < 10) { todayhour = "0" + todayhour; }
            if (todayminute < 10) { todayminute = "0" + todayminute; }              
            var idateinput =  todayyear+'-'+todaymonth+'-'+todaydate+' '+todayhour+':'+todayminute; 
            var icomment = this.form.comment;
            var istars = this.form.stars;
            var iattach = this.form.attach;
            var iusr = JSON.parse(localStorage.getItem('user')).name+" ["+istars+"]";

            //console.log(idateinput+icomment+istars+iusr)
            this.handleButton('btn-save-knowledge', 'load').then(() => {
                let formData = new FormData();
                formData.append('name', iusr);
                formData.append('dateinput', idateinput);
                formData.append('desc', icomment);
                formData.append('fileSource', iattach);
                formData.append('idList', '5eb0862687928a2c7a91d554');
                
                var instance = axios.create();
                delete instance.defaults.headers.common['X-CSRF-TOKEN'];
                delete instance.defaults.headers.common['Authorization'];
                delete instance.defaults.headers.common['X-Requested-With'];
                instance({
                    method: 'post',
                    url: 'https://api.trello.com/1/cards?key=4baef62c01aeb2dc2e041947cfb74b3e&token=3bbfe104f32363a9d8c8c47dd5cc891ad57e28dc63e25dcace965a24a7f78af8',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': '*/*'
                    }
                })
                /*;
                axios.post('https://api.trello.com/1/cards?key=4baef62c01aeb2dc2e041947cfb74b3e&token=3bbfe104f32363a9d8c8c47dd5cc891ad57e28dc63e25dcace965a24a7f78af8', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })*/
                .then(res => {
                    toastr.success("Thank you for giving us a feedback to improve our System");
                    this.hideModal("modal-add-feedback");
                    this.handleButton('btn-save-knowledge', 'stop');
                })
                .catch(e => {
                    console.log("Error " +e);
                    toastr.error("Undefined error");
                    this.handleButton('btn-save-knowledge', 'stop');
                })
            });
        }       
    }
}
</script>