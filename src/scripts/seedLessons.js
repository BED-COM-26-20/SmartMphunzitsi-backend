const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('../models/Lesson');

dotenv.config();
const allLessons = [

  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Natural Resources',
    lessonNumber: 1,
    lessonTitle: 'Definition and Importance of Natural Resources in Agriculture',
    lessonId: 'agriculture-f1-natural-resources-1',
    order: 1,
    learningObjectives: [
      'Define natural resources',
      'List and explain the importance of natural resources that influence agricultural production'
    ],
    introduction: 'Have you ever thought about where the water for your garden comes from? Or why soil is so important for growing maize? These are NATURAL RESOURCES – gifts of nature that help us produce food. Today, we will learn about the natural resources that make agriculture possible in Malawi.',
    keyPoints: [
      'Natural resources are materials or substances that occur in nature and are useful to people.',
      'Key natural resources for agriculture: water, air, soil, vegetation, and sunlight.',
      'Water: essential for plant growth, animal drinking, and irrigation.',
      'Air: provides carbon dioxide for photosynthesis and oxygen for respiration.',
      'Soil: provides anchorage, water, and nutrients for plants.',
      'Vegetation: provides food, shelter, and prevents soil erosion.',
      'Sunlight: provides energy for photosynthesis and warmth.'
    ],
    detailedContent: `Natural Resources in Agriculture

Natural resources are materials from nature that people use. For a farmer in Malawi, natural resources are the foundation of all farming activities.

The main natural resources that influence agricultural production are:

1. Water: Without water, crops cannot grow and animals cannot drink. Rain is the main source in Malawi, but rivers like the Shire, Lake Malawi, and groundwater are also vital. Water is used for irrigation, livestock watering, and cleaning produce.

2. Air: Plants take carbon dioxide from the air for photosynthesis. They release oxygen. Wind helps with pollination and seed dispersal, but strong winds can damage crops.

3. Soil: Soil is the layer covering the earth where plants grow. It anchors roots, holds water, and provides nutrients. Different soils (sand, clay, loam) have different properties. In Malawi, we grow maize, groundnuts, and vegetables in various soils.

4. Vegetation: Natural plants and trees protect soil from erosion, provide habitat for beneficial animals, and can be used as mulch or green manure.

5. Sunlight: Energy from the sun drives photosynthesis. Without sunlight, no crop would grow. The amount of sunlight affects crop yields.

Importance of Each Resource:

- Water: Essential for seed germination, growth, and food production. Without water, there is drought and famine.
- Air: Carbon dioxide is a raw material for making food in plants.
- Soil: Without soil, there would be no maize, groundnuts, or vegetables.
- Sunlight: Determines growing seasons and crop types.
- Vegetation: Protects the environment and provides food for livestock.`,
    summary: 'Natural resources for agriculture include water, air, soil, vegetation, and sunlight. Each plays a critical role in crop and animal production.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'River Water for Irrigation', description: 'Farmers along the Shire River use water for dry-season irrigation.' },
      { title: 'Sunlight for Maize', description: 'Maize needs plenty of sunlight to grow and produce high yields.' }
    ],
    practiceQuestions: [
      { question: 'Name three natural resources essential for growing maize in Malawi.', answer: 'Water, soil, sunlight', hint: 'Think about what a maize seed needs to grow.' },
      { question: 'Why is air important for crop production?', answer: 'Plants need carbon dioxide for photosynthesis and oxygen for respiration.', hint: 'Gases involved in plant metabolism.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Natural Resources',
    lessonNumber: 2,
    lessonTitle: 'Depletion and Conservation of Natural Resources',
    lessonId: 'agriculture-f1-natural-resources-2',
    order: 2,
    learningObjectives: [
      'Describe ways in which natural resources can be depleted',
      'Explain methods of conserving soil, water, and vegetation'
    ],
    introduction: 'Natural resources can be used up if we are not careful. CONSERVATION means using them wisely so they last for future generations. Today, we will learn practical ways to protect soil, water, and vegetation in our farms and communities.',
    keyPoints: [
      'Depletion occurs through deforestation, poor farming practices, rapid population growth, improper use of chemicals, and soil erosion.',
      'Soil conservation methods: contour bunds, mulching, planting trees, zero tillage, cover crops.',
      'Water conservation methods: rainwater harvesting, building small dams, drip irrigation, reducing runoff.',
      'Vegetation conservation: afforestation, reforestation, fire breaks, controlled grazing.'
    ],
    detailedContent: `Depletion of Natural Resources

Natural resources can be used up or damaged by human activities:
- Deforestation: cutting trees for firewood or farming leaves soil exposed.
- Poor farming practices: over-cultivation, not rotating crops, and removing crop residues exhaust soil nutrients.
- Pollution: chemicals from fertilisers and pesticides can contaminate water.
- Overgrazing: too many animals on a small piece of land destroys grass and compacts soil.
- Soil erosion: wind and water carry away topsoil, reducing fertility.

In Malawi, we see depletion when rivers dry up, when forests disappear, or when soil becomes sandy and loses fertility.

Conservation Methods

Soil conservation:
1. Contour bunds: Digging ridges across a slope to slow water runoff and trap soil.
2. Mulching: Covering soil with dried grass or leaves to protect it from rain and sun.
3. Planting trees and grasses: Roots hold soil together.
4. Zero tillage: Ploughing without turning the soil – reduces erosion.
5. Cover crops: Growing plants like legumes during off-season to protect soil.

Water conservation:
1. Rainwater harvesting: Collecting rain from rooftops into tanks.
2. Drip irrigation: Water goes directly to plant roots – minimal loss.
3. Building small dams or reservoirs: Stores water for dry periods.
4. Reducing runoff: Use contour ridges and mulch so water soaks into soil.

Vegetation conservation:
1. Afforestation and reforestation: Planting new trees where forests were cut.
2. Creating fire breaks: Clearing strips of land to stop bush fires.
3. Controlled grazing: Moving animals so grass can regrow.
4. Protecting natural forests from charcoal burning.`,
    summary: 'Depletion of natural resources happens through deforestation, poor farming, and erosion. Conservation includes contour bunds, mulching, rainwater harvesting, and tree planting.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Contour Ridges in Mulanje', description: 'Farmers use ridges across slopes to prevent soil erosion.' },
      { title: 'Rainwater Tanks in Schools', description: 'Many schools harvest rainwater for gardens.' }
    ],
    practiceQuestions: [
      { question: 'Give two ways to conserve soil on a sloped farm.', answer: 'Contour bunds and planting grasses', hint: 'Prevent water from running straight down.' },
      { question: 'How does deforestation affect agricultural production?', answer: 'It causes soil erosion, reduces rainfall, and removes habitat for beneficial animals.', hint: 'Trees protect soil and help with water cycle.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Natural Resources',
    lessonNumber: 3,
    lessonTitle: 'Rapid Population Growth and Its Effects on Natural Resources',
    lessonId: 'agriculture-f1-natural-resources-3',
    order: 3,
    learningObjectives: [
      'Explain the effects of rapid population growth on natural resources and the environment',
      'Discuss the relationship between family size and food security'
    ],
    introduction: 'When the number of people increases quickly, more land is cleared for farming, more firewood is needed, and more waste is produced. Today, we will learn how rapid population growth affects natural resources and food security.',
    keyPoints: [
      'Effects: deforestation, overgrazing, pollution, water scarcity, soil degradation.',
      'Larger families require more food, land, and water – can lead to food insecurity if resources are limited.',
      'Solutions: family planning, intensive agriculture, resource conservation.'
    ],
    detailedContent: `Effects of Rapid Population Growth on Natural Resources

When the number of people increases quickly:
- More land is cleared for farming and settlements → deforestation.
- More firewood is needed → trees disappear.
- More animals are kept → overgrazing destroys grass.
- More waste and chemicals → pollution of water and soil.
- More water is used → rivers and wells dry up.

Relationship between Family Size and Food Security

Food security means having enough food at all times. A very large family with a small piece of land may not grow enough food. They may sell their assets to buy food, leading to poverty. Small families can manage resources better and often have more food per person.

In Malawi, families with many children sometimes face food shortages because they cannot produce enough maize, vegetables, or keep enough livestock to feed everyone.

Solutions: family planning, using farming methods that produce more on less land (intensive agriculture), and conserving resources.`,
    summary: 'Rapid population growth leads to deforestation, overgrazing, pollution, and water scarcity. Large families often face food insecurity. Solutions include family planning and sustainable farming.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Deforestation in Dedza', description: 'Increased population leads to more charcoal burning, reducing forest cover.' },
      { title: 'Food Insecurity', description: 'Households with many children often struggle to produce enough maize.' }
    ],
    practiceQuestions: [
      { question: 'How does rapid population growth affect water resources?', answer: 'More water is used, leading to drying up of rivers and wells.', hint: 'Over-extraction.' },
      { question: 'Why does a large family often face food insecurity?', answer: 'More people to feed with the same amount of land, so output per person is lower.', hint: 'Resources are limited.' }
    ]
  },

  // Topic: Agricultural research (2 lessons)
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Agricultural Research',
    lessonNumber: 1,
    lessonTitle: 'Meaning and Importance of Agricultural Research',
    lessonId: 'agriculture-f1-agri-research-1',
    order: 4,
    learningObjectives: [
      'Define agricultural research',
      'Explain the importance of agricultural research'
    ],
    introduction: 'Why do some maize varieties grow faster? How did farmers learn to control crop diseases? The answer is AGRICULTURAL RESEARCH. Today, we will learn how scientists and farmers use research to solve problems and improve farming.',
    keyPoints: [
      'Agricultural research is the systematic study of farming problems to find solutions.',
      'Importance: increases yields, develops resistant varieties, improves animal health, saves money, protects environment.',
      'Research leads to new technologies and better farming practices.'
    ],
    detailedContent: `What is Agricultural Research?

Agricultural research is the process of investigating farming problems to find better ways of producing crops and livestock. It uses scientific methods to test ideas and develop new technologies.

Importance of Agricultural Research

- Increases food production: New high-yielding maize varieties like MH30 produce more per hectare.
- Develops disease and pest resistance: Research breeds cassava resistant to cassava mosaic virus.
- Improves livestock health: Vaccines and treatments are developed through research.
- Reduces costs: Better farming methods save money on inputs.
- Protects environment: Research finds less harmful pesticides and fertilisers.
- Informs farmers: Extension services share research findings with villagers.

In Malawi, Chitedze Agricultural Research Station and Bunda College conduct research on maize, groundnuts, tobacco, and livestock. Their work helps farmers across the country.`,
    summary: 'Agricultural research systematically solves farming problems, leading to higher yields, better pest control, improved animal health, and environmental protection.',
    estimatedTime: '18 mins',
    malawiExamples: [
      { title: 'Chitedze Research Station', description: 'Scientists develop new maize varieties there.' },
      { title: 'Fall Armyworm Research', description: 'Research finds effective pesticides and natural control methods.' }
    ],
    practiceQuestions: [
      { question: 'What is agricultural research?', answer: 'Systematic study of farming problems to find solutions.', hint: 'It uses scientific methods.' },
      { question: 'Why is agricultural research important for a maize farmer?', answer: 'It provides better seeds, fertiliser recommendations, and pest control methods.', hint: 'Research helps solve farming problems.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Agricultural Research',
    lessonNumber: 2,
    lessonTitle: 'Scientific Approach to Agricultural Research',
    lessonId: 'agriculture-f1-agri-research-2',
    order: 5,
    learningObjectives: [
      'Identify agricultural problems that require research',
      'Describe the scientific approach to agricultural research'
    ],
    introduction: 'Research follows a step-by-step scientific method. Today, we will learn the stages of conducting agricultural research and the types of problems that can be studied.',
    keyPoints: [
      'Researchable problems: low yields, pests, diseases, poor soil, drought, storage losses.',
      'Scientific method: observation, question, hypothesis, experiment, analysis, conclusion.',
      'Experiments must have controls and replicates for reliable results.'
    ],
    detailedContent: `Agricultural Problems Requiring Research

Examples of problems that can be researched:
- Low yields of maize or groundnuts
- Crop diseases (e.g., maize streak virus)
- Pest damage (e.g., fall armyworms)
- Soil fertility decline
- Drought tolerance
- Post-harvest losses
- Animal diseases (e.g., Newcastle disease in chickens)

The Scientific Approach to Research

Step 1: Observation – Notice a problem (e.g., maize leaves turning yellow).
Step 2: Question – Why are the leaves yellow?
Step 3: Hypothesis – Possibly lack of nitrogen in the soil.
Step 4: Experiment – Plant maize in two plots: one with nitrogen fertiliser, one without. Keep all other conditions same.
Step 5: Data collection – Measure plant height, leaf colour, yield.
Step 6: Analysis – Compare results.
Step 7: Conclusion – If fertilised plot grows better, hypothesis is supported.

Importance of controls and replication: A control plot (no treatment) allows comparison. Repeating the experiment ensures reliability.`,
    summary: 'Agricultural research uses the scientific method: observation, hypothesis, experiment, analysis, conclusion. It addresses problems like low yields, pests, and diseases.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Nitrogen Deficiency Experiment', description: 'Comparing maize growth with and without fertiliser.' }
    ],
    practiceQuestions: [
      { question: 'What is the first step of the scientific approach?', answer: 'Observation', hint: 'You must notice a problem first.' },
      { question: 'Why is a control plot important in an experiment?', answer: 'To provide a baseline for comparison and validate results.', hint: 'Without control, you cannot be sure the treatment caused the effect.' }
    ]
  },

  // Topic: Agricultural technology - Farm structures (1 lesson - split? Keep 2 LOs)
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Agricultural Technology',
    lessonNumber: 1,
    lessonTitle: 'Types of Farm Structures and Safety Rules',
    lessonId: 'agriculture-f1-farm-structures-1',
    order: 6,
    learningObjectives: [
      'Identify types of farm structures (storage, processing, housing, equipment sheds)',
      'State safety rules when using farm structures'
    ],
    introduction: 'Technology is not only about machines – it includes farm structures like grain stores, chicken houses, and fences. These make farming easier and safer. Today, we will learn about different farm structures and how to use them safely.',
    keyPoints: [
      'Types: crop storage (barns, silos, granaries), crop processing (mill shed), animal housing (chicken coop, pigsty, kraal), equipment sheds, roads and bridges, fences.',
      'Safety rules: keep structures clean, repair damage, use protective gear, store chemicals safely, avoid overloading, keep children away.',
      'Importance of safety: prevents accidents, protects crops and animals, saves money.'
    ],
    detailedContent: `What are Farm Structures?

Farm structures are buildings and constructions that help with farming.

Types of Farm Structures

1. Crop storage structures: These keep harvested grain safe from moisture, pests, and theft. Examples: traditional granary (nkhokwe), modern metal silo.
2. Crop processing structures: A room or shed where maize is shelled, groundnuts are shelled, or grain is pounded.
3. Animal housing: Chicken coop (khola la nkhuku), pigsty, goat shed, cattle kraal. These protect animals from weather, predators, and disease.
4. Farm equipment sheds: A simple roofed area where hoes, pangas, sprayers, and bicycles are kept out of rain.
5. Roads and bridges: Paths for moving produce to the road, and small bridges over streams.
6. Fences: To keep animals in or out of gardens. They can be made of wood, wire, or live plants.

Safety Rules When Using Farm Structures

- Always repair broken floors, roofs, or fences immediately.
- Keep storage structures clean to avoid mould and pests.
- Do not overload granaries – they can collapse.
- When climbing to store grain, use a sturdy ladder.
- Store chemicals (pesticides, fertilisers) in a separate locked shed, away from food and children.
- Keep animal pens clean to prevent disease and injuries.
- Wear appropriate clothing: gloves when handling chemicals, boots when working with animals.
- Never allow young children to play near animal pens or storage structures.

Importance of Observing Safety Rules

- Prevents injuries: A falling granary or a sharp tool can cause serious harm.
- Protects produce: A leaking roof can ruin maize.
- Saves animals: Weak fences can allow predators to kill chickens.
- Saves money: Repairing a small problem is cheaper than rebuilding.
- Promotes health: Clean structures prevent diseases.`,
    summary: 'Farm structures include storage, processing, animal housing, equipment sheds, roads, and fences. Safety rules prevent accidents and protect crops and animals.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Nkhokwe Granary', description: 'Traditional raised maize store – needs strong poles and a thatched roof.' },
      { title: 'Chicken Coop Safety', description: 'Clean regularly, fix broken wire, keep predators out.' }
    ],
    practiceQuestions: [
      { question: 'Why should you not overload a granary?', answer: 'It can collapse, causing injury and wasting grain.', hint: 'Weight can break weak supports.' },
      { question: 'Where should pesticides be stored on a farm?', answer: 'In a locked shed separate from food and children.', hint: 'Safety first.' }
    ]
  },

  // Topic: Farm business management - Factors of production (split into 2 lessons)
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Farm Business Management',
    lessonNumber: 1,
    lessonTitle: 'Main Factors of Agricultural Production',
    lessonId: 'agriculture-f1-factors-production-1',
    order: 7,
    learningObjectives: [
      'Identify the main factors of agricultural production (land, labour, capital, management)',
      'Explain how each factor influences agricultural production'
    ],
    introduction: 'Farming is not just planting seeds – it is a business. To be successful, a farmer needs land, labour, money, and good management. Today, we will learn about the FACTORS OF PRODUCTION.',
    keyPoints: [
      'Land: includes soil, water, trees, minerals. Quality and size affect yield.',
      'Labour: human effort. More labour can increase production if used well.',
      'Capital: money, tools, equipment, seeds, fertilisers.',
      'Management: decisions about what to grow, when, and how to sell.'
    ],
    detailedContent: `The Factors of Production

To produce anything, you need four things. In farming, they are:

1. Land: This is not just the field. It includes the soil, water, air, and vegetation on that land. The quality of land matters: fertile soil with good drainage yields more maize. Land size also matters: a farmer with 2 hectares can produce more than one with 0.5 hectares, if other factors are equal.

2. Labour: Human work. In Malawi, many farms use family labour. Children, parents, and grandparents all contribute. Labour includes ploughing, planting, weeding, harvesting, and selling. More labour can increase production, but if too many people work on a small piece of land, some may be idle.

3. Capital: This includes money and goods used to produce. For a farmer, capital includes: seeds, fertilisers, pesticides, hoes, pangas, oxen, ploughs, irrigation equipment, storage bins. Without capital, you cannot buy inputs or tools.

4. Management (entrepreneurship): The farmer decides what to grow, when to plant, how to care for crops, when to harvest, and where to sell. Good management leads to high yields and profits. Poor management can cause losses even with good land and labour.

How Each Factor Influences Production:

- Land: Poor soil yields little. Erosion reduces fertility. Irrigation can improve.
- Labour: Skilled labour (knows how to prune or graft) is more productive. Child labour is common but may reduce school attendance.
- Capital: Lack of money prevents buying improved seeds or fertiliser.
- Management: Good planning (crop rotation, pest scouting) improves yields.`,
    summary: 'Factors of production: Land, Labour, Capital, Management. Each is essential for successful farming.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Farm Input Subsidy Programme', description: 'Government provides vouchers for fertiliser – helps capital.' },
      { title: 'Ganyu Labour', description: 'Farmers hire casual workers during peak seasons – labour factor.' }
    ],
    practiceQuestions: [
      { question: 'Name the four main factors of production.', answer: 'Land, labour, capital, management', hint: 'Remember: Land, Labour, Capital, Management (LLCM).' },
      { question: 'How does management affect farm productivity?', answer: 'Good decisions on planting, fertilising, and selling increase yields and profits.', hint: 'Planning and decision-making.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Farm Business Management',
    lessonNumber: 2,
    lessonTitle: 'Other Factors Affecting Production and Solutions',
    lessonId: 'agriculture-f1-factors-production-2',
    order: 8,
    learningObjectives: [
      'Identify other factors affecting agricultural production (market, climate, pests, risks)',
      'Discuss solutions to challenges associated with these factors'
    ],
    introduction: 'Besides land, labour, capital, and management, other factors like weather, market prices, and pests also affect farming. Today, we will learn about these and how to overcome the challenges.',
    keyPoints: [
      'Other factors: market prices, climate (rain, temperature), pests and diseases, risks (drought, flood).',
      'Solutions: training, irrigation, pest control, insurance, cooperative marketing.'
    ],
    detailedContent: `Other Factors Affecting Agricultural Production

- Market: If prices are low, farmers may not sell, reducing income.
- Climate: Too much or too little rain destroys crops. High temperatures can reduce pollination.
- Pests and diseases: Fall armyworms, maize streak virus, Newcastle disease.
- Risks: Drought, flood, cyclones – unpredictable but can be mitigated.

Solutions to Challenges

- Poor land: Use compost, manure, fertilisers, and practice soil conservation.
- Labour shortage: Hire casual workers or use labour-sharing groups (ganyu).
- Lack of capital: Join a village savings and loan group (VSL), apply for farm input subsidy.
- Poor management: Attend extension training, keep farm records.
- Market problems: Join a cooperative to get better prices.
- Climate risks: Use drought-tolerant varieties, practice irrigation.
- Pests and diseases: Integrated pest management (IPM), use resistant varieties.

In Malawi, the Farm Input Subsidy Programme (FISP) helps smallholders access fertiliser and seeds – this is capital support. Extension workers train farmers in management.`,
    summary: 'Other factors include market, climate, pests, and risks. Solutions involve irrigation, pest control, cooperatives, and insurance.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Drought-Tolerant Maize', description: 'Farmers grow varieties like ZM309 that survive dry spells.' },
      { title: 'Village Savings and Loans', description: 'Groups help members save and borrow to buy inputs.' }
    ],
    practiceQuestions: [
      { question: 'How can a farmer solve the problem of poor soil?', answer: 'Use manure, compost, fertilisers, and practice crop rotation or soil conservation.', hint: 'Add nutrients and prevent erosion.' },
      { question: 'What is one way to reduce risk from drought?', answer: 'Use drought-tolerant crop varieties or practice irrigation.', hint: 'Water management.' }
    ]
  },

  // Topic: Agricultural marketing (1 lesson)
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Agricultural Marketing',
    lessonNumber: 1,
    lessonTitle: 'Marketing Forces, Functions, Problems, and Solutions',
    lessonId: 'agriculture-f1-marketing-1',
    order: 9,
    learningObjectives: [
      'State the forces of demand and supply and their effect on price',
      'List marketing functions and describe problems associated with marketing agricultural products'
    ],
    introduction: 'You have grown maize, groundnuts, or vegetables. Now how do you sell them? AGRICULTURAL MARKETING is all the activities that move a product from the farm to the consumer. Today, we will learn how markets work and what problems farmers face when selling.',
    keyPoints: [
      'Demand: how much consumers want to buy. Supply: how much farmers produce.',
      'High demand and low supply → high price. High supply and low demand → low price.',
      'Marketing functions: exchange (buying/selling), physical (transport, storage, processing), facilitating (finance, market information).',
      'Problems: low prices, lack of transport, poor roads, middlemen, spoilage, lack of market information.',
      'Solutions: cooperatives, better roads, storage facilities, mobile price info, processing.'
    ],
    detailedContent: `What is Agricultural Marketing?

Agricultural marketing is the process of moving farm products from the producer (farmer) to the consumer. It includes:
- Buying and selling
- Transporting
- Storing
- Grading
- Processing
- Financing

Marketing Forces: Demand and Supply

Demand is the amount of a product that buyers are willing to purchase at a given price.
Supply is the amount that farmers are willing to sell at a given price.

Simple rule:
- If many people want maize (high demand) but only a little is available (low supply), the price will be high.
- If too much maize is produced (high supply) but few people are buying (low demand), the price will be low.

Example in Malawi: Just after harvest, maize supply is high, so prices are low. Many farmers sell at low prices because they need cash. Later in the year, supply goes down, and prices go up.

Marketing Functions

1. Exchange functions: Buying and selling.
2. Physical functions: Transport, storage, and processing.
3. Facilitating functions: Financing, market information, risk bearing.

Problems in Marketing Agricultural Products

- Low prices at harvest due to oversupply.
- Lack of transport.
- Poor roads.
- Middlemen taking most profit.
- Spoilage due to poor storage.
- No market information.

Possible Solutions

- Form cooperatives to sell together.
- Improve rural roads.
- Build community storage facilities.
- Use mobile phones to check market prices.
- Process products (e.g., groundnut butter) for higher value.
- Government programs (ADMARC) stabilise prices.`,
    summary: 'Demand and supply determine price. Marketing functions include exchange, physical, and facilitating. Problems include low prices and spoilage. Solutions include cooperatives, storage, processing, and market information.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Farmers Cooperative', description: 'Group of groundnut farmers sell together to get a better price.' },
      { title: 'ADMARC', description: 'State agency buys maize at set price, helping farmers avoid exploitation.' }
    ],
    practiceQuestions: [
      { question: 'What happens to maize price just after harvest?', answer: 'Price goes down because supply is high.', hint: 'Many farmers are selling at the same time.' },
      { question: 'How can a farmer avoid selling at low harvest prices?', answer: 'Store grain in a good granary and sell later when prices rise.', hint: 'Hold produce for a few months.' }
    ]
  },

  // Topic: Plant nutrients (1 lesson)
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Plant Nutrients',
    lessonNumber: 1,
    lessonTitle: 'Essential Plant Nutrients and Deficiency Signs',
    lessonId: 'agriculture-f1-plant-nutrients-1',
    order: 10,
    learningObjectives: [
      'List essential plant nutrients (macro and micro)',
      'Explain the role of nitrogen, phosphorus, and potassium and their deficiency signs'
    ],
    introduction: 'Just like you need food to grow, plants need nutrients. These come from the soil. Today, we will learn about the most important plant nutrients, what they do, and what happens when plants lack them.',
    keyPoints: [
      'Macronutrients: N, P, K, Ca, Mg, S. Micronutrients: Fe, Zn, B, Cu, Mn, Mo, Cl.',
      'Nitrogen (N): promotes leaf growth and green colour. Deficiency: yellow leaves, stunted growth.',
      'Phosphorus (P): promotes root growth, flowering, fruiting. Deficiency: purple-red leaves, poor roots.',
      'Potassium (K): strengthens plants, disease resistance. Deficiency: yellow/brown leaf edges, weak stems.',
      'Nutrients are depleted by crop removal, erosion, leaching. Replace with manure, compost, fertilisers.'
    ],
    detailedContent: `Essential Plant Nutrients

Plants need about 16 essential nutrients. Macronutrients (needed in large amounts): Nitrogen (N), Phosphorus (P), Potassium (K), Calcium (Ca), Magnesium (Mg), Sulphur (S). Micronutrients (needed in tiny amounts): Iron (Fe), Zinc (Zn), Boron (B), Copper (Cu), Manganese (Mn), Molybdenum (Mo), Chlorine (Cl).

Roles of the Three Most Important Nutrients

1. Nitrogen (N): Promotes rapid leaf and stem growth. It makes the plant green because it is part of chlorophyll. Important for maize, vegetables, and grasses.

2. Phosphorus (P): Essential for root development, flowering, and fruit formation. Important for groundnuts and beans because it helps with nodulation (nitrogen fixation).

3. Potassium (K): Improves overall plant health. Helps plants resist diseases, withstand drought, and produce strong stems. Improves quality of fruits and grains.

Deficiency Signs

- Nitrogen deficiency: Lower leaves turn yellow (chlorosis), growth is stunted.
- Phosphorus deficiency: Leaves may turn purple or red, root growth poor, flowering delayed.
- Potassium deficiency: Yellow or brown edges on older leaves (scorching), weak stems.

How Nutrients are Depleted from Soil

- Crop removal, soil erosion, leaching, volatilisation, fixation.

Replacing Nutrients

- Organic methods: Animal manure, compost, green manure.
- Inorganic fertilisers: Urea (N), NPK, single superphosphate (P), muriate of potash (K).
- Crop rotation: Grow legumes to fix nitrogen.`,
    summary: 'Essential plant nutrients include nitrogen (leaf growth), phosphorus (roots and flowers), and potassium (strength). Deficiencies cause yellowing, purple colour, or burnt edges.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Maize Nitrogen Deficiency', description: 'Leaves turn yellow starting from the bottom – lack of nitrogen.' },
      { title: 'Groundnut Rotation', description: 'After groundnuts, nitrogen is left for the next maize crop.' }
    ],
    practiceQuestions: [
      { question: 'What nutrient is most important for green leafy growth?', answer: 'Nitrogen', hint: 'Think of chlorophyll.' },
      { question: 'What deficiency causes purple leaves in maize?', answer: 'Phosphorus deficiency', hint: 'Purple colour indicates lack of P.' }
    ]
  },

  // Topic: Vegetable production (1 lesson)
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Vegetable Production',
    lessonNumber: 1,
    lessonTitle: 'Site Selection, Fence Construction, and Husbandry Practices',
    lessonId: 'agriculture-f1-vegetables-1',
    order: 11,
    learningObjectives: [
      'Select a suitable site for vegetable growing and construct a simple garden fence',
      'Describe husbandry practices for vegetables: seedbed preparation, sowing, transplanting, watering, weeding, fertilising, pest control, harvesting'
    ],
    introduction: 'Vegetables are important for health and income. In Malawi, we have local vegetables like bonongwe, chisoso, and mwanyanya, as well as exotic ones like cabbage, tomato, and onion. Today, we will learn how to start a vegetable garden step by step.',
    keyPoints: [
      'Importance: provide vitamins and minerals, improve health, generate income.',
      'Indigenous vegetables: amaranth (bonongwe), blackjack (chisoso), pumpkin leaves – hardy, drought-tolerant.',
      'Exotic vegetables: cabbage, tomato, onion – may need more care.',
      'Site selection: near water source, good sunlight, well-drained soil, protected from animals, close to home.',
      'Fence: use wooden poles, wire, or thorny branches to keep out chickens and goats.',
      'Husbandry: prepare seedbed, sow or transplant, water regularly, weed, fertilise, control pests, harvest at right stage.'
    ],
    detailedContent: `Importance of Vegetables

Vegetables are essential for a healthy diet. They provide vitamins (A, C, K), minerals (iron, calcium), and fibre. Eating vegetables helps prevent malnutrition, night blindness, and constipation. Selling vegetables can also bring income, especially for women.

Indigenous vs Exotic Vegetables

Indigenous vegetables are native to Malawi. They grow well even with little rain or poor soil. Examples: bonongwe (amaranth), chisoso (blackjack), mwanyanya (jute mallow), pumpkin leaves. Exotic vegetables were introduced and often require more water and care. Examples: cabbage, tomato, onion.

Site Selection

Choose a place that:
- Is close to a water source.
- Receives full sunlight (at least 6 hours per day).
- Has good drainage.
- Is protected from wind and animals.
- Is near the house for easy tending.

Constructing a Garden Fence

Materials: wooden poles, wire, thorny branches.
Method: Drive poles into the ground at intervals, tie wire or rope, attach thorny branches or chicken wire. Make a gate.

Husbandry Practices

1. Seedbed preparation: Till, remove stones and weeds, level the bed, add compost.
2. Sowing: For direct-sown vegetables, make furrows, sprinkle seeds, cover lightly. For transplanting, sow in nursery first.
3. Transplanting: When seedlings are 10-15 cm tall, transplant on a cloudy day, water immediately.
4. Watering: Regular water, especially during dry season. Water in morning or evening.
5. Weeding: Remove weeds every 1-2 weeks.
6. Fertilising: Apply compost at planting. Side-dress with sulphate of ammonia after 3-4 weeks.
7. Pest control: Use ash, neem solution, or approved pesticides.
8. Harvesting: Pick leaves when young and tender. Regular harvesting encourages more production.`,
    summary: 'Vegetables are nutritious and profitable. Indigenous vegetables are hardy; exotic need more care. A good site has water, sun, and drainage. Build a fence. Practices: prepare soil, sow/transplant, water, weed, fertilise, control pests, harvest.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Backyard Garden', description: 'Small fenced garden near the house produces vegetables for family and sale.' },
      { title: 'Indigenous Vegetables', description: 'Bonongwe grows quickly during rainy season with no fertiliser.' }
    ],
    practiceQuestions: [
      { question: 'Why is a fence important for a vegetable garden?', answer: 'To keep out animals like chickens and goats that will eat the vegetables.', hint: 'Animals love vegetables.' },
      { question: 'Name one indigenous vegetable grown in Malawi.', answer: 'Bonongwe (amaranth) or chisoso (blackjack)', hint: 'It is a local leafy vegetable.' }
    ]
  },

  // Topic: Livestock production - classes and digestive systems (1 lesson)
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Livestock Production',
    lessonNumber: 1,
    lessonTitle: 'Classes of Livestock: Ruminants and Non-ruminants',
    lessonId: 'agriculture-f1-livestock-1',
    order: 12,
    learningObjectives: [
      'Classify livestock into ruminants and non-ruminants',
      'Describe the digestive systems of ruminants (cattle, goats) and non-ruminants (pigs, poultry)'
    ],
    introduction: 'Not all animals digest food the same way. Cattle and goats can eat grass because they have special stomachs. Pigs and chickens have simpler systems. Today, we will learn the difference between RUMINANTS and NON-RUMINANTS and how their digestive systems work.',
    keyPoints: [
      'Ruminants: animals with four-compartment stomachs (cattle, goats, sheep).',
      'Non-ruminants (monogastric): simple stomach (pigs, poultry, rabbits, horses).',
      'Ruminant stomach compartments: rumen (fermentation), reticulum, omasum, abomasum (true stomach).',
      'Rumen contains microbes that break down cellulose (grass and leaves).',
      'Non-ruminants cannot digest large amounts of fibre; need concentrated feeds.'
    ],
    detailedContent: `Classes of Livestock

Livestock are farm animals. They are divided into two main groups based on how they digest food.

Ruminants: These animals have a stomach with four compartments. They can eat grass, leaves, and other fibrous plants. Examples: cattle (cows), goats, sheep, buffalo.

Non-ruminants (monogastric): These animals have a simple stomach with one compartment. They cannot digest large amounts of fibre. They need feeds like maize, grain, and protein meal. Examples: pigs, poultry (chickens), rabbits, horses.

The Ruminant Digestive System

Steps of digestion in a ruminant:

1. Mouth: Animal chews grass (roughage) and swallows.
2. Rumen (first compartment): Largest compartment. Millions of microbes break down cellulose into fatty acids.
3. Reticulum (second compartment): Catches foreign objects and helps move food back to the mouth for further chewing – this is called "chewing the cud".
4. Omasum (third compartment): Absorbs water and some nutrients.
5. Abomasum (fourth compartment): This is the "true stomach" similar to human stomach. It uses digestive juices to break down proteins.
6. Small intestine: Nutrients are absorbed into blood.
7. Large intestine: Water is reabsorbed; remaining material becomes manure.

Non-Ruminant Digestive System (Example: Pig or Chicken)

- Mouth: Chews food.
- Oesophagus: Carries food to stomach.
- Stomach (simple, single compartment): Acids and enzymes break down proteins.
- Small intestine: Most digestion and absorption occur here.
- Large intestine: Water absorption.
- Caeca (in poultry): Two blind pouches where some fibre fermentation occurs (but very little).

Comparison:
- Ruminants can survive on grass and roughage because microbes produce nutrients.
- Non-ruminants need high-quality feeds (grains, protein).`,
    summary: 'Ruminants (cattle, goats) have four-compartment stomachs and digest fibre using microbes. Non-ruminants (pigs, poultry) have simple stomachs and need concentrated feed.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Cattle Grazing', description: 'Cows eat grass, chew cud, and convert roughage into milk and meat.' },
      { title: 'Pig Feeding', description: 'Pigs are fed maize bran and kitchen waste – better feed gives faster growth.' }
    ],
    practiceQuestions: [
      { question: 'Name two ruminant animals.', answer: 'Cattle and goats', hint: 'They chew cud.' },
      { question: 'Why can’t pigs digest grass well?', answer: 'They have a simple stomach without microbes to break down cellulose.', hint: 'Pigs are monogastric.' }
    ]
  }, 

  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Chicken Production',
    lessonNumber: 1,
    lessonTitle: 'Breeds and Housing of Chickens',
    lessonId: 'agriculture-f1-chickens-1',
    order: 13,
    learningObjectives: [
      'Describe breeds of chickens (local and exotic)',
      'Explain housing requirements for chickens'
    ],
    introduction: 'Chickens are an important source of meat and eggs in Malawi. Today, we will learn about different chicken breeds and how to house them properly.',
    keyPoints: [
      'Local breeds: hardy, good foragers, low egg production (e.g., Malawi local chicken).',
      'Exotic breeds: high egg production (e.g., Black Australorp, Rhode Island Red) or meat (broilers).',
      'Housing must provide protection from predators, weather, and disease.',
      'Types: deep litter, battery cage, free-range.',
      'Good chicken house: dry, well-ventilated, secure, easy to clean.'
    ],
    detailedContent: `Breeds of Chickens

Local breeds (indigenous) are hardy, resistant to diseases, and good foragers but lay fewer eggs (about 40-60 eggs per year). Examples: Malawi local chicken.

Exotic breeds are imported and have higher productivity. Layers (egg production) include Black Australorp, Rhode Island Red, Leghorn – they can lay 200-300 eggs per year. Broilers are raised for meat and grow very fast (ready in 6-8 weeks).

Housing Requirements

Types of chicken houses:
- Deep litter: chickens on floor with bedding (wood shavings, rice husks). Suitable for layers and broilers.
- Battery cage: wire cages stacked; used for commercial egg production.
- Free-range: chickens roam outside; requires fencing and shelter.

Good chicken house characteristics:
- Dry and waterproof roof.
- Good ventilation but no drafts.
- Protection from predators (dogs, cats, snakes, hawks).
- Easy to clean and disinfect.
- Enough space: for layers, 3-4 birds per square metre; for broilers, 10-12 per square metre.

Nesting boxes: one box for every 4-5 hens. Perches for roosting.`,
    summary: 'Local chickens are hardy; exotics give more eggs or meat. Housing must protect from predators and weather. Choose deep litter, battery cage, or free-range.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Local Chicken', description: 'Common in villages; scavenges for food; resistant to Newcastle disease.' },
      { title: 'Deep Litter House', description: 'Many small-scale farmers use this system with maize bran bedding.' }
    ],
    practiceQuestions: [
      { question: 'Name one exotic breed known for high egg production.', answer: 'Black Australorp or Rhode Island Red', hint: 'Laying breeds.' },
      { question: 'Why is ventilation important in a chicken house?', answer: 'To remove ammonia and moisture, and provide fresh air for health.', hint: 'Prevents respiratory diseases.' }
    ]
  },
  {
    subject: 'Agriculture',
    form: 'Form 1',
    topic: 'Chicken Production',
    lessonNumber: 2,
    lessonTitle: 'Feeding, Disease Control, and Predators of Chickens',
    lessonId: 'agriculture-f1-chickens-2',
    order: 14,
    learningObjectives: [
      'Explain feeding of broilers and layers',
      'Identify common diseases, parasites, and predators of chickens and their control'
    ],
    introduction: 'To get good meat and eggs, chickens need proper feeding and protection from diseases and predators. Today, we will learn about feeding programs, common diseases, and how to keep chickens safe.',
    keyPoints: [
      'Broiler feeds: starter (0-4 weeks), grower (4-6 weeks), finisher (6-8 weeks).',
      'Layer feeds: chick starter (0-8 weeks), pullet grower (8-18 weeks), layers mash (after 18 weeks).',
      'Diseases: Newcastle, fowl pox, coccidiosis, fowl typhoid.',
      'Parasites: fleas, ticks, roundworms, tapeworms.',
      'Predators: wild cats, hawks, eagles, dogs, snakes.',
      'Control: vaccination, hygiene, good housing, deworming, fencing.'
    ],
    detailedContent: `Feeding of Broilers

Broilers require high-protein feeds for rapid growth.
- Broiler starter (0-4 weeks): 22-24% protein.
- Broiler grower (4-6 weeks): 20-22% protein.
- Broiler finisher (6-8 weeks): 18-20% protein.
Feed is given ad libitum (always available).

Feeding of Layers

- Chick starter (0-8 weeks): 18-20% protein.
- Pullet grower (8-18 weeks): 15-16% protein to prevent early laying.
- Layers mash (after 18 weeks): 16-18% protein with extra calcium for eggshells.

Diseases and Control

- Newcastle disease: viral, highly contagious. Signs: respiratory distress, green diarrhoea, twisted neck. Control: vaccination.
- Fowl pox: viral, causes warty lesions on comb. Control: vaccination.
- Coccidiosis: protozoan parasite, bloody diarrhoea. Control: clean litter, coccidiostats in feed.
- Fowl typhoid: bacterial, causes weakness, greenish-yellow diarrhoea. Control: hygiene, antibiotics.

Parasites

- External: fleas, ticks, lice. Control: dust with insecticide, clean housing.
- Internal: roundworms, tapeworms. Control: deworming (piperazine), clean pens.

Predators and Control

Common predators: wild cats, hawks, eagles, dogs, snakes, rats.
Control measures: sturdy fencing, close chicken house at night, use wire mesh, trap rats.`,
    summary: 'Broilers need high-protein feeds; layers need calcium for eggshells. Vaccinate against Newcastle and fowl pox. Control parasites and protect from predators with proper housing.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Newcastle Vaccination', description: 'Vaccination campaigns help reduce outbreaks in villages.' },
      { title: 'Wire Mesh on Windows', description: 'Prevents hawks and wild cats from entering chicken house.' }
    ],
    practiceQuestions: [
      { question: 'What is the main difference between broiler and layer feed?', answer: 'Broiler feed has higher protein for rapid growth; layer feed has extra calcium for eggshells.', hint: 'Purpose of raising.' },
      { question: 'How can you prevent Newcastle disease?', answer: 'Vaccination and biosecurity (limiting visitors, disinfecting equipment).', hint: 'Prevention is key.' }
    ]
  },

