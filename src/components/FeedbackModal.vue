<template>
  <div v-if="state.showFeedback && state.feedbackData" class="feedback-modal" @click.self="closeFeedback">
    <div class="feedback-content">
      <h2 class="feedback-title">{{ state.feedbackData.title }}</h2>
      
      <div class="feedback-section">
        <div class="feedback-section-title">📰 Immediate Impact</div>
        <p class="feedback-text">{{ state.feedbackData.immediate }}</p>
      </div>
      
      <div class="feedback-section">
        <div class="feedback-section-title">🌍 National Response</div>
        <p class="feedback-text">{{ state.feedbackData.national }}</p>
      </div>
      
      <div v-if="state.feedbackData.international" class="feedback-section">
        <div class="feedback-section-title">🌐 International Reaction</div>
        <p class="feedback-text">{{ state.feedbackData.international }}</p>
      </div>
      
      <div v-if="state.feedbackData.longTerm" class="feedback-section">
        <div class="feedback-section-title">📊 Long-term Consequences</div>
        <p class="feedback-text">{{ state.feedbackData.longTerm }}</p>
      </div>
      
      <div class="feedback-section">
        <div class="feedback-section-title">📈 Statistical Changes</div>
        <div class="feedback-consequences">
          <div v-for="(change, key) in state.feedbackData.changes" :key="key" class="consequence-item">
            <div class="consequence-label">{{ formatStatName(key) }}</div>
            <div class="consequence-value" :class="change > 0 ? 'positive' : 'negative'">
              {{ change > 0 ? '+' : '' }}{{ change }}%
            </div>
          </div>
        </div>
      </div>
      
      <button class="feedback-continue-btn" @click="closeFeedback">
        Continue Your Presidency →
      </button>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGame.js';

const store = useGameStore();
const state = store.state;
const closeFeedback = store.closeFeedback;
const formatStatName = store.formatStatName;
</script>