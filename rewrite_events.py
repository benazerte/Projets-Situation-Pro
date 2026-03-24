import re
import os

game_store_path = "src/stores/useGame.js"
with open(game_store_path, "r") as f:
    content = f.read()

# I need to extract the original events array.
# The original events array is technically inside the old file (before the last modification).
# Let's extract the normal events from the 'generateEvents' function.
# Wait, I modified it to firstEvent and state.events = [firstEvent, {federal_reserve}...].
# Let's just grab the whole state.events = [ ... ] assignment.
match = re.search(r"state\.events = \[\s*firstEvent,\s*(\{\s*id: 'federal_reserve'.*?\];)\s*checkAndAddConditionalEvents", content, re.DOTALL)
if not match:
    print("Could not find normal events")

normal_events_str = match.group(1)

# Now rebuild the normal events array
events_normal_code = """export const eventsNormal = [
    {
        id: 'inauguration',
        category: 'Domestic Policy',
        title: 'Inauguration Day - The New Freedom',
        context: 'You have campaigned on a platform of progressive reform, promising to break up monopolies, reduce tariffs, and reform banking. Your Democratic Party controls both houses of Congress.',
        description: 'Standing before the Capitol, you take the oath of office as the 28th President. Your New Freedom platform has energized progressives nationwide, but conservative business interests remain wary. Your first major decision: how will you approach tariff reform, the cornerstone of your campaign promises?',
        choices: [
            {
                text: 'Push for aggressive tariff reduction immediately. Call a special session of Congress and demand swift passage of comprehensive reform to lower the cost of living for ordinary Americans.',
                effects: { progressive: 12, publicOpinion: 8, economy: -5, congress: -8, international: -3 },
                flags: { aggressiveTariffReform: true },
                feedback: {
                    title: 'Bold Reform Begins', immediate: 'You summon Congress into special session and personally address them.', national: 'Progressive reformers celebrate your courage.', international: 'European trading partners watch nervously.', longTerm: 'Your aggressive approach establishes you as a bold reformer.'
                }
            },
            {
                text: 'Take a moderate, deliberate approach. Work closely with congressional leaders to craft a compromise that protects some industries while gradually reducing rates.',
                effects: { congress: 12, economy: 6, progressive: -3, publicOpinion: 5, international: 2 },
                flags: { aggressiveTariffReform: false },
                feedback: {
                    title: 'Pragmatic Governance', immediate: 'You spend weeks in careful consultation with congressional leaders.', national: 'Moderate voices praise your statesmanship.', international: 'Your cautious approach to tariff reform is welcomed.', longTerm: 'Your collaborative style builds strong relationships.'
                }
            },
            {
                text: 'Focus first on building bipartisan relationships and party unity before tackling controversial economic legislation. Patience will yield better results.',
                effects: { congress: 18, progressive: -12, publicOpinion: -5, economy: 3 },
                flags: { aggressiveTariffReform: false },
                feedback: {
                    title: 'Strategic Patience', immediate: 'You prioritize meetings with congressional leaders.', national: 'Political insiders praise your strategic thinking.', longTerm: 'Your cautious approach creates strong congressional alliances.'
                }
            }
        ]
    },
""" + normal_events_str

with open("src/stores/eventsNormal.js", "w") as f:
    f.write(events_normal_code)

