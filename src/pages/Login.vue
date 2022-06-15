<template>
    <div class="login-box">
        <!-- <loading 
            :loader="loading.loader"
            :color="loading.color"
            :width="loading.width"
            :height="loading.width"
            :active.sync="loading.isLoading" 
            :can-cancel="true" 
            :is-full-page="loading.fullPage">
        </loading> -->
        <div class="login-logo">
            <img src="/assets/img/logo-gmf.png" />
            <h3 class="title">Excellent Project Management Stream</h3>
        </div>
        <div class="login-card">
            <div class="heading">
                <h4 class="title" style="text-align: center">
                    Sign in to XPREAM
                </h4>
                <!-- <span style="text-align: center">Please enter your credentials</span> -->
            </div>
            <form @submit.prevent="login">
                <div class="form-item">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        v-model="form.username"
                        autofocus
                        required
                        autocomplete="off"
                    />
                </div>
                <div class="form-item with-checkbox">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        v-model="form.password"
                        required
                        autocomplete="off"
                    />
                    <label class="is-checkbox">
                        <div class="checkbox">
                            <label
                                ><input
                                    type="checkbox"
                                    name="remember"
                                    v-model="form.remember"
                                /><span>Remember me</span></label
                            >
                        </div>
                    </label>
                </div>
                <div class="form-item" style="text-align:right">
                    <button
                        class="button button-login"
                        type="submit"
                        v-if="!loading.isLoading"
                    >
                        Sign in
                    </button>
                    <button class="button is-loading" disabled v-else>
                        Processing...
                    </button>
                </div>
            </form>
        </div>
        <div class="login-footer">
            <span>Copyright © 2020 GMF AeroAsia</span>
        </div>
    </div>
</template>

<script>
import swal from "sweetalert";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
    components: {
        Loading
    },

    data() {
        return {
            loading: {
                loader: "dots",
                color: "#1976d2",
                height: 120,
                width: 120,
                isLoading: false,
                fullPage: true
            },
            form: {
                username: "",
                password: "",
                remember: false
            }
        };
    },

    mounted() {},

    computed: {
        user: function() {
            return JSON.parse(localStorage.getItem("user"));
        }
    },

    methods: {
        async login() {
            this.loading.isLoading = true;

            this.$store
                .dispatch("login", this.form)
                .then(res => {
                    if (res.data.status == "success") {
                        swal(res.data.message, "Welcome");
                        // this.$router.push('module1.abmp_report')

                        window.location = "/";
                    } else if (res.data.status == "failed") {
                        swal({
                            title: "Failed to Log In",
                            text: res.data.message,
                            icon: "warning",
                            button: "Ok"
                        });
                        this.loading.isLoading = false;
                    }
                    // this.loading.isLoading = false
                })
                .catch(err => {
                    swal({
                        title: "Failed to Log In",
                        text: err.response.data.message,
                        icon: "warning",
                        button: "Ok"
                    });

                    this.loading.isLoading = false;
                });
        }
    }
};
</script>

<style scoped>
@import "/public/assets/css/login.css";
</style>
