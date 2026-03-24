<template>
  <div class="title-screen">
    <h1>The Wilson Years</h1>
    <h2>Presidential Simulator</h2>
    <div class="president-portrait">🎩</div>
    <p class="title-description">
      March 4, 1913 - Experience the tumultuous presidency of Woodrow Wilson.
      Navigate political intrigue, economic crises, labor disputes, international
      conflicts, and the looming shadow of global war. Your decisions will shape
      American history and determine your legacy. Will you guide the nation
      through reform and neutrality, or will you lead America into a new era of
      global involvement?
    </p>
    <button
      class="start-btn"
      :class="{ locked: !state.difficultyConfirmed }"
      @click="startGame"
    >
      <span v-if="state.difficultyConfirmed">Begin Your Presidency</span>
      <span v-else>Select Difficulty First</span>
    </button>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGame.js';

const store = useGameStore();
const state = store.state;
const startGame = store.startGame;
</script>