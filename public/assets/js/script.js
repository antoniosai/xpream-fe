/**
 * Please and Please and Please dont remove this file & line below.
 * And never use this id
 * #modal-production-planning,
 * #daily-menu-pg-id,
 * #daily-menu-date,
 * #modal-daily-report
 */

function handlerOpenModalDailyMenu(
    pg_id,
    start_date,
    shift,
    index,
    type,
    status
) {
    let e_pg = document.getElementById("daily-menu-pg-id");
    let e_date = document.getElementById("daily-menu-date");
    let e_shift = document.getElementById("daily-menu-shift");
    let e_index = document.getElementById("daily-menu-index");
    let e_type = document.getElementById("daily-menu-type");
    let e_status = document.getElementById("daily-menu-status");
    e_pg.value = pg_id;
    e_date.value = start_date;
    e_shift.value = shift;
    e_index.value = index;
    e_type.value = type;
    e_status.value = status;
    e_pg.dispatchEvent(new Event("input"));
    e_date.dispatchEvent(new Event("input"));
    e_shift.dispatchEvent(new Event("input"));
    e_index.dispatchEvent(new Event("input"));
    e_type.dispatchEvent(new Event("input"));
    e_status.dispatchEvent(new Event("input"));
    $("#modal-production-planning").modal("show");
}

function handlerOpenDailyReport(pg_id, start_date, shift, index, type, status) {
    let e_pg = document.getElementById("daily-report-pg-id");
    let e_date = document.getElementById("daily-report-date");
    let e_shift = document.getElementById("daily-report-shift");
    let e_index = document.getElementById("daily-report-index");
    let e_type = document.getElementById("daily-report-type");
    let e_status = document.getElementById("daily-report-status");
    e_pg.value = pg_id;
    e_date.value = start_date;
    e_shift.value = shift;
    e_index.value = index;
    e_type.value = type;
    e_status.value = status;
    e_pg.dispatchEvent(new Event("input"));
    e_date.dispatchEvent(new Event("input"));
    e_shift.dispatchEvent(new Event("input"));
    e_index.dispatchEvent(new Event("input"));
    e_type.dispatchEvent(new Event("input"));
    e_status.dispatchEvent(new Event("input"));
    $("#modal-daily-report").modal("show");
}

function noAction(pg_id, start_date, shift, index, type, status) {}

// Best regards, Roy

// manage by sobari
function _serializeForm(form, typeformdata = null) {
    let obj = {};
    let formData = new FormData(form);

    formData.forEach((value, key) => {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);
    return json;
    // return new URLSearchParams(new FormData(form)).toString()
}

function _removeObserv(arr) {
    return JSON.parse(JSON.stringify(arr));
}

function _getUserId() {
    return JSON.parse(localStorage.getItem('user')).id
}

function _getId(param) {
    return document.getElementById(param);
}

function _querySelector(param) {
    return document.querySelector(param);
}


const _iconLoading = (color = "white", width="35") => {
    return `<svg width=${width} viewBox="-2 -2 52 52" xmlns="http://www.w3.org/2000/svg" stroke=${color} class="w-4 h-4 ml-3" style="margin-top: 5px;">
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="4">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
            <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(114.132 18 18)">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
            </path>
        </g>
    </g>
</svg>`;
};


function _waitingIframe(elm, isLoad = true, color = 'black',) {
    if(isLoad) {
        return _getId(elm).innerHTML = `${_iconLoading(color)}`;
    }
    _getId(elm).innerHTML = ``;
}


function _lowerObject(obj, isArray = false){
    
    if(isArray) {
        let arr = []
        for (const a of _removeObserv(obj)){
            arr.push(Object.fromEntries(Object.entries(a).map(a =>  [String(a[0]).toLowerCase(), a[1]] )))
        }
        return arr;
    }

    return Object.fromEntries(Object.entries(_removeObserv(obj)).map(a =>  [String(a[0]).toLowerCase(), a[1] ]))
}



function _hideModal(modalName){
    $('#' + modalName).modal('hide');
}
    

function handlerSkillColorResume(data_skill){
    let result = "";

    if(data_skill !== null) {
        let fix_skill = data_skill.split(' ').join('');

        let arr_skill = fix_skill.split(",");

        for(let i = 0; i < arr_skill.length; i++) {
            let temp_skill = "";
            switch(arr_skill[i]) {
                case "AP":
                    temp_skill = `<div class='skill-resume skill-a1-resume'>${arr_skill[i]}</div>`;
                    break;
                case "A1":
                    temp_skill = `<div class='skill-resume skill-a1-resume'>${arr_skill[i]}</div>`;
                    break;
                case "A2":
                    temp_skill = `<div class='skill-resume skill-a2-resume'>${arr_skill[i]}</div>`;
                    break;
                case "EA":
                    temp_skill = `<div class='skill-resume skill-e1-resume'>${arr_skill[i]}</div>`;
                    break;
                case "E1":
                    temp_skill = `<div class='skill-resume skill-e1-resume'>${arr_skill[i]}</div>`;
                    break;
                case "E2":
                    temp_skill = `<div class='skill-resume skill-e2-resume'>${arr_skill[i]}</div>`;
                    break;
                case "STR":
                    temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                    break;
                case "S":
                    temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                    break;
                case "S1":
                    temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                    break;
                case "S2":
                    temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                    break;
                case "CBN":
                    temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                    break;
                case "C":
                    temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                    break;
                case "C1":
                    temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                    break;
                case "C2":
                    temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                    break;
                case "IS":
                    temp_skill = `<div class='skill-resume skill-is-resume'>${arr_skill[i]}</div>`;
                    break;
                case "Q":
                    temp_skill = `<div class='skill-resume skill-q-resume'>${arr_skill[i]}</div>`;
                    break;
                default:
                    temp_skill = `<div class='skill-resume skill-default-resume'>${arr_skill[i]}</div>`;
                    break;
            }

            result +=  temp_skill;
        }

    }

    return result;

}

function _scrollToBottom() {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
}


var l = console.log;
var ll = console.warn;
var lll = console.error;
var dir = console.dir;