<script>
import axios from 'axios';
export default {
    methods: {
        $can(slug) {
            let user = JSON.parse(localStorage.user)
            let Permission = user.role.permission

            for (var i=0; i < Permission.length; i++) {
                if (Permission[i].slug === slug) {
                    return true
                }
            }
        },

        $contain(group_slug) {
            let user = JSON.parse(localStorage.user)
            let Permission = user.role.permission;

            for (var i=0; i < Permission.length; i++) {
                if (Permission[i].slug.includes(group_slug)) {
                    return true
                }
            }
        },

        $bulkCan(...slugs) {
            for (let slug of slugs) {
                if(this.$can(slug)) {
                    return true;
                }
            }
        },

        $cekCustomerProject(revnr) {
            let user = JSON.parse(localStorage.user);
            return new Promise((resolve) => {
                if(user.role.is_customer === "n") {
                    resolve(true);
                }else {
                    axios.get('/api/auth/cek_customer_project/'+this.$route.params.pg_id)
                    .then(res => {
                        if(res.data.success) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    })
                    .catch(() => {
                        resolve(false)
                    })
                }
            })
        },

        $isReleased(revnr) {
            return new Promise((resolve) => {
                axios.get(`/api/slot_and_capacity/planning_gate/get_status/${revnr}`)
                .then(res => {
                    if(res.data.hasOwnProperty("custom_status")) {
                        if(res.data.custom_status === "Released" && res.data.difference*-1>res.data.TAT) {
                            resolve(false);
                        }else {
                            resolve(true);
                        }
                    }else {
                        resolve(false);
                    }
                })
                .catch(() => {
                    resolve(false);
                })
            })
        }

    },
}
</script>