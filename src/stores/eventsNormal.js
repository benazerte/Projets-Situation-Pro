export const eventsNormal = [
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
{
            id: 'federal_reserve',
            category: 'Economic Policy',
            title: 'The Banking Crisis - Creating the Federal Reserve',
            context: 'The Panic of 1907 nearly collapsed the American financial system. Only J.P. Morgan\'s personal intervention prevented catastrophe. The nation needs a central banking system, but the debate is fierce: should it be controlled by private bankers or the government?',
            description: 'Your advisors present competing visions for America\'s financial future. Banking panics have plagued the nation for decades. Congressman Carter Glass proposes a Federal Reserve System with regional banks and government oversight. Wall Street wants a central bank controlled by private bankers. Progressive Democrats demand government control. Your decision will shape American capitalism for generations.',
            choices: [
                {
                    text: 'Support a Federal Reserve System with strong government control and regional banks to prevent Wall Street dominance. This serves the people, not the bankers.',
                    effects: { progressive: 18, economy: 12, publicOpinion: 10, congress: -10, international: 3 },
                    flags: { passedFederalReserve: true },
                    feedback: {
                        title: 'Revolutionary Banking Reform',
                        immediate: 'You publicly endorse the Federal Reserve Act with government-appointed leadership. Your speech electrifies progressives: "The control of credit must be public, not private."',
                        national: 'Farmers and small business owners celebrate the creation of regional reserve banks that will serve their needs. Labor unions praise your defiance of Wall Street. However, major bankers like J.P. Morgan and Paul Warburg mount fierce opposition.',
                        international: 'European central bankers watch with great interest as America creates a modern financial system. The move enhances confidence in American economic stability.',
                        longTerm: 'The Federal Reserve becomes the cornerstone of your New Freedom program. Its success in stabilizing the economy strengthens your hand in future reforms, though you have made permanent enemies among the financial elite.'
                    }
                },
                {
                    text: 'Compromise with bankers to create a hybrid system that balances private expertise with public oversight. Both sides must have a voice.',
                    effects: { economy: 18, congress: 12, progressive: -6, publicOpinion: 6, international: 5 },
                    flags: { passedFederalReserve: true },
                    feedback: {
                        title: 'Balanced Financial Reform',
                        immediate: 'You negotiate a complex compromise: a Federal Reserve Board appointed by the President, but significant private banker input in operations.',
                        national: 'Moderate voices praise your ability to navigate between populist and banking interests. The reform passes with broad support, though progressives feel you compromised too much while bankers remain suspicious.',
                        international: 'The sophisticated compromise impresses foreign observers, demonstrating American political maturity.',
                        longTerm: 'Your pragmatic solution creates a lasting institution that serves the nation well. Both progressives and business leaders feel partially satisfied, allowing you to maintain broad political support.'
                    }
                },
                {
                    text: 'Delay the decision and commission further studies. Such a momentous change requires absolute certainty and broader consensus.',
                    effects: { congress: 6, economy: -12, progressive: -15, publicOpinion: -8, international: -5 },
                    flags: { passedFederalReserve: false },
                    requirement: null,
                    feedback: {
                        title: 'Missed Opportunity',
                        immediate: 'You announce the formation of a blue-ribbon commission to study banking reform further, disappointing advocates for immediate action.',
                        national: 'Progressive newspapers savage your timidity. William Jennings Bryan and other reformers question your commitment to change. The banking community is relieved but uncertain.',
                        longTerm: 'Your delay allows opposition to organize more effectively. The momentum for reform dissipates, and your reputation as a decisive leader suffers. When crisis strikes, you will have no tool to manage it.'
                    }
                }
            ]
        },
        {
            id: 'mexico_huerta',
            category: 'Foreign Policy',
            title: 'Crisis in Mexico - The Huerta Question',
            context: 'General Victoriano Huerta has seized power in Mexico through a violent coup, likely murdering President Francisco Madero. American business interests have billions invested in Mexican oil, railroads, and mines. Your ambassador, Henry Lane Wilson, strongly urges recognition of Huerta\'s government.',
            description: 'The situation in Mexico tests your commitment to "moral diplomacy." Huerta\'s regime is brutal but stable. American businesses demand you protect their investments. European powers are already recognizing Huerta. But you campaigned on supporting democracy abroad, not just American profits. The decision could trigger war or revolution.',
            choices: [
                {
                    text: 'Refuse to recognize Huerta\'s illegitimate government. Recall Ambassador Wilson and openly support constitutional forces. America will stand for democracy, not dictatorship.',
                    effects: { progressive: 15, international: -12, economy: -10, publicOpinion: 8, military: -5 },
                    flags: { recognizedHuerta: false, interventionistMexico: true },
                    feedback: {
                        title: 'Moral Diplomacy in Action',
                        immediate: 'You shock the diplomatic world by refusing recognition and recalling your ambassador. "We can have no sympathy with those who seek power by force," you declare.',
                        national: 'Progressive reformers hail your principled stand. However, business leaders are furious, warning of economic losses and potential nationalization of American property in Mexico.',
                        international: 'European powers are bewildered by your rejection of Huerta. Some see it as naive idealism, others as American interference in Latin American affairs. Mexican revolutionaries like Venustiano Carranza welcome your support.',
                        longTerm: 'Your decision commits you to an interventionist policy in Mexico. You will face continued pressure to protect American interests militarily, and the situation may escalate beyond your control.'
                    }
                },
                {
                    text: 'Recognize Huerta pragmatically to protect American interests and stabilize the border. Idealism must yield to reality and national security.',
                    effects: { economy: 12, international: 8, progressive: -18, publicOpinion: -8, military: 3 },
                    flags: { recognizedHuerta: true, interventionistMexico: false },
                    feedback: {
                        title: 'Realpolitik Prevails',
                        immediate: 'You extend formal recognition to Huerta\'s government, prioritizing stability and American business interests over democratic ideals.',
                        national: 'Business leaders and conservatives praise your pragmatism. However, progressive supporters are deeply disappointed, accusing you of betraying your principles. Labor unions and reformers protest.',
                        international: 'European powers welcome your recognition, seeing it as a return to traditional diplomacy. However, Mexican revolutionaries view you as an enemy of democracy.',
                        longTerm: 'Your decision establishes a pattern of supporting stability over democracy in Latin America. Progressive trust in your leadership is damaged, and you will face accusations of hypocrisy in future foreign policy decisions.'
                    }
                },
                {
                    text: 'Withhold recognition publicly while secretly channeling arms and support to constitutional forces. Play both sides to advance American interests.',
                    effects: { international: -8, military: 8, progressive: 3, congress: -8, economy: -5 },
                    flags: { recognizedHuerta: false, interventionistMexico: true },
                    feedback: {
                        title: 'Covert Intervention',
                        immediate: 'You maintain official neutrality while authorizing secret arms shipments to Huerta\'s opponents. The policy requires careful coordination with military intelligence.',
                        national: 'Your duplicitous policy remains secret for now, but rumors circulate in Washington. Some congressional leaders suspect your true intentions.',
                        international: 'European powers see confusion in American policy. Mexican revolutionaries appreciate the arms but question your commitment. If discovered, your credibility will suffer greatly.',
                        longTerm: 'Your secret intervention creates a dangerous precedent and entangles America deeper in Mexican affairs. When the truth eventually emerges, your moral diplomacy claims will ring hollow.'
                    }
                }
            ]
        },
        {
            id: 'colorado_strike',
            category: 'Labor Relations',
            title: 'The Ludlow Massacre - Labor War in Colorado',
            context: 'Colorado coal miners have been striking for months against Rockefeller-owned mines, demanding better wages, union recognition, and safer conditions. Company guards and state militia clash with strikers in escalating violence.',
            description: 'April 1914: Tragedy strikes. State militia and company guards attack a tent colony of striking miners at Ludlow, killing women and children. The nation is horrified. Labor leaders demand federal intervention. John D. Rockefeller Jr. insists this is a state matter. Your response will define your relationship with both labor and capital.',
            choices: [
                {
                    text: 'Send federal troops immediately to protect workers and launch a federal investigation into company abuses. The government must defend the innocent.',
                    effects: { progressive: 22, publicOpinion: 15, economy: -15, congress: -18, international: -5 },
                    flags: { supportedWorkers: true },
                    feedback: {
                        title: 'Federal Protection for Workers',
                        immediate: 'You mobilize federal troops and personally condemn the massacre. "The rights of labor must be protected by federal power," you declare in a national address.',
                        national: 'Labor unions across America erupt in celebration. Samuel Gompers of the AFL calls you "the workers\' president." However, the business community is enraged. Rockefeller warns of "socialism." Congressional conservatives threaten to block all future legislation.',
                        international: 'European socialists and labor movements praise American progressivism. However, business interests warn their governments about American radicalism.',
                        longTerm: 'Your decisive support for labor cements a powerful political alliance but creates permanent enemies among industrialists. Future strikes will look to you for protection, expanding federal power dramatically.'
                    }
                },
                {
                    text: 'Respect states\' rights and Colorado\'s authority. Express sympathy but avoid federal intervention in local labor disputes.',
                    effects: { congress: 15, economy: 8, progressive: -25, publicOpinion: -15, international: 3 },
                    flags: { supportedWorkers: false },
                    feedback: {
                        title: 'Constitutional Restraint',
                        immediate: 'You issue a statement of sympathy for the victims but emphasize that labor disputes are state matters beyond federal jurisdiction.',
                        national: 'Labor leaders are devastated and furious. The AFL and other unions withdraw support for your administration. Progressive newspapers denounce you as a betrayer. Business leaders quietly approve but remain publicly silent.',
                        longTerm: 'Your refusal to intervene destroys your relationship with organized labor. Progressive voters feel betrayed, potentially costing you the 1916 election. The incident will haunt your presidency.'
                    }
                },
                {
                    text: 'Appoint a federal mediator and pressure both sides toward compromise. Create a commission to investigate and recommend labor reforms.',
                    effects: { publicOpinion: 8, progressive: -8, congress: 8, economy: 5, international: 2 },
                    flags: { supportedWorkers: false },
                    feedback: {
                        title: 'Mediated Solution',
                        immediate: 'You appoint a distinguished mediation commission and pressure both Rockefeller and union leaders to negotiate. Your approach emphasizes reason over confrontation.',
                        national: 'Moderate voices praise your balanced approach. Some progress is made in working conditions. However, labor radicals see weakness, while conservatives worry about government interference. Neither side is fully satisfied.',
                        longTerm: 'Your compromise approach avoids the extremes but satisfies no one completely. Labor support remains lukewarm, and you miss an opportunity to become the champion of workers.'
                    }
                }
            ]
        },
        {
            id: 'wwi_outbreak',
            category: 'International Crisis',
            title: 'The Great War Begins - American Neutrality',
            context: 'August 1914: Archduke Franz Ferdinand\'s assassination has triggered a chain reaction. Germany, Austria-Hungary, and the Ottoman Empire face Britain, France, and Russia. Europe descends into unprecedented carnage.',
            description: 'The greatest war in human history has begun. Both sides seek American support, weapons, and loans. Your declaration of neutrality is popular, but maintaining it will be nearly impossible. German submarines threaten American shipping. British propaganda floods American newspapers. How will you navigate this catastrophe?',
            choices: [
                {
                    text: 'Maintain strict, genuine neutrality. Ban loans and arms sales to all belligerents equally. Keep America completely out of European quarrels.',
                    effects: { international: -18, economy: -20, publicOpinion: 20, military: -8, progressive: 5 },
                    flags: { strictNeutrality: true, tradingWithAllies: false },
                    feedback: {
                        title: 'Isolationist America',
                        immediate: 'You announce that America will be truly neutral "in thought as well as deed," banning all loans and arms sales to warring nations.',
                        national: 'Pacifists and isolationists celebrate your principled stand. However, business leaders are furious about lost profits. J.P. Morgan and other bankers protest the loan ban. Munitions manufacturers warn of economic collapse.',
                        international: 'Britain and France are shocked and disappointed. Germany welcomes your neutrality but continues submarine warfare. Both sides begin propaganda campaigns to sway American opinion.',
                        longTerm: 'Your strict neutrality prevents economic benefits from the war but keeps America genuinely neutral. However, economic pressure and incidents at sea will test your resolve constantly.'
                    }
                },
                {
                    text: 'Assert America\'s right to trade freely with all nations as a neutral power. Warn all sides that attacks on American ships will not be tolerated.',
                    effects: { economy: 18, international: -15, publicOpinion: 8, military: 8, congress: 10 },
                    flags: { strictNeutrality: false, tradingWithAllies: true },
                    feedback: {
                        title: 'Freedom of the Seas',
                        immediate: 'You declare that America will trade with any nation and that neutral shipping is sacrosanct under international law. Both sides are warned to respect American rights.',
                        national: 'Business interests strongly support your position. American trade with Britain and France explodes, creating an economic boom. However, this trade increasingly ties America to the Allied cause.',
                        international: 'Britain welcomes American trade while maintaining its blockade of Germany. Germany responds by escalating submarine warfare, arguing that America\'s "neutrality" favors the Allies.',
                        longTerm: 'Your policy creates enormous profits but draws America into dangerous waters. German submarines will inevitably target American ships, creating incidents that could lead to war.'
                    }
                },
                {
                    text: 'Quietly favor the Allies with loans and supplies while maintaining official neutrality. Democracy must triumph over militarism.',
                    effects: { economy: 25, international: -25, publicOpinion: -15, congress: -12, military: 10 },
                    flags: { strictNeutrality: false, tradingWithAllies: true },
                    feedback: {
                        title: 'Shadow Alliance',
                        immediate: 'You authorize massive loans to Britain and France while restricting credit to Germany. Officially neutral, America becomes the Allies\' arsenal.',
                        national: 'Wall Street and munitions manufacturers celebrate unprecedented profits. However, German-Americans and Irish-Americans protest your hypocrisy. Progressive pacifists warn you are leading America to war.',
                        international: 'Germany correctly perceives American policy as pro-Allied and increases submarine attacks. Britain grows dependent on American supplies, embedding America in the Allied war effort.',
                        longTerm: 'Your unofficial alliance with the Allies makes war increasingly likely. American economic interests become inseparable from Allied victory. Neutrality becomes impossible to maintain.'
                    }
                }
            ]
        },
        {
            id: 'lusitania',
            category: 'International Crisis',
            title: 'The Lusitania Sinks - Crisis with Germany',
            context: 'May 7, 1915: A German U-boat torpedoes the British passenger liner Lusitania off Ireland. Nearly 1,200 civilians die, including 128 Americans. Germany claims the ship carried munitions, making it a legitimate military target.',
            description: 'The nation is outraged. Former President Theodore Roosevelt demands immediate war. "Remember the Lusitania!" becomes a rallying cry. Germany offers condolences but insists its submarine campaign is legal. Britain secretly confirms the ship was carrying arms. Your response will determine America\'s path.',
            choices: [
                {
                    text: 'Demand immediate German apology, reparations, and cessation of submarine warfare. Threaten to sever diplomatic relations if Germany refuses.',
                    effects: { publicOpinion: 15, international: -20, military: 12, congress: 8, progressive: -10 },
                    flags: { lusitaniaSunk: true },
                    requirement: null,
                    feedback: {
                        title: 'Firm Warning to Germany',
                        immediate: 'You send a stern note demanding Germany end unrestricted submarine warfare and compensate American victims. The message is an ultimatum in all but name.',
                        national: 'Hawks like Roosevelt praise your firmness, though they want immediate war. Pacifists worry you are provoking conflict. Most Americans support holding Germany accountable.',
                        international: 'Germany reluctantly suspends unrestricted submarine warfare temporarily, fearing American entry. Britain is pleased but pushes for stronger action. The crisis eases but unresolved tensions remain.',
                        longTerm: 'Your firm stance establishes a red line: Germany cannot attack American civilians. However, Germany\'s agreement is temporary. When submarine warfare resumes, war will become almost inevitable.'
                    }
                },
                {
                    text: 'Maintain diplomatic pressure but avoid ultimatums. Work quietly for a negotiated settlement of the entire European war.',
                    effects: { publicOpinion: -5, international: 5, progressive: 12, congress: -5, military: -5 },
                    flags: { lusitaniaSunk: true },
                    feedback: {
                        title: 'Diplomatic Restraint',
                        immediate: 'You send diplomatic protests to Germany while launching a quiet peace initiative. You position yourself as a potential mediator to end the war.',
                        national: 'Pacifists and progressives praise your restraint. However, Roosevelt and war hawks savage you as weak. Many Americans feel the Lusitania victims have been betrayed.',
                        international: 'Neither side is ready for peace, but your offer establishes America as a potential honest broker. Germany continues submarine warfare more cautiously.',
                        longTerm: 'Your restraint preserves peace but costs you political support. The Lusitania becomes a symbol of presidential weakness that opponents will use against you.'
                    }
                },
                {
                    text: 'Request a declaration of war from Congress immediately. Germany has murdered American civilians. The time for neutrality has ended.',
                    effects: { publicOpinion: 20, international: 25, military: 25, progressive: -25, economy: 10 },
                    flags: { lusitaniaSunk: true },
                    conditionalOutcome: true, // This choice has conditional results
                    feedback: null // Will be set dynamically based on congress stat
                }

            ]
        },
        {
            id: 'election_1916',
            category: 'Electoral Politics',
            title: 'The 1916 Election - "He Kept Us Out of War"',
            context: 'Your first term nears its end. You have passed major reforms but face criticism from all sides. Republicans nominate Charles Evans Hughes, a moderate progressive. War hawks attack your neutrality. Pacifists fear you are drifting toward conflict.',
            description: 'The election is too close to call. Your campaign slogan "He Kept Us Out of War" resonates, but Hughes attacks your handling of Mexico and Germany. Women\'s suffrage advocates demand your support. Can you build a winning coalition while war looms across the Atlantic?',
            choices: [
                {
                    text: 'Run on your progressive record and peace. Embrace the "He Kept Us Out of War" slogan and promise continued neutrality.',
                    effects: { publicOpinion: 15, progressive: 15, international: -10, military: -10 },
                    flags: { wonReelection1916: true },
                    feedback: {
                        title: 'Peace Candidate Victorious',
                        immediate: 'Your campaign focuses relentlessly on peace and domestic reform. Election night is agonizing - California\'s late returns give you victory by the narrowest margin.',
                        national: 'Progressives and peace advocates celebrate your reelection. However, your promise to stay out of war will bind you if events spiral. War hawks in both parties are disappointed.',
                        international: 'Germany hopes your reelection means continued American neutrality. Britain and France worry you lack resolve.',
                        longTerm: 'Your narrow victory on a peace platform constrains your options if war becomes necessary. Breaking your promise would devastate your credibility.'
                    }
                },
                {
                    text: 'Run on preparedness and strong leadership. Promise to defend American honor and interests against all threats.',
                    effects: { publicOpinion: 8, military: 15, progressive: -12, international: -5 },
                    flags: { wonReelection1916: true, preparednessCampaign: true },
                    feedback: {
                        title: 'Strong Leadership Mandate',
                        immediate: 'You campaign on strength and preparedness, competing directly with Hughes for the hawkish vote. Your message appeals to those who see war as inevitable.',
                        national: 'Business interests and military leaders support your preparedness message. However, you lose some progressive and pacifist votes. The election remains close.',
                        international: 'Germany sees your reelection as a threat. Britain is encouraged by your apparent willingness to defend American rights forcefully.',
                        longTerm: 'Your strong mandate gives you flexibility to take the nation to war if necessary, but you have abandoned the peace coalition.'
                    }
                },
                {
                    text: 'Build a broad coalition by endorsing women\'s suffrage and appealing to both progressives and moderates on war and peace.',
                    effects: { publicOpinion: 20, progressive: 20, congress: 10, international: 0 },
                    flags: { wonReelection1916: true, womensVoteSupporter: true },
                    feedback: {
                        title: 'Coalition Victory',
                        immediate: 'You make a dramatic pivot, endorsing the women\'s suffrage amendment and building a broad progressive coalition. Your political skill wins a comfortable victory.',
                        national: 'Suffragettes celebrate as a president finally backs their cause. Your progressive coalition is reinvigorated. The mandate is clear and strong.',
                        international: 'Foreign powers see a strengthened American president with domestic political capital to make bold decisions.',
                        longTerm: 'Your endorsement of suffrage advances women\'s rights and strengthens your second term. Your broad coalition gives you flexibility in foreign policy.'
                    }
                }
            ]
        },
        {
            id: 'zimmermann_telegram',
            category: 'International Crisis',
            title: 'The Zimmermann Telegram - Germany\'s Fatal Mistake',
            context: 'January 1917: British intelligence intercepts a German telegram to Mexico proposing a military alliance against the United States. Germany promises to help Mexico recover Texas, New Mexico, and Arizona.',
            description: 'The revelation explodes across American newspapers. Germany has plotted to invade American territory! Even former neutralists are outraged. Germany also announces resumption of unrestricted submarine warfare, having gambled that victory will come before America can mobilize. The hour of decision has arrived.',
            choices: [
                {
                    text: 'Request a declaration of war from Congress. The time for neutrality has passed. America must fight for democracy and civilization.',
                    effects: { publicOpinion: 25, international: 30, military: 30, progressive: -20, economy: 15 },
                    flags: { declaredWar: true, zimmermanNote: true },
                    feedback: {
                        title: 'America Enters the Great War',
                        immediate: 'On April 2, 1917, you address Congress: "The world must be made safe for democracy." Four days later, America is at war.',
                        national: 'The nation rallies behind the war effort. Conscription begins. Industry mobilizes. However, pacifists and socialists protest. You will need to suppress dissent to maintain unity.',
                        international: 'Allied nations celebrate American entry. Germany realizes its fatal miscalculation. The tide of war begins to turn.',
                        longTerm: 'Your decision transforms America into a global military power and changes world history. However, the war will test your leadership and the nation\'s unity in unprecedented ways.'
                    }
                },
                {
                    text: 'Maintain armed neutrality. Arm merchant ships and convoy them with warships, but avoid formal war unless Germany attacks American vessels.',
                    effects: { publicOpinion: -10, international: -15, military: 15, progressive: 10, congress: -15 },
                    flags: { declaredWar: false, zimmermanNote: true },
                    requirement: 'This requires Public Opinion above 50%',
                    feedback: {
                        title: 'Defiant Neutrality',
                        immediate: 'You reject calls for war, instead arming American merchant ships and ordering the Navy to protect them. It is war in all but name.',
                        national: 'Most Americans now support war, and your continued neutrality frustrates them. Congressional leaders of both parties condemn your indecision. Political support erodes rapidly.',
                        international: 'Britain and France are devastated. Without American troops, they face possible defeat. Germany continues submarine attacks, making incidents inevitable.',
                        longTerm: 'Your refusal to declare war cannot last. German submarines will force the issue. Meanwhile, your political standing collapses as you appear indecisive at a critical moment.'
                    }
                },
                {
                    text: 'Offer to mediate "peace without victory" before America enters. Use the war threat as leverage to end the conflict.',
                    effects: { publicOpinion: -15, international: -25, progressive: 15, military: -10, congress: -20 },
                    flags: { declaredWar: false, zimmermanNote: true },
                    requirement: 'This requires Progressive Support above 60%',
                    feedback: {
                        title: 'Last Chance for Peace',
                        immediate: 'You make one final attempt at mediation, offering "peace without victory" to both sides. Your idealism moves some, but most see naiveté.',
                        national: 'The proposal is dead on arrival. Americans demand action, not more talk. Your political enemies sense weakness. Congressional support collapses.',
                        international: 'Both sides reject your proposal. Germany continues submarine warfare. Britain and France lose faith in America. Your credibility is destroyed.',
                        longTerm: 'Your peace effort fails catastrophically. Events will force you to war anyway, but from a position of political weakness. Your presidency may not survive.'
                    }
                }
            ]
        },
        {
            id: 'wartime_dissent',
            category: 'Civil Liberties',
            title: 'Wartime Dissent - Espionage and Sedition Acts',
            context: 'With America at war, opposition emerges. Socialists protest. German-Americans face suspicion. Anti-war publications criticize the government. Your advisors demand legal tools to suppress dissent and maintain war unity.',
            description: 'Congress proposes the Espionage and Sedition Acts, criminalizing opposition to the war and criticism of the government. Eugene Debs and other socialists face prosecution. The American Civil Liberties Union warns of tyranny. How far will you go to ensure war unity?',
            choices: [
                {
                    text: 'Support the Espionage and Sedition Acts fully. National unity requires suppressing dangerous dissent during wartime.',
                    effects: { military: 15, publicOpinion: 10, progressive: -25, international: 5, congress: 15 },
                    flags: { espionageActPassed: true, seditionActPassed: true },
                    feedback: {
                        title: 'Wartime Crackdown',
                        immediate: 'You sign both acts into law. Eugene Debs is imprisoned for an anti-war speech. Hundreds of publications are banned. German-Americans face severe persecution.',
                        national: 'Most Americans support strong measures to win the war. However, civil libertarians are horrified. Your progressive credentials are severely damaged. Future generations will condemn these actions.',
                        international: 'Allies welcome your domestic unity. Germany uses your repression in propaganda, claiming to fight for freedom against American tyranny.',
                        longTerm: 'Your suppression of dissent achieves short-term unity but creates lasting damage to civil liberties and your legacy. The Supreme Court will struggle with these precedents for decades.'
                    }
                },
                {
                    text: 'Support only the Espionage Act targeting actual spying and sabotage. Refuse to criminalize mere criticism of the government.',
                    effects: { military: 8, progressive: 5, publicOpinion: 5, congress: -8 },
                    flags: { espionageActPassed: true, seditionActPassed: false },
                    feedback: {
                        title: 'Balanced Approach',
                        immediate: 'You support prosecuting spies and saboteurs but veto the Sedition Act that would criminalize speech. "Democracy must survive even in wartime," you argue.',
                        national: 'Civil libertarians praise your stand. However, hawks attack you as weak on national security. Some anti-war agitation continues, frustrating military leaders.',
                        international: 'Your protection of civil liberties bolsters propaganda claims that America truly fights for freedom, though domestic opposition provides ammunition for German propaganda.',
                        longTerm: 'Your nuanced position protects core liberties while allowing necessary security measures. Future Americans will remember your restraint favorably.'
                    }
                },
                {
                    text: 'Oppose all suppression of speech. Trust American citizens to support the war effort without government coercion.',
                    effects: { progressive: 20, publicOpinion: -15, military: -20, congress: -25, international: -10 },
                    flags: { espionageActPassed: false, seditionActPassed: false },
                    requirement: 'This requires Progressive Support above 70%',
                    feedback: {
                        title: 'Principled Resistance',
                        immediate: 'You veto all wartime speech restrictions, arguing that America fights to preserve democracy, not destroy it at home.',
                        national: 'Civil libertarians celebrate, but most Americans are angry. Anti-war protests escalate. Your political enemies accuse you of endangering the war effort.',
                        international: 'Germany exploits American domestic dissent in propaganda. Allies worry about American resolve. Military leaders question your leadership.',
                        longTerm: 'Your principled stand protects civil liberties but costs you critical political support during wartime. The war effort may suffer, and your presidency is at risk.'
                    }
                }
            ]
        },
        {
            id: 'versailles',
            category: 'International Relations',
            title: 'The Paris Peace Conference - Fourteen Points',
            context: 'November 1918: Germany surrenders. American forces helped turn the tide. Now comes the peace. You travel to Paris personally - the first president to visit Europe while in office - bringing your Fourteen Points for a just peace.',
            description: 'You arrive in Paris as a conquering hero, cheered by millions. Your vision: no punitive peace, self-determination for nations, and a League of Nations to prevent future wars. But Britain and France demand revenge and reparations. Clemenceau wants to crush Germany forever. Can you salvage your idealistic vision?',
            choices: [
                {
                    text: 'Fight for your Fourteen Points completely. Threaten to make a separate peace with Germany if the Allies insist on a punitive treaty.',
                    effects: { progressive: 25, international: -30, publicOpinion: -10, congress: -20 },
                    flags: { versaillesSigned: false, leagueSupporter: true },
                    requirement: 'This requires International Relations above 60%',
                    feedback: {
                        title: 'Idealism Triumphant',
                        immediate: 'You refuse to compromise your principles. Your threat of a separate peace forces the Allies to accept a moderate settlement and the League of Nations.',
                        national: 'Progressives hail your moral courage. However, many Americans feel Germany was not punished enough. Political opponents attack the treaty.',
                        international: 'Your just peace gives Germany a chance to recover democratically. The League of Nations is strong. History will judge whether you prevented or merely postponed future war.',
                        longTerm: 'Your principled peace might prevent another war, or it might be seen as naive weakness that allowed German resurgence. Your domestic political standing is weakened.'
                    }
                },
                {
                    text: 'Compromise pragmatically. Accept some Allied demands on reparations and territory in exchange for the League of Nations.',
                    effects: { international: 10, progressive: -15, congress: -10, publicOpinion: 5 },
                    flags: { versaillesSigned: true, leagueSupporter: true },
                    feedback: {
                        title: 'The Treaty of Versailles',
                        immediate: 'You negotiate for weeks, securing the League of Nations but accepting harsh terms for Germany. The treaty is a compromise that satisfies no one completely.',
                        national: 'The treaty faces fierce opposition. Progressives say you abandoned your principles. Conservatives say it entangles America in Europe. The Senate fight will be brutal.',
                        international: 'Germany signs the treaty under protest, claiming betrayal. The harsh terms may breed resentment. The League of Nations offers hope but lacks teeth.',
                        longTerm: 'History will debate whether your compromise treaty contained the seeds of future war. The League becomes your last, greatest battle.'
                    }
                },
                {
                    text: 'Accept Allied terms and focus entirely on securing the League of Nations. The League can correct any treaty injustices later.',
                    effects: { international: 15, progressive: -20, congress: -15, publicOpinion: -5 },
                    flags: { versaillesSigned: true, leagueSupporter: true },
                    feedback: {
                        title: 'League Above All',
                        immediate: 'You largely surrender to Allied demands, focusing all your energy on creating a strong League of Nations that can maintain peace.',
                        national: 'Americans are divided. Some support the League as humanity\'s great hope. Others see it as a betrayal of American sovereignty. Isolationists mobilize for battle.',
                        international: 'The punitive peace creates lasting bitterness in Germany. The League of Nations exists but faces immediate challenges without American leadership.',
                        longTerm: 'You have bet everything on the League. If the Senate rejects it, your entire peace strategy collapses. If it succeeds, you may have prevented future war.'
                    }
                }
            ]
        },
        {
            id: 'league_fight',
            category: 'Domestic Policy',
            title: 'The League of Nations Fight - Final Battle',
            context: 'Summer 1919: You return from Paris with the Versailles Treaty and the League of Nations Covenant. Senator Henry Cabot Lodge leads Republican opposition. The Senate must ratify the treaty by a two-thirds vote.',
            description: 'Your health is failing from the strain of Paris and the war. Doctors warn you to rest. But the League - your vision for preventing future wars - faces Senate defeat. Lodge offers amendments that would weaken American participation. Do you compromise or fight to the end?',
            choices: [
                {
                    text: 'Accept reasonable reservations to secure ratification. The League is too important to lose over details.',
                    effects: { congress: 20, international: 15, publicOpinion: 10, progressive: -10 },
                    flags: { leagueSupporter: true },
                    feedback: {
                        title: 'The League Survives',
                        immediate: 'You swallow your pride and accept Lodge\'s reservations. The Senate ratifies the treaty with modifications. America joins the League of Nations.',
                        national: 'Your compromise saves the League but disappoints purists who wanted your original vision. Most Americans are relieved the fight is over.',
                        international: 'The League of Nations begins with American participation, giving it real power. Your vision has a chance to succeed.',
                        longTerm: 'Your pragmatic compromise creates a lasting institution for peace. Whether it prevents future wars remains to be seen, but America is part of the solution.'
                    }
                },
                {
                    text: 'Refuse all reservations and take your case directly to the American people. Launch a national speaking tour despite your failing health.',
                    effects: { publicOpinion: -15, progressive: 15, congress: -30, international: -20 },
                    flags: { leagueSupporter: true, strokeOccurred: true },
                    feedback: {
                        title: 'Tragedy Strikes',
                        immediate: 'You embark on a grueling cross-country tour, giving passionate speeches for the League. In Colorado, you collapse. Days later, a massive stroke leaves you partially paralyzed.',
                        national: 'The nation is shocked by your collapse. Your wife Edith essentially runs the government during your incapacitation. The Senate rejects the treaty without you to fight for it.',
                        international: 'Without American participation, the League of Nations is crippled from birth. Your dream of collective security dies with your health.',
                        longTerm: 'Your stubborn refusal to compromise destroys the League and ends your effective presidency. History will debate whether your idealism was noble or tragic.'
                    }
                },
                {
                    text: 'Seek a middle ground. Negotiate directly with moderate senators to find compromise language that preserves the League\'s core purpose.',
                    effects: { congress: 10, international: 8, publicOpinion: 5, progressive: -5 },
                    flags: { leagueSupporter: true },
                    feedback: {
                        title: 'Negotiated Settlement',
                        immediate: 'You work quietly with moderate senators like William Borah to craft compromise language. Progress is slow but steady.',
                        national: 'The exhausting negotiations produce a modified League that most can accept. It\'s not your perfect vision, but it exists.',
                        international: 'America joins the League with some limitations on its commitments. The institution is weaker than you hoped but stronger than nothing.',
                        longTerm: 'Your willingness to negotiate saves the League in compromised form. It has a fighting chance to prevent future wars, though its effectiveness remains uncertain.'
                    }
                }
            ]
        },
        {
            id: 'election_1920',
            category: 'Electoral Politics',
            title: 'The 1920 Decision - Third Term or Retirement?',
            context: 'Your health is broken. The stroke has left you weakened. The League fight has exhausted you. Yet you believe only you can protect your legacy and the League. Do you seek an unprecedented third term?',
            description: 'Your advisors are divided. Some beg you to retire gracefully. Others insist the nation needs your continued leadership. The Democratic Party is uncertain. Your health makes campaigning nearly impossible. Breaking Washington\'s two-term tradition would be controversial. What will you decide?',
            choices: [
                {
                    text: 'Retire with dignity. Support a successor who will continue your policies and protect your legacy.',
                    effects: { publicOpinion: 15, progressive: 10, congress: 10 },
                    flags: { ranFor1920: false },
                    feedback: {
                        title: 'Graceful Exit',
                        immediate: 'You announce you will not seek another term, citing your health and Washington\'s precedent. The nation respects your decision.',
                        national: 'Democrats select James Cox to carry your banner. Republicans nominate Warren Harding, who promises a "return to normalcy." The country is exhausted by war and reform.',
                        international: 'World leaders thank you for your service and vision, even as they prepare for the post-Wilson era.',
                        longTerm: 'Your decision to retire allows you to preserve your dignity and legacy. History will judge your presidency on its merits, not on a desperate final campaign.'
                    }
                },
                {
                    text: 'Run for a third term. The nation needs you, and only you can ensure the League of Nations survives.',
                    effects: { publicOpinion: -25, progressive: -20, congress: -25, international: -15 },
                    flags: { ranFor1920: true },
                    requirement: 'This requires Public Opinion above 65%',
                    feedback: {
                        title: 'Hubris and Defeat',
                        immediate: 'You announce your candidacy despite your condition. The campaign is a disaster. You can barely appear in public. The nation watches sadly as you cling to power.',
                        national: 'Democrats are horrified but cannot oppose you openly. Republicans gleefully attack your ambition and incapacity. Warren Harding wins in a historic landslide.',
                        international: 'Your crushing defeat repudiates your entire vision. The League dies with your political career. Foreign leaders pity your fall.',
                        longTerm: 'Your refusal to retire gracefully destroys your legacy. History remembers your final campaign as a tragedy of ego and decline. The League is doomed.'
                    }
                },
                {
                    text: 'Remain ambiguous about your intentions to maintain influence, then support your chosen successor at the convention.',
                    effects: { publicOpinion: 5, progressive: 5, congress: 5 },
                    flags: { ranFor1920: false },
                    feedback: {
                        title: 'Strategic Ambiguity',
                        immediate: 'You keep the party guessing about your intentions, maintaining maximum leverage. At the convention, you throw support to your chosen successor.',
                        national: 'Your strategy works partially. Democrats nominate your choice, but the party is divided and exhausted. Republicans sense victory.',
                        international: 'World leaders wait to see if your vision will continue or if America will retreat from global leadership.',
                        longTerm: 'Your political maneuvering preserves some influence but cannot overcome the nation\'s desire for change. Your legacy will depend on your chosen successor\'s success.'
                    }
                }
            ]
        }
    ];