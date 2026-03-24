import { reactive, computed, onMounted, toRefs } from 'vue';
import { eventsNormal } from './eventsNormal.js';
import { eventsEasy } from './eventsEasy.js';
import { eventsHard } from './eventsHard.js';


const state = reactive({
    gameState: 'title',
    musicPlaying: false,
    loading: false,
    showDifficultyModal: false,
    selectedDifficulty: null,
    difficultyConfirmed: false,
    currentDate: 'March 4, 1913',
    month: 3,
    year: 1913,
    term: 1,
    stats: {
        publicOpinion: 65,
        economy: 60,
        military: 50,
        congress: 70,
        international: 55,
        progressive: 60
    },
    lastChanges: {},
    gameFlags: {
        // Normal Mode Flags
        recognizedHuerta: false, passedFederalReserve: false, aggressiveTariffReform: false,
        interventionistMexico: false, supportedWorkers: false, strictNeutrality: false,
        tradingWithAllies: false, preparednessCampaign: false, lusitaniaSunk: false,
        zimmermanNote: false, declaredWar: false, wonReelection1916: false,
        ranFor1920: false, healthDeclining: false, leagueSupporter: false,
        womensVoteSupporter: false, prohibitionSupporter: false, seditionActPassed: false,
        espionageActPassed: false, versaillesSigned: false, strokeOccurred: false,
        // Easy Mode Flags
        lodgeDiplomat: false, lodgeBuilder: false, expandedNavy: false, domesticSpending: false,
        repealedTolls: false, hagueCourt: false, unilateralPower: false, panAmPartnership: false,
        dollarDiplomacyExtreme: false, openDoorDefended: false, asianAccommodation: false,
        mexicanAnnexation: false, reElection1916Easy: false, globalFreeTrade: false,
        strictProtectionism: false, africanMediation: false, favoredFrance: false,
        gunboatDiplomacy: false, mutualPact: false, expoProgress: false, expoPower: false,
        // Hard Mode Flags
        martialLaw: false, loyaltyOath: false, bureaucracyPurged: false, crushedRichmond: false,
        yieldedRichmond: false, outlawedPinkertons: false, deputizedPinkertons: false,
        violentRations: false, corporateRelief: false, seizedCrops: false, subsidizedFarmers: false,
        secondCivilWar: false, unionDissolved: false, shamElection: false, decreeRule: false,
        warWithBritain: false, submittedToBlockade: false, crushedCommune: false,
        newConstitution: false, corporateRule: false, debtDefault: false, heldElectionHard: false,
        dictatorForLife: false
    },
    currentEventIndex: 0,
    completedEvents: [],
    history: [],
    notification: null,
    showFeedback: false,
    feedbackData: null,
    showHistory: false,
    gameOverData: null,
    events: []
});

const currentEvent = computed(() => {
    if (state.currentEventIndex < state.events.length) {
        return state.events[state.currentEventIndex];
    }
    return null;
});

const termInfo = computed(() => {
    if (state.year < 1917) return 'First Term (1913-1917)';
    else if (state.year < 1921) return 'Second Term (1917-1921)';
    else return 'Third Term (1921-1925)';
});

const startGame = () => {
    if (!state.difficultyConfirmed) {
        state.showDifficultyModal = true;
        return;
    }
    state.gameState = 'playing';
    playMusic();
    const modeText = state.selectedDifficulty ? '[' + state.selectedDifficulty.toUpperCase() + ' MODE]' : '';
    showNotification('Welcome, Mr. President', 'Your presidency begins on March 4, 1913. The nation awaits your leadership in these transformative times. ' + modeText, 'success');
};

const selectDifficulty = (difficulty) => {
    state.selectedDifficulty = difficulty;
};

const confirmDifficulty = () => {
    if (!state.selectedDifficulty) return;
    state.difficultyConfirmed = true;
    state.showDifficultyModal = false;
    applyDifficultyModifiers();
    generateEvents();
    startGame();
};

