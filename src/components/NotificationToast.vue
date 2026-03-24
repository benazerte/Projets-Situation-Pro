<template>
  <div v-if="state.notification" class="notification" :class="state.notification.type">
    <button class="notification-close" @click="closeNotification">×</button>
    <div class="notification-title">{{ state.notification.title }}</div>
    <div class="notification-text">{{ state.notification.text }}</div>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGame.js';

const store = useGameStore();
const state = store.state;
const closeNotification = store.closeNotification;
</script>