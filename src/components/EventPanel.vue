<template>
  <div class="event-section" v-if="currentEvent">
    <div class="event-category">{{ currentEvent.category }}</div>
    <h2 class="event-title">{{ currentEvent.title }}</h2>
    <div v-if="currentEvent.context" class="event-context">
      {{ currentEvent.context }}
    </div>
    <p class="event-description">{{ currentEvent.description }}</p>
    <div class="choices-container">
      <button 
        v-for="(choice, index) in currentEvent.choices" 
        :key="index" 
        class="choice-btn"
        :class="{disabled: !isChoiceAvailable(choice)}" 
        :disabled="!isChoiceAvailable(choice)"
        @click="makeChoice(choice, index)"
      >
        <span class="choice-number">{{ index + 1 }}</span>
        {{ choice.text }}
        <div v-if="!isChoiceAvailable(choice)" class="choice-requirement">
          ⚠️ {{ choice.requirement }}
        </div>
        <div class="choice-effects">
          <span 
            v-for="(effect, key) in choice.effects" 
            :key="key" 
            class="effect-item"
            :class="getEffectClass(effect)"
          >
            {{ effect > 0 ? '▲' : effect < 0 ? '▼' : '●' }} {{ formatStatName(key) }}: {{ Math.abs(effect) }} 
          </span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGame.js';

const store = useGameStore();
const currentEvent = store.currentEvent;
const isChoiceAvailable = store.isChoiceAvailable;
const makeChoice = store.makeChoice;
const getEffectClass = store.getEffectClass;
const formatStatName = store.formatStatName;
</script>