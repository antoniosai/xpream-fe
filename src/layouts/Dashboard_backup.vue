<template>
    <div class="wrapper">

        <!-- Navbar -->
        <Navbar/>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <Logo />

            <!-- Sidebar -->
            <UserProfile />
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <br>
            <!-- Content Header (Page header) -->
            <!-- <Breadcrumb /> -->
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <router-view></router-view>
                    <!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        
        <!-- Main Footer -->
        <Footer />        
    </div>
</template>

<script>

import Logo from './partials/Logo'
import UserProfile from './partials/UserProfile'

import Footer from './partials/Footer'
import Navbar from './partials/Navbar'
import Breadcrumb from './partials/Breadcrumb'

export default {
    components: {
        Logo, UserProfile, Navbar, Footer, Breadcrumb
    }
}
</script>