// AGRICULTURE - FORM 2 (continued)


// Topic: Soil fertility and fertilizers (split into 2 lessons)
// {
//   subject: 'Agriculture',
//   form: 'Form 2',
//   topic: 'Soil Fertility and Fertilizers',
//   lessonNumber: 1,
//   lessonTitle: 'Maintaining Soil Fertility',
//   lessonId: 'agriculture-f2-soil-fertility-1',
//   order: 31,
//   learningObjectives: [
//     'Identify ways of maintaining soil fertility',
//     'Explain the importance of crop rotation, manure, fallowing, and mulching'
//   ],
//   introduction: 'After many harvests, soil becomes tired and less productive. FERTILITY is the ability of soil to provide nutrients to plants. Today, we will learn how to keep soil fertile using organic methods.',
//   keyPoints: [
//     'Crop rotation: planting different crops in sequence (e.g., maize then groundnuts).',
//     'Manure and compost: add animal manure or decomposed plant material to the soil.',
//     'Fallowing: leaving land unplanted for one or more seasons to restore nutrients.',
//     'Mulching: covering soil with dry grass or leaves to reduce erosion and add organic matter.',
//     'Green manures: planting fast-growing legumes and ploughing them into the soil.',
//     'Contour farming: ridges across slope reduce erosion, keeping topsoil.',
//     'Liming: adding lime to acidic soil to raise pH.'
//   ],
//   detailedContent: `Ways to Maintain Soil Fertility

