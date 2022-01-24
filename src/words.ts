const defaultMessage = ' Using word of the day instead.'

export function getDayNumber() {
  const now = new Date()
  const start = new Date(2022, 0, 0)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }
  return day
}
export function getWordOfTheDay(day: number) {
  return answers[day]
}

// copied from Wordle source
const answers = [
  'raced',
  'broad',
  'hazes',
  'shake',
  'horns',
  'weeds',
  'shale',
  'scare',
  'piers',
  'masks',
  'coney',
  'steps',
  'nails',
  'after',
  'abate',
  'twigs',
  'miles',
  'prows',
  'vanwa',
  'meals',
  'snort',
  'final',
  'years',
  'hotly',
  'brute',
  'drink',
  'tooks',
  'sloth',
  'fools',
  'cheat',
  'feast',
  'mayor',
  'horny',
  'brook',
  'round',
  'wombs',
  'clasp',
  'vouch',
  'cones',
  'heals',
  'calls',
  'makes',
  'lawns',
  'house',
  'nests',
  'alive',
  'drunk',
  'hutch',
  'carve',
  'musty',
  'price',
  'hoots',
  'clear',
  'likes',
  'haste',
  'daunt',
  'brats',
  'ceded',
  'spoon',
  'cross',
  'thane',
  'rocky',
  'frodo',
  'downs',
  'rouse',
  'burst',
  'split',
  'grins',
  'swung',
  'evils',
  'towns',
  'broil',
  'knots',
  'agony',
  'exile',
  'twain',
  'creek',
  'sails',
  'erect',
  'vault',
  'fatty',
  'metal',
  'rinds',
  'surly',
  'cakes',
  'scars',
  'riven',
  'bonds',
  'coals',
  'troth',
  'named',
  'crush',
  'built',
  'track',
  'doors',
  'meets',
  'renew',
  'share',
  'bound',
  'study',
  'spelt',
  'jests',
  'spout',
  'quays',
  'stuck',
  'woods',
  'brace',
  'freer',
  'ahead',
  'joins',
  'gangs',
  'meats',
  'cause',
  'birch',
  'first',
  'tears',
  'bases',
  'larks',
  'small',
  'pitch',
  'casks',
  'sized',
  'mates',
  'narvi',
  'fixed',
  'anann',
  'durst',
  'avoid',
  'hatch',
  'dying',
  'faint',
  'pipes',
  'gloat',
  'dives',
  'marks',
  'noise',
  'reams',
  'murky',
  'dares',
  'truer',
  'three',
  'paint',
  'grass',
  'blest',
  'breed',
  'dusst',
  'heats',
  'booms',
  'studs',
  'ruddy',
  'shelf',
  'dryad',
  'quill',
  'walda',
  'rents',
  'slugs',
  'scout',
  'briar',
  'trail',
  'gaily',
  'close',
  'camps',
  'berry',
  'blame',
  'merit',
  'leggy',
  'liken',
  'swirl',
  'widow',
  'ithil',
  'reign',
  'clime',
  'array',
  'isles',
  'herbs',
  'quote',
  'etten',
  'harad',
  'swans',
  'manes',
  'funny',
  'lived',
  'shoes',
  'cloud',
  'began',
  'blind',
  'eldar',
  'woody',
  'screw',
  'hullo',
  'scary',
  'pearl',
  'puffs',
  'space',
  'clock',
  'spiny',
  'along',
  'eored',
  'grubb',
  'apron',
  'youth',
  'hated',
  'grimy',
  'fried',
  'boggy',
  'laugh',
  'walls',
  'curly',
  'prime',
  'eaten',
  'tithe',
  'beast',
  'stuff',
  'testy',
  'brick',
  'wrung',
  'zirak',
  'flare',
  'cries',
  'comer',
  'brego',
  'croak',
  'spent',
  'woman',
  'arose',
  'heirs',
  'heath',
  'rules',
  'walks',
  'waked',
  'tipsy',
  'fissh',
  'drear',
  'dazed',
  'siege',
  'fatal',
  'clang',
  'biter',
  'sleek',
  'faces',
  'fords',
  'refer',
  'veils',
  'acres',
  'fells',
  'noses',
  'spill',
  'lakes',
  'steal',
  'risks',
  'noisy',
  'flown',
  'skirt',
  'frail',
  'stick',
  'spare',
  'waxed',
  'sneak',
  'ungol',
  'vomit',
  'ciril',
  'plant',
  'quite',
  'nohow',
  'sides',
  'warns',
  'bears',
  'equal',
  'moves',
  'lands',
  'sable',
  'wires',
  'drawn',
  'spurt',
  'drown',
  'dusty',
  'snore',
  'since',
  'raise',
  'doubt',
  'mound',
  'flung',
  'vital',
  'agree',
  'moved',
  'beset',
  'wafer',
  'aided',
  'wings',
  'stout',
  'terms',
  'merry',
  'wight',
  'hooks',
  'fangs',
  'elbow',
  'fight',
  'leaps',
  'table',
  'knife',
  'cargo',
  'stems',
  'blare',
  'jolly',
  'works',
  'smelt',
  'tusks',
  'glory',
  'elven',
  'claim',
  'vardo',
  'happy',
  'finer',
  'month',
  'huger',
  'brush',
  'civil',
  'lasto',
  'sneer',
  'swath',
  'deeds',
  'thank',
  'grima',
  'hador',
  'every',
  'chase',
  'voted',
  'pelts',
  'tongs',
  'right',
  'eomer',
  'gasps',
  'dived',
  'feint',
  'mixed',
  'lives',
  'imply',
  'fault',
  'bower',
  'rocks',
  'among',
  'snarl',
  'rough',
  'glare',
  'court',
  'young',
  'seize',
  'mists',
  'laden',
  'alder',
  'prove',
  'glede',
  'pains',
  'nenya',
  'muddy',
  'means',
  'inset',
  'arwen',
  'fishy',
  'south',
  'sends',
  'mouth',
  'pouch',
  'purer',
  'shank',
  'harps',
  'dinen',
  'helms',
  'about',
  'sweat',
  'hides',
  'hitch',
  'aglar',
  'stiff',
  'dells',
  'hurin',
  'gayer',
  'motto',
  'onset',
  'waxes',
  'slept',
  'could',
  'dared',
  'orome',
  'arrow',
  'fewer',
  'tenth',
  'roofs',
  'troll',
  'crept',
  'women',
  'organ',
  'sting',
  'barbs',
  'tombs',
  'hacks',
  'daddy',
  'tread',
  'giddy',
  'spite',
  'fumes',
  'width',
  'beorn',
  'stoop',
  'board',
  'chink',
  'frank',
  'haunt',
  'forty',
  'beans',
  'spars',
  'dance',
  'hoops',
  'wells',
  'hoary',
  'tamed',
  'shame',
  'yells',
  'slash',
  'fears',
  'brows',
  'anger',
  'mices',
  'swaps',
  'hover',
  'stung',
  'furry',
  'still',
  'seeks',
  'gorse',
  'limit',
  'robin',
  'decay',
  'mills',
  'steer',
  'spied',
  'begin',
  'ephel',
  'stare',
  'reeds',
  'raven',
  'aimed',
  'takes',
  'coats',
  'glade',
  'babel',
  'combs',
  'cloth',
  'wrack',
  'bolts',
  'heels',
  'utter',
  'flout',
  'varda',
  'worse',
  'stand',
  'grand',
  'folco',
  'amend',
  'earth',
  'early',
  'moist',
  'bared',
  'trace',
  'wreck',
  'brake',
  'grasp',
  'weave',
  'mossy',
  'drive',
  'byres',
  'wills',
  'spots',
  'waved',
  'spear',
  'afore',
  'issue',
  'stars',
  'oaths',
  'crest',
  'wolds',
  'wisps',
  'gnats',
  'grown',
  'woses',
  'slips',
  'bathe',
  'eased',
  'choke',
  'block',
  'quick',
  'shift',
  'ridge',
  'smoky',
  'undue',
  'gaunt',
  'lasts',
  'stale',
  'clung',
  'looks',
  'poles',
  'voice',
  'slush',
  'rigid',
  'gimli',
  'climb',
  'finch',
  'lofty',
  'limbs',
  'lotho',
  'sawed',
  'cried',
  'hours',
  'covet',
  'aloud',
  'gongs',
  'slung',
  'stern',
  'sixth',
  'vilya',
  'firth',
  'smell',
  'group',
  'taste',
  'hardy',
  'porch',
  'rains',
  'reeks',
  'dimly',
  'cares',
  'wives',
  'forth',
  'banks',
  'barns',
  'gulls',
  'brief',
  'honey',
  'gloom',
  'bilbo',
  'eager',
  'lacks',
  'press',
  'nurse',
  'wedge',
  'mused',
  'dwelt',
  'offer',
  'estre',
  'rated',
  'grist',
  'laved',
  'sworn',
  'eyots',
  'domed',
  'reach',
  'redly',
  'wield',
  'talks',
  'wiser',
  'pored',
  'waned',
  'habit',
  'hints',
  'click',
  'flint',
  'oddly',
  'cared',
  'rohan',
  'besom',
  'hawks',
  'broom',
  'suits',
  'hedge',
  'drogo',
  'musst',
  'fetch',
  'noose',
  'ghash',
  'hallo',
  'faced',
  'bells',
  'staff',
  'greed',
  'leafy',
  'erred',
  'sleep',
  'balin',
  'weigh',
  'cheek',
  'hosts',
  'madly',
  'meant',
  'bleak',
  'owner',
  'blank',
  'gazed',
  'gorge',
  'winds',
  'lying',
  'wheew',
  'pleas',
  'learn',
  'shock',
  'lines',
  'grove',
  'apply',
  'helps',
  'peace',
  'fumed',
  'topic',
  'hocks',
  'cliff',
  'sunny',
  'shade',
  'silly',
  'lodes',
  'drove',
  'tight',
  'spell',
  'gifts',
  'purse',
  'lusty',
  'lamps',
  'rissk',
  'dwell',
  'filth',
  'ditch',
  'vents',
  'lends',
  'belch',
  'frame',
  'slope',
  'stray',
  'panic',
  'imlad',
  'worms',
  'store',
  'tarry',
  'vedui',
  'maybe',
  'layer',
  'fades',
  'thumb',
  'laita',
  'perky',
  'never',
  'chill',
  'ferry',
  'blast',
  'going',
  'crave',
  'derry',
  'havoc',
  'blink',
  'title',
  'leofa',
  'spate',
  'noted',
  'celos',
  'ossir',
  'seven',
  'beads',
  'reins',
  'flood',
  'large',
  'gaped',
  'unsay',
  'spray',
  'allay',
  'goest',
  'guile',
  'wheel',
  'scale',
  'curls',
  'hasty',
  'folca',
  'blown',
  'grant',
  'geese',
  'berth',
  'seals',
  'horse',
  'pinch',
  'wrest',
  'mover',
  'boils',
  'bring',
  'posts',
  'rumil',
  'gulfs',
  'cooks',
  'smaug',
  'ramar',
  'drier',
  'domes',
  'ninth',
  'boots',
  'curve',
  'event',
  'shout',
  'skill',
  'sinew',
  'heart',
  'baruk',
  'loads',
  'warms',
  'lured',
  'lumps',
  'ferny',
  'scion',
  'added',
  'tides',
  'beams',
  'burns',
  'scowl',
  'slant',
  'lifts',
  'goods',
  'dried',
  'ugluk',
  'taken',
  'ninny',
  'fresh',
  'fifty',
  'extra',
  'prank',
  'rings',
  'lodge',
  'cocks',
  'stead',
  'dealt',
  'cairn',
  'chest',
  'ranks',
  'erech',
  'lithe',
  'train',
  'olive',
  'notch',
  'midst',
  'enemy',
  'ethir',
  'troop',
  'stark',
  'carry',
  'roast',
  'fared',
  'crowd',
  'truce',
  'lucky',
  'mason',
  'later',
  'alarm',
  'garth',
  'rills',
  'spoil',
  'crook',
  'smash',
  'lower',
  'grime',
  'wards',
  'swell',
  'piece',
  'known',
  'lunch',
  'think',
  'folks',
  'beren',
  'cords',
  'loyal',
  'sheen',
  'aches',
  'neigh',
  'using',
  'tramp',
  'music',
  'stake',
  'hurts',
  'fires',
  'dense',
  'waits',
  'caras',
  'sorry',
  'meres',
  'heave',
  'steep',
  'mount',
  'eleni',
  'dwarf',
  'blows',
  'label',
  'visit',
  'water',
  'wafts',
  'posed',
  'saith',
  'faded',
  'flask',
  'annon',
  'foray',
  'great',
  'pawed',
  'deeps',
  'wrote',
  'chubb',
  'soils',
  'smart',
  'minds',
  'crust',
  'mercy',
  'pella',
  'urged',
  'brink',
  'while',
  'lined',
  'newly',
  'treat',
  'forts',
  'bones',
  'races',
  'smite',
  'march',
  'cower',
  'tryst',
  'catch',
  'vague',
  'mazes',
  'tough',
  'scene',
  'dikes',
  'aloft',
  'spire',
  'under',
  'fated',
  'joint',
  'scent',
  'cleft',
  'front',
  'sward',
  'slime',
  'slink',
  'birds',
  'sties',
  'ankle',
  'apart',
  'caves',
  'match',
  'snout',
  'rowan',
  'delta',
  'abuse',
  'narya',
  'aback',
  'third',
  'sober',
  'stump',
  'glens',
  'dozen',
  'shalt',
  'party',
  'surge',
  'child',
  'build',
  'curse',
  'panes',
  'moats',
  'hates',
  'tales',
  'brain',
  'naith',
  'threw',
  'yulma',
  'orbed',
  'fleet',
  'suave',
  'thyme',
  'trunk',
  'fibre',
  'buyer',
  'globe',
  'saves',
  'parts',
  'cerin',
  'ledge',
  'squib',
  'speed',
  'grief',
  'phial',
  'snick',
  'write',
  'depth',
  'spies',
  'hills',
  'knows',
  'whole',
  'coils',
  'brand',
  'wrong',
  'draws',
  'seems',
  'quail',
  'boles',
  'chain',
  'tried',
  'darts',
  'broth',
  'begun',
  'meads',
  'waken',
  'ready',
  'skull',
  'steam',
  'ewers',
  'noble',
  'grind',
  'songs',
  'aloof',
  'rolls',
  'above',
  'ideas',
  'spade',
  'annun',
  'fiery',
  'hisie',
  'stink',
  'leech',
  'cloak',
  'umbar',
  'ebony',
  'sound',
  'awake',
  'empty',
  'lanes',
  'traps',
  'jewel',
  'beard',
  'guide',
  'froze',
  'found',
  'gnaws',
  'creep',
  'shred',
  'clove',
  'shire',
  'snaga',
  'hoped',
  'chant',
  'swoop',
  'halts',
  'steed',
  'where',
  'hound',
  'kings',
  'money',
  'uruks',
  'wager',
  'yards',
  'veins',
  'apace',
  'sinks',
  'abide',
  'crumb',
  'fever',
  'stool',
  'astir',
  'caged',
  'niche',
  'hairs',
  'rider',
  'spend',
  'paces',
  'sharp',
  'swart',
  'smoke',
  'dress',
  'cover',
  'amuse',
  'flags',
  'cream',
  'bliss',
  'count',
  'shall',
  'locks',
  'chair',
  'gross',
  'angle',
  'ohtar',
  'belie',
  'jools',
  'creak',
  'occur',
  'crisp',
  'plays',
  'orald',
  'plead',
  'ashen',
  'blade',
  'risen',
  'mirky',
  'elves',
  'paler',
  'prize',
  'slimy',
  'start',
  'afoot',
  'aside',
  'mumak',
  'punch',
  'waver',
  'viols',
  'echor',
  'beech',
  'rogue',
  'harry',
  'hoard',
  'rises',
  'idiot',
  'prays',
  'otter',
  'until',
  'rover',
  'hears',
  'tells',
  'spike',
  'tower',
  'hewed',
  'lazed',
  'wound',
  'wider',
  'acted',
  'guard',
  'shell',
  'knock',
  'risky',
  'pools',
  'moria',
  'menel',
  'fling',
  'misty',
  'smote',
  'swish',
  'swear',
  'argue',
  'caita',
  'durin',
  'sears',
  'flank',
  'await',
  'brunt',
  'caked',
  'silks',
  'weedy',
  'mouse',
  'speak',
  'throw',
  'adopt',
  'strip',
  'woven',
  'admit',
  'ashes',
  'booth',
  'place',
  'fully',
  'boats',
  'tilth',
  'dozed',
  'steel',
  'hoods',
  'smile',
  'tasty',
  'hopes',
  'tying',
  'alike',
  'slate',
  'death',
  'dirge',
  'ropes',
  'stays',
  'hairy',
  'hythe',
  'chose',
  'range',
  'dusky',
  'conin',
  'sooth',
  'cedar',
  'spark',
  'afire',
  'image',
  'paved',
  'grond',
  'fitly',
  'squat',
  'vigil',
  'swept',
  'spoke',
  'shady',
  'pairs',
  'force',
  'angry',
  'black',
  'north',
  'boxes',
  'plink',
  'dream',
  'sheet',
  'watch',
  'gully',
  'beryl',
  'wakes',
  'dales',
  'comic',
  'livid',
  'worry',
  'fancy',
  'trial',
  'usual',
  'signs',
  'herds',
  'being',
  'lawks',
  'bored',
  'piles',
  'drank',
  'borne',
  'value',
  'prowl',
  'games',
  'spurs',
  'rayed',
  'quiet',
  'green',
  'ruled',
  'bloom',
  'trees',
  'glows',
  'world',
  'grate',
  'boner',
  'liked',
  'parth',
  'rifts',
  'other',
  'queen',
  'hilts',
  'crack',
  'feels',
  'shine',
  'tunic',
  'snare',
  'total',
  'thief',
  'flows',
  'wanes',
  'casts',
  'sheds',
  'claws',
  'lords',
  'doing',
  'waves',
  'beats',
  'ghost',
  'brood',
  'fosse',
  'weary',
  'backs',
  'undid',
  'moans',
  'khand',
  'night',
  'white',
  'timid',
  'forks',
  'uncle',
  'dillo',
  'guise',
  'sling',
  'nasty',
  'bulky',
  'turin',
  'minas',
  'gleam',
  'westu',
  'order',
  'plots',
  'sheep',
  'twice',
  'level',
  'bends',
  'apple',
  'fails',
  'worth',
  'tools',
  'uncut',
  'couch',
  'laced',
  'halls',
  'biers',
  'clink',
  'bites',
  'entry',
  'flute',
  'hoofs',
  'ruler',
  'glass',
  'awoke',
  'upset',
  'grain',
  'lance',
  'flats',
  'grots',
  'aught',
  'unfit',
  'alien',
  'sword',
  'dregs',
  'human',
  'thong',
  'rally',
  'rival',
  'wants',
  'sacks',
  'repay',
  'ended',
  'shave',
  'irked',
  'names',
  'flets',
  'costs',
  'grace',
  'rinse',
  'keeps',
  'harri',
  'arise',
  'flick',
  'bough',
  'files',
  'edges',
  'throb',
  'scour',
  'chips',
  'solid',
  'slier',
  'caper',
  'skins',
  'plunk',
  'probe',
  'jokes',
  'loped',
  'cowed',
  'acorn',
  'clubs',
  'edged',
  'eyrie',
  'shone',
  'ached',
  'waist',
  'sores',
  'baked',
  'runes',
  'harsh',
  'roses',
  'sages',
  'sandy',
  'proud',
  'quest',
  'bacon',
  'those',
  'perch',
  'judge',
  'sedge',
  'which',
  'lurch',
  'belts',
  'mourn',
  'trust',
  'given',
  'enter',
  'cruel',
  'rusty',
  'eagle',
  'speck',
  'lumpy',
  'truck',
  'bowls',
  'saved',
  'farms',
  'whine',
  'leave',
  'howls',
  'diary',
  'roars',
  'sixty',
  'hilly',
  'dully',
  'yours',
  'spasm',
  'pried',
  'proof',
  'crash',
  'stamp',
  'raids',
  'alley',
  'holly',
  'falls',
  'skies',
  'leads',
  'grave',
  'aware',
  'bread',
  'enjoy',
  'pride',
  'field',
  'rosie',
  'tails',
  'woken',
  'shaft',
  'times',
  'lowly',
  'budge',
  'these',
  'finds',
  'score',
  'badly',
  'storm',
  'straw',
  'there',
  'squad',
  'items',
  'booty',
  'blush',
  'doner',
  'oiale',
  'badge',
  'fount',
  'brave',
  'sniff',
  'elder',
  'stone',
  'girth',
  'tense',
  'wrist',
  'brown',
  'alone',
  'befit',
  'slack',
  'swore',
  'vivid',
  'jumps',
  'words',
  'rarum',
  'false',
  'lists',
  'noser',
  'tempt',
  'teens',
  'delay',
  'moors',
  'grope',
  'hadst',
  'loved',
  'birth',
  'wages',
  'tooth',
  'toast',
  'sadly',
  'holes',
  'chasm',
  'untie',
  'thror',
  'devil',
  'books',
  'latch',
  'flesh',
  'aisle',
  'wargs',
  'floor',
  'crown',
  'knelt',
  'coomb',
  'swoon',
  'linen',
  'alter',
  'print',
  'pause',
  'older',
  'baths',
  'stair',
  'scarf',
  'surer',
  'exact',
  'maker',
  'chaps',
  'outer',
  'champ',
  'bandy',
  'hands',
  'slain',
  'sweep',
  'tired',
  'plate',
  'shyly',
  'knees',
  'worst',
  'mined',
  'tries',
  'piled',
  'windy',
  'odour',
  'model',
  'boned',
  'dirty',
  'fills',
  'boast',
  'scoop',
  'votes',
  'often',
  'pages',
  'short',
  'basin',
  'palms',
  'paths',
  'snake',
  'foggy',
  'dizzy',
  'anigh',
  'ought',
  'chief',
  'thine',
  'teeth',
  'rapid',
  'yield',
  'cease',
  'clean',
  'river',
  'drums',
  'stole',
  'stock',
  'slunk',
  'slabs',
  'hinge',
  'guest',
  'omens',
  'nooks',
  'scalp',
  'tolls',
  'brisk',
  'weeks',
  'fowls',
  'swing',
  'sweet',
  'eowyn',
  'amiss',
  'gelin',
  'bands',
  'story',
  'needs',
  'homes',
  'loops',
  'greet',
  'swine',
  'check',
  'trove',
  'sizes',
  'handy',
  'eaves',
  'raged',
  'folds',
  'belly',
  'packs',
  'revel',
  'waste',
  'wears',
  'dates',
  'shook',
  'flies',
  'mirth',
  'thing',
  'waded',
  'scorn',
  'binds',
  'gebir',
  'wilds',
  'cheer',
  'petty',
  'power',
  'inner',
  'sense',
  'carts',
  'runda',
  'duath',
  'glint',
  'comes',
  'break',
  'crazy',
  'stage',
  'sight',
  'knoll',
  'fifth',
  'stood',
  'blaze',
  'twist',
  'craft',
  'plans',
  'atone',
  'facts',
  'shape',
  'bosom',
  'pines',
  'moons',
  'asked',
  'amaze',
  'seats',
  'patch',
  'flash',
  'wroth',
  'fists',
  'verge',
  'hangs',
  'arnen',
  'baraz',
  'rebel',
  'gives',
  'today',
  'amble',
  'daily',
  'pours',
  'doled',
  'gloin',
  'fence',
  'their',
  'hurry',
  'longs',
  'tiers',
  'faith',
  'gazes',
  'mires',
  'anvil',
  'luini',
  'light',
  'leant',
  'holds',
  'armed',
  'thorn',
  'local',
  'drift',
  'heads',
  'thain',
  'error',
  'teach',
  'truly',
  'giver',
  'bless',
  'roads',
  'bight',
  'snail',
  'leapt',
  'mines',
  'notes',
  'snows',
  'state',
  'wraps',
  'peril',
  'again',
  'serve',
  'drops',
  'least',
  'talan',
  'would',
  'bofur',
  'flock',
  'plain',
  'loves',
  'fates',
  'venom',
  'humps',
  'below',
  'tents',
  'stony',
  'flame',
  'ceorl',
  'giant',
  'peats',
  'truth',
  'lassi',
  'winch',
  'shins',
  'token',
  'cling',
  'tones',
  'blood',
  'heaps',
  'fiefs',
  'clash',
  'bushy',
  'rooms',
  'islet',
  'eerie',
  'fenny',
  'plied',
  'pence',
  'shrug',
  'edain',
  'peeps',
  'touch',
  'filed',
  'dunno',
  'growl',
  'crags',
  'whips',
  'ivory',
  'gable',
  'wanly',
  'sorts',
  'union',
  'kinds',
  'stain',
  'opens',
  'gusts',
  'kills',
  'linte',
  'baran',
  'folde',
  'erain',
  'clack',
  'pawns',
  'wiles',
  'fours',
  'abode',
  'vales',
  'point',
  'queer',
  'swift',
  'float',
  'forms',
  'roped',
  'clump',
  'bowed',
  'sires',
  'hazel',
  'haven',
  'combe',
  'galen',
  'reply',
  'safer',
  'peaks',
  'melui',
  'ladle',
  'paced',
  'ruins',
  'barer',
  'tunes',
  'foods',
  'heavy',
  'loose',
  'rides',
  'rhyme',
  'twang',
  'arnor',
  'shore',
  'verse',
  'ships',
  'ernil',
  'delve',
  'whose',
  'lover',
  'might',
  'realm',
  'broke',
  'exits',
  'charm',
  'unlit',
  'crows',
  'forge',
  'sheer',
  'shows',
  'minor',
  'shorn',
  'trick',
  'spake',
  'robed',
  'shoot',
  'rowed',
  'april',
  'roots',
  'torch',
  'bifur',
  'grows',
  'abyss',
  'stops',
  'mould',
  'dread',
  'alert',
  'turns',
  'vines',
  'sauce',
  'lurks',
  'gates',
  'magic',
  'valar',
  'cured',
  'eight',
  'bench',
  'owing',
  'hence',
  'heard',
  'shown',
  'shirt',
  'deals',
  'wrath',
  'thick',
  'wains',
  'avail',
  'allow',
  'chalk',
  'newer',
  'snowy',
  'upper',
  'groan',
  'sport',
  'necks',
  'jolts',
  'aldor',
  'penna',
  'tarks',
  'legal',
  'crawl',
  'pupil',
  'fruit',
  'robes',
  'liege',
  'folly',
  'naked',
  'stank',
  'ammen',
  'frost',
  'rainy',
  'guess',
  'didst',
]

export const allWords = [...answers]
