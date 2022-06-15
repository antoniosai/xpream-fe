<template>
    <div>

        <div class="content-header"></div>
        <div class="content-body">
            <div class="is-row" style="width: auto; display: block;">
                <div class="is-col">
                    <div class="card">
                        <div class="card-header no-border">
                            <div class="title-area">
                                <h3 class="title">{{ $route.meta.title }}</h3>
                                <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                            </div>
                            <div class="option-box">
                                
                                <div class="option-item">
                                    <span>Filter</span>
                                    <input class="by_search" type="search" name="search" placeholder="Type and enter">
                                </div>
                            </div>
                        </div>
                        <div class="card-content">
                            
                            <table id="tabl" class='display is-bordered is-striped is-hover is-condensed is-sm'>
                                <thead>
                                    <th>Action</th>
                                    <th>Urgency</th>
                                    <th>Order Time</th>
                                    <th>Revision Number</th>
                                    <th>SWO</th>
                                    <th>Position</th>
                                    <th>Aircraft</th>
                                    <th>Movement Type</th>
                                    <th>From & To</th>
                                    <th>Equipment</th>
                                    <th>Date Plan</th>
                                    <th>Date Actual</th>
                                    <th>Last Activity</th>
                                    <th>Notes</th>
                                </thead>
                                <tbody>
                                    <tr>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    </div>
</template>

<script>

export default {

    data: () => ({

    }),

    components: {
    
    },


    mounted() {

    },

    methods: {
        
    }
}
</script>

<style scoped>
    ::v-deep label {
        font-size: 12px
    }
</style>

