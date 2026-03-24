<template>
  <div v-if="state.showHistory" class="history-panel">
    <h2 class="history-title">📜 Presidential Chronicle</h2>
    <div class="history-item" v-for="(item, index) in state.history" :key="index">
      <div class="history-date">{{ item.date }}</div>
      <div class="history-event">{{ item.event }}</div>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGame.js';

const store = useGameStore();
const state = store.state;
</script>