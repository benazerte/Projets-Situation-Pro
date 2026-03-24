<template>
  <div v-if="state.gameState === 'gameOver'" class="game-over-screen">
    <h1 class="game-over-title">{{ state.gameOverData.title }}</h1>
    <p class="legacy-text">{{ state.gameOverData.description }}</p>

    <div class="final-stats-grid">
      <div class="final-stat-card" v-for="(value, key) in state.stats" :key="key">
        <div class="stat-label">{{ formatStatName(key) }}</div>
        <div class="stat-value">{{ value }}%</div>
      </div>
    </div>

    <p class="legacy-text">{{ state.gameOverData.legacy }}</p>

    <button class="restart-btn" @click="restartGame">Play Again</button>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGame.js';

const store = useGameStore();
const state = store.state;
const restartGame = store.restartGame;
const formatStatName = store.formatStatName;
</script>