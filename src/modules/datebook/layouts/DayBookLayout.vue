<template>
    <Navbar />

    <div class="d-flex">
        <div class="col-md-4">
            <EntryList />
        </div>

        <div class="col-md-8">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components : {
        Navbar : defineAsyncComponent(() => import('../components/Navbar.vue')),
        EntryList : defineAsyncComponent(() => import('../components/EntryList.vue'))
    }
}
</script>