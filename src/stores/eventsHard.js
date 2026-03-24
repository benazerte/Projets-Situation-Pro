export const eventsHard = [
    {
        id: 'inauguration_hard',
        category: 'Domestic Crisis',
        title: 'Inauguration Day - The War of Disunion Legacy',
        context: 'March 4, 1913: The sky over Washington is choked with the smoke of unrest. You, President Robert M. La Follette, take the oath of office under incredibly heavy military guard. The nation is completely fractured by extreme wealth inequality, crippling strikes, and the festering wounds of a devastated, militarized South. Civil liberties have been virtually suspended by your predecessor.',
        description: 'Your presidency begins amidst terrifying, immediate threats of armed rebellion and total economic collapse. The military top brass demands you rule by emergency decree, while progressives beg you to restore the Constitution. Snipers line the Capitol roof as you step to the podium. How do you assert control over a nation that seems to hate itself?',
        choices: [
            {
                text: 'Maintain martial law and crack down instantly. Order the military to violently disperse protests, arrest union leaders, and secure all federal armories.',
                effects: { military: 20, publicOpinion: -20, progressive: -15, congress: -10, economy: -5 },
                flags: { martialLaw: true },
                feedback: {
                    title: 'The Iron Fist',
                    immediate: 'Your inaugural address is a chilling declaration of martial order. Mounted cavalry charge through protesters outside the Capitol gates.',
                    national: 'Fear maintains a brittle order in the cities, but underground resentment burns hotter than ever. You are viewed as a dictator by half the country.',
                    international: 'European powers view America as a failing, deeply unstable state, downgrading diplomatic ties.',
                    longTerm: 'You rely entirely on the military to govern. You have prevented immediate collapse, but at the total cost of American liberty.'
                }
            },
            {
                text: 'Offer sweeping pardons and demand an immediate return to constitutional rule. Order the troops back to their barracks and empty the political prisons.',
                effects: { progressive: 25, publicOpinion: 15, military: -25, congress: -15, economy: -10 },
                flags: { martialLaw: false },
                feedback: {
                    title: 'A Risky Peace',
                    immediate: 'You shock the nation by lifting martial law and pardoning thousands of political prisoners and strike leaders immediately.',
                    national: 'Hope tentatively returns to the freezing streets, but the military elite and wealthy industrialists immediately begin plotting against you.',
                    international: 'Foreign observers fear you are dangerously naive and too weak to hold the crumbling Union together.',
                    longTerm: 'You have chosen freedom over forced order, exposing your administration to chaotic, unpredictable violence from all radical factions.'
                }
            },
            {
                text: 'Form a "National Unity Coalition." Suspend partisan politics by inviting conservative generals, radical unionists, and Southern governors into a massive emergency cabinet.',
                effects: { congress: 15, publicOpinion: 5, military: 5, progressive: 5, economy: 5 },
                flags: {},
                feedback: {
                    title: 'The Unlikely Truce',
                    immediate: 'You delay taking decisive action, instead forcing bitter, armed enemies into the same room to form a bizarre, bloated coalition government.',
                    national: 'The immediate threat of violence subsides as everyone is confused by the novel power-sharing arrangement. However, the cabinet is paralyzed by infighting.',
                    international: 'The world is baffled by your government, unsure who actually holds power in Washington.',
                    longTerm: 'You buy crucial time and de-escalate the immediate national panic, though governing will be an agonizing, gridlocked nightmare.'
                }
            }
        ]
    },
    {
        id: 'the_loyalty_oath',
        category: 'Political Crisis',
        title: 'The Federal Loyalty Oath',
        context: 'Late 1913: You discover that the federal bureaucracy, postal service, and even the military hierarchy are riddled with Southern secession sympathizers and corporate spies actively working to sabotage your fragile administration.',
        description: 'Your paranoid Chief of Staff presents a horrifying solution: institute a mandatory, strict Federal Loyalty Oath for all government employees. Anyone who refuses to sign, or is suspected of disloyalty by secret committees, will be instantly fired and blacklisted from all federal employment. Do you purge the government to secure it?',
        choices: [
            {
                text: 'Institute the Oath and purge the bureaucracy ruthlessly. We cannot fight a war of national survival with traitors in our own house.',
                effects: { congress: 15, publicOpinion: -15, progressive: -25, economy: -5, military: 10 },
                flags: { bureaucracyPurged: true, loyaltyOath: true },
                feedback: {
                    title: 'The Great Purge',
                    immediate: 'Thousands of federal workers, teachers, and officers are fired without due process. Offices are emptied by military police.',
                    national: 'You secure absolute, terrifying control over the government apparatus. The bureaucracy is crippled by fear, but strictly obedient to your orders.',
                    international: 'Foreign journalists draw frightening comparisons between Washington and the autocracies of Eastern Europe.',
                    longTerm: 'You have created a government of terrified yes-men and secret informers, fundamentally destroying the civil service to save your administration.'
                }
            },
            {
                text: 'Refuse the Oath entirely. We must trust our citizens. We cannot destroy constitutional rights under the guise of saving the Constitution.',
                effects: { progressive: 20, congress: -20, military: -15, publicOpinion: 10, economy: -5 },
                flags: { bureaucracyPurged: false, loyaltyOath: false },
                feedback: {
                    title: 'Dangerous Trust',
                    immediate: 'You block the oath, firing the Chief of Staff who proposed it. You declare that a free nation must risk freedom.',
                    national: 'Civil libertarians and progressives praise you as a hero, but classified leaks, sabotage, and administrative failures skyrocket within days.',
                    international: 'Enemies abroad view your principled stand as a fatal weakness in a chaotic, dangerous time.',
                    longTerm: 'Your government remains highly inefficient and deeply compromised by internal enemies, severely limiting your ability to enact actual legislation.'
                }
            },
            {
                text: 'Establish the "Pinkerton Oversight Committee." Quietly hire private corporate detectives to surveil federal employees without instituting a public oath.',
                effects: { economy: -10, military: -5, congress: 5, progressive: -10, publicOpinion: -5 },
                flags: {},
                feedback: {
                    title: 'The Shadow State',
                    immediate: 'You avoid the public backlash of a loyalty oath, but authorize vast, secret surveillance of your own government by corporate mercenaries.',
                    national: 'Paranoia silently grips Washington. No one knows who is listening, but overt sabotage drops as conspirators become terrified of the shadows.',
                    international: 'Foreign intelligence agencies note that the US government now operates more like a European spy ring than a republic.',
                    longTerm: 'You maintain outward constitutional norms while creating a deeply corrupt, secret surveillance state reliant on private, unaccountable corporations.'
                }
            }
        ]
    },
    {
        id: 'richmond_uprising',
        category: 'Civil Conflict',
        title: 'The Richmond Uprising',
        context: '1914: The simmering tensions boil over into bloodshed. Heavily armed Southern state militias, refusing federal orders to disarm, clash directly with isolated federal garrisons in the streets of Richmond.',
        description: 'The governor of Virginia goes on the radio, falsely claiming federal troops fired first on unarmed citizens. Militias are mobilizing across the scarred South. The agonizing, terrifying ghosts of the 1860s have returned to haunt the nation. How do you respond to this violent insurrection?',
        choices: [
            {
                text: 'Crush the uprising without mercy using overwhelming federal artillery. Make an example of Richmond so terrifying that no state ever rebels again.',
                effects: { military: -20, publicOpinion: -25, economy: -15, congress: 15, progressive: -10 },
                flags: { crushedRichmond: true },
                feedback: {
                    title: 'Blood in the Streets',
                    immediate: 'Federal artillery levels entire blocks of historic Richmond. The militia is butchered in days of intense, horrific street fighting.',
                    national: 'Order is violently restored through sheer, unimaginable terror. The South submits at gunpoint, weeping for its dead.',
                    international: 'Foreign newspapers publish horrific photos of American troops shelling American cities. The world is appalled.',
                    longTerm: 'You prevented a second secession, but the profound hatred and trauma you inflicted guarantees the South will loathe the federal government for another century.'
                }
            },
            {
                text: 'Order federal troops to stand down immediately. Meet personally with the rebellious governor and negotiate an autonomous truce to avoid a massacre.',
                effects: { progressive: 15, military: -30, congress: -25, publicOpinion: 5, international: -10 },
                flags: { yieldedRichmond: true },
                feedback: {
                    title: 'The Great Appeasement',
                    immediate: 'Federal troops humiliatingly withdraw to their barracks. You travel to Richmond and sign a truce granting the state vast military autonomy.',
                    national: 'You avoid a horrifying massacre, but the federal government appears incredibly, fatally weak. Nationalists demand your impeachment.',
                    international: 'Empires realize that the United States government can no longer control its own territory or monopoly on violence.',
                    longTerm: 'State militias now know they can threaten and terrorize federal forces with total impunity, drastically accelerating the balkanization of the country.'
                }
            },
            {
                text: 'Impose an absolute economic blockade on Virginia. Cut the rail lines, telegraphs, and food shipments until the militia starves and surrenders peacefully.',
                effects: { economy: -20, publicOpinion: -10, military: 5, congress: 5, progressive: 5 },
                flags: {},
                feedback: {
                    title: 'The Invisible Siege',
                    immediate: 'You avoid direct military combat but deploy total economic warfare against a whole state. Trains and shipments are rerouted by federal decree.',
                    national: 'Civilians in Virginia suffer terribly from shortages, blaming the governor. The militia, running out of supplies, slowly fractures and dissipates.',
                    international: 'The world watches a unique strategy of wearing down a rebellion through bureaucratic strangulation rather than bullets.',
                    longTerm: 'You broke the uprising without artillery, but the economic devastation of the region will take decades to repair, dragging down the national economy.'
                }
            }
        ]
    },
    {
        id: 'the_pinkerton_wars',
        category: 'Labor Crisis',
        title: 'The Corporate Militias',
        context: 'Late 1914: With the federal army bogged down occupying the South, massive industrial cartels have hired vast "Pinkerton" armies to brutally enforce labor discipline and break strikes in the Northern rust belt.',
        description: 'In Pennsylvania, several thousand heavily armed Pinkertons acting on behalf of the steel monopolies have used Gatling guns on a camp of striking steelworkers and their families, resulting in a horrific massacre. The working class demands justice, but the government is desperately reliant on corporate taxes to avoid bankruptcy.',
        choices: [
            {
                text: 'Outlaw private armies entirely. Deploy any remaining loyal federal troops to track down, disarm, and arrest the Pinkerton mercenaries for murder.',
                effects: { progressive: 30, economy: -30, congress: -20, publicOpinion: 15, military: -15 },
                flags: { outlawedPinkertons: true },
                feedback: {
                    title: 'Smashing the Goons',
                    immediate: 'The army engages in fierce, bloody firefights with corporate mercenaries outside steel towns. You sign the "Anti-Private Army Act."',
                    national: 'The working class hails you as a legendary savior. However, Wall Street panics entirely, freezing capital and triggering heavy industrial layoffs.',
                    international: 'Foreign investors flee the intensely unstable American market, believing socialist revolution is imminent.',
                    longTerm: 'You broke the back of corporate tyranny and defended the workers, but the resulting capital strike plunges the nation into a paralyzing depression.'
                }
            },
            {
                text: 'Deputize the Pinkertons. Grant the corporate militias federal authority as "Emergency Auxiliaries" to legally put down strikes and maintain vital economic output.',
                effects: { economy: 25, military: 15, progressive: -40, publicOpinion: -25, congress: 10 },
                flags: { deputizedPinkertons: true },
                feedback: {
                    title: 'The Mercenary State',
                    immediate: 'You sign an executive order granting sweeping federal police powers to corporate thugs, officially legalizing their brutal tactics.',
                    national: 'The strikes are crushed instantly. Industrial output resumes, but millions of workers realize the government unconditionally serves the rich.',
                    international: 'The US is seen abroad as an oligarchic nightmare wholly owned by cartels, operating beyond the bounds of civilized law.',
                    longTerm: 'You maintain order and production, but you have actively surrendered the state\'s monopoly on violence to private, profit-driven corporations.'
                }
            },
            {
                text: 'Ignore the massacre but mandate binding arbitration. Force the cartels to increase wages slightly, while letting the mercenaries escape justice to keep the peace.',
                effects: { economy: -5, publicOpinion: -10, progressive: -10, congress: 5, military: 5 },
                flags: {},
                feedback: {
                    title: 'The Blood Soaked Compromise',
                    immediate: 'You look the other way on the murders, but use the threat of regulation to force a tiny wage increase for the terrified survivors.',
                    national: 'Everyone is disgusted. The workers feel utterly betrayed by the lack of justice, and the corporations resent the wage hikes.',
                    international: 'Observers note that the American President has become merely a referee between warring factions, rather than a true sovereign.',
                    longTerm: 'You avoided a wider civil war by sacrificing your moral authority entirely, leaving the underlying hatred between classes unresolved.'
                }
            }
        ]
    },
    {
        id: 'chicago_bread_riots',
        category: 'Economic Crisis',
        title: 'The Chicago Bread Riots',
        context: '1915: With the national economy in tatters, inflation spiraling, and domestic trade routes constantly disrupted by militia checkpoints, a catastrophic famine hits the industrial Midwest.',
        description: 'Tens of thousands are literally starving in the freezing slums of Chicago. Massive riots break out, with mobs violently looting massive federal grain warehouses. Local police lines have broken entirely. The city is burning, and the chaos threatens to spread across the entire Rust Belt.',
        choices: [
            {
                text: 'Deploy the National Guard with orders to shoot to kill. Defend the federal warehouses with Gatling guns and distribute rations only when order is restored.',
                effects: { military: 15, publicOpinion: -20, progressive: -25, economy: -5, congress: 10 },
                flags: { violentRations: true },
                feedback: {
                    title: 'Order by Bayonet',
                    immediate: 'The Guard secures the grain supplies by firing blindly into the starving crowds. Hundreds lie dead in the snow.',
                    national: 'People are eventually fed, but only under the terrifying barrel of a gun. The working class views the government as a murderous occupying force.',
                    international: 'Foreign correspondents report that America now resembles a war zone filled with refugees rather than a functioning nation.',
                    longTerm: 'You maintained the integrity of the food supply, but you will forever be viewed as a bloody tyrant by the desperate urban poor.'
                }
            },
            {
                text: 'Allow powerful corporate syndicates to take over food distribution, granting them massive tax exemptions and unregulated monopoly rights in exchange for feeding the city.',
                effects: { economy: 20, congress: 15, progressive: -35, publicOpinion: -15, military: -10 },
                flags: { corporateRelief: true },
                feedback: {
                    title: 'Privatized Survival',
                    immediate: 'Pinkertons and corporate agents roll into the city, distributing bread from trucks bearing the logos of the great monopolies.',
                    national: 'The immediate crisis ends without army gunfire, but the corporations now effectively govern the Midwest, demanding absolute loyalty from the workers they feed.',
                    international: 'Foreign investors aggressively buy up desperate American assets, treating the US like a bankrupt colony.',
                    longTerm: 'The federal government yields its most basic responsibility to the oligarchs, accelerating the transition to a purely corporate state.'
                }
            },
            {
                text: 'Seize elite wealth to fund emergency relief. Send agents to raid bank vaults and wealthy estates in the Gold Coast to illegally purchase unregulated black-market grain.',
                effects: { progressive: 25, publicOpinion: 10, economy: -25, congress: -30, military: -5 },
                flags: {},
                feedback: {
                    title: 'The Robin Hood Decree',
                    immediate: 'You authorize what amounts to federal robbery. Bankers are arrested and their assets seized to buy food for the slums.',
                    national: 'The starving masses cheer you as a divine savior, but the entire financial elite declares you an outlaw communist dictator.',
                    international: 'Global markets crash as the sanctity of American private property is obliterated by the President himself.',
                    longTerm: 'You saved Chicago, but started a complete financial panic that guarantees the economy will not recover during your term.'
                }
            }
        ]
    },
    {
        id: 'the_agrarian_revolt',
        category: 'Economic Policy',
        title: 'The Midwestern Farmers\' Revolt',
        context: 'Late 1915: Farmers in the agrarian heartland are being crushed by the inflation you (or your opponents) caused. In response, they have organized a massive, unprecedented strike.',
        description: 'The Farmers\' Alliance is refusing to ship a single bushel of grain to the starving coastal cities until inflation is combated, their farm debts are entirely forgiven, and the railroad monopolies are smashed. The cities will completely run out of food in three weeks. You must break the strike or submit to their radical demands.',
        choices: [
            {
                text: 'Nationalize the railways, declare martial law in the breadbasket, and use the military to seize the crops by federal decree at gunpoint.',
                effects: { economy: -20, publicOpinion: -25, progressive: -20, military: 20, congress: 10 },
                flags: { seizedCrops: true },
                feedback: {
                    title: 'War Communism',
                    immediate: 'Federal soldiers drag farmers from their homes, confiscating grain silos at bayonet point to load onto military trains.',
                    national: 'The coastal cities eat and cheer the army, but the rural heartland absolutely despises you. Massive sabotage of farmland begins.',
                    international: 'Authoritarianism solidifies openly in America, horrifying the last remaining European democracies.',
                    longTerm: 'You cause long-term agricultural collapse as furious farmers refuse to plant next year\'s crops, trading a short-term crisis for a long-term famine.'
                }
            },
            {
                text: 'Submit to their demands. Subsidize the farmers by printing billions in greenbacks, forgive their debts, and break the rail monopolies.',
                effects: { economy: -35, progressive: 25, publicOpinion: 10, congress: -20, military: -10 },
                flags: { subsidizedFarmers: true },
                feedback: {
                    title: 'Hyperinflation',
                    immediate: 'You cave entirely. The treasury printing presses run day and night to pay the farmers\' ransom and wipe out agrarian debt.',
                    national: 'The food flows immediately to the cities, but the sheer volume of new money causes the dollar to lose half its purchasing value overnight.',
                    international: 'Global markets aggressively dump American currency. The US dollar is treated as worthless paper.',
                    longTerm: 'You avert mass starvation, but completely destroy the national economy, wiping out the life savings of the middle class.'
                }
            },
            {
                text: 'Negotiate a compromise. Offer slight debt relief and price controls on grain to guarantee them a profit, without crashing the banking system or using the military.',
                effects: { economy: -10, progressive: 5, congress: 5, publicOpinion: 5, military: -5 },
                flags: {},
                feedback: {
                    title: 'The Bitter Truce',
                    immediate: 'You spend agonizing weeks negotiating with radical agrarian leaders, finally finding a middle ground consisting of heavy price controls.',
                    national: 'The strike ends, but no one is happy. Farmers feel shortchanged, bankers hate the price controls, and city dwellers face higher costs.',
                    international: 'The world sees a government barely managing to hold its fractured society together through uninspiring compromises.',
                    longTerm: 'You maintain the frail societal balance, avoiding both famine and total economic ruin, but resolving none of the fundamental tensions.'
                }
            }
        ]
    },
    {
        id: 'second_secession',
        category: 'Domestic Crisis',
        title: 'The Second Secession Declaration',
        context: '1916: Exploiting the total distraction of the famines and strikes in the North, five Southern state legislatures meet in secret and pass identical ordinances.',
        description: 'They carefully avoid the word "secession," instead declaring "Sovereign Nullification" of all federal authority. They expel federal judges, seize federal armories, and form a joint military command under the guise of "State Defense." This is it. The Union is fracturing before your eyes. Again.',
        choices: [
            {
                text: 'Declare them in open, treasonous rebellion. Mobilize the entire remaining Federal Army and begin the Second War of Disunion to crush them.',
                effects: { military: -30, economy: -35, publicOpinion: 15, congress: 25, progressive: -10 },
                flags: { secondCivilWar: true, martialLaw: true },
                feedback: {
                    title: 'The Abyss Returns',
                    immediate: 'You address the loyal half of the nation by radio. War is declared. Hundred of thousands of men are immediately drafted.',
                    national: 'Brother marches against brother, again. The nightmare of the 1860s is revived with modern machine guns and artillery.',
                    international: 'European empires prepare to recognize the new Confederacy, eager to permanently divide the American colossus.',
                    longTerm: 'Your presidency, and likely your life, will be defined entirely by the blood, mud, and fire of a Second Civil War.'
                }
            },
            {
                text: 'Acknowledge their sovereignty. The Union is dead, killed by endless hatred. Let us part in peace rather than bathe the continent in blood again.',
                effects: { congress: -40, publicOpinion: -45, progressive: -25, international: -35, military: -20 },
                flags: { unionDissolved: true },
                feedback: {
                    title: 'The Great Capitulation',
                    immediate: 'You order all federal forces to withdraw north of the Mason-Dixon line without firing a shot, officially recognizing the new splinter nation.',
                    national: 'Utter shock, despair, and humiliation sweep the loyal states. You are universally reviled as the ultimate traitor to Lincoln\'s legacy.',
                    international: 'The United States ceases to be a great power forever, fracturing into smaller, warring states like the Balkans.',
                    longTerm: 'You are the President who finally let the great experiment die. You avoid war, but guarantee a legacy of eternal disgrace.'
                }
            },
            {
                text: 'Ignore the declarations entirely. Maintain a defensive posture on the borders, but refuse to acknowledge them or attack, hoping their coalition collapses internally.',
                effects: { military: -10, publicOpinion: -15, congress: -10, economy: -15, international: -10 },
                flags: {},
                feedback: {
                    title: 'The Cold Civil War',
                    immediate: 'You pretend nothing has happened, refusing to recognize their government but also refusing to send troops. A bizarre, tense standoff begins.',
                    national: 'The country enters a state of agonizing limbo. Trade stops, families are divided by blockaded borders, but there is no open combat yet.',
                    international: 'Foreign nations laugh at the paralysis of Washington, dealing with both the North and South informally.',
                    longTerm: 'You delay the inevitable. The two sides stare at each other across trenches, waiting for a spark to ignite a war you cowardly deferred.'
                }
            }
        ]
    },
    {
        id: 'election_1916_hard',
        category: 'Electoral Politics',
        title: 'The Suspended Election of 1916',
        context: 'November 1916: It is election year. But half the country is in open rebellion, whole cities are starving, and several states are under brutal military occupation.',
        description: 'Can a free, fair, and constitutional presidential election genuinely be held while the nation tears itself apart with Gatling guns? Your paranoid military advisors warn that an election now will simply act as a catalyst for total anarchist revolution. They urge you to suspend the election indefinitely under Emergency War Powers.',
        choices: [
            {
                text: 'Hold the election only in "loyal", secured territories under heavy military supervision. Ensure your victory by actively suppressing opposition votes.',
                effects: { publicOpinion: -25, congress: -15, progressive: -20, military: 15, economy: -5 },
                flags: { shamElection: true },
                feedback: {
                    title: 'The Sham Election',
                    immediate: 'You win a heavily rigged, utterly boycotted election. Soldiers stand by ballot boxes, intimidating anyone attempting to vote against you.',
                    national: 'Almost no one considers your second term legitimate. The opposition goes underground, arming themselves for a protracted insurgency.',
                    international: 'Even the most cynical European autocrats shake their heads at the absolute death of American democratic ideals.',
                    longTerm: 'You technically retain power through a farcical legal mechanism, but you have shattered all remaining democratic norms and trust.'
                }
            },
            {
                text: 'Suspend the Constitution and the elections indefinitely. Declare yourself Emergency Executive to guide the nation through the endless crisis.',
                effects: { congress: -40, progressive: -40, publicOpinion: -35, military: 30, economy: -10 },
                flags: { decreeRule: true },
                feedback: {
                    title: 'The Dictator',
                    immediate: 'You cancel the 1916 election via Executive Order, deploying tanks to the Capitol to physically lock out the enraged Congress.',
                    national: 'Massive riots erupt in every loyal city, which you swiftly and brutally crush with the army. You are now the undisputed tyrant of America.',
                    international: 'America is officially classified globally as a military dictatorship. All democratic treaties are severed.',
                    longTerm: 'The Constitution is effectively suspended forever. You rule by decree and the sword alone, having destroyed the republic to save it.'
                }
            },
            {
                text: 'Hold a genuine, nationwide election, come what may. If the people wish to vote you out in the middle of a war, that is their sacred right.',
                effects: { progressive: 30, publicOpinion: 15, military: -30, congress: 10, economy: -10 },
                flags: {},
                feedback: {
                    title: 'The Martyr to Democracy',
                    immediate: 'You insist on constitutional order despite the chaos. The election is chaotic, violent, and messy, but it happens.',
                    national: 'You lose the election in a landslide to a radically different candidate promising peace. You accept defeat gracefully.',
                    international: 'The world watches in awe as power changes hands peacefully even in the middle of a fractured, burning nation.',
                    longTerm: 'You lose the presidency, but you have immortalized yourself as the man who refused to become a dictator when given the perfect excuse.'
                }
            }
        ]
    },
    {
        id: 'european_spillover',
        category: 'International Crisis',
        title: 'The Blockade Crisis',
        context: '1917: Europe is bogged down in its own horrific war. Britain, recognizing the fractured, desperate state of America, begins aggressively seizing American merchant ships suspected of trading with Germany.',
        description: 'In normal times, a prosperous America would demand immediate respect and threaten devastating retaliation. But your military is stretched impossibly thin dealing with internal rebellions and martial law. Britain knows you are weak. Do you risk an unwinnable foreign war to defend American honor?',
        choices: [
            {
                text: 'Threaten total war with the British Empire and launch commerce raiders. We are America; we will not be bullied or starved by foreign crowns.',
                effects: { military: -25, international: -25, publicOpinion: 20, economy: -20, congress: 10 },
                flags: { warWithBritain: true },
                feedback: {
                    title: 'Desperate Defiance',
                    immediate: 'You boldly declare a state of war against the greatest empire on earth. American cruisers begin hunting British merchantmen.',
                    national: 'A dizzying wave of suicidal, unifying patriotism sweeps the broken nation, offering a brief respite from the internal civil war.',
                    international: 'The furious Royal Navy heavily blockades the entire American East Coast, cutting off all trade and bombarding coastal forts.',
                    longTerm: 'You are now fighting the world\'s premiere naval superpower on your coasts while your own country actively burns from within. Madness.'
                }
            },
            {
                text: 'Capitulate to the British blockade. Accept their deeply humiliating demands to search all American vessels. We simply cannot afford a foreign war right now.',
                effects: { international: -15, economy: -30, congress: -15, publicOpinion: -25, military: -10 },
                flags: { submittedToBlockade: true },
                feedback: {
                    title: 'The Ultimate Humiliation',
                    immediate: 'You issue a degrading order commanding all American captains to submit to British naval searches and seizures without resistance.',
                    national: 'The American public is utterly humiliated. National pride totally collapses, and the economy tanks further due to lost cargo.',
                    international: 'America is treated by European powers as a third-rate, semi-colonized state lacking the will or means to defend itself.',
                    longTerm: 'You cleverly preserve your remaining troops and ships from British destruction, but at the absolute cost of all remaining national soul and pride.'
                }
            },
            {
                text: 'Negotiate secretly to join the Allies. Agree to the blockade in exchange for massive British loans to help you crush the internal American rebellions.',
                effects: { economy: 20, military: 15, international: 10, publicOpinion: -15, progressive: -10 },
                flags: {},
                feedback: {
                    title: 'Selling the Revolution',
                    immediate: 'You accept massive influxes of British pounds and weapons, effectively becoming a client state of London in exchange for survival.',
                    national: 'The army is re-equipped with British gear, allowing you to brutally crush domestic dissent, but nationalists accuse you of selling the country.',
                    international: 'Britain is thrilled to have bought an American president, utilizing your ports and resources for their own war effort.',
                    longTerm: 'You save your regime from internal collapse, but America is temporarily reduced to a massive, wealthy puppet of the British Empire.'
                }
            }
        ]
    },
    {
        id: 'socialist_uprising',
        category: 'Domestic Crisis',
        title: 'The Socialist Commune',
        context: '1918: Massive inequality, endless famine, brutal corporate militias, and authoritarian rule have finally pushed the loyal, non-seceding Northern working class completely past the breaking point.',
        description: 'Eugene V. Debs leads a massive general strike that rapidly, violently escalates into an armed worker\'s revolt across the entire Rust Belt. They have seized Detroit and Chicago, fortifying the factories. They declare the "American Commune" and demand a completely rewritten, socialist constitution.',
        choices: [
            {
                text: 'Divert troops from the Southern front to crush the commune. Use poison gas and artillery if necessary to eradicate the red menace.',
                effects: { publicOpinion: -20, progressive: -45, military: -25, economy: -20, congress: 15 },
                flags: { crushedCommune: true },
                feedback: {
                    title: 'The Red Bloodshed',
                    immediate: 'Horrific urban warfare erupts. Artillery shells and mustard gas rain down on American workers in Detroit and Chicago.',
                    national: 'The uprising is brutally crushed at the cost of tens of thousands of lives. The working class goes deeply, silently underground, hating you forever.',
                    international: 'Global socialist movements organize massive boycotts of America. Fear of the "Red Menace" consumes the globe.',
                    longTerm: 'You prevented a communist revolution, but labor relations are permanently destroyed, and the cities are reduced to bombed-out husks.'
                }
            },
            {
                text: 'Legitimize the uprising. Order a ceasefire and agree to their core demands, calling a new Constitutional Convention to appease the workers.',
                effects: { progressive: 45, congress: -45, publicOpinion: 15, economy: -25, military: -20 },
                flags: { newConstitution: true },
                feedback: {
                    title: 'The Second Republic',
                    immediate: 'You legitimize the commune, shocking the world by publicly agreeing that the old capitalist constitutional system has fundamentally failed.',
                    national: 'Conservatives, bankers, and generals flee the country in terror. Incredible hope and chaotic energy spring among the radicalized working class.',
                    international: 'Capitalist nations immediately embargo the new, radicalized America, fearing the ideological contagion.',
                    longTerm: 'You avoid a massacre but effectively destroy the old United States, overseeing its chaotic rebirth into a fundamentally different socialist republic.'
                }
            },
            {
                text: 'Divide and conquer. Offer massive wage hikes and pardons specifically to moderate unionists, isolating the hardcore communists to be easily arrested.',
                effects: { economy: -10, progressive: 10, publicOpinion: 5, military: 5, congress: 5 },
                flags: {},
                feedback: {
                    title: 'The Wedge Strategy',
                    immediate: 'You use the treasury to buy off the less radical workers, splitting the strike. The isolated communists are quietly rounded up by police.',
                    national: 'The commune collapses from within without the need for artillery. Moderates are relieved, though radicals scream betrayal.',
                    international: 'Capitalist powers are impressed by your cunning in diffusing a socialist revolution without causing a devastating civil war.',
                    longTerm: 'You defuse the immediate nuclear threat of revolution, but the underlying systemic poverty guarantees this will happen again soon.'
                }
            }
        ]
    },
    {
        id: 'corporate_syndicate',
        category: 'Economic Crisis',
        title: 'The Syndicate Soft-Coup',
        context: '1919: Years of constant crisis, war, and corruption have left the federal government totally bankrupt. You can no longer pay the army, nor fund basic government services.',
        description: 'A dark suit arrives at the Oval Office. A syndicate of monopolies, led by J.P. Morgan and Rockefeller, offers a terrifying deal: they will personally buy out the entire massive national debt and fund the military. In exchange, they strictly demand direct cabinet seats and veto power over all future economic legislation.',
        choices: [
            {
                text: 'Accept the Syndicate\'s terms entirely. We desperately need the money to survive the week. The business of America is business.',
                effects: { economy: 45, progressive: -45, publicOpinion: -35, congress: -25, military: 15 },
                flags: { corporateRule: true },
                feedback: {
                    title: 'The Corporate State',
                    immediate: 'You sign the contracts. The US Treasury is effectively privatized. Morgan\'s men take over federal departments the next day.',
                    national: 'The army is paid and hyperinflation stops instantly, but democracy has been officially, legally purchased by unelected billionaires.',
                    international: 'Global markets soar as the messy threat of American democracy dies, replaced by ruthlessly efficient corporate management.',
                    longTerm: 'America formally transitions into a hyper-capitalist corporate oligarchy explicitly owned and operated by monopolies.'
                }
            },
            {
                text: 'Reject them, default on the debt completely, and use emergency powers to aggressively seize all their corporate assets to fund the government.',
                effects: { economy: -50, progressive: 35, publicOpinion: 15, international: -35, congress: -10 },
                flags: { debtDefault: true },
                feedback: {
                    title: 'The Great Seizure',
                    immediate: 'You order the military to nationalize all banks, railroads, and oil fields. Warrants are issued for Rockefeller and Morgan.',
                    national: 'Wall Street panics absolutely. The dollar completely collapses. Radicals cheer as the billionaires are stripped of their empires.',
                    international: 'Furious foreign investors lose billions and demand foreign military intervention to protect their American assets.',
                    longTerm: 'You preserve federal sovereignty against the oligarchs, but plunge the battered nation into total, apocalyptic economic darkness.'
                }
            },
            {
                text: 'Threaten them. Inform the syndicate that if they don\'t buy the debt without conditions, you will purposefully let the socialist rebellion burn their factories to the ground.',
                effects: { economy: 10, publicOpinion: 5, progressive: 5, congress: 5, military: -5 },
                flags: {},
                feedback: {
                    title: 'The Protection Racket',
                    immediate: 'You operate like a mafia boss, threatening the oligarchs with the mob. Terrified of losing everything, they buy the debt with no strings attached.',
                    national: 'The government stays afloat for another year. The billionaires hate you, but are forced to keep your regime alive to protect their property.',
                    international: 'The global financial community is disgusted by your extortion tactics, but the immediate crisis passes.',
                    longTerm: 'You out-maneuvered the billionaires using the threat of the masses, maintaining power but creating enemies of the most powerful men on earth.'
                }
            }
        ]
    },
    {
        id: 'election_1920_hard',
        category: 'Electoral Politics',
        title: 'The Constitutional Crisis of 1920',
        context: 'November 1920: The nation is a burning, traumatized husk of its former glory. Yet, incredibly, the constitutional clock demands a presidential election.',
        description: 'Your military advisors and remaining loyal cabinet members warn that attempting to hold an election in this environment will lead to total, final anarchy and the collapse of the government. They urge you to permanently suspend the election, declare yourself Emergency Executive for Life, and rebuild from the ashes.',
        choices: [
            {
                text: 'Hold the election. We must prove that despite the blood, the fire, and the horror, the democratic ideal of the American republic survived.',
                effects: { progressive: 25, publicOpinion: 15, military: -35, congress: 15, economy: 5 },
                flags: { heldElectionHard: true },
                feedback: {
                    title: 'The Last Election',
                    immediate: 'You reject the military\'s advice and insist on constitutional order. The election is chaotic, violent, and deeply flawed, but it occurs.',
                    national: 'Voter turnout is abysmal due to violence. You are absolutely crushed at the polls by a weary public desperate for any new face.',
                    international: 'The world watches in awed silence as you facilitate the chaotic but real transition of power, proving democracy isn\'t quite dead.',
                    longTerm: 'You step down in defeat, handing over a broken, bleeding nation to your successor, but you have miraculously preserved the republican ideal.'
                }
            },
            {
                text: 'Suspend the Constitution entirely and declare yourself Executive for Life. You are the only one who can navigate this total nightmare.',
                effects: { military: 35, publicOpinion: -45, progressive: -45, congress: -45, economy: -5 },
                flags: { dictatorForLife: true },
                feedback: {
                    title: 'Crossing the Rubicon',
                    immediate: 'You appear on radio declaring the permanent suspension of all federal elections for national security. The military immediately arrests the opposition.',
                    national: 'The remaining democratic institutions collapse overnight. The military cheers, while the public falls into terrified, absolute silence.',
                    international: 'America is officially and permanently classified as a pariah military dictatorship. The Great Experiment is declared dead.',
                    longTerm: 'You have destroyed the United States in order to save it. You now rule by the sword alone, an American Caesar atop a mountain of ashes.'
                }
            },
            {
                text: 'Flee. Quietly board a naval vessel in the dead of night, taking the remaining gold reserves, and establish a government-in-exile in Europe.',
                effects: { publicOpinion: -50, military: -50, progressive: -50, congress: -50, international: -20 },
                flags: {},
                feedback: {
                    title: 'The Cowardly Flight',
                    immediate: 'The nation awakes to find the President has vanished. Total, leaderless anarchy consumes Washington instantly.',
                    national: 'You are remembered as the ultimate coward, the man who broke the country and then ran away rather than face the consequences.',
                    international: 'You arrive in London as a disgraced, tragic figure, a king without a country, watching your homeland tear itself apart from afar.',
                    longTerm: 'Without any central authority, America completely balkanizes into dozens of warring warlord states. The United States is erased from the map.'
                }
            }
        ]
    }
];