events_easy_code = """export const eventsEasy = [
    {
        id: 'inauguration_easy', category: 'Domestic Policy', title: 'Inauguration Day - The American Harmony',
        context: 'President Henry Cabot Lodge, you inherit a unified, prosperous nation. The Civil War was avoided, and America is globally respected.',
        description: 'Taking the oath of office, the nation looks to you to expand American influence and maintain internal harmony.',
        choices: [
            { text: 'Focus on global diplomacy and solidifying international alliances.', effects: { international: 15, publicOpinion: 5, economy: 5, congress: 5 }, flags: { lodgeDiplomat: true }, feedback: { title: 'Global Leader', immediate: 'You announce a tour of European capitals.', national: 'The press praises your grand vision.', international: 'Europe respects your leadership.', longTerm: 'America cements its place as the premier global mediator.' } },
            { text: 'Invest heavily in domestic infrastructure and continued industrialization.', effects: { economy: 15, progressive: 10, congress: 5, publicOpinion: 5 }, flags: { lodgeBuilder: true }, feedback: { title: 'Building the Future', immediate: 'Massive railway projects are announced.', national: 'The economy booms further.', international: 'Foreign investors flock to the US.', longTerm: 'America becomes the undisputed industrial titan.' } }
        ]
    },
    {
        id: 'panama_tolls', category: 'Foreign Policy', title: 'The Panama Canal Tolls Controversy',
        context: '1914: The Panama Canal is nearing completion. Congress previously passed a law exempting American ships from tolls, angering Britain.',
        description: 'Britain claims the exemption violates the Hay-Pauncefote Treaty. Maintaining it boosts American shipping but alienates our closest ally in an era of global harmony.',
        choices: [
            { text: 'Push Congress to repeal the exemption to honor the treaty.', effects: { international: 15, congress: -10, economy: -5, publicOpinion: -5 }, flags: { repealedTolls: true }, feedback: { title: 'Honoring Treaties', immediate: 'You urge Congress to repeal the exemption.', national: 'Nationalists express outrage.', international: 'Britain praises your honor.', longTerm: 'Your respect for treaties strengthens the international order.' } },
            { text: 'Stand firm. The canal is American-built, and American ships should pass free.', effects: { economy: 10, congress: 10, publicOpinion: 10, international: -20 }, flags: { repealedTolls: false }, feedback: { title: 'America First', immediate: 'You refuse to bow to pressure.', national: 'Patriots celebrate your stance.', international: 'Britain feels betrayed.', longTerm: 'You boost domestic shipping but damage trust with European powers.' } }
        ]
    },
    {
        id: 'central_american_bank', category: 'Economic Policy', title: 'The Hemispheric Bank Initiative',
        context: '1915: Latin America seeks development funds. European banks are charging exorbitant rates.',
        description: 'You have the opportunity to establish a Pan-American Bank backed by the US treasury to fund modernization across the hemisphere.',
        choices: [
            { text: 'Fund the project as a cooperative partnership with equal representation.', effects: { progressive: 15, international: 25, economy: 5, congress: -10 }, flags: { panAmPartnership: true }, feedback: { title: 'The Good Neighbor', immediate: 'You sign the cooperative treaty.', national: 'Wall street complains about missed monopolies.', international: 'Latin America embraces the partnership.', longTerm: 'A new era of hemispheric solidarity and mutual prosperity begins.' } },
            { text: 'Use the bank to establish American economic hegemony over the hemisphere.', effects: { economy: 20, congress: 15, international: -15, progressive: -5 }, flags: { dollarDiplomacyExtreme: true }, feedback: { title: 'Dollar Diplomacy', immediate: 'You mandate US control of the bank.', national: 'Banks reap immense profits.', international: 'Resentment grows in Latin America.', longTerm: 'You secure economic dominance at the cost of goodwill.' } }
        ]
    },
    {
        id: 'mexican_annexation', category: 'Foreign Policy', title: 'The Mexican Question',
        context: '1916: Mexico falls into revolution. Jingoists in Congress see an opportunity to secure the continent.',
        description: 'Under the guise of restoring order, voices demand the complete conquest and annexation of Mexico to expand the American Empire.',
        choices: [
            { text: 'Order the full invasion and annexation of Mexico.', effects: { military: -15, international: -30, publicOpinion: -10, congress: 15, economy: -10 }, flags: { mexicanAnnexation: true }, feedback: { title: 'The American Empire Expands', immediate: 'US forces march on Mexico City.', national: 'Imperialists cheer, but progressives are horrified by the naked aggression.', international: 'The world condemns your imperialism.', longTerm: 'America becomes bogged down in a decades-long asymmetric guerilla war.' } },
            { text: 'Withdraw any border forces and respect Mexican sovereignty.', effects: { international: 20, progressive: 15, congress: -15, publicOpinion: 5, military: 5 }, flags: { mexicanAnnexation: false }, feedback: { title: 'A Good Neighbor', immediate: 'You order strict non-intervention.', national: 'You avoid a costly quagmire, though hawks label you a coward.', international: 'Latin American relations hit an all-time high.', longTerm: 'Your respect for sovereignty creates lasting peace in the Americas.' } }
        ]
    },
    {
        id: 'global_trade_congress', category: 'Economic Policy', title: 'The Global Trade Congress of 1917',
        context: '1917: The global economy is booming under your leadership. It is time to establish new trade norms.',
        description: 'You host a massive summit in New York. Do you push for global free trade, reducing all tariffs, or maintain protective walls for American industry?',
        choices: [
            { text: 'Champion global free trade and tear down tariffs.', effects: { international: 25, economy: 15, congress: -15, progressive: 10 }, flags: { globalFreeTrade: true }, feedback: { title: 'The Open World', immediate: 'Treaties are signed lowering thousands of tariffs.', national: 'Some industries panic, but consumers rejoice.', international: 'Global trade explodes.', longTerm: 'America drives a massive era of globalization and prosperity.' } },
            { text: 'Protect American industries while opening foreign markets.', effects: { economy: 25, congress: 20, international: -20, publicOpinion: 5 }, flags: { strictProtectionism: true }, feedback: { title: 'America First Trade', immediate: 'You negotiate one-sided trade deals.', national: 'Domestic manufacturers see record profits.', international: 'Foreign powers threaten retaliation.', longTerm: 'You secure incredible wealth but risk starting an economic cold war.' } }
        ]
    },
    {
        id: 'african_colonial_crisis', category: 'International Crisis', title: 'The African Colonial Dispute',
        context: '1918: France and Germany clash violently over colonial borders in Central Africa. Naval ships are exchanging fire.',
        description: 'With Europe on the brink, they look to the undeniable power of the American President to arbitrate the dispute and prevent a world war.',
        choices: [
            { text: 'Arbitrate impartially, forcing both sides to compromise and creating a neutral buffer zone.', effects: { international: 20, publicOpinion: 10, progressive: 5 }, flags: { africanMediation: true }, feedback: { title: 'The Peacemaker', immediate: 'Both powers accept your arbitration under pressure.', national: 'Your prestige soars.', international: 'War is averted narrowly.', longTerm: 'You are hailed globally as the greatest statesman of the century.' } },
            { text: 'Side strictly with democratic France against imperial Germany to set a normative standard.', effects: { international: -10, progressive: 10, military: 10, congress: 5 }, flags: { favoredFrance: true }, feedback: { title: 'Ideological Stance', immediate: 'You condemn Germany and sanction their economy.', national: 'You take a moral stand.', international: 'Germany is infuriated and retreats.', longTerm: 'You averted war but polarized Europe into democratic and autocratic camps.' } }
        ]
    },
    {
        id: 'pan_american_war', category: 'Global Conflict', title: 'The South American Coalition',
        context: '1919: By expanding hegemony and dictating terms globally, America has frightened its neighbors.',
        description: 'Fearing total US subjugation, an unprecedented coalition of Argentina, Brazil, and Chile (the ABC powers) form an alliance implicitly hostile to US maneuvers in the Caribbean.',
        choices: [
            { text: 'Deploy the Great White Fleet to intimidate them into disarming.', effects: { military: 20, international: -20, publicOpinion: 10, economy: -5, congress: 10 }, flags: { gunboatDiplomacy: true }, feedback: { title: 'Gunboat Diplomacy', immediate: 'The US fleet sails into South American waters.', national: 'The nation rallies behind the show of force.', international: 'The coalition backs down in terror.', longTerm: 'You maintain absolute dominance, but rule the hemisphere by fear.' } },
            { text: 'Sign a mutual non-aggression and prosperity pact treating them as equals.', effects: { international: 30, publicOpinion: -10, congress: -10, progressive: 15 }, flags: { mutualPact: true }, feedback: { title: 'Hemispheric Equality', immediate: 'You treat the ABC powers as peers.', national: 'Imperialists are furious at your weakness.', international: 'A new framework of equal nations is born.', longTerm: 'You secure a lasting, genuine peace in the Americas based on mutual respect.' } }
        ]
    },
    {
        id: 'great_american_exposition', category: 'Domestic Policy', title: 'The Zenith of the Republic',
        context: '1920: The end of your second term approaches. America has avoided conflicts and become richer and stronger than ever in history.',
        description: 'You authorize a massive Expo in Washington D.C. to showcase American achievement. What is the central theme of your farewell address?',
        choices: [
            { text: 'A vision of endless progress, technology, and human rights.', effects: { progressive: 20, publicOpinion: 15, international: 10, economy: 5 }, flags: { expoProgress: true }, feedback: { title: 'The Future is Bright', immediate: 'Millions visit the glittering white city.', national: 'The nation feels invincible.', international: 'The world looks to America as the vanguard of humanity.', longTerm: 'Your presidency is universally regarded as a Golden Age.' } },
            { text: 'A celebration of American power, military might, and unassailable hegemony.', effects: { military: 20, congress: 15, publicOpinion: 10, international: -5 }, flags: { expoPower: true }, feedback: { title: 'The American Century', immediate: 'Dreadnoughts and innovations are paraded.', national: 'Patriotism reaches fever pitch.', international: 'Rivals are intimidated into submission.', longTerm: 'You leave behind an unstoppable empire.' } }
        ]
    }
];
"""