const applyDifficultyModifiers = () => {
    if (state.selectedDifficulty === 'easy') {
        state.stats.publicOpinion = 75; state.stats.economy = 70; state.stats.military = 60;
        state.stats.congress = 80; state.stats.international = 65; state.stats.progressive = 70;
    } else if (state.selectedDifficulty === 'hard') {
        state.stats.publicOpinion = 55; state.stats.economy = 50; state.stats.military = 40;
        state.stats.congress = 60; state.stats.international = 45; state.stats.progressive = 50;
    }
};

const playMusic = () => {
    const audio = document.getElementById('bgMusic');
    if (audio) {
        audio.src = 'All shall be well (and all shall be well and all manner of things shall be well) - Beethoven’s ‘Moonlight Sonata’, reimagined.mp3';
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Audio autoplay prevented'));
        state.musicPlaying = true;
    }
};

const toggleMusic = () => {
    const audio = document.getElementById('bgMusic');
    if (audio) {
        if (state.musicPlaying) {
            audio.pause();
            state.musicPlaying = false;
        } else {
            audio.play();
            state.musicPlaying = true;
        }
    }
};

const generateEvents = () => {
    if (state.selectedDifficulty === 'easy') {
        state.events = JSON.parse(JSON.stringify(eventsEasy));
    } else if (state.selectedDifficulty === 'hard') {
        state.events = JSON.parse(JSON.stringify(eventsHard));
    } else {
        state.events = JSON.parse(JSON.stringify(eventsNormal));
    }
    checkAndAddConditionalEvents();
};

