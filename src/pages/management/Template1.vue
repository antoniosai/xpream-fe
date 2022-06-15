<template>
    <div>
        
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="abmp-tab" data-toggle="tab" href="#abmp" role="tab" aria-controls="home"
                    aria-selected="true" v-html="$route.meta.title"></a>
            </li>
            
        </ul>
        <div class="card">
            <div class="card-body">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="abmp" role="tabpanel" aria-labelledby="home-tab">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import ACParking from './ACParking'
import SlotAvailability from './SlotAvailability'
import PlanningGates from './PlanningGates'

export default {
    components: {
        ACParking, SlotAvailability, PlanningGates
    }
}
</script>