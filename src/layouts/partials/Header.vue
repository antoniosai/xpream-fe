<template>
    <header class="main-header">
        <div class="display-flex">
            <a href="javascript:void(0);" class="toggle-sidebar"><i class="material-icons">menu</i></a>
            <div class="headline">
                <h2 class="title">{{ $route.meta.title }}</h2>
                <span class="subtitle">XPREAM - GMF AeroAsia</span>
            </div>
        </div>
        <ul class="main-navbar">
            <li class="user-panel" style="position: relative">
                <div class="user-info" v-on:click="logout">
                    <div class="user">
                        <span class="name">{{ user.name }}</span>
                        <span class="role">{{ user.role.display_name }}</span>
                    </div>
                    <img class="image" v-bind:src="user.avatar"  alt="user">
                </div>
                <ul class="user-dropdown">
                    <li>
                        <a href="">Settings</a>
                    </li>
                    <li>
                        <a href="">Log Out</a>
                    </li>
                </ul>
            </li>
        </ul>
        <loading 
            :loader="loading.loader"
            :color="loading.color"
            :width="loading.width"
            :height="loading.width"
            :active.sync="loading.isLoading" 
            :can-cancel="true" 
            :is-full-page="loading.fullPage"
        />
    </header>
</template>

<script>

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
    
    components: {
        Loading
    },

    computed: {
        user: function () {
            return JSON.parse(localStorage.getItem('user'));
        }
    },

    data: () => ({
        loading: {
            loader: 'spinner',
            color: '#1976d2',
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: true,
        },

        sync_history: {}
    }),

    mounted() {
    },

    methods: {
        logout: function () {
            swal({
                title: "You Are Going to Logout",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.$store.dispatch('logout')
                    .then(() => {
                        toastr.success('Successfully logged out. Redirecting to Login Page')
                        window.location.href = "/login"
                    })
                } else {
                    toastr.info("Canceled")
                }
            })
        },
        sync: function () {
            
            swal({
                title: "You Are Going to Sync Data from CRM & GSMART",
                text: "Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {

                    this.loading.isLoading = true

                    axios.post('/api/sync')
                    .then( res => {

                        if(res.data.status) {
                            if(res.data.status  == 'success'){
                                this.loading.isLoading = false
                                this.syncHistory()
                                toastr.success('CRM INFO & GSMART Successfully Synced', 'Success')
                            } else {
                                toastr.error(res.data.message, 'Failed')
                            }
                        } else {
                            toastr.error(res.data.message, 'Failed')
                        }
                    })

                    // this.loading.isLoading = false
                } else {
                    toastr.info("Canceled");
                }
            });
        },

        syncHistory: function() {
            axios.get('/api/sync/history')
            .then( res => {
                this.sync_history = res.data
            })
        }
    }
}
</script>