const checkAndAddConditionalEvents = () => {
    // Only apply the original conditional logic to the 'normal' difficulty timeline
    if (state.selectedDifficulty !== 'normal') return;

    if (!state.gameFlags.recognizedHuerta && state.completedEvents.includes('mexico_huerta') && !state.completedEvents.includes('veracruz')) {
        const insertIndex = state.currentEventIndex + 1;
        state.events.splice(insertIndex, 0, {
            id: 'veracruz', category: 'Military Action', title: 'The Veracruz Incident - Military Intervention',
            context: 'April 1914: American sailors are arrested in Tampico, Mexico. Huerta refuses to apologize properly. Meanwhile, a German ship approaches Veracruz carrying weapons for Huerta\'s forces.',
            description: 'Your admiral recommends seizing Veracruz to prevent German arms from reaching Huerta...',
            choices: [
                { text: 'Order the Navy to seize Veracruz.', effects: { military: 15, international: -20, publicOpinion: 10, progressive: -15, economy: -10 }, flags: { interventionistMexico: true }, feedback: { title: 'American Occupation', immediate: 'Marines storm Veracruz.', national: 'Jingoists celebrate.', international: 'Latin America unites in condemning.', longTerm: 'The occupation succeeds militarily but fails politically.' } },
                { text: 'Accept international mediation from the ABC powers.', effects: { international: 15, progressive: 12, publicOpinion: -5, military: -10 }, flags: { interventionistMexico: false }, feedback: { title: 'Diplomatic Resolution', immediate: 'You accept mediation.', national: 'Progressives praise your restraint.', international: 'Latin America welcomes your respect.', longTerm: 'Your diplomatic approach avoids war.' } },
                { text: 'Maintain naval blockade.', effects: { military: 8, international: -10, publicOpinion: 5, economy: -5 }, flags: { interventionistMexico: false }, feedback: { title: 'Naval Pressure', immediate: 'You order a tight naval blockade.', national: 'The public sees neither decisive action nor peace.', international: 'The blockade is technically an act of war.', longTerm: 'Your blockade strategy drags on.' } }
            ]
        });
    }

    if (!state.gameFlags.womensVoteSupporter && state.year >= 1917 && !state.completedEvents.includes('womens_suffrage')) {
        const hasSuffrageEvent = state.events.some(e => e.id === 'womens_suffrage');
        if (!hasSuffrageEvent) {
            state.events.push({
                id: 'womens_suffrage', category: 'Social Reform', title: 'Women\'s Suffrage - The Nineteenth Amendment', context: 'Women have fought for the vote for decades.', description: 'Alice Paul and the National Woman\'s Party escalate their campaign...',
                choices: [
                    { text: 'Fully endorse the Nineteenth Amendment.', effects: { progressive: 20, publicOpinion: 15, congress: 10, international: 5 }, flags: { womensVoteSupporter: true }, feedback: { title: 'Historic Victory for Women', immediate: 'You personally address Congress.', national: 'Suffragettes celebrate.', international: 'American women\'s enfranchisement celebrated.', longTerm: 'Your support adds millions of voters.' } },
                    { text: 'Support suffrage rhetorically but let Congress decide.', effects: { progressive: -10, publicOpinion: -8, congress: 5 }, flags: { womensVoteSupporter: false }, feedback: { title: 'Tepid Support', immediate: 'You make mild statements supporting suffrage.', national: 'Your weak position satisfies no one.', longTerm: 'Suffrage will eventually pass without your help.' } },
                    { text: 'Oppose federal suffrage.', effects: { progressive: -25, publicOpinion: -15, congress: -10, international: -10 }, flags: { womensVoteSupporter: false }, feedback: { title: 'Resistance to Change', immediate: 'You publicly oppose federal suffrage.', national: 'Progressive supporters are devastated.', international: 'Exposes American hypocrisy.', longTerm: 'Becomes a permanent stain on your legacy.' } }
                ]
            });
        }
    }

    if (state.gameFlags.declaredWar && state.year >= 1919 && !state.completedEvents.includes('postwar_economy')) {
        const hasPostWarEvent = state.events.some(e => e.id === 'postwar_economy');
        if (!hasPostWarEvent) {
            state.events.push({
                id: 'postwar_economy', category: 'Economic Policy', title: 'Post-War Economic Crisis - Inflation and Strikes', context: '1919: The war ends but peace brings new challenges.', description: 'Four million workers go on strike across America...',
                choices: [
                    { text: 'Support workers\' right to strike.', effects: { progressive: 18, publicOpinion: -10, economy: -15, congress: -15 }, flags: { supportedWorkers: true }, feedback: { title: 'Standing with Labor', immediate: 'You publicly support workers\' right to strike.', national: 'Labor unions celebrate.', longTerm: 'Your support for labor strengthens union power.' } },
                    { text: 'Declare the strikes unpatriotic.', effects: { economy: 10, publicOpinion: 15, progressive: -30, congress: 10, international: -5 }, flags: { supportedWorkers: false }, feedback: { title: 'Crushing the Strikes', immediate: 'You authorize federal troops.', national: 'Business leaders applaud.', international: 'Suppression of strikes provides ammunition.', longTerm: 'Anti-labor actions destroy relationship with unions.' } },
                    { text: 'Remain neutral.', effects: { economy: -10, publicOpinion: -10, progressive: -10, congress: 5 }, flags: {}, feedback: { title: 'Hands-Off Approach', immediate: 'You declare the strikes are private matters.', national: 'Your neutrality frustrates everyone.', longTerm: 'Refusal to lead makes you appear weak.' } }
                ]
            });
        }
    }
};

const makeChoice = (choice, index) => {
    if (!isChoiceAvailable(choice)) return;
    state.loading = true;
    state.lastChanges = {};

    if (choice.conditionalOutcome && currentEvent.value.id === 'lusitania' && index === 2) {
        if (state.stats.congress >= 55) {
            choice.effects.congress = 5; choice.flags.declaredWar = true;
            choice.feedback = { title: 'America Enters the War - 1915', immediate: 'You address Congress with fury and resolve.', national: 'The nation rallies behind your decision.', international: 'Britain and France celebrate American entry.', longTerm: 'Your early entry gives America more influence.' };
        } else {
            choice.effects.congress = -15; choice.effects.publicOpinion = -10; choice.effects.progressive = -10; choice.flags.declaredWar = false;
            choice.feedback = { title: 'Congress Rejects War', immediate: 'You address Congress demanding war, but your plea falls on skeptical ears.', national: 'The rejection is a humiliating defeat.', international: 'Germany is emboldened.', longTerm: 'The failed war declaration becomes a defining moment of weakness.' };
        }
    }

    for (let stat in choice.effects) {
        const oldValue = state.stats[stat];
        state.stats[stat] = Math.max(0, Math.min(100, state.stats[stat] + choice.effects[stat]));
        state.lastChanges[stat] = state.stats[stat] - oldValue;
    }

    if (choice.flags) {
        Object.assign(state.gameFlags, choice.flags);
    }

    state.history.push({ date: state.currentDate, event: `${currentEvent.value.title}: Selected option ${index + 1}` });
    state.completedEvents.push(currentEvent.value.id);

    if (choice.feedback) {
        state.feedbackData = { title: choice.feedback.title, immediate: choice.feedback.immediate, national: choice.feedback.national, international: choice.feedback.international, longTerm: choice.feedback.longTerm, changes: choice.effects };
        setTimeout(() => { state.loading = false; state.showFeedback = true; }, 1000);
    } else {
        setTimeout(() => { state.loading = false; advanceGame(); }, 1000);
    }
    checkGameOver();
};

