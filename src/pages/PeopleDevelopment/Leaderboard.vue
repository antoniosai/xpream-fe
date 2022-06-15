<template>
    <main>
    </main>
</template>
<script>
export default{

    created() {



        if(!this.$can('p_dev_leaderboard')) {
            this.$router.push('access_denied');
        }
    },

    mounted() {
        console.log(`
            /* -------------------------------------------------------------------------- */
            /*                              Leaderboard Page                              */
            /* -------------------------------------------------------------------------- */
        `)
    }

}
</script>