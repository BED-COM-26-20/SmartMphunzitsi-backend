const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('../models/Lesson');

dotenv.config();

const allLessons = [


 s
2. Amphibians
- Habitat: live in water as larvae, on land as adults
- Skin: smooth, moist, without scales (glands keep skin moist)
- Respiration: gills in larvae; lungs and skin in adults
- Limbs: four (tetrapods), webbed feet in many
- Temperature: cold-blooded
- Reproduction: lay eggs in water (jelly-like)
- Examples: frog, toad, salamander

3. Reptiles
- Habitat: mostly terrestrial (some aquatic, e.g., crocodile)
- Skin: dry, covered with scales or scutes
- Respiration: lungs throughout life
- Limbs: four (or absent in snakes)
- Temperature: cold-blooded
- Reproduction: lay eggs on land (amniotic eggs)
- Examples: snake, lizard, crocodile, chameleon, tortoise

4. Birds (Class Aves)
- Habitat: mostly aerial (fly), but some aquatic (ducks) or terrestrial (ostrich)
- Skin: covered with feathers (contour feathers for flight, down feathers for insulation)
- Respiration: lungs with air sacs
- Limbs: forelimbs modified into wings; hindlimbs for perching, walking, or swimming
- Temperature: warm-blooded (homeothermic)
- Reproduction: lay eggs with hard shells (incubated by parents)
- Examples: chicken, eagle, owl, goose

5. Mammals (Class Mammalia)
- Habitat: wide variety (terrestrial, aquatic – whale, flying – bat)
- Skin: covered with hair or fur
- Respiration: lungs
- Limbs: four (except aquatic mammals modified flippers)
- Temperature: warm-blooded
- Reproduction: mostly give birth to live young (viviparous); produce milk from mammary glands
- Examples: human, cow, goat, dog, bat, whale

In Malawi, we see fish in Lake Malawi, frogs in wetlands, lizards in gardens, birds everywhere, and mammals like cows, goats, and humans.`,
  summary: 'Vertebrates have a backbone. Five classes: fish (gills, scales, fins), amphibians (moist skin, metamorphosis), reptiles (dry scales), birds (feathers, wings), mammals (hair, mammary glands, warm-blooded).',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Lake Malawi Fish', description: 'Chambo is a vertebrate fish with scales and fins.' },
    { title: 'Malawi Mammals', description: 'Cattle and goats are warm-blooded mammals with hair.' }
  ],
  practiceQuestions: [
    { question: 'Which class of vertebrates has feathers and wings?', answer: 'Birds', hint: 'Aves.' },
    { question: 'What is the main difference between amphibians and reptiles?', answer: 'Amphibians have moist, scaleless skin; reptiles have dry, scaly skin.', hint: 'Skin type and habitat.' }
  ]
},

// ======================================================================
// BIOLOGY - FORM 2 (continued)
// ======================================================================

// Topic: Nervous system
{
  subject: 'Biology',
  form: 'Form 2',
  topic: 'Nervous System',
  lessonNumber: 1,
  lessonTitle: 'Parts of the Nervous System and Their Functions',
  lessonId: 'biology-f2-nervous-system-1',
  order: 65,
  learningObjectives: [
    'Identify the parts of the nervous system (central, peripheral, autonomic)',
    'Describe the functions of the brain, spinal cord, and nerves'
  ],
  introduction: 'The nervous system controls all your actions – from breathing to thinking to moving. Today, we will learn the main parts of the nervous system and what they do.',
  keyPoints: [
    'Central nervous system (CNS): brain and spinal cord.',
    'Peripheral nervous system (PNS): nerves connecting CNS to the rest of the body.',
    'Autonomic nervous system: controls involuntary actions (heartbeat, digestion).',
    'Brain: cerebrum (thinking, memory, senses), cerebellum (balance, coordination), medulla oblongata (breathing, heartbeat).',
    'Spinal cord: relays messages between brain and body; controls reflex actions.',
    'Nerves: bundles of neurons that transmit impulses.'
  ],
  detailedContent: `The Nervous System – Main Parts

1. Central Nervous System (CNS)
   - Brain: master control centre.
     * Cerebrum: largest part; controls voluntary actions, thought, memory, senses (sight, hearing, touch, taste, smell).
     * Cerebellum: coordinates balance and fine movements (e.g., walking, writing).
     * Medulla oblongata: controls involuntary actions like breathing, heartbeat, blood pressure, swallowing.
   - Spinal cord: thick bundle of nerves inside the vertebral column. It relays messages between the brain and the body. Also controls spinal reflexes (e.g., pulling hand from hot object).

2. Peripheral Nervous System (PNS)
   - Cranial nerves (12 pairs) from brain; spinal nerves (31 pairs) from spinal cord.
   - Sensory nerves: carry impulses from sense organs to CNS.
   - Motor nerves: carry impulses from CNS to muscles and glands.

3. Autonomic Nervous System
   - Controls involuntary functions: heart rate, digestion, breathing rate, gland secretion.
   - Two divisions: sympathetic (fight or flight) and parasympathetic (rest and digest).

Functions in Detail

- Cerebrum: divided into left and right hemispheres. Left hemisphere controls right side of body and is involved in language, logic; right controls left side and is involved in creativity, spatial awareness.
- Cerebellum: ensures smooth, coordinated movements. Damage results in shaky movements.
- Medulla oblongata: vital centre – damage can be fatal.
- Spinal cord: also contains reflex arcs – rapid responses that do not involve brain.

Effects of alcohol and drug abuse on the nervous system

- Alcohol: slows down brain activity, impairs coordination, judgment, reaction time. Long-term abuse can damage brain cells.
- Indian hemp (cannabis): affects memory, concentration, coordination; can trigger mental health issues.

Malawi Example: Drinking alcohol before driving is illegal because it slows reaction time, increasing accident risk. Health campaigns warn against substance abuse.`,
  summary: 'Nervous system: CNS (brain and spinal cord), PNS (nerves), autonomic (involuntary). Cerebrum for thought, cerebellum for balance, medulla for vital functions. Spinal cord relays messages and controls reflexes.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Alcohol and Driving', description: 'Drinking slows reflexes, causing accidents.' },
    { title: 'Spinal Reflex', description: 'Pulling hand from hot stove without thinking.' }
  ],
  practiceQuestions: [
    { question: 'Which part of the brain controls breathing and heartbeat?', answer: 'Medulla oblongata', hint: 'Vital centre.' },
    { question: 'What is the function of the peripheral nervous system?', answer: 'Connects CNS to limbs and organs, carrying sensory and motor signals.', hint: 'Nerves outside brain and spinal cord.' }
  ]
},

// Topic: Sense organs - eye and ear
{
  subject: 'Biology',
  form: 'Form 2',
  topic: 'Sense Organs',
  lessonNumber: 1,
  lessonTitle: 'Structure and Function of the Eye and Ear',
  lessonId: 'biology-f2-sense-organs-1',
  order: 66,
  learningObjectives: [
    'Identify the parts of the human eye and ear and their functions',
    'Explain the common defects of the eye (short sight, long sight) and how they are corrected'
  ],
  introduction: 'How do you see the world? How do you hear sounds? The eye and ear are specialised sense organs. Today, we will learn their structures and how they work.',
  keyPoints: [
    'Eye parts: cornea (focuses light), iris (controls pupil size), lens (focuses on retina), retina (light-sensitive cells), optic nerve (sends signals to brain).',
    'Ear parts: outer ear (collects sound), eardrum (vibrates), ossicles (amplify vibrations), cochlea (converts to electrical signals), auditory nerve (to brain).',
    'Short sight (myopia): eyeball too long, image in front of retina – corrected with concave lens.',
    'Long sight (hyperopia): eyeball too short, image behind retina – corrected with convex lens.'
  ],
  detailedContent: `The Eye – Parts and Functions

- Cornea: transparent outer layer; bends (refracts) light into the eye.
- Iris: coloured part; controls amount of light by adjusting pupil size (dilates in dim light, constricts in bright light).
- Lens: flexible, changes shape to focus light on retina (accommodation).
- Retina: contains rod cells (black/white, dim light) and cone cells (colour, bright light). Light creates chemical changes, producing nerve impulses.
- Optic nerve: carries impulses from retina to brain's visual cortex.

The Ear – Parts and Functions

- Outer ear (pinna): collects sound waves.
- Ear canal: directs sound to eardrum.
- Eardrum (tympanic membrane): vibrates when sound waves hit it.
- Ossicles (hammer, anvil, stirrup): three tiny bones in middle ear; amplify vibrations.
- Cochlea: fluid-filled, spiral-shaped; contains hair cells that convert vibrations into electrical signals.
- Auditory nerve: carries signals to brain for interpretation.
- Eustachian tube: equalises air pressure between middle ear and throat.

The ear also contains semicircular canals (balance) – detect head rotation.

Defects of the Eye

1. Myopia (short sight): can see near objects clearly, but distant objects blurry. Eyeball too long, image focuses in front of retina. Correction: concave (diverging) lens.

2. Hyperopia (long sight): can see distant objects clearly, but near objects blurry. Eyeball too short, image focuses behind retina. Correction: convex (converging) lens.

3. Astigmatism: irregular curvature of cornea or lens, causes blurred vision at all distances. Corrected with cylindrical lens.

Care for Eyes, Ears, and Skin

- Eyes: avoid bright light, wear sunglasses, eat vitamin A-rich foods (carrots, pumpkin), rest eyes.
- Ears: avoid loud noises, do not insert objects, keep dry.
- Skin: clean regularly, protect from sun, use moisturiser.

Malawi Example: Many people suffer from long sight with age. Reading glasses (convex lenses) help. Short sight is common – concave lenses correct it.`,
  summary: 'Eye parts: cornea, lens, retina, optic nerve. Ear parts: outer ear, eardrum, ossicles, cochlea, auditory nerve. Short sight corrected with concave lens; long sight with convex lens.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Vitamin A for Eye Health', description: 'Eating pumpkin and carrots prevents night blindness.' },
    { title: 'Reading Glasses', description: 'Convex lenses help elders with long sight read.' }
  ],
  practiceQuestions: [
    { question: 'What type of lens corrects short sight?', answer: 'Concave (diverging) lens', hint: 'Myopia correction.' },
    { question: 'Which part of the ear converts vibrations into electrical signals?', answer: 'Cochlea', hint: 'Spiral organ with hair cells.' }
  ]
},

// Topic: Human diseases - diarrhoeal diseases
{
  subject: 'Biology',
  form: 'Form 2',
  topic: 'Human Diseases',
  lessonNumber: 1,
  lessonTitle: 'Diarrhoeal Diseases: Cholera and Dysentery',
  lessonId: 'biology-f2-diarrhoeal-diseases-1',
  order: 67,
  learningObjectives: [
    'Identify the causative agents, signs, and transmission of cholera and dysentery',
    'Explain prevention and treatment of diarrhoeal diseases'
  ],
  introduction: 'Diarrhoea is a major cause of death in children, especially in areas with unsafe water. Today, we will learn about cholera and dysentery – two dangerous diarrhoeal diseases – and how to prevent them.',
  keyPoints: [
    'Cholera: caused by Vibrio cholerae bacteria. Transmitted through contaminated water/food. Signs: severe watery diarrhoea (rice water stools), vomiting, rapid dehydration.',
    'Dysentery: caused by Shigella bacteria (bacillary) or Entamoeba histolytica (amoebic). Signs: bloody diarrhoea, fever, abdominal pain.',
    'Transmission: faecal-oral route (contaminated water, food, hands, flies).',
    'Prevention: safe water, handwashing, proper sanitation, food hygiene.',
    'Treatment: oral rehydration solution (ORS), zinc, antibiotics for severe cases.'
  ],
  detailedContent: `Cholera

Causative agent: Bacterium Vibrio cholerae.
Signs and symptoms:
- Profuse, painless, watery diarrhoea (described as "rice water" stools)
- Vomiting
- Rapid dehydration (thirst, sunken eyes, low urine output)
- Muscle cramps
- If untreated, can lead to kidney failure and death within hours.

Transmission: Faecal-oral route. Contaminated water (drinking or washing food), contaminated food (especially shellfish, raw vegetables), hands of infected persons, flies.

Dysentery

Two main types:
1. Bacillary dysentery: caused by Shigella bacteria.
2. Amoebic dysentery: caused by protozoan Entamoeba histolytica.

Signs and symptoms:
- Bloody diarrhoea (mucus and blood)
- Fever
- Abdominal pain and cramps
- Tenesmus (painful straining)

Transmission: Same as cholera – faecal-oral.

Prevention and Control

- Safe water: boil or chlorinate drinking water.
- Handwashing with soap after toilet and before eating.
- Proper sanitation: use latrines, avoid open defecation.
- Food hygiene: cook food thoroughly, protect from flies.
- Vaccination: oral cholera vaccine available in some areas.

Treatment

- Most important: Oral Rehydration Solution (ORS) – sugar and salt in clean water. Replace lost fluids.
- Zinc supplements (reduce duration and severity).
- Antibiotics for severe cases (doxycycline, azithromycin for cholera; ciprofloxacin for shigella).
- Severe dehydration: intravenous fluids.

In Malawi, ORS packets are available at health centres. Communities are taught to make home-made ORS: 1 litre clean water + 6 level teaspoons sugar + half level teaspoon salt.`,
  summary: 'Cholera (rice water stools) and dysentery (bloody diarrhoea) are caused by bacteria. Transmitted via contaminated water/food. Prevention: safe water, handwashing, sanitation. Treatment: ORS, zinc, antibiotics.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'ORS at Health Centres', description: 'Free ORS packets treat dehydration.' },
    { title: 'Handwashing Campaigns', description: 'Promote handwashing with soap after toilet.' }
  ],
  practiceQuestions: [
    { question: 'What are the signs of cholera?', answer: 'Severe watery diarrhoea (rice water stools), vomiting, dehydration.', hint: 'Rapid fluid loss.' },
    { question: 'What is the main treatment for dehydration from diarrhoea?', answer: 'Oral Rehydration Solution (ORS)', hint: 'Sugar, salt, water.' }
  ]
},

// ======================================================================
// CHEMISTRY - FORM 2 (continued) - Hydrocarbons
// ======================================================================
{
  subject: 'Chemistry',
  form: 'Form 2',
  topic: 'Organic Chemistry',
  lessonNumber: 1,
  lessonTitle: 'Alkanes and Alkenes – Properties and Uses',
  lessonId: 'chemistry-f2-hydrocarbons-1',
  order: 68,
  learningObjectives: [
    'Draw structures and name the first four alkanes (methane, ethane, propane, butane)',
    'Describe the test for unsaturation (bromine water) and distinguish between alkanes and alkenes'
  ],
  introduction: 'Organic chemistry is the chemistry of carbon compounds. The simplest organic compounds are hydrocarbons – made of only carbon and hydrogen. Today, we will learn about two families of hydrocarbons: ALKANES (saturated) and ALKENES (unsaturated).',
  keyPoints: [
    'Hydrocarbon: compound containing only carbon and hydrogen.',
    'Saturated hydrocarbon: all carbon-carbon single bonds (alkanes). General formula CnH2n+2.',
    'Unsaturated hydrocarbon: contains at least one carbon-carbon double bond (alkenes). General formula CnH2n.',
    'Alkanes: methane (CH4), ethane (C2H6), propane (C3H8), butane (C4H10).',
    'Alkenes: ethene (C2H4), propene (C3H6), butene (C4H8).',
    'Test for unsaturation: add bromine water – alkene decolorises bromine (orange to colourless); alkane does not.'
  ],
  detailedContent: `What are Hydrocarbons?

Hydrocarbons are molecules that contain only carbon and hydrogen atoms. They are the main components of fossil fuels (petroleum, natural gas, coal).

Saturated vs Unsaturated

Saturated hydrocarbons (alkanes): All carbon-carbon bonds are single bonds. General formula: CnH2n+2.

Unsaturated hydrocarbons (alkenes, alkynes): Contains at least one carbon-carbon double or triple bond. General formula for alkenes: CnH2n.

Alkanes

| Name | Formula | Condensed structural formula | Boiling point | Use |
|------|---------|------------------------------|---------------|-----|
| Methane | CH4 | CH4 | -162°C | Natural gas, cooking |
| Ethane | C2H6 | CH3CH3 | -89°C | Fuel |
| Propane | C3H8 | CH3CH2CH3 | -42°C | LPG (cooking, heating) |
| Butane | C4H10 | CH3CH2CH2CH3 or CH3CH(CH3)CH3 | -0.5°C | Lighter fuel, camping gas |

Properties of Alkanes:
- Non-polar, insoluble in water.
- Less dense than water.
- Low boiling points (increase with chain length).
- Generally unreactive but undergo: combustion (burn) and substitution with halogens (UV light needed).

Alkenes

| Name | Formula | Condensed structural formula | Use |
|------|---------|------------------------------|-----|
| Ethene | C2H4 | CH2=CH2 | Ripening fruit, making polymers (polyethene) |
| Propene | C3H6 | CH3CH=CH2 | Making polypropene |
| Butene | C4H8 | CH3CH2CH=CH2 or CH3CH=CHCH3 | Making synthetic rubber |

Properties of Alkenes:
- More reactive than alkanes due to the double bond.
- Undergo addition reactions: bromination (test), hydrogenation, hydration.

Test for Unsaturation (Bromine Water Test)

Add bromine water (orange) to the hydrocarbon.
- Alkene: orange colour disappears (addition reaction).
- Alkane: orange colour remains (no reaction).

Uses in Malawi:
- Methane from biogas (animal waste) is used for cooking in some rural areas.
- Ethene is used to ripen bananas and tomatoes (a small amount speeds ripening).
- Polyethene (plastic) from ethene is used for bags, containers.`,
  summary: 'Hydrocarbons: only C and H. Alkanes (saturated, single bonds): CnH2n+2. Alkenes (unsaturated, double bond): CnH2n. Bromine water test: alkene decolorises, alkane does not.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Biogas in Rural Areas', description: 'Methane from cow dung used for cooking.' },
    { title: 'Fruit Ripening', description: 'Ethene gas from ripening fruit; farmers use calcium carbide to produce ethene.' }
  ],
  practiceQuestions: [
    { question: 'What is the general formula for alkanes?', answer: 'CnH2n+2', hint: 'Saturated.' },
    { question: 'What happens when bromine water is added to ethene?', answer: 'Bromine water decolorises (orange to colourless).', hint: 'Addition reaction.' }
  ]
},

// ======================================================================
// CHEMISTRY - FORM 3 (continued) - Acids, Bases, Salts (preparation of salts)
// ======================================================================
{
  subject: 'Chemistry',
  form: 'Form 3',
  topic: 'Acids, Bases, and Salts',
  lessonNumber: 1,
  lessonTitle: 'Preparation and Purification of Salts',
  lessonId: 'chemistry-f3-salts-1',
  order: 69,
  learningObjectives: [
    'Describe methods of preparing soluble salts (acid + metal, acid + base, acid + carbonate)',
    'Describe preparation of insoluble salts by precipitation'
  ],
  introduction: 'Salt is not just table salt (NaCl). In chemistry, a SALT is any ionic compound formed when the hydrogen ion of an acid is replaced by a metal ion or ammonium ion. Today, we will learn how to make and purify different salts.',
  keyPoints: [
    'Soluble salts: prepared by (1) acid + metal; (2) acid + insoluble base; (3) acid + carbonate.',
    'Insoluble salts: prepared by precipitation – mix two soluble salts containing the required ions; the salt precipitates out.',
    'Purification: crystallisation (evaporate solvent, cool, crystals form), filtration, recrystallisation.',
    'Ionic equations: show only the reacting ions. For precipitation: Ag+(aq) + Cl-(aq) → AgCl(s).'
  ],
  detailedContent: `What is a Salt?

A salt is an ionic compound that contains a positive ion (cation, from base or metal) and a negative ion (anion, from the acid). For example, sodium chloride (Na+ and Cl-), copper(II) sulphate (Cu2+ and SO42-).

Methods for Preparing Soluble Salts

Method A: Acid + Metal
For metals above hydrogen in reactivity series (not too reactive like Na, K). Example: Mg + H2SO4 → MgSO4 + H2.
Procedure: Add excess metal to dilute acid until no more fizzing. Filter off excess metal. Evaporate filtrate to crystallise.

Method B: Acid + Insoluble Base (metal oxide or hydroxide)
Example: CuO + H2SO4 → CuSO4 + H2O.
Procedure: Warm the acid, add powdered base until no more dissolves (excess). Filter. Evaporate filtrate to get crystals.

Method C: Acid + Carbonate
Example: CaCO3 + 2HCl → CaCl2 + CO2 + H2O.
Procedure: Add carbonate to acid until effervescence stops (excess). Filter. Evaporate.

Preparation of Insoluble Salts (Precipitation)

An insoluble salt forms when two soluble salts are mixed and the product is not soluble.

Example: Preparation of lead(II) iodide (PbI2 – yellow)
Soluble reactants: lead(II) nitrate (Pb(NO3)2) and potassium iodide (KI).
Pb(NO3)2(aq) + 2KI(aq) → PbI2(s) + 2KNO3(aq)

Procedure: Dissolve each salt in water. Mix solutions. Filter to collect precipitate. Wash with distilled water. Dry.

Ionic equation: Pb2+(aq) + 2I-(aq) → PbI2(s)

Purification by Crystallisation

To obtain pure, dry crystals from a solution:
- Heat the solution to evaporate some water until concentrated.
- Allow to cool slowly. Crystals form.
- Filter to collect crystals.
- Wash with a little cold solvent (e.g., distilled water).
- Dry between filter paper or in oven (if stable).

Recrystallisation for further purity: dissolve impure crystals in minimum hot solvent, cool slowly, pure crystals form.

Common salts in Malawi:
- Sodium chloride (table salt) – from evaporation (salt pans in Lake Chilwa).
- Copper(II) sulphate – used in agriculture as fungicide (bordeaux mixture).
- Magnesium sulphate (Epsom salt) – medicine.`,
  summary: 'Salts are ionic compounds from acids. Soluble salts: acid + metal, acid + base, acid + carbonate. Insoluble salts: precipitation reaction. Purify by crystallisation and filtration.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Lake Chilwa Salt', description: 'Salt obtained by evaporation (crystallisation) from brine.' },
    { title: 'Copper Sulphate Fungicide', description: 'Used mixed with lime to spray against fungal diseases.' }
  ],
  practiceQuestions: [
    { question: 'What method would you use to prepare copper(II) sulphate from copper(II) oxide?', answer: 'Acid + insoluble base (CuO + H2SO4)', hint: 'CuO is a metal oxide.' },
    { question: 'Write the ionic equation for the precipitation of silver chloride.', answer: 'Ag+(aq) + Cl-(aq) → AgCl(s)', hint: 'Silver nitrate + sodium chloride.' }
  ]
},

// ======================================================================
// PHYSICS - FORM 2 (continued) - Work, Energy, Power, Machines (from syllabus)
// ======================================================================
{
  subject: 'Physics',
  form: 'Form 2',
  topic: 'Machines',
  lessonNumber: 1,
  lessonTitle: 'Simple Machines: Levers, Inclined Planes, Pulleys',
  lessonId: 'physics-f2-machines-1',
  order: 70,
  learningObjectives: [
    'Define a machine and calculate mechanical advantage (MA = load/effort)',
    'Explain how levers, inclined planes, and pulleys work'
  ],
  introduction: 'Why is it easier to lift a heavy load using a lever or a pulley? These are SIMPLE MACHINES. They multiply force or change its direction. Today, we will learn how machines work and how to calculate their advantage.',
  keyPoints: [
    'Machine: device that makes work easier by multiplying force or changing direction.',
    'Load: force applied by the machine (output). Effort: force applied to the machine (input).',
    'Mechanical Advantage (MA) = Load / Effort.',
    'Levers: rigid bar pivoted at a fulcrum. MA = distance from effort to fulcrum / distance from load to fulcrum.',
    'Inclined plane: sloping surface. MA = length of slope / height.',
    'Pully system: MA = number of supporting rope segments.'
  ],
  detailedContent: `What is a Machine?

A machine is a device that helps us do work more easily. It can:
- Multiply force (use a small effort to move a large load)
- Change the direction of force (e.g., pulling down to lift up)
- Increase speed (but then force decreases)

Mechanical Advantage (MA)

MA = Load ÷ Effort
- If MA > 1, machine multiplies force.
- If MA = 1, machine only changes direction.
- If MA < 1, machine increases speed.

Levers

A lever is a rigid bar that pivots on a fixed point called the fulcrum.

There are three classes of levers, but for Form 2 we focus on the principle:

MA = (distance from effort to fulcrum) ÷ (distance from load to fulcrum)

Example: A crowbar used to lift a rock. If the effort arm is 1.5 m and the load arm is 0.3 m, MA = 1.5 / 0.3 = 5. An effort of 100 N can lift a 500 N load.

Inclined Planes

A sloping surface like a ramp. MA = length of slope ÷ height.

Example: A ramp 4 m long raising a load 1 m high: MA = 4 / 1 = 4. You need 4 times less effort, but you push the load 4 times farther.

Pulleys

A single fixed pulley changes direction but MA = 1 (does not multiply force). A movable pulley or pulley system with multiple ropes can multiply force.

For a pulley system: MA = number of rope segments supporting the load.

Example: A system with 3 rope segments supporting the load has MA = 3. Effort 100 N can lift 300 N.

Advantage of Using Machines
- Reduce the effort needed.
- Make work safer (e.g., using a lever to lift instead of lifting by hand).
- Change direction to make work easier.

However, work input is always greater than work output because some energy is lost to friction. No machine is 100% efficient.`,
  summary: 'Machines multiply force (MA = load/effort). Levers, inclined planes, and pulleys are simple machines. MA depends on distances (lever) or number of rope segments (pulley).',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Crowbar', description: 'A lever used to lift heavy stones or dig tree stumps.' },
    { title: 'Ramp for Wheelbarrow', description: 'An inclined plane to push a loaded wheelbarrow onto a truck.' }
  ],
  practiceQuestions: [
    { question: 'Calculate MA if a load of 200 N is lifted with an effort of 50 N.', answer: '4', hint: 'MA = load/effort = 200/50 = 4' },
    { question: 'A ramp is 6 m long and 1.5 m high. What is its MA?', answer: '4', hint: 'MA = length/height = 6/1.5 = 4' }
  ]
},

// ======================================================================
// PHYSICS - FORM 3 (continued) - Work, Energy, Power, Machines (velocity ratio, efficiency)
// ======================================================================
{
  subject: 'Physics',
  form: 'Form 3',
  topic: 'Work, Energy, Power and Machines',
  lessonNumber: 1,
  lessonTitle: 'Velocity Ratio and Efficiency of Machines',
  lessonId: 'physics-f3-mechanical-efficiency-1',
  order: 71,
  learningObjectives: [
    'Define velocity ratio (VR) and efficiency of a machine',
    'Calculate efficiency using MA and VR (Efficiency = MA/VR × 100%)'
  ],
  introduction: 'Not all the work you put into a machine comes out as useful work – some is lost to friction. Today, we will learn how to measure the performance of a machine using velocity ratio and efficiency.',
  keyPoints: [
    'Velocity Ratio (VR): ratio of distance moved by effort to distance moved by load. For an ideal machine (no friction), MA = VR.',
    'In real machines, MA is less than VR due to friction.',
    'Efficiency (%) = (MA / VR) × 100% = (Work output / Work input) × 100%.',
    'Efficiency is always less than 100% because some energy is lost as heat, sound, etc.'
  ],
  detailedContent: `Velocity Ratio (VR)

Velocity ratio is the ratio of the distance moved by the effort to the distance moved by the load.

VR = (distance moved by effort) / (distance moved by load)

For simple machines:
- Lever: VR = effort arm length / load arm length
- Inclined plane: VR = length of slope / height
- Pulley system: VR = number of rope segments supporting the load

In an ideal machine (no friction), Mechanical Advantage (MA) equals Velocity Ratio (VR). But real machines have friction, so MA is less than VR.

Efficiency

Efficiency tells us how well a machine converts input work into useful output work.

Efficiency (%) = (MA / VR) × 100%

Or: Efficiency (%) = (Work output / Work input) × 100%

Example: A pulley system has VR = 4. An effort of 150 N lifts a load of 500 N.
MA = 500/150 = 3.33
Efficiency = (3.33 / 4) × 100% = 83.25%

Work output = Load × distance moved by load
Work input = Effort × distance moved by effort

Reasons for less than 100% efficiency:
- Friction between moving parts (converted to heat).
- Air resistance.
- Deformation of parts (some energy stored as elastic potential, not used).
- Sound energy produced.

Improving efficiency: lubricate moving parts, use ball bearings, streamline shapes.

Malawi Example: A bicycle is a machine. The pedals are the effort, the chain moves, and the rear wheel turns. Some energy is lost to friction in the chain and bearings, so the bicycle is not 100% efficient.

A village water pump (hand pump) uses a lever. MA reduces the force needed to lift water, but some effort is lost in friction of the piston.`,
  summary: 'Velocity ratio (VR) = distance effort / distance load. Efficiency = (MA/VR)×100% = (work output/work input)×100%. Efficiency always less than 100% due to friction and other losses.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Bicycle Efficiency', description: 'Friction in chain and bearings reduces efficiency.' },
    { title: 'Hand Pump Lever', description: 'MA reduces effort, but friction in piston reduces efficiency.' }
  ],
  practiceQuestions: [
    { question: 'A lever has VR = 3 and MA = 2.5. Calculate efficiency.', answer: '83.3%', hint: 'Efficiency = (2.5/3)×100 = 83.3%' },
    { question: 'Why is efficiency never 100%?', answer: 'Energy is lost as heat due to friction, sound, etc.', hint: 'Not all input work is converted to useful output.' }
  ]
},


{
  subject: 'Agriculture',
  form: 'Form 1',
  topic: 'Agro-based Industries',
  lessonNumber: 1,
  lessonTitle: 'Agro-based Industries in Malawi and Their Role',
  lessonId: 'agriculture-f1-agro-industries-1',
  order: 72,
  learningObjectives: [
    'Identify agro-based industries in Malawi',
    'Explain the role of agro-based industries in supporting the growing population'
  ],
  introduction: 'Malawi’s agricultural products are not only consumed fresh – many are processed into other goods. These processing industries are called AGRO-BASED INDUSTRIES. Today, we will learn about them and how they help our economy.',
  keyPoints: [
    'Agro-based industry: uses agricultural products as raw materials to produce other goods.',
    'Examples: maize milling (flour), groundnut processing (butter, cooking oil), tobacco processing, tea processing, sugar refining, cotton ginning, dairy processing.',
    'Roles: creates employment, adds value to products, reduces post-harvest losses, generates foreign exchange, provides food security.'
  ],
  detailedContent: `What are Agro-based Industries?

Agro-based industries are factories or small-scale enterprises that process agricultural raw materials into finished or semi-finished products. They add value to farm products.

Examples in Malawi:

- Maize milling: produces maize flour (nsima) – many small hammer mills in towns and villages.
- Groundnut processing: produces groundnut butter (chigumula) and cooking oil.
- Tobacco processing: leaf grading, threshing, and redrying for export.
- Tea processing: withering, rolling, fermentation, drying, and grading at estates (e.g., Thyolo, Mulanje).
- Sugar refining: Illovo Sugar Company produces sugar from sugar cane at Nchalo and Dwangwa.
- Cotton ginning: separates cotton fibres from seeds; fibres used for textiles, seeds for cooking oil.
- Dairy processing: milk pasteurisation, yogurt and cheese production.
- Fruit and vegetable processing: canning, juicing, drying (e.g., mango juice, dried bananas).

Role of Agro-based Industries

- Employment creation: thousands of workers in factories, plantations, and transport.
- Value addition: processed products sell for more than raw commodities. Example: 1 kg of groundnuts (500 MK) becomes groundnut butter (1,500 MK).
- Reduction of post-harvest losses: processing extends shelf life (e.g., dried fish, canned tomatoes).
- Foreign exchange earnings: tea, sugar, tobacco, and cotton exports bring money into Malawi.
- Food security: processed foods (e.g., fortified flour) improve nutrition and food availability.
- Support to farmers: industries create a reliable market for farmers’ produce.

Malawi Example: Illovo Sugar’s Dwangwa and Nchalo estates provide direct employment to thousands. Farmers who grow sugar cane have a guaranteed buyer. The sugar is then sold locally and exported to neighbouring countries.`,
  summary: 'Agro-based industries process agricultural raw materials. Examples: maize milling, groundnut butter, tea, sugar, cotton. They create jobs, add value, reduce losses, and earn foreign exchange.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Sugar Production', description: 'Illovo Sugar processes cane into sugar at Nchalo and Dwangwa.' },
    { title: 'Tea Processing', description: 'Tea estates in Mulanje and Thyolo produce tea for export.' }
  ],
  practiceQuestions: [
    { question: 'Name three agro-based industries in Malawi.', answer: 'Maize milling, groundnut processing, tea processing, sugar refining, cotton ginning.', hint: 'Processes that add value to farm products.' },
    { question: 'How do agro-based industries help farmers?', answer: 'They provide a reliable market and reduce post-harvest losses.', hint: 'Farmers can sell their produce to industries.' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 1',
  topic: 'Food Distribution',
  lessonNumber: 1,
  lessonTitle: 'Food Security and Food for Self-sufficiency',
  lessonId: 'agriculture-f1-food-security-1',
  order: 73,
  learningObjectives: [
    'Differentiate between food security and food self-sufficiency',
    'Explain the relationship between family size and food security'
  ],
  introduction: 'Having enough food to eat is essential. But FOOD SECURITY means more than just having food – it means access to safe, nutritious food at all times. Today, we will learn the difference between food security and self-sufficiency, and how family size affects food availability.',
  keyPoints: [
    'Food security: when all people, at all times, have access to sufficient, safe, nutritious food to maintain a healthy life.',
    'Food self-sufficiency: ability to produce enough food from a country’s own resources to meet its needs. Does not consider access or distribution.',
    'A country can be food self-sufficient but still have food insecure individuals (e.g., due to poverty or poor distribution).',
    'Larger families often experience food insecurity because the same amount of food must be shared among more people.',
    'Solutions: family planning, improved agricultural productivity, income diversification.'
  ],
  detailedContent: `Food Security vs Food Self-sufficiency

Food security has four pillars:
1. Availability: enough food produced or imported.
2. Access: people have enough money or resources to obtain food.
3. Utilisation: food is nutritious and safe, and people have knowledge to use it well (e.g., cooking, storage).
4. Stability: access to food is not disrupted by shocks (drought, price spikes).

Food self-sufficiency means a country produces most of its own food without relying on imports. Malawi is largely self-sufficient in maize during good years but may import during droughts.

Difference: A country can be self-sufficient (e.g., produces enough maize) but if distribution is poor or prices are high, some people may still be food insecure. Conversely, a country that imports food can still be food secure if imports are reliable and people can afford them.

Family Size and Food Security

In a farming household, the amount of food produced depends on land size and productivity. If the family size increases but land and productivity stay the same, food per person decreases. This can lead to food insecurity.

Effects of large family size:
- Less food per person.
- Increased poverty (more money spent on food, less on education, health).
- Children may suffer malnutrition (stunting, underweight).
- Land fragmentation as children inherit small plots.

Solutions:
- Family planning to manage family size.
- Intensive agriculture to produce more on same land (use fertiliser, improved seeds, irrigation).
- Income diversification (off-farm work, small business) to buy food.
- Food storage and preservation to smooth consumption across seasons.

Malawi Example: During the 2015/16 drought, Malawi experienced food insecurity despite being normally self-sufficient in maize. Poor households had to rely on food aid. Large families were hit hardest because they had more mouths to feed with limited resources.`,
  summary: 'Food security: access to safe, nutritious food at all times. Self-sufficiency: producing enough food nationally. Large families often face food insecurity due to limited resources per person.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Drought and Food Insecurity', description: '2015/16 drought caused food shortages even in normally self-sufficient areas.' },
    { title: 'Family Planning', description: 'Smaller families can achieve better food security.' }
  ],
  practiceQuestions: [
    { question: 'What is the difference between food security and food self-sufficiency?', answer: 'Self-sufficiency is about production; security includes access, utilisation, and stability.', hint: 'Production vs all pillars.' },
    { question: 'How does family size affect food security?', answer: 'Larger families have to share food, leading to less per person.', hint: 'More mouths to feed.' }
  ]
},


{
  subject: 'Agriculture',
  form: 'Form 3',
  topic: 'Mushroom Production',
  lessonNumber: 1,
  lessonTitle: 'Importance and Husbandry Practices for Mushroom Production',
  lessonId: 'agriculture-f3-mushroom-1',
  order: 74,
  learningObjectives: [
    'Explain the importance of mushrooms',
    'Describe the husbandry practices for mushroom production (site selection, substrate preparation, fruiting, harvesting)'
  ],
  introduction: 'Mushrooms are not plants – they are fungi. They grow in the dark and can be cultivated for food and income. Today, we will learn how to grow mushrooms on a small scale in Malawi.',
  keyPoints: [
    'Importance: nutritious (protein, vitamins), quick to grow, can be grown on waste materials, good income source.',
    'Species cultivated in Malawi: oyster mushroom (Pleurotus), button mushroom.',
    'Husbandry: site selection (clean, dark, cool, humid), substrate preparation (maize stalks, cotton waste, sterilisation), seeding (spawn), fruiting management (humidity, temperature), harvesting (cut before cap opens).'
  ],
  detailedContent: `Importance of Mushrooms

- Nutrition: mushrooms are low in fat, high in protein, and contain vitamins B, D, and minerals like selenium and potassium.
- Quick production cycle: from spawning to harvest, oyster mushrooms take 3-4 weeks.
- Use of waste: mushrooms grow on agricultural waste (maize stalks, cotton waste, sawdust), converting waste into food.
- Income: mushroom growing requires small space and low capital, can be done in a small hut or room.
- Medicinal: some mushrooms have health benefits (immune boosting).

Species of Mushrooms Cultivated in Malawi

- Oyster mushroom (Pleurotus ostreatus): most common, grows on many substrates, fast-growing.
- Button mushroom (Agaricus bisporus): requires composted substrate, more difficult.

Husbandry Practices for Mushroom Production

1. Site selection: Choose a clean, dark, well-ventilated room or shed. Temperature 20-28°C, humidity 80-90%. No direct sunlight.

2. Substrate preparation: Common substrate: maize stalks (stover). Chop into 5-10 cm pieces. Soak in water for 12-24 hours. Pasteurise (heat in hot water at 70-80°C for 1-2 hours) to kill contaminants. Drain and cool.

3. Seeding (spawning): Mix mushroom spawn (mushroom "seeds" – mycelium on grain) with pasteurised substrate. Fill into clean plastic bags (perforated small holes). Seal.

4. Incubation: Place bags in dark, warm place (25-28°C) for 2-3 weeks. Mycelium grows and colonises the substrate (white threads).

5. Fruiting: Cut small slits in bags. Lower temperature (20-25°C) and increase humidity (mist water). After 1-2 weeks, mushroom pins appear and grow into mature mushrooms.

6. Harvesting: Harvest just before the cap flattens and edges turn upward. Twist and pull gently. Mushrooms grow in flushes (every 7-10 days for 2-3 flushes).

7. Post-harvest: Fresh mushrooms are perishable. Can be sold fresh, dried (sun or oven), or pickled.

Malawi Example: Youth groups in Lilongwe and Mzuzu grow oyster mushrooms in small huts. They sell fresh mushrooms to hotels and restaurants. They also dry mushrooms for sale during off-season.`,
  summary: 'Mushrooms are nutritious, grow quickly on waste, and provide income. Cultivate in clean, dark, humid spaces. Steps: substrate preparation, spawning, incubation, fruiting, harvesting.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Oyster Mushroom', description: 'Grows on maize stalks; common in small-scale production.' },
    { title: 'Dried Mushrooms', description: 'Sun-dried mushrooms preserved for later sale.' }
  ],
  practiceQuestions: [
    { question: 'Name one substrate used for growing oyster mushrooms.', answer: 'Maize stalks, cotton waste, sawdust', hint: 'Agricultural waste.' },
    { question: 'Why must the substrate be pasteurised?', answer: 'To kill competing fungi and bacteria.', hint: 'Sterilisation prevents contamination.' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 3',
  topic: 'Pasture Production',
  lessonNumber: 1,
  lessonTitle: 'Types of Pastures and Methods of Establishment',
  lessonId: 'agriculture-f3-pasture-1',
  order: 75,
  learningObjectives: [
    'Identify types of pastures (indigenous and exotic)',
    'Describe methods of pasture establishment (broadcasting, under-sowing, over-sowing, drilling)'
  ],
  introduction: 'Livestock need grass and legumes for feed. A PASTURE is a piece of land covered with grass and other plants that animals graze. Today, we will learn about different pasture types and how to plant them.',
  keyPoints: [
    'Indigenous pastures: native grasses (e.g., Hyparrhenia, Setaria). Hardy, require less inputs, lower yield.',
    'Exotic pastures: introduced species (e.g., Napier grass (Pennisetum purpureum), Rhodes grass, Guinea grass, legume like Stylosanthes). High yield, need more management.',
    'Methods of establishment: broadcasting (scattering seed), under-sowing (planting pasture with a crop), over-sowing (sowing into existing vegetation), drilling (using a seed drill).',
    'Seed rate: amount of seed per hectare, depends on seed size and purity.'
  ],
  detailedContent: `Types of Pastures

Indigenous pastures:
- Native grasses that grow naturally. Examples: Hyparrhenia (thatching grass), Setaria, Brachiaria.
- Advantages: hardy, drought-resistant, adapted to local conditions, cheap.
- Disadvantages: low nutritive value, low yield.

Exotic pastures:
- Introduced species that are high-yielding and nutritious.
- Grasses: Napier grass (Pennisetum purpureum) – tall, high yield, cut-and-carry system; Rhodes grass (Chloris gayana); Guinea grass (Panicum maximum).
- Legumes: Stylosanthes, Desmodium, Lablab. (Legumes fix nitrogen, improve pasture quality.)
- Advantages: high yield, good protein content.
- Disadvantages: require more management, fertiliser, and water; can be less drought-tolerant.

Methods of Pasture Establishment

1. Broadcasting: Scattering seeds by hand or mechanical spreader over prepared land. Seeds may be mixed with sand for even distribution. Suitable for small areas. After broadcasting, lightly harrow or roll to cover seeds.

2. Under-sowing: Planting pasture seeds at the same time as a cereal crop (e.g., maize). The cereal provides shade and suppresses weeds initially. When the cereal is harvested, the pasture is already established. This method reduces erosion and makes use of residual moisture.

3. Over-sowing: Broadcasting seeds into an existing pasture without tilling. The seeds germinate and fill gaps. Usually done at start of rains.

4. Drilling: Using a seed drill to place seeds in rows at specific depth and spacing. Most efficient method for large areas, ensures even germination.

5. Vegetative propagation: For Napier grass, use stem cuttings planted in rows, not seeds.

Factors affecting seed rate: seed size, germination percentage, purity, method of sowing, and desired plant density.

Malawi Example: In dairy farming areas (Mzuzu, Lilongwe), farmers grow Napier grass along contours for cut-and-carry feeding. They plant stem cuttings spaced 1 m × 0.5 m.`,
  summary: 'Pastures: indigenous (native, hardy) or exotic (high-yielding, need management). Establishment methods: broadcasting, under-sowing, over-sowing, drilling. Choose method based on scale and resources.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Napier Grass', description: 'Common exotic grass used for zero-grazing dairy cows.' },
    { title: 'Under-sowing with Maize', description: 'Planting pastures like Desmodium with maize to utilise residual moisture.' }
  ],
  practiceQuestions: [
    { question: 'What is the advantage of exotic pastures over indigenous?', answer: 'Higher yield and better nutritive value.', hint: 'Introduced species.' },
    { question: 'What is under-sowing?', answer: 'Planting pasture seeds with a cereal crop at the same time.', hint: 'Pasture establishes under the main crop.' }
  ]
},


{
  subject: 'Biology',
  form: 'Form 2',
  topic: 'Micro-organisms',
  lessonNumber: 1,
  lessonTitle: 'Groups and Structure of Micro-organisms',
  lessonId: 'biology-f2-microorganisms-1',
  order: 76,
  learningObjectives: [
    'List the five main groups of micro-organisms (bacteria, viruses, fungi, protozoa, algae)',
    'Describe the structure of a typical bacterium and virus'
  ],
  introduction: 'They are too small to see with your eyes, but they are everywhere. Some cause disease; others are essential for life. Today, we will learn about the five groups of MICRO-ORGANISMS and their structures.',
  keyPoints: [
    'Bacteria: single-celled prokaryotes (no nucleus). Shapes: cocci (spheres), bacilli (rods), spirilla (spiral).',
    'Viruses: non-living outside host. Protein coat plus genetic material. Require host cell to replicate.',
    'Fungi: include moulds, yeasts, mushrooms.',
    'Protozoa: single-celled eukaryotes. Some cause malaria (Plasmodium).',
    'Algae: simple photosynthetic organisms.'
  ],
  detailedContent: `The Five Groups

1. Bacteria
- Single-celled, no nucleus (prokaryote). Cell wall, cell membrane, cytoplasm, sometimes flagella.
- Shapes: round (cocci), rod (bacilli), spiral (spirilla).
- Reproduce by binary fission (splitting into two). Very fast.
- Where? Soil, water, inside our bodies, on surfaces.
- Examples: Lactobacillus (makes yogurt, sour milk), E. coli (gut bacteria), Salmonella (food poisoning).

2. Viruses
- Much smaller than bacteria. Not cells – just genetic material (DNA or RNA) inside a protein coat.
- Cannot reproduce alone; they invade a host cell and use its machinery to make copies.
- Examples: HIV, flu virus, common cold, maize streak virus (disease in maize).

3. Fungi
- Include yeasts, moulds, mushrooms.
- Cell walls made of chitin.
- Yeasts (single-celled) are used in baking and brewing: Saccharomyces cerevisiae makes bread rise and beer ferment.
- Moulds (Penicillium) produce antibiotics. Others spoil bread and fruit.

4. Protozoa
- Single-celled eukaryotes (have nucleus). Live in water or inside animals.
- Some cause disease: Plasmodium (malaria), Entamoeba (dysentery).

5. Algae
- Simple photosynthetic organisms. Some single-celled, some multicellular.
- Important in aquatic food chains. Some produce oxygen. Some used as food (spirulina).

Structure of a Bacterium (typical)
- Capsule (slime layer) – protects.
- Cell wall – gives shape (peptidoglycan).
- Cell membrane – controls entry/exit.
- Cytoplasm – contains ribosomes and circular DNA (nucleoid, no membrane).
- Flagella – for movement (some).
- Pili – for attachment.

Structure of a Virus
- Core: genetic material (DNA or RNA)
- Capsid: protein coat surrounding the genetic material
- Envelope (some viruses): lipid layer from host cell

Viruses are NOT cells – they cannot carry out metabolism or reproduce on their own. They are considered "borderline living".

Conditions for Growth of Bacteria
- Warmth (20-40°C)
- Moisture
- Nutrients (carbon, nitrogen)
- Oxygen (for aerobes) or absence for anaerobes
- Neutral pH (most)

Malawi Example: Lactic acid bacteria are used to ferment milk into traditional fermented milk (kumachala). This preserves milk longer.`,
  summary: 'Five groups: bacteria (prokaryotes), viruses (non-living, require host), fungi (yeasts, moulds), protozoa (single-celled parasites), algae (photosynthetic). Bacteria have cell wall but no nucleus; viruses have protein coat and genetic material.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Kumachala', description: 'Milk fermented by lactic acid bacteria.' },
    { title: 'Maize Streak Virus', description: 'Virus disease transmitted by leafhoppers reduces yields.' }
  ],
  practiceQuestions: [
    { question: 'Name one beneficial fungus used in baking.', answer: 'Yeast (Saccharomyces cerevisiae)', hint: 'Makes bread rise.' },
    { question: 'What structure do viruses lack that makes them non-living?', answer: 'They have no cell structure and cannot reproduce without a host.', hint: 'Not cells.' }
  ]
},
{
  subject: 'Biology',
  form: 'Form 2',
  topic: 'Micro-organisms',
  lessonNumber: 2,
  lessonTitle: 'Role of Micro-organisms: Decomposers, Symbionts, Pathogens',
  lessonId: 'biology-f2-microorganisms-2',
  order: 77,
  learningObjectives: [
    'Explain the role of micro-organisms as decomposers, symbionts, parasites, and in biotechnology',
    'Describe methods of food preservation (drying, salting, refrigeration, canning)'
  ],
  introduction: 'Micro-organisms are not all bad. They help decompose dead matter, fix nitrogen, produce food, and even make medicine. But some cause disease. Today, we will learn the good and bad roles of microbes.',
  keyPoints: [
    'Decomposers: bacteria and fungi break down dead organisms, recycling nutrients.',
    'Symbionts: mutualistic relationships – Rhizobium bacteria fix nitrogen in legume roots; gut bacteria help digestion.',
    'Parasites: cause disease – pathogens (cholera, malaria, ringworm).',
    'Biotechnology: use of microbes to produce bread, beer, yogurt, antibiotics, biogas.',
    'Food preservation: drying, salting, refrigeration, canning – all inhibit microbial growth.'
  ],
  detailedContent: `Roles of Micro-organisms

1. Decomposers
- Bacteria and fungi break down dead plants and animals, returning nutrients (e.g., carbon, nitrogen) to the soil.
- Without decomposers, dead matter would accumulate, and nutrients would be locked up.

2. Symbionts (Mutualistic)
- Rhizobium bacteria: live in root nodules of legumes. They convert atmospheric nitrogen into ammonia (nitrogen fixation), which the plant uses. In return, plants provide carbohydrates.
- Gut bacteria: in humans and animals, help digest cellulose (ruminants) and produce vitamins (e.g., vitamin K).

3. Parasites (Pathogens)
- Cause diseases in plants, animals, and humans.
- Examples: Vibrio cholerae (cholera), Plasmodium (malaria), HIV (AIDS), Mycobacterium tuberculosis (TB), maize streak virus, ringworm (fungus).

4. Biotechnology
- Bread: yeast (Saccharomyces cerevisiae) produces carbon dioxide that makes dough rise.
- Beer and wine: yeast ferments sugars into alcohol.
- Yoghurt: Lactobacillus bacteria ferment milk, producing lactic acid that thickens milk.
- Antibiotics: Penicillium mould produces penicillin that kills bacteria.
- Biogas: bacteria break down organic waste to produce methane (biogas for cooking).

Food Preservation

Food spoilage occurs when microbes grow. Preservation methods stop or slow microbial growth.

- Drying: removes moisture (e.g., dried fish, maize grains). Microbes need water.
- Salting: high salt concentration draws water out of microbes (e.g., salted fish, meat).
- Refrigeration: low temperature slows microbial growth (e.g., fresh vegetables, milk).
- Freezing: stops growth (e.g., frozen meat, vegetables).
- Canning: heat sterilises food in sealed containers (e.g., canned tomatoes, baked beans).
- Smoking: heat and chemicals from smoke preserve meat/fish.
- Pickling: acidic environment (vinegar) inhibits microbes (e.g., pickled onions).

Malawi Example: Many households preserve fish by sun-drying (usipa). Vegetables are sun-dried (mkhwani). Maize is stored dry in granaries. Some use salt to preserve meat.`,
  summary: 'Micro-organisms decompose (recycle), fix nitrogen (symbiosis), cause disease (parasites), and produce food (biotechnology). Preserve food by drying, salting, refrigeration, canning to inhibit microbes.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Sun-dried Fish', description: 'Usipa dried on racks to preserve for months.' },
    { title: 'Rhizobium and Groundnuts', description: 'Bacteria in root nodules fix nitrogen.' }
  ],
  practiceQuestions: [
    { question: 'How do Rhizobium bacteria benefit legume plants?', answer: 'They fix atmospheric nitrogen into usable form.', hint: 'Nitrogen fixation.' },
    { question: 'Why does salting preserve meat?', answer: 'Salt draws water out of microbes, inhibiting growth.', hint: 'Osmosis.' }
  ]
},


{
  subject: 'Chemistry',
  form: 'Form 1',
  topic: 'Separation Techniques',
  lessonNumber: 1,
  lessonTitle: 'Filtration, Decantation, and Centrifugation',
  lessonId: 'chemistry-f1-separation-1',
  order: 78,
  learningObjectives: [
    'Describe filtration, decantation, and centrifugation as methods for separating mixtures',
    'Choose the appropriate method for a given mixture'
  ],
  introduction: 'When you have a mixture, you often need to separate its components. The method you choose depends on the properties of the substances. Today, we will learn three methods: filtration, decantation, and centrifugation.',
  keyPoints: [
    'Filtration: separates insoluble solid from liquid using filter paper/funnel. Solid residue stays in filter paper; liquid (filtrate) passes through.',
    'Decantation: pouring off liquid after solid has settled. Less efficient than filtration.',
    'Centrifugation: spinning a mixture at high speed so denser particles settle at the bottom. Used in medical labs (blood separation).'
  ],
  detailedContent: `Filtration

Used to separate an insoluble solid from a liquid.

Equipment: filter paper, funnel, beaker, stirring rod.
Procedure: Fold filter paper into a cone, place in funnel. Pour mixture through filter paper. Solid particles are trapped (residue), liquid passes through (filtrate).

Examples: sand from water, tea leaves from tea, chalk powder from water.

Decantation

Used to separate a liquid from a solid that has settled at the bottom.

Procedure: Allow mixture to stand so solid settles. Gently pour off the liquid into another container, leaving the solid behind.

Examples: muddy water (pour off clear water), separating cooking oil from sediment.

Not suitable for fine particles that float or are slow to settle.

Centrifugation

Used to separate fine solid particles that do not settle easily, or to separate liquids of different densities.

Principle: spinning creates centrifugal force, pushing denser particles to the bottom.

Equipment: centrifuge machine with test tubes.

Examples:
- Medical lab: separation of blood plasma from red blood cells.
- Separation of cream from milk (cream rises to top; in a centrifuge, fat separates).
- Separating chalk powder from water (instead of waiting hours).

Choosing the right method:
- Sand + water → filtration.
- Muddy water after rain (large particles settle) → decantation.
- Blood (cells too small to settle quickly) → centrifugation.`,
  summary: 'Filtration separates insoluble solids from liquids. Decantation pours off liquid after settling. Centrifugation uses spinning to separate fine particles or different densities.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Muddy Water Decantation', description: 'Pour off clean water after particles settle in a bucket.' },
    { title: 'Centrifuge in Hospital', description: 'Separates blood cells from plasma for testing.' }
  ],
  practiceQuestions: [
    { question: 'Which method would you use to separate sand from water?', answer: 'Filtration', hint: 'Sand is insoluble solid.' },
    { question: 'Why is centrifugation used for blood instead of decantation?', answer: 'Blood cells are too fine and settle too slowly.', hint: 'Need faster separation.' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 1',
  topic: 'Separation Techniques',
  lessonNumber: 2,
  lessonTitle: 'Distillation and Chromatography',
  lessonId: 'chemistry-f1-separation-2',
  order: 79,
  learningObjectives: [
    'Describe distillation (simple and fractional) and chromatography',
    'Explain how chromatography separates mixtures of soluble substances'
  ],
  introduction: 'Two powerful methods for separating mixtures are DISTILLATION (for liquids with different boiling points) and CHROMATOGRAPHY (for dissolved substances). Today, we will learn how they work and where they are used.',
  keyPoints: [
    'Simple distillation: separates a liquid from a solution (e.g., pure water from salt water).',
    'Fractional distillation: separates liquids with close boiling points (e.g., crude oil fractions).',
    'Paper chromatography: separates mixtures of dyes or pigments based on different solubility in a solvent.',
    'Chromatography uses a stationary phase (paper) and mobile phase (solvent). Components travel at different speeds.'
  ],
  detailedContent: `Simple Distillation

Used to separate a pure liquid from a solution where the solute is non-volatile (e.g., salt from water).

Equipment: distillation flask, condenser, receiving flask, heat source.

Procedure: Heat the solution. The liquid (water) boils, turns to vapour, passes through condenser where it cools and condenses back to liquid, and is collected. Solute (salt) remains in the flask.

Example: Obtaining pure water from tap water or sea water.

Fractional Distillation

Used to separate two or more liquids with different boiling points that are close to each other (e.g., ethanol from water, crude oil fractions).

Equipment: fractionating column (packed with glass beads) between flask and condenser.

Procedure: When the mixture is heated, liquids vapourise. The fractionating column allows repeated condensation and evaporation, separating components by boiling point. Lower boiling point liquid condenses at top and is collected first.

Example: Separating ethanol (boiling point 78°C) from water (100°C). Ethanol distils first.

Paper Chromatography

Used to separate mixtures of soluble coloured substances (inks, dyes, plant pigments) and also colourless substances that can be made visible.

Equipment: chromatography paper (or filter paper), solvent (water, alcohol), beaker, lid.

Procedure:
1. Draw a pencil line near one end of the paper.
2. Place a small spot of mixture on the line.
3. Add a small amount of solvent to beaker (just below line).
4. Place paper in beaker, cover, allow solvent to rise by capillary action.
5. Different components move different distances based on solubility and attraction to paper.

After development, locate spots. Calculate Rf value = distance moved by substance / distance moved by solvent.

Applications: forensic science (identifying inks), plant pigment separation, purity testing.

Malawi Example: Distillation is used in laboratory to purify water. Chromatography can separate chlorophyll pigments from leaves.`,
  summary: 'Simple distillation: separates liquid from dissolved solids. Fractional distillation: separates liquids with close boiling points. Chromatography: separates dissolved substances based on different movement rates.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Pure Water from Borehole', description: 'Distillation produces clean water, but energy-intensive.' },
    { title: 'Leaf Pigment Chromatography', description: 'Separate green chlorophyll from yellow carotenoids.' }
  ],
  practiceQuestions: [
    { question: 'Which separation method would you use to get pure water from salt water?', answer: 'Simple distillation', hint: 'Water evaporates, salt stays.' },
    { question: 'What is the mobile phase in paper chromatography?', answer: 'The solvent (water or alcohol)', hint: 'It moves up the paper.' }
  ]
},


{
  subject: 'Physics',
  form: 'Form 2',
  topic: 'Magnetism',
  lessonNumber: 1,
  lessonTitle: 'Properties of Magnets and Magnetic Fields',
  lessonId: 'physics-f2-magnetism-1',
  order: 80,
  learningObjectives: [
    'State the basic law of magnetism (like poles repel, unlike poles attract)',
    'Describe magnetic field patterns around a bar magnet'
  ],
  introduction: 'Have you used a magnet to pick up pins? Magnets are fascinating. Today, we will learn the properties of magnets and how magnetic fields are shaped.',
  keyPoints: [
    'Magnets attract magnetic materials (iron, steel, nickel, cobalt).',
    'Law of magnetism: like poles repel, unlike poles attract.',
    'Magnetic poles: North-seeking (N) and South-seeking (S).',
    'Magnetic field: region around a magnet where magnetic force acts.',
    'Field lines: run from N to S outside magnet, form closed loops.'
  ],
  detailedContent: `Properties of Magnets

1. Magnets attract magnetic materials: iron, steel, nickel, cobalt, and some alloys. They do not attract non-magnetic materials (wood, plastic, copper, aluminium).

2. Two poles: every magnet has a north (N) and south (S) pole. The poles are where the magnetic force is strongest. If you break a magnet, each piece becomes a new magnet with its own N and S poles.

3. Like poles repel, unlike poles attract: N repels N, S repels S; N attracts S.

4. A freely suspended magnet points north-south. The N pole points to the Earth’s geographic North (which is actually a magnetic south pole).

Magnetic Field

The magnetic field is the region around a magnet where the magnetic force can be felt.

Plotting the field:
- Sprinkle iron filings on a paper over a bar magnet. Tap gently – filings align along field lines.
- Use a compass: place at points around bar magnet; compass needle points along field line direction.

Field pattern:
- Lines emerge from N pole, curve around, and enter S pole.
- Inside the magnet, lines go from S to N (closed loops).
- Lines are closer at poles (stronger field), spread out away.
- Lines never cross.

Care of Magnets:
- Store with keepers (soft iron bar) connecting poles to close the magnetic circuit, preventing demagnetisation.
- Store in pairs with unlike poles together.
- Do not heat, hammer, or drop magnets – can demagnetise.
- Keep away from strong alternating current fields.

Uses of Magnets:
- Compass for navigation.
- Speakers and microphones (electromagnets).
- Magnetic door catches.
- Magnetic stirrers in labs.
- Removing small iron objects from mixtures.

Malawi Example: A compass used by travellers shows direction using Earth’s magnetic field. A blacksmith uses a magnet to pick up iron nails from the forge floor.`,
  summary: 'Magnets attract iron and steel. Like poles repel, unlike poles attract. Magnetic field lines go from N to S outside magnet, forming closed loops. Care for magnets to avoid demagnetisation.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Compass', description: 'Needle points north–south using Earth’s magnetism.' },
    { title: 'Magnetic Separator', description: 'Used by blacksmiths to pick up iron nails falling in sand.' }
  ],
  practiceQuestions: [
    { question: 'What happens when you bring two north poles of magnets close together?', answer: 'They repel each other.', hint: 'Law of magnetism.' },
    { question: 'Where is the magnetic field strongest on a bar magnet?', answer: 'At the poles (ends).', hint: 'Field lines are closest there.' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 2',
  topic: 'Magnetism',
  lessonNumber: 2,
  lessonTitle: 'Magnetic Materials and Demagnetisation',
  lessonId: 'physics-f2-magnetism-2',
  order: 81,
  learningObjectives: [
    'Distinguish between magnetic and non-magnetic materials',
    'Describe methods of making and demagnetising magnets'
  ],
  introduction: 'Not all metals are magnetic. How can you make a magnet? How can you destroy magnetism? Today, we will learn about magnetic materials and how to magnetise and demagnetise them.',
  keyPoints: [
    'Magnetic materials: iron, steel, nickel, cobalt. Soft iron is easily magnetised and demagnetised; steel is hard to magnetise but retains magnetism (permanent).',
    'Non-magnetic materials: copper, aluminium, wood, plastic, glass.',
    'Methods of magnetisation: stroking (using another magnet), electric (using a solenoid with DC current), hammering (aligning domains in Earth’s field).',
    'Methods of demagnetisation: heating (above Curie temperature), hammering, placing in alternating current solenoid, or leaving for long time.'
  ],
  detailedContent: `Magnetic vs Non-magnetic Materials

Magnetic materials are attracted to a magnet. They include:
- Iron (ferromagnetic) – easily magnetised but does not retain magnetism well (soft).
- Steel (alloy of iron and carbon) – retains magnetism well (hard).
- Nickel, cobalt, and their alloys.

Non-magnetic materials are not attracted. Examples: copper, aluminium, gold, silver, wood, plastic, glass, rubber.

Soft iron can be made into temporary magnets (electromagnets). Steel is used for permanent magnets.

Making Magnets (Magnetisation)

1. Stroking method: Stroke a steel bar repeatedly from one end to the other with a magnet. Use the same direction each time. Lift magnet far away on return stroke. After many strokes, the steel becomes magnetised. The end where the stroke finished becomes opposite pole to the stroking magnet.

2. Electrical method: Place the bar inside a solenoid (coil of wire). Pass direct current (DC) through the coil. The bar becomes magnetised. Stronger current or more turns produce stronger magnet. Use soft iron for electromagnets (magnetism lost when current off).

3. Hammering method: Align the bar in the north-south direction (using Earth’s field). Hammer the bar repeatedly – the vibration allows domains to align with Earth’s field. Weak magnet.

Demagnetising Magnets

1. Heating: Heat the magnet above its Curie temperature (770°C for iron). Domains become random, magnetism lost. (Safety: not to be done with small magnets – could burn or damage.)

2. Hammering: Strong hammering disturbs domain alignment, reduces magnetism.

3. AC method: Place magnet inside a solenoid connected to alternating current (AC). Gradually reduce current to zero while slowly withdrawing the magnet. The reversing magnetic field randomises domains.

4. Leaving for long time: Permanent magnets slowly lose strength over many years.

Care of Magnets:
- Store with keepers (iron bar connecting poles).
- Keep away from heat, strong impacts, and AC fields.

Malawi Example: In a school lab, you can magnetise a steel nail by stroking it with a bar magnet. You can demagnetise it by heating it red hot and cooling (or by placing in an AC coil).`,
  summary: 'Magnetic materials: iron, steel, nickel. Non-magnetic: copper, aluminium, plastic. Magnetise by stroking, electrical method, or hammering. Demagnetise by heating, hammering, or AC. Soft iron for temporary, steel for permanent magnets.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Stroking a Nail', description: 'Make a temporary magnet by stroking with a bar magnet.' },
    { title: 'Electromagnet in Scrapyard', description: 'Lifts iron and steel scrap when current on, drops when off.' }
  ],
  practiceQuestions: [
    { question: 'Why is steel used for permanent magnets but iron for electromagnets?', answer: 'Steel retains magnetism; iron loses it easily.', hint: 'Retentivity.' },
    { question: 'How can you demagnetise a magnet using electricity?', answer: 'Place it in a solenoid with AC current and slowly reduce current to zero.', hint: 'Randomising domains.' }
  ]
},


{
  subject: 'Physics',
  form: 'Form 1',
  topic: 'Scientific Method',
  lessonNumber: 1,
  lessonTitle: 'The Scientific Method and Laboratory Safety',
  lessonId: 'physics-f1-scientific-method-1',
  order: 82,
  learningObjectives: [
    'Describe the steps of the scientific method (observation, hypothesis, experiment, analysis, conclusion)',
    'State general laboratory safety rules and interpret hazard symbols'
  ],
  introduction: 'Physics is not just about reading – it is about DOING experiments! To discover new knowledge, scientists follow a process called the SCIENTIFIC METHOD. But before we start any experiment, we must learn how to stay SAFE in the laboratory.',
  keyPoints: [
    'Scientific method: observation → question → hypothesis → experiment → data analysis → conclusion.',
    'Hypothesis: testable explanation. Experiment must be controlled and repeatable.',
    'Variables: independent (changed), dependent (measured), controlled (kept constant).',
    'Safety rules: wear goggles, lab coat; tie hair; no eating/drinking; report accidents; know first aid and fire equipment.',
    'Hazard symbols: flammable (flame), toxic (skull), corrosive (hand dissolving), irritant (exclamation mark), explosive (bomb).'
  ],
  detailedContent: `The Scientific Method

Scientists use a systematic approach to investigate natural phenomena.

Steps:

1. Observation: Notice a phenomenon. Example: A bicycle tyre is flat.

2. Question: Why is the tyre flat? → possible hole?

3. Hypothesis: Propose a tentative explanation. Example: "There is a hole in the inner tube."

4. Experiment: Design and carry out a test. Example: Pump air into tyre, submerge in water, look for bubbles. Control: use a known good tyre as comparison.

5. Data collection and analysis: Record results. Bubbles appear at one spot → evidence of hole.

6. Conclusion: Accept or reject hypothesis. If bubbles, hypothesis supported. If no bubbles, reject and propose new hypothesis.

Variables in experiments:
- Independent variable: what you change (e.g., temperature, concentration).
- Dependent variable: what you measure (e.g., rate of reaction, height).
- Controlled variables: kept constant to ensure fair test.

Laboratory Safety Rules

1. Wear safety goggles at all times during experiments with chemicals or heating.
2. Wear a lab coat to protect skin and clothing.
3. Tie back long hair to prevent catching fire.
4. No eating or drinking in the lab – chemicals may contaminate food.
5. Do not taste chemicals or touch them bare-handed.
6. If you spill a chemical, wash immediately with plenty of water and inform the teacher.
7. Know the location of first aid kit, fire extinguisher, fire blanket, and emergency shower.
8. After lab, wash hands thoroughly.

Hazard Symbols

- Flame (flammable): substances that catch fire easily (alcohol, petrol). Keep away from heat.
- Skull and crossbones (toxic): poisons. Avoid ingestion, inhalation, skin contact.
- Corrosion (hand and metal dissolving): corrosive (strong acids, bases). Causes burns.
- Exclamation mark (irritant/harmful): may cause skin irritation or eye damage.
- Exploding bomb (explosive): can detonate (not common in school labs).
- Environmental hazard: toxic to aquatic life.

How to smell a chemical: Never put your nose directly to the container. Waft vapour towards your nose with your hand.

First aid for accidents:
- Cuts: clean with water, apply antiseptic, cover with sterile bandage.
- Burns: cool with cold running water for at least 10 minutes.
- Chemical splash in eye: flush with water for 15 minutes, get medical help.

Malawi Example: In a school laboratory, when preparing soap (saponification), always wear goggles because sodium hydroxide (caustic soda) is corrosive.`,
  summary: 'Scientific method: observation, question, hypothesis, experiment, analysis, conclusion. Laboratory safety: wear goggles, no eating, report accidents. Hazard symbols: flammable, toxic, corrosive.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Bicycle Tyre Puncture', description: 'Use scientific method to find leak.' },
    { title: 'Hazard Symbol Poster', description: 'Safety posters in labs show corrosive, flammable, toxic symbols.' }
  ],
  practiceQuestions: [
    { question: 'What is the first step of the scientific method?', answer: 'Observation', hint: 'You must notice something first.' },
    { question: 'What does the flame symbol indicate?', answer: 'Flammable substance (catches fire easily)', hint: 'Keep away from heat.' }
  ]
},

  {
    subject: 'Agriculture',
    form: 'Form 3',
    topic: 'Agricultural Development Agencies',
    lessonNumber: 1,
    lessonTitle: 'Agricultural Development Agencies in Malawi and Their Services',
    lessonId: 'agriculture-f3-agencies-1',
    order: 83,
    learningObjectives: [
      'Identify agricultural development agencies in Malawi',
      'Describe the services offered by these agencies'
    ],
    introduction: 'Farmers are not alone. There are organisations that help them with extension, credit, research, and marketing. Today, we will learn about agricultural development agencies in Malawi and what they do.',
    keyPoints: [
      'Ministry of Agriculture: policy, extension, research, subsidies.',
      'Smallholder Farmers Fertiliser Revolving Fund (SFFRF): distributes subsidised inputs.',
      'Farmers’ clubs and cooperatives: bulk buying, marketing, savings.',
      'Agricultural Development Divisions (ADDs): regional extension coordination.',
      'Malawi Agriculture and Food Security Agency (MAFSA): oversees marketing and food reserves.',
      'National Smallholder Farmers’ Association of Malawi (NASFAM): farmer advocacy and training.',
      'World Bank, IFAD, EU: funded projects for irrigation, conservation agriculture, value addition.'
    ],
    detailedContent: `Agricultural Development Agencies in Malawi

1. Ministry of Agriculture (MoA): Responsible for national agricultural policy, extension services, research coordination, and implementation of programs like Farm Input Subsidy Programme (FISP).

2. Smallholder Farmers Fertiliser Revolving Fund (SFFRF): Procures and distributes fertiliser and seed under the subsidy programme. Also sells at market price.

3. Agricultural Development Divisions (ADDs): Eight divisions (e.g., Lilongwe ADD, Blantyre ADD). Coordinate extension and development activities in regions.

4. Malawi Agriculture and Food Security Agency (MAFSA): Manages strategic grain reserves, stabilises maize prices, and promotes agricultural marketing.

5. NASFAM (National Smallholder Farmers’ Association of Malawi): Farmer-owned organisation providing training, market linkages, and advocacy for smallholders.

6. Farm Input Subsidy Programme (FISP): Government programme providing vouchers for fertiliser and seeds.

7. International agencies: World Bank, IFAD, EU, FAO, WFP – fund projects on irrigation, climate resilience, post‑harvest technologies.

Services offered:
- Extension and advisory services (training, demonstrations)
- Input supply (seeds, fertiliser, chemicals)
- Credit and savings (village banks, cooperatives)
- Market information and linking farmers to buyers
- Research and variety development (e.g., Chitedze Research Station)
- Food security monitoring and emergency response

Malawi Example: A farmer in Kasungu receives a FISP voucher for 50 kg of NPK and 25 kg of urea. He also attends a field day organised by ADD staff on maize stalk borer control.`,
    summary: 'Agricultural development agencies include MoA, SFFRF, ADDs, MAFSA, NASFAM, and international partners. They provide extension, inputs, credit, marketing, and research support.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'FISP Voucher', description: 'Subsidised fertiliser accessible via voucher system.' },
      { title: 'NASFAM Training', description: 'Farmers learn agribusiness and quality management.' }
    ],
    practiceQuestions: [
      { question: 'What is the role of the Ministry of Agriculture?', answer: 'Policy, extension, research coordination, and programme implementation.', hint: 'Government lead agency.' },
      { question: 'Name one service provided by NASFAM.', answer: 'Farmer training, market linkages, advocacy', hint: 'Farmer association.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 3',
    topic: 'Farm Mechanisation',
    lessonNumber: 1,
    lessonTitle: 'Types of Farm Machinery and Factors to Consider for Mechanisation',
    lessonId: 'agriculture-f3-mechanisation-1',
    order: 84,
    learningObjectives: [
      'List types of farm machinery (tractors, ploughs, harrows, planters, harvesters)',
      'Explain factors to consider when mechanising a farm'
    ],
    introduction: 'A tractor can plough a field in hours that would take a man days. But is mechanisation always the answer? Today, we will learn about farm machinery, when to use it, and how to keep it safe and working.',
    keyPoints: [
      'Types: tractors (power), mouldboard/disc ploughs (primary tillage), harrows (secondary), planters, sprayers, combine harvesters, maize shellers.',
      'Factors: farm size (small plots not cost‑effective), capital, terrain (hilly vs flat), availability of fuel/spare parts, operator skill.',
      'Advantages: speed, timeliness, reduces labour shortages.',
      'Limitations: expensive, maintenance, soil compaction, slope unsuitability.'
    ],
    detailedContent: `Types of Farm Machinery

- Tractors: Provide power. Two‑wheel drive or four‑wheel drive.
- Ploughs: Mouldboard (inverts soil), disc plough (cuts tough residues).
- Harrows: Break clods, level soil.
- Planters/seed drills: Place seeds at correct depth and spacing.
- Sprayers: Knapsack (manual) or boom (tractor‑mounted).
- Harvesters: Combine harvester (cuts, threshes, cleans grain in one pass).
- Maize sheller: Removes kernels from cobs (motorised or manual).

Factors to Consider Before Mechanising

- Farm size: Tractors economical only on >5 ha. Smallholders may hire services.
- Capital: Tractors cost millions of MK. Compare cost vs benefit.
- Terrain: Steep slopes – tractors can roll. Use oxen or hand tools.
- Spare parts and fuel: Available locally?
- Operator skills: Need trained person.
- Maintenance facilities: Can you repair breakdowns?

Advantages of Mechanisation

- Completes work quickly – timely planting.
- Reduces labour demand – especially during peak seasons.
- Achieves uniform seed placement and depth.
- Reduces drudgery.
- Allows large‑scale production.

Limitations

- High initial cost.
- Ongoing fuel and spare parts costs.
- Not suitable for very small or fragmented plots.
- Compaction: Heavy tractors compress soil, reducing yields.
- May cause erosion if misused (ploughing up/down slopes).
- Reduces employment for landless labourers.

Malawi Example: A large farm in Lilongwe uses a tractor with disc plough and harrow. They hire a local mechanic for maintenance. For small farmers, a two‑wheel tractor (power tiller) may be suitable.`,
    summary: 'Farm machinery includes tractors, ploughs, harrows, planters, harvesters, shellers. Consider size, capital, terrain, spare parts. Advantages: speed, scale. Limitations: cost, compaction, slope issues.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Maize Sheller', description: 'Motorised sheller removes kernels quickly – saves time.' },
      { title: 'Tractor Hire Services', description: 'Small farmers pool money to hire a tractor for ploughing.' }
    ],
    practiceQuestions: [
      { question: 'Why might a tractor not be suitable on a small farm?', answer: 'Too expensive relative to land size; cannot turn easily in small plots.', hint: 'Economy of scale.' },
      { question: 'What is a combine harvester?', answer: 'A machine that cuts, threshes, and cleans grain in one pass.', hint: 'All‑in‑one harvesting.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 3',
    topic: 'Farm Mechanisation',
    lessonNumber: 2,
    lessonTitle: 'Maintenance and Safety of Farm Machinery',
    lessonId: 'agriculture-f3-mechanisation-2',
    order: 85,
    learningObjectives: [
      'Describe maintenance practices for farm machinery',
      'State safety measures when using farm machinery'
    ],
    introduction: 'Machinery breaks down if not cared for. And it can be dangerous if not used properly. Today, we will learn how to maintain farm machines and use them safely.',
    keyPoints: [
      'Maintenance: cleaning after use, lubrication, checking oil/filters, sharpening blades, storing under cover, following service schedule.',
      'Safety: read manual, wear protective clothing, keep guards in place, no passengers, turn off engine before refuelling/cleaning, keep children away.'
    ],
    detailedContent: `Maintenance of Farm Machinery

- Clean after each use – remove mud, crop residues.
- Lubricate moving parts – oil and grease.
- Check engine oil, coolant, and air filter regularly.
- Sharpen plough shares and harrow discs.
- Store under roof to prevent rust.
- Follow manufacturer’s service schedule.

Safety Measures

- Read operator’s manual before using.
- Wear sturdy shoes, avoid loose clothing.
- Keep guards and shields in place.
- Do not carry passengers.
- Turn off engine before refuelling or cleaning.
- Never smoke near fuel.
- Keep children away from work area.
- Use hand signals or radio if working in a team.

Malawi Example: A farmer who owns a tractor keeps it in a shed, changes oil every 100 hours, and never allows extra riders on the drawbar.`,
    summary: 'Maintain machinery by cleaning, lubricating, and storing under cover. Follow safety rules: no passengers, turn off before refuelling, keep children away.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Tractor Shed', description: 'Protects from sun and rain, reduces rust.' },
      { title: 'Safety at Sheller', description: 'Keep fingers away from moving parts; use a stick to push cobs.' }
    ],
    practiceQuestions: [
      { question: 'Why is it important to lubricate moving parts?', answer: 'Reduces friction and wear, prevents overheating.', hint: 'Oil/grease.' },
      { question: 'What should you do before refuelling a tractor?', answer: 'Turn off the engine.', hint: 'Fire risk.' }
    ]
  },

  
  {
    subject: 'Agriculture',
    form: 'Form 4',
    topic: 'Agricultural Marketing and Trading',
    lessonNumber: 1,
    lessonTitle: 'Marketing Channels, Costs, and Margins',
    lessonId: 'agriculture-f4-marketing-1',
    order: 86,
    learningObjectives: [
      'Distinguish between marketing and trading',
      'Describe marketing channels and agencies and calculate marketing margins'
    ],
    introduction: 'Marketing moves products from farm to consumer. Trading is one part of marketing. Today, we will learn the difference, the people involved, and how to calculate marketing margins – the costs added at each step.',
    keyPoints: [
      'Marketing: all activities from production to final consumer (transport, storage, processing, advertising, selling).',
      'Trading: buying and selling (exchange function) – part of marketing.',
      'Marketing channels: farmer → assembler → wholesaler → retailer → consumer. Each adds costs.',
      'Marketing margin: difference between price paid by consumer and price received by farmer.',
      'Margin = retail price – farm price. Includes transport, storage, profit of intermediaries.'
    ],
    detailedContent: `Marketing vs Trading

- Marketing: the entire process of moving goods from producer to consumer – includes planning, grading, packaging, transport, storage, financing, risk bearing, and selling.
- Trading: only the buying and selling part (exchange). It is a subset of marketing.

Marketing Channels (Examples)

- Short channel: farmer → consumer (farm gate sales, local market).
- Medium channel: farmer → retailer → consumer (e.g., farmer sells to shopkeeper).
- Long channel: farmer → assembler → wholesaler → retailer → consumer (common for maize exported from rural areas).

Marketing Agencies (Intermediaries)
- Assemblers: buy from many smallholders, aggregate, and sell in bulk.
- Wholesalers: buy large quantities, store, and sell to retailers.
- Retailers: sell small quantities to consumers.
- Brokers/agents: facilitate sales without taking ownership.

Marketing Costs and Margins

Marketing margin = consumer price – farm price.

Example: Farmer sells 1 kg of groundnuts at 500 MK. Trader transports, stores, and sells to wholesaler at 700 MK. Wholesaler sells to retailer at 900 MK. Retailer sells to consumer at 1,200 MK.

Margins:
- Trader margin = 700 – 500 = 200 MK (transport, profit)
- Wholesaler margin = 900 – 700 = 200 MK (storage, profit)
- Retailer margin = 1,200 – 900 = 300 MK (shop, profit)
Total margin = 1,200 – 500 = 700 MK.

Most of the margin covers transport, storage, losses, and profit. Farmers get only a small portion.

Factors affecting margins: distance to market, perishability (higher losses), seasonality, number of intermediaries, market infrastructure.

Improving margins for farmers:
- Form cooperatives to sell directly to wholesalers/retailers.
- Process produce (e.g., groundnut butter) to capture value.
- Use mobile phones to find better prices.
- Improve roads and storage facilities.

Malawi Example: ADMARC (Agricultural Development and Marketing Corporation) operates as a state‑owned assembler and retailer, stabilising prices. However, private traders often offer higher prices near harvest.`,
    summary: 'Marketing includes all activities from farm to consumer; trading is buying/selling. Marketing margin = consumer price – farm price. Intermediaries add costs. Farmers can improve margins through cooperatives and processing.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Groundnut Margin', description: 'Farmer gets 500 MK, consumer pays 1,200 MK – margin 700 MK.' },
      { title: 'ADMARC', description: 'Government agency that buys and sells to stabilise maize prices.' }
    ],
    practiceQuestions: [
      { question: 'What is the difference between marketing and trading?', answer: 'Marketing includes all activities (transport, storage, etc.); trading is only buying/selling.', hint: 'Broader vs narrower.' },
      { question: 'How can a farmer increase the price they receive for maize?', answer: 'Sell through a cooperative, store and sell later, or process into flour.', hint: 'Reduce intermediaries or add value.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 4',
    topic: 'Price Elasticity of Demand and Supply',
    lessonNumber: 1,
    lessonTitle: 'Calculating Price Elasticity for Agricultural Commodities',
    lessonId: 'agriculture-f4-elasticity-1',
    order: 87,
    learningObjectives: [
      'Define price elasticity of demand and supply',
      'Calculate price elasticity using the percentage change formula'
    ],
    introduction: 'When the price of maize goes up, do people buy much less or just a little less? The answer is price elasticity. Today, we will learn how to calculate elasticity and what it means for farmers.',
    keyPoints: [
      'Price elasticity of demand (PED): % change in quantity demanded / % change in price.',
      'Price elasticity of supply (PES): % change in quantity supplied / % change in price.',
      'If elasticity > 1: elastic (small price change leads to large quantity change).',
      'If elasticity < 1: inelastic (quantity changes little).',
      'Agricultural staples (maize, rice) are usually inelastic in demand (essential goods).',
      'Luxuries or crops with substitutes are more elastic.'
    ],
    detailedContent: `Price Elasticity of Demand (PED)

Formula: PED = (% change in quantity demanded) / (% change in price)

Example: The price of maize rises from 200 MK to 240 MK (20% increase). Quantity demanded falls from 1,000 kg to 800 kg (20% decrease). PED = 20% / 20% = 1 (unit elastic – not typical for essentials).

If PED = 0.5 (inelastic): A 20% price increase leads to only 10% fall in quantity. People still buy nearly as much despite higher price (essential good).

If PED = 2 (elastic): A 20% price increase leads to 40% fall in quantity – consumers easily switch to substitute.

For most basic food crops in Malawi, demand is inelastic (PED < 1). Poor households spend a high proportion of income on food, so they cannot easily reduce consumption.

Price Elasticity of Supply (PES)

Formula: PES = (% change in quantity supplied) / (% change in price)

Short‑run supply is often inelastic because farmers cannot quickly change production (once planted, area fixed). Long‑run supply is more elastic (farmers can adjust next season).

Example: Maize price rises by 20%, farmers increase area and use more fertiliser, leading to 30% increase in supply next season. PES = 30% / 20% = 1.5 (elastic).

Implications for farmers:

- Inelastic demand: a good harvest (higher supply) leads to sharp price drop and lower total revenue (price decreases more than quantity increases). Farmers may benefit from strategies to store grain and sell later.
- Elastic demand: a price decrease increases total revenue.

Elasticity helps predict market outcomes and design policies (e.g., subsidy, storage).`,
    summary: 'PED = %Δ quantity demanded / %Δ price. PES = %Δ quantity supplied / %Δ price. Staples have inelastic demand. Supply is more elastic in the long run. Elasticity affects farm revenue.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Maize Price Rise', description: 'Even when price doubles, people still buy maize – inelastic demand.' },
      { title: 'Tobacco Elasticity', description: 'Demand is relatively elastic because buyers can switch to other leaf.' }
    ],
    practiceQuestions: [
      { question: 'If price rises by 10% and quantity demanded falls by 5%, what is PED?', answer: '0.5 (inelastic)', hint: 'PED = 5/10 = 0.5' },
      { question: 'Why is the supply of vegetables more elastic than supply of maize?', answer: 'Vegetables have shorter growing seasons; farmers can respond faster to price changes.', hint: 'Time to adjust.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 4',
    topic: 'Mango Production',
    lessonNumber: 1,
    lessonTitle: 'Mango Varieties, Site Selection, and Husbandry Practices',
    lessonId: 'agriculture-f4-mango-1',
    order: 88,
    learningObjectives: [
      'Identify important mango varieties grown in Malawi',
      'Describe site preparation and husbandry for mango trees'
    ],
    introduction: 'Mangoes are a valuable fruit crop in Malawi – for home consumption, local markets, and export to South Africa and Europe. Today, we will learn how to grow mangoes commercially.',
    keyPoints: [
      'Varieties: local (masau, mabinga) and improved (Tommy Atkins, Kent, Keitt, Zillate).',
      'Site selection: deep, well‑drained soil, full sun, near water for young trees.',
      'Site preparation: clear land, dig holes 1×1×1 m, add compost/manure, plant grafted seedlings.',
      'Husbandry: watering (young trees), mulching, weeding, fertilising (NPK 2‑3 times/year), pruning (remove dead branches, shape canopy), pest control (fruit fly, mealybugs, scale insects).',
      'Harvest: when shoulders turn yellow for improved varieties; picking pole for tall trees.'
    ],
    detailedContent: `Mango Varieties in Malawi

- Local varieties: Masau, mabinga, kachita – common in villages, small fruit, fibrous, seasonal.
- Improved varieties (export quality):
  * Tommy Atkins: red blush, moderate fibre, good for export.
  * Kent: sweet, less fibre, greenish‑yellow.
  * Keitt: large, sweet, late season.
  * Zillate: dwarf tree, small fruit, early season.

Grafted improved varieties produce fruit in 3‑4 years (from nursery). Local varieties take 6‑8 years.

Site Selection

- Deep, well‑drained soil (avoid waterlogging).
- Full sunlight (at least 6 hours/day).
- Protection from strong wind (windbreaks).
- Near water source for irrigation during establishment.
- Avoid frost pockets (mangoes sensitive to frost).

Field Preparation

- Clear land, remove perennial weeds.
- Dig holes 1 m × 1 m × 1 m, spaced 10‑12 m apart (for large varieties) or 6‑8 m (for dwarf).
- Mix topsoil with 20‑30 kg compost/manure and 500 g NPK per hole.
- Plant grafted seedlings (rainy season). Keep graft union above soil.

Husbandry Practices

- Watering: Young trees every 2‑3 days in dry season. Mature trees need less.
- Mulching: around base to retain moisture, suppress weeds.
- Weeding: keep 1 m radius weed‑free.
- Fertilising: Apply NPK 2‑3 times per year (150‑300 g per tree per year, increasing with age). Apply after fruit set.
- Pruning: Remove dead/diseased branches, thin canopy for light penetration. After harvest, trim.
- Pest control:
  - Fruit flies: use pheromone traps, protein bait, or cover fruits.
  - Mealybugs: soap solution or systemic insecticide.
  - Scale insects: horticultural oil.
- Harvesting: For improved varieties, pick when shoulders turn yellow. Use picking pole with cloth bag. Handle carefully to avoid bruising.

Malawi Example: Export mango orchards in Salima and Kasungu grow Tommy Atkins and Kent for shipment to South Africa. They follow strict pest control and grading.`,
    summary: 'Improved mango varieties (Tommy Atkins, Kent) yield export‑quality fruit. Plant in well‑drained holes with compost. Annual fertilising, pruning, and fruit fly control are essential.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Tommy Atkins in Salima', description: 'Export mangoes with red blush.' },
      { title: 'Fruit Fly Traps', description: 'Pheromone traps reduce fruit damage.' }
    ],
    practiceQuestions: [
      { question: 'What is the advantage of grafted mango trees?', answer: 'Fruit in 3‑4 years (earlier), uniform quality, true to type.', hint: 'Vegetative propagation.' },
      { question: 'When should mangoes be harvested for export?', answer: 'When shoulders turn yellow, still firm.', hint: 'Before fully ripe.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 4',
    topic: 'Cattle Production',
    lessonNumber: 1,
    lessonTitle: 'Breeds of Cattle (Beef and Dairy)',
    lessonId: 'agriculture-f4-cattle-breeds-1',
    order: 89,
    learningObjectives: [
      'List breeds of cattle for beef and dairy production',
      'Describe characteristics of Malawi Zebu, Friesian, and Jersey'
    ],
    introduction: 'Cattle provide meat, milk, hides, and manure. In Malawi, we have local breeds (Malawi Zebu) and exotic breeds (Friesian, Jersey). Today, we will learn which breeds are best for beef and which for milk.',
    keyPoints: [
      'Beef breeds: Malawi Zebu (small, humped, heat‑tolerant, low milk yield), Brahman, Boran.',
      'Dairy breeds: Friesian (high milk yield, less heat tolerant), Jersey (high butterfat, more heat tolerant).',
      'Crossbreeds: Zebu × Friesian – combine hardiness and milk production.'
    ],
    detailedContent: `Beef Breeds

- Malawi Zebu: Small, humped, heat‑tolerant, resistant to ticks and trypanosomiasis. Good for meat. Milk yield 2‑3 litres/day. Common in communal grazing.
- Brahman: Imported, large, humped, very heat tolerant, good beef quality.
- Boran: East African breed, good meat, adaptable.

Dairy Breeds

- Friesian (Holstein): Large, black and white. High milk yield (20‑30 litres/day). Needs good feed and management. Not very heat tolerant. Requires shade and water.
- Jersey: Smaller, brown. High milk butterfat (5‑6%), good for ghee and butter. More heat tolerant than Friesian. Yield 10‑20 litres/day.

Crossbreeds

Zebu × Friesian or Zebu × Jersey combine hardiness of Zebu with milk production of exotic breeds. Common in smallholder dairy (e.g., Mzuzu, Lilongwe, Thyolo). Milk yield 8‑12 litres/day.

Malawi Example: In Mzuzu, farmers keep Friesian‑Zebu crosses. They feed maize bran and graze on Napier grass. They use AI.`,
    summary: 'Beef breeds: Malawi Zebu, Brahman, Boran. Dairy breeds: Friesian (high milk), Jersey (high butterfat). Crossbreeds suit smallholder conditions in Malawi.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Malawi Zebu', description: 'Local breed, hardy, low milk but good meat.' },
      { title: 'Friesian‑Zebu Cross', description: 'Dairy farmers in Mzuzu use crosses for better milk.' }
    ],
    practiceQuestions: [
      { question: 'Which dairy breed produces the highest milk yield?', answer: 'Friesian', hint: 'Black and white.' },
      { question: 'Why are crossbreeds popular in Malawi?', answer: 'They combine disease/heat tolerance with higher milk production.', hint: 'Zebu × exotic.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 4',
    topic: 'Cattle Production',
    lessonNumber: 2,
    lessonTitle: 'Management of Cattle and Reproductive Cycles',
    lessonId: 'agriculture-f4-cattle-management-1',
    order: 90,
    learningObjectives: [
      'Describe housing, feeding, and health management for cattle',
      'Explain the oestrus cycle, gestation period, and signs of heat'
    ],
    introduction: 'To succeed with cattle, you need proper housing, feeding, and health care. You also need to know when cows are ready to breed. Today, we will cover these practical aspects.',
    keyPoints: [
      'Housing: kraal with shelter; for dairy, clean, dry bedding, ventilation.',
      'Feeding: grazing + supplements (maize bran, cottonseed cake, minerals).',
      'Health: vaccinations (lumpy skin, foot and mouth, anthrax), tick control (dipping/spraying), deworming.',
      'Reproduction: oestrus cycle ~21 days. Signs of heat: restlessness, mounting others, clear mucus, swollen vulva.',
      'Gestation period: ~9 months (280 days).'
    ],
    detailedContent: `Management Practices

- Housing: Provide a kraal (enclosure) with a roofed area for shade and rain protection. For dairy, a clean, dry floor prevents mastitis. Ensure good ventilation.

- Feeding: Cattle graze on pasture. For dairy cows, supplement with maize bran, cottonseed cake, or dairy meal. Provide mineral block and clean water at all times.

- Health:
  * Vaccinations: lumpy skin disease, foot and mouth, anthrax, brucellosis (by vet).
  * Tick control: dip or spray every 2‑3 weeks.
  * Deworm: every 3 months (rotate products).
  * Isolate sick animals.

Reproductive System and Breeding

- Oestrus (heat) cycle: lasts about 21 days. Signs of heat:
  * Restless behaviour, mooing.
  * Mounting other cows or standing to be mounted.
  * Clear mucus discharge from vulva.
  * Swollen vulva.
  * Decreased milk yield, off feed.
Best to breed 8‑12 hours after first signs.

- Gestation period: about 9 months (280 days). Calves are born.

Livestock Improvement Methods

- Selection: choose cows that produce more milk or have good body conformation.
- Crossbreeding: mate Malawi Zebu with Friesian bull; F1 offspring have better milk.
- Artificial Insemination (AI): semen from superior bulls. Avoids keeping a bull, reduces disease transmission, allows access to best genetics.

Malawi Example: In Lilongwe, dairy farmers use AI with Friesian semen to upgrade local Zebu herds. They deworm every 3 months and dip for ticks.`,
    summary: 'House cattle in clean, dry kraals. Feed grazing plus supplements. Vaccinate and control ticks. Heat signs: restlessness, mounting, clear mucus. Gestation 9 months. Improve through AI and crossbreeding.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'AI in Lilongwe', description: 'Farmers use liquid nitrogen‑stored semen for breeding.' },
      { title: 'Foot and Mouth Vaccination', description: 'Government campaigns protect cattle.' }
    ],
    practiceQuestions: [
      { question: 'How long is the oestrus cycle in cows?', answer: 'About 21 days', hint: 'Every three weeks.' },
      { question: 'What is the gestation period of a cow?', answer: 'Approximately 9 months (280 days).', hint: 'Same as human.' }
    ]
  },
  
  {
    subject: 'Biology',
    form: 'Form 3',
    topic: 'Gaseous Exchange in Humans',
    lessonNumber: 1,
    lessonTitle: 'Alveoli, Diffusion of Gases, and Oxygen Transport',
    lessonId: 'biology-f3-gaseous-exchange-1',
    order: 91,
    learningObjectives: [
      'Explain how gaseous exchange occurs in the alveoli and tissues',
      'Describe how oxygen is transported in the blood (haemoglobin)'
    ],
    introduction: 'Every cell needs oxygen and must get rid of carbon dioxide. This happens in two places: the LUNGS (gaseous exchange with air) and the TISSUES (exchange with blood). Today, we will learn how oxygen and carbon dioxide move.',
    keyPoints: [
      'Alveoli: tiny air sacs, one‑cell thick, surrounded by capillaries. O2 diffuses into blood, CO2 diffuses out.',
      'Haemoglobin: protein in red blood cells; binds O2 in lungs (oxyhaemoglobin) and releases it in tissues.',
      'Tissue respiration: cells use O2 for aerobic respiration, producing energy (ATP), CO2, and water.',
      'Anaerobic respiration: without O2, glucose → lactic acid (muscles during intense exercise).'
    ],
    detailedContent: `Gaseous Exchange in the Alveoli

Alveoli walls are very thin (one cell). Capillaries also thin. Diffusion occurs because of concentration gradients.
- O2 concentration high in alveolar air, low in blood → O2 diffuses into blood.
- CO2 concentration high in blood, low in alveolar air → CO2 diffuses into alveoli and is exhaled.

Oxygen Transport

97‑99% of O2 is carried by haemoglobin (Hb). Hb + O2 ⇌ HbO2 (oxyhaemoglobin). In lungs (high O2), reaction to right. In tissues (low O2), releases O2.

Carbon Dioxide Transport
- As bicarbonate (70%): CO2 + H2O → H2CO3 → H+ + HCO3‑
- Bound to haemoglobin (20‑30%)
- Dissolved in plasma (5‑10%)

Tissue Respiration

Aerobic: C6H12O6 + 6O2 → 6CO2 + 6H2O + energy (ATP)

Anaerobic (in muscles during sprinting): C6H12O6 → 2C3H6O3 (lactic acid) + energy. Lactic acid causes muscle fatigue. After exercise, oxygen debt repaid; lactic acid converted back.

Effects of Smoking

- Tar: destroys cilia → smoker’s cough, lung cancer.
- CO: binds to haemoglobin more strongly than O2 → reduces oxygen delivery.
- Nicotine: addictive, constricts blood vessels.
- Diseases: bronchitis, emphysema, lung cancer.

Malawi Example: In traditional tobacco use (chamba), similar damage occurs; health campaigns warn against smoking.`,
    summary: 'Alveoli exchange O2 and CO2 by diffusion. Haemoglobin carries O2. CO2 transported as bicarbonate. Aerobic respiration needs O2; anaerobic produces lactic acid. Smoking damages lungs.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Smoker’s Cough', description: 'Loss of cilia from tar leads to persistent cough.' },
      { title: 'Carbon Monoxide Danger', description: 'Binds haemoglobin, reducing oxygen to organs.' }
    ],
    practiceQuestions: [
      { question: 'What pigment in red blood cells carries oxygen?', answer: 'Haemoglobin', hint: 'Iron‑containing protein.' },
      { question: 'What is produced during anaerobic respiration in muscles?', answer: 'Lactic acid', hint: 'Causes cramp.' }
    ]
  },
  {
    subject: 'Biology',
    form: 'Form 3',
    topic: 'Digestive Enzymes and Food Absorption',
    lessonNumber: 1,
    lessonTitle: 'Enzymes Involved in Digestion and Absorption in the Small Intestine',
    lessonId: 'biology-f3-digestive-enzymes-1',
    order: 92,
    learningObjectives: [
      'List the digestive enzymes and their end products',
      'Describe how the small intestine is adapted for absorption (villi, microvilli)'
    ],
    introduction: 'Digestion breaks large molecules into small ones using enzymes. Then absorption takes place, mostly in the small intestine. Today, we will learn the key enzymes and the structures that make absorption efficient.',
    keyPoints: [
      'Amylase (saliva, pancreas): starch → maltose.',
      'Pepsin (stomach): proteins → peptides.',
      'Trypsin (pancreas): proteins → peptides.',
      'Lipase (pancreas): fats → fatty acids + glycerol.',
      'Villi: finger‑like projections in small intestine; increase surface area.',
      'Microvilli: on epithelial cells; further increase absorption.'
    ],
    detailedContent: `Digestive Enzymes and Their Actions

| Enzyme | Source | Substrate | End product |
|--------|--------|-----------|-------------|
| Salivary amylase | Salivary glands | Starch | Maltose |
| Pepsin | Stomach (chief cells) | Protein | Peptides |
| Pancreatic amylase | Pancreas | Starch | Maltose |
| Trypsin | Pancreas | Protein | Peptides |
| Peptidases | Small intestine | Peptides | Amino acids |
| Lipase | Pancreas | Fats (lipids) | Fatty acids + glycerol |
| Maltase | Small intestine | Maltose | Glucose |

Absorption in the Small Intestine

The small intestine is adapted for absorption:
- Very long (~6 m).
- Inner surface folded (plicae circulares).
- Villi: millions of finger‑like projections, each containing blood capillaries and a lacteal (lymph vessel). Villi greatly increase surface area.
- Microvilli: on villi cells (brush border), further increase area.

Absorption process:
- Glucose and amino acids cross epithelium and enter blood capillaries.
- Fatty acids and glycerol are re‑packaged into chylomicrons and enter lacteals (lymph system).

Large Intestine (Colon): absorbs water and minerals; forms faeces.

Malawi Example: If a person has diarrhoea, the colon cannot absorb water properly, leading to dehydration. ORS helps replace lost water and salts.`,
    summary: 'Amylase breaks starch, pepsin and trypsin break proteins, lipase breaks fats. Villi and microvilli in small intestine increase surface area for absorption of nutrients into blood and lymph.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Lactose Intolerance', description: 'Absence of lactase enzyme causes bloating after milk.' },
      { title: 'Villi in Mikolongwe', description: 'Models show surface area increase.' }
    ],
    practiceQuestions: [
      { question: 'What is the end product of protein digestion?', answer: 'Amino acids', hint: 'Building blocks.' },
      { question: 'What structures increase surface area in the small intestine?', answer: 'Villi and microvilli', hint: 'Fingers and brushes.' }
    ]
  },
  {
    subject: 'Biology',
    form: 'Form 3',
    topic: 'Reproductive System',
    lessonNumber: 1,
    lessonTitle: 'Male and Female Reproductive Systems',
    lessonId: 'biology-f3-reproduction-1',
    order: 93,
    learningObjectives: [
      'Identify the parts and functions of the male and female reproductive systems',
      'Explain the menstrual cycle and the role of hormones (FSH, LH, oestrogen, progesterone)'
    ],
    introduction: 'How does a baby begin and grow? The human reproductive system is designed for producing offspring. Today, we will learn the anatomy, the monthly cycle, and how hormones regulate reproduction.',
    keyPoints: [
      'Male: testes (sperm, testosterone), epididymis, vas deferens, seminal vesicles, prostate, penis.',
      'Female: ovaries (ova, oestrogen, progesterone), oviducts (fertilisation site), uterus, cervix, vagina.',
      'Menstrual cycle ~28 days: FSH matures follicle; oestrogen thickens uterus; LH triggers ovulation (day 14); progesterone maintains lining. If no pregnancy, lining sheds.'
    ],
    detailedContent: `Male Reproductive System

- Testes: produce sperm and testosterone.
- Epididymis: stores sperm until mature.
- Vas deferens: carries sperm to urethra.
- Seminal vesicles and prostate gland: produce seminal fluid (nourishes sperm).
- Penis: delivers sperm into female.

Female Reproductive System

- Ovaries: produce eggs (ova) and hormones (oestrogen, progesterone).
- Oviducts (fallopian tubes): site of fertilisation. Fimbriae sweep egg into tube.
- Uterus (womb): where baby develops. Lining (endometrium) thickens each month.
- Cervix: opening of uterus into vagina.
- Vagina: receives sperm; birth canal.

Menstrual Cycle (average 28 days)

| Days | Event | Hormones |
|------|-------|-----------|
| 1‑5 | Menstruation (shedding of lining) | Low oestrogen, low progesterone |
| 6‑13 | Follicle matures; lining rebuilds | FSH (stimulates follicle), oestrogen (builds lining) |
| 14 | Ovulation (egg released) | LH surge |
| 15‑28 | Corpus luteum secretes progesterone; lining maintained | Progesterone |
| If no fertilisation | Lining breaks down, cycle repeats | Progesterone falls |

Fertilisation: sperm meets egg in oviduct, forms zygote (46 chromosomes). Zygote divides and implants in uterus.

Placenta: attached to uterine wall, connected by umbilical cord. Functions:
- Exchange O2, nutrients, waste.
- Produces hormones.
- Prevents mother’s immune attack.

Birth (parturition): around 40 weeks. Uterus contracts, cervix dilates, baby passes through vagina.

Breast feeding: colostrum (antibodies), perfect nutrition, bonding, exclusive for 6 months recommended.

Malawi Example: Many health centres promote exclusive breast feeding and family planning methods.`,
    summary: 'Male: testes, sperm, penis. Female: ovaries, eggs, uterus, vagina. Menstrual cycle averages 28 days; ovulation day 14. Hormones (FSH, LH, oestrogen, progesterone) regulate. Placenta exchanges nutrients.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Exclusive Breast Feeding', description: 'Malawi health campaign promotes 6 months exclusive breast feeding.' },
      { title: 'Placenta Exchange', description: 'Placenta allows diffusion; mother and baby blood do not mix.' }
    ],
    practiceQuestions: [
      { question: 'Where does fertilisation typically occur?', answer: 'In the oviduct (fallopian tube)', hint: 'Egg and sperm meet there.' },
      { question: 'What hormone maintains the uterine lining after ovulation?', answer: 'Progesterone', hint: 'From corpus luteum.' }
    ]
  },
  {
    subject: 'Biology',
    form: 'Form 3',
    topic: 'Genetics',
    lessonNumber: 1,
    lessonTitle: 'Monohybrid Crosses and Sex Determination',
    lessonId: 'biology-f3-genetics-1',
    order: 94,
    learningObjectives: [
      'Define key genetic terms: gene, allele, dominant, recessive, genotype, phenotype, homozygous, heterozygous',
      'Construct monohybrid Punnett squares and predict offspring ratios'
    ],
    introduction: 'Why do you have your mother’s eyes but your father’s height? The answer lies in GENES. Today, we will learn the basics of inheritance, including how traits are passed on and how sex is determined.',
    keyPoints: [
      'Gene: segment of DNA controlling a trait. Allele: different version (e.g., purple vs white).',
      'Dominant allele: masks the other (capital letter). Recessive: only expressed if both copies recessive.',
      'Genotype: genetic makeup (TT, Tt, tt). Phenotype: observable trait (tall, short).',
      'Homozygous: two same alleles (TT or tt). Heterozygous: different (Tt).',
      'Monohybrid cross: cross for one trait. F1 all heterozygous; F2 ratio 3:1 dominant:recessive.',
      'Sex determination: females XX, males XY. Sperm determines sex (50% chance).'
    ],
    detailedContent: `Key Genetic Terms

- Gene: a segment of DNA that codes for a trait (e.g., flower colour).
- Allele: one of two or more versions of a gene (e.g., purple vs white).
- Dominant allele: expressed when present (capital letter, e.g., P).
- Recessive allele: only expressed when both copies are recessive (p).
- Genotype: the pair of alleles (PP, Pp, pp).
- Phenotype: outward appearance (purple or white).
- Homozygous: two identical alleles (AA or aa).
- Heterozygous: two different alleles (Aa).

Monohybrid Cross Example

Cross pure breeding tall (TT) with short (tt).

| t | t |
|---|---|
| T | Tt | Tt |
| T | Tt | Tt |

F1: all Tt (tall). Cross F1 (Tt × Tt):

| T | t |
|---|---|
| T | TT | Tt |
| t | Tt | tt |

Genotype ratio: 1 TT : 2 Tt : 1 tt. Phenotype ratio: 3 tall : 1 short.

Sex Determination

Females: XX. Males: XY. Eggs always X. Sperm X or Y.

- X sperm + X egg → girl (XX)
- Y sperm + X egg → boy (XY)

Thus sex is determined by the father’s sperm. Ratio 1:1.

Malawi Example: Sickle cell anaemia is caused by recessive allele (HbS). Carriers (HbA/HbS) are resistant to malaria – reason the allele persists in Malawi.`,
    summary: 'Genes control traits; alleles are versions. Dominant allele masks recessive. Genotype vs phenotype. Monohybrid cross gives 3:1 ratio. Females XX, males XY; sperm determines sex.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Sickle Cell in Malawi', description: 'Recessive allele protects against malaria; common in malaria‑endemic areas.' },
      { title: 'Maize Kernel Colour', description: 'Cross purple and yellow kernels – 3:1 ratio in second generation.' }
    ],
    practiceQuestions: [
      { question: 'What is the difference between genotype and phenotype?', answer: 'Genotype is the genetic makeup; phenotype is the observable trait.', hint: 'Genes vs appearance.' },
      { question: 'What is the chance that a couple will have a son?', answer: '50% (one in two)', hint: 'Sperm carries X or Y equally.' }
    ]
  },

  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Natural Resources',
    lessonNumber: 1,
    lessonTitle: 'Definition and Importance of Natural Resources',
    lessonId: 'agriculture-f1-natural-resources-1',
    order: 1,
    learningObjectives: [
      'Define natural resources',
      'Explain the importance of natural resources in agricultural production'
    ],
    introduction: 'Natural resources are gifts of nature that help us produce food. Today we learn about water, air, soil, vegetation and sunlight, and why each matters for farming.',
    keyPoints: [
      'Natural resources: materials or substances from nature useful to people.',
      'Key resources for agriculture: water, air, soil, vegetation, sunlight.',
      'Water: essential for plant growth, animal drinking, irrigation.',
      'Air: provides CO2 for photosynthesis, O2 for respiration.',
      'Soil: anchors roots, holds water and nutrients.',
      'Vegetation: protects soil, feeds animals.',
      'Sunlight: drives photosynthesis.'
    ],
    detailedContent: `Natural resources are materials from nature that people use. For farmers in Malawi, the main natural resources are:

1. Water: Without water, crops cannot grow and animals cannot drink. Rain is the main source, but rivers (Shire), lakes (Lake Malawi) and groundwater are also vital.

2. Air: Plants take carbon dioxide from air for photosynthesis; they release oxygen. Wind helps pollination but strong winds can damage crops.

3. Soil: The layer covering the earth where plants grow; it anchors roots, holds water and provides nutrients.

4. Vegetation: Natural plants and trees protect soil from erosion, provide habitat for beneficial animals, and can be used as mulch or green manure.

5. Sunlight: Energy from the sun drives photosynthesis. Without sunlight, no crop would grow.

Importance:

- Water: essential for seed germination, growth, food production.
- Air: CO2 is a raw material for making food in plants.
- Soil: without soil, no crops can grow.
- Sunlight: determines growing seasons and crop types.
- Vegetation: protects the environment and provides food for livestock.`,
    summary: 'Natural resources for agriculture include water, air, soil, vegetation and sunlight. Each is essential for crop and animal production.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Shire River Irrigation', description: 'Farmers use river water for dry‑season gardens.' },
      { title: 'Sunlight for Maize', description: 'Maize needs plenty of sunlight to produce high yields.' }
    ],
    practiceQuestions: [
      { question: 'Name three natural resources essential for growing maize.', answer: 'Water, soil, sunlight', hint: 'What does a seed need to grow?' },
      { question: 'Why is air important for crops?', answer: 'Plants need carbon dioxide for photosynthesis.', hint: 'Gas exchange.' }
    ]
  },

  {
    subject: 'Agriculture',
    form: 'Form 4',
    topic: 'Climate Change Mitigation',
    lessonNumber: 1,
    lessonTitle: 'Mitigating Climate Change in Agriculture',
    lessonId: 'agriculture-f4-climate-mitigation-1',
    order: 2,
    learningObjectives: [
      'Describe the effects of climate change on agriculture in Malawi',
      'Explain mitigation measures: conservation agriculture, agroforestry, re‑afforestation, integrated systems'
    ],
    introduction: 'Climate change is causing unpredictable rains, droughts and floods in Malawi. Agriculture contributes to greenhouse gases but can also be part of the solution. Today we learn how farmers can reduce emissions and adapt to the changing climate.',
    keyPoints: [
      'Effects: longer dry spells, shorter rainy seasons, more droughts and floods, heat stress on crops, new pests.',
      'Agriculture contributes: deforestation (CO2), livestock (methane), fertilisers (nitrous oxide), burning residues.',
      'Mitigation measures: conservation agriculture (less tillage, mulching, rotation), agroforestry (trees store carbon), re‑afforestation, integrated crop‑livestock‑fish systems.',
      'Adaptation benefits: improved water retention, reduced erosion, diversified production.'
    ],
    detailedContent: `Effects of Climate Change on Agriculture in Malawi

- Unpredictable rainfall: the rainy season may start late or end early; crops fail.
- Droughts: more frequent; maize wilts.
- Floods: intense rain washes away soil and crops.
- Heat stress: high temperatures reduce pollination in maize.
- New pests: fall armyworm became more common with changing weather.

How Agriculture Contributes to Climate Change

- Deforestation: clearing forests for farmland releases carbon dioxide.
- Livestock: cattle produce methane.
- Fertiliser use: nitrogen fertiliser releases nitrous oxide.
- Burning crop residues: releases carbon and destroys soil organic matter.

Mitigation Measures

1. Conservation Agriculture (CA):
   * Minimum soil disturbance (less ploughing) → less carbon released.
   * Permanent soil cover (mulch) → adds carbon to soil.
   * Crop rotation with legumes → reduces need for nitrogen fertiliser.
   CA reduces emissions and stores more carbon.

2. Agroforestry:
   * Growing trees with crops (e.g., maize with Gliricidia or Faidherbia).
   * Trees absorb CO2 (carbon sequestration), improve soil, provide fodder and firewood.

3. Re‑afforestation:
   * Planting trees on degraded land or along rivers; restores carbon sink.

4. Integrated crop‑livestock‑fish systems:
   * Animal manure instead of synthetic fertilisers reduces nitrous oxide.
   * Fish ponds capture nutrients and recycle waste.

5. Reducing burning: leave crop residues on field as mulch – they decompose and add organic matter.

Adaptation Benefits

- CA and agroforestry improve water infiltration – better during droughts.
- Mulch keeps soil cooler and reduces evaporation.
- Trees provide shade and windbreaks.
- Diverse systems provide multiple food sources – if one fails, others survive.

Malawi Example: In Zomba, farmers plant Gliricidia trees in maize fields. The trees fix nitrogen, provide firewood, store carbon, and practice CA (no burning of maize stalks). Their soils are healthier and they get maize even with less rain.`,
    summary: 'Climate change causes droughts, floods, erratic rains. Agriculture contributes through deforestation, livestock, fertilisers. Mitigation: conservation agriculture, agroforestry, re‑afforestation, integrated systems. These also help adaptation.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Gliricidia Agroforestry', description: 'Farmers in Zomba plant Gliricidia with maize – stores carbon and improves soil.' },
      { title: 'Conservation Agriculture', description: 'Mulching and no‑till reduce emissions and retain moisture.' }
    ],
    practiceQuestions: [
      { question: 'How does conservation agriculture reduce greenhouse gas emissions?', answer: 'Less ploughing releases less carbon; mulching adds carbon; less fertiliser needed.', hint: 'Carbon stays in soil.' },
      { question: 'What is one adaptation benefit of agroforestry?', answer: 'Trees provide shade, reduce wind, and improve water retention.', hint: 'Helps during drought.' }
    ]
  },
  // Land drainage (Form 4)
  {
    subject: 'Agriculture',
    form: 'Form 4',
    topic: 'Land Drainage',
    lessonNumber: 1,
    lessonTitle: 'Importance and Methods of Land Drainage',
    lessonId: 'agriculture-f4-drainage-1',
    order: 3,
    learningObjectives: [
      'State the meaning and importance of land drainage',
      'Describe methods of land drainage (surface, sub‑surface, bio‑drainage)'
    ],
    introduction: 'Waterlogged soils are bad for most crops because roots cannot breathe. Land drainage removes excess water. Today we learn why drainage is important and the different methods used.',
    keyPoints: [
      'Land drainage: removal of excess water from soil surface or root zone.',
      'Importance: improves aeration, increases soil temperature, allows early planting, reduces water‑borne diseases, increases yields.',
      'Surface drainage: open ditches, ridges, land grading – removes ponded water.',
      'Sub‑surface drainage: perforated pipes or mole drains placed below ground level.',
      'Bio‑drainage: planting deep‑rooted trees (e.g., eucalyptus) that pump water from deeper layers.'
    ],
    detailedContent: `What is Land Drainage?

Land drainage is the removal of excess water from the soil, either from the surface or from the root zone, to create favourable conditions for crop growth.

Importance of Land Drainage

- Improves soil aeration: roots need oxygen.
- Increases soil temperature: waterlogged soils are cold.
- Allows earlier planting in rainy season.
- Reduces water‑borne diseases (e.g., in rice fields, but most crops suffer).
- Prevents salt accumulation (in irrigated areas).
- Increases crop yields and root development.

Methods of Land Drainage

1. Surface drainage:
   - Open ditches (V‑shaped or trapezoidal) along field edges or across slopes.
   - Ridges and furrows: crops planted on ridges, water collects in furrows.
   - Land grading: smoothing surface to create gentle slopes for water runoff.

2. Sub‑surface drainage:
   - Perforated pipes: buried at 0.5‑1.5 m depth, water enters through holes and flows to outlet.
   - Mole drains: channel created by a mole plough (no pipe); suitable for clay soils.
   - Rubble drains: trenches filled with stones.

3. Bio‑drainage:
   - Planting deep‑rooted trees (eucalyptus, casuarina, poplar) which absorb groundwater through transpiration.
   - Suitable for areas with shallow water tables.

Choosing a method depends on soil type, topography, cost, and purpose.

Malawi Example: In irrigated schemes (e.g., Dwangwa) sub‑surface drainage prevents salinisation. In high‑rainfall areas with clay soils (Lilongwe, Mchinji), farmers use ridges and shallow open ditches to drain maize fields.`,
    summary: 'Land drainage removes excess water, improves aeration and yields. Surface methods: ditches, ridges. Sub‑surface: pipes, mole drains. Bio‑drainage uses trees.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Ridges for Maize', description: 'Ridges allow excess water to drain from root zone.' },
      { title: 'Eucalyptus for Drainage', description: 'Planted in waterlogged areas to lower water table.' }
    ],
    practiceQuestions: [
      { question: 'Why is land drainage important for maize production?', answer: 'Maize roots need oxygen; waterlogging stunts growth.', hint: 'Roots respire.' },
      { question: 'What is bio‑drainage?', answer: 'Using deep‑rooted trees to remove groundwater through transpiration.', hint: 'Trees as pumps.' }
    ]
  },

  
  {
    subject: 'Biology',
    form: 'Form 3',
    topic: 'Circulatory System',
    lessonNumber: 1,
    lessonTitle: 'Structure of the Heart and Blood Vessels',
    lessonId: 'biology-f3-circulatory-1',
    order: 4,
    learningObjectives: [
      'Identify the parts of the heart and major blood vessels',
      'Distinguish between arteries, veins and capillaries'
    ],
    introduction: 'Your heart beats about 100,000 times a day, pumping blood to every cell. The circulatory system transports oxygen, nutrients and waste products. Today we learn the structure of the heart and the different types of blood vessels.',
    keyPoints: [
      'Heart: four chambers – right atrium, right ventricle, left atrium, left ventricle. Valves prevent backflow.',
      'Major vessels: aorta (to body), vena cava (from body), pulmonary artery (to lungs), pulmonary vein (from lungs).',
      'Arteries: thick, elastic walls, carry blood away from heart, no valves, pulse present.',
      'Veins: thin walls, large lumen, contain valves, carry blood to heart.',
      'Capillaries: one‑cell thick, exchange of substances.'
    ],
    detailedContent: `Structure of the Heart

The heart is a muscular pump divided into four chambers:
- Right atrium: receives deoxygenated blood from body (via vena cava).
- Right ventricle: pumps blood to lungs (via pulmonary artery).
- Left atrium: receives oxygenated blood from lungs (via pulmonary vein).
- Left ventricle: pumps blood to body (via aorta). This chamber has the thickest muscle.

Valves: tricuspid (right side), bicuspid (left side) and semilunar (at exits) prevent backflow.

Major Blood Vessels

- Aorta: largest artery; carries oxygenated blood from left ventricle to body.
- Vena cava: large vein; brings deoxygenated blood from body to right atrium.
- Pulmonary artery: carries deoxygenated blood from right ventricle to lungs.
- Pulmonary vein: carries oxygenated blood from lungs to left atrium.

Comparison of Vessels

| Feature | Artery | Vein | Capillary |
|---------|--------|------|-----------|
| Wall thickness | Thick | Thin | Very thin (one cell) |
| Lumen | Small | Large | Very small (only RBCs pass single file) |
| Valves | No | Yes | No |
| Direction | Away from heart | To heart | Connect arteries and veins |
| Blood pressure | High | Low | Intermediate |
| Function | Transport | Return | Exchange |

Blood Pressure: systolic (ventricles contract) / diastolic (ventricles relax). Measured in mmHg.

Capillaries are adapted for exchange: large surface area, thin walls, slow blood flow.

Malawi Example: Taking blood pressure at a clinic uses a sphygmomanometer. High blood pressure (hypertension) is a common health problem.`,
    summary: 'Heart: four chambers, valves. Arteries carry blood away, veins return, capillaries exchange. Arteries thick and elastic, veins have valves.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Blood Pressure Check', description: 'Routine screening at health centres.' },
      { title: 'Varicose Veins', description: 'Faulty valves cause swollen veins.' }
    ],
    practiceQuestions: [
      { question: 'Which chamber of the heart has the thickest muscle?', answer: 'Left ventricle', hint: 'Pumps to whole body.' },
      { question: 'Why do veins have valves?', answer: 'To prevent backflow of blood due to low pressure.', hint: 'Blood flows against gravity in limbs.' }
    ]
  },
  {
    subject: 'Biology',
    form: 'Form 3',
    topic: 'Circulatory System',
    lessonNumber: 2,
    lessonTitle: 'Blood Components and Their Functions',
    lessonId: 'biology-f3-circulatory-2',
    order: 5,
    learningObjectives: [
      'List the components of blood and describe their functions',
      'Explain the process of blood clotting'
    ],
    introduction: 'Blood is not just red liquid – it is a tissue with specialised cells. Today we learn about plasma, red cells, white cells and platelets, and how blood clots to prevent bleeding.',
    keyPoints: [
      'Plasma: water, dissolved nutrients, hormones, waste – transports substances.',
      'Red blood cells: carry oxygen (haemoglobin), no nucleus, biconcave shape.',
      'White blood cells: fight infection – phagocytes engulf; lymphocytes produce antibodies.',
      'Platelets: cell fragments that initiate clotting.',
      'Clotting process: platelets → thromboplastin → prothrombin → thrombin → fibrinogen → fibrin mesh traps red cells → clot.'
    ],
    detailedContent: `Components of Blood

1. Plasma (55% of blood)
   - Straw‑coloured liquid (92% water).
   - Contains: glucose, amino acids, lipids, vitamins, minerals, hormones, CO2, urea, antibodies.
   - Functions: transports soluble substances, maintains pH, distributes heat.

2. Red blood cells (erythrocytes)
   - Biconcave disc – increases surface area.
   - No nucleus – more space for haemoglobin.
   - Haemoglobin: iron‑containing protein that reversibly binds oxygen.
   - Lifespan about 120 days; produced in bone marrow.

3. White blood cells (leucocytes)
   - Have nucleus; colourless.
   - Phagocytes (neutrophils, macrophages): engulf and digest bacteria.
   - Lymphocytes: produce antibodies (B cells), kill infected cells (T cells).

4. Platelets (thrombocytes)
   - Cell fragments from megakaryocytes.
   - Involved in clotting.

Blood Clotting Process (simplified)

1. Blood vessel damaged → platelets adhere and release clotting factors.
2. Thromboplastin (from platelets and damaged tissue) converts prothrombin → thrombin (requires calcium).
3. Thrombin converts soluble fibrinogen → insoluble fibrin.
4. Fibrin threads form a mesh that traps red blood cells and platelets → clot.

Failure to clot (haemophilia) is a genetic disorder (X‑linked recessive).

Anaemia: low red blood cells or haemoglobin – causes tiredness, pale skin. Prevention: iron‑rich foods, deworming.

Malawi Example: Deworming campaigns in schools reduce anaemia caused by hookworms.`,
    summary: 'Plasma transports nutrients and waste. Red blood cells carry oxygen. White blood cells fight infection. Platelets clot blood. Clotting cascade stops bleeding.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Deworming in Schools', description: 'Reduces anaemia by preventing hookworm infestation.' },
      { title: 'Haemophilia in Families', description: 'Genetic disorder where blood does not clot properly.' }
    ],
    practiceQuestions: [
      { question: 'What is the function of haemoglobin?', answer: 'Carries oxygen from lungs to tissues.', hint: 'Iron‑containing protein.' },
      { question: 'What is the role of platelets?', answer: 'Initiate blood clotting.', hint: 'Cell fragments.' }
    ]
  },
  // Excretory system (kidney)
  {
    subject: 'Biology',
    form: 'Form 3',
    topic: 'Excretory System',
    lessonNumber: 1,
    lessonTitle: 'Structure of the Kidney and Nephron',
    lessonId: 'biology-f3-excretory-1',
    order: 6,
    learningObjectives: [
      'Identify the parts of the urinary system (kidneys, ureters, bladder, urethra)',
      'Describe the internal structure of the kidney and the nephron'
    ],
    introduction: 'Your kidneys filter your blood, removing urea, excess water and salts. Today we learn the structure of the kidney and its microscopic filtering units – nephrons.',
    keyPoints: [
      'Urinary system: kidneys (filter blood), ureters (carry urine to bladder), bladder (stores urine), urethra (voids urine).',
      'Kidney structure: outer cortex (glomeruli and tubules), inner medulla (collecting ducts), renal pelvis (collects urine).',
      'Nephron: functional unit. Components: glomerulus, Bowman’s capsule, proximal tubule, loop of Henle, distal tubule, collecting duct.'
    ],
    detailedContent: `Urinary System

- Kidneys: bean‑shaped, located at back of abdomen. Filter about 180 litres of blood per day.
- Ureters: tubes that carry urine from kidney to bladder (peristalsis).
- Bladder: muscular sac that stores urine (capacity 300‑500 ml).
- Urethra: tube from bladder to outside. In males, also carries semen.

Internal Structure of Kidney

- Cortex (outer layer): contains glomeruli and proximal/distal tubules.
- Medulla (inner): contains loops of Henle and collecting ducts.
- Renal pelvis: funnel‑shaped cavity collecting urine from collecting ducts, leading to ureter.

The Nephron (about 1 million per kidney)

1. Glomerulus: knot of capillaries inside Bowman’s capsule. Blood pressure forces fluid out – filtration.
2. Bowman’s capsule: collects filtrate.
3. Proximal convoluted tubule (PCT): reabsorbs glucose, amino acids, most salts, 65% water.
4. Loop of Henle: creates concentration gradient in medulla, allows water reabsorption.
5. Distal convoluted tubule (DCT): further adjustments; secretion of wastes.
6. Collecting duct: collects urine from many nephrons; final water reabsorption regulated by ADH.

Malawi Example: Kidney stones are common in areas where people drink less water. Prevention: drink plenty of clean water.`,
    summary: 'Kidneys filter blood; ureters carry urine; bladder stores; urethra excretes. Kidney has cortex, medulla, pelvis. Nephron: glomerulus, tubules, collecting duct.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Urinary Tract Infection', description: 'Common in women; drinking water helps flush bacteria.' },
      { title: 'Kidney Stone', description: 'Hard mineral deposits can cause severe pain.' }
    ],
    practiceQuestions: [
      { question: 'What is the functional unit of the kidney?', answer: 'Nephron', hint: 'Microscopic filter.' },
      { question: 'Where does filtration occur in the nephron?', answer: 'Glomerulus inside Bowman’s capsule', hint: 'Capillary knot.' }
    ]
  },
  {
    subject: 'Biology',
    form: 'Form 3',
    topic: 'Excretory System',
    lessonNumber: 2,
    lessonTitle: 'Urine Formation and Role of ADH',
    lessonId: 'biology-f3-excretory-2',
    order: 7,
    learningObjectives: [
      'Explain the process of urine formation (filtration, reabsorption, secretion)',
      'Describe the role of ADH (antidiuretic hormone) in osmoregulation'
    ],
    introduction: 'How does the kidney produce urine? It happens in three steps: filtration, reabsorption and secretion. Hormones like ADH control how much water is reabsorbed. Today we learn these processes.',
    keyPoints: [
      'Filtration: blood pressure forces water, urea, glucose, salts from glomerulus into Bowman’s capsule.',
      'Reabsorption: useful substances (glucose, amino acids, most water) returned to blood from tubules.',
      'Secretion: additional wastes (H+, drugs, K+) moved into tubule.',
      'ADH: released when body lacks water; increases water reabsorption in collecting duct → concentrated urine.',
      'Alcohol inhibits ADH → dilute urine, dehydration.'
    ],
    detailedContent: `Urine Formation – Three Steps

Step 1 – Filtration:
Blood pressure forces water, urea, glucose, amino acids, salts and small molecules from glomerular capillaries into Bowman’s capsule. Blood cells and large proteins remain.

Step 2 – Reabsorption:
As filtrate passes through the tubules, useful substances are actively transported back into the blood.
- Proximal tubule: glucose, amino acids, vitamins, most NaCl and water (65%).
- Loop of Henle: further salt and water reabsorption.
- Distal tubule and collecting duct: variable water reabsorption (controlled by ADH).

Step 3 – Secretion:
Some substances (H+, K+, ammonia, drugs) are actively transported from blood into the tubule for excretion.

End product: urine (urea, excess water, excess salts, other waste).

Role of ADH (Antidiuretic Hormone)

- Produced by hypothalamus, released by pituitary.
- When blood is concentrated (low water), osmoreceptors in hypothalamus trigger ADH release.
- ADH makes collecting duct walls more permeable to water → more water reabsorbed → small volume of concentrated urine.
- When water excess, ADH release decreases → dilute urine.

Osmoregulation: maintenance of constant blood concentration (about 290 mOsm/L).

Kidney Failure

Causes: chronic infection, diabetes, high blood pressure, toxins.

Dialysis machine (haemodialysis):
- Blood flows through tubing made of semi‑permeable membrane.
- Dialysis fluid containing normal levels of salts (no urea) on other side.
- Urea and excess salts diffuse out.
- Clean blood returns to patient.

Malawi Example: Queen Elizabeth Central Hospital in Blantyre has a renal unit with dialysis machines. Patients travel from far for treatment.`,
    summary: 'Urine formation: filtration → reabsorption → secretion. ADH increases water reabsorption, concentrating urine. Kidney failure treated by dialysis or transplant.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Dialysis in Blantyre', description: 'QECH offers dialysis; patients travel long distances.' },
      { title: 'Dark Urine', description: 'Indicates ADH active; drink more water.' }
    ],
    practiceQuestions: [
      { question: 'What substance is completely reabsorbed in a healthy kidney?', answer: 'Glucose', hint: 'None appears in urine normally.' },
      { question: 'What happens to urine output when ADH is released?', answer: 'Decreases (urine more concentrated)', hint: 'Body saves water.' }
    ]
  },

  
  {
    subject: 'Chemistry',
    form: 'Form 3',
    topic: 'Oxidation and Reduction',
    lessonNumber: 1,
    lessonTitle: 'Oxidation Numbers and Redox Half‑Equations',
    lessonId: 'chemistry-f3-redox-1',
    order: 8,
    learningObjectives: [
      'Assign oxidation numbers to atoms in elements, compounds and ions',
      'Write half‑equations for oxidation and reduction'
    ],
    introduction: 'When iron rusts, it gains oxygen – that is oxidation. When a metal is extracted from its ore, it loses oxygen – reduction. Today we learn the electron‑based definition and how to write half‑equations.',
    keyPoints: [
      'Oxidation: loss of electrons, increase in oxidation number.',
      'Reduction: gain of electrons, decrease in oxidation number.',
      'Oxidation number rules: free element = 0; monatomic ion = charge; H = +1 (except hydrides), O = -2 (except peroxides); sum = 0 in compound; sum = charge in ion.',
      'Half‑equation shows electron transfer. Example: Zn → Zn2+ + 2e‑ (oxidation); Cu2+ + 2e‑ → Cu (reduction).'
    ],
    detailedContent: `Oxidation Numbers (States)

Rules for assigning oxidation numbers:
- Uncombined element: 0 (e.g., Na, Cl2, O2).
- Monatomic ion: same as charge (Na+ = +1, Cl‑ = -1).
- Hydrogen: usually +1 (except metal hydrides, H = -1).
- Oxygen: usually -2 (except peroxides, -1; OF2, +2).
- Sum in a compound = 0.
- Sum in a polyatomic ion = charge on ion.

Examples:
- H2O: H = +1 each, O = -2 → 2×(+1) + (-2) = 0.
- SO42‑: O = -2 each (total -8), S = x: x + (-8) = -2 → x = +6.
- MnO4‑: O = -2 each (total -8), Mn = x: x + (-8) = -1 → x = +7.

Half‑Equations

Oxidation half‑reaction (loss of electrons):
Example: Zn → Zn2+ + 2e‑

Reduction half‑reaction (gain of electrons):
Example: Cu2+ + 2e‑ → Cu

To obtain the overall redox equation, multiply half‑equations if necessary to equalise electrons, then add.

Example: Zn + Cu2+ → Zn2+ + Cu

Identifying oxidising and reducing agents
- Oxidising agent: causes oxidation, itself reduced (accepts electrons).
- Reducing agent: causes reduction, itself oxidised (donates electrons).

In the reaction Zn + Cu2+ → Zn2+ + Cu:
- Zn is the reducing agent (donates electrons).
- Cu2+ is the oxidising agent (accepts electrons).`,
    summary: 'Oxidation number rules allow tracking of electron transfer. Half‑equations show oxidation (loss of e‑) and reduction (gain of e‑). Redox combines both halves.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Rusting of Iron', description: 'Iron oxidises (loses electrons) in air and water.' },
      { title: 'Bleaching', description: 'Chlorine oxidises stains.' }
    ],
    practiceQuestions: [
      { question: 'What is the oxidation state of chromium in Cr2O72‑?', answer: '+6', hint: 'O = -2 each, total -14; 2Cr + (-14) = -2 → 2Cr = +12 → Cr = +6.' },
      { question: 'Write the half‑equation for the reduction of chlorine gas to chloride ions.', answer: 'Cl2 + 2e‑ → 2Cl‑', hint: 'Chlorine gains electrons.' }
    ]
  },
  // Electrolysis
  {
    subject: 'Chemistry',
    form: 'Form 3',
    topic: 'Electrolysis',
    lessonNumber: 1,
    lessonTitle: 'Process and Products of Electrolysis',
    lessonId: 'chemistry-f3-electrolysis-1',
    order: 9,
    learningObjectives: [
      'Define electrolysis and predict products for molten and aqueous electrolytes',
      'Explain the purification of copper by electrolysis'
    ],
    introduction: 'Electrolysis uses electricity to break down compounds. It is used to extract metals, purify copper and electroplate objects. Today we learn how it works and what products form.',
    keyPoints: [
      'Electrolysis: decomposition of an electrolyte by electric current.',
      'Components: cathode (‑), anode (+), electrolyte (ionic compound molten or dissolved).',
      'Molten electrolyte: cations reduced at cathode (metal); anions oxidised at anode (non‑metal).',
      'Aqueous electrolyte: water also present; uses reactivity series to predict discharge.',
      'Copper purification: impure copper as anode, pure copper as cathode, copper(II) sulphate electrolyte. Impurities fall off as anode sludge.'
    ],
    detailedContent: `What is Electrolysis?

Electrolysis is the decomposition of an electrolyte (a substance that conducts electricity when molten or in solution) by passing a direct electric current.

Setup: two electrodes (cathode negative, anode positive) connected to a power supply, immersed in the electrolyte.

Molten Electrolytes (e.g., molten NaCl)

Ions free to move:
- Cations (Na+) move to cathode: Na+ + e‑ → Na (reduction)
- Anions (Cl‑) move to anode: 2Cl‑ → Cl2 + 2e‑ (oxidation)

Products: sodium metal at cathode, chlorine gas at anode.

Aqueous Electrolytes

Water also provides H+, OH‑. Which ions discharge depends on reactivity series and concentration.

Rules:
- At cathode: the less reactive metal (or H+) discharges. If metal is more reactive than hydrogen, H+ discharges to form H2 gas.
- At anode: if halide ions (Cl‑, Br‑, I‑) are present, they discharge. Otherwise, OH‑ discharges to form O2 gas.

Example: Electrolysis of aqueous NaCl
- Cathode: H+ from water discharges (Na is very reactive) → H2 gas.
- Anode: Cl‑ discharges → Cl2 gas.

Example: Electrolysis of copper(II) sulphate solution with inert electrodes (graphite)
- Cathode: Cu2+ discharges (Cu less reactive than H) → Cu metal.
- Anode: OH‑ discharges (no halides) → O2 gas.

Electrolysis with Copper Electrodes (Purification of Copper)

- Anode: impure copper (dissolves): Cu → Cu2+ + 2e‑
- Cathode: pure copper (copper deposits): Cu2+ + 2e‑ → Cu
- Electrolyte: copper(II) sulphate solution.
- Impurities (gold, silver, platinum) fall off as anode sludge (valuable).

Applications:
- Extraction of aluminium (Hall‑Héroult process – alumina dissolved in cryolite).
- Electroplating: depositing a thin layer of metal (e.g., silver, chromium) on another object for decoration or corrosion protection.

Malawi Example: Copper used for electrical wiring in houses is purified by electrolysis. Electroplating of bicycle parts reduces rust.`,
    summary: 'Electrolysis decomposes electrolytes. In molten salts, metal and non‑metal produced. In aqueous solutions, product depends on reactivity. Copper purification uses electrolysis.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Copper Refining', description: 'Electrolysis purifies copper for wires.' },
      { title: 'Chrome Plating', description: 'Electroplating protects metal from rust.' }
    ],
    practiceQuestions: [
      { question: 'What gas is produced at the anode during electrolysis of molten NaCl?', answer: 'Chlorine (Cl2)', hint: 'Cl‑ ions oxidised.' },
      { question: 'Why is copper transferred from impure to pure electrode during copper refining?', answer: 'Anode dissolves, pure copper deposits on cathode.', hint: 'Electrolysis moves copper ions.' }
    ]
  },

  
  {
    subject: 'Physics',
    form: 'Form 3',
    topic: 'Linear Motion',
    lessonNumber: 1,
    lessonTitle: 'Equations of Uniformly Accelerated Motion',
    lessonId: 'physics-f3-linear-motion-1',
    order: 10,
    learningObjectives: [
      'Define distance, displacement, speed, velocity and acceleration',
      'Apply the equations of uniformly accelerated motion (v = u + at, s = ut + ½at², v² = u² + 2as)'
    ],
    introduction: 'A car speeds up from rest. A stone falls from a bridge. These are examples of motion with constant acceleration. Today we learn the four equations of motion that allow us to predict anything about the motion if we know a few values.',
    keyPoints: [
      'Scalars: magnitude only (distance, speed, mass, time). Vectors: magnitude and direction (displacement, velocity, acceleration, force).',
      'Equations (for constant acceleration):
       1. v = u + at
       2. s = ut + ½ at²
       3. v² = u² + 2as
       4. s = (u + v)/2 × t',
      'Where u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement.'
    ],
    detailedContent: `Definitions

- Distance (scalar): total path length.
- Displacement (vector): straight‑line distance from start to finish with direction.
- Speed (scalar): distance/time.
- Velocity (vector): displacement/time (rate of change of displacement).
- Acceleration (vector): rate of change of velocity (a = (v‑u)/t).

Equations of Uniformly Accelerated Motion

These equations apply only when acceleration is constant. Use consistent SI units (m, m/s, m/s²).

1. v = u + at
   Example: A car starts from rest (u = 0) and accelerates at 2 m/s² for 5 seconds. v = 0 + 2×5 = 10 m/s.

2. s = ut + ½ at²
   Same car: distance travelled in 5 seconds: s = 0×5 + ½×2×5² = 0 + ½×2×25 = 25 metres.

3. v² = u² + 2as
   Example: A car moving at 20 m/s decelerates at 4 m/s² to a stop. Find stopping distance.
   u=20, v=0, a=‑4 (deceleration).
   0² = 20² + 2×(-4)×s → 0 = 400 – 8s → 8s = 400 → s = 50 metres.

4. s = (u + v)/2 × t
   Example: If u=10, v=30, t=4: s = (10+30)/2 × 4 = 20×4 = 80 m.

Motion‑Time Graphs

- Displacement‑time graph: slope = velocity. Flat line = stationary; straight sloping = constant velocity; curve = acceleration.
- Velocity‑time graph: slope = acceleration; area under graph = displacement.

Free fall: acceleration due to gravity g ≈ 10 m/s² downwards (ignoring air resistance).

Malawi Example: A minibus from Blantyre to Lilongwe speeds up after a stop. Using equations, one can calculate time to reach a certain speed or distance covered.`,
    summary: 'Equations of motion: v = u + at, s = ut + ½at², v² = u² + 2as, s = (u+v)/2 × t. Use for constant acceleration.',
    estimatedTime: '25 mins',
    malawiExamples: [
      { title: 'Minibus Acceleration', description: 'Calculate time and distance when a minibus accelerates from rest.' },
      { title: 'Emergency Braking', description: 'Find stopping distance of a car using deceleration.' }
    ],
    practiceQuestions: [
      { question: 'A stone is dropped from a cliff (u=0, a=10 m/s²). How fast is it moving after 3 seconds?', answer: '30 m/s', hint: 'v = u + at = 0 + 10×3 = 30' },
      { question: 'The same stone falls for 3 seconds. How far has it fallen?', answer: '45 m', hint: 's = 0 + ½×10×9 = 45' }
    ]
  },
  // Hooke's law
  {
    subject: 'Physics',
    form: 'Form 4',
    topic: 'Hooke\'s Law',
    lessonNumber: 1,
    lessonTitle: 'Hooke’s Law and Elasticity',
    lessonId: 'physics-f4-hookes-law-1',
    order: 11,
    learningObjectives: [
      'State Hooke’s law (extension ∝ force within elastic limit)',
      'Determine the spring constant from an extension‑load graph'
    ],
    introduction: 'When you stretch a spring, the more force you apply, the more it extends – up to a point. Hooke’s law describes this relationship. Today we learn how to verify it and calculate spring constants.',
    keyPoints: [
      'Hooke’s law: The extension of an elastic material is directly proportional to the applied force, provided the elastic limit is not exceeded.',
      'Formula: F = kx, where F = force (N), k = spring constant (N/m), x = extension (m).',
      'Spring constant: stiffness of the spring. Higher k means stiffer spring.',
      'Elastic limit: beyond this, permanent deformation occurs.'
    ],
    detailedContent: `Hooke’s Law

When a force is applied to a spring, it stretches. Provided the force is not too large, the extension (increase in length) is directly proportional to the force.

Mathematically: F = k × x
- F = force (N)
- k = spring constant (N/m) – a measure of stiffness
- x = extension (m) ( = stretched length – original length)

Verification experiment:
- Hang a spring from a stand.
- Add loads (masses) and measure extension.
- Plot graph of load (force) versus extension.
- If linear, Hooke’s law is obeyed. Slope of graph = k.

Elastic limit: the point beyond which the material does not return to its original length when the force is removed. Beyond this, plastic deformation occurs.

Applications:
- Spring balances: measure force by extension.
- Vehicle suspensions: springs absorb shocks.
- Mattresses and ballpoint pens.

Springs in parallel and series (qualitative):
- In parallel: combined spring constant k_total = k1 + k2 (stiffer).
- In series: 1/k_total = 1/k1 + 1/k2 (more extension for same load).

Malawi Example: A farmer uses a spring balance to weigh bags of maize. The balance is calibrated using Hooke’s law.`,
    summary: 'Hooke’s law: F = kx, extension proportional to force within elastic limit. Spring constant k = F/x. Graph slope gives k.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Spring Balance', description: 'Used to weigh produce at the market.' },
      { title: 'Vehicle Suspension', description: 'Springs absorb bumps on rough roads.' }
    ],
    practiceQuestions: [
      { question: 'A spring extends by 0.05 m when a force of 10 N is applied. Calculate the spring constant.', answer: '200 N/m', hint: 'k = F/x = 10/0.05 = 200 N/m' },
      { question: 'What happens if you stretch a spring beyond its elastic limit?', answer: 'It does not return to its original length (permanent deformation).', hint: 'Plastic region.' }
    ]
  },
  // Electromagnetism (motors, generators)
  {
    subject: 'Physics',
    form: 'Form 4',
    topic: 'Electromagnetism',
    lessonNumber: 1,
    lessonTitle: 'Electric Motors and Generators',
    lessonId: 'physics-f4-electromagnetism-1',
    order: 12,
    learningObjectives: [
      'Explain the working of a simple DC motor',
      'Describe how an AC generator produces electricity'
    ],
    introduction: 'When electricity flows through a wire, it creates a magnetic field. When a magnetic field changes near a wire, it creates electricity. Today we learn how motors and generators work.',
    keyPoints: [
      'DC motor: coil in magnetic field; current causes rotation; commutator reverses current every half‑turn.',
      'AC generator (dynamo): coil rotates in magnetic field, inducing alternating current; slip rings allow AC output.',
      'Fleming’s left‑hand rule (motor): thumb = motion, first finger = field, second finger = current.',
      'Fleming’s right‑hand rule (generator): thumb = motion, first finger = field, second finger = induced current.',
      'Factors affecting induced emf: speed of rotation, magnetic field strength, number of turns, area of coil.'
    ],
    detailedContent: `Simple DC Motor

A DC motor consists of a coil of wire (armature) placed between the poles of a magnet. Current flows through the coil, producing a magnetic field that interacts with the permanent field, causing rotation.

Key part: commutator (split ring) – reverses the current direction every half‑turn, so the coil continues rotating in the same direction.

Fleming’s left‑hand rule (for motors):
- Index finger: direction of magnetic field (N to S).
- Middle finger: direction of current.
- Thumb: direction of motion (force).

Applications: electric fans, water pumps, maize mills, toys.

Simple AC Generator (Alternator)

A coil rotated in a magnetic field. As the coil turns, the magnetic flux through it changes, inducing an emf. Slip rings (continuous rings) allow the current to be taken out without reversing direction, producing alternating current.

Fleming’s right‑hand rule (for generators):
- Thumb: motion
- Index finger: field
- Middle finger: induced current

Factors affecting output:
- Faster rotation → higher voltage.
- Stronger magnets → higher voltage.
- More turns on coil → higher voltage.
- Larger coil area → higher voltage.

Applications: hydroelectric power (Nkula Falls), bicycles dynamo, car alternators.

Malawi Example: Nkula Falls hydroelectric plant uses water turbines to rotate coils in magnetic fields, generating AC electricity for the national grid. Small bicycle dynamos power lights.`,
    summary: 'DC motor: coil in magnetic field, commutator reverses current → continuous rotation. AC generator: coil rotates, induces AC. Fleming’s rules determine direction.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Hydroelectric at Nkula', description: 'Falling water turns turbines; AC generated.' },
      { title: 'Bicycle Dynamo', description: 'Wheel rotation generates AC for lights.' }
    ],
    practiceQuestions: [
      { question: 'What is the function of the commutator in a DC motor?', answer: 'Reverses current every half‑turn to keep rotation direction.', hint: 'Split ring.' },
      { question: 'What type of current is produced by a simple generator with slip rings?', answer: 'Alternating current (AC)', hint: 'No commutation.' }
    ]
  },
  // Digital electronics (logic gates)
  {
    subject: 'Physics',
    form: 'Form 4',
    topic: 'Digital Electronics',
    lessonNumber: 1,
    lessonTitle: 'Basic Logic Gates (AND, OR, NOT)',
    lessonId: 'physics-f4-logic-gates-1',
    order: 13,
    learningObjectives: [
      'Draw the symbols and truth tables for AND, OR and NOT gates',
      'Combine gates to make simple circuits'
    ],
    introduction: 'Computers and phones use digital electronics – circuits that work with two states: 1 (on, high voltage) and 0 (off, low voltage). Logic gates are the building blocks. Today we learn the three basic gates: AND, OR and NOT.',
    keyPoints: [
      'AND gate: output is 1 only if both inputs are 1.',
      'OR gate: output is 1 if at least one input is 1.',
      'NOT gate (inverter): output is opposite of input (1→0, 0→1).',
      'Truth tables list all input combinations and output.',
      'Gates can be combined to form circuits that add numbers (half‑adder) or store data (flip‑flop).'
    ],
    detailedContent: `Logic Gates

Digital signals are binary: 1 (high voltage, usually 5V) and 0 (low voltage, 0V). Logic gates perform basic logic operations.

AND Gate
Symbol: D‑shape.
Truth table:
A B │ Q
0 0 │ 0
0 1 │ 0
1 0 │ 0
1 1 │ 1

OR Gate
Symbol: curved shape.
Truth table:
A B │ Q
0 0 │ 0
0 1 │ 1
1 0 │ 1
1 1 │ 1

NOT Gate (Inverter)
Symbol: triangle with circle.
Truth table:
A │ Q
0 │ 1
1 │ 0

Combining Gates

Example: (A AND B) OR C – first compute AND of A and B, then OR with C.

Applications:
- Security systems (AND gate: both key and code correct → access).
- Alarm systems (OR gate: either door or window open → alarm).
- Computers: thousands of gates form processors and memory.

Malawi Example: Solar phone chargers sometimes use a simple circuit with a transistor acting as a NOT gate to prevent overcharging.`,
    summary: 'AND: output 1 only if both inputs 1. OR: output 1 if any input 1. NOT: inverts. Truth tables define behaviour. Gates combine to form digital circuits.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'AND Gate in Security', description: 'Both card and PIN needed for entry.' },
      { title: 'OR Gate in Alarm', description: 'Any sensor activated triggers alarm.' }
    ],
    practiceQuestions: [
      { question: 'What is the output of an AND gate when A=1 and B=0?', answer: '0', hint: 'Both must be 1.' },
      { question: 'Draw the truth table for a NOT gate.', answer: '0→1, 1→0', hint: 'Inverter.' }
    ]
  },


  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Locomotion and Support',
    lessonNumber: 1,
    lessonTitle: 'The Human Skeleton and Bone Structure',
    lessonId: 'biology-f4-locomotion-1',
    order: 100,
    learningObjectives: [
      'Identify the main bones of the human skeleton (skull, spine, ribcage, limbs)',
      'Describe the structure of a long bone (diaphysis, epiphysis, marrow)'
    ],
    introduction: 'Your skeleton supports your body, protects organs, and enables movement. Today we learn the names of the main bones and the structure of a long bone.',
    keyPoints: [
      'Functions: support, protection (skull protects brain, ribcage protects heart/lungs), movement (with muscles), mineral storage (calcium, phosphorus), blood cell production (bone marrow).',
      'Major bones: cranium, clavicle, scapula, sternum, ribs, humerus, radius, ulna, pelvis, femur, tibia, fibula, patella, tarsals, metatarsals, phalanges.',
      'Long bone structure: diaphysis (shaft – compact bone), epiphyses (ends – spongy bone), articular cartilage, medullary cavity (yellow marrow), red marrow in spongy bone.'
    ],
    detailedContent: `Functions of the Skeleton

- Support: Framework holds the body upright.
- Protection: Skull protects brain; ribcage protects heart and lungs.
- Movement: Muscles attach to bones; contraction pulls bones.
- Mineral storage: Calcium and phosphorus stored; released when needed.
- Blood cell production: Red bone marrow in flat bones and ends of long bones produces red cells, white cells, platelets.

Major Bones

Head: Cranium (skull), mandible (jaw)
Trunk: Sternum (breastbone), ribs (12 pairs), vertebrae (spine)
Shoulder: Clavicle (collarbone), scapula (shoulder blade)
Arm: Humerus (upper arm), radius and ulna (forearm), carpals (wrist), metacarpals, phalanges (fingers)
Pelvis: Hip bones (ilium, ischium, pubis)
Leg: Femur (thigh – longest bone), tibia (shin), fibula, patella (kneecap), tarsals (ankle), metatarsals, phalanges (toes)

Structure of a Long Bone (e.g., femur)

- Periosteum: Outer tough membrane with blood vessels.
- Compact bone (cortex): Dense, hard layer under periosteum.
- Spongy bone (cancellous): Porous, at ends (epiphyses). Contains red bone marrow.
- Medullary cavity: Central cavity in diaphysis (shaft). Contains yellow bone marrow (fatty tissue).
- Articular cartilage: Smooth cartilage at ends, reduces friction.

Malawi Example: The femur (thigh bone) is the longest and strongest bone, important for walking and running.`,
    summary: 'Skeleton supports, protects, moves, stores minerals, produces blood cells. Long bones have compact and spongy bone, marrow. Main bones: skull, spine, ribs, limbs.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Femur Length', description: 'The thigh bone is longest – supports walking.' },
      { title: 'Bone Marrow', description: 'Red marrow produces blood cells; found in hip bones and ends of long bones.' }
    ],
    practiceQuestions: [
      { question: 'What are the functions of the skeleton?', answer: 'Support, protection, movement, mineral storage, blood cell production', hint: 'Remember Five M’s? Not exactly, but list key roles.' },
      { question: 'What is the medullary cavity filled with?', answer: 'Yellow bone marrow (fat)', hint: 'In the shaft.' }
    ]
  },
  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Locomotion and Support',
    lessonNumber: 2,
    lessonTitle: 'Joints, Antagonistic Muscles, and Injuries',
    lessonId: 'biology-f4-locomotion-2',
    order: 101,
    learningObjectives: [
      'Distinguish between types of joints (fixed, slightly movable, synovial)',
      'Explain how antagonistic muscles work (e.g., biceps and triceps) and describe common injuries (fractures, dislocations, sprains)'
    ],
    introduction: 'Bones meet at joints. Muscles pull on bones to create movement. Today we learn about different joints, how muscles work in pairs, and what to do when bones or joints are injured.',
    keyPoints: [
      'Fixed joints (sutures in skull): no movement.',
      'Slightly movable (vertebrae with discs).',
      'Freely movable (synovial) – hinge (elbow, knee), ball‑and‑socket (shoulder, hip), pivot (neck), gliding (wrist).',
      'Antagonistic muscles: biceps and triceps – biceps contracts to bend elbow; triceps contracts to straighten.',
      'Injuries: fracture (broken bone) – splint, ice; dislocation (bone out of joint) – do not relocate; sprain (ligament tear) – RICE (rest, ice, compression, elevation).'
    ],
    detailedContent: `Joints

1. Fixed (immovable): e.g., skull sutures. No movement.
2. Slightly movable: e.g., vertebrae with cartilage discs allow slight movement.
3. Freely movable (synovial): Most joints. Have synovial fluid for lubrication.
   - Hinge (elbow, knee): moves one direction (flex/extend).
   - Ball‑and‑socket (shoulder, hip): wide range of motion.
   - Pivot (between atlas and axis vertebrae, radius‑ulna): rotation.
   - Gliding (wrist, ankle): sliding.

Antagonistic Muscles

Muscles can only pull (contract), not push. To move a joint in two directions, two muscles work opposite each other (antagonists).

Example: Bending (flexing) the elbow:
- Biceps (front) contracts, elbow bends.
- Triceps (back) relaxes.

Straightening (extending) the elbow:
- Triceps contracts, elbow straightens.
- Biceps relaxes.

Injuries and First Aid

- Fracture: Broken bone. Types: simple (closed, skin intact), compound (bone sticks out), greenstick (in children – bends and cracks). First aid: keep still, support limb, splint, apply ice, seek medical help.
- Dislocation: Bone forced out of joint. First aid: do not try to relocate; support, ice, transport to clinic.
- Sprain: Ligament stretched or torn (often ankle). First aid: RICE – Rest, Ice, Compression, Elevation.

Malawi Example: Children playing football sometimes get ankle sprains. Villagers use cold water from the well to reduce swelling (RICE – ice substitute). Health workers teach basic fracture immobilisation using sticks and cloth.`,
    summary: 'Joints: fixed, slightly movable, freely movable (hinge, ball‑and‑socket, pivot, gliding). Antagonistic muscles (biceps/triceps). Fractures, dislocations, sprains – basic first aid.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Ankle Sprain in Football', description: 'RICE method using cold water from well.' },
      { title: 'Fracture Splint', description: 'Sticks and cloth immobilise a broken leg.' }
    ],
    practiceQuestions: [
      { question: 'What type of joint is the shoulder?', answer: 'Ball‑and‑socket joint', hint: 'Allows rotation in many directions.' },
      { question: 'What should you NOT do for a dislocation?', answer: 'Do not try to relocate the bone yourself.', hint: 'You could cause more damage.' }
    ]
  },

  // Endocrine system
  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Endocrine System',
    lessonNumber: 1,
    lessonTitle: 'Glands and Hormones',
    lessonId: 'biology-f4-endocrine-1',
    order: 102,
    learningObjectives: [
      'Identify the major endocrine glands (pituitary, thyroid, adrenal, pancreas, ovaries, testes)',
      'Explain the functions of insulin, glucagon, adrenaline, thyroxine, and sex hormones'
    ],
    introduction: 'Hormones are chemical messengers that control many body functions – growth, metabolism, reproduction, stress response. Today we learn about the endocrine glands and the hormones they produce.',
    keyPoints: [
      'Pituitary: master gland – controls other glands; produces growth hormone (GH), ADH, FSH, LH.',
      'Thyroid: produces thyroxine – controls metabolic rate. Iodine needed.',
      'Adrenal: produces adrenaline – fight or flight (increases heart rate, blood pressure, blood sugar).',
      'Pancreas: produces insulin (lowers blood sugar) and glucagon (raises blood sugar).',
      'Ovaries (female): oestrogen and progesterone – regulate menstrual cycle, pregnancy.',
      'Testes (male): testosterone – sperm production, male secondary characteristics.'
    ],
    detailedContent: `Endocrine Glands and Hormones

Endocrine glands secrete hormones directly into the blood (ductless). Hormones are chemical messengers that travel to target organs.

Pituitary Gland (master gland)
- Growth hormone (GH): stimulates growth of bones and tissues.
- Antidiuretic hormone (ADH): increases water reabsorption in kidneys.
- FSH and LH: control reproductive cycles.

Thyroid Gland
- Thyroxine: controls metabolic rate. Deficiency in children causes cretinism; in adults, myxoedema (sluggishness). Goitre: iodine deficiency leads to enlarged thyroid.

Adrenal Glands
- Adrenaline (epinephrine): prepares body for stress (fight or flight) – increases heart rate, blood pressure, blood sugar, dilates pupils.

Pancreas (Islets of Langerhans)
- Insulin: lowers blood glucose by promoting uptake into cells and conversion to glycogen in liver.
- Glucagon: raises blood glucose by breaking down glycogen to glucose.

Ovaries (female)
- Oestrogen: development of female secondary characteristics, menstrual cycle.
- Progesterone: prepares uterus for pregnancy, maintains pregnancy.

Testes (male)
- Testosterone: development of male secondary characteristics, sperm production.

Comparison with nervous system: endocrine responses are slower but longer‑lasting.

Malawi Example: Goitre was common in some parts of Malawi due to iodine deficiency. Iodised salt has reduced its prevalence.`,
    summary: 'Pituitary (master), thyroid (metabolism), adrenal (stress), pancreas (blood sugar), ovaries/testes (reproduction). Insulin lowers blood sugar; glucagon raises it.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Goitre Prevention', description: 'Iodised salt prevents thyroid enlargement.' },
      { title: 'Diabetes in Adults', description: 'Lack of insulin leads to high blood sugar.' }
    ],
    practiceQuestions: [
      { question: 'Which gland produces adrenaline?', answer: 'Adrenal glands', hint: 'On top of kidneys.' },
      { question: 'What is the effect of insulin on blood glucose?', answer: 'Lowers blood glucose', hint: 'Moves glucose into cells.' }
    ]
  },

  // Cancer
  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Cancer',
    lessonNumber: 1,
    lessonTitle: 'Causes, Types, and Prevention of Cancer',
    lessonId: 'biology-f4-cancer-1',
    order: 103,
    learningObjectives: [
      'Define cancer and list factors that increase the risk',
      'Describe prevention, early detection, and treatment options'
    ],
    introduction: 'Cancer is a disease of uncontrolled cell division. It can affect any organ. Today we learn what causes cancer, how to recognise it early, and how to reduce risk.',
    keyPoints: [
      'Cancer: abnormal cells grow uncontrollably, invade nearby tissues, may spread (metastasis).',
      'Risk factors: smoking (lung, throat), alcohol, UV radiation (skin), HPV (cervical), poor diet, obesity, genetic predisposition.',
      'Common cancers in Malawi: cervical, breast, prostate, liver, Kaposi’s sarcoma (associated with HIV).',
      'Prevention: avoid tobacco, limit alcohol, HPV vaccine, sun protection, healthy diet, regular screening (pap smear, breast exam).',
      'Treatment: surgery, radiotherapy, chemotherapy, immunotherapy, palliative care.'
    ],
    detailedContent: `What is Cancer?

Normal cells divide in a controlled way. Cancer cells lose this control, divide rapidly and form a mass (tumour). Tumours can be benign (non‑cancerous, does not spread) or malignant (cancerous, invades other tissues). Malignant cells may spread through blood or lymph – metastasis.

Risk Factors

- Tobacco use (smoking, chewing): causes lung, mouth, throat, oesophagus cancer.
- Alcohol: increases risk of liver, breast, oesophagus cancer.
- UV radiation: skin cancer (use sunscreen, avoid midday sun).
- Human papillomavirus (HPV): causes cervical cancer; vaccine available.
- Poor diet (low fruits/vegetables, high processed meat) and obesity.
- Genetics: some cancers run in families (e.g., breast cancer BRCA gene).

Common Cancers in Malawi

- Cervical cancer: leading cause of cancer death in women. Preventable by HPV vaccine and screening (VIA, pap smear).
- Breast cancer: women; self‑examination and mammography.
- Prostate cancer: men; common in older age.
- Kaposi’s sarcoma: often in HIV‑positive individuals.
- Liver cancer: associated with hepatitis B (vaccine available).

Early Detection and Prevention

- Vaccination: HPV (cervical), hepatitis B (liver).
- Screening: pap smear (cervical), breast exam, prostate‑specific antigen (PSA) test.
- Lifestyle: no smoking, limit alcohol, healthy diet, regular exercise.
- Sun protection: hats, long sleeves, sunscreen.

Treatment Options

- Surgery: remove tumour.
- Radiotherapy: high‑energy rays kill cancer cells.
- Chemotherapy: drugs kill fast‑dividing cells (side effects: hair loss, nausea).
- Immunotherapy: helps immune system fight cancer.
- Palliative care: relief of symptoms when cure not possible.

Malawi Example: Cervical cancer screening is available at many health centres (VIA and cryotherapy). HPV vaccine is given to girls aged 9‑14.`,
    summary: 'Cancer is uncontrolled cell growth. Risk factors: smoking, UV, HPV, genetics. Prevention: vaccination, screening, healthy lifestyle. Treatment: surgery, chemo, radiotherapy.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'HPV Vaccine', description: 'Given to girls to prevent cervical cancer.' },
      { title: 'Pap Smear Campaigns', description: 'Early detection saves lives.' }
    ],
    practiceQuestions: [
      { question: 'Name two risk factors for cancer.', answer: 'Smoking and UV radiation (or any valid)', hint: 'Lifestyle and environmental.' },
      { question: 'What is metastasis?', answer: 'Spread of cancer cells from original site to other parts of the body.', hint: 'Secondary tumours.' }
    ]
  },

  // Organ transplants
  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Organ Transplants',
    lessonNumber: 1,
    lessonTitle: 'Examples and Considerations for Organ Transplants',
    lessonId: 'biology-f4-transplants-1',
    order: 104,
    learningObjectives: [
      'List examples of organ transplants (kidney, liver, heart, cornea, skin)',
      'Explain factors to consider before transplant (blood type, tissue matching, immunosuppression)'
    ],
    introduction: 'When an organ fails, a transplant can save a life. Kidneys, livers, hearts, corneas and skin can be transplanted. Today we learn how transplants work and the challenges involved.',
    keyPoints: [
      'Kidney transplant: most common – from living donor or deceased donor.',
      'Liver, heart, lung, pancreas, cornea, skin grafts.',
      'Blood type must be compatible (ABO system).',
      'Tissue matching (HLA) reduces rejection risk.',
      'Immunosuppressant drugs (e.g., cyclosporin) needed lifelong to prevent rejection.',
      'Ethical issues: organ shortage, living donor risks, consent, transplantation tourism.'
    ],
    detailedContent: `Examples of Organ Transplants

- Kidney: most successful and common. Living donor (related) or cadaveric. Patients with end‑stage renal disease.
- Liver: from deceased donor or living donor (partial liver regenerates in donor and recipient).
- Heart: for severe heart failure; from brain‑dead donor.
- Cornea: from cadavers; restores sight in corneal blindness.
- Skin grafts: for severe burns; from patient’s own skin (autograft) or cadaver (allograft).

Factors to Consider Before Transplant

1. Blood group compatibility: same ABO system (A to A, O to O, etc.). Incompatible leads to hyperacute rejection.

2. Tissue matching (Human Leukocyte Antigens – HLA): better match → less rejection. Siblings are often best matches.

3. Cross‑match test: patient’s serum mixed with donor cells; must be negative (no pre‑formed antibodies).

4. Medical fitness: recipient must be free from active infection and severe heart/lung disease.

5. Psychosocial: ability to adhere to lifelong immunosuppressants, follow‑up visits.

6. Ethical and legal: voluntary consent, no coercion for living donors, fair allocation of cadaveric organs.

Rejection and Immunosuppression

- Rejection: immune system attacks the transplanted organ as foreign.
- Immunosuppressive drugs (cyclosporin, tacrolimus, prednisolone) suppress T‑cell activity. Side effects: infections, kidney damage, diabetes.

Malawi: Few transplant centres; most patients travel abroad (India, South Africa) for kidney transplant. Dialysis is more common.`,
    summary: 'Transplanted organs: kidney, liver, heart, cornea, skin. Need blood group and tissue matching, immunosuppression to stop rejection. Ethical issues include organ shortage.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Corneal Transplant', description: 'Restores sight; from eye donors.' },
      { title: 'Dialysis in Blantyre', description: 'QECH offers dialysis; transplants rare.' }
    ],
    practiceQuestions: [
      { question: 'Why is tissue matching important in transplantation?', answer: 'To reduce the risk of rejection.', hint: 'HLA compatibility.' },
      { question: 'What is the main challenge after a successful transplant?', answer: 'Lifelong immunosuppression to prevent rejection, increases infection risk.', hint: 'Balancing rejection and immunity.' }
    ]
  },

  // Blood groups and transfusion
  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Blood Groups and Transfusion',
    lessonNumber: 1,
    lessonTitle: 'ABO and Rhesus Blood Systems',
    lessonId: 'biology-f4-blood-groups-1',
    order: 105,
    learningObjectives: [
      'Describe the ABO blood system (A, B, AB, O) and Rhesus factor',
      'Explain compatibility for blood transfusion'
    ],
    introduction: 'Not all blood is the same. Blood type is determined by antigens on red blood cells. Giving the wrong blood can be fatal. Today we learn the ABO and Rhesus systems and who can donate to whom.',
    keyPoints: [
      'ABO system: antigens A and B on red cells; antibodies in plasma against foreign antigens.',
      'Type A: A antigen, anti‑B antibodies. Can receive from A and O.',
      'Type B: B antigen, anti‑A antibodies. Can receive from B and O.',
      'Type AB: both A and B antigens, no antibodies – universal recipient.',
      'Type O: no antigens, both anti‑A and anti‑B – universal donor (red cells).',
      'Rhesus factor: Rh+ (antigen present), Rh‑ (absent). Rh+ can receive from Rh+ or Rh‑; Rh‑ should receive Rh‑ only (to avoid sensitisation).'
    ],
    detailedContent: `ABO Blood System

Blood type is determined by the presence or absence of antigens (A and B) on red blood cells. Plasma contains antibodies against the antigens not present.

- Type A: A antigens on RBCs; anti‑B antibodies in plasma. Can donate to A and AB. Can receive from A and O.
- Type B: B antigens; anti‑A antibodies. Donates to B and AB. Receives from B and O.
- Type AB: both A and B antigens; no antibodies. Universal recipient (can receive from A, B, AB, O). Can donate only to AB.
- Type O: no A or B antigens; both anti‑A and anti‑B antibodies. Universal donor (red cells can be given to any ABO type). Can receive only from O.

Rhesus Factor

Another antigen called Rh factor (D antigen). If present on RBCs – Rh positive (Rh+); if absent – Rh negative (Rh‑).

- Rh+ individuals can receive Rh+ or Rh‑ blood (body does not naturally have anti‑Rh antibodies).
- Rh‑ individuals should receive Rh‑ blood only. If given Rh+, they produce anti‑Rh antibodies (sensitisation).

Clinical importance:
- In pregnancy: if mother is Rh‑ and father is Rh+, baby may be Rh+. At delivery, baby’s blood can enter mother, causing her to produce anti‑Rh antibodies. Next pregnancy with Rh+ baby can lead to haemolytic disease of the newborn (HDN). Prevented by anti‑D injection.
- Transfusion: Always cross‑match before transfusion.

Malawi Example: Blood donors are screened for blood group and Rh factor. The Malawi Blood Transfusion Service (MBTS) ensures safe supply.`,
    summary: 'ABO: A, B, AB, O. O is universal donor, AB universal recipient. Rh+ or Rh‑ matters for transfusion and pregnancy. Compatibility prevents harmful reactions.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'MBTS Blood Donation', description: 'Donors are typed; group O Rh‑ is universal donor.' },
      { title: 'Anti‑D Injection', description: 'Given to Rh‑ mothers to prevent haemolytic disease.' }
    ],
    practiceQuestions: [
      { question: 'Which blood type is the universal donor?', answer: 'O negative (O‑)', hint: 'No A, B, or Rh antigens.' },
      { question: 'Why is AB type called universal recipient?', answer: 'Has no antibodies against A, B, or Rh (if AB+).', hint: 'Can receive from any ABO type.' }
    ]
  },

  // Infectious diseases (TB, malaria, typhoid)
  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Infectious Diseases',
    lessonNumber: 1,
    lessonTitle: 'Tuberculosis (TB) – Causes, Transmission, Prevention',
    lessonId: 'biology-f4-tb-1',
    order: 106,
    learningObjectives: [
      'Identify the causative agent and mode of transmission of TB',
      'Describe the symptoms, prevention, and treatment (DOTS)'
    ],
    introduction: 'Tuberculosis (TB) is a bacterial disease that mainly affects the lungs. It is a major health problem in Malawi. Today we learn how TB spreads, its symptoms, and how to prevent and treat it.',
    keyPoints: [
      'Caused by: Mycobacterium tuberculosis (bacterium).',
      'Transmission: airborne droplets (coughing, sneezing).',
      'Symptoms: persistent cough (≥2 weeks), fever, night sweats, weight loss, coughing blood.',
      'Prevention: BCG vaccine (given at birth), ventilation, covering mouth when coughing, early diagnosis, treatment.',
      'Treatment: DOTS (Directly Observed Therapy, Short‑course) – combination of antibiotics (isoniazid, rifampicin, ethambutol, pyrazinamide) for 6‑8 months.'
    ],
    detailedContent: `What is Tuberculosis?

TB is an infectious disease caused by the bacterium Mycobacterium tuberculosis. It primarily affects the lungs (pulmonary TB) but can also affect other organs (extrapulmonary TB).

Transmission

When an infected person coughs, sneezes, or speaks, tiny droplets containing bacteria are released. Another person breathes them in and becomes infected. Not everyone infected becomes sick; many have latent TB (no symptoms, not contagious).

Symptoms

- Persistent cough lasting more than 2 weeks (sometimes with blood).
- Fever and night sweats.
- Unexplained weight loss.
- Fatigue and loss of appetite.
- Chest pain, difficulty breathing.

Prevention

- BCG vaccine: given at birth or soon after; protects against severe forms in children.
- Good ventilation: reduces concentration of bacteria in air.
- Cover mouth and nose when coughing.
- Early diagnosis and treatment: reduces spread.
- Screening of contacts.
- HIV control (HIV increases risk of developing active TB).

Treatment – DOTS

Directly Observed Therapy, Short‑course: a health worker or trained volunteer watches the patient swallow each dose. This ensures adherence and prevents drug resistance.

Standard regimen:
- 2 months of four drugs: isoniazid, rifampicin, ethambutol, pyrazinamide.
- Then 4‑7 months of two drugs: isoniazid and rifampicin.
Total 6‑8 months.

Failure to complete treatment leads to MDR‑TB (multidrug‑resistant TB), which is harder to treat.

Malawi Example: TB is a leading cause of death among people living with HIV. National TB Control Programme provides free DOTS. Health facilities have sputum microscopy machines.`,
    summary: 'TB is bacterial, airborne. Symptoms: chronic cough, fever, weight loss. Prevent with BCG and good hygiene. Treat with six‑month DOTS regimen.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'BCG Vaccine', description: 'Given to newborns to prevent severe TB.' },
      { title: 'DOTS in Clinics', description: 'Patients take drugs under supervision to ensure cure.' }
    ],
    practiceQuestions: [
      { question: 'What is the causative agent of TB?', answer: 'Mycobacterium tuberculosis', hint: 'Bacterium.' },
      { question: 'Why is DOTS important?', answer: 'Prevents drug resistance and ensures full treatment.', hint: 'Adherence.' }
    ]
  },
  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Infectious Diseases',
    lessonNumber: 2,
    lessonTitle: 'Malaria – Causes, Transmission, Prevention and Control',
    lessonId: 'biology-f4-malaria-1',
    order: 107,
    learningObjectives: [
      'Describe the causative agent, vector, and life cycle of malaria',
      'Explain prevention (ITNs, IRS) and treatment (ACTs)'
    ],
    introduction: 'Malaria is a leading cause of sickness and death in Malawi, especially in children under five. It is transmitted by mosquitoes. Today we learn how malaria spreads and how to prevent it.',
    keyPoints: [
      'Causative agent: Plasmodium parasite (four species, most common Plasmodium falciparum).',
      'Vector: female Anopheles mosquito.',
      'Life cycle: mosquito bites infected person → picks up parasites → bites another person → parasites travel to liver → multiply → infect red blood cells → cycle.',
      'Symptoms: fever, chills, headache, vomiting, anaemia, convulsions (severe).',
      'Prevention: insecticide‑treated nets (ITNs), indoor residual spraying (IRS), chemoprophylaxis for travellers, environmental management (remove standing water).',
      'Treatment: artemisinin‑based combination therapy (ACTs).'
    ],
    detailedContent: `What is Malaria?

Malaria is a parasitic disease caused by protozoa of the genus Plasmodium. The most dangerous species in Malawi is Plasmodium falciparum.

Transmission

The parasite is transmitted by the bite of an infected female Anopheles mosquito. The mosquito breeds in stagnant water (puddles, ponds, hoof prints, rice fields). It bites mainly at night.

Life Cycle (simplified)

1. Infected mosquito bites human → injects sporozoites.
2. Sporozoites travel to liver → multiply → release merozoites.
3. Merozoites infect red blood cells → multiply → rupture releasing more merozoites (causing fever) and some become gametocytes.
4. Another mosquito bites infected person → picks up gametocytes → sexual reproduction in mosquito → sporozoites form in salivary glands → cycle continues.

Symptoms

- Fever (often cyclical every 48 hours for P. falciparum is irregular), chills, sweating.
- Headache, muscle pain, fatigue.
- Nausea, vomiting.
- Anaemia (destruction of red blood cells).
- Severe malaria: cerebral malaria (convulsions, coma), respiratory distress, organ failure.

Prevention and Control

- Insecticide‑treated nets (ITNs): sleeping under an ITN reduces contact with mosquitoes. Re‑treating nets is important.
- Indoor residual spraying (IRS): spraying insecticide on walls of houses kills mosquitoes that rest there.
- Environmental management: drain or fill stagnant water, clear bushes.
- Intermittent preventive treatment in pregnancy (IPTp) and for infants.
- Chemoprophylaxis for travellers.
- Education on symptoms and seeking early treatment.

Treatment

Artemisinin‑based combination therapy (ACTs) – e.g., artemether‑lumefantrine (Coartem). This rapidly kills parasites and reduces resistance. For severe malaria, injectable artesunate followed by oral ACT.

Malawi Example: The government distributes free ITNs through mass campaigns. Health centres provide ACTs free of charge. Malaria cases have decreased but remain high.`,
    summary: 'Malaria: Plasmodium parasite, Anopheles mosquito. Prevent with ITNs, IRS, remove stagnant water. Treat with ACTs. Early treatment saves lives.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Free ITNs', description: 'Mass distribution campaigns in Malawi.' },
      { title: 'Coartem', description: 'ACT used in all health facilities.' }
    ],
    practiceQuestions: [
      { question: 'Which mosquito transmits malaria?', answer: 'Female Anopheles mosquito', hint: 'Breeds in clean water, bites at night.' },
      { question: 'What is the first‑line treatment for uncomplicated malaria in Malawi?', answer: 'Artemisinin‑based combination therapy (ACT) – Coartem.', hint: 'Artemether‑lumefantrine.' }
    ]
  },
  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Infectious Diseases',
    lessonNumber: 3,
    lessonTitle: 'Typhoid Fever – Causes, Transmission, Prevention',
    lessonId: 'biology-f4-typhoid-1',
    order: 108,
    learningObjectives: [
      'Explain the cause and mode of transmission of typhoid fever',
      'Describe the symptoms, prevention, and treatment'
    ],
    introduction: 'Typhoid fever is a bacterial infection spread through contaminated food and water. It causes prolonged fever and gut symptoms. Today we learn how to recognise and prevent it.',
    keyPoints: [
      'Causative agent: Salmonella typhi (bacterium).',
      'Transmission: faecal‑oral route – contaminated water, food (especially raw vegetables, milk), or hands.',
      'Symptoms: high fever that rises stepwise, headache, abdominal pain, constipation or diarrhoea, rose spots on chest, slow heart rate.',
      'Prevention: safe drinking water (boil or chlorinate), proper sanitation (latrines), handwashing with soap, food hygiene, typhoid vaccine.',
      'Treatment: antibiotics (ciprofloxacin, azithromycin, ceftriaxone). Resistance is a growing problem.'
    ],
    detailedContent: `What is Typhoid Fever?

Typhoid fever is a systemic infection caused by the bacterium Salmonella typhi, which is only found in humans.

Transmission

- Faecal‑oral route: ingesting water or food contaminated with faeces of an infected person or a chronic carrier.
- Common sources: contaminated water, raw vegetables washed with contaminated water, milk, shellfish, street food.
- Also: direct hand‑to‑mouth after using toilet.

Symptoms (usually develop 1‑3 weeks after exposure)

- Prolonged fever (often stepwise increase over days, then sustained high fever).
- Headache, malaise.
- Abdominal pain, either constipation or diarrhoea (pea‑soup appearance in some).
- Rose spots: faint pink rash on chest/abdomen.
- Relative bradycardia (slow heart rate despite high fever).

Complications: intestinal bleeding, perforation (requires surgery).

Prevention

- Safe water: boil or chlorinate drinking water.
- Sanitation: use latrines, avoid open defecation.
- Handwashing with soap after toilet and before eating.
- Food hygiene: cook food thoroughly, wash raw vegetables with safe water.
- Typhoid vaccines: injectable (Vi polysaccharide) or oral (Ty21a) for travellers or high‑risk areas.

Treatment

- Antibiotics: ciprofloxacin or azithromycin (depending on resistance patterns). Severe cases may require injectable ceftriaxone.
- Hydration (oral rehydration or IV if dehydrated).
- Identify and treat chronic carriers (they shed bacteria in stool for >1 year).

Malawi Example: Drinking untreated borehole or river water can cause typhoid outbreaks. Health messages emphasise boiling water and using chlorine.`,
    summary: 'Typhoid (Salmonella typhi) via contaminated water/food. Symptoms: prolonged fever, abdominal pain. Prevent: safe water, sanitation, handwashing, vaccine. Treat with antibiotics.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Chlorination of Boreholes', description: 'Adding chlorine tablets to water kills bacteria.' },
      { title: 'Typhoid Vaccine', description: 'Available for high‑risk groups.' }
    ],
    practiceQuestions: [
      { question: 'How is typhoid transmitted?', answer: 'Faecal‑oral via contaminated water or food.', hint: 'Poor sanitation.' },
      { question: 'What is a common complication of typhoid?', answer: 'Intestinal perforation or bleeding', hint: 'Can be fatal.' }
    ]
  },

  // Evolution – natural selection and speciation
  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Evolution',
    lessonNumber: 1,
    lessonTitle: 'Natural Selection and Speciation',
    lessonId: 'biology-f4-evolution-1',
    order: 109,
    learningObjectives: [
      'Explain natural selection and give examples (peppered moth, antibiotic resistance)',
      'Describe how speciation occurs (geographic isolation, reproductive isolation)'
    ],
    introduction: 'How do species change over time? How do new species arise? The theory of evolution by natural selection explains these patterns. Today we learn about natural selection and speciation.',
    keyPoints: [
      'Natural selection: individuals with advantageous traits survive and reproduce more; over generations, these traits become more common.',
      'Examples: peppered moth in industrial England (dark moths survived better on polluted trees); antibiotic resistance in bacteria.', 
      'Speciation: formation of new species. Requires isolation and genetic divergence.',
      'Geographic isolation: physical barrier (river, mountain) separates populations → different selection pressures → over time they become different species.',
      'Reproductive isolation: when separated populations can no longer interbreed, they are separate species.'
    ],
    detailedContent: `Natural Selection

Charles Darwin proposed natural selection as a mechanism of evolution. It requires:
- Variation: individuals in a population differ.
- Inheritance: traits are passed to offspring.
- Differential survival and reproduction: individuals with traits better suited to the environment are more likely to survive and reproduce.
- Over generations, beneficial traits become more common.

Examples

1. Peppered moth (Biston betularia): Before industrial revolution, most moths were light, camouflaged on lichen‑covered trees. After soot blackened trees, dark moths survived better because they were less visible to birds. The dark form became more common. Later, pollution controls caused light form to increase again.

2. Antibiotic resistance: When bacteria are exposed to an antibiotic, most die, but some naturally resistant individuals survive. They multiply, and the population becomes resistant. This is evolution in action.

Speciation

Speciation is the formation of new species.

Geographic isolation: A population is split by a physical barrier (mountain, river, ocean). The two groups can no longer interbreed. They experience different environments and selection pressures. Over many generations, they evolve different traits. Even if the barrier is removed later, they may no longer be able to mate (reproductive isolation). Thus, they become separate species.

Example: Finches on the Galápagos Islands evolved different beak shapes because of isolation on different islands.

Reproductive isolation: Mechanisms include:
- Pre‑zygotic: habitat isolation, behaviour differences, mechanical incompatibility.
- Post‑zygotic: hybrid inviability or sterility (e.g., mules from horse and donkey).

Malawi Example: Cichlid fish in Lake Malawi are a famous example of rapid speciation. Geographic isolation (rocky vs sandy habitats) and sexual selection led to hundreds of species.`,
    summary: 'Natural selection: advantageous traits increase over generations. Examples: peppered moth, antibiotic resistance. Speciation: populations isolated → diverge → become separate species.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Lake Malawi Cichlids', description: 'Many species evolved from a common ancestor due to isolation.' },
      { title: 'Malaria Drug Resistance', description: 'Plasmodium has evolved resistance to chloroquine.' }
    ],
    practiceQuestions: [
      { question: 'What is required for natural selection to occur?', answer: 'Variation, inheritance, differential survival and reproduction.', hint: 'Three conditions.' },
      { question: 'How does geographic isolation lead to speciation?', answer: 'Separated populations evolve independently and may become unable to interbreed.', hint: 'Barrier prevents gene flow.' }
    ]
  },

  // Biotechnology (genetic engineering, insulin production)
  {
    subject: 'Biology',
    form: 'Form 4',
    topic: 'Biotechnology',
    lessonNumber: 1,
    lessonTitle: 'Genetic Engineering and Insulin Production',
    lessonId: 'biology-f4-biotech-1',
    order: 110,
    learningObjectives: [
      'Describe the process of genetic engineering (recombinant DNA)',
      'Explain how insulin is produced using genetically engineered bacteria'
    ],
    introduction: 'Genetic engineering allows scientists to transfer genes from one organism to another. This technology produces human insulin, vaccines, and pest‑resistant crops. Today we learn how it works.',
    keyPoints: [
      'Genetic engineering: cutting DNA from one organism and inserting it into another using restriction enzymes and DNA ligase.',
      'Vector: often a plasmid (small circular DNA in bacteria).',
      'Recombinant DNA: combines DNA from different sources.',
      'Transformation: inserting recombinant DNA into host cells (e.g., E. coli).',
      'Insulin production: human insulin gene inserted into plasmid → E. coli produces human insulin.',
      'Benefits: large scale, avoids animal insulin (allergic reactions).',
      'Ethical concerns: safety, labelling, effect on biodiversity.'
    ],
    detailedContent: `What is Genetic Engineering?.'

Genetic engineering is the direct manipulation of an organism’s genes using biotechnology. It allows transfer of genes between unrelated species.

Key Steps (simplified)

1. Identify and isolate the desired gene (e.g., human insulin gene).
2. Use restriction enzymes to cut the gene and cut a plasmid (vector) at same sites.
3. DNA ligase joins the gene into the plasmid → recombinant DNA.
4. Insert recombinant plasmid into host cells (e.g., Escherichia coli bacteria) – transformation.
5. Grow the bacteria in large fermenters; they produce the human protein (insulin).
6. Extract and purify the product.

Human Insulin Production

Before genetic engineering, insulin for diabetics came from pig or cow pancreas (slight differences, could cause allergies). Now, human insulin is produced by E. coli or yeast.

- Gene expressed: bacterial cells read the human gene and synthesise human insulin protein.
- Advantage: unlimited supply, exactly the same as human insulin, no animal suffering.

Other Applications

- Agriculture: Bt crops (insect‑resistant cotton, maize); herbicide‑resistant soybean.
- Medicine: vaccines (hepatitis B), growth hormone, blood clotting factors.
- Industry: enzymes for production.

Ethical and Safety Issues

- Safety: risk of unintended effects, gene transfer to wild relatives.
- Labelling: should genetically modified foods be labelled?
- Moral concerns: moving genes across species – some feel unnatural.
- Environmental: possible impact on biodiversity.

Malawi: No commercial GM crops grown, but research on genetically modified cassava for virus resistance has been conducted.`,
    summary: 'Genetic engineering transfers genes between organisms. Insulin produced by bacteria with human insulin gene. Benefits: medicine, agriculture. Concerns: safety, ethics.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Human Insulin in Malawi', description: 'Used in diabetes treatment – imported, but understanding helps.' },
      { title: 'Bt Cotton Research', description: 'Trials in Africa but not yet in Malawi.' }
    ],
    practiceQuestions: [
      { question: 'What is a plasmid?', answer: 'A small circular DNA molecule in bacteria used as a vector.', hint: 'Carries foreign DNA.' },
      { question: 'Why is human insulin better than pig insulin?', answer: 'Identical to human, reduces allergic reactions.', hint: 'Species difference.' }
    ]
  },

 

  // Isomerism (structural isomers)
  {
    subject: 'Chemistry',
    form: 'Form 4',
    topic: 'Isomerism',
    lessonNumber: 1,
    lessonTitle: 'Structural Isomers in Organic Compounds',
    lessonId: 'chemistry-f4-isomerism-1',
    order: 111,
    learningObjectives: [
      'Define isomers and draw structural isomers for alkanes (C4H10, C5H12)',
      'Describe the effect of branching on physical properties (boiling point)'
    ],
    introduction: 'Isomers are compounds with the same molecular formula but different structures. This leads to different properties. Today we learn about structural isomerism in alkanes, alkenes, and alkanols.',
    keyPoints: [
      'Isomers: same molecular formula, different arrangement of atoms.',
      'Structural isomerism: different connectivity (chain, position, functional group).',
      'Chain isomerism: different branching of carbon chain (e.g., butane vs methylpropane).',
      'Position isomerism: functional group at different positions (e.g., 1‑propanol vs 2‑propanol).',
      'Functional group isomerism: different functional groups (e.g., propanal vs propanone).',
      'Boiling point: increased branching lowers boiling point (reduces surface area for intermolecular forces).'
    ],
    detailedContent: `What are Isomers?

Isomers are compounds that have the same molecular formula but different structural formulas (or different arrangements in space).

Structural isomerism (constitutional isomerism) – different connectivity.

1. Chain (skeletal) isomerism:
   - Same functional group but different branching of the carbon chain.
   - Example: Butane (C4H10) has two isomers:
        * n‑butane: CH3CH2CH2CH3 (straight chain)
        * methylpropane (isobutane): (CH3)3CH (branched)

   - Pentane (C5H12) has three isomers: n‑pentane, 2‑methylbutane, 2,2‑dimethylpropane.

2. Position isomerism:
   - Same carbon skeleton but functional group at a difference position.
   - Example: Propanol (C3H8O) has two isomers:
        * propan‑1‑ol: CH3CH2CH2OH (OH at end)
        * propan‑2‑ol: CH3CH(OH)CH3 (OH in middle)

3. Functional group isomerism:
   - Same molecular formula but different functional groups.
   - Example: C3H6O – propanal (aldehyde) and propanone (ketone).

Effect of Branching on Boiling Point

- Straight‑chain alkanes have higher boiling points than their branched isomers.
- Reason: branched molecules have smaller surface area, reducing London forces (van der Waals) between molecules.
- Example: n‑butane b.p. –0.5°C; methylpropane b.p. –12°C.

Naming isomers: use IUPAC rules (longest chain as parent, substituents numbered).

Malawi Example: Petrol (gasoline) contains a mix of isomers. Highly branched alkanes (isooctane) have higher octane rating, reduce engine knocking.`,
    summary: 'Isomers same formula different structure. Chain, position, functional group isomerism. More branching lowers boiling point.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Isooctane in Petrol', description: 'Highly branched, reduces engine knock.' },
      { title: 'Propanol Isomers', description: 'One used as solvent, other as rubbing alcohol.' }
    ],
    practiceQuestions: [
      { question: 'Draw the two structural isomers of butane (C4H10).', answer: 'CH3CH2CH2CH3 and (CH3)3CH', hint: 'One straight, one branched.' },
      { question: 'Why does n‑pentane have a higher boiling point than 2,2‑dimethylpropane?', answer: 'n‑pentane has larger surface area for London forces.', hint: 'Branching reduces intermolecular attraction.' }
    ]
  },

  // Polymerisation
  {
    subject: 'Chemistry',
    form: 'Form 4',
    topic: 'Polymerisation',
    lessonNumber: 1,
    lessonTitle: 'Addition and Condensation Polymers',
    lessonId: 'chemistry-f4-polymerisation-1',
    order: 112,
    learningObjectives: [
      'Distinguish between addition and condensation polymerisation',
      'Describe the uses and properties of common polymers (polyethene, nylon, polyester, polychloroethene/PVC)'
    ],
    introduction: 'Plastics, nylon, and polythene are polymers – long chains of repeating units. Today we learn the two types of polymerisation and how the structure affects properties.',
    keyPoints: [
      'Monomers: small molecules that join to form polymers.',
      'Addition polymerisation: monomers (alkenes) join without loss of small molecule. Example: ethene → polyethene (polythene).',
      'Condensation polymerisation: monomers join with loss of small molecule (water, methanol). Examples: nylon (amide), polyesters (ester).',
      'Thermoplastics (polyethene, nylon): soften on heating, can be remoulded.',
      'Thermosets (bakelite, epoxy): cross‑linked; do not soften, harden permanently.',
      'Plastics are widely used but cause environmental pollution (non‑biodegradable).'
    ],
    detailedContent: `Addition Polymerisation

In addition polymerisation, unsaturated monomers (with C=C double bond) join together without loss of any atoms. The double bond opens and monomers add to each other.

Example: polyethene (polythene) from ethene:
n CH2=CH2 → –[CH2–CH2]n–

Conditions: high pressure (or catalyst) and temperature.

Other addition polymers:
- Polypropene (propene) – used in ropes, crates.
- Polychloroethene (PVC – from chloroethene) – pipes, insulation, window frames.
- Polytetrafluoroethene (PTFE – Teflon) – non‑stick coatings.

Condensation Polymerisation

Monomers join together with the elimination of a small molecule (usually water, sometimes methanol). Two different monomers are often used.

Example – Nylon (polyamide):
- Monomers: diamine (H2N–R–NH2) and dicarboxylic acid (HOOC–R’–COOH).
- Reaction forms amide links (–CO–NH–) and eliminates water.
- Nylon is strong, elastic, used in ropes, fabrics, toothbrush bristles.

Example – Polyester (e.g., Terylene):
- Monomers: diol (HO–R–OH) and dicarboxylic acid (HOOC–R’–COOH).
- Forms ester links (–CO–O–) and eliminates water.
- Used in clothing (polyester fabrics), plastic bottles.

Thermoplastics vs Thermosets

- Thermoplastics (polyethene, nylon, PVC, polypropene): can be melted and reshaped repeatedly. Chains are separate, held by weak intermolecular forces.
- Thermosets (bakelite, melamine, epoxy resin): once set, cannot be remelted. They have cross‑links between chains, forming a rigid network.

Environmental issues: Most plastics are not biodegradable; they accumulate in landfills and oceans. Reduce, reuse, recycle. Biodegradable plastics (e.g., PLA from corn starch) are being developed.

Malawi Example: Thin plastic bags were banned in Malawi to reduce pollution. Recycling of plastic waste is encouraged.`,
    summary: 'Addition polymers (alkenes) without by‑product. Condensation polymers with loss of water. Thermoplastics melt; thermosets do not. Plastic pollution is a major problem.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Plastic Bag Ban', description: 'Malawi banned thin plastics to reduce waste.' },
      { title: 'PVC Pipes', description: 'Used for water supply and sewerage.' }
    ],
    practiceQuestions: [
      { question: 'What is the monomer of polyethene?', answer: 'Ethene (CH2=CH2)', hint: 'Alkene.' },
      { question: 'Why are thermosets not recyclable by remelting?', answer: 'They have cross‑links that break down on heating, not reversible.', hint: 'Covalent network.' }
    ]
  },

  // Bronsted-Lowry acids and bases
  {
    subject: 'Chemistry',
    form: 'Form 4',
    topic: 'Acids and Bases',
    lessonNumber: 1,
    lessonTitle: 'Bronsted‑Lowry Theory and Conjugate Pairs',
    lessonId: 'chemistry-f4-bronsted-lowry-1',
    order: 113,
    learningObjectives: [
      'Define acids and bases according to Bronsted‑Lowry (proton donor/ acceptor)',
      'Identify conjugate acid‑base pairs in reactions'
    ],
    introduction: 'The Bronsted‑Lowry theory extends the definition of acids and bases beyond aqueous solutions. An acid is a proton (H+) donor; a base is a proton acceptor. Today we learn this powerful concept and conjugate pairs.',
    keyPoints: [
      'Bronsted‑Lowry acid: donates a proton (H+).',
      'Bronsted‑Lowry base: accepts a proton.',
      'Conjugate pair: acid and base that differ by one proton (HA / A‑).',
      'In the reverse reaction, the product acid/base is the conjugate of the reactant.',
      'Example: HCl + H2O ⇌ H3O+ + Cl‑ – HCl (acid) and Cl‑ (conjugate base); H2O (base) and H3O+ (conjugate acid).'
    ],
    detailedContent: `Bronsted‑Lowry Theory

Arrhenius defined acids as producing H+ in water, bases producing OH‑. Bronsted‑Lowry broadened: an acid is any species that donates a proton (H+); a base is any species that accepts a proton.

Proton (hydrogen ion): a bare H+ nucleus.

Example: In water, HCl donates a proton to H2O.
HCl + H2O → H3O+ + Cl‑
- HCl is the acid (proton donor)
- H2O is the base (proton acceptor)

Conjugate Pairs

When an acid donates a proton, the remaining species is its conjugate base. When a base accepts a proton, the new species is its conjugate acid.

For HCl + H2O → H3O+ + Cl‑:
- Conjugate acid‑base pairs: (HCl, Cl‑) and (H2O, H3O+).

Amphoteric species: can act as either acid or base (e.g., water, HCO3‑).

Other examples:

- NH3 (base) + H2O (acid) → NH4+ (conjugate acid) + OH‑ (conjugate base)
- HCO3‑ + H+ → H2CO3 (HCO3‑ acts as base); HCO3‑ → CO32‑ + H+ (acts as acid).

Relative strength: strong acids have weak conjugate bases; weak acids have strong conjugate bases.

Equilibrium: In a reversible reaction, the equilibrium favours the side with the weaker acid and weaker base.

Malawi Example: In soil chemistry, limestone (CaCO3) neutralises acidity: CaCO3 + 2H+ → Ca2+ + CO2 + H2O. H+ is the acid (proton donor).`,
    summary: 'Bronsted‑Lowry acid = proton donor, base = proton acceptor. Conjugate pair differs by one H+. Strong acids give weak conjugate bases.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Bicarbonate in Digestion', description: 'HCO3‑ neutralises stomach acid (proton acceptor).' }
    ],
    practiceQuestions: [
      { question: 'In the reaction NH3 + H2O ⇌ NH4+ + OH‑, what is the conjugate base of NH4+?', answer: 'NH3', hint: 'NH4+ minus H+ = NH3.' },
      { question: 'Is water an acid or a base?', answer: 'Both – it is amphoteric.', hint: 'Can donate or accept H+.' }
    ]
  },
  {
    subject: 'Chemistry',
    form: 'Form 4',
    topic: 'Acids and Bases',
    lessonNumber: 2,
    lessonTitle: 'Strength vs Concentration and pH Control',
    lessonId: 'chemistry-f4-strength-concentration-1',
    order: 114,
    learningObjectives: [
      'Distinguish between strength (degree of ionisation) and concentration',
      'Explain ways of controlling pH in different environments (soil, stomach, water)'
    ],
    introduction: 'A concentrated acid is not necessarily a strong acid – strength is about ionisation, concentration is about amount. Today we clear up this confusion and learn how pH is controlled in real life.',
    keyPoints: [
      'Strength: measure of how completely an acid or base dissociates in water. Strong (HCl, H2SO4) fully dissociate; weak (ethanoic acid) partially.',
      'Concentration: amount of acid or base per volume (molarity). Can be high or low regardless of strength.',
      'pH is affected by both strength and concentration. A very dilute strong acid may have pH near 7.',
      'pH control: buffering solutions resist pH change.',
      'Examples: soil (lime raises pH), stomach (antacids neutralise), swimming pools (adjust with acids/bases), water treatment.'
    ],
    detailedContent: `Strength vs Concentration – Key Difference

- Strength: equilibrium position of dissociation. Strong acids (HCl, HNO3, H2SO4) dissociate completely in water. Weak acids (ethanoic, citric) dissociate only partially. Strength is an intrinsic property of the acid.
- Concentration: the number of moles of acid per litre of solution. Can be concentrated (high molarity) or dilute (low molarity) – does not change the strength.

Example:
- 0.1 M HCl (strong, fully dissociated) has pH = 1.
- 0.1 M CH3COOH (weak, partially dissociated) has pH ≈ 2.9.
- But 1 M CH3COOH (concentrated weak acid) has lower pH than 0.001 M HCl (dilute strong acid). So concentration also affects pH.

Concentration vs Strength Table

| | Strong Acid (e.g., HCl) | Weak Acid (e.g., CH3COOH) |
|---|---|---|
| Low concentration (0.001 M) | pH ≈ 3 | pH ≈ 4‑5 |
| High concentration (1 M) | pH ≈ 0 | pH ≈ 2.4 |

pH Control in Different Environments

1. Soil pH:
   - Plants need optimal pH (6‑7). Acidic soils: add lime (calcium carbonate/hydroxide). Alkaline soils: add sulphur or organic matter.

2. Stomach pH:
   - Stomach acid is ~pH 1.5 (HCl). Indigestion (excess acid) treated with antacids (Mg(OH)2, CaCO3, Al(OH)3) that neutralise H+.

3. Swimming pools:
   - Chlorine works best at pH 7.2‑7.6. Use sodium carbonate (raise pH) or sodium bisulphate (lower pH).

4. Water treatment:
   - Addition of lime (Ca(OH)2) to raise pH of acidic water; addition of CO2 or H2SO4 to lower pH of alkaline water.

Buffers: solutions that resist pH change – usually a weak acid and its conjugate base (e.g., CH3COOH/CH3COONa). Important in blood (bicarbonate buffer).

Malawi Example: Fish farming requires pH 6.5‑9 for tilapia. Farmers test water and add lime if too acidic.`,
    summary: 'Strength = degree of ionisation; concentration = amount. A dilute strong acid can have near‑neutral pH. Buffers control pH in soil, stomach, pools, water.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Lime for Acidic Soil', description: 'Farmers add agricultural lime to raise pH.' },
      { title: 'Antacids', description: 'Magnesium hydroxide tablets neutralise stomach acid.' }
    ],
    practiceQuestions: [
      { question: 'Why is 0.01 M HCl (strong acid) more acidic than 0.1 M CH3COOH (weak acid)?', answer: 'HCl fully dissociates, producing more H+ than the weak acid despite lower concentration.', hint: 'Degree of ionisation.' },
      { question: 'How do you raise the pH of acidic soil?', answer: 'Add lime (calcium carbonate/hydroxide).', hint: 'Neutralisation.' }
    ]
  },

  // Water – hardness and treatment
  {
    subject: 'Chemistry',
    form: 'Form 4',
    topic: 'Water',
    lessonNumber: 1,
    lessonTitle: 'Hardness of Water and Softening Methods',
    lessonId: 'chemistry-f4-water-hardness-1',
    order: 115,
    learningObjectives: [
      'Define hard and soft water, and distinguish between temporary and permanent hardness',
      'Describe methods to remove hardness (boiling, adding washing soda, ion exchange)'
    ],
    introduction: 'In some areas, water does not lather well with soap – that is HARD WATER. It contains dissolved minerals, mostly calcium and magnesium. Today we learn what causes hardness and how to remove it.',
    keyPoints: [
      'Hard water: does not lather with soap, forms scum (insoluble calcium or magnesium salts). Contains Ca2+ and Mg2+ ions.',
      'Temporary hardness: caused by calcium hydrogencarbonate (Ca(HCO3)2). Removed by boiling: Ca(HCO3)2 → CaCO3(s) + CO2 + H2O (scale forms).',
      'Permanent hardness: caused by calcium sulphate (CaSO4) or magnesium sulphate (MgSO4). Not removed by boiling.',
      'Removing permanent hardness: adding washing soda (Na2CO3) precipitates Ca2+ as CaCO3; ion exchange (resin swaps Ca2+ for Na+).',
      'Advantages of hard water: provides calcium for bones, tastes better. Disadvantages: wastes soap, forms scale in pipes and kettles.'
    ],
    detailedContent: `What is Hard Water?

Hard water contains dissolved calcium and magnesium ions (Ca2+, Mg2+). It does not readily form lather with soap; instead it forms a grey scum (calcium stearate).

Temporary Hardness

Caused by calcium hydrogencarbonate, Ca(HCO3)2. It forms when rainwater (slightly acidic due to CO2) passes over limestone (CaCO3): CaCO3 + CO2 + H2O → Ca(HCO3)2.

On boiling, the reaction reverses: Ca(HCO3)2 → CaCO3(s) + CO2 + H2O. The CaCO3 precipitates as scale (limescale). The water becomes soft because Ca2+ removed.

Permanent Hardness

Caused by calcium sulphate (CaSO4) and magnesium sulphate (MgSO4). Boiling does not remove them.

Removing Hardness

1. Boiling: only removes temporary hardness (scale formed).
2. Adding washing soda (sodium carbonate, Na2CO3): precipitates Ca2+ as CaCO3 and Mg2+ as MgCO3. Ca2+(aq) + CO32‑(aq) → CaCO3(s).
3. Ion exchange: water passes through a column containing resin charged with Na+ ions. Ca2+ and Mg2+ replace Na+ on resin. Water becomes soft (Na+ does not cause hardness). Resin regenerated with brine (NaCl).
4. Distillation: removes all ions, gives pure water (expensive).

Advantages and Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Provides calcium (needed for bones) | Wastes soap (more soap needed) |
| Tastes better (mineral water) | Leaves scale in kettles, pipes (reduces efficiency) |
| May reduce heart disease risk | Scale in hot water tanks |

Malawi Example: In Lilongwe, water from boreholes often has moderate hardness. Kettles develop white scale. Boiling removes temporary hardness but not permanent. Some use washing soda to soften laundry water.`,
    summary: 'Hard water contains Ca2+/Mg2+, does not lather. Temporary hardness (hydrogencarbonate) removed by boiling. Permanent hardness (sulphate) removed by washing soda or ion exchange.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Kettle Scale in Lilongwe', description: 'White deposits inside kettles due to temporary hardness.' },
      { title: 'Laundry with Hard Water', description: 'More soap needed; addition of soda ash helps.' }
    ],
    practiceQuestions: [
      { question: 'What causes temporary hardness?', answer: 'Calcium hydrogencarbonate (Ca(HCO3)2)', hint: 'Forms when rainwater passes over limestone.' },
      { question: 'How does washing soda remove permanent hardness?', answer: 'Carbonate ions (CO32‑) precipitate Ca2+ and Mg2+ as insoluble carbonates.', hint: 'Na2CO3 + CaSO4 → CaCO3(s) + Na2SO4' }
    ]
  },
  {
    subject: 'Chemistry',
    form: 'Form 4',
    topic: 'Water',
    lessonNumber: 2,
    lessonTitle: 'Water Treatment and Purification',
    lessonId: 'chemistry-f4-water-treatment-1',
    order: 116,
    learningObjectives: [
      'Describe the stages of water treatment for domestic supply (sedimentation, filtration, chlorination)',
      'Explain the importance of water purification'
    ],
    introduction: 'Water from rivers and lakes contains dirt, bacteria, and other impurities. Water treatment plants make it safe to drink. Today we learn the steps that produce clean tap water.',
    keyPoints: [
      'Screening: remove large debris (sticks, leaves).',
      'Sedimentation: particles settle in tanks (sometimes with coagulant alum).',
      'Filtration: water passes through sand and gravel filters to remove remaining particles.',
      'Chlorination: chlorine gas or sodium hypochlorite kills bacteria and viruses. Chlorine residual protects water in pipes.',
      'Fluoridation (optional): added to prevent tooth decay.',
      'pH adjustment: lime added to neutralise acidity.'
    ],
    detailedContent: `Water Treatment Process

Municipal water treatment plants (e.g., Lilongwe Water Board, Blantyre Water Board) follow these stages:

1. Screening: Water passes through screens to remove large objects (fish, sticks, leaves).

2. Coagulation and Flocculation: Alum (aluminium sulphate) is added. It causes fine particles to clump together (floc). This helps them settle.

3. Sedimentation: Water flows slowly through large settling tanks. Floc and heavier particles settle to the bottom as sludge.

4. Filtration: Water passes through layers of sand, gravel, and sometimes activated charcoal. This removes remaining tiny particles and some microorganisms.

5. Disinfection (Chlorination): Chlorine (gas or sodium hypochlorite) is added. It kills bacteria, viruses, and other pathogens. A small amount of chlorine remains (residual) to protect water as it travels through pipes.

6. Fluoridation (optional): Adding fluoride to reduce tooth decay. Not all plants do it.

7. pH adjustment: Lime (calcium hydroxide) may be added to make water neutral.

Storage and Distribution: Clean water is stored in reservoirs and pumped through pipes to homes and businesses.

Alternative purification methods for households:
- Boiling (kills pathogens but does not remove chemicals).
- Chlorine tablets (affordable, but taste).
- Household filters (ceramic, sand, charcoal).
- Solar disinfection (SODIS): clear plastic bottles exposed to sunlight for 6 hours.

Malawi example: Lilongwe Water Board treats water from Lilongwe River at Mvera treatment plant. In rural areas, families often boil water or use chlorine tablets for safety.`,
    summary: 'Water treatment steps: screening, coagulation, sedimentation, filtration, chlorination, pH adjustment. Chlorine kills germs. Household methods: boiling, chlorination, SODIS.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Mvera Treatment Plant', description: 'Treats water for Lilongwe residents.' },
      { title: 'Water Guard', description: 'Brand of chlorine solution for household treatment.' }
    ],
    practiceQuestions: [
      { question: 'Why is chlorine added to drinking water?', answer: 'To kill bacteria and viruses, providing disinfection.', hint: 'Prevents water‑borne diseases.' },
      { question: 'What is the purpose of sedimentation in water treatment?', answer: 'Allows large particles and floc to settle, removing suspended solids.', hint: 'Gravity.' }
    ]
  },

  // Greenhouse gases and ozone layer
  {
    subject: 'Chemistry',
    form: 'Form 4',
    topic: 'Environmental Chemistry',
    lessonNumber: 1,
    lessonTitle: 'Greenhouse Gases and Ozone Layer',
    lessonId: 'chemistry-f4-ozone-greenhouse-1',
    order: 117,
    learningObjectives: [
      'Explain the greenhouse effect and list major greenhouse gases (CO2, CH4, N2O, CFCs)',
      'Describe ozone layer depletion, its causes, effects, and solutions'
    ],
    introduction: 'The Earth is warming because of greenhouse gases. At the same time, the ozone layer that protects us from UV rays is thinning. Today we learn these two important global environmental issues.',
    keyPoints: [
      'Greenhouse effect: natural process where certain gases trap heat, keeping Earth warm. Enhanced effect (global warming) due to human emissions.',
      'Major greenhouse gases: CO2 (burning fossil fuels, deforestation), CH4 (livestock, rice, landfills), N2O (fertilisers), CFCs (refrigerants, aerosols).',
      'Ozone layer: in stratosphere, absorbs harmful UV‑B radiation.',
      'Ozone depletion: caused by chlorine from CFCs. Montreal Protocol (1987) phased out CFCs.',
      'Effects of ozone depletion: increased skin cancer, cataracts, harm to plants and marine life.',
      'Solutions: phase out CFCs (already successful), reduce greenhouse gas emissions, renewable energy.'
    ],
    detailedContent: `Greenhouse Effect

The Earth’s atmosphere contains greenhouse gases (GHGs) that trap heat. Without them, Earth would be about 33°C colder. Human activities have increased GHGs, causing global warming.

Major GHGs and sources:
- Carbon dioxide (CO2): burning fossil fuels (coal, oil, natural gas), deforestation, cement production.
- Methane (CH4): livestock (enteric fermentation), rice paddies, landfills, natural gas leaks.
- Nitrous oxide (N2O): nitrogen fertilisers, industrial processes.
- Fluorinated gases (CFCs, HFCs): refrigerants, aerosols (now regulated).

Consequences: rising sea levels, extreme weather, droughts, floods, loss of biodiversity.

Ozone Layer Depletion

Ozone (O3) in the stratosphere (10‑50 km altitude) absorbs 97‑99% of harmful UV‑B radiation.

- Cause: Chlorofluorocarbons (CFCs) release chlorine atoms when broken down by UV light. Chlorine catalytically destroys ozone. A single Cl atom can destroy thousands of ozone molecules.
- Ozone hole: seasonal thinning over Antarctica (and smaller over Arctic).

Effects:
- Increases skin cancer (melanoma), cataracts.
- Suppresses immune system.
- Damages phytoplankton (base of marine food chain).
- Reduces crop yields.

Solutions

Montreal Protocol (1987) – global agreement to phase out CFCs, halons, other ozone‑depleting substances. It has been successful: ozone layer is slowly recovering. Replacements: HFCs (not ozone‑depleting but strong GHGs) are now being phased down under Kigali Amendment.

To mitigate climate change:
- Reduce fossil fuel use → renewable energy (solar, wind, hydro).
- Energy efficiency.
- Reforestation (trees absorb CO2).
- Reduce methane from livestock and landfills.

Malawi Example: Malawi phased out CFCs in refrigerators and aerosol cans. Solar energy is promoted to reduce fossil fuel use.`,
    summary: 'Greenhouse gases (CO2, CH4, N2O) cause global warming. Ozone layer depleted by CFCs. Montreal Protocol successful. UV radiation harmful.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'CFC Ban', description: 'Malawi no longer imports CFC refrigerators.' },
      { title: 'Solar Energy', description: 'Reduces CO2 emissions and deforestation.' }
    ],
    practiceQuestions: [
      { question: 'What is the main source of methane from agriculture?', answer: 'Livestock (enteric fermentation) and rice paddies', hint: 'Cows burp methane.' },
      { question: 'How do CFCs destroy ozone?', answer: 'Chlorine atoms released catalytically break down O3 molecules.', hint: 'Ozone to oxygen.' }
    ]
  },

  // Waste management
  {
    subject: 'Chemistry',
    form: 'Form 4',
    topic: 'Waste Management',
    lessonNumber: 1,
    lessonTitle: 'Types, Treatment, and Minimisation of Waste',
    lessonId: 'chemistry-f4-waste-management-1',
    order: 118,
    learningObjectives: [
      'Classify wastes (domestic, industrial, agricultural, medical) and their sources',
      'Describe methods of waste treatment and disposal (landfill, incineration, recycling, composting)'
    ],
    introduction: 'Waste pollution is a growing problem. Proper waste management protects health and the environment. Today we learn about different wastes and how to treat, reuse, and recycle them.',
    keyPoints: [
      'Waste types: domestic (household), industrial (factories), agricultural (crop residues, manure), medical (hospitals), electronic (e‑waste).',
      'Treatment and disposal: landfill (sanitary), incineration (burning), composting (organic), recycling (paper, plastic, metal, glass), anaerobic digestion (biogas).',
      'Waste minimisation: reduce (use less), reuse (use again), recycle (convert to new product).',
      'Landfills: lined pits with leachate collection, methane capture. Open dumps are illegal in many areas.',
      'Recycling saves energy, reduces resource depletion, cuts pollution.'
    ],
    detailedContent: `Classification of Wastes

1. Domestic (municipal) waste: food scraps, paper, plastics, glass, metals, textiles. Large volume, mix of biodegradable and non‑biodegradable.
2. Industrial waste: chemical sludge, metals, solvents, ash. Often hazardous.
3. Agricultural waste: crop residues, manure, pesticides containers, plastic mulch.
4. Medical waste: syringes, bandages, expired medicines, sharps (infectious and hazardous).
5. E‑waste: discarded electronics (computers, phones, batteries) – contain toxic heavy metals (lead, mercury, cadmium).

Methods of Waste Treatment and Disposal

- Sanitary landfill: waste layered and compacted, covered daily with soil. Leachate collected and treated. Methane gas captured for energy. Drawback: takes land, potential groundwater contamination if liner fails.
- Incineration: burning at high temperatures. Reduces volume by 90% but produces air pollution (dioxins, heavy metals). Modern incinerators have scrubbing filters.
- Composting: organic waste (food, yard waste) decomposed by microbes to produce humus. Reduces methane emissions, produces fertiliser.
- Recycling: reprocessing materials into new products. Examples: paper, glass, metals (aluminium, steel), plastics (PET, HDPE). Saves energy and reduces mining.
- Anaerobic digestion: organic waste in absence of oxygen produces biogas (methane) for energy, and digestate as fertiliser.
- Open dumping (not acceptable): causes pollution, disease vectors, groundwater contamination.

Waste Minimisation – 3 R’s

- Reduce: buy less, avoid packaging, choose reusable items.
- Reuse: use cloth bags, refill bottles, repair items.
- Recycle: separate waste, support recycling programs.

Malawi example: Plastic bags of less than 60 microns were banned. Communities are encouraged to sort waste, compost organics, and recycle plastics and glass.`,
    summary: 'Waste types: domestic, industrial, agricultural, medical. Treatment: landfill, incineration, composting, recycling. Minimise: reduce, reuse, recycle.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Plastic Bag Ban', description: 'Malawi banned thin plastics to reduce waste.' },
      { title: 'Community Composting', description: 'Groups turn organic waste into manure for gardens.' }
    ],
    practiceQuestions: [
      { question: 'What is the difference between a sanitary landfill and open dumping?', answer: 'Landfill has liner, leachate collection, methane capture; open dump has none.', hint: 'Health and environment.' },
      { question: 'Why is recycling important?', answer: 'Saves energy, reduces resource depletion, cuts pollution.', hint: 'Conserves materials.' }
    ]
  },

  

  // Moments of forces (full lesson)
  {
    subject: 'Physics',
    form: 'Form 4',
    topic: 'Moments of Forces',
    lessonNumber: 1,
    lessonTitle: 'Principle of Moments and Centre of Mass',
    lessonId: 'physics-f4-moments-1',
    order: 119,
    learningObjectives: [
      'State the principle of moments for a body in equilibrium',
      'Solve problems using the principle of moments and determine centre of mass of a lamina'
    ],
    introduction: 'Why does a heavy person need to sit closer to the centre of a see‑saw? Why is a spanner easier to use with a longer handle? The answer is MOMENT – the turning effect of a force. Today we learn the principle of moments and centre of mass.',
    keyPoints: [
      'Moment (torque) = Force × perpendicular distance from pivot (Nm).',
      'Principle of moments: for a body in equilibrium, sum of clockwise moments = sum of anticlockwise moments.',
      'Centre of mass: the point where the entire weight of an object can be considered to act.',
      'For a uniform rod, centre of mass is at the midpoint.',
      'For a lamina (flat shape), suspend from different points; intersection of vertical lines gives centre of mass.'
    ],
    detailedContent: `Moment of a Force

The moment (or torque) of a force is a measure of its turning effect.

Moment = Force × perpendicular distance from the pivot (or fulcrum)

Unit: Newton‑metre (Nm).

Example: A spanner 0.3 m long applies a force of 100 N at the end (perpendicular). Moment = 100 × 0.3 = 30 Nm. A longer spanner (0.5 m) with same force gives 50 Nm – easier.

Principle of Moments

When a body is in equilibrium (balanced and not rotating), the total clockwise moment equals the total anticlockwise moment.

Example: On a seesaw, a 40 kg child sits 2 m from the pivot. A 50 kg child sits on the other side. How far from pivot must the 50 kg child sit to balance?
Weight of 40 kg = 40×10 = 400 N (assuming g≈10 N/kg). Clockwise moment = 400 × 2 = 800 Nm.
Anticlockwise moment = (50×10) × d = 500 × d.
Equilibrium: 500d = 800 → d = 1.6 m.

Centre of Mass

For a uniform metre rule, the centre of mass is at 50 cm mark (the middle). For an irregular shape, you can find centre of mass by suspending from two different points and drawing vertical lines – intersection is the centre.

The centre of mass may not be within the object (e.g., for a ring, centre at empty centre).

Applications: loading a wheelbarrow (load near wheel reduces effort), balancing, stability.

Malawi Example: When loading a cart with maize bags, placing heavier bags closer to the wheel axle reduces the moment needed to lift the handles. A wheelbarrow: load placed near the wheel (short load arm) makes it easier to lift because effort arm (handles to wheel) is long.`,
    summary: 'Moment = F × d. Principle of moments: clockwise = anticlockwise for equilibrium. Centre of mass is the balance point.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Wheelbarrow Loading', description: 'Heavier load near wheel reduces lifting effort.' },
      { title: 'See‑Saw in Playground', description: 'Heavier child must sit closer to pivot to balance.' }
    ],
    practiceQuestions: [
      { question: 'A force of 20 N is applied perpendicular to a spanner at a distance of 0.25 m from the bolt. Calculate the moment.', answer: '5 Nm', hint: '20 × 0.25 = 5' },
      { question: 'A 300 N weight is placed 0.5 m from a pivot. Where must a 200 N weight be placed to balance?', answer: '0.75 m', hint: 'Clockwise = 300×0.5=150; anticlockwise: 200×d=150 → d=0.75' }
    ]
  },

  // Circular motion
  {
    subject: 'Physics',
    form: 'Form 4',
    topic: 'Uniform Circular Motion',
    lessonNumber: 1,
    lessonTitle: 'Centripetal Force and Angular Velocity',
    lessonId: 'physics-f4-circular-motion-1',
    order: 120,
    learningObjectives: [
      'Define angular displacement and angular velocity',
      'Explain centripetal force and its role in circular motion'
    ],
    introduction: 'When an object moves in a circle, it constantly changes direction – so it accelerates. The force causing this acceleration is called centripetal force. Today we learn the principles of circular motion.',
    keyPoints: [
      'Angular displacement (θ): angle turned (radians or degrees).',
      'Angular velocity (ω): rate of change of angular displacement (ω = θ/t). Unit: rad/s.',
      'Relationships: linear (tangential) speed v = ωr.',
      'Centripetal acceleration: a = v²/r = ω²r.',
      'Centripetal force: F = mv²/r = mω²r – directed toward centre.',
      'Centripetal force is not a new force; it is provided by tension, friction, gravity, or normal force.'
    ],
    detailedContent: `Circular motion terminology

- Angular displacement (θ): the angle through which an object rotates. Measured in radians (2π rad = 360°).
- Angular velocity (ω): ω = θ/t (rad/s). For constant speed, ω = 2πf, where f is frequency (revolutions per second).

Relationship between linear and angular velocity: v = ω r, where r is radius.

Centripetal Acceleration

An object in circular motion is constantly changing direction, therefore it has acceleration even if speed is constant. This acceleration is directed toward the centre.

Centripetal acceleration: a = v²/r = ω²r.

Centripetal Force

The net force that causes centripetal acceleration is called centripetal force. It is also directed toward the centre.

F = m a = mv²/r = mω²r.

Examples of centripetal force sources:
- A car turning on a flat road: friction between tyres and road.
- Moon orbiting Earth: gravity.
- A stone whirled on a string: tension in the string.
- A satellite: gravity.

If centripetal force disappears, the object moves off in a straight line (tangent).

Centrifugal force: a fictitious outward force perceived in a rotating frame (not real in inertial frame).

Applications: centrifuges, washing machine spin cycle, amusement park rides, planetary orbits.

Malawi Example: When a minibus turns a corner, passengers lean outward. This is because their bodies want to continue straight (inertia), but the seat provides centripetal force.`,
    summary: 'Angular velocity ω = θ/t; v = ωr. Centripetal acceleration a = v²/r, centripetal force F = mv²/r directed toward centre.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Minibus Corner', description: 'Friction provides centripetal force to turn.' },
      { title: 'Washing Machine', description: 'Spin cycle uses centripetal force to remove water.' }
    ],
    practiceQuestions: [
      { question: 'What is the centripetal force for a car turning on a road?', answer: 'Friction between tyres and road', hint: 'Without friction, car skids.' },
      { question: 'A stone of mass 0.2 kg is whirled in a circle of radius 0.5 m at a speed of 4 m/s. Calculate centripetal force.', answer: '6.4 N', hint: 'F = mv²/r = 0.2×16/0.5 = 3.2/0.5 = 6.4 N' }
    ]
  },

  // Electromagnetic waves
  {
    subject: 'Physics',
    form: 'Form 4',
    topic: 'Electromagnetic Waves',
    lessonNumber: 1,
    lessonTitle: 'The Electromagnetic Spectrum',
    lessonId: 'physics-f4-ems-1',
    order: 121,
    learningObjectives: [
      'Describe the electromagnetic spectrum and the order of regions (radio to gamma)',
      'State the properties and applications of different EM waves'
    ],
    introduction: 'Radio waves, microwave, infrared, visible light, ultraviolet, X‑rays, gamma rays – all are electromagnetic waves. They travel at the speed of light and differ only in wavelength and frequency. Today we learn the spectrum and its uses.',
    keyPoints: [
      'EM waves: transverse waves, travel at 3×10⁸ m/s in vacuum, do not need a medium.',
      'Order from longest wavelength (lowest frequency): radio, microwave, infrared, visible, ultraviolet, X‑ray, gamma.',
      'Properties: reflection, refraction, diffraction, interference, polarisation.',
      'Applications: radio/TV (communication), microwave (cooking, radar), infrared (remote controls, thermal imaging), visible (sight), UV (sterilisation, tanning), X‑ray (medical imaging), gamma (cancer treatment, sterilisation).'
    ],
    detailedContent: `The Electromagnetic Spectrum

All electromagnetic waves travel at the speed of light (c = 3.0 × 10⁸ m/s) in a vacuum. c = fλ.

| Region | Wavelength | Frequency | Applications |
|--------|------------|-----------|---------------|
| Radio | > 0.1 m | < 3×10⁹ Hz | Broadcasting, communication, radar |
| Microwave | 1 mm – 0.1 m | 3×10⁹ – 3×10¹¹ Hz | Microwave ovens, satellite communication, radar |
| Infrared (IR) | 700 nm – 1 mm | 3×10¹¹ – 4.3×10¹⁴ Hz | Remote controls, thermal imaging, night vision |
| Visible | 400‑700 nm | 4.3×10¹⁴ – 7.5×10¹⁴ Hz | Sight, photography |
| Ultraviolet (UV) | 10‑400 nm | 7.5×10¹⁴ – 3×10¹⁶ Hz | Sterilisation, fluorescent lamps, vitamin D production (but too much causes skin cancer) |
| X‑rays | 0.01‑10 nm | 3×10¹⁶ – 3×10¹⁹ Hz | Medical imaging, airport security, crystallography |
| Gamma rays | < 0.01 nm | > 3×10¹⁹ Hz | Radiotherapy, sterilisation, nuclear medicine |

Key properties

- All EM waves can travel through vacuum.
- They are transverse waves.
- They can be reflected, refracted, diffracted, and undergo interference.

Harmful effects: UV (sunburn, skin cancer), X‑rays and gamma (ionising – DNA damage, cancer risk). Proper shielding and limited exposure essential.

Malawi Example: Radio is widely used for communication and entertainment. X‑ray machines in hospitals (e.g., Queen Elizabeth Central Hospital) are used for diagnosing broken bones. Microwave ovens are common in urban households.`,
    summary: 'EM spectrum: radio, microwave, IR, visible, UV, X‑ray, gamma. All travel at c = fλ. Each region has specific applications. Ionising radiation (X‑ray, gamma) can be harmful.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Radio in Malawi', description: 'AM and FM broadcasts use radio waves.' },
      { title: 'X‑ray in Hospital', description: 'Used to diagnose fractures and chest infections.' }
    ],
    practiceQuestions: [
      { question: 'Which EM wave has the longest wavelength?', answer: 'Radio waves', hint: 'Lowest frequency.' },
      { question: 'What is the energy relationship?', answer: 'Higher frequency, higher energy (E = hf).', hint: 'Planck’s equation.' }
    ]
  },

  // Lenses (complete)
  {
    subject: 'Physics',
    form: 'Form 4',
    topic: 'Lenses',
    lessonNumber: 1,
    lessonTitle: 'Converging and Diverging Lenses',
    lessonId: 'physics-f4-lenses-1',
    order: 122,
    learningObjectives: [
      'Identify converging (convex) and diverging (concave) lenses and their principal focus, focal length',
      'Draw ray diagrams to find image position, size, and nature for a converging lens'
    ],
    introduction: 'Lenses are used in glasses, cameras, projectors, and telescopes. They bend light to form images. Today we learn about converging and diverging lenses and how to draw ray diagrams.',
    keyPoints: [
      'Converging (convex) lens: thicker in middle, converges light to a focal point. Forms real or virtual images.',
      'Diverging (concave) lens: thinner in middle, diverges light; always forms virtual, diminished, upright images.',
      'Principal focus (F): point where parallel rays converge (or appear to diverge). Focal length (f) = distance from lens to F.',
      'Ray diagram rules (converging lens):
        1. Ray parallel to axis refracts through principal focus.
        2. Ray through optical centre passes straight.
        3. Ray through principal focus emerges parallel.',
      'Image characteristics: type (real/virtual), orientation (upright/inverted), size (magnified/diminished/same), position.'
    ],
    detailedContent: `Converging (Convex) Lens

Thicker at centre than edges. Converges parallel light to a point (principal focus, F). Focal length (f) positive.

Ray diagrams for converging lens:

1. Draw principal axis, lens, focal points (F on both sides, 2F optionally).
2. Draw object as upright arrow.

Rules:
- A ray parallel to the axis passes through F on the other side.
- A ray through the centre of the lens goes straight.
- A ray through F on object side emerges parallel.

Image formation depends on object distance (u):
- u > 2f: real, inverted, diminished (camera)
- u = 2f: real, inverted, same size
- f < u < 2f: real, inverted, magnified (projector)
- u = f: no image (parallel rays)
- u < f: virtual, upright, magnified (magnifying glass)

Diverging (Concave) Lens

Thinner at centre. Diverges parallel rays; focal point is virtual (on same side as object). Focal length negative.

Ray diagram: always forms virtual, upright, diminished image between lens and F (object side). Use same rules: ray parallel to axis appears to come from F; ray through centre goes straight.

Lens formula: 1/f = 1/u + 1/v (sign convention: for convex f positive, for concave f negative; u positive for real object; v positive for real image, negative for virtual).

Magnification: m = v/u = image height / object height (positive for upright, negative for inverted).

Malawi Example: Reading glasses for elders use convex lenses (correcting long sight). Peephole (door viewer) uses a concave lens.`,
    summary: 'Convex lens converges light, forms real or virtual images. Concave lens diverges, always virtual upright diminished. Ray diagrams determine image. Lens formula 1/f = 1/u + 1/v.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Reading Glasses', description: 'Convex lenses correct long sight.' },
      { title: 'Door Peephole', description: 'Concave lens gives wide view.' }
    ],
    practiceQuestions: [
      { question: 'What type of lens is used in a magnifying glass?', answer: 'Convex (converging) lens', hint: 'Makes object appear larger.' },
      { question: 'If an object is placed at 2F of a convex lens, where is the image?', answer: 'At 2F on the other side, real, inverted, same size.', hint: 'Symmetry.' }
    ]
  },
  {
    subject: 'Physics',
    form: 'Form 4',
    topic: 'Lenses',
    lessonNumber: 2,
    lessonTitle: 'The Human Eye and Visual Defects',
    lessonId: 'physics-f4-eye-defects-1',
    order: 123,
    learningObjectives: [
      'Describe the structure of the human eye and how it focuses light',
      'Explain short sight (myopia), long sight (hyperopia), and their correction with lenses'
    ],
    introduction: 'The human eye is like a camera. It focuses light using a convex lens (the crystalline lens). However, some people cannot see clearly at distance or near. Today we learn about eye defects and how glasses correct them.',
    keyPoints: [
      'Eye parts: cornea (refracts light), lens (adjustable focus), retina (light‑sensitive), ciliary muscles (change lens shape – accommodation).',
      'Short sight (myopia): eyeball too long or cornea too curved; image focuses in front of retina; distant objects blurry. Correct with concave (diverging) lens.',
      'Long sight (hyperopia): eyeball too short or lens too weak; image focuses behind retina; near objects blurry. Correct with convex (converging) lens.',
      'Presbyopia: age‑related loss of accommodation; needs bifocal or reading glasses.',
      'Astigmatism: irregular curvature of cornea/lens; corrected with cylindrical lens.'
    ],
    detailedContent: `The Eye as an Optical System

- Cornea: provides most of the refraction (bending).
- Lens: flexible, changes shape by ciliary muscles (accommodation) to focus on near or far objects.
- Retina: contains photoreceptors (rods and cones). Image formed is real, inverted, diminished.
- Optic nerve transmits signals to brain (brain flips image).

Accommodation:
- Distant object: ciliary muscles relax → lens less convex (thinner) → less refraction.
- Near object: ciliary muscles contract → lens more convex (thicker) → more refraction.

Defects of the Eye

1. Myopia (short sight):
   - Cause: eyeball too long, or cornea too curved.
   - Image of distant object forms in front of retina.
   - Symptom: can see near objects clearly, distant objects blurry.
   - Correction: concave (diverging) lens. Diverges light before it enters eye, so effective focus falls on retina.

2. Hyperopia (long sight):
   - Cause: eyeball too short, or lens too weak (lost elasticity).
   - Image of near object forms behind retina.
   - Symptom: can see distant objects clearly, near objects blurry.
   - Correction: convex (converging) lens. Adds convergence, bringing focus forward onto retina.

3. Presbyopia: age‑related loss of accommodation (usually after 40). Corrected with bifocal or progressive lenses (upper part for distance, lower part for near).

4. Astigmatism: irregular curvature of cornea or lens, causing distorted vision. Corrected with cylindrical lens.

Malawi Example: Many school children have undiagnosed myopia, affecting their learning. Eye screening programmes provide glasses.`,
    summary: 'Eye focuses using cornea and adjustable lens. Myopia (short sight) corrected with concave lens. Hyperopia (long sight) corrected with convex lens.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'School Myopia', description: 'Students difficulty seeing blackboard; concave lenses help.' },
      { title: 'Reading Glasses for Elders', description: 'Convex lenses correct presbyopia.' }
    ],
    practiceQuestions: [
      { question: 'Which lens corrects myopia?', answer: 'Concave (diverging) lens', hint: 'Spreads out light.' },
      { question: 'What happens to the lens when viewing a near object?', answer: 'It becomes more convex (thicker) due to ciliary muscle contraction.', hint: 'Accommodation.' }
    ]
  },

  // Radioactivity – half-life, nuclear equations, fission/fusion
  {
    subject: 'Physics',
    form: 'Form 4',
    topic: 'Radioactivity',
    lessonNumber: 1,
    lessonTitle: 'Half-life and Nuclear Decay Calculations',
    lessonId: 'physics-f4-radioactivity-1',
    order: 124,
    learningObjectives: [
      'Define half‑life and perform calculations involving half‑life',
      'Write balanced nuclear equations for alpha and beta decay'
    ],
    introduction: 'Some elements are unstable; they decay by emitting particles – radioactivity. The half‑life tells how quickly they decay. Today we learn to calculate half‑life and write nuclear equations.',
    keyPoints: [
      'Half‑life (T½): time taken for half of the radioactive nuclei in a sample to decay.',
      'After n half‑lives, remaining fraction = (1/2)^n.',
      'Alpha decay: emits α particle (²₄He). Atomic number decreases by 2, mass number by 4.',
      'Beta decay: emits β‑ particle (e⁻) when a neutron turns into a proton. Atomic number increases by 1, mass number unchanged.',
      'Gamma decay: emits γ ray (high‑energy photon). No change in atomic or mass number.'
    ],
    detailedContent: `Half‑life

Half‑life is the time it takes for half of the original radioactive atoms to decay. It is constant for each isotope.

Examples:
- Carbon‑14: T½ = 5730 years (used in radiocarbon dating).
- Iodine‑131: T½ = 8 days (used in thyroid treatment).
- Radium‑226: T½ = 1600 years.

Formula: remaining mass = initial mass × (1/2)^n, where n = number of half‑lives elapsed = time / T½.

Example: A sample has 100 g of carbon‑14. After 5730 years (one half‑life), 50 g remains. After 11,460 years (2 half‑lives), 25 g remains.

Nuclear Decay Equations

Alpha decay (emits α particle, helium nucleus):
Parent nucleus → daughter nucleus + α

Example: Uranium‑238 decays to Thorium‑234:
²³⁸U → ²³⁴Th + ⁴₂He

Beta decay (emits an electron):
A neutron converts to a proton and a beta particle (electron) is ejected.

Example: Carbon‑14 decays to Nitrogen‑14:
¹⁴C → ¹⁴N + e⁻ (where e⁻ is β‑ particle)

Gamma decay: after α or β decay, the daughter may be excited. It emits gamma photon (no change in proton or neutron number).

Activity: rate of decay (measured in becquerels, 1 Bq = 1 decay/s). Activity ∝ number of atoms present.

Malawi Example: Carbon‑14 dating is used by archaeologists to date ancient artefacts, e.g., Chongoni rock art.`,
    summary: 'Half‑life: time for half to decay. Remaining = initial × (½)^n. Alpha decay (loss of 2p+2n); beta decay (neutron → proton + e‑). Gamma: high‑energy photon.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Carbon‑14 Dating', description: 'Used to estimate age of organic materials.' },
      { title: 'Iodine‑131 Treatment', description: 'Used for hyperthyroidism.' }
    ],
    practiceQuestions: [
      { question: 'A radioactive sample has half‑life 10 years. If you start with 80 g, how much remains after 30 years?', answer: '10 g', hint: '3 half‑lives: 80→40→20→10 g.' },
      { question: 'Write the alpha decay equation for Radium‑226 (atomic number 88) decaying to Radon‑222.', answer: '²²⁶Ra → ²²²Rn + ⁴₂He', hint: 'Mass number decreases by 4, atomic by 2.' }
    ]
  },
  {
    subject: 'Physics',
    form: 'Form 4',
    topic: 'Radioactivity',
    lessonNumber: 2,
    lessonTitle: 'Nuclear Fission and Fusion, Uses and Safety of Radiation',
    lessonId: 'physics-f4-fission-fusion-1',
    order: 125,
    learningObjectives: [
      'Explain nuclear fission and chain reaction, and nuclear fusion',
      'State the uses of radioactive isotopes and safety precautions'
    ],
    introduction: 'Nuclear fission splits heavy nuclei, releasing huge energy – used in nuclear power and weapons. Nuclear fusion fuses light nuclei – powers the sun. Today we learn the differences and how radiation is used safely.',
    keyPoints: [
      'Fission: splitting of a heavy nucleus (e.g., U‑235) into smaller nuclei, releasing energy and neutrons. Controlled chain reaction in reactors; uncontrolled in bombs.',
      'Fusion: joining of light nuclei (e.g., hydrogen) into helium, releasing energy. Requires high temperature (millions K).',
      'Uses of radioisotopes: medicine (radiotherapy, tracers), agriculture (sterile insect technique, radiocarbon dating), industry (gauges, smoke detectors).',
      'Dangers: ionising radiation damages DNA → cancer, acute radiation sickness. Protection: distance, shielding (lead, concrete), time minimisation.'
    ],
    detailedContent: `Nuclear Fission

In fission, a heavy nucleus (e.g., Uranium‑235) absorbs a neutron and splits into two lighter nuclei (fission fragments), releasing 2‑3 more neutrons and a large amount of energy.

Example: ²³⁵U + n → ²³⁶U → ¹⁴¹Ba + ⁹²Kr + 3n + energy

Chain reaction: these neutrons cause further fissions. In a nuclear reactor, control rods absorb excess neutrons to maintain steady rate. In an atomic bomb, uncontrolled chain reaction releases huge energy instantly.

Nuclear Fusion

Fusion combines two light nuclei (e.g., hydrogen isotopes deuterium and tritium) to form a helium nucleus, releasing even more energy per mass than fission. Requires extremely high temperature (millions of °C) to overcome electrostatic repulsion.

Example: ²H + ³H → ⁴He + n + energy

Fusion occurs in the sun and stars. It produces no long‑lived radioactive waste, but containing the plasma is difficult. Research continues (International Thermonuclear Experimental Reactor – ITER).

Uses of Radioactive Isotopes

- Medicine: cobalt‑60 for radiotherapy (cancer), iodine‑131 for thyroid disorders, technetium‑99m for imaging.
- Agriculture: radioisotope tracers to study fertiliser uptake; sterile insect technique (irradiate male insects to control pests).
- Industry: thickness gauges, smoke detectors (americium‑241), pipeline leak detection.
- Archaeology: carbon‑14 dating.

Safety Precautions

- Distance: increase distance from source reduces exposure (inverse square law).
- Shielding: lead aprons, concrete walls.
- Time: limit time near sources.
- Personal dosimeters (film badges) for workers.
- Storage: radioactive waste stored in shielded containers; long‑lived waste buried deep underground.

Malawi Example: Hospitals use X‑rays and gamma sources for treatment (although specialised facilities limited). The Malawi Bureau of Standards ensures safe handling of industrial radiography sources.`,
    summary: 'Fission splits heavy nuclei, chain reaction. Fusion combines light nuclei, powers sun. Radioisotopes used in medicine, agriculture, industry. Protection: distance, shielding, time.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Cancer Radiotherapy', description: 'Cobalt‑60 used in radiation therapy.' },
      { title: 'Smoke Detectors', description: 'Americium‑241 detects smoke particles.' }
    ],
    practiceQuestions: [
      { question: 'What is the main advantage of nuclear fusion over fission?', answer: 'No long‑lived radioactive waste, abundant fuel (hydrogen).', hint: 'Cleaner.' },
      { question: 'Give two safety measures when handling radioactive materials.', answer: 'Use shielding (lead), increase distance, limit exposure time.', hint: 'Three ways.' }
    ]
  },

  // ====================================================================
  // AGRICULTURE – REMAINING: Farm power
  // ====================================================================
  {
    subject: 'Agriculture',
    form: 'Form 4',
    topic: 'Farm Power',
    lessonNumber: 1,
    lessonTitle: 'Sources of Power on a Farm',
    lessonId: 'agriculture-f4-farm-power-1',
    order: 126,
    learningObjectives: [
      'Identify sources of farm power (human, animal, mechanical, wind, solar, biogas)',
      'State advantages and disadvantages of each source'
    ],
    introduction: 'Farm work requires power – for ploughing, weeding, lifting, and processing. The main sources are human, animal, and mechanical. Today we learn the different power sources and their pros and cons.',
    keyPoints: [
      'Human power: manual labour – available everywhere, cheap, but slow and limited.',
      'Animal power: oxen, donkeys – moderate power, works on small farms, needs feed and care.',
      'Mechanical power: tractors, engines – very high power, fast, but expensive and requires fuel/maintenance.',
      'Wind power: windmills for water pumping – free but intermittent.',
      'Solar power: photovoltaic for electricity, solar thermal for drying – renewable, but high initial cost.',
      'Biogas: methane from animal dung – uses waste, provides fuel and fertiliser.',
      'Choice depends on farm size, capital, topography, availability of fuel/spare parts.'
    ],
    detailedContent: `Sources of Farm Power

1. Human power:
   - Advantages: always available, no fuel cost, provides employment.
   - Disadvantages: low power output, slow, fatigue, labour shortage at peak times.
   - Typical tasks: hand hoeing, planting, weeding, harvesting.

2. Animal power (oxen, donkeys, horses):
   - Advantages: moderate power, renewable (feed grown on farm), can work in wet conditions, manure produced.
   - Disadvantages: slow, needs training, veterinary care, feed, water, rest.
   - Typical tasks: ploughing, carting, harrowing, threshing.

3. Mechanical power (tractors, power tillers, stationary engines):
   - Advantages: high power and speed, can work large areas, time‑efficient.
   - Disadvantages: high capital cost, fuel and spare parts often imported, repairs require skills, soil compaction on wet soil.
   - Typical tasks: ploughing, harrowing, planting, spraying, shelling, milling.

4. Wind power:
   - Advantages: free, renewable, no fuel, low maintenance.
   - Disadvantages: intermittent, only suitable where wind is consistent, low power output for small units.
   - Typical tasks: water pumping, electricity generation (small scale).

5. Solar power:
   - Advantages: abundant in Malawi, renewable, no fuel, low running cost.
   - Disadvantages: high initial cost, battery storage needed for night use, power limited.
   - Typical tasks: lighting, water pumping, battery charging, drying crops (solar dryers).

6. Biogas:
   - Advantages: uses waste (dung, crop residues), produces methane for cooking and lighting, slurry is fertiliser.
   - Disadvantages: requires large amount of dung (at least 3‑4 cattle), initial cost for digester, needs maintenance.
   - Typical tasks: cooking, lighting.

Choosing the right power source: small farms (<1 ha) human and animal; medium farms (1‑5 ha) animal and small mechanical; large farms (>5 ha) tractors. Solar and biogas are supplementary.

Malawi Example: In rural areas, ox‑drawn mouldboard ploughs are common. Some farmers have hired tractors. Solar water pumps are used for gardens. Biogas plants are found on large dairy farms.`,
    summary: 'Farm power sources: human (cheap but slow), animal (moderate, renewable), mechanical (fast but costly), wind/solar (renewable, intermittent), biogas (waste‑to‑energy).',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Ox‑drawn Plough', description: 'Common in central Malawi, reduces labour.' },
      { title: 'Solar Water Pump', description: 'Used for irrigation in off‑grid gardens.' }
    ],
    practiceQuestions: [
      { question: 'What is the main advantage of animal power over human power?', answer: 'Higher power output and can work longer hours.', hint: 'Oxen pull heavier loads.' },
      { question: 'Why is solar power not widely used for large‑scale mechanisation?', answer: 'High initial cost and limited power output.', hint: 'Needs many panels.' }
    ]
  },

  // Agricultural technology and gender (final missing)
  {
    subject: 'Agriculture',
    form: 'Form 4',
    topic: 'Agricultural Technology and Gender',
    lessonNumber: 1,
    lessonTitle: 'Gender Biases in Agricultural Technology',
    lessonId: 'agriculture-f4-gender-tech-1',
    order: 127,
    learningObjectives: [
      'Identify gender biases in agricultural technology (access, training, design)',
      'Discuss ways of dealing with gender biases in agricultural technology'
    ],
    introduction: 'Modern farm technologies – tractors, improved seeds, irrigation – are not equally accessible to men and women. Women often face barriers. Today we learn about these biases and how to overcome them.',
    keyPoints: [
      'Gender biases: technology often designed for men (e.g., heavy tools); women have less access to credit, extension, training, land ownership.',
      'Examples: tractors driven mainly by men; women do manual weeding; improved seeds sold through farmer clubs that men control.',
      'Effects: lower productivity for women, reduced household food security, perpetuation of poverty.',
      'Solutions: gender‑sensitive design (tools appropriate for women), targeted extension services, women’s groups, access to credit, land rights.'
    ],
    detailedContent: `Gender Biases in Agricultural Technology

In many societies, agricultural activities are gender‑divided. Men typically operate machinery (tractors, ox carts), while women perform manual tasks (weeding, harvesting, processing). This division is reinforced by:

- Access to training: extension services often reach men first.
- Credit: women have less access to loans to buy equipment or improved seeds.
- Land ownership: women are less likely to own land, so they cannot use it as collateral or invest in long‑term improvements.
- Design of technology: many tools are designed for male strength and stature (e.g., heavy hoes, large‑sized planters).

Examples of bias:
- In Malawi, maize shellers are often controlled by men; women who need shelling services must pay or rely on men.
- Fertiliser subsidy vouchers are often given to the household head (usually male), even if the woman does the farming.
- Tractors and oxen are owned and operated by men; women use hand hoes.

Effects of Gender Bias

- Lower productivity on plots managed by women (estimated 20‑30% lower).
- Food insecurity: women’s income is often spent on family nutrition; less income means poorer nutrition.
- Perpetuation of poverty cycle.

Ways to Deal with Gender Biases

1. Gender‑sensitive technology design: design tools that are lighter, ergonomic, suitable for average female stature and strength (e.g., reduced weight of weeding tools, smaller handles).

2. Extension services: ensure female extension agents, schedule meetings at times convenient for women, provide separate training groups for women.

3. Access to credit: promote women‑only savings and loan groups, microfinance products, mobile banking.

4. Land rights: strengthen women’s land ownership and tenure security.

5. Women’s cooperatives: enable collective purchase of machinery (e.g., shellers, mills) that women can hire.

6. Policy: include gender‑disaggregated targets in agricultural programmes.

Malawi Example: The National Agriculture Policy recognises the need for gender mainstreaming. NGOs like NASFAM and CARE have women‑only farmer groups. Some extension materials now include pictures of women using technologies.`,
    summary: 'Gender biases: women have less access to technology, training, credit. Effects: lower productivity, food insecurity. Solutions: gender‑sensitive design, women‑only extension, credit, land rights, cooperatives.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Women Farmer Groups', description: 'NASFAM supports women’s clubs for collective marketing.' },
      { title: 'Lightweight Hoes', description: 'Ergonomic tools reduce drudgery.' }
    ],
    practiceQuestions: [
      { question: 'Why do women often have lower yields on their plots?', answer: 'Less access to improved seeds, fertiliser, extension advice, and technology.', hint: 'Resource gap.' },
      { question: 'How can cooperatives help reduce gender bias?', answer: 'Women can collectively own machinery and access markets, overcoming individual credit/ownership barriers.', hint: 'Group power.' }
    ]
  },

  



 
  {
    subject: 'Biology',
    form: 'Form 1',
    topic: 'Cells',
    lessonNumber: 1,
    lessonTitle: 'Plant and Animal Cells – Structure and Differences',
    lessonId: 'biology-f1-cells-1',
    order: 128,
    learningObjectives: [
      'Identify the parts of a plant cell and an animal cell using diagrams',
      'Distinguish between plant and animal cells (cell wall, chloroplasts, vacuole)'
    ],
    introduction: 'All living things are made of cells. Cells are the basic unit of life. Today we will learn the parts of plant and animal cells and how they differ.',
    keyPoints: [
      'Cell structures common to both: cell membrane, nucleus, cytoplasm, mitochondria, ribosomes.',
      'Plant cell only: cell wall (cellulose, rigid), chloroplasts (photosynthesis), large central vacuole (storage, support).',
      'Animal cell only: no cell wall, small or no vacuoles, no chloroplasts.',
      'Functions: nucleus (controls cell), mitochondria (energy), cell membrane (controls entry/exit), cytoplasm (site of reactions).'
    ],
    detailedContent: `Plant Cell

- Cell wall: outer rigid layer made of cellulose; provides shape and support.
- Cell membrane: thin layer inside cell wall; controls movement of substances.
- Nucleus: contains DNA, controls cell activities.
- Cytoplasm: jelly‑like substance where chemical reactions occur.
- Chloroplasts: contain chlorophyll; site of photosynthesis.
- Vacuole: large central sac filled with cell sap (water, sugars, salts); stores water and maintains turgidity.
- Mitochondria: produce energy (ATP) through respiration.

Animal Cell

- No cell wall: flexible shape.
- Cell membrane: outermost boundary.
- Nucleus: same as plant cell.
- Cytoplasm: same.
- Small vacuoles (sometimes none) – not central.
- No chloroplasts.
- Mitochondria: same.

Differences

| Feature      | Plant cell           | Animal cell 
|---------     |------------          |-------------
| Cell wall    | Yes (cellulose)      | No
| Chloroplasts | Yes (photosynthesis) | No 
| Vacuole      | Large central        | Small / absent 
| Shape        | Fixed (rectangular)  | Irregular / round 

Magnification and specimen observation: using a light microscope, students can observe onion epidermal cells (plant) and cheek cells (animal) after staining.

Malawi Example: Onion cells from an onion grown in Ntchisi – visible cell walls and nucleus. Cheek cells seen in school lab.`,
    summary: 'Plant cells have cell wall, chloroplasts, large vacuole. Animal cells lack these. Both have nucleus, cytoplasm, cell membrane, mitochondria.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Onion Epidermal Cells', description: 'See cell walls and nuclei under microscope.' },
      { title: 'Cheek Cells', description: 'Animal cells with no cell wall.' }
    ],
    practiceQuestions: [
      { question: 'Which organelle is responsible for photosynthesis?', answer: 'Chloroplast', hint: 'Green.’ },
      { question: 'What is the function of the nucleus?', answer: 'Controls cell activities and contains genetic material.', hint: 'Control centre.' }
    ]
  },
  {
    subject: 'Biology',
    form: 'Form 1',
    topic: 'Cells',
    lessonNumber: 2,
    lessonTitle: 'Levels of Organisation and Specialised Cells',
    lessonId: 'biology-f1-organisation-1',
    order: 129,
    learningObjectives: [
      'List the levels of organisation (cell → tissue → organ → system → organism)',
      'Give examples of specialised cells (red blood cell, nerve cell, root hair cell) and their adaptations'
    ],
    introduction: 'Cells work together in tissues, tissues form organs, organs make systems, systems form an organism. Today we learn this hierarchy and how cells are specialised for specific functions.',
    keyPoints: [
      'Cell → tissue → organ → system → organism.',
      'Tissue: group of similar cells performing same function (e.g., muscle tissue).',
      'Organ: group of different tissues working together (e.g., heart, stomach).',
      'System: group of organs working together (e.g., circulatory system).',
      'Specialised cells: red blood cell (no nucleus, biconcave – carries oxygen), nerve cell (long axon – transmits impulses), root hair cell (protrusions – absorbs water/minerals).'
    ],
    detailedContent: `Levels of Organisation

1. Cell: basic unit (e.g., muscle cell).
2. Tissue: group of similar cells (e.g., muscle tissue).
3. Organ: different tissues together (e.g., heart – muscle, nervous, connective tissue).
4. System: organs working together (e.g., circulatory system – heart, blood vessels, blood).
5. Organism: living individual (e.g., human, maize plant).

Specialised Cells

- Red blood cell (erythrocyte):
   * No nucleus – more space for haemoglobin.
   * Biconcave disc – increases surface area for oxygen exchange.
   * Function: carry oxygen.

- Nerve cell (neuron):
   * Long axon – carries impulse over long distances.
   * Dendrites – receive signals.
   * Myelin sheath – speeds transmission.
   * Function: transmit electrical impulses.

- Root hair cell (plant):
   * Long protrusion (root hair) – increases surface area.
   * No chloroplasts (underground).
   * Function: absorb water and minerals from soil.

Other examples: sperm cell (flagellum), egg cell (large cytoplasm), palisade cell (many chloroplasts).

Malawi Example: In a maize plant, root hair cells absorb water and nutrients; palisade cells in leaves carry out photosynthesis.`,
    summary: 'Organisation: cell → tissue → organ → system → organism. Specialised cells have adaptations for their role: red blood cell (O2), nerve cell (impulses), root hair cell (absorption).',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Maize Root Hairs', description: 'Increase water uptake.’ },
      { title: 'Nerve in a Chicken Leg', description: 'Observe white thread‑like nerves.' }
    ],
    practiceQuestions: [
      { question: 'What is a tissue?', answer: 'A group of similar cells performing the same function.', hint: 'Example: muscle.’ },
      { question: 'How is a red blood cell adapted to carry oxygen?', answer: 'No nucleus, biconcave shape, contains haemoglobin.', hint: 'Space and shape.' }
    ]
  },
  {
    subject: 'Biology',
    form: 'Form 1',
    topic: 'Transport Across Membranes',
    lessonNumber: 1,
    lessonTitle: 'Diffusion and Osmosis',
    lessonId: 'biology-f1-diffusion-osmosis-1',
    order: 130,
    learningObjectives: [
      'Define diffusion and osmosis and give everyday examples',
      'Explain the importance of osmosis in plant and animal cells'
    ],
    introduction: 'Substances move into and out of cells without energy through diffusion and osmosis. Today we learn how these processes work and why they are important for life.',
    keyPoints: [
      'Diffusion: net movement of particles from high concentration to low concentration. No energy required. Examples: smell of cooking nsima spreading, oxygen entering blood.',
      'Osmosis: diffusion of water across a selectively permeable membrane from high water potential (dilute) to low water potential (concentrated).',
      'Importance: plants absorb water via root hairs; turgor pressure keeps leaves firm; animal cells – water balance.'
    ],
    detailedContent: `Diffusion

Diffusion is the net movement of particles (gases, solutes) from a region of higher concentration to a region of lower concentration. It continues until equilibrium is reached.

Examples:
- Cooking nsima – smell spreads throughout the house (gas diffusion).
- Oxygen diffuses from alveoli into blood (high O2 in air, low in blood).
- Carbon dioxide diffuses from blood into alveoli.
- Sugar dissolving in water (sugar molecules spread).

Factors affecting rate: temperature (higher → faster), concentration gradient (steeper → faster), distance (shorter → faster).

Osmosis

Osmosis is the net movement of water molecules from a region of high water concentration (dilute solution) to a region of low water concentration (concentrated solution) across a selectively permeable membrane.

The membrane allows water to pass but not larger solutes.

Importance in Plants

- Root hair cells: water moves by osmosis from soil (dilute) into root cells (concentrated cell sap).
- Turgor: water enters vacuole, pressing cell wall – gives support to non‑woody plants. Wilting occurs when water loss > uptake.
- Stomatal opening: guard cells become turgid → stoma opens; flaccid → closes.

Importance in Animals

- Human cells: body fluids maintain osmotic balance (≈0.9% salt). If red blood cells placed in pure water, water enters → cells burst (haemolysis). In concentrated salt, water leaves → cells shrink (crenation).
- Kidneys use osmosis to reabsorb water (ADH controls).

Malawi Example: When you put a wilted vegetable in water, it becomes crisp again – water moves into cells by osmosis.`,
    summary: 'Diffusion: high to low concentration. Osmosis: water across membrane. Osmosis keeps plants turgid, animals balanced. Wilting occurs when water lost.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Wilted Vegetable', description: 'Becomes crisp in water – osmosis.' },
      { title: 'Smell of Nsima', description: 'Diffusion spreads particles.' }
    ],
    practiceQuestions: [
      { question: 'What is the difference between diffusion and osmosis?', answer: 'Osmosis is specifically water across a semi‑permeable membrane; diffusion can be any particle.', hint: 'Water vs any.’ },
      { question: 'What happens to a red blood cell in distilled water?', answer: 'It swells and bursts (haemolysis).', hint: 'Water enters.’ }
    ]
  },

 
  {
    subject: 'Biology',
    form: 'Form 2',
    topic: 'Blood Donation',
    lessonNumber: 1,
    lessonTitle: 'The Process and Importance of Blood Donation',
    lessonId: 'biology-f2-blood-donation-1',
    order: 131,
    learningObjectives: [
      'Explain the process of blood donation and the role of the Malawi Blood Transfusion Service (MBTS)',
      'Describe the types of blood donors and the importance of voluntary non‑remunerated donation'
    ],
    introduction: 'Blood donation saves lives – for surgery, accidents, anaemia, and childbirth. Today we learn how blood is collected, who can donate, and why voluntary donors are safest.',
    keyPoints: [
      'Blood donation process: registration, health check, haemoglobin test, donor questionnaire, sterile phlebotomy (450‑500 mL), rest, refreshments.',
      'Types of donors: family replacement donors (give for a relative), voluntary non‑remunerated donors (give freely, safest).',
      'MBTS roles: collection, testing (HIV, hepatitis, syphilis, malaria), separation into components (red cells, plasma, platelets), storage, distribution.',
      'Eligibility: age 18‑60, weight ≥50 kg, healthy, no risky behaviours, not pregnant, not anaemic.'
    ],
    detailedContent: `Blood Donation Process

1. Registration: donor gives consent and basic information.
2. Health check: temperature, blood pressure, pulse.
3. Haemoglobin test: finger prick to ensure sufficient iron.
4. Interview: confidential questions about medical history, travel, risk behaviours (to prevent transfusion‑transmitted infections).
5. Donation: clean needle, 450‑500 mL blood taken (about 10‑15 minutes). One unit can save 2‑3 lives.
6. Post‑donation rest: donor rests, drinks fluids, eats snack.

Types of Blood Donors

- Family replacement donors: donate when a family member needs transfusion. Risk: may not disclose risks due to pressure.
- Voluntary non‑remunerated donors: donate voluntarily without payment. They have no incentive to hide risky behaviour → lower risk of infections. These are the safest donors. MBTS promotes 100% voluntary donation.

Malawi Blood Transfusion Service (MBTS)

MBTS collects, tests, processes, and distributes blood to hospitals.

- Blood is tested for HIV, hepatitis B/C, syphilis, and malaria.
- Separation: whole blood separated into red cells, plasma, and platelets (each used for different conditions).
- Storage: red cells at 2‑6°C (35 days), plasma frozen, platelets room temperature (5 days).
- Distribution to all district hospitals, central hospitals (Queen Elizabeth).

Why donate? To save lives – accident victims, mothers with post‑partum haemorrhage, anaemic children, surgery patients.

Malawi Example: MBTS runs mobile clinics in schools, churches, and workplaces. Each year, thousands of units are collected, but demand exceeds supply.`,
    summary: 'Blood donation process: screening, health check, collection of 450‑500 mL. Voluntary non‑remunerated donors are safest. MBTS tests, separates, distributes blood. Saves lives.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'MBTS Mobile Clinic', description: 'Schoolchildren donate during campaigns.' },
      { title: 'Post‑partum Haemorrhage', description: 'Mothers need urgent transfusion.' }
    ],
    practiceQuestions: [
      { question: 'Why are voluntary non‑remunerated donors considered safest?', answer: 'No incentive to hide risk behaviours, so lower risk of transfusion‑transmitted infections.', hint: 'Honesty.' },
      { question: 'What tests are performed on donated blood?', answer: 'HIV, hepatitis B/C, syphilis, malaria.', hint: 'Screen for diseases.' }
    ]
  },

  
  {
    subject: 'Chemistry',
    form: 'Form 1',
    topic: 'States of Matter',
    lessonNumber: 1,
    lessonTitle: 'Properties of Solids, Liquids, and Gases',
    lessonId: 'chemistry-f1-states-matter-1',
    order: 132,
    learningObjectives: [
      'Describe the three states of matter in terms of particle arrangement and movement',
      'State the properties of solids, liquids, and gases'
    ],
    introduction: 'Matter can exist as solid, liquid, or gas. The difference is in how particles are arranged and how they move. Today we explore these states and their properties.',
    keyPoints: [
      'Solids: particles closely packed in fixed pattern; vibrate in place; fixed shape and volume; high density; incompressible.',
      'Liquids: particles close but not fixed; can slide past each other; fixed volume but take shape of container; slightly compressible.',
      'Gases: particles far apart; move randomly at high speed; no fixed shape or volume; low density; easily compressible.',
      'Changes of state: melting (solid→liquid), freezing, boiling (liquid→gas), condensation, sublimation (solid→gas).'
    ],
    detailedContent: `Properties of States

Solids:
- Particle arrangement: regular, tightly packed.
- Movement: vibrate about fixed positions.
- Shape: fixed.
- Volume: fixed.
- Density: high.
- Compressibility: very low.

Examples: iron bar, maize grain, stone.

Liquids:
- Particle arrangement: random but close.
- Movement: slide over each other.
- Shape: takes shape of container.
- Volume: fixed.
- Density: moderate (water 1 g/cm³).
- Compressibility: very low.

Examples: water, cooking oil.

Gases:
- Particle arrangement: far apart, random.
- Movement: rapid, random, straight lines until collision.
- Shape: fills entire container.
- Volume: expands to fill container.
- Density: low.
- Compressibility: high.

Examples: air, carbon dioxide, steam.

Changes of State
- Melting: solid to liquid (absorbs energy).
- Boiling/evaporation: liquid to gas (absorbs energy).
- Condensation: gas to liquid (releases energy).
- Freezing: liquid to solid (releases energy).
- Sublimation: solid to gas (dry ice, iodine crystals).
- Deposition: gas to solid (frost).

During change of state, temperature remains constant because energy is used to overcome intermolecular forces.

Malawi Example: Water from Lake Malawi can be solid (ice on high mountains), liquid (usual), or gas (steam when boiling for nsima).`,
    summary: 'Solids: fixed shape/volume, incompressible. Liquids: fixed volume, take shape of container. Gases: no fixed shape/volume, compressible. Changes of state involve energy. ',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Ice on Mulanje', description: 'Solid water at high altitude.' },
      { title: 'Steam from Cooking', description: 'Gas from boiling water.' }
    ],
    practiceQuestions: [
      { question: 'What happens to the particles when a solid melts?', answer: 'Gain energy, vibrate more, break free from fixed positions.', hint: 'Energy increase.’ },
      { question: 'Why can gases be compressed easily?', answer: 'Particles are far apart with much empty space.', hint: 'Low density.' }
    ]
  },
  {
    subject: 'Chemistry',
    form: 'Form 1',
    topic: 'Solutions and Solubility',
    lessonNumber: 1,
    lessonTitle: 'Types of Solutions and Factors Affecting Solubility',
    lessonId: 'chemistry-f1-solutions-1',
    order: 133,
    learningObjectives: [
      'Define solution, solute, solvent, and classify solutions as saturated/unsaturated',
      'Explain factors that affect solubility (temperature, stirring, particle size)'
    ],
    introduction: 'When sugar dissolves in tea, you have made a solution. Today we learn the language of solutions and what makes substances dissolve faster or slower.',
    keyPoints: [
      'Solution: homogeneous mixture of solute and solvent.',
      'Solute: substance that dissolves (e.g., sugar).',
      'Solvent: substance that dissolves the solute (e.g., water).',
      'Saturated solution: no more solute can dissolve at that temperature.',
      'Unsaturated solution: more solute can dissolve.',
      'Factors affecting rate of dissolving (speed): temperature (higher → faster), stirring (faster), particle size (smaller → faster). But solubility (maximum amount) increases with temperature for most solids, decreases for gases.'
    ],
    detailedContent: `What is a Solution?

A solution is a homogeneous mixture where one substance (solute) is dissolved in another (solvent). The particles are evenly distributed and cannot be seen.

Examples:
- Salt in water (NaCl in H2O)
- Sugar in water
- Vinegar (acetic acid in water)
- Air (gases dissolved in gases)

Saturated vs Unsaturated

- Unsaturated: more solute can be dissolved (e.g., add one teaspoon of sugar to a cup of tea).
- Saturated: no more solute dissolves at that temperature; additional solute remains as precipitate (e.g., after many spoons, sugar stops dissolving). The concentration at saturation is the solubility (g/100g water).

Rate of Dissolving vs Solubility

- Rate (speed) of dissolving can be increased by:
   * Heating (particles move faster, more collisions).
   * Stirring (brings fresh solvent into contact).
   * Crushing solute (increases surface area).

- Solubility (maximum amount) for most solids increases with temperature. For gases, solubility decreases with temperature (why warm soda goes flat faster).

Practical: Make saturated salt solution, then observe crystallisation when water evaporates.

Malawi Example: In Lake Chilwa, salt production uses evaporation. The lake water is saturated, and on evaporation, salt crystals form. In cooking, hot water dissolves sugar faster than cold.`,
    summary: 'Solution = solute + solvent. Saturated: maximum dissolved. Rate of dissolving increased by heat, stirring, surface area. Solubility varies with temperature.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Lake Chilwa Salt', description: 'Evaporation of saturated brine leaves salt crystals.' },
      { title: 'Hot Tea Sugar', description: 'Dissolves faster than cold – temperature effect.' }
    ],
    practiceQuestions: [
      { question: 'What is the difference between saturated and unsaturated?', answer: 'Saturated cannot dissolve more; unsaturated can.', hint: 'Capacity.’ },
      { question: 'How does crushing a solid increase dissolving rate?', answer: 'Increases surface area for solvent to contact.', hint: 'More particles exposed.' }
    ]
  },


  {
    subject: 'Chemistry',
    form: 'Form 2',
    topic: 'Chemical Formulae and Equations',
    lessonNumber: 1,
    lessonTitle: 'Writing Chemical Formulae and Valency',
    lessonId: 'chemistry-f2-formulae-1',
    order: 134,
    learningObjectives: [
      'Write chemical formulae for compounds using valencies',
      'Calculate relative formula mass (Mr) from atomic masses'
    ],
    introduction: 'Chemists use symbols and formulae to represent elements and compounds. Today we learn how to write formulae and calculate the mass of one formula unit.',
    keyPoints: [
      'Valency: combining power of an element (number of electrons lost, gained, or shared). Group I metals have valency 1, Group II valency 2, Group VII non‑metals 1, etc.',
      'To write formula: swap valencies (criss‑cross). Example: Al (III) and O (II) → Al2O3.',
      'Parentheses for polyatomic ions: Ca(OH)2, (NH4)2SO4.',
      'Relative atomic mass (Ar): mass relative to 1/12 of carbon‑12. Found on periodic table.',
      'Relative formula mass (Mr): sum of Ar of all atoms in the formula.',
      'Example: H2O – Mr = (2×1) + 16 = 18.'
    ],
    detailedContent: `Valency and Formulae

Valency is the combining power of an element. For main group elements, it is often the group number (for metals) or 8‑group number (for non‑metals).

Common valencies:
- H (1), Na (1), K (1), Ag (1)
- Mg (2), Ca (2), Ba (2), Zn (2)
- Al (3)
- O (2), S (2)
- Cl (1), Br (1), I (1)
- N (3), P (3)

Polyatomic ions (radicals) have fixed charges:
- Hydroxide OH‑ (1), nitrate NO3‑ (1), carbonate CO32‑ (2), sulphate SO42‑ (2), ammonium NH4+ (1)

Writing formula: use criss‑cross of valencies.

Example: Sodium (Na valency 1) and chlorine (Cl valency 1) → NaCl.
Calcium (Ca valency 2) and oxygen (O valency 2) → CaO (simplify: 2/2 =1 each).
Aluminium (Al valency 3) and oxygen (O valency 2) → Al2O3 (swap 3 and 2).
Calcium (2) and hydroxide (1) → Ca(OH)2 – brackets for the ion.

Relative Formula Mass (Mr)

Ar values from periodic table (use whole numbers approx):
H=1, C=12, N=14, O=16, Na=23, Mg=24, Al=27, S=32, Cl=35.5, Ca=40, Fe=56.

Calculate Mr:
- NaCl: 23 + 35.5 = 58.5
- H2O: (2×1) + 16 = 18
- Ca(OH)2: 40 + (2×16) + (2×1) = 40 + 32 + 2 = 74
- (NH4)2SO4: (2×14)+(8×1)+32+(4×16) = 28+8+32+64 = 132

Malawi Example: Fertiliser labels show NPK; the formula (e.g., (NH4)2SO4) allows calculating Mr and nitrogen percentage.`,
    summary: 'Formula uses valencies. Mr = sum of Ar of atoms. Example: H2O = 18. Important for calculating masses in reactions.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Urea Formula', answer: 'CO(NH2)2, Mr = 12+16+(2×14)+(4×1)=60' },
      { title: 'Salt (NaCl)', answer: 'Formula Mr 58.5.' }
    ],
    practiceQuestions: [
      { question: 'Write formula for magnesium chloride (Mg valency 2, Cl 1).', answer: 'MgCl2', hint: 'Swap valencies.' },
      { question: 'Calculate Mr of CaCO3.', answer: '40+12+(3×16)=100', hint: 'Calcium carbonate.' }
    ]
  },
  {
    subject: 'Chemistry',
    form: 'Form 2',
    topic: 'Balancing Chemical Equations',
    lessonNumber: 1,
    lessonTitle: 'Balancing Equations and Conservation of Mass',
    lessonId: 'chemistry-f2-balancing-1',
    order: 135,
    learningObjectives: [
      'State the law of conservation of mass',
      'Balance given chemical equations by adjusting coefficients'
    ],
    introduction: 'In a chemical reaction, atoms are rearranged, not created or destroyed. Balanced equations show this. Today we learn to balance equations.',
    keyPoints: [
      'Law of conservation of mass: total mass of reactants = total mass of products.',
      'A balanced equation has equal numbers of each atom on both sides.',
      'Balance by changing coefficients (numbers before formulae), never subscripts.',
      'Steps: write unbalanced equation, count atoms, adjust coefficients, repeat.'
    ],
    detailedContent: `Why Balance?

The law of conservation of mass means atoms are neither created nor destroyed. So the number of each type of atom must be the same on both sides of the equation.

Example: Unbalanced – H2 + O2 → H2O
Left: H=2, O=2. Right: H=2, O=1. Oxygen not balanced.

To balance, we add coefficients:
2H2 + O2 → 2H2O
Now left: H=4, O=2; right: H=4, O=2.

Balancing Steps

1. Write correct formulae for all reactants and products.
2. Count atoms of each element.
3. Start with the most complex molecule or the element that appears in only one reactant and one product.
4. Use coefficients to make numbers equal.
5. Check again.

Examples:

1. C3H8 + O2 → CO2 + H2O (combustion of propane)
   Balance C: 3CO2
   Balance H: 4H2O
   Balance O: left C3H8 + O2, right 3CO2+4H2O gives O count: (3×2)+(4×1)=10 O atoms. So need 5O2.
   Final: C3H8 + 5O2 → 3CO2 + 4H2O

2. Al + HCl → AlCl3 + H2
   Balance Al: already 1:1
   Balance Cl: right AlCl3 has 3Cl, so need 3HCl
   H: left 3H, right H2 – need 1.5 H2? Multiply through by 2: 2Al + 6HCl → 2AlCl3 + 3H2

Linear equations method for complicated ones not required at Form 2; use trial & error.

Malawi Example: Fermentation of sugar: C6H12O6 → 2C2H5OH + 2CO2. Balanced – atoms same both sides.`,
    summary: 'Balanced equations show conservation of mass. Use coefficients, not subscripts. Atoms must match on both sides.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Photosynthesis', description: '6CO2 + 6H2O → C6H12O6 + 6O2 – balanced.' },
      { title: 'Rusting', description: '4Fe + 3O2 → 2Fe2O3.' }
    ],
    practiceQuestions: [
      { question: 'Balance: Mg + O2 → MgO', answer: '2Mg + O2 → 2MgO', hint: 'Magnesium burns.' },
      { question: 'Balance: N2 + H2 → NH3', answer: 'N2 + 3H2 → 2NH3', hint: 'Haber process.' }
    ]
  },

  
  {
    subject: 'Physics',
    form: 'Form 1',
    topic: 'Measurements I – Instruments',
    lessonNumber: 1,
    lessonTitle: 'Measuring Length, Mass, Time, and Temperature',
    lessonId: 'physics-f1-measuring-instruments-1',
    order: 136,
    learningObjectives: [
      'Use appropriate instruments to measure length (ruler, tape), mass (beam balance), time (stopwatch), and temperature (thermometer)',
      'Read scales correctly and convert between units'
    ],
    introduction: 'Physics experiments require accurate measurements. Today we learn how to use common instruments and read their scales without error.',
    keyPoints: [
      'Length: metre rule (1 mm precision), tape measure (1 cm precision).',
      'Mass: beam balance (1 g), electronic balance (0.1 g or better).',
      'Time: stopwatch (0.1 s or 0.01 s).',
      'Temperature: liquid‑in‑glass thermometer, digital thermometer.',
      'Scale reading: avoid parallax error by placing eye at level of meniscus (for liquids) or mark.',
      'Unit conversion: 1 m = 100 cm = 1000 mm; 1 kg = 1000 g; 1 hour = 3600 s.'
    ],
    detailedContent: `Measuring Length

- Metre rule: 1 m long, divided into 100 cm and 1000 mm. Accuracy 1 mm.
- Tape measure: for longer lengths (up to several metres). Accuracy 1 cm.
- To measure: align zero mark with one end, read at other end. Keep eye directly above the mark to avoid parallax.

Measuring Mass

- Beam balance (triple beam or double pan): adjust riders until pointer balances; add masses. Accuracy 1 g.
- Electronic balance: digital reading. More accurate (0.1 g or 0.01 g). Always zero before use.

Measuring Time

- Stopwatch (manual or digital). Start and stop with finger; reaction time may introduce error (0.1‑0.2 s). For better accuracy, measure multiple oscillations (e.g., 10 swings of pendulum) and divide.

Measuring Temperature

- Liquid‑in‑glass thermometer (alcohol or mercury). Bulb at bottom, liquid expands up tube. Read at top of liquid column (meniscus for alcohol). Eye level to avoid parallax.
- Digital thermometer: electronic sensor, quick reading.

Unit Conversion (examples)
- 2.5 m = 250 cm = 2500 mm.
- 500 g = 0.5 kg.
- 30 minutes = 1800 s.

Malawi Example: In a school garden, students measure length of maize rows with a tape measure. They weigh harvested maize using a beam balance.`,
    summary: 'Length: metre rule, tape. Mass: balance. Time: stopwatch. Temperature: thermometer. Read at eye level to avoid parallax. Convert units carefully.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Garden Length', description: 'Measure rows with tape measure.' },
      { title: 'Market Weighing', description: 'Beam balance measures bag of groundnuts.' }
    ],
    practiceQuestions: [
      { question: 'What is the smallest division on a metre rule?', answer: '1 mm', hint: '1000 mm in metre.' },
      { question: 'Convert 2.5 kg to grams.', answer: '2500 g', hint: '1 kg = 1000 g.' }
    ]
  },
  {
    subject: 'Physics',
    form: 'Form 1',
    topic: 'Work and Energy',
    lessonNumber: 1,
    lessonTitle: 'Work Done and Its Calculation',
    lessonId: 'physics-f1-work-1',
    order: 137,
    learningObjectives: [
      'Define work in physics (force causes displacement)',
      'Calculate work done using W = F × d'
    ],
    introduction: 'In physics, work is done only when a force moves an object. If you push a wall, no work is done if it doesn’t move. Today we learn to calculate work and see real examples.',
    keyPoints: [
      'Work = Force × distance moved in direction of force (W = Fd).',
      'Unit: joule (J), 1 J = 1 N·m.',
      'No displacement → no work (even if force is large).',
      'Examples: lifting a load, pushing a wheelbarrow.'
    ],
    detailedContent: `Definition of Work

Work is done when a force causes an object to move in the direction of the force.

Formula: W = F × d
- W = work (joules, J)
- F = force (newtons, N)
- d = distance moved in direction of force (metres, m)

If the force is at an angle, only the component in the direction of motion does work (not covered in Form 1).

Examples

1. Push a box 5 m with a force of 20 N: W = 20 × 5 = 100 J.
2. Lift a 10 kg bag of maize (weight = 100 N) to a height of 1.5 m: W = 100 × 1.5 = 150 J.
3. Hold a heavy bag without moving – distance = 0 → work = 0 J.

When is work done?

| Situation | Work done? | Reason |
|-----------|------------|--------|
| Pushing a wall that doesn’t move | No | No displacement |
| Carrying a bag horizontally at constant speed | No | Force vertical, motion horizontal (perpendicular) – but horizontal component of force? Actually you only need to support the bag vertically; horizontal motion requires no force if constant speed. |
| Lifting a book | Yes | Force upward, displacement upward |
| Cycling | Yes | Force from pedals causes displacement |

Malawi Example: A farmer pushes a wheelbarrow loaded with maize 20 m with a force of 50 N. Work = 50 × 20 = 1000 J.`,
    summary: 'Work = force × distance. No displacement → no work. Unit: joule (J).',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Wheelbarrow Work', description: 'Pushing wheelbarrow full of maize.' },
      { title: 'Water Pump Work', description: 'Lifting water from well.' }
    ],
    practiceQuestions: [
      { question: 'Calculate work if force 30 N moves object 4 m.', answer: '120 J', hint: '30×4=120' },
      { question: 'Is work done carrying a bag horizontally? Why?', answer: 'No, because force is vertical (up) and motion is horizontal – perpendicular.', hint: 'No force in direction of motion.' }
    ]
  },
  {
    subject: 'Physics',
    form: 'Form 1',
    topic: 'Energy',
    lessonNumber: 1,
    lessonTitle: 'Forms of Energy and Energy Conservation',
    lessonId: 'physics-f1-energy-1',
    order: 138,
    learningObjectives: [
      'Identify different forms of energy (kinetic, potential, thermal, chemical, etc.)',
      'State the law of conservation of energy'
    ],
    introduction: 'Energy is the ability to do work. It exists in many forms and can be transformed from one form to another. Today we learn the forms and the most important law of physics.',
    keyPoints: [
      'Energy unit: joule (J).',
      'Forms: kinetic (motion), gravitational potential (height), elastic (stretched), thermal (heat), chemical (bonds), electrical, light, sound, nuclear.',
      'Law of conservation of energy: total energy remains constant; energy cannot be created or destroyed, only transformed.'
    ],
    detailedContent: `What is Energy?

Energy is the capacity to do work. When work is done, energy is transferred.

Forms of Energy

- Kinetic (KE): energy of motion. Depends on mass and speed.
- Gravitational potential (GPE): energy due to height. GPE = mgh.
- Elastic potential: stored in stretched or compressed springs, rubber bands.
- Thermal (heat): energy of hot objects; particles move faster.
- Chemical: stored in bonds of food, fuel, batteries.
- Electrical: energy of moving charges (electricity).
- Light (radiant): energy carried by electromagnetic waves.
- Sound: energy of vibrations.
- Nuclear: stored in atomic nuclei (sun, nuclear power).

Energy Transformations

Examples:
- Hydroelectric dam: GPE (water) → kinetic → electrical.
- Food: chemical → kinetic (muscles) + thermal (body heat).
- Solar panel: light → electrical.
- Bicycle brakes: kinetic → thermal (brake pads heat up).
- Candle: chemical → light + thermal.

Conservation of Energy

In any transformation, the total energy before equals total energy after, provided we account for all forms.

Example: A dropped stone loses GPE and gains KE. At the moment it hits the ground, KE = original GPE (ignoring air resistance). Some energy may be converted to sound and heat, but total remains same.

Malawi Example: At Nkula Falls hydroelectric plant, GPE of water in reservoir is converted to KE as it flows down, then to electrical energy by turbines. Some energy lost as sound and heat, but total energy conserved.`,
    summary: 'Energy forms: kinetic, potential, thermal, chemical, electrical, light, sound, nuclear. Conservation: total energy constant; only transformed.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Nkula Hydroelectric', description: 'Water potential → kinetic → electrical.' },
      { title: 'Bicycle Brakes', description: 'Kinetic → thermal (heat).' }
    ],
    practiceQuestions: [
      { question: 'What type of energy does a moving bicycle have?', answer: 'Kinetic energy', hint: 'Motion.' },
      { question: 'What happens to the gravitational potential energy of water when it flows over a dam?', answer: 'It transforms to kinetic and then electrical energy.', hint: 'Hydroelectric.' }
    ]
  },

 
  {
    subject: 'Physics',
    form: 'Form 2',
    topic: 'Specific Heat Capacity',
    lessonNumber: 1,
    lessonTitle: 'Heat Capacity and Specific Heat Capacity',
    lessonId: 'physics-f2-specific-heat-1',
    order: 139,
    learningObjectives: [
      'Define heat capacity and specific heat capacity',
      'Solve problems using Q = mcΔθ'
    ],
    introduction: 'Why does water take longer to heat than oil? It has a high specific heat capacity. Today we learn what that means and how to calculate heat energy.',
    keyPoints: [
      'Heat capacity (C): energy needed to raise temperature by 1°C. Unit: J/°C.',
      'Specific heat capacity (c): energy needed to raise 1 kg of substance by 1°C. Unit: J/(kg·°C).',
      'Equation: Q = m c Δθ, where Q = heat energy (J), m = mass (kg), c = specific heat capacity, Δθ = temperature change (°C).',
      'Water has high c (4200 J/(kg·°C)) – good coolant; land heats/cools faster.'
    ],
    detailedContent: `Heat Capacity vs Specific Heat Capacity

- Heat capacity (C): the amount of heat required to raise the temperature of an entire object by 1°C. It depends on mass and material.
- Specific heat capacity (c): amount of heat required to raise the temperature of 1 kg of the substance by 1°C. It is a property of the material.

Equation: Q = m c Δθ

Where
- Q = heat energy (J)
- m = mass (kg)
- c = specific heat capacity (J/(kg·°C))
- Δθ = temperature rise (°C) = final – initial

Examples of c (approx):
- Water: 4200 J/(kg·°C)
- Aluminium: 900 J/(kg·°C)
- Iron: 450 J/(kg·°C)
- Copper: 390 J/(kg·°C)
- Air: 1000 J/(kg·°C)

Calculations

Example 1: How much heat to raise 2 kg of water from 20°C to 100°C?
Δθ = 80°C, m=2, c=4200.
Q = 2 × 4200 × 80 = 672,000 J = 672 kJ.

Example 2: Copper block of 0.5 kg heated from 25°C to 75°C. c=390.
Q = 0.5 × 390 × 50 = 9,750 J.

Applications
- Water in car radiators: high c absorbs large amount of heat without high rise.
- Coastal areas: high c of water moderates temperature (cool sea breezes).
- Cooking: pots need low c to heat quickly (aluminium, copper).

Malawi Example: Lake Malawi absorbs solar heat during day and releases slowly at night, making lakeside areas less extreme.`,
    summary: 'Specific heat capacity (c) = heat to raise 1 kg by 1°C. Q = m c Δθ. Water high c (4200) good coolant. Land low c heats/cools quickly.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Lake Malawi Moderation', description: 'Water’s high c keeps nearby climate stable.' },
      { title: 'Car Radiator', description: 'Water cools engine because it absorbs much heat.' }
    ],
    practiceQuestions: [
      { question: 'Calculate heat needed to raise 3 kg of aluminium (c=900) from 20°C to 120°C.', answer: '270,000 J', hint: 'Q=3×900×100=270,000' },
      { question: 'Why does land heat faster than lake water?', answer: 'Specific heat capacity of land (soil) is lower than water.', hint: 'c value.' }
    ]
  },
  {
    subject: 'Physics',
    form: 'Form 2',
    topic: 'Heat Transfer',
    lessonNumber: 1,
    lessonTitle: 'Conduction, Convection, and Radiation',
    lessonId: 'physics-f2-heat-transfer-1',
    order: 140,
    learningObjectives: [
      'Explain conduction, convection, and radiation as methods of heat transfer',
      'Give everyday examples of each'
    ],
    introduction: 'Heat moves from hot to cold. It can travel by three different methods: conduction (through solids), convection (liquids and gases), and radiation (no medium needed). Today we learn how each works.',
    keyPoints: [
      'Conduction: transfer through solids by particle vibration; metals are good conductors, wood/air poor conductors (insulators).',
      'Convection: transfer in fluids (liquids, gases) by bulk movement; hot fluid rises, cool sinks – convection currents.',
      'Radiation: transfer by infrared waves (no medium); can travel through vacuum; dark surfaces absorb/emit better, shiny surfaces reflect.',
      'Examples: cooking pan handle (conduction), boiling water (convection), sunshine (radiation).'
    ],
    detailedContent: `Conduction

Conduction occurs mainly in solids. When one part is heated, particles vibrate more and pass vibrations to neighbours. Free electrons in metals also help, making metals good conductors.

- Good conductors: silver, copper, aluminium, iron.
- Poor conductors (insulators): wood, plastic, air, wool, styrofoam.

Applications: cooking pots (metal), handles (plastic/wood), clothing (air trapped).

Convection

Convection occurs in fluids (liquids and gases). When fluid is heated, it expands, becomes less dense, and rises. Cooler, denser fluid sinks, creating a convection current.

Examples: boiling water (circular motion), air circulation in a room (radiator near floor, vents at ceiling), land/sea breezes.

Radiation

Radiation is heat transfer by infrared waves (electromagnetic). It does not need a medium; can travel through vacuum. All objects emit infrared; hotter objects emit more.

- Dark, matt surfaces absorb and emit well.
- Shiny, light surfaces reflect and emit poorly.

Examples: solar radiation warming the Earth, feeling heat from fire without touching, thermos flask (silvered surfaces reflect heat).

Malawi Example: Cooking nsima on open fire: pot gets hot by conduction; water inside by convection; you feel warmth by radiation.`,
    summary: 'Conduction (solids, particle vibration), convection (fluids, currents), radiation (infrared, no medium). Metals conduct well; dark surfaces good radiators/absorbers.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Cooking Pan', description: 'Metal conducts heat to food; handle plastic insulator.' },
      { title: 'Solar Cooker', description: 'Reflects radiation onto black pot.' }
    ],
    practiceQuestions: [
      { question: 'Why are cooking pots made of metal?', answer: 'Metals are good conductors of heat.', hint: 'Heat passes quickly.' },
      { question: 'How does a thermos flask keep liquids hot?', answer: 'Vacuum stops conduction/convection; silvered surfaces reflect radiation.', hint: 'Multiple methods.' }
    ]
  },

 
  // ======================================================================
  // ENGLISH – FORM 1
  // ======================================================================

  // Topic: Listening and Speaking – Understanding oral descriptions (split into 2 lessons)
  {
    subject: 'English',
    form: 'Form 1',
    topic: 'Listening and Speaking',
    lessonNumber: 1,
    lessonTitle: 'Predicting Content from Title and Pictures',
    lessonId: 'english-f1-listening-predict-1',
    order: 1,
    learningObjectives: [
      'Use a title or picture to predict content of an oral text',
      'Identify the central idea from the beginning or end of an oral text'
    ],
    introduction: 'When you listen to a story or a description, you can often guess what will be said from the title or a picture. This is predicting. Today we will practise predicting and finding the main idea.',
    keyPoints: [
      'Predicting: using clues (title, pictures, first sentence) to guess content.',
      'Central idea: the main message – often at the beginning or end.',
      'Ask: Who? What? Where? When? Why?',
      'Examples: Title "A Rainy Day in the Village" – expect children playing, crops being watered, etc.'
    ],
    detailedContent: `Why Predict?

Predicting makes listening active. You think ahead and remember better.

Example: Picture shows a group of children crossing a river with books. What might the story be about? Possibly going to school despite challenges.

Finding the Central Idea

Listen for:
- The opening statement – often tells the main point.
- Repeated words or phrases.
- The conclusion – speaker often summarises.

Example: "Chimwemwe woke up early. He fetched water. He collected firewood. Then he walked 5 km to school. He is a hardworking boy." Central idea: Chimwemwe is hardworking.

Practice: Teacher reads a short paragraph, students identify central idea.`,
    summary: 'Predict content from titles and pictures. Central idea is the main message, often at beginning or end. Listening actively improves comprehension.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'A Market Day', description: 'Predict from picture: many people, stalls, shouting – a description of a busy market.' },
      { title: 'The Road to School', description: 'Predict from title: a story about walking to school, challenges, friendship.' }
    ],
    practiceQuestions: [
      { question: 'What can you use to predict the content of a listening text?', answer: 'Title, pictures, first sentence', hint: 'Clues.' },
      { question: 'Where is the central idea often found?', answer: 'Beginning or end of the text', hint: 'Introduction or conclusion.' }
    ]
  },
  {
    subject: 'English',
    form: 'Form 1',
    topic: 'Listening and Speaking',
    lessonNumber: 2,
    lessonTitle: 'Presenting a Logical Oral Description or Narrative',
    lessonId: 'english-f1-speaking-narration-1',
    order: 2,
    learningObjectives: [
      'Organise a spoken description using space order, chronological order, or order of climax',
      'Present a clear, logical oral narrative based on a title or picture'
    ],
    introduction: 'When you speak, you need to organise your ideas so listeners can follow. Today we learn three ways: space order, chronological order, and order of climax.',
    keyPoints: [
      'Space order: describe from one location to another (top to bottom, left to right, near to far).',
      'Chronological order: tell events in the order they happen (first, then, after that, finally).',
      'Order of climax: save the most exciting part for the end.',
      'Use time connectives: first, next, then, after that, finally.'
    ],
    detailedContent: `Three Ways to Organise

1. Space order: Describe a place or object from one side to the other.
   Example: "At the front of the classroom is the blackboard. On the left are windows. On the right are posters. At the back is the door."

2. Chronological order: Tell a story from beginning to end.
   Example: "First, I woke up. Then I ate breakfast. Next, I walked to school. Finally, I arrived at class."

3. Order of climax: Start less exciting, end with the most interesting part.
   Example: "The tortoise walked very slowly. The hare ran fast and stopped to rest. The tortoise kept moving. In the end, the tortoise won!"

Practise: Look at a picture of a village. Describe it using space order. Then tell a story about a journey using chronological order.

Malawi Example: Describe your school garden (space order: maize on left, groundnuts in middle, fence on right). Narrate your morning routine (chronological).`,
    summary: 'Space order (location), chronological order (time), order of climax (save best for last). Use connectives to link ideas.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Describe a Classroom', description: 'Use space order: door, blackboard, seats.' },
      { title: 'A Wedding Celebration', description: 'Use chronological order: arrival, ceremony, feast, dancing.' }
    ],
    practiceQuestions: [
      { question: 'If you describe your house from the gate to the back door, what order are you using?', answer: 'Space order', hint: 'Location sequence.' },
      { question: 'What time word would you use to start a chronological narrative?', answer: 'First', hint: 'Beginning.' }
    ]
  },

  // Topic: Grammar – Nouns (split into 2 lessons)
  {
    subject: 'English',
    form: 'Form 1',
    topic: 'Grammar: Nouns',
    lessonNumber: 1,
    lessonTitle: 'Common, Proper, and Collective Nouns',
    lessonId: 'english-f1-nouns-1',
    order: 3,
    learningObjectives: [
      'Identify nouns in sentences',
      'Classify nouns as common, proper, or collective'
    ],
    introduction: 'Everything around you has a name – a person, place, thing, or idea. That name is a NOUN. Today we learn different types of nouns.',
    keyPoints: [
      'Common noun: general name (student, village, school).',
      'Proper noun: specific name (Chimwemwe, Lilongwe, Chichiri Secondary School). Capitalise.',
      'Collective noun: group (class, herd, team, family, choir).',
      'Examples: "The herd of cattle grazed near the river." – herd (collective), cattle (common), river (common).'
    ],
    detailedContent: `What is a Noun?

A noun is a naming word: person, place, thing, or idea.

Common Nouns: name any person, place, or thing in general. Not capitalised unless start of sentence.
Examples: man, woman, child, school, market, maize.

Proper Nouns: name a specific person, place, or organisation. Always capitalised.
Examples: Malawi, Chichewa, Dr Mutharika, Lake Malawi, Kamuzu Stadium.

Collective Nouns: name a group as a single unit.
Examples: a class of students, a herd of cattle, a flock of birds, a team of players, a choir of singers, a swarm of bees.

Exercise: Identify noun types in "The Ministry of Education announced new policies."`,
    summary: 'Common nouns are general; proper nouns are specific and capitalised; collective nouns name groups.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Village Life', description: 'Common: farmer, bicycle, field. Proper: Mchinji, Mrs Phiri.' },
      { title: 'Football Match', description: 'Collective: team, crowd, bench.' }
    ],
    practiceQuestions: [
      { question: 'Identify the noun type: "The choir sang beautifully."', answer: 'Choir – collective noun', hint: 'Group of singers.' },
      { question: 'Is "Malawi" a common or proper noun?', answer: 'Proper', hint: 'Specific country.' }
    ]
  },
  {
    subject: 'English',
    form: 'Form 1',
    topic: 'Grammar: Nouns',
    lessonNumber: 2,
    lessonTitle: 'Abstract Nouns and Plural Forms',
    lessonId: 'english-f1-nouns-2',
    order: 4,
    learningObjectives: [
      'Identify abstract nouns (ideas, feelings, qualities)',
      'Form plurals of regular and irregular nouns'
    ],
    introduction: 'Not all nouns name things you can touch. Love, happiness, and courage are ABSTRACT NOUNS. Today we also learn how to form plurals.',
    keyPoints: [
      'Abstract nouns: name ideas, emotions, qualities, concepts – cannot see or touch. Examples: love, anger, sadness, bravery, honesty, education, poverty, freedom.',
      'Regular plurals: add -s (book→books), -es (class→classes), -ies (baby→babies).',
      'Irregular plurals: child→children, man→men, woman→women, tooth→teeth, foot→feet, ox→oxen, mouse→mice, sheep→sheep, fish→fish.'
    ],
    detailedContent: `Abstract Nouns

These represent things that have no physical existence.
- Emotions: love, anger, joy, fear, sadness.
- Qualities: bravery, honesty, loyalty, patience.
- Concepts: freedom, justice, education, poverty, success.
- States: childhood, friendship, marriage.

You can’t touch or see them, but you can feel or experience them.

Plurals

Regular:
- Most nouns: add -s (book→books, girl→girls).
- Nouns ending in s, sh, ch, x, z: add -es (class→classes, bush→bushes, church→churches, box→boxes).
- Nouns ending in consonant + y: change y to i and add -es (family→families, baby→babies).
- Nouns ending in f or fe: change to ves (leaf→leaves, knife→knives) – exceptions: roof→roofs, chief→chiefs.

Irregular:
- man→men
- woman→women
- child→children
- tooth→teeth
- foot→feet
- goose→geese
- ox→oxen
- mouse→mice
- sheep→sheep (same)
- fish→fish (or fishes)
- deer→deer

Malawi Example: "The courage of the young girl was inspiring." (courage – abstract). "The children played in the village." (children – plural irregular).`,
    summary: 'Abstract nouns name feelings, ideas, qualities. Regular plurals add -s or -es. Irregular plurals change form (e.g., child→children).',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Harvest Joy', description: 'Joy (abstract) after harvest.' },
      { title: 'Cattle', description: 'Plural of cow is cows (regular), but oxen is irregular.' }
    ],
    practiceQuestions: [
      { question: 'Is "happiness" a concrete or abstract noun?', answer: 'Abstract', hint: 'Feeling.’ },
      { question: 'What is the plural of "child"?', answer: 'Children', hint: 'Irregular.' }
    ]
  },

  // Topic: Reading – Predicting content (1 lesson)
  {
    subject: 'English',
    form: 'Form 1',
    topic: 'Reading',
    lessonNumber: 1,
    lessonTitle: 'Predicting and Confirming from Text',
    lessonId: 'english-f1-reading-predict-1',
    order: 5,
    learningObjectives: [
      'Use title, headings, and pictures to predict text content',
      'Identify the central idea after reading'
    ],
    introduction: 'Good readers predict before they read, then confirm or adjust while reading. Today we practise these skills.',
    keyPoints: [
      'Before reading: look at title, pictures, first paragraph – predict topic, purpose, likely content.',
      'During reading: check if prediction was correct; adjust.',
      'After reading: identify central idea (main point) in one sentence.',
      'Central idea is often in the title, introduction, or conclusion.'
    ],
    detailedContent: `Steps to Predict

1. Read the title.
2. Look at any pictures or diagrams.
3. Read the first sentence or paragraph.
4. Make a reasonable guess about the topic and the author’s purpose.

Example: Title – "How to Plant Maize in the Rainy Season". Predict: steps like clearing land, making ridges, planting seeds, applying fertiliser, weeding, harvesting.

Finding the Central Idea

Ask: What is the single most important message?
- The title often gives it.
- The first paragraph may state it.
- The last paragraph may summarise it.

Example: "Chimwemwe woke early. He fetched water. He collected firewood. He walked 5 km to school. He loves learning." Central idea: Chimwemwe is determined to get an education.

Practice: Read a short passage about Lake Malawi. Predict before reading, then write the central idea.`,
    summary: 'Predict using title, pictures, first sentence. Central idea is the main message. Predicting improves comprehension.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Our Village Clinic', description: 'Predict services, workers, challenges.' },
      { title: 'The Lake of Stars', description: 'Predict celebration, culture, beauty.' }
    ],
    practiceQuestions: [
      { question: 'What clues help you predict before reading?', answer: 'Title, pictures, headings, first sentence', hint: 'Look around.' },
      { question: 'Where can you often find the central idea?', answer: 'Title, first paragraph, or last paragraph', hint: 'Beginning or end.' }
    ]
  },

  // Topic: Writing – Descriptive paragraphs (1 lesson)
  {
    subject: 'English',
    form: 'Form 1',
    topic: 'Writing',
    lessonNumber: 1,
    lessonTitle: 'Writing a Descriptive Paragraph',
    lessonId: 'english-f1-writing-description-1',
    order: 6,
    learningObjectives: [
      'Use space order to organise a description',
      'Include sensory details (sight, sound, smell, touch, taste)'
    ],
    introduction: 'A description paints a picture with words. Good description makes the reader see, hear, smell, feel, or taste what you are writing about. Today we practise writing descriptive paragraphs.',
    keyPoints: [
      'Space order: describe from top to bottom, left to right, near to far, or front to back.',
      'Sensory details: sight (colours, shapes), sound (noises, quiet), smell (sweet, smoky), touch (rough, smooth), taste (sour, sweet).',
      'Use adjectives to give details: size, colour, texture, age.',
      'Plan before writing: list key features and organising order.'
    ],
    detailedContent: `What is a Descriptive Paragraph?

A descriptive paragraph creates a vivid image in the reader’s mind. Use space order to avoid jumping around.

Example (space order – top to bottom of a person):
"Chifundo is a tall boy of about fifteen. His hair is short and black. His eyes are brown and friendly. He wears a bright yellow t‑shirt and blue shorts. On his feet are worn but clean sandals."

Sensory Details

- Sight: red tomatoes, green maize stalks, blue sky.
- Sound: crowded market noise, children laughing, water splashing.
- Smell: smoke from cooking nsima, fresh rain on dry earth.
- Touch: smooth river stones, warm nsima, rough bark.
- Taste: sweet mango, sour tamarind.

Example (space order – left to right of a garden):
"On the left side of the garden are tall maize plants. In the centre are rows of onions. On the right are cabbages with broad green leaves."

Now write a description of your classroom, your home, or a family member. Use space order and at least three sensory details.`,
    summary: 'Use space order to organise. Include sensory details (sight, sound, smell, touch, taste). Plan before writing.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Describe a Maize Field', description: 'Use space order: near the fence, middle rows, far end. Sensory: green stalks, rustling leaves, fresh smell after rain.' },
      { title: 'Describe a Grandmother', description: 'Top to bottom: grey hair, smiling eyes, colourful chitenje, sandals.' }
    ],
    practiceQuestions: [
      { question: 'Name three sensory details you can include.', answer: 'Sight, sound, smell (or touch, taste)', hint: 'Five senses.' },
      { question: 'What organisation is best for describing a room from door to window?', answer: 'Space order (front to back or near to far)', hint: 'Location.' }
    ]
  },

  // Topic: Literature – Introduction to genres (1 lesson)
  {
    subject: 'English',
    form: 'Form 1',
    topic: 'Literature: Genres',
    lessonNumber: 1,
    lessonTitle: 'Genres of Literature: Short Story, Poetry, Play, Folktale',
    lessonId: 'english-f1-literature-genres-1',
    order: 7,
    learningObjectives: [
      'Define genre and list the main literary genres',
      'Identify the features of short stories, folktales, poems, and plays'
    ],
    introduction: 'Have you ever listened to a folktale told by your grandmother? Read a short story? Watched a drama? These are different GENRES. Today we learn the main types of literature.',
    keyPoints: [
      'Genre: a category of literature with similar style and content.',
      'Short story: brief fictional narrative, few characters, one main event.',
      'Folktale: traditional oral story, often teaches a lesson, includes animals or magic.',
      'Poetry: uses rhythm, rhyme, figurative language to express feelings.',
      'Play (drama): written for performance, includes dialogue and stage directions.'
    ],
    detailedContent: `What is Genre?

Genre (pronounced "zhahn‑ruh") means a type or category of literature.

Short Story
- Brief (can be read in one sitting).
- Few characters.
- One main conflict or event.
- Simple plot.
- Example: "The Boy Who Cried Wolf".

Folktale
- Traditional, passed orally.
- Often begins "Once upon a time…"
- Teaches a moral.
- May include talking animals or magic.
- Example: The story of Kalulu (hare) and the tortoise.

Poetry
- Uses lines and stanzas (not paragraphs).
- Often has rhythm and rhyme.
- Uses figurative language (simile, metaphor).
- Expresses emotions intensely.
- Example: "The Lake" by Frank Chipasula.

Play (Drama)
- Written for stage performance.
- Dialogue between characters.
- Stage directions (in brackets).
- Divided into acts and scenes.
- Example: school drama about African independence.

Malawi writers: Steve Chimombo (poet, playwright), Jack Mapanje (poet), Legson Kayira (novelist).`,
    summary: 'Genre is a type of literature. Short story: brief fiction. Folktale: traditional oral. Poetry: rhythm, imagery. Play: dialogue, performance.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Folktale of Kalulu', description: 'Trickster stories teach lessons.' },
      { title: 'School Drama', description: 'A play about a girl who wants to become a doctor.' }
    ],
    practiceQuestions: [
      { question: 'What genre is best for a story with many characters and a complex plot?', answer: 'Novel (longer) – but from those listed, short story is too short.', hint: 'Longer fiction.' },
      { question: 'Name one feature of a play.', answer: 'Dialogue, stage directions, acts, scenes', hint: 'Performance.' }
    ]
  },

  // ======================================================================
  // ENGLISH – FORM 2
  // ======================================================================

  // Grammar: Verbs and tenses (split into 2 lessons)
  {
    subject: 'English',
    form: 'Form 2',
    topic: 'Grammar: Verbs and Tenses',
    lessonNumber: 1,
    lessonTitle: 'Action and Linking Verbs – Present and Past Tenses',
    lessonId: 'english-f2-verbs-1',
    order: 8,
    learningObjectives: [
      'Identify action verbs and linking verbs (be, seem, become)',
      'Use simple present and simple past tenses correctly'
    ],
    introduction: 'Verbs are the engines of sentences – they show action or state of being. Today we learn about action vs linking verbs and the simple present and past tenses.',
    keyPoints: [
      'Action verb: shows physical or mental action (run, eat, think).',
      'Linking verb: connects subject to description (am, is, are, was, were, seem, become).',
      'Simple present: used for habits, facts, general truths (I walk, she walks).',
      'Simple past: used for completed actions (I walked, she went).',
      'Regular past: add -ed. Irregular past: change form (go→went, buy→bought).'
    ],
    detailedContent: `Action vs Linking Verbs

Action verbs describe something the subject does.
Examples: run, eat, read, plant, sell, think, believe.

Linking verbs describe what the subject is (state of being).
Common linking verbs: am, is, are, was, were, seem, appear, become, feel, look, taste.
Examples: "She is a teacher." (not action) "The food tastes good." (tastes – linking, not action).

Simple Present Tense
- Used for habits, routines, facts, general truths.
- Form: base verb for I, you, we, they. Add -s or -es for he, she, it.
- Examples: I walk to school. She walks to school. The sun rises in the east.

Simple Past Tense
- Used for actions completed in the past.
- Regular: add -ed (walk→walked, plant→planted).
- Irregular: change (go→went, buy→bought, teach→taught).
- Examples: Yesterday I walked 5 km. Last week she sold groundnuts.

Malawi Example: "The farmer plants maize every November." (present habit). "Last year, the rains started late." (past).`,
    summary: 'Action verbs show activity; linking verbs show state. Simple present for habits, past for completed actions. Irregular verbs change form.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Daily Routine', description: 'I wake up at 5 am every day (present).' },
      { title: 'Last Year’s Harvest', description: 'We harvested 10 bags of maize (past).' }
    ],
    practiceQuestions: [
      { question: 'Correct the verb: "He go to school yesterday."', answer: 'He went to school yesterday.', hint: 'Past tense irregular.' },
      { question: 'Identify the linking verb: "The nsima tastes delicious."', answer: 'tastes', hint: 'Describes the nsima.' }
    ]
  },
  {
    subject: 'English',
    form: 'Form 2',
    topic: 'Grammar: Verbs and Tenses',
    lessonNumber: 2,
    lessonTitle: 'Future Tense and Subject‑Verb Agreement',
    lessonId: 'english-f2-verbs-2',
    order: 9,
    learningObjectives: [
      'Form simple future tense (will + base verb)',
      'Apply subject‑verb agreement (singular subject – singular verb)'
    ],
    introduction: 'How do you talk about tomorrow? Use the future tense. Also, make sure your subject and verb match in number. Today we cover these.',
    keyPoints: [
      'Simple future: will + base verb (I will plant, they will harvest).',
      'Also: going to (less formal).',
      'Subject‑verb agreement: singular subject takes singular verb (adds -s); plural subject takes plural verb (no -s).',
      'Be careful with irregular verbs (to be: I am, you are, he/she/it is, we are, they are).'
    ],
    detailedContent: `Simple Future Tense

Used for actions that will happen later.
Form: will + base verb (without to). No change for person.

Examples:
- I will plant maize next week.
- She will sell vegetables at the market.
- The rains will come soon.
- We will finish weeding tomorrow.

Alternative: "going to" – I am going to plant maize next week.

Subject‑Verb Agreement

The verb must match the subject in number (singular or plural).

Singular subjects (he, she, it, the boy, the teacher):
- He runs fast.
- The teacher explains the lesson.
- Each student has a book.

Plural subjects (they, we, the boys, the teachers):
- They run fast.
- The teachers explain the lesson.
- All students have books.

Irregular "to be":
- I am, you are, he/she/it is, we are, they are.
- Past: I was, you were, he was, we were.

Collective nouns (team, family, government) can be singular or plural depending on meaning – usually singular in British English: The team is playing well.

Malawi Example: "The farmer (singular) uses fertiliser. The farmers (plural) use fertiliser."`,
    summary: 'Future tense: will + verb. Subject‑verb agreement: singular subject → singular verb (adds -s); plural subject → plural verb.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Next Season Plan', description: 'I will plant maize and groundnuts (future).' },
      { title: 'Agreement', description: 'The child plays (singular); the children play (plural).' }
    ],
    practiceQuestions: [
      { question: 'Fill in: "They ___ (to go) to the market tomorrow."', answer: 'will go', hint: 'Future.' },
      { question: 'Correct: "The boy with his friends walk to school."', answer: 'The boy with his friends walks to school (subject is boy, singular).', hint: 'Ignore "with his friends".' }
    ]
  },

  // Reading – Fact vs Opinion (1 lesson)
  {
    subject: 'English',
    form: 'Form 2',
    topic: 'Reading: Fact and Opinion',
    lessonNumber: 1,
    lessonTitle: 'Distinguishing Fact from Opinion',
    lessonId: 'english-f2-reading-fact-opinion-1',
    order: 10,
    learningObjectives: [
      'Define fact and opinion and give examples',
      'Identify facts and opinions in written texts'
    ],
    introduction: 'Not everything you read is true – you must decide if it is a FACT (can be proven) or OPINION (someone’s belief). Today we learn to tell the difference.',
    keyPoints: [
      'Fact: statement that can be proven true or false (data, observation, documents).',
      'Opinion: statement that expresses belief, feeling, judgement. Cannot be proven.',
      'Signal words for opinion: believe, think, feel, should, best, worst, beautiful, ugly, probably, maybe.',
      'Facts often include numbers, dates, measurements.'
    ],
    detailedContent: `What is a Fact?

A fact is something known to be true. It can be verified with evidence.

Examples:
- Malawi became independent in 1964.
- Lake Malawi is the third largest lake in Africa.
- Maize is a staple food in Malawi.
- The sun rises in the east.

What is an Opinion?

An opinion is a belief or judgement. It cannot be proven.

Examples:
- Lake Malawi is the most beautiful lake in Africa.
- Maize tastes better than rice.
- Everyone should learn to speak Chichewa.
- The new school building is ugly.

Why is it important to distinguish?
- In news, separate facts from reporter’s bias.
- In advertising, recognise opinions disguised as facts.
- In discussions, facts are not debatable; opinions are.

Signal Words for Opinions
believe, think, feel, consider, should, ought, best, worst, greatest, wonderful, terrible, probably, maybe.

Practice: Read the following sentences and say Fact or Opinion.
1. "The capital city of Malawi is Lilongwe." (Fact)
2. "Lilongwe is a very clean city." (Opinion)
3. "Over 15 million people live in Malawi." (Fact – can be checked)
4. "Every child should have a bicycle." (Opinion)`,
    summary: 'Facts can be proven true. Opinions are personal beliefs. Signal words (believe, think, best) often indicate opinions. Distinguish to think critically.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Weather Report', description: '"Temperature 28°C" (fact) vs "It is a very hot day" (opinion).' },
      { title: 'Football Match', description: '"The Flames won 1‑0" (fact) vs "They played brilliantly" (opinion).' }
    ],
    practiceQuestions: [
      { question: 'Is "Bananas are the best fruit" a fact or opinion?', answer: 'Opinion', hint: '"best" shows judgement.' },
      { question: 'Give two signal words for opinion.', answer: 'believe, think, should, best, worst', hint: 'Subjective.' }
    ]
  },

  // Writing – Factual description (1 lesson)
  {
    subject: 'English',
    form: 'Form 2',
    topic: 'Writing: Factual Description',
    lessonNumber: 1,
    lessonTitle: 'Writing an Objective Factual Description',
    lessonId: 'english-f2-writing-factual-1',
    order: 11,
    learningObjectives: [
      'Plan a factual description of a place, process, or object',
      'Use objective language (no personal opinions) and organise logically'
    ],
    introduction: 'A factual description explains something objectively – without opinions or emotions. Examples: how to prepare a garden, parts of a bicycle, layout of a school. Today we learn to write one.',
    keyPoints: [
      'Factual description: uses only facts, no personal feelings.',
      'Use present tense for general descriptions, past for historical.',
      'Organise by space order, chronological order, or function.',
      'Avoid judgemental adjectives (beautiful, ugly, wonderful). Use neutral adjectives (red, wooden, 3 metres tall).',
      'Include measurable details: size, colour, material, steps.'
    ],
    detailedContent: `What is a Factual Description?

A factual description tells what something is like using objective information. It is used in science reports, textbooks, leaflets.

Do NOT include:
- Opinions ("it is beautiful")
- Emotions ("I love it")
- Unverifiable comparisons ("it is the best")

DO include:
- Measurements (length, height, weight)
- Colour, shape, material
- Functions (what it does)
- Steps (if a process)

Example (Opinionated): "The market is a fantastic place with wonderful smells and friendly people."

Example (Factual): "The market has fifty stalls. It sells vegetables, fish, cloth, and household items. The market opens at 6 am and closes at 6 pm every day except Sunday."

Organisation

- For a place: space order (from entrance to back, left to right).
- For a process: chronological order (step 1, 2, 3).
- For an object: describe parts and functions.

Example: Factual description of a bicycle
"A bicycle has two wheels, a frame, handlebars, a saddle, pedals, and a chain. The front wheel is used for steering. The pedals turn the chain, which turns the rear wheel to move the bicycle forward. Bicycles are often made of steel or aluminium. They have brakes on the handlebars to slow down."

Now write a factual description of a school classroom, a maize granary (nkhokwe), or a traditional fishing boat (bwato) on Lake Malawi. Use neutral language and logical order.`,
    summary: 'Factual description uses objective facts, not opinions. Include measurements, colours, functions, steps. Organise by space, time, or purpose. Avoid judgemental adjectives.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'A Village Well', description: 'Describe its depth, structure, how water is drawn, materials used.' },
      { title: 'Making Nsima', description: 'List steps: boil water, add maize flour, stir, cook until firm.' }
    ],
    practiceQuestions: [
      { question: 'What type of language should you avoid in a factual description?', answer: 'Opinions and emotions (beautiful, wonderful, I think)', hint: 'Stay objective.' },
      { question: 'What two ways can you organise a factual description?', answer: 'Space order or chronological order', hint: 'Location or time.' }
    ]
  },

  // Literature – Literary devices (simile, metaphor, personification) (1 lesson)
  {
    subject: 'English',
    form: 'Form 2',
    topic: 'Literature: Literary Devices',
    lessonNumber: 1,
    lessonTitle: 'Simile, Metaphor, and Personification',
    lessonId: 'english-f2-literature-devices-1',
    order: 12,
    learningObjectives: [
      'Define simile, metaphor, and personification',
      'Identify these devices in poems, songs, and stories'
    ],
    introduction: 'Have you ever said, "He runs like a cheetah" or "Time is money"? Those are SIMILES and METAPHORS. These devices make language vivid. Today we learn three powerful literary devices.',
    keyPoints: [
      'Simile: compares two things using "like" or "as" (e.g., "as brave as a lion", "runs like the wind").',
      'Metaphor: compares by saying one thing is the other (e.g., "He is a lion in battle", "The world is a stage").',
      'Personification: gives human qualities to non‑human things (e.g., "The wind whispered", "The sun smiled").',
      'These devices create imagery – mental pictures – and add emotion.'
    ],
    detailedContent: `Simile

A simile makes a comparison using the words "like" or "as". It says one thing is similar to another.

Examples:
- "Her smile is like sunshine."
- "He fought like a lion."
- "The nsima was as soft as a pillow."

Metaphor

A metaphor also compares two things, but it says one thing IS the other (without "like" or "as"). It is more direct.

Examples:
- "The road was a ribbon of moonlight."
- "He is a snake." (meaning treacherous)
- "Her heart is stone." (unemotional)

Personification

Personification gives human traits (actions, emotions, speech) to animals, objects, or ideas.

Examples:
- "The wind whispered through the trees."
- "The angry storm pounded the village."
- "Time flies when you are having fun."

Identifying Devices

Read this short poem:
"The moon is a silver coin (metaphor). It smiles down on the sleeping village (personification). The stars twinkle like tiny diamonds (simile)."

In Malawi, traditional songs often use personification: "The river dances, the mountain sings." These devices make language beautiful and memorable.

Now write three sentences: one with a simile, one with a metaphor, one with personification. Use a village, lake, or farm theme.`,
    summary: 'Simile uses like/as to compare; metaphor says one thing is another; personification gives human qualities to non‑human things. They create imagery and emotion.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Lake Malawi', description: 'Simile: "The lake is as blue as the sky." Metaphor: "The lake is a giant’s mirror." Personification: "The waves dance to the shore."' },
      { title: 'Harvest Time', description: 'Simile: "The maize stalks stand like soldiers." Personification: "The land rejoices when the rains come."' }
    ],
    practiceQuestions: [
      { question: 'What is the difference between a simile and a metaphor?', answer: 'Simile uses "like" or "as"; metaphor says one thing is another.', hint: 'Direct vs indirect.' },
      { question: 'Identify the device: "The old car coughed and wheezed."', answer: 'Personification', hint: 'Gives car human actions.' }
    ]
  },

  // Listening – Identifying major points (1 lesson)
  {
    subject: 'English',
    form: 'Form 2',
    topic: 'Listening for Main Ideas',
    lessonNumber: 1,
    lessonTitle: 'Distinguishing Major and Minor Details',
    lessonId: 'english-f2-listening-main-ideas-1',
    order: 13,
    learningObjectives: [
      'Listen to identify the central idea, major supporting points, and minor details',
      'Take notes using keywords while listening'
    ],
    introduction: 'When you listen, not all information is equally important. The central idea is the main message, major points support it, and minor details fill out. Today we learn to listen and take notes efficiently.',
    keyPoints: [
      'Central idea: the main message of the whole text (one sentence).',
      'Major supporting points: key arguments or events that develop the central idea.',
      'Minor details: examples, explanations, extra information that support major points.',
      'While listening, write keywords and phrases – not full sentences.',
      'Listen for signal words: first, second, most important, for example, in conclusion.'
    ],
    detailedContent: `Listening for Structure

Every good speech or article has:
- Introduction: states the central idea.
- Body: major points with supporting details.
- Conclusion: restates the central idea.

How to Take Notes

Do not write full sentences. Use abbreviations and symbols.

Example central idea: "Rainwater harvesting can solve water shortages in our village."

Major points:
- Collecting rain from roofs
- Storing in tanks
- Using for irrigation

Minor details:
- Roof gutters cost about 30,000 MK
- Tanks can be made from concrete or plastic
- Vegetables need water every two days

Example Listening Exercise

Listen to this short talk (teacher reads aloud):

"Good morning. Today I want to explain three ways to improve soil fertility on your farm. First, you can use compost. Compost is made from decaying leaves, kitchen waste, and animal manure. Second, you can plant legumes like groundnuts or beans. Legumes add nitrogen to the soil. Third, you can apply manure from cattle or goats. Manure provides nutrients and improves soil structure. By using these three methods, you will increase maize yields."

Now answer:
- Central idea: Ways to improve soil fertility.
- Major points: compost, legumes, manure.
- Minor details: materials for compost, what legumes do, sources of manure.

Practise with a partner: one speaks for one minute about a familiar topic (e.g., how to prepare nsima). The other listens and takes notes, then summarises.`,
    summary: 'Listen for central idea (main message), major points (key arguments), minor details (examples). Take notes with keywords. Distinguishing importance improves comprehension.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Radio News on Agriculture', description: 'Listen to a brief news item on farm input subsidy and identify the main announcement.' },
      { title: 'Teacher’s Lesson Introduction', description: 'Note the objectives and key points at the beginning of a lesson.' }
    ],
    practiceQuestions: [
      { question: 'What is the difference between a major point and a minor detail?', answer: 'Major points are key arguments; minor details give examples or extra information for major points.', hint: 'Importance level.' },
      { question: 'What should you write while taking notes?', answer: 'Keywords and phrases, not full sentences.', hint: 'Be efficient.' }
    ]
  },

  // ======================================================================
  // ENGLISH – FORM 3 (selected – Adverbs/Adjectives, Reading structures, Writing expositions, Literature – short story elements)
  // ======================================================================
  {
    subject: 'English',
    form: 'Form 3',
    topic: 'Grammar: Adverbs and Adjectives',
    lessonNumber: 1,
    lessonTitle: 'Adjectives and Their Order',
    lessonId: 'english-f3-adjectives-1',
    order: 14,
    learningObjectives: [
      'Identify adjectives and use them to describe nouns',
      'Place adjectives in the correct order before a noun (opinion, size, age, shape, colour, origin, material, purpose)'
    ],
    introduction: 'Adjectives describe nouns – they tell us more about a person, place, or thing. But when you use several adjectives, they must go in a certain order. Today we learn that order.',
    keyPoints: [
      'Adjective: modifies a noun (big house, happy child).',
      'Order of adjectives: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose.',
      'Example: a beautiful small old round black Malawian wooden cooking pot.',
      'Usually use only two or three adjectives in a sentence.'
    ],
    detailedContent: `What are Adjectives?

Adjectives describe nouns. They answer: What kind? Which one? How many?

Examples: green mango, three goats, interesting story.

Place adjective before noun: "a tall boy" (not "a boy tall").

Order of Adjectives

When you use more than one adjective, follow this sequence:

1. Opinion (lovely, ugly, nice)
2. Size (big, small, huge)
3. Age (old, new, young)
4. Shape (round, square, thin)
5. Colour (red, blue, black)
6. Origin (Malawian, Chinese, African)
7. Material (wooden, plastic, iron)
8. Purpose (cooking, sleeping, farming)

Examples:
- A beautiful (opinion) large (size) old (age) round (shape) black (colour) Malawian (origin) wooden (material) cooking (purpose) pot.
- A lovely (opinion) small (size) new (age) yellow (colour) plastic (material) container.

In practice, we rarely use so many. Two or three is enough.

Malawi Examples:
- fertile soil, heavy rain, local chicken, fresh maize.

Now write five sentences using two or three adjectives in the correct order.`,
    summary: 'Adjectives describe nouns. Order: opinion, size, age, shape, colour, origin, material, purpose. Use two or three at most.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Market Scene', description: 'fresh red tomatoes, large green cabbages, friendly local vendors.' },
      { title: 'Travel by Minibus', description: 'crowded noisy minibus, winding dusty road.' }
    ],
    practiceQuestions: [
      { question: 'Correct the order: "a wooden beautiful small table."', answer: 'a beautiful small wooden table', hint: 'Opinion, size, material.' },
      { question: 'What type of adjective is "Malawian"?', answer: 'Origin', hint: 'Where from.' }
    ]
  },
  {
    subject: 'English',
    form: 'Form 3',
    topic: 'Grammar: Adverbs and Adjectives',
    lessonNumber: 2,
    lessonTitle: 'Adverbs: Types and Usage',
    lessonId: 'english-f3-adverbs-1',
    order: 15,
    learningObjectives: [
      'Define adverbs and identify types: manner, time, place, frequency, degree',
      'Use adverbs to modify verbs, adjectives, and other adverbs'
    ],
    introduction: 'Adverbs answer How? When? Where? How often? How much? They modify verbs, adjectives, or other adverbs. Today we learn the types and how to use them.',
    keyPoints: [
      'Adverb of manner: how (quickly, carefully, happily).',
      'Adverb of time: when (yesterday, soon, now).',
      'Adverb of place: where (there, everywhere, outside).',
      'Adverb of frequency: how often (always, often, never).',
      'Adverb of degree: how much (very, quite, too, almost).'
    ],
    detailedContent: `What is an Adverb?

An adverb modifies a verb, an adjective, or another adverb. Often ends in -ly.

Types

1. Manner (how): She ran quickly. He spoke softly.
2. Time (when): He arrived yesterday. We will start soon.
3. Place (where): Put it there. She looked everywhere.
4. Frequency (how often): They often visit. I always wake early.
5. Degree (how much): The water is very hot. It is too cold. He is almost ready.

Using Adverbs

- To modify a verb: The farmer carefully plants the seeds.
- To modify an adjective (very clever): She is extremely smart.
- To modify another adverb (very quickly): He drives very slowly.

Comparative and Superlative of Adverbs

- Most adverbs: use more/most (quickly → more quickly → most quickly).
- Some one‑syllable: fast → faster → fastest.
- Irregular: well → better → best; badly → worse → worst.

Examples of adverbs in sentences:
- The students listened attentively (manner).
- The market opens early (time).
- The children played outside (place).
- He always arrives on time (frequency).
- The nsima is extremely hot (degree).`,
    summary: 'Adverbs modify verbs, adjectives, other adverbs. Types: manner, time, place, frequency, degree. Many end in -ly. Comparative: more/most (for longer adverbs).',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Market Scene', description: 'The women laugh loudly (manner). They sell quickly (manner).' },
      { title: 'Travel by Minibus', description: 'The driver drives carefully (manner). Passengers arrive safely (manner).' }
    ],
    practiceQuestions: [
      { question: 'Correct the sentence: "She danced beautiful."', answer: 'She danced beautifully.', hint: 'Adverb needed.' },
      { question: 'Identify the adverb type: "We will meet tomorrow."', answer: 'Time', hint: 'When.' }
    ]
  },

  // Reading – Text structure (comparison, contrast, enumeration)
  {
    subject: 'English',
    form: 'Form 3',
    topic: 'Reading: Text Structure',
    lessonNumber: 1,
    lessonTitle: 'Comparison, Contrast, and Enumeration',
    lessonId: 'english-f3-reading-structure-1',
    order: 16,
    learningObjectives: [
      'Identify comparison (similarities) and contrast (differences) structures using signal words',
      'Recognise enumeration (listing) of points'
    ],
    introduction: 'Writers organise ideas in different ways: sometimes they compare, sometimes they contrast, sometimes they list points. Recognising the structure helps you understand and remember the content. Today we learn three common structures.',
    keyPoints: [
      'Comparison (similarities): shows how things are alike. Signal words: similarly, likewise, both, also, in the same way.',
      'Contrast (differences): shows how things are different. Signal words: however, but, on the other hand, whereas, unlike, in contrast.',
      'Enumeration (listing): presents ideas in a list or sequence. Signal words: first, second, third, next, then, finally, also, another.'
    ],
    detailedContent: `Comparison Structure

When a writer compares two things, they explain their similarities.

Example paragraph (Comparison):
"Traditional maize farming and conservation agriculture have some similarities. Both methods require land preparation before planting. Similarly, both need weeding to remove unwanted plants. Also, both can produce good yields if managed well."

Signal words: both, similarly, also, likewise.

Contrast Structure

When a writer contrasts, they explain differences.

Example paragraph (Contrast):
"Maize farming in the lowlands differs from farming in the highlands. In the lowlands, soils are sandy and drain quickly. On the other hand, highland soils are clayey and retain water. Also, lowland farmers may face more pests, whereas highland farmers struggle with lower temperatures."

Signal words: on the other hand, whereas, however, unlike.

Enumeration Structure

When a writer lists points, they use numbers or sequence words.

Example paragraph (Enumeration):
"There are three benefits of using compost. First, compost adds nutrients to the soil. Second, it improves soil structure, allowing roots to grow easily. Third, compost reduces the need for expensive chemical fertilisers."

Signal words: first, second, third, next, then, finally, another.

Practice: Read a short text from a newspaper or textbook. Identify the structure and circle signal words.`,
    summary: 'Comparison: similarities (both, similarly). Contrast: differences (however, whereas). Enumeration: listing (first, second, third). Recognising structure aids comprehension.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Comparing MH30 and MH37 maize', description: 'Both are hybrids; both need fertiliser; similar yield. (Comparison)' },
      { title: 'Flames vs Eagles', description: 'The Flames attacked early; the Eagles defended strong – however, the Flames scored first. (Contrast)' }
    ],
    practiceQuestions: [
      { question: 'What signal words would you look for in a contrast paragraph?', answer: 'However, but, on the other hand, whereas, unlike, in contrast', hint: 'Opposite.' },
      { question: 'A paragraph begins with "First..." then "Second...". What structure is it?', answer: 'Enumeration (listing)', hint: 'Sequence numbers.' }
    ]
  },

  // Writing – Expositions and arguments (split into 2 lessons)
  {
    subject: 'English',
    form: 'Form 3',
    topic: 'Writing: Expositions and Arguments',
    lessonNumber: 1,
    lessonTitle: 'Structure of an Exposition',
    lessonId: 'english-f3-exposition-1',
    order: 17,
    learningObjectives: [
      'Define an exposition (explaining an idea)',
      'Write a short exposition with introduction, body (points + evidence), conclusion'
    ],
    introduction: 'When you explain why something is true, you write an EXPOSITION. It has an introduction, a body with points and evidence, and a conclusion. Today we learn this structure.',
    keyPoints: [
      'Exposition: explains a topic or idea without necessarily persuading; uses facts.',
      'Structure: Introduction (state your position/topic), Body (each paragraph one main point + evidence), Conclusion (restate and summarise).',
      'Use connectives: first, second, also, however, therefore, in conclusion.'
    ],
    detailedContent: `Structure of an Exposition

Introduction (paragraph 1)
- Hook (interesting first sentence).
- Background (brief context).
- Thesis statement (your main idea).

Body (2‑4 paragraphs)
- Each paragraph has a topic sentence (one main point).
- Supporting sentences: evidence, examples, reasons.
- Use connectives to link ideas.

Conclusion (last paragraph)
- Restate thesis in different words.
- Summarise main points.
- End with a strong final sentence.

Connectives
- Adding points: first, second, also, in addition, furthermore.
- Contrast: however, on the other hand, although.
- Cause/effect: therefore, consequently, as a result.
- Conclusion: in conclusion, to sum up, finally.

Example Exposition: "Why Conservation Agriculture is Beneficial"

Introduction: Conservation agriculture (CA) is a farming method that reduces soil tillage and maintains ground cover. CA is beneficial for Malawian smallholder farmers because it saves labour, protects soil, and increases yields.

Body paragraph 1 (labour): First, CA reduces labour. Instead of ploughing many times, farmers only make planting holes. This saves time and energy.

Body paragraph 2 (soil): Second, CA protects soil. Leaving crop residues as mulch prevents erosion and keeps moisture.

Body paragraph 3 (yields): Third, CA increases yields. Research from Chitedze Research Station shows that maize yields under CA are 20‑30% higher after a few years.

Conclusion: In conclusion, conservation agriculture offers labour savings, soil protection, and higher yields. Malawian farmers who adopt CA can improve their food security.

Now write an exposition on "The Importance of Breakfast" or "Why We Should Plant Trees". Follow the structure.`,
    summary: 'Exposition explains an idea. Structure: Introduction (thesis), Body (points + evidence), Conclusion (restate + summarise). Use connectives.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Benefits of Crop Rotation', description: 'Exposition explaining how rotating maize with groundnuts improves soil.' },
      { title: 'Importance of Hand Washing', description: 'Exposition for health talk.' }
    ],
    practiceQuestions: [
      { question: 'What are the three main parts of an exposition?', answer: 'Introduction, body, conclusion', hint: 'Classic essay.' },
      { question: 'Give a sentence starter for a conclusion.', answer: 'In conclusion, To sum up, Finally', hint: 'Closing.' }
    ]
  },
  {
    subject: 'English',
    form: 'Form 3',
    topic: 'Writing: Expositions and Arguments',
    lessonNumber: 2,
    lessonTitle: 'Writing an Argument (Persuasive)',
    lessonId: 'english-f3-argument-1',
    order: 18,
    learningObjectives: [
      'Distinguish an argument from an exposition',
      'Write a persuasive argument with a clear point of view and call to action'
    ],
    introduction: 'An argument aims to persuade the reader to take a position or action. It has the same basic structure as an exposition but includes a call to action. Today we learn to write persuasively.',
    keyPoints: [
      'Argument: tries to convince the reader to agree or act.',
      'Structure: Introduction (state your position), Body (points with evidence), Conclusion (restate position + call to action).',
      'Use persuasive language: must, should, important, essential, imagine, think of the children.',
      'Provide evidence: facts, statistics, examples from reliable sources.'
    ],
    detailedContent: `Exposition vs Argument

- Exposition explains; argument persuades. Both explain, but argument aims to convince.
- An argument ends with a call to action (what the reader should do).

Structure (same as exposition but with call to action)

Introduction: state your position clearly. Example: "Plastic bags should be banned in our community."

Body paragraphs: each with a reason and evidence. Example: "First, plastic bags clog drains and cause flooding. In Lilongwe, drainage problems increased after plastic bags piled up."

Conclusion: restate position and call to action. Example: "Therefore, I urge local leaders to ban single‑use plastics. Let us be the change."

Example Argument: "Why Girls Should Stay in School"

Introduction: Educating girls is one of the best investments a community can make. I strongly believe that every girl should complete at least secondary school.

Body 1 (economic): First, educated women earn higher incomes. According to the World Bank, each additional year of schooling increases a girl’s future earnings by 10‑15%.

Body 2 (health): Second, educated women have healthier families. They marry later, have fewer children, and know about nutrition and immunisation.

Body 3 (community): Third, educated girls become leaders. They participate in local councils, start businesses, and inspire others.

Conclusion: In conclusion, educating girls benefits everyone – families, communities, and the nation. I call on parents, teachers, and community leaders to keep every girl in school.

Now write an argument on "Why Farmers Should Use Organic Manure Instead of Chemical Fertilisers" or "Why Everyone Should Plant at Least One Tree This Year". Include a call to action.`,
    summary: 'Argument persuades; ends with call to action. Structure: intro (position), body (reasons + evidence), conclusion (restate + call to action). Use persuasive language.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Hand Washing at School', description: 'Persuade students to wash hands before meals.' },
      { title: 'Support Local Farmers', description: 'Persuade people to buy from nearby markets.' }
    ],
    practiceQuestions: [
      { question: 'What is the main difference between an exposition and an argument?', answer: 'Argument persuades and includes a call to action; exposition explains.', hint: 'Purpose.' },
      { question: 'What sentence would you add at the end of an argument?', answer: 'Call to action (e.g., "So please join us in this campaign.")', hint: 'Tell reader what to do.' }
    ]
  },

  // Literature – Short story elements (1 lesson)
  {
    subject: 'English',
    form: 'Form 3',
    topic: 'Literature: Short Story',
    lessonNumber: 1,
    lessonTitle: 'Plot, Character, Setting, Theme',
    lessonId: 'english-f3-literature-short-story-1',
    order: 19,
    learningObjectives: [
      'Identify the four elements of a short story: plot, character, setting, theme',
      'Describe the stages of plot (exposition, rising action, climax, falling action, resolution)'
    ],
    introduction: 'A short story is a window into a life. It has key ingredients: PLOT (what happens), CHARACTER (who it happens to), SETTING (where and when), and THEME (deep meaning). Today we learn these elements.',
    keyPoints: [
      'Plot: sequence of events – exposition, rising action, climax, falling action, resolution.',
      'Character: people or animals; protagonist (main), antagonist (opponent).',
      'Setting: time and place; can influence characters and events.',
      'Theme: central message or lesson about life.'
    ],
    detailedContent: `Plot – The Storyline

- Exposition: introduces characters, setting, background.
- Rising action: conflict appears; tension increases.
- Climax: turning point; most exciting moment.
- Falling action: events after climax; tensions ease.
- Resolution: problem solved; story ends.

Example: A boy loses his goat (exposition). He searches everywhere (rising action). He finds the goat trapped in a bush (climax). He frees it and goes home (falling action). He thanks his friend who helped (resolution).

Character

- Protagonist: main character (often changes by end).
- Antagonist: opponent or cause of conflict.
- Flat vs round: flat = few traits; round = complex.

Setting

- Place: village, school, forest.
- Time: day, night, 1990s.
- Weather, social environment (poverty, peace).
Setting creates mood and influences choices.

Theme

The central idea the writer wants to communicate. Not the plot. Examples:
- Hard work leads to success.
- Greed causes suffering.
- Family is more important than money.

To find theme, ask: What does the protagonist learn? What is the author trying to say about life?

Malawi Example: A story about a girl who walks 5 km to school every day because she wants to become a nurse. Plot shows struggles (river crossing, no shoes). Theme: Determination overcomes obstacles.

Now read a short story (e.g., from "An Anthology of Malawian Literature") and identify the four elements.`,
    summary: 'Short stories have plot (events), character (people), setting (time/place), theme (message). Plot: exposition, rising action, climax, falling action, resolution.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'The Boy Who Cried Wolf', description: 'Plot: boy lies, villagers ignore, wolf comes. Theme: honesty is important.' },
      { title: 'A Village Wedding', description: 'Setting: Malawi village during harvest. Characters: bride, groom, elders. Theme: community unity.' }
    ],
    practiceQuestions: [
      { question: 'What is the climax of a story?', answer: 'Turning point, most exciting moment', hint: 'Peak of tension.' },
      { question: 'Explain the difference between plot and theme.', answer: 'Plot is what happens; theme is the message or lesson.', hint: 'Event vs meaning.' }
    ]
  },

  // ======================================================================
  // ENGLISH – FORM 4
  // ======================================================================

  // Listening critically – Bias and attitude (1 lesson)
  {
    subject: 'English',
    form: 'Form 4',
    topic: 'Critical Listening',
    lessonNumber: 1,
    lessonTitle: 'Analysing Bias, Attitude, and Truth',
    lessonId: 'english-f4-listening-bias-1',
    order: 20,
    learningObjectives: [
      'Identify bias and attitude in oral texts',
      'Distinguish between fact, opinion, rumour, speculation, and evidence'
    ],
    introduction: 'Not everything you hear is true or fair. A speaker might exaggerate, leave out facts, or express strong feelings that cloud judgement. Today we learn to listen critically – to detect bias and weigh evidence.',
    keyPoints: [
      'Bias: unfair preference for or against something. Signal words: obviously, everyone knows, clearly.',
      'Attitude: speaker’s emotion (anger, joy, sarcasm, doubt). Tone and word choice reveal attitude.',
      'Fact: verifiable statement. Opinion: personal belief. Rumour: unverified story. Speculation: guess without evidence. Evidence: data supporting a claim.',
      'Critical listening means questioning: Who is speaking? What is their agenda? Is there proof?'
    ],
    detailedContent: `What is Bias?

Bias means leaning towards one side without a fair reason. Biased speaker ignores facts that do not support their view.

Example of biased language: "It is obvious that our candidate is the best. No reasonable person would vote for the other."

How to detect bias:
- Look for extreme words: always, never, impossible, every, none.
- Notice when the speaker attacks a person instead of an argument (ad hominem).
- Check if only one side is presented.

Attitude

Attitude is the speaker's feeling. It can be positive (enthusiastic) or negative (angry, fearful). Sarcasm indicates attitude.

Example: "Oh, wonderful, another tax increase." (sarcasm, not genuine happiness).

Distinguishing Fact, Opinion, Rumour, Speculation, Evidence

| Type | Definition | Example |
|------|------------|---------|
| Fact | Can be proven | "Maize is grown in 80% of Malawian farms." |
| Opinion | Personal belief | "Maize is tastier than rice." |
| Rumour | Unverified information | "I heard the school will close next month." |
| Speculation | Guess based on incomplete info | "Probably the rains will start next week." |
| Evidence | Data or testimony supporting a claim | "According to the Ministry of Agriculture, maize production increased by 10%." |

To evaluate truth, ask: Is there evidence? Who collected it? Is the source reliable? Could there be another explanation?

Malawi Example: Listen to a political speech on the radio. Identify one biased statement and one fact. Compare with what you know. Also, evaluate a rumour about food prices – what evidence would you need?`,
    summary: 'Critical listening detects bias (unfair favouring), attitude (emotion), and distinguishes fact from opinion, rumour, speculation. Evaluate claims by asking for evidence and checking sources.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Political Rally Speech', description: 'Identify biased language ("clearly better", "everyone knows") and fact vs opinion.' },
      { title: 'Neighbourhood Rumour', description: 'Distinguish rumour from evidence: "I heard the borehole is broken" – did anyone check?' }
    ],
    practiceQuestions: [
      { question: 'What is the difference between a fact and a rumour?', answer: 'A fact can be verified; a rumour is unverified and often spreads without evidence.', hint: 'Truth vs hearsay.' },
      { question: 'Give an example of a sentence that shows bias.', answer: '"Everyone knows that this party is the only honest one."', hint: 'Extreme or universal statement.' }
    ]
  },

  // Grammar – Clauses (main and subordinate) (split into 2 lessons)
  {
    subject: 'English',
    form: 'Form 4',
    topic: 'Grammar: Clauses',
    lessonNumber: 1,
    lessonTitle: 'Main Clauses and Subordinate Clauses',
    lessonId: 'english-f4-clauses-1',
    order: 21,
    learningObjectives: [
      'Define a clause (group of words with a subject and verb)',
      'Distinguish between main (independent) clauses and subordinate (dependent) clauses'
    ],
    introduction: 'You have learned simple sentences. Now we build longer, more interesting sentences using CLAUSES. A clause has a subject and a verb. A main clause can stand alone; a subordinate clause cannot. Today we learn the difference.',
    keyPoints: [
      'Main clause (independent): can stand alone as a sentence. Example: "The farmer planted maize."',
      'Subordinate clause (dependent): cannot stand alone; needs a main clause. Example: "because the rains had come" (not a full sentence).',
      'Subordinate clauses start with subordinating conjunctions: because, if, when, although, while, since, unless.'
    ],
    detailedContent: `What is a Clause?

A clause contains a subject and a verb.

Main Clause (Independent)

Expresses a complete thought. Can stand alone.

Examples:
- "The sun set."
- "Children were playing outside."

Subordinate Clause (Dependent)

Has a subject and verb but does not express a complete thought. Depends on a main clause.

Examples:
- "when the sun set" (incomplete – when the sun set... what?)
Complete sentence: "The children went home when the sun set."

Common subordinating conjunctions:
after, although, as, because, before, if, since, so that, than, though, unless, until, when, where, while.

Example complex sentence:
"Although it was late (subordinate clause), the children stayed outside (main clause)."

Exercise: Identify the main clause and subordinate clause in:
1. "Because the ground was wet, the farmer waited."
2. "She smiled when she saw her friend."`,
    summary: 'Main clause = complete sentence. Subordinate clause = incomplete, needs a main clause. Subordinate clauses begin with words like because, when, although, if.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Time Clause', description: 'When the rains begin, farmers prepare their fields.' },
      { title: 'Reason Clause', description: 'Because the maize was dry, we harvested early.' }
    ],
    practiceQuestions: [
      { question: 'Identify the subordinate clause: "She smiled because she was happy."', answer: 'because she was happy', hint: 'Begins with because.' },
      { question: 'What is the main clause in: "If you work hard, you will succeed."', answer: 'you will succeed', hint: 'Can stand alone.' }
    ]
  },
  {
    subject: 'English',
    form: 'Form 4',
    topic: 'Grammar: Clauses',
    lessonNumber: 2,
    lessonTitle: 'Adverb, Adjective, and Noun Clauses',
    lessonId: 'english-f4-clauses-2',
    order: 22,
    learningObjectives: [
      'Identify adverb clauses (modify verbs), adjective clauses (modify nouns), and noun clauses (act as nouns)',
      'Use these clauses to write complex sentences'
    ],
    introduction: 'Subordinate clauses have different roles: some tell when/why (adverb), some describe a noun (adjective), some act as a noun (noun). Today we learn the three types.',
    keyPoints: [
      'Adverb clause: modifies a verb, answers when, where, why, how. Begins with because, if, when, although, while, since.',
      'Adjective clause: modifies a noun, begins with relative pronouns: who, whom, which, whose, that.',
      'Noun clause: acts as a noun (subject, object, complement). Begins with that, what, whatever, whoever, whether.'
    ],
    detailedContent: `Adverb Clause

Functions like an adverb: tells time, place, reason, condition, concession.

Examples:
- "Because the ground was wet, the farmer waited." (reason)
- "When the sun set, we returned home." (time)
- "If you work hard, you will succeed." (condition)

Adjective Clause (Relative Clause)

Modifies a noun. Begins with relative pronoun: who (people), which (things), that (people or things), whose (possession), where (place), when (time).

Examples:
- "The woman who sells vegetables is my aunt."
- "The bicycle that my father bought is blue."
- "The house where they live is near the school."

Noun Clause

Acts as a noun – can be subject, object, or complement.

Examples (as object): "I know that you are right." (the clause is the object of know)
(as subject): "What he said surprised everyone."
(as complement): "The truth is that we were late."

Complex Sentences

A complex sentence contains one main clause and at least one subordinate clause.

Example: "Although it was late (adverb clause), the children (main clause) who wanted to play (adjective clause) stayed outside until their mother called (adverb clause)."

Now write five complex sentences using each type of subordinate clause at least once. Use topics from Malawi: farming, school, family, or village life.`,
    summary: 'Adverb clauses modify verbs (time, reason, condition). Adjective clauses modify nouns (who, which, that). Noun clauses act as nouns (subject/object). Combine to write complex sentences.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Adverb Clause', description: 'When the rains begin, farmers prepare their fields.' },
      { title: 'Adjective Clause', description: 'The bicycle that my father bought is blue.' },
      { title: 'Noun Clause', description: 'We believe that education changes lives.' }
    ],
    practiceQuestions: [
      { question: 'Identify the subordinate clause type: "The boy who wears a red shirt is my brother."', answer: 'Adjective clause', hint: 'Modifies boy.' },
      { question: 'What type of clause is "that you are right" in "I know that you are right"?', answer: 'Noun clause', hint: 'Acts as object of know.' }
    ]
  },

  // Reading – Interpreting graphic data (1 lesson)
  {
    subject: 'English',
    form: 'Form 4',
    topic: 'Reading: Interpreting Data',
    lessonNumber: 1,
    lessonTitle: 'Reading Pie Charts, Bar Graphs, and Tables',
    lessonId: 'english-f4-reading-data-1',
    order: 23,
    learningObjectives: [
      'Extract specific data points from pie charts, bar graphs, and tables',
      'Identify trends (increase, decrease, comparison) from graphic data'
    ],
    introduction: 'In exams, newspapers, and reports, you often see data presented as pie charts, bar graphs, or tables. Being able to read these quickly and accurately is an important skill. Today we practise.',
    keyPoints: [
      'Pie chart: shows parts of a whole (percentages or fractions). Each slice represents a category.',
      'Bar graph: compares quantities using bars of different heights. Can show changes over time or compare groups.',
      'Table: organises data in rows and columns for easy reference.',
      'When interpreting, first read the title and labels. Then extract key numbers and identify highest/lowest, trends, or comparisons.'
    ],
    detailedContent: `Understanding Pie Charts

A pie chart is a circle divided into slices. The whole circle represents 100% or total.

Example: Crop area distribution in a village (pie chart)
- Maize: 60%
- Groundnuts: 20%
- Vegetables: 10%
- Other crops: 10%

What can we say? Maize is the most grown crop (60%). Groundnuts are second. Vegetables and other crops are grown equally (10% each).

Reading Bar Graphs

A bar graph uses bars of different heights to compare quantities.

Example: Maize yield (kg per hectare) for three years:
2019: 2000 kg
2020: 1800 kg
2021: 2200 kg

What can we say? Yield decreased from 2019 to 2020, then increased in 2021 to 2200 kg, which is the highest of the three years.

Tables

Tables present data in rows and columns. Look at column headings.

Example: Livestock numbers in a village (table)
| Type | Number |
|------|--------|
| Cattle | 150 |
| Goats | 300 |
| Chickens | 800 |

We can say: Chickens are the most numerous (800), followed by goats (300), then cattle (150).

Now write a short paragraph interpreting a bar graph showing monthly rainfall in Lilongwe or a pie chart of energy sources in Malawi (firewood, charcoal, electricity).`,
    summary: 'Pie charts show parts of a whole; bar graphs compare quantities; tables organise data. Read titles and labels first. Identify highest/lowest, trends, and comparisons.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Pie Chart: Household Energy', description: 'Firewood 70%, charcoal 20%, electricity 5%, other 5%. Interpret poverty.' },
      { title: 'Bar Graph: Literacy by Region', description: 'Compare Northern, Central, Southern regions.' }
    ],
    practiceQuestions: [
      { question: 'If a pie chart has a slice labelled 25%, what fraction does it represent?', answer: 'One quarter (1/4)', hint: 'A pie is 100%.' },
      { question: 'In a bar graph comparing yields, what does a taller bar mean?', answer: 'Higher quantity or value', hint: 'Length indicates magnitude.' }
    ]
  },

  // Writing – Prose interpretation of data (1 lesson)
  {
    subject: 'English',
    form: 'Form 4',
    topic: 'Writing: Data Interpretation',
    lessonNumber: 1,
    lessonTitle: 'Writing a Prose Interpretation of Graphic Data',
    lessonId: 'english-f4-writing-data-1',
    order: 24,
    learningObjectives: [
      'Write a clear paragraph that describes the key features of a chart or graph',
      'Use comparative language (more than, less than, similar to) and trend language (increase, decrease, fluctuate)'
    ],
    introduction: 'You have learned to read pie charts and bar graphs. Now you will learn to write a PROSE INTERPRETATION – a paragraph or short essay that explains what the data means. This is a common task in exams.',
    keyPoints: [
      'Title: indicate the subject of the data.',
      'Introductory sentence: state what the chart/graph/table shows.',
      'Body: describe most important features – highest, lowest, comparisons, trends over time.',
      'Use specific data (numbers) to support statements.',
      'Concluding sentence: summarise the main finding.'
    ],
    detailedContent: `Structure of a Data Interpretation

Paragraph 1 (Introduction):
- State what is being shown.
- Mention the source (if given) and time period.
- Example: "The pie chart below shows the composition of household energy use in rural Malawi."

Paragraph 2 (Analysis of data):
- Identify the largest category, the smallest, any notable equalities.
- For bar graphs over time: describe trends (increased, decreased, fluctuated, remained steady).
- Use comparison words: higher than, lower than, twice as much as, three times, similar to.
- Include specific figures in brackets.

Example sentence: "Firewood is the most common energy source at 75%, which is more than three times the proportion of charcoal (20%)."

Paragraph 3 (Conclusion):
- Summarise the main finding in one sentence.
- Example: "In summary, rural Malawian households rely overwhelmingly on firewood for their energy needs."

Language for Trends

Increase: rose, grew, increased, climbed, went up
Decrease: fell, dropped, decreased, declined, went down
No change: remained stable, stayed constant, levelled off
Fluctuation: fluctuated, varied, went up and down

Comparative Expressions

- X is higher than Y (X = 60%, Y = 40%)
- X is twice as high as Y (X = 60%, Y = 30%)
- X accounts for the largest share at ...%
- The second largest category is ...
- There is a slight difference of X percentage points between A and B.

Avoiding Mistakes

Do NOT simply list every number. Group and summarise.

Weak: "Maize is 60%, groundnuts is 20%, vegetables 10%, other 10%."
Better: "Maize accounts for the majority (60%) of the cultivated area, while groundnuts is the second most important crop at 20%. Vegetables and other crops each cover only 10%."

Now write an interpretation of the following data: Bar graph showing maize production (in metric tonnes) for three districts: Kasungu 2500, Lilongwe 3200, Mchinji 1800 for the year 2022. Write three paragraphs.`,
    summary: 'A prose interpretation describes data in paragraph form. Include an introduction (what the data shows), body (key findings with numbers, comparisons, trends), and conclusion (main summary). Use specific vocabulary for trends and comparisons.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Enrolment by Gender', description: 'Write a paragraph from a table of boys and girls enrolment.' },
      { title: 'Crop Yield Trends', description: 'Interpret a line graph showing maize yields from 2015 to 2025.' }
    ],
    practiceQuestions: [
      { question: 'What three parts should your data interpretation have?', answer: 'Introduction, body (analysis), conclusion', hint: 'Essay structure.' },
      { question: 'What word would you use if data goes up and down without a clear direction?', answer: 'Fluctuated', hint: 'Varied.' }
    ]
  },

  // Literature – Poetry analysis (1 lesson)
  {
    subject: 'English',
    form: 'Form 4',
    topic: 'Literature: Poetry',
    lessonNumber: 1,
    lessonTitle: 'Analysing Persona, Tone, Mood, Theme',
    lessonId: 'english-f4-literature-poetry-1',
    order: 25,
    learningObjectives: [
      'Define persona (speaker) and addressee (who is spoken to) in a poem',
      'Identify tone, mood, and theme in a poem'
    ],
    introduction: 'Poetry uses condensed language, rhythm, and imagery to express feelings and ideas. Today we learn how to analyse a poem by looking at the speaker (persona), the tone, the mood, and the theme.',
    keyPoints: [
      'Persona: the voice or speaker in the poem – not necessarily the poet. Could be a child, an animal, or an object.',
      'Addressee: the person or thing the poem is speaking to (lover, parent, river, reader).',
      'Tone: speaker’s attitude towards the subject (angry, sad, joyful, sarcastic, hopeful).',
      'Mood: the feeling the poem creates in the reader (melancholy, excitement, fear, calm).',
      'Theme: central message about life (e.g., loss, love, injustice, nature, resilience).'
    ],
    detailedContent: `Persona – Who is Speaking?

The persona is a mask the poet puts on. Do not assume the poet is the speaker.

Example: In a poem that says "I am a hungry child", the poet may be an adult imagining a child's voice. The persona is that child.

Addressee – Who is Being Spoken To?

Sometimes the poem directly addresses someone or something. Example: "O you winds", "My love", "Mother".

Tone – What is the Speaker's Attitude?

Conveyed through word choice and imagery. Words like "desolate", "weary", "hopeless" → sad or bleak tone. Words like "dancing", "joyful", "bright" → happy tone.

Mood – How Does the Poem Make the Reader Feel?

Mood is the emotional atmosphere. A funeral poem → somber mood; a victory poem → excited mood.

Theme – What is the Poem About (Deep Meaning)?

Theme is the abstract idea or message. Ask: What insight about life does this poem offer? Examples: "The importance of preserving the environment", "The pain of separation", "The courage to stand alone".

Example Analysis (short original poem)

"Lake Malawi"

I am the ancient lake,
I hold the sun in my arms.
Children laugh on my shores,
But my waters are troubled.

- Persona: the lake itself (speaking in first person)
- Addressee: readers / humanity
- Tone: proud ("I am the ancient lake") but also worried ("my waters are troubled")
- Mood: mixture of awe (beauty of lake) and concern (pollution?)
- Theme: human activity can harm nature; we must protect our natural heritage.

Now choose a short poem from your textbook. Identify the persona, addressee (if any), tone, mood, and theme. Write a short paragraph analysis.`,
    summary: 'Persona = speaker in the poem. Addressee = who is spoken to. Tone = speaker’s attitude. Mood = feeling created for reader. Theme = central message. Analyse poems by asking these questions.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Poem: "The Lake" by Frank Chipasula', description: 'Analyse persona (the lake), mood (calm then turbulent), theme (nature’s power).' },
      { title: 'Traditional Song as Poem', description: 'Analyse a village work song – persona (women pounding maize), tone (rhythmical, determined), mood (energetic).' }
    ],
    practiceQuestions: [
      { question: 'What is the difference between persona and poet?', answer: 'Persona is the speaker in the poem (fictional); poet is the real author.', hint: 'The poet creates a mask.' },
      { question: 'If a poem makes you feel sad, are you describing tone or mood?', answer: 'Mood', hint: 'Mood is reader’s feeling, tone is speaker’s attitude.' }
    ]
  },

  // Literature – Play analysis (1 lesson)
  {
    subject: 'English',
    form: 'Form 4',
    topic: 'Literature: Drama',
    lessonNumber: 1,
    lessonTitle: 'Features of a Play and Types (Tragedy, Comedy, Tragicomedy)',
    lessonId: 'english-f4-literature-play-1',
    order: 26,
    learningObjectives: [
      'List the features of a play (dialogue, stage directions, acts, scenes)',
      'Distinguish between tragedy, comedy, and tragicomedy'
    ],
    introduction: 'A play is written to be performed. It uses dialogue, action, and stage directions to tell a story. Today we learn the features of plays and the main types: tragedy (sad ending), comedy (happy ending), and tragicomedy (mixed).',
    keyPoints: [
      'Play: literary work intended for performance by actors on stage.',
      'Dialogue: conversation between characters.',
      'Stage directions: instructions in brackets (or italics) about setting, movement, tone.',
      'Acts: major divisions; scenes: subdivisions of acts.',
      'Tragedy: serious drama with unhappy ending (e.g., Macbeth).',
      'Comedy: light‑hearted with happy ending, often humorous (e.g., The Importance of Being Earnest).',
      'Tragicomedy: combines serious and comic elements, but ends happily (e.g., The Winter’s Tale).'
    ],
    detailedContent: `Features of a Play

Unlike a novel, a play is meant to be seen and heard. The script includes:
- Dialogue: what characters say.
- Stage directions: tell actors where to stand, how to speak (e.g., angrily, whisper), and what the set looks like.
- Cast list: lists all characters.
- Acts and scenes: break the story into parts.

Example of stage directions:
[Enter CHIFUNDO, looking sad. He sits on a log.]

CHIFUNDO: (sighing) The rains have failed again.

Types of Plays

1. Tragedy
- Protagonist (main character) is usually noble or high status.
- Has a fatal flaw (e.g., pride, jealousy, ambition).
- Ends in disaster (death, ruin).
- Purpose: to evoke pity and fear (catharsis).
- Examples: Shakespeare’s Hamlet, Macbeth.

2. Comedy
- Light‑hearted story.
- Conflicts resolved happily.
- Often includes mistaken identity, funny misunderstandings, love stories.
- Ends typically with marriage or celebration.
- Examples: Shakespeare’s A Midsummer Night’s Dream.

3. Tragicomedy
- Combines serious and comic elements.
- Has dark moments but a happy ending.
- Characters may face danger but survive.
- Example: Shakespeare’s The Winter’s Tale.

Analysing a Play Scene

When you read a scene, answer:
- Which characters are present? What do they want?
- What is the conflict?
- How does the dialogue reveal character?
- What is the theme?

Malawi Example: Many schools perform plays based on local stories. For instance, a play about a farmer who loses his land to a greedy businessman (tragedy), or a comedy about a lazy husband who learns to work.

Now read a short scene from any play. Identify the features: dialogue, stage directions. Decide whether it is tragedy, comedy, or tragicomedy based on the ending and tone. Write a brief analysis.`,
    summary: 'Plays use dialogue, stage directions, acts, scenes. Tragedy: unhappy ending, serious. Comedy: happy ending, humour. Tragicomedy: mixed but ends happily. Analyse by looking at character, conflict, resolution.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'School Drama', description: 'A play about a girl who fights to stay in school – tragicomic if she overcomes obstacles.' },
      { title: 'The Patriotic Act (local play)', description: 'Identify comic and tragic elements.' }
    ],
    practiceQuestions: [
      { question: 'What is the purpose of stage directions?', answer: 'To tell actors how to move, speak, and to describe the setting.', hint: 'Instructions for performance.' },
      { question: 'A play ends with the main character dying because of his own mistake. What type is it?', answer: 'Tragedy', hint: 'Unhappy ending, downfall.' }
    ]
  },

 

  // Topic: Number Systems (split into 2 lessons)
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Number Systems',
    lessonNumber: 1,
    lessonTitle: 'Natural Numbers, Whole Numbers, and Place Value',
    lessonId: 'maths-f1-number-systems-1',
    order: 1,
    learningObjectives: [
      'Identify natural numbers and whole numbers',
      'Understand and apply place value up to millions'
    ],
    introduction: 'Good day, young mathematician! Have you ever counted money at the market, counted learners in your class, or told your age? You were using natural numbers! Today we explore natural numbers and whole numbers – the building blocks of all mathematics.',
    keyPoints: [
      'Natural numbers are counting numbers: 1, 2, 3, 4, 5, ...',
      'Whole numbers include zero: 0, 1, 2, 3, 4, 5, ...',
      'Place value: ones, tens, hundreds, thousands, millions, billions.',
      'In Malawi we use numbers to count kwacha, tambala, people, livestock and crops.'
    ],
    detailedContent: `Let me explain natural numbers using examples from Malawi.

NATURAL NUMBERS are the numbers you use when you count. When you say "I have 5 mangoes" or "There are 40 learners in my class" – these are natural numbers. They start from 1 and go upwards.

WHOLE NUMBERS are just like natural numbers, but they also include ZERO. Zero represents "nothing". If you have no money in your pocket, you have zero kwacha.

PLACE VALUE is very important. In the number 2,345:
- The digit 2 is in the thousands place → value 2000
- The digit 3 is in the hundreds place → value 300
- The digit 4 is in the tens place → value 40
- The digit 5 is in the ones place → value 5

Malawi example: A farmer harvests 1,234 kg of maize. The 1 means 1,000 kg, the 2 means 200 kg, the 3 means 30 kg, the 4 means 4 kg.`,
    summary: 'Natural numbers are counting numbers (1,2,3...). Whole numbers include zero. Place value tells the worth of each digit based on its position.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Market Prices', description: 'A tomato vendor sells 1,2,3,4 tomatoes – natural numbers.' },
      { title: 'Population', description: 'Malawi has about 20 million people – large numbers.' }
    ],
    practiceQuestions: [
      { question: 'What is the place value of 7 in 7,891?', answer: 'Thousands', hint: 'Position.' },
      { question: 'Is 0 a natural number or a whole number?', answer: 'Whole number', hint: 'Natural starts at 1.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Number Systems',
    lessonNumber: 2,
    lessonTitle: 'Reading and Writing Large Numbers (Application)',
    lessonId: 'maths-f1-number-systems-2',
    order: 2,
    learningObjectives: [
      'Read and write numbers correctly up to millions',
      'Apply number concepts to real‑life situations in Malawi'
    ],
    introduction: 'Now that you know place value, let’s practice reading and writing large numbers. This skill helps you understand prices, populations, and harvest quantities.',
    keyPoints: [
      'To read a number, group digits in threes from the right (thousands, millions).',
      'Write numbers in words carefully (e.g., 2500 = two thousand five hundred).',
      'Use number sense in shopping, farming, and budgeting.'
    ],
    detailedContent: `Reading Large Numbers

Group from right: 3,456,789
- Millions group: three million
- Thousands group: four hundred fifty-six thousand
- Units: seven hundred eighty-nine
Together: three million, four hundred fifty-six thousand, seven hundred eighty-nine.

Writing numbers: 5,000 kwacha = five thousand kwacha.
1,250 kg = one thousand two hundred fifty kilograms.

Application: A farmer sells 20 bags of maize at 15,000 MK each. Total = 20 × 15,000 = 300,000 MK. You need to read and write that amount correctly for records.`,
    summary: 'Read large numbers by grouping digits. Write numbers in words for clarity. Apply number skills to daily life.',
    estimatedTime: '15 mins',
    malawiExamples: [
      { title: 'Crop Harvest', description: 'A farmer harvests 2,500 kg of maize – place value helps read this number.' },
      { title: 'Market Transactions', description: 'Calculate total cost of multiple items.' }
    ],
    practiceQuestions: [
      { question: 'Write 4,502 in words.', answer: 'Four thousand five hundred two', hint: 'Separate thousands and hundreds.' },
      { question: 'If a chicken costs 3,500 MK, how much for 5 chickens?', answer: '17,500 MK', hint: 'Multiply.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Number Systems',
    lessonNumber: 3,
    lessonTitle: 'Integers and the Number Line',
    lessonId: 'maths-f1-number-systems-3',
    order: 3,
    learningObjectives: [
      'Define integers and represent them on a number line',
      'Identify positive numbers, negative numbers, and zero'
    ],
    introduction: 'So far we have worked with positive numbers. But what about temperatures below zero or debts? They are represented by NEGATIVE numbers. Together with positives and zero, they form INTEGERS. Today we explore the number line.',
    keyPoints: [
      'Integers include positive numbers, negative numbers, and zero: ... -3, -2, -1, 0, 1, 2, 3 ...',
      'On a number line, positive numbers are to the right, negative to the left.',
      'Numbers increase as you move right; decrease as you move left.'
    ],
    detailedContent: `Integers

Integers: all positive numbers, negative numbers, and zero.

Number line: a straight line with zero in the middle. Positive go to the right, negative to the left.

The further right, the larger the number. The further left, the smaller.

Example: -3 is less than -2 because -3 is further left. 0 is greater than any negative number.

Malawi examples: Temperature on Mulanje Mountain can drop below zero – negative integers. Bank balance: if you withdraw more than you have, your balance becomes negative (–800 MK) – an integer.`,
    summary: 'Integers include positive, negative, and zero. Number line: right is larger, left is smaller. Negative numbers represent values below zero like debt or cold temperatures.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Temperatures on Mulanje', description: 'At the peak, temperatures can drop below zero – negative integers.' },
      { title: 'Bank Account', description: 'If you withdraw more than you have, balance becomes negative.' }
    ],
    practiceQuestions: [
      { question: 'Which is greater: -5 or -10?', answer: '-5', hint: 'On a number line, -5 is to the right of -10.' },
      { question: 'If the temperature drops from 5°C to -3°C, how many degrees did it drop?', answer: '8 degrees', hint: 'Count the steps from 5 down to -3.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Number Systems',
    lessonNumber: 4,
    lessonTitle: 'Operations with Integers (Addition and Subtraction)',
    lessonId: 'maths-f1-number-systems-4',
    order: 4,
    learningObjectives: [
      'Add and subtract integers using a number line',
      'Apply integer operations to real‑life problems'
    ],
    introduction: 'Now that you understand integers, let’s learn how to ADD and SUBTRACT them. Using a number line makes it easy.',
    keyPoints: [
      'Adding a positive number moves right on the number line.',
      'Adding a negative number moves left (like subtracting).',
      'Subtracting a positive number moves left.',
      'Subtracting a negative number moves right (like adding).'
    ],
    detailedContent: `Addition of Integers

- Adding a positive: move right. Example: 3 + 4 = 7. Start at 3, move 4 steps right.
- Adding a negative: move left. Example: 5 + (-2) = 3. Start at 5, move 2 steps left (like 5 – 2).

Subtraction of Integers

- Subtracting a positive: move left. Example: 7 – 3 = 4.
- Subtracting a negative: move right. Example: 4 – (-2) = 6. (Because subtracting a negative is like adding a positive.)

Real‑life example: If you owe 3 friends 4 kwacha each, total debt = –12. If each friend forgives your debt (removes the negative), you save 4 per friend.`,
    summary: 'Adding positive moves right; adding negative moves left. Subtracting positive moves left; subtracting negative moves right. Use number line to visualise.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Debt Calculation', description: 'If you borrow 500 kwacha from 3 friends, total debt = -1,500 kwacha.' },
      { title: 'Temperature Change', description: 'If temperature drops 2 degrees each hour for 5 hours, total change = -10 degrees.' }
    ],
    practiceQuestions: [
      { question: 'Calculate: -5 + (-3)', answer: '-8', hint: 'Moving left on number line.' },
      { question: 'Calculate: 6 – (-2)', answer: '8', hint: 'Subtracting negative = adding positive.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Number Systems',
    lessonNumber: 5,
    lessonTitle: 'Multiplying and Dividing Integers',
    lessonId: 'maths-f1-number-systems-5',
    order: 5,
    learningObjectives: [
      'Multiply and divide integers',
      'Apply the rule: same signs give positive, different signs give negative'
    ],
    introduction: 'Now that you can add and subtract integers, let’s multiply and divide them. The golden rule: same signs → positive, different signs → negative.',
    keyPoints: [
      'Positive × Positive = Positive (e.g., 3 × 4 = 12)',
      'Negative × Negative = Positive (e.g., -3 × -4 = 12)',
      'Positive × Negative = Negative (e.g., 3 × -4 = -12)',
      'Same rules apply to division: (+) ÷ (+) = +, (-) ÷ (-) = +, (+) ÷ (-) = -, (-) ÷ (+) = -'
    ],
    detailedContent: `Multiplication and Division Rules

- Same signs → positive
- Different signs → negative

Examples:
- 3 × 4 = 12
- (-3) × (-4) = 12
- 3 × (-4) = -12
- (-12) ÷ 3 = -4
- (-12) ÷ (-3) = 4

Malawi example: If you owe 3 friends 4 kwacha each, total debt = -3 × 4 = -12 kwacha. If each friend forgives your debt, that is -12 ÷ (-3) = 4 kwacha saved per friend.`,
    summary: 'Same signs → positive; different signs → negative. This rule applies to both multiplication and division.',
    estimatedTime: '15 mins',
    malawiExamples: [
      { title: 'Debt Forgiveness', description: '-12 ÷ -3 = +4 (debt reduction per friend)' },
      { title: 'Temperature Drop', description: 'Drop 2° per hour for 5 hours: -2 × 5 = -10°.' }
    ],
    practiceQuestions: [
      { question: 'Calculate: -4 × (-6)', answer: '24', hint: 'Negative × Negative = Positive.' },
      { question: 'Calculate: 20 ÷ (-5)', answer: '-4', hint: 'Positive ÷ Negative = Negative.' }
    ]
  },

  // Topic: Algebraic Expressions (split into 2 lessons)
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Algebraic Expressions',
    lessonNumber: 1,
    lessonTitle: 'Like Terms, Unlike Terms, and Simplification',
    lessonId: 'maths-f1-algebraic-expressions-1',
    order: 6,
    learningObjectives: [
      'Identify like and unlike terms in an algebraic expression',
      'Combine like terms by addition and subtraction'
    ],
    introduction: 'Hello! In mathematics, we often use letters to represent numbers. These letters are VARIABLES, and when we combine them with numbers and operations, we get ALGEBRAIC EXPRESSIONS. Today we learn to simplify by combining like terms.',
    keyPoints: [
      'A term is a single number, variable, or product (e.g., 3x, 5y², -7).',
      'Like terms have the same variable(s) raised to the same power.',
      'Unlike terms cannot be combined.',
      'Simplification means adding or subtracting like terms.'
    ],
    detailedContent: `Like Terms

Like terms have identical variable parts.

| Like Terms | Why they are like |
|------------|-------------------|
| 3x and 5x | Both have x |
| 4y² and 7y² | Both have y² |
| 2ab and 6ab | Both have ab |

| Unlike Terms | Why they are unlike |
|--------------|---------------------|
| 3x and 3y | Different variables |
| 4x and 4x² | Different powers |
| 2ab and 2a | Different variables |

Simplification

- 3x + 5x = (3+5)x = 8x
- 7y – 2y = 5y
- 4a + 3b + 2a – b = (4a+2a) + (3b–b) = 6a + 2b

Malawi example: A farmer harvests 5 baskets of maize (m) and 3 baskets of groundnuts (g) in the morning, and 2 baskets of maize and 4 baskets of groundnuts in the afternoon. Total = 5m+3g+2m+4g = 7m+7g.`,
    summary: 'Like terms have identical variable parts. Only like terms can be added or subtracted. Simplifying makes expressions shorter and easier to work with.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Harvest Collection', description: 'Combine maize and groundnuts from two harvests.' },
      { title: 'Market Purchase', description: 'Calculate total cost by combining like items.' }
    ],
    practiceQuestions: [
      { question: 'Simplify: 8p – 3p', answer: '5p', hint: 'Subtract coefficients.' },
      { question: 'Simplify: 2x + 5y – x + 3y', answer: 'x + 8y', hint: 'Combine x terms and y terms separately.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Algebraic Expressions',
    lessonNumber: 2,
    lessonTitle: 'Multiplication and Division of Algebraic Terms',
    lessonId: 'maths-f1-algebraic-expressions-2',
    order: 7,
    learningObjectives: [
      'Multiply algebraic terms (coefficients and variables separately)',
      'Divide algebraic terms using index laws'
    ],
    introduction: 'Now that you can add and subtract like terms, we move on to MULTIPLICATION and DIVISION. Unlike addition, you can multiply or divide ANY terms – whether they are like or unlike. Let’s learn how.',
    keyPoints: [
      'Multiply coefficients, then variables using index laws: xᵃ × xᵇ = xᵃ⁺ᵇ',
      'Divide coefficients, then subtract exponents: xᵃ ÷ xᵇ = xᵃ⁻ᵇ (if a > b)',
      'Examples: 3x × 4x = 12x²; 12x³ ÷ 3x = 4x²'
    ],
    detailedContent: `Multiplication

Multiply coefficients and add exponents for same bases.

Examples:
- 3x × 4x = (3×4) × x^{1+1} = 12x²
- 5y² × 2y³ = 10y^{2+3} = 10y⁵
- 2a × 3b = 6ab (different variables, keep separate)

Division

Divide coefficients and subtract exponents.

Examples:
- 12x³ ÷ 3x = (12÷3) × x^{3-1} = 4x²
- 10y⁵ ÷ 2y² = 5y³
- 8ab ÷ 2a = 4b (a cancels)

Malawi example: A farmer sells maize at 200 kwacha per kilogram. He sells x kg on Monday and 2x kg on Tuesday. Total kg = 3x. Revenue = 200 × 3x = 600x kwacha.`,
    summary: 'Multiply: multiply coefficients, add exponents. Divide: divide coefficients, subtract exponents. These rules apply to like and unlike terms.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Revenue Calculation', description: 'Multiply number of bags by price algebraically.' },
      { title: 'Seed Distribution', description: 'Divide total seeds among plots – algebraic division.' }
    ],
    practiceQuestions: [
      { question: 'Simplify: 4x × 3x²', answer: '12x³', hint: 'Multiply coefficients 4×3=12; add exponents 1+2=3.' },
      { question: 'Simplify: 15y⁴ ÷ 3y', answer: '5y³', hint: '15÷3=5; subtract exponents 4-1=3.' }
    ]
  },

  // Topic: Simultaneous Linear Equations (Form 2) – keeping as in original but ensure ≤2 LOs. Original had 4 LOs per lesson, but each lesson had 2 LOs? Actually original had 4 LOs per lesson – need to split.
  // Original had 4 LOs. I'll split into 2 lessons per method.
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Simultaneous Linear Equations',
    lessonNumber: 1,
    lessonTitle: 'Solving by Elimination (Part 1 – Equal Coefficients)',
    lessonId: 'maths-f2-simultaneous-elimination-1',
    order: 8,
    learningObjectives: [
      'Solve simultaneous equations by elimination when coefficients are equal',
      'Check solutions by substitution'
    ],
    introduction: 'Sometimes one equation is not enough. For example, if you buy two items and know the total cost and the difference, you need two equations. Today we solve using ELIMINATION when coefficients match.',
    keyPoints: [
      'Simultaneous equations: two equations with two unknowns (usually x and y).',
      'Elimination method: add or subtract equations to remove one variable.',
      'Example: 2x + y = 7 and x + y = 5. Subtract: (2x – x) + (y – y) = 7 – 5 → x = 2, then y = 3.'
    ],
    detailedContent: `Example: Solve 2x + y = 7 and x + y = 5

Step 1: Write equations (1) 2x + y = 7, (2) x + y = 5.
Step 2: Subtract (2) from (1): (2x – x) + (y – y) = 7 – 5 → x = 2.
Step 3: Substitute x = 2 into (2): 2 + y = 5 → y = 3.
Step 4: Check in (1): 2(2) + 3 = 4+3=7 ✓.

This method works when the coefficient of one variable is already the same.`,
    summary: 'When coefficients match, add or subtract to eliminate one variable, solve for the other, then substitute back.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Stationery Prices', description: 'Find cost of notebook and pen using two purchase scenarios.' }
    ],
    practiceQuestions: [
      { question: 'Solve: x + y = 10, x – y = 4', answer: 'x=7, y=3', hint: 'Add the equations.' },
      { question: 'Solve: 2x + y = 8, x – y = 1', answer: 'x=3, y=2', hint: 'Add to eliminate y.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Simultaneous Linear Equations',
    lessonNumber: 2,
    lessonTitle: 'Solving by Elimination (Part 2 – Multiplying to Match Coefficients)',
    lessonId: 'maths-f2-simultaneous-elimination-2',
    order: 9,
    learningObjectives: [
      'Solve simultaneous equations by elimination after scaling equations',
      'Apply elimination to real‑world problems'
    ],
    introduction: 'Sometimes the coefficients do not match. We can multiply one or both equations by a constant to make them match, then eliminate.',
    keyPoints: [
      'If coefficients are not equal, multiply one or both equations by appropriate numbers.',
      'Then add or subtract to eliminate a variable.',
      'Example: 3x + 2y = 12 and 2x + y = 7. Multiply second by 2: 4x + 2y = 14. Subtract from first: (3x-4x) = -1x, 2y-2y=0, 12-14=-2 → -x=-2, x=2.'
    ],
    detailedContent: `Example: Solve 3x + 2y = 12 and 2x + y = 7

Step 1: Multiply second equation by 2: 4x + 2y = 14.
Step 2: Subtract from first: (3x – 4x) + (2y – 2y) = 12 – 14 → -x = -2 → x = 2.
Step 3: Substitute x = 2 into original second: 2(2) + y = 7 → 4 + y = 7 → y = 3.
Step 4: Check: 3(2)+2(3)=6+6=12 ✓.

Malawi example: A shop sells notebooks (x) and pens (y). 3 notebooks + 2 pens cost 2,500 MK. 2 notebooks + 1 pen cost 1,600 MK. Solve: x=700, y=200.`,
    summary: 'When coefficients differ, multiply one or both equations to make them match, then eliminate and solve.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Stationery Prices', description: 'Find cost of notebook and pen using two purchase scenarios.' }
    ],
    practiceQuestions: [
      { question: 'Solve: 3x + 2y = 11, 2x + 5y = 11', answer: 'x=3, y=1', hint: 'Multiply first by 5, second by 2 to eliminate y.' },
      { question: 'Solve: 4x – 2y = 10, x + y = 4', answer: 'x=3, y=1', hint: 'Multiply second by 2 to eliminate y.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Simultaneous Linear Equations',
    lessonNumber: 3,
    lessonTitle: 'Solving by Substitution (Part 1 – Simple Substitution)',
    lessonId: 'maths-f2-simultaneous-substitution-1',
    order: 10,
    learningObjectives: [
      'Solve simultaneous equations by substitution when one variable is already isolated',
      'Use substitution to find both variables'
    ],
    introduction: 'Besides elimination, there is another powerful method: SUBSTITUTION. When one equation already gives a variable in terms of the other, this method is quick and efficient.',
    keyPoints: [
      'Step 1: Rearrange one equation to express one variable in terms of the other (if not already).',
      'Step 2: Substitute that expression into the other equation.',
      'Step 3: Solve for the remaining variable, then back‑substitute.'
    ],
    detailedContent: `Example: Solve y = 2x + 1 and 3x + 2y = 9

Step 1: Equation (1) already gives y = 2x + 1.
Step 2: Substitute into (2): 3x + 2(2x + 1) = 9 → 3x + 4x + 2 = 9 → 7x = 7 → x = 1.
Step 3: Substitute x=1 into (1): y = 2(1) + 1 = 3.
Step 4: Check in (2): 3(1) + 2(3) = 3+6=9 ✓.

Malawi example: A farmer has goats (g) and chickens (c). The number of goats is twice the number of chickens less 5. Total legs are 60 (goats 4 legs, chickens 2). g = 2c – 5, 4g + 2c = 60. Substitute: 4(2c-5) + 2c = 60 → 8c – 20 + 2c = 60 → 10c = 80 → c = 8, g = 2(8)-5 = 11.`,
    summary: 'Substitution solves one equation for a variable and substitutes into the other. Best when a variable is already alone.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Farm Animals', description: 'Given relationship between goats and chickens, find numbers.' }
    ],
    practiceQuestions: [
      { question: 'Solve by substitution: x = 2y, x + y = 9', answer: 'x=6, y=3', hint: 'Substitute x = 2y into second.' },
      { question: 'Solve by substitution: y = 3x – 2, 2x + y = 13', answer: 'x=3, y=7', hint: 'Substitute y into second.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Simultaneous Linear Equations',
    lessonNumber: 4,
    lessonTitle: 'Choosing the Appropriate Method',
    lessonId: 'maths-f2-simultaneous-choice-1',
    order: 11,
    learningObjectives: [
      'Choose between elimination and substitution for given pairs',
      'Compare the efficiency of each method'
    ],
    introduction: 'Both elimination and substitution work for any pair of linear equations, but sometimes one is much easier. Today we learn which method to choose.',
    keyPoints: [
      'If one variable already has coefficient 1, substitution is often easier.',
      'If both variables have small coefficients, elimination is straightforward.',
      'If coefficients are large or fractions, elimination may require multiplication, but still works.',
      'Practice both methods to gain flexibility.'
    ],
    detailedContent: `When to Use Substitution:
- When one equation is already solved for a variable (e.g., y = 3x + 2).
- When one variable has coefficient 1 (e.g., x + 2y = 5 → x = 5 – 2y).

When to Use Elimination:
- When both equations are in standard form (ax + by = c) and coefficients are simple.
- When coefficients of one variable are the same or easy to match.

Example: Solve 3x + 4y = 10 and 2x – 4y = 5. Elimination is ideal because 4y and –4y cancel immediately. Add: 5x = 15 → x=3, then y = 0.25.

Example: Solve y = 2x – 1 and 3x + y = 9. Substitution is easier: replace y.

Practice both methods with this problem: 3x + 2y = 12 and x + y = 5. Try elimination (multiply second by 2) and substitution (solve second for x = 5 – y).`,
    summary: 'Use substitution when a variable is isolated or has coefficient 1. Use elimination when coefficients are easy to match. Both methods are valid; choose the quicker one.',
    estimatedTime: '16 mins',
    malawiExamples: [
      { title: 'Budget Problem', description: 'Solve for price of maize and groundnuts using best method.' }
    ],
    practiceQuestions: [
      { question: 'Which method would you choose for: 2x + y = 7, 3x – y = 3?', answer: 'Elimination (y cancels directly)', hint: 'Coefficients +1 and -1.' },
      { question: 'Which method for: y = 5x – 2, 2x + 3y = 8?', answer: 'Substitution', hint: 'y is already isolated.' }
    ]
  },

  // Topic: Proportion (Direct and Inverse) – split original into two lessons (already had 2 LOs each, fine)
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Proportion',
    lessonNumber: 1,
    lessonTitle: 'Direct Proportion',
    lessonId: 'maths-f2-proportion-direct-1',
    order: 12,
    learningObjectives: [
      'Define direct proportion and identify it from tables and graphs',
      'Solve direct proportion problems using the unitary method and equation y = kx'
    ],
    introduction: 'When you buy more oranges, you pay more money – that is direct proportion. When you walk faster, you cover more distance. Today we learn to recognise and solve direct proportion problems.',
    keyPoints: [
      'Direct proportion: as one quantity increases, the other increases in the same ratio.',
      'Equation: y = kx, where k is the constant of proportionality.',
      'Graph: straight line through the origin.',
      'Unitary method: find value of one unit, then multiply.'
    ],
    detailedContent: `Definition: y ∝ x (proportional) means y = kx.

Example: If 5 kg of maize cost 2,500 MK, then 1 kg costs 500 MK. For 8 kg, cost = 8 × 500 = 4,000 MK.

Alternatively, find k: y = kx → 2500 = k×5 → k = 500, then y = 500×8 = 4000.

Table check: if y/x is constant, it's direct proportion.

Malawi example: The amount of fertiliser needed is proportional to the area of land. A 0.5 hectare field needs 100 kg. For 2 hectares: k = 100/0.5 = 200, so 200×2 = 400 kg.`,
    summary: 'Direct proportion: y = kx. Graphs are straight lines through origin. Use unitary method or equation to solve.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Fertiliser Requirement', description: 'Calculate fertiliser needed for larger field.' },
      { title: 'Maize Price', description: 'Find total cost from price per kg.' }
    ],
    practiceQuestions: [
      { question: 'If y is directly proportional to x, and y=15 when x=3, find y when x=8.', answer: '40', hint: 'k=5, y=5×8=40' },
      { question: 'A car travels 120 km in 2 hours at constant speed. How far in 5 hours?', answer: '300 km', hint: 'Speed = 60 km/h, 60×5=300' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Proportion',
    lessonNumber: 2,
    lessonTitle: 'Inverse Proportion',
    lessonId: 'maths-f2-proportion-inverse-1',
    order: 13,
    learningObjectives: [
      'Define inverse proportion and identify it from tables',
      'Solve inverse proportion problems using xy = k'
    ],
    introduction: 'Now imagine the opposite: if more workers work on a task, the time taken decreases. That is INVERSE PROPORTION. Today we learn to recognise and solve these problems.',
    keyPoints: [
      'Inverse proportion: as one quantity increases, the other decreases in the same factor.',
      'Equation: xy = k or y = k/x.',
      'Graph: hyperbola (curved).',
      'Examples: time and number of workers, speed and travel time.'
    ],
    detailedContent: `Definition: y ∝ 1/x means xy = k.

Example: 6 workers build a wall in 4 days. Total work = 6 × 4 = 24 worker‑days. With 8 workers: days = 24 / 8 = 3 days.

Table check: if product xy is constant, it's inverse proportion.

Malawi example: A tractor ploughs a field. If 2 tractors take 6 hours, how long for 3 tractors? 2×6 = 12 tractor‑hours, 3×t = 12 → t = 4 hours.`,
    summary: 'Inverse proportion: xy = k. As x increases, y decreases. Common in work, speed, and sharing problems.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Tractor Ploughing', description: 'More tractors reduce time; find time for different number of tractors.' },
      { title: 'Food Rations', description: 'If food lasts certain days for 10 people, how long for 20?' }
    ],
    practiceQuestions: [
      { question: 'If y is inversely proportional to x, and y=8 when x=3, find y when x=6.', answer: '4', hint: 'k = 8×3=24, y=24/6=4' },
      { question: '4 people finish a task in 9 days. How long for 6 people?', answer: '6 days', hint: '4×9=36, 36/6=6' }
    ]
  },

  // Topic: Quadratic Equations (Form 3) – split original 3 lessons (each with ≤2 LOs already? original had 3 LOs in some, but okay)
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Quadratic Equations',
    lessonNumber: 1,
    lessonTitle: 'Solving by Factorisation (Part 1 – Simple Trinomials)',
    lessonId: 'maths-f3-quadratics-factorisation-1',
    order: 14,
    learningObjectives: [
      'Identify quadratic expressions in standard form',
      'Factorise quadratics of the form x² + bx + c'
    ],
    introduction: 'Welcome, future problem‑solver! When an equation contains x², it is a QUADRATIC EQUATION. Today we solve them using FACTORISATION when the coefficient of x² is 1.',
    keyPoints: [
      'A quadratic equation is of the form ax² + bx + c = 0 (a ≠ 0).',
      'For x² + bx + c = 0, find two numbers that multiply to c and add to b.',
      'Example: x² + 5x + 6 = (x + 2)(x + 3) = 0 → x = -2 or x = -3.'
    ],
    detailedContent: `Standard form: ax² + bx + c = 0.

Factorisation for a=1: find factors of c that sum to b.

Example: x² – 9x + 20 = 0. Factors of 20: (–4, –5) sum = –9. So (x – 4)(x – 5) = 0 → x = 4 or x = 5.

Malawi example: A rectangular maize field has length 10 metres longer than its width. Area = 600 m². Let width = w, then w(w+10)=600 → w²+10w-600=0 → (w+30)(w-20)=0 → w=20, length=30.`,
    summary: 'Factorise quadratic by finding two numbers that multiply to c and add to b. Use zero product property to solve.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Maize Field Area', description: 'Find dimensions given area and length‑width relationship.' }
    ],
    practiceQuestions: [
      { question: 'Solve x² – 9x + 20 = 0', answer: 'x=4 or x=5', hint: 'Factors of 20 that sum to -9: -4 and -5.' },
      { question: 'Solve x² + 7x + 12 = 0', answer: 'x=-3 or x=-4', hint: 'Factors of 12 that sum to 7: 3 and 4, but signs positive? Actually (x+3)(x+4)=0 → x=-3 or -4.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Quadratic Equations',
    lessonNumber: 2,
    lessonTitle: 'Solving by Factorisation (Part 2 – a ≠ 1)',
    lessonId: 'maths-f3-quadratics-factorisation-2',
    order: 15,
    learningObjectives: [
      'Factorise quadratics of the form ax² + bx + c with a ≠ 1',
      'Solve using factorisation and zero product property'
    ],
    introduction: 'Now we look at quadratics where the coefficient of x² is not 1. Factorisation requires a bit more work, but the principle is the same.',
    keyPoints: [
      'For ax² + bx + c, find two numbers that multiply to a×c and add to b.',
      'Split the middle term, then factor by grouping.',
      'Example: 2x² + 7x + 3 = (2x+1)(x+3) = 0 → x = -½ or x = -3.'
    ],
    detailedContent: `Method: multiply a and c. Find two numbers that multiply to ac and add to b. Split middle term, factor by grouping.

Example: 2x² + 7x + 3. ac = 6, numbers 1 and 6 (sum 7). Write 2x² + 1x + 6x + 3 = x(2x+1) + 3(2x+1) = (2x+1)(x+3).

Malawi example: Profit P = -x² + 20x – 50 (thousands MK). Solve for break‑even P=0: -x²+20x-50=0 → multiply by -1: x²-20x+50=0. Not factorable nicely, but for a≠1 factorisation we already did 2x²+...`,
    summary: 'For a≠1, multiply a×c, find factor pair that sums to b, split middle term, factor by grouping, then solve.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Profit Calculation', description: 'Break‑even points using factors.' }
    ],
    practiceQuestions: [
      { question: 'Solve 3x² + 5x – 2 = 0 by factorisation.', answer: 'x = 1/3 or x = -2', hint: 'Multiply a×c = -6. Factors 6 and -1 sum to 5. Split: 3x²+6x –x –2 = 3x(x+2) –1(x+2) = (x+2)(3x–1)=0.' },
      { question: 'Solve 2x² – 7x + 3 = 0.', answer: 'x = 1/2 or x = 3', hint: 'ac=6, factors –6 and –1 sum –7. Split, factor.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Quadratic Equations',
    lessonNumber: 3,
    lessonTitle: 'Solving by Completing the Square',
    lessonId: 'maths-f3-quadratics-completing-square-1',
    order: 16,
    learningObjectives: [
      'Complete the square for a quadratic expression',
      'Solve quadratic equations by completing the square'
    ],
    introduction: 'Some quadratic equations are difficult to factorise. For those cases, we need a stronger method: COMPLETING THE SQUARE. This method works for every quadratic equation.',
    keyPoints: [
      'Completing the square rewrites ax² + bx + c as a(x + p)² + q.',
      'Steps: move constant to RHS; add (b/2)² to both sides; write LHS as perfect square.',
      'Example: x² + 6x + 5 = 0 → x² + 6x = -5 → (x+3)² = 4 → x+3 = ±2 → x = -1 or x = -5.'
    ],
    detailedContent: `Example: x² + 6x + 5 = 0

Step 1: Move constant: x² + 6x = -5.
Step 2: Take half of coefficient of x: 6/2 = 3, square = 9.
Step 3: Add 9 to both sides: x² + 6x + 9 = 4 → (x+3)² = 4.
Step 4: Take square root: x+3 = ±2 → x = -3 ± 2 → x = -1 or -5.

Malawi example: A thrown stone height h = -5t² + 20t + 1. Find when hit ground (h=0). Solve -5t² + 20t + 1 = 0 → divide by -1: 5t² – 20t – 1 = 0. Divide by 5: t² – 4t – 0.2 = 0 → complete square: (t – 2)² = 4.2 → t ≈ 2 ± 2.05 → t ≈ 4.05 s (positive).`,
    summary: 'Complete the square by adding (b/2)² to both sides. Then solve by taking square roots. Works for all quadratics.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Projectile Motion', description: 'Find when stone lands.' }
    ],
    practiceQuestions: [
      { question: 'Solve by completing the square: x² – 4x – 12 = 0', answer: 'x = 6 or x = -2', hint: 'Move 12, add 4 to both sides: (x-2)²=16 → x-2=±4.' },
      { question: 'Express x² + 10x + 20 in completed square form.', answer: '(x+5)² – 5', hint: 'Half of 10 is 5, square 25, then 20 = 25 – 5.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Quadratic Equations',
    lessonNumber: 4,
    lessonTitle: 'The Quadratic Formula',
    lessonId: 'maths-f3-quadratics-formula-1',
    order: 17,
    learningObjectives: [
      'State the quadratic formula and use it to solve quadratic equations',
      'Use the discriminant (b² – 4ac) to determine the nature of roots'
    ],
    introduction: 'The quadratic formula is the ultimate tool for solving any quadratic equation – even if it cannot be factorised. Today we learn this powerful formula and the discriminant.',
    keyPoints: [
      'Quadratic formula: x = [-b ± √(b² – 4ac)] / (2a).',
      'Discriminant (Δ = b² – 4ac) tells number of real roots.',
      'Δ > 0: two distinct real roots; Δ = 0: one repeated root; Δ < 0: no real roots (complex).'
    ],
    detailedContent: `Formula: For ax² + bx + c = 0, x = [-b ± √(b² – 4ac)] / (2a).

Example: 2x² – 3x – 5 = 0. a=2, b=-3, c=-5. Δ = (-3)² – 4×2×(-5) = 9 + 40 = 49, √49=7. x = [3 ± 7] / 4 → x = 10/4 = 2.5 or x = -4/4 = -1.

Discriminant significance:
- Δ > 0: two different real roots.
- Δ = 0: one repeated real root.
- Δ < 0: no real roots (two complex roots).`,
    summary: 'Quadratic formula solves any quadratic. Discriminant reveals the nature of roots. Memorise the formula and practise using it.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Projectile Motion', description: 'Use formula to find landing time.' }
    ],
    practiceQuestions: [
      { question: 'Use quadratic formula to solve x² – 4x – 12 = 0.', answer: 'x = 6 or x = -2', hint: 'a=1,b=-4,c=-12, Δ=16+48=64, √64=8, x = [4 ± 8]/2.' },
      { question: 'What is the discriminant of 3x² + 2x + 1 = 0?', answer: '-8', hint: 'b² – 4ac = 4 – 12 = -8.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Quadratic Equations',
    lessonNumber: 5,
    lessonTitle: 'Word Problems Involving Quadratic Equations',
    lessonId: 'maths-f3-quadratics-word-problems-1',
    order: 18,
    learningObjectives: [
      'Translate real‑world problems into quadratic equations',
      'Interpret solutions in context and discard extraneous answers'
    ],
    introduction: 'The real power of quadratic equations is in solving practical problems – from area of fields to profit calculations. Today we apply quadratics to everyday situations in Malawi.',
    keyPoints: [
      'Identify unknown and define variable.',
      'Write equation based on conditions.',
      'Solve using factorisation or formula.',
      'Check that solutions are meaningful (positive lengths, time, etc.).'
    ],
    detailedContent: `Problem type 1 – Area: A rectangular fish pond has length 4 m more than width. Area = 96 m². Let width = w → w(w+4)=96 → w²+4w-96=0 → (w+12)(w-8)=0 → w=8, length=12.

Problem type 2 – Product: Two consecutive positive integers product = 182. Let n, n+1 → n(n+1)=182 → n²+n-182=0 → (n+14)(n-13)=0 → n=13, integers 13 and 14.

Problem type 3 – Speed: A motorcyclist travels 120 km. If speed increased by 10 km/h, time reduces by 1 hour. Find original speed s. Equation: 120/s – 120/(s+10) = 1 → multiply: 120(s+10) – 120s = s(s+10) → 1200 = s²+10s → s²+10s-1200=0 → (s+40)(s-30)=0 → s=30 km/h.`,
    summary: 'Quadratic equations model area, product, speed, profit problems. Solve and check for physical plausibility.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Maize Field Dimensions', description: 'Given area and length‑width difference.' },
      { title: 'Bicycle Speed', description: 'Find original speed from time saved.' }
    ],
    practiceQuestions: [
      { question: 'The sum of a number and its reciprocal is 5/2. Find the number.', answer: '2 or 1/2', hint: 'x + 1/x = 5/2 → multiply by 2x: 2x²+2=5x → 2x²-5x+2=0 → factor (2x-1)(x-2)=0.' },
      { question: 'A rectangle has perimeter 28 m and area 48 m². Find dimensions.', answer: 'Length 8 m, width 6 m', hint: 'l + w = 14, lw=48 → w = 14-l → l(14-l)=48 → l²-14l+48=0 → (l-6)(l-8)=0.' }
    ]
  },

  // ======================================================================
  // MATHEMATICS – FORM 4 (Matrices, Progressions, etc.)
  // ======================================================================
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Matrices',
    lessonNumber: 1,
    lessonTitle: 'Introduction to Matrices: Order and Basic Operations',
    lessonId: 'maths-f4-matrices-1',
    order: 19,
    learningObjectives: [
      'Define a matrix and identify its order (rows × columns)',
      'Add and subtract matrices of the same order'
    ],
    introduction: 'Have you ever seen a spreadsheet with rows and columns? That is a real‑life MATRIX. Matrices help us organise data and perform complex calculations. Today we learn the basics.',
    keyPoints: [
      'A matrix is a rectangular array of numbers arranged in rows and columns.',
      'Order: rows × columns. Example: 2×3 matrix has 2 rows and 3 columns.',
      'Addition/subtraction: only possible if matrices have the same order, add corresponding elements.'
    ],
    detailedContent: `Matrix definition: A = [1 2 3; 4 5 6] is a 2×3 matrix.

Order: rows × columns.

Addition: if matrix A and B have same order, A + B = element‑wise addition.

Example: A = [1 2; 3 4], B = [5 6; 7 8], then A + B = [6 8; 10 12].

Subtraction similarly.

Malawi example: A farmer sells maize and groundnuts to two markets. Sales matrix M = [100 50; 200 80] (rows: markets, columns: maize, groundnuts).`,
    summary: 'A matrix is a rectangular array. Order = rows × columns. Add/subtract only same order, element‑wise.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Crop Sales Data', description: 'Organise harvest quantities from different villages into a matrix.' }
    ],
    practiceQuestions: [
      { question: 'What is the order of a matrix with 3 rows and 4 columns?', answer: '3×4', hint: 'rows × columns.' },
      { question: 'Given A = [2 -1] and B = [0 3], find A + B.', answer: '[2 2]', hint: 'Add corresponding elements: 2+0=2, -1+3=2.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Matrices',
    lessonNumber: 2,
    lessonTitle: 'Scalar Multiplication and Matrix Multiplication',
    lessonId: 'maths-f4-matrices-2',
    order: 20,
    learningObjectives: [
      'Multiply a matrix by a scalar',
      'Multiply two matrices where columns of first = rows of second'
    ],
    introduction: 'Now that you can add matrices, it is time for the most important operation: MULTIPLICATION. This requires a special rule: the number of columns in the first matrix must equal the number of rows in the second.',
    keyPoints: [
      'Scalar multiplication: multiply every element by the scalar.',
      'Matrix multiplication AB: if A is m×n and B is n×p, then AB is m×p.',
      'Each element is the dot product of a row of A and a column of B.',
      'Matrix multiplication is NOT commutative (AB ≠ BA).'
    ],
    detailedContent: `Scalar multiplication: 3 × [2 4; 6 8] = [6 12; 18 24].

Matrix multiplication: A = [1 2; 3 4], B = [5 6; 7 8], then AB = [1×5+2×7   1×6+2×8; 3×5+4×7   3×6+4×8] = [19 22; 43 50].

Malawi example: Quantities matrix Q = [100 50; 200 80] (maize, groundnuts). Price vector P = [200; 300] (price per kg). Revenue = Q × P = [100×200+50×300; 200×200+80×300] = [35000; 64000] MK.`,
    summary: 'Scalar multiplies each element. Matrix multiplication requires inner dimensions to match. Multiply rows by columns. Not commutative.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Revenue Calculation', description: 'Multiply quantity matrix by price matrix to find total sales per market.' }
    ],
    practiceQuestions: [
      { question: 'Can you multiply a 3×2 matrix by a 2×4 matrix? If yes, what is the order of the product?', answer: 'Yes, 3×4', hint: '3×2 and 2×4 → 3×4.' },
      { question: 'Multiply [1 0; 0 1] by any 2×2 matrix. What do you get?', answer: 'The same matrix (identity property)', hint: 'Identity matrix acts like 1.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Progressions',
    lessonNumber: 1,
    lessonTitle: 'Arithmetic Progressions (AP) – nth term',
    lessonId: 'maths-f4-progressions-ap-1',
    order: 21,
    learningObjectives: [
      'Identify an arithmetic progression and find the common difference',
      'Calculate the nth term using aₙ = a₁ + (n-1)d'
    ],
    introduction: 'Have you noticed patterns like 5,10,15,20... or 100,95,90,85...? These are ARITHMETIC PROGRESSIONS – sequences where the difference between consecutive terms is constant. Today we learn to describe them.',
    keyPoints: [
      'An AP has constant common difference d = aₙ – aₙ₋₁.',
      'nth term: aₙ = a₁ + (n-1)d.',
      'Examples: 3,7,11,15,... d=4, a₁=3, a₁₀ = 3 + 9×4 = 39.'
    ],
    detailedContent: `Definition: arithmetic progression (AP) is a sequence where each term differs by a constant d.

Formula: aₙ = a₁ + (n-1)d.

Example: AP 5,9,13,17,... a₁=5, d=4. a₁₅ = 5 + 14×4 = 5+56=61.

Malawi example: A student saves 1,000 MK in week 1, 1,200 in week 2, 1,400 in week 3 (increase 200 each week). Savings in week 12: a₁₂ = 1000 + 11×200 = 3,200 MK.`,
    summary: 'AP has constant difference d. nth term: a₁ + (n-1)d.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Weekly Savings', description: 'Increasing savings each week by fixed amount.' }
    ],
    practiceQuestions: [
      { question: 'Find the 15th term of AP: 5,9,13,17,...', answer: '61', hint: 'a₁=5, d=4, a₁₅ = 5 + 14×4 = 61' },
      { question: 'What is the common difference of the AP 2,5,8,11,...?', answer: '3', hint: '5-2=3' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Progressions',
    lessonNumber: 2,
    lessonTitle: 'Arithmetic Progressions – Sum of n terms',
    lessonId: 'maths-f4-progressions-ap-2',
    order: 22,
    learningObjectives: [
      'Derive and apply the formula for sum of first n terms of an AP',
      'Use Sₙ = n/2 [2a₁ + (n-1)d] or Sₙ = n/2 (a₁ + aₙ)'
    ],
    introduction: 'Not only can we find any term in an AP, we can also find the total sum of the first n terms. This is useful for total savings, total distance, etc.',
    keyPoints: [
      'Sum of first n terms: Sₙ = n/2 [2a₁ + (n-1)d]',
      'Also Sₙ = n/2 (a₁ + aₙ).',
      'Example: AP 3,7,11,15,... sum of first 10 terms: S₁₀ = 10/2 [2×3 + 9×4] = 5 × (6+36) = 210.'
    ],
    detailedContent: `Formula: Sₙ = n/2 [2a₁ + (n-1)d] = n/2 (first + last).

Example: AP with a₁=3, d=4, n=10. S₁₀ = 5 × (6 + 36) = 210.

Malawi example: Savings AP: a₁=1000, d=200. Total saved after 12 weeks: S₁₂ = 12/2 × [2000 + 11×200] = 6 × (2000+2200) = 6×4200 = 25,200 MK.`,
    summary: 'Sum of AP: Sₙ = n/2 (2a₁ + (n-1)d). Useful for cumulative totals.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Total Savings', description: 'Sum of weekly savings after 12 weeks.' }
    ],
    practiceQuestions: [
      { question: 'Find sum of first 20 terms of AP: 2,5,8,11,...', answer: '610', hint: 'a₁=2, d=3, S₂₀ = 20/2 (4 + 19×3) = 10 × (4+57)=610' },
      { question: 'An AP has first term 5 and last term 45. There are 9 terms. Find sum.', answer: '225', hint: 'S₉ = 9/2 (5+45) = 4.5×50=225' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Progressions',
    lessonNumber: 3,
    lessonTitle: 'Geometric Progressions – nth term',
    lessonId: 'maths-f4-progressions-gp-1',
    order: 23,
    learningObjectives: [
      'Identify a geometric progression and find the common ratio',
      'Calculate the nth term using aₙ = a₁ × rⁿ⁻¹'
    ],
    introduction: 'When a population doubles every year, or when money grows with compound interest, we see a pattern where each term is multiplied by a constant factor. That is a GEOMETRIC PROGRESSION. Today we learn the nth term.',
    keyPoints: [
      'Geometric progression (GP): each term multiplied by common ratio r.',
      'nth term: aₙ = a₁ × rⁿ⁻¹.',
      'Example: 2,6,18,54,... r=3, a₈ = 2 × 3⁷ = 2×2187=4374.'
    ],
    detailedContent: `Definition: GP has constant ratio r = aₙ / aₙ₋₁.

Formula: aₙ = a₁ rⁿ⁻¹.

Example: GP 3,6,12,24,... a₁=3, r=2, a₇ = 3 × 2⁶ = 3×64 = 192.

Malawi example: Compound interest. A farmer invests 100,000 MK at 10% per year compounded annually. After n years, amount = 100,000 × (1.10)ⁿ. After 3 years: 100,000 × 1.331 = 133,100 MK.`,
    summary: 'GP has constant ratio r. nth term: a₁ rⁿ⁻¹. Models exponential growth/decay.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Compound Interest', description: 'Calculate investment growth using GP formula.' }
    ],
    practiceQuestions: [
      { question: 'Find the 7th term of GP: 3,6,12,24,...', answer: '192', hint: 'a₁=3, r=2, a₇ = 3×2⁶=192' },
      { question: 'What is the common ratio of GP 5,15,45,...?', answer: '3', hint: '15/5=3' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Progressions',
    lessonNumber: 4,
    lessonTitle: 'Geometric Progressions – Sum of n terms',
    lessonId: 'maths-f4-progressions-gp-2',
    order: 24,
    learningObjectives: [
      'Apply the formula for sum of the first n terms of a GP',
      'Use Sₙ = a₁(rⁿ – 1)/(r – 1) for r ≠ 1'
    ],
    introduction: 'Just as with AP, we can find the total sum of the first n terms of a GP. This is useful for total savings over time, total population growth, etc.',
    keyPoints: [
      'Sum of first n terms: Sₙ = a₁(rⁿ – 1)/(r – 1) for r > 1.',
      'Also Sₙ = a₁(1 – rⁿ)/(1 – r) for r < 1.',
      'Example: GP 2,6,18,54,... S₆ = 2 × (3⁶ – 1)/(3 – 1) = 2 × (729 – 1)/2 = 2×728/2 = 728.'
    ],
    detailedContent: `Formula: Sₙ = a₁ (rⁿ – 1) / (r – 1) (for r > 1).

Example: GP 2,6,18,54,162,486. a₁=2, r=3, n=6. S₆ = 2×(729-1)/(2) = 728.

Malawi example: Population growth. If a village grows by 10% each year, initial population 500. After 3 years, population = 500×1.1³ = 665.5 (but sum is not usually used). However for total amount over years in investment, sum might be used for instalments.`,
    summary: 'Sum of GP: Sₙ = a₁(rⁿ – 1)/(r – 1). Useful for total growth, savings, instalments.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Compound Interest Total', description: 'Total value after several years (single deposit).' }
    ],
    practiceQuestions: [
      { question: 'Find sum of first 5 terms of GP: 5,15,45,...', answer: '605', hint: 'a₁=5, r=3, S₅ = 5×(3⁵-1)/(3-1) = 5×(243-1)/2 = 5×242/2 = 605' },
      { question: 'Find sum of first 4 terms of GP: 16,8,4,2,...', answer: '30', hint: 'a₁=16, r=0.5, use formula (1-rⁿ) in numerator.' }
    ]
  },

  

  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Linear Equations',
    lessonNumber: 1,
    lessonTitle: 'Solving Simple Linear Equations (ax + b = c)',
    lessonId: 'maths-f1-linear-equations-1',
    order: 25,
    learningObjectives: [
      'Solve equations of the form ax + b = c where a, b, c are integers',
      'Check solutions by substitution'
    ],
    introduction: 'Equations are like balanced scales – what you do to one side, you must do to the other. Today we solve simple linear equations step by step.',
    keyPoints: [
      'To solve ax + b = c, subtract b from both sides, then divide by a.',
      'Example: 3x + 5 = 14 → 3x = 9 → x = 3.',
      'Always check by substituting back into the original equation.',
    ],
    detailedContent: `Solving ax + b = c

Step 1: Isolate the term with x by adding or subtracting the constant.
Step 2: Divide by the coefficient of x.

Example 1: 2x + 7 = 15
Subtract 7 from both sides: 2x = 8
Divide by 2: x = 4
Check: 2(4)+7 = 8+7 = 15 ✓

Example 2: 5x – 3 = 12
Add 3: 5x = 15 → x = 3
Check: 5(3)-3 = 15-3=12 ✓

Example 3: Solve 4x + 9 = 21 in the context: A farmer has 4 bags of maize and an extra 9 kg, total 21 kg. Find maize per bag. 4x = 12 → x = 3 kg per bag.

Now practise: Solve 7x – 5 = 23, and 6x + 11 = 35.`,
    summary: 'Solve ax + b = c by subtracting b then dividing by a. Always check your answer.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Maize Bags', description: '4 bags + 9 kg = 21 kg → each bag 3 kg.' },
    ],
    practiceQuestions: [
      { question: 'Solve 3x + 4 = 19', answer: 'x = 5', hint: 'Subtract 4, divide by 3.' },
      { question: 'Solve 2x – 7 = 9', answer: 'x = 8', hint: 'Add 7, divide by 2.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Linear Equations',
    lessonNumber: 2,
    lessonTitle: 'Equations with Variables on Both Sides',
    lessonId: 'maths-f1-linear-equations-2',
    order: 26,
    learningObjectives: [
      'Solve equations with the variable on both sides (e.g., ax + b = cx + d)',
      'Collect variable terms on one side and constants on the other'
    ],
    introduction: 'Sometimes the unknown appears on both sides of the equation. We can move terms from one side to the other by adding or subtracting. Today we solve such equations.',
    keyPoints: [
      'Gather variable terms on one side, constant terms on the other.',
      'Example: 5x + 3 = 2x + 12 → subtract 2x: 3x + 3 = 12 → subtract 3: 3x = 9 → x = 3.'
    ],
    detailedContent: `Equation with x on both sides

Goal: get all x terms on left, numbers on right.

Example 1: 7x – 5 = 3x + 11
Subtract 3x: 4x – 5 = 11
Add 5: 4x = 16 → x = 4.

Example 2 (context): A shop sells notebooks. Shop A charges 500 MK per notebook plus a fixed 2000 MK delivery. Shop B charges 400 MK per notebook plus fixed 3000 MK. For how many notebooks are costs equal? 500x + 2000 = 400x + 3000 → 100x = 1000 → x = 10 notebooks.

Now solve: 8x + 2 = 5x + 14; and 4x – 7 = 2x + 5.`,
    summary: 'Bring variable terms to one side and constants to the other, then solve.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Mobile Money Transfer', description: 'Find units where two pricing plans equal.' }
    ],
    practiceQuestions: [
      { question: 'Solve 6x + 5 = 2x + 21', answer: 'x = 4', hint: '6x-2x=4x, 21-5=16, 4x=16→x=4' },
      { question: 'Solve 9x – 4 = 5x + 12', answer: 'x = 4', hint: '9x-5x=4x, 12+4=16, 4x=16→x=4' }
    ]
  },

  // Topic: Geometry – lines, angles, triangles, parallel lines
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Geometry',
    lessonNumber: 1,
    lessonTitle: 'Types of Angles and Angle Relationships',
    lessonId: 'maths-f1-angles-1',
    order: 27,
    learningObjectives: [
      'Identify acute, right, obtuse, straight, reflex angles',
      'Use angle relationships: vertically opposite angles are equal, angles on a straight line sum to 180°'
    ],
    introduction: 'Angles are everywhere – in buildings, chairs, even your elbow. Today we learn to name angles and find unknown angles using simple rules.',
    keyPoints: [
      'Acute: between 0° and 90°. Right: exactly 90°. Obtuse: 90°–180°. Straight: 180°. Reflex: 180°–360°.',
      'Vertically opposite angles are equal.',
      'Angles on a straight line sum to 180°.'
    ],
    detailedContent: `Types of angles:
- Acute: 30°, 45°, 60°
- Right: 90° (corner of a book)
- Obtuse: 120°, 150°
- Straight: 180° (straight line)
- Reflex: 210°, 300°

Angle rules:
1. Vertically opposite angles: when two lines cross, opposite angles are equal.
2. Angles on a straight line: add up to 180°.

Example: Two lines intersect, one angle is 120°. Find the other three angles. Opposite angle = 120°. Adjacent on straight line = 180° – 120° = 60°. The fourth angle is also 60° (vertically opposite to that 60°).

Malawi example: Roof of a house: rafters create angles. A 90° corner is a right angle; an acute angle in the truss.

Now find unknown angles in a diagram: if one angle is 35°, find its vertically opposite and its adjacent on a straight line.`,
    summary: 'Acute (<90°), right (90°), obtuse (>90°), straight (180°). Vertically opposite equal; adjacent on a straight line sum to 180°.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Roof Trusses', description: 'Identifying acute and obtuse angles in traditional houses.' }
    ],
    practiceQuestions: [
      { question: 'What type of angle is 145°?', answer: 'Obtuse', hint: 'Between 90° and 180°.' },
      { question: 'Two angles on a straight line are 112° and x°. Find x.', answer: '68°', hint: '180 – 112 = 68.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Geometry',
    lessonNumber: 2,
    lessonTitle: 'Parallel Lines and Transversals',
    lessonId: 'maths-f1-parallel-lines-1',
    order: 28,
    learningObjectives: [
      'Identify corresponding, alternate, and co‑interior angles formed by parallel lines',
      'Calculate unknown angles using parallel line properties'
    ],
    introduction: 'Parallel lines never meet. When a transversal crosses them, special angle relationships appear. Today we learn these rules.',
    keyPoints: [
      'Corresponding angles are equal (F‑pattern).',
      'Alternate angles are equal (Z‑pattern).',
      'Co‑interior angles sum to 180° (C‑pattern).'
    ],
    detailedContent: `Parallel lines and transversal

1. Corresponding angles (same position relative to the transversal): equal.
   Example: if one corresponding is 70°, the other is 70°.

2. Alternate angles (between parallel lines, on opposite sides of transversal): equal.
   Example: Z‑shape.

3. Co‑interior angles (between parallel lines, same side of transversal): add to 180°.
   Example: if one is 110°, the other is 70°.

Malawi example: The lines on a notebook, railway lines, or rows of maize plants – when a path crosses them, these angle rules apply.

Now find unknowns: given one alternate angle is 38°, find the co‑interior angle.`,
    summary: 'Corresponding equal, alternate equal, co‑interior sum to 180°.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Maize Rows', description: 'Rows of maize and a cross path illustrate parallel line angles.' }
    ],
    practiceQuestions: [
      { question: 'If a pair of co‑interior angles are 2x and 3x, find x.', answer: '36°', hint: '2x+3x=180 → 5x=180 → x=36' },
      { question: 'Corresponding angles are 5x and 75°, find x.', answer: '15°', hint: '5x=75 → x=15' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Geometry',
    lessonNumber: 3,
    lessonTitle: 'Triangles – Types and Angle Sum',
    lessonId: 'maths-f1-triangles-1',
    order: 29,
    learningObjectives: [
      'Classify triangles by sides (scalene, isosceles, equilateral) and by angles (acute, right, obtuse)',
      'State and use the angle sum property of a triangle (sum = 180°)'
    ],
    introduction: 'Triangles are the strongest shape in construction. Today we learn their types and the important fact that all three angles add up to 180°.',
    keyPoints: [
      'By sides: scalene (all sides different), isosceles (two equal sides), equilateral (all sides equal).',
      'By angles: acute (all <90°), right (one 90°), obtuse (one >90°).',
      'Interior angles sum to 180°: a + b + c = 180°.'
    ],
    detailedContent: `Triangle classification

Sides:
- Scalene: all sides different lengths.
- Isosceles: two sides equal, base angles equal.
- Equilateral: all sides equal, all angles 60°.

Angles:
- Acute: all angles < 90°.
- Right: one angle = 90° (hypotenuse side).
- Obtuse: one angle > 90°.

Angle sum: a + b + c = 180°.

Example: In a triangle, two angles are 50° and 70°. Find the third: 180 – 50 – 70 = 60°.

Malawi example: A wooden roof truss forms an isosceles triangle. Base angles are 70° each. Find apex: 180 – 140 = 40°.

Now find: in a right triangle, one acute angle is 35°, find the other acute angle.`,
    summary: 'Triangles: scalene, isosceles, equilateral; acute, right, obtuse. Angles add to 180°.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Roof Truss', description: 'Isosceles triangle in traditional houses.' }
    ],
    practiceQuestions: [
      { question: 'In an equilateral triangle, what is each angle?', answer: '60°', hint: 'All equal, sum 180°.' },
      { question: 'If an isosceles triangle has vertex angle 40°, find base angles.', answer: '70° each', hint: 'Base angles equal; 180-40=140, /2=70' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Geometry',
    lessonNumber: 4,
    lessonTitle: 'Quadrilaterals – Interior Angles Sum',
    lessonId: 'maths-f1-quadrilaterals-1',
    order: 30,
    learningObjectives: [
      'Identify common quadrilaterals: square, rectangle, parallelogram, trapezium',
      'Use the sum of interior angles of a quadrilateral (360°)'
    ],
    introduction: 'Quadrilaterals have four sides. They include squares, rectangles, and many others. Today we learn their angle sum and basic features.',
    keyPoints: [
      'Sum of interior angles of any quadrilateral = 360°.',
      'Square: all sides equal, all angles 90°.',
      'Rectangle: opposite sides equal, all angles 90°.',
      'Parallelogram: opposite sides parallel, opposite angles equal.',
      'Trapezium: one pair of parallel sides.'
    ],
    detailedContent: `Quadrilaterals

Angle sum: divide into two triangles → each triangle 180°, total 360°.

Properties:
- Square: equal sides, right angles.
- Rectangle: equal opposite sides, right angles.
- Parallelogram: opposite sides parallel, opposite angles equal, adjacent angles supplementary (sum 180°).
- Rhombus: all sides equal, opposite angles equal.
- Trapezium: one pair of parallel sides.

Example: In a parallelogram, one angle is 70°. Find the other three. Opposite angle = 70°. Adjacent angles are supplementary: 180-70=110°. So angles: 70°,110°,70°,110°.

Malawi example: A school football field is rectangular. Each corner is 90°.

Now find: if a quadrilateral has angles 85°, 95°, and 100°, find the fourth angle.`,
    summary: 'Quadrilateral interior angles sum to 360°. Squares and rectangles have 90° angles. Parallelograms have opposite equal, adjacent supplementary.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Football Field', description: 'Rectangle with 90° corners.' }
    ],
    practiceQuestions: [
      { question: 'Three angles of a quadrilateral are 110°, 80°, and 70°. Find the fourth.', answer: '100°', hint: '360 – (110+80+70) = 360-260=100' },
      { question: 'In a parallelogram, one angle is 120°. Find the others.', answer: '120°,60°,120°,60°', hint: 'Opposite equal, adjacent supplementary.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Mensuration',
    lessonNumber: 1,
    lessonTitle: 'Area and Perimeter of Rectangles and Squares',
    lessonId: 'maths-f1-area-perimeter-1',
    order: 31,
    learningObjectives: [
      'Calculate perimeter and area of squares and rectangles',
      'Apply formulas to real‑life problems (e.g., fencing a field, laying tiles)'
    ],
    introduction: 'How much fencing do you need for a maize field? How many tiles for a floor? These are perimeter and area problems. Today we learn the formulas.',
    keyPoints: [
      'Perimeter of rectangle = 2(length + width). Square = 4 × side.',
      'Area of rectangle = length × width. Square = side².',
      'Units: perimeter in m, cm; area in m², cm².'
    ],
    detailedContent: `Formulas

Rectangle:
- Perimeter P = 2(l + w)
- Area A = l × w

Square (l = w = s):
- P = 4s
- A = s²

Example 1: A rectangular field is 20 m long and 15 m wide. Fence length = 2(20+15)=70 m. Area = 20×15=300 m².

Example 2: A square garden of side 12 m. Perimeter=48 m, area=144 m².

Malawi example: A farmer wants to fence a rectangular vegetable garden 30 m by 20 m. How much wire needed? 2(30+20)=100 m. For planting, he needs area = 600 m².

Now calculate: A rectangle 8 m by 5 m: perimeter and area. A square of side 9 m: perimeter and area.`,
    summary: 'Rectangle: P=2(l+w), A=l×w. Square: P=4s, A=s².',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Garden Fence', description: 'Perimeter to buy fencing wire.' },
      { title: 'Maize Field Planting', description: 'Area to calculate seed needed.' }
    ],
    practiceQuestions: [
      { question: 'Find perimeter and area of a rectangle 12 m by 8 m.', answer: 'P=40 m, A=96 m²', hint: '2(12+8)=40, 12×8=96' },
      { question: 'A square garden has area 64 m². Find side and perimeter.', answer: 'Side=8 m, P=32 m', hint: '√64=8, 4×8=32' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Mensuration',
    lessonNumber: 2,
    lessonTitle: 'Volume of Cuboids and Capacity',
    lessonId: 'maths-f1-volume-1',
    order: 32,
    learningObjectives: [
      'Calculate volume of a cuboid using V = length × width × height',
      'Relate volume to capacity (1 cm³ = 1 mL, 1 m³ = 1000 L)'
    ],
    introduction: 'How much water can a fish pond hold? How many bricks fit in a box? That is volume. Today we learn to find the volume of cuboids and convert to capacity.',
    keyPoints: [
      'Volume = length × width × height (all in same units).',
      'Unit of volume: cm³, m³.',
      'Capacity: 1 cm³ = 1 mL; 1000 cm³ = 1 L; 1 m³ = 1000 L.'
    ],
    detailedContent: `Volume of a cuboid

Formula: V = l × w × h.

Example 1: A water tank is 2 m long, 1.5 m wide, 1 m high. Volume = 2×1.5×1 = 3 m³ = 3000 L (since 1 m³ = 1000 L).

Example 2: A box of maize seeds is 30 cm × 20 cm × 15 cm. Volume = 30×20×15 = 9000 cm³ = 9 L (since 1000 cm³ = 1 L).

Malawi example: A fish pond measures 10 m × 5 m × 1.5 m deep. Volume = 75 m³ = 75,000 L.

Now calculate: A brick 20 cm × 10 cm × 5 cm: volume in cm³ and in litres.`,
    summary: 'Volume of cuboid = l × w × h. Capacity: 1 cm³ = 1 mL, 1 m³ = 1000 L.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Fish Pond', description: 'Volume in m³ and litres.' },
      { title: 'Water Tank', description: 'Capacity for storing rainwater.' }
    ],
    practiceQuestions: [
      { question: 'A box is 40 cm × 30 cm × 20 cm. Find volume in cm³ and L.', answer: '24,000 cm³ = 24 L', hint: '40×30×20=24000; /1000=24' },
      { question: 'A classroom is 8 m × 6 m × 3 m. Find volume in m³.', answer: '144 m³', hint: '8×6×3=144' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Graphs',
    lessonNumber: 1,
    lessonTitle: 'The Cartesian Plane and Plotting Points',
    lessonId: 'maths-f1-cartesian-1',
    order: 33,
    learningObjectives: [
      'Draw and label the Cartesian plane (x‑axis, y‑axis, origin)',
      'Plot points given coordinates (x,y)'
    ],
    introduction: 'The Cartesian plane is a map for locating points using two numbers – like a grid. Today we learn to plot points and read coordinates.',
    keyPoints: [
      'Horizontal axis: x‑axis; vertical: y‑axis. Intersection: origin (0,0).',
      'Coordinates (x,y): first move right/left (x), then up/down (y).',
      'Point (3,2): right 3, up 2. Point (-2,4): left 2, up 4.'
    ],
    detailedContent: `The axes

- x‑axis: positive to right, negative to left.
- y‑axis: positive up, negative down.

Plotting: for (3,5), start at origin, move 3 right, then 5 up.

Quadrants: Q1 (+,+), Q2 (–,+), Q3 (–,–), Q4 (+,–).

Example: Plot A(2,3), B(‑1,4), C(‑2,‑3), D(4,‑2).

Malawi example: A map of Lilongwe with grid references. The school is at (4,2), market at (1,5), bus station at (‑2,‑1).

Now practise plotting points: (3,3), (‑2,5), (‑4,‑1), (0,4).`,
    summary: 'Cartesian plane: x (horizontal), y (vertical). (x,y) – right/left then up/down.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Town Map', description: 'Grid references for locations.' }
    ],
    practiceQuestions: [
      { question: 'What quadrant is (‑5,3) in?', answer: 'Quadrant II', hint: 'x negative, y positive.' },
      { question: 'Give coordinates of a point 4 units right, 2 units down from origin.', answer: '(4,‑2)', hint: 'x=4, y=‑2.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Statistics',
    lessonNumber: 1,
    lessonTitle: 'Data Collection and Frequency Tables',
    lessonId: 'maths-f1-statistics-1',
    order: 34,
    learningObjectives: [
      'Collect and organise data using frequency tables',
      'Calculate the mean (average) of a set of numbers'
    ],
    introduction: 'Statistics helps us understand data – like the average harvest per farmer, or the most common age in a village. Today we learn to collect data and find the mean.',
    keyPoints: [
      'Frequency table: lists values and how often each occurs.',
      'Mean = sum of all values ÷ number of values.',
      'Example: maize yields (kg): 120, 130, 140, 125, 135. Sum=650, n=5, mean=130 kg.'
    ],
    detailedContent: `Frequency table: record tally marks then counts.

Example: Number of goats in 10 households: 2,3,2,1,3,2,4,3,2,2. Table: 1:1, 2:5, 3:3, 4:1.

Mean: sum all values divide by count.

Example: Scores on a test: 5,7,8,6,9,7,5,8. Sum = 55, n=8, mean = 6.875.

Malawi example: A farmer records daily harvest of maize cobs: 40,45,42,48,44. Mean = (40+45+42+48+44)/5 = 219/5 = 43.8 cobs.

Now find mean of: 15,20,25,30,35.`,
    summary: 'Frequency tables organise data. Mean = total ÷ count.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Goats per Household', description: 'Find average goats per family.' }
    ],
    practiceQuestions: [
      { question: 'Find the mean of 12,15,18,21,24', answer: '18', hint: 'Sum=90, n=5 → 18' },
      { question: 'If the mean of five numbers is 10, what is their total?', answer: '50', hint: 'Total = mean × count = 10×5=50' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Statistics',
    lessonNumber: 2,
    lessonTitle: 'Median, Mode and Range',
    lessonId: 'maths-f1-statistics-2',
    order: 35,
    learningObjectives: [
      'Find the median and mode of a data set',
      'Calculate the range (largest – smallest)'
    ],
    introduction: 'Sometimes the mean is not enough. The median is the middle value, the mode is the most common, and the range shows spread. Today we practise these.',
    keyPoints: [
      'Median: middle value when data sorted (if odd n) or average of two middle values (if even).',
      'Mode: most frequent value. Data can have no mode or multiple modes.',
      'Range = highest – lowest.'
    ],
    detailedContent: `Median:
- Sort data ascending.
- Odd count: middle = (n+1)/2 th value.
- Even count: average of n/2 and (n/2)+1 th values.

Mode: value(s) that appear most often.

Range: max – min.

Example: maize yields (kg): 110,120,130,140,150. Median = 130 (3rd). Mode none. Range = 150-110=40.

Even set: 2,4,6,8. Median = (4+6)/2=5.

Malawi example: Ages of children in a village: 5,7,7,8,9,10. Median: (7+8)/2=7.5. Mode=7. Range=10-5=5.

Now find median, mode, range: 3,5,7,7,9,11,11.`,
    summary: 'Median: middle value. Mode: most frequent. Range: max – min.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Children Ages', description: 'Find typical age using median and mode.' }
    ],
    practiceQuestions: [
      { question: 'Find median of 8,3,9,5,7', answer: '7', hint: 'Sort 3,5,7,8,9 → middle 7' },
      { question: 'Find mode of 2,4,4,6,8,8,8,10', answer: '8', hint: 'Appears three times.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Statistics',
    lessonNumber: 3,
    lessonTitle: 'Bar Charts and Pictograms',
    lessonId: 'maths-f1-bar-charts-1',
    order: 36,
    learningObjectives: [
      'Draw and interpret bar charts from frequency tables',
      'Create and interpret pictograms using a key'
    ],
    introduction: 'Charts make data easy to see. Bar charts and pictograms help us compare quantities at a glance. Today we practise drawing them.',
    keyPoints: [
      'Bar chart: bars of equal width, height proportional to frequency.',
      'Pictogram: uses symbols to represent quantities; a key explains symbol value.',
      'Both need titles and labels.'
    ],
    detailedContent: `Bar chart:
- Draw axes: x‑axis categories, y‑axis frequency.
- Bars do not touch.

Pictogram:
- Choose symbol (e.g., a bag).
- Key: 1 bag = 20 kg of maize.
- For 100 kg, draw 5 bags.

Example: Crop yields: maize 60%, groundnuts 20%, vegetables 10%, others 10%. Draw bar chart.

Malawi example: Number of livestock in a village: cattle 15, goats 30, chickens 80. Make a bar chart.

Now create a bar chart for your favourite data.`,
    summary: 'Bar charts compare frequencies with heights. Pictograms use symbols; key defines value.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Livestock Bar Chart', description: 'Compare cattle, goats, chickens.' }
    ],
    practiceQuestions: [
      { question: 'In a pictogram, one 🐱 = 10 cats. How many cats for 3.5 symbols?', answer: '35', hint: '3.5×10=35' },
      { question: 'What should a bar chart include?', answer: 'Title, labelled axes, equal‑width bars.', hint: 'Clear labelling.' }
    ]
  },

  // ======================================================================
  // MATHEMATICS – FORM 2 (remaining topics)
  // ======================================================================
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Linear Inequalities',
    lessonNumber: 1,
    lessonTitle: 'Solving Linear Inequalities',
    lessonId: 'maths-f2-inequalities-1',
    order: 37,
    learningObjectives: [
      'Solve linear inequalities using inverse operations',
      'Graph solutions on a number line'
    ],
    introduction: 'Inequalities tell us about ranges – “more than”, “at most”, “between”. Today we solve inequalities and show the answer on a number line.',
    keyPoints: [
      'Solve like linear equations, but when multiplying or dividing by a negative number, reverse the inequality sign.',
      'Graph: open circle for < or >, closed circle for ≤ or ≥.',
      'Example: 3x – 5 < 10 → 3x < 15 → x < 5.'
    ],
    detailedContent: `Solving steps:

Example 1: 2x + 7 ≥ 15 → 2x ≥ 8 → x ≥ 4. Graph: closed circle at 4, shade right.

Example 2: –3x > 9 → divide by –3 (reverse sign) → x < –3. Graph: open circle at –3, shade left.

Example 3 (context): A farmer has 5000 MK to buy fertiliser. Each bag costs 200 MK. How many bags can he buy? 200b ≤ 5000 → b ≤ 25. So at most 25 bags.

Now solve: 5x – 4 ≤ 11 and graph. Also –2x + 3 < 9.`,
    summary: 'Inequalities: solve by inverse operations; reverse sign when multiplying/dividing by negative. Graph on number line.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Fertiliser Purchase', description: 'Maximum bags affordable within budget.' }
    ],
    practiceQuestions: [
      { question: 'Solve 4x – 7 > 9', answer: 'x > 4', hint: '4x > 16 → x > 4' },
      { question: 'Graph x ≤ –3 on a number line', answer: 'Closed circle at –3, shade left.' }
    ]
  },

  // Topic: Ratio and proportion
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Ratio and Proportion',
    lessonNumber: 1,
    lessonTitle: 'Simplifying and Dividing in Ratios',
    lessonId: 'maths-f2-ratio-1',
    order: 38,
    learningObjectives: [
      'Simplify ratios to lowest terms',
      'Divide a quantity into a given ratio'
    ],
    introduction: 'Ratios compare quantities. If you mix fertiliser, the ratio tells how much of each. Today we simplify ratios and share amounts.',
    keyPoints: [
      'Ratios can be simplified by dividing all parts by common factor.',
      'To divide a quantity in ratio a:b, first find total parts, then value of one part.',
      'Example: share 400 MK in ratio 3:5 → total parts 8, one part 50 MK, so 150 MK and 250 MK.'
    ],
    detailedContent: `Simplifying:

Example: 12:18 = divide by 6 → 2:3.

Divide in ratio:

Example: Divide 720 MK between A and B in ratio 2:3 → total parts 5, one part = 720/5 = 144 MK. A gets 2×144=288 MK, B gets 3×144=432 MK.

Malawi example: A farmer mixes fertiliser in ratio 4:1 (NPK to urea). For 50 kg total, NPK = 4/5 × 50 = 40 kg, urea = 10 kg.

Now simplify 24:36 and divide 500 MK in ratio 2:3.`,
    summary: 'Ratios compare quantities. Simplify by dividing common factor. Sharing: total parts, value per part.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Fertiliser Mix', description: 'Ratio of NPK to urea.' }
    ],
    practiceQuestions: [
      { question: 'Simplify 18:24', answer: '3:4', hint: 'Divide by 6' },
      { question: 'Share 300 kg of maize in ratio 2:3:5', answer: '60 kg, 90 kg, 150 kg', hint: 'Total parts 10, one part 30 kg' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Ratio and Proportion',
    lessonNumber: 2,
    lessonTitle: 'Scale Drawings and Map Scales',
    lessonId: 'maths-f2-scale-drawing-1',
    order: 39,
    learningObjectives: [
      'Use map scales (e.g., 1:50,000) to find real distances',
      'Construct simple scale drawings given a scale'
    ],
    introduction: 'Maps and plans use scales to represent large areas on paper. Today we learn to read scales and calculate actual distances.',
    keyPoints: [
      'Scale 1 : n means 1 cm on map = n cm in real life; can also be expressed as a ratio.',
      'Convert units consistently (cm to km: divide by 100,000).',
      'Example: scale 1:100,000, distance on map 6 cm → real = 6 × 100,000 cm = 600,000 cm = 6 km.'
    ],
    detailedContent: `Scale as ratio:

Example: scale 1:50,000. 4 cm on map → real = 4 × 50,000 cm = 200,000 cm = 2 km.

Constructing scale drawing: if a field is 100 m × 60 m, scale 1:1000 → dimensions on paper: 100/1000 = 0.1 m = 10 cm, and 60/1000 = 0.06 m = 6 cm. Draw a rectangle 10 cm × 6 cm.

Malawi example: A map of Lilongwe has scale 1:200,000. Distance between two villages on map 5 cm → real = 5 × 200,000 cm = 1,000,000 cm = 10 km.

Now: scale 1:25,000, map distance 8 cm. Find real distance in km.`,
    summary: 'Map scale (1:n) means 1 unit on map = n units real. Use consistent units to calculate distances.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Lilongwe Map', description: 'Find real distance between Likuni and Lilongwe City.' }
    ],
    practiceQuestions: [
      { question: 'Scale 1:500, map distance 12 cm. Real distance in metres?', answer: '60 m', hint: '12×500=6000 cm = 60 m' },
      { question: 'A field is 120 m × 80 m. Scale 1:2000. Find dimensions on paper.', answer: '6 cm × 4 cm', hint: '120/2000=0.06 m=6 cm, 80/2000=0.04 m=4 cm' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Pythagoras Theorem',
    lessonNumber: 1,
    lessonTitle: 'The Pythagorean Theorem (a² + b² = c²)',
    lessonId: 'maths-f2-pythagoras-1',
    order: 40,
    learningObjectives: [
      'State the Pythagorean theorem (right‑angled triangle)',
      'Calculate the hypotenuse given two legs'
    ],
    introduction: 'Pythagoras discovered a relationship between the sides of a right triangle. Today we use a² + b² = c² to find missing sides.',
    keyPoints: [
      'c is the hypotenuse (longest side, opposite right angle).',
      'a² + b² = c².',
      'Example: legs 3 cm and 4 cm → c² = 9+16=25 → c=5 cm.'
    ],
    detailedContent: `Pythagoras theorem: a² + b² = c².

Example 1: Find hypotenuse when legs are 6 m and 8 m. c² = 36+64=100 → c=10 m.

Example 2 (context): A rectangular field is 30 m by 40 m. Diagonal path length: √(30²+40²)=√(900+1600)=√2500=50 m.

Malawi example: A ladder leans against a wall. The base is 2 m from wall, top reaches 4.5 m high. How long is ladder? c² = 2²+4.5² = 4+20.25=24.25 → c≈4.92 m.

Now find hypotenuse: legs 5 cm, 12 cm.`,
    summary: 'For right triangles: a² + b² = c². Use to find missing sides.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Ladder against wall', description: 'Find length using Pythagoras.' }
    ],
    practiceQuestions: [
      { question: 'Find hypotenuse of right triangle with legs 9 cm, 12 cm.', answer: '15 cm', hint: '√(81+144)=√225=15' },
      { question: 'A right triangle has hypotenuse 13 cm, one leg 5 cm. Find other leg.', answer: '12 cm', hint: 'b² = 13² – 5² = 169-25=144 → b=12' }
    ]
  },

  // Topic: Circle geometry
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Circle Geometry',
    lessonNumber: 1,
    lessonTitle: 'Parts of a Circle and Circumference',
    lessonId: 'maths-f2-circle-1',
    order: 41,
    learningObjectives: [
      'Identify radius, diameter, circumference, chord, arc, sector',
      'Calculate circumference using C = πd or C = 2πr'
    ],
    introduction: 'Circles are everywhere – wheels, pots, drums. Today we name their parts and learn to calculate the distance around (circumference).',
    keyPoints: [
      'Radius (r) from centre to edge; diameter (d) = 2r, through centre.',
      'Circumference (C) = πd = 2πr. Use π ≈ 3.14 or 22/7.',
      'Other parts: chord (line joining two points), arc (part of circumference), sector (slice).'
    ],
    detailedContent: `Parts:
- Radius: from centre to circumference.
- Diameter: across circle through centre, d = 2r.
- Circumference: perimeter of circle. C = πd = 2πr.

Example: A circular well has radius 1.5 m. Circumference = 2×3.14×1.5 = 9.42 m.

Malawi example: A drum (nsonga) used for water has diameter 50 cm. Circumference = π×50 ≈ 157 cm.

Now calculate circumference of a circle with radius 7 cm (π=22/7): C = 2×22/7×7 = 44 cm.`,
    summary: 'Radius and diameter; circumference = πd = 2πr.',
    estimatedTime: '16 mins',
    malawiExamples: [
      { title: 'Water Drum', description: 'Circumference to tie rope around.' }
    ],
    practiceQuestions: [
      { question: 'Find circumference of a circle with radius 14 cm (π=22/7).', answer: '88 cm', hint: '2×22/7×14 = 88' },
      { question: 'Diameter is 10 m. Find circumference using π≈3.14.', answer: '31.4 m', hint: 'C=3.14×10=31.4' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Circle Geometry',
    lessonNumber: 2,
    lessonTitle: 'Area of a Circle',
    lessonId: 'maths-f2-circle-area-1',
    order: 42,
    learningObjectives: [
      'Calculate area of a circle using A = πr²',
      'Solve problems involving both area and circumference'
    ],
    introduction: 'How much paint to cover a circular table? How much grass in a circular garden? That is area. Today we learn A = πr².',
    keyPoints: [
      'Area of circle = πr².',
      'Given diameter, radius = d/2.',
      'Example: radius 5 cm → area = 3.14×25 = 78.5 cm².'
    ],
    detailedContent: `Formula A = πr².

Example 1: A circular garden has radius 4 m. Area = 3.14×16 = 50.24 m².

Example 2: A pond has diameter 6 m. Radius = 3 m, area = 3.14×9 = 28.26 m².

Malawi example: A traditional round hut has radius 2.5 m. Floor area = 3.14×6.25 ≈ 19.6 m².

Now find area of circle radius 7 cm (π=22/7): A = 22/7 × 7² = 22/7×49 = 154 cm².`,
    summary: 'Area of circle = πr². Use radius; if given diameter, divide by 2.',
    estimatedTime: '16 mins',
    malawiExamples: [
      { title: 'Round Hut Floor', description: 'Area for flooring material.' }
    ],
    practiceQuestions: [
      { question: 'Find area of circle with radius 10 cm (π=3.14).', answer: '314 cm²', hint: '3.14×100=314' },
      { question: 'Diameter 14 cm, find area (π=22/7).', answer: '154 cm²', hint: 'r=7, area=22/7×49=154' }
    ]
  },

  // Topic: Surface area and volume of cubes, cuboids, cylinders
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Mensuration – Surface Area',
    lessonNumber: 1,
    lessonTitle: 'Surface Area of Cubes and Cuboids',
    lessonId: 'maths-f2-surface-area-1',
    order: 43,
    learningObjectives: [
      'Calculate surface area of a cube and cuboid',
      'Apply formulas to real objects (e.g., boxes, rooms)'
    ],
    introduction: 'To wrap a gift, you need to know the surface area. Today we find total surface area of boxes (cuboids) and cubes.',
    keyPoints: [
      'Cube: 6 faces, each area = s² → SA = 6s².',
      'Cuboid: SA = 2(lw + lh + wh).',
      'Units: area in cm², m².'
    ],
    detailedContent: `Cube SA = 6 × side².

Cuboid SA = 2(lw + lh + wh).

Example 1: Cube side 4 cm. SA = 6×16 = 96 cm².

Example 2: A box 20 cm × 10 cm × 5 cm. SA = 2(20×10 + 20×5 + 10×5) = 2(200+100+50) = 2×350 = 700 cm².

Malawi example: A maize storage bin (metal) of dimensions 2 m × 1.5 m × 1 m. Surface area (outside) for painting: 2(2×1.5 + 2×1 + 1.5×1) = 2(3+2+1.5) = 2×6.5 = 13 m².

Now calculate surface area of a cube side 10 cm and a cuboid 15 cm × 12 cm × 8 cm.`,
    summary: 'Cube: SA=6s². Cuboid: SA=2(lw+lh+wh).',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Maize Bin', description: 'Paint area for a metal storage bin.' }
    ],
    practiceQuestions: [
      { question: 'Cube side 5 cm, find SA.', answer: '150 cm²', hint: '6×25=150' },
      { question: 'Cuboid 4 m × 3 m × 2 m, find SA.', answer: '52 m²', hint: '2(12+8+6)=2×26=52' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Mensuration – Volume',
    lessonNumber: 1,
    lessonTitle: 'Volume of Cylinders',
    lessonId: 'maths-f2-cylinder-volume-1',
    order: 44,
    learningObjectives: [
      'Calculate volume of a cylinder using V = πr²h',
      'Relate volume to capacity in litres (1 m³ = 1000 L)'
    ],
    introduction: 'Cylinders are common – water tanks, drums, pipes. Today we learn to find their volume and capacity.',
    keyPoints: [
      'Volume of cylinder = area of base × height = πr²h.',
      'Units: cm³, m³.',
      'Capacity: 1 cm³ = 1 mL, 1 m³ = 1000 L.'
    ],
    detailedContent: `Formula V = πr²h.

Example 1: A cylindrical drum radius 0.5 m, height 1.2 m. Volume = 3.14×0.25×1.2 = 3.14×0.3 = 0.942 m³ = 942 L.

Example 2: A pipe (internal) radius 5 cm, length 3 m = 300 cm. Volume = 3.14×25×300 = 3.14×7500 = 23,550 cm³ = 23.55 L.

Malawi example: A water tank radius 0.7 m, height 1.5 m. V = 3.14×0.49×1.5 ≈ 3.14×0.735 = 2.3079 m³ ≈ 2308 L.

Now find volume of cylinder r=10 cm, h=20 cm (π=3.14).`,
    summary: 'Volume of cylinder = πr²h. Convert to litres: 1 m³ = 1000 L, 1000 cm³ = 1 L.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Water Tank', description: 'Calculate capacity for rainwater harvesting.' }
    ],
    practiceQuestions: [
      { question: 'r=7 cm, h=10 cm, π=22/7, find volume.', answer: '1540 cm³', hint: '22/7×49×10 = 1540' },
      { question: 'A cylinder has volume 1 m³, height 2 m. Find radius (π=3.14).', answer: '0.399 m ≈ 40 cm', hint: 'πr²×2=1 → r²=1/(6.28)≈0.159 → r≈0.399 m' }
    ]
  },

  // Topic: Probability
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Probability',
    lessonNumber: 1,
    lessonTitle: 'Probability of Simple Events',
    lessonId: 'maths-f2-probability-1',
    order: 45,
    learningObjectives: [
      'Define probability as number of favourable outcomes / total outcomes',
      'Calculate probability of simple events (e.g., rolling a die, picking a coloured ball)'
    ],
    introduction: 'Probability measures chance – from 0 (impossible) to 1 (certain). Today we calculate the likelihood of simple events.',
    keyPoints: [
      'P(event) = favourable outcomes / total possible outcomes (all equally likely).',
      'Example: rolling a die – P(5) = 1/6.',
      'Probability 0.5 means even chance.'
    ],
    detailedContent: `Formula: P = (favourable) / (total).

Example 1: A bag has 4 red, 3 blue, 5 green balls. Total = 12. P(red) = 4/12 = 1/3. P(blue) = 3/12 = 1/4.

Example 2: Select a day of week at random. P(Saturday) = 1/7, P(weekend) = 2/7.

Malawi example: In a lottery, 500 tickets, you have 5 tickets. P(win) = 5/500 = 1/100 = 0.01.

Now calculate: A box has 10 eggs, 2 are bad. Probability of picking a good egg?`,
    summary: 'Probability = favourable / total. Range 0 to 1.',
    estimatedTime: '16 mins',
    malawiExamples: [
      { title: 'Eggs in Basket', description: 'Probability of good egg.' }
    ],
    practiceQuestions: [
      { question: 'A deck of 52 cards, probability of drawing a King?', answer: '4/52 = 1/13', hint: '4 kings' },
      { question: 'If probability of rain is 0.3, what is probability of no rain?', answer: '0.7', hint: '1 – 0.3 = 0.7' }
    ]
  },

  // ======================================================================
  // MATHEMATICS – FORM 3 (remaining topics)
  // ======================================================================
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Indices and Logarithms',
    lessonNumber: 1,
    lessonTitle: 'Laws of Indices (Positive and Negative Exponents)',
    lessonId: 'maths-f3-indices-1',
    order: 46,
    learningObjectives: [
      'State and apply laws of indices for multiplication, division, and power of a power',
      'Simplify expressions with integer exponents'
    ],
    introduction: 'Indices (powers) are a shorthand for repeated multiplication. Today we learn the rules to simplify expressions like 2³ × 2⁵ or (x²)³.',
    keyPoints: [
      'aᵐ × aⁿ = aᵐ⁺ⁿ',
      'aᵐ ÷ aⁿ = aᵐ⁻ⁿ',
      '(aᵐ)ⁿ = aᵐⁿ',
      'a⁰ = 1',
      'a⁻ⁿ = 1/aⁿ'
    ],
    detailedContent: `Laws:

1. Multiply: 3² × 3³ = 3⁵ = 243.
2. Divide: 4⁵ ÷ 4² = 4³ = 64.
3. Power of power: (x³)² = x⁶.
4. Zero exponent: 7⁰ = 1.
5. Negative exponent: 2⁻³ = 1/2³ = 1/8.

Example: Simplify 2x² × 3x³ = 6x⁵.
Simplify (2x³)² = 4x⁶.

Malawi example: Population growth: if population doubles every year (factor 2), after 3 years factor = 2³ = 8.

Now simplify: 5² × 5⁴ ÷ 5³, and (3⁻²) × (3⁴).`,
    summary: 'Laws: aᵐaⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰=1; a⁻ⁿ=1/aⁿ.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Population Growth', description: 'Doubling using powers.' }
    ],
    practiceQuestions: [
      { question: 'Simplify 2³ × 2⁴', answer: '2⁷ = 128', hint: '3+4=7' },
      { question: 'Simplify (3²)⁴', answer: '3⁸ = 6561', hint: '2×4=8' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Indices and Logarithms',
    lessonNumber: 2,
    lessonTitle: 'Introduction to Logarithms',
    lessonId: 'maths-f3-logarithms-1',
    order: 47,
    learningObjectives: [
      'Define logarithm as exponent (logₐx = y ↔ aʸ = x)',
      'Use the laws of logarithms for multiplication and division'
    ],
    introduction: 'Logarithms are the inverse of powers. If 10² = 100, then log₁₀ 100 = 2. Today we learn what logs are and how to use them.',
    keyPoints: [
      'logₐ x = y means aʸ = x.',
      'Common log: base 10 (log₁₀). Natural log: base e (ln).',
      'Laws: log(AB) = log A + log B; log(A/B) = log A – log B; log(Aᵏ) = k log A.'
    ],
    detailedContent: `Definition: logₐ x = y ↔ aʸ = x.

Example: log₁₀ 1000 = 3 because 10³ = 1000.

Laws:

1. log(AB) = log A + log B.
2. log(A/B) = log A – log B.
3. log(Aᵏ) = k log A.

Example: log(12) = log(3×4) = log 3 + log 4.

Malawi example: If an earthquake is 1000 times more powerful than another, magnitude difference = log₁₀(1000) = 3.

Now calculate: log 5 + log 2 = log 10 = 1 if base 10.`,
    summary: 'logₐx = y means aʸ = x. Laws: sum of logs = log of product; difference = log of quotient; power = exponent × log.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Earthquake Magnitude', description: 'Log scale for intensity.' }
    ],
    practiceQuestions: [
      { question: 'Write 3² = 9 in logarithmic form.', answer: 'log₃9 = 2', hint: 'Base 3, exponent 2.' },
      { question: 'Simplify log 8 + log 5 – log 4 (base 10).', answer: 'log 10 = 1', hint: 'log(8×5/4)=log 10=1' }
    ]
  },

  // Topic: Surds
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Surds',
    lessonNumber: 1,
    lessonTitle: 'Simplifying Surds (√)',
    lessonId: 'maths-f3-surds-1',
    order: 48,
    learningObjectives: [
      'Simplify surds by factorising perfect squares',
      'Add and subtract surds with the same radicand'
    ],
    introduction: 'Surds are irrational square roots like √2, √3. Today we learn to simplify them and combine like terms.',
    keyPoints: [
      '√(ab) = √a × √b.',
      'Simplify √72 = √(36×2) = 6√2.',
      'Only surds with the same radicand can be added/subtracted.'
    ],
    detailedContent: `Simplifying:

√48 = √(16×3) = 4√3.
√125 = √(25×5) = 5√5.

Addition: 3√5 + 2√5 = 5√5.
Subtraction: 7√2 – 4√2 = 3√2.

Cannot combine √3 + √2.

Malawi example: A triangular field has sides √50 m, √50 m, √98 m. Simplify each: √50=5√2, √98=7√2. Perimeter = 5√2+5√2+7√2 = 17√2 m.

Now simplify: √32, √75. Add: 2√7 + 5√7.`,
    summary: 'Simplify surds by extracting square factors. Combine like surds by adding coefficients.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Field Perimeter', description: 'Add surds for triangle sides.' }
    ],
    practiceQuestions: [
      { question: 'Simplify √98', answer: '7√2', hint: '98=49×2' },
      { question: 'Simplify 3√12 – 2√27', answer: '3×2√3 – 2×3√3 = 6√3 – 6√3 = 0', hint: '√12=2√3, √27=3√3' }
    ]
  },

  // Topic: Linear and quadratic graphs
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Graphs of Functions',
    lessonNumber: 1,
    lessonTitle: 'Plotting Linear Graphs',
    lessonId: 'maths-f3-linear-graphs-1',
    order: 49,
    learningObjectives: [
      'Plot points for a linear function y = mx + c',
      'Draw the straight line and interpret gradient and intercept'
    ],
    introduction: 'Linear graphs show relationships like distance over time at constant speed. Today we plot them and understand gradient (slope) and y‑intercept.',
    keyPoints: [
      'Equation y = mx + c: m = gradient (steepness, rise/run), c = y‑intercept (where line crosses y‑axis).',
      'To plot: choose at least 2 x‑values, compute y, plot points, join.',
      'Example: y = 2x + 1. Table: x=0→y=1, x=1→y=3, x=2→y=5.'
    ],
    detailedContent: `Plotting steps:

Example: y = 3x – 2.
x: 0,1,2 → y: –2,1,4. Plot (0,-2),(1,1),(2,4); draw line.

Gradient m = change in y / change in x.

Interpretation: For a maize yield function, m = yield increase per extra fertiliser unit.

Malawi example: Distance travelled = 60t (t in hours). Graph through (0,0),(1,60),(2,120). Gradient = 60 (speed).

Now create table and plot y = 4x – 3.`,
    summary: 'Linear graphs: y = mx + c. Plot points, join line. Gradient = rise/run, intercept = c.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Distance vs Time', description: 'Constant speed graph.' }
    ],
    practiceQuestions: [
      { question: 'What is the gradient of y = 5x – 2?', answer: '5', hint: 'Coefficient of x.' },
      { question: 'Plot points for y = 2x + 3 for x = 0,1,2.', answer: '(0,3),(1,5),(2,7)', hint: 'Compute y.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Graphs of Functions',
    lessonNumber: 2,
    lessonTitle: 'Plotting Quadratic Graphs (Parabolas)',
    lessonId: 'maths-f3-quadratic-graphs-1',
    order: 50,
    learningObjectives: [
      'Plot quadratic graphs y = ax² + bx + c for a range of x',
      'Identify turning point (vertex) and axis of symmetry'
    ],
    introduction: 'Quadratic graphs are curved (parabolas). They describe projectile motion, area problems, and optimisation. Today we learn to draw them.',
    keyPoints: [
      'Choose x‑values, calculate y, plot points, then join with smooth curve.',
      'The graph is symmetric about a vertical line (axis of symmetry).',
      'The turning point (vertex) is the highest or lowest point.'
    ],
    detailedContent: `Example: y = x² – 4x + 3. For x = 0 to 4:
x:0,1,2,3,4 → y:3,0,-1,0,3.
Plot points, smooth curve. Vertex at x=2, y=-1.

Axis of symmetry: x = –b/(2a).

Malawi example: The height of a thrown stone h = –5t² + 20t + 1. Plot h vs t to find maximum height.

Now plot y = x² – 2x – 3 for x = –2 to 4.`,
    summary: 'Quadratic graphs: parabolic shape, symmetric. Vertex = turning point. Use table of values to plot.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Projectile Motion', description: 'Height vs time parabola.' }
    ],
    practiceQuestions: [
      { question: 'For y = x² – 6x + 8, find the axis of symmetry.', answer: 'x = 3', hint: '–b/(2a) = 6/2=3' },
      { question: 'Plot point when x=0 for y = 2x² – 5x + 1.', answer: 'y = 1', hint: 'Substitute 0.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Simultaneous Equations (non‑linear)',
    lessonNumber: 1,
    lessonTitle: 'One Linear, One Quadratic (Graphical and Algebraic)',
    lessonId: 'maths-f3-simultaneous-linear-quadratic-1',
    order: 51,
    learningObjectives: [
      'Solve a linear and quadratic system by substitution',
      'Interpret solutions as intersection points'
    ],
    introduction: 'When a line meets a parabola, they can intersect in 0, 1, or 2 points. Today we find those intersections algebraically.',
    keyPoints: [
      'Substitute the linear equation into the quadratic.',
      'Solve the resulting quadratic equation.',
      'Find corresponding y‑values using the linear equation.'
    ],
    detailedContent: `Example: y = x + 1 and y = x² – 3x + 4.
Set x+1 = x² – 3x + 4 → 0 = x² – 4x + 3 → (x-1)(x-3)=0 → x=1,3.
Then y = 2,4. Intersection points (1,2) and (3,4).

Malawi example: A stone thrown (parabola) and a bird flying at constant height (horizontal line). Solve to find when stone reaches bird’s height.

Now solve: y = 2x – 1 and y = x² – 3x + 5.`,
    summary: 'Substitute linear into quadratic, solve, then find y. Solutions are intersection points.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Stone and Bird', description: 'Find meeting times.' }
    ],
    practiceQuestions: [
      { question: 'Solve y = x – 2 and y = x² – 5x + 6', answer: '(2,0) and (4,2)', hint: 'x-2 = x²-5x+6 → x²-6x+8=0 → (x-2)(x-4)=0' },
      { question: 'How many solutions for y = 2x+1 and y = x²+1?', answer: 'Two (x=0, x=2)', hint: '2x+1=x²+1 → x²-2x=0 → x(x-2)=0' }
    ]
  },

  // Topic: Variation (direct, inverse, joint)
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Variation',
    lessonNumber: 1,
    lessonTitle: 'Direct and Inverse Variation (Advanced)',
    lessonId: 'maths-f3-variation-1',
    order: 52,
    learningObjectives: [
      'Write equations for direct variation (y = kx) and inverse variation (y = k/x)',
      'Find the constant of proportionality from given data'
    ],
    introduction: 'Variation describes how one quantity changes with another. Direct (more x, more y), inverse (more x, less y). Today we use formulas to solve problems.',
    keyPoints: [
      'Direct: y = kx. Find k using known pair, then predict.',
      'Inverse: y = k/x. xy = k constant.',
      'Example: y ∝ x, y=10 when x=2 → k=5 → y=5x.'
    ],
    detailedContent: `Direct variation: The cost of maize is proportional to weight. If 5 kg cost 400 MK, k = 400/5 = 80. So cost = 80 × weight. For 12 kg, cost = 960 MK.

Inverse variation: Time to cultivate a field is inversely proportional to number of workers. If 4 workers take 6 hours, k = 4×6 = 24 worker‑hours. 8 workers take 24/8 = 3 hours.

Malawi example: Harvest (kg) directly proportional to fertiliser used (kg). Given 50 kg fertiliser gives 2000 kg maize, find k and predict for 75 kg.

Now: y ∝ x, y=20 when x=4. Find y when x=7.`,
    summary: 'Direct: y = kx. Inverse: xy = k. Use given condition to find k, then solve.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Fertiliser Yield', description: 'Direct variation.' }
    ],
    practiceQuestions: [
      { question: 'y ∝ x, y=15 when x=3. Find y when x=8.', answer: '40', hint: 'k=5, y=5×8=40' },
      { question: 'y ∝ 1/x, y=12 when x=4. Find y when x=6.', answer: '8', hint: 'k=48, y=48/6=8' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Variation',
    lessonNumber: 2,
    lessonTitle: 'Joint and Partial Variation',
    lessonId: 'maths-f3-variation-2',
    order: 53,
    learningObjectives: [
      'Write equations for joint variation (y ∝ xz)',
      'Solve problems involving combined variations'
    ],
    introduction: 'Sometimes a quantity depends on more than one factor. Joint variation handles these. Today we solve problems with multiple variables.',
    keyPoints: [
      'Joint: y ∝ xz → y = kxz.',
      'Partial: y = a + bx (or combination).',
      'Find constant of proportionality using data.'
    ],
    detailedContent: `Joint variation: The weight of a harvest (W) is proportional to both area (A) and fertiliser (F). W = kAF. If 2 ha and 100 kg fertiliser give 4000 kg, k = 4000/(2×100)=20. For 3 ha and 150 kg fertiliser, W = 20×3×150 = 9000 kg.

Partial variation: A taxi charges fixed fee (c) plus per km (m). Cost = a + bx. Given two data points, solve for a and b.

Example: 10 km cost 2500 MK, 15 km cost 3500 MK. Then b = (3500-2500)/(15-10)=1000/5=200 MK/km. a = 2500 – 200×10 = 500. So cost = 500 + 200x.

Malawi example: Cane yield (Y) varies jointly with rainfall (R) and fertiliser (F). Find constant from given data.

Now practise: Y ∝ AD, Y=120 when A=4, D=3. Find Y when A=5, D=6.`,
    summary: 'Joint: y = kxz. Partial: y = a + bx (linear). Use data to solve for constants.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Taxi Fare', description: 'Fixed charge plus per km.' }
    ],
    practiceQuestions: [
      { question: 'y ∝ xy, y=24 when x=3, y=2? Actually y ∝ xz? Let y ∝ xz, y=20 when x=2, z=5. Find k and y when x=3,z=10.', answer: 'k=2, y=60', hint: '20=k×2×5 → k=2; y=2×3×10=60' },
      { question: 'Cost part: fixed 3000 MK plus 400 MK per unit. Find cost for 8 units.', answer: '6200 MK', hint: '3000+400×8=6200' }
    ]
  },

  // Topic: Trigonometry
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Trigonometry',
    lessonNumber: 1,
    lessonTitle: 'Sine, Cosine, Tangent for Acute Angles',
    lessonId: 'maths-f3-trigonometry-1',
    order: 54,
    learningObjectives: [
      'Define sin θ, cos θ, tan θ in right triangles',
      'Use trig ratios to find unknown sides'
    ],
    introduction: 'Trigonometry connects angles and side lengths of right triangles. It helps find heights of trees or distances across a river. Today we learn sine, cosine, tangent.',
    keyPoints: [
      'sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent.',
      'SOH‑CAH‑TOA mnemonic.',
      'Used to find sides given angle and one side.'
    ],
    detailedContent: `Example: right triangle with angle 30°, adjacent 10 cm. Find opposite (opp) = tan30° × adj = (1/√3)×10 ≈ 5.77 cm. Hypotenuse = adj / cos30° = 10 / 0.866 ≈ 11.55 cm.

Malawi example: A ladder leans against a wall making 60° with ground. Ladder length 5 m. Height reached = 5 × sin60° = 5 × 0.866 = 4.33 m. Distance from wall = 5 × cos60° = 2.5 m.

Now find: In a right triangle, angle 30°, opposite 8 cm. Find hypotenuse (sin).`,
    summary: 'sin = opp/hyp, cos = adj/hyp, tan = opp/adj. Use SOH‑CAH‑TOA.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Ladder against wall', description: 'Find height using sine.' }
    ],
    practiceQuestions: [
      { question: 'In right triangle, angle 45°, opposite 10 cm. Find hypotenuse.', answer: '14.14 cm', hint: 'hyp = opp/sin45 = 10/0.707 ≈ 14.14' },
      { question: 'tan θ = 0.75, find angle θ (use calculator).', answer: '≈ 36.9°', hint: 'inverse tangent.' }
    ]
  },

  // Topic: Vectors (basic)
  {
    subject: 'Mathematics',
    form: 'Form 3',
    topic: 'Vectors',
    lessonNumber: 1,
    lessonTitle: 'Introduction to Vectors and Scalar Quantities',
    lessonId: 'maths-f3-vectors-1',
    order: 55,
    learningObjectives: [
      'Distinguish between scalar and vector quantities',
      'Represent vectors by directed line segments and column notation'
    ],
    introduction: 'Vectors have magnitude and direction – unlike scalars (only magnitude). Today we learn how to write vectors and add them.',
    keyPoints: [
      'Scalars: mass, speed, distance, energy.',
      'Vectors: displacement, velocity, force, weight.',
      'Column vector: [x; y] means move x horizontally, y vertically.',
      'Magnitude: √(x² + y²).'
    ],
    detailedContent: `Vectors (examples): displacement from Lilongwe to Mchinji is a vector (direct distance and direction).

Column vector notation: a = [3; 2] means 3 right, 2 up.

Magnitude: |a| = √(3²+2²) = √13.

Addition: a = [2;1], b = [3;4] → a+b = [5;5].

Malawi example: A boat crosses a river. Its velocity vector water = [3;0], current = [0;2]. Resultant = [3;2].

Now find magnitude of [4;3].`,
    summary: 'Vectors have magnitude and direction. Represented as column [x;y]. Add components. Magnitude = √(x²+y²).',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'River Crossing', description: 'Add velocity vectors.' }
    ],
    practiceQuestions: [
      { question: 'Find magnitude of vector [6;8]', answer: '10', hint: '√(36+64)=√100=10' },
      { question: 'Add [2;-3] and [-1;4]', answer: '[1;1]', hint: '2-1=1, -3+4=1' }
    ]
  },

  // ======================================================================
  // MATHEMATICS – FORM 4 (remaining topics)
  // ======================================================================
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Algebra – Polynomials',
    lessonNumber: 1,
    lessonTitle: 'Remainder Theorem',
    lessonId: 'maths-f4-remainder-theorem-1',
    order: 56,
    learningObjectives: [
      'State the remainder theorem: when f(x) is divided by (x – a), remainder = f(a)',
      'Find remainders without performing division'
    ],
    introduction: 'Dividing polynomials can be messy. The remainder theorem gives a quick way to find the remainder when dividing by (x – a). Today we learn this shortcut.',
    keyPoints: [
      'If f(x) is divided by (x – a), remainder = f(a).',
      'Example: f(x) = x² – 3x + 5, divide by (x – 2). f(2) = 4 – 6 + 5 = 3. Remainder is 3.'
    ],
    detailedContent: `Remainder theorem: remainder = f(a).

Example: f(x) = 2x³ – 5x + 7, divided by (x + 2). Note (x+2) = (x – (–2)), so a = –2. f(–2) = 2(–8) –5(–2)+7 = –16 +10 +7 = 1. Remainder = 1.

If remainder = 0, then (x – a) is a factor.

Malawi example: For polynomial representing total cost, find remainder to check divisibility.

Now find remainder when x² – 4x + 9 is divided by (x – 3).`,
    summary: 'Remainder = f(a) when dividing by (x – a).',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Cost Function', description: 'Check if divisible by (x – units).' }
    ],
    practiceQuestions: [
      { question: 'Find remainder when x³ – 2x + 3 is divided by (x – 1).', answer: '2', hint: 'f(1)=1-2+3=2' },
      { question: 'If f(x) divided by (x + 4) has remainder 7, what is f(–4)?', answer: '7', hint: 'f(–4)=7' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Algebra – Polynomials',
    lessonNumber: 2,
    lessonTitle: 'Factor Theorem and Factoring Cubics',
    lessonId: 'maths-f4-factor-theorem-1',
    order: 57,
    learningObjectives: [
      'State factor theorem: (x – a) is a factor iff f(a) = 0',
      'Factor cubic polynomials using factor theorem and division'
    ],
    introduction: 'If the remainder is zero, the divisor is a factor. The factor theorem helps us find factors of cubic polynomials. Today we use it to factorise.',
    keyPoints: [
      'If f(a) = 0, then (x – a) is a factor.',
      'Use the factor theorem to test possible roots (factors of constant term).',
      'After finding one factor, perform polynomial division or synthetic division to reduce to quadratic.'
    ],
    detailedContent: `Example: factor f(x) = x³ – 6x² + 11x – 6. Test x=1: f(1)=1-6+11-6=0, so (x-1) factor. Divide to get x² – 5x + 6 = (x-2)(x-3). Thus f(x) = (x-1)(x-2)(x-3).

Malawi example: A profit model P(x) = x³ – 8x² + 19x – 12. Find break‑even points by factoring.

Now factor x³ – 3x² – 4x + 12. Test x=2: 8-12-8+12=0 → (x-2) factor. Divide get x² – x – 6 = (x-3)(x+2). So (x-2)(x-3)(x+2).`,
    summary: 'Factor theorem: if f(a)=0 then (x-a) is a factor. Use to factor cubics.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Profit Factorisation', description: 'Find break‑even quantities.' }
    ],
    practiceQuestions: [
      { question: 'Is (x – 3) a factor of x³ – 4x² + x + 6?', answer: 'Yes (f(3)=27-36+3+6=0)', hint: 'Evaluate f(3).' },
      { question: 'Factor x³ – 2x² – 5x + 6', answer: '(x-1)(x+2)(x-3)', hint: 'Test x=1 →0; divide to get quadratic.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Functions',
    lessonNumber: 1,
    lessonTitle: 'Domain, Range, and Composite Functions',
    lessonId: 'maths-f4-functions-1',
    order: 58,
    learningObjectives: [
      'Define domain (input values) and range (output values)',
      'Find composite functions f(g(x))'
    ],
    introduction: 'Functions relate inputs to outputs. Domain is set of allowed inputs, range is set of outputs. We also combine functions. Today we practise.',
    keyPoints: [
      'Domain: all possible x‑values. Often all real numbers except where division by zero or even root negative.',
      'Range: all possible y‑values.',
      'Composite: f(g(x)) means “first apply g, then f”.'
    ],
    detailedContent: `Domain example: f(x) = √(x – 3) → x ≥ 3.

Range example: f(x) = x² + 2 → y ≥ 2.

Composite: f(x) = x², g(x) = x+1. f(g(x)) = (x+1)². g(f(x)) = x²+1.

Malawi example: f(x) = price after discount, g(x) = price after tax. Go to market: apply discount then tax.

Now find composite: f(x)=2x, g(x)=3x+1, find f(g(2)).`,
    summary: 'Domain = inputs, range = outputs. Composite: f(g(x)).',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Discount then Tax', description: 'Composite function for final price.' }
    ],
    practiceQuestions: [
      { question: 'If f(x)=x+3 and g(x)=2x, find f(g(4)).', answer: '11', hint: 'g(4)=8, f(8)=11' },
      { question: 'Find domain of f(x)=1/(x-5).', answer: 'x ≠ 5', hint: 'Denominator cannot be zero.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Calculus – Differentiation',
    lessonNumber: 1,
    lessonTitle: 'Derivative as Gradient of a Curve',
    lessonId: 'maths-f4-differentiation-1',
    order: 59,
    learningObjectives: [
      'Explain that derivative = gradient (rate of change)',
      'Differentiate simple powers: if y = xⁿ, then dy/dx = nxⁿ⁻¹'
    ],
    introduction: 'Calculus helps us find rates of change – like speed from distance. The derivative gives the gradient at any point on a curve. Today we begin with power rule.',
    keyPoints: [
      'Derivative dy/dx is gradient of tangent at a point.',
      'Power rule: d/dx (xⁿ) = n xⁿ⁻¹.',
      'Constant multiple: d/dx (k xⁿ) = k n xⁿ⁻¹.',
      'Sum rule: derivative of sum = sum of derivatives.'
    ],
    detailedContent: `Example: y = x² → dy/dx = 2x. At x=3, gradient = 6.

If y = 3x⁴ → dy/dx = 12x³.

If y = x³ + 2x² – 5x + 4 → dy/dx = 3x² + 4x – 5.

Malawi example: Distance travelled s = 5t² (t in seconds). Speed v = ds/dt = 10t m/s. At t=3, speed = 30 m/s.

Now differentiate: y = 4x³ – 2x² + 7.`,
    summary: 'dy/dx = gradient. Power rule: d(xⁿ)/dx = n xⁿ⁻¹.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Distance vs Time', description: 'Velocity from derivative.' }
    ],
    practiceQuestions: [
      { question: 'Find derivative of y = 5x³', answer: '15x²', hint: '3×5=15, power 2' },
      { question: 'If y = 3x² + 2x + 1, find dy/dx at x=2.', answer: '14', hint: 'dy/dx=6x+2, at x=2 → 12+2=14' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Calculus – Integration',
    lessonNumber: 1,
    lessonTitle: 'Integration as Anti‑Differentiation',
    lessonId: 'maths-f4-integration-1',
    order: 60,
    learningObjectives: [
      'Define integration as reverse of differentiation',
      'Integrate simple powers: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C'
    ],
    introduction: 'Integration is the opposite of differentiation. It finds the area under a curve or the original function given its rate of change. Today we learn basic integrals.',
    keyPoints: [
      'Indefinite integral: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ –1).',
      'Adding constant C because derivative of constant is 0.',
      'Integral of sum = sum of integrals.'
    ],
    detailedContent: `Example: ∫ x² dx = x³/3 + C.
∫ 3x dx = 3 × x²/2 + C = (3x²/2)+C.
∫ (2x + 1) dx = x² + x + C.

Malawi example: If marginal cost (derivative) is MC = 4q – 2, then total cost function = ∫ MC dq = 2q² – 2q + C.

Now find ∫ (3x² + 4) dx.`,
    summary: 'Integration = reverse differentiation. ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Marginal Cost', description: 'Find total cost by integration.' }
    ],
    practiceQuestions: [
      { question: '∫ 4x³ dx', answer: 'x⁴ + C', hint: '4 × x⁴/4 = x⁴' },
      { question: '∫ (6x – 5) dx', answer: '3x² – 5x + C', hint: 'Integrate term by term.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Statistics – Cumulative Frequency',
    lessonNumber: 1,
    lessonTitle: 'Cumulative Frequency and Ogive',
    lessonId: 'maths-f4-cumulative-frequency-1',
    order: 61,
    learningObjectives: [
      'Construct cumulative frequency tables',
      'Draw an ogive (cumulative frequency curve) and estimate median, quartiles'
    ],
    introduction: 'Cumulative frequency tells us how many values are below a certain point. The ogive graph helps find the median and quartiles. Today we learn these.',
    keyPoints: [
      'Cumulative frequency = running total of frequencies.',
      'Plot upper class boundaries against cumulative frequency, join with smooth curve (ogive).',
      'Median = 50% mark, lower quartile = 25%, upper quartile = 75%.'
    ],
    detailedContent: `Example: maize yields (kg/ha): 10‑20:5, 20‑30:12, 30‑40:8, 40‑50:3. Cumulative: 5,17,25,28. Upper boundaries: 20,30,40,50. Plot points, draw ogive.

Median = value at cumulative frequency 14 (half of 28). Interpolate.

Malawi example: From crop yield data, estimate median yield.

Now construct cumulative frequency table given classes 0‑10:2,10‑20:5,20‑30:8,30‑40:4.`,
    summary: 'Cumulative frequency = running total. Ogive graph helps find median and quartiles.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Maize Yield Data', description: 'Estimate median yield.' }
    ],
    practiceQuestions: [
      { question: 'Given cumulative frequencies: 3,10,18,22. Total 22. Which cumulative is median?', answer: '11th value falls in second class (10)', hint: 'Total 22, median at 11th.' },
      { question: 'Lower quartile position for n=100 is?', answer: '25th', hint: '25% of 100 = 25' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Probability (Compound Events)',
    lessonNumber: 1,
    lessonTitle: 'Independent and Dependent Events',
    lessonId: 'maths-f4-probability-compound-1',
    order: 62,
    learningObjectives: [
      'Define independent events (P(A∩B) = P(A)×P(B))',
      'Use tree diagrams to calculate probabilities for dependent events (without replacement)'
    ],
    introduction: 'Sometimes events affect each other. Today we learn to calculate probabilities for independent and dependent events using multiplication and tree diagrams.',
    keyPoints: [
      'Independent: outcome of one does not affect the other. P(A and B) = P(A) × P(B).',
      'Dependent: probability changes after first event (e.g., drawing without replacement).',
      'Tree diagrams: multiply along branches, add for multiple outcomes.'
    ],
    detailedContent: `Independent example: Rolling a die (A: 6) and tossing a coin (B: heads). P(A and B) = (1/6)×(1/2)=1/12.

Dependent: Two marbles from bag of 3 red, 2 blue, without replacement. P(R then R) = (3/5)×(2/4)=6/20=0.3.

Tree diagram: branches for first draw, then second.

Malawi example: In a lottery of 50 tickets, 5 win. First ticket win prob = 5/50; second ticket win given first win = 4/49 (dependent).

Now calculate: P(two heads in two coin tosses, independent).`,
    summary: 'Independent: P(A∩B)=P(A)P(B). Dependent: use tree diagram, multiply conditional probabilities.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Lottery', description: 'Probability of two winning tickets without replacement.' }
    ],
    practiceQuestions: [
      { question: 'Two dice rolled. P(both show 6) = ?', answer: '1/36', hint: '1/6 × 1/6' },
      { question: 'From 10 tickets, 3 win. Pick 2 without replacement. P(both win)?', answer: '3/10 × 2/9 = 6/90 = 1/15', hint: 'Multiply fractions.' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Kinematics (Distance‑time, Speed‑time graphs)',
    lessonNumber: 1,
    lessonTitle: 'Interpreting Distance‑Time and Speed‑Time Graphs',
    lessonId: 'maths-f4-kinematics-graphs-1',
    order: 63,
    learningObjectives: [
      'Interpret distance‑time graphs (slope = speed)',
      'Interpret speed‑time graphs (slope = acceleration, area = distance)'
    ],
    introduction: 'Graphs of motion help analyse travel. Distance‑time shows position; speed‑time shows speed. Today we read these graphs and calculate distances.',
    keyPoints: [
      'Distance‑time: slope = speed. Horizontal line = stationary.',
      'Speed‑time: slope = acceleration; area under graph = distance travelled.',
      'Constant speed = horizontal line on speed‑time.'
    ],
    detailedContent: `Distance‑time example: A minibus travels 30 km in 0.5 h, then stops 0.25 h, then 20 km in 0.5 h. Slopes give speeds: 60 km/h, 0, 40 km/h.

Speed‑time: from 0 to 10 s at 2 m/s², constant 20 m/s for 10 s, decelerate. Area under triangle = ½×10×20=100 m, rectangle = 20×10=200 m, total = 300 m.

Malawi example: A bicycle trip – draw speed‑time graph and find total distance.

Now: A car travels at 30 m/s for 20 s, then decelerates to 0 in 10 s. Deceleration? 30/10 = 3 m/s². Distance = area under graph.`,
    summary: 'Distance‑time: slope = speed. Speed‑time: slope = acceleration, area = distance.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Minibus Journey', description: 'Find speeds and distances from graph.' }
    ],
    practiceQuestions: [
      { question: 'On a distance‑time graph, a straight line with slope 0 means?', answer: 'Stationary (distance constant)', hint: 'No movement.' },
      { question: 'On a speed‑time graph, area under a triangle of base 8 s, height 12 m/s is?', answer: '48 m', hint: '½×8×12=48' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 4',
    topic: 'Linear Programming',
    lessonNumber: 1,
    lessonTitle: 'Graphical Method for Two Variables',
    lessonId: 'maths-f4-linear-programming-1',
    order: 64,
    learningObjectives: [
      'Formulate linear programming problems from worded situations',
      'Solve using graphical method (feasible region, optimal point)'
    ],
    introduction: 'How to maximise profit with limited resources? Linear programming finds the best answer. Today we solve two‑variable problems graphically.',
    keyPoints: [
      'Constraints are inequalities that define feasible region.',
      'Plot each inequality, shade feasible region.',
      'Objective function (profit) is maximised or minimised at a vertex of feasible region.'
    ],
    detailedContent: `Example: A farmer can grow maize (x ha) and groundnuts (y ha). Constraints: x ≥ 0, y ≥ 0, x + y ≤ 10, x ≤ 6, y ≤ 8. Profit: 200x + 300y (in thousands). Find maximum.

Plot region, vertices: (0,0), (6,0), (6,4), (2,8), (0,8). Evaluate profit: 0, 1200, 200×6+300×4=1200+1200=2400, 200×2+300×8=400+2400=2800, 2400. Best at (2,8): 2800. So 2 ha maize, 8 ha groundnuts.

Malawi example: A bicycle producer: workers limited, painting time limited. Model and find max profit.

Now solve: maximise 3x + 2y subject to x ≥ 0, y ≥ 0, x ≤ 4, y ≤ 3, x + y ≤ 5.`,
    summary: 'Linear programming: graph constraints, feasible region, evaluate objective at vertices.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Crop Allocation', description: 'Maximise profit with land limits.' }
    ],
    practiceQuestions: [
      { question: 'In a feasible region, where does the maximum of a linear objective occur?', answer: 'At a vertex (corner point)', hint: 'Extreme point.' },
      { question: 'Given constraints x≥0, y≥0, 2x+ y ≤ 10, x+2y ≤ 10, what is the maximum of x+y?', answer: 'At intersection (10/3,10/3) gives 20/3≈6.67, check vertices: (0,5),(5,0) give 5, so max is 20/3', hint: 'Solve simultaneously.' }
    ]
  }
];

// async function seedLessons() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('Connected to MongoDB');
//     await Lesson.deleteMany({});
//     console.log('Cleared existing lessons');
//     await Lesson.insertMany(allLessons);
//     console.log(`Inserted ${allLessons.length} lessons`);
//     process.exit(0);
//   } catch (error) {
//     console.error('Error seeding lessons:', error);
//     process.exit(1);
//   }
// }

//seedLessons();

async function seedLessons() {
  // Check required environment variable
  if (!process.env.MONGODB_URI) {
    console.error('ERROR: MONGODB_URI environment variable is not defined.');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Optional: check if Lesson model is compiled (if not, will throw anyway)
    if (!Lesson || typeof Lesson.deleteMany !== 'function') {
      throw new Error('Lesson model not properly loaded. Check the path "../models/Lesson".');
    }

    await Lesson.deleteMany({});
    console.log('Cleared existing lessons');

    await Lesson.insertMany(allLessons);
    console.log(`Inserted ${allLessons.length} lessons`);

  } catch (error) {
    console.error('Error seeding lessons:', error);
    process.exit(1);
  } finally {
    // Close the database connection before exiting
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }

  process.exit(0);
}

seedLessons();