const closeFeedback = () => {
    state.showFeedback = false;
    state.feedbackData = null;
    setTimeout(() => { advanceGame(); }, 500);
};

const advanceGame = () => {
    advanceTime();
    checkAndAddConditionalEvents();
    state.currentEventIndex++;
    if (state.year === 1917 && state.month === 1) handleElection1916();
    if (state.year === 1921 && state.month === 1) handleElection1920();
    if (state.currentEventIndex >= state.events.length || state.year > 1921) endGame();
};

const handleElection1916 = () => {
    const electionScore = state.stats.publicOpinion + state.stats.progressive - 50;
    if (electionScore < 0) {
        state.gameOverData = { title: 'Defeated in 1916', description: 'Charles Evans Hughes has won the presidency...', legacy: 'History remembers you as a transformative one-term president...' };
        state.gameState = 'gameOver';
    } else {
        state.gameFlags.wonReelection1916 = true;
        showNotification('Reelection Victory!', 'You have won the 1916 election.', 'success');
    }
};

const handleElection1920 = () => {
    if (!state.gameFlags.ranFor1920) endGame();
};

const checkGameOver = () => {
    if (state.stats.publicOpinion < 15) { state.gameOverData = { title: 'Loss of Public Confidence', description: 'Your approval has collapsed...', legacy: 'Your presidency is remembered as a cautionary tale...' }; state.gameState = 'gameOver'; }
    if (state.stats.congress < 10) { state.gameOverData = { title: 'Congressional Rebellion', description: 'Congress has turned completely against you...', legacy: 'Your impeachment and removal mark you...' }; state.gameState = 'gameOver'; }
    if (state.gameFlags.strokeOccurred) { state.gameOverData = { title: 'Incapacitated by Illness', description: 'Your stroke has left you unable...', legacy: 'Your presidency ends in tragedy...' }; state.gameState = 'gameOver'; }
};

const endGame = () => {
    const avgStats = Object.values(state.stats).reduce((a, b) => a + b, 0) / Object.keys(state.stats).length;
    let legacyRating = '', legacyDescription = '';
    if (avgStats >= 70) { legacyRating = 'Transformative Success'; legacyDescription = 'Your presidency ranks among America\'s greatest...'; }
    else if (avgStats >= 55) { legacyRating = 'Significant Achievement'; legacyDescription = 'Your presidency achieved major reforms...'; }
    else if (avgStats >= 40) { legacyRating = 'Mixed Legacy'; legacyDescription = 'Your presidency was marked by both achievements and failures...'; }
    else { legacyRating = 'Disappointing Tenure'; legacyDescription = 'Your presidency failed to live up to its early promise...'; }

    const achievements = [];
    if (state.gameFlags.passedFederalReserve) achievements.push('Created the Federal Reserve System');
    if (state.gameFlags.aggressiveTariffReform) achievements.push('Reformed tariff policy');
    if (state.gameFlags.supportedWorkers) achievements.push('Supported labor rights');
    if (state.gameFlags.womensVoteSupporter) achievements.push('Championed women\'s suffrage');
    if (state.gameFlags.declaredWar) achievements.push('Led America through World War I');
    if (state.gameFlags.leagueSupporter) achievements.push('Fought for the League of Nations');
    if (state.gameFlags.secondCivilWar) achievements.push('Oversaw the Second Civil War');
    if (state.gameFlags.mexicanAnnexation) achievements.push('Annexed Mexico, creating an American Empire');
    if (state.gameFlags.corporateRule) achievements.push('Replaced democracy with Corporate Rule');
    if (state.gameFlags.martialLaw) achievements.push('Ruled via Martial Law');

    state.gameOverData = {
        title: legacyRating,
        description: legacyDescription,
        legacy: achievements.length > 0 ? `Key Achievements: ${achievements.join(', ')}. Your presidency spanned ${state.year - 1913} years.` : `Your presidency spanned ${state.year - 1913} years but left few lasting achievements.`
    };
    state.gameState = 'gameOver';
};

