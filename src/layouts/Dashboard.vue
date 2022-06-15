<template>
    <div>
        <aside class="main-sidebar">
            <div class="main-logo">
                <Logo />
            </div>
            <Menu />
        </aside>
        <div class="content">
            <Header />
            <div class="main-content">
                <div class="content-header"></div>
                <div class="content-body">
                    <div class="is-row"  style="width: auto; display: block;">
                        <div class="is-col">
                            <div class="card">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Logo from './partials/Logo'
import Menu from './partials/Menu'
import Header from './partials/Header'

export default {
    components: {
        Logo, Menu, Header
    }
}
</script>