// 1. Crop rotation: Planting different crops in sequence. For example, maize then groundnuts. Groundnuts fix nitrogen, leaving it for the next maize crop. This also breaks pest cycles.

// 2. Manure and compost: Animal manure (cattle, goats, chickens) and compost (decomposed plant material) add organic matter and nutrients. They improve soil structure and water holding capacity.

// 3. Fallowing: Leaving land unplanted for one or more seasons. Natural vegetation regrows and restores nutrients. This is less common now due to population pressure.

// 4. Mulching: Covering soil with dry grass, leaves, or crop residues. Mulch reduces evaporation, prevents erosion, suppresses weeds, and adds organic matter as it decays.

// 5. Green manures: Planting fast-growing legumes (e.g., sunn hemp, cowpeas) and then ploughing them into the soil while green. They add nitrogen and organic matter.

// 6. Contour farming: Making ridges across the slope (not up and down). This slows water runoff, traps soil, and reduces erosion.

// 7. Liming: Adding agricultural lime (calcium carbonate) to acidic soils. This raises pH, making nutrients more available to plants.

// In Malawi, many farmers practice maize-groundnut rotation. They also use cattle manure from kraals. However, fallowing is decreasing due to land scarcity.`,
//   summary: 'Maintain fertility with crop rotation, manure, fallowing, mulching, green manures, contour farming, and liming. These methods improve soil structure and nutrient content.',
//   estimatedTime: '20 mins',
//   malawiExamples: [
//     { title: 'Maize-Groundnut Rotation', description: 'Groundnuts leave nitrogen for next maize crop.' },
//     { title: 'Cattle Manure', description: 'Farmers collect manure from kraals to apply to gardens.' }
//   ],
//   practiceQuestions: [
//     { question: 'How does crop rotation improve soil fertility?', answer: 'Different crops use different nutrients, and legumes fix nitrogen.', hint: 'Prevents depletion of specific nutrients.' },
//     { question: 'What is the purpose of mulching?', answer: 'To reduce erosion, retain moisture, and add organic matter.', hint: 'Covering soil with dry grass or leaves.' }
//   ]
// },
// {
//   subject: 'Agriculture',
//   form: 'Form 2',
//   topic: 'Soil Fertility and Fertilizers',
//   lessonNumber: 2,
//   lessonTitle: 'Organic vs Inorganic Fertilizers',
//   lessonId: 'agriculture-f2-soil-fertility-2',
//   order: 32,
//   learningObjectives: [
//     'Classify fertilizers into organic and inorganic',
//     'Discuss advantages and disadvantages of organic and inorganic fertilizers'
//   ],
//   introduction: 'Fertilizers provide nutrients to plants. They can be organic (natural) or inorganic (chemical). Today, we will learn the differences, advantages, and disadvantages of each type.',
//   keyPoints: [
//     'Organic fertilizers: manure, compost, green manure, bone meal – slow release, improve soil structure.',
//     'Inorganic fertilizers: NPK, urea, D compound – fast acting, target specific nutrients.',
//     'Advantages of organic: cheap, improves soil structure, reduces pollution.',
//     'Disadvantages of organic: bulky, slow release, labour intensive.',
//     'Advantages of inorganic: fast results, easy to apply, concentrated.',
//     'Disadvantages of inorganic: expensive, can burn crops, pollute water if overused.'
//   ],
//   detailedContent: `Types of Fertilisers

// Organic Fertilisers
// - Examples: Cattle manure, chicken manure, compost, green manure, bone meal.
// - Release nutrients slowly as they decompose.
// - Improve soil structure and water holding capacity.
// - Usually cheaper or free (farm-produced).
// - Disadvantages: bulky (need large volumes), may contain weed seeds, labour intensive to apply.

// Inorganic (Chemical) Fertilisers
// - Examples: Urea (46% N), NPK (23-21-0+4S), CAN (calcium ammonium nitrate), D compound.
// - Provide specific nutrients in concentrated form.
// - Fast acting – plants respond quickly.
// - Easy to transport and apply.
// - Disadvantages: expensive, can soil acidify, can burn crops if over-applied, may pollute rivers if washed away.

// How to Apply Fertilisers Correctly

// - Organic manure: Spread evenly and mix into soil before planting. For top dressing, apply around plants.
// - Inorganic fertilisers: For maize, apply basal fertiliser (NPK) at planting, either in the hole or along the row. Use top dressing (urea or CAN) when plants are about knee-high.
// - Avoid applying fertiliser onto wet leaves – it can burn.
// - Incorporate into soil to prevent loss.
// - Use recommended rates based on soil test or extension advice.

// Malawi Example: A farmer uses cattle manure from his kraal to fertilise his vegetable garden. He also buys NPK for his maize. He applies NPK at planting and top dresses with urea when maize is 50 cm tall. He rotates maize with groundnuts.`,
//   summary: 'Organic fertilisers improve soil but act slowly. Inorganic fertilisers act fast but can cause problems if misused. Apply correctly for best results.',
//   estimatedTime: '20 mins',
//   malawiExamples: [
//     { title: 'Maize NPK Application', description: 'Apply NPK at planting to give maize a strong start.' },
//     { title: 'Compost Making', description: 'Farmers use crop residues and kitchen waste to make compost.' }
//   ],
//   practiceQuestions: [
//     { question: 'Give one advantage of organic fertiliser.', answer: 'Improves soil structure', hint: 'It adds organic matter.' },
//     { question: 'Why should urea be applied to the soil, not on leaves?', answer: 'It can burn leaves.', hint: 'Urea is very strong.' }
//   ]
// },

// // Topic: Maize and groundnuts production (split into 2 lessons)
// {
//   subject: 'Agriculture',
//   form: 'Form 2',
//   topic: 'Crop Production',
//   lessonNumber: 1,
//   lessonTitle: 'Maize Production: Land Preparation, Planting, and Fertilising',
//   lessonId: 'agriculture-f2-maize-1',
//   order: 33,
//   learningObjectives: [
//     'Identify qualities of good seed for maize',
//     'Describe land preparation, planting, fertilising, and weeding for maize'
//   ],
//   introduction: 'Maize is our staple food. Growing it well requires following recommended practices. Today, we will learn step-by-step how to produce high yields of maize.',
//   keyPoints: [
//     'Good seed: pure variety, high germination, free from disease and damage, uniform size.',
//     'Land preparation: plough (first rains), make ridges 75 cm apart.',
//     'Planting: 75 cm between rows, 25 cm within row, 2-3 seeds per hole, depth 5-7 cm.',
//     'Fertilising: NPK at planting (200 kg/ha), urea top dressing (50 kg/ha) at knee height.',
//     'Weeding: first weeding at 2-3 weeks, second at 6 weeks.'
//   ],
//   detailedContent: `Qualities of Good Seed

// - Pure: Only the intended variety, no other seeds mixed.
// - High germination: At least 85% should sprout.
// - Free from disease: No mould or rot.
// - No physical damage: Cracks or holes.
// - Uniform size and colour.

// Maize Production Steps

// 1. Land preparation: Clear land, plough (turn soil) or make ridges 75 cm apart. In conservation agriculture, practice minimum tillage.

// 2. Planting: Plant at the start of rains. Place 2-3 seeds per hole at depth of 5-7 cm. Spacing: 75 cm between rows, 25 cm between holes.

// 3. Fertilising: Apply basal fertiliser (NPK 23-21-0+4S) at planting, about 5-10 grams per hole (or 200 kg per hectare). After 4-6 weeks, when maize is knee-high, apply top dressing urea (50 kg per hectare) mixed with soil.

// 4. Weeding: First weeding at 2-3 weeks after planting, second weeding at 6 weeks. Keep field clean.

// 5. Harvesting: When cobs are dry, husks turn brown. Break cobs, remove husks, dry on a mat or raised platform. Shell when fully dry.

// 6. Storage: Store in airtight container or raised granary. Add ash or use approved pesticide to control weevils.`,
//   summary: 'Maize: plant at 75×25 cm, apply NPK at planting and urea at knee height, weed twice. Use good quality seed for best yields.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'Maize Top Dressing', description: 'Urea applied at knee-high gives bigger cobs.' },
//     { title: 'MH30 Variety', description: 'A high-yielding, disease-resistant maize variety common in Malawi.' }
//   ],
//   practiceQuestions: [
//     { question: 'What spacing is recommended for maize planting?', answer: '75 cm between rows, 25 cm between holes', hint: 'Rows are wider than within row.' },
//     { question: 'When should urea be applied as top dressing?', answer: 'When maize is knee-high (about 4-6 weeks after planting).', hint: 'Before flowering.' }
//   ]
// },
// {
//   subject: 'Agriculture',
//   form: 'Form 2',
//   topic: 'Crop Production',
//   lessonNumber: 2,
//   lessonTitle: 'Groundnuts Production and Pest/Disease Control',
//   lessonId: 'agriculture-f2-groundnuts-1',
//   order: 34,
//   learningObjectives: [
//     'Describe husbandry practices for groundnuts (land preparation, planting, fertilising, harvesting)',
//     'Identify major pests and diseases of maize and groundnuts and explain control measures'
//   ],
//   introduction: 'Groundnuts are an important cash and food crop. They also improve soil fertility by fixing nitrogen. Today, we will learn how to grow groundnuts successfully and control common pests and diseases.',
//   keyPoints: [
//     'Groundnuts: plant at 50 cm between rows, 15 cm within row, 1-2 seeds per hole.',
//     'Do NOT use nitrogen fertiliser (groundnuts fix their own). Use phosphorus fertiliser (single superphosphate) at planting.',
//     'Apply gypsum (calcium sulphate) at flowering to fill pods.',
//     'Harvest when leaves turn yellow and pods have brown inside.',
//     'Pests: stalk borer, fall armyworm (maize); groundnut hopper, termites.',
//     'Diseases: maize rust, maize streak virus; groundnut rosette, leaf spot, aflatoxin.'
//   ],
//   detailedContent: `Groundnuts Production Steps

// 1. Land preparation: Fine tilth – soil should be loose and well-drained. Ridges not necessary; can plant on flat or raised beds.

// 2. Planting: At onset of rains (or irrigation). Spacing: 50 cm between rows, 15 cm between holes. Plant 1-2 seeds per hole, depth 5 cm.

// 3. Fertilising: Do NOT use nitrogen fertiliser (groundnuts fix their own). Use phosphorus fertiliser (single superphosphate) at planting. Apply gypsum (calcium sulphate) at flowering stage to fill pods.

// 4. Weeding: Weed at 2-3 weeks and 6 weeks. Do not ridge too high.

// 5. Harvesting: When leaves turn yellow and pods have brown inside. Lift plants with fork or pull, dry in field for a few days. Remove pods by hand or machine.

// 6. Storage: Keep in shells until ready to use. Ensure very dry to prevent aflatoxin mould.

// Pests and Control

// - Maize stalk borer: Larvae bore into stems. Control: early planting, remove and destroy affected plants, use neem or recommended insecticide.
// - Fall armyworm: Eat leaves and cobs. Control: handpick caterpillars, spray with approved pesticide.
// - Groundnut rosette virus: Transmitted by aphids. Control: use resistant varieties (e.g., CG7), early planting.
// - Aflatoxin: Mould in stored groundnuts. Control: dry thoroughly before storage, keep in dry place, sort out mouldy nuts.

// Malawi Example: A farmer in Lilongwe prepares ridges in October. He plants maize at the first heavy rains. He plants groundnuts in a separate field after maize harvest. He rotates maize and groundnuts to improve soil.`,
//   summary: 'Groundnuts: plant at 50×15 cm, use phosphorus and gypsum, no nitrogen. Harvest when leaves yellow. Control pests and diseases with resistant varieties and good practices.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'Groundnut Gypsum', description: 'Calcium improves pod filling and reduces rot.' },
//     { title: 'Fall Armyworm Control', description: 'Spray with recommended pesticides or use handpicking for small infestations.' }
//   ],
//   practiceQuestions: [
//     { question: 'Why should you not apply nitrogen fertiliser to groundnuts?', answer: 'Groundnuts fix their own nitrogen; extra nitrogen causes too many leaves and few pods.', hint: 'They are legumes.' },
//     { question: 'How can you prevent aflatoxin in stored groundnuts?', answer: 'Dry pods thoroughly before storage and keep in a dry place.', hint: 'Mould grows in moisture.' }
//   ]
// },

// // ======================================================================
// // AGRICULTURE - FORM 3 (selected)
// // ======================================================================

// // Topic: Physical properties of soil (split into 2 lessons)
// {
//   subject: 'Agriculture',
//   form: 'Form 3',
//   topic: 'Soil Physical Properties',
//   lessonNumber: 1,
//   lessonTitle: 'Soil Texture and Structure',
//   lessonId: 'agriculture-f3-soil-physical-1',
//   order: 35,
//   learningObjectives: [
//     'Describe soil texture and its influence on crop production',
//     'Explain soil structure and how it affects root growth and water movement'
//   ],
//   introduction: 'Have you ever felt sandy soil that crumbles easily, or clay soil that becomes sticky when wet? Those are PHYSICAL PROPERTIES of soil. Today, we will learn how texture and structure affect crop growth.',
//   keyPoints: [
//     'Texture: proportion of sand, silt, and clay particles.',
//     'Sandy soil: drains quickly, low nutrients, easy to work.',
//     'Clay soil: holds water and nutrients, but becomes hard and cracks, difficult to work.',
//     'Loam: ideal mixture of sand, silt, clay – best for most crops.',
//     'Structure: how particles clump together (granular, blocky, platy, etc.).',
//     'Granular structure is best – allows air, water, and roots to move easily.'
//   ],
//   detailedContent: `Soil Texture

// Texture is the relative proportion of sand, silt, and clay.

// - Sand particles are large (0.05-2 mm). Feel gritty. Sandy soil drains fast, warms up quickly, but does not hold water or nutrients well. Crops like groundnuts and cassava grow in sandy soil.

// - Silt particles are medium-sized (0.002-0.05 mm). Feel smooth like flour. Silty soil is fertile and holds water well.

// - Clay particles are tiny (less than 0.002 mm). Feel sticky when wet and hard when dry. Clay holds water and nutrients but can become waterlogged and hard for roots to penetrate.

// Loam is a balanced mixture of sand, silt, and clay with organic matter. It is the best for most crops because it drains well, holds nutrients, and is easy to work.

// Effect of Texture on Crop Production:
// - Sandy soil: Low fertility, prone to drought. Add organic matter.
// - Clay soil: Poor aeration, roots struggle. Add sand and organic matter, use raised beds.
// - Loamy soil: Ideal for maize, vegetables, tobacco.

// Soil Structure

// Structure is how soil particles clump together into aggregates (peds).

// - Granular (crumb) structure: Small, rounded aggregates. Best for crop growth – allows air, water, and roots to move easily.
// - Blocky: Block-like aggregates. Common in subsoil. Can restrict root growth if too large.
// - Platy: Thin, flat plates. Restricts water movement and root penetration.
// - Prismatic/columnar: Vertical columns. Often in clay subsoil.