const advanceTime = () => {
    state.month += 4;
    if (state.month > 12) { state.month -= 12; state.year++; }
    updateDate();
};

const updateDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    state.currentDate = `${months[state.month - 1]} ${state.year}`;
};

const isChoiceAvailable = (choice) => {
    if (!choice.requirement) return true;
    if (choice.available === false && !choice.requirement) return false;
    const req = choice.requirement;
    if (req.includes('Public Opinion above')) return state.stats.publicOpinion > parseInt(req.match(/\d+/)[0]);
    if (req.includes('Progressive Support above')) return state.stats.progressive > parseInt(req.match(/\d+/)[0]);
    if (req.includes('Congress Support above')) return state.stats.congress > parseInt(req.match(/\d+/)[0]);
    if (req.includes('Economy above')) return state.stats.economy > parseInt(req.match(/\d+/)[0]);
    if (req.includes('Military above')) return state.stats.military > parseInt(req.match(/\d+/)[0]);
    if (req.includes('International Relations above')) return state.stats.international > parseInt(req.match(/\d+/)[0]);
    return true;
};

const getStatClass = (value) => { if (value < 30) return 'stat-critical'; if (value > 75) return 'stat-excellent'; return ''; };
const getBarClass = (value) => { if (value >= 60) return 'high'; if (value >= 35) return 'medium'; return 'low'; };
const getEffectClass = (effect) => { if (effect > 0) return 'effect-positive'; if (effect < 0) return 'effect-negative'; return 'effect-neutral'; };
const formatStatName = (key) => { const names = { publicOpinion: 'Public Opinion', economy: 'Economy', military: 'Military', congress: 'Congress', international: 'International', progressive: 'Progressive' }; return names[key] || key; };
const getStatDescription = (key, value) => {
    const desc = {
        publicOpinion: value >= 70 ? 'Widely popular' : value >= 50 ? 'Generally supported' : value >= 30 ? 'Facing criticism' : 'Deeply unpopular',
        economy: value >= 70 ? 'Booming prosperity' : value >= 50 ? 'Steady growth' : value >= 30 ? 'Economic troubles' : 'Deep recession',
        military: value >= 70 ? 'Powerful force' : value >= 50 ? 'Adequate strength' : value >= 30 ? 'Needs modernization' : 'Dangerously weak',
        congress: value >= 70 ? 'Strong support' : value >= 50 ? 'Working majority' : value >= 30 ? 'Frequent opposition' : 'Hostile Congress',
        international: value >= 70 ? 'Respected leader' : value >= 50 ? 'Mixed reputation' : value >= 30 ? 'Declining influence' : 'Isolated internationally',
        progressive: value >= 70 ? 'Reform champion' : value >= 50 ? 'Moderate support' : value >= 30 ? 'Losing progressives' : 'Abandoned by reformers'
    };
    return desc[key] || '';
};

const showNotification = (title, text, type = 'info') => {
    state.notification = { title, text, type };
    setTimeout(() => { state.notification = null; }, 5000);
};

const closeNotification = () => { state.notification = null; };
const restartGame = () => { location.reload(); };

export function useGameStore() {
    onMounted(() => {
        // Events are now generated after difficulty is confirmed
    });


    return {
        state,
        currentEvent, termInfo,
        startGame, selectDifficulty, confirmDifficulty, toggleMusic, makeChoice, closeFeedback, restartGame, closeNotification,
        isChoiceAvailable, getStatClass, getBarClass, getEffectClass, formatStatName, getStatDescription
    };

}