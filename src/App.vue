<template>
  <div id="game-app">
    <div class="bg-animation"></div>
    <audio id="bgMusic" loop>
    </audio>

    <button class="music-control" :class="{muted: !state.musicPlaying}" @click="toggleMusic" v-if="state.gameState !== 'title'">
        {{ state.musicPlaying ? '🔊' : '🔇' }}
    </button>

    <div v-for="i in 15" :key="i" class="particle" :style="{
             left: (Math.random() * 100) + '%',
             animationDelay: (Math.random() * 15) + 's',
             animationDuration: (10 + Math.random() * 10) + 's'
         }"></div>

    <div v-if="state.loading" class="loading-overlay">
        <div class="loading-spinner"></div>
    </div>

    <TitleScreen v-if="state.gameState === 'title'" />
    <DifficultyModal v-if="state.showDifficultyModal" />

    <div v-if="state.gameState === 'playing'" class="game-container">
      <GameInterface />
      <HistoryPanel />
      <EventPanel />
    </div>

    <FeedbackModal />
    <GameOverScreen />
    <NotificationToast />
  </div>
</template>

<script setup>
import { useGameStore } from './stores/useGame.js';
import TitleScreen from './components/TitleScreen.vue';
import DifficultyModal from './components/DifficultyModal.vue';
import GameInterface from './components/GameInterface.vue';
import HistoryPanel from './components/HistoryPanel.vue';
import EventPanel from './components/EventPanel.vue';
import FeedbackModal from './components/FeedbackModal.vue';
import GameOverScreen from './components/GameOverScreen.vue';
import NotificationToast from './components/NotificationToast.vue';

const store = useGameStore();
const state = store.state;
const toggleMusic = store.toggleMusic;
</script>
<style></style>
