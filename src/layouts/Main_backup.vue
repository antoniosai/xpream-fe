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

            <Menu />
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <!-- <Breadcrumb /> -->
            <!-- /.content-header -->
            <br>
            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="card card-success card-outline card-tabs">
                       
                        <div class="card-body">
                            <router-view></router-view>
                        </div>
                    </div>
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