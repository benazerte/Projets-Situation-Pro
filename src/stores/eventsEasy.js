export const eventsEasy = [
    {
        id: 'inauguration_easy',
        category: 'Domestic Policy',
        title: 'Inauguration Day - The American Harmony',
        context: 'March 4, 1913: You stand before a massive, jubilant crowd at the Capitol to take the oath of office as the 28th President. Unlike the fractured timelines of other eras, this America is a beacon of unity and unprecedented prosperity. The legacy of a miraculously averted Civil War has forged a nation deeply committed to internal harmony, economic might, and an unbroken democratic tradition.',
        description: 'As you assume the presidency under a crisp blue sky, the core debate across the states isn\'t about survival or division, but rather how to wield America\'s immense, uncontested power. Your party holds comfortable majorities in both chambers of Congress. Do you turn this massive engine of progress outward to reshape the globe with American values, or do you focus the nation\'s boundless energy inward to create a domestic utopia of industry, art, and infrastructure?',
        choices: [
            {
                text: 'Embrace the mantle of global leadership. Launch a grand diplomatic initiative to forge unbreakable alliances, mediate international disputes, and position America as the undisputed moral and diplomatic center of the world.',
                effects: { international: 18, publicOpinion: 8, economy: 5, congress: 5, progressive: 5 },
                flags: { lodgeDiplomat: true },
                feedback: {
                    title: 'The Global Statesman',
                    immediate: 'In your inaugural address, you announce an ambitious tour of European and Asian capitals, setting the stage for a new era of proactive, benevolent American diplomacy.',
                    national: 'The press is captivated by your grand, cosmopolitan vision. Citizens feel a surge of pride seeing their nation finally step up to claim its rightful place on the world stage.',
                    international: 'European powers, unused to such assertive American involvement, watch with a mixture of immense respect and cautious apprehension. Treaties of friendship are immediately proposed.',
                    longTerm: 'You have firmly committed America to an internationalist path, making it the premier global mediator and power broker for the next century.'
                }
            },
            {
                text: 'Prioritize the American homeland. Marshal massive federal resources for an unprecedented era of domestic infrastructure development, continental railways, and industrial modernization to create an economic fortress.',
                effects: { economy: 18, progressive: 12, congress: 8, publicOpinion: 5, military: 2 },
                flags: { lodgeBuilder: true },
                feedback: {
                    title: 'The Great Builder',
                    immediate: 'You dedicate your administration to the "Continental Century," announcing federal grants for total electrification, interstate highways, and new transcontinental railways.',
                    national: 'The stock market surges to unprecedented record highs. Labor unions and industrialists alike cheer the promise of endless employment, modernization, and profit.',
                    international: 'Foreign nations marvel at the scale of American ambition, while global investors pour capital into the booming, impenetrable US markets.',
                    longTerm: 'America is set on a course to become an industrial titan so overwhelmingly powerful and self-sufficient that foreign entanglement may become entirely unnecessary.'
                }
            },
            {
                text: 'Adopt a balanced, cautious approach. Let private enterprise guide domestic growth naturally while you subtly expand American influence abroad through quiet, bilateral trade agreements rather than grand gestures.',
                effects: { congress: 15, economy: 10, publicOpinion: 5, international: 5, progressive: -5 },
                flags: {},
                feedback: {
                    title: 'Pragmatic Stewardship',
                    immediate: 'You deliver a steady, reassuring address emphasizing stability, free enterprise, and slow, calculated expansion of American interests.',
                    national: 'Conservative bankers and moderate politicians applaud your restraint. Radicals on both sides find the speech uninspiring, but the markets appreciate the lack of disruption.',
                    international: 'Foreign capitals breathe a sigh of relief, preferring a predictable America over a crusading one.',
                    longTerm: 'You maintain strong baseline support and a booming economy, holding your political capital in reserve for when a true crisis inevitably arises.'
                }
            }
        ]
    },
    {
        id: 'the_new_navy',
        category: 'Military Policy',
        title: 'Expansion of the Great White Fleet',
        context: 'Late 1913: The globe is experiencing unprecedented trade volume, and American merchant ships travel to every continent. However, piracy, regional skirmishes, and the rising navies of European empires occasionally threaten these vital arteries.',
        description: 'Your military advisors and naval architects urge you to project American power across the oceans by vastly expanding the Navy. Building dozens of new dreadnoughts and cruisers will cost millions, diverting crucial funds from domestic programs, but it will secure American sea lanes globally and intimidate any rivals. Pacifists argue that building weapons of war invites conflict in a peaceful era.',
        choices: [
            {
                text: 'Authorize the massive naval expansion. Build the world\'s largest, most modern dreadnought fleet to ensure absolute American maritime dominance across both oceans.',
                effects: { military: 25, economy: -10, international: 15, publicOpinion: 10, congress: -5 },
                flags: { expandedNavy: true },
                feedback: {
                    title: 'Ruler of the Waves',
                    immediate: 'Keels are laid for ten new state-of-the-art dreadnoughts across domestic shipyards. The "Two-Ocean Navy Act" passes over pacifist objections.',
                    national: 'Patriots and jingoists celebrate the awe-inspiring display of American industrial and military might. Shipyard towns experience economic booms.',
                    international: 'Britain\'s Royal Navy views this as a direct, alarming challenge to their historical supremacy. Japan nervously accelerates its own naval programs.',
                    longTerm: 'You secure absolute naval dominance, allowing you to enforce the Monroe Doctrine effortlessly, but you have triggered a silent global arms race.'
                }
            },
            {
                text: 'Reject the expansion. Veto the dreadnought program and focus the federal budget purely on domestic prosperity, education, and internal growth.',
                effects: { economy: 15, progressive: 15, military: -15, international: -5, publicOpinion: 5 },
                flags: { domesticSpending: true },
                feedback: {
                    title: 'The Peaceful Republic',
                    immediate: 'You decisively veto the naval appropriations bill, redirecting the massive funds into universally accessible education grants and rural development.',
                    national: 'Pacifists, educators, and progressives applaud your commitment to human flourishing over machinery of death. The military brass is deeply insulted.',
                    international: 'Foreign powers feel significantly less threatened by the United States, cementing your reputation as a genuinely peaceful superpower.',
                    longTerm: 'You spur incredible domestic economic growth and cultural flourishing at the cost of global projection. American merchant ships must rely on goodwill rather than armor.'
                }
            },
            {
                text: 'Compromise by modernizing the existing fleet without expanding its size. Invest in new technologies like submarines and naval aviation rather than massive, expensive battleships.',
                effects: { military: 10, progressive: 5, economy: 5, congress: 10, international: 5 },
                flags: {},
                feedback: {
                    title: 'Technological Superiority',
                    immediate: 'You approve a moderate budget focused on research and development, quietly funding experimental submarine squadrons and early aircraft carriers.',
                    national: 'Congress appreciates the financial prudence while the military is placated by the cutting-edge technology. The public embraces the futuristic vision.',
                    international: 'Rivals are unsure how to match invisible submarines and flying machines, giving America an asymmetric advantage without sparking a dreadnought race.',
                    longTerm: 'You modernize the military efficiently, preparing America for the future of warfare while saving millions to stimulate the civilian economy.'
                }
            }
        ]
    },
    {
        id: 'panama_tolls',
        category: 'Foreign Policy',
        title: 'The Panama Canal Tolls Controversy',
        context: '1914: The marvel of the age, the Panama Canal, is nearing full operation. Congress previously passed a populist law exempting American coastal shipping from paying tolls, which has deeply angered the British government.',
        description: 'Britain formally protests, claiming the exemption violates the Hay-Pauncefote Treaty, which guaranteed equal access to all nations. Maintaining the exemption massively boosts American domestic shipping profits and pleases your base, but it alienates America\'s closest ally and tarnishes your reputation as an honest broker in an era of global harmony.',
        choices: [
            {
                text: 'Push Congress relentlessly to repeal the exemption. America must honor its treaties to maintain the moral high ground and international trust.',
                effects: { international: 20, congress: -12, economy: -8, publicOpinion: -5, progressive: 5 },
                flags: { repealedTolls: true },
                feedback: {
                    title: 'Honoring Treaties',
                    immediate: 'You use all your political capital to force Congress to repeal the exemption, declaring that "a great nation does not break its word for profit."',
                    national: 'Nationalists and shipping magnates express intense outrage at what they see as bowing to the British crown. You lose significant congressional goodwill.',
                    international: 'Britain praises your unprecedented honor and diplomatic integrity. European nations universally applaud the return to strict rule of law.',
                    longTerm: 'Your absolute respect for treaties strengthens the international legal order, making it infinitely easier to negotiate complex global alliances in the future.'
                }
            },
            {
                text: 'Stand firm and defend the exemption. The canal was built by American ingenuity and American blood; our ships should pass through our canal for free.',
                effects: { economy: 15, congress: 15, publicOpinion: 12, international: -25, progressive: -5 },
                flags: { repealedTolls: false },
                feedback: {
                    title: 'America First',
                    immediate: 'You refuse to bow to London\'s pressure, vigorously defending the toll exemption as a sovereign American right over American territory.',
                    national: 'Patriots, populists, and industry leaders celebrate your unwavering, unapologetic stance. Domestic trade routes explode in profitability.',
                    international: 'Britain feels entirely betrayed and lodges formal diplomatic protests. Trust in American treaties severely plummets across European capitals.',
                    longTerm: 'You massively boost domestic shipping and secure re-election populism, but damage trust with European powers, isolating the US diplomatically.'
                }
            },
            {
                text: 'Propose a complex diplomatic arbitration. Offer to submit the dispute to an international tribunal at The Hague, binding both the US and Britain to the outcome.',
                effects: { international: 10, progressive: 10, congress: -5, publicOpinion: 5, economy: -2 },
                flags: {},
                feedback: {
                    title: 'The Rule of Law',
                    immediate: 'You avoid a direct domestic fight by delegating the issue to international lawyers, demonstrating your faith in peaceful arbitration.',
                    national: 'Congress grumbles about losing sovereignty, but the public enjoys the spectacle of civilized legal battle rather than outright diplomatic conflict.',
                    international: 'The world watches closely as two superpowers agree to settle a major economic dispute with gavels instead of guns.',
                    longTerm: 'When the tribunal inevitably rules against the exemption, you can repeal it while blaming the court, saving face while upholding international law.'
                }
            }
        ]
    },
    {
        id: 'the_peace_palace',
        category: 'International Relations',
        title: 'The Second Hague Convention',
        context: 'Late 1914: Recognizing America\'s status as an untouched, massively powerful neutral arbiter, the nations of Europe ask you to spearhead the creation of a permanent International Court of Arbitration at The Hague.',
        description: 'This visionary court would seek to end the concept of war entirely through mandatory, binding arbitration of all state disputes. However, ratifying the treaty requires a terrifying concession: surrendering a degree of national sovereignty and agreeing that an international panel of judges can overrule the US Congress and the President.',
        choices: [
            {
                text: 'Champion the Court unconditionally. Commit America to binding global arbitration and use our immense leverage to force other empires to sign or face embargo.',
                effects: { international: 25, progressive: 20, congress: -20, military: -10, publicOpinion: -5 },
                flags: { hagueCourt: true },
                feedback: {
                    title: 'The Architect of Global Peace',
                    immediate: 'You travel to the Netherlands to personally sign the monumental Hague Treaty, delivering a speech that brings delegates to tears.',
                    national: 'Furious nationalists and conservative senators accuse you of abandoning sacred American sovereignty and committing treason against the Constitution.',
                    international: 'The global press hails you as a messianic visionary. With American backing, the Court becomes the supreme arbiter of human conflict.',
                    longTerm: 'You lay the unbreakable groundwork for decades of global peace, securing an era devoid of world wars, though your domestic legacy is permanently controversial.'
                }
            },
            {
                text: 'Refuse binding arbitration entirely. America is too powerful to be chained by foreign judges. We must retain our unilateral freedom of action at all costs.',
                effects: { congress: 20, military: 15, international: -25, progressive: -15, publicOpinion: 10 },
                flags: { unilateralPower: true },
                feedback: {
                    title: 'Sovereign Destiny',
                    immediate: 'You violently reject the proposed treaty in a fiery address to Congress, declaring that "American destiny will be written in Washington, not The Hague."',
                    national: 'Congress gives you a roaring standing ovation for defending American independence. The military is immensely relieved to retain operational freedom.',
                    international: 'The peace conference collapses instantly without US support. European idealists weep as the old system of secret alliances and military buildup resumes.',
                    longTerm: 'You maintain total freedom of action for the United States, keeping the Constitution supreme, but leave the divided world vulnerable to catastrophic future conflicts.'
                }
            },
            {
                text: 'Negotiate a watered-down treaty. Agree to the Court but insist on an "American Exemption" clause, stating that matters of "vital national honor" cannot be arbitrated.',
                effects: { international: 5, congress: 10, progressive: -5, publicOpinion: 5, economy: 5 },
                flags: {},
                feedback: {
                    title: 'The Empty Palace',
                    immediate: 'You sign a heavily modified treaty that looks good on paper but lacks any real enforcement mechanism when a major power decides to opt-out.',
                    national: 'The Senate easily ratifies the toothless document. You gain political points as a peacemaker without sacrificing any actual sovereign power.',
                    international: 'Other nations immediately demand their own exemptions. The Court is built, magnificent and gilded, but ultimately hollow.',
                    longTerm: 'The Court functions well for minor disputes between tiny nations, but is completely ignored when great empires clash. You maintained the status quo perfectly.'
                }
            }
        ]
    },
    {
        id: 'central_american_bank',
        category: 'Economic Policy',
        title: 'The Hemispheric Bank Initiative',
        context: '1915: Following decades of American stability, the nations of Latin America desperately seek development funds to build their own prosperous futures. Currently, European banks are charging them extortionate, predatory interest rates.',
        description: 'Your Secretary of State presents a brilliant, unprecedented opportunity: establish a Pan-American Bank backed directly by the immense wealth of the US treasury. This colossal institution would fund modernization, railways, and agriculture across the entire hemisphere, effectively pushing Europe out of the Americas forever. But who will control this wealth?',
        choices: [
            {
                text: 'Fund the project as a true cooperative partnership. Institute a board with equal representation for all member nations, prioritizing mutual uplift over pure profit.',
                effects: { progressive: 20, international: 25, economy: 5, congress: -15, publicOpinion: 5 },
                flags: { panAmPartnership: true },
                feedback: {
                    title: 'The Good Neighbor',
                    immediate: 'You sign the monumental cooperative treaty in Buenos Aires to deafening cheers, relinquishing American veto power in favor of democratic hemispheric voting.',
                    national: 'Wall Street bankers complain bitterly about missed monopolies and giving away American capital to "foreigners," costing you severe political capital.',
                    international: 'Latin America embraces the partnership with tears of joy. A century of anti-American resentment evaporates overnight.',
                    longTerm: 'A golden era of hemispheric solidarity begins. South America modernizes rapidly, becoming a bloc of wealthy, democratic allies tightly bound to the US in friendship, not fear.'
                }
            },
            {
                text: 'Use the bank to establish total American economic hegemony. Provide the funds, but legally mandate absolute US control of the board and veto rights over all infrastructure projects.',
                effects: { economy: 25, congress: 20, international: -20, progressive: -15, publicOpinion: 10 },
                flags: { dollarDiplomacyExtreme: true },
                feedback: {
                    title: 'Total Dollar Diplomacy',
                    immediate: 'You establish the bank in New York, dictating terms that force Latin American nations to collateralize their customs houses and central banks to the US Treasury.',
                    national: 'American banks and heavy industries reap unimaginable, staggering profits as they are exclusively awarded every infrastructure contract south of Texas.',
                    international: 'Resentment explodes across Latin America. They take the badly needed money, but view the United States as an extortionate imperial overlord rather than a friend.',
                    longTerm: 'You secure absolute, unbreakable economic dominance over the Western Hemisphere, extracting massive wealth at the permanent cost of Latin American goodwill and sovereignty.'
                }
            },
            {
                text: 'Reject federal involvement. Allow private US conglomerates like United Fruit to negotiate their own loans and infrastructure deals directly with the foreign governments.',
                effects: { economy: 15, congress: 5, progressive: -10, international: -5, publicOpinion: -5 },
                flags: {},
                feedback: {
                    title: 'The Banana Republics',
                    immediate: 'You wash your hands of the affair, letting Wall Street syndicates and agricultural cartels flood into Central and South America to cut private, unregulated deals.',
                    national: 'Corporate profits soar, and the federal government saves millions by avoiding direct investment or risk.',
                    international: 'Private corporations begin operating as sovereign powers in weaker nations, buying politicians and exploiting workers without oversight.',
                    longTerm: 'The lack of federal structure leads to massive corporate corruption and the creation of deeply unstable client states entirely dependent on unregulated American monopolies.'
                }
            }
        ]
    },
    {
        id: 'asian_open_door',
        category: 'Foreign Policy',
        title: 'The China Open Door Crisis',
        context: 'Late 1915: Seizing on a moment of global distraction, the militant Empire of Japan issues the secret "Twenty-One Demands" to the fragile Republic of China. These demands would essentially turn China into a Japanese protectorate.',
        description: 'By seeking to dominate China completely, Japan is violently closing the long-standing "Open Door" policy. American businesses have massive, lucrative interests in Chinese trade, and progressive missionaries champion Chinese independence. However, directly confronting the heavily armed Japanese Empire thousands of miles away could spark a catastrophic naval conflict in the Pacific.',
        choices: [
            {
                text: 'Issue a harsh, uncompromising ultimatum. Deploy the entirety of the Pacific Fleet to defend China\'s sovereignty and threaten total economic embargo against Japan.',
                effects: { international: -15, military: 20, publicOpinion: 15, economy: -10, progressive: 10 },
                flags: { openDoorDefended: true },
                feedback: {
                    title: 'Standoff in the East',
                    immediate: 'American battleships steam towards Tokyo Bay as you publicly leak and condemn the Twenty-One Demands, demanding their immediate, unconditional withdrawal.',
                    national: 'The American public rallies behind "plucky" China and applauds your muscular defense of free trade and democracy. Jingoistic fervor sweeps the West Coast.',
                    international: 'Japan, realizing they cannot win a drawn-out naval war against the rising US colossus, backs down—but they are furious and deeply humiliated.',
                    longTerm: 'You saved China from subjugation and preserved the Open Door, but you have made a permanent, bitter, and highly militarized enemy of the Japanese Empire.'
                }
            },
            {
                text: 'Accommodate Japan. Secretly recognize their "special interests" in Manchuria and China in exchange for their guarantee not to attack American colonial possessions in the Philippines.',
                effects: { economy: 15, international: 10, publicOpinion: -20, progressive: -25, congress: 5 },
                flags: { asianAccommodation: true },
                feedback: {
                    title: 'The Realist Betrayal',
                    immediate: 'You quietly sign the Lansing-Ishii Agreement, a cynical masterstroke of realpolitik that acknowledges Japanese hegemony over China to secure peace for America.',
                    national: 'Idealists, missionaries, and progressives are utterly disgusted by your cowardly betrayal of a sister republic to an autocracy. The press savages your moral standing.',
                    international: 'Japan rejoices at their free hand in Asia. European empires nod in approval at your pragmatic, cold-blooded statecraft.',
                    longTerm: 'You absolutely guarantee peace in the Pacific for a generation, but you have abandoned China to a dark century of foreign exploitation and occupation.'
                }
            },
            {
                text: 'Fund the Chinese Resistance. Maintain formal neutrality, but pour massive secret loans and surplus weaponry into the Chinese Republican army to fight the Japanese themselves.',
                effects: { economy: -5, military: 5, international: -5, progressive: 5, congress: -10 },
                flags: {},
                feedback: {
                    title: 'The Proxy War',
                    immediate: 'You publicly urge negotiations while quietly transforming China into a fortress, shipping crates of rifles labeled as "farm equipment."',
                    national: 'Congress grows suspicious of the missing treasury funds, but the public remains blissfully unaware of your shadow war.',
                    international: 'Japan bleeds money and men in a protracted, agonizing quagmire in China, unable to secure the quick victory they anticipated.',
                    longTerm: 'You bog Japan down in an unwinnable proxy war, blunting their expansionism without spilling a single drop of American blood, though the region remains totally destabilized.'
                }
            }
        ]
    },
    {
        id: 'mexican_annexation',
        category: 'Foreign Policy',
        title: 'The Mexican Question',
        context: '1916: To the south, Mexico is experiencing severe, bloody internal instability as revolutionary factions war for control. Occasional cross-border raids by bandit generals have resulted in tragic American civilian deaths.',
        description: 'Under the guise of "restoring civilizational order," a massive coalition of jingoistic media barons, oil tycoons, and hawkish senators are demanding nothing less than the complete military conquest and annexation of Mexico to perpetually secure the continent and expand the American Empire to the Panama Canal.',
        choices: [
            {
                text: 'Yield to the imperialists. Order the full, uncompromising invasion and permanent annexation of Mexico to bring peace, order, and American industry to the entire continent.',
                effects: { military: -20, international: -35, publicOpinion: -15, congress: 20, economy: -15, progressive: -30 },
                flags: { mexicanAnnexation: true },
                feedback: {
                    title: 'The Imperial Overstretch',
                    immediate: 'Over 200,000 US combat troops march on Mexico City under artillery cover. The initial conventional war is won in mere weeks as the capital falls.',
                    national: 'Imperialists cheer the conquest, but progressives are horrified by the naked, brutal aggression. The draft is instituted to hold the vast new "territories."',
                    international: 'The entire globe condemns your blatant imperialism. Latin American nations completely sever diplomatic ties, terrified they are next.',
                    longTerm: 'America becomes bogged down in a horrific, decades-long asymmetric guerilla war in the mountains and jungles of Mexico, bleeding blood and treasure endlessly.'
                }
            },
            {
                text: 'Withdraw all border forces, issue a blanket apology for past interference, and vow absolute, unshakeable respect for Mexican sovereignty, letting them settle their own revolution.',
                effects: { international: 25, progressive: 25, congress: -25, publicOpinion: 5, military: 10 },
                flags: { mexicanAnnexation: false },
                feedback: {
                    title: 'The Ultimate Good Neighbor',
                    immediate: 'You stun the world by ordering a strict, total non-intervention policy, forbidding American arms or troops from crossing the Rio Grande under any circumstances.',
                    national: 'Hawks label you a spineless coward, and oil barons fund massive campaigns against you. However, anti-imperialists and pacifists hail you as a saint.',
                    international: 'Latin American relations hit an unimaginable all-time high. You prove to the world that America is a republic of laws, not an empire of conquest.',
                    longTerm: 'Mexico eventually stabilizes on its own terms. Your profound respect for sovereignty creates a lasting, unbreakable peace in the Americas, though you alienated your military.'
                }
            },
            {
                text: 'The "Punitive Expedition." Send a limited, highly mobile cavalry force across the border simply to hunt down the specific bandits who attacked America, then immediately withdraw.',
                effects: { military: 5, publicOpinion: 15, international: -5, economy: -5, congress: 5 },
                flags: {},
                feedback: {
                    title: 'Measured Retaliation',
                    immediate: 'General Pershing leads a swift, targeted raid into Chihuahua, scattering the bandit forces without trying to topple the Mexican government.',
                    national: 'The public is satisfied that American honor has been defended and the border secured without descending into a massive, costly war of conquest.',
                    international: 'The Mexican government protests the violation of its borders, but is secretly relieved you did not attempt full annexation.',
                    longTerm: 'You thread the needle perfectly, asserting American strength and protecting citizens while avoiding the catastrophic trap of empire-building.'
                }
            }
        ]
    },
    {
        id: 'election_1916_easy',
        category: 'Electoral Politics',
        title: 'The 1916 Election - Peak Prosperity',
        context: 'November 1916: Your first term nears its end. By every conceivable metric, the nation is unimaginably wealthy, absolutely at peace, and expanding its cultural and economic footprint globally.',
        description: 'Despite your monumental successes, the opposition party has nominated a charismatic, radical populist firebrand who promises to tear down the "elitist" system you built and redistribute the incredible wealth of the golden era. As the campaign kicks off, you must decide what the central, defining message of your re-election bid will be.',
        choices: [
            {
                text: 'Run purely on your unmatched economic prosperity, domestic growth, and the skyrocketing stock market. Promise "A chicken in every pot and a car in every garage."',
                effects: { economy: 15, publicOpinion: 20, progressive: -10, congress: 10 },
                flags: { reElection1916Easy: true },
                feedback: {
                    title: 'The Full Dinner Pail',
                    immediate: 'You run a relentlessly positive campaign focused entirely on wallets, wages, and wealth. You cruise to an effortless, historic landslide victory at the polls.',
                    national: 'Voters overwhelmingly choose to keep the good times rolling, rejecting populist anger in favor of a booming, stable status quo.',
                    international: 'Foreign markets soar on the news of your re-election, confident that the engine of global capitalism remains in steady hands.',
                    longTerm: 'You secure a powerful mandate for your second term focused heavily on business and industry, though inequality will continue to gently rise.'
                }
            },
            {
                text: 'Run as the indispensable statesman of the world. Remind the voters that your peerless diplomacy has kept America peaceful and dominant in a chaotic world.',
                effects: { international: 20, publicOpinion: 15, congress: 5, military: 10, progressive: 5 },
                flags: { reElection1916Easy: true },
                feedback: {
                    title: 'The Indispensable Nation',
                    immediate: 'You elevate the campaign above petty domestic squabbles, presenting yourself as the architect of a new, peaceful global order. You win a comfortable, elegant victory.',
                    national: 'Americans feel a deep, abiding pride in their nation\'s newfound prestige. They vote for the man who made America the spiritual capital of the globe.',
                    international: 'World leaders send their ecstatic congratulations, vastly preferring the known, brilliant diplomat to a radical unknown.',
                    longTerm: 'You are politically empowered to dictate progressive terms and treaties to the rest of the world, having proven the voters support internationalism.'
                }
            },
            {
                text: 'Steal the populist\'s thunder. Pivot hard left, embracing antitrust laws, worker protections, and wealth taxes to combine your prosperity with total equality.',
                effects: { progressive: 25, publicOpinion: 15, economy: -15, congress: -10, international: 0 },
                flags: { reElection1916Easy: true },
                feedback: {
                    title: 'The Progressive Pivot',
                    immediate: 'You shock the establishment by passing massive labor reforms right before the election, utterly deflating the populist opposition and winning the working class.',
                    national: 'Wall Street is terrified and furious, pouring money against you, but the millions of factory workers and farmers who benefit carry you to victory.',
                    international: 'European socialists look to America as a bizarre but functioning model of a wealthy, equitable society.',
                    longTerm: 'You reshape the very fabric of American capitalism. The extreme wealth at the top is trimmed to create the largest, wealthiest middle class in human history.'
                }
            }
        ]
    },
    {
        id: 'global_trade_congress',
        category: 'Economic Policy',
        title: 'The Global Trade Congress of 1917',
        context: '1917: Armed with a fresh, undeniable electoral mandate and an economy bursting at the seams, it is time to establish permanent new norms for the surging global market.',
        description: 'You host a massive, unprecedented summit in New York, inviting the leaders of the world\'s industrial powers. Your goal is to redesign global trade. Do you push for radical global free trade, tearing down all tariffs to unite the world economically, or do you use America\'s leverage to maintain protective walls that ensure domestic industries crush foreign competition?',
        choices: [
            {
                text: 'Champion absolute global free trade. Use your immense leverage to tear down tariffs worldwide, arguing that economic interdependence makes war impossible.',
                effects: { international: 25, economy: 15, congress: -20, progressive: 10, publicOpinion: 5 },
                flags: { globalFreeTrade: true },
                feedback: {
                    title: 'The Open World',
                    immediate: 'You browbeat and inspire the delegates into signing the "New York Accords," drastically lowering thousands of tariffs instantly across the globe.',
                    national: 'Inefficient domestic monopolies panic and try to ruin you in Congress, but American consumers rejoice as prices for goods plummet globally.',
                    international: 'Global trade explodes to levels previously thought impossible. Nations become so deeply economically entangled that armed conflict becomes financial suicide.',
                    longTerm: 'America drives a massive, unending era of globalization and prosperity. You are remembered as the father of the modern, interconnected global economy.'
                }
            },
            {
                text: 'Protect American industries utterly. Use your leverage to pry open foreign markets for American goods while maintaining high, impenetrable tariffs at home.',
                effects: { economy: 25, congress: 20, international: -25, publicOpinion: 10, progressive: -10 },
                flags: { strictProtectionism: true },
                feedback: {
                    title: 'Fortress Economics',
                    immediate: 'You ruthlessly negotiate one-sided trade deals. "America First" is not just a slogan; it is the brutal new reality of international commerce.',
                    national: 'Domestic manufacturers and monopolies see absolutely staggering, historic profits. Congress showers you in praise as American factories run day and night.',
                    international: 'Foreign powers are impoverished and furious, threatening retaliation but lacking the leverage to actually hurt the American juggernaut.',
                    longTerm: 'You secure incredible, unimaginable localized wealth for the United States, but you risk starting a bitter economic cold war that breeds deep international hatred.'
                }
            },
            {
                text: 'Establish targeted trading blocs. Create a zero-tariff zone with democracies in the Americas and Europe, while heavily tariffing autocracies to starve them out.',
                effects: { international: 10, progressive: 15, economy: 5, congress: 5, military: 5 },
                flags: {},
                feedback: {
                    title: 'The Arsenal of Democracy',
                    immediate: 'You weaponize the American economy, treating trade not as commerce, but as a reward for democratic, civilized behavior.',
                    national: 'The public loves the moral clarity of your economic policy. Businesses adapt to entirely new supply chains based on ideology rather than simple cost.',
                    international: 'The world is rapidly polarized into a wealthy, democratic free-trade bloc led by America, and a starving, isolated autocratic bloc.',
                    longTerm: 'You peacefully bring several monarchies to their knees through economic strangulation, advancing democracy globally without firing a shot.'
                }
            }
        ]
    },
    {
        id: 'african_colonial_crisis',
        category: 'International Crisis',
        title: 'The African Colonial Dispute',
        context: '1918: The ghosts of old imperialism threaten the peaceful era. France and Germany clash violently over colonial borders in the Congo Basin. Naval ships have exchanged live fire.',
        description: 'With Europe suddenly hovering on the horrifying brink of a total war over colonial pride, the terrified monarchs and prime ministers look exclusively to the undeniable, neutral power of the American President. You have been asked to arbitrate the dispute and avert a world war. How will you wield your immense influence?',
        choices: [
            {
                text: 'Arbitrate impartially and harshly. Force both empires to completely compromise, drawing a new map that creates a massive neutral buffer zone administered by an international coalition.',
                effects: { international: 25, publicOpinion: 15, progressive: 10, congress: 5 },
                flags: { africanMediation: true },
                feedback: {
                    title: 'The Peacemaker Supreme',
                    immediate: 'Summoning the ambassadors to the Oval Office, you threaten total economic destruction to anyone who fires another shot. Both powers accept your arbitration immediately.',
                    national: 'Your prestige soars to mythological levels. The American people are immensely proud to be the global guardians of peace and reason.',
                    international: 'War is averted narrowly. A massive international territory is carved out in Africa, serving as a buffer and a monument to your diplomacy.',
                    longTerm: 'You are hailed globally as the greatest statesman of the century. You proved that American soft power can stop wars before they start.'
                }
            },
            {
                text: 'Side strictly with democratic France against autocratic Germany. Use the crisis to explicitly set a normative standard that democracies will always receive American backing.',
                effects: { international: -10, progressive: 15, military: 15, congress: 10, economy: -5 },
                flags: { favoredFrance: true },
                feedback: {
                    title: 'The Ideological Stance',
                    immediate: 'You publicly condemn German aggression, sanction their economy, and quietly move the Atlantic Fleet to the coast of France as a warning.',
                    national: 'You take a firm moral stand that resonates with progressive idealists who view autocracy as the root of all conflict.',
                    international: 'Germany is infuriated, humiliated, and forced to retreat completely. France is eternally grateful, forging an unbreakable bond with America.',
                    longTerm: 'You averted war, but permanently polarized Europe. Germany begins to view America not as a neutral arbiter, but as an existential threat to its empire.'
                }
            },
            {
                text: 'Use the crisis to end imperialism. Demand that both European powers completely withdraw from the disputed territory, granting it immediate independence as a new republic.',
                effects: { progressive: 30, international: -20, publicOpinion: 5, congress: -10, economy: -10 },
                flags: {},
                feedback: {
                    title: 'The Anti-Colonial Crusader',
                    immediate: 'You shock the European diplomats by declaring that "the era of dividing the world from drawing rooms is over." You demand total independence for the region.',
                    national: 'Conservatives call you incredibly naïve, but progressives celebrate this bold strike against the evils of European colonialism.',
                    international: 'Britain, France, and Germany are universally outraged by your interference in their "property." They withdraw to avert war, but despise you.',
                    longTerm: 'You birth a new free nation in Africa, sparking anti-colonial movements worldwide. The European empires realize their days are numbered under American hegemony.'
                }
            }
        ]
    },
    {
        id: 'pan_american_war',
        category: 'Global Conflict',
        title: 'The South American Coalition',
        context: '1919: By constantly expanding its economic hegemony, dictating peace terms globally, and building an unstoppable navy, America has unintentionally terrified its southern neighbors.',
        description: 'Fearing eventual, total US subjugation and cultural erasure, an unprecedented and highly militarized coalition of Argentina, Brazil, and Chile (the "ABC powers") form a powerful alliance. They implicitly threaten US shipping lanes in the Caribbean and demand a reduction of American naval presence in the Southern Hemisphere. How do you respond to this defiance?',
        choices: [
            {
                text: 'Deploy the Great White Fleet to crush their spirit. Sail the entire armada into South American waters to intimidate them into disarming and dissolving their alliance immediately.',
                effects: { military: 25, international: -30, publicOpinion: 15, economy: -5, congress: 15 },
                flags: { gunboatDiplomacy: true },
                feedback: {
                    title: 'Ultimate Gunboat Diplomacy',
                    immediate: 'The sky darkens with coal smoke as the terrifying US fleet drops anchor outside Rio de Janeiro, guns trained on the capital in a silent ultimatum.',
                    national: 'The nation rallies behind this awe-inspiring show of absolute force. Critics are drowned out by patriotic fervor.',
                    international: 'The ABC coalition shatters instantly in sheer terror. They disarm and sign humiliating apologies to the United States.',
                    longTerm: 'You maintain absolute, unquestioned military dominance over the entire hemisphere, but you rule South America through sheer terror rather than brotherhood.'
                }
            },
            {
                text: 'Sign a mutual non-aggression and prosperity pact. Treat the ABC powers as absolute equals, dissolving their fears through deep economic integration and shared power.',
                effects: { international: 35, publicOpinion: -10, congress: -15, progressive: 25, economy: 10 },
                flags: { mutualPact: true },
                feedback: {
                    title: 'Hemispheric Equality',
                    immediate: 'You travel down to meet their presidents, shocking the world by treating them as absolute peers rather than subordinates to be managed.',
                    national: 'Imperialists and naval commanders are furious at what they perceive as your cowardly weakness in the face of an inferior threat.',
                    international: 'A new framework of genuinely equal, sovereign nations is born. The coalition transforms into an economic union rather than a military alliance.',
                    longTerm: 'You secure a lasting, genuine, and unbreakable peace in the Americas based on mutual respect, creating an impregnable continental fortress of democracies.'
                }
            },
            {
                text: 'Fund internal coups. Use the newly formed intelligence services to quietly funnel money to generals and politicians in the ABC nations who are friendly to US interests.',
                effects: { economy: 5, military: 5, international: -10, progressive: -20, publicOpinion: -5 },
                flags: {},
                feedback: {
                    title: 'The Shadow Empire',
                    immediate: 'You publicly ignore their alliance while quietly unleashing agents with briefcases full of cash to systematically unravel their governments from within.',
                    national: 'The American public pays little attention as South American politics suddenly become incredibly chaotic and fluid.',
                    international: 'Within months, "pro-American" dictators seize power in two of the three nations, immediately dissolving the hostile alliance.',
                    longTerm: 'You destroy the threat without firing a shot, but you inaugurate a dark era of American covert regime change that poisons democracy in Latin America.'
                }
            }
        ]
    },
    {
        id: 'great_american_exposition',
        category: 'Domestic Policy',
        title: 'The Zenith of the Republic',
        context: '1920: The end of your second term approaches. Under your leadership, America has miraculously avoided the horrors of global conflict, becoming richer, stronger, and more advanced than any nation in recorded human history.',
        description: 'To showcase this unprecedented American achievement to the globe, you authorize a massive, glittering World\'s Fair—the "Great American Exposition"—in Washington D.C. As millions pour into the gleaming pavilions of glass and steel, you prepare to deliver your final, legacy-defining farewell address to the nation and the world. What is your central message?',
        choices: [
            {
                text: 'Deliver a transcendent vision of endless human progress, science, and universal rights. Declare that America\'s wealth will be used to uplift all of mankind into a new enlightened age.',
                effects: { progressive: 25, publicOpinion: 20, international: 20, economy: 10 },
                flags: { expoProgress: true },
                feedback: {
                    title: 'The City of Tomorrow',
                    immediate: 'As you speak before the glittering "Tower of Light," millions weep openly. You paint a picture of a future free from poverty, disease, and war.',
                    national: 'The nation feels invincible, deeply proud of not just its wealth, but its soul. The populace is united in hope for the future.',
                    international: 'The world looks to America as the vanguard of humanity, deeply inspired by your soaring, peaceful rhetoric.',
                    longTerm: 'Your presidency is universally regarded as a true Golden Age. You leave office as a beloved icon of peace, progress, and human flourishing.'
                }
            },
            {
                text: 'Deliver a thundering celebration of supreme American power, military might, and unassailable hegemony. Declare the dawn of the "American Century," warning the world to never cross the Titan.',
                effects: { military: 25, congress: 20, publicOpinion: 15, international: -15, economy: 10 },
                flags: { expoPower: true },
                feedback: {
                    title: 'The Unstoppable Empire',
                    immediate: 'You speak amidst a staggering display of dreadnoughts, artillery, and zeppelins. Your voice echoes with absolute, chilling authority.',
                    national: 'Patriotism reaches a fever pitch never before seen. The crowd roars its approval for the strongest nation to ever exist.',
                    international: 'Rivals and empires are deeply intimidated into submission. The world knows that to challenge the United States is to invite total annihilation.',
                    longTerm: 'You leave behind an unstoppable, heavily armed global empire. Your legacy is one of absolute dominance, securing American supremacy for centuries.'
                }
            },
            {
                text: 'Deliver a somber, philosophical warning. Remind the people that all great empires fall when they succumb to hubris, greed, and the temptation of foreign entanglements.',
                effects: { progressive: 10, congress: -10, publicOpinion: 5, international: 10, military: -10 },
                flags: {},
                feedback: {
                    title: 'The Washington Warning',
                    immediate: 'You shock the jubilant crowd by delivering a deeply serious, melancholy sermon on the dangers of pride, consumerism, and overreach in an era of plenty.',
                    national: 'The initial reaction is confused silence, followed by deep contemplation. The press ponders your words for years to come.',
                    international: 'Foreign philosophers and leaders praise your extraordinary wisdom and restraint, noting that only a true statesman warns his people at their peak.',
                    longTerm: 'While seen as a buzzkill in the moment, your farewell address becomes a legendary, prophetic text studied by generations of future presidents navigating American power.'
                }
            }
        ]
    }
];