with open("src/stores/eventsEasy.js", "w") as f:
    f.write(events_easy_code)

events_hard_code = """export const eventsHard = [
    {
        id: 'inauguration_hard', category: 'Domestic Crisis', title: 'Inauguration Day - The War of Disunion Legacy',
        context: 'President Robert M. La Follette, you take the oath under heavy military guard. The nation is fractured, the South is plotting, and civil liberties are suspended.',
        description: 'Your presidency begins amidst immediate threats of rebellion and economic collapse. How do you assert control?',
        choices: [
            { text: 'Maintain martial law and crack down on dissidents immediately.', effects: { military: 15, publicOpinion: -15, progressive: -10, congress: -5 }, flags: { martialLaw: true }, feedback: { title: 'Iron Fist', immediate: 'Troops patrol the capital. Dissenters are jailed.', national: 'Fear maintains order, but resentment grows.', international: 'European powers view America as a failing state.', longTerm: 'You rely entirely on the military to govern.' } },
            { text: 'Offer sweeping pardons and promise a return to constitutional rule.', effects: { progressive: 20, publicOpinion: 10, military: -20, congress: -10 }, flags: { martialLaw: false }, feedback: { title: 'A Risky Peace', immediate: 'You lift martial law and empty the political prisons.', national: 'Hope returns, but the military elite plot against you.', international: 'Observers fear you are too weak to hold the Union together.', longTerm: 'You have chosen freedom, but exposed the nation to chaos.' } }
        ]
    },
    {
        id: 'richmond_uprising', category: 'Civil Conflict', title: 'The Richmond Uprising',
        context: '1914: Tensions boil over. Southern state militias, refusing to disarm, clash with federal garrisons in Richmond.',
        description: 'The governor of Virginia claims federal troops fired first. Militias are mobilizing across the scarred South. The ghosts of the 1860s return.',
        choices: [
            { text: 'Crush the uprising with overwhelming federal artillery.', effects: { military: -15, publicOpinion: -20, economy: -10, congress: 10 }, flags: { crushedRichmond: true }, feedback: { title: 'Blood in the Streets', immediate: 'Artillery levels blocks of Richmond.', national: 'Order is restored through sheer terror.', international: 'Foreign newspapers publish horrific photos.', longTerm: 'You prevented secession again, but the hatred will last a century.' } },
            { text: 'Order federal troops to stand down and negotiate with the governor.', effects: { progressive: 10, military: -25, congress: -20, publicOpinion: 5 }, flags: { yieldedRichmond: true }, feedback: { title: 'Appeasement', immediate: 'Federal troops withdraw to their barracks.', national: 'You avoid a massacre.', international: 'The federal government appears incredibly weak.', longTerm: 'Militias now know they can terrorize federal forces with impunity.' } }
        ]
    },
    {
        id: 'chicago_bread_riots', category: 'Economic Crisis', title: 'The Chicago Bread Riots',
        context: '1915: With the national economy in tatters and trade routes disrupted by internal checkpoints, famine hits the industrial Midwest.',
        description: 'Thousands are starving in Chicago. Riots break out, looting federal warehouses. Local police are overwhelmed.',
        choices: [
            { text: 'Deploy the National Guard to distribute rations—and shoot looters.', effects: { military: 10, publicOpinion: -15, progressive: -20, economy: -5 }, flags: { violentRations: true }, feedback: { title: 'Order by Bayonet', immediate: 'The Guard secures the food supplies with deadly force.', national: 'People are fed, but only under the barrel of a gun.', international: 'America resembles a war zone.', longTerm: 'You are viewed as a tyrant by the working class.' } },
            { text: 'Allow corporate syndicates to distribute food in exchange for massive tax exemptions.', effects: { economy: 15, congress: 10, progressive: -30, publicOpinion: -10 }, flags: { corporateRelief: true }, feedback: { title: 'Privatized Survival', immediate: 'Pinkertons and corporate agents distribute bread.', national: 'The crisis ends, but corporations now effectively govern the Midwest.', international: 'Foreign investors buy up desperate American assets.', longTerm: 'The federal government yields its power to the oligarchs.' } }
        ]
    },
    {
        id: 'second_secession', category: 'Domestic Crisis', title: 'The Second Secession Declaration',
        context: '1916: Exploiting the chaos, five Southern states pass ordinances declaring the federal government illegitimate.',
        description: 'They do not use the word "secession," but "Sovereign Nullification." They seize federal armories. This is it. The Union is fracturing again.',
        choices: [
            { text: 'Declare them in open rebellion. Begin the Second War of Disunion.', effects: { military: -25, economy: -30, publicOpinion: 10, congress: 20 }, flags: { secondCivilWar: true, martialLaw: true }, feedback: { title: 'The Abyss Returns', immediate: 'You address the loyal half of the nation. War is declared.', national: 'Brother against brother, again.', international: 'Europe prepares to recognize the new Confederacy.', longTerm: 'Your presidency will be defined entirely by blood and fire.' } },
            { text: 'Acknowledge their sovereignty. The Union is dead; let us part in peace.', effects: { congress: -40, publicOpinion: -40, progressive: -20, international: -30 }, flags: { unionDissolved: true }, feedback: { title: 'The Great Capitulation', immediate: 'You order all federal forces to withdraw north.', national: 'Shock and despair sweep the loyal states.', international: 'The United States ceases to be a great power.', longTerm: 'You are the President who finally let the great experiment die. GAME OVER approaches.' } }
        ]
    },
    {
        id: 'european_spillover', category: 'International Crisis', title: 'The Blockade Crisis',
        context: '1917: Europe is at war. Britain, recognizing the fractured state of America, begins seizing American ships suspected of trading with Germany.',
        description: 'In normal times, America would demand respect. But your military is stretched thin dealing with internal rebellions and martial law.',
        choices: [
            { text: 'Threaten war with Britain and launch commerce raiders. We will not be bullied.', effects: { military: -20, international: -20, publicOpinion: 15, economy: -15 }, flags: { warWithBritain: true }, feedback: { title: 'Desperate Defiance', immediate: 'You declare a state of war against the British Empire.', national: 'A wave of suicidal patriotism sweeps the nation.', international: 'Britain blockades the entire East Coast.', longTerm: 'You are now fighting a superpower while your own country burns.' } },
            { text: 'Accept the British blockade. We cannot afford a foreign war.', effects: { international: -15, economy: -25, congress: -10, publicOpinion: -20 }, flags: { submittedToBlockade: true }, feedback: { title: 'Humiliation', immediate: 'You order American ships to comply with British demands.', national: 'The public is humiliated. The economy tanks further.', international: 'America is treated as a third-rate semi-colony.', longTerm: 'You preserve your remaining troops, but lose the last of national pride.' } }
        ]
    },
    {
        id: 'socialist_uprising', category: 'Domestic Crisis', title: 'The Socialist Commune',
        context: '1918: Massive inequality, famine, and authoritarian rule have pushed the loyal northern working class to the breaking point.',
        description: 'Eugene V. Debs leads a general strike that rapidly escalates into an armed worker\'s revolt across the Rust Belt, demanding a new socialist constitution.',
        choices: [
            { text: 'Divert troops to crush the commune.', effects: { publicOpinion: -15, progressive: -40, military: -20, economy: -15 }, flags: { crushedCommune: true }, feedback: { title: 'The Red Bloodshed', immediate: 'Artillery shells rain down on American workers in Detroit and Chicago.', national: 'The uprising is crushed, but resentment burns hotter than ever.', international: 'Global socialists organize boycotts.', longTerm: 'Labor relations are destroyed permanently; you are despised.' } },
            { text: 'Legitimize the uprising and call a Constitutional Convention.', effects: { progressive: 40, congress: -40, publicOpinion: 10, economy: -20 }, flags: { newConstitution: true }, feedback: { title: 'The Second Republic', immediate: 'You legitimize the uprising, agreeing that the old system has failed.', national: 'Conservatives flee the country. Hope springs among the working class.', international: 'Capitalist nations embargo America.', longTerm: 'You will oversee the birth of a fundamentally different socialist United States.' } }
        ]
    },
    {
        id: 'corporate_syndicate', category: 'Economic Crisis', title: 'The Syndicate Soft-Coup',
        context: '1919: The federal government is bankrupt. You cannot pay the army.',
        description: 'A syndicate led by J.P. Morgan offers to buy out the entire national debt and fund the military, strictly in exchange for direct cabinet seats and veto power over all laws.',
        choices: [
            { text: 'Accept the Syndicate\'s terms. We need the money to survive.', effects: { economy: 40, progressive: -40, publicOpinion: -30, congress: -20 }, flags: { corporateRule: true }, feedback: { title: 'The Corporate State', immediate: 'The US Treasury is effectively privatized.', national: 'The army is paid, but democracy has been officially purchased.', international: 'Markets soar as democracy dies.', longTerm: 'America transitions into a corporate oligarchy owned by monopolies.' } },
            { text: 'Reject them, default on the debt, and seize corporate assets.', effects: { economy: -50, progressive: 30, publicOpinion: 10, international: -30 }, flags: { debtDefault: true }, feedback: { title: 'The Great Seizure', immediate: 'You order the nationalization of banks and rail lines.', national: 'Wall Street panics. The dollar collapses.', international: 'Foreign investors lose billions and demand intervention.', longTerm: 'You preserve sovereignty but plunge the nation into total economic darkness.' } }
        ]
    },
    {
        id: 'election_1920_hard', category: 'Electoral Politics', title: 'The Constitutional Crisis of 1920',
        context: '1920: The nation is a burning husk of its former glory. The election approaches.',
        description: 'Your military advisors warn that holding an election now will lead to total anarchy. They urge you to suspend the election and declare yourself Emergency Executive for Life.',
        choices: [
            { text: 'Hold the election. Democracy must survive, even if we lose.', effects: { progressive: 20, publicOpinion: 10, military: -30, congress: 10 }, flags: { heldElectionHard: true }, feedback: { title: 'The Last Election', immediate: 'You insist on constitutional order.', national: 'Voter turnout is abysmal due to violence. You are crushed at the polls.', international: 'The world watches the chaotic transition of power.', longTerm: 'You step down, leaving a broken nation to your successor, but preserving the republican ideal.' } },
            { text: 'Suspend the Constitution. I am the only one who can fix this.', effects: { military: 30, publicOpinion: -40, progressive: -40, congress: -40 }, flags: { dictatorForLife: true }, feedback: { title: 'Crossing the Rubicon', immediate: 'You announce the indefinite suspension of all federal elections.', national: 'The remaining democratic institutions collapse. The military cheers.', international: 'America is officially classified as a dictatorship.', longTerm: 'You have destroyed the United States in order to save it. You rule by the sword.' } }
        ]
    }
];
"""
with open("src/stores/eventsHard.js", "w") as f:
    f.write(events_hard_code)

# Now, modify useGame.js
new_useGame_code = re.sub(
    r"const generateEvents = \(\) => \{.*?(const makeChoice = )",
    r"""import { eventsNormal } from './eventsNormal.js';
import { eventsEasy } from './eventsEasy.js';
import { eventsHard } from './eventsHard.js';

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

\g<1>""",
    content,
    flags=re.DOTALL
)

with open(game_store_path, "w") as f:
    f.write(new_useGame_code)
print("done")