// Good soil structure is crumbly. Farmers can improve structure by adding organic matter (manure, compost), avoiding over-tillage, and growing cover crops.`,
//   summary: 'Soil texture (sand, silt, clay) affects water and nutrient holding. Loam is best. Structure (granular ideal) affects root growth and aeration.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'Sandy Soil in Mchinji', description: 'Farmers add manure to improve water holding.' },
//     { title: 'Clay Soil in Thyolo', description: 'Tea grows well, but for maize, raised beds are used.' }
//   ],
//   practiceQuestions: [
//     { question: 'Which soil texture is ideal for most crops?', answer: 'Loam', hint: 'Balanced mix of sand, silt, clay.' },
//     { question: 'What type of soil structure is best for crop growth?', answer: 'Granular (crumb)', hint: 'Allows air and water movement.' }
//   ]
// },
// {
//   subject: 'Agriculture',
//   form: 'Form 3',
//   topic: 'Soil Physical Properties',
//   lessonNumber: 2,
//   lessonTitle: 'Soil Porosity, Colour, and Depth',
//   lessonId: 'agriculture-f3-soil-physical-2',
//   order: 36,
//   learningObjectives: [
//     'Define soil porosity and relate it to aeration and drainage',
//     'Identify soil colours and what they indicate about soil conditions'
//   ],
//   introduction: 'Porosity, colour, and depth are important physical properties. Porosity affects how much air and water the soil can hold. Colour tells you about organic matter and drainage. Today, we will learn these properties and their impact on farming.',
//   keyPoints: [
//     'Porosity: amount of pore space between particles. High porosity = good aeration and drainage.',
//     'Colour: dark = organic matter (fertile); red/yellow = iron oxides; grey/blue = waterlogged.',
//     'Depth: deeper soil allows roots to grow more deeply, accessing more water and nutrients.',
//     'Physical properties affect root penetration, water holding capacity, nutrient availability, and erosion risk.'
//   ],
//   detailedContent: `Soil Porosity

// Porosity is the amount of pore space (gaps) between soil particles.

// - High porosity means more air and water storage. Roots need oxygen.
// - Low porosity (compacted soil) leads to poor drainage, waterlogging, and root suffocation.

// Factors that reduce porosity: heavy machinery, overgrazing, raindrop impact (crusting). Improve porosity by adding organic matter and using minimum tillage.

// Soil Colour

// Colour tells you about soil conditions:

// - Dark brown or black: High organic matter (humus). Very fertile. Best for crops.
// - Red or yellow: Iron oxides present. Good drainage but may have low fertility.
// - Grey or blue: Waterlogged, lack of oxygen. Poor for roots. Need drainage.
// - Light grey/white: May have lime or be leached of nutrients.

// In Malawi, fertile soils are often dark brown in high-rainfall areas. Sandy soils are lighter.

// Soil Depth

// Soil depth is the thickness of the soil layer above bedrock or hardpan. Deep soils (more than 1 metre) allow roots to grow deep, accessing more water and nutrients. Shallow soils (less than 30 cm) restrict root growth and are more prone to drought.

// How Physical Properties Affect Crop Production

// - Root penetration: Compacted soil or clay hardpans block roots.
// - Water holding capacity: Sandy soil dries quickly; clay holds too much.
// - Nutrient availability: Organic matter (dark colour) supplies nutrients.
// - Erosion: Poor structure leads to erosion.
// - Workability: Sandy loam is easy to plough; heavy clay is hard.`,
//   summary: 'Porosity allows air and water movement. Dark colour indicates fertility; red is iron; grey is waterlogged. Deep soils are better for root growth.',
//   estimatedTime: '20 mins',
//   malawiExamples: [
//     { title: 'Dark Soil in Dedza', description: 'High organic matter from forest vegetation.' },
//     { title: 'Waterlogged Soil', description: 'Grey colour indicates poor drainage – need drainage channels.' }
//   ],
//   practiceQuestions: [
//     { question: 'What does dark brown soil indicate?', answer: 'High organic matter, good fertility', hint: 'Humus makes soil dark.' },
//     { question: 'Why is high porosity important for crops?', answer: 'It allows air (oxygen) for roots and water storage.', hint: 'Roots need oxygen to respire.' }
//   ]
// },

// // ======================================================================
// // BIOLOGY - FORM 3 (selected)
// // ======================================================================

// // Topic: Transport in plants (1 lesson)
// {
//   subject: 'Biology',
//   form: 'Form 3',
//   topic: 'Transport in Plants',
//   lessonNumber: 1,
//   lessonTitle: 'Xylem, Phloem, and Transpiration',
//   lessonId: 'biology-f3-transport-plants-1',
//   order: 37,
//   learningObjectives: [
//     'Describe the structure and function of xylem vessels and phloem sieve tubes',
//     'Explain the process of transpiration and its importance'
//   ],
//   introduction: 'How does water travel from the roots to the top of a tall maize plant? How does sugar from leaves reach the developing cob? The answer is TRANSPORT TISSUES – xylem and phloem. Today, we will learn how these tissues work and why transpiration is essential.',
//   keyPoints: [
//     'Xylem: transports water and minerals from roots to shoots. Dead cells, hollow, with lignin thickening.',
//     'Phloem: transports sucrose and amino acids from source (leaves) to sink (roots, fruits). Living sieve tube cells with companion cells.',
//     'Transpiration: loss of water vapour from plant surfaces (mostly through stomata).',
//     'Transpiration creates transpiration pull, cools plant, transports minerals.'
//   ],
//   detailedContent: `Xylem – The Water Highway

// Xylem tissue consists of vessels and tracheids. These are dead cells at maturity, with no cytoplasm. The walls are thickened with lignin (a woody substance) for strength. Lignin forms patterns (spiral, annular, reticulated) that prevent the tube from collapsing while allowing flexibility.

// Water and minerals (dissolved in water) enter root hairs and move through cortex to the xylem. From there, they are pulled upward by TRANSPIRATION PULL.

// Phloem – The Food Conveyor

// Phloem consists of sieve tube elements (living cells, but with reduced cytoplasm) and companion cells. The sieve plates have pores for flow. Phloem transports sucrose, amino acids, and other organic compounds from SOURCE (where they are made – leaves) to SINK (where they are used or stored – roots, flowers, fruits, seeds).

// This movement is called TRANSLOCATION. It requires energy (ATP) and can move up or down.

// Transpiration

// Transpiration is the loss of water vapour from the aerial parts of plants, mainly through stomata.

// Why is transpiration important?
// 1. Creates transpiration pull: water evaporating from leaves pulls more water up the xylem.
// 2. Cools the plant: evaporative cooling prevents overheating.
// 3. Supplies minerals: dissolved minerals move with the water flow.

// Factors Affecting Transpiration Rate

// - Light: Increases (stomata open in light).
// - Temperature: Increases (warmer air holds more water vapour).
// - Humidity: Decreases (air already moist, so gradient is low).
// - Wind: Increases (wind removes water vapour near leaf surface).
// - Water supply: Decreases if soil dry (stomata close).

// Adaptations to Reduce Water Loss

// Plants in dry areas (xerophytes) have:
// - Thick waxy cuticle (e.g., mango, baobab)
// - Sunken stomata (pits)
// - Reduced leaf area (spines, small leaves)
// - Rolling leaves when dry (some grasses)
// - Deep roots or water storage

// Malawi Example: A maize plant on a hot, dry, windy day will transpire rapidly. If the soil is dry, it may wilt. To conserve water, maize rolls its leaves.`,
//   summary: 'Xylem transports water and minerals upward; phloem transports sucrose and amino acids bidirectionally. Transpiration is water loss from leaves; it pulls water through xylem.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'Maize Leaf Rolling', description: 'Leaves roll to reduce surface area and transpiration during drought.' },
//     { title: 'Baobab Water Storage', description: 'Baobab trees have thick stems to store water and reduced leaves.' }
//   ],
//   practiceQuestions: [
//     { question: 'Which tissue transports sugar from leaves to roots?', answer: 'Phloem', hint: 'Transports food; sieve tubes.' },
//     { question: 'Why does transpiration increase on a windy day?', answer: 'Wind removes water vapour from around leaves, maintaining a steep gradient.', hint: 'Similar to evaporation from skin.' }
//   ]
// },

// // ======================================================================
// // CHEMISTRY - FORM 3 (selected)
// // ======================================================================

// // Topic: Stoichiometry – Mole concept (split into 2 lessons)
// {
//   subject: 'Chemistry',
//   form: 'Form 3',
//   topic: 'Stoichiometry',
//   lessonNumber: 1,
//   lessonTitle: 'The Mole Concept and Molar Mass',
//   lessonId: 'chemistry-f3-stoichiometry-1',
//   order: 38,
//   learningObjectives: [
//     'Define the mole as the amount of substance containing 6.02 × 10²³ particles',
//     'Calculate the molar mass of elements and compounds'
//   ],
//   introduction: 'Chemists need to count atoms, but atoms are too small to count one by one. The MOLE is a special counting unit – like a dozen (12) but much larger. One mole contains 602,000,000,000,000,000,000,000 particles – that is 6.02 × 10²³. Today, we will learn how to use the mole to measure substances.',
//   keyPoints: [
//     'One mole of any substance contains the same number of particles: 6.02 × 10²³ (Avogadro\'s constant).',
//     'Molar mass (M) = mass of one mole of substance (g/mol). Numerically equal to relative atomic/molecular mass.',
//     'Formulae: number of moles (n) = mass (m) / molar mass (M). Also n = number of particles / NA.',
//     'Percentage composition: (mass of element in 1 mole / molar mass) × 100%.'
//   ],
//   detailedContent: `The Mole – A Chemist's Dozen

// Just as a dozen always means 12 eggs, a mole always means 6.02 × 10²³ particles (atoms, molecules, ions, or electrons). This number is called Avogadro's constant (NA).

// Why 6.02 × 10²³? Because that is how many carbon-12 atoms are in exactly 12 grams of carbon-12.

// Molar Mass

// The molar mass (M) of a substance is the mass of one mole of that substance in grams per mole (g/mol). It is numerically equal to the relative atomic mass (for elements) or relative molecular mass (for compounds).

// Examples:
// - Carbon (C): atomic mass 12.0 → molar mass = 12.0 g/mol
// - Oxygen gas (O2): molecular mass 32.0 → molar mass = 32.0 g/mol
// - Water (H2O): molecular mass 18.0 → molar mass = 18.0 g/mol
// - Sodium chloride (NaCl): formula mass 58.5 → molar mass = 58.5 g/mol

// Calculations

// 1. Number of moles (n) = mass (m) / molar mass (M)
//    Example: How many moles are in 24 g of carbon?
//    n = 24 / 12 = 2.00 mol

// 2. Number of molecules = moles × NA
//    Example: How many molecules in 2 mol of water?
//    Number = 2 × 6.02 × 10²³ = 1.204 × 10²⁴ molecules

// 3. Mass = moles × molar mass
//    Example: What is the mass of 0.5 mol of NaCl?
//    m = 0.5 × 58.5 = 29.25 g

// Percentage Composition

// Percentage of element = (mass of element in 1 mole / molar mass of compound) × 100%

// Example: Find % of C in CO2 (C=12, O=16, molar mass 44 g/mol)
// %C = (12 / 44) × 100 = 27.3%
// %O = (32 / 44) × 100 = 72.7%`,
//   summary: 'One mole = 6.02 × 10²³ particles. Molar mass (g/mol) = mass of one mole. n = m/M. Percentage composition = (mass element/total mass)×100%.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'NPK Fertiliser', description: 'Percentage composition helps farmers calculate fertiliser needed.' },
//     { title: 'Water in Lake Malawi', description: 'Mole concept used to calculate amount of dissolved oxygen.' }
//   ],
//   practiceQuestions: [
//     { question: 'How many moles are in 90 g of water?', answer: '5.0 mol', hint: 'Molar mass of water is 18 g/mol; 90/18 = 5.' },
//     { question: 'What is the mass of 0.25 mol of sodium chloride (NaCl)?', answer: '14.625 g', hint: 'Molar mass NaCl = 58.5 g/mol; 0.25 × 58.5 = 14.625.' }
//   ]
// },
// {
//   subject: 'Chemistry',
//   form: 'Form 3',
//   topic: 'Stoichiometry',
//   lessonNumber: 2,
//   lessonTitle: 'Empirical and Molecular Formulae',
//   lessonId: 'chemistry-f3-stoichiometry-2',
//   order: 39,
//   learningObjectives: [
//     'Determine empirical and molecular formulae from experimental data',
//     'Calculate the percentage of water in hydrated ionic compounds'
//   ],
//   introduction: 'How do chemists figure out the formula of a compound? They use experimental data to find the EMPIRICAL FORMULA (simplest ratio) and then the MOLECULAR FORMULA (actual numbers). Today, we will learn how to do these calculations.',
//   keyPoints: [
//     'Empirical formula: simplest whole number ratio of atoms in a compound.',
//     'Molecular formula: actual number of atoms of each element in a molecule (n × empirical formula).',
//     'To find empirical formula: convert masses to moles, divide by smallest, get ratio.',
//     'Hydrated compounds contain water of crystallisation. Heating removes water; mass loss gives water percentage.'
//   ],
//   detailedContent: `Empirical and Molecular Formulae

// Empirical formula: simplest whole number ratio.

// Example: A compound contains 40% C, 6.7% H, 53.3% O. Find empirical formula.
// Assume 100 g:
// - C: 40/12 = 3.33 mol
// - H: 6.7/1 = 6.7 mol
// - O: 53.3/16 = 3.33 mol
// Divide by smallest (3.33):
// C = 1, H = 2, O = 1 → empirical formula CH2O

// Molecular formula = (empirical formula)n, where n = molecular mass / empirical mass.

// Example: Empirical formula CH2O (mass 30). If molecular mass is 60, then n = 60/30 = 2, so molecular formula = C2H4O2 (which is ethanoic acid).

// Percentage of Water in Hydrated Ionic Compounds

// Hydrated compounds contain water molecules in their crystal structure, e.g., CuSO4·5H2O (copper(II) sulphate pentahydrate).

// To find percentage of water:
// - Calculate molar mass of hydrated compound.
// - Calculate mass of water (number of H2O × 18).
// - % water = (mass of water / total mass) × 100%.

// Example: CuSO4·5H2O
// Molar mass CuSO4 = 63.5 + 32 + (16×4) = 159.5 g/mol
// Mass of 5H2O = 5 × 18 = 90 g/mol
// Total = 159.5 + 90 = 249.5 g/mol
// % water = (90 / 249.5) × 100 = 36.1%

// Experimental determination: Heat a known mass of hydrated salt. Cool and reweigh. The loss in mass is water. Then calculate % water.`,
//   summary: 'Empirical formula is simplest ratio; molecular formula = (empirical)n. Hydrated compounds contain water of crystallisation; % water calculated from mass loss on heating.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'Copper Sulphate Crystals', description: 'Blue crystals (CuSO4·5H2O) turn white when heated as water is driven off.' }
//   ],
//   practiceQuestions: [
//     { question: 'What is the empirical formula of a compound with 92.3% C and 7.7% H?', answer: 'CH', hint: 'Assume 100g: C = 92.3/12 = 7.69, H = 7.7/1 = 7.7; ratio ≈1:1.' },
//     { question: 'A hydrated salt has mass 5.00 g. After heating, mass is 3.20 g. Calculate % water.', answer: '36.0%', hint: 'Loss = 1.80 g; (1.80/5.00)×100 = 36%' }
//   ]
// },

// // ======================================================================
// // PHYSICS - FORM 3 (selected)
// // ======================================================================

// // Topic: Pressure (split into 2 lessons)
// {
//   subject: 'Physics',
//   form: 'Form 3',
//   topic: 'Pressure',
//   lessonNumber: 1,
//   lessonTitle: 'Pressure in Solids and Liquids',
//   lessonId: 'physics-f3-pressure-1',
//   order: 40,
//   learningObjectives: [
//     'Define pressure and state its SI unit (Pascal)',
//     'Calculate pressure using P = F/A and derive liquid pressure formula P = ρgh'
//   ],
//   introduction: 'Why does a sharp knife cut more easily than a blunt one? Why do tractors have wide tyres? The answer is PRESSURE – force spread over an area. Today, we will learn how to calculate pressure and understand its effects in solids and liquids.',
//   keyPoints: [
//     'Pressure = Force ÷ Area (P = F/A).',
//     'Unit: Pascal (Pa) = 1 N/m².',
//     'For the same force, smaller area gives higher pressure.',
//     'Liquid pressure increases with depth and density: P = ρgh.',
//     'Liquid pressure acts equally in all directions.'
//   ],
//   detailedContent: `Understanding Pressure

// Pressure is defined as the force acting perpendicularly per unit area.

// P = F / A

// Where:
// - P = pressure (Pascal, Pa)
// - F = force (Newton, N)
// - A = area (square metre, m²)

// Examples from Malawi:
// 1. A sharp knife has a very small cutting edge area. When you apply a small force, the pressure is huge, so it cuts easily.
// 2. A tractor used in fields has wide tyres. This increases the area so that pressure on the soft soil is low, preventing the tractor from sinking.
// 3. A person wearing high heels exerts very high pressure on the ground – heels can sink into soft earth.

// Calculating Pressure:

// Example: A box weighs 100 N and has a base area of 0.5 m².
// Pressure = 100 / 0.5 = 200 Pa.

// Liquid Pressure

// Pressure in a liquid at a certain depth depends on the density of the liquid, the depth, and gravity.

// P = ρ × g × h

// Where:
// - ρ (rho) = density of liquid (kg/m³)
// - g = acceleration due to gravity (≈ 10 N/kg on Earth)
// - h = depth below the surface (m)

// Important properties of liquid pressure:
// - Pressure increases with depth. This is why dams are built thicker at the bottom.
// - Pressure depends on density: mercury (dense) exerts higher pressure than water at the same depth.
// - Pressure acts equally in all directions.

// Worked Example:
// Calculate the pressure at a depth of 5 metres in water (density of water = 1000 kg/m³, g = 10 N/kg).
// P = 1000 × 10 × 5 = 50,000 Pa (or 50 kPa).

// Comparison: A person standing on one foot exerts pressure of about 20,000 Pa. The water pressure at 2 m depth is 20,000 Pa – similar.`,
//   summary: 'Pressure = Force/Area. Smaller area gives higher pressure. Liquid pressure = ρgh, increasing with depth and density. Pressure acts equally in all directions in a liquid.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'Tractor Tyres', description: 'Wide tyres reduce pressure on soft soil.' },
//     { title: 'Lake Malawi Diving', description: 'Pressure increases with depth – divers must equalise.' }
//   ],
//   practiceQuestions: [
//     { question: 'A woman weighs 500 N. The area of one high heel is 2 cm² = 0.0002 m². Calculate pressure when standing on one heel.', answer: '2,500,000 Pa (2.5 million Pa)', hint: 'P = F/A = 500 / 0.0002 = 2,500,000 Pa' },
//     { question: 'Calculate water pressure at a depth of 3 m in a well (density 1000 kg/m³, g = 10 N/kg).', answer: '30,000 Pa', hint: 'P = 1000 × 10 × 3 = 30,000 Pa' }
//   ]
// },
// {
//   subject: 'Physics',
//   form: 'Form 3',
//   topic: 'Pressure',
//   lessonNumber: 2,
//   lessonTitle: 'Atmospheric Pressure and Pascal’s Principle',
//   lessonId: 'physics-f3-pressure-2',
//   order: 41,
//   learningObjectives: [
//     'Explain atmospheric pressure and describe experiments to demonstrate it',
//     'State Pascal’s principle and apply it to hydraulic systems'
//   ],
//   introduction: 'Why does a liquid rise when you suck through a straw? Why can a suction cup stick to a wall? The answer is ATMOSPHERIC PRESSURE – the weight of air above us. Today, we will discover this invisible force and learn about Pascal’s principle, which makes hydraulic brakes and lifts possible.',
//   keyPoints: [
//     'Atmospheric pressure is the pressure exerted by the Earth’s air column.',
//     'At sea level, atmospheric pressure ≈ 101,325 Pa (1 atm).',
//     'Pascal’s principle: pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid.',
//     'Hydraulic systems use this to multiply force: F2 = (A2/A1) × F1.'
//   ],
//   detailedContent: `Atmospheric Pressure

