<template>
    <main style="min-height: 50vh; margin-top: 2rem">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTask/>

                    <!-- List of uncompleted tasks -->
                    <Tasks 
                    :tasks="uncompletedTasks" 
                    
                    />


                    <!-- show toggle button -->
                    <div class="text-center my-3" v-show="showToggleCompletedBtn">
                        <button class="btn btn-sm btn-secondary" @click="$event => showCompletedTasks = !showCompletedTasks">
                           <span v-if="!showCompletedTasks"> Show completed tasks</span>
                           <span v-else> Hide completed tasks</span>
                        </button>
                    </div>
                    
                    <!-- List of completed tasks -->
                    <Tasks 
                    :tasks="completedTasks" 
                    :show="completedTasksIsVisible && showCompletedTasks"
                    
                     />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
    import { onMounted, ref, computed } from 'vue';

    import { useTaskStore } from '@/stores/task';

    import Tasks from '../components/allTasks/Tasks.vue';

    import NewTask from '@/components/allTasks/NewTask.vue';

    import { storeToRefs } from 'pinia';


    const store = useTaskStore();
    const { completedTasks, uncompletedTasks } = storeToRefs(store);
    
    const { fetchAllTasks } = store;


    onMounted(async () => {
       
        await fetchAllTasks();
    });

   

    const showToggleCompletedBtn = computed(() => 
    uncompletedTasks.value.length > 0 && completedTasks.value.length > 0);

    const completedTasksIsVisible = computed(() =>
    uncompletedTasks.value.length === 0 || completedTasks.value.length > 0);

    const showCompletedTasks = ref(false);

    
    
</script>