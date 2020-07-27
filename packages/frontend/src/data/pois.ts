import { WaypointType } from '../enums';

import { PointOfInterestWaypoint } from './waypoints';

const pointsOfInterest: PointOfInterestWaypoint[] = [
  {
    name: 'Gate to Kachirho Region',
    description: 'This is the gate back to the Kachirho region of Kashyyyk.',
    planet: 'kashyyyk_hunting',
    location: [658, 0, 668],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Aakuan Champion's Cave",
    description: 'The Aakuan clan sit within their cave plotting their next highly illegal activity.',
    planet: 'talus',
    location: [5939, 0, 4562],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Abandoned Rebel Base',
    description:
      'Once the primary base of operations for the Rebel Alliance. This base was deserted for the Great Massassi Temple shortly before the Battle of Yavin.',
    planet: 'dantooine',
    location: [-6858, 0, 5725],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Afarathu Cave',
    description:
      'The vicious Afarathu terrorist organization has used this cave for many years as a staging point for their strikes on Corellian interests.',
    planet: 'corellia',
    location: [-2483, 0, 2907],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Agrilat Swamp',
    description:
      'The Agrilat Swamp is an amazing example of planetary thermodynamics with hundreds of geysers. Over millions of years, the mineral deposits of these geysers formed the crystals which make the region famous.',
    planet: 'corellia',
    location: [1402, 0, 3802],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Amidala's Beach",
    description: "A favorite resting place of Naboo's most famous rulers.",
    planet: 'naboo',
    location: [-5828, 0, -93],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Lost Aqualish War Party's Cave",
    description:
      'An aqualish war party that got lost in the wilderness of Talus managed to find a natural cave. They discovered that the cave was the perfect staging ground for their raids and took up permanent residence.',
    planet: 'talus',
    location: [-4268, 0, -1432],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Giant Bark Mite Cave',
    description:
      'Giant Bark Mites have discovered a natural cave that is damp and warm making it a perfect nursery for their brood. Normally docile herbivores, these insects can become very dangerous when protecting their lair.',
    planet: 'rori',
    location: [3584, 0, 5419],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Imperial Claw Station (Deep Space)',
    description:
      "Imperial Claw Station (Deep Space)\n\nFaction: Imperial\n\nThis Imperial Station can grant access to a hyperspace route to deep space.  The route is highly classified, however, and the Empire will allow only the most advanced, prestigious pilots to enter Deep Space.\n\nInstructions\n\nTo travel to Deep Space (PvP), approach the Imperial Claw Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_endor',
    location: [6200, 5000, 6000],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Last Nav Station (Deep Space)',
    description:
      "Last Nav Station (Deep Space)\n\nFaction: Neutral\n\nThe old Pilot's Guild was once the authority in all matters of space travel, but since it has been disbanded by order of the Emperor, the only space station maintained by former Pilot's guild members is this lone station on the edge of space.\n\nInstructions\n\nTo travel to Deep Space (PvP), approach the Last Nav Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_dathomir',
    location: [4000, 200, -4700],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Station: Deep Space',
    description:
      "Deep Space Station\n\nFaction: Rebel\n\nThe Rebel Alliance has discovered a hyperspace route to an area of Deep Space.  Only the most skillful and prestigious pilots can be trusted with the knowledge that the Rebel Alliance has constructed a base in Deep Space.\n\nInstructions\n\nTo travel to Deep Space (PvP), approach the Deep Space Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_dantooine',
    location: [-4200, -3000, -6000],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Berken's Flow",
    description:
      "So named after the Mustafarian explorer who found the region, Berken's Flow was once the richest source of natural resources in the galaxy. Years of over mining and major planetary shifts have left the region fairly devoid of resources though. Only the smallest of mining operations take place in this region anymore.",
    planet: 'mustafar',
    location: [2363, 59, 1290],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Binyare Pirate Bunker',
    description: 'The Binyare Pirates have long operated from their stronghold on Talus.',
    planet: 'talus',
    location: [5526, 0, -4073],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Blackguard',
    description:
      'An Imperial Captain has gone rogue and taken his Star Destroyer with him. Having jettisoned most of his crew and Star Destroyer detachment he is left with a small contingent of forces fiercely loyal to him.',
    planet: 'space_nova_orion',
    location: [-7000, -7000, 7000],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Downed Blood Razor's Transport",
    description: "A crash site for one of the Blood Razor's ships.",
    planet: 'lok',
    location: [3703, 0, 2274],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'The Temple of the Blueleaf',
    description:
      'The Temple of Blueleaf is an ancient structure built long ago by the Massassi. Currently it is a hive for the strange insectoids, the Klikniks.',
    planet: 'yavin4',
    location: [-976, 0, -2039],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Borgle Bat Cave',
    description: 'This deep natural crevasse is home to an extraordinary number of Borgle Bats.',
    planet: 'rori',
    location: [902, 0, -4933],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'The Burning Plains',
    description:
      'The Burning Plains is a thin layer of crust floating on a sea of molten lava. Geologists expect that a major earthquake could cause the entire region to sink, leaving a gigantic lava ocean in its place.',
    planet: 'mustafar',
    location: [-374, 18, 2332],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Canyon Corsair's Stronghold",
    description: "The stronghold of the Canyon Corsair's pirate clan.",
    planet: 'lok',
    location: [-3792, 0, -3904],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'The Central Volcano',
    description:
      "The lava that flows out of the great central volcano of Mustafar isn't considered to be of very high quality. Its resources are some of the poorest on Mustafar. But the volcano is an invaluable landmark on an ever changing planet, and many a lost miner has been thankful for its massive presence to help guide them home.",
    planet: 'mustafar',
    location: [-572, 378, 775],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Cobral Hideout',
    description: 'The Cobral space pirates plan many of their crimes from within their fortified bunker.',
    planet: 'rori',
    location: [5464, 0, 5045],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Station: Alliance Station I',
    description:
      "Alliance Station I\n\nThe Rebel forces present in Corellia Space have opened its station to members of the Alliance, wishing to declare themselves for the greater good of the fight against the Empire.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Rebel Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_corellia',
    location: [-1463, 318, -1012],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Silicaceous Asteroid 1',
    description: 'Silicaceous Asteroid 1',
    planet: 'space_corellia',
    location: [-4048, -2594, -3252],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Silicaceous Asteroid 2',
    description: 'Silicaceous Asteroid 2',
    planet: 'space_corellia',
    location: [76, -159, 796],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Iron Asteroid 1',
    description: 'Iron Asteroid 1',
    planet: 'space_corellia',
    location: [1794, 521, -1763],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Silicaceous Asteroid 3',
    description: 'Silicaceous Asteroid 3',
    planet: 'space_corellia',
    location: [2790, 2606, 3265],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Silicaceous Asteroid 4',
    description: 'Silicaceous Asteroid 4',
    planet: 'space_corellia',
    location: [3668, 4466, 3722],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Station: Alliance Station II',
    description:
      "Alliance Station II\n\nThe Rebel forces present in Corellia Space have opened its station to members of the Alliance, wishing to declare themselves for the greater good of the fight against the Empire.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Rebel Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_corellia',
    location: [-7132, 2340, 2014],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Rayless Lantern',
    description:
      'Rayless Lantern\n\nBelonging to the Binayre thugs, the Rayless Lantern manifests a foreboding aura, an essence created by the thieves and assassins living within it. The Binayre do not welcome visitors and abhor oppression and threats from their favored enemies, the CorSec.',
    planet: 'space_corellia',
    location: [4972, 5055, 5509],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Rubicund Eye',
    description:
      'Rubicund Eye\n\nThe Black Sun terrorize the Rubicund Eye with swift maneuverability and hard-hitting missiles. Most choose to stay away from the Rubicund Eye, fearing that the Black Sun will descend upon them like a suffocating blanket of ash. It would be unwise to travel here alone.',
    planet: 'space_corellia',
    location: [-2186, 5747, 5352],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: The Void',
    description:
      'The Void\n\nDual pirate factions, the Hidden Daggers and the Hutts, patrol the Void, seeking solitary freighters and civilians to destroy and loot. The origin of the name and why the Hidden Daggers and Hutt choose to be at war remains a mystery even today.',
    planet: 'space_corellia',
    location: [4627, -1002, -905],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Secure Route ID-5N',
    description:
      'Secure Route ID-5N\n\nRoute ID-5N, additionally named the "New Route", is policed by the highly-skilled CorSec, planet Corellia\'s own police force. Running from both of Corellia and Talus\' space stations, Route ID-5N provides quick, safe travel for everyone.',
    planet: 'space_corellia',
    location: [30, -4389, -3442],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Pirate's Shadow",
    description:
      "Pirate's Shadow\n\nThe Pirate's Shadow, an asteroid field named after the cover it brings to attacking holligans, serves as a rallying point for smugglers, pirates and ne'er-do-wells dodging CorSec patrols.",
    planet: 'space_corellia',
    location: [871.573, 3212.14, 4188.53],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Rogue Corsec Base',
    description:
      'Being in charge of both planetary security and law enforcement, the Corsec place a great deal of importance on their base of operations.',
    planet: 'corellia',
    location: [5291, 0, 1494],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Corsec vs. Flail Battle',
    description:
      'The Corsec is always watchful for the criminal element on their worlds. A tip has led a squad to a Flail hideout.',
    planet: 'talus',
    location: [2938, 0, 6004],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Lost Village of Durbin',
    description:
      'This village was once a growing settlement but was overtaken by the wilds of Talus. Now it is shelter for wild creatures of all sorts.',
    planet: 'talus',
    location: [4174, 0, 1162],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Crystal Flats',
    description:
      'The Crystal Flats is a large expanse of volcanic rock. The northern portion of the area is covered with crystals formed from mineral deposits in the lava, giving the entire region its name.',
    planet: 'mustafar',
    location: [-1870, 300, -1471],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Crystal Fountain of Bela Vistal',
    description:
      'Shortly after the founding of Bela Vistal, the people transplanted a crystal geyser from the Agrilat Swamp to the center of their town.',
    planet: 'corellia',
    location: [6760, 0, -5617],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Force Crystal Hunter's Cave",
    description:
      'Dantooine has long been a source for the powerful and mysterious force crystals. A recent expedition onto Dantooine is said to have found a large quantity of the crystal within this cave.',
    planet: 'dantooine',
    location: [-6259, 0, 7336],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Station: Alliance Station I',
    description:
      "Alliance Station I\n\nThe Rebel forces present in Dantooine Space have opened its station to members of the Alliance, wishing to declare themselves for the greater good of the fight against the Empire.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Rebel Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_dantooine',
    location: [5522, 3202, 5997],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Station: Alliance Station II',
    description:
      "Alliance Station II\n\nThe Rebel forces present in Dantooine Space have opened its station to members of the Alliance, wishing to declare themselves for the greater good of the fight against the Empire.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Rebel Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_dantooine',
    location: [-3979, 5432, -4565],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station I",
    description:
      "Empire's Station I\n\nThe Imperial forces present in Dantooine Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_dantooine',
    location: [178, -4785, -6402],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station II",
    description:
      "Empire's Station II\n\nThe Imperial forces present in Dantooine Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_dantooine',
    location: [-2629, 3585, 3269],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Legacy YT Indigo Blue',
    description:
      'Legacy YT Indigo Blue\n\nThe Rebel Alliance invested their pride into their oldest surviving space station, the Legacy YT Indigo Blue. However, the pride soon turned into horror as the Empire dared to move into Dantooine\'s native space and "remove" all who opposed them. Their first target: the Legacy YT Indigo Blue. Crushing the Rebellions origin in Dantooine space, they soon turned to other targets, breaking and converting them or out-right eliminating the "rebel sympathizers". All that is left are the remnants of the Legacy YT Indigo Blue, a spot which has become the center-point of Dantooine\'s traffic.',
    planet: 'space_dantooine',
    location: [-3609, 3357, -963],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Ith'ril Eventide",
    description:
      "Ith'ril Eventide\n\nArea D-504 was immediately changed to \"Ith'ril Eventide\" when he himself, Ith'ril Eventide, leader of the Zel`iphian Slave Traders, came into power. It is wise not to travel to Area D-504 unless under dire circumstances... or business. It has been made apparent that the Zel`iphian Slave Traders do not appreciate visitors.",
    planet: 'space_dantooine',
    location: [4446, -1463, 6485],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Area D-502',
    description:
      'Area D-502\n\nArea D-502 serves as Dantooine\'s "safest" territories. Home to the D-502 Aii`tkian Anthropologists and the O.S.S. D-502 Junk Guild, one can travel here and expect to be left alone. Both the Junk Dealers and the Anthropologists are friendly and never hesitate to lend a helpful hand.',
    planet: 'space_dantooine',
    location: [-7483, 637, 92],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Sserician Eclipse',
    description:
      "Sserician Eclipse\n\nValarian thugs plague the Sserician Eclipse with undaunted ferocity, daring even the Empire to react. It is common to see dogfights brewing among the Empire and Valarians with the remnants of a Rebel Station in the midst. As Dantooine's more dangerous territories, the Sserician Eclipse is an area to be feared and avoided.",
    planet: 'space_dantooine',
    location: [6468, 5916, 4652],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Ebon Essentia',
    description:
      'Ebon Essentia\n\nEbon Essentia, also known as Area E-2, is consumed in a war between the Force Assassins and the Warrens Assault Squad. It is unknown why the two factions continue to war against each other or why it all started. Unless heavily-armed, it is imperative that travelers avoid Area E-2 as decreed by Imperial Law. The Empire chooses to look the other way, it seems, and locals are beginning to wonder why..',
    planet: 'space_dantooine',
    location: [1089, 6132, -3260],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Blacklight Territory',
    description:
      'Blacklight Territory\n\nThis is as dangerous a region of space as any, with the asteroids providing cover for the pirates and criminals seeking to escape Imperial Justice.',
    planet: 'space_dantooine',
    location: [-146.7, -7364.18, 35.2416],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Area D-7s1',
    description:
      'Area D-7s1\n\nNative to Area D-7s1 are droid scavengers, the Detritus Satellites. For the most part, the Detritus Satellites keep to themselves, building their makeshift outpost with old scraps collected from the nearby junk field. Electrical currents power the outpost and provide fellow droids with repairs and shelter.',
    planet: 'space_dantooine',
    location: [1794, 1848, -832],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Dantooine's Second Star",
    description:
      'Dantooine\'s Second Star\n\nNestled in the Ferionic Nebula, the iron planetoid, nicknamed "Dantooine\'s Second Star", is home to the Velocity Mercenaries. Little is known about this small band of thugs. Mostly, they kept to themselves... until the Empire moved into the area. Now, the Velocity Mercenaries launch continuous attacks against the Empire, hoping to drive them out of Area Ferionic 7-IK.',
    planet: 'space_dantooine',
    location: [6707.09, 5439.55, -2720.14],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Wall of Dantooine',
    description:
      'Wall of Dantooine\n\nStretching as far as the eye can see, the Wall of Dantooine is a necessary landmark to any roving traveler. Local miners speculate the obsidian asteroids may be worth a pretty credit or two.',
    planet: 'space_dantooine',
    location: [-5714, 2832, 518],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Dantari Village',
    description:
      'A village inhabited by the native race of Dantooine. The Dantari are a primitive, stone age people who are extremely wary of outsiders.',
    planet: 'dantooine',
    location: [-3929, 0, -5632],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Dantari Village',
    description:
      'A village inhabited by the native race of Dantooine. The Dantari are a primitive, stone age people who are extremely wary of outsiders.',
    planet: 'dantooine',
    location: [-7144, 0, -1053],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Dantari Village',
    description:
      'A village inhabited by the native race of Dantooine. The Dantari are a primitive, stone age people who are extremely wary of outsiders.',
    planet: 'dantooine',
    location: [5655, 0, -589],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Acid Asteroid 1',
    description: 'Acid Asteroid 1',
    planet: 'space_dantooine',
    location: [458, 270, -2794],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Methane Asteroid 1',
    description: 'Methane Asteroid 1',
    planet: 'space_dantooine',
    location: [2145, -268, -2417],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Acid Asteroid 2',
    description: 'Acid Asteroid 2',
    planet: 'space_dantooine',
    location: [-931, 2194, -2755],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Methane Asteroid 2',
    description: 'Methane Asteroid 2',
    planet: 'space_dantooine',
    location: [6263, 6841, -3351],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Acid Asteroid 3',
    description: 'Acid Asteroid 3',
    planet: 'space_dantooine',
    location: [7415, 6701, 3788],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Nebula: Dark Force',
    description:
      'Dark Force Nebula\n\nBase of its operations, the Empire chose the Dark Force nebula for its sense of concealment, protected by mighty fields of asteroids. Individuals seeking aide of the Empire are welcome here. For those who are considered enemies of the Emperor and his ideals, it would be wise to stay far away.',
    planet: 'space_dathomir',
    location: [401, -154, 1759],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Darklighter's Estate",
    description: 'Home of the famed Darklighters of Tatooine.',
    planet: 'tatooine',
    location: [-718, 0, -6683],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station I",
    description:
      "Empire's Station I\n\nThe Imperial forces present in Dathomir Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_dathomir',
    location: [6092, 6223, -6731],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station II",
    description:
      "Empire's Station II\n\nThe Imperial forces present in Dathomir Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_dathomir',
    location: [4842, -5316, -4222],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Witch Blood Territory',
    description:
      'Witch Blood Territory\n\nIn the heart of the Witch Blood Territory festers a group of skilled assassins and thugs. The Witch Blood Clan chooses their victims carefully and it seems that no one is safe from their well-equipped starships and superior maneuvering skills. Travelers would do well in keeping all computer systems alert when traveling through this territory.',
    planet: 'space_dathomir',
    location: [-470, -1501, 308],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Crystal Asteroid 1',
    description: 'Crystal Asteroid 1',
    planet: 'space_dathomir',
    location: [-2708, 90, -971],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Crystal Asteroid 2',
    description: 'Crystal Asteroid 2',
    planet: 'space_dathomir',
    location: [-669, -192, 2539],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Crystal Asteroid 3',
    description: 'Crystal Asteroid 3',
    planet: 'space_dathomir',
    location: [-4876, -1211, 6231],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Crashed Escape Pod',
    description:
      'The drop pod of an Imperial prisoner who traveled too far off course. Nothing is known about the whereabouts of its unfortunate passengers.',
    planet: 'dathomir',
    location: [-4446, 0, 596],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Abandoned Camp',
    description:
      'Located in the dark crevices of the Kkowir Forest, the Abandoned camp remains forgotten and overgrown with the wildlife commonly found in the area. It once belonged to the Empire, its small buildings harboring the workings of unspeakable experiments. Recent rumors suggest that the Abandoned Camp has been brought back to working order. But by who?',
    planet: 'kashyyyk_dead_forest',
    location: [-296, 23, -390],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'The Arena',
    description:
      'Used to train fierce Kerritamba warriors, the Arena can be a place of victory for those who boast prowess in the arts of war. The Arena Champion, Wirartu the Bonesnapper, stands proudly and reigns as the undisputed Hero of the Kerritamba people.',
    planet: 'kashyyyk_dead_forest',
    location: [-290, 28, -184],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Dead Forest Entrance',
    description:
      'The Dead Forest, a small section of the vast Kkowir Forest, bespeaks a haunting terror just beyond the thick haze. The Kerritamba people believe the Dead Forest to be cursed and consumed by the death and decay etched on grey horizon. Even the wind, it is said, howls with the very souls of the dying trees and creatures within the darkness of the Dead Forest. The Sayormi people inhabit the Dead Forest, celebrating the darkness with rituals of voodoo and hunting. It would be wise to avoid the Dead Forest at all costs...',
    planet: 'kashyyyk_dead_forest',
    location: [112, 25, -351],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kkowir Forest Entrance',
    description:
      'The magnificent gate marking the Entrance to the Kkowir Forest leads back to the proud city of Kachirho.',
    planet: 'kashyyyk_dead_forest',
    location: [83, 26, -444],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Nyenthi'Oris Graveyard",
    description:
      "The Nyenthi'Oris Graveyard serves as the final resting place for many Kerritamba and lost adventurers within the Kkowir Forest.",
    planet: 'kashyyyk_dead_forest',
    location: [54, 38, 168],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kerritamba Village',
    description:
      'The Kerritamba Village is home to the Shoartu Tribe, commonly known as the Kerritamba people, and serves as a stopping point for many weary travelers. The proud warrior Chief Kerritamba resides over the village and makes sure that every visitor feels welcome despite the constant frowns and mutterings from the local residents.',
    planet: 'kashyyyk_dead_forest',
    location: [-159, 34, -139],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Mysess Glade',
    description:
      "Home to the Great Tree, or the Spirit of Nyenthi'Oris, the Mysess Glade whispers its great pain in the form of dying trees and decaying roots. The plague has hit the Great Tree and Chief Kerritamba desperately searches for a cure. Is there still hope?",
    planet: 'kashyyyk_dead_forest',
    location: [-71, 39, 111],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Myyydril Caverns',
    description:
      'Myyydril Caverns is the home of the Myyydril Tribe, a band of Wookiees outcasted by the Kerritamba people many years ago. Horrors lurk in the dark caverns and can only be uncovered by the bravest of adventurers. Often times, one can hear the insane laughter of a demented doctor echoing in the halls.',
    planet: 'kashyyyk_dead_forest',
    location: [-247, 38, 327],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'ShadowWeave Caverns',
    description:
      'ShadowWeave Caverns, or more commonly known as the Webweaver Caverns, sits beneath the mighty Nawataa waterfall enticing brave souls to enter. Beware of the Webweaver Spiders as they have a vicious, hungry bite.',
    planet: 'kashyyyk_dead_forest',
    location: [217, 1, 288],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Giant Decay Mite Cave',
    description:
      'Deep within Talus decay mites have managed to grow to immense size. Scientists believe that there is something in the rock of the cave that has triggered these strange changes within the insects.',
    planet: 'talus',
    location: [-5505, 0, -4680],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Deeja Peak Waterfall',
    description: 'These falls are considered by many to be one of the most beautiful sights in all of the galaxy.',
    planet: 'naboo',
    location: [5174, 0, -1550],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Detainment Center',
    description:
      'Once an Imperial holding area for political prisoners this base was captured by the Rebellion. Since then the two sides have been battling over control of this institute.',
    planet: 'talus',
    location: [4963, 0, -5977],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Drall Patriot's Cave",
    description:
      'Not all Dralls believe in the unity of Corellia. Many of them are fighting for Drall independence and it is rumored that one such group of them has taken up residence in this cave as a base of their operations.',
    planet: 'corellia',
    location: [1042, 0, 4193],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Droid Engineer's Cave",
    description:
      'Lok is not only home to any number of pirate clans, but it is also a place where lawless experiments can be conducted without recourse. A droid engineer has taken over this cave to continue his experiments that he was not allowed to conduct on any of the more civilized worlds.',
    planet: 'lok',
    location: [3364, 0, -4923],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Dulok Village',
    description: 'Home to wicked and cruel cousin to the Ewoks.',
    planet: 'endor',
    location: [5921, 0, -2514],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Dulok Village',
    description: 'Home to wicked and cruel cousin to the Ewoks.',
    planet: 'endor',
    location: [-1287, 0, 2904],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Darkveil Eclipse',
    description:
      'The Darkveil Eclipse serves as the central hub for all Black Sun activities. To join the war against the Black Sun, speak with Serissu back at the Tansarii Point Station.',
    planet: 'space_ord_mantell',
    location: [-3250, 3347, -1065],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Station Gamma (Dungeon)',
    description:
      "Station Gamma was once a prominent research facility for Car'das allies. Several years ago, a mysterious entity wiped out those living there. Now, it crawls with deadly droids and an unforgiving tribe bent on keeping Station Gamma for themselves.\n\nDungeon: Combat Levels 3-10",
    planet: 'space_ord_mantell',
    location: [663, -1002, 2039],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station I",
    description:
      "Empire's Station I\n\nThe Imperial forces present in Endor Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_endor',
    location: [5773, -6359, 6976],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Ice Asteroid 1',
    description: 'Ice Asteroid 1',
    planet: 'space_endor',
    location: [-3250, -5480, -6934],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Ice Asteroid 2',
    description: 'Ice Asteroid 2',
    planet: 'space_endor',
    location: [5134, -6373, -777],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Ice Asteroid 3',
    description: 'Ice Asteroid 3',
    planet: 'space_endor',
    location: [737, 1130, 805],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station II",
    description:
      "Empire's Station II\n\nThe Imperial forces present in Endor Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_endor',
    location: [-5716, 7198, 2009],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Linear Miasma',
    description:
      'Linear Miasma\n\nFrequented by the Linear Miasma Scientists, the nebula provides a wealth of information and research for the lone band, belonging to the Endorian Researchers Guild. The scientists prove to be a friendly bunch time and time again despite the presence of the Spice Pirates, the Zynt`aia Spice Guardians, of whom reside nearby.',
    planet: 'space_endor',
    location: [-479, 956, 600],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Declorian Territory',
    description:
      'Declorian Territory\n\nZynt`aia Spice Guardians terrorize the Declorian Territory with a fierce fist. Often times, unless business is mentioned, the Spice Guardians are not open to having visitors.',
    planet: 'space_endor',
    location: [4091, -5830, -458],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Onyx Beacon',
    description:
      'Onyx Beacon\n\nHome to the Blacklight Pirates, the Onyx Beacon serves as an origin for "seedy" business. Little else is known about the Onyx Beacon as it is jealously guarded by its inhabitants.',
    planet: 'space_endor',
    location: [6447, -2491, 1042],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Erran Sif',
    description:
      'Wanted by both the Empire and Rebellion, Erran Sif has held herself up within her bunker with only her most trusted associates.',
    planet: 'talus',
    location: [2145, 0, -5576],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'The Temple of Exar Kun',
    description:
      'In a time long past, this was a place of great evil and the palace of Sith Lord Exar Kun. Even though Exar Kun was destroyed long ago by the Jedi, many who walk within its halls say that they feel an evil presence still lurking in the shadows.',
    planet: 'yavin4',
    location: [5163, 0, 5539],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Giant Fynock Cave',
    description:
      'Fynocks and their distant relatives are a common nuisance. A recent find of a natural cave has revealed a huge flock of these pests dwelling within.',
    planet: 'talus',
    location: [1508, 0, -858],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Fort Tusken',
    description:
      'One of the original settlements on Tatooine. Shortly after its founding Fort Tusken was attacked and taken over by Sand People giving rise to the name Tusken Raider. To this day the fort is a well known stronghold of the Sand People.',
    planet: 'tatooine',
    location: [-3980, 0, 6311],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Garyn Raider's Bunker",
    description: "The Garyn Raider's mountain stronghold is home to some of the most nefarious pirates on Rori.",
    planet: 'rori',
    location: [-6004, 0, -1851],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Grand Theater of Vreni Island',
    description: 'This outdoor theater is the pride of the citizens of Vreni Island.',
    planet: 'corellia',
    location: [-5421, 0, -6212],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'The Great Maze of Lok',
    description: 'The maze was built long ago by a visiting noble on a hunting expedition.',
    planet: 'lok',
    location: [3824, 0, -465],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Gungan Sacred Place',
    description:
      'One of the most important places in Gungan culture. Many Gungans make a pilgrimage to this location every year to pay their respect to their rich history.',
    planet: 'naboo',
    location: [-2104, 0, -5408],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Nebula: Heart of Dathomir',
    description:
      'Heart of Dathomir\n\nThe locals call it the "Heart of Dathomir". Even from a distance, the palpitating gasses of the nebula itself seem to have a mind of its own. No one ventures near this infamous, dark cloud. Too many have tried and have never returned. It is rumored that quick-killing assassins swarm within this bloody miasma, waiting for their next victim. Molten rocks, infused with the rage of many lost souls, and red energy spill from the nebula, warning all to steer clear.',
    planet: 'space_dathomir',
    location: [-7552, -7424, -7568],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Rebel Hideout',
    description:
      "The Rebel Alliance's main base of operations. Many of the heroes of the Rebellion work from within this secret base.",
    planet: 'corellia',
    location: [-6584, 0, 5915],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Freedom Station',
    description:
      "This space station has thus far been tolerated within the Corellia system, but there's no question that should it draw the might of the Empire to the system, Corellia's own forces would maintain their neutrality and do nothing to defend it.",
    planet: 'space_heavy1',
    location: [-6000, 0, 0],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperdrive Research Facility',
    description:
      'This facility is home to some of the top hyperdrive research in the galaxy. Both the Imperial and Rebellion struggle to control this valuable resource.',
    planet: 'rori',
    location: [-1070, 0, 4542],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Imperial Encampment',
    description:
      'A fortified Imperial stronghold that has been site for many conflicts between the Rebellion and the Empire in an attempt to control this important strategic location.',
    planet: 'rori',
    location: [-5651, 0, -5660],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Imperial Outpost',
    description:
      'It is well known that planets in the Corellian sector are sympathetic towards the cause of the Rebel Alliance. The Empire has placed well maintained fortified garrisons on these worlds to attempt to squelch any uprising before it can take place.',
    planet: 'talus',
    location: [-2193, 0, 2494],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Imperial vs. Gungan Battle',
    description:
      "The Empire's policy of extermination has led to a number of clashes between the Imperial forces and Gungan resistance fighters.",
    planet: 'naboo',
    location: [4825, 0, -3820],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Imperial vs. Rebel Battle',
    description:
      'On worlds where the Empire only has a tenuous grasp at best, it is quite common for there to be pitched battles between Imperial and Rebel forces.',
    planet: 'talus',
    location: [-2595, 0, 3724],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Jabba's Palace",
    description: 'The residence of the nefarious crime lord, Jabba the Hutt.',
    planet: 'tatooine',
    location: [-5856, 0, -6183],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Janta Stronghold',
    description: 'A Janta Dantari stronghold.',
    planet: 'dantooine',
    location: [6994, 0, -4110],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Jawa Traders',
    description: 'A well known meeting place of Jawa traders and nomads.',
    planet: 'tatooine',
    location: [-6141, 0, 1854],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Jedi Temple Ruins',
    description:
      'Long ago this was the Jedi Training center under Jedi Master Vodo Siosk-Baas. This temple is also where the infamous Exar Kun first received his formal training before turning to the dark side. But that was long ago and is now nothing more than a ruin.',
    planet: 'dantooine',
    location: [4258, 0, 5374],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Jinda Ritualist's Cave",
    description:
      'Much like their Korga brothers, the Jinda have also found a natural cave that is perfect for hunting expeditions in the wilds of the forest.',
    planet: 'endor',
    location: [-1695, 0, -56],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Arcona Compound',
    description: 'Arcona Compound',
    planet: 'kashyyyk_hunting',
    location: [-499, 0, 841],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hracca Glade Gate Camp',
    description:
      'This Rodian hunting camp keeps watch over the entrance to the Hracca Glade. They might claim to be trying to keep the creatures of the glade from escaping into Etyyy, but in truth they are trying to keep this elite hunting area to themselves.',
    planet: 'kashyyyk_hunting',
    location: [-3, 0, -221],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Etyyy Rodian Hunting Camp',
    description: 'This is the main Rodian hunting camp in the Etyyy region of Kashyyyk.',
    planet: 'kashyyyk_hunting',
    location: [240, 0, 524],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kashyyyk Methane Asteroid',
    description: 'Methane is a rare resource in the Kashyyyk star system.',
    planet: 'space_kashyyyk',
    location: [-824, -2002, -999],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kashyyyk Organometallic Asteroid',
    description: 'Organometallic resources are plentiful in the Kashyyyk star system.',
    planet: 'space_kashyyyk',
    location: [-2339, -5828, -5821],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kashyyyk Organometallic Asteroid',
    description: 'Organometallic resources are plentiful in the Kashyyyk star system.',
    planet: 'space_kashyyyk',
    location: [-5951, -14, 1034],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kashyyyk Organometallic Asteroid',
    description: 'Organometallic resources are plentiful in the Kashyyyk star system.',
    planet: 'space_kashyyyk',
    location: [3340, 2308, 3473],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kashyyyk Organometallic Asteroid',
    description: 'Organometallic resources are plentiful in the Kashyyyk star system.',
    planet: 'space_kashyyyk',
    location: [3011, 1962, 4304],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Blackscale Slaver Compound',
    description: 'Blackscale Slaver Compound',
    planet: 'kashyyyk',
    location: [409, 17, 752],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Chiss Poachers' Base",
    description:
      "Unlike the Rodian Hunters who pay the Empire for the opportunity to hunt creatures on Kashyyyk, the Chiss are 'poachers' who take what they wish without asking... or even thinking about the repercussions of breaking galactic law. The Chiss' vast financial holdings keeps their supply lines running smoothly and their access to numerous independent shipyards keep their fighting vessels on constant patrol.",
    planet: 'space_kashyyyk',
    location: [-6825, 763, 2065],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kkowir Forest',
    description: 'Kkowir Forest',
    planet: 'kashyyyk',
    location: [-760, 17, 241],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "The Gotal Pirates' Base",
    description:
      'The Gotal pirate organization has parked this large warship near the edge of the Kashyyyk star system. This outpost is a command post for raids against civilian traffic. Its position provides a generous tactical advantage to the Gotal, and they use it as often as they can.',
    planet: 'space_kashyyyk',
    location: [-5950, 2700, 4575],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Etyyy Hunting Grounds',
    description: 'Etyyy, Hunting Grounds',
    planet: 'kashyyyk',
    location: [205, 28, -373],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Independent Slavers' Base",
    description:
      'The Trandoshans run the largest slaving ring in the Kashyyyk system and enjoy complete protection by the Empire. Even so, numerous independent interests have begun to arrive in Kashyyyk - looking to take their piece of a growing business. ',
    planet: 'space_kashyyyk',
    location: [-6830, -350, 4200],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kachirho',
    description: 'Kachirho',
    planet: 'kashyyyk',
    location: [-572, 18, -128],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Rodian Hunters' Camp",
    description: "Rodian Hunters' Camp",
    planet: 'kashyyyk',
    location: [706, 23, -626],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Rryatt Trail',
    description: 'Rryatt Trail',
    planet: 'kashyyyk',
    location: [-79, 19, 784],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Slaver Camp',
    description: 'Slaver Camp',
    planet: 'kashyyyk',
    location: [147, 18, 159],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Slaver Camp',
    description: 'Slaver Camp',
    planet: 'kashyyyk',
    location: [536, 24, 253],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Sordaan's Rodian Hunter Outpost",
    description:
      "The famed hunter Sordaan has purchased a writ of protection from the Galactic Empire in exchange for this bit of territory. Freelance Rodian pilots have been hired to protect the base and its business partners during the massive 'Hunt' on Kashyyyk's planetary surface. ",
    planet: 'space_kashyyyk',
    location: [2556, 3225, 3890],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Tripp's Rodian Hunter Outpost",
    description:
      "The Rodian Hunter 'Tripp' has wedged this massive base into the Kashyyyk star system - without explicit permission from the Galactic Empire. As a result, the traffic to and from this facility is under constant scrutiny and is often inspected for contraband.",
    planet: 'space_kashyyyk',
    location: [-2618, 70, 2624],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'The Tyyyn Nebula',
    description:
      'The Tyyyn nebula is a dense cluster of space gasses - perfect for staging an ambush! This region of the Kashyyyk star system has been a hotbed of piracy and violence since the onset of the Galactic Civil War.',
    planet: 'space_kashyyyk',
    location: [-6200, -3500, -4500],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Isolationist Wookiee Village',
    description: 'Isolationist Wookiee Village',
    planet: 'kashyyyk',
    location: [307, 33, -189],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Ben Kenobi's House",
    description:
      'Abandoned homestead of Ben Kenobi. Home was found abandoned shortly before the Battle of Yavin with no signs of what happened to the old hermit.',
    planet: 'tatooine',
    location: [-4512, 0, -2270],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kahmurra Biogenetic Research Station',
    description:
      'This public research facility was under taking a unique bio-genetic experiment on making stronger and faster kahmurra. Unfortunately no one has heard from the scientists working there since.',
    planet: 'talus',
    location: [-4816, 0, -4752],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Great Kimogila's Skeleton",
    description: 'The sun bleached bones of one of the great Kimogila lizards of Lok.',
    planet: 'lok',
    location: [4572, 0, -1114],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kimogila Town',
    description:
      'Pirates on Lok sold settlers a piece of land that they claimed was prime real estate. Unfortunately they are on lands infested with Kimogila who found that the townsfolk are an excellent source for food.',
    planet: 'lok',
    location: [-68, 0, 2650],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kobola Bunker',
    description:
      'This cave is home to the Kobola Spice Mine. Spice is a dangerous business and it takes dangerous people to guard their harvest.',
    planet: 'rori',
    location: [7304, 0, 63],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Korga Cave',
    description: 'The Korga clan of Ewoks has managed to build a hunting outpost within a cave.',
    planet: 'endor',
    location: [2286, 0, 3459],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Krayt Graveyard',
    description:
      'The bones of hundreds of Krayt Dragons cover the floor of this valley. When an aged Krayt senses death approaching it instinctually makes the arduous journey to this resting place. It is not uncommon to find a living Krayt Dragon here waiting out the last days of its life.',
    planet: 'tatooine',
    location: [6839, 0, 4320],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kunga Stronghold',
    description: 'A Kunga Dantari stronghold.',
    planet: 'dantooine',
    location: [-368, 0, -240],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Ewok Lake Village',
    description:
      'One of the floating villages of the native Ewoks. Do not let their cuddly appearance fool you, these beings are noble and strong warriors able to survive the rigors of Endor.',
    planet: 'endor',
    location: [1578, 0, -3271],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Ewok Lake Village',
    description:
      'One of the floating villages of the native Ewoks. Do not let their cuddly appearance fool you, these beings are noble and strong warriors able to survive the rigors of Endor.',
    planet: 'endor',
    location: [-605, 0, -4940],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Lars Homestead',
    description:
      "Abandoned home of the Lars family. Shortly before the Battle of Yavin, this moisture farm was found destroyed and abandoned with two fresh graves out front. The graves were of the farm's owner Owen and his wife Beru, there was no sign of the couples' nephew.",
    planet: 'tatooine',
    location: [-2579, 0, -5500],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Dathomir Sarlacc',
    description:
      'The deadly sarlacc lies upon the rich forest floor of Dathomir feasting on whatever is unfortunate enough to wander too close.',
    planet: 'dathomir',
    location: [-2091, 0, 3177],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Station: Alliance Station I',
    description:
      "Alliance Station\n\nThe Rebel forces present in Lok Space have opened its station to members of the Alliance, wishing to declare themselves for the greater good of the fight against the Empire.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Rebel Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_lok',
    location: [1799, -2458, -3680],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Obsidian Asteroid 1',
    description: 'Obsidian Asteroid 1',
    planet: 'space_lok',
    location: [1768, -3540, -1266],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Obsidian Asteroid 2',
    description: 'Obsidian Asteroid 2',
    planet: 'space_lok',
    location: [-1725, -3517, -2976],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Obsidian Asteroid 3',
    description: 'Obsidian Asteroid 3',
    planet: 'space_lok',
    location: [-7033, 1361, 261],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Organometallic Asteroid 1',
    description: 'Organometallic Asteroid 1',
    planet: 'space_lok',
    location: [3712, -574, -2344],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Organometallic Asteroid 2',
    description: 'Organometallic Asteroid 2',
    planet: 'space_lok',
    location: [-548, 670, 1513],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station I",
    description:
      "Empire's Station\n\nThe Imperial forces present in Lok Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_lok',
    location: [-1798, 2649, 401],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Spine of Lok',
    description:
      "Spine of Lok\n\nMade out of obsidian rock, the Spine of Lok stretches across the vast, dark haze of Lok's often-quiet space. Miners have yet to venture here to find what exactly the obsidian rock holds in regards to resources and lucrative sales.\n\n",
    planet: 'space_lok',
    location: [-1488, 456, 918],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Nebula: Censorious Tempest Nebula',
    description:
      "Censorious Tempest\n\nThe Censorious Tempest Nebula lies in the outermost reaches of Lok's System. The constant presence of the nearby asteroid field causes frequent electrical outbursts for which the Censorious Tempest earns its name.",
    planet: 'space_lok',
    location: [1, 1, 1],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: The Canyon',
    description:
      'The Canyon\n\nThe Canyon embodies the home of the Corsair thug faction, an unmerciless band of hooligans promising to wreck havoc on any passing civilian or vessel. Ruthless, it is not uncommon to see a Corsair looting its latest victim and speeding off to find another.',
    planet: 'space_lok',
    location: [3724, -1263, -1813],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Mid-Point',
    description:
      'Mid-Point\n\nSimply named "Mid-Point", the area serves as a three-way route for the Rebellion, Nym\'s thugs and the Empire. Unfortunately, Mid-Point is often the best place to witness dogfights and near-death misses.',
    planet: 'space_lok',
    location: [1931, -231, 2209],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Crimson Talon',
    description:
      "Crimson Talon\n\nAn old visitor to Lok's space system, the Blood Razors inhabit the Crimson Talon territory, only venturing out from their outpost to sabotage the expansion efforts by the Kimogila Fanatics. The war between these two pirate faction remains a very near danger to those wishing to travel through the area. Pitched on either side of the Spine of Lok, the Kimogila Fanatics and the Blood Razors often meet in the middle to engage in a dogfight.",
    planet: 'space_lok',
    location: [-6196, 6431, 6176],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Umber Scale',
    description:
      "Umber Scale\n\nThe Kimogila Fanatics prefered the name 'Umbra Scale' for the territory they conquered not long ago, stealing it away from the Blood Razors and pushing them back to the other side of the Spine of Lok. Unfortunately, the once-peaceful space system of Lok is now riddled with war, often preventing civilians and freighters easy passage through unharmed. A dark cloud of war suffocates Lok's serene system and there is no telling when it will dissipate.",
    planet: 'space_lok',
    location: [6359, 6116, 6635],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Trade Federation Center',
    description:
      "Trade Federation Center\n\nThe Trade Federation has set up a research center in the outer reaches of Lok's system. Recruiting the help of others, it is the hope of the Trade Federation to collect segments of the Spine of Lok, studying the obsidian rocks to provide information to various allies about possible sales... and alliances. However, several spies have discovered that the Trade Federation has been conducting secret experiments away from the eyes of the Empire and potential enemies.",
    planet: 'space_lok',
    location: [-1692, -4279, -5416],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Corsairian Crescent',
    description:
      "Corsairian Crescent\n\nAway from the war that seems to have plagued Lok's system, the Corsairs tend to themselves, keeping as quiet occupants in Lok's inner reaches. It is rumored that the Corsairs may clamor into their own dogfights with the locals, hoping to collect the loot war often generates. Otherwise nondescript, the Corsairian Crescent proves to be a territory in which only the brave travel.",
    planet: 'space_lok',
    location: [1985, 4030, 4170],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Bloodlight Sea',
    description:
      "Bloodlight Sea\n\nThe Bloodlight Sea belongs undisputedly to Nym and his local band of loyal thugs. Until recently, the Bloodlight Sea was often a place for business, a point often visited by an assortment of hagglers and thieves. Now, it is the main centerpoint for the war between the Empire and Nym's vicious allies. Unless you favor being space dust, it is recommended to stay clear of the area.",
    planet: 'space_lok',
    location: [5995, -6027, -6474],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Solar Phoenix 2',
    description:
      "Solar Phoenix 2\n\nThe Solar Phoenix 2 is a hotspot for dogfights and deadly activity, serving as the Empire's point of operations against Nym and his band of loyal thugs.  It is imperative to use caution when careening through the area. You may find yourself sitting in dead space and the 'eject' button within finger's reach.\n\n",
    planet: 'space_lok',
    location: [6018, -4629, -239],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Mercenaries' Ridge",
    description:
      "Mercenaries' Ridge\n\nMercenaries' Ridge serves as Lok's most popular hyperspace jump from the outer planets to the serenity of Lok's space system. Only authorized persons with approved papers signed by an imperial officer can jump here with ease. Unfortunately, most smugglers and thieves traveling through here possess counterfeit papers and, with the Empire dealing with Nym, no one is the wiser.",
    planet: 'space_lok',
    location: [-6120, -1391, -6720],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Imperial Outpost',
    description:
      'The Imperials feeling the need to extend their reach into the less developed worlds have built a massive stronghold on Lok.',
    planet: 'lok',
    location: [-1785, 0, -3087],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Marauder's Stronghold",
    description:
      'This band of strange outsiders arrived on Endor long ago when their starship crashed onto the forested moon. Without means of fixing their starcraft, the band has been forced to make do with their natural surroundings and what little technology they could salvage.',
    planet: 'endor',
    location: [-4838, 0, -2339],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'The Great Massassi Temple',
    description:
      'The Great Massassi Temple was built long ago by the long extinct natives of Yavin, the Massassi. After abandoning their base on Dantooine, the Rebel Alliance moved their operation to this location where they directed the Battle of Yavin.',
    planet: 'yavin4',
    location: [-3226, 0, -3139],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Mauler Stronghold',
    description: "The Mauler Gang's base of operation for their planet wide criminal activities.",
    planet: 'naboo',
    location: [2963, 0, 1109],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'H-5 70 Mining Facility',
    description: "The H-5 70 Mining Facility is home to the Dynath Miners, allies of the Car'das.",
    planet: 'space_ord_mantell',
    location: [3267, -2475, -3078],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Mining Fields',
    description: 'The mining fields are the primary operating area for the Mensix Mining Company.',
    planet: 'mustafar',
    location: [643, 134, -2408],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Misty Falls',
    description:
      'Mighty falls plummet down the great cliffs. When the water strikes the rocks below, the spray travels an amazing distance causing a haze to cover the entire region, thus giving the falls their name.',
    planet: 'dathomir',
    location: [3566, 0, 1560],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Mokk Stronghold',
    description: 'A Mokk Dantari stronghold.',
    planet: 'dantooine',
    location: [-7258, 0, -3320],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Mordran',
    description:
      'Mordran is a mighty fighter working for Borvo the Hutt. He has recently been sighted around the Gungan Sacred Place challenging anyone who comes too close.',
    planet: 'naboo',
    location: [-1952, 0, -5279],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Wishing Lake Zone',
    description:
      "Wishing Lake\n\nThe area known as 'Wishing Lake' was first named by deep space mercenaries hired by the Trade Federation for commercial security. Today, the area stands void of activity. It is said to be a bad omen, a rumor started by the Royal Security Forces and traders alike.",
    planet: 'space_naboo',
    location: [-500, 250, 2000],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Sulfuric Asteroid 1',
    description: 'Sulfuric Asteroid 1',
    planet: 'space_naboo',
    location: [-5201, 351, -1857],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Carbonaceous Asteroid 1',
    description: 'Carbonaceous Asteroid 1',
    planet: 'space_naboo',
    location: [-7634, 2030, -1699],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Sulfuric Asteroid 2',
    description: 'Sulfuric Asteroid 2',
    planet: 'space_naboo',
    location: [-3088, -5468, 4106],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Sulfuric Asteroid 3',
    description: 'Sulfuric Asteroid 3',
    planet: 'space_naboo',
    location: [-4620, -5557, 2217],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Carbonaceous Asteroid 2',
    description: 'Carbonaceous Asteroid 2',
    planet: 'space_naboo',
    location: [3984, 3077, 7159],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Emperor's Way",
    description:
      "Emperor's Way\n\nThe public portion of the 'Emperor's Way' is a weapons-hold zone policed by elite TIE squadrons.",
    planet: 'space_naboo',
    location: [-3000, 1800, 0],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Old Trade Federation Route',
    description:
      "Old Trade Federation Route\n\nRarely traveled, the Old Trade Federation Route lies within the Enmaekeda Nebula, a tumultuous ball of space matter home to Borvo's thugs. The Imperial Navy has claimed the route unsafe and has restricted travel to all parties.",
    planet: 'space_naboo',
    location: [-250, -3500, 1800],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station I",
    description:
      "Empire's Station\n\nThe Imperial forces present in Naboo Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_naboo',
    location: [3511, 1774, 944],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Trade Federation Hulk',
    description:
      "Trade Federation Hulk\n\nThis heap of debris stands as a reminder of Naboo's ancient battle against the forces of greed, and a monument to the Royal Security Forces prowess in starfighter combat. Even still, rare members of the Trade Federation still live at the site and are often left alone.",
    planet: 'space_naboo',
    location: [2501, -5926, -5497],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Rebellion Remnants',
    description:
      "Rebellion Remnants\n\nPoetically named by Sonal Serore, an Imperial artisan, the Rebel Station was once a prominent home to the Rebel Alliance. Now, it only remains as a monument to the glory of the Empire and the undeniable strength and might they possess. Rumor has it that the Alliance has returned to its once-home. Could it be that they hope to prosper once again in Naboo's Empire-controlled space?\n\n",
    planet: 'space_naboo',
    location: [-5581, 5831, 5663],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Scintilla Steel',
    description:
      'Scintilla Steel\n\nThe iron asteroid field, named Scintilla Steel, serves as a home to hostile droids, the Scintilla Scavengers. Although malicious, the Scintilla Scavengers keep to themselves and mine the Scintilla Steel asteroid field in peace. Approaching freighters and vessels are, however, attacked on sight and are devoured within moments.',
    planet: 'space_naboo',
    location: [-5574, 475, -902],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Adamant Mass',
    description:
      'Adamant Mass\n\nA particularly large asteroid, the Adamant Mass is the center-point of the Ironfleck Marauders expeditions. The planetoid, often nicknamed "Naboo\'s Third Planet", is rumored to harbor a pocket of valuable, high density resources in its center. The Ironfleck Marauders have been chipping away at the Adaman Mass for years and have yet to make any progress.',
    planet: 'space_naboo',
    location: [5965, 5895, 5188],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Nal ReulTta',
    description:
      'Nal ReulTta\n\nReminiscent of their homeworld Nal Hutta, the Borvo Clan sought to claim a small portion of Naboo\'s Space, a place that was eventually to be called "Nal ReulTta". Borvo and his thugs found victory soon thereafter, sprouting a small outpost and guarding it from the meddlesome Empire with skill and bravery. The outpost stands there even today and is heavily guarded by Borvo\'s thugs.',
    planet: 'space_naboo',
    location: [-3867, -4902, 1859],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Sovereignty Dawn',
    description:
      "Sovereignty Dawn\n\nNaboo's own police, the Royal Security Forces, found their place in the Sovereignty Dawn territory, procreating an outpost to support their peacekeeping efforts. Usually friendly, the Royal Security Forces are glad to lend a helping hand when in need.",
    planet: 'space_naboo',
    location: [-560, 5451, -5455],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Arrissa's Field",
    description:
      "Arrissa's Field\n\nNamed after the pirate Arrissa n'Osnyi, the iron asteroid field holds testament to many pirate victories. Hiding within the field, and covered by the Obligon Nebula, pirates were successful in ambushing passing freighters. Needless to say, the old trade route through this area has been vacated for years. Now, it is frequented by Imperial influence in hopes of keeping pirates out of the area for good.",
    planet: 'space_naboo',
    location: [3890.74, 3399.38, 7513.18],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Narglatch Cave',
    description:
      'A large pack of vicious Narglatches have taken up residence in a deep natural cave. Unwary travelers who investigate this cave usually end up as dinner for the ferocious beasts.',
    planet: 'naboo',
    location: [5864, 0, -4681],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Mensix Mining Facility',
    description:
      'This is the central hub of activity on this continent of Mustafar. From here the mining corporation controls their droids and workers to make sure they work as efficiently as possible. This is also where visitors to Mustafar arrive and the cantina in the center of the facility can at any time be the meeting place for both legal and illegal business deals.',
    planet: 'mustafar',
    location: [355, 0, -1320],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Nightsister Stronghold',
    description: 'Home of a group of the evil force wielding witches who call themselves the Nightsisters.',
    planet: 'dathomir',
    location: [-3946, 0, -50],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Nightspider Cult Cave',
    description:
      'A secretive clan of force wielders has taken up residence within a cave. It is rumored that they worship the gigantic spiders which inhabited the cave before they arrived.',
    planet: 'dathomir',
    location: [-1219, 0, 6262],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Nightsister vs. Singing Mountain Clan Battle',
    description:
      'Pitched battles between the two dominate factions of force wielding witches always happen when these two clans meet each other.',
    planet: 'dathomir',
    location: [-2450, 0, 1521],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Lord Nyax's Cult",
    description:
      'The Cult of Lord Nyax has been a thorn in the side of Corsec for numerous years. Unfortunately, they have grown in power to cause a great deal of trouble with the Corsec who have adopted a policy of containment rather than destruction towards the cult.',
    planet: 'corellia',
    location: [1414, 0, -317],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Old Mining Facility',
    description:
      'This is an old mining facility that is no longer in use, abandoned after a battle some years ago destroyed many of its functions.',
    planet: 'mustafar',
    location: [1002, 211, -2135],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Old Research Facility',
    description:
      "This is an old research bunker, said to date all the way back to the Old Republic. It's long deserted but you have heard stories of strange creatures and aggressive guard droids inhabiting it now days.",
    planet: 'mustafar',
    location: [-770, 87, 6080],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Tansarii Point Station',
    description:
      "The Tansarii Point Station provides a well-secured home for the Car'das, a syndicate ruled by Talon Karrde. Travelers are often welcome here. The station offers repairs at the hangars and entertainment and drinks at the cantina.",
    planet: 'space_ord_mantell',
    location: [0, 0, 0],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Orphaned Marauder's Cave",
    description:
      'Marauders who have been abandoned by their own usually do not survive on Endor for very long but a small group of them has managed to fortify a cave and now takes in others of their kind who have been orphaned by their clan.',
    planet: 'endor',
    location: [-6853, 0, 679],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Poacher vs. Creature Battle',
    description:
      'On the black market, pelts of Rori creatures fetch handsome sums. Poachers are a common problem on the swampy world usually wrecking havoc with entire ecosystems. But sometimes even these skilled hunters pick the wrong critters to go after.',
    planet: 'rori',
    location: [773, 0, -2109],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Escape Pod',
    description:
      'Shortly before the Battle of Yavin, this escape pod crashed down within the Dune Sea. The Empire briefly took a great deal of interest in this pod and for a short time after, Imperial activity on Tatooine was noticeably increased.',
    planet: 'tatooine',
    location: [-3931, 0, -4397],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Imperial Prison',
    description:
      "This is considered to be the Empire's answer to an oubliette. The most dangerous prisoners to the Empire are shipped onto Dathomir and forgotten about.",
    planet: 'dathomir',
    location: [-6091, 0, 1010],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Agrilat Swamp Track',
    description:
      "This dangerous course was used for illegal races many years ago. Hot springs, deadly updrafts and sharp crystalline underbrush make it a particularly hazardous course. Until recently, there haven't been many races since the near-death of a swoop jockey named Dengar. If memory serves, it was a very exciting match between him and someone called Solo.",
    planet: 'corellia',
    location: [1859, 0, 4642],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Keren Street Race Track',
    description:
      'This circuit will take you winding through the narrow bridges and streets of Keren and it is favored by the more technically minded racer. Focusing more on finesse then it does raw speed this course will definitely challenge your racing skills. Due to the danger street racing poses to pedestrians, the RSF does not approve of this activity so participation is at your own risk.',
    planet: 'naboo',
    location: [1396, 0, 2686],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Old Mos Espa Arena Track',
    description:
      "The series was formed and controlled by the Hutts many years ago. Following the decline of podracing's popularity, this track was more or less abandoned by the Hutts. It was eventually taken over by a small band of swoop racers, who used it to stage a regular series of semi-legitimate races during the early years of the New Republic.",
    planet: 'tatooine',
    location: [2380, 0, 5000],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Rebel Outpost',
    description:
      'On worlds that are firmly under the iron fist of the Empire, the Alliance has managed to place small but effective units and bases.',
    planet: 'rori',
    location: [3669, 0, -6586],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Great Pit of Carkoon',
    description:
      "Located deep within the Western Dune Sea, the pit is home to a sarlacc. Its tentacles ever reaching out of the sarlacc's mouth in search of anything unlucky enough to pass within reach.",
    planet: 'tatooine',
    location: [-6169, 0, -3387],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Nebula: Shadow of the Alliance',
    description:
      "Shadow of the Alliance\n\nThe Shadow of the Alliance provides the Resistance with a cloak of tumultuous energy. Struggling to survive, the Rebels hide in the Shadow of the Alliance nebula in hopes of dodging the attacks launched by the Empire. Thankfully, all of the Empire's efforts seem to be focused on the Ni`lyahin Smugglers. It seems as if the Emperor and his fleets are too distracted to deal with the nuisance of the Alliance... for now.",
    planet: 'space_yavin4',
    location: [-3868, -746, 669],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'A simple sample',
    description: 'A simple sample',
    planet: 'simple',
    location: [0, 0, 0],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Another simple sample',
    description: 'Another simple sample',
    planet: 'simple',
    location: [-1000, 0, 1000],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Singing Mountain Clan',
    description: 'Mountain home of the force wielding witches calling themselves the Singing Mountain Clan.',
    planet: 'dathomir',
    location: [678, 0, 4079],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Ancient Krayt Dragon Skeleton',
    description: 'A massive, sun bleached skeleton of an ancient Krayt Dragon.',
    planet: 'tatooine',
    location: [-4632, 0, -4346],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Nightsister Forced Labor Camp',
    description:
      'Although the Nightsisters have very little tolerance of men, they are not above using them for slave labor. A number of slave labor camps dot Dathomir.',
    planet: 'dathomir',
    location: [2428, 0, -1701],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'The Smoking Forest',
    description:
      'The Smoking Forest was once thick with black smoke that billowed out of rock chimneys. The area has grown silent over the years, and the black smoke has stopped pour out of the rock formations but the name has stuck.',
    planet: 'mustafar',
    location: [-2321, 0, 1757],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Nebula: Ferrous Aurora',
    description:
      "Ferrous Aurora Nebula\n\nThe Ferrous Aurora Nebula, named by the Ni`lyahin Smugglers, is home to the hostile band of thieves and assassins. Apart from the dazzling colors, the areas surrounding the nebula prove to be dangerous as a war brews just beyond its brink. The nebula's inhabitants originate from Yavin4, having gained space travel later than most and only by stealing technology. Currently, they own half of Yavin4's space quadrants, successfully destroying large parts of the Empire's defenses and holding fast with their own brutal forces.",
    planet: 'space_yavin4',
    location: [4712, 644, 44],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: CorSec Wing',
    description:
      'Hyperspace: Quadrant I: CorSec Wing\n\nInhabitants: CorSec and the Rebellion\nDanger Level: HIGH\n\nDistance to Corellia Space Station: 8765m\nDistance to Talus Space Station: 7702m\n\nControlled fiercely by both the Rebellion and the CorSec, the CorSec Wing proves dangerous for members of the Empire. The Rebellion is found to be unsympathetic to Imperial starships flying in the CorSec Wing Quadrant and will shoot them down on sight. Beware.\n\n',
    planet: 'space_corellia',
    location: [-967, -1513, 0],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Trifecta Star',
    description:
      'Hyperspace: Quadrant II: Trifecta Star\n\nInhabitants: Rebel Alliance, Blacksun, Binayre\nDanger Level: Medium\n\nDistance to Corellia Space Station: 15832m\nDistance to Talus Space Station: 11714m\n\nAlthough deserted to some degree, the Trifecta Star is the nearby home to the Rebel Alliance, the Blacksun and the Binyare. Only under dire circumstances should one choose to travel to this quadrant. Beware.',
    planet: 'space_corellia',
    location: [-4962, 3704, 3442],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Binayre Razorcat',
    description:
      'Hyperspace: Quadrant III: Binayre Razorcat\n\nInhabitants: Binayre and Hidden Daggers\nDanger Level: Medium\n\nDistance to Corellia Space Station: 9907m\nDistance to Talus Space Station: 12388m\n\nThe Binayre Razorcat is often avoided due to the high density of the pirate factions, Binayre and the Hidden Daggers. Only brave travelers can be found circling the area, fighting off the pirates who dare close in on the defenseless pirates.',
    planet: 'space_corellia',
    location: [1840, 2656, 944],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Corellia's Own",
    description:
      "Hyperspace: Quadrant IV: Corellia's Own\n\nInhabitants: CorSec\nDanger Level: Low\n\nDistance to Corellia Space Station: 3874m\nDistance to Talus Space Station: 13582m\n\nIf a quadrant in Corellian Space could be called safe, Corellia's Own is the one. Only patrolled by CorSec, the trade routes from the Corellia Station to the Talus Station are traveled mostly by trading freighters and civilian craft. Still, Imperial presence is frowned upon here and proves to be hostile to starships openly claiming to be of the Empire.",
    planet: 'space_corellia',
    location: [6981, -3577, -5997],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Talus Secta',
    description:
      "Quadrant V: Talus Secta\n\nInhabitants: the Empire and the Rebellion\nDanger Level: HIGH\n\nDistance to Corellia Space Station: 10836m\nDistance to Talus Space Station: 4642m\n\nClosest hyperspace point to the Talus Space Station, the Talus Secta point is incredibly dangerous. The Empire, in attempt to catch traveling Rebel sympathizers off-guard, keep a vigil standpoint very close by. Learning the Empire's vile deeds, the Rebel Alliance has stationed guards next to the Talus Secta, hoping to fight off the Empire and make travel safe for Rebel allies. The ongoing war between the two factions makes traveling to the Talus Secta dangerous for both Rebel and Empire allies alike.",
    planet: 'space_corellia',
    location: [-3778, -2132, -1689],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Dantooine's Wrath",
    description:
      "Hyperspace: Quadrant I: Dantooine's Wrath\n\nInhabitants: Hutts, Valarians, the Empire\nDanger Level: HIGH\n\nDistance to Dantooine Space Station: 6788m\n\nThe first quadrant of Dantooine, fondly nicknamed \"Dantooine's Wrath\", is a pit-stop between a sarlacc pit and being trampled on by a Gorax. It is highly recommended that one stay away from the first quadrant unless absolutely necessary. Dantooine's Wrath is laden with fierce Hutt gunships and unmerciless Valarian thugs.",
    planet: 'space_dantooine',
    location: [-1454, -1390, 246],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Asair's Ribbon",
    description:
      "Hyperspace: Quadrant II: Asair's Ribbon\n\nInhabitants: Unknown\nDanger Level: Low\n\nDistance to Dantooine Space Station: 11531m\n\nAn uncharted territory in Dantooine's System. The Empire hopes to secure this quadrant within the year's end.",
    planet: 'space_dantooine',
    location: [-6334, -3736, 2155],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Isryn's Veil",
    description:
      "Hyperspace: Quadrant III: Isryn's Veil\n\nInhabitants: Force Assassins\nDanger Level: HIGH\n\nDistance to Dantooine Space Station: 8596m\n\nMystery shrouds the third quadrant of Dantooine's System and provides history enthusiasts with little information of the founders of Isryn's Veil. For now, it is safe to travel here although there is mention of Force Assassins reaching out to claim additional areas. Incidentally, the Empire's eyes may have turned to the Veil as a target of expansion efforts.. Will they succeed?",
    planet: 'space_dantooine',
    location: [6633, -5456, -1009],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Gorvera Space',
    description:
      "Hyperspace: Quadrant IV: Gorvera Space\n\nInhabitants: Unknown\nDanger Level: Low\n\nDistance to Dantooine Space Station: 16240m\n\nRelatively safe, the Gorvera Space quadrant welcomes travelers, providing a scenic view of Dantooine's System. Little else is known about Dantooine's fourth quadrant.\n\n",
    planet: 'space_dantooine',
    location: [-6411, 6431, 6426],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Dark Force',
    description:
      'Hyperspace: Quadrant I: Dark Force\n\nInhabitants: The Empire\nDanger Level: HIGH\n\nDistance to Dathomir Space Station: 10483m\n\n\\Transmission Jammed!\\\n\nFrom the Imperial Navy...\n\nReceiving ... ... ...\n\nImmediate Notice: All access to this Quadrant is prohibited by law of the Empire. Any vessels found in this sector will be destroyed on sight! Repeat: Cease all unauthorized travel to this sector immediately. You will be destroyed on sight!',
    planet: 'space_dathomir',
    location: [869, -374, 2392],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Empire Blockade',
    description:
      "Hyperspace: Quadrant II: Empire Blockade\n\nInhabitants: The Empire\nDanger Level: HIGH\n\nDistance to Dathomir Space Station: 12603m\n\nThe second quadrant of Dathomir's system is a considerably dangerous one for those not belonging to the Emperor's ranks. Particularly of note, is the Empire's Blockade that makes its way through the area, crushing all those who stand to oppose it.\n\n\n\n",
    planet: 'space_dathomir',
    location: [3825, 1658, 2612],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Dathomir's Vitality",
    description:
      "Hyperspace: Quadrant III: Dathomir's Vitality\n\nInhabitants: Dark Veil Order\nDanger Level: HIGH\n\nDistance to Dathomir Space Station: 8273m\n",
    planet: 'space_dathomir',
    location: [-1256, -2985, -5971],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Emperor's Hand",
    description:
      "Hyperspace: Quadrant IV: Emperor's Hand\n\nInhabitants: Unknown\nDanger Level: Medium\n\nDistance to Dathomir Space Station: 11077m\n\nNamed after the Emperor's unavoidable influence, the Emperor's Hand proves to be dangerous to those unwilling to succumb to the Empire's whims. The fourth quadrant stretches far as do the Emperor's tumultuous desires and would be best avoided when making travel plans.",
    planet: 'space_dathomir',
    location: [-6728, -2281, 5916],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Red Sin Chimaera',
    description:
      'Hyperspace: Quadrant I: Red Sin Chimaera\n\nInhabitants: Death Watch\nDanger Level: HIGH\n\nDistance to Endor Space Station: 11739m\n\nLurking inside the cover of the Red Sin Chimaera Nebula, the Death Watch wait silently, striking at the last moment in hopes of a successful kill. Most think of them as animals, feasting upon the helpless to survive. Although a fair distance away, the Red Sin Chimaera quadrant entry point can give a traveler a run for his money.\n\n',
    planet: 'space_endor',
    location: [639, -3949, -4638],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Area D-435',
    description:
      'Hyperspace: Quadrant II: Area D-435\n\nInhabitants: Unknown\nDanger Level: Low\n\nDistance to Endor Space Station: 5273m\n\nLittle to nothing is known about the quadrant. It is uncharacteristic and safe for travel. It would be best, however, to keep navigation computers alert for unexpected enemies in the area.',
    planet: 'space_endor',
    location: [-1965, 2326, 3708],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Empire's Justice",
    description:
      "Hyperspace: Quadrant III: Empire's Justice\n\nInhabitants: The Empire\nDanger Level: HIGH\n\nDistance to Endor Space Station: 9155m\n\nTo those not belonging to the Empire's ranks, the Empire's Justice quadrant could be viewed as highly dangerous. Travel here is not recommended unless the traveler is on the best of term's with the Empire.",
    planet: 'space_endor',
    location: [-6929, 3926, -1973],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Durillium Sea',
    description:
      'Hyperspace: Quadrant IV: Durillium Sea\n\nInhabitants: Unknown\nDanger Level: Low\n\nDistance to Endor Space Station: 11727m\n\nThe Durillium Sea is a vast expanse of virtual nothingness. The quadrant is relatively safe for passing travelers and welcomes expansion. Will the Empire seek to claim it?',
    planet: 'space_endor',
    location: [5737, 2276, 3735],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Nym's Hovel",
    description:
      "Hyperspace: Quadrant I: Nym's Hovel\n\nInhabitants: Nym's Thugs\nDanger Level: Medium\n\nDistance to Lok Space Station: 12123m\n\nWithin the heart of the first quadrant, Nym and his thugs search for unsuspecting enemies. Nym's Hovel has proven to be an ill place for those finding themselves on the wrong side of the notorious pirate.",
    planet: 'space_lok',
    location: [-505, 4421, 4459],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Rebellion Blaze',
    description:
      'Hyperspace: Quadrant II: Rebellion Blaze\n\nInhabitants: Rebel Alliance\nDanger Level: Medium\n\nDistance to Lok Space Station: 9837m\n\nThe Rebellion Blaze Quadrant is home to loyal members of the Rebel Alliance. Named after the infamous Rebel Gunboat, the Rebellion Blaze, the Alliance has chosen the Lok system as one of its points of operative origin. Members of the Empire are not welcome here and will be hunted down immediately if seen.\n\n',
    planet: 'space_lok',
    location: [1499, -5451, -5962],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Lurid Dawn',
    description:
      "Hyperspace: Quadrant III: Lurid Dawn\n\nInhabitants: Unknown\nDanger Level: Low\n\nDistance to Lok Space Station: 4944m\n\nLok's very own dead space. The Rebel Alliance hopes to secure this quadrant for operative expansion within the year's end.",
    planet: 'space_lok',
    location: [-6926, -497, 955],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Voria's Ember",
    description:
      "Hyperspace: Quadrant IV: Voria's Ember\n\nInhabitants: Unknown\nDanger Level: Low\n\nDistance to Lok Space Station: 14438m\n\nVoria Sergar was found orphaned at a young age. Abandoned by her slave master, she wandered the planet of Lok for several months before being found by a Rebel Officer, Isnal Roran. Voria had been battered and bruised, having fled many near-death situations. Finally, she was safe. Voria ascended the ranks in the Rebel Alliance with blinding speed. Her abilities and fluidity with slicing and manipulating computers were viewed as assets to the Rebellion. She soon earned her wings and headed to Lok's system. There, she met her fate, unable to maneuver in time before an Imperial missile struck her down. No matter how far away, each member of the Rebellion felt her passing. Voria's Ember, Lok's fourth quadrant, was named after the Rebel sergeant in her honor.",
    planet: 'space_lok',
    location: [6492, 1478, -524],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Royal Way',
    description:
      'Hyperspace: Quadrant I: Royal Way\n\nInhabitants: Royal Security Forces of Naboo\nDanger Level: Low\n\nDistance to Naboo Space Station: 3919m\nDistance to Rori Space Station: 12082m\n\nA common sight in Naboo\'s space, the Royal Security Forces hope to keep the peace by policing approved travel space and "removing" offenders. It would be wise not to travel here if you find yourself on the bad side of the Royal Security Forces.',
    planet: 'space_naboo',
    location: [-944, 3945, -4525],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Penumbra Omen',
    description:
      'Hyperspace: Quadrant II: Penumbra Omen \n\nInhabitants: Unknown\n\nStatus: TRAVEL PROHIBITED\nDanger Level: HIGH\n\nDistance to Naboo Space Station: 10445m\nDistance to Rori Space Station: 12853m\n\n** Important!! Quadrant II, Code Name Area D-512 has been changed to Code Name "The Penumbra Omen Quadrant" effective immediately!!\n\nFrom the Imperial Navy...\n\nReceiving ... ... ...\n\nImmediate Notice: All access to this Quadrant is prohibited by law of the Empire. Again, Area D-512 is now PROHIBITED to ALL TRAVEL!! Unknown Flying Starships have been found in the area and have proved to be INCREDIBLY DANGEROUS!! Do NOT travel in this Quadrant!!\n\nReceiving... ... ..\n\nCode Name for Unknown Starships: Penumbra Omen\n',
    planet: 'space_naboo',
    location: [-2992, 3984, 3520],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Sea of Veruna',
    description:
      "Hyperspace: Quadrant III: Sea of Veruna\n\nInhabitants: Unknown\nDanger Level: Low\n\nDistance to Naboo Space Station: 12762m\nDistance to Rori Space Station: 4268m\n\nThe Sea of Veruna proves to be a vast quadrant of dead space. Potentially safe, the hyperspace location is used often by all travelers. Be warned, however, as the Empire hopes to secure it within the year's end.",
    planet: 'space_naboo',
    location: [5935, -982, 2946],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Kylantha's Whim",
    description:
      "Hyperspace: Quadrant IV: Kylantha's Whim\n\nInhabitants: The Empire\nDanger Level: Medium\n\nDistance to Naboo Space Station: 5244m\nDistance to Rori Space Station: 13463m\n\nAlthough mostly deserted, one can find a few Imperial patrols circling about Kylantha's Whim. It is rumored that a young and wealthy suitor, infatuated with the Queen Kylantha, claimed he purchased a quadrant for her in Naboo Space, hoping it would bring to light the love he had for her. The Queen kindly refused his offer of marriage, stating her desire to \"marry\" her people and serve them with all of her time. Crushed, the young man renamed the quadrant to Kylantha's Whim. The quadrant has kept its name ever since.",
    planet: 'space_naboo',
    location: [-5952, -2758, -5005],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Miner's Yard",
    description:
      "Hyperspace: Quadrant I: Miner's Yard\n\nInhabitants: Miners\nDanger Level: Low\n\nDistance to Tatooine Space Station: 15144m\n\nTatooine's resource numbers are plummeting daily. It is up to local miners to branch out and collect resources to replenish high demands. Their target: Asteroid Fields.",
    planet: 'space_tatooine',
    location: [-4933, 6439, 6890],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Deep Sea',
    description:
      'Hyperspace: Quadrant II: Deep Sea\n\nInhabitants: Hutts\nDanger Level: HIGH\n\nDistance to Tatooine Space Station: 11728m\n\nHome to Hutt influence, the Deep Sea Quadrant proves dangerous to "unapproved" visitors. Unless one has business here, it\'s best to stay away.',
    planet: 'space_tatooine',
    location: [5475, 4455, 6433],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Desert Sands',
    description:
      'Hyperspace: Quadrant III: Desert Sands\n\nInhabitants: Unknown\nDanger Level: Medium\n\nDistance to Tatooine Space Station: 8044m\n\nIt is unknown if the Desert Sands Quadrant is home to friendly entities. The Imperial Navy has forwarded a word of warning to those looking to travel through the area.',
    planet: 'space_tatooine',
    location: [6451, -1528, -3502],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Outer Rim',
    description:
      'Hyperspace: Quadrant IV: Outer Rim\n\nInhabitants: Unknown\nStatus: RESTRICTED\nDanger Level: HIGH\n\nDistance to Tatooine Space Station: 9585m\n\nApproved by the Imperial Navy, all travel to this Quadrant is RESTRICTED. Hostile enemies have been seen and it is IMPERATIVE that travel to this Quadrant be ceased! You have been warned.',
    planet: 'space_tatooine',
    location: [-6933, -3512, 970],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Hyperspace: Smuggler's Run",
    description:
      "Hyperspace: Quadrant I: Smuggler's Run\n\nInhabitants: Ni'lyahin Smugglers\nDanger Level: Medium\n\nDistance to Yavin 4 Space Station: 16175m\n\nWhen the Death Star was finally destroyed, news of its defeat spread like wildfire. It brought many visitors, including the Ni'lyahin Smugglers, hoping to scrounge together pieces from the explosion and sell it on the black market. Today, they prosper, fighting their own war against the Empire and their oppression.\n",
    planet: 'space_yavin4',
    location: [-962, 4480, 6923],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Ferrous Aurora',
    description:
      "Hyperspace: Quadrant II: Ferrous Aurora\n\nInhabitants: Unknown\nDanger Level: Low\n\nDistance to Yavin 4 Space Station: 10663m\n\nLending the quadrant its name, the Ferrous Aurora nebula extends its welcome in an array of radiant, incandescent colors. It is wise not to be fooled by its beauty as the Ni'lyahin Smugglers have claimed it as their own.\n\n",
    planet: 'space_yavin4',
    location: [4988, -5979, -6482],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Hyperspace: Crimson Flare',
    description:
      'Hyperspace: Quadrant III: Crimson Flare\n\nInhabitants: Unknown\nDanger Level: Low\n\nDistance to Yavin 4 Space Station: 5407m\n',
    planet: 'space_yavin4',
    location: [-960, -2499, -6143],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Corellia Space Station',
    description:
      "Home of the Corellian Security Forces, this space station can provide emergency repairs for a service, as well as clear you for landing at any of Corellia's starports.",
    planet: 'space_corellia',
    location: [6519, -5373, -2600],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Dantooine Space Station',
    description:
      "Dantooine is a remote planet with a small primitive native population.  This space station can provide emergency repairs for a service, or clear you for landing at any of Dantooine's outposts.",
    planet: 'space_dantooine',
    location: [1359, -742, -5902],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Dathomir Space Station',
    description:
      "The Station at Dathomir will require Imperial authorization codes before providing emergency repairs or clearing you for landing at any of Dathomir's outposts, but the station is so remote their codes are rarely updated.",
    planet: 'space_dathomir',
    location: [-6880, 2742, -3956],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Endor Space Station',
    description:
      'Serving the Imperial Research Station on Endor, this space station can provide emergency repairs or clear you for landing on the planet.',
    planet: 'space_endor',
    location: [-5268, -1500, 5209],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Kashyyyk Space Station',
    description: 'The space station on Kashyyyk can provide emergency repairs or clear you to land on the planet.',
    planet: 'space_kashyyyk',
    location: [-5000, 250, -5000],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Lok Space Station',
    description:
      "The space station on Lok can provide emergency repairs or clear you to land at Nym's Stronghold on the planet.",
    planet: 'space_lok',
    location: [-6235, -5341, 113],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Naboo Space Station',
    description:
      "Home of the Royal Security Forces, the space station can provide emergency repairs or clear travelers to land at any of Naboo's star ports.",
    planet: 'space_naboo',
    location: [-2491, 905, -6460],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Rori Space Station',
    description:
      "Serving Naboo's most popular moon, Rori, this space station can provide travelers with emergency repairs or permission to land at any of Rori's starports.",
    planet: 'space_naboo',
    location: [6226, -4450, 484],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Talus Space Station',
    description:
      "The Space Station at Talus can provide you with emergency repairs or clear you to land at any of Talus' starports.",
    planet: 'space_corellia',
    location: [-6348, -5274, -3956],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Tatooine Space Station',
    description:
      "The space station at Tatooine isn't the friendliest one in the galaxy, but for the right price they can be persuaded to provide emergency repairs.  The station is notorious for clearing anyone to land at any of Tatooine's starports without even the most basic security protocols in place.",
    planet: 'space_tatooine',
    location: [2311, -5872, 1865],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Yavin 4 Space Station',
    description:
      'Serving the outposts on this hostile jungle planet, the space station will provide emergency repairs to get you on your way, or clear you for landing at any of the outposts on Yavin4.',
    planet: 'space_yavin4',
    location: [-5570, -5167, -5234],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Mining Camp On Strike',
    description:
      'This is one of the larger mining camps on this continent of Mustafar. Apparently the workers there are currently on strike, which must cost the corporation owning it a fortune.',
    planet: 'mustafar',
    location: [-2461, 291, 1450],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Stronghold',
    description:
      'A reinforced base that is highly sought after by both Imperial and Rebel forces because of its prime strategic location.',
    planet: 'corellia',
    location: [4651, 0, -5617],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Rori Gungan's Swamp Town",
    description:
      'The Rori Gungan commander Captain Hassek has declared that if the Gungan people are to survive they must repel all foreigners from their worlds. His base of operations, which is located deep within the swamps of Rori, is protected by his most loyal followers.',
    planet: 'rori',
    location: [-1986, 0, 3339],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Dathomir Tar Pits',
    description:
      'Bubbling ooze flows up from deep within the planet. This tar has been known to trap and pull down even the largest of creatures like the rancor.',
    planet: 'dathomir',
    location: [651, 0, -4888],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Traders' Grotto",
    description:
      "Traders' Grotto\n\nNumerous trading routes litter Traders' Grotto and provide easy, safe travel to and from the Tatooine Space Station.",
    planet: 'space_tatooine',
    location: [-500, 250, 2000],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Iron Asteroid 1',
    description: 'Iron Asteroid 1',
    planet: 'space_tatooine',
    location: [2872, -2382, -42],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Iron Asteroid 2',
    description: 'Iron Asteroid 2',
    planet: 'space_tatooine',
    location: [-216, 1721, -1434],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Iron Asteroid 3',
    description: 'Iron Asteroid 3',
    planet: 'space_tatooine',
    location: [442, 946, -828],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Iron Asteroid 4',
    description: 'Iron Asteroid 4',
    planet: 'space_tatooine',
    location: [-824, 1600, -2790],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Iron Asteroid 5',
    description: 'Iron Asteroid 5',
    planet: 'space_tatooine',
    location: [-335, -2424, 515],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Ghost Tide Nebula',
    description:
      'Ghost Tide Nebula\n\nThick cover from the Ghost Tide Nebula provides pirates superb concealment when trying to ambush unsuspecting freighters. Travelers are warned and directed away from the Ghost Tide. Many ignoring the warning are never heard from again.',
    planet: 'space_tatooine',
    location: [-3000, 1800, 0],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Hutt Claims',
    description:
      "Hutt Claims\n\nMet with fierce resistance, the Hutts have ceased their attacks on the areas surrounding the Tatooine Space Station. They had hoped to claim the station and collect the fees generated from it by making travelers pay tolls to be allowed access to Tatooine's space. They underestimated the Mos Eisley police and their allies. All that is left from this launch point are the remains of war.",
    planet: 'space_tatooine',
    location: [-250, -3500, 1800],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Nallera's Mining Field",
    description:
      "Nallera's Mining Field\n\nStemming from Space Tatooine's outermost reaches, Nallera's Mining Field remains one of Tatooine's oldest mining outposts. Nallera's Mining Field is far enough away from the Hutts' influence, but close enough to Tatooine's space station to encourage trade and ship goods to the planet. The inhabitants of Nallera's Mining Field are friendly and welcome travelers to their outpost.",
    planet: 'space_tatooine',
    location: [-5949, 0, 5944],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Rebel Ruins',
    description:
      'Rebel Ruins\n\nLying in ruins, the once-prominent Rebel Space Station was the base of operations for most Alliance activity in the Tatooine System. It was only then, at the height of glory of the Alliance, did the Empire suffocate any hope of survival. Only a carcass of the Rebel Space Station remains and, floating around it, memories of war in the form of TIE and X-Wing debris.',
    planet: 'space_tatooine',
    location: [-1507, 1904, -3392],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Jabba's Star",
    description:
      "Jabba's Star\n\nJabba's Star provides a point of origin for the Hutts' illegal operations. Unless business is mentioned, Jabba's thugs are not partial to having visitors. The structure of the small outpost serves as a shining representation of the Hutts' cunning and skill with manipulating anything and everything.",
    planet: 'space_tatooine',
    location: [1296, 5965, -5488],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Dragon's Pearl",
    description:
      "Dragon's Pearl\n\nThe center of Space Tatooine's eye, the Dragon's Pearl is a hotspot for illegal activity. Many thugs, including the Black Sun and the Hutts, swarm here to harass the defenseless freighters in the area, stealing loot without any signs of remorse. Fortunately, the Empire encircles the Dragon's Pearl, enforcing Imperial law with quick starships and flight prowess.",
    planet: 'space_tatooine',
    location: [287, -362, -1333],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Valarian Sun',
    description:
      'Valarian Sun\n\nNestled snuggly behind the Dragon\'s Spine asteroid field, the area called "Valarian Sun" serves as Lady Valarian\'s point of space operations. "Valarian Sun" is led by her most powerful thugs, relentless killers hoping to take over the Dragon\'s Spine entirely in honor of the gang.',
    planet: 'space_tatooine',
    location: [-6523, -6375, -6388],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Dragon's Spine",
    description:
      "Dragon's Spine\n\nThe Dragon's Spine, one of the oldest asteroid fields in space Tatooine, snakes across the vast expanse of space and serves as a centerpoint of navigation for many explorers. However, wise travelers have steered clear from the Dragon's Spine as of late. Lady Valarian and her thugs have taken to the massive asteroid field, destroying all \"unauthorized\" vessels and have consequently taken it over completely. In the eyes of the Hutts, Lady Valarian and her thugs have over-stepped their bounds which has resulted in a war between the two thug factions. Even the Empire has ordered their fleets to stay clear from the Spine and the war that rages within it.",
    planet: 'space_tatooine',
    location: [-5814, -881, -3968],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Station-Star 1',
    description:
      'Station-Star 1\n\nThe original landing station, named "Station-Star 1", was the first direct pipeline connecting planet Tatooine to its space system. Due to the raging war between the Hutts and the Valarians, Station-Star 1 was destroyed, having been the target for both thug factions. It was sound reasoning that whoever owned the landing station owned the planet. Station-Star 1 now lies in ruins at the site of continual battle between the Hutts and the Valarians.',
    planet: 'space_tatooine',
    location: [-2885, 6607, 1048],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Iron Planet',
    description:
      'Iron Planet\n\nThe material of this "Iron Planet" is starkly different than the neighboring asteroids in areas circumventing the Traders\' Grotto. It is unknown whether or not it will help against squelching the high resource demands from planet Tatooine. Only time will tell.',
    planet: 'space_tatooine',
    location: [-6278, 58, 1601],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Black Venom Sea',
    description:
      "Black Venom Sea\n\nThe potent thug faction, the Black Suns, course through the veins of the Black Venom Sea, dominating the area with heavy laser fire and lethal missiles. Currently, the Black Suns hide behind Tatooine's shadow, waiting for the perfect time to strike with deadly precision and claim Tatooine's system as their own.\n\n",
    planet: 'space_tatooine',
    location: [6596, 944, 6747],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "POI: Pirate's (Muon) Gold",
    description:
      "Pirate's (Muon) Gold\n\nThe Bestine Pirates love their Muon Gold. In fact, the pirates named the area in which they dwell after the potent spice. Remarkably enough, the Bestine Pirates still fire with amazing accuracy and lethality, so much so that all who travel through the area are wise enough to keep their computer systems alert and weapons armed.",
    planet: 'space_tatooine',
    location: [6356, 5696, 6748],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Theed Waterfall',
    description:
      "The great falls located just outside the capital city of Theed are one of Naboo's great natural wonders.",
    planet: 'naboo',
    location: [-4627, 0, 4207],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Pygmy Torton Cave',
    description:
      'The galaxy holds many numbers of oddities. The pygmy tortons that dwell within this cave are certainly amongst the strangest.',
    planet: 'rori',
    location: [-1814, 0, -4533],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Ewok Tree Village',
    description:
      'One of the forest villages of the native Ewoks. Do not let their cuddly appearance fool you, these beings are noble and strong warriors able to survive the rigors of Endor.',
    planet: 'endor',
    location: [6, 0, -5],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Ewok Tree Village',
    description:
      'One of the forest villages of the native Ewoks. Do not let their cuddly appearance fool you, these beings are noble and strong warriors able to survive the rigors of Endor.',
    planet: 'endor',
    location: [4661, 0, -2425],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Tulrus Nesting Grounds',
    description:
      'The Tulrus Nesting Grounds are the domain of the large and dangerous tulrus. There are only two other creatures who seem to fair very well on the island, one is the vicious jundak and the other is the Sher Kar, which uses the large tulrus as a steady supply of fresh game.',
    planet: 'mustafar',
    location: [1148, 105, 639],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Mount Chaolt',
    description:
      'Lok has always been known as a fiery world. No place on the planet better suits that description better than this massive volcano.',
    planet: 'lok',
    location: [3091, 0, -4638],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Crash Site Excavation',
    description:
      "This is the site of an old crashed star ship. It was long ago excavated and stripped of most things but maybe there's still something useful out there.",
    planet: 'mustafar',
    location: [227, 141, 276],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'The Warren',
    description:
      "One of the Empire's top secret research facilities. Recently though, all communications with the facility has halted and the Empire fears the worse.",
    planet: 'dantooine',
    location: [-580, 0, -3763],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Weapons Depot',
    description:
      'This facility contains a large cache of weapons that both the Empire and Rebellion have been trying to get control of for some time.',
    planet: 'talus',
    location: [-4899, 0, -3137],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Weapon Development Facility',
    description:
      'This facility is highly sought after by both the Empire and Rebel forces and they have clashed for control of it on a number of occasions.',
    planet: 'naboo',
    location: [-6456, 0, -3235],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Woolamander Palace',
    description:
      'Woolamander Palace is an ancient relic built long ago by the Massassi. Its original name has long been forgotten but it was renamed after the nest of woolamanders who had taken up residence within its stone walls.',
    planet: 'yavin4',
    location: [467, 0, -693],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station I",
    description:
      "Empire's Station I\n\nThe Imperial forces present in Naboo Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_yavin4',
    location: [-4190, 1539, 4596],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Cyanomethanic Asteroid 1',
    description: 'Cyanomethanic Asteroid 1',
    planet: 'space_yavin4',
    location: [2077, 2688, -2977],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Petrochem Asteroid 1',
    description: 'Petrochem Asteroid 1',
    planet: 'space_yavin4',
    location: [5891, 6672, 3054],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Cyanomethanic Asteroid 2',
    description: 'Cyanomethanic Asteroid 2',
    planet: 'space_yavin4',
    location: [2057, -285, 1896],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Petrochem Asteroid 2',
    description: 'Petrochem Asteroid 2',
    planet: 'space_yavin4',
    location: [-2265, -47, 5530],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'Cyanomethanic Asteroid 3',
    description: 'Cyanomethanic Asteroid 3',
    planet: 'space_yavin4',
    location: [1848, -279, -971],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station II",
    description:
      "Empire's Station II\n\nThe Imperial forces present in Naboo Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_yavin4',
    location: [-6798, 4998, 4760],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: "Station: Empire's Station III",
    description:
      "Empire's Station III\n\nThe Imperial forces present in Naboo Space have opened its station to members of the Empire, wishing to declare themselves for the greater good of the fight against the Rebellion.\n\nInstructions\n\nTo declare in open Player vs Player (PvP), approach the Imperial Station and target it with the 'c'. Proceed to then communicate with the station, by typing /comm in spatial chat.",
    planet: 'space_yavin4',
    location: [85, -342, -57],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Nebulon 7',
    description:
      'Nebulon 7\n\nNamed after the Nebulon 7, the Rebel territory in Yavin4\'s space is highly saturated with YKL-37Rs, what the Rebels fondly call the "Nova Courier". Little else is known about the area, secrets which the Rebel Alliance hold dear.',
    planet: 'space_yavin4',
    location: [4237, -2161, 2590],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Nova 3',
    description:
      "Nova 3\n\nThe Nova 3, a long-time destroyed Rebel space station, rots in Yavin 4's war-ridden system, surrounded by Imperial defenders stricken to extinguish both the Rebellion and the Ni`lyahin Smugglers from existence. Unfortunately, the area lies in ruin, heavy fire from all sides splitting ship and asteroid alike.",
    planet: 'space_yavin4',
    location: [-194, 5113, 4947],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
  {
    name: 'POI: Lodestar Utopia',
    description:
      "Lodestar Utopia\n\nA simple mining station, harboring peacekeeping individuals who gather together in essence to keep the peace in Yavin 4's system and serve as a shining example to those looking upon them. Although armed with advanced weapon systems, the many factions living within the Lodestar Utopia thrive to keep their pilots' fingers off the trigger. Sometimes, gentle ideals must be ignored.\n",
    planet: 'space_yavin4',
    location: [6476, -6475, -6482],
    serverIds: null,
    type: WaypointType.PointOfInterestWaypoint,
  },
];

export default pointsOfInterest;