// The air around us has weight. The column of air from the top of the atmosphere down to the ground exerts pressure on everything. At sea level, this pressure is about 101,325 Pa (sometimes called 1 atmosphere or 1 bar).

// Demonstration Experiments:
// 1. Crushing can experiment: Heat a small amount of water in an empty can until steam comes out. Quickly invert the can into cold water. The can collapses – atmospheric pressure crushes it.
// 2. Magdeburg hemispheres: Two hollow hemispheres are joined and air is pumped out. They cannot be pulled apart because atmospheric pressure holds them together.
// 3. Drinking straw: When you suck, you reduce pressure inside the straw. Atmospheric pressure pushes the liquid up.

// Applications of Atmospheric Pressure:
// - Syringe draws liquid by creating low pressure inside.
// - Suction cups stick when you press out the air.
// - Vacuum cleaners work by lowering pressure inside.

// Pascal’s Principle

// Pressure applied to an enclosed fluid is transmitted equally throughout the fluid.

// In a hydraulic system:

// A small force F1 applied over a small area A1 creates pressure P = F1/A1. This pressure is transmitted to a larger area A2, producing a larger force F2 = P × A2.

// Force multiplication: F2 = F1 × (A2/A1)

// Worked Example:
// A hydraulic jack has a small piston area of 0.01 m² and a large piston area of 0.1 m². A force of 100 N is applied on the small piston. What force is produced on the large piston?
// F2 = 100 × (0.1 / 0.01) = 100 × 10 = 1000 N.

// Applications: car brakes, hydraulic lifts, hydraulic presses.

// Malawi Example: A garage in Lilongwe uses a hydraulic lift to raise a car for repairs. The mechanic pushes a lever on a small piston, and the car rises.`,
//   summary: 'Atmospheric pressure is the weight of air. It is demonstrated by the crushing can experiment. Pascal’s principle: pressure is transmitted undiminished in an enclosed fluid, enabling force multiplication in hydraulic systems.',
//   estimatedTime: '25 mins',
//   malawiExamples: [
//     { title: 'Car Repair Garage', description: 'Hydraulic lift uses Pascal\'s principle to raise heavy cars.' },
//     { title: 'Drinking Water from a Well', description: 'Atmospheric pressure pushes water up when you create low pressure in a suction pump.' }
//   ],
//   practiceQuestions: [
//     { question: 'A hydraulic brake system has a master cylinder piston area of 2 cm² and wheel cylinder piston area of 10 cm². The driver applies 50 N force on the master cylinder. What force is applied to the brake pads?', answer: '250 N', hint: 'F2 = 50 × (10/2) = 250 N' },
//     { question: 'Why does a suction cup stick to a smooth surface?', answer: 'Atmospheric pressure pushes it against the surface when you expel air.', hint: 'Pressure inside is reduced. Outside air pushes it in.' }
//   ]
// },

// // ======================================================================
// // AGRICULTURE - FORM 4 (selected)
// // ======================================================================

// // Topic: Soil degradation (1 lesson)
// {
//   subject: 'Agriculture',
//   form: 'Form 4',
//   topic: 'Soil Degradation',
//   lessonNumber: 1,
//   lessonTitle: 'Forms, Causes, and Control of Soil Degradation',
//   lessonId: 'agriculture-f4-soil-degradation-1',
//   order: 42,
//   learningObjectives: [
//     'Define soil degradation and identify its forms (physical, chemical, biological)',
//     'Explain causes and effects of soil degradation and ways to control it'
//   ],
//   introduction: 'Soil is a precious resource, but it can be destroyed. When soil loses its ability to grow crops, we call it SOIL DEGRADATION. Today, we will learn what causes this, the terrible effects, and most importantly – how to stop it.',
//   keyPoints: [
//     'Soil degradation: decline in soil quality and productivity.',
//     'Physical degradation: erosion, compaction, crusting, loss of topsoil.',
//     'Chemical degradation: nutrient depletion, acidification, salinisation, pollution.',
//     'Biological degradation: loss of organic matter, decline in soil organisms.',
//     'Causes: water erosion, wind erosion, deforestation, overgrazing, continuous tillage, burning crop residues.',
//     'Effects: lower crop yields, increased fertiliser need, more drought vulnerability.',
//     'Control methods: conservation agriculture (minimum tillage, mulching, rotation), terracing, reforestation.'
//   ],
//   detailedContent: `What is Soil Degradation?

// Soil degradation is the loss of soil quality, making it less able to support plant growth. It is a major problem in Malawi, threatening food security.

// Forms of Soil Degradation

// 1. Physical degradation:
//    - Erosion: topsoil carried away by water or wind.
//    - Compaction: soil particles pressed together, reducing pores.
//    - Crusting: hard layer on surface, preventing water infiltration.

// 2. Chemical degradation:
//    - Nutrient depletion: crops remove more nutrients than are added.
//    - Acidification: pH drops, making some nutrients toxic.
//    - Salinisation: salt builds up (in irrigated areas).
//    - Pollution: chemicals from fertilisers, pesticides, or industrial waste.

// 3. Biological degradation:
//    - Loss of organic matter (humus).
//    - Decline in earthworms, termites, and soil microbes.

// Causes of Soil Degradation

// - Water erosion: Rain washes topsoil down slopes. Common in hilly areas of Malawi.
// - Wind erosion: In dry areas, wind blows away loose soil.
// - Deforestation: Removing trees leaves soil exposed.
// - Overgrazing: Too many animals eat all grass, leaving soil bare.
// - Poor tillage: Ploughing up and down slopes creates channels for erosion.
// - Burning crop residues: Destroys organic matter and kills soil organisms.

// Effects on Crop Production

// - Low yields: Less topsoil means less nutrients.
// - Increased fertiliser need: Farmer must spend more money.
// - More drought: Degraded soil holds less water.
// - Higher production costs: Need to rebuild soil.
// - Food insecurity: Poor harvests lead to hunger.

// Ways to Control Soil Degradation

// 1. Conservation agriculture:
//    - Minimum tillage (only disturb soil where planting).
//    - Permanent soil cover (mulch, cover crops).
//    - Crop rotation (include legumes).

// 2. Erosion control structures: Contour ridges, terracing, grass strips, check dams.

// 3. Reforestation and agroforestry: Plant trees on slopes, along contours, and in fields (e.g., Gliricidia, Faidherbia).

// 4. Controlled grazing: Rotate animals, keep numbers in balance with pasture.

// 5. Manure and compost: Replace organic matter.

// 6. Avoid burning crop residues – leave them on field as mulch.

// Malawi example: In Southern Malawi, farmers on steep slopes have built stone bunds (tisisili) to slow runoff. Others practice box ridges (mipanda) to trap water and soil. Many are adopting conservation agriculture with the help of extension workers.`,
//   summary: 'Soil degradation is loss of quality through erosion, nutrient loss, or biological decline. Causes: deforestation, overgrazing, poor tillage. Effects: low yields, drought vulnerability. Control with conservation agriculture, trees, terracing, and organic matter.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'Stone Bunds in Thyolo', description: 'Farmers build stone lines across slopes to reduce erosion.' },
//     { title: 'Conservation Agriculture', description: 'Planting maize without tillage and leaving mulch on surface.' }
//   ],
//   practiceQuestions: [
//     { question: 'What is a physical form of soil degradation?', answer: 'Erosion or compaction', hint: 'Physical means structure changes.' },
//     { question: 'How does planting trees help control soil degradation?', answer: 'Roots hold soil, reduces erosion, adds organic matter.', hint: 'Agroforestry.' }
//   ]
// },

// // ======================================================================
// // BIOLOGY - FORM 4 (selected)
// // ======================================================================

// // Topic: Immunity and disease (1 lesson)
// {
//   subject: 'Biology',
//   form: 'Form 4',
//   topic: 'Immunity and Disease',
//   lessonNumber: 1,
//   lessonTitle: 'How the Body Defends Against Pathogens',
//   lessonId: 'biology-f4-immunity-1',
//   order: 43,
//   learningObjectives: [
//     'Distinguish between non-specific (first line) and specific (immune) defences',
//     'Explain how vaccination works and why it is important'
//   ],
//   introduction: 'Every day, you are exposed to germs. Yet you stay healthy most of the time because your body has defences. These range from simple barriers to sophisticated immune cells. Today, we will learn how your body fights infection.',
//   keyPoints: [
//     'First line of defence (non-specific): skin, mucus, cilia, stomach acid, tears, lysozyme.',
//     'Second line of defence (non-specific): phagocytes (white blood cells that engulf pathogens), inflammation, fever.',
//     'Third line of defence (specific immunity): B cells produce antibodies; T helper cells activate B cells; T killer cells destroy infected cells.',
//     'Antigens: molecules on pathogen surface that trigger immune response.',
//     'Immunity types: natural active (get disease), artificial active (vaccination), natural passive (breast milk), artificial passive (antibody injection).',
//     'Vaccination: introduces harmless antigen; body makes memory cells for rapid response.'
//   ],
//   detailedContent: `First Line of Defence (Non-specific barriers)

// These are physical and chemical barriers that prevent pathogen entry.

// - Skin: Tough, waterproof, unbroken skin blocks most germs. Sweat and sebum contain antibacterial substances.
// - Mucous membranes: line nose, mouth, trachea, etc. Mucus traps pathogens.
// - Cilia: hair-like projections in airways that sweep mucus (with trapped germs) towards throat.
// - Stomach acid (HCl): kills many ingested bacteria and viruses.
// - Tears: contain lysozyme (enzyme that breaks bacterial cell walls).

// Second Line of Defence (Non-specific internal)

// When pathogens breach first line, these responses start:

// - Phagocytes (macrophages, neutrophils): white blood cells that engulf and digest pathogens.
// - Inflammation: Redness, heat, swelling, pain – increased blood flow brings more phagocytes.
// - Fever: Body temperature rises; this slows pathogen reproduction.

// Third Line of Defence (Specific immunity)

// This is tailored to specific pathogens. It involves LYMPHOCYTES.

// 1. B cells: produce ANTIBODIES. Antibodies are proteins that bind specifically to ANTIGEN on pathogen. The binding neutralises pathogen or marks it for destruction.

// 2. T cells:
//    - T helper cells (CD4): activate B cells and T killer cells.
//    - T killer cells (CD8): destroy cells that are infected by virus.

// After infection, some B and T cells become MEMORY CELLS – they remain in body for years. Upon re-infection, they mount a rapid response.

// Types of Immunity

// - Natural active: Get disease, recover – long-term (e.g., chickenpox).
// - Artificial active: Vaccination – long-term (e.g., BCG for TB).
// - Natural passive: Antibodies from mother via breast milk – short-term.
// - Artificial passive: Injection of antibodies (e.g., antivenom) – short-term.

// Vaccination

// Vaccine contains weakened or killed pathogen, or part of it (antigen). It does not cause disease but stimulates immune system to produce memory cells. When real pathogen attacks, memory cells respond quickly and stop infection.

// Importance: Eradicated smallpox; nearly eradicated polio; prevents measles, tetanus, diphtheria. In Malawi, EPI (Expanded Programme on Immunisation) gives BCG, polio, DPT, measles, etc., free.

// HIV and Immunity

// HIV infects helper T cells (CD4 cells). It replicates inside them and destroys them. As CD4 count falls, immune system fails. The person becomes vulnerable to opportunistic infections like TB, pneumonia. This stage is AIDS.

// Prevention: Abstinence, faithfulness, condoms (ABC), male circumcision, avoid sharing needles, test and treat.`,
//   summary: 'First line: skin, mucus, cilia, acid, tears. Second: phagocytes, inflammation, fever. Third: B cells (antibodies), T cells (helper and killer). Vaccination gives artificial active immunity. HIV destroys helper T cells, causing AIDS.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'EPI Vaccination', description: 'Free childhood vaccines prevent TB, measles, polio.' },
//     { title: 'HIV Testing Campaign', description: 'Mobile clinics promote testing and ART.' }
//   ],
//   practiceQuestions: [
//     { question: 'What type of immunity is obtained by receiving antibodies through breast milk?', answer: 'Natural passive immunity', hint: 'From mother, not long-term.' },
//     { question: 'Which white blood cell produces antibodies?', answer: 'B lymphocytes (B cells)', hint: 'B for antibody production.' }
//   ]
// },

// // ======================================================================
// // CHEMISTRY - FORM 4 (selected)
// // ======================================================================

// // Topic: Chemical reactions – rates of reaction (1 lesson)
// {
//   subject: 'Chemistry',
//   form: 'Form 4',
//   topic: 'Rates of Reaction',
//   lessonNumber: 1,
//   lessonTitle: 'Factors Affecting Reaction Rates',
//   lessonId: 'chemistry-f4-reaction-rates-1',
//   order: 44,
//   learningObjectives: [
//     'Define rate of reaction and explain factors affecting it (concentration, temperature, surface area, catalyst)',
//     'Interpret graphs of reaction progress (concentration vs time, volume vs time)'
//   ],
//   introduction: 'Some reactions happen in a flash; others take ages. Why? The RATE OF REACTION depends on several factors. Today, we will learn what makes reactions faster or slower, and how we can control them – important in cooking, industry, and even in your body.',
//   keyPoints: [
//     'Rate of reaction = amount of reactant used or product formed per unit time.',
//     'Factors: concentration (higher → faster), temperature (higher → faster), surface area (smaller particles → faster), catalyst (provides alternative pathway with lower activation energy).',
//     'Collision theory: particles must collide with sufficient energy (activation energy) and correct orientation.',
//     'Catalyst speeds up reaction without being consumed; lowers activation energy.',
//     'Graphs: steeper slope = faster rate; plateau when reaction finishes.'
//   ],
//   detailedContent: `What is Rate of Reaction?

// Rate measures how quickly reactants are used up or products are formed. It can be expressed as:
// - Change in mass (g/s)
// - Change in volume of gas (cm³/s)
// - Change in concentration (mol/dm³/s)

// Collision Theory

// For a reaction to occur, particles must:
// 1. Collide with each other.
// 2. Have enough energy (at least the activation energy, Ea).
// 3. Have the correct orientation.

// Factors Affecting Rate

// 1. Concentration (for solutions) or pressure (for gases)
// Higher concentration means more particles in the same volume → more frequent collisions → faster rate.
// Example: Marble chips (CaCO3) react faster with 2M HCl than with 0.5M HCl (more CO2 gas produced in same time).

// 2. Temperature
// Increasing temperature gives particles more kinetic energy. They move faster (more collisions) and a greater proportion have energy > Ea (more successful collisions). Reaction rate roughly doubles for every 10°C rise.

// 3. Surface area (solid particle size)
// Powdered solid has larger surface area than a single lump. More particles exposed for collisions → faster rate.
// Example: Powdered chalk reacts faster with acid than large chips.

// 4. Catalyst
// A catalyst speeds up a reaction without being consumed. It provides an alternative reaction pathway with lower activation energy. Catalysts are very specific – manganese(IV) oxide for hydrogen peroxide decomposition, platinum for car exhaust converters. Enzymes are biological catalysts.

// Experiments to Measure Rate

// Magnesium with hydrochloric acid: Mg + 2HCl → MgCl2 + H2.
// Measure volume of hydrogen gas produced in a gas syringe at regular intervals. Plot volume vs time. Slope = rate.

// Graph Interpretation

// On a concentration vs time graph:
// - Steep initial slope = fastest rate (reactants fresh).
// - Slope decreases as reactants used up.
// - Line becomes horizontal when reaction stops.

// On a volume vs time graph for gas:
// - Rapid rise initially, then levels off.
// - Changing a factor (higher temp) makes initial slope steeper and plateau reached faster.

// Activation Energy and Catalysts

// Activation energy is the minimum energy needed for a reaction to occur. A catalyst lowers the activation energy, so a greater fraction of particles have enough energy. The catalyst does not change the final products or enthalpy change.

// Malawi Example: Adding a catalyst (manganese dioxide) to hydrogen peroxide makes it decompose faster, producing oxygen gas. This is used in some school demonstrations. In the body, enzymes catalyse digestion.`,
//   summary: 'Rate = amount/time. Factors: concentration (faster if higher), temperature (faster if higher), surface area (smaller particles faster), catalyst (speeds without being consumed). Collision theory: particles must collide with enough energy and correct orientation.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'Digestion', description: 'Enzymes are biological catalysts speeding up food breakdown.' },
//     { title: 'Using Manganese Dioxide', description: 'Speeds up hydrogen peroxide decomposition in labs.' }
//   ],
//   practiceQuestions: [
//     { question: 'Why does powdered chalk react faster with acid than whole pieces?', answer: 'Powder has larger surface area, so more collisions between particles.', hint: 'Surface area increases exposure.' },
//     { question: 'How does a catalyst affect activation energy?', answer: 'It lowers activation energy, providing an easier pathway.', hint: 'Makes it easier for particles to react.' }
//   ]
// },

// // ======================================================================
// // PHYSICS - FORM 4 (selected)
// // ======================================================================

// // Topic: Newton's laws of motion (1 lesson)
// {
//   subject: 'Physics',
//   form: 'Form 4',
//   topic: 'Newton\'s Laws of Motion',
//   lessonNumber: 1,
//   lessonTitle: 'Newton’s Three Laws and Applications',
//   lessonId: 'physics-f4-newton-laws-1',
//   order: 45,
//   learningObjectives: [
//     'State Newton’s three laws of motion',
//     'Apply Newton’s second law (F = ma) to solve problems'
//   ],
//   introduction: 'Sir Isaac Newton gave us three laws that explain almost all motion – from a ball rolling on the ground to a rocket launching into space. Today, we will learn these fundamental laws and see them in action around us.',
//   keyPoints: [
//     'First law (Law of Inertia): An object remains at rest or in uniform motion unless acted upon by an external force.',
//     'Second law: F = ma (force = mass × acceleration).',
//     'Third law: For every action, there is an equal and opposite reaction.',
//     'Inertia is the tendency of an object to resist changes in its motion.',
//     'Units: Force in newtons (N), mass in kg, acceleration in m/s².'
//   ],
//   detailedContent: `Newton’s First Law (Law of Inertia)

// "An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an external force."

// Example 1: A book on a table remains at rest because no net force acts on it. If you push it, it moves.

// Example 2: A passenger in a minibus lurches forward when the minibus stops suddenly – the passenger’s body tends to continue moving (inertia).

// Inertia is related to mass: more massive objects have more inertia (harder to start or stop).

// Newton’s Second Law (F = ma)

