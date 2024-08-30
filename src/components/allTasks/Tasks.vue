<template>
    <div class="card mt-2" v-if="tasks.length && show">
        <ul class="list-group list-group-flush">
            <Task v-for="task in tasks"  
            :task="task" 
            :key="task.id" 
            @updated="handleUpdatedTasks"
                @completed="handleCompletedTasks"
                @removed="handleRemovedTasks"
            />
        </ul>
    </div>
</template>

<script setup>

import { useTaskStore } from '@/stores/task';
import Task from './Task.vue';

const store = useTaskStore();
const { handleUpdatedTasks, handleCompletedTasks, handleRemovedTasks } = store;

defineProps({
    tasks: Array,
    show: {
        type: Boolean,
        default: true,
    },
});
</script>