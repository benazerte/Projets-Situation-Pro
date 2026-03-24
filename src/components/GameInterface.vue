<template>
  <div class="game-header">
    <div class="date-display">{{ state.currentDate }}</div>
    <div class="term-info">
      {{ termInfo }} | Events Completed: {{ state.completedEvents.length }}
    </div>
    <div class="stats-grid">
      <div 
        class="stat-card" 
        :class="getStatClass(value)" 
        v-for="(value, key) in state.stats"
        :key="key"
      >
        <div class="stat-label">{{ formatStatName(key) }}</div>
        <div class="stat-value">
          {{ value }}%
          <span 
            v-if="state.lastChanges[key]" 
            class="stat-change"
            :class="state.lastChanges[key] > 0 ? 'positive' : 'negative'"
          >
            {{ state.lastChanges[key] > 0 ? '+' : '' }}{{ state.lastChanges[key] }}
          </span>
        </div>
        <div class="stat-bar">
          <div class="stat-bar-fill" :class="getBarClass(value)" :style="{width: value + '%'}"></div>
        </div>
        <div class="stat-description">{{ getStatDescription(key, value) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGame.js';

const store = useGameStore();
const state = store.state;
const termInfo = store.termInfo;
const getStatClass = store.getStatClass;
const formatStatName = store.formatStatName;
const getBarClass = store.getBarClass;
const getStatDescription = store.getStatDescription;
</script>