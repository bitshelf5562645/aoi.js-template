module.exports.variables = ({
    
    //==== Stability building block ====//
    prefix: "b!",
    
    //==== Economy building block UwU ====//
    money: 0,
    
    //==== Servercount goal ====//
    goal: 90,
    
    //==== Lottery ticket variables ====//
    ticket_cost: 3000,
    ticket_amount: 0,
    
    //==== Animal variables ====//
    boar_amount: 0,
    boar_cost: 10000,
    
    //==== TOP.GG vote API key ====//
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2MDUxNTgxMTAwMDU4MjE2NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE0MjY0ODIwfQ.R4eS-EBI8BcBhUfqt3EGWROcCbM2JwF12dZJy7gAKps",
   
    //==== More animal variables ====//
    salmon_amount: 0,
    salmon_cost: 7000,
    trout_amount: 0,
    trout_cost: 7000,
    deer_amount: 0,
    deer_cost: 10000,
    
    //==== Bank upgrade variables ====//
    sum_small_bank_upgrade_cost: 15000,
    small_bank_upgrade_sum: 10000,
    sum_medium_bank_upgrade_cost: 40000,
    medium_bank_upgrade_sum: 30000,
    sum_big_bank_upgrade_cost: 90000,
    big_bank_upgrade_sum: 70000,
    sum_giant_bank_upgrade_cost: 190000,
    giant_bank_upgrade_sum: 150000,
    multi_small_bank_upgrade_cost: 40000,
    small_bank_upgrade_multi: "1.1",
    multi_medium_bank_upgrade_cost: 80000,
    medium_bank_upgrade_multi: "1.3",
    multi_big_bank_upgrade_cost: 100000,
    big_bank_upgrade_multi: "1.5",
    multi_giant_bank_upgrade_cost: 200000,
    giant_bank_upgrade_multi: 2,

    //==== B!hunt items ====//
    hunting_rifle_amount: 0, 
    hunting_rifle_cost: 20000,
    
    
    //==== Verification variables ====//
    verified: "",
    captcha: "**%20&&",
    verificationchannel: "",
    
	//==== Customizable color ====//
	color: 'f1c40f',

    //==== Prestige booster variable ====//
	boostAmount: 1,
    
    //==== Chatbot ====//
	chatbot: 'off',
	chatChannel: '',

    //==== Callback variables, standard values are a channel to reduce console spam ====//
	welcome: '815267089400332319',
	logschannel: '815267089400332319',

	//==== Welcome and Goodbye variables ====//
	welcomeMessage: `The user has just joined the server, everyone please give them a warm welcome!`,
	goodbyeMessage: `This user has just left the server, they will be missed.`,

    
    //==== B1fish items ====//
	fishing_rod_cost: 15000,
	fishing_rod_amount: 0,

    //==== Discontinued variables ====//
	one_point_one_boost: 5000,
	one_point_two_boost: 10000,
	one_point_three_boost: 20000,
	one_point_four_boost: 30000,
	one_point_five_boost: 60000,
	one_point_six_boost: 100000,
	one_point_seven_boost: 150000,
	one_point_eight_boost: 200000,
	one_point_nine_boost: 250000,
	two_point_zero_boost: 300000,

    //==== Stores the important things for B!search, B!lottery and B!gift, the names are in order. ====//
	options: '',
    whatyouwon: "",
    hasGiftedSomething: "false",

  //==== B!rob protection ====//  
  lock_cost: 10000,
  lock_amount: 0,
  lock_equipped: "false",

  //==== More discontinued items ====//
  cheap_fishing_rod_UsedToBeCost: 2000,
  cheap_fishing_rod_UsedToBeAmount: 0,
  cheap_hunting_rifle_UsedToBeCost: 3000,
  cheap_hunting_rifle_UsedToBeAmount: 0,
    
  //==== Bank variables ====//
  deposit_max: 10000,
  deposited: 0,
    
  //==== Prestige variables ====//
  prestiges: 0,
  prestige_required_money: 300000,
  prestige_multiplier: 1,
   
  //==== Other shop items ====//
  money_crate_amount: 0,
  money_crate_cost: 5000,
    
  bittytrophy_cost: 1000000,
  bittytrophy_amount: 0,
    
  bittycoinsole_amount: "0",
  bittycoinsole_cost: "7000",
    
    
  //==== B!staffpoll variables ====//
  yesvotes: 0,
  novotes: 0,
  pollmessage: "",
  hasvoted: "false",
    
  //==== B!bio variables ====//
  biomessage: "This user's bio has not been set.",
  bioyt: "Not set.",
  biotwitch: "Not set.",
    
  //==== BittyBadge Items ====//
  easter_egg_has_expired: "NOT FOR SALE ANYMORE!",
  easter_egg_amount: 0,
  easter_egg_bittybadge: "",
  easter_egg_emoji: "<:Egg_BittyBadge:826458295081762826>",
  first_steps_bittybadge: "",
  first_steps_emoji: "<:first_steps_BittyBadge:826793624594677801>",
  stonks_bittybadge: "",
  stonks_emoji: "<:Stonks_BittyBadge:827106087505362944>",
  actual_stonks_bittybadge: "",
  actual_stonks_emoji: "<:Stonks_BittyBadge:827106087505362944>",
  music_bittybadge: "",
  music_emoji: "<:Vibin_BittyDollar_BittyBadge:828572766075617300>",
  lottery_bittybadge: "",
  lottery_emoji: "<:Double_BittyDollars_BittyBadge:828566794163453962>",
  prestige_bittybadge: "",
  prestige_emoji: "<:Prestige_BittyBadge:828570506239410206>",
  gift_bittybadge: "",
  gift_emoji: "<:BittyGift_BittyBadge:828568910341079041>",
  calendar_bittybadge: "",
  calendar_emoji: "<:Bittycalendar_BittyBadge:828567240130691122>",
  brain_bittybadge: "",
  brain_emoji: "<:BittyBrain_BittyBadge:828574538656251925>",
  rainbow_bittybadge: "",
  rainbow_emoji: "<:Rainbow_BittyDollar:828646239234818079>",
  half_bittybadge: "",
  half_emoji: "<:Half_BittyDollar:828646105646497804>",
  incognito_bittybadge: "",
  incognito_emoji: "<:Incognito_BittyDollar:828646176629719060>",
  roulette_bittybadge: "",
  roulette_emoji: "<:BittyRoulette:828646047765102612>",
  star_coin_bittybadge: "",
  star_coin_emoji: "<:StarCoin:845379592301838435>",
  
  
  //==== Quest booleans ====//
  quest1done: "false",
  quest2done: "false",    
  quest3done: "false",
  quest4done: "false", 
  quest5done: "false",
  quest6done: "false", 
  quest7done: "false",
  quest8done: "false", 
  quest9done: "false",
  quest10done: "false", 
  quest11done: "false",
  quest12done: "false", 
    
    
  //==== FAQs ====//
  faq_1: "We have submitted Bittyconomy to multiple bot lists, you can find on what lists we're located by using B!bl or B!botlists, we'd love to see your support!",
  faq_2: "We do want to add them back of course but there's some problems we need to work our way through first.",
  faq_3: "We appreciate the enthusiasm but we're not currently hiring any developers.",
  faq_4: "Normally it won't take very long, mostly won't take longer than 15 minutes after we've discovered the bug, worst case scenario we might have to end up removing the command or adding it to experimental commands.",
  faq_5: "We've developed a special command for you in this scenario! If you find a bug report it to as and make us aware of it's existence by running B!reportbug <bug>, we appreciate your contribution in making Bittyconomy as stable as it can be!",
  faq_6: "Yes! We'd love for you to help, we've developed a special command for this! To help us out with command ideas run B!suggest <suggestion>, we appreciate your contribution in expanding Bittyconomy!",
  faq_7: "Unlike some people might think at first glance, Bittyconomy does not require you to run a special command to start using the economy commands, there is no need to create a profile, you can instantly start by running any economy command. TOBC wishes you happy working!",
  faq_8: "Bittyconomy as you might already know is a bot mainly focused on economy, economy bots seem quite similar in commands and concepts, of course some Bittyconomy commands take inspiration from already existing ideas, this does not mean they're duplicates, TOBC tries to change the commands so they don't ruin the fun.",
  faq_9: "TOBC is short for The Official Bittyconomy Crew, The Official Bittyconomy Crew, of course TOBC for short, is the official development team for Bittyconomy.",
  faq_10: "one Bittycoin is about 1 Eurocent, that means one Euro is 100 Bittycoins.",
    
    //==== These are for tickets ====//
    number_of_tickets: 0,
    ticket_convo: "This is the start of the ticket.",
    ticket_author: "",
    category: "",
    
    // ==== AFK vars ==== //
    // stores IF the user is AFK //
    afk: "false",
    // Stores the user's AFK reason //
    afk_message: "",
    
    // ==== these vars are for guess the number ==== //
    
   winning_number: "Guess the number hasn't been set up yet!",
   guess_the_number_channel: "Not set",
    
    // ==== These vars are for counting ==== //
    current_number: 0,
    counting_channel: "",
    last_counter: "",
    // above var stores the user who was the previous counter //
    
    // ==== these vars are for tic tac toe ==== //
    whosturn: "",
    // unlike you'd expect, the above var is NOT for storing who's turn it is, it's used to store who's turn it ISN'T because it was just their turn, this is used with an onlyif so they can't go again after going //
    ttt_layout1: "** **|** **|** **",
	ttt_layout2: "** **|** **|** **",
    ttt_layout3: "** **|** **|** **",
    // the layout vars store the choices the players have made and the standard template //
    // the layout vars are impractical and will not be used, they will remain here as an emergency backup //
    place1: "🆓",
    place2: "🆓",
    place3: "🆓",
    place4: "🆓",
    place5: "🆓",
    place6: "🆓",
    place7: "🆓",
    place8: "🆓",
    place9: "🆓",
    starter: "",
    player: "",
    sign: "❌",
    
    // ==== These vars are for the BittyCoinsole ==== //
    subnautica_unlocked: "Locked!",
    minecraft_unlocked: "Locked!",
    kirby_unlocked: "Locked!",
    friday_unlocked: "Locked!",
    call_unlocked: "Locked!",
    plants_unlocked: "Locked!",
    
    subnautica_cost: "3000",
    minecraft_cost: "2000",
    kirby_cost: "6000",
    friday_cost: "0",
    call_cost: "3000",
    plants_cost: "1500",
    
    subnautica_amount: "0",
    minecraft_amount: "0",
    kirby_amount: "0",
    friday_amount: "0",
    call_amount: "0",
    plants_amount: "0",
    
    subnautica_name: "Subnautica: Below Zero",
    minecraft_name: "Minecraft",
    kirby_name: "Kirby: The disappearance of the BittyCoin",
    friday_name: "Friday Night Funkin'",
    call_name: "Call Of Duty: Coin Ops",
    plants_name: "Plants VS Zombies: Coins Warfare",
    
    kirby_enemy: "",
    kirby_leftoff: "",
    kirby_power: "",
    kirby_stage: "Crypto Plains",
    kirby_progress: "0",
    kirby_boss: "Bitsy Woods",
    //all world / stage names i will use: patched plains --> Crypto Plains, Resolution Road --> Exchange Road, Overload ocean --> Encoded Ocean, Gigabyte Grounds --> Gigacoin Grounds, rythm route --> Bit route, 
    //Clanky / wispy woods --> Bitsy Woods, HOLO Defence API --> Coin Defence API, Susie --> Botty, Mecha Knight --> Mecha Byte, DeDeDe Clone --> DeDeDe Coin, Star Dream --> Star Coin
    
    waddle_dee_power: "you gained no ability!",
    waddle_doo_power: "you gained the Beam ability!",
    birdon_power: "you gained the Feather ability!",
   blade_knight_power: "you gained the Sword ability!",
    cappy_power: "you gained no ability!",
    chilly_power: "you gained the Ice ability!",
    rocky_power: "you gained the Rock ability!",
    simirror_power: "you gained the Mirror ability!",
    
    bitsy_woods_hpstart: "<:hp_start:845026930045616158>",
    bitsy_woods_hp1: "<:hp_full:845027054089273374>",
    bitsy_woods_hp2: "<:hp_full:845027054089273374>",
    bitsy_woods_hp3: "<:hp_full:845027054089273374>",
    bitsy_woods_hp4: "<:hp_full:845027054089273374>",
    bitsy_woods_hp5: "<:hp_full:845027054089273374>",
    bitsy_woods_hpend: "<:hp_end:845029221809782795>",
    bitsy_woods_hpnumber: "1",
    
    coin_defence_api_hpstart: "<:hp_start:845026930045616158>",
    coin_defence_api_hp1: "<:hp_full:845027054089273374>",
    coin_defence_api_hp2: "<:hp_full:845027054089273374>",
    coin_defence_api_hp3: "<:hp_full:845027054089273374>",
    coin_defence_api_hp4: "<:hp_full:845027054089273374>",
    coin_defence_api_hp5: "<:hp_full:845027054089273374>",
    coin_defence_api_hpend: "<:hp_end:845029221809782795>",
    coin_defence_api_hpnumber: "1",
    
    botty_hpstart: "<:hp_start:845026930045616158>",
    botty_hp1: "<:hp_full:845027054089273374>",
    botty_hp2: "<:hp_full:845027054089273374>",
    botty_hp3: "<:hp_full:845027054089273374>",
    botty_hp4: "<:hp_full:845027054089273374>",
    botty_hp5: "<:hp_full:845027054089273374>",
    botty_hpend: "<:hp_end:845029221809782795>",
    botty_hpnumber: "1",
    
    mecha_byte_hpstart: "<:hp_start:845026930045616158>",
    mecha_byte_hp1: "<:hp_full:845027054089273374>",
    mecha_byte_hp2: "<:hp_full:845027054089273374>",
    mecha_byte_hp3: "<:hp_full:845027054089273374>",
    mecha_byte_hp4: "<:hp_full:845027054089273374>",
    mecha_byte_hp5: "<:hp_full:845027054089273374>",
    mecha_byte_hpend: "<:hp_end:845029221809782795>",
    mecha_byte_hpnumber: "1",
    
    dedede_coin_hpstart: "<:hp_start:845026930045616158>",
    dedede_coin_hp1: "<:hp_full:845027054089273374>",
    dedede_coin_hp2: "<:hp_full:845027054089273374>",
    dedede_coin_hp3: "<:hp_full:845027054089273374>",
    dedede_coin_hp4: "<:hp_full:845027054089273374>",
    dedede_coin_hp5: "<:hp_full:845027054089273374>",
    dedede_coin_hpend: "<:hp_end:845029221809782795>",
    dedede_coin_hpnumber: "1",
    
    star_coin_hpstart: "<:hp_start:845026930045616158>",
    star_coin_hp1: "<:hp_full:845027054089273374>",
    star_coin_hp2: "<:hp_full:845027054089273374>",
    star_coin_hp3: "<:hp_full:845027054089273374>",
    star_coin_hp4: "<:hp_full:845027054089273374>",
    star_coin_hp5: "<:hp_full:845027054089273374>",
    star_coin_hpend: "<:hp_end:845029221809782795>",
    star_coin_hpnumber: "1",
    
    message_after_boss: "You can now move on to the next world!",
    
    
});