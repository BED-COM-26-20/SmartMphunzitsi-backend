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