// The acceleration (a) of an object is directly proportional to the net force (F) acting on it and inversely proportional to its mass (m).

// F = m × a

// Example: A 1000 kg car accelerates at 2 m/s². What force is needed?
// F = 1000 × 2 = 2000 N.

// If the same force is applied to a 2000 kg truck, acceleration = F/m = 2000/2000 = 1 m/s² (half the acceleration because mass doubled).

// Newton’s Third Law (Action-Reaction)

// "For every action force, there is an equal and opposite reaction force."

// Action-reaction pairs act on different objects. They do not cancel each other.

// Examples:
// - When you sit on a chair, your weight pushes down (action). The chair pushes up with an equal force (reaction).
// - When a bird flaps its wings, wings push air down (action); air pushes wings up (reaction) – bird flies.
// - A boat propeller pushes water backward (action); water pushes boat forward (reaction).

// Malawi Example:
// - A person jumping off a small boat onto a pier: They push the boat backward (action), and the boat pushes them forward (reaction).
// - A farmer using a hoe: The hoe pushes soil (action); soil pushes back on the hoe (reaction) – you feel it in your hands.`,
//   summary: 'Newton’s first law: inertia. Second law: F = ma. Third law: action-reaction pairs. These laws govern all motion and are essential for understanding forces and dynamics.',
//   estimatedTime: '22 mins',
//   malawiExamples: [
//     { title: 'Minibus Sudden Stop', description: 'Passengers lurch forward due to inertia.' },
//     { title: 'Rowing a Boat', description: 'Paddles push water backward; water pushes boat forward (third law).' }
//   ],
//   practiceQuestions: [
//     { question: 'A 1500 kg car accelerates at 3 m/s². Calculate the net force.', answer: '4500 N', hint: 'F = 1500 × 3 = 4500 N' },
//     { question: 'A 50 kg person jumps off a 5 kg boat. If the person exerts a force of 200 N on the boat, what force does the boat exert on the person?', answer: '200 N', hint: 'Third law – equal and opposite.' }
//   ]
// },

  
  // BIOLOGY - FORM 1

  // Topic: Characteristics of living things (1 lesson)
  {
    subject: 'Biology',
    form: 'Form 1',
    topic: 'Characteristics of Living Things',
    lessonNumber: 1,
    lessonTitle: 'The Seven Life Processes (MRS GREN)',
    lessonId: 'biology-f1-characteristics-1',
    order: 15,
    learningObjectives: [
      'List the seven characteristics of living things',
      'Explain each characteristic with examples'
    ],
    introduction: 'How do you know that a maize plant is alive but a stone is not? Living things share certain processes that non-living things do not have. Today, we will learn the SEVEN CHARACTERISTICS OF LIVING THINGS and use them to identify life around us.',
    keyPoints: [
      'Movement: change of position or internal movement.',
      'Respiration: release of energy from food.',
      'Sensitivity: detect and respond to changes in the environment.',
      'Growth: increase in size or number of cells.',
      'Reproduction: producing offspring of the same kind.',
      'Excretion: removal of waste products.',
      'Nutrition: obtaining and using food for energy and growth.'
    ],
    detailedContent: `The Seven Life Processes

To be called living, an organism must carry out all seven processes.

1. MOVEMENT: Living things can change position or move parts of themselves. Animals move whole bodies – a chicken walking, a fish swimming. Plants move slowly – a sunflower turns towards the sun.

2. RESPIRATION: The process of releasing energy from food. It happens in every living cell. Humans and animals breathe in oxygen, which helps break down glucose to release energy. Plants also respire.

3. SENSITIVITY (IRRITABILITY): Living things detect changes in their environment (stimuli) and respond. If you touch a hot stove, you pull your hand away. A maize plant grows towards light.

4. GROWTH: Living things increase in size and complexity. A baby goat becomes a big goat. A maize seed germinates and becomes a tall plant.

5. REPRODUCTION: Living things produce offspring of their own kind. A chicken lays eggs that hatch into chicks. A maize plant produces seeds.

6. EXCRETION: Living things produce waste products that must be removed. Excretion is getting rid of metabolic wastes. Humans excrete urine and exhale carbon dioxide. Plants excrete oxygen.

7. NUTRITION: Living things need food to provide energy and building materials. Plants make their own food by photosynthesis. Animals eat plants or other animals.

Non-living things do not perform all these processes. A car moves but does not grow, reproduce, or excrete.`,
    summary: 'Living things carry out Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, and Nutrition (MRS GREN). Non-living things do not perform all these processes.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Chicken Life', description: 'Observe a chicken – it moves, eats, breathes, responds, grows, reproduces, and excretes.' },
      { title: 'Maize Plant', description: 'It grows, reproduces by seeds, responds to light, respires, and takes up nutrients.' }
    ],
    practiceQuestions: [
      { question: 'Name three characteristics of living things.', answer: 'Movement, respiration, growth (any three)', hint: 'Remember MRS GREN.' },
      { question: 'Why is a dead tree not considered living?', answer: 'It no longer carries out any of the life processes.', hint: 'It once did, but now stopped.' }
    ]
  },

  // Topic: Classification of living things (1 lesson)
  {
    subject: 'Biology',
    form: 'Form 1',
    topic: 'Classification of Living Things',
    lessonNumber: 1,
    lessonTitle: 'Hierarchy and Binomial Nomenclature',
    lessonId: 'biology-f1-classification-1',
    order: 16,
    learningObjectives: [
      'Explain why living things are classified and define the hierarchy (Kingdom to Species)',
      'Use a simple dichotomous key to identify organisms'
    ],
    introduction: 'There are millions of living things on Earth. To study them, scientists group them into categories. This is CLASSIFICATION. Today, we will learn the hierarchy of classification and how to use a DICHOTOMOUS KEY to identify organisms.',
    keyPoints: [
      'Why classify: to organise, show relationships, give universal names (avoid confusion).',
      'Hierarchy: Kingdom, Phylum, Class, Order, Family, Genus, Species (King Philip Came Over For Great Soup).',
      'Species: group that can interbreed to produce fertile offspring. Human: Homo sapiens.',
      'Binomial nomenclature: two-part scientific name (Genus species), e.g., Zea mays (maize).',
      'Dichotomous key: series of paired choices that lead to identification.'
    ],
    detailedContent: `Why Classification?

If you ask for "chimanga" in Chichewa, everyone knows it is maize. But in other languages, the same plant has different names. Scientists use a universal naming system to avoid confusion. Classification also shows how organisms are related.

Hierarchy of Classification

There are seven main levels (taxa), from broadest to most specific:

- Kingdom (e.g., Animalia)
- Phylum (e.g., Chordata)
- Class (e.g., Mammalia)
- Order (e.g., Primates)
- Family (e.g., Hominidae)
- Genus (e.g., Homo)
- Species (e.g., sapiens)

Full scientific name: Homo sapiens (humans). For maize: Zea mays.

Binomial Nomenclature

The scientific name has two parts: Genus (capital first letter) and species (lowercase), both italicised or underlined.

Examples from Malawi:
- Maize: Zea mays
- Groundnut: Arachis hypogaea
- Chicken: Gallus gallus

Dichotomous Key

A dichotomous key asks a series of questions, each with two choices. By answering correctly, you identify the organism.

Example simple key for animals:

1. Does it have a backbone? Yes → go to 2. No → go to 5.
2. Does it have hair? Yes → Mammal. No → go to 3.
3. Does it have feathers? Yes → Bird. No → go to 4.
4. Does it have scales? Yes → Fish. No → Reptile.
5. Does it have six legs? Yes → Insect. No → go to 6.
6. Does it have eight legs? Yes → Spider. No → Worm.

You can make your own key for local organisms.`,
    summary: 'Classification groups organisms into Kingdom, Phylum, Class, Order, Family, Genus, Species. Binomial nomenclature gives each species a unique two-part name. Dichotomous keys use paired choices to identify unknown organisms.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Maize Scientific Name', description: 'Zea mays – same name used by scientists worldwide.' },
      { title: 'Dichotomous Key for Insects', description: 'Students use a key to identify grasshoppers, ants, and beetles.' }
    ],
    practiceQuestions: [
      { question: 'In the scientific name Zea mays, what does Zea represent?', answer: 'The genus', hint: 'First part is genus.' },
      { question: 'Why do scientists use scientific names instead of common names?', answer: 'To have a universal language that avoids confusion across languages and regions.', hint: 'Common names differ by place.' }
    ]
  },

  // Topic: Food chains and food webs (1 lesson)
  {
    subject: 'Biology',
    form: 'Form 1',
    topic: 'Food Chains and Food Webs',
    lessonNumber: 1,
    lessonTitle: 'Energy Flow, Producers, Consumers, Decomposers',
    lessonId: 'biology-f1-food-chains-1',
    order: 17,
    learningObjectives: [
      'Define producer, consumer, decomposer, herbivore, carnivore, omnivore',
      'Construct a simple food chain and food web'
    ],
    introduction: 'Who eats whom in nature? The energy from the sun flows from plants to animals, and then to other animals. This is a FOOD CHAIN. Today, we will learn how to draw food chains and webs.',
    keyPoints: [
      'Producers: make their own food by photosynthesis (green plants).',
      'Consumers: eat other organisms. Herbivores eat plants; carnivores eat meat; omnivores eat both.',
      'Decomposers: break down dead matter (bacteria, fungi).',
      'Food chain: shows one path of energy, e.g., grass → grasshopper → bird → eagle.',
      'Food web: many interconnected food chains.',
      'Each step is a trophic level. About 10% of energy transfers to the next level.'
    ],
    detailedContent: `Understanding Energy Flow

All life depends on the sun. Green plants (producers) capture solar energy and convert it into chemical energy (food).

Producers, Consumers, Decomposers

- Producers: Plants, algae. They make food using sunlight.
- Consumers: Animals that eat producers or other consumers.
  - Primary consumers: herbivores (eat plants). Example: grasshopper, cow.
  - Secondary consumers: carnivores that eat herbivores. Example: chicken (eats grasshopper).
  - Tertiary consumers: carnivores that eat other carnivores. Example: eagle.
  - Omnivores: eat both plants and animals. Example: human, pig.
- Decomposers: Fungi, bacteria. Break down dead organisms and waste, returning nutrients to soil.

Food Chains

A food chain shows one path. Arrows point in the direction of energy flow (from food to eater).

Example from Malawi maize field:
Maize (producer) → grasshopper (primary consumer) → chicken (secondary consumer) → hawk (tertiary consumer)

Food Webs

In nature, most animals eat more than one type of food. A food web is many food chains connected.

Example: In a village pond:
- Algae eaten by small fish and tadpoles.
- Small fish eaten by larger fish and kingfisher.
- Tadpoles eaten by large fish and dragonfly nymphs.
- All these connecting chains form a web.

Trophic Levels and Energy Loss

Each level is a trophic level. About 90% of energy is used for life processes. Only about 10% goes to the next level. This is why there are fewer top predators than plants.`,
    summary: 'Producers make food; consumers eat others; decomposers recycle. Food chains show one energy path; webs show interconnections. Only about 10% of energy transfers between levels.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Maize Field Chain', description: 'Maize → grasshopper → chicken → hawk.' },
      { title: 'Lake Malawi Web', description: 'Algae → small fish → chambo → otter.' }
    ],
    practiceQuestions: [
      { question: 'What is the role of decomposers in a food chain?', answer: 'Break down dead organisms and waste, returning nutrients to the soil.', hint: 'They are recyclers.' },
      { question: 'Why are there usually more zebra than lions in an ecosystem?', answer: 'Energy is lost at each trophic level, so fewer high-level consumers can be supported.', hint: 'Only 10% energy transfer.' }
    ]
  },

  // Topic: Nutrition in humans (1 lesson)
  {
    subject: 'Biology',
    form: 'Form 1',
    topic: 'Nutrition in Humans',
    lessonNumber: 1,
    lessonTitle: 'Food Nutrients, Tests, and Balanced Diet',
    lessonId: 'biology-f1-human-nutrition-1',
    order: 18,
    learningObjectives: [
      'List the six classes of food nutrients and their functions',
      'Carry out food tests for starch, reducing sugar, protein, and fat'
    ],
    introduction: 'You eat nsima, vegetables, fish, and fruit. These foods contain NUTRIENTS that your body needs. Today, we will learn the six classes of nutrients, how to test for them, and what happens when you do not get enough.',
    keyPoints: [
      'Carbohydrates: energy source. Test: iodine turns blue-black.',
      'Proteins: growth and repair. Test: Biuret turns purple.',
      'Fats (lipids): energy store, insulation. Test: paper spot (translucent) or Sudan III red.',
      'Vitamins: needed in small amounts; C prevents scurvy; A for vision.',
      'Minerals: calcium (bones), iron (haemoglobin), iodine (thyroid).',
      'Water: needed for all life processes.',
      'Balanced diet: contains all nutrients in correct proportions.',
      'Deficiency diseases: scurvy (vitamin C), rickets (vitamin D/calcium), kwashiorkor (protein), anaemia (iron), goitre (iodine).'
    ],
    detailedContent: `The Six Classes of Nutrients

1. Carbohydrates: Provide energy. Sources: nsima, bread, rice. Test: Iodine solution turns from brown to blue-black if starch is present.

2. Proteins: Build and repair body tissues. Sources: beans, fish, meat, eggs. Test: Biuret test (sodium hydroxide + copper sulphate) turns purple.

3. Fats (Lipids): Long-term energy store; insulation; protect organs. Sources: cooking oil, groundnuts. Test: Rub on paper – translucent spot; or Sudan III stain turns red.

4. Vitamins: Regulate body processes. Vitamin A (carrots) for eyesight; Vitamin C (oranges) prevents scurvy; Vitamin D (sunlight, eggs) for bones.

5. Minerals: Calcium (milk) for bones; Iron (meat, beans) for haemoglobin (prevents anaemia); Iodine (fish, iodised salt) for thyroid (prevents goitre).

6. Water: Solvent for reactions, transport, temperature regulation.

Food Tests – Procedure

Starch test: Add iodine solution to food. Blue-black colour = starch present.

Reducing sugar test (Benedict's test): Add Benedict's solution, heat in water bath. Brick-red precipitate = sugar present.

Protein test (Biuret): Add dilute copper sulphate, then sodium hydroxide. Purple colour = protein.

Fat test: Rub food on paper. Leave to dry. Translucent spot = fat.

Balanced Diet

A balanced diet contains all six nutrients in the right amounts. The proportion depends on age, gender, and activity level.

Deficiency Diseases

- Kwashiorkor: Protein deficiency – swollen belly, thin arms.
- Anaemia: Iron deficiency – tiredness, pale skin.
- Scurvy: Vitamin C deficiency – bleeding gums.
- Rickets: Vitamin D/calcium deficiency – soft bones.
- Goitre: Iodine deficiency – enlarged thyroid gland.`,
    summary: 'Six nutrients: carbohydrates (energy), proteins (growth), fats (storage), vitamins (regulation), minerals (structure), water (solvent). Food tests identify them. Balanced diet prevents deficiency diseases.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Nsima and Beans', description: 'Carbohydrate + protein – a common balanced meal.' },
      { title: 'Goitre in Malawi', description: 'Iodine deficiency caused swollen thyroid; iodised salt now common.' }
    ],
    practiceQuestions: [
      { question: 'What nutrient is most important for growth and repair of body tissues?', answer: 'Protein', hint: 'Found in beans and fish.' },
      { question: 'What colour change indicates starch in a food sample after adding iodine?', answer: 'Brown to blue-black', hint: 'Iodine test.' }
    ]
  },

  // Topic: Digestive system (1 lesson)
  {
    subject: 'Biology',
    form: 'Form 1',
    topic: 'Digestive System',
    lessonNumber: 1,
    lessonTitle: 'Parts and Functions of the Human Digestive System',
    lessonId: 'biology-f1-digestive-1',
    order: 19,
    learningObjectives: [
      'Identify the main parts of the human digestive system and describe their functions',
      'Distinguish between physical digestion and chemical digestion'
    ],
    introduction: 'The food you eat is not in a form your cells can use. The DIGESTIVE SYSTEM breaks food into tiny molecules that can be absorbed into the blood. Today, we will travel through the digestive tract and learn what happens at each stop.',
    keyPoints: [
      'Mouth: teeth (physical), saliva (amylase breaks starch).',
      'Oesophagus: carries food to stomach by peristalsis.',
      'Stomach: churns food; gastric juice (HCl, pepsin) starts protein digestion.',
      'Liver: produces bile (emulsifies fats). Pancreas: produces digestive enzymes.',
      'Small intestine: main digestion and absorption. Villi increase surface area.',
      'Large intestine: absorbs water and minerals, forms faeces.',
      'Physical digestion: chewing, churning – increases surface area.',
      'Chemical digestion: enzymes break bonds.',
      'End products: glucose (carbohydrates), amino acids (proteins), fatty acids + glycerol (fats).'
    ],
    detailedContent: `The Journey of Food

Mouth: Digestion begins here. Teeth cut and grind food (physical). Saliva contains AMYLASE, which starts breaking starch into maltose. The tongue shapes food into a ball (bolus).

Oesophagus (gullet): Muscular tube connecting mouth to stomach. Muscles contract in waves (PERISTALSIS) to push the bolus down.

Stomach: A muscular bag. It churns food (physical). Gastric glands secrete GASTRIC JUICE: hydrochloric acid (kills bacteria, unfolds proteins) and PEPSIN (breaks proteins into smaller peptides). After 2-4 hours, food becomes a liquid (chyme).

Pancreas and Liver (accessory organs):
- Liver produces BILE, stored in gall bladder. Bile EMULSIFIES fats (not an enzyme).
- Pancreas produces pancreatic juice containing: amylase, trypsin, lipase.

Small Intestine (duodenum, jejunum, ileum): About 6 metres long. Most digestion and absorption occur here. The inner surface has millions of tiny finger-like projections called VILLI. Villi absorb nutrients into blood.

Large Intestine (colon): Water and minerals are absorbed. Remaining undigested material becomes solid FAECES.

Rectum: Stores faeces. Anus: Opens to expel faeces.

Physical vs Chemical Digestion

- Physical digestion: breaking food into smaller pieces (chewing, churning) – increases surface area but does not change chemical composition.
- Chemical digestion: enzymes break chemical bonds, changing large molecules into smaller, absorbable molecules.

End Products: Starch → glucose; Proteins → amino acids; Fats → fatty acids + glycerol.`,
    summary: 'Digestion starts in mouth, continues in stomach, then small intestine. Villi absorb nutrients. Physical digestion breaks food into smaller pieces; chemical digestion uses enzymes to break molecules.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Nsima Digestion', description: 'Starch in nsima is broken down by amylase into glucose.' },
      { title: 'Villi in Small Intestine', description: 'Increase surface area for absorption of nutrients.' }
    ],
    practiceQuestions: [
      { question: 'What is the function of villi in the small intestine?', answer: 'They increase surface area for absorption of nutrients into the blood.', hint: 'Finger-like projections.' },
      { question: 'What is the end product of protein digestion?', answer: 'Amino acids', hint: 'Proteins are broken into building blocks.' }
    ]
  },

  // ======================================================================
  // CHEMISTRY - FORM 1
  // ======================================================================

  // Topic: Introduction to Chemistry (1 lesson)
  {
    subject: 'Chemistry',
    form: 'Form 1',
    topic: 'Introduction to Chemistry',
    lessonNumber: 1,
    lessonTitle: 'What is Chemistry? Branches and Laboratory Safety',
    lessonId: 'chemistry-f1-intro-1',
    order: 20,
    learningObjectives: [
      'Define chemistry and state its importance in everyday life',
      'State and apply general laboratory safety rules'
    ],
    introduction: 'Welcome to Chemistry! Have you ever wondered why iron rusts, how soap cleans, or how your body digests food? Chemistry explains these and more. Today, we will learn what chemistry is and how to stay safe in the laboratory.',
    keyPoints: [
      'Chemistry is the study of matter, its properties, composition, and the changes it undergoes.',
      'Branches: organic (carbon compounds), inorganic (non-carbon), physical (energy), analytical (identification), environmental (pollution).',
      'Laboratory apparatus: beaker, test tube, measuring cylinder, Bunsen burner, tripod, funnel, filter paper, balances.',
      'Safety rules: wear goggles and lab coat, tie back hair, no eating/drinking, report spills, wash hands, know first aid kit location.',
      'Hazard symbols: flammable, toxic, corrosive, irritant, explosive.'
    ],
    detailedContent: `What is Chemistry?

Chemistry is the branch of science that studies the composition, structure, properties, and changes of matter. Everything around you – the air, water, clothes, food – is made of chemicals.

Importance of Chemistry in Malawi

- Agriculture: Fertilisers (NPK, urea) and pesticides.
- Medicine: Pharmaceuticals, vaccines.
- Water treatment: Chlorine kills germs.
- Soap making: Saponification of fats with alkali.
- Food preservation: Salt, sugar, chemical preservatives.

Branches of Chemistry

- Organic chemistry: Carbon compounds (plastics, fuels, drugs, proteins).
- Inorganic chemistry: Non-carbon compounds (metals, salts, acids, bases).
- Physical chemistry: Energy changes, reaction rates.
- Analytical chemistry: Identification and quantification of substances.
- Environmental chemistry: Study of chemicals in the environment, pollution.

Common Laboratory Apparatus

- Beaker: hold and heat liquids.
- Test tube: small-scale reactions.
- Measuring cylinder: measure liquid volumes.
- Bunsen burner: heating.
- Tripod and wire gauze: support during heating.
- Funnel and filter paper: filtration.
- Balance: measure mass.

Laboratory Safety Rules

Wear safety goggles at all times. Lab coat protects clothing. Tie back long hair. No eating or drinking in the lab. Never taste any chemical. Report all spills and accidents immediately. Know location of first aid kit, fire extinguisher, and fire blanket. Wash hands after lab work.

Hazard Symbols

- Flame: Flammable – keep away from heat.
- Skull and crossbones: Toxic – avoid ingestion, inhalation, skin contact.
- Corrosion: Corrosive – destroys skin and materials.
- Exclamation mark: Irritant – may cause skin irritation.
- Exploding bomb: Explosive.

How to smell a chemical: Never put nose directly to container. Waft vapour toward nose with hand.`,
    summary: 'Chemistry is study of matter and its changes. Branches: organic, inorganic, physical, analytical, environmental. Follow safety rules: goggles, no eating, report accidents. Recognise hazard symbols.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Soap Making', description: 'Sodium hydroxide (caustic) used – must wear goggles and gloves.' },
      { title: 'Fertiliser Production', description: 'NPK fertilisers made from chemical reactions.' }
    ],
    practiceQuestions: [
      { question: 'Which branch of chemistry studies carbon compounds?', answer: 'Organic chemistry', hint: 'Carbon is the basis of organic chemistry.' },
      { question: 'What should you do if you spill a chemical on your skin?', answer: 'Immediately wash with plenty of water and tell the teacher.', hint: 'Do not wait.' }
    ]
  },

  // Topic: Matter and separation techniques (1 lesson)
  {
    subject: 'Chemistry',
    form: 'Form 1',
    topic: 'Composition of Matter',
    lessonNumber: 1,
    lessonTitle: 'Elements, Compounds, Mixtures and Separation Methods',
    lessonId: 'chemistry-f1-matter-1',
    order: 21,
    learningObjectives: [
      'Distinguish between elements, compounds, and mixtures',
      'Describe methods of separating mixtures (filtration, distillation, chromatography, crystallisation)'
    ],
    introduction: 'Everything around you is made of ELEMENTS, COMPOUNDS, or MIXTURES. But what is the difference? How can we separate mixtures into pure substances? Today, we will learn the building blocks of matter and how to separate them.',
    keyPoints: [
      'Element: pure substance made of one type of atom (cannot be broken down).',
      'Compound: two or more elements chemically combined in fixed ratio.',
      'Mixture: two or more substances physically combined (separable by physical methods).',
      'Symbols of first 20 elements: H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca.',
      'Separation methods: filtration (solid from liquid), distillation (separate liquids), chromatography (dissolved substances), crystallisation (solid from solution).'
    ],
    detailedContent: `Elements, Compounds, and Mixtures

Element: A pure substance that cannot be broken down into simpler substances by chemical means. All atoms are the same. Examples: oxygen (O2), iron (Fe), aluminium (Al).

Compound: A substance formed when two or more elements combine chemically in a fixed ratio. Properties are different from the elements. Examples: water (H2O), sodium chloride (NaCl), carbon dioxide (CO2).

Mixture: Two or more substances physically combined, not chemically. Components retain their properties and can be separated by physical means. Examples: air, salt water, soil.

Comparison:

- Element: one type of atom; cannot be separated chemically.
- Compound: two or more elements combined; separated by chemical reactions.
- Mixture: any proportions; separated by physical methods.

Symbols of First 20 Elements

1 H Hydrogen, 2 He Helium, 3 Li Lithium, 4 Be Beryllium, 5 B Boron, 6 C Carbon, 7 N Nitrogen, 8 O Oxygen, 9 F Fluorine, 10 Ne Neon, 11 Na Sodium, 12 Mg Magnesium, 13 Al Aluminium, 14 Si Silicon, 15 P Phosphorus, 16 S Sulphur, 17 Cl Chlorine, 18 Ar Argon, 19 K Potassium, 20 Ca Calcium.

Separation Techniques

1. Filtration: Separates insoluble solid from liquid. Example: sand from water. Use filter paper and funnel.

2. Crystallisation: Evaporating solution to leave solid crystals. Example: obtaining salt from sea water.

3. Distillation: Separates liquids with different boiling points. Example: separating ethanol from water.

4. Chromatography: Separates components of a mixture (e.g., inks, dyes) based on their different movement rates on paper.

5. Decantation: Pouring off liquid after solid settles.

6. Centrifugation: Spinning tube forces denser particles to bottom. Used in medical labs.`,
    summary: 'Element: one atom type. Compound: elements chemically combined in fixed ratio. Mixture: physical combination. Separation methods: filtration, distillation, crystallisation, chromatography, decantation, centrifugation.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Lake Chilwa Salt', description: 'Sun evaporates water – crystallisation.' },
      { title: 'Maize and Beans', description: 'Physical mixture – can be separated by hand.' }
    ],
    practiceQuestions: [
      { question: 'What is the symbol for sodium?', answer: 'Na', hint: 'From Latin natrium.' },
      { question: 'Which separation method would you use to obtain pure water from a salt solution?', answer: 'Distillation', hint: 'Water boils, salt stays behind.' }
    ]
  },

  // Topic: Atomic structure (1 lesson)
  {
    subject: 'Chemistry',
    form: 'Form 1',
    topic: 'Atomic Structure',
    lessonNumber: 1,
    lessonTitle: 'Protons, Neutrons, Electrons, and Isotopes',
    lessonId: 'chemistry-f1-atomic-structure-1',
    order: 22,
    learningObjectives: [
      'Describe the structure of an atom (nucleus, protons, neutrons, electrons)',
      'Define atomic number (Z), mass number (A), and isotopes'
    ],
    introduction: 'The word "atom" comes from Greek meaning "indivisible". But atoms are made of smaller particles! Today, we will look inside the atom and learn about protons, neutrons, and electrons – and why isotopes matter.',
    keyPoints: [
      'Atom structure: Tiny, dense nucleus (protons + neutrons) surrounded by electrons in shells.',
      'Proton: positively charged (+1), mass 1, in nucleus.',
      'Neutron: no charge (0), mass 1, in nucleus.',
      'Electron: negatively charged (-1), mass 1/1836, in shells.',
      'Atomic number (Z) = number of protons (identifies element).',
      'Mass number (A) = protons + neutrons.',
      'Isotopes: same number of protons but different number of neutrons.',
      'Examples: Carbon-12 (6p,6n), Carbon-14 (6p,8n); Chlorine-35 (17p,18n), Chlorine-37 (17p,20n).'
    ],
    detailedContent: `Structure of an Atom

An atom consists of a tiny central NUCLEUS surrounded by ELECTRONS moving in shells (energy levels). The nucleus contains PROTONS and NEUTRONS.

Particle charges and masses:
- Proton: +1, mass 1
- Neutron: 0, mass 1
- Electron: -1, mass 1/1836 (very small)

Most of the atom is empty space.

Atomic Number (Z)

The atomic number is the number of protons in the nucleus. This defines the element. For a neutral atom, number of electrons = number of protons.

Example: Carbon has atomic number 6 → 6 protons, 6 electrons.

Mass Number (A)

Mass number = protons + neutrons. To find number of neutrons: neutrons = mass number - atomic number.

Example: Sodium atom has atomic number 11 and mass number 23. Protons=11, electrons=11, neutrons=23-11=12.

Isotopes

Isotopes are atoms of the same element (same number of protons) but different number of neutrons.

- Carbon-12: 6 protons, 6 neutrons (98.9%).
- Carbon-14: 6 protons, 8 neutrons (radioactive, used in carbon dating).

- Chlorine-35: 17 protons, 18 neutrons (75%).
- Chlorine-37: 17 protons, 20 neutrons (25%).
Average atomic mass of chlorine is about 35.5.

Electron Configuration (First 20 elements)

Electrons fill shells: Shell 1 (K) max 2 electrons, Shell 2 (L) max 8, Shell 3 (M) max 8 (for first 20).

- Hydrogen: 1
- Helium: 2
- Lithium: 2,1
- Carbon: 2,4
- Oxygen: 2,6
- Sodium: 2,8,1
- Chlorine: 2,8,7
- Calcium: 2,8,8,2`,
    summary: 'Atom: nucleus (protons + neutrons) + electrons in shells. Atomic number (Z) = protons. Mass number (A) = protons + neutrons. Isotopes = same Z, different A.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Carbon Dating', description: 'Carbon-14 used to date Chongoni rock art.' },
      { title: 'Chlorine in Water', description: 'Chlorine-35 and -37 mix, used for disinfection.' }
    ],
    practiceQuestions: [
      { question: 'An atom has 17 protons and 18 neutrons. What is its mass number?', answer: '35', hint: '17 + 18 = 35' },
      { question: 'What is the electron configuration of oxygen?', answer: '2,6', hint: 'Oxygen has 8 electrons.' }
    ]
  },

  // Topic: Periodic table (1 lesson)
  {
    subject: 'Chemistry',
    form: 'Form 1',
    topic: 'Periodic Table',
    lessonNumber: 1,
    lessonTitle: 'Arrangement of Elements and Group Properties',
    lessonId: 'chemistry-f1-periodic-table-1',
    order: 23,
    learningObjectives: [
      'Explain how elements are arranged in the periodic table (periods, groups)',
      'Describe the properties of metals, non-metals, and metalloids'
    ],
    introduction: 'The periodic table is like a map of all elements. It organises them by their properties and helps us predict how they behave. Today, we will learn how to read the periodic table and the patterns in groups.',
    keyPoints: [
      'Arranged by increasing atomic number (number of protons).',
      'Periods: horizontal rows – same number of electron shells.',
      'Groups: vertical columns – same number of valence electrons, similar chemical properties.',
      'Metals: left and centre (good conductors, shiny, malleable).',
      'Non-metals: right side (poor conductors, brittle).',
      'Metalloids: along zigzag line (B, Si, Ge, As, Sb, Te) – properties of both.',
      'Group I: alkali metals (very reactive). Group VII: halogens (very reactive non-metals). Group VIII: noble gases (unreactive).'
    ],
    detailedContent: `The Periodic Table – Structure

The modern periodic table arranges elements in order of increasing atomic number (Z). The table has:

- Periods: 7 horizontal rows. Row 1: H, He (2 elements). Row 2: Li to Ne (8 elements). Row 3: Na to Ar (8). As you go down a period, electrons fill new shells.

- Groups: 18 vertical columns. Elements in the same group have the same number of electrons in their outer shell (valence electrons) and similar chemical properties.

Metals, Non-metals, and Metalloids

- Metals: Most elements (left side and middle). They are shiny, good conductors of heat and electricity, malleable, ductile. They lose electrons to form positive ions.

- Non-metals: Right side (including hydrogen). They are dull, poor conductors, brittle (if solid). They gain electrons to form negative ions or share electrons.

- Metalloids: On the zigzag line between metals and non-metals (B, Si, Ge, As, Sb, Te). They have properties of both – semiconducting.

Important Groups

Group I (IA): Alkali Metals – Li, Na, K, Rb, Cs, Fr. Soft, very reactive, react vigorously with water to produce hydrogen and alkali. Reactivity increases down the group.

Group VII (17): Halogens – F, Cl, Br, I, At. Non-metals, diatomic molecules (F2, Cl2, Br2, I2). Very reactive, reactivity decreases down the group.

Group VIII (18): Noble Gases – He, Ne, Ar, Kr, Xe, Rn. Colourless, odourless, unreactive (full outer shell). Used in lighting (neon lights).`,
    summary: 'Periodic table arranges elements by atomic number. Periods = same number of shells. Groups = same valence electrons, similar properties. Metals left, non-metals right. Group I (alkali metals) very reactive; Group VII (halogens) very reactive; Group VIII (noble gases) unreactive.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Potassium Fertiliser', description: 'KCl (potassium chloride) used for crop growth.' },
      { title: 'Chlorine for Water', description: 'Chlorine (halogen) used to disinfect drinking water.' }
    ],
    practiceQuestions: [
      { question: 'Which group of elements is known as alkali metals?', answer: 'Group I', hint: 'Lithium, sodium, potassium.' },
      { question: 'How does reactivity change as you go down group VII (halogens)?', answer: 'Decreases', hint: 'Fluorine most reactive, iodine least.' }
    ]
  },

  // ======================================================================
  // PHYSICS - FORM 1
  // ======================================================================

  // Topic: Introduction to physics (1 lesson)
  {
    subject: 'Physics',
    form: 'Form 1',
    topic: 'Introduction to Physics',
    lessonNumber: 1,
    lessonTitle: 'What is Physics? Branches and Importance',
    lessonId: 'physics-f1-intro-1',
    order: 24,
    learningObjectives: [
      'Define physics and identify its main branches',
      'Explain the importance of physics in daily life and national development'
    ],
    introduction: 'Welcome to the world of Physics! Have you ever wondered why a boat floats, why a rainbow appears, or how your phone works? Physics answers these questions. Today, we will discover what physics is and why it is essential for Malawi’s development.',
    keyPoints: [
      'Physics is the study of matter, energy, and their interactions.',
      'Branches: mechanics, electricity and magnetism, thermodynamics, optics, nuclear physics.',
      'Physics explains natural phenomena and leads to technological inventions.',
      'Careers: engineer, doctor, pilot, teacher, meteorologist, electrician.'
    ],
    detailedContent: `What is Physics?

Physics is a branch of science that deals with the study of matter, energy, and the relationship between them. It helps us understand how the universe behaves – from the smallest particles to the largest galaxies.

Branches of Physics

- Mechanics: Motion and forces (car moving, bicycle brakes).
- Electricity and Magnetism: Electric charges, currents, magnets (lightning, generator).
- Thermodynamics: Heat and temperature (cooking nsima, boiling water, engines).
- Optics: Light and vision (mirrors, lenses, cameras, rainbows).
- Nuclear physics: Atomic nuclei and radioactivity (X-rays, nuclear power).

Why is Physics important for Malawi?

- Agriculture: Physics helps design irrigation systems, solar dryers.
- Medicine: X-rays, ultrasound, MRI are based on physics.
- Transport: Cars, bicycles, and aeroplanes work because of mechanics.
- Energy: Hydroelectric power (like Nkula Falls) uses principles of physics.
- Communication: Mobile phones and radios use electromagnetism.

Careers in Physics

- Medical doctor (uses X-rays, ultrasound)
- Engineer (civil, electrical, mechanical)
- Pilot (understands forces and weather)
- Meteorologist (weather forecasting uses thermodynamics)
- Science teacher
- Electrician

Malawi example: The Shire River hydroelectric plants generate electricity for our homes – this is based on physics principles (kinetic energy of water turning turbines).`,
    summary: 'Physics is the study of matter and energy. Its branches include mechanics, electricity, thermodynamics, optics, and nuclear physics. Physics is essential for technology, medicine, and energy production.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Hydroelectric Power', description: 'Shire River dams use physics (kinetic energy → electrical energy).' },
      { title: 'Solar Drying', description: 'Farmers use solar energy to dry maize – a thermodynamics application.' }
    ],
    practiceQuestions: [
      { question: 'Which branch of physics deals with the study of light?', answer: 'Optics', hint: 'Think of "optic" nerve, eye, light.' },
      { question: 'Give one reason why physics is important in medicine.', answer: 'X-rays, MRI, ultrasound', hint: 'Medical imaging uses physics.' }
    ]
  },

  // Topic: Measurements I (1 lesson)
  {
    subject: 'Physics',
    form: 'Form 1',
    topic: 'Measurements I',
    lessonNumber: 1,
    lessonTitle: 'Fundamental Quantities and SI Units',
    lessonId: 'physics-f1-measurements-1',
    order: 25,
    learningObjectives: [
      'List fundamental quantities and state their SI units and symbols',
      'Use prefixes (kilo, centi, milli, micro) and convert between units'
    ],
    introduction: 'Measurements are at the heart of physics. How long is your classroom? How heavy is a bag of maize? How hot is the water? To answer these, we use standard units. Today, I will introduce you to the International System of Units (SI) and show you how to convert between different scales.',
    keyPoints: [
      'Fundamental quantities: length (m), mass (kg), time (s), temperature (K), electric current (A).',
      'SI units are internationally agreed standards.',
      'Prefixes: kilo (k) = 1000, centi (c) = 0.01, milli (m) = 0.001, micro (µ) = 0.000001.',
      'Unit conversion: multiply or divide by powers of 10.'
    ],
    detailedContent: `Fundamental Quantities and Their SI Units

- Length: metre (m)
- Mass: kilogram (kg)
- Time: second (s)
- Temperature: kelvin (K) – also degrees Celsius (°C) in everyday life.
- Electric current: ampere (A)

Prefixes for Large and Small Numbers

- kilo (k): 1,000 (10³) → 1 km = 1,000 m
- centi (c): 0.01 (10⁻²) → 1 cm = 0.01 m
- milli (m): 0.001 (10⁻³) → 1 mm = 0.001 m
- micro (µ): 0.000001 (10⁻⁶) → 1 µm = 0.000001 m

Converting Units – Step by Step

Example 1: Convert 2.5 km to metres.
Since 1 km = 1000 m, multiply: 2.5 × 1000 = 2500 m.

Example 2: Convert 150 mm to metres.
Since 1 mm = 0.001 m, multiply: 150 × 0.001 = 0.15 m. Alternative: 150 ÷ 1000 = 0.15 m.

Example 3 (Malawi market): A 50 kg bag of maize – how many grams?
1 kg = 1000 g, so 50 × 1000 = 50,000 g.

Example 4 (distance): Distance from Lilongwe to Blantyre is about 300 km. Convert to metres.
300 × 1000 = 300,000 m.

Simple Conversion Table

- km → m: multiply by 1000
- m → cm: multiply by 100
- cm → mm: multiply by 10
- kg → g: multiply by 1000`,
    summary: 'Fundamental quantities are measured in SI units: metre (length), kilogram (mass), second (time). Prefixes like kilo, centi, milli help express very large or small numbers. Conversion involves multiplying or dividing by powers of 10.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Maize bag mass', description: 'Convert 50 kg bag to grams.' },
      { title: 'Distance between cities', description: 'Convert km to m.' }
    ],
    practiceQuestions: [
      { question: 'Convert 3.5 km to metres.', answer: '3500 m', hint: 'Multiply by 1000' },
      { question: 'How many millimetres are in 2.3 metres?', answer: '2300 mm', hint: '1 m = 1000 mm' }
    ]
  },

  // Topic: Particulate nature of matter (1 lesson)
  {
    subject: 'Physics',
    form: 'Form 1',
    topic: 'Particulate Nature of Matter',
    lessonNumber: 1,
    lessonTitle: 'States of Matter and Particle Arrangement',
    lessonId: 'physics-f1-particulate-1',
    order: 26,
    learningObjectives: [
      'Identify the three states of matter (solid, liquid, gas)',
      'Describe the arrangement and movement of particles in each state'
    ],
    introduction: 'Everything around you – the air you breathe, the water you drink, the chair you sit on – is made of matter. But did you know that matter exists in three main states: solid, liquid, and gas? Today, we will explore how particles are arranged in each state and what makes them different.',
    keyPoints: [
      'Solid: particles tightly packed in fixed pattern, only vibrate (fixed shape and volume).',
      'Liquid: particles close but can slide past each other (fixed volume, takes shape of container).',
      'Gas: particles far apart, move randomly (no fixed shape or volume).',
      'Changes of state involve adding or removing energy (heat).'
    ],
    detailedContent: `The Three States of Matter

Solid:
- Particle arrangement: tightly packed in regular pattern.
- Particle movement: vibrate in fixed positions.
- Shape: fixed.
- Volume: fixed.
- Compressibility: very hard to compress.
Examples: maize grains, stones, iron sheets.

Liquid:
- Particle arrangement: close together but random.
- Particle movement: slide past each other.
- Shape: takes shape of container.
- Volume: fixed.
- Compressibility: hard to compress.
Examples: water, cooking oil.

Gas:
- Particle arrangement: far apart, random.
- Particle movement: move freely and fast.
- Shape: fills any container.
- Volume: expands to fill container.
- Compressibility: easily compressed.
Examples: air, steam.

Why do states change?
When you add heat (energy), particles move faster. In a solid, they vibrate more until they break free – melting. In a liquid, they move even faster and escape as gas – boiling. Removing heat (cooling) does the opposite: gas condenses to liquid, liquid freezes to solid.

Malawi context: Understanding states of matter helps in food preservation (freezing meat, drying fish), cooking (boiling water, melting sugar), and even weather (evaporation of water from Lake Malawi forms clouds).`,
    summary: 'Matter exists as solid, liquid, or gas. Solids have fixed shape and volume; liquids have fixed volume but take shape of container; gases have no fixed shape or volume. Particle arrangement and movement explain these properties.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Ice and Water', description: 'Observe water change from solid (ice) to liquid to gas (steam) when heated.' },
      { title: 'Cooking Nsima', description: 'Nsima starts as solid maize flour, becomes a thick liquid when cooked, then solid again when cooled.' }
    ],
    practiceQuestions: [
      { question: 'Which state of matter has particles that are far apart and move very fast?', answer: 'Gas', hint: 'Think of air.' },
      { question: 'What happens to the particles of a solid when it melts?', answer: 'They gain energy and break free from fixed positions.', hint: 'Adding heat increases particle movement.' }
    ]
  },

  // ======================================================================
  // AGRICULTURE - FORM 2 (selected to show continuity)
  // ======================================================================

  // Topic: Soil composition and profile (1 lesson)
  {
    subject: 'Agriculture',
    form: 'Form 2',
    topic: 'Soil Composition and Profile',
    lessonNumber: 1,
    lessonTitle: 'Components of Soil and Soil Profile Layers',
    lessonId: 'agriculture-f2-soil-1',
    order: 27,
    learningObjectives: [
      'List the components of soil (mineral matter, organic matter, water, air)',
      'Describe the layers of a soil profile (O, A, B, C horizons)'
    ],
    introduction: 'Soil is not just dirt. It is a living mixture of minerals, organic matter, water, and air. If you dig a deep hole, you will see different layers called a SOIL PROFILE. Today, we will explore what soil is made of and why the layers matter for farming.',
    keyPoints: [
      'Soil components: mineral particles (45%), organic matter (5%), water (25%), air (25%) – approximate.',
      'Soil profile: vertical section showing horizons.',
      'O horizon: Organic layer (dead leaves, mulch).',
      'A horizon: Topsoil – dark, rich in organic matter, most fertile.',
      'B horizon: Subsoil – lighter colour, less organic matter, may have clay accumulation.',
      'C horizon: Weathered parent rock – unconsolidated rock fragments.',
      'Soil profile affects drainage, fertility, and root depth.'
    ],
    detailedContent: `Soil Components

Soil is made of four main parts:

1. Mineral matter (about 45%): Tiny rock particles – sand, silt, and clay. These come from weathering of rocks.
2. Organic matter (about 5%): Decayed plants and animals, also called humus. It gives soil dark colour and provides nutrients.
3. Water (about 25%): Held in pores between particles. Plants absorb water through roots.
4. Air (about 25%): Fills pores not filled with water. Roots need oxygen.

The Soil Profile

If you dig a pit about 1 metre deep, you can see different layers (horizons).

- O horizon (Organic layer): Fresh and partially decomposed leaves, twigs. Found in forests, not always in farm soil.
- A horizon (Topsoil): Dark, rich in humus. Most plant roots grow here. Most fertile layer.
- B horizon (Subsoil): Lighter in colour. Contains minerals and clay leached from above. Harder, less organic matter.
- C horizon (Parent material): Weathered rock fragments. No organic matter.

Characteristics of Each Horizon

- O horizon: Usually thin; important for moisture retention.
- A horizon: The farmer's main concern. Good maize growth requires deep, dark A horizon.
- B horizon: Can be hard (hardpan) that restricts root growth.
- C horizon: Influences soil type (e.g., from granite gives sandy soil; from limestone gives clay).

Effects of Soil Profile on Crop Production

- Depth of A horizon: Thick topsoil allows roots to spread. Shallow topsoil limits growth.
- Drainage: If B horizon is clayey and compacted, water cannot drain.
- Fertility: Dark, well-developed A horizon is fertile.
- Erosion: If A horizon is lost, less fertile B horizon is exposed.`,
    summary: 'Soil components: minerals, organic matter, water, air. Soil profile layers: O (organic), A (topsoil), B (subsoil), C (parent material). Thick, dark topsoil is best for crops.',
    estimatedTime: '20 mins',
    malawiExamples: [
      { title: 'Topsoil Depth', description: 'Farmers measure how deep the dark layer is – thicker is better.' },
      { title: 'Hardpan Problem', description: 'In some areas, a compacted B layer prevents roots from growing deep.' }
    ],
    practiceQuestions: [
      { question: 'Which soil horizon is most important for crop growth?', answer: 'A horizon (topsoil)', hint: 'It is dark and full of nutrients.' },
      { question: 'What is the parent material of soil?', answer: 'Weathered rock (C horizon)', hint: 'The lowest layer before solid rock.' }
    ]
  },

  // ======================================================================
  // BIOLOGY - FORM 2 (example)
  // ======================================================================

  // Topic: Plant structure and photosynthesis (1 lesson)
  {
    subject: 'Biology',
    form: 'Form 2',
    topic: 'Plant Structure and Photosynthesis',
    lessonNumber: 1,
    lessonTitle: 'Leaf Structure and the Process of Photosynthesis',
    lessonId: 'biology-f2-photosynthesis-1',
    order: 28,
    learningObjectives: [
      'Label the internal structures of a leaf (cuticle, epidermis, palisade mesophyll, spongy mesophyll, stomata, veins)',
      'State the word equation and chemical equation for photosynthesis'
    ],
    introduction: 'Plants feed themselves! Using sunlight, carbon dioxide from the air, and water from the soil, they produce glucose and oxygen. This process is PHOTOSYNTHESIS. Today, we will look inside a leaf and learn how it works.',
    keyPoints: [
      'Leaf structures: cuticle (waterproof), epidermis (protection), palisade mesophyll (photosynthesis), spongy mesophyll (gas exchange), stomata (pores), veins (xylem and phloem).',
      'Word equation: carbon dioxide + water → glucose + oxygen (in presence of light and chlorophyll).',
      'Chemical equation: 6CO2 + 6H2O → C6H12O6 + 6O2.',
      'Light energy is absorbed by chlorophyll (green pigment).',
      'Investigations: destarched plant, test with iodine for starch to show light/CO2/chlorophyll needed.'
    ],
    detailedContent: `Inside a Leaf

The leaf cross-section includes:

- Cuticle: Waxy layer on top – prevents water loss.
- Upper epidermis: Transparent layer – allows light through.
- Palisade mesophyll: Column-shaped cells packed with chloroplasts. This is where most photosynthesis happens.
- Spongy mesophyll: Irregular cells with air spaces. Allows gases (CO2, O2) to circulate.
- Stomata: Pores (mainly on lower surface) – open and close. Allow CO2 in and O2 out. Guard cells control opening.
- Veins (vascular bundles): Xylem (carries water and minerals to leaf) and Phloem (carries sugar away).

Photosynthesis Process

Chlorophyll (green pigment) captures sunlight energy. This energy splits water molecules and drives the reaction that combines hydrogen with carbon dioxide to make glucose.

Word equation: Carbon dioxide + Water → Glucose + Oxygen

Chemical equation: 6CO2 + 6H2O → C6H12O6 + 6O2

Experiments (Investigations)

To test a factor, use a DESTARCHED plant (kept in dark for 48 hours so it uses up stored starch). Then:

1. Test for light: Cover part of a leaf with black paper. Leave in light for a few hours. Remove leaf, boil in alcohol to remove colour, test with iodine. Covered part: no starch (brown). Uncovered: starch (blue-black).

2. Test for carbon dioxide: Place plant in a sealed container with a chemical that removes CO2 (sodium hydroxide). After hours, test leaf for starch – none. Control with normal air – starch present.

3. Test for chlorophyll: Use a variegated leaf (green and white parts). After exposing to light, test whole leaf with iodine. Only green parts turn blue-black.

Fate of Glucose

- Immediately used for RESPIRATION to release energy.
- Converted to STARCH for storage (e.g., potato tubers, maize grains).
- Converted to CELLULOSE to build cell walls.
- Combined with nitrates to form AMINO ACIDS, then proteins.
- Converted to OILS for storage in seeds (e.g., groundnuts).`,
    summary: 'Photosynthesis occurs in leaf chloroplasts: CO2 + H2O → glucose + O2, using light. Leaf structures: cuticle, mesophyll, stomata, veins. Experiments prove light, CO2, chlorophyll are needed.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Maize Grain Starch', description: 'Glucose from leaf transported to cob and stored as starch in grains.' },
      { title: 'Variegated Leaf Experiment', description: 'Only green parts produce starch when tested with iodine.' }
    ],
    practiceQuestions: [
      { question: 'What gas do plants take in during photosynthesis?', answer: 'Carbon dioxide', hint: 'From air through stomata.' },
      { question: 'What does iodine test detect in a leaf?', answer: 'Starch (which indicates photosynthesis occurred)', hint: 'Blue-black colour.' }
    ]
  },

  // ======================================================================
  // CHEMISTRY - FORM 2 (example)
  // ======================================================================

  // Topic: Chemical bonding (1 lesson)
  {
    subject: 'Chemistry',
    form: 'Form 2',
    topic: 'Chemical Bonding',
    lessonNumber: 1,
    lessonTitle: 'Ionic, Covalent, and Metallic Bonding',
    lessonId: 'chemistry-f2-bonding-1',
    order: 29,
    learningObjectives: [
      'Explain why atoms form chemical bonds (octet rule)',
      'Describe ionic bonding and covalent bonding with examples'
    ],
    introduction: 'Why do atoms stick together? The answer is CHEMICAL BONDS. Atoms bond to become more stable, usually by achieving a full outer shell (like noble gases). Today, we will learn the three main types of bonding and how they affect properties.',
    keyPoints: [
      'Octet rule: atoms gain, lose, or share electrons to achieve a stable outer shell of 8 electrons (or 2 for hydrogen/helium).',
      'Ionic bonding: transfer of electrons from metal to non-metal. Forms positive ions (cations) and negative ions (anions).',
      'Covalent bonding: sharing of electrons between non-metals. Forms molecules.',
      'Metallic bonding: positive metal ions in a sea of delocalised electrons.',
      'Ionic compounds: high melting points, conduct electricity when molten/dissolved.',
      'Covalent compounds: low melting points (simple), do not conduct electricity.'
    ],
    detailedContent: `Why Atoms Bond

Atoms are most stable when their outer shell is full. For most elements, this means 8 electrons (octet). Hydrogen and helium are stable with 2 (duplet). Atoms can achieve full shells by transferring electrons (ionic) or sharing electrons (covalent).

Ionic Bonding

Ionic bonding occurs between a metal and a non-metal. The metal atom loses electrons to become a positive ion (cation). The non-metal atom gains those electrons to become a negative ion (anion). Opposite charges attract – this electrostatic attraction is the ionic bond.

Example: Sodium chloride (NaCl)
- Sodium (Na) has electron configuration 2,8,1. It loses 1 electron to become Na+ (2,8).
- Chlorine (Cl) has 2,8,7. It gains 1 electron to become Cl- (2,8,8).
- The Na+ and Cl- are held together by ionic bonds.

Ionic compounds form giant crystal lattices. Properties: High melting point (strong attraction), soluble in water, conduct electricity when dissolved or molten.

Covalent Bonding

Covalent bonding occurs between non-metals. Atoms share one or more pairs of electrons so that both achieve full outer shells.

Example: Hydrogen molecule (H2)
- Each H atom has 1 electron. They share a pair – each H now has 2 electrons (duplet).

Example: Water (H2O)
- Oxygen (2,6) shares one electron with each of two hydrogen atoms. Oxygen now has 8 (its own 6 plus 1 from each H). Each H has 2.

Example: Methane (CH4)
- Carbon (2,4) shares four pairs with four hydrogen atoms – each H gets 2, C gets 8.

Covalent compounds can be simple molecular (low melting point, gases/liquids at room temp) or giant covalent (diamond, graphite – very high melting point). Most do not conduct electricity.

Metallic Bonding

Metals consist of positive metal ions arranged in a lattice, with delocalised (free-moving) electrons in between. The attraction between the positive ions and the sea of electrons is the metallic bond.

Properties of metals: Good conductors of electricity, good conductors of heat, malleable and ductile, lustrous.`,
    summary: 'Ionic bonding: electron transfer, metal + non-metal. Covalent bonding: electron sharing, non-metals. Metallic bonding: sea of delocalised electrons. Properties relate to bonding type.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Copper Wiring', description: 'Delocalised electrons in copper allow electrical flow in houses.' },
      { title: 'Salt Dissolving', description: 'Ionic NaCl dissolves in water, ions separate for conductivity.' }
    ],
    practiceQuestions: [
      { question: 'What type of bonding occurs between sodium and chlorine?', answer: 'Ionic bonding', hint: 'Metal (Na) + non-metal (Cl).' },
      { question: 'Why does diamond (covalent) not conduct electricity?', answer: 'All electrons are held in bonds; no delocalised electrons.', hint: 'Tetrahedral structure.' }
    ]
  },

  // ======================================================================
  // PHYSICS - FORM 2 (example)
  // ======================================================================

  // Topic: Density (1 lesson)
  {
    subject: 'Physics',
    form: 'Form 2',
    topic: 'Density',
    lessonNumber: 1,
    lessonTitle: 'Measuring Density of Solids and Liquids',
    lessonId: 'physics-f2-density-1',
    order: 30,
    learningObjectives: [
      'Define density and state its formula (ρ = m/V)',
      'Calculate density of regular solids, irregular solids (using displacement), and liquids'
    ],
    introduction: 'Why does a stone sink while a piece of wood floats? The answer lies in DENSITY – how tightly packed the matter is. Today, we will learn how to calculate density and use it to identify substances.',
    keyPoints: [
      'Density (ρ) = mass / volume (ρ = m/V).',
      'SI unit: kg/m³ (common also g/cm³).',
      '1 g/cm³ = 1000 kg/m³.',
      'Regular solids: measure dimensions to find volume.',
      'Irregular solids: use water displacement (Archimedes’ principle).',
      'Liquids: use measuring cylinder and balance.'
    ],
    detailedContent: `What is Density?

Density tells us how much mass is packed into a given volume. Dense materials feel heavy for their size.

Formula: Density = mass ÷ volume or ρ = m/V

Practical Ways to Measure Volume

- Regular solid (e.g., cube): Measure length, width, height → V = l × w × h. Use ruler.
- Irregular solid (e.g., stone): Displacement method: submerge in water, measure volume of water displaced. Use measuring cylinder, water.
- Liquid: Pour into measuring cylinder and read volume.

Example Calculations

1. Cube of metal: mass = 270 g, each side = 3 cm. Volume = 3×3×3 = 27 cm³. Density = 270/27 = 10 g/cm³ = 10,000 kg/m³. This is lead or similar.

2. Irregular stone: Mass = 150 g. Place water in measuring cylinder: initial volume = 50 cm³. After stone submerged, volume = 80 cm³. Volume of stone = 80 - 50 = 30 cm³. Density = 150/30 = 5 g/cm³.

3. Liquid (cooking oil): Mass of empty container = 40 g. Mass with 100 cm³ of oil = 120 g. Mass of oil = 80 g. Density = 80/100 = 0.8 g/cm³.

Density of Water: 1 g/cm³ (1000 kg/m³). Substances with density less than water float; greater density sink.

Malawi Example: A farmer wants to know if a stone from his field is rich in mineral ore. He measures density. High density (>5 g/cm³) may indicate metal ores.`,
    summary: 'Density = mass/volume. Use appropriate methods for regular solids (formula), irregular solids (displacement), and liquids (measuring cylinder). Density helps identify substances and predict floating/sinking.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Stone Density', description: 'Measure mass and volume by displacement to decide if a stone contains heavy minerals.' },
      { title: 'Cooking Oil Purity', description: 'Density test can detect adulteration.' }
    ],
    practiceQuestions: [
      { question: 'A block of wood has mass 200 g and volume 250 cm³. Calculate density (g/cm³).', answer: '0.8 g/cm³', hint: 'Density = 200/250 = 0.8' },
      { question: 'Will the wood float in water? Why?', answer: 'Yes, because density (0.8) is less than water (1.0).', hint: 'Float if density < 1 g/cm³.' }
    ]
  }

];


async function seedLessons() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await Lesson.deleteMany({});
    console.log('Cleared existing lessons');
    await Lesson.insertMany(allLessons);
    console.log(`Inserted ${allLessons.length} lessons`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding lessons:', error);
    process.exit(1);
  }
}

seedLessons();