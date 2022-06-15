<template>
    <div>
        <div class="card" style="margin-bottom: 15px; top: 0; position: sticky; z-index: 2; width: 100%;">
            <div class="is-row">
                <div class="is-col is-60">
                    <table v-if="app_list.length > 0">
                        <thead>
                            <th>No</th>
                            <th>Type</th>
                            <th>Version</th>
                            <th>Last Update</th>
                            <th>User Guide</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr v-for="(apk, idx) in app_list" :key="idx">
                                <td>{{ idx+1 }}</td>
                                <td>{{ apk.type }}</td>
                                <td>{{ apk.version }}</td>
                                <td>{{ apk.updated_at }}</td>
                                <td>
                                    <button v-if="apk.guide !== '' && apk.guide !== null" class="button is-primary" @click="clickDownload(apk.guide, '', 'XOPS_GUIDE')"> Download </button>
                                    <span v-else>-</span>
                                </td>
                                <td>
                                    <button v-if="apk.url !=='' && apk.url !== null" class="button is-success" @click="clickDownload(apk.url, apk.id, 'XOPS_APP')"> Download </button>
                                    <span v-else>-</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="is-col is-40">
                </div>
            </div>
            <div class="is-row">
                <div class="is-col is-60">
                    <video height="100%" poster="/uploads/xops_poster.jpg" controls>
                        <source src="/uploads/xops_guide.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="is-col is-40">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import moment from 'moment'
import axios from 'axios';

const GET_APK_LINK = gql`
    query getLink {
        XOPS_appsdownload(where: {is_active: {_eq: "y"}}) {
            id
            type
            updated_at
            url
            version
            guide
        }
    }
`

    /*log_download_aggregate(where: {ACTION: {_eq: "DOWNLOAD"}, TYPE: {_eq: "XOPS_APP"}}) {
      aggregate {
        count
      }
    }*/

const INSERT_LOG = gql`
    mutation insertLog ($datenow: datetime, $type: String, $user: Int, $data: Int) {
        insert_XPREAM_TRACKING_LOGS(objects: {ACTION: "DOWNLOAD", COLUMN_NAME: "", CREATED_AT: $datenow, DATA_ID: $data, DESCRIPTION: "", TYPE: $type, USER_ID: $user}){
            returning {
                ID
            }
        }
    }
`

export default{
    data: () => ({
        app_list: []
    }),

    created() {
        if(!this.$can('xops')) {
            this.$router.push('access_denied');
        }
    },

    mounted() {
        this.getLinkXops()
    },

    computed: {
        user: function () {
            return JSON.parse(localStorage.getItem('user'));
        }
    },
    methods: {
        getLinkXops() {
            this.$apollo.query({
                query: GET_APK_LINK
            }).then((response) => {
               this.app_list = response.data.XOPS_appsdownload
            })
        },

        clickDownload(url, data, type) {
            // console.log(url, data, type)
            axios.post('/api/activity_log/download_log', {
                data: data,
                type: type
            })
            /*this.$apollo.mutate({
                mutation: INSERT_LOG,
                variables: {
                    datenow: moment().format('YYYY-MM-DD HH:mm:ss'),
                    type: type,
                    user: this.user.id,
                    data: data
                }
            })*/
            .then((response) => {
                window.open(url, '_blank')
            }).catch(e => {
                console.log("Error: " +e);
            })
           // window.open(url,'_blank')
        }

    }

}
</script>