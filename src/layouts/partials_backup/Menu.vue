<template>
    <div>

       <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false"> 
                <li class="nav-item">
                    <router-link :to="{ name: 'dashboard' }" class="nav-link"   :class="{'active' : subIsActive('/dashboard')}">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                        </p>
                    </router-link>
                </li>
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-briefcase"></i>
                        <p>
                            Slot & Capacity
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview" style="display: none;">
                        <li class="nav-item">
                            <router-link :to="{ name: 'module1.abmp_report' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>ABMP</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'module1.planning_gates' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Planning Gate</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'module1.aircraft_parking' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Aircraft Parking</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'module1.slot_availability' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Slot Availability</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <!-- <li class="disabled nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-book"></i>
                        <p>
                            Booking & Submission
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview" style="display: none;">
                        <li class="nav-item">
                            <router-link :to="{ name: 'module1.abmp_report' }" class="nav-link"  :class="{'active' : subIsActive('/dashboard')}">
                                <i class="far fa-circle nav-icon"></i>
                                <p>ABMP</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'module1.planning_gates' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Planning Gates</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'module1.aircraft_parking' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Aircraft Parking</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'module1.slot_availability' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Slot Availability</p>
                            </router-link>
                        </li>
                    </ul>
                </li> -->

            </ul>
        </nav>

    </div>
</template>

<script>
export default {
    name: 'MenuIMTE',

    computed: {
        user: function () {
            return JSON.parse(localStorage.getItem('user'));
        }
    },

    mounted() {
    },

    methods: {
        subIsActive(input) {
        const paths = Array.isArray(input) ? input : [input]
        return paths.some(path => {
                return this.$route.path.indexOf(path) === 0 // current path starts with this path string
          
            })
        },
    }
}
</script>

<style>
    .custom-font {
        font-size: 11px
    }
</style>