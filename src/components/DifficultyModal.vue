<template>
  <div class="difficulty-modal">
    <div class="difficulty-content">
      <h2 class="difficulty-title">Choose Your Timeline</h2>
      <p class="difficulty-subtitle">
        Select the historical divergence that will shape your presidency. Each timeline presents unique challenges and opportunities.
      </p>

      <div class="difficulty-options">
        <!-- EASY MODE -->
        <div
          class="difficulty-card"
          :class="{ selected: state.selectedDifficulty === 'easy' }"
          @click="selectDifficulty('easy')"
        >
          <h3 class="difficulty-card-title">🕊️ EASY MODE</h3>
          <p class="difficulty-card-description">The American Harmony</p>
          <div class="difficulty-card-details">
            <div class="difficulty-detail-section">
              <div class="difficulty-detail-title">Timeline Overview</div>
              <div class="difficulty-detail-text">
                "A Union of peace, industry, and destiny." The Civil War was avoided through the Crittenden Compromise of 1860, which established gradual compensated emancipation. The South remained in the Union, and America prospered without bloodshed.
              </div>
            </div>
            <div class="difficulty-detail-section">
              <div class="difficulty-detail-title">1913 Situation</div>
              <div class="difficulty-detail-text">
                President Henry Cabot Lodge leads a unified, prosperous nation. The economy is booming with electrification and railways. Racial equality is ahead of its time. America is globally respected as a trusted mediator between European powers.
              </div>
            </div>
            <div class="difficulty-detail-section">
              <div class="difficulty-detail-title">Gameplay Effects</div>
              <div class="difficulty-detail-text">
                Start with higher stats across the board. Greater public support and congressional cooperation. International respect makes diplomacy easier. The Union perfected - stable, humane, and confident.
              </div>
            </div>
          </div>
        </div>

        <!-- NORMAL MODE -->
        <div
          class="difficulty-card"
          :class="{ selected: state.selectedDifficulty === 'normal' }"
          @click="selectDifficulty('normal')"
        >
          <h3 class="difficulty-card-title">⚖️ NORMAL MODE</h3>
          <p class="difficulty-card-description">The Historical Timeline</p>
          <div class="difficulty-card-details">
            <div class="difficulty-detail-section">
              <div class="difficulty-detail-title">Timeline Overview</div>
              <div class="difficulty-detail-text">
                The actual history of America. The Civil War (1861-1865) preserved the Union but left deep scars. Reconstruction attempted to rebuild the South and integrate freedmen, with mixed success. Industrial growth created a powerful but unequal nation.
              </div>
            </div>
            <div class="difficulty-detail-section">
              <div class="difficulty-detail-title">1913 Situation</div>
              <div class="difficulty-detail-text">
                Woodrow Wilson inherits a nation of contradictions: industrial might alongside labor strife, progressive ideals alongside Jim Crow, isolationist traditions facing global responsibilities. The Great War looms in Europe.
              </div>
            </div>
            <div class="difficulty-detail-section">
              <div class="difficulty-detail-title">Gameplay Effects</div>
              <div class="difficulty-detail-text">
                Balanced starting stats. Historical challenges require careful navigation. Your decisions will determine whether America fulfills its promise or falls short. The authentic Wilson experience.
              </div>
            </div>
          </div>
        </div>

        <!-- HARD MODE -->
        <div
          class="difficulty-card"
          :class="{ selected: state.selectedDifficulty === 'hard' }"
          @click="selectDifficulty('hard')"
        >
          <h3 class="difficulty-card-title">🧨 HARD MODE</h3>
          <p class="difficulty-card-description">The War of Disunion Legacy</p>
          <div class="difficulty-card-details">
            <div class="difficulty-detail-section">
              <div class="difficulty-detail-title">Timeline Overview</div>
              <div class="difficulty-detail-text">
                "The Union endured - but never healed." The Election of 1860 deadlocked, placing weak compromisers in power. The resulting War of Disunion (1862-1868) was a multi-front catastrophe. Brutal Reconstruction under military rule left the nation fractured and paranoid.
              </div>
            </div>
            <div class="difficulty-detail-section">
              <div class="difficulty-detail-title">1913 Situation</div>
              <div class="difficulty-detail-text">
                President Robert M. La Follette governs through fragile coalitions and military discipline. Civil liberties are limited, protests are common, and the South remains semi-autonomous. America is powerful but feared and diplomatically isolated.
              </div>
            </div>
            <div class="difficulty-detail-section">
              <div class="difficulty-detail-title">Gameplay Effects</div>
              <div class="difficulty-detail-text">
                Start with lower stats and hostile factions. Congressional gridlock is constant. International isolation limits diplomatic options. The nation perpetually teeters on the edge of implosion. Only for experienced players.
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        class="difficulty-confirm-btn"
        :disabled="!state.selectedDifficulty"
        @click="confirmDifficulty"
      >
        <span v-if="state.selectedDifficulty">Confirm: {{ state.selectedDifficulty.toUpperCase() }} Mode</span>
        <span v-else>Select a Difficulty</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGame.js';

const store = useGameStore();
const state = store.state;
const selectDifficulty = store.selectDifficulty;
const confirmDifficulty = store.confirmDifficulty;
</script>