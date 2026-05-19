 const mongoose = require('mongoose');
 const dotenv = require('dotenv');
 const Lesson = require('../models/Lesson');
 dotenv.config();

const allLessons = [
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Natural Resources",
    "lessonNumber": 1,
    "lessonTitle": "Definition and Importance of Natural Resources in Agriculture",
    "lessonId": "agriculture-f1-natural-resources-1",
    "order": 1,
    "learningObjectives": [
      "Define natural resources",
      "List and explain the importance of natural resources that influence agricultural production"
    ],
    "introduction": "Have you ever thought about where the water for your garden comes from? Or why soil is so important for growing maize? These are NATURAL RESOURCES – gifts of nature that help us produce food. Today, we will learn about the natural resources that make agriculture possible in Malawi.",
    "keyPoints": [
      "Natural resources are materials or substances that occur in nature and are useful to people.",
      "Key natural resources for agriculture: water, air, soil, vegetation, and sunlight.",
      "Water: essential for plant growth, animal drinking, and irrigation.",
      "Air: provides carbon dioxide for photosynthesis and oxygen for respiration.",
      "Soil: provides anchorage, water, and nutrients for plants.",
      "Vegetation: provides food, shelter, and prevents soil erosion.",
      "Sunlight: provides energy for photosynthesis and warmth."
    ],
    "detailedContent": "Natural Resources in Agriculture\n\nNatural resources are materials from nature that people use. For a farmer in Malawi, natural resources are the foundation of all farming activities.\n\nThe main natural resources that influence agricultural production are:\n\n1. Water: Without water, crops cannot grow and animals cannot drink. Rain is the main source in Malawi, but rivers like the Shire, Lake Malawi, and groundwater are also vital. Water is used for irrigation, livestock watering, and cleaning produce.\n\n2. Air: Plants take carbon dioxide from the air for photosynthesis. They release oxygen. Wind helps with pollination and seed dispersal, but strong winds can damage crops.\n\n3. Soil: Soil is the layer covering the earth where plants grow. It anchors roots, holds water, and provides nutrients. Different soils (sand, clay, loam) have different properties. In Malawi, we grow maize, groundnuts, and vegetables in various soils.\n\n4. Vegetation: Natural plants and trees protect soil from erosion, provide habitat for beneficial animals, and can be used as mulch or green manure.\n\n5. Sunlight: Energy from the sun drives photosynthesis. Without sunlight, no crop would grow. The amount of sunlight affects crop yields.\n\nImportance of Each Resource:\n\n- Water: Essential for seed germination, growth, and food production. Without water, there is drought and famine.\n- Air: Carbon dioxide is a raw material for making food in plants.\n- Soil: Without soil, there would be no maize, groundnuts, or vegetables.\n- Sunlight: Determines growing seasons and crop types.\n- Vegetation: Protects the environment and provides food for livestock.",
    "summary": "Natural resources for agriculture include water, air, soil, vegetation, and sunlight. Each plays a critical role in crop and animal production.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "River Water for Irrigation",
        "description": "Farmers along the Shire River use water for dry-season irrigation."
      },
      {
        "title": "Sunlight for Maize",
        "description": "Maize needs plenty of sunlight to grow and produce high yields."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name three natural resources essential for growing maize in Malawi.",
        "answer": "Water, soil, sunlight",
        "hint": "Think about what a maize seed needs to grow."
      },
      {
        "question": "Why is air important for crop production?",
        "answer": "Plants need carbon dioxide for photosynthesis and oxygen for respiration.",
        "hint": "Gases involved in plant metabolism."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Natural Resources",
    "lessonNumber": 2,
    "lessonTitle": "Depletion and Conservation of Natural Resources",
    "lessonId": "agriculture-f1-natural-resources-2",
    "order": 2,
    "learningObjectives": [
      "Describe ways in which natural resources can be depleted",
      "Explain methods of conserving soil, water, and vegetation"
    ],
    "introduction": "Natural resources can be used up if we are not careful. CONSERVATION means using them wisely so they last for future generations. Today, we will learn practical ways to protect soil, water, and vegetation in our farms and communities.",
    "keyPoints": [
      "Depletion occurs through deforestation, poor farming practices, rapid population growth, improper use of chemicals, and soil erosion.",
      "Soil conservation methods: contour bunds, mulching, planting trees, zero tillage, cover crops.",
      "Water conservation methods: rainwater harvesting, building small dams, drip irrigation, reducing runoff.",
      "Vegetation conservation: afforestation, reforestation, fire breaks, controlled grazing."
    ],
    "detailedContent": "Depletion of Natural Resources\n\nNatural resources can be used up or damaged by human activities:\n- Deforestation: cutting trees for firewood or farming leaves soil exposed.\n- Poor farming practices: over-cultivation, not rotating crops, and removing crop residues exhaust soil nutrients.\n- Pollution: chemicals from fertilisers and pesticides can contaminate water.\n- Overgrazing: too many animals on a small piece of land destroys grass and compacts soil.\n- Soil erosion: wind and water carry away topsoil, reducing fertility.\n\nIn Malawi, we see depletion when rivers dry up, when forests disappear, or when soil becomes sandy and loses fertility.\n\nConservation Methods\n\nSoil conservation:\n1. Contour bunds: Digging ridges across a slope to slow water runoff and trap soil.\n2. Mulching: Covering soil with dried grass or leaves to protect it from rain and sun.\n3. Planting trees and grasses: Roots hold soil together.\n4. Zero tillage: Ploughing without turning the soil – reduces erosion.\n5. Cover crops: Growing plants like legumes during off-season to protect soil.\n\nWater conservation:\n1. Rainwater harvesting: Collecting rain from rooftops into tanks.\n2. Drip irrigation: Water goes directly to plant roots – minimal loss.\n3. Building small dams or reservoirs: Stores water for dry periods.\n4. Reducing runoff: Use contour ridges and mulch so water soaks into soil.\n\nVegetation conservation:\n1. Afforestation and reforestation: Planting new trees where forests were cut.\n2. Creating fire breaks: Clearing strips of land to stop bush fires.\n3. Controlled grazing: Moving animals so grass can regrow.\n4. Protecting natural forests from charcoal burning.",
    "summary": "Depletion of natural resources happens through deforestation, poor farming, and erosion. Conservation includes contour bunds, mulching, rainwater harvesting, and tree planting.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Contour Ridges in Mulanje",
        "description": "Farmers use ridges across slopes to prevent soil erosion."
      },
      {
        "title": "Rainwater Tanks in Schools",
        "description": "Many schools harvest rainwater for gardens."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Give two ways to conserve soil on a sloped farm.",
        "answer": "Contour bunds and planting grasses",
        "hint": "Prevent water from running straight down."
      },
      {
        "question": "How does deforestation affect agricultural production?",
        "answer": "It causes soil erosion, reduces rainfall, and removes habitat for beneficial animals.",
        "hint": "Trees protect soil and help with water cycle."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Natural Resources",
    "lessonNumber": 3,
    "lessonTitle": "Rapid Population Growth and Its Effects on Natural Resources",
    "lessonId": "agriculture-f1-natural-resources-3",
    "order": 3,
    "learningObjectives": [
      "Explain the effects of rapid population growth on natural resources and the environment",
      "Discuss the relationship between family size and food security"
    ],
    "introduction": "When the number of people increases quickly, more land is cleared for farming, more firewood is needed, and more waste is produced. Today, we will learn how rapid population growth affects natural resources and food security.",
    "keyPoints": [
      "Effects: deforestation, overgrazing, pollution, water scarcity, soil degradation.",
      "Larger families require more food, land, and water – can lead to food insecurity if resources are limited.",
      "Solutions: family planning, intensive agriculture, resource conservation."
    ],
    "detailedContent": "Effects of Rapid Population Growth on Natural Resources\n\nWhen the number of people increases quickly:\n- More land is cleared for farming and settlements → deforestation.\n- More firewood is needed → trees disappear.\n- More animals are kept → overgrazing destroys grass.\n- More waste and chemicals → pollution of water and soil.\n- More water is used → rivers and wells dry up.\n\nRelationship between Family Size and Food Security\n\nFood security means having enough food at all times. A very large family with a small piece of land may not grow enough food. They may sell their assets to buy food, leading to poverty. Small families can manage resources better and often have more food per person.\n\nIn Malawi, families with many children sometimes face food shortages because they cannot produce enough maize, vegetables, or keep enough livestock to feed everyone.\n\nSolutions: family planning, using farming methods that produce more on less land (intensive agriculture), and conserving resources.",
    "summary": "Rapid population growth leads to deforestation, overgrazing, pollution, and water scarcity. Large families often face food insecurity. Solutions include family planning and sustainable farming.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Deforestation in Dedza",
        "description": "Increased population leads to more charcoal burning, reducing forest cover."
      },
      {
        "title": "Food Insecurity",
        "description": "Households with many children often struggle to produce enough maize."
      }
    ],
    "practiceQuestions": [
      {
        "question": "How does rapid population growth affect water resources?",
        "answer": "More water is used, leading to drying up of rivers and wells.",
        "hint": "Over-extraction."
      },
      {
        "question": "Why does a large family often face food insecurity?",
        "answer": "More people to feed with the same amount of land, so output per person is lower.",
        "hint": "Resources are limited."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Agricultural Research",
    "lessonNumber": 1,
    "lessonTitle": "Meaning and Importance of Agricultural Research",
    "lessonId": "agriculture-f1-agri-research-1",
    "order": 4,
    "learningObjectives": [
      "Define agricultural research",
      "Explain the importance of agricultural research"
    ],
    "introduction": "Why do some maize varieties grow faster? How did farmers learn to control crop diseases? The answer is AGRICULTURAL RESEARCH. Today, we will learn how scientists and farmers use research to solve problems and improve farming.",
    "keyPoints": [
      "Agricultural research is the systematic study of farming problems to find solutions.",
      "Importance: increases yields, develops resistant varieties, improves animal health, saves money, protects environment.",
      "Research leads to new technologies and better farming practices."
    ],
    "detailedContent": "What is Agricultural Research?\n\nAgricultural research is the process of investigating farming problems to find better ways of producing crops and livestock. It uses scientific methods to test ideas and develop new technologies.\n\nImportance of Agricultural Research\n\n- Increases food production: New high-yielding maize varieties like MH30 produce more per hectare.\n- Develops disease and pest resistance: Research breeds cassava resistant to cassava mosaic virus.\n- Improves livestock health: Vaccines and treatments are developed through research.\n- Reduces costs: Better farming methods save money on inputs.\n- Protects environment: Research finds less harmful pesticides and fertilisers.\n- Informs farmers: Extension services share research findings with villagers.\n\nIn Malawi, Chitedze Agricultural Research Station and Bunda College conduct research on maize, groundnuts, tobacco, and livestock. Their work helps farmers across the country.",
    "summary": "Agricultural research systematically solves farming problems, leading to higher yields, better pest control, improved animal health, and environmental protection.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Chitedze Research Station",
        "description": "Scientists develop new maize varieties there."
      },
      {
        "title": "Fall Armyworm Research",
        "description": "Research finds effective pesticides and natural control methods."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is agricultural research?",
        "answer": "Systematic study of farming problems to find solutions.",
        "hint": "It uses scientific methods."
      },
      {
        "question": "Why is agricultural research important for a maize farmer?",
        "answer": "It provides better seeds, fertiliser recommendations, and pest control methods.",
        "hint": "Research helps solve farming problems."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Agricultural Research",
    "lessonNumber": 2,
    "lessonTitle": "Scientific Approach to Agricultural Research",
    "lessonId": "agriculture-f1-agri-research-2",
    "order": 5,
    "learningObjectives": [
      "Identify agricultural problems that require research",
      "Describe the scientific approach to agricultural research"
    ],
    "introduction": "Research follows a step-by-step scientific method. Today, we will learn the stages of conducting agricultural research and the types of problems that can be studied.",
    "keyPoints": [
      "Researchable problems: low yields, pests, diseases, poor soil, drought, storage losses.",
      "Scientific method: observation, question, hypothesis, experiment, analysis, conclusion.",
      "Experiments must have controls and replicates for reliable results."
    ],
    "detailedContent": "Agricultural Problems Requiring Research\n\nExamples of problems that can be researched:\n- Low yields of maize or groundnuts\n- Crop diseases (e.g., maize streak virus)\n- Pest damage (e.g., fall armyworms)\n- Soil fertility decline\n- Drought tolerance\n- Post-harvest losses\n- Animal diseases (e.g., Newcastle disease in chickens)\n\nThe Scientific Approach to Research\n\nStep 1: Observation – Notice a problem (e.g., maize leaves turning yellow).\nStep 2: Question – Why are the leaves yellow?\nStep 3: Hypothesis – Possibly lack of nitrogen in the soil.\nStep 4: Experiment – Plant maize in two plots: one with nitrogen fertiliser, one without. Keep all other conditions same.\nStep 5: Data collection – Measure plant height, leaf colour, yield.\nStep 6: Analysis – Compare results.\nStep 7: Conclusion – If fertilised plot grows better, hypothesis is supported.\n\nImportance of controls and replication: A control plot (no treatment) allows comparison. Repeating the experiment ensures reliability.",
    "summary": "Agricultural research uses the scientific method: observation, hypothesis, experiment, analysis, conclusion. It addresses problems like low yields, pests, and diseases.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Nitrogen Deficiency Experiment",
        "description": "Comparing maize growth with and without fertiliser."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the first step of the scientific approach?",
        "answer": "Observation",
        "hint": "You must notice a problem first."
      },
      {
        "question": "Why is a control plot important in an experiment?",
        "answer": "To provide a baseline for comparison and validate results.",
        "hint": "Without control, you cannot be sure the treatment caused the effect."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Agricultural Technology",
    "lessonNumber": 1,
    "lessonTitle": "Types of Farm Structures and Safety Rules",
    "lessonId": "agriculture-f1-farm-structures-1",
    "order": 6,
    "learningObjectives": [
      "Identify types of farm structures (storage, processing, housing, equipment sheds)",
      "State safety rules when using farm structures"
    ],
    "introduction": "Technology is not only about machines – it includes farm structures like grain stores, chicken houses, and fences. These make farming easier and safer. Today, we will learn about different farm structures and how to use them safely.",
    "keyPoints": [
      "Types: crop storage (barns, silos, granaries), crop processing (mill shed), animal housing (chicken coop, pigsty, kraal), equipment sheds, roads and bridges, fences.",
      "Safety rules: keep structures clean, repair damage, use protective gear, store chemicals safely, avoid overloading, keep children away.",
      "Importance of safety: prevents accidents, protects crops and animals, saves money."
    ],
    "detailedContent": "What are Farm Structures?\n\nFarm structures are buildings and constructions that help with farming.\n\nTypes of Farm Structures\n\n1. Crop storage structures: These keep harvested grain safe from moisture, pests, and theft. Examples: traditional granary (nkhokwe), modern metal silo.\n2. Crop processing structures: A room or shed where maize is shelled, groundnuts are shelled, or grain is pounded.\n3. Animal housing: Chicken coop (khola la nkhuku), pigsty, goat shed, cattle kraal. These protect animals from weather, predators, and disease.\n4. Farm equipment sheds: A simple roofed area where hoes, pangas, sprayers, and bicycles are kept out of rain.\n5. Roads and bridges: Paths for moving produce to the road, and small bridges over streams.\n6. Fences: To keep animals in or out of gardens. They can be made of wood, wire, or live plants.\n\nSafety Rules When Using Farm Structures\n\n- Always repair broken floors, roofs, or fences immediately.\n- Keep storage structures clean to avoid mould and pests.\n- Do not overload granaries – they can collapse.\n- When climbing to store grain, use a sturdy ladder.\n- Store chemicals (pesticides, fertilisers) in a separate locked shed, away from food and children.\n- Keep animal pens clean to prevent disease and injuries.\n- Wear appropriate clothing: gloves when handling chemicals, boots when working with animals.\n- Never allow young children to play near animal pens or storage structures.\n\nImportance of Observing Safety Rules\n\n- Prevents injuries: A falling granary or a sharp tool can cause serious harm.\n- Protects produce: A leaking roof can ruin maize.\n- Saves animals: Weak fences can allow predators to kill chickens.\n- Saves money: Repairing a small problem is cheaper than rebuilding.\n- Promotes health: Clean structures prevent diseases.",
    "summary": "Farm structures include storage, processing, animal housing, equipment sheds, roads, and fences. Safety rules prevent accidents and protect crops and animals.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Nkhokwe Granary",
        "description": "Traditional raised maize store – needs strong poles and a thatched roof."
      },
      {
        "title": "Chicken Coop Safety",
        "description": "Clean regularly, fix broken wire, keep predators out."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why should you not overload a granary?",
        "answer": "It can collapse, causing injury and wasting grain.",
        "hint": "Weight can break weak supports."
      },
      {
        "question": "Where should pesticides be stored on a farm?",
        "answer": "In a locked shed separate from food and children.",
        "hint": "Safety first."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Farm Business Management",
    "lessonNumber": 1,
    "lessonTitle": "Main Factors of Agricultural Production",
    "lessonId": "agriculture-f1-factors-production-1",
    "order": 7,
    "learningObjectives": [
      "Identify the main factors of agricultural production (land, labour, capital, management)",
      "Explain how each factor influences agricultural production"
    ],
    "introduction": "Farming is not just planting seeds – it is a business. To be successful, a farmer needs land, labour, money, and good management. Today, we will learn about the FACTORS OF PRODUCTION.",
    "keyPoints": [
      "Land: includes soil, water, trees, minerals. Quality and size affect yield.",
      "Labour: human effort. More labour can increase production if used well.",
      "Capital: money, tools, equipment, seeds, fertilisers.",
      "Management: decisions about what to grow, when, and how to sell."
    ],
    "detailedContent": "The Factors of Production\n\nTo produce anything, you need four things. In farming, they are:\n\n1. Land: This is not just the field. It includes the soil, water, air, and vegetation on that land. The quality of land matters: fertile soil with good drainage yields more maize. Land size also matters: a farmer with 2 hectares can produce more than one with 0.5 hectares, if other factors are equal.\n\n2. Labour: Human work. In Malawi, many farms use family labour. Children, parents, and grandparents all contribute. Labour includes ploughing, planting, weeding, harvesting, and selling. More labour can increase production, but if too many people work on a small piece of land, some may be idle.\n\n3. Capital: This includes money and goods used to produce. For a farmer, capital includes: seeds, fertilisers, pesticides, hoes, pangas, oxen, ploughs, irrigation equipment, storage bins. Without capital, you cannot buy inputs or tools.\n\n4. Management (entrepreneurship): The farmer decides what to grow, when to plant, how to care for crops, when to harvest, and where to sell. Good management leads to high yields and profits. Poor management can cause losses even with good land and labour.\n\nHow Each Factor Influences Production:\n\n- Land: Poor soil yields little. Erosion reduces fertility. Irrigation can improve.\n- Labour: Skilled labour (knows how to prune or graft) is more productive. Child labour is common but may reduce school attendance.\n- Capital: Lack of money prevents buying improved seeds or fertiliser.\n- Management: Good planning (crop rotation, pest scouting) improves yields.",
    "summary": "Factors of production: Land, Labour, Capital, Management. Each is essential for successful farming.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Farm Input Subsidy Programme",
        "description": "Government provides vouchers for fertiliser – helps capital."
      },
      {
        "title": "Ganyu Labour",
        "description": "Farmers hire casual workers during peak seasons – labour factor."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name the four main factors of production.",
        "answer": "Land, labour, capital, management",
        "hint": "Remember: Land, Labour, Capital, Management (LLCM)."
      },
      {
        "question": "How does management affect farm productivity?",
        "answer": "Good decisions on planting, fertilising, and selling increase yields and profits.",
        "hint": "Planning and decision-making."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Farm Business Management",
    "lessonNumber": 2,
    "lessonTitle": "Other Factors Affecting Production and Solutions",
    "lessonId": "agriculture-f1-factors-production-2",
    "order": 8,
    "learningObjectives": [
      "Identify other factors affecting agricultural production (market, climate, pests, risks)",
      "Discuss solutions to challenges associated with these factors"
    ],
    "introduction": "Besides land, labour, capital, and management, other factors like weather, market prices, and pests also affect farming. Today, we will learn about these and how to overcome the challenges.",
    "keyPoints": [
      "Other factors: market prices, climate (rain, temperature), pests and diseases, risks (drought, flood).",
      "Solutions: training, irrigation, pest control, insurance, cooperative marketing."
    ],
    "detailedContent": "Other Factors Affecting Agricultural Production\n\n- Market: If prices are low, farmers may not sell, reducing income.\n- Climate: Too much or too little rain destroys crops. High temperatures can reduce pollination.\n- Pests and diseases: Fall armyworms, maize streak virus, Newcastle disease.\n- Risks: Drought, flood, cyclones – unpredictable but can be mitigated.\n\nSolutions to Challenges\n\n- Poor land: Use compost, manure, fertilisers, and practice soil conservation.\n- Labour shortage: Hire casual workers or use labour-sharing groups (ganyu).\n- Lack of capital: Join a village savings and loan group (VSL), apply for farm input subsidy.\n- Poor management: Attend extension training, keep farm records.\n- Market problems: Join a cooperative to get better prices.\n- Climate risks: Use drought-tolerant varieties, practice irrigation.\n- Pests and diseases: Integrated pest management (IPM), use resistant varieties.\n\nIn Malawi, the Farm Input Subsidy Programme (FISP) helps smallholders access fertiliser and seeds – this is capital support. Extension workers train farmers in management.",
    "summary": "Other factors include market, climate, pests, and risks. Solutions involve irrigation, pest control, cooperatives, and insurance.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Drought-Tolerant Maize",
        "description": "Farmers grow varieties like ZM309 that survive dry spells."
      },
      {
        "title": "Village Savings and Loans",
        "description": "Groups help members save and borrow to buy inputs."
      }
    ],
    "practiceQuestions": [
      {
        "question": "How can a farmer solve the problem of poor soil?",
        "answer": "Use manure, compost, fertilisers, and practice crop rotation or soil conservation.",
        "hint": "Add nutrients and prevent erosion."
      },
      {
        "question": "What is one way to reduce risk from drought?",
        "answer": "Use drought-tolerant crop varieties or practice irrigation.",
        "hint": "Water management."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Agricultural Marketing",
    "lessonNumber": 1,
    "lessonTitle": "Marketing Forces, Functions, Problems, and Solutions",
    "lessonId": "agriculture-f1-marketing-1",
    "order": 9,
    "learningObjectives": [
      "State the forces of demand and supply and their effect on price",
      "List marketing functions and describe problems associated with marketing agricultural products"
    ],
    "introduction": "You have grown maize, groundnuts, or vegetables. Now how do you sell them? AGRICULTURAL MARKETING is all the activities that move a product from the farm to the consumer. Today, we will learn how markets work and what problems farmers face when selling.",
    "keyPoints": [
      "Demand: how much consumers want to buy. Supply: how much farmers produce.",
      "High demand and low supply → high price. High supply and low demand → low price.",
      "Marketing functions: exchange (buying/selling), physical (transport, storage, processing), facilitating (finance, market information).",
      "Problems: low prices, lack of transport, poor roads, middlemen, spoilage, lack of market information.",
      "Solutions: cooperatives, better roads, storage facilities, mobile price info, processing."
    ],
    "detailedContent": "What is Agricultural Marketing?\n\nAgricultural marketing is the process of moving farm products from the producer (farmer) to the consumer. It includes:\n- Buying and selling\n- Transporting\n- Storing\n- Grading\n- Processing\n- Financing\n\nMarketing Forces: Demand and Supply\n\nDemand is the amount of a product that buyers are willing to purchase at a given price.\nSupply is the amount that farmers are willing to sell at a given price.\n\nSimple rule:\n- If many people want maize (high demand) but only a little is available (low supply), the price will be high.\n- If too much maize is produced (high supply) but few people are buying (low demand), the price will be low.\n\nExample in Malawi: Just after harvest, maize supply is high, so prices are low. Many farmers sell at low prices because they need cash. Later in the year, supply goes down, and prices go up.\n\nMarketing Functions\n\n1. Exchange functions: Buying and selling.\n2. Physical functions: Transport, storage, and processing.\n3. Facilitating functions: Financing, market information, risk bearing.\n\nProblems in Marketing Agricultural Products\n\n- Low prices at harvest due to oversupply.\n- Lack of transport.\n- Poor roads.\n- Middlemen taking most profit.\n- Spoilage due to poor storage.\n- No market information.\n\nPossible Solutions\n\n- Form cooperatives to sell together.\n- Improve rural roads.\n- Build community storage facilities.\n- Use mobile phones to check market prices.\n- Process products (e.g., groundnut butter) for higher value.\n- Government programs (ADMARC) stabilise prices.",
    "summary": "Demand and supply determine price. Marketing functions include exchange, physical, and facilitating. Problems include low prices and spoilage. Solutions include cooperatives, storage, processing, and market information.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Farmers Cooperative",
        "description": "Group of groundnut farmers sell together to get a better price."
      },
      {
        "title": "ADMARC",
        "description": "State agency buys maize at set price, helping farmers avoid exploitation."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What happens to maize price just after harvest?",
        "answer": "Price goes down because supply is high.",
        "hint": "Many farmers are selling at the same time."
      },
      {
        "question": "How can a farmer avoid selling at low harvest prices?",
        "answer": "Store grain in a good granary and sell later when prices rise.",
        "hint": "Hold produce for a few months."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Plant Nutrients",
    "lessonNumber": 1,
    "lessonTitle": "Essential Plant Nutrients and Deficiency Signs",
    "lessonId": "agriculture-f1-plant-nutrients-1",
    "order": 10,
    "learningObjectives": [
      "List essential plant nutrients (macro and micro)",
      "Explain the role of nitrogen, phosphorus, and potassium and their deficiency signs"
    ],
    "introduction": "Just like you need food to grow, plants need nutrients. These come from the soil. Today, we will learn about the most important plant nutrients, what they do, and what happens when plants lack them.",
    "keyPoints": [
      "Macronutrients: N, P, K, Ca, Mg, S. Micronutrients: Fe, Zn, B, Cu, Mn, Mo, Cl.",
      "Nitrogen (N): promotes leaf growth and green colour. Deficiency: yellow leaves, stunted growth.",
      "Phosphorus (P): promotes root growth, flowering, fruiting. Deficiency: purple-red leaves, poor roots.",
      "Potassium (K): strengthens plants, disease resistance. Deficiency: yellow/brown leaf edges, weak stems.",
      "Nutrients are depleted by crop removal, erosion, leaching. Replace with manure, compost, fertilisers."
    ],
    "detailedContent": "Essential Plant Nutrients\n\nPlants need about 16 essential nutrients. Macronutrients (needed in large amounts): Nitrogen (N), Phosphorus (P), Potassium (K), Calcium (Ca), Magnesium (Mg), Sulphur (S). Micronutrients (needed in tiny amounts): Iron (Fe), Zinc (Zn), Boron (B), Copper (Cu), Manganese (Mn), Molybdenum (Mo), Chlorine (Cl).\n\nRoles of the Three Most Important Nutrients\n\n1. Nitrogen (N): Promotes rapid leaf and stem growth. It makes the plant green because it is part of chlorophyll. Important for maize, vegetables, and grasses.\n\n2. Phosphorus (P): Essential for root development, flowering, and fruit formation. Important for groundnuts and beans because it helps with nodulation (nitrogen fixation).\n\n3. Potassium (K): Improves overall plant health. Helps plants resist diseases, withstand drought, and produce strong stems. Improves quality of fruits and grains.\n\nDeficiency Signs\n\n- Nitrogen deficiency: Lower leaves turn yellow (chlorosis), growth is stunted.\n- Phosphorus deficiency: Leaves may turn purple or red, root growth poor, flowering delayed.\n- Potassium deficiency: Yellow or brown edges on older leaves (scorching), weak stems.\n\nHow Nutrients are Depleted from Soil\n\n- Crop removal, soil erosion, leaching, volatilisation, fixation.\n\nReplacing Nutrients\n\n- Organic methods: Animal manure, compost, green manure.\n- Inorganic fertilisers: Urea (N), NPK, single superphosphate (P), muriate of potash (K).\n- Crop rotation: Grow legumes to fix nitrogen.",
    "summary": "Essential plant nutrients include nitrogen (leaf growth), phosphorus (roots and flowers), and potassium (strength). Deficiencies cause yellowing, purple colour, or burnt edges.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Maize Nitrogen Deficiency",
        "description": "Leaves turn yellow starting from the bottom – lack of nitrogen."
      },
      {
        "title": "Groundnut Rotation",
        "description": "After groundnuts, nitrogen is left for the next maize crop."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What nutrient is most important for green leafy growth?",
        "answer": "Nitrogen",
        "hint": "Think of chlorophyll."
      },
      {
        "question": "What deficiency causes purple leaves in maize?",
        "answer": "Phosphorus deficiency",
        "hint": "Purple colour indicates lack of P."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Vegetable Production",
    "lessonNumber": 1,
    "lessonTitle": "Site Selection, Fence Construction, and Husbandry Practices",
    "lessonId": "agriculture-f1-vegetables-1",
    "order": 11,
    "learningObjectives": [
      "Select a suitable site for vegetable growing and construct a simple garden fence",
      "Describe husbandry practices for vegetables: seedbed preparation, sowing, transplanting, watering, weeding, fertilising, pest control, harvesting"
    ],
    "introduction": "Vegetables are important for health and income. In Malawi, we have local vegetables like bonongwe, chisoso, and mwanyanya, as well as exotic ones like cabbage, tomato, and onion. Today, we will learn how to start a vegetable garden step by step.",
    "keyPoints": [
      "Importance: provide vitamins and minerals, improve health, generate income.",
      "Indigenous vegetables: amaranth (bonongwe), blackjack (chisoso), pumpkin leaves – hardy, drought-tolerant.",
      "Exotic vegetables: cabbage, tomato, onion – may need more care.",
      "Site selection: near water source, good sunlight, well-drained soil, protected from animals, close to home.",
      "Fence: use wooden poles, wire, or thorny branches to keep out chickens and goats.",
      "Husbandry: prepare seedbed, sow or transplant, water regularly, weed, fertilise, control pests, harvest at right stage."
    ],
    "detailedContent": "Importance of Vegetables\n\nVegetables are essential for a healthy diet. They provide vitamins (A, C, K), minerals (iron, calcium), and fibre. Eating vegetables helps prevent malnutrition, night blindness, and constipation. Selling vegetables can also bring income, especially for women.\n\nIndigenous vs Exotic Vegetables\n\nIndigenous vegetables are native to Malawi. They grow well even with little rain or poor soil. Examples: bonongwe (amaranth), chisoso (blackjack), mwanyanya (jute mallow), pumpkin leaves. Exotic vegetables were introduced and often require more water and care. Examples: cabbage, tomato, onion.\n\nSite Selection\n\nChoose a place that:\n- Is close to a water source.\n- Receives full sunlight (at least 6 hours per day).\n- Has good drainage.\n- Is protected from wind and animals.\n- Is near the house for easy tending.\n\nConstructing a Garden Fence\n\nMaterials: wooden poles, wire, thorny branches.\nMethod: Drive poles into the ground at intervals, tie wire or rope, attach thorny branches or chicken wire. Make a gate.\n\nHusbandry Practices\n\n1. Seedbed preparation: Till, remove stones and weeds, level the bed, add compost.\n2. Sowing: For direct-sown vegetables, make furrows, sprinkle seeds, cover lightly. For transplanting, sow in nursery first.\n3. Transplanting: When seedlings are 10-15 cm tall, transplant on a cloudy day, water immediately.\n4. Watering: Regular water, especially during dry season. Water in morning or evening.\n5. Weeding: Remove weeds every 1-2 weeks.\n6. Fertilising: Apply compost at planting. Side-dress with sulphate of ammonia after 3-4 weeks.\n7. Pest control: Use ash, neem solution, or approved pesticides.\n8. Harvesting: Pick leaves when young and tender. Regular harvesting encourages more production.",
    "summary": "Vegetables are nutritious and profitable. Indigenous vegetables are hardy; exotic need more care. A good site has water, sun, and drainage. Build a fence. Practices: prepare soil, sow/transplant, water, weed, fertilise, control pests, harvest.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Backyard Garden",
        "description": "Small fenced garden near the house produces vegetables for family and sale."
      },
      {
        "title": "Indigenous Vegetables",
        "description": "Bonongwe grows quickly during rainy season with no fertiliser."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is a fence important for a vegetable garden?",
        "answer": "To keep out animals like chickens and goats that will eat the vegetables.",
        "hint": "Animals love vegetables."
      },
      {
        "question": "Name one indigenous vegetable grown in Malawi.",
        "answer": "Bonongwe (amaranth) or chisoso (blackjack)",
        "hint": "It is a local leafy vegetable."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Livestock Production",
    "lessonNumber": 1,
    "lessonTitle": "Classes of Livestock: Ruminants and Non-ruminants",
    "lessonId": "agriculture-f1-livestock-1",
    "order": 12,
    "learningObjectives": [
      "Classify livestock into ruminants and non-ruminants",
      "Describe the digestive systems of ruminants (cattle, goats) and non-ruminants (pigs, poultry)"
    ],
    "introduction": "Not all animals digest food the same way. Cattle and goats can eat grass because they have special stomachs. Pigs and chickens have simpler systems. Today, we will learn the difference between RUMINANTS and NON-RUMINANTS and how their digestive systems work.",
    "keyPoints": [
      "Ruminants: animals with four-compartment stomachs (cattle, goats, sheep).",
      "Non-ruminants (monogastric): simple stomach (pigs, poultry, rabbits, horses).",
      "Ruminant stomach compartments: rumen (fermentation), reticulum, omasum, abomasum (true stomach).",
      "Rumen contains microbes that break down cellulose (grass and leaves).",
      "Non-ruminants cannot digest large amounts of fibre; need concentrated feeds."
    ],
    "detailedContent": "Classes of Livestock\n\nLivestock are farm animals. They are divided into two main groups based on how they digest food.\n\nRuminants: These animals have a stomach with four compartments. They can eat grass, leaves, and other fibrous plants. Examples: cattle (cows), goats, sheep, buffalo.\n\nNon-ruminants (monogastric): These animals have a simple stomach with one compartment. They cannot digest large amounts of fibre. They need feeds like maize, grain, and protein meal. Examples: pigs, poultry (chickens), rabbits, horses.\n\nThe Ruminant Digestive System\n\nSteps of digestion in a ruminant:\n\n1. Mouth: Animal chews grass (roughage) and swallows.\n2. Rumen (first compartment): Largest compartment. Millions of microbes break down cellulose into fatty acids.\n3. Reticulum (second compartment): Catches foreign objects and helps move food back to the mouth for further chewing – this is called \"chewing the cud\".\n4. Omasum (third compartment): Absorbs water and some nutrients.\n5. Abomasum (fourth compartment): This is the \"true stomach\" similar to human stomach. It uses digestive juices to break down proteins.\n6. Small intestine: Nutrients are absorbed into blood.\n7. Large intestine: Water is reabsorbed; remaining material becomes manure.\n\nNon-Ruminant Digestive System (Example: Pig or Chicken)\n\n- Mouth: Chews food.\n- Oesophagus: Carries food to stomach.\n- Stomach (simple, single compartment): Acids and enzymes break down proteins.\n- Small intestine: Most digestion and absorption occur here.\n- Large intestine: Water absorption.\n- Caeca (in poultry): Two blind pouches where some fibre fermentation occurs (but very little).\n\nComparison:\n- Ruminants can survive on grass and roughage because microbes produce nutrients.\n- Non-ruminants need high-quality feeds (grains, protein).",
    "summary": "Ruminants (cattle, goats) have four-compartment stomachs and digest fibre using microbes. Non-ruminants (pigs, poultry) have simple stomachs and need concentrated feed.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Cattle Grazing",
        "description": "Cows eat grass, chew cud, and convert roughage into milk and meat."
      },
      {
        "title": "Pig Feeding",
        "description": "Pigs are fed maize bran and kitchen waste – better feed gives faster growth."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name two ruminant animals.",
        "answer": "Cattle and goats",
        "hint": "They chew cud."
      },
      {
        "question": "Why can’t pigs digest grass well?",
        "answer": "They have a simple stomach without microbes to break down cellulose.",
        "hint": "Pigs are monogastric."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Chicken Production",
    "lessonNumber": 1,
    "lessonTitle": "Breeds and Housing of Chickens",
    "lessonId": "agriculture-f1-chickens-1",
    "order": 13,
    "learningObjectives": [
      "Describe breeds of chickens (local and exotic)",
      "Explain housing requirements for chickens"
    ],
    "introduction": "Chickens are an important source of meat and eggs in Malawi. Today, we will learn about different chicken breeds and how to house them properly.",
    "keyPoints": [
      "Local breeds: hardy, good foragers, low egg production (e.g., Malawi local chicken).",
      "Exotic breeds: high egg production (e.g., Black Australorp, Rhode Island Red) or meat (broilers).",
      "Housing must provide protection from predators, weather, and disease.",
      "Types: deep litter, battery cage, free-range.",
      "Good chicken house: dry, well-ventilated, secure, easy to clean."
    ],
    "detailedContent": "Breeds of Chickens\n\nLocal breeds (indigenous) are hardy, resistant to diseases, and good foragers but lay fewer eggs (about 40-60 eggs per year). Examples: Malawi local chicken.\n\nExotic breeds are imported and have higher productivity. Layers (egg production) include Black Australorp, Rhode Island Red, Leghorn – they can lay 200-300 eggs per year. Broilers are raised for meat and grow very fast (ready in 6-8 weeks).\n\nHousing Requirements\n\nTypes of chicken houses:\n- Deep litter: chickens on floor with bedding (wood shavings, rice husks). Suitable for layers and broilers.\n- Battery cage: wire cages stacked; used for commercial egg production.\n- Free-range: chickens roam outside; requires fencing and shelter.\n\nGood chicken house characteristics:\n- Dry and waterproof roof.\n- Good ventilation but no drafts.\n- Protection from predators (dogs, cats, snakes, hawks).\n- Easy to clean and disinfect.\n- Enough space: for layers, 3-4 birds per square metre; for broilers, 10-12 per square metre.\n\nNesting boxes: one box for every 4-5 hens. Perches for roosting.",
    "summary": "Local chickens are hardy; exotics give more eggs or meat. Housing must protect from predators and weather. Choose deep litter, battery cage, or free-range.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Local Chicken",
        "description": "Common in villages; scavenges for food; resistant to Newcastle disease."
      },
      {
        "title": "Deep Litter House",
        "description": "Many small-scale farmers use this system with maize bran bedding."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name one exotic breed known for high egg production.",
        "answer": "Black Australorp or Rhode Island Red",
        "hint": "Laying breeds."
      },
      {
        "question": "Why is ventilation important in a chicken house?",
        "answer": "To remove ammonia and moisture, and provide fresh air for health.",
        "hint": "Prevents respiratory diseases."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Chicken Production",
    "lessonNumber": 2,
    "lessonTitle": "Feeding, Disease Control, and Predators of Chickens",
    "lessonId": "agriculture-f1-chickens-2",
    "order": 14,
    "learningObjectives": [
      "Explain feeding of broilers and layers",
      "Identify common diseases, parasites, and predators of chickens and their control"
    ],
    "introduction": "To get good meat and eggs, chickens need proper feeding and protection from diseases and predators. Today, we will learn about feeding programs, common diseases, and how to keep chickens safe.",
    "keyPoints": [
      "Broiler feeds: starter (0-4 weeks), grower (4-6 weeks), finisher (6-8 weeks).",
      "Layer feeds: chick starter (0-8 weeks), pullet grower (8-18 weeks), layers mash (after 18 weeks).",
      "Diseases: Newcastle, fowl pox, coccidiosis, fowl typhoid.",
      "Parasites: fleas, ticks, roundworms, tapeworms.",
      "Predators: wild cats, hawks, eagles, dogs, snakes.",
      "Control: vaccination, hygiene, good housing, deworming, fencing."
    ],
    "detailedContent": "Feeding of Broilers\n\nBroilers require high-protein feeds for rapid growth.\n- Broiler starter (0-4 weeks): 22-24% protein.\n- Broiler grower (4-6 weeks): 20-22% protein.\n- Broiler finisher (6-8 weeks): 18-20% protein.\nFeed is given ad libitum (always available).\n\nFeeding of Layers\n\n- Chick starter (0-8 weeks): 18-20% protein.\n- Pullet grower (8-18 weeks): 15-16% protein to prevent early laying.\n- Layers mash (after 18 weeks): 16-18% protein with extra calcium for eggshells.\n\nDiseases and Control\n\n- Newcastle disease: viral, highly contagious. Signs: respiratory distress, green diarrhoea, twisted neck. Control: vaccination.\n- Fowl pox: viral, causes warty lesions on comb. Control: vaccination.\n- Coccidiosis: protozoan parasite, bloody diarrhoea. Control: clean litter, coccidiostats in feed.\n- Fowl typhoid: bacterial, causes weakness, greenish-yellow diarrhoea. Control: hygiene, antibiotics.\n\nParasites\n\n- External: fleas, ticks, lice. Control: dust with insecticide, clean housing.\n- Internal: roundworms, tapeworms. Control: deworming (piperazine), clean pens.\n\nPredators and Control\n\nCommon predators: wild cats, hawks, eagles, dogs, snakes, rats.\nControl measures: sturdy fencing, close chicken house at night, use wire mesh, trap rats.",
    "summary": "Broilers need high-protein feeds; layers need calcium for eggshells. Vaccinate against Newcastle and fowl pox. Control parasites and protect from predators with proper housing.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Newcastle Vaccination",
        "description": "Vaccination campaigns help reduce outbreaks in villages."
      },
      {
        "title": "Wire Mesh on Windows",
        "description": "Prevents hawks and wild cats from entering chicken house."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the main difference between broiler and layer feed?",
        "answer": "Broiler feed has higher protein for rapid growth; layer feed has extra calcium for eggshells.",
        "hint": "Purpose of raising."
      },
      {
        "question": "How can you prevent Newcastle disease?",
        "answer": "Vaccination and biosecurity (limiting visitors, disinfecting equipment).",
        "hint": "Prevention is key."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Soil Fertility and Fertilizers",
    "lessonNumber": 1,
    "lessonTitle": "Maintaining Soil Fertility",
    "lessonId": "agriculture-f2-soil-fertility-1",
    "order": 31,
    "learningObjectives": [
      "Identify ways of maintaining soil fertility",
      "Explain the importance of crop rotation, manure, fallowing, and mulching"
    ],
    "introduction": "After many harvests, soil becomes tired and less productive. FERTILITY is the ability of soil to provide nutrients to plants. Today, we will learn how to keep soil fertile using organic methods.",
    "keyPoints": [
      "Crop rotation: planting different crops in sequence (e.g., maize then groundnuts).",
      "Manure and compost: add animal manure or decomposed plant material to the soil.",
      "Fallowing: leaving land unplanted for one or more seasons to restore nutrients.",
      "Mulching: covering soil with dry grass or leaves to reduce erosion and add organic matter.",
      "Green manures: planting fast-growing legumes and ploughing them into the soil.",
      "Contour farming: ridges across slope reduce erosion, keeping topsoil.",
      "Liming: adding lime to acidic soil to raise pH."
    ],
    "detailedContent": "Ways to Maintain Soil Fertility\n\n 1. Crop rotation: Planting different crops in sequence. For example, maize then groundnuts. Groundnuts fix nitrogen, leaving it for the next maize crop. This also breaks pest cycles.\n\n 2. Manure and compost: Animal manure (cattle, goats, chickens) and compost (decomposed plant material) add organic matter and nutrients. They improve soil structure and water holding capacity.\n\n 3. Fallowing: Leaving land unplanted for one or more seasons. Natural vegetation regrows and restores nutrients. This is less common now due to population pressure.\n\n 4. Mulching: Covering soil with dry grass, leaves, or crop residues. Mulch reduces evaporation, prevents erosion, suppresses weeds, and adds organic matter as it decays.\n\n 5. Green manures: Planting fast-growing legumes (e.g., sunn hemp, cowpeas) and then ploughing them into the soil while green. They add nitrogen and organic matter.\n\n 6. Contour farming: Making ridges across the slope (not up and down). This slows water runoff, traps soil, and reduces erosion.\n\n 7. Liming: Adding agricultural lime (calcium carbonate) to acidic soils. This raises pH, making nutrients more available to plants.\n\n In Malawi, many farmers practice maize-groundnut rotation. They also use cattle manure from kraals. However, fallowing is decreasing due to land scarcity.",
    "summary": "Maintain fertility with crop rotation, manure, fallowing, mulching, green manures, contour farming, and liming. These methods improve soil structure and nutrient content.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Maize-Groundnut Rotation",
        "description": "Groundnuts leave nitrogen for next maize crop."
      },
      {
        "title": "Cattle Manure",
        "description": "Farmers collect manure from kraals to apply to gardens."
      }
    ],
    "practiceQuestions": [
      {
        "question": "How does crop rotation improve soil fertility?",
        "answer": "Different crops use different nutrients, and legumes fix nitrogen.",
        "hint": "Prevents depletion of specific nutrients."
      },
      {
        "question": "What is the purpose of mulching?",
        "answer": "To reduce erosion, retain moisture, and add organic matter.",
        "hint": "Covering soil with dry grass or leaves."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Crop Production",
    "lessonNumber": 1,
    "lessonTitle": "Maize Production: Land Preparation, Planting, and Fertilising",
    "lessonId": "agriculture-f2-maize-1",
    "order": 33,
    "learningObjectives": [
      "Identify qualities of good seed for maize",
      "Describe land preparation, planting, fertilising, and weeding for maize"
    ],
    "introduction": "Maize is our staple food. Growing it well requires following recommended practices. Today, we will learn step-by-step how to produce high yields of maize.",
    "keyPoints": [
      "Good seed: pure variety, high germination, free from disease and damage, uniform size.",
      "Land preparation: plough (first rains), make ridges 75 cm apart.",
      "Planting: 75 cm between rows, 25 cm within row, 2-3 seeds per hole, depth 5-7 cm.",
      "Fertilising: NPK at planting (200 kg/ha), urea top dressing (50 kg/ha) at knee height.",
      "Weeding: first weeding at 2-3 weeks, second at 6 weeks."
    ],
    "detailedContent": "Qualities of Good Seed\n\n- Pure: Only the intended variety, no other seeds mixed.\n- High germination: At least 85% should sprout.\n- Free from disease: No mould or rot.\n- No physical damage: Cracks or holes.\n- Uniform size and colour.\n\nMaize Production Steps\n\n1. Land preparation: Clear land, plough (turn soil) or make ridges 75 cm apart. In conservation agriculture, practice minimum tillage.\n\n2. Planting: Plant at the start of rains. Place 2-3 seeds per hole at depth of 5-7 cm. Spacing: 75 cm between rows, 25 cm between holes.\n\n3. Fertilising: Apply basal fertiliser (NPK 23-21-0+4S) at planting, about 5-10 grams per hole (or 200 kg per hectare). After 4-6 weeks, when maize is knee-high, apply top dressing urea (50 kg per hectare) mixed with soil.\n\n4. Weeding: First weeding at 2-3 weeks after planting, second weeding at 6 weeks. Keep field clean.\n\n5. Harvesting: When cobs are dry, husks turn brown. Break cobs, remove husks, dry on a mat or raised platform. Shell when fully dry.\n\n6. Storage: Store in airtight container or raised granary. Add ash or use approved pesticide to control weevils.",
    "summary": "Maize: plant at 75×25 cm, apply NPK at planting and urea at knee height, weed twice. Use good quality seed for best yields.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Maize Top Dressing",
        "description": "Urea applied at knee-high gives bigger cobs."
      },
      {
        "title": "MH30 Variety",
        "description": "A high-yielding, disease-resistant maize variety common in Malawi."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What spacing is recommended for maize planting?",
        "answer": "75 cm between rows, 25 cm between holes",
        "hint": "Rows are wider than within row."
      },
      {
        "question": "When should urea be applied as top dressing?",
        "answer": "When maize is knee-high (about 4-6 weeks after planting).",
        "hint": "Before flowering."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Crop Production",
    "lessonNumber": 2,
    "lessonTitle": "Groundnuts Production and Pest/Disease Control",
    "lessonId": "agriculture-f2-groundnuts-1",
    "order": 34,
    "learningObjectives": [
      "Describe husbandry practices for groundnuts (land preparation, planting, fertilising, harvesting)",
      "Identify major pests and diseases of maize and groundnuts and explain control measures"
    ],
    "introduction": "Groundnuts are an important cash and food crop. They also improve soil fertility by fixing nitrogen. Today, we will learn how to grow groundnuts successfully and control common pests and diseases.",
    "keyPoints": [
      "Groundnuts: plant at 50 cm between rows, 15 cm within row, 1-2 seeds per hole.",
      "Do NOT use nitrogen fertiliser (groundnuts fix their own). Use phosphorus fertiliser (single superphosphate) at planting.",
      "Apply gypsum (calcium sulphate) at flowering to fill pods.",
      "Harvest when leaves turn yellow and pods have brown inside.",
      "Pests: stalk borer, fall armyworm (maize); groundnut hopper, termites.",
      "Diseases: maize rust, maize streak virus; groundnut rosette, leaf spot, aflatoxin."
    ],
    "detailedContent": "Groundnuts Production Steps\n\n1. Land preparation: Fine tilth – soil should be loose and well-drained. Ridges not necessary; can plant on flat or raised beds.\n\n2. Planting: At onset of rains (or irrigation). Spacing: 50 cm between rows, 15 cm between holes. Plant 1-2 seeds per hole, depth 5 cm.\n\n3. Fertilising: Do NOT use nitrogen fertiliser (groundnuts fix their own). Use phosphorus fertiliser (single superphosphate) at planting. Apply gypsum (calcium sulphate) at flowering stage to fill pods.\n\n4. Weeding: Weed at 2-3 weeks and 6 weeks. Do not ridge too high.\n\n5. Harvesting: When leaves turn yellow and pods have brown inside. Lift plants with fork or pull, dry in field for a few days. Remove pods by hand or machine.\n\n6. Storage: Keep in shells until ready to use. Ensure very dry to prevent aflatoxin mould.\n\nPests and Control\n\n- Maize stalk borer: Larvae bore into stems. Control: early planting, remove and destroy affected plants, use neem or recommended insecticide.\n- Fall armyworm: Eat leaves and cobs. Control: handpick caterpillars, spray with approved pesticide.\n- Groundnut rosette virus: Transmitted by aphids. Control: use resistant varieties (e.g., CG7), early planting.\n- Aflatoxin: Mould in stored groundnuts. Control: dry thoroughly before storage, keep in dry place, sort out mouldy nuts.\n\nMalawi Example: A farmer in Lilongwe prepares ridges in October. He plants maize at the first heavy rains. He plants groundnuts in a separate field after maize harvest. He rotates maize and groundnuts to improve soil.",
    "summary": "Groundnuts: plant at 50×15 cm, use phosphorus and gypsum, no nitrogen. Harvest when leaves yellow. Control pests and diseases with resistant varieties and good practices.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Groundnut Gypsum",
        "description": "Calcium improves pod filling and reduces rot."
      },
      {
        "title": "Fall Armyworm Control",
        "description": "Spray with recommended pesticides or use handpicking for small infestations."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why should you not apply nitrogen fertiliser to groundnuts?",
        "answer": "Groundnuts fix their own nitrogen; extra nitrogen causes too many leaves and few pods.",
        "hint": "They are legumes."
      },
      {
        "question": "How can you prevent aflatoxin in stored groundnuts?",
        "answer": "Dry pods thoroughly before storage and keep in a dry place.",
        "hint": "Mould grows in moisture."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Soil Physical Properties",
    "lessonNumber": 1,
    "lessonTitle": "Soil Texture and Structure",
    "lessonId": "agriculture-f3-soil-physical-1",
    "order": 35,
    "learningObjectives": [
      "Describe soil texture and its influence on crop production",
      "Explain soil structure and how it affects root growth and water movement"
    ],
    "introduction": "Have you ever felt sandy soil that crumbles easily, or clay soil that becomes sticky when wet? Those are PHYSICAL PROPERTIES of soil. Today, we will learn how texture and structure affect crop growth.",
    "keyPoints": [
      "Texture: proportion of sand, silt, and clay particles.",
      "Sandy soil: drains quickly, low nutrients, easy to work.",
      "Clay soil: holds water and nutrients, but becomes hard and cracks, difficult to work.",
      "Loam: ideal mixture of sand, silt, clay – best for most crops.",
      "Structure: how particles clump together (granular, blocky, platy, etc.).",
      "Granular structure is best – allows air, water, and roots to move easily."
    ],
    "detailedContent": "Soil Texture\n\nTexture is the relative proportion of sand, silt, and clay.\n\n- Sand particles are large (0.05-2 mm). Feel gritty. Sandy soil drains fast, warms up quickly, but does not hold water or nutrients well. Crops like groundnuts and cassava grow in sandy soil.\n\n- Silt particles are medium-sized (0.002-0.05 mm). Feel smooth like flour. Silty soil is fertile and holds water well.\n\n- Clay particles are tiny (less than 0.002 mm). Feel sticky when wet and hard when dry. Clay holds water and nutrients but can become waterlogged and hard for roots to penetrate.\n\nLoam is a balanced mixture of sand, silt, and clay with organic matter. It is the best for most crops because it drains well, holds nutrients, and is easy to work.\n\nEffect of Texture on Crop Production:\n- Sandy soil: Low fertility, prone to drought. Add organic matter.\n- Clay soil: Poor aeration, roots struggle. Add sand and organic matter, use raised beds.\n- Loamy soil: Ideal for maize, vegetables, tobacco.\n\nSoil Structure\n\nStructure is how soil particles clump together into aggregates (peds).\n\n- Granular (crumb) structure: Small, rounded aggregates. Best for crop growth – allows air, water, and roots to move easily.\n- Blocky: Block-like aggregates. Common in subsoil. Can restrict root growth if too large.\n- Platy: Thin, flat plates. Restricts water movement and root penetration.\n- Prismatic/columnar: Vertical columns. Often in clay subsoil.\n\nGood soil structure is crumbly. Farmers can improve structure by adding organic matter (manure, compost), avoiding over-tillage, and growing cover crops.",
    "summary": "Soil texture (sand, silt, clay) affects water and nutrient holding. Loam is best. Structure (granular ideal) affects root growth and aeration.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Sandy Soil in Mchinji",
        "description": "Farmers add manure to improve water holding."
      },
      {
        "title": "Clay Soil in Thyolo",
        "description": "Tea grows well, but for maize, raised beds are used."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which soil texture is ideal for most crops?",
        "answer": "Loam",
        "hint": "Balanced mix of sand, silt, clay."
      },
      {
        "question": "What type of soil structure is best for crop growth?",
        "answer": "Granular (crumb)",
        "hint": "Allows air and water movement."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Soil Physical Properties",
    "lessonNumber": 2,
    "lessonTitle": "Soil Porosity, Colour, and Depth",
    "lessonId": "agriculture-f3-soil-physical-2",
    "order": 36,
    "learningObjectives": [
      "Define soil porosity and relate it to aeration and drainage",
      "Identify soil colours and what they indicate about soil conditions"
    ],
    "introduction": "Porosity, colour, and depth are important physical properties. Porosity affects how much air and water the soil can hold. Colour tells you about organic matter and drainage. Today, we will learn these properties and their impact on farming.",
    "keyPoints": [
      "Porosity: amount of pore space between particles. High porosity = good aeration and drainage.",
      "Colour: dark = organic matter (fertile); red/yellow = iron oxides; grey/blue = waterlogged.",
      "Depth: deeper soil allows roots to grow more deeply, accessing more water and nutrients.",
      "Physical properties affect root penetration, water holding capacity, nutrient availability, and erosion risk."
    ],
    "detailedContent": "Soil Porosity\n\nPorosity is the amount of pore space (gaps) between soil particles.\n\n- High porosity means more air and water storage. Roots need oxygen.\n- Low porosity (compacted soil) leads to poor drainage, waterlogging, and root suffocation.\n\nFactors that reduce porosity: heavy machinery, overgrazing, raindrop impact (crusting). Improve porosity by adding organic matter and using minimum tillage.\n\nSoil Colour\n\nColour tells you about soil conditions:\n\n- Dark brown or black: High organic matter (humus). Very fertile. Best for crops.\n- Red or yellow: Iron oxides present. Good drainage but may have low fertility.\n- Grey or blue: Waterlogged, lack of oxygen. Poor for roots. Need drainage.\n- Light grey/white: May have lime or be leached of nutrients.\n\nIn Malawi, fertile soils are often dark brown in high-rainfall areas. Sandy soils are lighter.\n\nSoil Depth\n\nSoil depth is the thickness of the soil layer above bedrock or hardpan. Deep soils (more than 1 metre) allow roots to grow deep, accessing more water and nutrients. Shallow soils (less than 30 cm) restrict root growth and are more prone to drought.\n\nHow Physical Properties Affect Crop Production\n\n- Root penetration: Compacted soil or clay hardpans block roots.\n- Water holding capacity: Sandy soil dries quickly; clay holds too much.\n- Nutrient availability: Organic matter (dark colour) supplies nutrients.\n- Erosion: Poor structure leads to erosion.\n- Workability: Sandy loam is easy to plough; heavy clay is hard.",
    "summary": "Porosity allows air and water movement. Dark colour indicates fertility; red is iron; grey is waterlogged. Deep soils are better for root growth.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Dark Soil in Dedza",
        "description": "High organic matter from forest vegetation."
      },
      {
        "title": "Waterlogged Soil",
        "description": "Grey colour indicates poor drainage – need drainage channels."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What does dark brown soil indicate?",
        "answer": "High organic matter, good fertility",
        "hint": "Humus makes soil dark."
      },
      {
        "question": "Why is high porosity important for crops?",
        "answer": "It allows air (oxygen) for roots and water storage.",
        "hint": "Roots need oxygen to respire."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 3",
    "topic": "Transport in Plants",
    "lessonNumber": 1,
    "lessonTitle": "Xylem, Phloem, and Transpiration",
    "lessonId": "biology-f3-transport-plants-1",
    "order": 37,
    "learningObjectives": [
      "Describe the structure and function of xylem vessels and phloem sieve tubes",
      "Explain the process of transpiration and its importance"
    ],
    "introduction": "How does water travel from the roots to the top of a tall maize plant? How does sugar from leaves reach the developing cob? The answer is TRANSPORT TISSUES – xylem and phloem. Today, we will learn how these tissues work and why transpiration is essential.",
    "keyPoints": [
      "Xylem: transports water and minerals from roots to shoots. Dead cells, hollow, with lignin thickening.",
      "Phloem: transports sucrose and amino acids from source (leaves) to sink (roots, fruits). Living sieve tube cells with companion cells.",
      "Transpiration: loss of water vapour from plant surfaces (mostly through stomata).",
      "Transpiration creates transpiration pull, cools plant, transports minerals."
    ],
    "detailedContent": "Xylem – The Water Highway\n\nXylem tissue consists of vessels and tracheids. These are dead cells at maturity, with no cytoplasm. The walls are thickened with lignin (a woody substance) for strength. Lignin forms patterns (spiral, annular, reticulated) that prevent the tube from collapsing while allowing flexibility.\n\nWater and minerals (dissolved in water) enter root hairs and move through cortex to the xylem. From there, they are pulled upward by TRANSPIRATION PULL.\n\nPhloem – The Food Conveyor\n\nPhloem consists of sieve tube elements (living cells, but with reduced cytoplasm) and companion cells. The sieve plates have pores for flow. Phloem transports sucrose, amino acids, and other organic compounds from SOURCE (where they are made – leaves) to SINK (where they are used or stored – roots, flowers, fruits, seeds).\n\nThis movement is called TRANSLOCATION. It requires energy (ATP) and can move up or down.\n\nTranspiration\n\nTranspiration is the loss of water vapour from the aerial parts of plants, mainly through stomata.\n\nWhy is transpiration important?\n1. Creates transpiration pull: water evaporating from leaves pulls more water up the xylem.\n2. Cools the plant: evaporative cooling prevents overheating.\n3. Supplies minerals: dissolved minerals move with the water flow.\n\nFactors Affecting Transpiration Rate\n\n- Light: Increases (stomata open in light).\n- Temperature: Increases (warmer air holds more water vapour).\n- Humidity: Decreases (air already moist, so gradient is low).\n- Wind: Increases (wind removes water vapour near leaf surface).\n- Water supply: Decreases if soil dry (stomata close).\n\nAdaptations to Reduce Water Loss\n\nPlants in dry areas (xerophytes) have:\n- Thick waxy cuticle (e.g., mango, baobab)\n- Sunken stomata (pits)\n- Reduced leaf area (spines, small leaves)\n- Rolling leaves when dry (some grasses)\n- Deep roots or water storage\n\nMalawi Example: A maize plant on a hot, dry, windy day will transpire rapidly. If the soil is dry, it may wilt. To conserve water, maize rolls its leaves.",
    "summary": "Xylem transports water and minerals upward; phloem transports sucrose and amino acids bidirectionally. Transpiration is water loss from leaves; it pulls water through xylem.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Maize Leaf Rolling",
        "description": "Leaves roll to reduce surface area and transpiration during drought."
      },
      {
        "title": "Baobab Water Storage",
        "description": "Baobab trees have thick stems to store water and reduced leaves."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which tissue transports sugar from leaves to roots?",
        "answer": "Phloem",
        "hint": "Transports food; sieve tubes."
      },
      {
        "question": "Why does transpiration increase on a windy day?",
        "answer": "Wind removes water vapour from around leaves, maintaining a steep gradient.",
        "hint": "Similar to evaporation from skin."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Stoichiometry",
    "lessonNumber": 1,
    "lessonTitle": "The Mole Concept and Molar Mass",
    "lessonId": "chemistry-f3-stoichiometry-1",
    "order": 38,
    "learningObjectives": [
      "Define the mole as the amount of substance containing 6.02 × 10²³ particles",
      "Calculate the molar mass of elements and compounds"
    ],
    "introduction": "Chemists need to count atoms, but atoms are too small to count one by one. The MOLE is a special counting unit – like a dozen (12) but much larger. One mole contains 602,000,000,000,000,000,000,000 particles – that is 6.02 × 10²³. Today, we will learn how to use the mole to measure substances.",
    "keyPoints": [
      "One mole of any substance contains the same number of particles: 6.02 × 10²³ (Avogadro's constant).",
      "Molar mass (M) = mass of one mole of substance (g/mol). Numerically equal to relative atomic/molecular mass.",
      "Formulae: number of moles (n) = mass (m) / molar mass (M). Also n = number of particles / NA.",
      "Percentage composition: (mass of element in 1 mole / molar mass) × 100%."
    ],
    "detailedContent": "The Mole – A Chemist's Dozen\n\nJust as a dozen always means 12 eggs, a mole always means 6.02 × 10²³ particles (atoms, molecules, ions, or electrons). This number is called Avogadro's constant (NA).\n\nWhy 6.02 × 10²³? Because that is how many carbon-12 atoms are in exactly 12 grams of carbon-12.\n\nMolar Mass\n\nThe molar mass (M) of a substance is the mass of one mole of that substance in grams per mole (g/mol). It is numerically equal to the relative atomic mass (for elements) or relative molecular mass (for compounds).\n\nExamples:\n- Carbon (C): atomic mass 12.0 → molar mass = 12.0 g/mol\n- Oxygen gas (O2): molecular mass 32.0 → molar mass = 32.0 g/mol\n- Water (H2O): molecular mass 18.0 → molar mass = 18.0 g/mol\n- Sodium chloride (NaCl): formula mass 58.5 → molar mass = 58.5 g/mol\n\nCalculations\n\n1. Number of moles (n) = mass (m) / molar mass (M)\n   Example: How many moles are in 24 g of carbon?\n   n = 24 / 12 = 2.00 mol\n\n2. Number of molecules = moles × NA\n   Example: How many molecules in 2 mol of water?\n   Number = 2 × 6.02 × 10²³ = 1.204 × 10²⁴ molecules\n\n3. Mass = moles × molar mass\n   Example: What is the mass of 0.5 mol of NaCl?\n   m = 0.5 × 58.5 = 29.25 g\n\nPercentage Composition\n\nPercentage of element = (mass of element in 1 mole / molar mass of compound) × 100%\n\nExample: Find % of C in CO2 (C=12, O=16, molar mass 44 g/mol)\n%C = (12 / 44) × 100 = 27.3%\n%O = (32 / 44) × 100 = 72.7%",
    "summary": "One mole = 6.02 × 10²³ particles. Molar mass (g/mol) = mass of one mole. n = m/M. Percentage composition = (mass element/total mass)×100%.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "NPK Fertiliser",
        "description": "Percentage composition helps farmers calculate fertiliser needed."
      },
      {
        "title": "Water in Lake Malawi",
        "description": "Mole concept used to calculate amount of dissolved oxygen."
      }
    ],
    "practiceQuestions": [
      {
        "question": "How many moles are in 90 g of water?",
        "answer": "5.0 mol",
        "hint": "Molar mass of water is 18 g/mol; 90/18 = 5."
      },
      {
        "question": "What is the mass of 0.25 mol of sodium chloride (NaCl)?",
        "answer": "14.625 g",
        "hint": "Molar mass NaCl = 58.5 g/mol; 0.25 × 58.5 = 14.625."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Stoichiometry",
    "lessonNumber": 2,
    "lessonTitle": "Empirical and Molecular Formulae",
    "lessonId": "chemistry-f3-stoichiometry-2",
    "order": 39,
    "learningObjectives": [
      "Determine empirical and molecular formulae from experimental data",
      "Calculate the percentage of water in hydrated ionic compounds"
    ],
    "introduction": "How do chemists figure out the formula of a compound? They use experimental data to find the EMPIRICAL FORMULA (simplest ratio) and then the MOLECULAR FORMULA (actual numbers). Today, we will learn how to do these calculations.",
    "keyPoints": [
      "Empirical formula: simplest whole number ratio of atoms in a compound.",
      "Molecular formula: actual number of atoms of each element in a molecule (n × empirical formula).",
      "To find empirical formula: convert masses to moles, divide by smallest, get ratio.",
      "Hydrated compounds contain water of crystallisation. Heating removes water; mass loss gives water percentage."
    ],
    "detailedContent": "Empirical and Molecular Formulae\n\nEmpirical formula: simplest whole number ratio.\n\nExample: A compound contains 40% C, 6.7% H, 53.3% O. Find empirical formula.\nAssume 100 g:\n- C: 40/12 = 3.33 mol\n- H: 6.7/1 = 6.7 mol\n- O: 53.3/16 = 3.33 mol\nDivide by smallest (3.33):\nC = 1, H = 2, O = 1 → empirical formula CH2O\n\nMolecular formula = (empirical formula)n, where n = molecular mass / empirical mass.\n\nExample: Empirical formula CH2O (mass 30). If molecular mass is 60, then n = 60/30 = 2, so molecular formula = C2H4O2 (which is ethanoic acid).\n\nPercentage of Water in Hydrated Ionic Compounds\n\nHydrated compounds contain water molecules in their crystal structure, e.g., CuSO4·5H2O (copper(II) sulphate pentahydrate).\n\nTo find percentage of water:\n- Calculate molar mass of hydrated compound.\n- Calculate mass of water (number of H2O × 18).\n- % water = (mass of water / total mass) × 100%.\n\nExample: CuSO4·5H2O\nMolar mass CuSO4 = 63.5 + 32 + (16×4) = 159.5 g/mol\nMass of 5H2O = 5 × 18 = 90 g/mol\nTotal = 159.5 + 90 = 249.5 g/mol\n% water = (90 / 249.5) × 100 = 36.1%\n\nExperimental determination: Heat a known mass of hydrated salt. Cool and reweigh. The loss in mass is water. Then calculate % water.",
    "summary": "Empirical formula is simplest ratio; molecular formula = (empirical)n. Hydrated compounds contain water of crystallisation; % water calculated from mass loss on heating.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Copper Sulphate Crystals",
        "description": "Blue crystals (CuSO4·5H2O) turn white when heated as water is driven off."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the empirical formula of a compound with 92.3% C and 7.7% H?",
        "answer": "CH",
        "hint": "Assume 100g: C = 92.3/12 = 7.69, H = 7.7/1 = 7.7; ratio ≈1:1."
      },
      {
        "question": "A hydrated salt has mass 5.00 g. After heating, mass is 3.20 g. Calculate % water.",
        "answer": "36.0%",
        "hint": "Loss = 1.80 g; (1.80/5.00)×100 = 36%"
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 3",
    "topic": "Pressure",
    "lessonNumber": 1,
    "lessonTitle": "Pressure in Solids and Liquids",
    "lessonId": "physics-f3-pressure-1",
    "order": 40,
    "learningObjectives": [
      "Define pressure and state its SI unit (Pascal)",
      "Calculate pressure using P = F/A and derive liquid pressure formula P = ρgh"
    ],
    "introduction": "Why does a sharp knife cut more easily than a blunt one? Why do tractors have wide tyres? The answer is PRESSURE – force spread over an area. Today, we will learn how to calculate pressure and understand its effects in solids and liquids.",
    "keyPoints": [
      "Pressure = Force ÷ Area (P = F/A).",
      "Unit: Pascal (Pa) = 1 N/m².",
      "For the same force, smaller area gives higher pressure.",
      "Liquid pressure increases with depth and density: P = ρgh.",
      "Liquid pressure acts equally in all directions."
    ],
    "detailedContent": "Understanding Pressure\n\nPressure is defined as the force acting perpendicularly per unit area.\n\nP = F / A\n\nWhere:\n- P = pressure (Pascal, Pa)\n- F = force (Newton, N)\n- A = area (square metre, m²)\n\nExamples from Malawi:\n1. A sharp knife has a very small cutting edge area. When you apply a small force, the pressure is huge, so it cuts easily.\n2. A tractor used in fields has wide tyres. This increases the area so that pressure on the soft soil is low, preventing the tractor from sinking.\n3. A person wearing high heels exerts very high pressure on the ground – heels can sink into soft earth.\n\nCalculating Pressure:\n\nExample: A box weighs 100 N and has a base area of 0.5 m².\nPressure = 100 / 0.5 = 200 Pa.\n\nLiquid Pressure\n\nPressure in a liquid at a certain depth depends on the density of the liquid, the depth, and gravity.\n\nP = ρ × g × h\n\nWhere:\n- ρ (rho) = density of liquid (kg/m³)\n- g = acceleration due to gravity (≈ 10 N/kg on Earth)\n- h = depth below the surface (m)\n\nImportant properties of liquid pressure:\n- Pressure increases with depth. This is why dams are built thicker at the bottom.\n- Pressure depends on density: mercury (dense) exerts higher pressure than water at the same depth.\n- Pressure acts equally in all directions.\n\nWorked Example:\nCalculate the pressure at a depth of 5 metres in water (density of water = 1000 kg/m³, g = 10 N/kg).\nP = 1000 × 10 × 5 = 50,000 Pa (or 50 kPa).\n\nComparison: A person standing on one foot exerts pressure of about 20,000 Pa. The water pressure at 2 m depth is 20,000 Pa – similar.",
    "summary": "Pressure = Force/Area. Smaller area gives higher pressure. Liquid pressure = ρgh, increasing with depth and density. Pressure acts equally in all directions in a liquid.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Tractor Tyres",
        "description": "Wide tyres reduce pressure on soft soil."
      },
      {
        "title": "Lake Malawi Diving",
        "description": "Pressure increases with depth – divers must equalise."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A woman weighs 500 N. The area of one high heel is 2 cm² = 0.0002 m². Calculate pressure when standing on one heel.",
        "answer": "2,500,000 Pa (2.5 million Pa)",
        "hint": "P = F/A = 500 / 0.0002 = 2,500,000 Pa"
      },
      {
        "question": "Calculate water pressure at a depth of 3 m in a well (density 1000 kg/m³, g = 10 N/kg).",
        "answer": "30,000 Pa",
        "hint": "P = 1000 × 10 × 3 = 30,000 Pa"
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 3",
    "topic": "Pressure",
    "lessonNumber": 2,
    "lessonTitle": "Atmospheric Pressure and Pascal’s Principle",
    "lessonId": "physics-f3-pressure-2",
    "order": 41,
    "learningObjectives": [
      "Explain atmospheric pressure and describe experiments to demonstrate it",
      "State Pascal’s principle and apply it to hydraulic systems"
    ],
    "introduction": "Why does a liquid rise when you suck through a straw? Why can a suction cup stick to a wall? The answer is ATMOSPHERIC PRESSURE – the weight of air above us. Today, we will discover this invisible force and learn about Pascal’s principle, which makes hydraulic brakes and lifts possible.",
    "keyPoints": [
      "Atmospheric pressure is the pressure exerted by the Earth’s air column.",
      "At sea level, atmospheric pressure ≈ 101,325 Pa (1 atm).",
      "Pascal’s principle: pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid.",
      "Hydraulic systems use this to multiply force: F2 = (A2/A1) × F1."
    ],
    "detailedContent": "Atmospheric Pressure\n\nThe air around us has weight. The column of air from the top of the atmosphere down to the ground exerts pressure on everything. At sea level, this pressure is about 101,325 Pa (sometimes called 1 atmosphere or 1 bar).\n\nDemonstration Experiments:\n1. Crushing can experiment: Heat a small amount of water in an empty can until steam comes out. Quickly invert the can into cold water. The can collapses – atmospheric pressure crushes it.\n2. Magdeburg hemispheres: Two hollow hemispheres are joined and air is pumped out. They cannot be pulled apart because atmospheric pressure holds them together.\n3. Drinking straw: When you suck, you reduce pressure inside the straw. Atmospheric pressure pushes the liquid up.\n\nApplications of Atmospheric Pressure:\n- Syringe draws liquid by creating low pressure inside.\n- Suction cups stick when you press out the air.\n- Vacuum cleaners work by lowering pressure inside.\n\nPascal’s Principle\n\nPressure applied to an enclosed fluid is transmitted equally throughout the fluid.\n\nIn a hydraulic system:\n\nA small force F1 applied over a small area A1 creates pressure P = F1/A1. This pressure is transmitted to a larger area A2, producing a larger force F2 = P × A2.\n\nForce multiplication: F2 = F1 × (A2/A1)\n\nWorked Example:\nA hydraulic jack has a small piston area of 0.01 m² and a large piston area of 0.1 m². A force of 100 N is applied on the small piston. What force is produced on the large piston?\nF2 = 100 × (0.1 / 0.01) = 100 × 10 = 1000 N.\n\nApplications: car brakes, hydraulic lifts, hydraulic presses.\n\nMalawi Example: A garage in Lilongwe uses a hydraulic lift to raise a car for repairs. The mechanic pushes a lever on a small piston, and the car rises.",
    "summary": "Atmospheric pressure is the weight of air. It is demonstrated by the crushing can experiment. Pascal’s principle: pressure is transmitted undiminished in an enclosed fluid, enabling force multiplication in hydraulic systems.",
    "estimatedTime": "25 mins",
    "malawiExamples": [
      {
        "title": "Car Repair Garage",
        "description": "Hydraulic lift uses Pascal's principle to raise heavy cars."
      },
      {
        "title": "Drinking Water from a Well",
        "description": "Atmospheric pressure pushes water up when you create low pressure in a suction pump."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A hydraulic brake system has a master cylinder piston area of 2 cm² and wheel cylinder piston area of 10 cm². The driver applies 50 N force on the master cylinder. What force is applied to the brake pads?",
        "answer": "250 N",
        "hint": "F2 = 50 × (10/2) = 250 N"
      },
      {
        "question": "Why does a suction cup stick to a smooth surface?",
        "answer": "Atmospheric pressure pushes it against the surface when you expel air.",
        "hint": "Pressure inside is reduced. Outside air pushes it in."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Soil Degradation",
    "lessonNumber": 1,
    "lessonTitle": "Forms, Causes, and Control of Soil Degradation",
    "lessonId": "agriculture-f4-soil-degradation-1",
    "order": 42,
    "learningObjectives": [
      "Define soil degradation and identify its forms (physical, chemical, biological)",
      "Explain causes and effects of soil degradation and ways to control it"
    ],
    "introduction": "Soil is a precious resource, but it can be destroyed. When soil loses its ability to grow crops, we call it SOIL DEGRADATION. Today, we will learn what causes this, the terrible effects, and most importantly – how to stop it.",
    "keyPoints": [
      "Soil degradation: decline in soil quality and productivity.",
      "Physical degradation: erosion, compaction, crusting, loss of topsoil.",
      "Chemical degradation: nutrient depletion, acidification, salinisation, pollution.",
      "Biological degradation: loss of organic matter, decline in soil organisms.",
      "Causes: water erosion, wind erosion, deforestation, overgrazing, continuous tillage, burning crop residues.",
      "Effects: lower crop yields, increased fertiliser need, more drought vulnerability.",
      "Control methods: conservation agriculture (minimum tillage, mulching, rotation), terracing, reforestation."
    ],
    "detailedContent": "What is Soil Degradation?\n\nSoil degradation is the loss of soil quality, making it less able to support plant growth. It is a major problem in Malawi, threatening food security.\n\nForms of Soil Degradation\n\n1. Physical degradation:\n   - Erosion: topsoil carried away by water or wind.\n   - Compaction: soil particles pressed together, reducing pores.\n   - Crusting: hard layer on surface, preventing water infiltration.\n\n2. Chemical degradation:\n   - Nutrient depletion: crops remove more nutrients than are added.\n   - Acidification: pH drops, making some nutrients toxic.\n   - Salinisation: salt builds up (in irrigated areas).\n   - Pollution: chemicals from fertilisers, pesticides, or industrial waste.\n\n3. Biological degradation:\n   - Loss of organic matter (humus).\n   - Decline in earthworms, termites, and soil microbes.\n\nCauses of Soil Degradation\n\n- Water erosion: Rain washes topsoil down slopes. Common in hilly areas of Malawi.\n- Wind erosion: In dry areas, wind blows away loose soil.\n- Deforestation: Removing trees leaves soil exposed.\n- Overgrazing: Too many animals eat all grass, leaving soil bare.\n- Poor tillage: Ploughing up and down slopes creates channels for erosion.\n- Burning crop residues: Destroys organic matter and kills soil organisms.\n\nEffects on Crop Production\n\n- Low yields: Less topsoil means less nutrients.\n- Increased fertiliser need: Farmer must spend more money.\n- More drought: Degraded soil holds less water.\n- Higher production costs: Need to rebuild soil.\n- Food insecurity: Poor harvests lead to hunger.\n\nWays to Control Soil Degradation\n\n1. Conservation agriculture:\n   - Minimum tillage (only disturb soil where planting).\n   - Permanent soil cover (mulch, cover crops).\n   - Crop rotation (include legumes).\n\n2. Erosion control structures: Contour ridges, terracing, grass strips, check dams.\n\n3. Reforestation and agroforestry: Plant trees on slopes, along contours, and in fields (e.g., Gliricidia, Faidherbia).\n\n4. Controlled grazing: Rotate animals, keep numbers in balance with pasture.\n\n5. Manure and compost: Replace organic matter.\n\n6. Avoid burning crop residues – leave them on field as mulch.\n\nMalawi example: In Southern Malawi, farmers on steep slopes have built stone bunds (tisisili) to slow runoff. Others practice box ridges (mipanda) to trap water and soil. Many are adopting conservation agriculture with the help of extension workers.",
    "summary": "Soil degradation is loss of quality through erosion, nutrient loss, or biological decline. Causes: deforestation, overgrazing, poor tillage. Effects: low yields, drought vulnerability. Control with conservation agriculture, trees, terracing, and organic matter.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Stone Bunds in Thyolo",
        "description": "Farmers build stone lines across slopes to reduce erosion."
      },
      {
        "title": "Conservation Agriculture",
        "description": "Planting maize without tillage and leaving mulch on surface."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is a physical form of soil degradation?",
        "answer": "Erosion or compaction",
        "hint": "Physical means structure changes."
      },
      {
        "question": "How does planting trees help control soil degradation?",
        "answer": "Roots hold soil, reduces erosion, adds organic matter.",
        "hint": "Agroforestry."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Immunity and Disease",
    "lessonNumber": 1,
    "lessonTitle": "How the Body Defends Against Pathogens",
    "lessonId": "biology-f4-immunity-1",
    "order": 43,
    "learningObjectives": [
      "Distinguish between non-specific (first line) and specific (immune) defences",
      "Explain how vaccination works and why it is important"
    ],
    "introduction": "Every day, you are exposed to germs. Yet you stay healthy most of the time because your body has defences. These range from simple barriers to sophisticated immune cells. Today, we will learn how your body fights infection.",
    "keyPoints": [
      "First line of defence (non-specific): skin, mucus, cilia, stomach acid, tears, lysozyme.",
      "Second line of defence (non-specific): phagocytes (white blood cells that engulf pathogens), inflammation, fever.",
      "Third line of defence (specific immunity): B cells produce antibodies; T helper cells activate B cells; T killer cells destroy infected cells.",
      "Antigens: molecules on pathogen surface that trigger immune response.",
      "Immunity types: natural active (get disease), artificial active (vaccination), natural passive (breast milk), artificial passive (antibody injection).",
      "Vaccination: introduces harmless antigen; body makes memory cells for rapid response."
    ],
    "detailedContent": "First Line of Defence (Non-specific barriers)\n\nThese are physical and chemical barriers that prevent pathogen entry.\n\n- Skin: Tough, waterproof, unbroken skin blocks most germs. Sweat and sebum contain antibacterial substances.\n- Mucous membranes: line nose, mouth, trachea, etc. Mucus traps pathogens.\n- Cilia: hair-like projections in airways that sweep mucus (with trapped germs) towards throat.\n- Stomach acid (HCl): kills many ingested bacteria and viruses.\n- Tears: contain lysozyme (enzyme that breaks bacterial cell walls).\n\nSecond Line of Defence (Non-specific internal)\n\nWhen pathogens breach first line, these responses start:\n\n- Phagocytes (macrophages, neutrophils): white blood cells that engulf and digest pathogens.\n- Inflammation: Redness, heat, swelling, pain – increased blood flow brings more phagocytes.\n- Fever: Body temperature rises; this slows pathogen reproduction.\n\nThird Line of Defence (Specific immunity)\n\nThis is tailored to specific pathogens. It involves LYMPHOCYTES.\n\n1. B cells: produce ANTIBODIES. Antibodies are proteins that bind specifically to ANTIGEN on pathogen. The binding neutralises pathogen or marks it for destruction.\n\n2. T cells:\n   - T helper cells (CD4): activate B cells and T killer cells.\n   - T killer cells (CD8): destroy cells that are infected by virus.\n\nAfter infection, some B and T cells become MEMORY CELLS – they remain in body for years. Upon re-infection, they mount a rapid response.\n\nTypes of Immunity\n\n- Natural active: Get disease, recover – long-term (e.g., chickenpox).\n- Artificial active: Vaccination – long-term (e.g., BCG for TB).\n- Natural passive: Antibodies from mother via breast milk – short-term.\n- Artificial passive: Injection of antibodies (e.g., antivenom) – short-term.\n\nVaccination\n\nVaccine contains weakened or killed pathogen, or part of it (antigen). It does not cause disease but stimulates immune system to produce memory cells. When real pathogen attacks, memory cells respond quickly and stop infection.\n\nImportance: Eradicated smallpox; nearly eradicated polio; prevents measles, tetanus, diphtheria. In Malawi, EPI (Expanded Programme on Immunisation) gives BCG, polio, DPT, measles, etc., free.\n\nHIV and Immunity\n\nHIV infects helper T cells (CD4 cells). It replicates inside them and destroys them. As CD4 count falls, immune system fails. The person becomes vulnerable to opportunistic infections like TB, pneumonia. This stage is AIDS.\n\nPrevention: Abstinence, faithfulness, condoms (ABC), male circumcision, avoid sharing needles, test and treat.",
    "summary": "First line: skin, mucus, cilia, acid, tears. Second: phagocytes, inflammation, fever. Third: B cells (antibodies), T cells (helper and killer). Vaccination gives artificial active immunity. HIV destroys helper T cells, causing AIDS.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "EPI Vaccination",
        "description": "Free childhood vaccines prevent TB, measles, polio."
      },
      {
        "title": "HIV Testing Campaign",
        "description": "Mobile clinics promote testing and ART."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of immunity is obtained by receiving antibodies through breast milk?",
        "answer": "Natural passive immunity",
        "hint": "From mother, not long-term."
      },
      {
        "question": "Which white blood cell produces antibodies?",
        "answer": "B lymphocytes (B cells)",
        "hint": "B for antibody production."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Rates of Reaction",
    "lessonNumber": 1,
    "lessonTitle": "Factors Affecting Reaction Rates",
    "lessonId": "chemistry-f4-reaction-rates-1",
    "order": 44,
    "learningObjectives": [
      "Define rate of reaction and explain factors affecting it (concentration, temperature, surface area, catalyst)",
      "Interpret graphs of reaction progress (concentration vs time, volume vs time)"
    ],
    "introduction": "Some reactions happen in a flash; others take ages. Why? The RATE OF REACTION depends on several factors. Today, we will learn what makes reactions faster or slower, and how we can control them – important in cooking, industry, and even in your body.",
    "keyPoints": [
      "Rate of reaction = amount of reactant used or product formed per unit time.",
      "Factors: concentration (higher → faster), temperature (higher → faster), surface area (smaller particles → faster), catalyst (provides alternative pathway with lower activation energy).",
      "Collision theory: particles must collide with sufficient energy (activation energy) and correct orientation.",
      "Catalyst speeds up reaction without being consumed; lowers activation energy.",
      "Graphs: steeper slope = faster rate; plateau when reaction finishes."
    ],
    "detailedContent": "What is Rate of Reaction?\n\nRate measures how quickly reactants are used up or products are formed. It can be expressed as:\n- Change in mass (g/s)\n- Change in volume of gas (cm³/s)\n- Change in concentration (mol/dm³/s)\n\nCollision Theory\n\nFor a reaction to occur, particles must:\n1. Collide with each other.\n2. Have enough energy (at least the activation energy, Ea).\n3. Have the correct orientation.\n\nFactors Affecting Rate\n\n1. Concentration (for solutions) or pressure (for gases)\nHigher concentration means more particles in the same volume → more frequent collisions → faster rate.\nExample: Marble chips (CaCO3) react faster with 2M HCl than with 0.5M HCl (more CO2 gas produced in same time).\n\n2. Temperature\nIncreasing temperature gives particles more kinetic energy. They move faster (more collisions) and a greater proportion have energy > Ea (more successful collisions). Reaction rate roughly doubles for every 10°C rise.\n\n3. Surface area (solid particle size)\nPowdered solid has larger surface area than a single lump. More particles exposed for collisions → faster rate.\nExample: Powdered chalk reacts faster with acid than large chips.\n\n4. Catalyst\nA catalyst speeds up a reaction without being consumed. It provides an alternative reaction pathway with lower activation energy. Catalysts are very specific – manganese(IV) oxide for hydrogen peroxide decomposition, platinum for car exhaust converters. Enzymes are biological catalysts.\n\nExperiments to Measure Rate\n\nMagnesium with hydrochloric acid: Mg + 2HCl → MgCl2 + H2.\nMeasure volume of hydrogen gas produced in a gas syringe at regular intervals. Plot volume vs time. Slope = rate.\n\nGraph Interpretation\n\nOn a concentration vs time graph:\n- Steep initial slope = fastest rate (reactants fresh).\n- Slope decreases as reactants used up.\n- Line becomes horizontal when reaction stops.\n\nOn a volume vs time graph for gas:\n- Rapid rise initially, then levels off.\n- Changing a factor (higher temp) makes initial slope steeper and plateau reached faster.\n\nActivation Energy and Catalysts\n\nActivation energy is the minimum energy needed for a reaction to occur. A catalyst lowers the activation energy, so a greater fraction of particles have enough energy. The catalyst does not change the final products or enthalpy change.\n\nMalawi Example: Adding a catalyst (manganese dioxide) to hydrogen peroxide makes it decompose faster, producing oxygen gas. This is used in some school demonstrations. In the body, enzymes catalyse digestion.",
    "summary": "Rate = amount/time. Factors: concentration (faster if higher), temperature (faster if higher), surface area (smaller particles faster), catalyst (speeds without being consumed). Collision theory: particles must collide with enough energy and correct orientation.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Digestion",
        "description": "Enzymes are biological catalysts speeding up food breakdown."
      },
      {
        "title": "Using Manganese Dioxide",
        "description": "Speeds up hydrogen peroxide decomposition in labs."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why does powdered chalk react faster with acid than whole pieces?",
        "answer": "Powder has larger surface area, so more collisions between particles.",
        "hint": "Surface area increases exposure."
      },
      {
        "question": "How does a catalyst affect activation energy?",
        "answer": "It lowers activation energy, providing an easier pathway.",
        "hint": "Makes it easier for particles to react."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Newton's Laws of Motion",
    "lessonNumber": 1,
    "lessonTitle": "Newton’s Three Laws and Applications",
    "lessonId": "physics-f4-newton-laws-1",
    "order": 45,
    "learningObjectives": [
      "State Newton’s three laws of motion",
      "Apply Newton’s second law (F = ma) to solve problems"
    ],
    "introduction": "Sir Isaac Newton gave us three laws that explain almost all motion – from a ball rolling on the ground to a rocket launching into space. Today, we will learn these fundamental laws and see them in action around us.",
    "keyPoints": [
      "First law (Law of Inertia): An object remains at rest or in uniform motion unless acted upon by an external force.",
      "Second law: F = ma (force = mass × acceleration).",
      "Third law: For every action, there is an equal and opposite reaction.",
      "Inertia is the tendency of an object to resist changes in its motion.",
      "Units: Force in newtons (N), mass in kg, acceleration in m/s²."
    ],
    "detailedContent": "Newton’s First Law (Law of Inertia)\n\n\"An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an external force.\"\n\nExample 1: A book on a table remains at rest because no net force acts on it. If you push it, it moves.\n\nExample 2: A passenger in a minibus lurches forward when the minibus stops suddenly – the passenger’s body tends to continue moving (inertia).\n\nInertia is related to mass: more massive objects have more inertia (harder to start or stop).\n\nNewton’s Second Law (F = ma)\n\nThe acceleration (a) of an object is directly proportional to the net force (F) acting on it and inversely proportional to its mass (m).\n\nF = m × a\n\nExample: A 1000 kg car accelerates at 2 m/s². What force is needed?\nF = 1000 × 2 = 2000 N.\n\nIf the same force is applied to a 2000 kg truck, acceleration = F/m = 2000/2000 = 1 m/s² (half the acceleration because mass doubled).\n\nNewton’s Third Law (Action-Reaction)\n\n\"For every action force, there is an equal and opposite reaction force.\"\n\nAction-reaction pairs act on different objects. They do not cancel each other.\n\nExamples:\n- When you sit on a chair, your weight pushes down (action). The chair pushes up with an equal force (reaction).\n- When a bird flaps its wings, wings push air down (action); air pushes wings up (reaction) – bird flies.\n- A boat propeller pushes water backward (action); water pushes boat forward (reaction).\n\nMalawi Example:\n- A person jumping off a small boat onto a pier: They push the boat backward (action), and the boat pushes them forward (reaction).\n- A farmer using a hoe: The hoe pushes soil (action); soil pushes back on the hoe (reaction) – you feel it in your hands.",
    "summary": "Newton’s first law: inertia. Second law: F = ma. Third law: action-reaction pairs. These laws govern all motion and are essential for understanding forces and dynamics.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Minibus Sudden Stop",
        "description": "Passengers lurch forward due to inertia."
      },
      {
        "title": "Rowing a Boat",
        "description": "Paddles push water backward; water pushes boat forward (third law)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A 1500 kg car accelerates at 3 m/s². Calculate the net force.",
        "answer": "4500 N",
        "hint": "F = 1500 × 3 = 4500 N"
      },
      {
        "question": "A 50 kg person jumps off a 5 kg boat. If the person exerts a force of 200 N on the boat, what force does the boat exert on the person?",
        "answer": "200 N",
        "hint": "Third law – equal and opposite."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Characteristics of Living Things",
    "lessonNumber": 1,
    "lessonTitle": "The Seven Life Processes (MRS GREN)",
    "lessonId": "biology-f1-characteristics-1",
    "order": 15,
    "learningObjectives": [
      "List the seven characteristics of living things",
      "Explain each characteristic with examples"
    ],
    "introduction": "How do you know that a maize plant is alive but a stone is not? Living things share certain processes that non-living things do not have. Today, we will learn the SEVEN CHARACTERISTICS OF LIVING THINGS and use them to identify life around us.",
    "keyPoints": [
      "Movement: change of position or internal movement.",
      "Respiration: release of energy from food.",
      "Sensitivity: detect and respond to changes in the environment.",
      "Growth: increase in size or number of cells.",
      "Reproduction: producing offspring of the same kind.",
      "Excretion: removal of waste products.",
      "Nutrition: obtaining and using food for energy and growth."
    ],
    "detailedContent": "The Seven Life Processes\n\nTo be called living, an organism must carry out all seven processes.\n\n1. MOVEMENT: Living things can change position or move parts of themselves. Animals move whole bodies – a chicken walking, a fish swimming. Plants move slowly – a sunflower turns towards the sun.\n\n2. RESPIRATION: The process of releasing energy from food. It happens in every living cell. Humans and animals breathe in oxygen, which helps break down glucose to release energy. Plants also respire.\n\n3. SENSITIVITY (IRRITABILITY): Living things detect changes in their environment (stimuli) and respond. If you touch a hot stove, you pull your hand away. A maize plant grows towards light.\n\n4. GROWTH: Living things increase in size and complexity. A baby goat becomes a big goat. A maize seed germinates and becomes a tall plant.\n\n5. REPRODUCTION: Living things produce offspring of their own kind. A chicken lays eggs that hatch into chicks. A maize plant produces seeds.\n\n6. EXCRETION: Living things produce waste products that must be removed. Excretion is getting rid of metabolic wastes. Humans excrete urine and exhale carbon dioxide. Plants excrete oxygen.\n\n7. NUTRITION: Living things need food to provide energy and building materials. Plants make their own food by photosynthesis. Animals eat plants or other animals.\n\nNon-living things do not perform all these processes. A car moves but does not grow, reproduce, or excrete.",
    "summary": "Living things carry out Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, and Nutrition (MRS GREN). Non-living things do not perform all these processes.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Chicken Life",
        "description": "Observe a chicken – it moves, eats, breathes, responds, grows, reproduces, and excretes."
      },
      {
        "title": "Maize Plant",
        "description": "It grows, reproduces by seeds, responds to light, respires, and takes up nutrients."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name three characteristics of living things.",
        "answer": "Movement, respiration, growth (any three)",
        "hint": "Remember MRS GREN."
      },
      {
        "question": "Why is a dead tree not considered living?",
        "answer": "It no longer carries out any of the life processes.",
        "hint": "It once did, but now stopped."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Classification of Living Things",
    "lessonNumber": 1,
    "lessonTitle": "Hierarchy and Binomial Nomenclature",
    "lessonId": "biology-f1-classification-1",
    "order": 16,
    "learningObjectives": [
      "Explain why living things are classified and define the hierarchy (Kingdom to Species)",
      "Use a simple dichotomous key to identify organisms"
    ],
    "introduction": "There are millions of living things on Earth. To study them, scientists group them into categories. This is CLASSIFICATION. Today, we will learn the hierarchy of classification and how to use a DICHOTOMOUS KEY to identify organisms.",
    "keyPoints": [
      "Why classify: to organise, show relationships, give universal names (avoid confusion).",
      "Hierarchy: Kingdom, Phylum, Class, Order, Family, Genus, Species (King Philip Came Over For Great Soup).",
      "Species: group that can interbreed to produce fertile offspring. Human: Homo sapiens.",
      "Binomial nomenclature: two-part scientific name (Genus species), e.g., Zea mays (maize).",
      "Dichotomous key: series of paired choices that lead to identification."
    ],
    "detailedContent": "Why Classification?\n\nIf you ask for \"chimanga\" in Chichewa, everyone knows it is maize. But in other languages, the same plant has different names. Scientists use a universal naming system to avoid confusion. Classification also shows how organisms are related.\n\nHierarchy of Classification\n\nThere are seven main levels (taxa), from broadest to most specific:\n\n- Kingdom (e.g., Animalia)\n- Phylum (e.g., Chordata)\n- Class (e.g., Mammalia)\n- Order (e.g., Primates)\n- Family (e.g., Hominidae)\n- Genus (e.g., Homo)\n- Species (e.g., sapiens)\n\nFull scientific name: Homo sapiens (humans). For maize: Zea mays.\n\nBinomial Nomenclature\n\nThe scientific name has two parts: Genus (capital first letter) and species (lowercase), both italicised or underlined.\n\nExamples from Malawi:\n- Maize: Zea mays\n- Groundnut: Arachis hypogaea\n- Chicken: Gallus gallus\n\nDichotomous Key\n\nA dichotomous key asks a series of questions, each with two choices. By answering correctly, you identify the organism.\n\nExample simple key for animals:\n\n1. Does it have a backbone? Yes → go to 2. No → go to 5.\n2. Does it have hair? Yes → Mammal. No → go to 3.\n3. Does it have feathers? Yes → Bird. No → go to 4.\n4. Does it have scales? Yes → Fish. No → Reptile.\n5. Does it have six legs? Yes → Insect. No → go to 6.\n6. Does it have eight legs? Yes → Spider. No → Worm.\n\nYou can make your own key for local organisms.",
    "summary": "Classification groups organisms into Kingdom, Phylum, Class, Order, Family, Genus, Species. Binomial nomenclature gives each species a unique two-part name. Dichotomous keys use paired choices to identify unknown organisms.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Maize Scientific Name",
        "description": "Zea mays – same name used by scientists worldwide."
      },
      {
        "title": "Dichotomous Key for Insects",
        "description": "Students use a key to identify grasshoppers, ants, and beetles."
      }
    ],
    "practiceQuestions": [
      {
        "question": "In the scientific name Zea mays, what does Zea represent?",
        "answer": "The genus",
        "hint": "First part is genus."
      },
      {
        "question": "Why do scientists use scientific names instead of common names?",
        "answer": "To have a universal language that avoids confusion across languages and regions.",
        "hint": "Common names differ by place."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Food Chains and Food Webs",
    "lessonNumber": 1,
    "lessonTitle": "Energy Flow, Producers, Consumers, Decomposers",
    "lessonId": "biology-f1-food-chains-1",
    "order": 17,
    "learningObjectives": [
      "Define producer, consumer, decomposer, herbivore, carnivore, omnivore",
      "Construct a simple food chain and food web"
    ],
    "introduction": "Who eats whom in nature? The energy from the sun flows from plants to animals, and then to other animals. This is a FOOD CHAIN. Today, we will learn how to draw food chains and webs.",
    "keyPoints": [
      "Producers: make their own food by photosynthesis (green plants).",
      "Consumers: eat other organisms. Herbivores eat plants; carnivores eat meat; omnivores eat both.",
      "Decomposers: break down dead matter (bacteria, fungi).",
      "Food chain: shows one path of energy, e.g., grass → grasshopper → bird → eagle.",
      "Food web: many interconnected food chains.",
      "Each step is a trophic level. About 10% of energy transfers to the next level."
    ],
    "detailedContent": "Understanding Energy Flow\n\nAll life depends on the sun. Green plants (producers) capture solar energy and convert it into chemical energy (food).\n\nProducers, Consumers, Decomposers\n\n- Producers: Plants, algae. They make food using sunlight.\n- Consumers: Animals that eat producers or other consumers.\n  - Primary consumers: herbivores (eat plants). Example: grasshopper, cow.\n  - Secondary consumers: carnivores that eat herbivores. Example: chicken (eats grasshopper).\n  - Tertiary consumers: carnivores that eat other carnivores. Example: eagle.\n  - Omnivores: eat both plants and animals. Example: human, pig.\n- Decomposers: Fungi, bacteria. Break down dead organisms and waste, returning nutrients to soil.\n\nFood Chains\n\nA food chain shows one path. Arrows point in the direction of energy flow (from food to eater).\n\nExample from Malawi maize field:\nMaize (producer) → grasshopper (primary consumer) → chicken (secondary consumer) → hawk (tertiary consumer)\n\nFood Webs\n\nIn nature, most animals eat more than one type of food. A food web is many food chains connected.\n\nExample: In a village pond:\n- Algae eaten by small fish and tadpoles.\n- Small fish eaten by larger fish and kingfisher.\n- Tadpoles eaten by large fish and dragonfly nymphs.\n- All these connecting chains form a web.\n\nTrophic Levels and Energy Loss\n\nEach level is a trophic level. About 90% of energy is used for life processes. Only about 10% goes to the next level. This is why there are fewer top predators than plants.",
    "summary": "Producers make food; consumers eat others; decomposers recycle. Food chains show one energy path; webs show interconnections. Only about 10% of energy transfers between levels.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Maize Field Chain",
        "description": "Maize → grasshopper → chicken → hawk."
      },
      {
        "title": "Lake Malawi Web",
        "description": "Algae → small fish → chambo → otter."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the role of decomposers in a food chain?",
        "answer": "Break down dead organisms and waste, returning nutrients to the soil.",
        "hint": "They are recyclers."
      },
      {
        "question": "Why are there usually more zebra than lions in an ecosystem?",
        "answer": "Energy is lost at each trophic level, so fewer high-level consumers can be supported.",
        "hint": "Only 10% energy transfer."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Nutrition in Humans",
    "lessonNumber": 1,
    "lessonTitle": "Food Nutrients, Tests, and Balanced Diet",
    "lessonId": "biology-f1-human-nutrition-1",
    "order": 18,
    "learningObjectives": [
      "List the six classes of food nutrients and their functions",
      "Carry out food tests for starch, reducing sugar, protein, and fat"
    ],
    "introduction": "You eat nsima, vegetables, fish, and fruit. These foods contain NUTRIENTS that your body needs. Today, we will learn the six classes of nutrients, how to test for them, and what happens when you do not get enough.",
    "keyPoints": [
      "Carbohydrates: energy source. Test: iodine turns blue-black.",
      "Proteins: growth and repair. Test: Biuret turns purple.",
      "Fats (lipids): energy store, insulation. Test: paper spot (translucent) or Sudan III red.",
      "Vitamins: needed in small amounts; C prevents scurvy; A for vision.",
      "Minerals: calcium (bones), iron (haemoglobin), iodine (thyroid).",
      "Water: needed for all life processes.",
      "Balanced diet: contains all nutrients in correct proportions.",
      "Deficiency diseases: scurvy (vitamin C), rickets (vitamin D/calcium), kwashiorkor (protein), anaemia (iron), goitre (iodine)."
    ],
    "detailedContent": "The Six Classes of Nutrients\n\n1. Carbohydrates: Provide energy. Sources: nsima, bread, rice. Test: Iodine solution turns from brown to blue-black if starch is present.\n\n2. Proteins: Build and repair body tissues. Sources: beans, fish, meat, eggs. Test: Biuret test (sodium hydroxide + copper sulphate) turns purple.\n\n3. Fats (Lipids): Long-term energy store; insulation; protect organs. Sources: cooking oil, groundnuts. Test: Rub on paper – translucent spot; or Sudan III stain turns red.\n\n4. Vitamins: Regulate body processes. Vitamin A (carrots) for eyesight; Vitamin C (oranges) prevents scurvy; Vitamin D (sunlight, eggs) for bones.\n\n5. Minerals: Calcium (milk) for bones; Iron (meat, beans) for haemoglobin (prevents anaemia); Iodine (fish, iodised salt) for thyroid (prevents goitre).\n\n6. Water: Solvent for reactions, transport, temperature regulation.\n\nFood Tests – Procedure\n\nStarch test: Add iodine solution to food. Blue-black colour = starch present.\n\nReducing sugar test (Benedict's test): Add Benedict's solution, heat in water bath. Brick-red precipitate = sugar present.\n\nProtein test (Biuret): Add dilute copper sulphate, then sodium hydroxide. Purple colour = protein.\n\nFat test: Rub food on paper. Leave to dry. Translucent spot = fat.\n\nBalanced Diet\n\nA balanced diet contains all six nutrients in the right amounts. The proportion depends on age, gender, and activity level.\n\nDeficiency Diseases\n\n- Kwashiorkor: Protein deficiency – swollen belly, thin arms.\n- Anaemia: Iron deficiency – tiredness, pale skin.\n- Scurvy: Vitamin C deficiency – bleeding gums.\n- Rickets: Vitamin D/calcium deficiency – soft bones.\n- Goitre: Iodine deficiency – enlarged thyroid gland.",
    "summary": "Six nutrients: carbohydrates (energy), proteins (growth), fats (storage), vitamins (regulation), minerals (structure), water (solvent). Food tests identify them. Balanced diet prevents deficiency diseases.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Nsima and Beans",
        "description": "Carbohydrate + protein – a common balanced meal."
      },
      {
        "title": "Goitre in Malawi",
        "description": "Iodine deficiency caused swollen thyroid; iodised salt now common."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What nutrient is most important for growth and repair of body tissues?",
        "answer": "Protein",
        "hint": "Found in beans and fish."
      },
      {
        "question": "What colour change indicates starch in a food sample after adding iodine?",
        "answer": "Brown to blue-black",
        "hint": "Iodine test."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Digestive System",
    "lessonNumber": 1,
    "lessonTitle": "Parts and Functions of the Human Digestive System",
    "lessonId": "biology-f1-digestive-1",
    "order": 19,
    "learningObjectives": [
      "Identify the main parts of the human digestive system and describe their functions",
      "Distinguish between physical digestion and chemical digestion"
    ],
    "introduction": "The food you eat is not in a form your cells can use. The DIGESTIVE SYSTEM breaks food into tiny molecules that can be absorbed into the blood. Today, we will travel through the digestive tract and learn what happens at each stop.",
    "keyPoints": [
      "Mouth: teeth (physical), saliva (amylase breaks starch).",
      "Oesophagus: carries food to stomach by peristalsis.",
      "Stomach: churns food; gastric juice (HCl, pepsin) starts protein digestion.",
      "Liver: produces bile (emulsifies fats). Pancreas: produces digestive enzymes.",
      "Small intestine: main digestion and absorption. Villi increase surface area.",
      "Large intestine: absorbs water and minerals, forms faeces.",
      "Physical digestion: chewing, churning – increases surface area.",
      "Chemical digestion: enzymes break bonds.",
      "End products: glucose (carbohydrates), amino acids (proteins), fatty acids + glycerol (fats)."
    ],
    "detailedContent": "The Journey of Food\n\nMouth: Digestion begins here. Teeth cut and grind food (physical). Saliva contains AMYLASE, which starts breaking starch into maltose. The tongue shapes food into a ball (bolus).\n\nOesophagus (gullet): Muscular tube connecting mouth to stomach. Muscles contract in waves (PERISTALSIS) to push the bolus down.\n\nStomach: A muscular bag. It churns food (physical). Gastric glands secrete GASTRIC JUICE: hydrochloric acid (kills bacteria, unfolds proteins) and PEPSIN (breaks proteins into smaller peptides). After 2-4 hours, food becomes a liquid (chyme).\n\nPancreas and Liver (accessory organs):\n- Liver produces BILE, stored in gall bladder. Bile EMULSIFIES fats (not an enzyme).\n- Pancreas produces pancreatic juice containing: amylase, trypsin, lipase.\n\nSmall Intestine (duodenum, jejunum, ileum): About 6 metres long. Most digestion and absorption occur here. The inner surface has millions of tiny finger-like projections called VILLI. Villi absorb nutrients into blood.\n\nLarge Intestine (colon): Water and minerals are absorbed. Remaining undigested material becomes solid FAECES.\n\nRectum: Stores faeces. Anus: Opens to expel faeces.\n\nPhysical vs Chemical Digestion\n\n- Physical digestion: breaking food into smaller pieces (chewing, churning) – increases surface area but does not change chemical composition.\n- Chemical digestion: enzymes break chemical bonds, changing large molecules into smaller, absorbable molecules.\n\nEnd Products: Starch → glucose; Proteins → amino acids; Fats → fatty acids + glycerol.",
    "summary": "Digestion starts in mouth, continues in stomach, then small intestine. Villi absorb nutrients. Physical digestion breaks food into smaller pieces; chemical digestion uses enzymes to break molecules.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Nsima Digestion",
        "description": "Starch in nsima is broken down by amylase into glucose."
      },
      {
        "title": "Villi in Small Intestine",
        "description": "Increase surface area for absorption of nutrients."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the function of villi in the small intestine?",
        "answer": "They increase surface area for absorption of nutrients into the blood.",
        "hint": "Finger-like projections."
      },
      {
        "question": "What is the end product of protein digestion?",
        "answer": "Amino acids",
        "hint": "Proteins are broken into building blocks."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Introduction to Chemistry",
    "lessonNumber": 1,
    "lessonTitle": "What is Chemistry? Branches and Laboratory Safety",
    "lessonId": "chemistry-f1-intro-1",
    "order": 20,
    "learningObjectives": [
      "Define chemistry and state its importance in everyday life",
      "State and apply general laboratory safety rules"
    ],
    "introduction": "Welcome to Chemistry! Have you ever wondered why iron rusts, how soap cleans, or how your body digests food? Chemistry explains these and more. Today, we will learn what chemistry is and how to stay safe in the laboratory.",
    "keyPoints": [
      "Chemistry is the study of matter, its properties, composition, and the changes it undergoes.",
      "Branches: organic (carbon compounds), inorganic (non-carbon), physical (energy), analytical (identification), environmental (pollution).",
      "Laboratory apparatus: beaker, test tube, measuring cylinder, Bunsen burner, tripod, funnel, filter paper, balances.",
      "Safety rules: wear goggles and lab coat, tie back hair, no eating/drinking, report spills, wash hands, know first aid kit location.",
      "Hazard symbols: flammable, toxic, corrosive, irritant, explosive."
    ],
    "detailedContent": "What is Chemistry?\n\nChemistry is the branch of science that studies the composition, structure, properties, and changes of matter. Everything around you – the air, water, clothes, food – is made of chemicals.\n\nImportance of Chemistry in Malawi\n\n- Agriculture: Fertilisers (NPK, urea) and pesticides.\n- Medicine: Pharmaceuticals, vaccines.\n- Water treatment: Chlorine kills germs.\n- Soap making: Saponification of fats with alkali.\n- Food preservation: Salt, sugar, chemical preservatives.\n\nBranches of Chemistry\n\n- Organic chemistry: Carbon compounds (plastics, fuels, drugs, proteins).\n- Inorganic chemistry: Non-carbon compounds (metals, salts, acids, bases).\n- Physical chemistry: Energy changes, reaction rates.\n- Analytical chemistry: Identification and quantification of substances.\n- Environmental chemistry: Study of chemicals in the environment, pollution.\n\nCommon Laboratory Apparatus\n\n- Beaker: hold and heat liquids.\n- Test tube: small-scale reactions.\n- Measuring cylinder: measure liquid volumes.\n- Bunsen burner: heating.\n- Tripod and wire gauze: support during heating.\n- Funnel and filter paper: filtration.\n- Balance: measure mass.\n\nLaboratory Safety Rules\n\nWear safety goggles at all times. Lab coat protects clothing. Tie back long hair. No eating or drinking in the lab. Never taste any chemical. Report all spills and accidents immediately. Know location of first aid kit, fire extinguisher, and fire blanket. Wash hands after lab work.\n\nHazard Symbols\n\n- Flame: Flammable – keep away from heat.\n- Skull and crossbones: Toxic – avoid ingestion, inhalation, skin contact.\n- Corrosion: Corrosive – destroys skin and materials.\n- Exclamation mark: Irritant – may cause skin irritation.\n- Exploding bomb: Explosive.\n\nHow to smell a chemical: Never put nose directly to container. Waft vapour toward nose with hand.",
    "summary": "Chemistry is study of matter and its changes. Branches: organic, inorganic, physical, analytical, environmental. Follow safety rules: goggles, no eating, report accidents. Recognise hazard symbols.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Soap Making",
        "description": "Sodium hydroxide (caustic) used – must wear goggles and gloves."
      },
      {
        "title": "Fertiliser Production",
        "description": "NPK fertilisers made from chemical reactions."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which branch of chemistry studies carbon compounds?",
        "answer": "Organic chemistry",
        "hint": "Carbon is the basis of organic chemistry."
      },
      {
        "question": "What should you do if you spill a chemical on your skin?",
        "answer": "Immediately wash with plenty of water and tell the teacher.",
        "hint": "Do not wait."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Composition of Matter",
    "lessonNumber": 1,
    "lessonTitle": "Elements, Compounds, Mixtures and Separation Methods",
    "lessonId": "chemistry-f1-matter-1",
    "order": 21,
    "learningObjectives": [
      "Distinguish between elements, compounds, and mixtures",
      "Describe methods of separating mixtures (filtration, distillation, chromatography, crystallisation)"
    ],
    "introduction": "Everything around you is made of ELEMENTS, COMPOUNDS, or MIXTURES. But what is the difference? How can we separate mixtures into pure substances? Today, we will learn the building blocks of matter and how to separate them.",
    "keyPoints": [
      "Element: pure substance made of one type of atom (cannot be broken down).",
      "Compound: two or more elements chemically combined in fixed ratio.",
      "Mixture: two or more substances physically combined (separable by physical methods).",
      "Symbols of first 20 elements: H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca.",
      "Separation methods: filtration (solid from liquid), distillation (separate liquids), chromatography (dissolved substances), crystallisation (solid from solution)."
    ],
    "detailedContent": "Elements, Compounds, and Mixtures\n\nElement: A pure substance that cannot be broken down into simpler substances by chemical means. All atoms are the same. Examples: oxygen (O2), iron (Fe), aluminium (Al).\n\nCompound: A substance formed when two or more elements combine chemically in a fixed ratio. Properties are different from the elements. Examples: water (H2O), sodium chloride (NaCl), carbon dioxide (CO2).\n\nMixture: Two or more substances physically combined, not chemically. Components retain their properties and can be separated by physical means. Examples: air, salt water, soil.\n\nComparison:\n\n- Element: one type of atom; cannot be separated chemically.\n- Compound: two or more elements combined; separated by chemical reactions.\n- Mixture: any proportions; separated by physical methods.\n\nSymbols of First 20 Elements\n\n1 H Hydrogen, 2 He Helium, 3 Li Lithium, 4 Be Beryllium, 5 B Boron, 6 C Carbon, 7 N Nitrogen, 8 O Oxygen, 9 F Fluorine, 10 Ne Neon, 11 Na Sodium, 12 Mg Magnesium, 13 Al Aluminium, 14 Si Silicon, 15 P Phosphorus, 16 S Sulphur, 17 Cl Chlorine, 18 Ar Argon, 19 K Potassium, 20 Ca Calcium.\n\nSeparation Techniques\n\n1. Filtration: Separates insoluble solid from liquid. Example: sand from water. Use filter paper and funnel.\n\n2. Crystallisation: Evaporating solution to leave solid crystals. Example: obtaining salt from sea water.\n\n3. Distillation: Separates liquids with different boiling points. Example: separating ethanol from water.\n\n4. Chromatography: Separates components of a mixture (e.g., inks, dyes) based on their different movement rates on paper.\n\n5. Decantation: Pouring off liquid after solid settles.\n\n6. Centrifugation: Spinning tube forces denser particles to bottom. Used in medical labs.",
    "summary": "Element: one atom type. Compound: elements chemically combined in fixed ratio. Mixture: physical combination. Separation methods: filtration, distillation, crystallisation, chromatography, decantation, centrifugation.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Lake Chilwa Salt",
        "description": "Sun evaporates water – crystallisation."
      },
      {
        "title": "Maize and Beans",
        "description": "Physical mixture – can be separated by hand."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the symbol for sodium?",
        "answer": "Na",
        "hint": "From Latin natrium."
      },
      {
        "question": "Which separation method would you use to obtain pure water from a salt solution?",
        "answer": "Distillation",
        "hint": "Water boils, salt stays behind."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Atomic Structure",
    "lessonNumber": 1,
    "lessonTitle": "Protons, Neutrons, Electrons, and Isotopes",
    "lessonId": "chemistry-f1-atomic-structure-1",
    "order": 22,
    "learningObjectives": [
      "Describe the structure of an atom (nucleus, protons, neutrons, electrons)",
      "Define atomic number (Z), mass number (A), and isotopes"
    ],
    "introduction": "The word \"atom\" comes from Greek meaning \"indivisible\". But atoms are made of smaller particles! Today, we will look inside the atom and learn about protons, neutrons, and electrons – and why isotopes matter.",
    "keyPoints": [
      "Atom structure: Tiny, dense nucleus (protons + neutrons) surrounded by electrons in shells.",
      "Proton: positively charged (+1), mass 1, in nucleus.",
      "Neutron: no charge (0), mass 1, in nucleus.",
      "Electron: negatively charged (-1), mass 1/1836, in shells.",
      "Atomic number (Z) = number of protons (identifies element).",
      "Mass number (A) = protons + neutrons.",
      "Isotopes: same number of protons but different number of neutrons.",
      "Examples: Carbon-12 (6p,6n), Carbon-14 (6p,8n); Chlorine-35 (17p,18n), Chlorine-37 (17p,20n)."
    ],
    "detailedContent": "Structure of an Atom\n\nAn atom consists of a tiny central NUCLEUS surrounded by ELECTRONS moving in shells (energy levels). The nucleus contains PROTONS and NEUTRONS.\n\nParticle charges and masses:\n- Proton: +1, mass 1\n- Neutron: 0, mass 1\n- Electron: -1, mass 1/1836 (very small)\n\nMost of the atom is empty space.\n\nAtomic Number (Z)\n\nThe atomic number is the number of protons in the nucleus. This defines the element. For a neutral atom, number of electrons = number of protons.\n\nExample: Carbon has atomic number 6 → 6 protons, 6 electrons.\n\nMass Number (A)\n\nMass number = protons + neutrons. To find number of neutrons: neutrons = mass number - atomic number.\n\nExample: Sodium atom has atomic number 11 and mass number 23. Protons=11, electrons=11, neutrons=23-11=12.\n\nIsotopes\n\nIsotopes are atoms of the same element (same number of protons) but different number of neutrons.\n\n- Carbon-12: 6 protons, 6 neutrons (98.9%).\n- Carbon-14: 6 protons, 8 neutrons (radioactive, used in carbon dating).\n\n- Chlorine-35: 17 protons, 18 neutrons (75%).\n- Chlorine-37: 17 protons, 20 neutrons (25%).\nAverage atomic mass of chlorine is about 35.5.\n\nElectron Configuration (First 20 elements)\n\nElectrons fill shells: Shell 1 (K) max 2 electrons, Shell 2 (L) max 8, Shell 3 (M) max 8 (for first 20).\n\n- Hydrogen: 1\n- Helium: 2\n- Lithium: 2,1\n- Carbon: 2,4\n- Oxygen: 2,6\n- Sodium: 2,8,1\n- Chlorine: 2,8,7\n- Calcium: 2,8,8,2",
    "summary": "Atom: nucleus (protons + neutrons) + electrons in shells. Atomic number (Z) = protons. Mass number (A) = protons + neutrons. Isotopes = same Z, different A.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Carbon Dating",
        "description": "Carbon-14 used to date Chongoni rock art."
      },
      {
        "title": "Chlorine in Water",
        "description": "Chlorine-35 and -37 mix, used for disinfection."
      }
    ],
    "practiceQuestions": [
      {
        "question": "An atom has 17 protons and 18 neutrons. What is its mass number?",
        "answer": "35",
        "hint": "17 + 18 = 35"
      },
      {
        "question": "What is the electron configuration of oxygen?",
        "answer": "2,6",
        "hint": "Oxygen has 8 electrons."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Periodic Table",
    "lessonNumber": 1,
    "lessonTitle": "Arrangement of Elements and Group Properties",
    "lessonId": "chemistry-f1-periodic-table-1",
    "order": 23,
    "learningObjectives": [
      "Explain how elements are arranged in the periodic table (periods, groups)",
      "Describe the properties of metals, non-metals, and metalloids"
    ],
    "introduction": "The periodic table is like a map of all elements. It organises them by their properties and helps us predict how they behave. Today, we will learn how to read the periodic table and the patterns in groups.",
    "keyPoints": [
      "Arranged by increasing atomic number (number of protons).",
      "Periods: horizontal rows – same number of electron shells.",
      "Groups: vertical columns – same number of valence electrons, similar chemical properties.",
      "Metals: left and centre (good conductors, shiny, malleable).",
      "Non-metals: right side (poor conductors, brittle).",
      "Metalloids: along zigzag line (B, Si, Ge, As, Sb, Te) – properties of both.",
      "Group I: alkali metals (very reactive). Group VII: halogens (very reactive non-metals). Group VIII: noble gases (unreactive)."
    ],
    "detailedContent": "The Periodic Table – Structure\n\nThe modern periodic table arranges elements in order of increasing atomic number (Z). The table has:\n\n- Periods: 7 horizontal rows. Row 1: H, He (2 elements). Row 2: Li to Ne (8 elements). Row 3: Na to Ar (8). As you go down a period, electrons fill new shells.\n\n- Groups: 18 vertical columns. Elements in the same group have the same number of electrons in their outer shell (valence electrons) and similar chemical properties.\n\nMetals, Non-metals, and Metalloids\n\n- Metals: Most elements (left side and middle). They are shiny, good conductors of heat and electricity, malleable, ductile. They lose electrons to form positive ions.\n\n- Non-metals: Right side (including hydrogen). They are dull, poor conductors, brittle (if solid). They gain electrons to form negative ions or share electrons.\n\n- Metalloids: On the zigzag line between metals and non-metals (B, Si, Ge, As, Sb, Te). They have properties of both – semiconducting.\n\nImportant Groups\n\nGroup I (IA): Alkali Metals – Li, Na, K, Rb, Cs, Fr. Soft, very reactive, react vigorously with water to produce hydrogen and alkali. Reactivity increases down the group.\n\nGroup VII (17): Halogens – F, Cl, Br, I, At. Non-metals, diatomic molecules (F2, Cl2, Br2, I2). Very reactive, reactivity decreases down the group.\n\nGroup VIII (18): Noble Gases – He, Ne, Ar, Kr, Xe, Rn. Colourless, odourless, unreactive (full outer shell). Used in lighting (neon lights).",
    "summary": "Periodic table arranges elements by atomic number. Periods = same number of shells. Groups = same valence electrons, similar properties. Metals left, non-metals right. Group I (alkali metals) very reactive; Group VII (halogens) very reactive; Group VIII (noble gases) unreactive.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Potassium Fertiliser",
        "description": "KCl (potassium chloride) used for crop growth."
      },
      {
        "title": "Chlorine for Water",
        "description": "Chlorine (halogen) used to disinfect drinking water."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which group of elements is known as alkali metals?",
        "answer": "Group I",
        "hint": "Lithium, sodium, potassium."
      },
      {
        "question": "How does reactivity change as you go down group VII (halogens)?",
        "answer": "Decreases",
        "hint": "Fluorine most reactive, iodine least."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 1",
    "topic": "Introduction to Physics",
    "lessonNumber": 1,
    "lessonTitle": "What is Physics? Branches and Importance",
    "lessonId": "physics-f1-intro-1",
    "order": 24,
    "learningObjectives": [
      "Define physics and identify its main branches",
      "Explain the importance of physics in daily life and national development"
    ],
    "introduction": "Welcome to the world of Physics! Have you ever wondered why a boat floats, why a rainbow appears, or how your phone works? Physics answers these questions. Today, we will discover what physics is and why it is essential for Malawi’s development.",
    "keyPoints": [
      "Physics is the study of matter, energy, and their interactions.",
      "Branches: mechanics, electricity and magnetism, thermodynamics, optics, nuclear physics.",
      "Physics explains natural phenomena and leads to technological inventions.",
      "Careers: engineer, doctor, pilot, teacher, meteorologist, electrician."
    ],
    "detailedContent": "What is Physics?\n\nPhysics is a branch of science that deals with the study of matter, energy, and the relationship between them. It helps us understand how the universe behaves – from the smallest particles to the largest galaxies.\n\nBranches of Physics\n\n- Mechanics: Motion and forces (car moving, bicycle brakes).\n- Electricity and Magnetism: Electric charges, currents, magnets (lightning, generator).\n- Thermodynamics: Heat and temperature (cooking nsima, boiling water, engines).\n- Optics: Light and vision (mirrors, lenses, cameras, rainbows).\n- Nuclear physics: Atomic nuclei and radioactivity (X-rays, nuclear power).\n\nWhy is Physics important for Malawi?\n\n- Agriculture: Physics helps design irrigation systems, solar dryers.\n- Medicine: X-rays, ultrasound, MRI are based on physics.\n- Transport: Cars, bicycles, and aeroplanes work because of mechanics.\n- Energy: Hydroelectric power (like Nkula Falls) uses principles of physics.\n- Communication: Mobile phones and radios use electromagnetism.\n\nCareers in Physics\n\n- Medical doctor (uses X-rays, ultrasound)\n- Engineer (civil, electrical, mechanical)\n- Pilot (understands forces and weather)\n- Meteorologist (weather forecasting uses thermodynamics)\n- Science teacher\n- Electrician\n\nMalawi example: The Shire River hydroelectric plants generate electricity for our homes – this is based on physics principles (kinetic energy of water turning turbines).",
    "summary": "Physics is the study of matter and energy. Its branches include mechanics, electricity, thermodynamics, optics, and nuclear physics. Physics is essential for technology, medicine, and energy production.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Hydroelectric Power",
        "description": "Shire River dams use physics (kinetic energy → electrical energy)."
      },
      {
        "title": "Solar Drying",
        "description": "Farmers use solar energy to dry maize – a thermodynamics application."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which branch of physics deals with the study of light?",
        "answer": "Optics",
        "hint": "Think of \"optic\" nerve, eye, light."
      },
      {
        "question": "Give one reason why physics is important in medicine.",
        "answer": "X-rays, MRI, ultrasound",
        "hint": "Medical imaging uses physics."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 1",
    "topic": "Measurements I",
    "lessonNumber": 1,
    "lessonTitle": "Fundamental Quantities and SI Units",
    "lessonId": "physics-f1-measurements-1",
    "order": 25,
    "learningObjectives": [
      "List fundamental quantities and state their SI units and symbols",
      "Use prefixes (kilo, centi, milli, micro) and convert between units"
    ],
    "introduction": "Measurements are at the heart of physics. How long is your classroom? How heavy is a bag of maize? How hot is the water? To answer these, we use standard units. Today, I will introduce you to the International System of Units (SI) and show you how to convert between different scales.",
    "keyPoints": [
      "Fundamental quantities: length (m), mass (kg), time (s), temperature (K), electric current (A).",
      "SI units are internationally agreed standards.",
      "Prefixes: kilo (k) = 1000, centi (c) = 0.01, milli (m) = 0.001, micro (µ) = 0.000001.",
      "Unit conversion: multiply or divide by powers of 10."
    ],
    "detailedContent": "Fundamental Quantities and Their SI Units\n\n- Length: metre (m)\n- Mass: kilogram (kg)\n- Time: second (s)\n- Temperature: kelvin (K) – also degrees Celsius (°C) in everyday life.\n- Electric current: ampere (A)\n\nPrefixes for Large and Small Numbers\n\n- kilo (k): 1,000 (10³) → 1 km = 1,000 m\n- centi (c): 0.01 (10⁻²) → 1 cm = 0.01 m\n- milli (m): 0.001 (10⁻³) → 1 mm = 0.001 m\n- micro (µ): 0.000001 (10⁻⁶) → 1 µm = 0.000001 m\n\nConverting Units – Step by Step\n\nExample 1: Convert 2.5 km to metres.\nSince 1 km = 1000 m, multiply: 2.5 × 1000 = 2500 m.\n\nExample 2: Convert 150 mm to metres.\nSince 1 mm = 0.001 m, multiply: 150 × 0.001 = 0.15 m. Alternative: 150 ÷ 1000 = 0.15 m.\n\nExample 3 (Malawi market): A 50 kg bag of maize – how many grams?\n1 kg = 1000 g, so 50 × 1000 = 50,000 g.\n\nExample 4 (distance): Distance from Lilongwe to Blantyre is about 300 km. Convert to metres.\n300 × 1000 = 300,000 m.\n\nSimple Conversion Table\n\n- km → m: multiply by 1000\n- m → cm: multiply by 100\n- cm → mm: multiply by 10\n- kg → g: multiply by 1000",
    "summary": "Fundamental quantities are measured in SI units: metre (length), kilogram (mass), second (time). Prefixes like kilo, centi, milli help express very large or small numbers. Conversion involves multiplying or dividing by powers of 10.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Maize bag mass",
        "description": "Convert 50 kg bag to grams."
      },
      {
        "title": "Distance between cities",
        "description": "Convert km to m."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Convert 3.5 km to metres.",
        "answer": "3500 m",
        "hint": "Multiply by 1000"
      },
      {
        "question": "How many millimetres are in 2.3 metres?",
        "answer": "2300 mm",
        "hint": "1 m = 1000 mm"
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 1",
    "topic": "Particulate Nature of Matter",
    "lessonNumber": 1,
    "lessonTitle": "States of Matter and Particle Arrangement",
    "lessonId": "physics-f1-particulate-1",
    "order": 26,
    "learningObjectives": [
      "Identify the three states of matter (solid, liquid, gas)",
      "Describe the arrangement and movement of particles in each state"
    ],
    "introduction": "Everything around you – the air you breathe, the water you drink, the chair you sit on – is made of matter. But did you know that matter exists in three main states: solid, liquid, and gas? Today, we will explore how particles are arranged in each state and what makes them different.",
    "keyPoints": [
      "Solid: particles tightly packed in fixed pattern, only vibrate (fixed shape and volume).",
      "Liquid: particles close but can slide past each other (fixed volume, takes shape of container).",
      "Gas: particles far apart, move randomly (no fixed shape or volume).",
      "Changes of state involve adding or removing energy (heat)."
    ],
    "detailedContent": "The Three States of Matter\n\nSolid:\n- Particle arrangement: tightly packed in regular pattern.\n- Particle movement: vibrate in fixed positions.\n- Shape: fixed.\n- Volume: fixed.\n- Compressibility: very hard to compress.\nExamples: maize grains, stones, iron sheets.\n\nLiquid:\n- Particle arrangement: close together but random.\n- Particle movement: slide past each other.\n- Shape: takes shape of container.\n- Volume: fixed.\n- Compressibility: hard to compress.\nExamples: water, cooking oil.\n\nGas:\n- Particle arrangement: far apart, random.\n- Particle movement: move freely and fast.\n- Shape: fills any container.\n- Volume: expands to fill container.\n- Compressibility: easily compressed.\nExamples: air, steam.\n\nWhy do states change?\nWhen you add heat (energy), particles move faster. In a solid, they vibrate more until they break free – melting. In a liquid, they move even faster and escape as gas – boiling. Removing heat (cooling) does the opposite: gas condenses to liquid, liquid freezes to solid.\n\nMalawi context: Understanding states of matter helps in food preservation (freezing meat, drying fish), cooking (boiling water, melting sugar), and even weather (evaporation of water from Lake Malawi forms clouds).",
    "summary": "Matter exists as solid, liquid, or gas. Solids have fixed shape and volume; liquids have fixed volume but take shape of container; gases have no fixed shape or volume. Particle arrangement and movement explain these properties.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Ice and Water",
        "description": "Observe water change from solid (ice) to liquid to gas (steam) when heated."
      },
      {
        "title": "Cooking Nsima",
        "description": "Nsima starts as solid maize flour, becomes a thick liquid when cooked, then solid again when cooled."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which state of matter has particles that are far apart and move very fast?",
        "answer": "Gas",
        "hint": "Think of air."
      },
      {
        "question": "What happens to the particles of a solid when it melts?",
        "answer": "They gain energy and break free from fixed positions.",
        "hint": "Adding heat increases particle movement."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Soil Composition and Profile",
    "lessonNumber": 1,
    "lessonTitle": "Components of Soil and Soil Profile Layers",
    "lessonId": "agriculture-f2-soil-1",
    "order": 27,
    "learningObjectives": [
      "List the components of soil (mineral matter, organic matter, water, air)",
      "Describe the layers of a soil profile (O, A, B, C horizons)"
    ],
    "introduction": "Soil is not just dirt. It is a living mixture of minerals, organic matter, water, and air. If you dig a deep hole, you will see different layers called a SOIL PROFILE. Today, we will explore what soil is made of and why the layers matter for farming.",
    "keyPoints": [
      "Soil components: mineral particles (45%), organic matter (5%), water (25%), air (25%) – approximate.",
      "Soil profile: vertical section showing horizons.",
      "O horizon: Organic layer (dead leaves, mulch).",
      "A horizon: Topsoil – dark, rich in organic matter, most fertile.",
      "B horizon: Subsoil – lighter colour, less organic matter, may have clay accumulation.",
      "C horizon: Weathered parent rock – unconsolidated rock fragments.",
      "Soil profile affects drainage, fertility, and root depth."
    ],
    "detailedContent": "Soil Components\n\nSoil is made of four main parts:\n\n1. Mineral matter (about 45%): Tiny rock particles – sand, silt, and clay. These come from weathering of rocks.\n2. Organic matter (about 5%): Decayed plants and animals, also called humus. It gives soil dark colour and provides nutrients.\n3. Water (about 25%): Held in pores between particles. Plants absorb water through roots.\n4. Air (about 25%): Fills pores not filled with water. Roots need oxygen.\n\nThe Soil Profile\n\nIf you dig a pit about 1 metre deep, you can see different layers (horizons).\n\n- O horizon (Organic layer): Fresh and partially decomposed leaves, twigs. Found in forests, not always in farm soil.\n- A horizon (Topsoil): Dark, rich in humus. Most plant roots grow here. Most fertile layer.\n- B horizon (Subsoil): Lighter in colour. Contains minerals and clay leached from above. Harder, less organic matter.\n- C horizon (Parent material): Weathered rock fragments. No organic matter.\n\nCharacteristics of Each Horizon\n\n- O horizon: Usually thin; important for moisture retention.\n- A horizon: The farmer's main concern. Good maize growth requires deep, dark A horizon.\n- B horizon: Can be hard (hardpan) that restricts root growth.\n- C horizon: Influences soil type (e.g., from granite gives sandy soil; from limestone gives clay).\n\nEffects of Soil Profile on Crop Production\n\n- Depth of A horizon: Thick topsoil allows roots to spread. Shallow topsoil limits growth.\n- Drainage: If B horizon is clayey and compacted, water cannot drain.\n- Fertility: Dark, well-developed A horizon is fertile.\n- Erosion: If A horizon is lost, less fertile B horizon is exposed.",
    "summary": "Soil components: minerals, organic matter, water, air. Soil profile layers: O (organic), A (topsoil), B (subsoil), C (parent material). Thick, dark topsoil is best for crops.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Topsoil Depth",
        "description": "Farmers measure how deep the dark layer is – thicker is better."
      },
      {
        "title": "Hardpan Problem",
        "description": "In some areas, a compacted B layer prevents roots from growing deep."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which soil horizon is most important for crop growth?",
        "answer": "A horizon (topsoil)",
        "hint": "It is dark and full of nutrients."
      },
      {
        "question": "What is the parent material of soil?",
        "answer": "Weathered rock (C horizon)",
        "hint": "The lowest layer before solid rock."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 2",
    "topic": "Plant Structure and Photosynthesis",
    "lessonNumber": 1,
    "lessonTitle": "Leaf Structure and the Process of Photosynthesis",
    "lessonId": "biology-f2-photosynthesis-1",
    "order": 28,
    "learningObjectives": [
      "Label the internal structures of a leaf (cuticle, epidermis, palisade mesophyll, spongy mesophyll, stomata, veins)",
      "State the word equation and chemical equation for photosynthesis"
    ],
    "introduction": "Plants feed themselves! Using sunlight, carbon dioxide from the air, and water from the soil, they produce glucose and oxygen. This process is PHOTOSYNTHESIS. Today, we will look inside a leaf and learn how it works.",
    "keyPoints": [
      "Leaf structures: cuticle (waterproof), epidermis (protection), palisade mesophyll (photosynthesis), spongy mesophyll (gas exchange), stomata (pores), veins (xylem and phloem).",
      "Word equation: carbon dioxide + water → glucose + oxygen (in presence of light and chlorophyll).",
      "Chemical equation: 6CO2 + 6H2O → C6H12O6 + 6O2.",
      "Light energy is absorbed by chlorophyll (green pigment).",
      "Investigations: destarched plant, test with iodine for starch to show light/CO2/chlorophyll needed."
    ],
    "detailedContent": "Inside a Leaf\n\nThe leaf cross-section includes:\n\n- Cuticle: Waxy layer on top – prevents water loss.\n- Upper epidermis: Transparent layer – allows light through.\n- Palisade mesophyll: Column-shaped cells packed with chloroplasts. This is where most photosynthesis happens.\n- Spongy mesophyll: Irregular cells with air spaces. Allows gases (CO2, O2) to circulate.\n- Stomata: Pores (mainly on lower surface) – open and close. Allow CO2 in and O2 out. Guard cells control opening.\n- Veins (vascular bundles): Xylem (carries water and minerals to leaf) and Phloem (carries sugar away).\n\nPhotosynthesis Process\n\nChlorophyll (green pigment) captures sunlight energy. This energy splits water molecules and drives the reaction that combines hydrogen with carbon dioxide to make glucose.\n\nWord equation: Carbon dioxide + Water → Glucose + Oxygen\n\nChemical equation: 6CO2 + 6H2O → C6H12O6 + 6O2\n\nExperiments (Investigations)\n\nTo test a factor, use a DESTARCHED plant (kept in dark for 48 hours so it uses up stored starch). Then:\n\n1. Test for light: Cover part of a leaf with black paper. Leave in light for a few hours. Remove leaf, boil in alcohol to remove colour, test with iodine. Covered part: no starch (brown). Uncovered: starch (blue-black).\n\n2. Test for carbon dioxide: Place plant in a sealed container with a chemical that removes CO2 (sodium hydroxide). After hours, test leaf for starch – none. Control with normal air – starch present.\n\n3. Test for chlorophyll: Use a variegated leaf (green and white parts). After exposing to light, test whole leaf with iodine. Only green parts turn blue-black.\n\nFate of Glucose\n\n- Immediately used for RESPIRATION to release energy.\n- Converted to STARCH for storage (e.g., potato tubers, maize grains).\n- Converted to CELLULOSE to build cell walls.\n- Combined with nitrates to form AMINO ACIDS, then proteins.\n- Converted to OILS for storage in seeds (e.g., groundnuts).",
    "summary": "Photosynthesis occurs in leaf chloroplasts: CO2 + H2O → glucose + O2, using light. Leaf structures: cuticle, mesophyll, stomata, veins. Experiments prove light, CO2, chlorophyll are needed.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Maize Grain Starch",
        "description": "Glucose from leaf transported to cob and stored as starch in grains."
      },
      {
        "title": "Variegated Leaf Experiment",
        "description": "Only green parts produce starch when tested with iodine."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What gas do plants take in during photosynthesis?",
        "answer": "Carbon dioxide",
        "hint": "From air through stomata."
      },
      {
        "question": "What does iodine test detect in a leaf?",
        "answer": "Starch (which indicates photosynthesis occurred)",
        "hint": "Blue-black colour."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 2",
    "topic": "Chemical Bonding",
    "lessonNumber": 1,
    "lessonTitle": "Ionic, Covalent, and Metallic Bonding",
    "lessonId": "chemistry-f2-bonding-1",
    "order": 29,
    "learningObjectives": [
      "Explain why atoms form chemical bonds (octet rule)",
      "Describe ionic bonding and covalent bonding with examples"
    ],
    "introduction": "Why do atoms stick together? The answer is CHEMICAL BONDS. Atoms bond to become more stable, usually by achieving a full outer shell (like noble gases). Today, we will learn the three main types of bonding and how they affect properties.",
    "keyPoints": [
      "Octet rule: atoms gain, lose, or share electrons to achieve a stable outer shell of 8 electrons (or 2 for hydrogen/helium).",
      "Ionic bonding: transfer of electrons from metal to non-metal. Forms positive ions (cations) and negative ions (anions).",
      "Covalent bonding: sharing of electrons between non-metals. Forms molecules.",
      "Metallic bonding: positive metal ions in a sea of delocalised electrons.",
      "Ionic compounds: high melting points, conduct electricity when molten/dissolved.",
      "Covalent compounds: low melting points (simple), do not conduct electricity."
    ],
    "detailedContent": "Why Atoms Bond\n\nAtoms are most stable when their outer shell is full. For most elements, this means 8 electrons (octet). Hydrogen and helium are stable with 2 (duplet). Atoms can achieve full shells by transferring electrons (ionic) or sharing electrons (covalent).\n\nIonic Bonding\n\nIonic bonding occurs between a metal and a non-metal. The metal atom loses electrons to become a positive ion (cation). The non-metal atom gains those electrons to become a negative ion (anion). Opposite charges attract – this electrostatic attraction is the ionic bond.\n\nExample: Sodium chloride (NaCl)\n- Sodium (Na) has electron configuration 2,8,1. It loses 1 electron to become Na+ (2,8).\n- Chlorine (Cl) has 2,8,7. It gains 1 electron to become Cl- (2,8,8).\n- The Na+ and Cl- are held together by ionic bonds.\n\nIonic compounds form giant crystal lattices. Properties: High melting point (strong attraction), soluble in water, conduct electricity when dissolved or molten.\n\nCovalent Bonding\n\nCovalent bonding occurs between non-metals. Atoms share one or more pairs of electrons so that both achieve full outer shells.\n\nExample: Hydrogen molecule (H2)\n- Each H atom has 1 electron. They share a pair – each H now has 2 electrons (duplet).\n\nExample: Water (H2O)\n- Oxygen (2,6) shares one electron with each of two hydrogen atoms. Oxygen now has 8 (its own 6 plus 1 from each H). Each H has 2.\n\nExample: Methane (CH4)\n- Carbon (2,4) shares four pairs with four hydrogen atoms – each H gets 2, C gets 8.\n\nCovalent compounds can be simple molecular (low melting point, gases/liquids at room temp) or giant covalent (diamond, graphite – very high melting point). Most do not conduct electricity.\n\nMetallic Bonding\n\nMetals consist of positive metal ions arranged in a lattice, with delocalised (free-moving) electrons in between. The attraction between the positive ions and the sea of electrons is the metallic bond.\n\nProperties of metals: Good conductors of electricity, good conductors of heat, malleable and ductile, lustrous.",
    "summary": "Ionic bonding: electron transfer, metal + non-metal. Covalent bonding: electron sharing, non-metals. Metallic bonding: sea of delocalised electrons. Properties relate to bonding type.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Copper Wiring",
        "description": "Delocalised electrons in copper allow electrical flow in houses."
      },
      {
        "title": "Salt Dissolving",
        "description": "Ionic NaCl dissolves in water, ions separate for conductivity."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of bonding occurs between sodium and chlorine?",
        "answer": "Ionic bonding",
        "hint": "Metal (Na) + non-metal (Cl)."
      },
      {
        "question": "Why does diamond (covalent) not conduct electricity?",
        "answer": "All electrons are held in bonds; no delocalised electrons.",
        "hint": "Tetrahedral structure."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 2",
    "topic": "Density",
    "lessonNumber": 1,
    "lessonTitle": "Measuring Density of Solids and Liquids",
    "lessonId": "physics-f2-density-1",
    "order": 30,
    "learningObjectives": [
      "Define density and state its formula (ρ = m/V)",
      "Calculate density of regular solids, irregular solids (using displacement), and liquids"
    ],
    "introduction": "Why does a stone sink while a piece of wood floats? The answer lies in DENSITY – how tightly packed the matter is. Today, we will learn how to calculate density and use it to identify substances.",
    "keyPoints": [
      "Density (ρ) = mass / volume (ρ = m/V).",
      "SI unit: kg/m³ (common also g/cm³).",
      "1 g/cm³ = 1000 kg/m³.",
      "Regular solids: measure dimensions to find volume.",
      "Irregular solids: use water displacement (Archimedes’ principle).",
      "Liquids: use measuring cylinder and balance."
    ],
    "detailedContent": "What is Density?\n\nDensity tells us how much mass is packed into a given volume. Dense materials feel heavy for their size.\n\nFormula: Density = mass ÷ volume or ρ = m/V\n\nPractical Ways to Measure Volume\n\n- Regular solid (e.g., cube): Measure length, width, height → V = l × w × h. Use ruler.\n- Irregular solid (e.g., stone): Displacement method: submerge in water, measure volume of water displaced. Use measuring cylinder, water.\n- Liquid: Pour into measuring cylinder and read volume.\n\nExample Calculations\n\n1. Cube of metal: mass = 270 g, each side = 3 cm. Volume = 3×3×3 = 27 cm³. Density = 270/27 = 10 g/cm³ = 10,000 kg/m³. This is lead or similar.\n\n2. Irregular stone: Mass = 150 g. Place water in measuring cylinder: initial volume = 50 cm³. After stone submerged, volume = 80 cm³. Volume of stone = 80 - 50 = 30 cm³. Density = 150/30 = 5 g/cm³.\n\n3. Liquid (cooking oil): Mass of empty container = 40 g. Mass with 100 cm³ of oil = 120 g. Mass of oil = 80 g. Density = 80/100 = 0.8 g/cm³.\n\nDensity of Water: 1 g/cm³ (1000 kg/m³). Substances with density less than water float; greater density sink.\n\nMalawi Example: A farmer wants to know if a stone from his field is rich in mineral ore. He measures density. High density (>5 g/cm³) may indicate metal ores.",
    "summary": "Density = mass/volume. Use appropriate methods for regular solids (formula), irregular solids (displacement), and liquids (measuring cylinder). Density helps identify substances and predict floating/sinking.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Stone Density",
        "description": "Measure mass and volume by displacement to decide if a stone contains heavy minerals."
      },
      {
        "title": "Cooking Oil Purity",
        "description": "Density test can detect adulteration."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A block of wood has mass 200 g and volume 250 cm³. Calculate density (g/cm³).",
        "answer": "0.8 g/cm³",
        "hint": "Density = 200/250 = 0.8"
      },
      {
        "question": "Will the wood float in water? Why?",
        "answer": "Yes, because density (0.8) is less than water (1.0).",
        "hint": "Float if density < 1 g/cm³."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Gender and Agricultural Production",
    "lessonNumber": 1,
    "lessonTitle": "Gender Roles and Equity in Agriculture",
    "lessonId": "agriculture-f2-gender-1",
    "order": 46,
    "learningObjectives": [
      "Identify gender roles in agricultural production",
      "Discuss the impact of gender roles on agricultural productivity"
    ],
    "introduction": "In Malawi, both men and women work in agriculture, but they often have different roles. Understanding these roles helps improve productivity and equity. Today, we will learn about gender roles in farming and their impact.",
    "keyPoints": [
      "Women: involved in planting, weeding, harvesting, processing, and selling.",
      "Men: often involved in land clearing, ploughing, and cash crop marketing.",
      "Impact: women have less access to land, credit, and extension services, reducing productivity.",
      "Gender equity ensures equal opportunities and resources for all."
    ],
    "detailedContent": "Gender Roles in Agricultural Production\n\nIn Malawi, agriculture is the main livelihood. Both men and women participate, but their roles differ:\n\nWomen typically:\n- Prepare seedbeds and plant\n- Weed crops\n- Harvest and process produce (e.g., shelling maize, grinding)\n- Collect water and firewood\n- Sell produce at local markets\n- Care for small livestock (chickens, goats)\n\nMen typically:\n- Clear land and plough\n- Apply fertilisers and pesticides\n- Market cash crops (tobacco, cotton)\n- Build farm structures\n- Care for large livestock (cattle)\n\nImpact of Gender Roles on Agricultural Productivity\n\n- Limited access to resources: Women often cannot own land, access credit, or receive extension training. This reduces their productivity.\n- Time burden: Women work longer hours (farming plus household chores), leading to fatigue and less time for farming.\n- Decision-making: Men often control income from cash crops, limiting women's economic empowerment.\n\nGender equity in agriculture means ensuring equal access to land, inputs, training, and markets for both men and women. When women have equal resources, yields increase by 20-30%.\n\nMalawi Government initiatives: The National Gender Policy promotes women's access to land and credit. Extension services target both men and women.",
    "summary": "Women and men have different roles in agriculture. Gender inequity limits productivity. Equal access to resources improves yields and livelihoods.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Women in Vegetable Gardening",
        "description": "Women often grow vegetables for home consumption and sale."
      },
      {
        "title": "Gender and Land Ownership",
        "description": "Customary law often restricts women’s land ownership."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name one agricultural activity typically done by women.",
        "answer": "Weeding, planting, harvesting, processing",
        "hint": "Think of tasks near the home."
      },
      {
        "question": "How does gender inequity affect agricultural productivity?",
        "answer": "Women have less access to resources, reducing potential yields.",
        "hint": "Access to land, credit, training."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Farming Systems",
    "lessonNumber": 1,
    "lessonTitle": "Types and Importance of Farming Systems",
    "lessonId": "agriculture-f2-farming-systems-1",
    "order": 47,
    "learningObjectives": [
      "Identify types of farming systems (intensive, extensive, mixed, monoculture)",
      "Explain the importance of each farming system"
    ],
    "introduction": "Do you plant only maize every year? Or do you keep animals as well? The way you organise your farm is your FARMING SYSTEM. Today, we will learn about different systems and their advantages.",
    "keyPoints": [
      "Intensive farming: high inputs, high output per unit area (e.g., irrigation, fertilisers).",
      "Extensive farming: large land area, low inputs, low output per hectare (e.g., ranching).",
      "Mixed farming: crops and livestock together (manure for crops, crop residues for feed).",
      "Monoculture: growing same crop year after year. Can lead to pest buildup and soil exhaustion.",
      "Importance: choice of system affects productivity, sustainability, and profitability."
    ],
    "detailedContent": "Types of Farming Systems\n\n1. Intensive farming: Uses high levels of inputs (fertilisers, pesticides, irrigation, labour) per unit area to achieve high yields. Common for vegetables, irrigated maize, and poultry. Advantages: high productivity, efficient land use. Disadvantages: high cost, risk of environmental damage.\n\n2. Extensive farming: Uses large land areas with low inputs and low yields per hectare. Common for cattle ranching or shifting cultivation. Advantages: low cost, less environmental pressure per hectare. Disadvantages: requires large land, low output.\n\n3. Mixed farming: Combines crop production and livestock keeping. Farmers grow crops and rear animals together. Animal manure fertilises crops; crop residues feed animals. Advantages: nutrient cycling, risk diversification, income from multiple sources. Common in Malawi smallholder farms.\n\n4. Monoculture: Growing only one crop on the same land year after year. Advantages: easy to manage, can specialise. Disadvantages: pest and disease buildup (e.g., maize stalk borer), soil nutrient depletion, increased need for fertilisers.\n\n5. Crop rotation: Growing different crops in sequence on the same land. Advantages: improves soil fertility, breaks pest cycles, reduces erosion.\n\nImportance of Choosing the Right System\n\n- Productivity: Intensive systems produce more food per hectare.\n- Sustainability: Mixed farming and crop rotation maintain soil health.\n- Risk management: Diversified systems (mixed, rotation) reduce risk of total crop failure.\n- Profitability: Intensive and mixed systems often give higher returns per area.\n\nIn Malawi, most smallholders practice mixed farming with maize and groundnuts plus a few chickens or goats. Some use crop rotation.",
    "summary": "Farming systems include intensive, extensive, mixed, monoculture, and rotation. Mixed farming and rotation improve sustainability. Choice affects productivity and risk.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Maize-Groundnut Rotation",
        "description": "Improves soil fertility and reduces pest problems."
      },
      {
        "title": "Mixed Farming in Lilongwe",
        "description": "Maize, groundnuts, and chickens together use resources efficiently."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the main advantage of mixed farming?",
        "answer": "Nutrient cycling and risk diversification",
        "hint": "Crops and animals complement each other."
      },
      {
        "question": "What is a disadvantage of monoculture?",
        "answer": "Pest buildup and soil nutrient depletion",
        "hint": "Same crop every year."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Financing Agricultural Enterprises",
    "lessonNumber": 1,
    "lessonTitle": "Sources of Finance and Calculating Interest",
    "lessonId": "agriculture-f2-finance-1",
    "order": 48,
    "learningObjectives": [
      "Identify sources of finance for agricultural production",
      "Calculate simple interest on borrowed money"
    ],
    "introduction": "Farming requires money for seeds, fertilisers, and equipment. But many farmers lack enough capital. Today, we will learn about sources of finance and how to calculate interest on loans.",
    "keyPoints": [
      "Sources: personal savings, family/friends, village savings and loans (VSL), commercial banks, microfinance institutions, cooperatives, government subsidies (FISP).",
      "Simple interest formula: I = P × R × T (where I = interest, P = principal, R = rate per year, T = time in years).",
      "Total repayment = Principal + Interest.",
      "Conditions for borrowing: interest rate, repayment period, collateral, purpose."
    ],
    "detailedContent": "Sources of Finance for Agricultural Production\n\n- Personal savings: Most common, but often insufficient.\n- Family and friends: Low or no interest, but may strain relationships.\n- Village Savings and Loans (VSL) groups: Members save and lend to each other; flexible.\n- Commercial banks: Require collateral and formal records; higher interest rates.\n- Microfinance institutions: Smaller loans, less collateral; higher interest.\n- Cooperatives: Members pool savings; lower interest.\n- Government subsidies (FISP): Farm Input Subsidy Programme provides vouchers for fertiliser and seeds.\n\nCalculating Simple Interest\n\nSimple interest is calculated only on the principal amount.\n\nFormula: I = P × R × T\nWhere:\n- I = Interest\n- P = Principal (amount borrowed)\n- R = Interest rate per year (as a decimal)\n- T = Time in years\n\nExample 1: A farmer borrows 50,000 MK at 10% per year for 2 years.\nI = 50,000 × 0.10 × 2 = 10,000 MK\nTotal repayment = 50,000 + 10,000 = 60,000 MK\n\nExample 2: Borrow 30,000 MK at 8% per year for 6 months (0.5 years).\nI = 30,000 × 0.08 × 0.5 = 1,200 MK\nTotal repayment = 31,200 MK\n\nConditions and Terms for Borrowing\n\n- Interest rate: Percentage charged per year.\n- Repayment period: Time to pay back.\n- Collateral: Asset pledged as security (e.g., land, house).\n- Purpose: Lender may require a business plan.\n- Credit history: Past repayment record.\n\nMalawi Example: Many farmers join VSL groups. They save weekly and can borrow at low interest (e.g., 5% per month). The group decides terms. Some access commercial loans from banks like NBS or Opportunity Bank.",
    "summary": "Sources of finance include savings, VSL, banks, microfinance, cooperatives, and subsidies. Simple interest: I = P×R×T. Always consider repayment ability.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Village Savings and Loans",
        "description": "Groups save together and lend to members at low interest."
      },
      {
        "title": "Farm Input Subsidy Programme (FISP)",
        "description": "Government provides vouchers for fertiliser and seeds."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Calculate interest on a loan of 100,000 MK at 12% per year for 3 years.",
        "answer": "36,000 MK",
        "hint": "I = 100,000 × 0.12 × 3 = 36,000"
      },
      {
        "question": "What is collateral?",
        "answer": "An asset pledged as security for a loan.",
        "hint": "Land, house, or equipment."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Pig Production",
    "lessonNumber": 1,
    "lessonTitle": "Breeds, Management, and Disease Control in Pigs",
    "lessonId": "agriculture-f2-pigs-1",
    "order": 49,
    "learningObjectives": [
      "List breeds of pigs and describe management systems",
      "Explain feeding, housing, and disease control for pigs"
    ],
    "introduction": "Pigs grow quickly and provide meat (pork) and income. In Malawi, pig production is common in smallholder farms. Today, we will learn about pig breeds, housing, feeding, and health management.",
    "keyPoints": [
      "Breeds: Large White, Landrace, Duroc, local (crossbred).",
      "Management systems: free-range, semi-intensive, intensive.",
      "Housing: clean, dry, well-ventilated, with separate areas for farrowing and growing.",
      "Feeding: creep feed for piglets, growers mash for weaners, finisher feed; also kitchen waste, maize bran.",
      "Diseases: African Swine Fever (ASF), swine erysipelas, roundworms. Control: biosecurity, vaccination, deworming."
    ],
    "detailedContent": "Breeds of Pigs\n\n- Large White: White, long body, good mothering ability, high litter size.\n- Landrace: White, large drooping ears, good bacon quality.\n- Duroc: Red-brown, fast growth, good meat quality.\n- Local crossbreeds: Hardy, disease-resistant, but slower growth.\n\nManagement Systems\n\n- Free-range: Pigs roam freely. Low cost but high disease risk and damage to crops.\n- Semi-intensive: Pigs have a pen but also allowed to forage. Moderate cost and management.\n- Intensive: Pigs kept in pens, all feed provided. Higher cost but better growth and disease control.\n\nHousing Requirements\n\n- Good pig house: dry floor (concrete or raised wood), proper drainage, ventilation, protection from sun and rain.\n- Separate areas: farrowing crate for sows with piglets, weaner pens, grower/finisher pens.\n- Space: 1.5-2 m² per adult pig.\n\nFeeding\n\n- Creep feed (for piglets up to 8 weeks): high protein.\n- Growers mash (8-20 weeks): 16-18% protein.\n- Finisher feed (20 weeks to slaughter): 14-16% protein.\n- Also: maize bran, kitchen waste, vegetables. Provide clean water always.\n\nDisease and Parasite Control\n\n- African Swine Fever (ASF): viral, highly fatal. No vaccine. Control: biosecurity (restrict visitors, quarantine new pigs).\n- Swine erysipelas: bacterial. Vaccinate.\n- Roundworms: deworm with piperazine or ivermectin.\n- External parasites (mange, lice): dust with insecticide, clean pens.\n\nMalawi Example: Many farmers raise pigs in semi-intensive systems. They feed maize bran and kitchen waste. They face ASF outbreaks, so biosecurity is critical.",
    "summary": "Pig breeds: Large White, Landrace, Duroc, local. Management: free-range, semi-intensive, intensive. House must be clean and dry. Feed according to age. Control diseases with biosecurity and vaccination.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "ASF in Malawi",
        "description": "Outbreaks occur; farmers lose pigs; movement control is key."
      },
      {
        "title": "Pig Fattening",
        "description": "Farmers buy weaners, feed maize bran, sell after 6 months."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name one breed of pig commonly used in Malawi.",
        "answer": "Large White or Landrace",
        "hint": "White breeds are common."
      },
      {
        "question": "What is the most important disease control measure for African Swine Fever?",
        "answer": "Biosecurity (restrict pig movement, quarantine new pigs).",
        "hint": "No vaccine."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Soil Chemical Properties",
    "lessonNumber": 1,
    "lessonTitle": "Soil pH, Cation Exchange Capacity, and Nutrient Status",
    "lessonId": "agriculture-f3-soil-chemical-1",
    "order": 50,
    "learningObjectives": [
      "Define soil pH and explain its effect on nutrient availability",
      "Describe Cation Exchange Capacity (CEC) and its importance"
    ],
    "introduction": "Soil chemistry is invisible but crucial. It determines whether plants can access nutrients. Today, we will learn about soil pH (acidity or alkalinity) and CEC – how well soil holds onto nutrients. These factors decide if your fertiliser will work or be wasted.",
    "keyPoints": [
      "Soil pH measures acidity or alkalinity (scale 0-14). pH 7 neutral; below 7 acidic; above 7 alkaline.",
      "Most crops grow best at pH 6.0-7.0 (slightly acidic to neutral).",
      "Low pH: aluminium and manganese become toxic; phosphorus is locked.",
      "High pH: iron, manganese, zinc become unavailable.",
      "CEC is the soil's ability to hold positively charged nutrients (cations: Ca, Mg, K, NH4).",
      "Clay and organic matter have high CEC; sandy soils have low CEC.",
      "Modify acidic soil with lime (calcium carbonate)."
    ],
    "detailedContent": "Soil pH – The Balance of Acidity and Alkalinity\n\npH is a measure of how acidic or alkaline the soil is. It ranges from 0 (very acidic) to 14 (very alkaline), with 7 being neutral.\n\nMost crops in Malawi grow best in slightly acidic to neutral soil, pH 6.0-7.0.\n\n- Maize: pH 5.5-7.0\n- Groundnuts: pH 5.5-6.5\n- Tobacco: pH 5.5-6.5\n- Tea: prefers acidic soil (pH 4.5-5.5)\n\nEffects of pH on Nutrients:\n\n- At low pH (very acidic): Aluminium and manganese become soluble and toxic to roots. Phosphorus is locked and unavailable. Calcium and magnesium are deficient.\n- At high pH (alkaline): Iron, manganese, zinc, and copper become unavailable (chlorosis – yellow leaves).\n\nCation Exchange Capacity (CEC)\n\nCEC is the soil's ability to hold and exchange positively charged nutrient ions (cations). These include:\n- Calcium (Ca2+)\n- Magnesium (Mg2+)\n- Potassium (K+)\n- Ammonium (NH4+)\n\nHigh CEC means the soil can store more nutrients and release them slowly. Low CEC means nutrients wash away (leach) quickly.\n\n- Clay soils: High CEC (good fertility).\n- Sandy soils: Low CEC (needs frequent fertilising).\n- Organic matter: Very high CEC.\n\nFactors Affecting Soil pH\n\n- Parent material: Soils from limestone are alkaline; from granite are acidic.\n- Rainfall: High rainfall leaches basic cations (Ca, Mg), making soil acidic.\n- Fertilisers: Urea and ammonium-based fertilisers acidify soil over time.\n- Organic matter decomposition produces organic acids.\n\nModifying Soil pH\n\nTo raise pH (reduce acidity) add agricultural lime (calcium carbonate). The amount depends on soil test results. To lower pH (increase acidity) add sulphur, aluminium sulphate, or use acidic fertilisers.\n\nMalawi Example: In high-rainfall areas of Mulanje, tea farmers need acidic soil (pH 4.5-5.5). For maize, farmers in sandy soils add manure to improve CEC. In some areas, soil is too acidic for maize; they apply lime before planting.",
    "summary": "Soil pH affects nutrient availability. Most crops prefer pH 6-7. CEC measures nutrient holding capacity – clay and organic matter have high CEC. Acidic soil is treated with lime.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Lime Application in Kasungu",
        "description": "Farmers add lime to acidic tobacco soils."
      },
      {
        "title": "Tea Soil pH",
        "description": "Tea grows well in acidic soil (pH 4.5-5.5)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What happens to phosphorus availability at very low soil pH?",
        "answer": "Phosphorus becomes locked and unavailable to plants.",
        "hint": "Forms insoluble compounds."
      },
      {
        "question": "Which soil type has higher CEC: sandy or clay?",
        "answer": "Clay",
        "hint": "Clay particles have more negative charges."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Farm Records and Budgets",
    "lessonNumber": 1,
    "lessonTitle": "Keeping Farm Records and Preparing Budgets",
    "lessonId": "agriculture-f3-farm-records-1",
    "order": 51,
    "learningObjectives": [
      "Identify types of farm records (inventory, production, financial)",
      "Prepare a simple budget for an agricultural enterprise"
    ],
    "introduction": "Farming is a business. To know if you are making profit or loss, you need RECORDS. To plan for the future, you need a BUDGET. Today, we will learn how to keep simple farm records and prepare a budget for your crop or livestock enterprise.",
    "keyPoints": [
      "Types of records: inventory (list of assets), production (yields, inputs used), financial (income, expenses, loans).",
      "Reasons: track profit/loss, plan for next season, get loans, improve management.",
      "Budgeting: forecasting income and expenses for a farming period.",
      "Types of budgets: partial (for changes), complete (whole farm), break-even (minimum production to cover costs).",
      "Simple budget: list expected income and expenses; profit = income - expenses."
    ],
    "detailedContent": "Types of Farm Records\n\n1. Inventory records: List all assets on the farm – land size, buildings, livestock, tools, machinery, seeds, fertilisers. Update regularly.\n\n2. Production records: For crops: area planted, seed rate, fertiliser applied, weeding dates, harvest date, yield. For livestock: number of animals, births, deaths, milk production, eggs.\n\n3. Financial records: All money received (sales, loans, gifts) and money spent (inputs, labour, transport, water, electricity). Also debts and savings.\n\nReasons for Keeping Farm Records\n\n- To know profit or loss from each enterprise.\n- To compare one season with another.\n- To learn from mistakes.\n- To get loans from banks or cooperatives.\n- To plan next season's planting and spending.\n- To prove income for tax purposes.\n\nFarm Budgeting\n\nA budget is a plan of expected income and expenses for a farming period (usually one season).\n\nTypes of Budgets:\n\n1. Partial budget: Used when considering a small change, e.g., adding a new crop or buying a cow. Shows additional costs and additional benefits.\n\n2. Complete budget: A full plan for the whole farm – all crops, all livestock, all expenses, all expected income.\n\n3. Break-even budget: Calculates the quantity you must produce to cover all costs (no profit, no loss). Useful for deciding if an enterprise is worth it.\n\nHow to Prepare a Simple Budget\n\nFor a maize enterprise on 0.5 hectare:\n\nIncome (expected):\n- Maize yield: 2,000 kg\n- Price per kg: 200 MK\n- Total income = 2,000 × 200 = 400,000 MK\n\nExpenses:\n- Seeds: 5 kg × 600 MK = 3,000 MK\n- NPK fertiliser: 100 kg × 300 MK = 30,000 MK\n- Urea fertiliser: 25 kg × 400 MK = 10,000 MK\n- Labour (weeding, planting): 15,000 MK\n- Transport: 10,000 MK\n- Total expenses = 3,000+30,000+10,000+15,000+10,000 = 68,000 MK\n\nProfit = Income - Expenses = 400,000 - 68,000 = 332,000 MK\n\nNote: This does not include the cost of land or farmer's own labour, but gives an estimate.\n\nImportance of Budgeting\n\n- Prevents overspending.\n- Helps decide which crops to grow.\n- Shows expected profit before investing.\n- Identifies where to cut costs.\n- Helps apply for loans (show projected profits).\n\nMalawi Example: A smallholder farmer keeps a notebook: he writes down how much fertiliser he bought, how many bags of maize he harvested, and how much he sold. Before next season, he uses this to budget – he knows he needs 3 bags of fertiliser and expects 10 bags of maize.",
    "summary": "Farm records include inventory, production, and financial records. They help track profit/loss and plan. Budgets forecast income and expenses. Profit = income - expenses.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Farm Notebook",
        "description": "A farmer records all inputs and sales in a simple exercise book."
      },
      {
        "title": "Maize Budget",
        "description": "Estimate costs and income for a 0.5 ha maize field before planting."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name one reason to keep a production record.",
        "answer": "To compare yields between seasons",
        "hint": "Helps improve management."
      },
      {
        "question": "What is a break-even budget?",
        "answer": "A budget that finds the point where total cost equals total revenue – no profit or loss.",
        "hint": "Used to decide minimum production needed."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Cropping Systems",
    "lessonNumber": 1,
    "lessonTitle": "Types and Benefits of Cropping Systems",
    "lessonId": "agriculture-f3-cropping-systems-1",
    "order": 52,
    "learningObjectives": [
      "Define cropping system and identify types (monocropping, intercropping, crop rotation, mixed cropping, relay cropping)",
      "Discuss advantages and disadvantages of different cropping systems"
    ],
    "introduction": "Do you plant only maize every year in the same field? Or do you plant maize with beans? The way you arrange your crops is your CROPPING SYSTEM. Today, we will learn the main systems and their pros and cons.",
    "keyPoints": [
      "Monocropping: same crop year after year – easy but depletes soil.",
      "Intercropping: two or more crops together (e.g., maize + beans) – better land use, reduces pests.",
      "Crop rotation: different crops in sequence – improves soil fertility, breaks pest cycles.",
      "Mixed cropping: seeds mixed randomly – very low risk but low yields.",
      "Relay cropping: second crop planted before first is harvested – extends growing season."
    ],
    "detailedContent": "Types of Cropping Systems\n\n1. Monocropping (Monoculture)\n- Only one crop grown on the same land year after year.\n- Advantages: Easy to manage, can specialise, good for mechanisation.\n- Disadvantages: Builds up pests and diseases, depletes specific nutrients, soil erosion.\n\n2. Intercropping\n- Two or more crops grown together in the same field at the same time.\n- Common in Malawi: maize intercropped with beans or groundnuts.\n- Advantages: More efficient use of land, sunlight, water. Legumes add nitrogen. Reduces pest spread.\n- Disadvantages: Competition for light and water if not spaced well. Harvesting may be difficult.\n\n3. Crop Rotation\n- Different crops planted in a planned sequence on the same land.\n- Example: Year 1: maize; Year 2: groundnuts; Year 3: maize again.\n- Advantages: Improves soil fertility (legumes fix nitrogen), breaks disease and pest cycles, reduces erosion, diversifies income.\n- Disadvantages: Requires planning, may need different equipment.\n\n4. Mixed Cropping\n- Seeds of different crops are mixed together and planted randomly.\n- Example: maize, millet, and pumpkin all together in one hole.\n- Advantages: Very low risk – at least one crop survives. Provides diverse food.\n- Disadvantages: Difficult to weed, low yields for individual crops, cannot apply fertiliser or pesticide targeted.\n\n5. Relay Cropping\n- Second crop planted before the first crop is harvested.\n- Example: In maize field, when maize is about to mature, farmers plant beans between the maize rows. Beans grow after maize is harvested.\n- Advantages: Extends growing season, uses residual moisture.\n- Disadvantages: Timing is critical, competition possible.\n\nChoosing the Right System\n\n- For small farms with limited land: intercropping (maize + legumes) is common.\n- For large farms with machinery: monocropping may be easier.\n- To improve poor soil: rotation with legumes.\n- To reduce risk of total crop failure: mixed cropping or intercropping.\n\nMalawi Example: In most villages, farmers practise maize-groundnuts intercropping. They plant maize first, then at the second weeding, they plant groundnuts between the maize rows. The groundnuts fix nitrogen, and the family gets both maize and nuts. After two seasons, they may rotate to a different field.",
    "summary": "Cropping systems: monocropping (same crop every year), intercropping (mixed in same field), rotation (sequence over years), relay (plant before harvest). Intercropping and rotation improve soil and reduce pests.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Maize-Bean Intercrop",
        "description": "Beans climb maize stalks and fix nitrogen – common across Malawi."
      },
      {
        "title": "Three-Year Rotation",
        "description": "Maize → groundnuts → fallow or vegetables."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is crop rotation beneficial for soil fertility?",
        "answer": "Legumes fix nitrogen; different crops use different nutrients, preventing depletion.",
        "hint": "Diverse root systems and nitrogen fixation."
      },
      {
        "question": "What is a disadvantage of monocropping?",
        "answer": "Pests and diseases build up; soil nutrients become depleted.",
        "hint": "Same crop every year – same pests stay."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Crop Improvement",
    "lessonNumber": 1,
    "lessonTitle": "Methods and Aims of Crop Improvement",
    "lessonId": "agriculture-f4-crop-improvement-1",
    "order": 53,
    "learningObjectives": [
      "Define crop improvement and state its aims (higher yield, disease resistance, quality, adaptation)",
      "Describe methods of crop improvement (selection, introduction, hybridization)"
    ],
    "introduction": "Why are some maize varieties tolerant to drought while others are not? Why do some groundnuts have larger kernels? The answer is CROP IMPROVEMENT – the science of developing better crop varieties. Today, we will learn the methods and why processing crops adds value.",
    "keyPoints": [
      "Aims: higher yield, disease/pest resistance, drought tolerance, better quality, early maturity, uniformity.",
      "Methods: selection (choosing best plants for seed), introduction (bringing varieties from elsewhere), hybridization (crossing two varieties).",
      "Modern methods include genetic modification (not common in Malawi yet)."
    ],
    "detailedContent": "What is Crop Improvement?\n\nCrop improvement is the science of changing plant characteristics to make them more useful for humans. It is done by plant breeders.\n\nAims of Crop Improvement\n\n- Higher yield: More food from same land.\n- Disease resistance: Less loss from diseases like maize streak virus or groundnut rosette.\n- Pest resistance: Tolerant to insects like stalk borer.\n- Drought tolerance: Produce even with less rain.\n- Better quality: Larger kernels, better taste, longer storage life.\n- Early maturity: Harvest before dry season or short rains.\n- Uniformity: All plants mature at same time – easier harvest.\n\nMethods of Crop Improvement\n\n1. Selection:\n   - Farmers or scientists choose the best-looking plants (high yield, no disease) and save their seeds.\n   - Repeated over several generations.\n   - Example: Malawi farmers selecting large-cob maize for seed.\n\n2. Introduction:\n   - Bringing new varieties from other countries or regions.\n   - Test them in local conditions.\n   - Example: MH30 maize variety was introduced and adapted.\n\n3. Hybridization (Crossing):\n   - Crossing two different parent varieties to combine their good traits.\n   - Hybrid seeds often give higher yields (hybrid vigour).\n   - Example: Maize hybrids like MH37.\n\n4. Modern methods (genetic modification) – not yet common in Malawi but used elsewhere.\n\nMalawi Example: Chitedze Research Station develops and tests new maize varieties. Farmers can buy certified seed from seed companies. The Farm Input Subsidy Programme often distributes improved varieties.",
    "summary": "Crop improvement aims for higher yield, disease resistance, quality. Methods: selection, introduction, hybridisation. Improved varieties benefit farmers.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "MH30 Maize",
        "description": "Hybrid maize variety with high yield and disease resistance."
      },
      {
        "title": "CG7 Groundnut",
        "description": "Rosette-resistant groundnut variety."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the aim of crop improvement?",
        "answer": "To develop varieties with higher yield, disease resistance, or better quality.",
        "hint": "Make plants better for farmers."
      },
      {
        "question": "What is the difference between selection and hybridization?",
        "answer": "Selection chooses best natural plants; hybridization crosses two parents to combine traits.",
        "hint": "Selection uses existing variation; hybridization creates new combinations."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Crop Processing",
    "lessonNumber": 1,
    "lessonTitle": "Processing Maize and Groundnuts for Storage and Value Addition",
    "lessonId": "agriculture-f4-crop-processing-1",
    "order": 54,
    "learningObjectives": [
      "Explain why crop processing is important for storage and value addition",
      "Describe processing of maize (shelling, drying, milling) and groundnuts (shelling, roasting, grinding)"
    ],
    "introduction": "Processing transforms raw harvest into a more usable form. It reduces spoilage, adds value, and creates income. Today, we will learn how to process maize and groundnuts on the farm.",
    "keyPoints": [
      "Importance: reduces storage losses, adds value, makes product ready for use, reduces transport cost, creates jobs.",
      "Maize processing: shelling (remove kernels), drying (to safe moisture), winnowing, milling (grind into flour).",
      "Groundnut processing: shelling (remove pods), roasting, grinding into butter (chigumula).",
      "Benefits: higher price, less waste, family nutrition, small business opportunity."
    ],
    "detailedContent": "Why Process Crops?\n\nProcessing the harvested crop before storing or selling gives many benefits:\n\n- Reduces storage losses: Drying prevents mould and aflatoxin.\n- Adds value: Groundnut butter sells for more than unshelled nuts.\n- Makes product ready for use: Maize flour is ready for nsima.\n- Reduces transport cost: Shelled nuts take less space than unshelled.\n- Creates jobs: Milling, roasting, packaging.\n\nProcessing Examples\n\nMaize:\n1. Shelling: Removing kernels from cob. Hand shelling or machine sheller.\n2. Drying: Spread on mat or raised platform until moisture is low (crack when bitten).\n3. Winnowing: Remove chaff and dust.\n4. Milling: Grind into flour (milled locally at hammer mill).\n5. Storage: Keep in airtight container or bag.\n\nGroundnuts (Nuts):\n1. Harvest and dry in field.\n2. Shelling: Remove pods (can be hand-sorted or use sheller).\n3. Roasting: Heat to improve flavour and reduce aflatoxin.\n4. Grinding: Make groundnut butter (chigumula) using grinding stone or machine.\n5. Packaging: Sell in small containers.\n\nBenefits of On-Farm Processing\n\n- Farmer gets higher price (value added).\n- Reduces waste (spoiled produce).\n- Family can eat processed products.\n- Can create small business.\n\nMalawi Example: A woman in Mzimba processes groundnuts into chigumula (groundnut butter). She buys raw nuts from neighbours, shells, roasts, grinds, and sells in small plastic jars. She earns more than if she sold raw nuts.",
    "summary": "Crop processing adds value, reduces storage loss. Examples: shelling, drying, milling maize; shelling, roasting, grinding groundnuts. On-farm processing increases income.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Groundnut Butter Enterprise",
        "description": "Roasting and grinding nuts increases profit."
      },
      {
        "title": "Maize Milling",
        "description": "Small hammer mills serve villages, producing flour for nsima."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is drying maize important before storage?",
        "answer": "Prevents mould and aflatoxin, which can cause illness.",
        "hint": "Moisture leads to fungus."
      },
      {
        "question": "What is one benefit of processing groundnuts into butter?",
        "answer": "Higher selling price and longer shelf life.",
        "hint": "Value addition."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 2",
    "topic": "Respiratory System",
    "lessonNumber": 1,
    "lessonTitle": "Breathing and Gas Exchange in Humans",
    "lessonId": "biology-f2-respiratory-1",
    "order": 55,
    "learningObjectives": [
      "Identify the parts of the human respiratory system",
      "Explain the mechanism of breathing (inhalation and exhalation)"
    ],
    "introduction": "Every cell in your body needs oxygen. Your RESPIRATORY SYSTEM brings in air, extracts oxygen, and removes carbon dioxide. Today, we will learn how you breathe and how air reaches your blood.",
    "keyPoints": [
      "Nose: filters, warms, and moistens air.",
      "Trachea: windpipe with cartilage rings, lined with cilia and mucus.",
      "Bronchi, bronchioles, alveoli: air passage to air sacs.",
      "Alveoli: tiny air sacs where gas exchange occurs.",
      "Inhalation: diaphragm contracts and flattens; ribs move up and out; chest volume increases; air rushes in.",
      "Exhalation: diaphragm relaxes; ribs move down and in; chest volume decreases; air pushed out."
    ],
    "detailedContent": "Parts of the Respiratory System\n\n- Nose: Hairs and mucus trap dust and germs. Capillaries warm the air.\n- Pharynx (throat): Passage for both air and food.\n- Trachea: Windpipe kept open by cartilage rings. Lined with cilia (tiny hairs) that move mucus up.\n- Bronchi: Two tubes (left and right) entering lungs.\n- Bronchioles: Smaller branches inside the lungs.\n- Alveoli: Clusters of tiny air sacs. Each sac is one cell thick and surrounded by blood capillaries. There are millions of alveoli – large surface area for gas exchange.\n- Lungs: Soft, spongy organs in the chest cavity.\n- Diaphragm: Dome-shaped muscle at the bottom of the chest. It controls breathing.\n\nMechanism of Breathing\n\nInhalation (Breathe in):\n- Diaphragm contracts, flattens.\n- Rib cage moves up and out.\n- Chest volume increases.\n- Air pressure inside drops below outside.\n- Air rushes into lungs.\n\nExhalation (Breathe out):\n- Diaphragm relaxes, domes up.\n- Rib cage moves down and in.\n- Chest volume decreases.\n- Air pressure inside rises above outside.\n- Air is pushed out.\n\nWe can demonstrate using a bell jar model (rubber sheet = diaphragm, balloons = lungs).\n\nComposition of Air\n\n- Inhaled air: 21% oxygen, 0.04% CO2, variable water vapour.\n- Exhaled air: 16% oxygen, 4% CO2, more water vapour.\n\nGas Exchange at the Alveolus\n\n- Blood arriving at the alveolus has low O2 and high CO2 (because cells used O2 and made CO2).\n- O2 diffuses across thin walls from alveolus to blood.\n- CO2 diffuses from blood to alveolus.\n- Blood now rich in O2 returns to the heart.\n\nArtificial Respiration (Resuscitation)\n\nIf a person stops breathing (drowning, electric shock, smoke inhalation):\n1. Check responsiveness.\n2. Call for help.\n3. Open airway (tilt head, lift chin).\n4. Check breathing (look, listen, feel).\n5. If not breathing, give 2 rescue breaths (pinch nose, seal mouth, blow until chest rises).\n6. Then do chest compressions (30 compressions at rate 100 per minute, depth 5 cm).\n7. Repeat 30 compressions : 2 breaths until help arrives.\n\nMalawi Example: In villages, health workers teach mothers resuscitation for babies who stop breathing. They use a manikin or practice on simple models.",
    "summary": "Respiratory system: nose → trachea → bronchi → bronchioles → alveoli. Inhalation: diaphragm contracts, chest volume increases, air in. Exhalation: reverse. Alveoli exchange O2 and CO2.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Alveoli Surface Area",
        "description": "Millions of tiny sacs give large area for gas exchange."
      },
      {
        "title": "Mouth-to-Mouth Resuscitation",
        "description": "Taught to lifeguards and health workers for drowning cases."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which muscle is most important for breathing?",
        "answer": "Diaphragm",
        "hint": "Forms floor of chest cavity."
      },
      {
        "question": "Why does exhaled air contain more carbon dioxide than inhaled air?",
        "answer": "Cells produce CO2 as waste, which is carried by blood to lungs and exhaled.",
        "hint": "Gas exchange removes CO2."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 2",
    "topic": "Circulatory System",
    "lessonNumber": 1,
    "lessonTitle": "The Heart, Blood Vessels, and Blood Components",
    "lessonId": "biology-f2-circulatory-1",
    "order": 56,
    "learningObjectives": [
      "Identify the parts of the heart and major blood vessels",
      "List the components of blood and their functions"
    ],
    "introduction": "Your heart beats about 100,000 times a day, pumping blood to every cell. The CIRCULATORY SYSTEM transports oxygen, nutrients, and waste products. Today, we will learn how blood flows and what makes up blood.",
    "keyPoints": [
      "Heart: four chambers – right atrium, right ventricle, left atrium, left ventricle. Valves prevent backflow.",
      "Arteries: carry blood away from heart (thick walls, no valves).",
      "Veins: carry blood to heart (thin walls, valves).",
      "Capillaries: microscopic, one cell thick, exchange of substances.",
      "Blood components: plasma (55%), red blood cells (carry oxygen), white blood cells (fight infection), platelets (clotting).",
      "Anaemia: low red blood cells or haemoglobin – causes tiredness, pale skin."
    ],
    "detailedContent": "The Heart\n\nThe heart is a muscular pump with four chambers:\n\n- Right atrium: Receives deoxygenated blood from body (via vena cava).\n- Right ventricle: Pumps blood to lungs (via pulmonary artery).\n- Left atrium: Receives oxygenated blood from lungs (via pulmonary vein).\n- Left ventricle: Pumps blood to body (via aorta). This ventricle has thickest muscle.\n\nValves: Tricuspid (right side) and bicuspid (left side) prevent backflow.\n\nBlood Flow Through Heart and Body\n\nDeoxygenated pathway:\nBody → vena cava → right atrium → tricuspid valve → right ventricle → pulmonary valve → pulmonary artery → lungs (gets oxygen)\n\nOxygenated pathway:\nLungs → pulmonary vein → left atrium → bicuspid valve → left ventricle → aortic valve → aorta → body\n\nBlood Vessels\n\n- Arteries: carry blood away from heart. Thick, muscular walls. No valves. Pulse can be felt.\n- Veins: carry blood to heart. Thin walls, large lumen, valves to prevent backflow.\n- Capillaries: connect arteries to veins. One cell thick walls. Allow exchange of oxygen, CO2, nutrients, waste.\n\nComponents of Blood\n\nPlasma (55%): Yellowish liquid. Carries water, glucose, amino acids, hormones, CO2, urea.\n\nRed blood cells (erythrocytes): Biconcave discs, no nucleus, contain haemoglobin (iron protein). Function: carry oxygen from lungs to tissues.\n\nWhite blood cells (leucocytes): Fight infection. Some engulf bacteria; others produce antibodies.\n\nPlatelets (thrombocytes): Cell fragments that help blood clot. When a vessel is cut, platelets form a plug and release clotting factors.\n\nAnaemia\n\nDefinition: Too few red blood cells or too little haemoglobin. Causes:\n- Iron deficiency (not enough iron in diet – beans, dark greens, meat).\n- Worm infestations (hookworms suck blood).\n- Heavy bleeding.\n\nSymptoms: Pale skin, fatigue, dizziness, shortness of breath.\n\nPrevention and treatment: Eat iron-rich foods (beans, pumpkin leaves, liver). Treat worm infections. Iron supplements if prescribed.\n\nMalawi Example: Many children suffer from anaemia due to hookworms from walking barefoot. The Ministry of Health distributes deworming tablets in schools and encourages eating iron-rich foods like bonongwe.",
    "summary": "Heart pumps blood: right side to lungs, left side to body. Arteries carry blood away, veins return, capillaries exchange. Blood has plasma, red cells (carry oxygen), white cells (immunity), platelets (clotting).",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Deworming in Schools",
        "description": "Tablets given to children prevent anaemia caused by hookworms."
      },
      {
        "title": "Bonongwe for Iron",
        "description": "Pumpkin leaves are rich in iron, eaten in villages."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which chamber of the heart has the thickest muscle?",
        "answer": "Left ventricle",
        "hint": "It pumps blood to the whole body."
      },
      {
        "question": "What is the function of platelets?",
        "answer": "Blood clotting",
        "hint": "They prevent bleeding."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 2",
    "topic": "Acids and Bases",
    "lessonNumber": 1,
    "lessonTitle": "Properties of Acids and Bases, Indicators, and Neutralisation",
    "lessonId": "chemistry-f2-acids-bases-1",
    "order": 57,
    "learningObjectives": [
      "State the properties of acids and bases",
      "Describe how to prepare acid-base indicators from local plants"
    ],
    "introduction": "Lemons taste sour because they contain citric acid. Soap feels slippery because it is a base. Today, we will learn the properties of acids and bases, how to test for them, and the important reaction between them – NEUTRALISATION.",
    "keyPoints": [
      "Acid properties: sour taste, turns blue litmus red, pH < 7, reacts with metals and carbonates.",
      "Base properties: bitter taste, slippery feel, turns red litmus blue, pH > 7.",
      "Indicators: substances that change colour in acid or base (e.g., litmus, universal indicator, phenolphthalein).",
      "Natural indicators: hibiscus flowers (red in acid, green in base), acacia leaves, red cabbage.",
      "Neutralisation: acid + base → salt + water (H+ + OH- → H2O)."
    ],
    "detailedContent": "Properties of Acids\n\nAcids are substances that produce hydrogen ions (H+) when dissolved in water.\n\nCommon laboratory acids: hydrochloric acid (HCl), sulphuric acid (H2SO4), nitric acid (HNO3). Common household acids: vinegar (acetic acid), lemon juice (citric acid), orange juice (ascorbic acid).\n\nChemical properties of acids:\n\n1. Corrosive – can damage skin and materials.\n2. Turn blue litmus paper red.\n3. React with metals (above hydrogen) to produce salt and hydrogen gas.\n   Example: Zn + H2SO4 → ZnSO4 + H2\n4. React with carbonates to produce salt, water, and carbon dioxide gas.\n   Example: Na2CO3 + 2HCl → 2NaCl + H2O + CO2 (effervescence)\n5. React with bases (neutralisation) to form salt and water.\n\nProperties of Bases (and Alkalis)\n\nBases are substances that produce hydroxide ions (OH-) in water. Soluble bases are called alkalis.\n\nCommon bases: sodium hydroxide (NaOH – caustic soda), potassium hydroxide (KOH), calcium hydroxide (Ca(OH)2 – limewater), ammonia solution (NH3).\n\nProperties:\n\n1. Corrosive (strong bases).\n2. Bitter taste, slippery feel (don't taste in lab!).\n3. Turn red litmus blue.\n4. Neutralise acids to form salt and water.\n\nIndicators\n\nIndicators are dyes that change colour depending on pH.\n\n- Litmus: red in acid, blue in base.\n- Universal indicator: mixture of dyes; gives a colour for each pH value (red 1-2, orange 3-4, yellow 5-6, green 7, blue 8-10, purple 11-14).\n- Phenolphthalein: colourless in acid, pink in base.\n\nMaking natural indicators in Malawi:\n\n- Hibiscus flowers: crush petals, add hot water. Red/purple solution turns green in base, redder in acid.\n- Acacia (msekese) leaves: crush leaves; solution changes colour.\n- Red cabbage: boil leaves; purple solution turns red with acid, green/blue with base.\n\npH Scale\n\n- 0-2: Strong acid (battery acid, stomach acid)\n- 3-4: Weak acid (vinegar, orange juice)\n- 5-6: Very weak acid (rainwater)\n- 7: Neutral (pure water)\n- 8-9: Weak base (baking soda solution)\n- 10-11: Mild base (milk of magnesia)\n- 12-14: Strong base (soap, bleach, NaOH)\n\nNeutralisation Reaction\n\nAcid + Base → Salt + Water\n\nIonic equation (for strong acids and alkalis): H+ + OH- → H2O\n\nExamples of neutralisation in Malawi:\n\n- Soil acidity: Farmers add lime (calcium oxide/hydroxide) to acidic soil.\n- Ant bites (formic acid): Baking soda paste neutralises.\n- Bee stings (alkaline): Vinegar neutralises.\n- Indigestion: Antacid tablets neutralise excess stomach acid.",
    "summary": "Acids: sour, turn blue litmus red, pH<7. Bases: bitter, slippery, turn red litmus blue, pH>7. Indicators change colour with pH. Neutralisation: acid + base → salt + water.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Lime on Acidic Soil",
        "description": "Farmers add lime to neutralise soil before planting maize."
      },
      {
        "title": "Hibiscus Indicator",
        "description": "Local flowers can test if a liquid is acid or base."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What happens when an acid reacts with a metal carbonate?",
        "answer": "Salt, water, and carbon dioxide gas are produced.",
        "hint": "Effervescence (bubbles)."
      },
      {
        "question": "What is the pH of a neutral solution?",
        "answer": "7",
        "hint": "Pure water."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 2",
    "topic": "Air and Combustion",
    "lessonNumber": 1,
    "lessonTitle": "Composition of Air and Combustion",
    "lessonId": "chemistry-f2-air-combustion-1",
    "order": 58,
    "learningObjectives": [
      "State the approximate percentage composition of dry air",
      "Explain the process of combustion and distinguish between complete and incomplete combustion"
    ],
    "introduction": "The air you breathe is not just one gas – it is a mixture. Today, we will learn what is in the air, why things burn, and what pollutants harm our environment.",
    "keyPoints": [
      "Composition of dry air by volume: nitrogen (78%), oxygen (21%), argon (0.9%), carbon dioxide (0.04%).",
      "Combustion (burning): rapid reaction between fuel and oxygen releasing heat and light.",
      "Conditions: fuel, oxygen, heat (ignition temperature).",
      "Complete combustion: excess oxygen, products CO2 + H2O (blue flame, clean).",
      "Incomplete combustion: limited oxygen, products CO (carbon monoxide – poisonous) + C (soot) + H2O (yellow, smoky flame)."
    ],
    "detailedContent": "Composition of Air\n\nIf we remove water vapour and pollutants, dry air consists of:\n- Nitrogen (N2): 78.08%\n- Oxygen (O2): 20.95%\n- Argon (Ar): 0.93%\n- Carbon dioxide (CO2): 0.04%\n- Other noble gases: neon, helium, krypton, xenon (trace)\n\nOxygen is essential for respiration and combustion. Nitrogen is inert – it dilutes oxygen to slow down reactions.\n\nWater vapour varies from near 0% (desert) to 4% (humid tropics). Malawi has higher humidity during rainy season.\n\nCombustion (Burning)\n\nCombustion is a chemical reaction in which a substance (fuel) reacts with oxygen, releasing energy as heat and light.\n\nConditions needed for combustion:\n- Fuel (e.g., wood, charcoal, petrol, methane)\n- Oxygen (from air)\n- Heat (to reach ignition temperature)\n\nFire triangle: three sides – fuel, oxygen, heat. Remove any one, fire goes out.\n\nComplete vs Incomplete Combustion\n\nComplete combustion (sufficient oxygen):\nFuel + O2 → CO2 + H2O + energy\nExample: methane (natural gas): CH4 + 2O2 → CO2 + 2H2O (blue flame)\n\nIncomplete combustion (insufficient oxygen):\nFuel + O2 → CO + C (soot) + CO2 + H2O (less energy)\nExample: burning charcoal in a closed room produces carbon monoxide, which is deadly because it binds to haemoglobin.\n\nAir Pollutants and Their Effects\n\n- Carbon monoxide (CO): from incomplete burning; binds to haemoglobin, reduces oxygen delivery.\n- Sulphur dioxide (SO2): from burning coal, diesel; causes acid rain.\n- Nitrogen oxides (NOx): from high-temperature engines; acid rain, smog.\n- Particulate matter (soot): from burning biomass; lung diseases.\n- CFCs: from old refrigerators, aerosols; ozone layer depletion.\n\nMalawi Example: Many households still use charcoal and firewood for cooking. If used indoors with poor ventilation, carbon monoxide poisoning is a risk. Shifting to improved cookstoves reduces smoke (particulates) and incomplete combustion.",
    "summary": "Air: 78% N2, 21% O2, 0.9% Ar, 0.04% CO2. Combustion needs fuel, oxygen, heat. Complete gives CO2 + H2O; incomplete gives CO and soot.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Charcoal Burning",
        "description": "Incomplete combustion produces CO – danger in closed rooms."
      },
      {
        "title": "Improved Cookstoves",
        "description": "Reduce smoke and increase efficiency, reducing pollutants."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the most abundant gas in air?",
        "answer": "Nitrogen (78%)",
        "hint": "Oxygen is second."
      },
      {
        "question": "What dangerous gas is produced by incomplete combustion of charcoal?",
        "answer": "Carbon monoxide (CO)",
        "hint": "Lack of oxygen."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 2",
    "topic": "Light",
    "lessonNumber": 1,
    "lessonTitle": "Rectilinear Propagation of Light and Shadows",
    "lessonId": "physics-f2-light-1",
    "order": 59,
    "learningObjectives": [
      "State that light travels in straight lines (rectilinear propagation)",
      "Explain how shadows are formed (umbra and penumbra)"
    ],
    "introduction": "Have you seen your shadow on a sunny day? Or noticed that light from a torch forms a straight beam? Light travels in straight lines. Today, we will explore this property and learn how it creates shadows and eclipses.",
    "keyPoints": [
      "Light travels in straight lines – rectilinear propagation.",
      "When an opaque object blocks light, a shadow is formed.",
      "Umbra: dark region where no light reaches.",
      "Penumbra: partial shadow (for extended light sources).",
      "Eclipses (solar and lunar) are examples of shadows on a large scale.",
      "Pinhole camera uses rectilinear propagation to form an inverted image."
    ],
    "detailedContent": "Rectilinear Propagation of Light\n\nLight travels in straight lines from its source. You can see this when a laser beam or a torch beam appears as a straight line in dusty air, or when you look at a narrow beam of sunlight through a window.\n\nFormation of Shadows\n\nWhen an opaque object (does not let light through) is placed in the path of light, a shadow forms on a screen behind it.\n\n- Umbra: Darkest part. No light reaches because the source is completely blocked.\n- Penumbra: Faint, partial shadow. Occurs with extended light sources like a bulb (not a point source). Only part of the light source is blocked.\n\nPinhole Camera\n\nA pinhole camera is a box with a small hole on one side and a screen (tracing paper) on the opposite side. Light from an object travels in straight lines through the pinhole and forms an inverted (upside-down) image on the screen.\n\nHow it works:\n- Light from the top of an object passes through the hole and goes to the bottom of the screen.\n- Light from the bottom goes to the top.\n- Result: inverted image.\n\nMagnification = image height / object height = distance from pinhole to screen / distance from object to pinhole.\n\nEclipses\n\n- Solar eclipse: Moon passes between Sun and Earth, casting a shadow on Earth. In the umbra, it is total eclipse; in the penumbra, partial.\n- Lunar eclipse: Earth passes between Sun and Moon, and Earth’s shadow falls on the Moon.\n\nMalawi Example:\n- On a sunny day, observe shadows of trees. Notice how the shadow length changes with sun position.\n- A pinhole camera can be made from a shoebox. Students can view an inverted image of a candle flame or of the outside.",
    "summary": "Light travels in straight lines (rectilinear propagation). This explains shadows, pinhole cameras, and eclipses. An umbra is the darkest shadow; a penumbra is a partial shadow.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Tree Shadows",
        "description": "Observe shadows changing length during the day."
      },
      {
        "title": "Pinhole Camera",
        "description": "Build a camera from a box to see an inverted image."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why can we see a straight beam of sunlight through a dusty room?",
        "answer": "Dust scatters light, revealing the straight path.",
        "hint": "Light travels in a straight line; dust lets you see that line."
      },
      {
        "question": "What kind of image does a pinhole camera produce?",
        "answer": "Inverted (upside-down)",
        "hint": "Light from top goes to bottom of screen."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 2",
    "topic": "Light",
    "lessonNumber": 2,
    "lessonTitle": "Reflection of Light on Plane Surfaces",
    "lessonId": "physics-f2-light-2",
    "order": 60,
    "learningObjectives": [
      "State the laws of reflection",
      "Describe the characteristics of images formed by a plane mirror"
    ],
    "introduction": "When you look into a mirror, you see yourself. That is reflection – light bouncing off a smooth surface. Today, we will learn the laws that govern reflection and how images are formed in plane mirrors.",
    "keyPoints": [
      "First law of reflection: angle of incidence (i) = angle of reflection (r).",
      "Second law: incident ray, reflected ray, and normal all lie in the same plane.",
      "In a plane mirror, image is virtual (cannot be projected), upright, same size, and as far behind the mirror as the object is in front.",
      "Lateral inversion: left side of object appears as right side in image.",
      "Uses: periscopes, dressing mirrors, rear-view mirrors (convex), solar cookers (concave)."
    ],
    "detailedContent": "Laws of Reflection\n\n1. The angle of incidence equals the angle of reflection: i = r\n2. The incident ray, the reflected ray, and the normal (line perpendicular to the surface at the point of incidence) are all in the same plane.\n\nRay Diagram for a Plane Mirror\n\nDraw a line representing the mirror. Draw an object (e.g., an arrow) in front. To find the image:\n- Draw two rays from the top of the object to the mirror.\n- Use the law of reflection to draw reflected rays.\n- Extend the reflected rays behind the mirror. They meet at a point.\n- That point is the image.\n\nImage Characteristics for Plane Mirror\n\n- Type: Virtual (cannot be captured on a screen)\n- Orientation: Upright (same orientation)\n- Size: Same as object\n- Distance: Image distance = object distance\n- Left-right reversal: Lateral inversion – left side of object appears as right side in image\n\nUses of Plane Mirrors:\n- Dressing mirrors\n- Periscopes (used in submarines to see above the water)\n- Optical instruments (some)\n- In solar cookers, curved mirrors are used, but plane mirrors also reflect sunlight.\n\nMalawi Example:\n- A traditional barbershop uses a plane mirror for customers.\n- A simple periscope can be made from two plane mirrors and a cardboard tube to see over a wall.",
    "summary": "Reflection follows the laws: i = r, and the rays and normal are coplanar. Plane mirrors produce virtual, upright, same-size images with lateral inversion.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Periscope Project",
        "description": "Build a periscope using two plane mirrors to see over obstacles."
      },
      {
        "title": "Solar Cooker Reflection",
        "description": "Use mirrors to concentrate sunlight for cooking."
      }
    ],
    "practiceQuestions": [
      {
        "question": "If a light ray strikes a mirror at an angle of 30° to the normal, what is the angle of reflection?",
        "answer": "30°",
        "hint": "Angle of incidence equals angle of reflection."
      },
      {
        "question": "Is the image in a plane mirror real or virtual?",
        "answer": "Virtual",
        "hint": "You cannot project it onto a screen."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 3",
    "topic": "Gas Laws",
    "lessonNumber": 1,
    "lessonTitle": "Boyle’s Law and Charles’s Law",
    "lessonId": "physics-f3-gas-laws-1",
    "order": 61,
    "learningObjectives": [
      "State Boyle’s law (P ∝ 1/V at constant temperature) and solve problems using P1V1 = P2V2",
      "State Charles’s law (V ∝ T at constant pressure) and solve problems using V1/T1 = V2/T2 (using Kelvin)"
    ],
    "introduction": "Gases behave in predictable ways. When you compress a gas, its pressure increases. When you heat a gas, it expands. These relationships are described by the GAS LAWS. Today, we will learn Boyle’s law (pressure-volume) and Charles’s law (volume-temperature).",
    "keyPoints": [
      "Boyle’s law: For a fixed mass of gas at constant temperature, pressure is inversely proportional to volume: P1V1 = P2V2.",
      "Charles’s law: For a fixed mass of gas at constant pressure, volume is directly proportional to absolute temperature: V1/T1 = V2/T2 (T in Kelvin).",
      "Convert Celsius to Kelvin: K = °C + 273.",
      "Real-world examples: bicycle pump (Boyle), hot air balloon (Charles)."
    ],
    "detailedContent": "Boyle’s Law\n\nIf you squeeze a gas (decrease its volume), the pressure increases. If you let it expand, the pressure decreases. This is Boyle’s law.\n\nBoyle’s law states: For a fixed amount of gas at constant temperature, the pressure is inversely proportional to the volume.\n\nMathematically: P × V = constant, or P1V1 = P2V2\n\nExample:\nA gas occupies 2 m³ at a pressure of 100,000 Pa. If the volume is reduced to 1 m³ at the same temperature, what is the new pressure?\nP1V1 = P2V2\n100,000 × 2 = P2 × 1\n200,000 = P2\nNew pressure = 200,000 Pa (double because volume halved).\n\nMalawi Example: You pump air into a bicycle tyre. As you push the pump handle, you decrease the volume of air inside the pump, so its pressure increases, forcing air into the tyre.\n\nBreathing also uses Boyle’s law: When you expand your chest (increase volume of lungs), pressure inside drops below atmospheric, and air rushes in.\n\nCharles’s Law\n\nWhen you heat a gas, it expands if the pressure is constant. This is Charles’s law.\n\nCharles’s law states: For a fixed amount of gas at constant pressure, the volume is directly proportional to the absolute temperature (Kelvin).\n\nMathematically: V / T = constant, or V1/T1 = V2/T2\n\nImportant: Temperature must be in Kelvin.\n\nExample:\nA balloon has a volume of 2 m³ at 27°C. What will be its volume if heated to 127°C at constant pressure?\nFirst convert to Kelvin: T1 = 27 + 273 = 300 K, T2 = 127 + 273 = 400 K.\nV1/T1 = V2/T2\n2 / 300 = V2 / 400\nCross multiply: 2 × 400 = 300 × V2 → 800 = 300 × V2 → V2 = 800/300 = 2.67 m³.\n\nMalawi Example: Hot air balloon. The air inside the balloon is heated by a burner. The gas expands (Charles’s law). Expanded hot air is less dense than the surrounding cool air, so the balloon rises.",
    "summary": "Boyle’s law: P1V1 = P2V2 (constant T). Charles’s law: V1/T1 = V2/T2 (constant P, T in Kelvin). These laws describe how gases respond to changes in pressure, volume, and temperature.",
    "estimatedTime": "25 mins",
    "malawiExamples": [
      {
        "title": "Bicycle Pump",
        "description": "Compressing air increases pressure – Boyle’s law."
      },
      {
        "title": "Hot Air Balloon",
        "description": "Heating air increases volume – Charles’s law."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A gas occupies 0.6 m³ at a pressure of 150,000 Pa. If the pressure increases to 300,000 Pa at constant temperature, what is the new volume?",
        "answer": "0.3 m³",
        "hint": "P1V1 = P2V2 → 150,000×0.6 = 300,000×V2 → 90,000 = 300,000×V2 → V2 = 0.3"
      },
      {
        "question": "A gas has volume 3 L at 27°C. If heated to 127°C at constant pressure, what is the new volume?",
        "answer": "4 L",
        "hint": "T1=300K, T2=400K, V2 = V1 × T2/T1 = 3 × 400/300 = 4 L"
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Plant Diversity",
    "lessonNumber": 1,
    "lessonTitle": "Flowering and Non-flowering Plants",
    "lessonId": "biology-f1-plant-diversity-1",
    "order": 62,
    "learningObjectives": [
      "Distinguish between flowering and non-flowering plants",
      "Describe the external features of flowering plants (roots, stems, leaves, flowers)"
    ],
    "introduction": "Look around you – maize, mango trees, grasses, ferns, and mosses. All are plants, but they are not the same. Today, we will learn the difference between flowering and non-flowering plants and their external features.",
    "keyPoints": [
      "Flowering plants (angiosperms): produce flowers and seeds enclosed in fruits. Examples: maize, mango, beans.",
      "Non-flowering plants: do not produce flowers or seeds. Examples: ferns (spores), mosses, conifers (cones).",
      "External features of flowering plants: roots (anchor, absorb water/minerals), stems (support, transport), leaves (photosynthesis), flowers (reproduction)."
    ],
    "detailedContent": "Flowering vs Non-flowering Plants\n\nFlowering plants (angiosperms) are the most common plants. They produce flowers which develop into fruits containing seeds. Examples: maize, groundnuts, mango, beans, tomatoes.\n\nNon-flowering plants reproduce by other means:\n- Ferns: reproduce by spores on underside of leaves.\n- Mosses: reproduce by spores.\n- Conifers (pine trees): reproduce by cones (gymnosperms – \"naked seeds\").\n- Algae: simple plants, reproduce by cell division or spores.\n\nExternal Features of Flowering Plants\n\n1. Roots: Anchor the plant, absorb water and minerals from soil. Two types:\n   - Taproot: one main root (e.g., beans, mango)\n   - Fibrous roots: many thin roots (e.g., maize, grasses)\n\n2. Stems: Support leaves and flowers, transport water and nutrients. Also store food (e.g., sugar cane). May be herbaceous (soft) or woody (hard).\n\n3. Leaves: Main site of photosynthesis. Have blade, petiole (stalk), and veins (transport). Venation can be net-like (dicots) or parallel (monocots).\n\n4. Flowers: Reproductive organs. Contain male parts (stamens: anther + filament) and female parts (carpel: stigma, style, ovary). After pollination and fertilisation, ovary becomes fruit, ovules become seeds.\n\nMonocots vs Dicots\n\n- Monocots: one seed leaf, parallel leaf venation, fibrous roots, flower parts in multiples of three. Examples: maize, grasses, lilies.\n- Dicots: two seed leaves, net leaf venation, taproot, flower parts in multiples of four or five. Examples: beans, groundnuts, mango.",
    "summary": "Flowering plants produce flowers and seeds; non-flowering plants reproduce by spores or cones. Flowering plants have roots, stems, leaves, and flowers. Monocots and dicots differ in seed leaves, venation, roots, and flower parts.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Maize (Monocot)",
        "description": "Parallel leaf veins, fibrous roots, flower parts in threes."
      },
      {
        "title": "Groundnut (Dicot)",
        "description": "Net leaf veins, taproot, flower parts in fives."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the main difference between flowering and non-flowering plants?",
        "answer": "Flowering plants produce flowers and seeds; non-flowering plants do not.",
        "hint": "Reproduction method."
      },
      {
        "question": "Name two types of roots found in flowering plants.",
        "answer": "Taproot and fibrous root",
        "hint": "One main root vs many thin roots."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Animal Structures and Functions",
    "lessonNumber": 1,
    "lessonTitle": "External Features of Invertebrates",
    "lessonId": "biology-f1-invertebrates-1",
    "order": 63,
    "learningObjectives": [
      "List the main groups of invertebrates (insects, nematodes, annelids, crustaceans, arachnids, molluscs)",
      "Describe the external features of insects using a grasshopper as an example"
    ],
    "introduction": "About 95% of all animals are invertebrates – they have no backbone. From insects to worms to snails, they are everywhere. Today, we will explore the main groups and learn their external features.",
    "keyPoints": [
      "Invertebrates: animals without a backbone. Groups: insects, nematodes (roundworms), annelids (segmented worms), crustaceans, arachnids (spiders), molluscs (snails).",
      "Insects: three body parts (head, thorax, abdomen), six legs, two antennae, often wings. Example: grasshopper.",
      "Nematodes: long, round, unsegmented. Example: hookworms.",
      "Annelids: segmented body. Example: earthworm.",
      "Crustaceans: hard exoskeleton, two pairs of antennae. Example: crab, prawn.",
      "Arachnids: four pairs of legs, two body parts. Example: spider.",
      "Molluscs: soft body, often a shell. Example: snail, octopus."
    ],
    "detailedContent": "Main Groups of Invertebrates\n\n1. Insects (Class Insecta): Largest group. Three body parts: head (eyes, antennae, mouthparts), thorax (three pairs of legs, usually two pairs of wings), abdomen. Examples: grasshopper, butterfly, ant, beetle.\n\nGrasshopper external features:\n- Head: compound eyes (many lenses), antennae (sensory), mandibles (chewing mouthparts).\n- Thorax: three segments, each with a pair of legs. Hind legs enlarged for jumping. Two pairs of wings (outer leathery, inner membranous).\n- Abdomen: eleven segments, spiracles (breathing holes) on sides.\n\n2. Nematodes (Roundworms): Long, cylindrical, unsegmented body. Have a complete digestive tract. Examples: hookworms, roundworms (parasites in humans and animals).\n\n3. Annelids (Segmented worms): Body divided into rings (segments). Examples: earthworm, leech. Earthworm has bristles (setae) for movement.\n\n4. Crustaceans: Mostly aquatic. Have hard exoskeleton (carapace), two pairs of antennae, many legs. Examples: crabs, prawns, crayfish.\n\n5. Arachnids: Four pairs of legs, two body parts (cephalothorax and abdomen). No antennae. Examples: spiders, scorpions, ticks.\n\n6. Molluscs: Soft-bodied, often with a hard shell for protection. Examples: snails (gastropods), clams (bivalves), octopus (cephalopods).\n\nImportance: Invertebrates are food for other animals, help decompose organic matter (earthworms), pollinate plants (bees), and some are pests (termites) or parasites (hookworms).",
    "summary": "Invertebrates have no backbone. Major groups: insects (6 legs, 3 body parts), nematodes (round), annelids (segmented), crustaceans (hard shell), arachnids (8 legs), molluscs (soft body, often shell).",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Grasshopper",
        "description": "Common in maize fields, has six legs and wings."
      },
      {
        "title": "Earthworm",
        "description": "Found in moist soil, improves soil aeration."
      }
    ],
    "practiceQuestions": [
      {
        "question": "How many legs do insects have?",
        "answer": "Six",
        "hint": "Three pairs."
      },
      {
        "question": "Which group of invertebrates includes spiders?",
        "answer": "Arachnids",
        "hint": "Four pairs of legs."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Animal Structures and Functions",
    "lessonNumber": 2,
    "lessonTitle": "External Features of Vertebrates (Fish, Amphibians, Reptiles, Birds, Mammals)",
    "lessonId": "biology-f1-vertebrates-1",
    "order": 64,
    "learningObjectives": [
      "List the five classes of vertebrates",
      "Describe the external features of each class with examples"
    ],
    "introduction": "Vertebrates have a backbone. They include fish, amphibians, reptiles, birds, and mammals. Today, we will learn the key external features that distinguish each class.",
    "keyPoints": [
      "Fish: live in water, gills, scales, fins, cold-blooded. Examples: chambo, usipa.",
      "Amphibians: live in water and land, moist skin, no scales, cold-blooded. Example: frog.",
      "Reptiles: dry scaly skin, cold-blooded, lay eggs on land. Example: snake, lizard, crocodile.",
      "Birds: feathers, wings, beak, warm-blooded, lay eggs. Example: chicken, eagle.",
      "Mammals: hair or fur, mammary glands (produce milk), warm-blooded, give birth to live young (except monotremes). Examples: human, cow, goat."
    ],
    "detailedContent": "Five Classes of Vertebrates\n\n1. Fish (Class Pisces)\n- Habitat: aquatic (freshwater or marine)\n- Skin: covered with scales, moist\n- Respiration: gills\n- Limbs: fins (paired and unpaired)\n- Temperature: cold-blooded (poikilothermic)\n- Reproduction: lay eggs (oviparous) in water\n- Examples: chambo (Oreochromis), usipa (small sardine-like), catfish\n\n2. Amphibians\n- Habitat: live in water as larvae, on land as adults\n- Skin: smooth, moist, without scales (glands keep skin moist)\n- Respiration: gills in larvae; lungs and skin in adults\n- Limbs: four (tetrapods), webbed feet in many\n- Temperature: cold-blooded\n- Reproduction: lay eggs in water (jelly-like)\n- Examples: frog, toad, salamander\n\n3. Reptiles\n- Habitat: mostly terrestrial (some aquatic, e.g., crocodile)\n- Skin: dry, covered with scales or scutes\n- Respiration: lungs throughout life\n- Limbs: four (or absent in snakes)\n- Temperature: cold-blooded\n- Reproduction: lay eggs on land (amniotic eggs)\n- Examples: snake, lizard, crocodile, chameleon, tortoise\n\n4. Birds (Class Aves)\n- Habitat: mostly aerial (fly), but some aquatic (ducks) or terrestrial (ostrich)\n- Skin: covered with feathers (contour feathers for flight, down feathers for insulation)\n- Respiration: lungs with air sacs\n- Limbs: forelimbs modified into wings; hindlimbs for perching, walking, or swimming\n- Temperature: warm-blooded (homeothermic)\n- Reproduction: lay eggs with hard shells (incubated by parents)\n- Examples: chicken, eagle, owl, goose\n\n5. Mammals (Class Mammalia)\n- Habitat: wide variety (terrestrial, aquatic – whale, flying – bat)\n- Skin: covered with hair or fur\n- Respiration: lungs\n- Limbs: four (except aquatic mammals modified flippers)\n- Temperature: warm-blooded\n- Reproduction: mostly give birth to live young (viviparous); produce milk from mammary glands\n- Examples: human, cow, goat, dog, bat, whale\n\nIn Malawi, we see fish in Lake Malawi, frogs in wetlands, lizards in gardens, birds everywhere, and mammals like cows, goats, and humans.",
    "summary": "Vertebrates have a backbone. Five classes: fish (gills, scales, fins), amphibians (moist skin, metamorphosis), reptiles (dry scales), birds (feathers, wings), mammals (hair, mammary glands, warm-blooded).",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Lake Malawi Fish",
        "description": "Chambo is a vertebrate fish with scales and fins."
      },
      {
        "title": "Malawi Mammals",
        "description": "Cattle and goats are warm-blooded mammals with hair."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which class of vertebrates has feathers and wings?",
        "answer": "Birds",
        "hint": "Aves."
      },
      {
        "question": "What is the main difference between amphibians and reptiles?",
        "answer": "Amphibians have moist, scaleless skin; reptiles have dry, scaly skin.",
        "hint": "Skin type and habitat."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 2",
    "topic": "Nervous System",
    "lessonNumber": 1,
    "lessonTitle": "Parts of the Nervous System and Their Functions",
    "lessonId": "biology-f2-nervous-system-1",
    "order": 65,
    "learningObjectives": [
      "Identify the parts of the nervous system (central, peripheral, autonomic)",
      "Describe the functions of the brain, spinal cord, and nerves"
    ],
    "introduction": "The nervous system controls all your actions – from breathing to thinking to moving. Today, we will learn the main parts of the nervous system and what they do.",
    "keyPoints": [
      "Central nervous system (CNS): brain and spinal cord.",
      "Peripheral nervous system (PNS): nerves connecting CNS to the rest of the body.",
      "Autonomic nervous system: controls involuntary actions (heartbeat, digestion).",
      "Brain: cerebrum (thinking, memory, senses), cerebellum (balance, coordination), medulla oblongata (breathing, heartbeat).",
      "Spinal cord: relays messages between brain and body; controls reflex actions.",
      "Nerves: bundles of neurons that transmit impulses."
    ],
    "detailedContent": "The Nervous System – Main Parts\n\n1. Central Nervous System (CNS)\n   - Brain: master control centre.\n     * Cerebrum: largest part; controls voluntary actions, thought, memory, senses (sight, hearing, touch, taste, smell).\n     * Cerebellum: coordinates balance and fine movements (e.g., walking, writing).\n     * Medulla oblongata: controls involuntary actions like breathing, heartbeat, blood pressure, swallowing.\n   - Spinal cord: thick bundle of nerves inside the vertebral column. It relays messages between the brain and the body. Also controls spinal reflexes (e.g., pulling hand from hot object).\n\n2. Peripheral Nervous System (PNS)\n   - Cranial nerves (12 pairs) from brain; spinal nerves (31 pairs) from spinal cord.\n   - Sensory nerves: carry impulses from sense organs to CNS.\n   - Motor nerves: carry impulses from CNS to muscles and glands.\n\n3. Autonomic Nervous System\n   - Controls involuntary functions: heart rate, digestion, breathing rate, gland secretion.\n   - Two divisions: sympathetic (fight or flight) and parasympathetic (rest and digest).\n\nFunctions in Detail\n\n- Cerebrum: divided into left and right hemispheres. Left hemisphere controls right side of body and is involved in language, logic; right controls left side and is involved in creativity, spatial awareness.\n- Cerebellum: ensures smooth, coordinated movements. Damage results in shaky movements.\n- Medulla oblongata: vital centre – damage can be fatal.\n- Spinal cord: also contains reflex arcs – rapid responses that do not involve brain.\n\nEffects of alcohol and drug abuse on the nervous system\n\n- Alcohol: slows down brain activity, impairs coordination, judgment, reaction time. Long-term abuse can damage brain cells.\n- Indian hemp (cannabis): affects memory, concentration, coordination; can trigger mental health issues.\n\nMalawi Example: Drinking alcohol before driving is illegal because it slows reaction time, increasing accident risk. Health campaigns warn against substance abuse.",
    "summary": "Nervous system: CNS (brain and spinal cord), PNS (nerves), autonomic (involuntary). Cerebrum for thought, cerebellum for balance, medulla for vital functions. Spinal cord relays messages and controls reflexes.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Alcohol and Driving",
        "description": "Drinking slows reflexes, causing accidents."
      },
      {
        "title": "Spinal Reflex",
        "description": "Pulling hand from hot stove without thinking."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which part of the brain controls breathing and heartbeat?",
        "answer": "Medulla oblongata",
        "hint": "Vital centre."
      },
      {
        "question": "What is the function of the peripheral nervous system?",
        "answer": "Connects CNS to limbs and organs, carrying sensory and motor signals.",
        "hint": "Nerves outside brain and spinal cord."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 2",
    "topic": "Sense Organs",
    "lessonNumber": 1,
    "lessonTitle": "Structure and Function of the Eye and Ear",
    "lessonId": "biology-f2-sense-organs-1",
    "order": 66,
    "learningObjectives": [
      "Identify the parts of the human eye and ear and their functions",
      "Explain the common defects of the eye (short sight, long sight) and how they are corrected"
    ],
    "introduction": "How do you see the world? How do you hear sounds? The eye and ear are specialised sense organs. Today, we will learn their structures and how they work.",
    "keyPoints": [
      "Eye parts: cornea (focuses light), iris (controls pupil size), lens (focuses on retina), retina (light-sensitive cells), optic nerve (sends signals to brain).",
      "Ear parts: outer ear (collects sound), eardrum (vibrates), ossicles (amplify vibrations), cochlea (converts to electrical signals), auditory nerve (to brain).",
      "Short sight (myopia): eyeball too long, image in front of retina – corrected with concave lens.",
      "Long sight (hyperopia): eyeball too short, image behind retina – corrected with convex lens."
    ],
    "detailedContent": "The Eye – Parts and Functions\n\n- Cornea: transparent outer layer; bends (refracts) light into the eye.\n- Iris: coloured part; controls amount of light by adjusting pupil size (dilates in dim light, constricts in bright light).\n- Lens: flexible, changes shape to focus light on retina (accommodation).\n- Retina: contains rod cells (black/white, dim light) and cone cells (colour, bright light). Light creates chemical changes, producing nerve impulses.\n- Optic nerve: carries impulses from retina to brain's visual cortex.\n\nThe Ear – Parts and Functions\n\n- Outer ear (pinna): collects sound waves.\n- Ear canal: directs sound to eardrum.\n- Eardrum (tympanic membrane): vibrates when sound waves hit it.\n- Ossicles (hammer, anvil, stirrup): three tiny bones in middle ear; amplify vibrations.\n- Cochlea: fluid-filled, spiral-shaped; contains hair cells that convert vibrations into electrical signals.\n- Auditory nerve: carries signals to brain for interpretation.\n- Eustachian tube: equalises air pressure between middle ear and throat.\n\nThe ear also contains semicircular canals (balance) – detect head rotation.\n\nDefects of the Eye\n\n1. Myopia (short sight): can see near objects clearly, but distant objects blurry. Eyeball too long, image focuses in front of retina. Correction: concave (diverging) lens.\n\n2. Hyperopia (long sight): can see distant objects clearly, but near objects blurry. Eyeball too short, image focuses behind retina. Correction: convex (converging) lens.\n\n3. Astigmatism: irregular curvature of cornea or lens, causes blurred vision at all distances. Corrected with cylindrical lens.\n\nCare for Eyes, Ears, and Skin\n\n- Eyes: avoid bright light, wear sunglasses, eat vitamin A-rich foods (carrots, pumpkin), rest eyes.\n- Ears: avoid loud noises, do not insert objects, keep dry.\n- Skin: clean regularly, protect from sun, use moisturiser.\n\nMalawi Example: Many people suffer from long sight with age. Reading glasses (convex lenses) help. Short sight is common – concave lenses correct it.",
    "summary": "Eye parts: cornea, lens, retina, optic nerve. Ear parts: outer ear, eardrum, ossicles, cochlea, auditory nerve. Short sight corrected with concave lens; long sight with convex lens.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Vitamin A for Eye Health",
        "description": "Eating pumpkin and carrots prevents night blindness."
      },
      {
        "title": "Reading Glasses",
        "description": "Convex lenses help elders with long sight read."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of lens corrects short sight?",
        "answer": "Concave (diverging) lens",
        "hint": "Myopia correction."
      },
      {
        "question": "Which part of the ear converts vibrations into electrical signals?",
        "answer": "Cochlea",
        "hint": "Spiral organ with hair cells."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 2",
    "topic": "Human Diseases",
    "lessonNumber": 1,
    "lessonTitle": "Diarrhoeal Diseases: Cholera and Dysentery",
    "lessonId": "biology-f2-diarrhoeal-diseases-1",
    "order": 67,
    "learningObjectives": [
      "Identify the causative agents, signs, and transmission of cholera and dysentery",
      "Explain prevention and treatment of diarrhoeal diseases"
    ],
    "introduction": "Diarrhoea is a major cause of death in children, especially in areas with unsafe water. Today, we will learn about cholera and dysentery – two dangerous diarrhoeal diseases – and how to prevent them.",
    "keyPoints": [
      "Cholera: caused by Vibrio cholerae bacteria. Transmitted through contaminated water/food. Signs: severe watery diarrhoea (rice water stools), vomiting, rapid dehydration.",
      "Dysentery: caused by Shigella bacteria (bacillary) or Entamoeba histolytica (amoebic). Signs: bloody diarrhoea, fever, abdominal pain.",
      "Transmission: faecal-oral route (contaminated water, food, hands, flies).",
      "Prevention: safe water, handwashing, proper sanitation, food hygiene.",
      "Treatment: oral rehydration solution (ORS), zinc, antibiotics for severe cases."
    ],
    "detailedContent": "Cholera\n\nCausative agent: Bacterium Vibrio cholerae.\nSigns and symptoms:\n- Profuse, painless, watery diarrhoea (described as \"rice water\" stools)\n- Vomiting\n- Rapid dehydration (thirst, sunken eyes, low urine output)\n- Muscle cramps\n- If untreated, can lead to kidney failure and death within hours.\n\nTransmission: Faecal-oral route. Contaminated water (drinking or washing food), contaminated food (especially shellfish, raw vegetables), hands of infected persons, flies.\n\nDysentery\n\nTwo main types:\n1. Bacillary dysentery: caused by Shigella bacteria.\n2. Amoebic dysentery: caused by protozoan Entamoeba histolytica.\n\nSigns and symptoms:\n- Bloody diarrhoea (mucus and blood)\n- Fever\n- Abdominal pain and cramps\n- Tenesmus (painful straining)\n\nTransmission: Same as cholera – faecal-oral.\n\nPrevention and Control\n\n- Safe water: boil or chlorinate drinking water.\n- Handwashing with soap after toilet and before eating.\n- Proper sanitation: use latrines, avoid open defecation.\n- Food hygiene: cook food thoroughly, protect from flies.\n- Vaccination: oral cholera vaccine available in some areas.\n\nTreatment\n\n- Most important: Oral Rehydration Solution (ORS) – sugar and salt in clean water. Replace lost fluids.\n- Zinc supplements (reduce duration and severity).\n- Antibiotics for severe cases (doxycycline, azithromycin for cholera; ciprofloxacin for shigella).\n- Severe dehydration: intravenous fluids.\n\nIn Malawi, ORS packets are available at health centres. Communities are taught to make home-made ORS: 1 litre clean water + 6 level teaspoons sugar + half level teaspoon salt.",
    "summary": "Cholera (rice water stools) and dysentery (bloody diarrhoea) are caused by bacteria. Transmitted via contaminated water/food. Prevention: safe water, handwashing, sanitation. Treatment: ORS, zinc, antibiotics.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "ORS at Health Centres",
        "description": "Free ORS packets treat dehydration."
      },
      {
        "title": "Handwashing Campaigns",
        "description": "Promote handwashing with soap after toilet."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What are the signs of cholera?",
        "answer": "Severe watery diarrhoea (rice water stools), vomiting, dehydration.",
        "hint": "Rapid fluid loss."
      },
      {
        "question": "What is the main treatment for dehydration from diarrhoea?",
        "answer": "Oral Rehydration Solution (ORS)",
        "hint": "Sugar, salt, water."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 2",
    "topic": "Organic Chemistry",
    "lessonNumber": 1,
    "lessonTitle": "Alkanes and Alkenes – Properties and Uses",
    "lessonId": "chemistry-f2-hydrocarbons-1",
    "order": 68,
    "learningObjectives": [
      "Draw structures and name the first four alkanes (methane, ethane, propane, butane)",
      "Describe the test for unsaturation (bromine water) and distinguish between alkanes and alkenes"
    ],
    "introduction": "Organic chemistry is the chemistry of carbon compounds. The simplest organic compounds are hydrocarbons – made of only carbon and hydrogen. Today, we will learn about two families of hydrocarbons: ALKANES (saturated) and ALKENES (unsaturated).",
    "keyPoints": [
      "Hydrocarbon: compound containing only carbon and hydrogen.",
      "Saturated hydrocarbon: all carbon-carbon single bonds (alkanes). General formula CnH2n+2.",
      "Unsaturated hydrocarbon: contains at least one carbon-carbon double bond (alkenes). General formula CnH2n.",
      "Alkanes: methane (CH4), ethane (C2H6), propane (C3H8), butane (C4H10).",
      "Alkenes: ethene (C2H4), propene (C3H6), butene (C4H8).",
      "Test for unsaturation: add bromine water – alkene decolorises bromine (orange to colourless); alkane does not."
    ],
    "detailedContent": "What are Hydrocarbons?\n\nHydrocarbons are molecules that contain only carbon and hydrogen atoms. They are the main components of fossil fuels (petroleum, natural gas, coal).\n\nSaturated vs Unsaturated\n\nSaturated hydrocarbons (alkanes): All carbon-carbon bonds are single bonds. General formula: CnH2n+2.\n\nUnsaturated hydrocarbons (alkenes, alkynes): Contains at least one carbon-carbon double or triple bond. General formula for alkenes: CnH2n.\n\nAlkanes\n\n| Name | Formula | Condensed structural formula | Boiling point | Use |\n|------|---------|------------------------------|---------------|-----|\n| Methane | CH4 | CH4 | -162°C | Natural gas, cooking |\n| Ethane | C2H6 | CH3CH3 | -89°C | Fuel |\n| Propane | C3H8 | CH3CH2CH3 | -42°C | LPG (cooking, heating) |\n| Butane | C4H10 | CH3CH2CH2CH3 or CH3CH(CH3)CH3 | -0.5°C | Lighter fuel, camping gas |\n\nProperties of Alkanes:\n- Non-polar, insoluble in water.\n- Less dense than water.\n- Low boiling points (increase with chain length).\n- Generally unreactive but undergo: combustion (burn) and substitution with halogens (UV light needed).\n\nAlkenes\n\n| Name | Formula | Condensed structural formula | Use |\n|------|---------|------------------------------|-----|\n| Ethene | C2H4 | CH2=CH2 | Ripening fruit, making polymers (polyethene) |\n| Propene | C3H6 | CH3CH=CH2 | Making polypropene |\n| Butene | C4H8 | CH3CH2CH=CH2 or CH3CH=CHCH3 | Making synthetic rubber |\n\nProperties of Alkenes:\n- More reactive than alkanes due to the double bond.\n- Undergo addition reactions: bromination (test), hydrogenation, hydration.\n\nTest for Unsaturation (Bromine Water Test)\n\nAdd bromine water (orange) to the hydrocarbon.\n- Alkene: orange colour disappears (addition reaction).\n- Alkane: orange colour remains (no reaction).\n\nUses in Malawi:\n- Methane from biogas (animal waste) is used for cooking in some rural areas.\n- Ethene is used to ripen bananas and tomatoes (a small amount speeds ripening).\n- Polyethene (plastic) from ethene is used for bags, containers.",
    "summary": "Hydrocarbons: only C and H. Alkanes (saturated, single bonds): CnH2n+2. Alkenes (unsaturated, double bond): CnH2n. Bromine water test: alkene decolorises, alkane does not.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Biogas in Rural Areas",
        "description": "Methane from cow dung used for cooking."
      },
      {
        "title": "Fruit Ripening",
        "description": "Ethene gas from ripening fruit; farmers use calcium carbide to produce ethene."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the general formula for alkanes?",
        "answer": "CnH2n+2",
        "hint": "Saturated."
      },
      {
        "question": "What happens when bromine water is added to ethene?",
        "answer": "Bromine water decolorises (orange to colourless).",
        "hint": "Addition reaction."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Acids, Bases, and Salts",
    "lessonNumber": 1,
    "lessonTitle": "Preparation and Purification of Salts",
    "lessonId": "chemistry-f3-salts-1",
    "order": 69,
    "learningObjectives": [
      "Describe methods of preparing soluble salts (acid + metal, acid + base, acid + carbonate)",
      "Describe preparation of insoluble salts by precipitation"
    ],
    "introduction": "Salt is not just table salt (NaCl). In chemistry, a SALT is any ionic compound formed when the hydrogen ion of an acid is replaced by a metal ion or ammonium ion. Today, we will learn how to make and purify different salts.",
    "keyPoints": [
      "Soluble salts: prepared by (1) acid + metal; (2) acid + insoluble base; (3) acid + carbonate.",
      "Insoluble salts: prepared by precipitation – mix two soluble salts containing the required ions; the salt precipitates out.",
      "Purification: crystallisation (evaporate solvent, cool, crystals form), filtration, recrystallisation.",
      "Ionic equations: show only the reacting ions. For precipitation: Ag+(aq) + Cl-(aq) → AgCl(s)."
    ],
    "detailedContent": "What is a Salt?\n\nA salt is an ionic compound that contains a positive ion (cation, from base or metal) and a negative ion (anion, from the acid). For example, sodium chloride (Na+ and Cl-), copper(II) sulphate (Cu2+ and SO42-).\n\nMethods for Preparing Soluble Salts\n\nMethod A: Acid + Metal\nFor metals above hydrogen in reactivity series (not too reactive like Na, K). Example: Mg + H2SO4 → MgSO4 + H2.\nProcedure: Add excess metal to dilute acid until no more fizzing. Filter off excess metal. Evaporate filtrate to crystallise.\n\nMethod B: Acid + Insoluble Base (metal oxide or hydroxide)\nExample: CuO + H2SO4 → CuSO4 + H2O.\nProcedure: Warm the acid, add powdered base until no more dissolves (excess). Filter. Evaporate filtrate to get crystals.\n\nMethod C: Acid + Carbonate\nExample: CaCO3 + 2HCl → CaCl2 + CO2 + H2O.\nProcedure: Add carbonate to acid until effervescence stops (excess). Filter. Evaporate.\n\nPreparation of Insoluble Salts (Precipitation)\n\nAn insoluble salt forms when two soluble salts are mixed and the product is not soluble.\n\nExample: Preparation of lead(II) iodide (PbI2 – yellow)\nSoluble reactants: lead(II) nitrate (Pb(NO3)2) and potassium iodide (KI).\nPb(NO3)2(aq) + 2KI(aq) → PbI2(s) + 2KNO3(aq)\n\nProcedure: Dissolve each salt in water. Mix solutions. Filter to collect precipitate. Wash with distilled water. Dry.\n\nIonic equation: Pb2+(aq) + 2I-(aq) → PbI2(s)\n\nPurification by Crystallisation\n\nTo obtain pure, dry crystals from a solution:\n- Heat the solution to evaporate some water until concentrated.\n- Allow to cool slowly. Crystals form.\n- Filter to collect crystals.\n- Wash with a little cold solvent (e.g., distilled water).\n- Dry between filter paper or in oven (if stable).\n\nRecrystallisation for further purity: dissolve impure crystals in minimum hot solvent, cool slowly, pure crystals form.\n\nCommon salts in Malawi:\n- Sodium chloride (table salt) – from evaporation (salt pans in Lake Chilwa).\n- Copper(II) sulphate – used in agriculture as fungicide (bordeaux mixture).\n- Magnesium sulphate (Epsom salt) – medicine.",
    "summary": "Salts are ionic compounds from acids. Soluble salts: acid + metal, acid + base, acid + carbonate. Insoluble salts: precipitation reaction. Purify by crystallisation and filtration.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Lake Chilwa Salt",
        "description": "Salt obtained by evaporation (crystallisation) from brine."
      },
      {
        "title": "Copper Sulphate Fungicide",
        "description": "Used mixed with lime to spray against fungal diseases."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What method would you use to prepare copper(II) sulphate from copper(II) oxide?",
        "answer": "Acid + insoluble base (CuO + H2SO4)",
        "hint": "CuO is a metal oxide."
      },
      {
        "question": "Write the ionic equation for the precipitation of silver chloride.",
        "answer": "Ag+(aq) + Cl-(aq) → AgCl(s)",
        "hint": "Silver nitrate + sodium chloride."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 2",
    "topic": "Machines",
    "lessonNumber": 1,
    "lessonTitle": "Simple Machines: Levers, Inclined Planes, Pulleys",
    "lessonId": "physics-f2-machines-1",
    "order": 70,
    "learningObjectives": [
      "Define a machine and calculate mechanical advantage (MA = load/effort)",
      "Explain how levers, inclined planes, and pulleys work"
    ],
    "introduction": "Why is it easier to lift a heavy load using a lever or a pulley? These are SIMPLE MACHINES. They multiply force or change its direction. Today, we will learn how machines work and how to calculate their advantage.",
    "keyPoints": [
      "Machine: device that makes work easier by multiplying force or changing direction.",
      "Load: force applied by the machine (output). Effort: force applied to the machine (input).",
      "Mechanical Advantage (MA) = Load / Effort.",
      "Levers: rigid bar pivoted at a fulcrum. MA = distance from effort to fulcrum / distance from load to fulcrum.",
      "Inclined plane: sloping surface. MA = length of slope / height.",
      "Pully system: MA = number of supporting rope segments."
    ],
    "detailedContent": "What is a Machine?\n\nA machine is a device that helps us do work more easily. It can:\n- Multiply force (use a small effort to move a large load)\n- Change the direction of force (e.g., pulling down to lift up)\n- Increase speed (but then force decreases)\n\nMechanical Advantage (MA)\n\nMA = Load ÷ Effort\n- If MA > 1, machine multiplies force.\n- If MA = 1, machine only changes direction.\n- If MA < 1, machine increases speed.\n\nLevers\n\nA lever is a rigid bar that pivots on a fixed point called the fulcrum.\n\nThere are three classes of levers, but for Form 2 we focus on the principle:\n\nMA = (distance from effort to fulcrum) ÷ (distance from load to fulcrum)\n\nExample: A crowbar used to lift a rock. If the effort arm is 1.5 m and the load arm is 0.3 m, MA = 1.5 / 0.3 = 5. An effort of 100 N can lift a 500 N load.\n\nInclined Planes\n\nA sloping surface like a ramp. MA = length of slope ÷ height.\n\nExample: A ramp 4 m long raising a load 1 m high: MA = 4 / 1 = 4. You need 4 times less effort, but you push the load 4 times farther.\n\nPulleys\n\nA single fixed pulley changes direction but MA = 1 (does not multiply force). A movable pulley or pulley system with multiple ropes can multiply force.\n\nFor a pulley system: MA = number of rope segments supporting the load.\n\nExample: A system with 3 rope segments supporting the load has MA = 3. Effort 100 N can lift 300 N.\n\nAdvantage of Using Machines\n- Reduce the effort needed.\n- Make work safer (e.g., using a lever to lift instead of lifting by hand).\n- Change direction to make work easier.\n\nHowever, work input is always greater than work output because some energy is lost to friction. No machine is 100% efficient.",
    "summary": "Machines multiply force (MA = load/effort). Levers, inclined planes, and pulleys are simple machines. MA depends on distances (lever) or number of rope segments (pulley).",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Crowbar",
        "description": "A lever used to lift heavy stones or dig tree stumps."
      },
      {
        "title": "Ramp for Wheelbarrow",
        "description": "An inclined plane to push a loaded wheelbarrow onto a truck."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Calculate MA if a load of 200 N is lifted with an effort of 50 N.",
        "answer": "4",
        "hint": "MA = load/effort = 200/50 = 4"
      },
      {
        "question": "A ramp is 6 m long and 1.5 m high. What is its MA?",
        "answer": "4",
        "hint": "MA = length/height = 6/1.5 = 4"
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 3",
    "topic": "Work, Energy, Power and Machines",
    "lessonNumber": 1,
    "lessonTitle": "Velocity Ratio and Efficiency of Machines",
    "lessonId": "physics-f3-mechanical-efficiency-1",
    "order": 71,
    "learningObjectives": [
      "Define velocity ratio (VR) and efficiency of a machine",
      "Calculate efficiency using MA and VR (Efficiency = MA/VR × 100%)"
    ],
    "introduction": "Not all the work you put into a machine comes out as useful work – some is lost to friction. Today, we will learn how to measure the performance of a machine using velocity ratio and efficiency.",
    "keyPoints": [
      "Velocity Ratio (VR): ratio of distance moved by effort to distance moved by load. For an ideal machine (no friction), MA = VR.",
      "In real machines, MA is less than VR due to friction.",
      "Efficiency (%) = (MA / VR) × 100% = (Work output / Work input) × 100%.",
      "Efficiency is always less than 100% because some energy is lost as heat, sound, etc."
    ],
    "detailedContent": "Velocity Ratio (VR)\n\nVelocity ratio is the ratio of the distance moved by the effort to the distance moved by the load.\n\nVR = (distance moved by effort) / (distance moved by load)\n\nFor simple machines:\n- Lever: VR = effort arm length / load arm length\n- Inclined plane: VR = length of slope / height\n- Pulley system: VR = number of rope segments supporting the load\n\nIn an ideal machine (no friction), Mechanical Advantage (MA) equals Velocity Ratio (VR). But real machines have friction, so MA is less than VR.\n\nEfficiency\n\nEfficiency tells us how well a machine converts input work into useful output work.\n\nEfficiency (%) = (MA / VR) × 100%\n\nOr: Efficiency (%) = (Work output / Work input) × 100%\n\nExample: A pulley system has VR = 4. An effort of 150 N lifts a load of 500 N.\nMA = 500/150 = 3.33\nEfficiency = (3.33 / 4) × 100% = 83.25%\n\nWork output = Load × distance moved by load\nWork input = Effort × distance moved by effort\n\nReasons for less than 100% efficiency:\n- Friction between moving parts (converted to heat).\n- Air resistance.\n- Deformation of parts (some energy stored as elastic potential, not used).\n- Sound energy produced.\n\nImproving efficiency: lubricate moving parts, use ball bearings, streamline shapes.\n\nMalawi Example: A bicycle is a machine. The pedals are the effort, the chain moves, and the rear wheel turns. Some energy is lost to friction in the chain and bearings, so the bicycle is not 100% efficient.\n\nA village water pump (hand pump) uses a lever. MA reduces the force needed to lift water, but some effort is lost in friction of the piston.",
    "summary": "Velocity ratio (VR) = distance effort / distance load. Efficiency = (MA/VR)×100% = (work output/work input)×100%. Efficiency always less than 100% due to friction and other losses.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Bicycle Efficiency",
        "description": "Friction in chain and bearings reduces efficiency."
      },
      {
        "title": "Hand Pump Lever",
        "description": "MA reduces effort, but friction in piston reduces efficiency."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A lever has VR = 3 and MA = 2.5. Calculate efficiency.",
        "answer": "83.3%",
        "hint": "Efficiency = (2.5/3)×100 = 83.3%"
      },
      {
        "question": "Why is efficiency never 100%?",
        "answer": "Energy is lost as heat due to friction, sound, etc.",
        "hint": "Not all input work is converted to useful output."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Agro-based Industries",
    "lessonNumber": 1,
    "lessonTitle": "Agro-based Industries in Malawi and Their Role",
    "lessonId": "agriculture-f1-agro-industries-1",
    "order": 72,
    "learningObjectives": [
      "Identify agro-based industries in Malawi",
      "Explain the role of agro-based industries in supporting the growing population"
    ],
    "introduction": "Malawi’s agricultural products are not only consumed fresh – many are processed into other goods. These processing industries are called AGRO-BASED INDUSTRIES. Today, we will learn about them and how they help our economy.",
    "keyPoints": [
      "Agro-based industry: uses agricultural products as raw materials to produce other goods.",
      "Examples: maize milling (flour), groundnut processing (butter, cooking oil), tobacco processing, tea processing, sugar refining, cotton ginning, dairy processing.",
      "Roles: creates employment, adds value to products, reduces post-harvest losses, generates foreign exchange, provides food security."
    ],
    "detailedContent": "What are Agro-based Industries?\n\nAgro-based industries are factories or small-scale enterprises that process agricultural raw materials into finished or semi-finished products. They add value to farm products.\n\nExamples in Malawi:\n\n- Maize milling: produces maize flour (nsima) – many small hammer mills in towns and villages.\n- Groundnut processing: produces groundnut butter (chigumula) and cooking oil.\n- Tobacco processing: leaf grading, threshing, and redrying for export.\n- Tea processing: withering, rolling, fermentation, drying, and grading at estates (e.g., Thyolo, Mulanje).\n- Sugar refining: Illovo Sugar Company produces sugar from sugar cane at Nchalo and Dwangwa.\n- Cotton ginning: separates cotton fibres from seeds; fibres used for textiles, seeds for cooking oil.\n- Dairy processing: milk pasteurisation, yogurt and cheese production.\n- Fruit and vegetable processing: canning, juicing, drying (e.g., mango juice, dried bananas).\n\nRole of Agro-based Industries\n\n- Employment creation: thousands of workers in factories, plantations, and transport.\n- Value addition: processed products sell for more than raw commodities. Example: 1 kg of groundnuts (500 MK) becomes groundnut butter (1,500 MK).\n- Reduction of post-harvest losses: processing extends shelf life (e.g., dried fish, canned tomatoes).\n- Foreign exchange earnings: tea, sugar, tobacco, and cotton exports bring money into Malawi.\n- Food security: processed foods (e.g., fortified flour) improve nutrition and food availability.\n- Support to farmers: industries create a reliable market for farmers’ produce.\n\nMalawi Example: Illovo Sugar’s Dwangwa and Nchalo estates provide direct employment to thousands. Farmers who grow sugar cane have a guaranteed buyer. The sugar is then sold locally and exported to neighbouring countries.",
    "summary": "Agro-based industries process agricultural raw materials. Examples: maize milling, groundnut butter, tea, sugar, cotton. They create jobs, add value, reduce losses, and earn foreign exchange.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Sugar Production",
        "description": "Illovo Sugar processes cane into sugar at Nchalo and Dwangwa."
      },
      {
        "title": "Tea Processing",
        "description": "Tea estates in Mulanje and Thyolo produce tea for export."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name three agro-based industries in Malawi.",
        "answer": "Maize milling, groundnut processing, tea processing, sugar refining, cotton ginning.",
        "hint": "Processes that add value to farm products."
      },
      {
        "question": "How do agro-based industries help farmers?",
        "answer": "They provide a reliable market and reduce post-harvest losses.",
        "hint": "Farmers can sell their produce to industries."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 1",
    "topic": "Food Distribution",
    "lessonNumber": 1,
    "lessonTitle": "Food Security and Food for Self-sufficiency",
    "lessonId": "agriculture-f1-food-security-1",
    "order": 73,
    "learningObjectives": [
      "Differentiate between food security and food self-sufficiency",
      "Explain the relationship between family size and food security"
    ],
    "introduction": "Having enough food to eat is essential. But FOOD SECURITY means more than just having food – it means access to safe, nutritious food at all times. Today, we will learn the difference between food security and self-sufficiency, and how family size affects food availability.",
    "keyPoints": [
      "Food security: when all people, at all times, have access to sufficient, safe, nutritious food to maintain a healthy life.",
      "Food self-sufficiency: ability to produce enough food from a country’s own resources to meet its needs. Does not consider access or distribution.",
      "A country can be food self-sufficient but still have food insecure individuals (e.g., due to poverty or poor distribution).",
      "Larger families often experience food insecurity because the same amount of food must be shared among more people.",
      "Solutions: family planning, improved agricultural productivity, income diversification."
    ],
    "detailedContent": "Food Security vs Food Self-sufficiency\n\nFood security has four pillars:\n1. Availability: enough food produced or imported.\n2. Access: people have enough money or resources to obtain food.\n3. Utilisation: food is nutritious and safe, and people have knowledge to use it well (e.g., cooking, storage).\n4. Stability: access to food is not disrupted by shocks (drought, price spikes).\n\nFood self-sufficiency means a country produces most of its own food without relying on imports. Malawi is largely self-sufficient in maize during good years but may import during droughts.\n\nDifference: A country can be self-sufficient (e.g., produces enough maize) but if distribution is poor or prices are high, some people may still be food insecure. Conversely, a country that imports food can still be food secure if imports are reliable and people can afford them.\n\nFamily Size and Food Security\n\nIn a farming household, the amount of food produced depends on land size and productivity. If the family size increases but land and productivity stay the same, food per person decreases. This can lead to food insecurity.\n\nEffects of large family size:\n- Less food per person.\n- Increased poverty (more money spent on food, less on education, health).\n- Children may suffer malnutrition (stunting, underweight).\n- Land fragmentation as children inherit small plots.\n\nSolutions:\n- Family planning to manage family size.\n- Intensive agriculture to produce more on same land (use fertiliser, improved seeds, irrigation).\n- Income diversification (off-farm work, small business) to buy food.\n- Food storage and preservation to smooth consumption across seasons.\n\nMalawi Example: During the 2015/16 drought, Malawi experienced food insecurity despite being normally self-sufficient in maize. Poor households had to rely on food aid. Large families were hit hardest because they had more mouths to feed with limited resources.",
    "summary": "Food security: access to safe, nutritious food at all times. Self-sufficiency: producing enough food nationally. Large families often face food insecurity due to limited resources per person.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Drought and Food Insecurity",
        "description": "2015/16 drought caused food shortages even in normally self-sufficient areas."
      },
      {
        "title": "Family Planning",
        "description": "Smaller families can achieve better food security."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between food security and food self-sufficiency?",
        "answer": "Self-sufficiency is about production; security includes access, utilisation, and stability.",
        "hint": "Production vs all pillars."
      },
      {
        "question": "How does family size affect food security?",
        "answer": "Larger families have to share food, leading to less per person.",
        "hint": "More mouths to feed."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Mushroom Production",
    "lessonNumber": 1,
    "lessonTitle": "Importance and Husbandry Practices for Mushroom Production",
    "lessonId": "agriculture-f3-mushroom-1",
    "order": 74,
    "learningObjectives": [
      "Explain the importance of mushrooms",
      "Describe the husbandry practices for mushroom production (site selection, substrate preparation, fruiting, harvesting)"
    ],
    "introduction": "Mushrooms are not plants – they are fungi. They grow in the dark and can be cultivated for food and income. Today, we will learn how to grow mushrooms on a small scale in Malawi.",
    "keyPoints": [
      "Importance: nutritious (protein, vitamins), quick to grow, can be grown on waste materials, good income source.",
      "Species cultivated in Malawi: oyster mushroom (Pleurotus), button mushroom.",
      "Husbandry: site selection (clean, dark, cool, humid), substrate preparation (maize stalks, cotton waste, sterilisation), seeding (spawn), fruiting management (humidity, temperature), harvesting (cut before cap opens)."
    ],
    "detailedContent": "Importance of Mushrooms\n\n- Nutrition: mushrooms are low in fat, high in protein, and contain vitamins B, D, and minerals like selenium and potassium.\n- Quick production cycle: from spawning to harvest, oyster mushrooms take 3-4 weeks.\n- Use of waste: mushrooms grow on agricultural waste (maize stalks, cotton waste, sawdust), converting waste into food.\n- Income: mushroom growing requires small space and low capital, can be done in a small hut or room.\n- Medicinal: some mushrooms have health benefits (immune boosting).\n\nSpecies of Mushrooms Cultivated in Malawi\n\n- Oyster mushroom (Pleurotus ostreatus): most common, grows on many substrates, fast-growing.\n- Button mushroom (Agaricus bisporus): requires composted substrate, more difficult.\n\nHusbandry Practices for Mushroom Production\n\n1. Site selection: Choose a clean, dark, well-ventilated room or shed. Temperature 20-28°C, humidity 80-90%. No direct sunlight.\n\n2. Substrate preparation: Common substrate: maize stalks (stover). Chop into 5-10 cm pieces. Soak in water for 12-24 hours. Pasteurise (heat in hot water at 70-80°C for 1-2 hours) to kill contaminants. Drain and cool.\n\n3. Seeding (spawning): Mix mushroom spawn (mushroom \"seeds\" – mycelium on grain) with pasteurised substrate. Fill into clean plastic bags (perforated small holes). Seal.\n\n4. Incubation: Place bags in dark, warm place (25-28°C) for 2-3 weeks. Mycelium grows and colonises the substrate (white threads).\n\n5. Fruiting: Cut small slits in bags. Lower temperature (20-25°C) and increase humidity (mist water). After 1-2 weeks, mushroom pins appear and grow into mature mushrooms.\n\n6. Harvesting: Harvest just before the cap flattens and edges turn upward. Twist and pull gently. Mushrooms grow in flushes (every 7-10 days for 2-3 flushes).\n\n7. Post-harvest: Fresh mushrooms are perishable. Can be sold fresh, dried (sun or oven), or pickled.\n\nMalawi Example: Youth groups in Lilongwe and Mzuzu grow oyster mushrooms in small huts. They sell fresh mushrooms to hotels and restaurants. They also dry mushrooms for sale during off-season.",
    "summary": "Mushrooms are nutritious, grow quickly on waste, and provide income. Cultivate in clean, dark, humid spaces. Steps: substrate preparation, spawning, incubation, fruiting, harvesting.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Oyster Mushroom",
        "description": "Grows on maize stalks; common in small-scale production."
      },
      {
        "title": "Dried Mushrooms",
        "description": "Sun-dried mushrooms preserved for later sale."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name one substrate used for growing oyster mushrooms.",
        "answer": "Maize stalks, cotton waste, sawdust",
        "hint": "Agricultural waste."
      },
      {
        "question": "Why must the substrate be pasteurised?",
        "answer": "To kill competing fungi and bacteria.",
        "hint": "Sterilisation prevents contamination."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Pasture Production",
    "lessonNumber": 1,
    "lessonTitle": "Types of Pastures and Methods of Establishment",
    "lessonId": "agriculture-f3-pasture-1",
    "order": 75,
    "learningObjectives": [
      "Identify types of pastures (indigenous and exotic)",
      "Describe methods of pasture establishment (broadcasting, under-sowing, over-sowing, drilling)"
    ],
    "introduction": "Livestock need grass and legumes for feed. A PASTURE is a piece of land covered with grass and other plants that animals graze. Today, we will learn about different pasture types and how to plant them.",
    "keyPoints": [
      "Indigenous pastures: native grasses (e.g., Hyparrhenia, Setaria). Hardy, require less inputs, lower yield.",
      "Exotic pastures: introduced species (e.g., Napier grass (Pennisetum purpureum), Rhodes grass, Guinea grass, legume like Stylosanthes). High yield, need more management.",
      "Methods of establishment: broadcasting (scattering seed), under-sowing (planting pasture with a crop), over-sowing (sowing into existing vegetation), drilling (using a seed drill).",
      "Seed rate: amount of seed per hectare, depends on seed size and purity."
    ],
    "detailedContent": "Types of Pastures\n\nIndigenous pastures:\n- Native grasses that grow naturally. Examples: Hyparrhenia (thatching grass), Setaria, Brachiaria.\n- Advantages: hardy, drought-resistant, adapted to local conditions, cheap.\n- Disadvantages: low nutritive value, low yield.\n\nExotic pastures:\n- Introduced species that are high-yielding and nutritious.\n- Grasses: Napier grass (Pennisetum purpureum) – tall, high yield, cut-and-carry system; Rhodes grass (Chloris gayana); Guinea grass (Panicum maximum).\n- Legumes: Stylosanthes, Desmodium, Lablab. (Legumes fix nitrogen, improve pasture quality.)\n- Advantages: high yield, good protein content.\n- Disadvantages: require more management, fertiliser, and water; can be less drought-tolerant.\n\nMethods of Pasture Establishment\n\n1. Broadcasting: Scattering seeds by hand or mechanical spreader over prepared land. Seeds may be mixed with sand for even distribution. Suitable for small areas. After broadcasting, lightly harrow or roll to cover seeds.\n\n2. Under-sowing: Planting pasture seeds at the same time as a cereal crop (e.g., maize). The cereal provides shade and suppresses weeds initially. When the cereal is harvested, the pasture is already established. This method reduces erosion and makes use of residual moisture.\n\n3. Over-sowing: Broadcasting seeds into an existing pasture without tilling. The seeds germinate and fill gaps. Usually done at start of rains.\n\n4. Drilling: Using a seed drill to place seeds in rows at specific depth and spacing. Most efficient method for large areas, ensures even germination.\n\n5. Vegetative propagation: For Napier grass, use stem cuttings planted in rows, not seeds.\n\nFactors affecting seed rate: seed size, germination percentage, purity, method of sowing, and desired plant density.\n\nMalawi Example: In dairy farming areas (Mzuzu, Lilongwe), farmers grow Napier grass along contours for cut-and-carry feeding. They plant stem cuttings spaced 1 m × 0.5 m.",
    "summary": "Pastures: indigenous (native, hardy) or exotic (high-yielding, need management). Establishment methods: broadcasting, under-sowing, over-sowing, drilling. Choose method based on scale and resources.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Napier Grass",
        "description": "Common exotic grass used for zero-grazing dairy cows."
      },
      {
        "title": "Under-sowing with Maize",
        "description": "Planting pastures like Desmodium with maize to utilise residual moisture."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the advantage of exotic pastures over indigenous?",
        "answer": "Higher yield and better nutritive value.",
        "hint": "Introduced species."
      },
      {
        "question": "What is under-sowing?",
        "answer": "Planting pasture seeds with a cereal crop at the same time.",
        "hint": "Pasture establishes under the main crop."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 2",
    "topic": "Micro-organisms",
    "lessonNumber": 1,
    "lessonTitle": "Groups and Structure of Micro-organisms",
    "lessonId": "biology-f2-microorganisms-1",
    "order": 76,
    "learningObjectives": [
      "List the five main groups of micro-organisms (bacteria, viruses, fungi, protozoa, algae)",
      "Describe the structure of a typical bacterium and virus"
    ],
    "introduction": "They are too small to see with your eyes, but they are everywhere. Some cause disease; others are essential for life. Today, we will learn about the five groups of MICRO-ORGANISMS and their structures.",
    "keyPoints": [
      "Bacteria: single-celled prokaryotes (no nucleus). Shapes: cocci (spheres), bacilli (rods), spirilla (spiral).",
      "Viruses: non-living outside host. Protein coat plus genetic material. Require host cell to replicate.",
      "Fungi: include moulds, yeasts, mushrooms.",
      "Protozoa: single-celled eukaryotes. Some cause malaria (Plasmodium).",
      "Algae: simple photosynthetic organisms."
    ],
    "detailedContent": "The Five Groups\n\n1. Bacteria\n- Single-celled, no nucleus (prokaryote). Cell wall, cell membrane, cytoplasm, sometimes flagella.\n- Shapes: round (cocci), rod (bacilli), spiral (spirilla).\n- Reproduce by binary fission (splitting into two). Very fast.\n- Where? Soil, water, inside our bodies, on surfaces.\n- Examples: Lactobacillus (makes yogurt, sour milk), E. coli (gut bacteria), Salmonella (food poisoning).\n\n2. Viruses\n- Much smaller than bacteria. Not cells – just genetic material (DNA or RNA) inside a protein coat.\n- Cannot reproduce alone; they invade a host cell and use its machinery to make copies.\n- Examples: HIV, flu virus, common cold, maize streak virus (disease in maize).\n\n3. Fungi\n- Include yeasts, moulds, mushrooms.\n- Cell walls made of chitin.\n- Yeasts (single-celled) are used in baking and brewing: Saccharomyces cerevisiae makes bread rise and beer ferment.\n- Moulds (Penicillium) produce antibiotics. Others spoil bread and fruit.\n\n4. Protozoa\n- Single-celled eukaryotes (have nucleus). Live in water or inside animals.\n- Some cause disease: Plasmodium (malaria), Entamoeba (dysentery).\n\n5. Algae\n- Simple photosynthetic organisms. Some single-celled, some multicellular.\n- Important in aquatic food chains. Some produce oxygen. Some used as food (spirulina).\n\nStructure of a Bacterium (typical)\n- Capsule (slime layer) – protects.\n- Cell wall – gives shape (peptidoglycan).\n- Cell membrane – controls entry/exit.\n- Cytoplasm – contains ribosomes and circular DNA (nucleoid, no membrane).\n- Flagella – for movement (some).\n- Pili – for attachment.\n\nStructure of a Virus\n- Core: genetic material (DNA or RNA)\n- Capsid: protein coat surrounding the genetic material\n- Envelope (some viruses): lipid layer from host cell\n\nViruses are NOT cells – they cannot carry out metabolism or reproduce on their own. They are considered \"borderline living\".\n\nConditions for Growth of Bacteria\n- Warmth (20-40°C)\n- Moisture\n- Nutrients (carbon, nitrogen)\n- Oxygen (for aerobes) or absence for anaerobes\n- Neutral pH (most)\n\nMalawi Example: Lactic acid bacteria are used to ferment milk into traditional fermented milk (kumachala). This preserves milk longer.",
    "summary": "Five groups: bacteria (prokaryotes), viruses (non-living, require host), fungi (yeasts, moulds), protozoa (single-celled parasites), algae (photosynthetic). Bacteria have cell wall but no nucleus; viruses have protein coat and genetic material.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Kumachala",
        "description": "Milk fermented by lactic acid bacteria."
      },
      {
        "title": "Maize Streak Virus",
        "description": "Virus disease transmitted by leafhoppers reduces yields."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name one beneficial fungus used in baking.",
        "answer": "Yeast (Saccharomyces cerevisiae)",
        "hint": "Makes bread rise."
      },
      {
        "question": "What structure do viruses lack that makes them non-living?",
        "answer": "They have no cell structure and cannot reproduce without a host.",
        "hint": "Not cells."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 2",
    "topic": "Micro-organisms",
    "lessonNumber": 2,
    "lessonTitle": "Role of Micro-organisms: Decomposers, Symbionts, Pathogens",
    "lessonId": "biology-f2-microorganisms-2",
    "order": 77,
    "learningObjectives": [
      "Explain the role of micro-organisms as decomposers, symbionts, parasites, and in biotechnology",
      "Describe methods of food preservation (drying, salting, refrigeration, canning)"
    ],
    "introduction": "Micro-organisms are not all bad. They help decompose dead matter, fix nitrogen, produce food, and even make medicine. But some cause disease. Today, we will learn the good and bad roles of microbes.",
    "keyPoints": [
      "Decomposers: bacteria and fungi break down dead organisms, recycling nutrients.",
      "Symbionts: mutualistic relationships – Rhizobium bacteria fix nitrogen in legume roots; gut bacteria help digestion.",
      "Parasites: cause disease – pathogens (cholera, malaria, ringworm).",
      "Biotechnology: use of microbes to produce bread, beer, yogurt, antibiotics, biogas.",
      "Food preservation: drying, salting, refrigeration, canning – all inhibit microbial growth."
    ],
    "detailedContent": "Roles of Micro-organisms\n\n1. Decomposers\n- Bacteria and fungi break down dead plants and animals, returning nutrients (e.g., carbon, nitrogen) to the soil.\n- Without decomposers, dead matter would accumulate, and nutrients would be locked up.\n\n2. Symbionts (Mutualistic)\n- Rhizobium bacteria: live in root nodules of legumes. They convert atmospheric nitrogen into ammonia (nitrogen fixation), which the plant uses. In return, plants provide carbohydrates.\n- Gut bacteria: in humans and animals, help digest cellulose (ruminants) and produce vitamins (e.g., vitamin K).\n\n3. Parasites (Pathogens)\n- Cause diseases in plants, animals, and humans.\n- Examples: Vibrio cholerae (cholera), Plasmodium (malaria), HIV (AIDS), Mycobacterium tuberculosis (TB), maize streak virus, ringworm (fungus).\n\n4. Biotechnology\n- Bread: yeast (Saccharomyces cerevisiae) produces carbon dioxide that makes dough rise.\n- Beer and wine: yeast ferments sugars into alcohol.\n- Yoghurt: Lactobacillus bacteria ferment milk, producing lactic acid that thickens milk.\n- Antibiotics: Penicillium mould produces penicillin that kills bacteria.\n- Biogas: bacteria break down organic waste to produce methane (biogas for cooking).\n\nFood Preservation\n\nFood spoilage occurs when microbes grow. Preservation methods stop or slow microbial growth.\n\n- Drying: removes moisture (e.g., dried fish, maize grains). Microbes need water.\n- Salting: high salt concentration draws water out of microbes (e.g., salted fish, meat).\n- Refrigeration: low temperature slows microbial growth (e.g., fresh vegetables, milk).\n- Freezing: stops growth (e.g., frozen meat, vegetables).\n- Canning: heat sterilises food in sealed containers (e.g., canned tomatoes, baked beans).\n- Smoking: heat and chemicals from smoke preserve meat/fish.\n- Pickling: acidic environment (vinegar) inhibits microbes (e.g., pickled onions).\n\nMalawi Example: Many households preserve fish by sun-drying (usipa). Vegetables are sun-dried (mkhwani). Maize is stored dry in granaries. Some use salt to preserve meat.",
    "summary": "Micro-organisms decompose (recycle), fix nitrogen (symbiosis), cause disease (parasites), and produce food (biotechnology). Preserve food by drying, salting, refrigeration, canning to inhibit microbes.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Sun-dried Fish",
        "description": "Usipa dried on racks to preserve for months."
      },
      {
        "title": "Rhizobium and Groundnuts",
        "description": "Bacteria in root nodules fix nitrogen."
      }
    ],
    "practiceQuestions": [
      {
        "question": "How do Rhizobium bacteria benefit legume plants?",
        "answer": "They fix atmospheric nitrogen into usable form.",
        "hint": "Nitrogen fixation."
      },
      {
        "question": "Why does salting preserve meat?",
        "answer": "Salt draws water out of microbes, inhibiting growth.",
        "hint": "Osmosis."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Separation Techniques",
    "lessonNumber": 1,
    "lessonTitle": "Filtration, Decantation, and Centrifugation",
    "lessonId": "chemistry-f1-separation-1",
    "order": 78,
    "learningObjectives": [
      "Describe filtration, decantation, and centrifugation as methods for separating mixtures",
      "Choose the appropriate method for a given mixture"
    ],
    "introduction": "When you have a mixture, you often need to separate its components. The method you choose depends on the properties of the substances. Today, we will learn three methods: filtration, decantation, and centrifugation.",
    "keyPoints": [
      "Filtration: separates insoluble solid from liquid using filter paper/funnel. Solid residue stays in filter paper; liquid (filtrate) passes through.",
      "Decantation: pouring off liquid after solid has settled. Less efficient than filtration.",
      "Centrifugation: spinning a mixture at high speed so denser particles settle at the bottom. Used in medical labs (blood separation)."
    ],
    "detailedContent": "Filtration\n\nUsed to separate an insoluble solid from a liquid.\n\nEquipment: filter paper, funnel, beaker, stirring rod.\nProcedure: Fold filter paper into a cone, place in funnel. Pour mixture through filter paper. Solid particles are trapped (residue), liquid passes through (filtrate).\n\nExamples: sand from water, tea leaves from tea, chalk powder from water.\n\nDecantation\n\nUsed to separate a liquid from a solid that has settled at the bottom.\n\nProcedure: Allow mixture to stand so solid settles. Gently pour off the liquid into another container, leaving the solid behind.\n\nExamples: muddy water (pour off clear water), separating cooking oil from sediment.\n\nNot suitable for fine particles that float or are slow to settle.\n\nCentrifugation\n\nUsed to separate fine solid particles that do not settle easily, or to separate liquids of different densities.\n\nPrinciple: spinning creates centrifugal force, pushing denser particles to the bottom.\n\nEquipment: centrifuge machine with test tubes.\n\nExamples:\n- Medical lab: separation of blood plasma from red blood cells.\n- Separation of cream from milk (cream rises to top; in a centrifuge, fat separates).\n- Separating chalk powder from water (instead of waiting hours).\n\nChoosing the right method:\n- Sand + water → filtration.\n- Muddy water after rain (large particles settle) → decantation.\n- Blood (cells too small to settle quickly) → centrifugation.",
    "summary": "Filtration separates insoluble solids from liquids. Decantation pours off liquid after settling. Centrifugation uses spinning to separate fine particles or different densities.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Muddy Water Decantation",
        "description": "Pour off clean water after particles settle in a bucket."
      },
      {
        "title": "Centrifuge in Hospital",
        "description": "Separates blood cells from plasma for testing."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which method would you use to separate sand from water?",
        "answer": "Filtration",
        "hint": "Sand is insoluble solid."
      },
      {
        "question": "Why is centrifugation used for blood instead of decantation?",
        "answer": "Blood cells are too fine and settle too slowly.",
        "hint": "Need faster separation."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Separation Techniques",
    "lessonNumber": 2,
    "lessonTitle": "Distillation and Chromatography",
    "lessonId": "chemistry-f1-separation-2",
    "order": 79,
    "learningObjectives": [
      "Describe distillation (simple and fractional) and chromatography",
      "Explain how chromatography separates mixtures of soluble substances"
    ],
    "introduction": "Two powerful methods for separating mixtures are DISTILLATION (for liquids with different boiling points) and CHROMATOGRAPHY (for dissolved substances). Today, we will learn how they work and where they are used.",
    "keyPoints": [
      "Simple distillation: separates a liquid from a solution (e.g., pure water from salt water).",
      "Fractional distillation: separates liquids with close boiling points (e.g., crude oil fractions).",
      "Paper chromatography: separates mixtures of dyes or pigments based on different solubility in a solvent.",
      "Chromatography uses a stationary phase (paper) and mobile phase (solvent). Components travel at different speeds."
    ],
    "detailedContent": "Simple Distillation\n\nUsed to separate a pure liquid from a solution where the solute is non-volatile (e.g., salt from water).\n\nEquipment: distillation flask, condenser, receiving flask, heat source.\n\nProcedure: Heat the solution. The liquid (water) boils, turns to vapour, passes through condenser where it cools and condenses back to liquid, and is collected. Solute (salt) remains in the flask.\n\nExample: Obtaining pure water from tap water or sea water.\n\nFractional Distillation\n\nUsed to separate two or more liquids with different boiling points that are close to each other (e.g., ethanol from water, crude oil fractions).\n\nEquipment: fractionating column (packed with glass beads) between flask and condenser.\n\nProcedure: When the mixture is heated, liquids vapourise. The fractionating column allows repeated condensation and evaporation, separating components by boiling point. Lower boiling point liquid condenses at top and is collected first.\n\nExample: Separating ethanol (boiling point 78°C) from water (100°C). Ethanol distils first.\n\nPaper Chromatography\n\nUsed to separate mixtures of soluble coloured substances (inks, dyes, plant pigments) and also colourless substances that can be made visible.\n\nEquipment: chromatography paper (or filter paper), solvent (water, alcohol), beaker, lid.\n\nProcedure:\n1. Draw a pencil line near one end of the paper.\n2. Place a small spot of mixture on the line.\n3. Add a small amount of solvent to beaker (just below line).\n4. Place paper in beaker, cover, allow solvent to rise by capillary action.\n5. Different components move different distances based on solubility and attraction to paper.\n\nAfter development, locate spots. Calculate Rf value = distance moved by substance / distance moved by solvent.\n\nApplications: forensic science (identifying inks), plant pigment separation, purity testing.\n\nMalawi Example: Distillation is used in laboratory to purify water. Chromatography can separate chlorophyll pigments from leaves.",
    "summary": "Simple distillation: separates liquid from dissolved solids. Fractional distillation: separates liquids with close boiling points. Chromatography: separates dissolved substances based on different movement rates.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Pure Water from Borehole",
        "description": "Distillation produces clean water, but energy-intensive."
      },
      {
        "title": "Leaf Pigment Chromatography",
        "description": "Separate green chlorophyll from yellow carotenoids."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which separation method would you use to get pure water from salt water?",
        "answer": "Simple distillation",
        "hint": "Water evaporates, salt stays."
      },
      {
        "question": "What is the mobile phase in paper chromatography?",
        "answer": "The solvent (water or alcohol)",
        "hint": "It moves up the paper."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 2",
    "topic": "Magnetism",
    "lessonNumber": 1,
    "lessonTitle": "Properties of Magnets and Magnetic Fields",
    "lessonId": "physics-f2-magnetism-1",
    "order": 80,
    "learningObjectives": [
      "State the basic law of magnetism (like poles repel, unlike poles attract)",
      "Describe magnetic field patterns around a bar magnet"
    ],
    "introduction": "Have you used a magnet to pick up pins? Magnets are fascinating. Today, we will learn the properties of magnets and how magnetic fields are shaped.",
    "keyPoints": [
      "Magnets attract magnetic materials (iron, steel, nickel, cobalt).",
      "Law of magnetism: like poles repel, unlike poles attract.",
      "Magnetic poles: North-seeking (N) and South-seeking (S).",
      "Magnetic field: region around a magnet where magnetic force acts.",
      "Field lines: run from N to S outside magnet, form closed loops."
    ],
    "detailedContent": "Properties of Magnets\n\n1. Magnets attract magnetic materials: iron, steel, nickel, cobalt, and some alloys. They do not attract non-magnetic materials (wood, plastic, copper, aluminium).\n\n2. Two poles: every magnet has a north (N) and south (S) pole. The poles are where the magnetic force is strongest. If you break a magnet, each piece becomes a new magnet with its own N and S poles.\n\n3. Like poles repel, unlike poles attract: N repels N, S repels S; N attracts S.\n\n4. A freely suspended magnet points north-south. The N pole points to the Earth’s geographic North (which is actually a magnetic south pole).\n\nMagnetic Field\n\nThe magnetic field is the region around a magnet where the magnetic force can be felt.\n\nPlotting the field:\n- Sprinkle iron filings on a paper over a bar magnet. Tap gently – filings align along field lines.\n- Use a compass: place at points around bar magnet; compass needle points along field line direction.\n\nField pattern:\n- Lines emerge from N pole, curve around, and enter S pole.\n- Inside the magnet, lines go from S to N (closed loops).\n- Lines are closer at poles (stronger field), spread out away.\n- Lines never cross.\n\nCare of Magnets:\n- Store with keepers (soft iron bar) connecting poles to close the magnetic circuit, preventing demagnetisation.\n- Store in pairs with unlike poles together.\n- Do not heat, hammer, or drop magnets – can demagnetise.\n- Keep away from strong alternating current fields.\n\nUses of Magnets:\n- Compass for navigation.\n- Speakers and microphones (electromagnets).\n- Magnetic door catches.\n- Magnetic stirrers in labs.\n- Removing small iron objects from mixtures.\n\nMalawi Example: A compass used by travellers shows direction using Earth’s magnetic field. A blacksmith uses a magnet to pick up iron nails from the forge floor.",
    "summary": "Magnets attract iron and steel. Like poles repel, unlike poles attract. Magnetic field lines go from N to S outside magnet, forming closed loops. Care for magnets to avoid demagnetisation.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Compass",
        "description": "Needle points north–south using Earth’s magnetism."
      },
      {
        "title": "Magnetic Separator",
        "description": "Used by blacksmiths to pick up iron nails falling in sand."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What happens when you bring two north poles of magnets close together?",
        "answer": "They repel each other.",
        "hint": "Law of magnetism."
      },
      {
        "question": "Where is the magnetic field strongest on a bar magnet?",
        "answer": "At the poles (ends).",
        "hint": "Field lines are closest there."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 2",
    "topic": "Magnetism",
    "lessonNumber": 2,
    "lessonTitle": "Magnetic Materials and Demagnetisation",
    "lessonId": "physics-f2-magnetism-2",
    "order": 81,
    "learningObjectives": [
      "Distinguish between magnetic and non-magnetic materials",
      "Describe methods of making and demagnetising magnets"
    ],
    "introduction": "Not all metals are magnetic. How can you make a magnet? How can you destroy magnetism? Today, we will learn about magnetic materials and how to magnetise and demagnetise them.",
    "keyPoints": [
      "Magnetic materials: iron, steel, nickel, cobalt. Soft iron is easily magnetised and demagnetised; steel is hard to magnetise but retains magnetism (permanent).",
      "Non-magnetic materials: copper, aluminium, wood, plastic, glass.",
      "Methods of magnetisation: stroking (using another magnet), electric (using a solenoid with DC current), hammering (aligning domains in Earth’s field).",
      "Methods of demagnetisation: heating (above Curie temperature), hammering, placing in alternating current solenoid, or leaving for long time."
    ],
    "detailedContent": "Magnetic vs Non-magnetic Materials\n\nMagnetic materials are attracted to a magnet. They include:\n- Iron (ferromagnetic) – easily magnetised but does not retain magnetism well (soft).\n- Steel (alloy of iron and carbon) – retains magnetism well (hard).\n- Nickel, cobalt, and their alloys.\n\nNon-magnetic materials are not attracted. Examples: copper, aluminium, gold, silver, wood, plastic, glass, rubber.\n\nSoft iron can be made into temporary magnets (electromagnets). Steel is used for permanent magnets.\n\nMaking Magnets (Magnetisation)\n\n1. Stroking method: Stroke a steel bar repeatedly from one end to the other with a magnet. Use the same direction each time. Lift magnet far away on return stroke. After many strokes, the steel becomes magnetised. The end where the stroke finished becomes opposite pole to the stroking magnet.\n\n2. Electrical method: Place the bar inside a solenoid (coil of wire). Pass direct current (DC) through the coil. The bar becomes magnetised. Stronger current or more turns produce stronger magnet. Use soft iron for electromagnets (magnetism lost when current off).\n\n3. Hammering method: Align the bar in the north-south direction (using Earth’s field). Hammer the bar repeatedly – the vibration allows domains to align with Earth’s field. Weak magnet.\n\nDemagnetising Magnets\n\n1. Heating: Heat the magnet above its Curie temperature (770°C for iron). Domains become random, magnetism lost. (Safety: not to be done with small magnets – could burn or damage.)\n\n2. Hammering: Strong hammering disturbs domain alignment, reduces magnetism.\n\n3. AC method: Place magnet inside a solenoid connected to alternating current (AC). Gradually reduce current to zero while slowly withdrawing the magnet. The reversing magnetic field randomises domains.\n\n4. Leaving for long time: Permanent magnets slowly lose strength over many years.\n\nCare of Magnets:\n- Store with keepers (iron bar connecting poles).\n- Keep away from heat, strong impacts, and AC fields.\n\nMalawi Example: In a school lab, you can magnetise a steel nail by stroking it with a bar magnet. You can demagnetise it by heating it red hot and cooling (or by placing in an AC coil).",
    "summary": "Magnetic materials: iron, steel, nickel. Non-magnetic: copper, aluminium, plastic. Magnetise by stroking, electrical method, or hammering. Demagnetise by heating, hammering, or AC. Soft iron for temporary, steel for permanent magnets.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Stroking a Nail",
        "description": "Make a temporary magnet by stroking with a bar magnet."
      },
      {
        "title": "Electromagnet in Scrapyard",
        "description": "Lifts iron and steel scrap when current on, drops when off."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is steel used for permanent magnets but iron for electromagnets?",
        "answer": "Steel retains magnetism; iron loses it easily.",
        "hint": "Retentivity."
      },
      {
        "question": "How can you demagnetise a magnet using electricity?",
        "answer": "Place it in a solenoid with AC current and slowly reduce current to zero.",
        "hint": "Randomising domains."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 1",
    "topic": "Scientific Method",
    "lessonNumber": 1,
    "lessonTitle": "The Scientific Method and Laboratory Safety",
    "lessonId": "physics-f1-scientific-method-1",
    "order": 82,
    "learningObjectives": [
      "Describe the steps of the scientific method (observation, hypothesis, experiment, analysis, conclusion)",
      "State general laboratory safety rules and interpret hazard symbols"
    ],
    "introduction": "Physics is not just about reading – it is about DOING experiments! To discover new knowledge, scientists follow a process called the SCIENTIFIC METHOD. But before we start any experiment, we must learn how to stay SAFE in the laboratory.",
    "keyPoints": [
      "Scientific method: observation → question → hypothesis → experiment → data analysis → conclusion.",
      "Hypothesis: testable explanation. Experiment must be controlled and repeatable.",
      "Variables: independent (changed), dependent (measured), controlled (kept constant).",
      "Safety rules: wear goggles, lab coat; tie hair; no eating/drinking; report accidents; know first aid and fire equipment.",
      "Hazard symbols: flammable (flame), toxic (skull), corrosive (hand dissolving), irritant (exclamation mark), explosive (bomb)."
    ],
    "detailedContent": "The Scientific Method\n\nScientists use a systematic approach to investigate natural phenomena.\n\nSteps:\n\n1. Observation: Notice a phenomenon. Example: A bicycle tyre is flat.\n\n2. Question: Why is the tyre flat? → possible hole?\n\n3. Hypothesis: Propose a tentative explanation. Example: \"There is a hole in the inner tube.\"\n\n4. Experiment: Design and carry out a test. Example: Pump air into tyre, submerge in water, look for bubbles. Control: use a known good tyre as comparison.\n\n5. Data collection and analysis: Record results. Bubbles appear at one spot → evidence of hole.\n\n6. Conclusion: Accept or reject hypothesis. If bubbles, hypothesis supported. If no bubbles, reject and propose new hypothesis.\n\nVariables in experiments:\n- Independent variable: what you change (e.g., temperature, concentration).\n- Dependent variable: what you measure (e.g., rate of reaction, height).\n- Controlled variables: kept constant to ensure fair test.\n\nLaboratory Safety Rules\n\n1. Wear safety goggles at all times during experiments with chemicals or heating.\n2. Wear a lab coat to protect skin and clothing.\n3. Tie back long hair to prevent catching fire.\n4. No eating or drinking in the lab – chemicals may contaminate food.\n5. Do not taste chemicals or touch them bare-handed.\n6. If you spill a chemical, wash immediately with plenty of water and inform the teacher.\n7. Know the location of first aid kit, fire extinguisher, fire blanket, and emergency shower.\n8. After lab, wash hands thoroughly.\n\nHazard Symbols\n\n- Flame (flammable): substances that catch fire easily (alcohol, petrol). Keep away from heat.\n- Skull and crossbones (toxic): poisons. Avoid ingestion, inhalation, skin contact.\n- Corrosion (hand and metal dissolving): corrosive (strong acids, bases). Causes burns.\n- Exclamation mark (irritant/harmful): may cause skin irritation or eye damage.\n- Exploding bomb (explosive): can detonate (not common in school labs).\n- Environmental hazard: toxic to aquatic life.\n\nHow to smell a chemical: Never put your nose directly to the container. Waft vapour towards your nose with your hand.\n\nFirst aid for accidents:\n- Cuts: clean with water, apply antiseptic, cover with sterile bandage.\n- Burns: cool with cold running water for at least 10 minutes.\n- Chemical splash in eye: flush with water for 15 minutes, get medical help.\n\nMalawi Example: In a school laboratory, when preparing soap (saponification), always wear goggles because sodium hydroxide (caustic soda) is corrosive.",
    "summary": "Scientific method: observation, question, hypothesis, experiment, analysis, conclusion. Laboratory safety: wear goggles, no eating, report accidents. Hazard symbols: flammable, toxic, corrosive.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Bicycle Tyre Puncture",
        "description": "Use scientific method to find leak."
      },
      {
        "title": "Hazard Symbol Poster",
        "description": "Safety posters in labs show corrosive, flammable, toxic symbols."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the first step of the scientific method?",
        "answer": "Observation",
        "hint": "You must notice something first."
      },
      {
        "question": "What does the flame symbol indicate?",
        "answer": "Flammable substance (catches fire easily)",
        "hint": "Keep away from heat."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Agricultural Development Agencies",
    "lessonNumber": 1,
    "lessonTitle": "Agricultural Development Agencies in Malawi and Their Services",
    "lessonId": "agriculture-f3-agencies-1",
    "order": 83,
    "learningObjectives": [
      "Identify agricultural development agencies in Malawi",
      "Describe the services offered by these agencies"
    ],
    "introduction": "Farmers are not alone. There are organisations that help them with extension, credit, research, and marketing. Today, we will learn about agricultural development agencies in Malawi and what they do.",
    "keyPoints": [
      "Ministry of Agriculture: policy, extension, research, subsidies.",
      "Smallholder Farmers Fertiliser Revolving Fund (SFFRF): distributes subsidised inputs.",
      "Farmers’ clubs and cooperatives: bulk buying, marketing, savings.",
      "Agricultural Development Divisions (ADDs): regional extension coordination.",
      "Malawi Agriculture and Food Security Agency (MAFSA): oversees marketing and food reserves.",
      "National Smallholder Farmers’ Association of Malawi (NASFAM): farmer advocacy and training.",
      "World Bank, IFAD, EU: funded projects for irrigation, conservation agriculture, value addition."
    ],
    "detailedContent": "Agricultural Development Agencies in Malawi\n\n1. Ministry of Agriculture (MoA): Responsible for national agricultural policy, extension services, research coordination, and implementation of programs like Farm Input Subsidy Programme (FISP).\n\n2. Smallholder Farmers Fertiliser Revolving Fund (SFFRF): Procures and distributes fertiliser and seed under the subsidy programme. Also sells at market price.\n\n3. Agricultural Development Divisions (ADDs): Eight divisions (e.g., Lilongwe ADD, Blantyre ADD). Coordinate extension and development activities in regions.\n\n4. Malawi Agriculture and Food Security Agency (MAFSA): Manages strategic grain reserves, stabilises maize prices, and promotes agricultural marketing.\n\n5. NASFAM (National Smallholder Farmers’ Association of Malawi): Farmer-owned organisation providing training, market linkages, and advocacy for smallholders.\n\n6. Farm Input Subsidy Programme (FISP): Government programme providing vouchers for fertiliser and seeds.\n\n7. International agencies: World Bank, IFAD, EU, FAO, WFP – fund projects on irrigation, climate resilience, post‑harvest technologies.\n\nServices offered:\n- Extension and advisory services (training, demonstrations)\n- Input supply (seeds, fertiliser, chemicals)\n- Credit and savings (village banks, cooperatives)\n- Market information and linking farmers to buyers\n- Research and variety development (e.g., Chitedze Research Station)\n- Food security monitoring and emergency response\n\nMalawi Example: A farmer in Kasungu receives a FISP voucher for 50 kg of NPK and 25 kg of urea. He also attends a field day organised by ADD staff on maize stalk borer control.",
    "summary": "Agricultural development agencies include MoA, SFFRF, ADDs, MAFSA, NASFAM, and international partners. They provide extension, inputs, credit, marketing, and research support.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "FISP Voucher",
        "description": "Subsidised fertiliser accessible via voucher system."
      },
      {
        "title": "NASFAM Training",
        "description": "Farmers learn agribusiness and quality management."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the role of the Ministry of Agriculture?",
        "answer": "Policy, extension, research coordination, and programme implementation.",
        "hint": "Government lead agency."
      },
      {
        "question": "Name one service provided by NASFAM.",
        "answer": "Farmer training, market linkages, advocacy",
        "hint": "Farmer association."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Farm Mechanisation",
    "lessonNumber": 1,
    "lessonTitle": "Types of Farm Machinery and Factors to Consider for Mechanisation",
    "lessonId": "agriculture-f3-mechanisation-1",
    "order": 84,
    "learningObjectives": [
      "List types of farm machinery (tractors, ploughs, harrows, planters, harvesters)",
      "Explain factors to consider when mechanising a farm"
    ],
    "introduction": "A tractor can plough a field in hours that would take a man days. But is mechanisation always the answer? Today, we will learn about farm machinery, when to use it, and how to keep it safe and working.",
    "keyPoints": [
      "Types: tractors (power), mouldboard/disc ploughs (primary tillage), harrows (secondary), planters, sprayers, combine harvesters, maize shellers.",
      "Factors: farm size (small plots not cost‑effective), capital, terrain (hilly vs flat), availability of fuel/spare parts, operator skill.",
      "Advantages: speed, timeliness, reduces labour shortages.",
      "Limitations: expensive, maintenance, soil compaction, slope unsuitability."
    ],
    "detailedContent": "Types of Farm Machinery\n\n- Tractors: Provide power. Two‑wheel drive or four‑wheel drive.\n- Ploughs: Mouldboard (inverts soil), disc plough (cuts tough residues).\n- Harrows: Break clods, level soil.\n- Planters/seed drills: Place seeds at correct depth and spacing.\n- Sprayers: Knapsack (manual) or boom (tractor‑mounted).\n- Harvesters: Combine harvester (cuts, threshes, cleans grain in one pass).\n- Maize sheller: Removes kernels from cobs (motorised or manual).\n\nFactors to Consider Before Mechanising\n\n- Farm size: Tractors economical only on >5 ha. Smallholders may hire services.\n- Capital: Tractors cost millions of MK. Compare cost vs benefit.\n- Terrain: Steep slopes – tractors can roll. Use oxen or hand tools.\n- Spare parts and fuel: Available locally?\n- Operator skills: Need trained person.\n- Maintenance facilities: Can you repair breakdowns?\n\nAdvantages of Mechanisation\n\n- Completes work quickly – timely planting.\n- Reduces labour demand – especially during peak seasons.\n- Achieves uniform seed placement and depth.\n- Reduces drudgery.\n- Allows large‑scale production.\n\nLimitations\n\n- High initial cost.\n- Ongoing fuel and spare parts costs.\n- Not suitable for very small or fragmented plots.\n- Compaction: Heavy tractors compress soil, reducing yields.\n- May cause erosion if misused (ploughing up/down slopes).\n- Reduces employment for landless labourers.\n\nMalawi Example: A large farm in Lilongwe uses a tractor with disc plough and harrow. They hire a local mechanic for maintenance. For small farmers, a two‑wheel tractor (power tiller) may be suitable.",
    "summary": "Farm machinery includes tractors, ploughs, harrows, planters, harvesters, shellers. Consider size, capital, terrain, spare parts. Advantages: speed, scale. Limitations: cost, compaction, slope issues.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Maize Sheller",
        "description": "Motorised sheller removes kernels quickly – saves time."
      },
      {
        "title": "Tractor Hire Services",
        "description": "Small farmers pool money to hire a tractor for ploughing."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why might a tractor not be suitable on a small farm?",
        "answer": "Too expensive relative to land size; cannot turn easily in small plots.",
        "hint": "Economy of scale."
      },
      {
        "question": "What is a combine harvester?",
        "answer": "A machine that cuts, threshes, and cleans grain in one pass.",
        "hint": "All‑in‑one harvesting."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Farm Mechanisation",
    "lessonNumber": 2,
    "lessonTitle": "Maintenance and Safety of Farm Machinery",
    "lessonId": "agriculture-f3-mechanisation-2",
    "order": 85,
    "learningObjectives": [
      "Describe maintenance practices for farm machinery",
      "State safety measures when using farm machinery"
    ],
    "introduction": "Machinery breaks down if not cared for. And it can be dangerous if not used properly. Today, we will learn how to maintain farm machines and use them safely.",
    "keyPoints": [
      "Maintenance: cleaning after use, lubrication, checking oil/filters, sharpening blades, storing under cover, following service schedule.",
      "Safety: read manual, wear protective clothing, keep guards in place, no passengers, turn off engine before refuelling/cleaning, keep children away."
    ],
    "detailedContent": "Maintenance of Farm Machinery\n\n- Clean after each use – remove mud, crop residues.\n- Lubricate moving parts – oil and grease.\n- Check engine oil, coolant, and air filter regularly.\n- Sharpen plough shares and harrow discs.\n- Store under roof to prevent rust.\n- Follow manufacturer’s service schedule.\n\nSafety Measures\n\n- Read operator’s manual before using.\n- Wear sturdy shoes, avoid loose clothing.\n- Keep guards and shields in place.\n- Do not carry passengers.\n- Turn off engine before refuelling or cleaning.\n- Never smoke near fuel.\n- Keep children away from work area.\n- Use hand signals or radio if working in a team.\n\nMalawi Example: A farmer who owns a tractor keeps it in a shed, changes oil every 100 hours, and never allows extra riders on the drawbar.",
    "summary": "Maintain machinery by cleaning, lubricating, and storing under cover. Follow safety rules: no passengers, turn off before refuelling, keep children away.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Tractor Shed",
        "description": "Protects from sun and rain, reduces rust."
      },
      {
        "title": "Safety at Sheller",
        "description": "Keep fingers away from moving parts; use a stick to push cobs."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is it important to lubricate moving parts?",
        "answer": "Reduces friction and wear, prevents overheating.",
        "hint": "Oil/grease."
      },
      {
        "question": "What should you do before refuelling a tractor?",
        "answer": "Turn off the engine.",
        "hint": "Fire risk."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Agricultural Marketing and Trading",
    "lessonNumber": 1,
    "lessonTitle": "Marketing Channels, Costs, and Margins",
    "lessonId": "agriculture-f4-marketing-1",
    "order": 86,
    "learningObjectives": [
      "Distinguish between marketing and trading",
      "Describe marketing channels and agencies and calculate marketing margins"
    ],
    "introduction": "Marketing moves products from farm to consumer. Trading is one part of marketing. Today, we will learn the difference, the people involved, and how to calculate marketing margins – the costs added at each step.",
    "keyPoints": [
      "Marketing: all activities from production to final consumer (transport, storage, processing, advertising, selling).",
      "Trading: buying and selling (exchange function) – part of marketing.",
      "Marketing channels: farmer → assembler → wholesaler → retailer → consumer. Each adds costs.",
      "Marketing margin: difference between price paid by consumer and price received by farmer.",
      "Margin = retail price – farm price. Includes transport, storage, profit of intermediaries."
    ],
    "detailedContent": "Marketing vs Trading\n\n- Marketing: the entire process of moving goods from producer to consumer – includes planning, grading, packaging, transport, storage, financing, risk bearing, and selling.\n- Trading: only the buying and selling part (exchange). It is a subset of marketing.\n\nMarketing Channels (Examples)\n\n- Short channel: farmer → consumer (farm gate sales, local market).\n- Medium channel: farmer → retailer → consumer (e.g., farmer sells to shopkeeper).\n- Long channel: farmer → assembler → wholesaler → retailer → consumer (common for maize exported from rural areas).\n\nMarketing Agencies (Intermediaries)\n- Assemblers: buy from many smallholders, aggregate, and sell in bulk.\n- Wholesalers: buy large quantities, store, and sell to retailers.\n- Retailers: sell small quantities to consumers.\n- Brokers/agents: facilitate sales without taking ownership.\n\nMarketing Costs and Margins\n\nMarketing margin = consumer price – farm price.\n\nExample: Farmer sells 1 kg of groundnuts at 500 MK. Trader transports, stores, and sells to wholesaler at 700 MK. Wholesaler sells to retailer at 900 MK. Retailer sells to consumer at 1,200 MK.\n\nMargins:\n- Trader margin = 700 – 500 = 200 MK (transport, profit)\n- Wholesaler margin = 900 – 700 = 200 MK (storage, profit)\n- Retailer margin = 1,200 – 900 = 300 MK (shop, profit)\nTotal margin = 1,200 – 500 = 700 MK.\n\nMost of the margin covers transport, storage, losses, and profit. Farmers get only a small portion.\n\nFactors affecting margins: distance to market, perishability (higher losses), seasonality, number of intermediaries, market infrastructure.\n\nImproving margins for farmers:\n- Form cooperatives to sell directly to wholesalers/retailers.\n- Process produce (e.g., groundnut butter) to capture value.\n- Use mobile phones to find better prices.\n- Improve roads and storage facilities.\n\nMalawi Example: ADMARC (Agricultural Development and Marketing Corporation) operates as a state‑owned assembler and retailer, stabilising prices. However, private traders often offer higher prices near harvest.",
    "summary": "Marketing includes all activities from farm to consumer; trading is buying/selling. Marketing margin = consumer price – farm price. Intermediaries add costs. Farmers can improve margins through cooperatives and processing.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Groundnut Margin",
        "description": "Farmer gets 500 MK, consumer pays 1,200 MK – margin 700 MK."
      },
      {
        "title": "ADMARC",
        "description": "Government agency that buys and sells to stabilise maize prices."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between marketing and trading?",
        "answer": "Marketing includes all activities (transport, storage, etc.); trading is only buying/selling.",
        "hint": "Broader vs narrower."
      },
      {
        "question": "How can a farmer increase the price they receive for maize?",
        "answer": "Sell through a cooperative, store and sell later, or process into flour.",
        "hint": "Reduce intermediaries or add value."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Price Elasticity of Demand and Supply",
    "lessonNumber": 1,
    "lessonTitle": "Calculating Price Elasticity for Agricultural Commodities",
    "lessonId": "agriculture-f4-elasticity-1",
    "order": 87,
    "learningObjectives": [
      "Define price elasticity of demand and supply",
      "Calculate price elasticity using the percentage change formula"
    ],
    "introduction": "When the price of maize goes up, do people buy much less or just a little less? The answer is price elasticity. Today, we will learn how to calculate elasticity and what it means for farmers.",
    "keyPoints": [
      "Price elasticity of demand (PED): % change in quantity demanded / % change in price.",
      "Price elasticity of supply (PES): % change in quantity supplied / % change in price.",
      "If elasticity > 1: elastic (small price change leads to large quantity change).",
      "If elasticity < 1: inelastic (quantity changes little).",
      "Agricultural staples (maize, rice) are usually inelastic in demand (essential goods).",
      "Luxuries or crops with substitutes are more elastic."
    ],
    "detailedContent": "Price Elasticity of Demand (PED)\n\nFormula: PED = (% change in quantity demanded) / (% change in price)\n\nExample: The price of maize rises from 200 MK to 240 MK (20% increase). Quantity demanded falls from 1,000 kg to 800 kg (20% decrease). PED = 20% / 20% = 1 (unit elastic – not typical for essentials).\n\nIf PED = 0.5 (inelastic): A 20% price increase leads to only 10% fall in quantity. People still buy nearly as much despite higher price (essential good).\n\nIf PED = 2 (elastic): A 20% price increase leads to 40% fall in quantity – consumers easily switch to substitute.\n\nFor most basic food crops in Malawi, demand is inelastic (PED < 1). Poor households spend a high proportion of income on food, so they cannot easily reduce consumption.\n\nPrice Elasticity of Supply (PES)\n\nFormula: PES = (% change in quantity supplied) / (% change in price)\n\nShort‑run supply is often inelastic because farmers cannot quickly change production (once planted, area fixed). Long‑run supply is more elastic (farmers can adjust next season).\n\nExample: Maize price rises by 20%, farmers increase area and use more fertiliser, leading to 30% increase in supply next season. PES = 30% / 20% = 1.5 (elastic).\n\nImplications for farmers:\n\n- Inelastic demand: a good harvest (higher supply) leads to sharp price drop and lower total revenue (price decreases more than quantity increases). Farmers may benefit from strategies to store grain and sell later.\n- Elastic demand: a price decrease increases total revenue.\n\nElasticity helps predict market outcomes and design policies (e.g., subsidy, storage).",
    "summary": "PED = %Δ quantity demanded / %Δ price. PES = %Δ quantity supplied / %Δ price. Staples have inelastic demand. Supply is more elastic in the long run. Elasticity affects farm revenue.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Maize Price Rise",
        "description": "Even when price doubles, people still buy maize – inelastic demand."
      },
      {
        "title": "Tobacco Elasticity",
        "description": "Demand is relatively elastic because buyers can switch to other leaf."
      }
    ],
    "practiceQuestions": [
      {
        "question": "If price rises by 10% and quantity demanded falls by 5%, what is PED?",
        "answer": "0.5 (inelastic)",
        "hint": "PED = 5/10 = 0.5"
      },
      {
        "question": "Why is the supply of vegetables more elastic than supply of maize?",
        "answer": "Vegetables have shorter growing seasons; farmers can respond faster to price changes.",
        "hint": "Time to adjust."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Mango Production",
    "lessonNumber": 1,
    "lessonTitle": "Mango Varieties, Site Selection, and Husbandry Practices",
    "lessonId": "agriculture-f4-mango-1",
    "order": 88,
    "learningObjectives": [
      "Identify important mango varieties grown in Malawi",
      "Describe site preparation and husbandry for mango trees"
    ],
    "introduction": "Mangoes are a valuable fruit crop in Malawi – for home consumption, local markets, and export to South Africa and Europe. Today, we will learn how to grow mangoes commercially.",
    "keyPoints": [
      "Varieties: local (masau, mabinga) and improved (Tommy Atkins, Kent, Keitt, Zillate).",
      "Site selection: deep, well‑drained soil, full sun, near water for young trees.",
      "Site preparation: clear land, dig holes 1×1×1 m, add compost/manure, plant grafted seedlings.",
      "Husbandry: watering (young trees), mulching, weeding, fertilising (NPK 2‑3 times/year), pruning (remove dead branches, shape canopy), pest control (fruit fly, mealybugs, scale insects).",
      "Harvest: when shoulders turn yellow for improved varieties; picking pole for tall trees."
    ],
    "detailedContent": "Mango Varieties in Malawi\n\n- Local varieties: Masau, mabinga, kachita – common in villages, small fruit, fibrous, seasonal.\n- Improved varieties (export quality):\n  * Tommy Atkins: red blush, moderate fibre, good for export.\n  * Kent: sweet, less fibre, greenish‑yellow.\n  * Keitt: large, sweet, late season.\n  * Zillate: dwarf tree, small fruit, early season.\n\nGrafted improved varieties produce fruit in 3‑4 years (from nursery). Local varieties take 6‑8 years.\n\nSite Selection\n\n- Deep, well‑drained soil (avoid waterlogging).\n- Full sunlight (at least 6 hours/day).\n- Protection from strong wind (windbreaks).\n- Near water source for irrigation during establishment.\n- Avoid frost pockets (mangoes sensitive to frost).\n\nField Preparation\n\n- Clear land, remove perennial weeds.\n- Dig holes 1 m × 1 m × 1 m, spaced 10‑12 m apart (for large varieties) or 6‑8 m (for dwarf).\n- Mix topsoil with 20‑30 kg compost/manure and 500 g NPK per hole.\n- Plant grafted seedlings (rainy season). Keep graft union above soil.\n\nHusbandry Practices\n\n- Watering: Young trees every 2‑3 days in dry season. Mature trees need less.\n- Mulching: around base to retain moisture, suppress weeds.\n- Weeding: keep 1 m radius weed‑free.\n- Fertilising: Apply NPK 2‑3 times per year (150‑300 g per tree per year, increasing with age). Apply after fruit set.\n- Pruning: Remove dead/diseased branches, thin canopy for light penetration. After harvest, trim.\n- Pest control:\n  - Fruit flies: use pheromone traps, protein bait, or cover fruits.\n  - Mealybugs: soap solution or systemic insecticide.\n  - Scale insects: horticultural oil.\n- Harvesting: For improved varieties, pick when shoulders turn yellow. Use picking pole with cloth bag. Handle carefully to avoid bruising.\n\nMalawi Example: Export mango orchards in Salima and Kasungu grow Tommy Atkins and Kent for shipment to South Africa. They follow strict pest control and grading.",
    "summary": "Improved mango varieties (Tommy Atkins, Kent) yield export‑quality fruit. Plant in well‑drained holes with compost. Annual fertilising, pruning, and fruit fly control are essential.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Tommy Atkins in Salima",
        "description": "Export mangoes with red blush."
      },
      {
        "title": "Fruit Fly Traps",
        "description": "Pheromone traps reduce fruit damage."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the advantage of grafted mango trees?",
        "answer": "Fruit in 3‑4 years (earlier), uniform quality, true to type.",
        "hint": "Vegetative propagation."
      },
      {
        "question": "When should mangoes be harvested for export?",
        "answer": "When shoulders turn yellow, still firm.",
        "hint": "Before fully ripe."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Cattle Production",
    "lessonNumber": 1,
    "lessonTitle": "Breeds of Cattle (Beef and Dairy)",
    "lessonId": "agriculture-f4-cattle-breeds-1",
    "order": 89,
    "learningObjectives": [
      "List breeds of cattle for beef and dairy production",
      "Describe characteristics of Malawi Zebu, Friesian, and Jersey"
    ],
    "introduction": "Cattle provide meat, milk, hides, and manure. In Malawi, we have local breeds (Malawi Zebu) and exotic breeds (Friesian, Jersey). Today, we will learn which breeds are best for beef and which for milk.",
    "keyPoints": [
      "Beef breeds: Malawi Zebu (small, humped, heat‑tolerant, low milk yield), Brahman, Boran.",
      "Dairy breeds: Friesian (high milk yield, less heat tolerant), Jersey (high butterfat, more heat tolerant).",
      "Crossbreeds: Zebu × Friesian – combine hardiness and milk production."
    ],
    "detailedContent": "Beef Breeds\n\n- Malawi Zebu: Small, humped, heat‑tolerant, resistant to ticks and trypanosomiasis. Good for meat. Milk yield 2‑3 litres/day. Common in communal grazing.\n- Brahman: Imported, large, humped, very heat tolerant, good beef quality.\n- Boran: East African breed, good meat, adaptable.\n\nDairy Breeds\n\n- Friesian (Holstein): Large, black and white. High milk yield (20‑30 litres/day). Needs good feed and management. Not very heat tolerant. Requires shade and water.\n- Jersey: Smaller, brown. High milk butterfat (5‑6%), good for ghee and butter. More heat tolerant than Friesian. Yield 10‑20 litres/day.\n\nCrossbreeds\n\nZebu × Friesian or Zebu × Jersey combine hardiness of Zebu with milk production of exotic breeds. Common in smallholder dairy (e.g., Mzuzu, Lilongwe, Thyolo). Milk yield 8‑12 litres/day.\n\nMalawi Example: In Mzuzu, farmers keep Friesian‑Zebu crosses. They feed maize bran and graze on Napier grass. They use AI.",
    "summary": "Beef breeds: Malawi Zebu, Brahman, Boran. Dairy breeds: Friesian (high milk), Jersey (high butterfat). Crossbreeds suit smallholder conditions in Malawi.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Malawi Zebu",
        "description": "Local breed, hardy, low milk but good meat."
      },
      {
        "title": "Friesian‑Zebu Cross",
        "description": "Dairy farmers in Mzuzu use crosses for better milk."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which dairy breed produces the highest milk yield?",
        "answer": "Friesian",
        "hint": "Black and white."
      },
      {
        "question": "Why are crossbreeds popular in Malawi?",
        "answer": "They combine disease/heat tolerance with higher milk production.",
        "hint": "Zebu × exotic."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Cattle Production",
    "lessonNumber": 2,
    "lessonTitle": "Management of Cattle and Reproductive Cycles",
    "lessonId": "agriculture-f4-cattle-management-1",
    "order": 90,
    "learningObjectives": [
      "Describe housing, feeding, and health management for cattle",
      "Explain the oestrus cycle, gestation period, and signs of heat"
    ],
    "introduction": "To succeed with cattle, you need proper housing, feeding, and health care. You also need to know when cows are ready to breed. Today, we will cover these practical aspects.",
    "keyPoints": [
      "Housing: kraal with shelter; for dairy, clean, dry bedding, ventilation.",
      "Feeding: grazing + supplements (maize bran, cottonseed cake, minerals).",
      "Health: vaccinations (lumpy skin, foot and mouth, anthrax), tick control (dipping/spraying), deworming.",
      "Reproduction: oestrus cycle ~21 days. Signs of heat: restlessness, mounting others, clear mucus, swollen vulva.",
      "Gestation period: ~9 months (280 days)."
    ],
    "detailedContent": "Management Practices\n\n- Housing: Provide a kraal (enclosure) with a roofed area for shade and rain protection. For dairy, a clean, dry floor prevents mastitis. Ensure good ventilation.\n\n- Feeding: Cattle graze on pasture. For dairy cows, supplement with maize bran, cottonseed cake, or dairy meal. Provide mineral block and clean water at all times.\n\n- Health:\n  * Vaccinations: lumpy skin disease, foot and mouth, anthrax, brucellosis (by vet).\n  * Tick control: dip or spray every 2‑3 weeks.\n  * Deworm: every 3 months (rotate products).\n  * Isolate sick animals.\n\nReproductive System and Breeding\n\n- Oestrus (heat) cycle: lasts about 21 days. Signs of heat:\n  * Restless behaviour, mooing.\n  * Mounting other cows or standing to be mounted.\n  * Clear mucus discharge from vulva.\n  * Swollen vulva.\n  * Decreased milk yield, off feed.\nBest to breed 8‑12 hours after first signs.\n\n- Gestation period: about 9 months (280 days). Calves are born.\n\nLivestock Improvement Methods\n\n- Selection: choose cows that produce more milk or have good body conformation.\n- Crossbreeding: mate Malawi Zebu with Friesian bull; F1 offspring have better milk.\n- Artificial Insemination (AI): semen from superior bulls. Avoids keeping a bull, reduces disease transmission, allows access to best genetics.\n\nMalawi Example: In Lilongwe, dairy farmers use AI with Friesian semen to upgrade local Zebu herds. They deworm every 3 months and dip for ticks.",
    "summary": "House cattle in clean, dry kraals. Feed grazing plus supplements. Vaccinate and control ticks. Heat signs: restlessness, mounting, clear mucus. Gestation 9 months. Improve through AI and crossbreeding.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "AI in Lilongwe",
        "description": "Farmers use liquid nitrogen‑stored semen for breeding."
      },
      {
        "title": "Foot and Mouth Vaccination",
        "description": "Government campaigns protect cattle."
      }
    ],
    "practiceQuestions": [
      {
        "question": "How long is the oestrus cycle in cows?",
        "answer": "About 21 days",
        "hint": "Every three weeks."
      },
      {
        "question": "What is the gestation period of a cow?",
        "answer": "Approximately 9 months (280 days).",
        "hint": "Same as human."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 3",
    "topic": "Gaseous Exchange in Humans",
    "lessonNumber": 1,
    "lessonTitle": "Alveoli, Diffusion of Gases, and Oxygen Transport",
    "lessonId": "biology-f3-gaseous-exchange-1",
    "order": 91,
    "learningObjectives": [
      "Explain how gaseous exchange occurs in the alveoli and tissues",
      "Describe how oxygen is transported in the blood (haemoglobin)"
    ],
    "introduction": "Every cell needs oxygen and must get rid of carbon dioxide. This happens in two places: the LUNGS (gaseous exchange with air) and the TISSUES (exchange with blood). Today, we will learn how oxygen and carbon dioxide move.",
    "keyPoints": [
      "Alveoli: tiny air sacs, one‑cell thick, surrounded by capillaries. O2 diffuses into blood, CO2 diffuses out.",
      "Haemoglobin: protein in red blood cells; binds O2 in lungs (oxyhaemoglobin) and releases it in tissues.",
      "Tissue respiration: cells use O2 for aerobic respiration, producing energy (ATP), CO2, and water.",
      "Anaerobic respiration: without O2, glucose → lactic acid (muscles during intense exercise)."
    ],
    "detailedContent": "Gaseous Exchange in the Alveoli\n\nAlveoli walls are very thin (one cell). Capillaries also thin. Diffusion occurs because of concentration gradients.\n- O2 concentration high in alveolar air, low in blood → O2 diffuses into blood.\n- CO2 concentration high in blood, low in alveolar air → CO2 diffuses into alveoli and is exhaled.\n\nOxygen Transport\n\n97‑99% of O2 is carried by haemoglobin (Hb). Hb + O2 ⇌ HbO2 (oxyhaemoglobin). In lungs (high O2), reaction to right. In tissues (low O2), releases O2.\n\nCarbon Dioxide Transport\n- As bicarbonate (70%): CO2 + H2O → H2CO3 → H+ + HCO3‑\n- Bound to haemoglobin (20‑30%)\n- Dissolved in plasma (5‑10%)\n\nTissue Respiration\n\nAerobic: C6H12O6 + 6O2 → 6CO2 + 6H2O + energy (ATP)\n\nAnaerobic (in muscles during sprinting): C6H12O6 → 2C3H6O3 (lactic acid) + energy. Lactic acid causes muscle fatigue. After exercise, oxygen debt repaid; lactic acid converted back.\n\nEffects of Smoking\n\n- Tar: destroys cilia → smoker’s cough, lung cancer.\n- CO: binds to haemoglobin more strongly than O2 → reduces oxygen delivery.\n- Nicotine: addictive, constricts blood vessels.\n- Diseases: bronchitis, emphysema, lung cancer.\n\nMalawi Example: In traditional tobacco use (chamba), similar damage occurs; health campaigns warn against smoking.",
    "summary": "Alveoli exchange O2 and CO2 by diffusion. Haemoglobin carries O2. CO2 transported as bicarbonate. Aerobic respiration needs O2; anaerobic produces lactic acid. Smoking damages lungs.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Smoker’s Cough",
        "description": "Loss of cilia from tar leads to persistent cough."
      },
      {
        "title": "Carbon Monoxide Danger",
        "description": "Binds haemoglobin, reducing oxygen to organs."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What pigment in red blood cells carries oxygen?",
        "answer": "Haemoglobin",
        "hint": "Iron‑containing protein."
      },
      {
        "question": "What is produced during anaerobic respiration in muscles?",
        "answer": "Lactic acid",
        "hint": "Causes cramp."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 3",
    "topic": "Digestive Enzymes and Food Absorption",
    "lessonNumber": 1,
    "lessonTitle": "Enzymes Involved in Digestion and Absorption in the Small Intestine",
    "lessonId": "biology-f3-digestive-enzymes-1",
    "order": 92,
    "learningObjectives": [
      "List the digestive enzymes and their end products",
      "Describe how the small intestine is adapted for absorption (villi, microvilli)"
    ],
    "introduction": "Digestion breaks large molecules into small ones using enzymes. Then absorption takes place, mostly in the small intestine. Today, we will learn the key enzymes and the structures that make absorption efficient.",
    "keyPoints": [
      "Amylase (saliva, pancreas): starch → maltose.",
      "Pepsin (stomach): proteins → peptides.",
      "Trypsin (pancreas): proteins → peptides.",
      "Lipase (pancreas): fats → fatty acids + glycerol.",
      "Villi: finger‑like projections in small intestine; increase surface area.",
      "Microvilli: on epithelial cells; further increase absorption."
    ],
    "detailedContent": "Digestive Enzymes and Their Actions\n\n| Enzyme | Source | Substrate | End product |\n|--------|--------|-----------|-------------|\n| Salivary amylase | Salivary glands | Starch | Maltose |\n| Pepsin | Stomach (chief cells) | Protein | Peptides |\n| Pancreatic amylase | Pancreas | Starch | Maltose |\n| Trypsin | Pancreas | Protein | Peptides |\n| Peptidases | Small intestine | Peptides | Amino acids |\n| Lipase | Pancreas | Fats (lipids) | Fatty acids + glycerol |\n| Maltase | Small intestine | Maltose | Glucose |\n\nAbsorption in the Small Intestine\n\nThe small intestine is adapted for absorption:\n- Very long (~6 m).\n- Inner surface folded (plicae circulares).\n- Villi: millions of finger‑like projections, each containing blood capillaries and a lacteal (lymph vessel). Villi greatly increase surface area.\n- Microvilli: on villi cells (brush border), further increase area.\n\nAbsorption process:\n- Glucose and amino acids cross epithelium and enter blood capillaries.\n- Fatty acids and glycerol are re‑packaged into chylomicrons and enter lacteals (lymph system).\n\nLarge Intestine (Colon): absorbs water and minerals; forms faeces.\n\nMalawi Example: If a person has diarrhoea, the colon cannot absorb water properly, leading to dehydration. ORS helps replace lost water and salts.",
    "summary": "Amylase breaks starch, pepsin and trypsin break proteins, lipase breaks fats. Villi and microvilli in small intestine increase surface area for absorption of nutrients into blood and lymph.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Lactose Intolerance",
        "description": "Absence of lactase enzyme causes bloating after milk."
      },
      {
        "title": "Villi in Mikolongwe",
        "description": "Models show surface area increase."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the end product of protein digestion?",
        "answer": "Amino acids",
        "hint": "Building blocks."
      },
      {
        "question": "What structures increase surface area in the small intestine?",
        "answer": "Villi and microvilli",
        "hint": "Fingers and brushes."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 3",
    "topic": "Reproductive System",
    "lessonNumber": 1,
    "lessonTitle": "Male and Female Reproductive Systems",
    "lessonId": "biology-f3-reproduction-1",
    "order": 93,
    "learningObjectives": [
      "Identify the parts and functions of the male and female reproductive systems",
      "Explain the menstrual cycle and the role of hormones (FSH, LH, oestrogen, progesterone)"
    ],
    "introduction": "How does a baby begin and grow? The human reproductive system is designed for producing offspring. Today, we will learn the anatomy, the monthly cycle, and how hormones regulate reproduction.",
    "keyPoints": [
      "Male: testes (sperm, testosterone), epididymis, vas deferens, seminal vesicles, prostate, penis.",
      "Female: ovaries (ova, oestrogen, progesterone), oviducts (fertilisation site), uterus, cervix, vagina.",
      "Menstrual cycle ~28 days: FSH matures follicle; oestrogen thickens uterus; LH triggers ovulation (day 14); progesterone maintains lining. If no pregnancy, lining sheds."
    ],
    "detailedContent": "Male Reproductive System\n\n- Testes: produce sperm and testosterone.\n- Epididymis: stores sperm until mature.\n- Vas deferens: carries sperm to urethra.\n- Seminal vesicles and prostate gland: produce seminal fluid (nourishes sperm).\n- Penis: delivers sperm into female.\n\nFemale Reproductive System\n\n- Ovaries: produce eggs (ova) and hormones (oestrogen, progesterone).\n- Oviducts (fallopian tubes): site of fertilisation. Fimbriae sweep egg into tube.\n- Uterus (womb): where baby develops. Lining (endometrium) thickens each month.\n- Cervix: opening of uterus into vagina.\n- Vagina: receives sperm; birth canal.\n\nMenstrual Cycle (average 28 days)\n\n| Days | Event | Hormones |\n|------|-------|-----------|\n| 1‑5 | Menstruation (shedding of lining) | Low oestrogen, low progesterone |\n| 6‑13 | Follicle matures; lining rebuilds | FSH (stimulates follicle), oestrogen (builds lining) |\n| 14 | Ovulation (egg released) | LH surge |\n| 15‑28 | Corpus luteum secretes progesterone; lining maintained | Progesterone |\n| If no fertilisation | Lining breaks down, cycle repeats | Progesterone falls |\n\nFertilisation: sperm meets egg in oviduct, forms zygote (46 chromosomes). Zygote divides and implants in uterus.\n\nPlacenta: attached to uterine wall, connected by umbilical cord. Functions:\n- Exchange O2, nutrients, waste.\n- Produces hormones.\n- Prevents mother’s immune attack.\n\nBirth (parturition): around 40 weeks. Uterus contracts, cervix dilates, baby passes through vagina.\n\nBreast feeding: colostrum (antibodies), perfect nutrition, bonding, exclusive for 6 months recommended.\n\nMalawi Example: Many health centres promote exclusive breast feeding and family planning methods.",
    "summary": "Male: testes, sperm, penis. Female: ovaries, eggs, uterus, vagina. Menstrual cycle averages 28 days; ovulation day 14. Hormones (FSH, LH, oestrogen, progesterone) regulate. Placenta exchanges nutrients.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Exclusive Breast Feeding",
        "description": "Malawi health campaign promotes 6 months exclusive breast feeding."
      },
      {
        "title": "Placenta Exchange",
        "description": "Placenta allows diffusion; mother and baby blood do not mix."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Where does fertilisation typically occur?",
        "answer": "In the oviduct (fallopian tube)",
        "hint": "Egg and sperm meet there."
      },
      {
        "question": "What hormone maintains the uterine lining after ovulation?",
        "answer": "Progesterone",
        "hint": "From corpus luteum."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 3",
    "topic": "Genetics",
    "lessonNumber": 1,
    "lessonTitle": "Monohybrid Crosses and Sex Determination",
    "lessonId": "biology-f3-genetics-1",
    "order": 94,
    "learningObjectives": [
      "Define key genetic terms: gene, allele, dominant, recessive, genotype, phenotype, homozygous, heterozygous",
      "Construct monohybrid Punnett squares and predict offspring ratios"
    ],
    "introduction": "Why do you have your mother’s eyes but your father’s height? The answer lies in GENES. Today, we will learn the basics of inheritance, including how traits are passed on and how sex is determined.",
    "keyPoints": [
      "Gene: segment of DNA controlling a trait. Allele: different version (e.g., purple vs white).",
      "Dominant allele: masks the other (capital letter). Recessive: only expressed if both copies recessive.",
      "Genotype: genetic makeup (TT, Tt, tt). Phenotype: observable trait (tall, short).",
      "Homozygous: two same alleles (TT or tt). Heterozygous: different (Tt).",
      "Monohybrid cross: cross for one trait. F1 all heterozygous; F2 ratio 3:1 dominant:recessive.",
      "Sex determination: females XX, males XY. Sperm determines sex (50% chance)."
    ],
    "detailedContent": "Key Genetic Terms\n\n- Gene: a segment of DNA that codes for a trait (e.g., flower colour).\n- Allele: one of two or more versions of a gene (e.g., purple vs white).\n- Dominant allele: expressed when present (capital letter, e.g., P).\n- Recessive allele: only expressed when both copies are recessive (p).\n- Genotype: the pair of alleles (PP, Pp, pp).\n- Phenotype: outward appearance (purple or white).\n- Homozygous: two identical alleles (AA or aa).\n- Heterozygous: two different alleles (Aa).\n\nMonohybrid Cross Example\n\nCross pure breeding tall (TT) with short (tt).\n\n| t | t |\n|---|---|\n| T | Tt | Tt |\n| T | Tt | Tt |\n\nF1: all Tt (tall). Cross F1 (Tt × Tt):\n\n| T | t |\n|---|---|\n| T | TT | Tt |\n| t | Tt | tt |\n\nGenotype ratio: 1 TT : 2 Tt : 1 tt. Phenotype ratio: 3 tall : 1 short.\n\nSex Determination\n\nFemales: XX. Males: XY. Eggs always X. Sperm X or Y.\n\n- X sperm + X egg → girl (XX)\n- Y sperm + X egg → boy (XY)\n\nThus sex is determined by the father’s sperm. Ratio 1:1.\n\nMalawi Example: Sickle cell anaemia is caused by recessive allele (HbS). Carriers (HbA/HbS) are resistant to malaria – reason the allele persists in Malawi.",
    "summary": "Genes control traits; alleles are versions. Dominant allele masks recessive. Genotype vs phenotype. Monohybrid cross gives 3:1 ratio. Females XX, males XY; sperm determines sex.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Sickle Cell in Malawi",
        "description": "Recessive allele protects against malaria; common in malaria‑endemic areas."
      },
      {
        "title": "Maize Kernel Colour",
        "description": "Cross purple and yellow kernels – 3:1 ratio in second generation."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between genotype and phenotype?",
        "answer": "Genotype is the genetic makeup; phenotype is the observable trait.",
        "hint": "Genes vs appearance."
      },
      {
        "question": "What is the chance that a couple will have a son?",
        "answer": "50% (one in two)",
        "hint": "Sperm carries X or Y equally."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Climate Change Mitigation",
    "lessonNumber": 1,
    "lessonTitle": "Mitigating Climate Change in Agriculture",
    "lessonId": "agriculture-f4-climate-mitigation-1",
    "order": 2,
    "learningObjectives": [
      "Describe the effects of climate change on agriculture in Malawi",
      "Explain mitigation measures: conservation agriculture, agroforestry, re‑afforestation, integrated systems"
    ],
    "introduction": "Climate change is causing unpredictable rains, droughts and floods in Malawi. Agriculture contributes to greenhouse gases but can also be part of the solution. Today we learn how farmers can reduce emissions and adapt to the changing climate.",
    "keyPoints": [
      "Effects: longer dry spells, shorter rainy seasons, more droughts and floods, heat stress on crops, new pests.",
      "Agriculture contributes: deforestation (CO2), livestock (methane), fertilisers (nitrous oxide), burning residues.",
      "Mitigation measures: conservation agriculture (less tillage, mulching, rotation), agroforestry (trees store carbon), re‑afforestation, integrated crop‑livestock‑fish systems.",
      "Adaptation benefits: improved water retention, reduced erosion, diversified production."
    ],
    "detailedContent": "Effects of Climate Change on Agriculture in Malawi\n\n- Unpredictable rainfall: the rainy season may start late or end early; crops fail.\n- Droughts: more frequent; maize wilts.\n- Floods: intense rain washes away soil and crops.\n- Heat stress: high temperatures reduce pollination in maize.\n- New pests: fall armyworm became more common with changing weather.\n\nHow Agriculture Contributes to Climate Change\n\n- Deforestation: clearing forests for farmland releases carbon dioxide.\n- Livestock: cattle produce methane.\n- Fertiliser use: nitrogen fertiliser releases nitrous oxide.\n- Burning crop residues: releases carbon and destroys soil organic matter.\n\nMitigation Measures\n\n1. Conservation Agriculture (CA):\n   * Minimum soil disturbance (less ploughing) → less carbon released.\n   * Permanent soil cover (mulch) → adds carbon to soil.\n   * Crop rotation with legumes → reduces need for nitrogen fertiliser.\n   CA reduces emissions and stores more carbon.\n\n2. Agroforestry:\n   * Growing trees with crops (e.g., maize with Gliricidia or Faidherbia).\n   * Trees absorb CO2 (carbon sequestration), improve soil, provide fodder and firewood.\n\n3. Re‑afforestation:\n   * Planting trees on degraded land or along rivers; restores carbon sink.\n\n4. Integrated crop‑livestock‑fish systems:\n   * Animal manure instead of synthetic fertilisers reduces nitrous oxide.\n   * Fish ponds capture nutrients and recycle waste.\n\n5. Reducing burning: leave crop residues on field as mulch – they decompose and add organic matter.\n\nAdaptation Benefits\n\n- CA and agroforestry improve water infiltration – better during droughts.\n- Mulch keeps soil cooler and reduces evaporation.\n- Trees provide shade and windbreaks.\n- Diverse systems provide multiple food sources – if one fails, others survive.\n\nMalawi Example: In Zomba, farmers plant Gliricidia trees in maize fields. The trees fix nitrogen, provide firewood, store carbon, and practice CA (no burning of maize stalks). Their soils are healthier and they get maize even with less rain.",
    "summary": "Climate change causes droughts, floods, erratic rains. Agriculture contributes through deforestation, livestock, fertilisers. Mitigation: conservation agriculture, agroforestry, re‑afforestation, integrated systems. These also help adaptation.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Gliricidia Agroforestry",
        "description": "Farmers in Zomba plant Gliricidia with maize – stores carbon and improves soil."
      },
      {
        "title": "Conservation Agriculture",
        "description": "Mulching and no‑till reduce emissions and retain moisture."
      }
    ],
    "practiceQuestions": [
      {
        "question": "How does conservation agriculture reduce greenhouse gas emissions?",
        "answer": "Less ploughing releases less carbon; mulching adds carbon; less fertiliser needed.",
        "hint": "Carbon stays in soil."
      },
      {
        "question": "What is one adaptation benefit of agroforestry?",
        "answer": "Trees provide shade, reduce wind, and improve water retention.",
        "hint": "Helps during drought."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Land Drainage",
    "lessonNumber": 1,
    "lessonTitle": "Importance and Methods of Land Drainage",
    "lessonId": "agriculture-f4-drainage-1",
    "order": 3,
    "learningObjectives": [
      "State the meaning and importance of land drainage",
      "Describe methods of land drainage (surface, sub‑surface, bio‑drainage)"
    ],
    "introduction": "Waterlogged soils are bad for most crops because roots cannot breathe. Land drainage removes excess water. Today we learn why drainage is important and the different methods used.",
    "keyPoints": [
      "Land drainage: removal of excess water from soil surface or root zone.",
      "Importance: improves aeration, increases soil temperature, allows early planting, reduces water‑borne diseases, increases yields.",
      "Surface drainage: open ditches, ridges, land grading – removes ponded water.",
      "Sub‑surface drainage: perforated pipes or mole drains placed below ground level.",
      "Bio‑drainage: planting deep‑rooted trees (e.g., eucalyptus) that pump water from deeper layers."
    ],
    "detailedContent": "What is Land Drainage?\n\nLand drainage is the removal of excess water from the soil, either from the surface or from the root zone, to create favourable conditions for crop growth.\n\nImportance of Land Drainage\n\n- Improves soil aeration: roots need oxygen.\n- Increases soil temperature: waterlogged soils are cold.\n- Allows earlier planting in rainy season.\n- Reduces water‑borne diseases (e.g., in rice fields, but most crops suffer).\n- Prevents salt accumulation (in irrigated areas).\n- Increases crop yields and root development.\n\nMethods of Land Drainage\n\n1. Surface drainage:\n   - Open ditches (V‑shaped or trapezoidal) along field edges or across slopes.\n   - Ridges and furrows: crops planted on ridges, water collects in furrows.\n   - Land grading: smoothing surface to create gentle slopes for water runoff.\n\n2. Sub‑surface drainage:\n   - Perforated pipes: buried at 0.5‑1.5 m depth, water enters through holes and flows to outlet.\n   - Mole drains: channel created by a mole plough (no pipe); suitable for clay soils.\n   - Rubble drains: trenches filled with stones.\n\n3. Bio‑drainage:\n   - Planting deep‑rooted trees (eucalyptus, casuarina, poplar) which absorb groundwater through transpiration.\n   - Suitable for areas with shallow water tables.\n\nChoosing a method depends on soil type, topography, cost, and purpose.\n\nMalawi Example: In irrigated schemes (e.g., Dwangwa) sub‑surface drainage prevents salinisation. In high‑rainfall areas with clay soils (Lilongwe, Mchinji), farmers use ridges and shallow open ditches to drain maize fields.",
    "summary": "Land drainage removes excess water, improves aeration and yields. Surface methods: ditches, ridges. Sub‑surface: pipes, mole drains. Bio‑drainage uses trees.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Ridges for Maize",
        "description": "Ridges allow excess water to drain from root zone."
      },
      {
        "title": "Eucalyptus for Drainage",
        "description": "Planted in waterlogged areas to lower water table."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is land drainage important for maize production?",
        "answer": "Maize roots need oxygen; waterlogging stunts growth.",
        "hint": "Roots respire."
      },
      {
        "question": "What is bio‑drainage?",
        "answer": "Using deep‑rooted trees to remove groundwater through transpiration.",
        "hint": "Trees as pumps."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 3",
    "topic": "Circulatory System",
    "lessonNumber": 1,
    "lessonTitle": "Structure of the Heart and Blood Vessels",
    "lessonId": "biology-f3-circulatory-1",
    "order": 4,
    "learningObjectives": [
      "Identify the parts of the heart and major blood vessels",
      "Distinguish between arteries, veins and capillaries"
    ],
    "introduction": "Your heart beats about 100,000 times a day, pumping blood to every cell. The circulatory system transports oxygen, nutrients and waste products. Today we learn the structure of the heart and the different types of blood vessels.",
    "keyPoints": [
      "Heart: four chambers – right atrium, right ventricle, left atrium, left ventricle. Valves prevent backflow.",
      "Major vessels: aorta (to body), vena cava (from body), pulmonary artery (to lungs), pulmonary vein (from lungs).",
      "Arteries: thick, elastic walls, carry blood away from heart, no valves, pulse present.",
      "Veins: thin walls, large lumen, contain valves, carry blood to heart.",
      "Capillaries: one‑cell thick, exchange of substances."
    ],
    "detailedContent": "Structure of the Heart\n\nThe heart is a muscular pump divided into four chambers:\n- Right atrium: receives deoxygenated blood from body (via vena cava).\n- Right ventricle: pumps blood to lungs (via pulmonary artery).\n- Left atrium: receives oxygenated blood from lungs (via pulmonary vein).\n- Left ventricle: pumps blood to body (via aorta). This chamber has the thickest muscle.\n\nValves: tricuspid (right side), bicuspid (left side) and semilunar (at exits) prevent backflow.\n\nMajor Blood Vessels\n\n- Aorta: largest artery; carries oxygenated blood from left ventricle to body.\n- Vena cava: large vein; brings deoxygenated blood from body to right atrium.\n- Pulmonary artery: carries deoxygenated blood from right ventricle to lungs.\n- Pulmonary vein: carries oxygenated blood from lungs to left atrium.\n\nComparison of Vessels\n\n| Feature | Artery | Vein | Capillary |\n|---------|--------|------|-----------|\n| Wall thickness | Thick | Thin | Very thin (one cell) |\n| Lumen | Small | Large | Very small (only RBCs pass single file) |\n| Valves | No | Yes | No |\n| Direction | Away from heart | To heart | Connect arteries and veins |\n| Blood pressure | High | Low | Intermediate |\n| Function | Transport | Return | Exchange |\n\nBlood Pressure: systolic (ventricles contract) / diastolic (ventricles relax). Measured in mmHg.\n\nCapillaries are adapted for exchange: large surface area, thin walls, slow blood flow.\n\nMalawi Example: Taking blood pressure at a clinic uses a sphygmomanometer. High blood pressure (hypertension) is a common health problem.",
    "summary": "Heart: four chambers, valves. Arteries carry blood away, veins return, capillaries exchange. Arteries thick and elastic, veins have valves.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Blood Pressure Check",
        "description": "Routine screening at health centres."
      },
      {
        "title": "Varicose Veins",
        "description": "Faulty valves cause swollen veins."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which chamber of the heart has the thickest muscle?",
        "answer": "Left ventricle",
        "hint": "Pumps to whole body."
      },
      {
        "question": "Why do veins have valves?",
        "answer": "To prevent backflow of blood due to low pressure.",
        "hint": "Blood flows against gravity in limbs."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 3",
    "topic": "Circulatory System",
    "lessonNumber": 2,
    "lessonTitle": "Blood Components and Their Functions",
    "lessonId": "biology-f3-circulatory-2",
    "order": 5,
    "learningObjectives": [
      "List the components of blood and describe their functions",
      "Explain the process of blood clotting"
    ],
    "introduction": "Blood is not just red liquid – it is a tissue with specialised cells. Today we learn about plasma, red cells, white cells and platelets, and how blood clots to prevent bleeding.",
    "keyPoints": [
      "Plasma: water, dissolved nutrients, hormones, waste – transports substances.",
      "Red blood cells: carry oxygen (haemoglobin), no nucleus, biconcave shape.",
      "White blood cells: fight infection – phagocytes engulf; lymphocytes produce antibodies.",
      "Platelets: cell fragments that initiate clotting.",
      "Clotting process: platelets → thromboplastin → prothrombin → thrombin → fibrinogen → fibrin mesh traps red cells → clot."
    ],
    "detailedContent": "Components of Blood\n\n1. Plasma (55% of blood)\n   - Straw‑coloured liquid (92% water).\n   - Contains: glucose, amino acids, lipids, vitamins, minerals, hormones, CO2, urea, antibodies.\n   - Functions: transports soluble substances, maintains pH, distributes heat.\n\n2. Red blood cells (erythrocytes)\n   - Biconcave disc – increases surface area.\n   - No nucleus – more space for haemoglobin.\n   - Haemoglobin: iron‑containing protein that reversibly binds oxygen.\n   - Lifespan about 120 days; produced in bone marrow.\n\n3. White blood cells (leucocytes)\n   - Have nucleus; colourless.\n   - Phagocytes (neutrophils, macrophages): engulf and digest bacteria.\n   - Lymphocytes: produce antibodies (B cells), kill infected cells (T cells).\n\n4. Platelets (thrombocytes)\n   - Cell fragments from megakaryocytes.\n   - Involved in clotting.\n\nBlood Clotting Process (simplified)\n\n1. Blood vessel damaged → platelets adhere and release clotting factors.\n2. Thromboplastin (from platelets and damaged tissue) converts prothrombin → thrombin (requires calcium).\n3. Thrombin converts soluble fibrinogen → insoluble fibrin.\n4. Fibrin threads form a mesh that traps red blood cells and platelets → clot.\n\nFailure to clot (haemophilia) is a genetic disorder (X‑linked recessive).\n\nAnaemia: low red blood cells or haemoglobin – causes tiredness, pale skin. Prevention: iron‑rich foods, deworming.\n\nMalawi Example: Deworming campaigns in schools reduce anaemia caused by hookworms.",
    "summary": "Plasma transports nutrients and waste. Red blood cells carry oxygen. White blood cells fight infection. Platelets clot blood. Clotting cascade stops bleeding.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Deworming in Schools",
        "description": "Reduces anaemia by preventing hookworm infestation."
      },
      {
        "title": "Haemophilia in Families",
        "description": "Genetic disorder where blood does not clot properly."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the function of haemoglobin?",
        "answer": "Carries oxygen from lungs to tissues.",
        "hint": "Iron‑containing protein."
      },
      {
        "question": "What is the role of platelets?",
        "answer": "Initiate blood clotting.",
        "hint": "Cell fragments."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 3",
    "topic": "Excretory System",
    "lessonNumber": 1,
    "lessonTitle": "Structure of the Kidney and Nephron",
    "lessonId": "biology-f3-excretory-1",
    "order": 6,
    "learningObjectives": [
      "Identify the parts of the urinary system (kidneys, ureters, bladder, urethra)",
      "Describe the internal structure of the kidney and the nephron"
    ],
    "introduction": "Your kidneys filter your blood, removing urea, excess water and salts. Today we learn the structure of the kidney and its microscopic filtering units – nephrons.",
    "keyPoints": [
      "Urinary system: kidneys (filter blood), ureters (carry urine to bladder), bladder (stores urine), urethra (voids urine).",
      "Kidney structure: outer cortex (glomeruli and tubules), inner medulla (collecting ducts), renal pelvis (collects urine).",
      "Nephron: functional unit. Components: glomerulus, Bowman’s capsule, proximal tubule, loop of Henle, distal tubule, collecting duct."
    ],
    "detailedContent": "Urinary System\n\n- Kidneys: bean‑shaped, located at back of abdomen. Filter about 180 litres of blood per day.\n- Ureters: tubes that carry urine from kidney to bladder (peristalsis).\n- Bladder: muscular sac that stores urine (capacity 300‑500 ml).\n- Urethra: tube from bladder to outside. In males, also carries semen.\n\nInternal Structure of Kidney\n\n- Cortex (outer layer): contains glomeruli and proximal/distal tubules.\n- Medulla (inner): contains loops of Henle and collecting ducts.\n- Renal pelvis: funnel‑shaped cavity collecting urine from collecting ducts, leading to ureter.\n\nThe Nephron (about 1 million per kidney)\n\n1. Glomerulus: knot of capillaries inside Bowman’s capsule. Blood pressure forces fluid out – filtration.\n2. Bowman’s capsule: collects filtrate.\n3. Proximal convoluted tubule (PCT): reabsorbs glucose, amino acids, most salts, 65% water.\n4. Loop of Henle: creates concentration gradient in medulla, allows water reabsorption.\n5. Distal convoluted tubule (DCT): further adjustments; secretion of wastes.\n6. Collecting duct: collects urine from many nephrons; final water reabsorption regulated by ADH.\n\nMalawi Example: Kidney stones are common in areas where people drink less water. Prevention: drink plenty of clean water.",
    "summary": "Kidneys filter blood; ureters carry urine; bladder stores; urethra excretes. Kidney has cortex, medulla, pelvis. Nephron: glomerulus, tubules, collecting duct.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Urinary Tract Infection",
        "description": "Common in women; drinking water helps flush bacteria."
      },
      {
        "title": "Kidney Stone",
        "description": "Hard mineral deposits can cause severe pain."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the functional unit of the kidney?",
        "answer": "Nephron",
        "hint": "Microscopic filter."
      },
      {
        "question": "Where does filtration occur in the nephron?",
        "answer": "Glomerulus inside Bowman’s capsule",
        "hint": "Capillary knot."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 3",
    "topic": "Excretory System",
    "lessonNumber": 2,
    "lessonTitle": "Urine Formation and Role of ADH",
    "lessonId": "biology-f3-excretory-2",
    "order": 7,
    "learningObjectives": [
      "Explain the process of urine formation (filtration, reabsorption, secretion)",
      "Describe the role of ADH (antidiuretic hormone) in osmoregulation"
    ],
    "introduction": "How does the kidney produce urine? It happens in three steps: filtration, reabsorption and secretion. Hormones like ADH control how much water is reabsorbed. Today we learn these processes.",
    "keyPoints": [
      "Filtration: blood pressure forces water, urea, glucose, salts from glomerulus into Bowman’s capsule.",
      "Reabsorption: useful substances (glucose, amino acids, most water) returned to blood from tubules.",
      "Secretion: additional wastes (H+, drugs, K+) moved into tubule.",
      "ADH: released when body lacks water; increases water reabsorption in collecting duct → concentrated urine.",
      "Alcohol inhibits ADH → dilute urine, dehydration."
    ],
    "detailedContent": "Urine Formation – Three Steps\n\nStep 1 – Filtration:\nBlood pressure forces water, urea, glucose, amino acids, salts and small molecules from glomerular capillaries into Bowman’s capsule. Blood cells and large proteins remain.\n\nStep 2 – Reabsorption:\nAs filtrate passes through the tubules, useful substances are actively transported back into the blood.\n- Proximal tubule: glucose, amino acids, vitamins, most NaCl and water (65%).\n- Loop of Henle: further salt and water reabsorption.\n- Distal tubule and collecting duct: variable water reabsorption (controlled by ADH).\n\nStep 3 – Secretion:\nSome substances (H+, K+, ammonia, drugs) are actively transported from blood into the tubule for excretion.\n\nEnd product: urine (urea, excess water, excess salts, other waste).\n\nRole of ADH (Antidiuretic Hormone)\n\n- Produced by hypothalamus, released by pituitary.\n- When blood is concentrated (low water), osmoreceptors in hypothalamus trigger ADH release.\n- ADH makes collecting duct walls more permeable to water → more water reabsorbed → small volume of concentrated urine.\n- When water excess, ADH release decreases → dilute urine.\n\nOsmoregulation: maintenance of constant blood concentration (about 290 mOsm/L).\n\nKidney Failure\n\nCauses: chronic infection, diabetes, high blood pressure, toxins.\n\nDialysis machine (haemodialysis):\n- Blood flows through tubing made of semi‑permeable membrane.\n- Dialysis fluid containing normal levels of salts (no urea) on other side.\n- Urea and excess salts diffuse out.\n- Clean blood returns to patient.\n\nMalawi Example: Queen Elizabeth Central Hospital in Blantyre has a renal unit with dialysis machines. Patients travel from far for treatment.",
    "summary": "Urine formation: filtration → reabsorption → secretion. ADH increases water reabsorption, concentrating urine. Kidney failure treated by dialysis or transplant.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Dialysis in Blantyre",
        "description": "QECH offers dialysis; patients travel long distances."
      },
      {
        "title": "Dark Urine",
        "description": "Indicates ADH active; drink more water."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What substance is completely reabsorbed in a healthy kidney?",
        "answer": "Glucose",
        "hint": "None appears in urine normally."
      },
      {
        "question": "What happens to urine output when ADH is released?",
        "answer": "Decreases (urine more concentrated)",
        "hint": "Body saves water."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Oxidation and Reduction",
    "lessonNumber": 1,
    "lessonTitle": "Oxidation Numbers and Redox Half‑Equations",
    "lessonId": "chemistry-f3-redox-1",
    "order": 8,
    "learningObjectives": [
      "Assign oxidation numbers to atoms in elements, compounds and ions",
      "Write half‑equations for oxidation and reduction"
    ],
    "introduction": "When iron rusts, it gains oxygen – that is oxidation. When a metal is extracted from its ore, it loses oxygen – reduction. Today we learn the electron‑based definition and how to write half‑equations.",
    "keyPoints": [
      "Oxidation: loss of electrons, increase in oxidation number.",
      "Reduction: gain of electrons, decrease in oxidation number.",
      "Oxidation number rules: free element = 0; monatomic ion = charge; H = +1 (except hydrides), O = -2 (except peroxides); sum = 0 in compound; sum = charge in ion.",
      "Half‑equation shows electron transfer. Example: Zn → Zn2+ + 2e‑ (oxidation); Cu2+ + 2e‑ → Cu (reduction)."
    ],
    "detailedContent": "Oxidation Numbers (States)\n\nRules for assigning oxidation numbers:\n- Uncombined element: 0 (e.g., Na, Cl2, O2).\n- Monatomic ion: same as charge (Na+ = +1, Cl‑ = -1).\n- Hydrogen: usually +1 (except metal hydrides, H = -1).\n- Oxygen: usually -2 (except peroxides, -1; OF2, +2).\n- Sum in a compound = 0.\n- Sum in a polyatomic ion = charge on ion.\n\nExamples:\n- H2O: H = +1 each, O = -2 → 2×(+1) + (-2) = 0.\n- SO42‑: O = -2 each (total -8), S = x: x + (-8) = -2 → x = +6.\n- MnO4‑: O = -2 each (total -8), Mn = x: x + (-8) = -1 → x = +7.\n\nHalf‑Equations\n\nOxidation half‑reaction (loss of electrons):\nExample: Zn → Zn2+ + 2e‑\n\nReduction half‑reaction (gain of electrons):\nExample: Cu2+ + 2e‑ → Cu\n\nTo obtain the overall redox equation, multiply half‑equations if necessary to equalise electrons, then add.\n\nExample: Zn + Cu2+ → Zn2+ + Cu\n\nIdentifying oxidising and reducing agents\n- Oxidising agent: causes oxidation, itself reduced (accepts electrons).\n- Reducing agent: causes reduction, itself oxidised (donates electrons).\n\nIn the reaction Zn + Cu2+ → Zn2+ + Cu:\n- Zn is the reducing agent (donates electrons).\n- Cu2+ is the oxidising agent (accepts electrons).",
    "summary": "Oxidation number rules allow tracking of electron transfer. Half‑equations show oxidation (loss of e‑) and reduction (gain of e‑). Redox combines both halves.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Rusting of Iron",
        "description": "Iron oxidises (loses electrons) in air and water."
      },
      {
        "title": "Bleaching",
        "description": "Chlorine oxidises stains."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the oxidation state of chromium in Cr2O72‑?",
        "answer": "+6",
        "hint": "O = -2 each, total -14; 2Cr + (-14) = -2 → 2Cr = +12 → Cr = +6."
      },
      {
        "question": "Write the half‑equation for the reduction of chlorine gas to chloride ions.",
        "answer": "Cl2 + 2e‑ → 2Cl‑",
        "hint": "Chlorine gains electrons."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Electrolysis",
    "lessonNumber": 1,
    "lessonTitle": "Process and Products of Electrolysis",
    "lessonId": "chemistry-f3-electrolysis-1",
    "order": 9,
    "learningObjectives": [
      "Define electrolysis and predict products for molten and aqueous electrolytes",
      "Explain the purification of copper by electrolysis"
    ],
    "introduction": "Electrolysis uses electricity to break down compounds. It is used to extract metals, purify copper and electroplate objects. Today we learn how it works and what products form.",
    "keyPoints": [
      "Electrolysis: decomposition of an electrolyte by electric current.",
      "Components: cathode (‑), anode (+), electrolyte (ionic compound molten or dissolved).",
      "Molten electrolyte: cations reduced at cathode (metal); anions oxidised at anode (non‑metal).",
      "Aqueous electrolyte: water also present; uses reactivity series to predict discharge.",
      "Copper purification: impure copper as anode, pure copper as cathode, copper(II) sulphate electrolyte. Impurities fall off as anode sludge."
    ],
    "detailedContent": "What is Electrolysis?\n\nElectrolysis is the decomposition of an electrolyte (a substance that conducts electricity when molten or in solution) by passing a direct electric current.\n\nSetup: two electrodes (cathode negative, anode positive) connected to a power supply, immersed in the electrolyte.\n\nMolten Electrolytes (e.g., molten NaCl)\n\nIons free to move:\n- Cations (Na+) move to cathode: Na+ + e‑ → Na (reduction)\n- Anions (Cl‑) move to anode: 2Cl‑ → Cl2 + 2e‑ (oxidation)\n\nProducts: sodium metal at cathode, chlorine gas at anode.\n\nAqueous Electrolytes\n\nWater also provides H+, OH‑. Which ions discharge depends on reactivity series and concentration.\n\nRules:\n- At cathode: the less reactive metal (or H+) discharges. If metal is more reactive than hydrogen, H+ discharges to form H2 gas.\n- At anode: if halide ions (Cl‑, Br‑, I‑) are present, they discharge. Otherwise, OH‑ discharges to form O2 gas.\n\nExample: Electrolysis of aqueous NaCl\n- Cathode: H+ from water discharges (Na is very reactive) → H2 gas.\n- Anode: Cl‑ discharges → Cl2 gas.\n\nExample: Electrolysis of copper(II) sulphate solution with inert electrodes (graphite)\n- Cathode: Cu2+ discharges (Cu less reactive than H) → Cu metal.\n- Anode: OH‑ discharges (no halides) → O2 gas.\n\nElectrolysis with Copper Electrodes (Purification of Copper)\n\n- Anode: impure copper (dissolves): Cu → Cu2+ + 2e‑\n- Cathode: pure copper (copper deposits): Cu2+ + 2e‑ → Cu\n- Electrolyte: copper(II) sulphate solution.\n- Impurities (gold, silver, platinum) fall off as anode sludge (valuable).\n\nApplications:\n- Extraction of aluminium (Hall‑Héroult process – alumina dissolved in cryolite).\n- Electroplating: depositing a thin layer of metal (e.g., silver, chromium) on another object for decoration or corrosion protection.\n\nMalawi Example: Copper used for electrical wiring in houses is purified by electrolysis. Electroplating of bicycle parts reduces rust.",
    "summary": "Electrolysis decomposes electrolytes. In molten salts, metal and non‑metal produced. In aqueous solutions, product depends on reactivity. Copper purification uses electrolysis.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Copper Refining",
        "description": "Electrolysis purifies copper for wires."
      },
      {
        "title": "Chrome Plating",
        "description": "Electroplating protects metal from rust."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What gas is produced at the anode during electrolysis of molten NaCl?",
        "answer": "Chlorine (Cl2)",
        "hint": "Cl‑ ions oxidised."
      },
      {
        "question": "Why is copper transferred from impure to pure electrode during copper refining?",
        "answer": "Anode dissolves, pure copper deposits on cathode.",
        "hint": "Electrolysis moves copper ions."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 3",
    "topic": "Linear Motion",
    "lessonNumber": 1,
    "lessonTitle": "Equations of Uniformly Accelerated Motion",
    "lessonId": "physics-f3-linear-motion-1",
    "order": 10,
    "learningObjectives": [
      "Define distance, displacement, speed, velocity and acceleration",
      "Apply the equations of uniformly accelerated motion (v = u + at, s = ut + ½at², v² = u² + 2as)"
    ],
    "introduction": "A car speeds up from rest. A stone falls from a bridge. These are examples of motion with constant acceleration. Today we learn the four equations of motion that allow us to predict anything about the motion if we know a few values.",
    "keyPoints": [
      "Scalars: magnitude only (distance, speed, mass, time). Vectors: magnitude and direction (displacement, velocity, acceleration, force).",
      "Equations for constant acceleration:",
      "1. v = u + at",
      "2. s = ut + ½ at²",
      "3. v² = u² + 2as",
      "4. s = (u + v)/2 × t",
      "Where u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement."
    ],
    "detailedContent": "Definitions\n\n- Distance (scalar): total path length.\n- Displacement (vector): straight‑line distance from start to finish with direction.\n- Speed (scalar): distance/time.\n- Velocity (vector): displacement/time (rate of change of displacement).\n- Acceleration (vector): rate of change of velocity (a = (v‑u)/t).\n\nEquations of Uniformly Accelerated Motion\n\nThese equations apply only when acceleration is constant. Use consistent SI units (m, m/s, m/s²).\n\n1. v = u + at\n   Example: A car starts from rest (u = 0) and accelerates at 2 m/s² for 5 seconds. v = 0 + 2×5 = 10 m/s.\n\n2. s = ut + ½ at²\n   Same car: distance travelled in 5 seconds: s = 0×5 + ½×2×5² = 0 + ½×2×25 = 25 metres.\n\n3. v² = u² + 2as\n   Example: A car moving at 20 m/s decelerates at 4 m/s² to a stop. Find stopping distance.\n   u=20, v=0, a=‑4 (deceleration).\n   0² = 20² + 2×(-4)×s → 0 = 400 – 8s → 8s = 400 → s = 50 metres.\n\n4. s = (u + v)/2 × t\n   Example: If u=10, v=30, t=4: s = (10+30)/2 × 4 = 20×4 = 80 m.\n\nMotion‑Time Graphs\n\n- Displacement‑time graph: slope = velocity. Flat line = stationary; straight sloping = constant velocity; curve = acceleration.\n- Velocity‑time graph: slope = acceleration; area under graph = displacement.\n\nFree fall: acceleration due to gravity g ≈ 10 m/s² downwards (ignoring air resistance).\n\nMalawi Example: A minibus from Blantyre to Lilongwe speeds up after a stop. Using equations, one can calculate time to reach a certain speed or distance covered.",
    "summary": "Equations of motion: v = u + at, s = ut + ½at², v² = u² + 2as, s = (u+v)/2 × t. Use for constant acceleration.",
    "estimatedTime": "25 mins",
    "malawiExamples": [
      {
        "title": "Minibus Acceleration",
        "description": "Calculate time and distance when a minibus accelerates from rest."
      },
      {
        "title": "Emergency Braking",
        "description": "Find stopping distance of a car using deceleration."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A stone is dropped from a cliff (u=0, a=10 m/s²). How fast is it moving after 3 seconds?",
        "answer": "30 m/s",
        "hint": "v = u + at = 0 + 10×3 = 30"
      },
      {
        "question": "The same stone falls for 3 seconds. How far has it fallen?",
        "answer": "45 m",
        "hint": "s = 0 + ½×10×9 = 45"
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Hooke's Law",
    "lessonNumber": 1,
    "lessonTitle": "Hooke’s Law and Elasticity",
    "lessonId": "physics-f4-hookes-law-1",
    "order": 11,
    "learningObjectives": [
      "State Hooke’s law (extension ∝ force within elastic limit)",
      "Determine the spring constant from an extension‑load graph"
    ],
    "introduction": "When you stretch a spring, the more force you apply, the more it extends – up to a point. Hooke’s law describes this relationship. Today we learn how to verify it and calculate spring constants.",
    "keyPoints": [
      "Hooke’s law: The extension of an elastic material is directly proportional to the applied force, provided the elastic limit is not exceeded.",
      "Formula: F = kx, where F = force (N), k = spring constant (N/m), x = extension (m).",
      "Spring constant: stiffness of the spring. Higher k means stiffer spring.",
      "Elastic limit: beyond this, permanent deformation occurs."
    ],
    "detailedContent": "Hooke’s Law\n\nWhen a force is applied to a spring, it stretches. Provided the force is not too large, the extension (increase in length) is directly proportional to the force.\n\nMathematically: F = k × x\n- F = force (N)\n- k = spring constant (N/m) – a measure of stiffness\n- x = extension (m) ( = stretched length – original length)\n\nVerification experiment:\n- Hang a spring from a stand.\n- Add loads (masses) and measure extension.\n- Plot graph of load (force) versus extension.\n- If linear, Hooke’s law is obeyed. Slope of graph = k.\n\nElastic limit: the point beyond which the material does not return to its original length when the force is removed. Beyond this, plastic deformation occurs.\n\nApplications:\n- Spring balances: measure force by extension.\n- Vehicle suspensions: springs absorb shocks.\n- Mattresses and ballpoint pens.\n\nSprings in parallel and series (qualitative):\n- In parallel: combined spring constant k_total = k1 + k2 (stiffer).\n- In series: 1/k_total = 1/k1 + 1/k2 (more extension for same load).\n\nMalawi Example: A farmer uses a spring balance to weigh bags of maize. The balance is calibrated using Hooke’s law.",
    "summary": "Hooke’s law: F = kx, extension proportional to force within elastic limit. Spring constant k = F/x. Graph slope gives k.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Spring Balance",
        "description": "Used to weigh produce at the market."
      },
      {
        "title": "Vehicle Suspension",
        "description": "Springs absorb bumps on rough roads."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A spring extends by 0.05 m when a force of 10 N is applied. Calculate the spring constant.",
        "answer": "200 N/m",
        "hint": "k = F/x = 10/0.05 = 200 N/m"
      },
      {
        "question": "What happens if you stretch a spring beyond its elastic limit?",
        "answer": "It does not return to its original length (permanent deformation).",
        "hint": "Plastic region."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Electromagnetism",
    "lessonNumber": 1,
    "lessonTitle": "Electric Motors and Generators",
    "lessonId": "physics-f4-electromagnetism-1",
    "order": 12,
    "learningObjectives": [
      "Explain the working of a simple DC motor",
      "Describe how an AC generator produces electricity"
    ],
    "introduction": "When electricity flows through a wire, it creates a magnetic field. When a magnetic field changes near a wire, it creates electricity. Today we learn how motors and generators work.",
    "keyPoints": [
      "DC motor: coil in magnetic field; current causes rotation; commutator reverses current every half‑turn.",
      "AC generator (dynamo): coil rotates in magnetic field, inducing alternating current; slip rings allow AC output.",
      "Fleming’s left‑hand rule (motor): thumb = motion, first finger = field, second finger = current.",
      "Fleming’s right‑hand rule (generator): thumb = motion, first finger = field, second finger = induced current.",
      "Factors affecting induced emf: speed of rotation, magnetic field strength, number of turns, area of coil."
    ],
    "detailedContent": "Simple DC Motor\n\nA DC motor consists of a coil of wire (armature) placed between the poles of a magnet. Current flows through the coil, producing a magnetic field that interacts with the permanent field, causing rotation.\n\nKey part: commutator (split ring) – reverses the current direction every half‑turn, so the coil continues rotating in the same direction.\n\nFleming’s left‑hand rule (for motors):\n- Index finger: direction of magnetic field (N to S).\n- Middle finger: direction of current.\n- Thumb: direction of motion (force).\n\nApplications: electric fans, water pumps, maize mills, toys.\n\nSimple AC Generator (Alternator)\n\nA coil rotated in a magnetic field. As the coil turns, the magnetic flux through it changes, inducing an emf. Slip rings (continuous rings) allow the current to be taken out without reversing direction, producing alternating current.\n\nFleming’s right‑hand rule (for generators):\n- Thumb: motion\n- Index finger: field\n- Middle finger: induced current\n\nFactors affecting output:\n- Faster rotation → higher voltage.\n- Stronger magnets → higher voltage.\n- More turns on coil → higher voltage.\n- Larger coil area → higher voltage.\n\nApplications: hydroelectric power (Nkula Falls), bicycles dynamo, car alternators.\n\nMalawi Example: Nkula Falls hydroelectric plant uses water turbines to rotate coils in magnetic fields, generating AC electricity for the national grid. Small bicycle dynamos power lights.",
    "summary": "DC motor: coil in magnetic field, commutator reverses current → continuous rotation. AC generator: coil rotates, induces AC. Fleming’s rules determine direction.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Hydroelectric at Nkula",
        "description": "Falling water turns turbines; AC generated."
      },
      {
        "title": "Bicycle Dynamo",
        "description": "Wheel rotation generates AC for lights."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the function of the commutator in a DC motor?",
        "answer": "Reverses current every half‑turn to keep rotation direction.",
        "hint": "Split ring."
      },
      {
        "question": "What type of current is produced by a simple generator with slip rings?",
        "answer": "Alternating current (AC)",
        "hint": "No commutation."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Digital Electronics",
    "lessonNumber": 1,
    "lessonTitle": "Basic Logic Gates (AND, OR, NOT)",
    "lessonId": "physics-f4-logic-gates-1",
    "order": 13,
    "learningObjectives": [
      "Draw the symbols and truth tables for AND, OR and NOT gates",
      "Combine gates to make simple circuits"
    ],
    "introduction": "Computers and phones use digital electronics – circuits that work with two states: 1 (on, high voltage) and 0 (off, low voltage). Logic gates are the building blocks. Today we learn the three basic gates: AND, OR and NOT.",
    "keyPoints": [
      "AND gate: output is 1 only if both inputs are 1.",
      "OR gate: output is 1 if at least one input is 1.",
      "NOT gate (inverter): output is opposite of input (1→0, 0→1).",
      "Truth tables list all input combinations and output.",
      "Gates can be combined to form circuits that add numbers (half‑adder) or store data (flip‑flop)."
    ],
    "detailedContent": "Logic Gates\n\nDigital signals are binary: 1 (high voltage, usually 5V) and 0 (low voltage, 0V). Logic gates perform basic logic operations.\n\nAND Gate\nSymbol: D‑shape.\nTruth table:\nA B │ Q\n0 0 │ 0\n0 1 │ 0\n1 0 │ 0\n1 1 │ 1\n\nOR Gate\nSymbol: curved shape.\nTruth table:\nA B │ Q\n0 0 │ 0\n0 1 │ 1\n1 0 │ 1\n1 1 │ 1\n\nNOT Gate (Inverter)\nSymbol: triangle with circle.\nTruth table:\nA │ Q\n0 │ 1\n1 │ 0\n\nCombining Gates\n\nExample: (A AND B) OR C – first compute AND of A and B, then OR with C.\n\nApplications:\n- Security systems (AND gate: both key and code correct → access).\n- Alarm systems (OR gate: either door or window open → alarm).\n- Computers: thousands of gates form processors and memory.\n\nMalawi Example: Solar phone chargers sometimes use a simple circuit with a transistor acting as a NOT gate to prevent overcharging.",
    "summary": "AND: output 1 only if both inputs 1. OR: output 1 if any input 1. NOT: inverts. Truth tables define behaviour. Gates combine to form digital circuits.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "AND Gate in Security",
        "description": "Both card and PIN needed for entry."
      },
      {
        "title": "OR Gate in Alarm",
        "description": "Any sensor activated triggers alarm."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the output of an AND gate when A=1 and B=0?",
        "answer": "0",
        "hint": "Both must be 1."
      },
      {
        "question": "Draw the truth table for a NOT gate.",
        "answer": "0→1, 1→0",
        "hint": "Inverter."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Locomotion and Support",
    "lessonNumber": 1,
    "lessonTitle": "The Human Skeleton and Bone Structure",
    "lessonId": "biology-f4-locomotion-1",
    "order": 100,
    "learningObjectives": [
      "Identify the main bones of the human skeleton (skull, spine, ribcage, limbs)",
      "Describe the structure of a long bone (diaphysis, epiphysis, marrow)"
    ],
    "introduction": "Your skeleton supports your body, protects organs, and enables movement. Today we learn the names of the main bones and the structure of a long bone.",
    "keyPoints": [
      "Functions: support, protection (skull protects brain, ribcage protects heart/lungs), movement (with muscles), mineral storage (calcium, phosphorus), blood cell production (bone marrow).",
      "Major bones: cranium, clavicle, scapula, sternum, ribs, humerus, radius, ulna, pelvis, femur, tibia, fibula, patella, tarsals, metatarsals, phalanges.",
      "Long bone structure: diaphysis (shaft – compact bone), epiphyses (ends – spongy bone), articular cartilage, medullary cavity (yellow marrow), red marrow in spongy bone."
    ],
    "detailedContent": "Functions of the Skeleton\n\n- Support: Framework holds the body upright.\n- Protection: Skull protects brain; ribcage protects heart and lungs.\n- Movement: Muscles attach to bones; contraction pulls bones.\n- Mineral storage: Calcium and phosphorus stored; released when needed.\n- Blood cell production: Red bone marrow in flat bones and ends of long bones produces red cells, white cells, platelets.\n\nMajor Bones\n\nHead: Cranium (skull), mandible (jaw)\nTrunk: Sternum (breastbone), ribs (12 pairs), vertebrae (spine)\nShoulder: Clavicle (collarbone), scapula (shoulder blade)\nArm: Humerus (upper arm), radius and ulna (forearm), carpals (wrist), metacarpals, phalanges (fingers)\nPelvis: Hip bones (ilium, ischium, pubis)\nLeg: Femur (thigh – longest bone), tibia (shin), fibula, patella (kneecap), tarsals (ankle), metatarsals, phalanges (toes)\n\nStructure of a Long Bone (e.g., femur)\n\n- Periosteum: Outer tough membrane with blood vessels.\n- Compact bone (cortex): Dense, hard layer under periosteum.\n- Spongy bone (cancellous): Porous, at ends (epiphyses). Contains red bone marrow.\n- Medullary cavity: Central cavity in diaphysis (shaft). Contains yellow bone marrow (fatty tissue).\n- Articular cartilage: Smooth cartilage at ends, reduces friction.\n\nMalawi Example: The femur (thigh bone) is the longest and strongest bone, important for walking and running.",
    "summary": "Skeleton supports, protects, moves, stores minerals, produces blood cells. Long bones have compact and spongy bone, marrow. Main bones: skull, spine, ribs, limbs.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Femur Length",
        "description": "The thigh bone is longest – supports walking."
      },
      {
        "title": "Bone Marrow",
        "description": "Red marrow produces blood cells; found in hip bones and ends of long bones."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What are the functions of the skeleton?",
        "answer": "Support, protection, movement, mineral storage, blood cell production",
        "hint": "Remember Five M’s? Not exactly, but list key roles."
      },
      {
        "question": "What is the medullary cavity filled with?",
        "answer": "Yellow bone marrow (fat)",
        "hint": "In the shaft."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Locomotion and Support",
    "lessonNumber": 2,
    "lessonTitle": "Joints, Antagonistic Muscles, and Injuries",
    "lessonId": "biology-f4-locomotion-2",
    "order": 101,
    "learningObjectives": [
      "Distinguish between types of joints (fixed, slightly movable, synovial)",
      "Explain how antagonistic muscles work (e.g., biceps and triceps) and describe common injuries (fractures, dislocations, sprains)"
    ],
    "introduction": "Bones meet at joints. Muscles pull on bones to create movement. Today we learn about different joints, how muscles work in pairs, and what to do when bones or joints are injured.",
    "keyPoints": [
      "Fixed joints (sutures in skull): no movement.",
      "Slightly movable (vertebrae with discs).",
      "Freely movable (synovial) – hinge (elbow, knee), ball‑and‑socket (shoulder, hip), pivot (neck), gliding (wrist).",
      "Antagonistic muscles: biceps and triceps – biceps contracts to bend elbow; triceps contracts to straighten.",
      "Injuries: fracture (broken bone) – splint, ice; dislocation (bone out of joint) – do not relocate; sprain (ligament tear) – RICE (rest, ice, compression, elevation)."
    ],
    "detailedContent": "Joints\n\n1. Fixed (immovable): e.g., skull sutures. No movement.\n2. Slightly movable: e.g., vertebrae with cartilage discs allow slight movement.\n3. Freely movable (synovial): Most joints. Have synovial fluid for lubrication.\n   - Hinge (elbow, knee): moves one direction (flex/extend).\n   - Ball‑and‑socket (shoulder, hip): wide range of motion.\n   - Pivot (between atlas and axis vertebrae, radius‑ulna): rotation.\n   - Gliding (wrist, ankle): sliding.\n\nAntagonistic Muscles\n\nMuscles can only pull (contract), not push. To move a joint in two directions, two muscles work opposite each other (antagonists).\n\nExample: Bending (flexing) the elbow:\n- Biceps (front) contracts, elbow bends.\n- Triceps (back) relaxes.\n\nStraightening (extending) the elbow:\n- Triceps contracts, elbow straightens.\n- Biceps relaxes.\n\nInjuries and First Aid\n\n- Fracture: Broken bone. Types: simple (closed, skin intact), compound (bone sticks out), greenstick (in children – bends and cracks). First aid: keep still, support limb, splint, apply ice, seek medical help.\n- Dislocation: Bone forced out of joint. First aid: do not try to relocate; support, ice, transport to clinic.\n- Sprain: Ligament stretched or torn (often ankle). First aid: RICE – Rest, Ice, Compression, Elevation.\n\nMalawi Example: Children playing football sometimes get ankle sprains. Villagers use cold water from the well to reduce swelling (RICE – ice substitute). Health workers teach basic fracture immobilisation using sticks and cloth.",
    "summary": "Joints: fixed, slightly movable, freely movable (hinge, ball‑and‑socket, pivot, gliding). Antagonistic muscles (biceps/triceps). Fractures, dislocations, sprains – basic first aid.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Ankle Sprain in Football",
        "description": "RICE method using cold water from well."
      },
      {
        "title": "Fracture Splint",
        "description": "Sticks and cloth immobilise a broken leg."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of joint is the shoulder?",
        "answer": "Ball‑and‑socket joint",
        "hint": "Allows rotation in many directions."
      },
      {
        "question": "What should you NOT do for a dislocation?",
        "answer": "Do not try to relocate the bone yourself.",
        "hint": "You could cause more damage."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Endocrine System",
    "lessonNumber": 1,
    "lessonTitle": "Glands and Hormones",
    "lessonId": "biology-f4-endocrine-1",
    "order": 102,
    "learningObjectives": [
      "Identify the major endocrine glands (pituitary, thyroid, adrenal, pancreas, ovaries, testes)",
      "Explain the functions of insulin, glucagon, adrenaline, thyroxine, and sex hormones"
    ],
    "introduction": "Hormones are chemical messengers that control many body functions – growth, metabolism, reproduction, stress response. Today we learn about the endocrine glands and the hormones they produce.",
    "keyPoints": [
      "Pituitary: master gland – controls other glands; produces growth hormone (GH), ADH, FSH, LH.",
      "Thyroid: produces thyroxine – controls metabolic rate. Iodine needed.",
      "Adrenal: produces adrenaline – fight or flight (increases heart rate, blood pressure, blood sugar).",
      "Pancreas: produces insulin (lowers blood sugar) and glucagon (raises blood sugar).",
      "Ovaries (female): oestrogen and progesterone – regulate menstrual cycle, pregnancy.",
      "Testes (male): testosterone – sperm production, male secondary characteristics."
    ],
    "detailedContent": "Endocrine Glands and Hormones\n\nEndocrine glands secrete hormones directly into the blood (ductless). Hormones are chemical messengers that travel to target organs.\n\nPituitary Gland (master gland)\n- Growth hormone (GH): stimulates growth of bones and tissues.\n- Antidiuretic hormone (ADH): increases water reabsorption in kidneys.\n- FSH and LH: control reproductive cycles.\n\nThyroid Gland\n- Thyroxine: controls metabolic rate. Deficiency in children causes cretinism; in adults, myxoedema (sluggishness). Goitre: iodine deficiency leads to enlarged thyroid.\n\nAdrenal Glands\n- Adrenaline (epinephrine): prepares body for stress (fight or flight) – increases heart rate, blood pressure, blood sugar, dilates pupils.\n\nPancreas (Islets of Langerhans)\n- Insulin: lowers blood glucose by promoting uptake into cells and conversion to glycogen in liver.\n- Glucagon: raises blood glucose by breaking down glycogen to glucose.\n\nOvaries (female)\n- Oestrogen: development of female secondary characteristics, menstrual cycle.\n- Progesterone: prepares uterus for pregnancy, maintains pregnancy.\n\nTestes (male)\n- Testosterone: development of male secondary characteristics, sperm production.\n\nComparison with nervous system: endocrine responses are slower but longer‑lasting.\n\nMalawi Example: Goitre was common in some parts of Malawi due to iodine deficiency. Iodised salt has reduced its prevalence.",
    "summary": "Pituitary (master), thyroid (metabolism), adrenal (stress), pancreas (blood sugar), ovaries/testes (reproduction). Insulin lowers blood sugar; glucagon raises it.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Goitre Prevention",
        "description": "Iodised salt prevents thyroid enlargement."
      },
      {
        "title": "Diabetes in Adults",
        "description": "Lack of insulin leads to high blood sugar."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which gland produces adrenaline?",
        "answer": "Adrenal glands",
        "hint": "On top of kidneys."
      },
      {
        "question": "What is the effect of insulin on blood glucose?",
        "answer": "Lowers blood glucose",
        "hint": "Moves glucose into cells."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Cancer",
    "lessonNumber": 1,
    "lessonTitle": "Causes, Types, and Prevention of Cancer",
    "lessonId": "biology-f4-cancer-1",
    "order": 103,
    "learningObjectives": [
      "Define cancer and list factors that increase the risk",
      "Describe prevention, early detection, and treatment options"
    ],
    "introduction": "Cancer is a disease of uncontrolled cell division. It can affect any organ. Today we learn what causes cancer, how to recognise it early, and how to reduce risk.",
    "keyPoints": [
      "Cancer: abnormal cells grow uncontrollably, invade nearby tissues, may spread (metastasis).",
      "Risk factors: smoking (lung, throat), alcohol, UV radiation (skin), HPV (cervical), poor diet, obesity, genetic predisposition.",
      "Common cancers in Malawi: cervical, breast, prostate, liver, Kaposi’s sarcoma (associated with HIV).",
      "Prevention: avoid tobacco, limit alcohol, HPV vaccine, sun protection, healthy diet, regular screening (pap smear, breast exam).",
      "Treatment: surgery, radiotherapy, chemotherapy, immunotherapy, palliative care."
    ],
    "detailedContent": "What is Cancer?\n\nNormal cells divide in a controlled way. Cancer cells lose this control, divide rapidly and form a mass (tumour). Tumours can be benign (non‑cancerous, does not spread) or malignant (cancerous, invades other tissues). Malignant cells may spread through blood or lymph – metastasis.\n\nRisk Factors\n\n- Tobacco use (smoking, chewing): causes lung, mouth, throat, oesophagus cancer.\n- Alcohol: increases risk of liver, breast, oesophagus cancer.\n- UV radiation: skin cancer (use sunscreen, avoid midday sun).\n- Human papillomavirus (HPV): causes cervical cancer; vaccine available.\n- Poor diet (low fruits/vegetables, high processed meat) and obesity.\n- Genetics: some cancers run in families (e.g., breast cancer BRCA gene).\n\nCommon Cancers in Malawi\n\n- Cervical cancer: leading cause of cancer death in women. Preventable by HPV vaccine and screening (VIA, pap smear).\n- Breast cancer: women; self‑examination and mammography.\n- Prostate cancer: men; common in older age.\n- Kaposi’s sarcoma: often in HIV‑positive individuals.\n- Liver cancer: associated with hepatitis B (vaccine available).\n\nEarly Detection and Prevention\n\n- Vaccination: HPV (cervical), hepatitis B (liver).\n- Screening: pap smear (cervical), breast exam, prostate‑specific antigen (PSA) test.\n- Lifestyle: no smoking, limit alcohol, healthy diet, regular exercise.\n- Sun protection: hats, long sleeves, sunscreen.\n\nTreatment Options\n\n- Surgery: remove tumour.\n- Radiotherapy: high‑energy rays kill cancer cells.\n- Chemotherapy: drugs kill fast‑dividing cells (side effects: hair loss, nausea).\n- Immunotherapy: helps immune system fight cancer.\n- Palliative care: relief of symptoms when cure not possible.\n\nMalawi Example: Cervical cancer screening is available at many health centres (VIA and cryotherapy). HPV vaccine is given to girls aged 9‑14.",
    "summary": "Cancer is uncontrolled cell growth. Risk factors: smoking, UV, HPV, genetics. Prevention: vaccination, screening, healthy lifestyle. Treatment: surgery, chemo, radiotherapy.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "HPV Vaccine",
        "description": "Given to girls to prevent cervical cancer."
      },
      {
        "title": "Pap Smear Campaigns",
        "description": "Early detection saves lives."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name two risk factors for cancer.",
        "answer": "Smoking and UV radiation (or any valid)",
        "hint": "Lifestyle and environmental."
      },
      {
        "question": "What is metastasis?",
        "answer": "Spread of cancer cells from original site to other parts of the body.",
        "hint": "Secondary tumours."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Organ Transplants",
    "lessonNumber": 1,
    "lessonTitle": "Examples and Considerations for Organ Transplants",
    "lessonId": "biology-f4-transplants-1",
    "order": 104,
    "learningObjectives": [
      "List examples of organ transplants (kidney, liver, heart, cornea, skin)",
      "Explain factors to consider before transplant (blood type, tissue matching, immunosuppression)"
    ],
    "introduction": "When an organ fails, a transplant can save a life. Kidneys, livers, hearts, corneas and skin can be transplanted. Today we learn how transplants work and the challenges involved.",
    "keyPoints": [
      "Kidney transplant: most common – from living donor or deceased donor.",
      "Liver, heart, lung, pancreas, cornea, skin grafts.",
      "Blood type must be compatible (ABO system).",
      "Tissue matching (HLA) reduces rejection risk.",
      "Immunosuppressant drugs (e.g., cyclosporin) needed lifelong to prevent rejection.",
      "Ethical issues: organ shortage, living donor risks, consent, transplantation tourism."
    ],
    "detailedContent": "Examples of Organ Transplants\n\n- Kidney: most successful and common. Living donor (related) or cadaveric. Patients with end‑stage renal disease.\n- Liver: from deceased donor or living donor (partial liver regenerates in donor and recipient).\n- Heart: for severe heart failure; from brain‑dead donor.\n- Cornea: from cadavers; restores sight in corneal blindness.\n- Skin grafts: for severe burns; from patient’s own skin (autograft) or cadaver (allograft).\n\nFactors to Consider Before Transplant\n\n1. Blood group compatibility: same ABO system (A to A, O to O, etc.). Incompatible leads to hyperacute rejection.\n\n2. Tissue matching (Human Leukocyte Antigens – HLA): better match → less rejection. Siblings are often best matches.\n\n3. Cross‑match test: patient’s serum mixed with donor cells; must be negative (no pre‑formed antibodies).\n\n4. Medical fitness: recipient must be free from active infection and severe heart/lung disease.\n\n5. Psychosocial: ability to adhere to lifelong immunosuppressants, follow‑up visits.\n\n6. Ethical and legal: voluntary consent, no coercion for living donors, fair allocation of cadaveric organs.\n\nRejection and Immunosuppression\n\n- Rejection: immune system attacks the transplanted organ as foreign.\n- Immunosuppressive drugs (cyclosporin, tacrolimus, prednisolone) suppress T‑cell activity. Side effects: infections, kidney damage, diabetes.\n\nMalawi: Few transplant centres; most patients travel abroad (India, South Africa) for kidney transplant. Dialysis is more common.",
    "summary": "Transplanted organs: kidney, liver, heart, cornea, skin. Need blood group and tissue matching, immunosuppression to stop rejection. Ethical issues include organ shortage.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Corneal Transplant",
        "description": "Restores sight; from eye donors."
      },
      {
        "title": "Dialysis in Blantyre",
        "description": "QECH offers dialysis; transplants rare."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is tissue matching important in transplantation?",
        "answer": "To reduce the risk of rejection.",
        "hint": "HLA compatibility."
      },
      {
        "question": "What is the main challenge after a successful transplant?",
        "answer": "Lifelong immunosuppression to prevent rejection, increases infection risk.",
        "hint": "Balancing rejection and immunity."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Blood Groups and Transfusion",
    "lessonNumber": 1,
    "lessonTitle": "ABO and Rhesus Blood Systems",
    "lessonId": "biology-f4-blood-groups-1",
    "order": 105,
    "learningObjectives": [
      "Describe the ABO blood system (A, B, AB, O) and Rhesus factor",
      "Explain compatibility for blood transfusion"
    ],
    "introduction": "Not all blood is the same. Blood type is determined by antigens on red blood cells. Giving the wrong blood can be fatal. Today we learn the ABO and Rhesus systems and who can donate to whom.",
    "keyPoints": [
      "ABO system: antigens A and B on red cells; antibodies in plasma against foreign antigens.",
      "Type A: A antigen, anti‑B antibodies. Can receive from A and O.",
      "Type B: B antigen, anti‑A antibodies. Can receive from B and O.",
      "Type AB: both A and B antigens, no antibodies – universal recipient.",
      "Type O: no antigens, both anti‑A and anti‑B – universal donor (red cells).",
      "Rhesus factor: Rh+ (antigen present), Rh‑ (absent). Rh+ can receive from Rh+ or Rh‑; Rh‑ should receive Rh‑ only (to avoid sensitisation)."
    ],
    "detailedContent": "ABO Blood System\n\nBlood type is determined by the presence or absence of antigens (A and B) on red blood cells. Plasma contains antibodies against the antigens not present.\n\n- Type A: A antigens on RBCs; anti‑B antibodies in plasma. Can donate to A and AB. Can receive from A and O.\n- Type B: B antigens; anti‑A antibodies. Donates to B and AB. Receives from B and O.\n- Type AB: both A and B antigens; no antibodies. Universal recipient (can receive from A, B, AB, O). Can donate only to AB.\n- Type O: no A or B antigens; both anti‑A and anti‑B antibodies. Universal donor (red cells can be given to any ABO type). Can receive only from O.\n\nRhesus Factor\n\nAnother antigen called Rh factor (D antigen). If present on RBCs – Rh positive (Rh+); if absent – Rh negative (Rh‑).\n\n- Rh+ individuals can receive Rh+ or Rh‑ blood (body does not naturally have anti‑Rh antibodies).\n- Rh‑ individuals should receive Rh‑ blood only. If given Rh+, they produce anti‑Rh antibodies (sensitisation).\n\nClinical importance:\n- In pregnancy: if mother is Rh‑ and father is Rh+, baby may be Rh+. At delivery, baby’s blood can enter mother, causing her to produce anti‑Rh antibodies. Next pregnancy with Rh+ baby can lead to haemolytic disease of the newborn (HDN). Prevented by anti‑D injection.\n- Transfusion: Always cross‑match before transfusion.\n\nMalawi Example: Blood donors are screened for blood group and Rh factor. The Malawi Blood Transfusion Service (MBTS) ensures safe supply.",
    "summary": "ABO: A, B, AB, O. O is universal donor, AB universal recipient. Rh+ or Rh‑ matters for transfusion and pregnancy. Compatibility prevents harmful reactions.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "MBTS Blood Donation",
        "description": "Donors are typed; group O Rh‑ is universal donor."
      },
      {
        "title": "Anti‑D Injection",
        "description": "Given to Rh‑ mothers to prevent haemolytic disease."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which blood type is the universal donor?",
        "answer": "O negative (O‑)",
        "hint": "No A, B, or Rh antigens."
      },
      {
        "question": "Why is AB type called universal recipient?",
        "answer": "Has no antibodies against A, B, or Rh (if AB+).",
        "hint": "Can receive from any ABO type."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Infectious Diseases",
    "lessonNumber": 1,
    "lessonTitle": "Tuberculosis (TB) – Causes, Transmission, Prevention",
    "lessonId": "biology-f4-tb-1",
    "order": 106,
    "learningObjectives": [
      "Identify the causative agent and mode of transmission of TB",
      "Describe the symptoms, prevention, and treatment (DOTS)"
    ],
    "introduction": "Tuberculosis (TB) is a bacterial disease that mainly affects the lungs. It is a major health problem in Malawi. Today we learn how TB spreads, its symptoms, and how to prevent and treat it.",
    "keyPoints": [
      "Caused by: Mycobacterium tuberculosis (bacterium).",
      "Transmission: airborne droplets (coughing, sneezing).",
      "Symptoms: persistent cough (≥2 weeks), fever, night sweats, weight loss, coughing blood.",
      "Prevention: BCG vaccine (given at birth), ventilation, covering mouth when coughing, early diagnosis, treatment.",
      "Treatment: DOTS (Directly Observed Therapy, Short‑course) – combination of antibiotics (isoniazid, rifampicin, ethambutol, pyrazinamide) for 6‑8 months."
    ],
    "detailedContent": "What is Tuberculosis?\n\nTB is an infectious disease caused by the bacterium Mycobacterium tuberculosis. It primarily affects the lungs (pulmonary TB) but can also affect other organs (extrapulmonary TB).\n\nTransmission\n\nWhen an infected person coughs, sneezes, or speaks, tiny droplets containing bacteria are released. Another person breathes them in and becomes infected. Not everyone infected becomes sick; many have latent TB (no symptoms, not contagious).\n\nSymptoms\n\n- Persistent cough lasting more than 2 weeks (sometimes with blood).\n- Fever and night sweats.\n- Unexplained weight loss.\n- Fatigue and loss of appetite.\n- Chest pain, difficulty breathing.\n\nPrevention\n\n- BCG vaccine: given at birth or soon after; protects against severe forms in children.\n- Good ventilation: reduces concentration of bacteria in air.\n- Cover mouth and nose when coughing.\n- Early diagnosis and treatment: reduces spread.\n- Screening of contacts.\n- HIV control (HIV increases risk of developing active TB).\n\nTreatment – DOTS\n\nDirectly Observed Therapy, Short‑course: a health worker or trained volunteer watches the patient swallow each dose. This ensures adherence and prevents drug resistance.\n\nStandard regimen:\n- 2 months of four drugs: isoniazid, rifampicin, ethambutol, pyrazinamide.\n- Then 4‑7 months of two drugs: isoniazid and rifampicin.\nTotal 6‑8 months.\n\nFailure to complete treatment leads to MDR‑TB (multidrug‑resistant TB), which is harder to treat.\n\nMalawi Example: TB is a leading cause of death among people living with HIV. National TB Control Programme provides free DOTS. Health facilities have sputum microscopy machines.",
    "summary": "TB is bacterial, airborne. Symptoms: chronic cough, fever, weight loss. Prevent with BCG and good hygiene. Treat with six‑month DOTS regimen.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "BCG Vaccine",
        "description": "Given to newborns to prevent severe TB."
      },
      {
        "title": "DOTS in Clinics",
        "description": "Patients take drugs under supervision to ensure cure."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the causative agent of TB?",
        "answer": "Mycobacterium tuberculosis",
        "hint": "Bacterium."
      },
      {
        "question": "Why is DOTS important?",
        "answer": "Prevents drug resistance and ensures full treatment.",
        "hint": "Adherence."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Infectious Diseases",
    "lessonNumber": 2,
    "lessonTitle": "Malaria – Causes, Transmission, Prevention and Control",
    "lessonId": "biology-f4-malaria-1",
    "order": 107,
    "learningObjectives": [
      "Describe the causative agent, vector, and life cycle of malaria",
      "Explain prevention (ITNs, IRS) and treatment (ACTs)"
    ],
    "introduction": "Malaria is a leading cause of sickness and death in Malawi, especially in children under five. It is transmitted by mosquitoes. Today we learn how malaria spreads and how to prevent it.",
    "keyPoints": [
      "Causative agent: Plasmodium parasite (four species, most common Plasmodium falciparum).",
      "Vector: female Anopheles mosquito.",
      "Life cycle: mosquito bites infected person → picks up parasites → bites another person → parasites travel to liver → multiply → infect red blood cells → cycle.",
      "Symptoms: fever, chills, headache, vomiting, anaemia, convulsions (severe).",
      "Prevention: insecticide‑treated nets (ITNs), indoor residual spraying (IRS), chemoprophylaxis for travellers, environmental management (remove standing water).",
      "Treatment: artemisinin‑based combination therapy (ACTs)."
    ],
    "detailedContent": "What is Malaria?\n\nMalaria is a parasitic disease caused by protozoa of the genus Plasmodium. The most dangerous species in Malawi is Plasmodium falciparum.\n\nTransmission\n\nThe parasite is transmitted by the bite of an infected female Anopheles mosquito. The mosquito breeds in stagnant water (puddles, ponds, hoof prints, rice fields). It bites mainly at night.\n\nLife Cycle (simplified)\n\n1. Infected mosquito bites human → injects sporozoites.\n2. Sporozoites travel to liver → multiply → release merozoites.\n3. Merozoites infect red blood cells → multiply → rupture releasing more merozoites (causing fever) and some become gametocytes.\n4. Another mosquito bites infected person → picks up gametocytes → sexual reproduction in mosquito → sporozoites form in salivary glands → cycle continues.\n\nSymptoms\n\n- Fever (often cyclical every 48 hours for P. falciparum is irregular), chills, sweating.\n- Headache, muscle pain, fatigue.\n- Nausea, vomiting.\n- Anaemia (destruction of red blood cells).\n- Severe malaria: cerebral malaria (convulsions, coma), respiratory distress, organ failure.\n\nPrevention and Control\n\n- Insecticide‑treated nets (ITNs): sleeping under an ITN reduces contact with mosquitoes. Re‑treating nets is important.\n- Indoor residual spraying (IRS): spraying insecticide on walls of houses kills mosquitoes that rest there.\n- Environmental management: drain or fill stagnant water, clear bushes.\n- Intermittent preventive treatment in pregnancy (IPTp) and for infants.\n- Chemoprophylaxis for travellers.\n- Education on symptoms and seeking early treatment.\n\nTreatment\n\nArtemisinin‑based combination therapy (ACTs) – e.g., artemether‑lumefantrine (Coartem). This rapidly kills parasites and reduces resistance. For severe malaria, injectable artesunate followed by oral ACT.\n\nMalawi Example: The government distributes free ITNs through mass campaigns. Health centres provide ACTs free of charge. Malaria cases have decreased but remain high.",
    "summary": "Malaria: Plasmodium parasite, Anopheles mosquito. Prevent with ITNs, IRS, remove stagnant water. Treat with ACTs. Early treatment saves lives.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Free ITNs",
        "description": "Mass distribution campaigns in Malawi."
      },
      {
        "title": "Coartem",
        "description": "ACT used in all health facilities."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which mosquito transmits malaria?",
        "answer": "Female Anopheles mosquito",
        "hint": "Breeds in clean water, bites at night."
      },
      {
        "question": "What is the first‑line treatment for uncomplicated malaria in Malawi?",
        "answer": "Artemisinin‑based combination therapy (ACT) – Coartem.",
        "hint": "Artemether‑lumefantrine."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Infectious Diseases",
    "lessonNumber": 3,
    "lessonTitle": "Typhoid Fever – Causes, Transmission, Prevention",
    "lessonId": "biology-f4-typhoid-1",
    "order": 108,
    "learningObjectives": [
      "Explain the cause and mode of transmission of typhoid fever",
      "Describe the symptoms, prevention, and treatment"
    ],
    "introduction": "Typhoid fever is a bacterial infection spread through contaminated food and water. It causes prolonged fever and gut symptoms. Today we learn how to recognise and prevent it.",
    "keyPoints": [
      "Causative agent: Salmonella typhi (bacterium).",
      "Transmission: faecal‑oral route – contaminated water, food (especially raw vegetables, milk), or hands.",
      "Symptoms: high fever that rises stepwise, headache, abdominal pain, constipation or diarrhoea, rose spots on chest, slow heart rate.",
      "Prevention: safe drinking water (boil or chlorinate), proper sanitation (latrines), handwashing with soap, food hygiene, typhoid vaccine.",
      "Treatment: antibiotics (ciprofloxacin, azithromycin, ceftriaxone). Resistance is a growing problem."
    ],
    "detailedContent": "What is Typhoid Fever?\n\nTyphoid fever is a systemic infection caused by the bacterium Salmonella typhi, which is only found in humans.\n\nTransmission\n\n- Faecal‑oral route: ingesting water or food contaminated with faeces of an infected person or a chronic carrier.\n- Common sources: contaminated water, raw vegetables washed with contaminated water, milk, shellfish, street food.\n- Also: direct hand‑to‑mouth after using toilet.\n\nSymptoms (usually develop 1‑3 weeks after exposure)\n\n- Prolonged fever (often stepwise increase over days, then sustained high fever).\n- Headache, malaise.\n- Abdominal pain, either constipation or diarrhoea (pea‑soup appearance in some).\n- Rose spots: faint pink rash on chest/abdomen.\n- Relative bradycardia (slow heart rate despite high fever).\n\nComplications: intestinal bleeding, perforation (requires surgery).\n\nPrevention\n\n- Safe water: boil or chlorinate drinking water.\n- Sanitation: use latrines, avoid open defecation.\n- Handwashing with soap after toilet and before eating.\n- Food hygiene: cook food thoroughly, wash raw vegetables with safe water.\n- Typhoid vaccines: injectable (Vi polysaccharide) or oral (Ty21a) for travellers or high‑risk areas.\n\nTreatment\n\n- Antibiotics: ciprofloxacin or azithromycin (depending on resistance patterns). Severe cases may require injectable ceftriaxone.\n- Hydration (oral rehydration or IV if dehydrated).\n- Identify and treat chronic carriers (they shed bacteria in stool for >1 year).\n\nMalawi Example: Drinking untreated borehole or river water can cause typhoid outbreaks. Health messages emphasise boiling water and using chlorine.",
    "summary": "Typhoid (Salmonella typhi) via contaminated water/food. Symptoms: prolonged fever, abdominal pain. Prevent: safe water, sanitation, handwashing, vaccine. Treat with antibiotics.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Chlorination of Boreholes",
        "description": "Adding chlorine tablets to water kills bacteria."
      },
      {
        "title": "Typhoid Vaccine",
        "description": "Available for high‑risk groups."
      }
    ],
    "practiceQuestions": [
      {
        "question": "How is typhoid transmitted?",
        "answer": "Faecal‑oral via contaminated water or food.",
        "hint": "Poor sanitation."
      },
      {
        "question": "What is a common complication of typhoid?",
        "answer": "Intestinal perforation or bleeding",
        "hint": "Can be fatal."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Evolution",
    "lessonNumber": 1,
    "lessonTitle": "Natural Selection and Speciation",
    "lessonId": "biology-f4-evolution-1",
    "order": 109,
    "learningObjectives": [
      "Explain natural selection and give examples (peppered moth, antibiotic resistance)",
      "Describe how speciation occurs (geographic isolation, reproductive isolation)"
    ],
    "introduction": "How do species change over time? How do new species arise? The theory of evolution by natural selection explains these patterns. Today we learn about natural selection and speciation.",
    "keyPoints": [
      "Natural selection: individuals with advantageous traits survive and reproduce more; over generations, these traits become more common.",
      "Examples: peppered moth in industrial England (dark moths survived better on polluted trees); antibiotic resistance in bacteria.",
      "Speciation: formation of new species. Requires isolation and genetic divergence.",
      "Geographic isolation: physical barrier (river, mountain) separates populations → different selection pressures → over time they become different species.",
      "Reproductive isolation: when separated populations can no longer interbreed, they are separate species."
    ],
    "detailedContent": "Natural Selection\n\nCharles Darwin proposed natural selection as a mechanism of evolution. It requires:\n- Variation: individuals in a population differ.\n- Inheritance: traits are passed to offspring.\n- Differential survival and reproduction: individuals with traits better suited to the environment are more likely to survive and reproduce.\n- Over generations, beneficial traits become more common.\n\nExamples\n\n1. Peppered moth (Biston betularia): Before industrial revolution, most moths were light, camouflaged on lichen‑covered trees. After soot blackened trees, dark moths survived better because they were less visible to birds. The dark form became more common. Later, pollution controls caused light form to increase again.\n\n2. Antibiotic resistance: When bacteria are exposed to an antibiotic, most die, but some naturally resistant individuals survive. They multiply, and the population becomes resistant. This is evolution in action.\n\nSpeciation\n\nSpeciation is the formation of new species.\n\nGeographic isolation: A population is split by a physical barrier (mountain, river, ocean). The two groups can no longer interbreed. They experience different environments and selection pressures. Over many generations, they evolve different traits. Even if the barrier is removed later, they may no longer be able to mate (reproductive isolation). Thus, they become separate species.\n\nExample: Finches on the Galápagos Islands evolved different beak shapes because of isolation on different islands.\n\nReproductive isolation: Mechanisms include:\n- Pre‑zygotic: habitat isolation, behaviour differences, mechanical incompatibility.\n- Post‑zygotic: hybrid inviability or sterility (e.g., mules from horse and donkey).\n\nMalawi Example: Cichlid fish in Lake Malawi are a famous example of rapid speciation. Geographic isolation (rocky vs sandy habitats) and sexual selection led to hundreds of species.",
    "summary": "Natural selection: advantageous traits increase over generations. Examples: peppered moth, antibiotic resistance. Speciation: populations isolated → diverge → become separate species.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Lake Malawi Cichlids",
        "description": "Many species evolved from a common ancestor due to isolation."
      },
      {
        "title": "Malaria Drug Resistance",
        "description": "Plasmodium has evolved resistance to chloroquine."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is required for natural selection to occur?",
        "answer": "Variation, inheritance, differential survival and reproduction.",
        "hint": "Three conditions."
      },
      {
        "question": "How does geographic isolation lead to speciation?",
        "answer": "Separated populations evolve independently and may become unable to interbreed.",
        "hint": "Barrier prevents gene flow."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 4",
    "topic": "Biotechnology",
    "lessonNumber": 1,
    "lessonTitle": "Genetic Engineering and Insulin Production",
    "lessonId": "biology-f4-biotech-1",
    "order": 110,
    "learningObjectives": [
      "Describe the process of genetic engineering (recombinant DNA)",
      "Explain how insulin is produced using genetically engineered bacteria"
    ],
    "introduction": "Genetic engineering allows scientists to transfer genes from one organism to another. This technology produces human insulin, vaccines, and pest‑resistant crops. Today we learn how it works.",
    "keyPoints": [
      "Genetic engineering: cutting DNA from one organism and inserting it into another using restriction enzymes and DNA ligase.",
      "Vector: often a plasmid (small circular DNA in bacteria).",
      "Recombinant DNA: combines DNA from different sources.",
      "Transformation: inserting recombinant DNA into host cells (e.g., E. coli).",
      "Insulin production: human insulin gene inserted into plasmid → E. coli produces human insulin.",
      "Benefits: large scale, avoids animal insulin (allergic reactions).",
      "Ethical concerns: safety, labelling, effect on biodiversity."
    ],
    "detailedContent": "What is Genetic Engineering?.'\n\nGenetic engineering is the direct manipulation of an organism’s genes using biotechnology. It allows transfer of genes between unrelated species.\n\nKey Steps (simplified)\n\n1. Identify and isolate the desired gene (e.g., human insulin gene).\n2. Use restriction enzymes to cut the gene and cut a plasmid (vector) at same sites.\n3. DNA ligase joins the gene into the plasmid → recombinant DNA.\n4. Insert recombinant plasmid into host cells (e.g., Escherichia coli bacteria) – transformation.\n5. Grow the bacteria in large fermenters; they produce the human protein (insulin).\n6. Extract and purify the product.\n\nHuman Insulin Production\n\nBefore genetic engineering, insulin for diabetics came from pig or cow pancreas (slight differences, could cause allergies). Now, human insulin is produced by E. coli or yeast.\n\n- Gene expressed: bacterial cells read the human gene and synthesise human insulin protein.\n- Advantage: unlimited supply, exactly the same as human insulin, no animal suffering.\n\nOther Applications\n\n- Agriculture: Bt crops (insect‑resistant cotton, maize); herbicide‑resistant soybean.\n- Medicine: vaccines (hepatitis B), growth hormone, blood clotting factors.\n- Industry: enzymes for production.\n\nEthical and Safety Issues\n\n- Safety: risk of unintended effects, gene transfer to wild relatives.\n- Labelling: should genetically modified foods be labelled?\n- Moral concerns: moving genes across species – some feel unnatural.\n- Environmental: possible impact on biodiversity.\n\nMalawi: No commercial GM crops grown, but research on genetically modified cassava for virus resistance has been conducted.",
    "summary": "Genetic engineering transfers genes between organisms. Insulin produced by bacteria with human insulin gene. Benefits: medicine, agriculture. Concerns: safety, ethics.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Human Insulin in Malawi",
        "description": "Used in diabetes treatment – imported, but understanding helps."
      },
      {
        "title": "Bt Cotton Research",
        "description": "Trials in Africa but not yet in Malawi."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is a plasmid?",
        "answer": "A small circular DNA molecule in bacteria used as a vector.",
        "hint": "Carries foreign DNA."
      },
      {
        "question": "Why is human insulin better than pig insulin?",
        "answer": "Identical to human, reduces allergic reactions.",
        "hint": "Species difference."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Isomerism",
    "lessonNumber": 1,
    "lessonTitle": "Structural Isomers in Organic Compounds",
    "lessonId": "chemistry-f4-isomerism-1",
    "order": 111,
    "learningObjectives": [
      "Define isomers and draw structural isomers for alkanes (C4H10, C5H12)",
      "Describe the effect of branching on physical properties (boiling point)"
    ],
    "introduction": "Isomers are compounds with the same molecular formula but different structures. This leads to different properties. Today we learn about structural isomerism in alkanes, alkenes, and alkanols.",
    "keyPoints": [
      "Isomers: same molecular formula, different arrangement of atoms.",
      "Structural isomerism: different connectivity (chain, position, functional group).",
      "Chain isomerism: different branching of carbon chain (e.g., butane vs methylpropane).",
      "Position isomerism: functional group at different positions (e.g., 1‑propanol vs 2‑propanol).",
      "Functional group isomerism: different functional groups (e.g., propanal vs propanone).",
      "Boiling point: increased branching lowers boiling point (reduces surface area for intermolecular forces)."
    ],
    "detailedContent": "What are Isomers?\n\nIsomers are compounds that have the same molecular formula but different structural formulas (or different arrangements in space).\n\nStructural isomerism (constitutional isomerism) – different connectivity.\n\n1. Chain (skeletal) isomerism:\n   - Same functional group but different branching of the carbon chain.\n   - Example: Butane (C4H10) has two isomers:\n        * n‑butane: CH3CH2CH2CH3 (straight chain)\n        * methylpropane (isobutane): (CH3)3CH (branched)\n\n   - Pentane (C5H12) has three isomers: n‑pentane, 2‑methylbutane, 2,2‑dimethylpropane.\n\n2. Position isomerism:\n   - Same carbon skeleton but functional group at a difference position.\n   - Example: Propanol (C3H8O) has two isomers:\n        * propan‑1‑ol: CH3CH2CH2OH (OH at end)\n        * propan‑2‑ol: CH3CH(OH)CH3 (OH in middle)\n\n3. Functional group isomerism:\n   - Same molecular formula but different functional groups.\n   - Example: C3H6O – propanal (aldehyde) and propanone (ketone).\n\nEffect of Branching on Boiling Point\n\n- Straight‑chain alkanes have higher boiling points than their branched isomers.\n- Reason: branched molecules have smaller surface area, reducing London forces (van der Waals) between molecules.\n- Example: n‑butane b.p. –0.5°C; methylpropane b.p. –12°C.\n\nNaming isomers: use IUPAC rules (longest chain as parent, substituents numbered).\n\nMalawi Example: Petrol (gasoline) contains a mix of isomers. Highly branched alkanes (isooctane) have higher octane rating, reduce engine knocking.",
    "summary": "Isomers same formula different structure. Chain, position, functional group isomerism. More branching lowers boiling point.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Isooctane in Petrol",
        "description": "Highly branched, reduces engine knock."
      },
      {
        "title": "Propanol Isomers",
        "description": "One used as solvent, other as rubbing alcohol."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Draw the two structural isomers of butane (C4H10).",
        "answer": "CH3CH2CH2CH3 and (CH3)3CH",
        "hint": "One straight, one branched."
      },
      {
        "question": "Why does n‑pentane have a higher boiling point than 2,2‑dimethylpropane?",
        "answer": "n‑pentane has larger surface area for London forces.",
        "hint": "Branching reduces intermolecular attraction."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Polymerisation",
    "lessonNumber": 1,
    "lessonTitle": "Addition and Condensation Polymers",
    "lessonId": "chemistry-f4-polymerisation-1",
    "order": 112,
    "learningObjectives": [
      "Distinguish between addition and condensation polymerisation",
      "Describe the uses and properties of common polymers (polyethene, nylon, polyester, polychloroethene/PVC)"
    ],
    "introduction": "Plastics, nylon, and polythene are polymers – long chains of repeating units. Today we learn the two types of polymerisation and how the structure affects properties.",
    "keyPoints": [
      "Monomers: small molecules that join to form polymers.",
      "Addition polymerisation: monomers (alkenes) join without loss of small molecule. Example: ethene → polyethene (polythene).",
      "Condensation polymerisation: monomers join with loss of small molecule (water, methanol). Examples: nylon (amide), polyesters (ester).",
      "Thermoplastics (polyethene, nylon): soften on heating, can be remoulded.",
      "Thermosets (bakelite, epoxy): cross‑linked; do not soften, harden permanently.",
      "Plastics are widely used but cause environmental pollution (non‑biodegradable)."
    ],
    "detailedContent": "Addition Polymerisation\n\nIn addition polymerisation, unsaturated monomers (with C=C double bond) join together without loss of any atoms. The double bond opens and monomers add to each other.\n\nExample: polyethene (polythene) from ethene:\nn CH2=CH2 → –[CH2–CH2]n–\n\nConditions: high pressure (or catalyst) and temperature.\n\nOther addition polymers:\n- Polypropene (propene) – used in ropes, crates.\n- Polychloroethene (PVC – from chloroethene) – pipes, insulation, window frames.\n- Polytetrafluoroethene (PTFE – Teflon) – non‑stick coatings.\n\nCondensation Polymerisation\n\nMonomers join together with the elimination of a small molecule (usually water, sometimes methanol). Two different monomers are often used.\n\nExample – Nylon (polyamide):\n- Monomers: diamine (H2N–R–NH2) and dicarboxylic acid (HOOC–R’–COOH).\n- Reaction forms amide links (–CO–NH–) and eliminates water.\n- Nylon is strong, elastic, used in ropes, fabrics, toothbrush bristles.\n\nExample – Polyester (e.g., Terylene):\n- Monomers: diol (HO–R–OH) and dicarboxylic acid (HOOC–R’–COOH).\n- Forms ester links (–CO–O–) and eliminates water.\n- Used in clothing (polyester fabrics), plastic bottles.\n\nThermoplastics vs Thermosets\n\n- Thermoplastics (polyethene, nylon, PVC, polypropene): can be melted and reshaped repeatedly. Chains are separate, held by weak intermolecular forces.\n- Thermosets (bakelite, melamine, epoxy resin): once set, cannot be remelted. They have cross‑links between chains, forming a rigid network.\n\nEnvironmental issues: Most plastics are not biodegradable; they accumulate in landfills and oceans. Reduce, reuse, recycle. Biodegradable plastics (e.g., PLA from corn starch) are being developed.\n\nMalawi Example: Thin plastic bags were banned in Malawi to reduce pollution. Recycling of plastic waste is encouraged.",
    "summary": "Addition polymers (alkenes) without by‑product. Condensation polymers with loss of water. Thermoplastics melt; thermosets do not. Plastic pollution is a major problem.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Plastic Bag Ban",
        "description": "Malawi banned thin plastics to reduce waste."
      },
      {
        "title": "PVC Pipes",
        "description": "Used for water supply and sewerage."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the monomer of polyethene?",
        "answer": "Ethene (CH2=CH2)",
        "hint": "Alkene."
      },
      {
        "question": "Why are thermosets not recyclable by remelting?",
        "answer": "They have cross‑links that break down on heating, not reversible.",
        "hint": "Covalent network."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Acids and Bases",
    "lessonNumber": 1,
    "lessonTitle": "Bronsted‑Lowry Theory and Conjugate Pairs",
    "lessonId": "chemistry-f4-bronsted-lowry-1",
    "order": 113,
    "learningObjectives": [
      "Define acids and bases according to Bronsted‑Lowry (proton donor/ acceptor)",
      "Identify conjugate acid‑base pairs in reactions"
    ],
    "introduction": "The Bronsted‑Lowry theory extends the definition of acids and bases beyond aqueous solutions. An acid is a proton (H+) donor; a base is a proton acceptor. Today we learn this powerful concept and conjugate pairs.",
    "keyPoints": [
      "Bronsted‑Lowry acid: donates a proton (H+).",
      "Bronsted‑Lowry base: accepts a proton.",
      "Conjugate pair: acid and base that differ by one proton (HA / A‑).",
      "In the reverse reaction, the product acid/base is the conjugate of the reactant.",
      "Example: HCl + H2O ⇌ H3O+ + Cl‑ – HCl (acid) and Cl‑ (conjugate base); H2O (base) and H3O+ (conjugate acid)."
    ],
    "detailedContent": "Bronsted‑Lowry Theory\n\nArrhenius defined acids as producing H+ in water, bases producing OH‑. Bronsted‑Lowry broadened: an acid is any species that donates a proton (H+); a base is any species that accepts a proton.\n\nProton (hydrogen ion): a bare H+ nucleus.\n\nExample: In water, HCl donates a proton to H2O.\nHCl + H2O → H3O+ + Cl‑\n- HCl is the acid (proton donor)\n- H2O is the base (proton acceptor)\n\nConjugate Pairs\n\nWhen an acid donates a proton, the remaining species is its conjugate base. When a base accepts a proton, the new species is its conjugate acid.\n\nFor HCl + H2O → H3O+ + Cl‑:\n- Conjugate acid‑base pairs: (HCl, Cl‑) and (H2O, H3O+).\n\nAmphoteric species: can act as either acid or base (e.g., water, HCO3‑).\n\nOther examples:\n\n- NH3 (base) + H2O (acid) → NH4+ (conjugate acid) + OH‑ (conjugate base)\n- HCO3‑ + H+ → H2CO3 (HCO3‑ acts as base); HCO3‑ → CO32‑ + H+ (acts as acid).\n\nRelative strength: strong acids have weak conjugate bases; weak acids have strong conjugate bases.\n\nEquilibrium: In a reversible reaction, the equilibrium favours the side with the weaker acid and weaker base.\n\nMalawi Example: In soil chemistry, limestone (CaCO3) neutralises acidity: CaCO3 + 2H+ → Ca2+ + CO2 + H2O. H+ is the acid (proton donor).",
    "summary": "Bronsted‑Lowry acid = proton donor, base = proton acceptor. Conjugate pair differs by one H+. Strong acids give weak conjugate bases.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Bicarbonate in Digestion",
        "description": "HCO3‑ neutralises stomach acid (proton acceptor)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "In the reaction NH3 + H2O ⇌ NH4+ + OH‑, what is the conjugate base of NH4+?",
        "answer": "NH3",
        "hint": "NH4+ minus H+ = NH3."
      },
      {
        "question": "Is water an acid or a base?",
        "answer": "Both – it is amphoteric.",
        "hint": "Can donate or accept H+."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Acids and Bases",
    "lessonNumber": 2,
    "lessonTitle": "Strength vs Concentration and pH Control",
    "lessonId": "chemistry-f4-strength-concentration-1",
    "order": 114,
    "learningObjectives": [
      "Distinguish between strength (degree of ionisation) and concentration",
      "Explain ways of controlling pH in different environments (soil, stomach, water)"
    ],
    "introduction": "A concentrated acid is not necessarily a strong acid – strength is about ionisation, concentration is about amount. Today we clear up this confusion and learn how pH is controlled in real life.",
    "keyPoints": [
      "Strength: measure of how completely an acid or base dissociates in water. Strong (HCl, H2SO4) fully dissociate; weak (ethanoic acid) partially.",
      "Concentration: amount of acid or base per volume (molarity). Can be high or low regardless of strength.",
      "pH is affected by both strength and concentration. A very dilute strong acid may have pH near 7.",
      "pH control: buffering solutions resist pH change.",
      "Examples: soil (lime raises pH), stomach (antacids neutralise), swimming pools (adjust with acids/bases), water treatment."
    ],
    "detailedContent": "Strength vs Concentration – Key Difference\n\n- Strength: equilibrium position of dissociation. Strong acids (HCl, HNO3, H2SO4) dissociate completely in water. Weak acids (ethanoic, citric) dissociate only partially. Strength is an intrinsic property of the acid.\n- Concentration: the number of moles of acid per litre of solution. Can be concentrated (high molarity) or dilute (low molarity) – does not change the strength.\n\nExample:\n- 0.1 M HCl (strong, fully dissociated) has pH = 1.\n- 0.1 M CH3COOH (weak, partially dissociated) has pH ≈ 2.9.\n- But 1 M CH3COOH (concentrated weak acid) has lower pH than 0.001 M HCl (dilute strong acid). So concentration also affects pH.\n\nConcentration vs Strength Table\n\n| | Strong Acid (e.g., HCl) | Weak Acid (e.g., CH3COOH) |\n|---|---|---|\n| Low concentration (0.001 M) | pH ≈ 3 | pH ≈ 4‑5 |\n| High concentration (1 M) | pH ≈ 0 | pH ≈ 2.4 |\n\npH Control in Different Environments\n\n1. Soil pH:\n   - Plants need optimal pH (6‑7). Acidic soils: add lime (calcium carbonate/hydroxide). Alkaline soils: add sulphur or organic matter.\n\n2. Stomach pH:\n   - Stomach acid is ~pH 1.5 (HCl). Indigestion (excess acid) treated with antacids (Mg(OH)2, CaCO3, Al(OH)3) that neutralise H+.\n\n3. Swimming pools:\n   - Chlorine works best at pH 7.2‑7.6. Use sodium carbonate (raise pH) or sodium bisulphate (lower pH).\n\n4. Water treatment:\n   - Addition of lime (Ca(OH)2) to raise pH of acidic water; addition of CO2 or H2SO4 to lower pH of alkaline water.\n\nBuffers: solutions that resist pH change – usually a weak acid and its conjugate base (e.g., CH3COOH/CH3COONa). Important in blood (bicarbonate buffer).\n\nMalawi Example: Fish farming requires pH 6.5‑9 for tilapia. Farmers test water and add lime if too acidic.",
    "summary": "Strength = degree of ionisation; concentration = amount. A dilute strong acid can have near‑neutral pH. Buffers control pH in soil, stomach, pools, water.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Lime for Acidic Soil",
        "description": "Farmers add agricultural lime to raise pH."
      },
      {
        "title": "Antacids",
        "description": "Magnesium hydroxide tablets neutralise stomach acid."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is 0.01 M HCl (strong acid) more acidic than 0.1 M CH3COOH (weak acid)?",
        "answer": "HCl fully dissociates, producing more H+ than the weak acid despite lower concentration.",
        "hint": "Degree of ionisation."
      },
      {
        "question": "How do you raise the pH of acidic soil?",
        "answer": "Add lime (calcium carbonate/hydroxide).",
        "hint": "Neutralisation."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Water",
    "lessonNumber": 1,
    "lessonTitle": "Hardness of Water and Softening Methods",
    "lessonId": "chemistry-f4-water-hardness-1",
    "order": 115,
    "learningObjectives": [
      "Define hard and soft water, and distinguish between temporary and permanent hardness",
      "Describe methods to remove hardness (boiling, adding washing soda, ion exchange)"
    ],
    "introduction": "In some areas, water does not lather well with soap – that is HARD WATER. It contains dissolved minerals, mostly calcium and magnesium. Today we learn what causes hardness and how to remove it.",
    "keyPoints": [
      "Hard water: does not lather with soap, forms scum (insoluble calcium or magnesium salts). Contains Ca2+ and Mg2+ ions.",
      "Temporary hardness: caused by calcium hydrogencarbonate (Ca(HCO3)2). Removed by boiling: Ca(HCO3)2 → CaCO3(s) + CO2 + H2O (scale forms).",
      "Permanent hardness: caused by calcium sulphate (CaSO4) or magnesium sulphate (MgSO4). Not removed by boiling.",
      "Removing permanent hardness: adding washing soda (Na2CO3) precipitates Ca2+ as CaCO3; ion exchange (resin swaps Ca2+ for Na+).",
      "Advantages of hard water: provides calcium for bones, tastes better. Disadvantages: wastes soap, forms scale in pipes and kettles."
    ],
    "detailedContent": "What is Hard Water?\n\nHard water contains dissolved calcium and magnesium ions (Ca2+, Mg2+). It does not readily form lather with soap; instead it forms a grey scum (calcium stearate).\n\nTemporary Hardness\n\nCaused by calcium hydrogencarbonate, Ca(HCO3)2. It forms when rainwater (slightly acidic due to CO2) passes over limestone (CaCO3): CaCO3 + CO2 + H2O → Ca(HCO3)2.\n\nOn boiling, the reaction reverses: Ca(HCO3)2 → CaCO3(s) + CO2 + H2O. The CaCO3 precipitates as scale (limescale). The water becomes soft because Ca2+ removed.\n\nPermanent Hardness\n\nCaused by calcium sulphate (CaSO4) and magnesium sulphate (MgSO4). Boiling does not remove them.\n\nRemoving Hardness\n\n1. Boiling: only removes temporary hardness (scale formed).\n2. Adding washing soda (sodium carbonate, Na2CO3): precipitates Ca2+ as CaCO3 and Mg2+ as MgCO3. Ca2+(aq) + CO32‑(aq) → CaCO3(s).\n3. Ion exchange: water passes through a column containing resin charged with Na+ ions. Ca2+ and Mg2+ replace Na+ on resin. Water becomes soft (Na+ does not cause hardness). Resin regenerated with brine (NaCl).\n4. Distillation: removes all ions, gives pure water (expensive).\n\nAdvantages and Disadvantages\n\n| Advantages | Disadvantages |\n|------------|---------------|\n| Provides calcium (needed for bones) | Wastes soap (more soap needed) |\n| Tastes better (mineral water) | Leaves scale in kettles, pipes (reduces efficiency) |\n| May reduce heart disease risk | Scale in hot water tanks |\n\nMalawi Example: In Lilongwe, water from boreholes often has moderate hardness. Kettles develop white scale. Boiling removes temporary hardness but not permanent. Some use washing soda to soften laundry water.",
    "summary": "Hard water contains Ca2+/Mg2+, does not lather. Temporary hardness (hydrogencarbonate) removed by boiling. Permanent hardness (sulphate) removed by washing soda or ion exchange.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Kettle Scale in Lilongwe",
        "description": "White deposits inside kettles due to temporary hardness."
      },
      {
        "title": "Laundry with Hard Water",
        "description": "More soap needed; addition of soda ash helps."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What causes temporary hardness?",
        "answer": "Calcium hydrogencarbonate (Ca(HCO3)2)",
        "hint": "Forms when rainwater passes over limestone."
      },
      {
        "question": "How does washing soda remove permanent hardness?",
        "answer": "Carbonate ions (CO32‑) precipitate Ca2+ and Mg2+ as insoluble carbonates.",
        "hint": "Na2CO3 + CaSO4 → CaCO3(s) + Na2SO4"
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Water",
    "lessonNumber": 2,
    "lessonTitle": "Water Treatment and Purification",
    "lessonId": "chemistry-f4-water-treatment-1",
    "order": 116,
    "learningObjectives": [
      "Describe the stages of water treatment for domestic supply (sedimentation, filtration, chlorination)",
      "Explain the importance of water purification"
    ],
    "introduction": "Water from rivers and lakes contains dirt, bacteria, and other impurities. Water treatment plants make it safe to drink. Today we learn the steps that produce clean tap water.",
    "keyPoints": [
      "Screening: remove large debris (sticks, leaves).",
      "Sedimentation: particles settle in tanks (sometimes with coagulant alum).",
      "Filtration: water passes through sand and gravel filters to remove remaining particles.",
      "Chlorination: chlorine gas or sodium hypochlorite kills bacteria and viruses. Chlorine residual protects water in pipes.",
      "Fluoridation (optional): added to prevent tooth decay.",
      "pH adjustment: lime added to neutralise acidity."
    ],
    "detailedContent": "Water Treatment Process\n\nMunicipal water treatment plants (e.g., Lilongwe Water Board, Blantyre Water Board) follow these stages:\n\n1. Screening: Water passes through screens to remove large objects (fish, sticks, leaves).\n\n2. Coagulation and Flocculation: Alum (aluminium sulphate) is added. It causes fine particles to clump together (floc). This helps them settle.\n\n3. Sedimentation: Water flows slowly through large settling tanks. Floc and heavier particles settle to the bottom as sludge.\n\n4. Filtration: Water passes through layers of sand, gravel, and sometimes activated charcoal. This removes remaining tiny particles and some microorganisms.\n\n5. Disinfection (Chlorination): Chlorine (gas or sodium hypochlorite) is added. It kills bacteria, viruses, and other pathogens. A small amount of chlorine remains (residual) to protect water as it travels through pipes.\n\n6. Fluoridation (optional): Adding fluoride to reduce tooth decay. Not all plants do it.\n\n7. pH adjustment: Lime (calcium hydroxide) may be added to make water neutral.\n\nStorage and Distribution: Clean water is stored in reservoirs and pumped through pipes to homes and businesses.\n\nAlternative purification methods for households:\n- Boiling (kills pathogens but does not remove chemicals).\n- Chlorine tablets (affordable, but taste).\n- Household filters (ceramic, sand, charcoal).\n- Solar disinfection (SODIS): clear plastic bottles exposed to sunlight for 6 hours.\n\nMalawi example: Lilongwe Water Board treats water from Lilongwe River at Mvera treatment plant. In rural areas, families often boil water or use chlorine tablets for safety.",
    "summary": "Water treatment steps: screening, coagulation, sedimentation, filtration, chlorination, pH adjustment. Chlorine kills germs. Household methods: boiling, chlorination, SODIS.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Mvera Treatment Plant",
        "description": "Treats water for Lilongwe residents."
      },
      {
        "title": "Water Guard",
        "description": "Brand of chlorine solution for household treatment."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is chlorine added to drinking water?",
        "answer": "To kill bacteria and viruses, providing disinfection.",
        "hint": "Prevents water‑borne diseases."
      },
      {
        "question": "What is the purpose of sedimentation in water treatment?",
        "answer": "Allows large particles and floc to settle, removing suspended solids.",
        "hint": "Gravity."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Environmental Chemistry",
    "lessonNumber": 1,
    "lessonTitle": "Greenhouse Gases and Ozone Layer",
    "lessonId": "chemistry-f4-ozone-greenhouse-1",
    "order": 117,
    "learningObjectives": [
      "Explain the greenhouse effect and list major greenhouse gases (CO2, CH4, N2O, CFCs)",
      "Describe ozone layer depletion, its causes, effects, and solutions"
    ],
    "introduction": "The Earth is warming because of greenhouse gases. At the same time, the ozone layer that protects us from UV rays is thinning. Today we learn these two important global environmental issues.",
    "keyPoints": [
      "Greenhouse effect: natural process where certain gases trap heat, keeping Earth warm. Enhanced effect (global warming) due to human emissions.",
      "Major greenhouse gases: CO2 (burning fossil fuels, deforestation), CH4 (livestock, rice, landfills), N2O (fertilisers), CFCs (refrigerants, aerosols).",
      "Ozone layer: in stratosphere, absorbs harmful UV‑B radiation.",
      "Ozone depletion: caused by chlorine from CFCs. Montreal Protocol (1987) phased out CFCs.",
      "Effects of ozone depletion: increased skin cancer, cataracts, harm to plants and marine life.",
      "Solutions: phase out CFCs (already successful), reduce greenhouse gas emissions, renewable energy."
    ],
    "detailedContent": "Greenhouse Effect\n\nThe Earth’s atmosphere contains greenhouse gases (GHGs) that trap heat. Without them, Earth would be about 33°C colder. Human activities have increased GHGs, causing global warming.\n\nMajor GHGs and sources:\n- Carbon dioxide (CO2): burning fossil fuels (coal, oil, natural gas), deforestation, cement production.\n- Methane (CH4): livestock (enteric fermentation), rice paddies, landfills, natural gas leaks.\n- Nitrous oxide (N2O): nitrogen fertilisers, industrial processes.\n- Fluorinated gases (CFCs, HFCs): refrigerants, aerosols (now regulated).\n\nConsequences: rising sea levels, extreme weather, droughts, floods, loss of biodiversity.\n\nOzone Layer Depletion\n\nOzone (O3) in the stratosphere (10‑50 km altitude) absorbs 97‑99% of harmful UV‑B radiation.\n\n- Cause: Chlorofluorocarbons (CFCs) release chlorine atoms when broken down by UV light. Chlorine catalytically destroys ozone. A single Cl atom can destroy thousands of ozone molecules.\n- Ozone hole: seasonal thinning over Antarctica (and smaller over Arctic).\n\nEffects:\n- Increases skin cancer (melanoma), cataracts.\n- Suppresses immune system.\n- Damages phytoplankton (base of marine food chain).\n- Reduces crop yields.\n\nSolutions\n\nMontreal Protocol (1987) – global agreement to phase out CFCs, halons, other ozone‑depleting substances. It has been successful: ozone layer is slowly recovering. Replacements: HFCs (not ozone‑depleting but strong GHGs) are now being phased down under Kigali Amendment.\n\nTo mitigate climate change:\n- Reduce fossil fuel use → renewable energy (solar, wind, hydro).\n- Energy efficiency.\n- Reforestation (trees absorb CO2).\n- Reduce methane from livestock and landfills.\n\nMalawi Example: Malawi phased out CFCs in refrigerators and aerosol cans. Solar energy is promoted to reduce fossil fuel use.",
    "summary": "Greenhouse gases (CO2, CH4, N2O) cause global warming. Ozone layer depleted by CFCs. Montreal Protocol successful. UV radiation harmful.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "CFC Ban",
        "description": "Malawi no longer imports CFC refrigerators."
      },
      {
        "title": "Solar Energy",
        "description": "Reduces CO2 emissions and deforestation."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the main source of methane from agriculture?",
        "answer": "Livestock (enteric fermentation) and rice paddies",
        "hint": "Cows burp methane."
      },
      {
        "question": "How do CFCs destroy ozone?",
        "answer": "Chlorine atoms released catalytically break down O3 molecules.",
        "hint": "Ozone to oxygen."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Waste Management",
    "lessonNumber": 1,
    "lessonTitle": "Types, Treatment, and Minimisation of Waste",
    "lessonId": "chemistry-f4-waste-management-1",
    "order": 118,
    "learningObjectives": [
      "Classify wastes (domestic, industrial, agricultural, medical) and their sources",
      "Describe methods of waste treatment and disposal (landfill, incineration, recycling, composting)"
    ],
    "introduction": "Waste pollution is a growing problem. Proper waste management protects health and the environment. Today we learn about different wastes and how to treat, reuse, and recycle them.",
    "keyPoints": [
      "Waste types: domestic (household), industrial (factories), agricultural (crop residues, manure), medical (hospitals), electronic (e‑waste).",
      "Treatment and disposal: landfill (sanitary), incineration (burning), composting (organic), recycling (paper, plastic, metal, glass), anaerobic digestion (biogas).",
      "Waste minimisation: reduce (use less), reuse (use again), recycle (convert to new product).",
      "Landfills: lined pits with leachate collection, methane capture. Open dumps are illegal in many areas.",
      "Recycling saves energy, reduces resource depletion, cuts pollution."
    ],
    "detailedContent": "Classification of Wastes\n\n1. Domestic (municipal) waste: food scraps, paper, plastics, glass, metals, textiles. Large volume, mix of biodegradable and non‑biodegradable.\n2. Industrial waste: chemical sludge, metals, solvents, ash. Often hazardous.\n3. Agricultural waste: crop residues, manure, pesticides containers, plastic mulch.\n4. Medical waste: syringes, bandages, expired medicines, sharps (infectious and hazardous).\n5. E‑waste: discarded electronics (computers, phones, batteries) – contain toxic heavy metals (lead, mercury, cadmium).\n\nMethods of Waste Treatment and Disposal\n\n- Sanitary landfill: waste layered and compacted, covered daily with soil. Leachate collected and treated. Methane gas captured for energy. Drawback: takes land, potential groundwater contamination if liner fails.\n- Incineration: burning at high temperatures. Reduces volume by 90% but produces air pollution (dioxins, heavy metals). Modern incinerators have scrubbing filters.\n- Composting: organic waste (food, yard waste) decomposed by microbes to produce humus. Reduces methane emissions, produces fertiliser.\n- Recycling: reprocessing materials into new products. Examples: paper, glass, metals (aluminium, steel), plastics (PET, HDPE). Saves energy and reduces mining.\n- Anaerobic digestion: organic waste in absence of oxygen produces biogas (methane) for energy, and digestate as fertiliser.\n- Open dumping (not acceptable): causes pollution, disease vectors, groundwater contamination.\n\nWaste Minimisation – 3 R’s\n\n- Reduce: buy less, avoid packaging, choose reusable items.\n- Reuse: use cloth bags, refill bottles, repair items.\n- Recycle: separate waste, support recycling programs.\n\nMalawi example: Plastic bags of less than 60 microns were banned. Communities are encouraged to sort waste, compost organics, and recycle plastics and glass.",
    "summary": "Waste types: domestic, industrial, agricultural, medical. Treatment: landfill, incineration, composting, recycling. Minimise: reduce, reuse, recycle.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Plastic Bag Ban",
        "description": "Malawi banned thin plastics to reduce waste."
      },
      {
        "title": "Community Composting",
        "description": "Groups turn organic waste into manure for gardens."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between a sanitary landfill and open dumping?",
        "answer": "Landfill has liner, leachate collection, methane capture; open dump has none.",
        "hint": "Health and environment."
      },
      {
        "question": "Why is recycling important?",
        "answer": "Saves energy, reduces resource depletion, cuts pollution.",
        "hint": "Conserves materials."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Moments of Forces",
    "lessonNumber": 1,
    "lessonTitle": "Principle of Moments and Centre of Mass",
    "lessonId": "physics-f4-moments-1",
    "order": 119,
    "learningObjectives": [
      "State the principle of moments for a body in equilibrium",
      "Solve problems using the principle of moments and determine centre of mass of a lamina"
    ],
    "introduction": "Why does a heavy person need to sit closer to the centre of a see‑saw? Why is a spanner easier to use with a longer handle? The answer is MOMENT – the turning effect of a force. Today we learn the principle of moments and centre of mass.",
    "keyPoints": [
      "Moment (torque) = Force × perpendicular distance from pivot (Nm).",
      "Principle of moments: for a body in equilibrium, sum of clockwise moments = sum of anticlockwise moments.",
      "Centre of mass: the point where the entire weight of an object can be considered to act.",
      "For a uniform rod, centre of mass is at the midpoint.",
      "For a lamina (flat shape), suspend from different points; intersection of vertical lines gives centre of mass."
    ],
    "detailedContent": "Moment of a Force\n\nThe moment (or torque) of a force is a measure of its turning effect.\n\nMoment = Force × perpendicular distance from the pivot (or fulcrum)\n\nUnit: Newton‑metre (Nm).\n\nExample: A spanner 0.3 m long applies a force of 100 N at the end (perpendicular). Moment = 100 × 0.3 = 30 Nm. A longer spanner (0.5 m) with same force gives 50 Nm – easier.\n\nPrinciple of Moments\n\nWhen a body is in equilibrium (balanced and not rotating), the total clockwise moment equals the total anticlockwise moment.\n\nExample: On a seesaw, a 40 kg child sits 2 m from the pivot. A 50 kg child sits on the other side. How far from pivot must the 50 kg child sit to balance?\nWeight of 40 kg = 40×10 = 400 N (assuming g≈10 N/kg). Clockwise moment = 400 × 2 = 800 Nm.\nAnticlockwise moment = (50×10) × d = 500 × d.\nEquilibrium: 500d = 800 → d = 1.6 m.\n\nCentre of Mass\n\nFor a uniform metre rule, the centre of mass is at 50 cm mark (the middle). For an irregular shape, you can find centre of mass by suspending from two different points and drawing vertical lines – intersection is the centre.\n\nThe centre of mass may not be within the object (e.g., for a ring, centre at empty centre).\n\nApplications: loading a wheelbarrow (load near wheel reduces effort), balancing, stability.\n\nMalawi Example: When loading a cart with maize bags, placing heavier bags closer to the wheel axle reduces the moment needed to lift the handles. A wheelbarrow: load placed near the wheel (short load arm) makes it easier to lift because effort arm (handles to wheel) is long.",
    "summary": "Moment = F × d. Principle of moments: clockwise = anticlockwise for equilibrium. Centre of mass is the balance point.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Wheelbarrow Loading",
        "description": "Heavier load near wheel reduces lifting effort."
      },
      {
        "title": "See‑Saw in Playground",
        "description": "Heavier child must sit closer to pivot to balance."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A force of 20 N is applied perpendicular to a spanner at a distance of 0.25 m from the bolt. Calculate the moment.",
        "answer": "5 Nm",
        "hint": "20 × 0.25 = 5"
      },
      {
        "question": "A 300 N weight is placed 0.5 m from a pivot. Where must a 200 N weight be placed to balance?",
        "answer": "0.75 m",
        "hint": "Clockwise = 300×0.5=150; anticlockwise: 200×d=150 → d=0.75"
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Uniform Circular Motion",
    "lessonNumber": 1,
    "lessonTitle": "Centripetal Force and Angular Velocity",
    "lessonId": "physics-f4-circular-motion-1",
    "order": 120,
    "learningObjectives": [
      "Define angular displacement and angular velocity",
      "Explain centripetal force and its role in circular motion"
    ],
    "introduction": "When an object moves in a circle, it constantly changes direction – so it accelerates. The force causing this acceleration is called centripetal force. Today we learn the principles of circular motion.",
    "keyPoints": [
      "Angular displacement (θ): angle turned (radians or degrees).",
      "Angular velocity (ω): rate of change of angular displacement (ω = θ/t). Unit: rad/s.",
      "Relationships: linear (tangential) speed v = ωr.",
      "Centripetal acceleration: a = v²/r = ω²r.",
      "Centripetal force: F = mv²/r = mω²r – directed toward centre.",
      "Centripetal force is not a new force; it is provided by tension, friction, gravity, or normal force."
    ],
    "detailedContent": "Circular motion terminology\n\n- Angular displacement (θ): the angle through which an object rotates. Measured in radians (2π rad = 360°).\n- Angular velocity (ω): ω = θ/t (rad/s). For constant speed, ω = 2πf, where f is frequency (revolutions per second).\n\nRelationship between linear and angular velocity: v = ω r, where r is radius.\n\nCentripetal Acceleration\n\nAn object in circular motion is constantly changing direction, therefore it has acceleration even if speed is constant. This acceleration is directed toward the centre.\n\nCentripetal acceleration: a = v²/r = ω²r.\n\nCentripetal Force\n\nThe net force that causes centripetal acceleration is called centripetal force. It is also directed toward the centre.\n\nF = m a = mv²/r = mω²r.\n\nExamples of centripetal force sources:\n- A car turning on a flat road: friction between tyres and road.\n- Moon orbiting Earth: gravity.\n- A stone whirled on a string: tension in the string.\n- A satellite: gravity.\n\nIf centripetal force disappears, the object moves off in a straight line (tangent).\n\nCentrifugal force: a fictitious outward force perceived in a rotating frame (not real in inertial frame).\n\nApplications: centrifuges, washing machine spin cycle, amusement park rides, planetary orbits.\n\nMalawi Example: When a minibus turns a corner, passengers lean outward. This is because their bodies want to continue straight (inertia), but the seat provides centripetal force.",
    "summary": "Angular velocity ω = θ/t; v = ωr. Centripetal acceleration a = v²/r, centripetal force F = mv²/r directed toward centre.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Minibus Corner",
        "description": "Friction provides centripetal force to turn."
      },
      {
        "title": "Washing Machine",
        "description": "Spin cycle uses centripetal force to remove water."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the centripetal force for a car turning on a road?",
        "answer": "Friction between tyres and road",
        "hint": "Without friction, car skids."
      },
      {
        "question": "A stone of mass 0.2 kg is whirled in a circle of radius 0.5 m at a speed of 4 m/s. Calculate centripetal force.",
        "answer": "6.4 N",
        "hint": "F = mv²/r = 0.2×16/0.5 = 3.2/0.5 = 6.4 N"
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Electromagnetic Waves",
    "lessonNumber": 1,
    "lessonTitle": "The Electromagnetic Spectrum",
    "lessonId": "physics-f4-ems-1",
    "order": 121,
    "learningObjectives": [
      "Describe the electromagnetic spectrum and the order of regions (radio to gamma)",
      "State the properties and applications of different EM waves"
    ],
    "introduction": "Radio waves, microwave, infrared, visible light, ultraviolet, X‑rays, gamma rays – all are electromagnetic waves. They travel at the speed of light and differ only in wavelength and frequency. Today we learn the spectrum and its uses.",
    "keyPoints": [
      "EM waves: transverse waves, travel at 3×10⁸ m/s in vacuum, do not need a medium.",
      "Order from longest wavelength (lowest frequency): radio, microwave, infrared, visible, ultraviolet, X‑ray, gamma.",
      "Properties: reflection, refraction, diffraction, interference, polarisation.",
      "Applications: radio/TV (communication), microwave (cooking, radar), infrared (remote controls, thermal imaging), visible (sight), UV (sterilisation, tanning), X‑ray (medical imaging), gamma (cancer treatment, sterilisation)."
    ],
    "detailedContent": "The Electromagnetic Spectrum\n\nAll electromagnetic waves travel at the speed of light (c = 3.0 × 10⁸ m/s) in a vacuum. c = fλ.\n\n| Region | Wavelength | Frequency | Applications |\n|--------|------------|-----------|---------------|\n| Radio | > 0.1 m | < 3×10⁹ Hz | Broadcasting, communication, radar |\n| Microwave | 1 mm – 0.1 m | 3×10⁹ – 3×10¹¹ Hz | Microwave ovens, satellite communication, radar |\n| Infrared (IR) | 700 nm – 1 mm | 3×10¹¹ – 4.3×10¹⁴ Hz | Remote controls, thermal imaging, night vision |\n| Visible | 400‑700 nm | 4.3×10¹⁴ – 7.5×10¹⁴ Hz | Sight, photography |\n| Ultraviolet (UV) | 10‑400 nm | 7.5×10¹⁴ – 3×10¹⁶ Hz | Sterilisation, fluorescent lamps, vitamin D production (but too much causes skin cancer) |\n| X‑rays | 0.01‑10 nm | 3×10¹⁶ – 3×10¹⁹ Hz | Medical imaging, airport security, crystallography |\n| Gamma rays | < 0.01 nm | > 3×10¹⁹ Hz | Radiotherapy, sterilisation, nuclear medicine |\n\nKey properties\n\n- All EM waves can travel through vacuum.\n- They are transverse waves.\n- They can be reflected, refracted, diffracted, and undergo interference.\n\nHarmful effects: UV (sunburn, skin cancer), X‑rays and gamma (ionising – DNA damage, cancer risk). Proper shielding and limited exposure essential.\n\nMalawi Example: Radio is widely used for communication and entertainment. X‑ray machines in hospitals (e.g., Queen Elizabeth Central Hospital) are used for diagnosing broken bones. Microwave ovens are common in urban households.",
    "summary": "EM spectrum: radio, microwave, IR, visible, UV, X‑ray, gamma. All travel at c = fλ. Each region has specific applications. Ionising radiation (X‑ray, gamma) can be harmful.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Radio in Malawi",
        "description": "AM and FM broadcasts use radio waves."
      },
      {
        "title": "X‑ray in Hospital",
        "description": "Used to diagnose fractures and chest infections."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which EM wave has the longest wavelength?",
        "answer": "Radio waves",
        "hint": "Lowest frequency."
      },
      {
        "question": "What is the energy relationship?",
        "answer": "Higher frequency, higher energy (E = hf).",
        "hint": "Planck’s equation."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Lenses",
    "lessonNumber": 1,
    "lessonTitle": "Converging and Diverging Lenses",
    "lessonId": "physics-f4-lenses-1",
    "order": 122,
    "learningObjectives": [
      "Identify converging (convex) and diverging (concave) lenses and their principal focus, focal length",
      "Draw ray diagrams to find image position, size, and nature for a converging lens"
    ],
    "introduction": "Lenses are used in glasses, cameras, projectors, and telescopes. They bend light to form images. Today we learn about converging and diverging lenses and how to draw ray diagrams.",
    "keyPoints": [
      "Converging (convex) lens: thicker in middle, converges light to a focal point. Forms real or virtual images.",
      "Diverging (concave) lens: thinner in middle, diverges light; always forms virtual, diminished, upright images.",
      "Principal focus (F): point where parallel rays converge (or appear to diverge). Focal length (f) = distance from lens to F.",
      "Ray diagram rules (converging lens):",
      "1. Ray parallel to axis refracts through principal focus.",
      " 2. Ray through optical centre passes straight.",
      "3. Ray through principal focus emerges parallel.",
      "Image characteristics: type (real/virtual), orientation (upright/inverted), size (magnified/diminished/same), position."
    ],
    "detailedContent": "Converging (Convex) Lens\n\nThicker at centre than edges. Converges parallel light to a point (principal focus, F). Focal length (f) positive.\n\nRay diagrams for converging lens:\n\n1. Draw principal axis, lens, focal points (F on both sides, 2F optionally).\n2. Draw object as upright arrow.\n\nRules:\n- A ray parallel to the axis passes through F on the other side.\n- A ray through the centre of the lens goes straight.\n- A ray through F on object side emerges parallel.\n\nImage formation depends on object distance (u):\n- u > 2f: real, inverted, diminished (camera)\n- u = 2f: real, inverted, same size\n- f < u < 2f: real, inverted, magnified (projector)\n- u = f: no image (parallel rays)\n- u < f: virtual, upright, magnified (magnifying glass)\n\nDiverging (Concave) Lens\n\nThinner at centre. Diverges parallel rays; focal point is virtual (on same side as object). Focal length negative.\n\nRay diagram: always forms virtual, upright, diminished image between lens and F (object side). Use same rules: ray parallel to axis appears to come from F; ray through centre goes straight.\n\nLens formula: 1/f = 1/u + 1/v (sign convention: for convex f positive, for concave f negative; u positive for real object; v positive for real image, negative for virtual).\n\nMagnification: m = v/u = image height / object height (positive for upright, negative for inverted).\n\nMalawi Example: Reading glasses for elders use convex lenses (correcting long sight). Peephole (door viewer) uses a concave lens.",
    "summary": "Convex lens converges light, forms real or virtual images. Concave lens diverges, always virtual upright diminished. Ray diagrams determine image. Lens formula 1/f = 1/u + 1/v.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Reading Glasses",
        "description": "Convex lenses correct long sight."
      },
      {
        "title": "Door Peephole",
        "description": "Concave lens gives wide view."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of lens is used in a magnifying glass?",
        "answer": "Convex (converging) lens",
        "hint": "Makes object appear larger."
      },
      {
        "question": "If an object is placed at 2F of a convex lens, where is the image?",
        "answer": "At 2F on the other side, real, inverted, same size.",
        "hint": "Symmetry."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Lenses",
    "lessonNumber": 2,
    "lessonTitle": "The Human Eye and Visual Defects",
    "lessonId": "physics-f4-eye-defects-1",
    "order": 123,
    "learningObjectives": [
      "Describe the structure of the human eye and how it focuses light",
      "Explain short sight (myopia), long sight (hyperopia), and their correction with lenses"
    ],
    "introduction": "The human eye is like a camera. It focuses light using a convex lens (the crystalline lens). However, some people cannot see clearly at distance or near. Today we learn about eye defects and how glasses correct them.",
    "keyPoints": [
      "Eye parts: cornea (refracts light), lens (adjustable focus), retina (light‑sensitive), ciliary muscles (change lens shape – accommodation).",
      "Short sight (myopia): eyeball too long or cornea too curved; image focuses in front of retina; distant objects blurry. Correct with concave (diverging) lens.",
      "Long sight (hyperopia): eyeball too short or lens too weak; image focuses behind retina; near objects blurry. Correct with convex (converging) lens.",
      "Presbyopia: age‑related loss of accommodation; needs bifocal or reading glasses.",
      "Astigmatism: irregular curvature of cornea/lens; corrected with cylindrical lens."
    ],
    "detailedContent": "The Eye as an Optical System\n\n- Cornea: provides most of the refraction (bending).\n- Lens: flexible, changes shape by ciliary muscles (accommodation) to focus on near or far objects.\n- Retina: contains photoreceptors (rods and cones). Image formed is real, inverted, diminished.\n- Optic nerve transmits signals to brain (brain flips image).\n\nAccommodation:\n- Distant object: ciliary muscles relax → lens less convex (thinner) → less refraction.\n- Near object: ciliary muscles contract → lens more convex (thicker) → more refraction.\n\nDefects of the Eye\n\n1. Myopia (short sight):\n   - Cause: eyeball too long, or cornea too curved.\n   - Image of distant object forms in front of retina.\n   - Symptom: can see near objects clearly, distant objects blurry.\n   - Correction: concave (diverging) lens. Diverges light before it enters eye, so effective focus falls on retina.\n\n2. Hyperopia (long sight):\n   - Cause: eyeball too short, or lens too weak (lost elasticity).\n   - Image of near object forms behind retina.\n   - Symptom: can see distant objects clearly, near objects blurry.\n   - Correction: convex (converging) lens. Adds convergence, bringing focus forward onto retina.\n\n3. Presbyopia: age‑related loss of accommodation (usually after 40). Corrected with bifocal or progressive lenses (upper part for distance, lower part for near).\n\n4. Astigmatism: irregular curvature of cornea or lens, causing distorted vision. Corrected with cylindrical lens.\n\nMalawi Example: Many school children have undiagnosed myopia, affecting their learning. Eye screening programmes provide glasses.",
    "summary": "Eye focuses using cornea and adjustable lens. Myopia (short sight) corrected with concave lens. Hyperopia (long sight) corrected with convex lens.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "School Myopia",
        "description": "Students difficulty seeing blackboard; concave lenses help."
      },
      {
        "title": "Reading Glasses for Elders",
        "description": "Convex lenses correct presbyopia."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which lens corrects myopia?",
        "answer": "Concave (diverging) lens",
        "hint": "Spreads out light."
      },
      {
        "question": "What happens to the lens when viewing a near object?",
        "answer": "It becomes more convex (thicker) due to ciliary muscle contraction.",
        "hint": "Accommodation."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Radioactivity",
    "lessonNumber": 1,
    "lessonTitle": "Half-life and Nuclear Decay Calculations",
    "lessonId": "physics-f4-radioactivity-1",
    "order": 124,
    "learningObjectives": [
      "Define half‑life and perform calculations involving half‑life",
      "Write balanced nuclear equations for alpha and beta decay"
    ],
    "introduction": "Some elements are unstable; they decay by emitting particles – radioactivity. The half‑life tells how quickly they decay. Today we learn to calculate half‑life and write nuclear equations.",
    "keyPoints": [
      "Half‑life (T½): time taken for half of the radioactive nuclei in a sample to decay.",
      "After n half‑lives, remaining fraction = (1/2)^n.",
      "Alpha decay: emits α particle (²₄He). Atomic number decreases by 2, mass number by 4.",
      "Beta decay: emits β‑ particle (e⁻) when a neutron turns into a proton. Atomic number increases by 1, mass number unchanged.",
      "Gamma decay: emits γ ray (high‑energy photon). No change in atomic or mass number."
    ],
    "detailedContent": "Half‑life\n\nHalf‑life is the time it takes for half of the original radioactive atoms to decay. It is constant for each isotope.\n\nExamples:\n- Carbon‑14: T½ = 5730 years (used in radiocarbon dating).\n- Iodine‑131: T½ = 8 days (used in thyroid treatment).\n- Radium‑226: T½ = 1600 years.\n\nFormula: remaining mass = initial mass × (1/2)^n, where n = number of half‑lives elapsed = time / T½.\n\nExample: A sample has 100 g of carbon‑14. After 5730 years (one half‑life), 50 g remains. After 11,460 years (2 half‑lives), 25 g remains.\n\nNuclear Decay Equations\n\nAlpha decay (emits α particle, helium nucleus):\nParent nucleus → daughter nucleus + α\n\nExample: Uranium‑238 decays to Thorium‑234:\n²³⁸U → ²³⁴Th + ⁴₂He\n\nBeta decay (emits an electron):\nA neutron converts to a proton and a beta particle (electron) is ejected.\n\nExample: Carbon‑14 decays to Nitrogen‑14:\n¹⁴C → ¹⁴N + e⁻ (where e⁻ is β‑ particle)\n\nGamma decay: after α or β decay, the daughter may be excited. It emits gamma photon (no change in proton or neutron number).\n\nActivity: rate of decay (measured in becquerels, 1 Bq = 1 decay/s). Activity ∝ number of atoms present.\n\nMalawi Example: Carbon‑14 dating is used by archaeologists to date ancient artefacts, e.g., Chongoni rock art.",
    "summary": "Half‑life: time for half to decay. Remaining = initial × (½)^n. Alpha decay (loss of 2p+2n); beta decay (neutron → proton + e‑). Gamma: high‑energy photon.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Carbon‑14 Dating",
        "description": "Used to estimate age of organic materials."
      },
      {
        "title": "Iodine‑131 Treatment",
        "description": "Used for hyperthyroidism."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A radioactive sample has half‑life 10 years. If you start with 80 g, how much remains after 30 years?",
        "answer": "10 g",
        "hint": "3 half‑lives: 80→40→20→10 g."
      },
      {
        "question": "Write the alpha decay equation for Radium‑226 (atomic number 88) decaying to Radon‑222.",
        "answer": "²²⁶Ra → ²²²Rn + ⁴₂He",
        "hint": "Mass number decreases by 4, atomic by 2."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Radioactivity",
    "lessonNumber": 2,
    "lessonTitle": "Nuclear Fission and Fusion, Uses and Safety of Radiation",
    "lessonId": "physics-f4-fission-fusion-1",
    "order": 125,
    "learningObjectives": [
      "Explain nuclear fission and chain reaction, and nuclear fusion",
      "State the uses of radioactive isotopes and safety precautions"
    ],
    "introduction": "Nuclear fission splits heavy nuclei, releasing huge energy – used in nuclear power and weapons. Nuclear fusion fuses light nuclei – powers the sun. Today we learn the differences and how radiation is used safely.",
    "keyPoints": [
      "Fission: splitting of a heavy nucleus (e.g., U‑235) into smaller nuclei, releasing energy and neutrons. Controlled chain reaction in reactors; uncontrolled in bombs.",
      "Fusion: joining of light nuclei (e.g., hydrogen) into helium, releasing energy. Requires high temperature (millions K).",
      "Uses of radioisotopes: medicine (radiotherapy, tracers), agriculture (sterile insect technique, radiocarbon dating), industry (gauges, smoke detectors).",
      "Dangers: ionising radiation damages DNA → cancer, acute radiation sickness. Protection: distance, shielding (lead, concrete), time minimisation."
    ],
    "detailedContent": "Nuclear Fission\n\nIn fission, a heavy nucleus (e.g., Uranium‑235) absorbs a neutron and splits into two lighter nuclei (fission fragments), releasing 2‑3 more neutrons and a large amount of energy.\n\nExample: ²³⁵U + n → ²³⁶U → ¹⁴¹Ba + ⁹²Kr + 3n + energy\n\nChain reaction: these neutrons cause further fissions. In a nuclear reactor, control rods absorb excess neutrons to maintain steady rate. In an atomic bomb, uncontrolled chain reaction releases huge energy instantly.\n\nNuclear Fusion\n\nFusion combines two light nuclei (e.g., hydrogen isotopes deuterium and tritium) to form a helium nucleus, releasing even more energy per mass than fission. Requires extremely high temperature (millions of °C) to overcome electrostatic repulsion.\n\nExample: ²H + ³H → ⁴He + n + energy\n\nFusion occurs in the sun and stars. It produces no long‑lived radioactive waste, but containing the plasma is difficult. Research continues (International Thermonuclear Experimental Reactor – ITER).\n\nUses of Radioactive Isotopes\n\n- Medicine: cobalt‑60 for radiotherapy (cancer), iodine‑131 for thyroid disorders, technetium‑99m for imaging.\n- Agriculture: radioisotope tracers to study fertiliser uptake; sterile insect technique (irradiate male insects to control pests).\n- Industry: thickness gauges, smoke detectors (americium‑241), pipeline leak detection.\n- Archaeology: carbon‑14 dating.\n\nSafety Precautions\n\n- Distance: increase distance from source reduces exposure (inverse square law).\n- Shielding: lead aprons, concrete walls.\n- Time: limit time near sources.\n- Personal dosimeters (film badges) for workers.\n- Storage: radioactive waste stored in shielded containers; long‑lived waste buried deep underground.\n\nMalawi Example: Hospitals use X‑rays and gamma sources for treatment (although specialised facilities limited). The Malawi Bureau of Standards ensures safe handling of industrial radiography sources.",
    "summary": "Fission splits heavy nuclei, chain reaction. Fusion combines light nuclei, powers sun. Radioisotopes used in medicine, agriculture, industry. Protection: distance, shielding, time.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Cancer Radiotherapy",
        "description": "Cobalt‑60 used in radiation therapy."
      },
      {
        "title": "Smoke Detectors",
        "description": "Americium‑241 detects smoke particles."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the main advantage of nuclear fusion over fission?",
        "answer": "No long‑lived radioactive waste, abundant fuel (hydrogen).",
        "hint": "Cleaner."
      },
      {
        "question": "Give two safety measures when handling radioactive materials.",
        "answer": "Use shielding (lead), increase distance, limit exposure time.",
        "hint": "Three ways."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Farm Power",
    "lessonNumber": 1,
    "lessonTitle": "Sources of Power on a Farm",
    "lessonId": "agriculture-f4-farm-power-1",
    "order": 126,
    "learningObjectives": [
      "Identify sources of farm power (human, animal, mechanical, wind, solar, biogas)",
      "State advantages and disadvantages of each source"
    ],
    "introduction": "Farm work requires power – for ploughing, weeding, lifting, and processing. The main sources are human, animal, and mechanical. Today we learn the different power sources and their pros and cons.",
    "keyPoints": [
      "Human power: manual labour – available everywhere, cheap, but slow and limited.",
      "Animal power: oxen, donkeys – moderate power, works on small farms, needs feed and care.",
      "Mechanical power: tractors, engines – very high power, fast, but expensive and requires fuel/maintenance.",
      "Wind power: windmills for water pumping – free but intermittent.",
      "Solar power: photovoltaic for electricity, solar thermal for drying – renewable, but high initial cost.",
      "Biogas: methane from animal dung – uses waste, provides fuel and fertiliser.",
      "Choice depends on farm size, capital, topography, availability of fuel/spare parts."
    ],
    "detailedContent": "Sources of Farm Power\n\n1. Human power:\n   - Advantages: always available, no fuel cost, provides employment.\n   - Disadvantages: low power output, slow, fatigue, labour shortage at peak times.\n   - Typical tasks: hand hoeing, planting, weeding, harvesting.\n\n2. Animal power (oxen, donkeys, horses):\n   - Advantages: moderate power, renewable (feed grown on farm), can work in wet conditions, manure produced.\n   - Disadvantages: slow, needs training, veterinary care, feed, water, rest.\n   - Typical tasks: ploughing, carting, harrowing, threshing.\n\n3. Mechanical power (tractors, power tillers, stationary engines):\n   - Advantages: high power and speed, can work large areas, time‑efficient.\n   - Disadvantages: high capital cost, fuel and spare parts often imported, repairs require skills, soil compaction on wet soil.\n   - Typical tasks: ploughing, harrowing, planting, spraying, shelling, milling.\n\n4. Wind power:\n   - Advantages: free, renewable, no fuel, low maintenance.\n   - Disadvantages: intermittent, only suitable where wind is consistent, low power output for small units.\n   - Typical tasks: water pumping, electricity generation (small scale).\n\n5. Solar power:\n   - Advantages: abundant in Malawi, renewable, no fuel, low running cost.\n   - Disadvantages: high initial cost, battery storage needed for night use, power limited.\n   - Typical tasks: lighting, water pumping, battery charging, drying crops (solar dryers).\n\n6. Biogas:\n   - Advantages: uses waste (dung, crop residues), produces methane for cooking and lighting, slurry is fertiliser.\n   - Disadvantages: requires large amount of dung (at least 3‑4 cattle), initial cost for digester, needs maintenance.\n   - Typical tasks: cooking, lighting.\n\nChoosing the right power source: small farms (<1 ha) human and animal; medium farms (1‑5 ha) animal and small mechanical; large farms (>5 ha) tractors. Solar and biogas are supplementary.\n\nMalawi Example: In rural areas, ox‑drawn mouldboard ploughs are common. Some farmers have hired tractors. Solar water pumps are used for gardens. Biogas plants are found on large dairy farms.",
    "summary": "Farm power sources: human (cheap but slow), animal (moderate, renewable), mechanical (fast but costly), wind/solar (renewable, intermittent), biogas (waste‑to‑energy).",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Ox‑drawn Plough",
        "description": "Common in central Malawi, reduces labour."
      },
      {
        "title": "Solar Water Pump",
        "description": "Used for irrigation in off‑grid gardens."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the main advantage of animal power over human power?",
        "answer": "Higher power output and can work longer hours.",
        "hint": "Oxen pull heavier loads."
      },
      {
        "question": "Why is solar power not widely used for large‑scale mechanisation?",
        "answer": "High initial cost and limited power output.",
        "hint": "Needs many panels."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Agricultural Technology and Gender",
    "lessonNumber": 1,
    "lessonTitle": "Gender Biases in Agricultural Technology",
    "lessonId": "agriculture-f4-gender-tech-1",
    "order": 127,
    "learningObjectives": [
      "Identify gender biases in agricultural technology (access, training, design)",
      "Discuss ways of dealing with gender biases in agricultural technology"
    ],
    "introduction": "Modern farm technologies – tractors, improved seeds, irrigation – are not equally accessible to men and women. Women often face barriers. Today we learn about these biases and how to overcome them.",
    "keyPoints": [
      "Gender biases: technology often designed for men (e.g., heavy tools); women have less access to credit, extension, training, land ownership.",
      "Examples: tractors driven mainly by men; women do manual weeding; improved seeds sold through farmer clubs that men control.",
      "Effects: lower productivity for women, reduced household food security, perpetuation of poverty.",
      "Solutions: gender‑sensitive design (tools appropriate for women), targeted extension services, women’s groups, access to credit, land rights."
    ],
    "detailedContent": "Gender Biases in Agricultural Technology\n\nIn many societies, agricultural activities are gender‑divided. Men typically operate machinery (tractors, ox carts), while women perform manual tasks (weeding, harvesting, processing). This division is reinforced by:\n\n- Access to training: extension services often reach men first.\n- Credit: women have less access to loans to buy equipment or improved seeds.\n- Land ownership: women are less likely to own land, so they cannot use it as collateral or invest in long‑term improvements.\n- Design of technology: many tools are designed for male strength and stature (e.g., heavy hoes, large‑sized planters).\n\nExamples of bias:\n- In Malawi, maize shellers are often controlled by men; women who need shelling services must pay or rely on men.\n- Fertiliser subsidy vouchers are often given to the household head (usually male), even if the woman does the farming.\n- Tractors and oxen are owned and operated by men; women use hand hoes.\n\nEffects of Gender Bias\n\n- Lower productivity on plots managed by women (estimated 20‑30% lower).\n- Food insecurity: women’s income is often spent on family nutrition; less income means poorer nutrition.\n- Perpetuation of poverty cycle.\n\nWays to Deal with Gender Biases\n\n1. Gender‑sensitive technology design: design tools that are lighter, ergonomic, suitable for average female stature and strength (e.g., reduced weight of weeding tools, smaller handles).\n\n2. Extension services: ensure female extension agents, schedule meetings at times convenient for women, provide separate training groups for women.\n\n3. Access to credit: promote women‑only savings and loan groups, microfinance products, mobile banking.\n\n4. Land rights: strengthen women’s land ownership and tenure security.\n\n5. Women’s cooperatives: enable collective purchase of machinery (e.g., shellers, mills) that women can hire.\n\n6. Policy: include gender‑disaggregated targets in agricultural programmes.\n\nMalawi Example: The National Agriculture Policy recognises the need for gender mainstreaming. NGOs like NASFAM and CARE have women‑only farmer groups. Some extension materials now include pictures of women using technologies.",
    "summary": "Gender biases: women have less access to technology, training, credit. Effects: lower productivity, food insecurity. Solutions: gender‑sensitive design, women‑only extension, credit, land rights, cooperatives.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Women Farmer Groups",
        "description": "NASFAM supports women’s clubs for collective marketing."
      },
      {
        "title": "Lightweight Hoes",
        "description": "Ergonomic tools reduce drudgery."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why do women often have lower yields on their plots?",
        "answer": "Less access to improved seeds, fertiliser, extension advice, and technology.",
        "hint": "Resource gap."
      },
      {
        "question": "How can cooperatives help reduce gender bias?",
        "answer": "Women can collectively own machinery and access markets, overcoming individual credit/ownership barriers.",
        "hint": "Group power."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Cells",
    "lessonNumber": 1,
    "lessonTitle": "Plant and Animal Cells – Structure and Differences",
    "lessonId": "biology-f1-cells-1",
    "order": 128,
    "learningObjectives": [
      "Identify the parts of a plant cell and an animal cell using diagrams",
      "Distinguish between plant and animal cells (cell wall, chloroplasts, vacuole)"
    ],
    "introduction": "All living things are made of cells. Cells are the basic unit of life. Today we will learn the parts of plant and animal cells and how they differ.",
    "keyPoints": [
      "Cell structures common to both: cell membrane, nucleus, cytoplasm, mitochondria, ribosomes.",
      "Plant cell only: cell wall (cellulose, rigid), chloroplasts (photosynthesis), large central vacuole (storage, support).",
      "Animal cell only: no cell wall, small or no vacuoles, no chloroplasts.",
      "Functions: nucleus (controls cell), mitochondria (energy), cell membrane (controls entry/exit), cytoplasm (site of reactions)."
    ],
    "detailedContent": "Plant Cell\n\n- Cell wall: outer rigid layer made of cellulose; provides shape and support.\n- Cell membrane: thin layer inside cell wall; controls movement of substances.\n- Nucleus: contains DNA, controls cell activities.\n- Cytoplasm: jelly‑like substance where chemical reactions occur.\n- Chloroplasts: contain chlorophyll; site of photosynthesis.\n- Vacuole: large central sac filled with cell sap (water, sugars, salts); stores water and maintains turgidity.\n- Mitochondria: produce energy (ATP) through respiration.\n\nAnimal Cell\n\n- No cell wall: flexible shape.\n- Cell membrane: outermost boundary.\n- Nucleus: same as plant cell.\n- Cytoplasm: same.\n- Small vacuoles (sometimes none) – not central.\n- No chloroplasts.\n- Mitochondria: same.\n\nDifferences\n\n| Feature      | Plant cell           | Animal cell \n|---------     |------------          |-------------\n| Cell wall    | Yes (cellulose)      | No\n| Chloroplasts | Yes (photosynthesis) | No \n| Vacuole      | Large central        | Small / absent \n| Shape        | Fixed (rectangular)  | Irregular / round \n\nMagnification and specimen observation: using a light microscope, students can observe onion epidermal cells (plant) and cheek cells (animal) after staining.\n\nMalawi Example: Onion cells from an onion grown in Ntchisi – visible cell walls and nucleus. Cheek cells seen in school lab.",
    "summary": "Plant cells have cell wall, chloroplasts, large vacuole. Animal cells lack these. Both have nucleus, cytoplasm, cell membrane, mitochondria.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Onion Epidermal Cells",
        "description": "See cell walls and nuclei under microscope."
      },
      {
        "title": "Cheek Cells",
        "description": "Animal cells with no cell wall."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which organelle is responsible for photosynthesis?",
        "answer": "Chloroplast",
        "hint": "Green."
      },
      {
        "question": "What is the function of the nucleus?",
        "answer": "Controls cell activities and contains genetic material.",
        "hint": "Control centre."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Cells",
    "lessonNumber": 2,
    "lessonTitle": "Levels of Organisation and Specialised Cells",
    "lessonId": "biology-f1-organisation-1",
    "order": 129,
    "learningObjectives": [
      "List the levels of organisation (cell → tissue → organ → system → organism)",
      "Give examples of specialised cells (red blood cell, nerve cell, root hair cell) and their adaptations"
    ],
    "introduction": "Cells work together in tissues, tissues form organs, organs make systems, systems form an organism. Today we learn this hierarchy and how cells are specialised for specific functions.",
    "keyPoints": [
      "Cell → tissue → organ → system → organism.",
      "Tissue: group of similar cells performing same function (e.g., muscle tissue).",
      "Organ: group of different tissues working together (e.g., heart, stomach).",
      "System: group of organs working together (e.g., circulatory system).",
      "Specialised cells: red blood cell (no nucleus, biconcave – carries oxygen), nerve cell (long axon – transmits impulses), root hair cell (protrusions – absorbs water/minerals)."
    ],
    "detailedContent": "Levels of Organisation\n\n1. Cell: basic unit (e.g., muscle cell).\n2. Tissue: group of similar cells (e.g., muscle tissue).\n3. Organ: different tissues together (e.g., heart – muscle, nervous, connective tissue).\n4. System: organs working together (e.g., circulatory system – heart, blood vessels, blood).\n5. Organism: living individual (e.g., human, maize plant).\n\nSpecialised Cells\n\n- Red blood cell (erythrocyte):\n   * No nucleus – more space for haemoglobin.\n   * Biconcave disc – increases surface area for oxygen exchange.\n   * Function: carry oxygen.\n\n- Nerve cell (neuron):\n   * Long axon – carries impulse over long distances.\n   * Dendrites – receive signals.\n   * Myelin sheath – speeds transmission.\n   * Function: transmit electrical impulses.\n\n- Root hair cell (plant):\n   * Long protrusion (root hair) – increases surface area.\n   * No chloroplasts (underground).\n   * Function: absorb water and minerals from soil.\n\nOther examples: sperm cell (flagellum), egg cell (large cytoplasm), palisade cell (many chloroplasts).\n\nMalawi Example: In a maize plant, root hair cells absorb water and nutrients; palisade cells in leaves carry out photosynthesis.",
    "summary": "Organisation: cell → tissue → organ → system → organism. Specialised cells have adaptations for their role: red blood cell (O2), nerve cell (impulses), root hair cell (absorption).",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Maize Root Hairs",
        "description": "Increase water uptake."
      },
      {
        "title": "Nerve in a Chicken Leg",
        "description": "Observe white thread‑like nerves."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is a tissue?",
        "answer": "A group of similar cells performing the same function.",
        "hint": "Example: muscle."
      },
      {
        "question": "How is a red blood cell adapted to carry oxygen?",
        "answer": "No nucleus, biconcave shape, contains haemoglobin.",
        "hint": "Space and shape."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Transport Across Membranes",
    "lessonNumber": 1,
    "lessonTitle": "Diffusion and Osmosis",
    "lessonId": "biology-f1-diffusion-osmosis-1",
    "order": 130,
    "learningObjectives": [
      "Define diffusion and osmosis and give everyday examples",
      "Explain the importance of osmosis in plant and animal cells"
    ],
    "introduction": "Substances move into and out of cells without energy through diffusion and osmosis. Today we learn how these processes work and why they are important for life.",
    "keyPoints": [
      "Diffusion: net movement of particles from high concentration to low concentration. No energy required. Examples: smell of cooking nsima spreading, oxygen entering blood.",
      "Osmosis: diffusion of water across a selectively permeable membrane from high water potential (dilute) to low water potential (concentrated).",
      "Importance: plants absorb water via root hairs; turgor pressure keeps leaves firm; animal cells – water balance."
    ],
    "detailedContent": "Diffusion\n\nDiffusion is the net movement of particles (gases, solutes) from a region of higher concentration to a region of lower concentration. It continues until equilibrium is reached.\n\nExamples:\n- Cooking nsima – smell spreads throughout the house (gas diffusion).\n- Oxygen diffuses from alveoli into blood (high O2 in air, low in blood).\n- Carbon dioxide diffuses from blood into alveoli.\n- Sugar dissolving in water (sugar molecules spread).\n\nFactors affecting rate: temperature (higher → faster), concentration gradient (steeper → faster), distance (shorter → faster).\n\nOsmosis\n\nOsmosis is the net movement of water molecules from a region of high water concentration (dilute solution) to a region of low water concentration (concentrated solution) across a selectively permeable membrane.\n\nThe membrane allows water to pass but not larger solutes.\n\nImportance in Plants\n\n- Root hair cells: water moves by osmosis from soil (dilute) into root cells (concentrated cell sap).\n- Turgor: water enters vacuole, pressing cell wall – gives support to non‑woody plants. Wilting occurs when water loss > uptake.\n- Stomatal opening: guard cells become turgid → stoma opens; flaccid → closes.\n\nImportance in Animals\n\n- Human cells: body fluids maintain osmotic balance (≈0.9% salt). If red blood cells placed in pure water, water enters → cells burst (haemolysis). In concentrated salt, water leaves → cells shrink (crenation).\n- Kidneys use osmosis to reabsorb water (ADH controls).\n\nMalawi Example: When you put a wilted vegetable in water, it becomes crisp again – water moves into cells by osmosis.",
    "summary": "Diffusion: high to low concentration. Osmosis: water across membrane. Osmosis keeps plants turgid, animals balanced. Wilting occurs when water lost.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Wilted Vegetable",
        "description": "Becomes crisp in water – osmosis."
      },
      {
        "title": "Smell of Nsima",
        "description": "Diffusion spreads particles."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between diffusion and osmosis?",
        "answer": "Osmosis is specifically water across a semi‑permeable membrane; diffusion can be any particle.",
        "hint": "Water vs any."
      },
      {
        "question": "What happens to a red blood cell in distilled water?",
        "answer": "It swells and bursts (haemolysis).",
        "hint": "Water enters."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 2",
    "topic": "Blood Donation",
    "lessonNumber": 1,
    "lessonTitle": "The Process and Importance of Blood Donation",
    "lessonId": "biology-f2-blood-donation-1",
    "order": 131,
    "learningObjectives": [
      "Explain the process of blood donation and the role of the Malawi Blood Transfusion Service (MBTS)",
      "Describe the types of blood donors and the importance of voluntary non‑remunerated donation"
    ],
    "introduction": "Blood donation saves lives – for surgery, accidents, anaemia, and childbirth. Today we learn how blood is collected, who can donate, and why voluntary donors are safest.",
    "keyPoints": [
      "Blood donation process: registration, health check, haemoglobin test, donor questionnaire, sterile phlebotomy (450‑500 mL), rest, refreshments.",
      "Types of donors: family replacement donors (give for a relative), voluntary non‑remunerated donors (give freely, safest).",
      "MBTS roles: collection, testing (HIV, hepatitis, syphilis, malaria), separation into components (red cells, plasma, platelets), storage, distribution.",
      "Eligibility: age 18‑60, weight ≥50 kg, healthy, no risky behaviours, not pregnant, not anaemic."
    ],
    "detailedContent": "Blood Donation Process\n\n1. Registration: donor gives consent and basic information.\n2. Health check: temperature, blood pressure, pulse.\n3. Haemoglobin test: finger prick to ensure sufficient iron.\n4. Interview: confidential questions about medical history, travel, risk behaviours (to prevent transfusion‑transmitted infections).\n5. Donation: clean needle, 450‑500 mL blood taken (about 10‑15 minutes). One unit can save 2‑3 lives.\n6. Post‑donation rest: donor rests, drinks fluids, eats snack.\n\nTypes of Blood Donors\n\n- Family replacement donors: donate when a family member needs transfusion. Risk: may not disclose risks due to pressure.\n- Voluntary non‑remunerated donors: donate voluntarily without payment. They have no incentive to hide risky behaviour → lower risk of infections. These are the safest donors. MBTS promotes 100% voluntary donation.\n\nMalawi Blood Transfusion Service (MBTS)\n\nMBTS collects, tests, processes, and distributes blood to hospitals.\n\n- Blood is tested for HIV, hepatitis B/C, syphilis, and malaria.\n- Separation: whole blood separated into red cells, plasma, and platelets (each used for different conditions).\n- Storage: red cells at 2‑6°C (35 days), plasma frozen, platelets room temperature (5 days).\n- Distribution to all district hospitals, central hospitals (Queen Elizabeth).\n\nWhy donate? To save lives – accident victims, mothers with post‑partum haemorrhage, anaemic children, surgery patients.\n\nMalawi Example: MBTS runs mobile clinics in schools, churches, and workplaces. Each year, thousands of units are collected, but demand exceeds supply.",
    "summary": "Blood donation process: screening, health check, collection of 450‑500 mL. Voluntary non‑remunerated donors are safest. MBTS tests, separates, distributes blood. Saves lives.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "MBTS Mobile Clinic",
        "description": "Schoolchildren donate during campaigns."
      },
      {
        "title": "Post‑partum Haemorrhage",
        "description": "Mothers need urgent transfusion."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why are voluntary non‑remunerated donors considered safest?",
        "answer": "No incentive to hide risk behaviours, so lower risk of transfusion‑transmitted infections.",
        "hint": "Honesty."
      },
      {
        "question": "What tests are performed on donated blood?",
        "answer": "HIV, hepatitis B/C, syphilis, malaria.",
        "hint": "Screen for diseases."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "States of Matter",
    "lessonNumber": 1,
    "lessonTitle": "Properties of Solids, Liquids, and Gases",
    "lessonId": "chemistry-f1-states-matter-1",
    "order": 132,
    "learningObjectives": [
      "Describe the three states of matter in terms of particle arrangement and movement",
      "State the properties of solids, liquids, and gases"
    ],
    "introduction": "Matter can exist as solid, liquid, or gas. The difference is in how particles are arranged and how they move. Today we explore these states and their properties.",
    "keyPoints": [
      "Solids: particles closely packed in fixed pattern; vibrate in place; fixed shape and volume; high density; incompressible.",
      "Liquids: particles close but not fixed; can slide past each other; fixed volume but take shape of container; slightly compressible.",
      "Gases: particles far apart; move randomly at high speed; no fixed shape or volume; low density; easily compressible.",
      "Changes of state: melting (solid→liquid), freezing, boiling (liquid→gas), condensation, sublimation (solid→gas)."
    ],
    "detailedContent": "Properties of States\n\nSolids:\n- Particle arrangement: regular, tightly packed.\n- Movement: vibrate about fixed positions.\n- Shape: fixed.\n- Volume: fixed.\n- Density: high.\n- Compressibility: very low.\n\nExamples: iron bar, maize grain, stone.\n\nLiquids:\n- Particle arrangement: random but close.\n- Movement: slide over each other.\n- Shape: takes shape of container.\n- Volume: fixed.\n- Density: moderate (water 1 g/cm³).\n- Compressibility: very low.\n\nExamples: water, cooking oil.\n\nGases:\n- Particle arrangement: far apart, random.\n- Movement: rapid, random, straight lines until collision.\n- Shape: fills entire container.\n- Volume: expands to fill container.\n- Density: low.\n- Compressibility: high.\n\nExamples: air, carbon dioxide, steam.\n\nChanges of State\n- Melting: solid to liquid (absorbs energy).\n- Boiling/evaporation: liquid to gas (absorbs energy).\n- Condensation: gas to liquid (releases energy).\n- Freezing: liquid to solid (releases energy).\n- Sublimation: solid to gas (dry ice, iodine crystals).\n- Deposition: gas to solid (frost).\n\nDuring change of state, temperature remains constant because energy is used to overcome intermolecular forces.\n\nMalawi Example: Water from Lake Malawi can be solid (ice on high mountains), liquid (usual), or gas (steam when boiling for nsima).",
    "summary": "Solids: fixed shape/volume, incompressible. Liquids: fixed volume, take shape of container. Gases: no fixed shape/volume, compressible. Changes of state involve energy. ",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Ice on Mulanje",
        "description": "Solid water at high altitude."
      },
      {
        "title": "Steam from Cooking",
        "description": "Gas from boiling water."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What happens to the particles when a solid melts?",
        "answer": "Gain energy, vibrate more, break free from fixed positions.",
        "hint": "Energy increase."
      },
      {
        "question": "Why can gases be compressed easily?",
        "answer": "Particles are far apart with much empty space.",
        "hint": "Low density."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Solutions and Solubility",
    "lessonNumber": 1,
    "lessonTitle": "Types of Solutions and Factors Affecting Solubility",
    "lessonId": "chemistry-f1-solutions-1",
    "order": 133,
    "learningObjectives": [
      "Define solution, solute, solvent, and classify solutions as saturated/unsaturated",
      "Explain factors that affect solubility (temperature, stirring, particle size)"
    ],
    "introduction": "When sugar dissolves in tea, you have made a solution. Today we learn the language of solutions and what makes substances dissolve faster or slower.",
    "keyPoints": [
      "Solution: homogeneous mixture of solute and solvent.",
      "Solute: substance that dissolves (e.g., sugar).",
      "Solvent: substance that dissolves the solute (e.g., water).",
      "Saturated solution: no more solute can dissolve at that temperature.",
      "Unsaturated solution: more solute can dissolve.",
      "Factors affecting rate of dissolving (speed): temperature (higher → faster), stirring (faster), particle size (smaller → faster). But solubility (maximum amount) increases with temperature for most solids, decreases for gases."
    ],
    "detailedContent": "What is a Solution?\n\nA solution is a homogeneous mixture where one substance (solute) is dissolved in another (solvent). The particles are evenly distributed and cannot be seen.\n\nExamples:\n- Salt in water (NaCl in H2O)\n- Sugar in water\n- Vinegar (acetic acid in water)\n- Air (gases dissolved in gases)\n\nSaturated vs Unsaturated\n\n- Unsaturated: more solute can be dissolved (e.g., add one teaspoon of sugar to a cup of tea).\n- Saturated: no more solute dissolves at that temperature; additional solute remains as precipitate (e.g., after many spoons, sugar stops dissolving). The concentration at saturation is the solubility (g/100g water).\n\nRate of Dissolving vs Solubility\n\n- Rate (speed) of dissolving can be increased by:\n   * Heating (particles move faster, more collisions).\n   * Stirring (brings fresh solvent into contact).\n   * Crushing solute (increases surface area).\n\n- Solubility (maximum amount) for most solids increases with temperature. For gases, solubility decreases with temperature (why warm soda goes flat faster).\n\nPractical: Make saturated salt solution, then observe crystallisation when water evaporates.\n\nMalawi Example: In Lake Chilwa, salt production uses evaporation. The lake water is saturated, and on evaporation, salt crystals form. In cooking, hot water dissolves sugar faster than cold.",
    "summary": "Solution = solute + solvent. Saturated: maximum dissolved. Rate of dissolving increased by heat, stirring, surface area. Solubility varies with temperature.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Lake Chilwa Salt",
        "description": "Evaporation of saturated brine leaves salt crystals."
      },
      {
        "title": "Hot Tea Sugar",
        "description": "Dissolves faster than cold – temperature effect."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between saturated and unsaturated?",
        "answer": "Saturated cannot dissolve more; unsaturated can.",
        "hint": "Capacity."
      },
      {
        "question": "How does crushing a solid increase dissolving rate?",
        "answer": "Increases surface area for solvent to contact.",
        "hint": "More particles exposed."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 2",
    "topic": "Chemical Formulae and Equations",
    "lessonNumber": 1,
    "lessonTitle": "Writing Chemical Formulae and Valency",
    "lessonId": "chemistry-f2-formulae-1",
    "order": 134,
    "learningObjectives": [
      "Write chemical formulae for compounds using valencies",
      "Calculate relative formula mass (Mr) from atomic masses"
    ],
    "introduction": "Chemists use symbols and formulae to represent elements and compounds. Today we learn how to write formulae and calculate the mass of one formula unit.",
    "keyPoints": [
      "Valency: combining power of an element (number of electrons lost, gained, or shared). Group I metals have valency 1, Group II valency 2, Group VII non‑metals 1, etc.",
      "To write formula: swap valencies (criss‑cross). Example: Al (III) and O (II) → Al2O3.",
      "Parentheses for polyatomic ions: Ca(OH)2, (NH4)2SO4.",
      "Relative atomic mass (Ar): mass relative to 1/12 of carbon‑12. Found on periodic table.",
      "Relative formula mass (Mr): sum of Ar of all atoms in the formula.",
      "Example: H2O – Mr = (2×1) + 16 = 18."
    ],
    "detailedContent": "Valency and Formulae\n\nValency is the combining power of an element. For main group elements, it is often the group number (for metals) or 8‑group number (for non‑metals).\n\nCommon valencies:\n- H (1), Na (1), K (1), Ag (1)\n- Mg (2), Ca (2), Ba (2), Zn (2)\n- Al (3)\n- O (2), S (2)\n- Cl (1), Br (1), I (1)\n- N (3), P (3)\n\nPolyatomic ions (radicals) have fixed charges:\n- Hydroxide OH‑ (1), nitrate NO3‑ (1), carbonate CO32‑ (2), sulphate SO42‑ (2), ammonium NH4+ (1)\n\nWriting formula: use criss‑cross of valencies.\n\nExample: Sodium (Na valency 1) and chlorine (Cl valency 1) → NaCl.\nCalcium (Ca valency 2) and oxygen (O valency 2) → CaO (simplify: 2/2 =1 each).\nAluminium (Al valency 3) and oxygen (O valency 2) → Al2O3 (swap 3 and 2).\nCalcium (2) and hydroxide (1) → Ca(OH)2 – brackets for the ion.\n\nRelative Formula Mass (Mr)\n\nAr values from periodic table (use whole numbers approx):\nH=1, C=12, N=14, O=16, Na=23, Mg=24, Al=27, S=32, Cl=35.5, Ca=40, Fe=56.\n\nCalculate Mr:\n- NaCl: 23 + 35.5 = 58.5\n- H2O: (2×1) + 16 = 18\n- Ca(OH)2: 40 + (2×16) + (2×1) = 40 + 32 + 2 = 74\n- (NH4)2SO4: (2×14)+(8×1)+32+(4×16) = 28+8+32+64 = 132\n\nMalawi Example: Fertiliser labels show NPK; the formula (e.g., (NH4)2SO4) allows calculating Mr and nitrogen percentage.",
    "summary": "Formula uses valencies. Mr = sum of Ar of atoms. Example: H2O = 18. Important for calculating masses in reactions.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Urea Formula",
        "answer": "CO(NH2)2, Mr = 12+16+(2×14)+(4×1)=60"
      },
      {
        "title": "Salt (NaCl)",
        "answer": "Formula Mr 58.5."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Write formula for magnesium chloride (Mg valency 2, Cl 1).",
        "answer": "MgCl2",
        "hint": "Swap valencies."
      },
      {
        "question": "Calculate Mr of CaCO3.",
        "answer": "40+12+(3×16)=100",
        "hint": "Calcium carbonate."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 2",
    "topic": "Balancing Chemical Equations",
    "lessonNumber": 1,
    "lessonTitle": "Balancing Equations and Conservation of Mass",
    "lessonId": "chemistry-f2-balancing-1",
    "order": 135,
    "learningObjectives": [
      "State the law of conservation of mass",
      "Balance given chemical equations by adjusting coefficients"
    ],
    "introduction": "In a chemical reaction, atoms are rearranged, not created or destroyed. Balanced equations show this. Today we learn to balance equations.",
    "keyPoints": [
      "Law of conservation of mass: total mass of reactants = total mass of products.",
      "A balanced equation has equal numbers of each atom on both sides.",
      "Balance by changing coefficients (numbers before formulae), never subscripts.",
      "Steps: write unbalanced equation, count atoms, adjust coefficients, repeat."
    ],
    "detailedContent": "Why Balance?\n\nThe law of conservation of mass means atoms are neither created nor destroyed. So the number of each type of atom must be the same on both sides of the equation.\n\nExample: Unbalanced – H2 + O2 → H2O\nLeft: H=2, O=2. Right: H=2, O=1. Oxygen not balanced.\n\nTo balance, we add coefficients:\n2H2 + O2 → 2H2O\nNow left: H=4, O=2; right: H=4, O=2.\n\nBalancing Steps\n\n1. Write correct formulae for all reactants and products.\n2. Count atoms of each element.\n3. Start with the most complex molecule or the element that appears in only one reactant and one product.\n4. Use coefficients to make numbers equal.\n5. Check again.\n\nExamples:\n\n1. C3H8 + O2 → CO2 + H2O (combustion of propane)\n   Balance C: 3CO2\n   Balance H: 4H2O\n   Balance O: left C3H8 + O2, right 3CO2+4H2O gives O count: (3×2)+(4×1)=10 O atoms. So need 5O2.\n   Final: C3H8 + 5O2 → 3CO2 + 4H2O\n\n2. Al + HCl → AlCl3 + H2\n   Balance Al: already 1:1\n   Balance Cl: right AlCl3 has 3Cl, so need 3HCl\n   H: left 3H, right H2 – need 1.5 H2? Multiply through by 2: 2Al + 6HCl → 2AlCl3 + 3H2\n\nLinear equations method for complicated ones not required at Form 2; use trial & error.\n\nMalawi Example: Fermentation of sugar: C6H12O6 → 2C2H5OH + 2CO2. Balanced – atoms same both sides.",
    "summary": "Balanced equations show conservation of mass. Use coefficients, not subscripts. Atoms must match on both sides.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Photosynthesis",
        "description": "6CO2 + 6H2O → C6H12O6 + 6O2 – balanced."
      },
      {
        "title": "Rusting",
        "description": "4Fe + 3O2 → 2Fe2O3."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Balance: Mg + O2 → MgO",
        "answer": "2Mg + O2 → 2MgO",
        "hint": "Magnesium burns."
      },
      {
        "question": "Balance: N2 + H2 → NH3",
        "answer": "N2 + 3H2 → 2NH3",
        "hint": "Haber process."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 1",
    "topic": "Measurements I – Instruments",
    "lessonNumber": 1,
    "lessonTitle": "Measuring Length, Mass, Time, and Temperature",
    "lessonId": "physics-f1-measuring-instruments-1",
    "order": 136,
    "learningObjectives": [
      "Use appropriate instruments to measure length (ruler, tape), mass (beam balance), time (stopwatch), and temperature (thermometer)",
      "Read scales correctly and convert between units"
    ],
    "introduction": "Physics experiments require accurate measurements. Today we learn how to use common instruments and read their scales without error.",
    "keyPoints": [
      "Length: metre rule (1 mm precision), tape measure (1 cm precision).",
      "Mass: beam balance (1 g), electronic balance (0.1 g or better).",
      "Time: stopwatch (0.1 s or 0.01 s).",
      "Temperature: liquid‑in‑glass thermometer, digital thermometer.",
      "Scale reading: avoid parallax error by placing eye at level of meniscus (for liquids) or mark.",
      "Unit conversion: 1 m = 100 cm = 1000 mm; 1 kg = 1000 g; 1 hour = 3600 s."
    ],
    "detailedContent": "Measuring Length\n\n- Metre rule: 1 m long, divided into 100 cm and 1000 mm. Accuracy 1 mm.\n- Tape measure: for longer lengths (up to several metres). Accuracy 1 cm.\n- To measure: align zero mark with one end, read at other end. Keep eye directly above the mark to avoid parallax.\n\nMeasuring Mass\n\n- Beam balance (triple beam or double pan): adjust riders until pointer balances; add masses. Accuracy 1 g.\n- Electronic balance: digital reading. More accurate (0.1 g or 0.01 g). Always zero before use.\n\nMeasuring Time\n\n- Stopwatch (manual or digital). Start and stop with finger; reaction time may introduce error (0.1‑0.2 s). For better accuracy, measure multiple oscillations (e.g., 10 swings of pendulum) and divide.\n\nMeasuring Temperature\n\n- Liquid‑in‑glass thermometer (alcohol or mercury). Bulb at bottom, liquid expands up tube. Read at top of liquid column (meniscus for alcohol). Eye level to avoid parallax.\n- Digital thermometer: electronic sensor, quick reading.\n\nUnit Conversion (examples)\n- 2.5 m = 250 cm = 2500 mm.\n- 500 g = 0.5 kg.\n- 30 minutes = 1800 s.\n\nMalawi Example: In a school garden, students measure length of maize rows with a tape measure. They weigh harvested maize using a beam balance.",
    "summary": "Length: metre rule, tape. Mass: balance. Time: stopwatch. Temperature: thermometer. Read at eye level to avoid parallax. Convert units carefully.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Garden Length",
        "description": "Measure rows with tape measure."
      },
      {
        "title": "Market Weighing",
        "description": "Beam balance measures bag of groundnuts."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the smallest division on a metre rule?",
        "answer": "1 mm",
        "hint": "1000 mm in metre."
      },
      {
        "question": "Convert 2.5 kg to grams.",
        "answer": "2500 g",
        "hint": "1 kg = 1000 g."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 1",
    "topic": "Work and Energy",
    "lessonNumber": 1,
    "lessonTitle": "Work Done and Its Calculation",
    "lessonId": "physics-f1-work-1",
    "order": 137,
    "learningObjectives": [
      "Define work in physics (force causes displacement)",
      "Calculate work done using W = F × d"
    ],
    "introduction": "In physics, work is done only when a force moves an object. If you push a wall, no work is done if it doesn’t move. Today we learn to calculate work and see real examples.",
    "keyPoints": [
      "Work = Force × distance moved in direction of force (W = Fd).",
      "Unit: joule (J), 1 J = 1 N·m.",
      "No displacement → no work (even if force is large).",
      "Examples: lifting a load, pushing a wheelbarrow."
    ],
    "detailedContent": "Definition of Work\n\nWork is done when a force causes an object to move in the direction of the force.\n\nFormula: W = F × d\n- W = work (joules, J)\n- F = force (newtons, N)\n- d = distance moved in direction of force (metres, m)\n\nIf the force is at an angle, only the component in the direction of motion does work (not covered in Form 1).\n\nExamples\n\n1. Push a box 5 m with a force of 20 N: W = 20 × 5 = 100 J.\n2. Lift a 10 kg bag of maize (weight = 100 N) to a height of 1.5 m: W = 100 × 1.5 = 150 J.\n3. Hold a heavy bag without moving – distance = 0 → work = 0 J.\n\nWhen is work done?\n\n| Situation | Work done? | Reason |\n|-----------|------------|--------|\n| Pushing a wall that doesn’t move | No | No displacement |\n| Carrying a bag horizontally at constant speed | No | Force vertical, motion horizontal (perpendicular) – but horizontal component of force? Actually you only need to support the bag vertically; horizontal motion requires no force if constant speed. |\n| Lifting a book | Yes | Force upward, displacement upward |\n| Cycling | Yes | Force from pedals causes displacement |\n\nMalawi Example: A farmer pushes a wheelbarrow loaded with maize 20 m with a force of 50 N. Work = 50 × 20 = 1000 J.",
    "summary": "Work = force × distance. No displacement → no work. Unit: joule (J).",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Wheelbarrow Work",
        "description": "Pushing wheelbarrow full of maize."
      },
      {
        "title": "Water Pump Work",
        "description": "Lifting water from well."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Calculate work if force 30 N moves object 4 m.",
        "answer": "120 J",
        "hint": "30×4=120"
      },
      {
        "question": "Is work done carrying a bag horizontally? Why?",
        "answer": "No, because force is vertical (up) and motion is horizontal – perpendicular.",
        "hint": "No force in direction of motion."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 1",
    "topic": "Energy",
    "lessonNumber": 1,
    "lessonTitle": "Forms of Energy and Energy Conservation",
    "lessonId": "physics-f1-energy-1",
    "order": 138,
    "learningObjectives": [
      "Identify different forms of energy (kinetic, potential, thermal, chemical, etc.)",
      "State the law of conservation of energy"
    ],
    "introduction": "Energy is the ability to do work. It exists in many forms and can be transformed from one form to another. Today we learn the forms and the most important law of physics.",
    "keyPoints": [
      "Energy unit: joule (J).",
      "Forms: kinetic (motion), gravitational potential (height), elastic (stretched), thermal (heat), chemical (bonds), electrical, light, sound, nuclear.",
      "Law of conservation of energy: total energy remains constant; energy cannot be created or destroyed, only transformed."
    ],
    "detailedContent": "What is Energy?\n\nEnergy is the capacity to do work. When work is done, energy is transferred.\n\nForms of Energy\n\n- Kinetic (KE): energy of motion. Depends on mass and speed.\n- Gravitational potential (GPE): energy due to height. GPE = mgh.\n- Elastic potential: stored in stretched or compressed springs, rubber bands.\n- Thermal (heat): energy of hot objects; particles move faster.\n- Chemical: stored in bonds of food, fuel, batteries.\n- Electrical: energy of moving charges (electricity).\n- Light (radiant): energy carried by electromagnetic waves.\n- Sound: energy of vibrations.\n- Nuclear: stored in atomic nuclei (sun, nuclear power).\n\nEnergy Transformations\n\nExamples:\n- Hydroelectric dam: GPE (water) → kinetic → electrical.\n- Food: chemical → kinetic (muscles) + thermal (body heat).\n- Solar panel: light → electrical.\n- Bicycle brakes: kinetic → thermal (brake pads heat up).\n- Candle: chemical → light + thermal.\n\nConservation of Energy\n\nIn any transformation, the total energy before equals total energy after, provided we account for all forms.\n\nExample: A dropped stone loses GPE and gains KE. At the moment it hits the ground, KE = original GPE (ignoring air resistance). Some energy may be converted to sound and heat, but total remains same.\n\nMalawi Example: At Nkula Falls hydroelectric plant, GPE of water in reservoir is converted to KE as it flows down, then to electrical energy by turbines. Some energy lost as sound and heat, but total energy conserved.",
    "summary": "Energy forms: kinetic, potential, thermal, chemical, electrical, light, sound, nuclear. Conservation: total energy constant; only transformed.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Nkula Hydroelectric",
        "description": "Water potential → kinetic → electrical."
      },
      {
        "title": "Bicycle Brakes",
        "description": "Kinetic → thermal (heat)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of energy does a moving bicycle have?",
        "answer": "Kinetic energy",
        "hint": "Motion."
      },
      {
        "question": "What happens to the gravitational potential energy of water when it flows over a dam?",
        "answer": "It transforms to kinetic and then electrical energy.",
        "hint": "Hydroelectric."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 2",
    "topic": "Specific Heat Capacity",
    "lessonNumber": 1,
    "lessonTitle": "Heat Capacity and Specific Heat Capacity",
    "lessonId": "physics-f2-specific-heat-1",
    "order": 139,
    "learningObjectives": [
      "Define heat capacity and specific heat capacity",
      "Solve problems using Q = mcΔθ"
    ],
    "introduction": "Why does water take longer to heat than oil? It has a high specific heat capacity. Today we learn what that means and how to calculate heat energy.",
    "keyPoints": [
      "Heat capacity (C): energy needed to raise temperature by 1°C. Unit: J/°C.",
      "Specific heat capacity (c): energy needed to raise 1 kg of substance by 1°C. Unit: J/(kg·°C).",
      "Equation: Q = m c Δθ, where Q = heat energy (J), m = mass (kg), c = specific heat capacity, Δθ = temperature change (°C).",
      "Water has high c (4200 J/(kg·°C)) – good coolant; land heats/cools faster."
    ],
    "detailedContent": "Heat Capacity vs Specific Heat Capacity\n\n- Heat capacity (C): the amount of heat required to raise the temperature of an entire object by 1°C. It depends on mass and material.\n- Specific heat capacity (c): amount of heat required to raise the temperature of 1 kg of the substance by 1°C. It is a property of the material.\n\nEquation: Q = m c Δθ\n\nWhere\n- Q = heat energy (J)\n- m = mass (kg)\n- c = specific heat capacity (J/(kg·°C))\n- Δθ = temperature rise (°C) = final – initial\n\nExamples of c (approx):\n- Water: 4200 J/(kg·°C)\n- Aluminium: 900 J/(kg·°C)\n- Iron: 450 J/(kg·°C)\n- Copper: 390 J/(kg·°C)\n- Air: 1000 J/(kg·°C)\n\nCalculations\n\nExample 1: How much heat to raise 2 kg of water from 20°C to 100°C?\nΔθ = 80°C, m=2, c=4200.\nQ = 2 × 4200 × 80 = 672,000 J = 672 kJ.\n\nExample 2: Copper block of 0.5 kg heated from 25°C to 75°C. c=390.\nQ = 0.5 × 390 × 50 = 9,750 J.\n\nApplications\n- Water in car radiators: high c absorbs large amount of heat without high rise.\n- Coastal areas: high c of water moderates temperature (cool sea breezes).\n- Cooking: pots need low c to heat quickly (aluminium, copper).\n\nMalawi Example: Lake Malawi absorbs solar heat during day and releases slowly at night, making lakeside areas less extreme.",
    "summary": "Specific heat capacity (c) = heat to raise 1 kg by 1°C. Q = m c Δθ. Water high c (4200) good coolant. Land low c heats/cools quickly.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Lake Malawi Moderation",
        "description": "Water’s high c keeps nearby climate stable."
      },
      {
        "title": "Car Radiator",
        "description": "Water cools engine because it absorbs much heat."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Calculate heat needed to raise 3 kg of aluminium (c=900) from 20°C to 120°C.",
        "answer": "270,000 J",
        "hint": "Q=3×900×100=270,000"
      },
      {
        "question": "Why does land heat faster than lake water?",
        "answer": "Specific heat capacity of land (soil) is lower than water.",
        "hint": "c value."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 2",
    "topic": "Heat Transfer",
    "lessonNumber": 1,
    "lessonTitle": "Conduction, Convection, and Radiation",
    "lessonId": "physics-f2-heat-transfer-1",
    "order": 140,
    "learningObjectives": [
      "Explain conduction, convection, and radiation as methods of heat transfer",
      "Give everyday examples of each"
    ],
    "introduction": "Heat moves from hot to cold. It can travel by three different methods: conduction (through solids), convection (liquids and gases), and radiation (no medium needed). Today we learn how each works.",
    "keyPoints": [
      "Conduction: transfer through solids by particle vibration; metals are good conductors, wood/air poor conductors (insulators).",
      "Convection: transfer in fluids (liquids, gases) by bulk movement; hot fluid rises, cool sinks – convection currents.",
      "Radiation: transfer by infrared waves (no medium); can travel through vacuum; dark surfaces absorb/emit better, shiny surfaces reflect.",
      "Examples: cooking pan handle (conduction), boiling water (convection), sunshine (radiation)."
    ],
    "detailedContent": "Conduction\n\nConduction occurs mainly in solids. When one part is heated, particles vibrate more and pass vibrations to neighbours. Free electrons in metals also help, making metals good conductors.\n\n- Good conductors: silver, copper, aluminium, iron.\n- Poor conductors (insulators): wood, plastic, air, wool, styrofoam.\n\nApplications: cooking pots (metal), handles (plastic/wood), clothing (air trapped).\n\nConvection\n\nConvection occurs in fluids (liquids and gases). When fluid is heated, it expands, becomes less dense, and rises. Cooler, denser fluid sinks, creating a convection current.\n\nExamples: boiling water (circular motion), air circulation in a room (radiator near floor, vents at ceiling), land/sea breezes.\n\nRadiation\n\nRadiation is heat transfer by infrared waves (electromagnetic). It does not need a medium; can travel through vacuum. All objects emit infrared; hotter objects emit more.\n\n- Dark, matt surfaces absorb and emit well.\n- Shiny, light surfaces reflect and emit poorly.\n\nExamples: solar radiation warming the Earth, feeling heat from fire without touching, thermos flask (silvered surfaces reflect heat).\n\nMalawi Example: Cooking nsima on open fire: pot gets hot by conduction; water inside by convection; you feel warmth by radiation.",
    "summary": "Conduction (solids, particle vibration), convection (fluids, currents), radiation (infrared, no medium). Metals conduct well; dark surfaces good radiators/absorbers.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Cooking Pan",
        "description": "Metal conducts heat to food; handle plastic insulator."
      },
      {
        "title": "Solar Cooker",
        "description": "Reflects radiation onto black pot."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why are cooking pots made of metal?",
        "answer": "Metals are good conductors of heat.",
        "hint": "Heat passes quickly."
      },
      {
        "question": "How does a thermos flask keep liquids hot?",
        "answer": "Vacuum stops conduction/convection; silvered surfaces reflect radiation.",
        "hint": "Multiple methods."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 1",
    "topic": "Listening and Speaking",
    "lessonNumber": 1,
    "lessonTitle": "Predicting Content from Title and Pictures",
    "lessonId": "english-f1-listening-predict-1",
    "order": 1,
    "learningObjectives": [
      "Use a title or picture to predict content of an oral text",
      "Identify the central idea from the beginning or end of an oral text"
    ],
    "introduction": "When you listen to a story or a description, you can often guess what will be said from the title or a picture. This is predicting. Today we will practise predicting and finding the main idea.",
    "keyPoints": [
      "Predicting: using clues (title, pictures, first sentence) to guess content.",
      "Central idea: the main message – often at the beginning or end.",
      "Ask: Who? What? Where? When? Why?",
      "Examples: Title \"A Rainy Day in the Village\" – expect children playing, crops being watered, etc."
    ],
    "detailedContent": "Why Predict?\n\nPredicting makes listening active. You think ahead and remember better.\n\nExample: Picture shows a group of children crossing a river with books. What might the story be about? Possibly going to school despite challenges.\n\nFinding the Central Idea\n\nListen for:\n- The opening statement – often tells the main point.\n- Repeated words or phrases.\n- The conclusion – speaker often summarises.\n\nExample: \"Chimwemwe woke up early. He fetched water. He collected firewood. Then he walked 5 km to school. He is a hardworking boy.\" Central idea: Chimwemwe is hardworking.\n\nPractice: Teacher reads a short paragraph, students identify central idea.",
    "summary": "Predict content from titles and pictures. Central idea is the main message, often at beginning or end. Listening actively improves comprehension.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "A Market Day",
        "description": "Predict from picture: many people, stalls, shouting – a description of a busy market."
      },
      {
        "title": "The Road to School",
        "description": "Predict from title: a story about walking to school, challenges, friendship."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What can you use to predict the content of a listening text?",
        "answer": "Title, pictures, first sentence",
        "hint": "Clues."
      },
      {
        "question": "Where is the central idea often found?",
        "answer": "Beginning or end of the text",
        "hint": "Introduction or conclusion."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 1",
    "topic": "Listening and Speaking",
    "lessonNumber": 2,
    "lessonTitle": "Presenting a Logical Oral Description or Narrative",
    "lessonId": "english-f1-speaking-narration-1",
    "order": 2,
    "learningObjectives": [
      "Organise a spoken description using space order, chronological order, or order of climax",
      "Present a clear, logical oral narrative based on a title or picture"
    ],
    "introduction": "When you speak, you need to organise your ideas so listeners can follow. Today we learn three ways: space order, chronological order, and order of climax.",
    "keyPoints": [
      "Space order: describe from one location to another (top to bottom, left to right, near to far).",
      "Chronological order: tell events in the order they happen (first, then, after that, finally).",
      "Order of climax: save the most exciting part for the end.",
      "Use time connectives: first, next, then, after that, finally."
    ],
    "detailedContent": "Three Ways to Organise\n\n1. Space order: Describe a place or object from one side to the other.\n   Example: \"At the front of the classroom is the blackboard. On the left are windows. On the right are posters. At the back is the door.\"\n\n2. Chronological order: Tell a story from beginning to end.\n   Example: \"First, I woke up. Then I ate breakfast. Next, I walked to school. Finally, I arrived at class.\"\n\n3. Order of climax: Start less exciting, end with the most interesting part.\n   Example: \"The tortoise walked very slowly. The hare ran fast and stopped to rest. The tortoise kept moving. In the end, the tortoise won!\"\n\nPractise: Look at a picture of a village. Describe it using space order. Then tell a story about a journey using chronological order.\n\nMalawi Example: Describe your school garden (space order: maize on left, groundnuts in middle, fence on right). Narrate your morning routine (chronological).",
    "summary": "Space order (location), chronological order (time), order of climax (save best for last). Use connectives to link ideas.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Describe a Classroom",
        "description": "Use space order: door, blackboard, seats."
      },
      {
        "title": "A Wedding Celebration",
        "description": "Use chronological order: arrival, ceremony, feast, dancing."
      }
    ],
    "practiceQuestions": [
      {
        "question": "If you describe your house from the gate to the back door, what order are you using?",
        "answer": "Space order",
        "hint": "Location sequence."
      },
      {
        "question": "What time word would you use to start a chronological narrative?",
        "answer": "First",
        "hint": "Beginning."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 1",
    "topic": "Grammar: Nouns",
    "lessonNumber": 1,
    "lessonTitle": "Common, Proper, and Collective Nouns",
    "lessonId": "english-f1-nouns-1",
    "order": 3,
    "learningObjectives": [
      "Identify nouns in sentences",
      "Classify nouns as common, proper, or collective"
    ],
    "introduction": "Everything around you has a name – a person, place, thing, or idea. That name is a NOUN. Today we learn different types of nouns.",
    "keyPoints": [
      "Common noun: general name (student, village, school).",
      "Proper noun: specific name (Chimwemwe, Lilongwe, Chichiri Secondary School). Capitalise.",
      "Collective noun: group (class, herd, team, family, choir).",
      "Examples: \"The herd of cattle grazed near the river.\" – herd (collective), cattle (common), river (common)."
    ],
    "detailedContent": "What is a Noun?\n\nA noun is a naming word: person, place, thing, or idea.\n\nCommon Nouns: name any person, place, or thing in general. Not capitalised unless start of sentence.\nExamples: man, woman, child, school, market, maize.\n\nProper Nouns: name a specific person, place, or organisation. Always capitalised.\nExamples: Malawi, Chichewa, Dr Mutharika, Lake Malawi, Kamuzu Stadium.\n\nCollective Nouns: name a group as a single unit.\nExamples: a class of students, a herd of cattle, a flock of birds, a team of players, a choir of singers, a swarm of bees.\n\nExercise: Identify noun types in \"The Ministry of Education announced new policies.\"",
    "summary": "Common nouns are general; proper nouns are specific and capitalised; collective nouns name groups.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Village Life",
        "description": "Common: farmer, bicycle, field. Proper: Mchinji, Mrs Phiri."
      },
      {
        "title": "Football Match",
        "description": "Collective: team, crowd, bench."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Identify the noun type: \"The choir sang beautifully.\"",
        "answer": "Choir – collective noun",
        "hint": "Group of singers."
      },
      {
        "question": "Is \"Malawi\" a common or proper noun?",
        "answer": "Proper",
        "hint": "Specific country."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 1",
    "topic": "Grammar: Nouns",
    "lessonNumber": 2,
    "lessonTitle": "Abstract Nouns and Plural Forms",
    "lessonId": "english-f1-nouns-2",
    "order": 4,
    "learningObjectives": [
      "Identify abstract nouns (ideas, feelings, qualities)",
      "Form plurals of regular and irregular nouns"
    ],
    "introduction": "Not all nouns name things you can touch. Love, happiness, and courage are ABSTRACT NOUNS. Today we also learn how to form plurals.",
    "keyPoints": [
      "Abstract nouns: name ideas, emotions, qualities, concepts – cannot see or touch. Examples: love, anger, sadness, bravery, honesty, education, poverty, freedom.",
      "Regular plurals: add -s (book→books), -es (class→classes), -ies (baby→babies).",
      "Irregular plurals: child→children, man→men, woman→women, tooth→teeth, foot→feet, ox→oxen, mouse→mice, sheep→sheep, fish→fish."
    ],
    "detailedContent": "Abstract Nouns\n\nThese represent things that have no physical existence.\n- Emotions: love, anger, joy, fear, sadness.\n- Qualities: bravery, honesty, loyalty, patience.\n- Concepts: freedom, justice, education, poverty, success.\n- States: childhood, friendship, marriage.\n\nYou can’t touch or see them, but you can feel or experience them.\n\nPlurals\n\nRegular:\n- Most nouns: add -s (book→books, girl→girls).\n- Nouns ending in s, sh, ch, x, z: add -es (class→classes, bush→bushes, church→churches, box→boxes).\n- Nouns ending in consonant + y: change y to i and add -es (family→families, baby→babies).\n- Nouns ending in f or fe: change to ves (leaf→leaves, knife→knives) – exceptions: roof→roofs, chief→chiefs.\n\nIrregular:\n- man→men\n- woman→women\n- child→children\n- tooth→teeth\n- foot→feet\n- goose→geese\n- ox→oxen\n- mouse→mice\n- sheep→sheep (same)\n- fish→fish (or fishes)\n- deer→deer\n\nMalawi Example: \"The courage of the young girl was inspiring.\" (courage – abstract). \"The children played in the village.\" (children – plural irregular).",
    "summary": "Abstract nouns name feelings, ideas, qualities. Regular plurals add -s or -es. Irregular plurals change form (e.g., child→children).",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Harvest Joy",
        "description": "Joy (abstract) after harvest."
      },
      {
        "title": "Cattle",
        "description": "Plural of cow is cows (regular), but oxen is irregular."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Is \"happiness\" a concrete or abstract noun?",
        "answer": "Abstract",
        "hint": "Feeling."
      },
      {
        "question": "What is the plural of \"child\"?",
        "answer": "Children",
        "hint": "Irregular."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 1",
    "topic": "Reading",
    "lessonNumber": 1,
    "lessonTitle": "Predicting and Confirming from Text",
    "lessonId": "english-f1-reading-predict-1",
    "order": 5,
    "learningObjectives": [
      "Use title, headings, and pictures to predict text content",
      "Identify the central idea after reading"
    ],
    "introduction": "Good readers predict before they read, then confirm or adjust while reading. Today we practise these skills.",
    "keyPoints": [
      "Before reading: look at title, pictures, first paragraph – predict topic, purpose, likely content.",
      "During reading: check if prediction was correct; adjust.",
      "After reading: identify central idea (main point) in one sentence.",
      "Central idea is often in the title, introduction, or conclusion."
    ],
    "detailedContent": "Steps to Predict\n\n1. Read the title.\n2. Look at any pictures or diagrams.\n3. Read the first sentence or paragraph.\n4. Make a reasonable guess about the topic and the author’s purpose.\n\nExample: Title – \"How to Plant Maize in the Rainy Season\". Predict: steps like clearing land, making ridges, planting seeds, applying fertiliser, weeding, harvesting.\n\nFinding the Central Idea\n\nAsk: What is the single most important message?\n- The title often gives it.\n- The first paragraph may state it.\n- The last paragraph may summarise it.\n\nExample: \"Chimwemwe woke early. He fetched water. He collected firewood. He walked 5 km to school. He loves learning.\" Central idea: Chimwemwe is determined to get an education.\n\nPractice: Read a short passage about Lake Malawi. Predict before reading, then write the central idea.",
    "summary": "Predict using title, pictures, first sentence. Central idea is the main message. Predicting improves comprehension.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Our Village Clinic",
        "description": "Predict services, workers, challenges."
      },
      {
        "title": "The Lake of Stars",
        "description": "Predict celebration, culture, beauty."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What clues help you predict before reading?",
        "answer": "Title, pictures, headings, first sentence",
        "hint": "Look around."
      },
      {
        "question": "Where can you often find the central idea?",
        "answer": "Title, first paragraph, or last paragraph",
        "hint": "Beginning or end."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 1",
    "topic": "Writing",
    "lessonNumber": 1,
    "lessonTitle": "Writing a Descriptive Paragraph",
    "lessonId": "english-f1-writing-description-1",
    "order": 6,
    "learningObjectives": [
      "Use space order to organise a description",
      "Include sensory details (sight, sound, smell, touch, taste)"
    ],
    "introduction": "A description paints a picture with words. Good description makes the reader see, hear, smell, feel, or taste what you are writing about. Today we practise writing descriptive paragraphs.",
    "keyPoints": [
      "Space order: describe from top to bottom, left to right, near to far, or front to back.",
      "Sensory details: sight (colours, shapes), sound (noises, quiet), smell (sweet, smoky), touch (rough, smooth), taste (sour, sweet).",
      "Use adjectives to give details: size, colour, texture, age.",
      "Plan before writing: list key features and organising order."
    ],
    "detailedContent": "What is a Descriptive Paragraph?\n\nA descriptive paragraph creates a vivid image in the reader’s mind. Use space order to avoid jumping around.\n\nExample (space order – top to bottom of a person):\n\"Chifundo is a tall boy of about fifteen. His hair is short and black. His eyes are brown and friendly. He wears a bright yellow t‑shirt and blue shorts. On his feet are worn but clean sandals.\"\n\nSensory Details\n\n- Sight: red tomatoes, green maize stalks, blue sky.\n- Sound: crowded market noise, children laughing, water splashing.\n- Smell: smoke from cooking nsima, fresh rain on dry earth.\n- Touch: smooth river stones, warm nsima, rough bark.\n- Taste: sweet mango, sour tamarind.\n\nExample (space order – left to right of a garden):\n\"On the left side of the garden are tall maize plants. In the centre are rows of onions. On the right are cabbages with broad green leaves.\"\n\nNow write a description of your classroom, your home, or a family member. Use space order and at least three sensory details.",
    "summary": "Use space order to organise. Include sensory details (sight, sound, smell, touch, taste). Plan before writing.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Describe a Maize Field",
        "description": "Use space order: near the fence, middle rows, far end. Sensory: green stalks, rustling leaves, fresh smell after rain."
      },
      {
        "title": "Describe a Grandmother",
        "description": "Top to bottom: grey hair, smiling eyes, colourful chitenje, sandals."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name three sensory details you can include.",
        "answer": "Sight, sound, smell (or touch, taste)",
        "hint": "Five senses."
      },
      {
        "question": "What organisation is best for describing a room from door to window?",
        "answer": "Space order (front to back or near to far)",
        "hint": "Location."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 1",
    "topic": "Literature: Genres",
    "lessonNumber": 1,
    "lessonTitle": "Genres of Literature: Short Story, Poetry, Play, Folktale",
    "lessonId": "english-f1-literature-genres-1",
    "order": 7,
    "learningObjectives": [
      "Define genre and list the main literary genres",
      "Identify the features of short stories, folktales, poems, and plays"
    ],
    "introduction": "Have you ever listened to a folktale told by your grandmother? Read a short story? Watched a drama? These are different GENRES. Today we learn the main types of literature.",
    "keyPoints": [
      "Genre: a category of literature with similar style and content.",
      "Short story: brief fictional narrative, few characters, one main event.",
      "Folktale: traditional oral story, often teaches a lesson, includes animals or magic.",
      "Poetry: uses rhythm, rhyme, figurative language to express feelings.",
      "Play (drama): written for performance, includes dialogue and stage directions."
    ],
    "detailedContent": "What is Genre?\n\nGenre (pronounced \"zhahn‑ruh\") means a type or category of literature.\n\nShort Story\n- Brief (can be read in one sitting).\n- Few characters.\n- One main conflict or event.\n- Simple plot.\n- Example: \"The Boy Who Cried Wolf\".\n\nFolktale\n- Traditional, passed orally.\n- Often begins \"Once upon a time…\"\n- Teaches a moral.\n- May include talking animals or magic.\n- Example: The story of Kalulu (hare) and the tortoise.\n\nPoetry\n- Uses lines and stanzas (not paragraphs).\n- Often has rhythm and rhyme.\n- Uses figurative language (simile, metaphor).\n- Expresses emotions intensely.\n- Example: \"The Lake\" by Frank Chipasula.\n\nPlay (Drama)\n- Written for stage performance.\n- Dialogue between characters.\n- Stage directions (in brackets).\n- Divided into acts and scenes.\n- Example: school drama about African independence.\n\nMalawi writers: Steve Chimombo (poet, playwright), Jack Mapanje (poet), Legson Kayira (novelist).",
    "summary": "Genre is a type of literature. Short story: brief fiction. Folktale: traditional oral. Poetry: rhythm, imagery. Play: dialogue, performance.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Folktale of Kalulu",
        "description": "Trickster stories teach lessons."
      },
      {
        "title": "School Drama",
        "description": "A play about a girl who wants to become a doctor."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What genre is best for a story with many characters and a complex plot?",
        "answer": "Novel (longer) – but from those listed, short story is too short.",
        "hint": "Longer fiction."
      },
      {
        "question": "Name one feature of a play.",
        "answer": "Dialogue, stage directions, acts, scenes",
        "hint": "Performance."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 2",
    "topic": "Grammar: Verbs and Tenses",
    "lessonNumber": 1,
    "lessonTitle": "Action and Linking Verbs – Present and Past Tenses",
    "lessonId": "english-f2-verbs-1",
    "order": 8,
    "learningObjectives": [
      "Identify action verbs and linking verbs (be, seem, become)",
      "Use simple present and simple past tenses correctly"
    ],
    "introduction": "Verbs are the engines of sentences – they show action or state of being. Today we learn about action vs linking verbs and the simple present and past tenses.",
    "keyPoints": [
      "Action verb: shows physical or mental action (run, eat, think).",
      "Linking verb: connects subject to description (am, is, are, was, were, seem, become).",
      "Simple present: used for habits, facts, general truths (I walk, she walks).",
      "Simple past: used for completed actions (I walked, she went).",
      "Regular past: add -ed. Irregular past: change form (go→went, buy→bought)."
    ],
    "detailedContent": "Action vs Linking Verbs\n\nAction verbs describe something the subject does.\nExamples: run, eat, read, plant, sell, think, believe.\n\nLinking verbs describe what the subject is (state of being).\nCommon linking verbs: am, is, are, was, were, seem, appear, become, feel, look, taste.\nExamples: \"She is a teacher.\" (not action) \"The food tastes good.\" (tastes – linking, not action).\n\nSimple Present Tense\n- Used for habits, routines, facts, general truths.\n- Form: base verb for I, you, we, they. Add -s or -es for he, she, it.\n- Examples: I walk to school. She walks to school. The sun rises in the east.\n\nSimple Past Tense\n- Used for actions completed in the past.\n- Regular: add -ed (walk→walked, plant→planted).\n- Irregular: change (go→went, buy→bought, teach→taught).\n- Examples: Yesterday I walked 5 km. Last week she sold groundnuts.\n\nMalawi Example: \"The farmer plants maize every November.\" (present habit). \"Last year, the rains started late.\" (past).",
    "summary": "Action verbs show activity; linking verbs show state. Simple present for habits, past for completed actions. Irregular verbs change form.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Daily Routine",
        "description": "I wake up at 5 am every day (present)."
      },
      {
        "title": "Last Year’s Harvest",
        "description": "We harvested 10 bags of maize (past)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Correct the verb: \"He go to school yesterday.\"",
        "answer": "He went to school yesterday.",
        "hint": "Past tense irregular."
      },
      {
        "question": "Identify the linking verb: \"The nsima tastes delicious.\"",
        "answer": "tastes",
        "hint": "Describes the nsima."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 2",
    "topic": "Grammar: Verbs and Tenses",
    "lessonNumber": 2,
    "lessonTitle": "Future Tense and Subject‑Verb Agreement",
    "lessonId": "english-f2-verbs-2",
    "order": 9,
    "learningObjectives": [
      "Form simple future tense (will + base verb)",
      "Apply subject‑verb agreement (singular subject – singular verb)"
    ],
    "introduction": "How do you talk about tomorrow? Use the future tense. Also, make sure your subject and verb match in number. Today we cover these.",
    "keyPoints": [
      "Simple future: will + base verb (I will plant, they will harvest).",
      "Also: going to (less formal).",
      "Subject‑verb agreement: singular subject takes singular verb (adds -s); plural subject takes plural verb (no -s).",
      "Be careful with irregular verbs (to be: I am, you are, he/she/it is, we are, they are)."
    ],
    "detailedContent": "Simple Future Tense\n\nUsed for actions that will happen later.\nForm: will + base verb (without to). No change for person.\n\nExamples:\n- I will plant maize next week.\n- She will sell vegetables at the market.\n- The rains will come soon.\n- We will finish weeding tomorrow.\n\nAlternative: \"going to\" – I am going to plant maize next week.\n\nSubject‑Verb Agreement\n\nThe verb must match the subject in number (singular or plural).\n\nSingular subjects (he, she, it, the boy, the teacher):\n- He runs fast.\n- The teacher explains the lesson.\n- Each student has a book.\n\nPlural subjects (they, we, the boys, the teachers):\n- They run fast.\n- The teachers explain the lesson.\n- All students have books.\n\nIrregular \"to be\":\n- I am, you are, he/she/it is, we are, they are.\n- Past: I was, you were, he was, we were.\n\nCollective nouns (team, family, government) can be singular or plural depending on meaning – usually singular in British English: The team is playing well.\n\nMalawi Example: \"The farmer (singular) uses fertiliser. The farmers (plural) use fertiliser.\"",
    "summary": "Future tense: will + verb. Subject‑verb agreement: singular subject → singular verb (adds -s); plural subject → plural verb.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Next Season Plan",
        "description": "I will plant maize and groundnuts (future)."
      },
      {
        "title": "Agreement",
        "description": "The child plays (singular); the children play (plural)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Fill in: \"They ___ (to go) to the market tomorrow.\"",
        "answer": "will go",
        "hint": "Future."
      },
      {
        "question": "Correct: \"The boy with his friends walk to school.\"",
        "answer": "The boy with his friends walks to school (subject is boy, singular).",
        "hint": "Ignore \"with his friends\"."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 2",
    "topic": "Reading: Fact and Opinion",
    "lessonNumber": 1,
    "lessonTitle": "Distinguishing Fact from Opinion",
    "lessonId": "english-f2-reading-fact-opinion-1",
    "order": 10,
    "learningObjectives": [
      "Define fact and opinion and give examples",
      "Identify facts and opinions in written texts"
    ],
    "introduction": "Not everything you read is true – you must decide if it is a FACT (can be proven) or OPINION (someone’s belief). Today we learn to tell the difference.",
    "keyPoints": [
      "Fact: statement that can be proven true or false (data, observation, documents).",
      "Opinion: statement that expresses belief, feeling, judgement. Cannot be proven.",
      "Signal words for opinion: believe, think, feel, should, best, worst, beautiful, ugly, probably, maybe.",
      "Facts often include numbers, dates, measurements."
    ],
    "detailedContent": "What is a Fact?\n\nA fact is something known to be true. It can be verified with evidence.\n\nExamples:\n- Malawi became independent in 1964.\n- Lake Malawi is the third largest lake in Africa.\n- Maize is a staple food in Malawi.\n- The sun rises in the east.\n\nWhat is an Opinion?\n\nAn opinion is a belief or judgement. It cannot be proven.\n\nExamples:\n- Lake Malawi is the most beautiful lake in Africa.\n- Maize tastes better than rice.\n- Everyone should learn to speak Chichewa.\n- The new school building is ugly.\n\nWhy is it important to distinguish?\n- In news, separate facts from reporter’s bias.\n- In advertising, recognise opinions disguised as facts.\n- In discussions, facts are not debatable; opinions are.\n\nSignal Words for Opinions\nbelieve, think, feel, consider, should, ought, best, worst, greatest, wonderful, terrible, probably, maybe.\n\nPractice: Read the following sentences and say Fact or Opinion.\n1. \"The capital city of Malawi is Lilongwe.\" (Fact)\n2. \"Lilongwe is a very clean city.\" (Opinion)\n3. \"Over 15 million people live in Malawi.\" (Fact – can be checked)\n4. \"Every child should have a bicycle.\" (Opinion)",
    "summary": "Facts can be proven true. Opinions are personal beliefs. Signal words (believe, think, best) often indicate opinions. Distinguish to think critically.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Weather Report",
        "description": "\"Temperature 28°C\" (fact) vs \"It is a very hot day\" (opinion)."
      },
      {
        "title": "Football Match",
        "description": "\"The Flames won 1‑0\" (fact) vs \"They played brilliantly\" (opinion)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Is \"Bananas are the best fruit\" a fact or opinion?",
        "answer": "Opinion",
        "hint": "\"best\" shows judgement."
      },
      {
        "question": "Give two signal words for opinion.",
        "answer": "believe, think, should, best, worst",
        "hint": "Subjective."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 2",
    "topic": "Writing: Factual Description",
    "lessonNumber": 1,
    "lessonTitle": "Writing an Objective Factual Description",
    "lessonId": "english-f2-writing-factual-1",
    "order": 11,
    "learningObjectives": [
      "Plan a factual description of a place, process, or object",
      "Use objective language (no personal opinions) and organise logically"
    ],
    "introduction": "A factual description explains something objectively – without opinions or emotions. Examples: how to prepare a garden, parts of a bicycle, layout of a school. Today we learn to write one.",
    "keyPoints": [
      "Factual description: uses only facts, no personal feelings.",
      "Use present tense for general descriptions, past for historical.",
      "Organise by space order, chronological order, or function.",
      "Avoid judgemental adjectives (beautiful, ugly, wonderful). Use neutral adjectives (red, wooden, 3 metres tall).",
      "Include measurable details: size, colour, material, steps."
    ],
    "detailedContent": "What is a Factual Description?\n\nA factual description tells what something is like using objective information. It is used in science reports, textbooks, leaflets.\n\nDo NOT include:\n- Opinions (\"it is beautiful\")\n- Emotions (\"I love it\")\n- Unverifiable comparisons (\"it is the best\")\n\nDO include:\n- Measurements (length, height, weight)\n- Colour, shape, material\n- Functions (what it does)\n- Steps (if a process)\n\nExample (Opinionated): \"The market is a fantastic place with wonderful smells and friendly people.\"\n\nExample (Factual): \"The market has fifty stalls. It sells vegetables, fish, cloth, and household items. The market opens at 6 am and closes at 6 pm every day except Sunday.\"\n\nOrganisation\n\n- For a place: space order (from entrance to back, left to right).\n- For a process: chronological order (step 1, 2, 3).\n- For an object: describe parts and functions.\n\nExample: Factual description of a bicycle\n\"A bicycle has two wheels, a frame, handlebars, a saddle, pedals, and a chain. The front wheel is used for steering. The pedals turn the chain, which turns the rear wheel to move the bicycle forward. Bicycles are often made of steel or aluminium. They have brakes on the handlebars to slow down.\"\n\nNow write a factual description of a school classroom, a maize granary (nkhokwe), or a traditional fishing boat (bwato) on Lake Malawi. Use neutral language and logical order.",
    "summary": "Factual description uses objective facts, not opinions. Include measurements, colours, functions, steps. Organise by space, time, or purpose. Avoid judgemental adjectives.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "A Village Well",
        "description": "Describe its depth, structure, how water is drawn, materials used."
      },
      {
        "title": "Making Nsima",
        "description": "List steps: boil water, add maize flour, stir, cook until firm."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of language should you avoid in a factual description?",
        "answer": "Opinions and emotions (beautiful, wonderful, I think)",
        "hint": "Stay objective."
      },
      {
        "question": "What two ways can you organise a factual description?",
        "answer": "Space order or chronological order",
        "hint": "Location or time."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 2",
    "topic": "Literature: Literary Devices",
    "lessonNumber": 1,
    "lessonTitle": "Simile, Metaphor, and Personification",
    "lessonId": "english-f2-literature-devices-1",
    "order": 12,
    "learningObjectives": [
      "Define simile, metaphor, and personification",
      "Identify these devices in poems, songs, and stories"
    ],
    "introduction": "Have you ever said, \"He runs like a cheetah\" or \"Time is money\"? Those are SIMILES and METAPHORS. These devices make language vivid. Today we learn three powerful literary devices.",
    "keyPoints": [
      "Simile: compares two things using \"like\" or \"as\" (e.g., \"as brave as a lion\", \"runs like the wind\").",
      "Metaphor: compares by saying one thing is the other (e.g., \"He is a lion in battle\", \"The world is a stage\").",
      "Personification: gives human qualities to non‑human things (e.g., \"The wind whispered\", \"The sun smiled\").",
      "These devices create imagery – mental pictures – and add emotion."
    ],
    "detailedContent": "Simile\n\nA simile makes a comparison using the words \"like\" or \"as\". It says one thing is similar to another.\n\nExamples:\n- \"Her smile is like sunshine.\"\n- \"He fought like a lion.\"\n- \"The nsima was as soft as a pillow.\"\n\nMetaphor\n\nA metaphor also compares two things, but it says one thing IS the other (without \"like\" or \"as\"). It is more direct.\n\nExamples:\n- \"The road was a ribbon of moonlight.\"\n- \"He is a snake.\" (meaning treacherous)\n- \"Her heart is stone.\" (unemotional)\n\nPersonification\n\nPersonification gives human traits (actions, emotions, speech) to animals, objects, or ideas.\n\nExamples:\n- \"The wind whispered through the trees.\"\n- \"The angry storm pounded the village.\"\n- \"Time flies when you are having fun.\"\n\nIdentifying Devices\n\nRead this short poem:\n\"The moon is a silver coin (metaphor). It smiles down on the sleeping village (personification). The stars twinkle like tiny diamonds (simile).\"\n\nIn Malawi, traditional songs often use personification: \"The river dances, the mountain sings.\" These devices make language beautiful and memorable.\n\nNow write three sentences: one with a simile, one with a metaphor, one with personification. Use a village, lake, or farm theme.",
    "summary": "Simile uses like/as to compare; metaphor says one thing is another; personification gives human qualities to non‑human things. They create imagery and emotion.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Lake Malawi",
        "description": "Simile: \"The lake is as blue as the sky.\" Metaphor: \"The lake is a giant’s mirror.\" Personification: \"The waves dance to the shore.\""
      },
      {
        "title": "Harvest Time",
        "description": "Simile: \"The maize stalks stand like soldiers.\" Personification: \"The land rejoices when the rains come.\""
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between a simile and a metaphor?",
        "answer": "Simile uses \"like\" or \"as\"; metaphor says one thing is another.",
        "hint": "Direct vs indirect."
      },
      {
        "question": "Identify the device: \"The old car coughed and wheezed.\"",
        "answer": "Personification",
        "hint": "Gives car human actions."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 2",
    "topic": "Listening for Main Ideas",
    "lessonNumber": 1,
    "lessonTitle": "Distinguishing Major and Minor Details",
    "lessonId": "english-f2-listening-main-ideas-1",
    "order": 13,
    "learningObjectives": [
      "Listen to identify the central idea, major supporting points, and minor details",
      "Take notes using keywords while listening"
    ],
    "introduction": "When you listen, not all information is equally important. The central idea is the main message, major points support it, and minor details fill out. Today we learn to listen and take notes efficiently.",
    "keyPoints": [
      "Central idea: the main message of the whole text (one sentence).",
      "Major supporting points: key arguments or events that develop the central idea.",
      "Minor details: examples, explanations, extra information that support major points.",
      "While listening, write keywords and phrases – not full sentences.",
      "Listen for signal words: first, second, most important, for example, in conclusion."
    ],
    "detailedContent": "Listening for Structure\n\nEvery good speech or article has:\n- Introduction: states the central idea.\n- Body: major points with supporting details.\n- Conclusion: restates the central idea.\n\nHow to Take Notes\n\nDo not write full sentences. Use abbreviations and symbols.\n\nExample central idea: \"Rainwater harvesting can solve water shortages in our village.\"\n\nMajor points:\n- Collecting rain from roofs\n- Storing in tanks\n- Using for irrigation\n\nMinor details:\n- Roof gutters cost about 30,000 MK\n- Tanks can be made from concrete or plastic\n- Vegetables need water every two days\n\nExample Listening Exercise\n\nListen to this short talk (teacher reads aloud):\n\n\"Good morning. Today I want to explain three ways to improve soil fertility on your farm. First, you can use compost. Compost is made from decaying leaves, kitchen waste, and animal manure. Second, you can plant legumes like groundnuts or beans. Legumes add nitrogen to the soil. Third, you can apply manure from cattle or goats. Manure provides nutrients and improves soil structure. By using these three methods, you will increase maize yields.\"\n\nNow answer:\n- Central idea: Ways to improve soil fertility.\n- Major points: compost, legumes, manure.\n- Minor details: materials for compost, what legumes do, sources of manure.\n\nPractise with a partner: one speaks for one minute about a familiar topic (e.g., how to prepare nsima). The other listens and takes notes, then summarises.",
    "summary": "Listen for central idea (main message), major points (key arguments), minor details (examples). Take notes with keywords. Distinguishing importance improves comprehension.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Radio News on Agriculture",
        "description": "Listen to a brief news item on farm input subsidy and identify the main announcement."
      },
      {
        "title": "Teacher’s Lesson Introduction",
        "description": "Note the objectives and key points at the beginning of a lesson."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between a major point and a minor detail?",
        "answer": "Major points are key arguments; minor details give examples or extra information for major points.",
        "hint": "Importance level."
      },
      {
        "question": "What should you write while taking notes?",
        "answer": "Keywords and phrases, not full sentences.",
        "hint": "Be efficient."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 3",
    "topic": "Grammar: Adverbs and Adjectives",
    "lessonNumber": 1,
    "lessonTitle": "Adjectives and Their Order",
    "lessonId": "english-f3-adjectives-1",
    "order": 14,
    "learningObjectives": [
      "Identify adjectives and use them to describe nouns",
      "Place adjectives in the correct order before a noun (opinion, size, age, shape, colour, origin, material, purpose)"
    ],
    "introduction": "Adjectives describe nouns – they tell us more about a person, place, or thing. But when you use several adjectives, they must go in a certain order. Today we learn that order.",
    "keyPoints": [
      "Adjective: modifies a noun (big house, happy child).",
      "Order of adjectives: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose.",
      "Example: a beautiful small old round black Malawian wooden cooking pot.",
      "Usually use only two or three adjectives in a sentence."
    ],
    "detailedContent": "What are Adjectives?\n\nAdjectives describe nouns. They answer: What kind? Which one? How many?\n\nExamples: green mango, three goats, interesting story.\n\nPlace adjective before noun: \"a tall boy\" (not \"a boy tall\").\n\nOrder of Adjectives\n\nWhen you use more than one adjective, follow this sequence:\n\n1. Opinion (lovely, ugly, nice)\n2. Size (big, small, huge)\n3. Age (old, new, young)\n4. Shape (round, square, thin)\n5. Colour (red, blue, black)\n6. Origin (Malawian, Chinese, African)\n7. Material (wooden, plastic, iron)\n8. Purpose (cooking, sleeping, farming)\n\nExamples:\n- A beautiful (opinion) large (size) old (age) round (shape) black (colour) Malawian (origin) wooden (material) cooking (purpose) pot.\n- A lovely (opinion) small (size) new (age) yellow (colour) plastic (material) container.\n\nIn practice, we rarely use so many. Two or three is enough.\n\nMalawi Examples:\n- fertile soil, heavy rain, local chicken, fresh maize.\n\nNow write five sentences using two or three adjectives in the correct order.",
    "summary": "Adjectives describe nouns. Order: opinion, size, age, shape, colour, origin, material, purpose. Use two or three at most.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Market Scene",
        "description": "fresh red tomatoes, large green cabbages, friendly local vendors."
      },
      {
        "title": "Travel by Minibus",
        "description": "crowded noisy minibus, winding dusty road."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Correct the order: \"a wooden beautiful small table.\"",
        "answer": "a beautiful small wooden table",
        "hint": "Opinion, size, material."
      },
      {
        "question": "What type of adjective is \"Malawian\"?",
        "answer": "Origin",
        "hint": "Where from."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 3",
    "topic": "Grammar: Adverbs and Adjectives",
    "lessonNumber": 2,
    "lessonTitle": "Adverbs: Types and Usage",
    "lessonId": "english-f3-adverbs-1",
    "order": 15,
    "learningObjectives": [
      "Define adverbs and identify types: manner, time, place, frequency, degree",
      "Use adverbs to modify verbs, adjectives, and other adverbs"
    ],
    "introduction": "Adverbs answer How? When? Where? How often? How much? They modify verbs, adjectives, or other adverbs. Today we learn the types and how to use them.",
    "keyPoints": [
      "Adverb of manner: how (quickly, carefully, happily).",
      "Adverb of time: when (yesterday, soon, now).",
      "Adverb of place: where (there, everywhere, outside).",
      "Adverb of frequency: how often (always, often, never).",
      "Adverb of degree: how much (very, quite, too, almost)."
    ],
    "detailedContent": "What is an Adverb?\n\nAn adverb modifies a verb, an adjective, or another adverb. Often ends in -ly.\n\nTypes\n\n1. Manner (how): She ran quickly. He spoke softly.\n2. Time (when): He arrived yesterday. We will start soon.\n3. Place (where): Put it there. She looked everywhere.\n4. Frequency (how often): They often visit. I always wake early.\n5. Degree (how much): The water is very hot. It is too cold. He is almost ready.\n\nUsing Adverbs\n\n- To modify a verb: The farmer carefully plants the seeds.\n- To modify an adjective (very clever): She is extremely smart.\n- To modify another adverb (very quickly): He drives very slowly.\n\nComparative and Superlative of Adverbs\n\n- Most adverbs: use more/most (quickly → more quickly → most quickly).\n- Some one‑syllable: fast → faster → fastest.\n- Irregular: well → better → best; badly → worse → worst.\n\nExamples of adverbs in sentences:\n- The students listened attentively (manner).\n- The market opens early (time).\n- The children played outside (place).\n- He always arrives on time (frequency).\n- The nsima is extremely hot (degree).",
    "summary": "Adverbs modify verbs, adjectives, other adverbs. Types: manner, time, place, frequency, degree. Many end in -ly. Comparative: more/most (for longer adverbs).",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Market Scene",
        "description": "The women laugh loudly (manner). They sell quickly (manner)."
      },
      {
        "title": "Travel by Minibus",
        "description": "The driver drives carefully (manner). Passengers arrive safely (manner)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Correct the sentence: \"She danced beautiful.\"",
        "answer": "She danced beautifully.",
        "hint": "Adverb needed."
      },
      {
        "question": "Identify the adverb type: \"We will meet tomorrow.\"",
        "answer": "Time",
        "hint": "When."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 3",
    "topic": "Reading: Text Structure",
    "lessonNumber": 1,
    "lessonTitle": "Comparison, Contrast, and Enumeration",
    "lessonId": "english-f3-reading-structure-1",
    "order": 16,
    "learningObjectives": [
      "Identify comparison (similarities) and contrast (differences) structures using signal words",
      "Recognise enumeration (listing) of points"
    ],
    "introduction": "Writers organise ideas in different ways: sometimes they compare, sometimes they contrast, sometimes they list points. Recognising the structure helps you understand and remember the content. Today we learn three common structures.",
    "keyPoints": [
      "Comparison (similarities): shows how things are alike. Signal words: similarly, likewise, both, also, in the same way.",
      "Contrast (differences): shows how things are different. Signal words: however, but, on the other hand, whereas, unlike, in contrast.",
      "Enumeration (listing): presents ideas in a list or sequence. Signal words: first, second, third, next, then, finally, also, another."
    ],
    "detailedContent": "Comparison Structure\n\nWhen a writer compares two things, they explain their similarities.\n\nExample paragraph (Comparison):\n\"Traditional maize farming and conservation agriculture have some similarities. Both methods require land preparation before planting. Similarly, both need weeding to remove unwanted plants. Also, both can produce good yields if managed well.\"\n\nSignal words: both, similarly, also, likewise.\n\nContrast Structure\n\nWhen a writer contrasts, they explain differences.\n\nExample paragraph (Contrast):\n\"Maize farming in the lowlands differs from farming in the highlands. In the lowlands, soils are sandy and drain quickly. On the other hand, highland soils are clayey and retain water. Also, lowland farmers may face more pests, whereas highland farmers struggle with lower temperatures.\"\n\nSignal words: on the other hand, whereas, however, unlike.\n\nEnumeration Structure\n\nWhen a writer lists points, they use numbers or sequence words.\n\nExample paragraph (Enumeration):\n\"There are three benefits of using compost. First, compost adds nutrients to the soil. Second, it improves soil structure, allowing roots to grow easily. Third, compost reduces the need for expensive chemical fertilisers.\"\n\nSignal words: first, second, third, next, then, finally, another.\n\nPractice: Read a short text from a newspaper or textbook. Identify the structure and circle signal words.",
    "summary": "Comparison: similarities (both, similarly). Contrast: differences (however, whereas). Enumeration: listing (first, second, third). Recognising structure aids comprehension.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Comparing MH30 and MH37 maize",
        "description": "Both are hybrids; both need fertiliser; similar yield. (Comparison)"
      },
      {
        "title": "Flames vs Eagles",
        "description": "The Flames attacked early; the Eagles defended strong – however, the Flames scored first. (Contrast)"
      }
    ],
    "practiceQuestions": [
      {
        "question": "What signal words would you look for in a contrast paragraph?",
        "answer": "However, but, on the other hand, whereas, unlike, in contrast",
        "hint": "Opposite."
      },
      {
        "question": "A paragraph begins with \"First...\" then \"Second...\". What structure is it?",
        "answer": "Enumeration (listing)",
        "hint": "Sequence numbers."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 3",
    "topic": "Writing: Expositions and Arguments",
    "lessonNumber": 1,
    "lessonTitle": "Structure of an Exposition",
    "lessonId": "english-f3-exposition-1",
    "order": 17,
    "learningObjectives": [
      "Define an exposition (explaining an idea)",
      "Write a short exposition with introduction, body (points + evidence), conclusion"
    ],
    "introduction": "When you explain why something is true, you write an EXPOSITION. It has an introduction, a body with points and evidence, and a conclusion. Today we learn this structure.",
    "keyPoints": [
      "Exposition: explains a topic or idea without necessarily persuading; uses facts.",
      "Structure: Introduction (state your position/topic), Body (each paragraph one main point + evidence), Conclusion (restate and summarise).",
      "Use connectives: first, second, also, however, therefore, in conclusion."
    ],
    "detailedContent": "Structure of an Exposition\n\nIntroduction (paragraph 1)\n- Hook (interesting first sentence).\n- Background (brief context).\n- Thesis statement (your main idea).\n\nBody (2‑4 paragraphs)\n- Each paragraph has a topic sentence (one main point).\n- Supporting sentences: evidence, examples, reasons.\n- Use connectives to link ideas.\n\nConclusion (last paragraph)\n- Restate thesis in different words.\n- Summarise main points.\n- End with a strong final sentence.\n\nConnectives\n- Adding points: first, second, also, in addition, furthermore.\n- Contrast: however, on the other hand, although.\n- Cause/effect: therefore, consequently, as a result.\n- Conclusion: in conclusion, to sum up, finally.\n\nExample Exposition: \"Why Conservation Agriculture is Beneficial\"\n\nIntroduction: Conservation agriculture (CA) is a farming method that reduces soil tillage and maintains ground cover. CA is beneficial for Malawian smallholder farmers because it saves labour, protects soil, and increases yields.\n\nBody paragraph 1 (labour): First, CA reduces labour. Instead of ploughing many times, farmers only make planting holes. This saves time and energy.\n\nBody paragraph 2 (soil): Second, CA protects soil. Leaving crop residues as mulch prevents erosion and keeps moisture.\n\nBody paragraph 3 (yields): Third, CA increases yields. Research from Chitedze Research Station shows that maize yields under CA are 20‑30% higher after a few years.\n\nConclusion: In conclusion, conservation agriculture offers labour savings, soil protection, and higher yields. Malawian farmers who adopt CA can improve their food security.\n\nNow write an exposition on \"The Importance of Breakfast\" or \"Why We Should Plant Trees\". Follow the structure.",
    "summary": "Exposition explains an idea. Structure: Introduction (thesis), Body (points + evidence), Conclusion (restate + summarise). Use connectives.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Benefits of Crop Rotation",
        "description": "Exposition explaining how rotating maize with groundnuts improves soil."
      },
      {
        "title": "Importance of Hand Washing",
        "description": "Exposition for health talk."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What are the three main parts of an exposition?",
        "answer": "Introduction, body, conclusion",
        "hint": "Classic essay."
      },
      {
        "question": "Give a sentence starter for a conclusion.",
        "answer": "In conclusion, To sum up, Finally",
        "hint": "Closing."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 3",
    "topic": "Writing: Expositions and Arguments",
    "lessonNumber": 2,
    "lessonTitle": "Writing an Argument (Persuasive)",
    "lessonId": "english-f3-argument-1",
    "order": 18,
    "learningObjectives": [
      "Distinguish an argument from an exposition",
      "Write a persuasive argument with a clear point of view and call to action"
    ],
    "introduction": "An argument aims to persuade the reader to take a position or action. It has the same basic structure as an exposition but includes a call to action. Today we learn to write persuasively.",
    "keyPoints": [
      "Argument: tries to convince the reader to agree or act.",
      "Structure: Introduction (state your position), Body (points with evidence), Conclusion (restate position + call to action).",
      "Use persuasive language: must, should, important, essential, imagine, think of the children.",
      "Provide evidence: facts, statistics, examples from reliable sources."
    ],
    "detailedContent": "Exposition vs Argument\n\n- Exposition explains; argument persuades. Both explain, but argument aims to convince.\n- An argument ends with a call to action (what the reader should do).\n\nStructure (same as exposition but with call to action)\n\nIntroduction: state your position clearly. Example: \"Plastic bags should be banned in our community.\"\n\nBody paragraphs: each with a reason and evidence. Example: \"First, plastic bags clog drains and cause flooding. In Lilongwe, drainage problems increased after plastic bags piled up.\"\n\nConclusion: restate position and call to action. Example: \"Therefore, I urge local leaders to ban single‑use plastics. Let us be the change.\"\n\nExample Argument: \"Why Girls Should Stay in School\"\n\nIntroduction: Educating girls is one of the best investments a community can make. I strongly believe that every girl should complete at least secondary school.\n\nBody 1 (economic): First, educated women earn higher incomes. According to the World Bank, each additional year of schooling increases a girl’s future earnings by 10‑15%.\n\nBody 2 (health): Second, educated women have healthier families. They marry later, have fewer children, and know about nutrition and immunisation.\n\nBody 3 (community): Third, educated girls become leaders. They participate in local councils, start businesses, and inspire others.\n\nConclusion: In conclusion, educating girls benefits everyone – families, communities, and the nation. I call on parents, teachers, and community leaders to keep every girl in school.\n\nNow write an argument on \"Why Farmers Should Use Organic Manure Instead of Chemical Fertilisers\" or \"Why Everyone Should Plant at Least One Tree This Year\". Include a call to action.",
    "summary": "Argument persuades; ends with call to action. Structure: intro (position), body (reasons + evidence), conclusion (restate + call to action). Use persuasive language.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Hand Washing at School",
        "description": "Persuade students to wash hands before meals."
      },
      {
        "title": "Support Local Farmers",
        "description": "Persuade people to buy from nearby markets."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the main difference between an exposition and an argument?",
        "answer": "Argument persuades and includes a call to action; exposition explains.",
        "hint": "Purpose."
      },
      {
        "question": "What sentence would you add at the end of an argument?",
        "answer": "Call to action (e.g., \"So please join us in this campaign.\")",
        "hint": "Tell reader what to do."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 3",
    "topic": "Literature: Short Story",
    "lessonNumber": 1,
    "lessonTitle": "Plot, Character, Setting, Theme",
    "lessonId": "english-f3-literature-short-story-1",
    "order": 19,
    "learningObjectives": [
      "Identify the four elements of a short story: plot, character, setting, theme",
      "Describe the stages of plot (exposition, rising action, climax, falling action, resolution)"
    ],
    "introduction": "A short story is a window into a life. It has key ingredients: PLOT (what happens), CHARACTER (who it happens to), SETTING (where and when), and THEME (deep meaning). Today we learn these elements.",
    "keyPoints": [
      "Plot: sequence of events – exposition, rising action, climax, falling action, resolution.",
      "Character: people or animals; protagonist (main), antagonist (opponent).",
      "Setting: time and place; can influence characters and events.",
      "Theme: central message or lesson about life."
    ],
    "detailedContent": "Plot – The Storyline\n\n- Exposition: introduces characters, setting, background.\n- Rising action: conflict appears; tension increases.\n- Climax: turning point; most exciting moment.\n- Falling action: events after climax; tensions ease.\n- Resolution: problem solved; story ends.\n\nExample: A boy loses his goat (exposition). He searches everywhere (rising action). He finds the goat trapped in a bush (climax). He frees it and goes home (falling action). He thanks his friend who helped (resolution).\n\nCharacter\n\n- Protagonist: main character (often changes by end).\n- Antagonist: opponent or cause of conflict.\n- Flat vs round: flat = few traits; round = complex.\n\nSetting\n\n- Place: village, school, forest.\n- Time: day, night, 1990s.\n- Weather, social environment (poverty, peace).\nSetting creates mood and influences choices.\n\nTheme\n\nThe central idea the writer wants to communicate. Not the plot. Examples:\n- Hard work leads to success.\n- Greed causes suffering.\n- Family is more important than money.\n\nTo find theme, ask: What does the protagonist learn? What is the author trying to say about life?\n\nMalawi Example: A story about a girl who walks 5 km to school every day because she wants to become a nurse. Plot shows struggles (river crossing, no shoes). Theme: Determination overcomes obstacles.\n\nNow read a short story (e.g., from \"An Anthology of Malawian Literature\") and identify the four elements.",
    "summary": "Short stories have plot (events), character (people), setting (time/place), theme (message). Plot: exposition, rising action, climax, falling action, resolution.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "The Boy Who Cried Wolf",
        "description": "Plot: boy lies, villagers ignore, wolf comes. Theme: honesty is important."
      },
      {
        "title": "A Village Wedding",
        "description": "Setting: Malawi village during harvest. Characters: bride, groom, elders. Theme: community unity."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the climax of a story?",
        "answer": "Turning point, most exciting moment",
        "hint": "Peak of tension."
      },
      {
        "question": "Explain the difference between plot and theme.",
        "answer": "Plot is what happens; theme is the message or lesson.",
        "hint": "Event vs meaning."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 4",
    "topic": "Critical Listening",
    "lessonNumber": 1,
    "lessonTitle": "Analysing Bias, Attitude, and Truth",
    "lessonId": "english-f4-listening-bias-1",
    "order": 20,
    "learningObjectives": [
      "Identify bias and attitude in oral texts",
      "Distinguish between fact, opinion, rumour, speculation, and evidence"
    ],
    "introduction": "Not everything you hear is true or fair. A speaker might exaggerate, leave out facts, or express strong feelings that cloud judgement. Today we learn to listen critically – to detect bias and weigh evidence.",
    "keyPoints": [
      "Bias: unfair preference for or against something. Signal words: obviously, everyone knows, clearly.",
      "Attitude: speaker’s emotion (anger, joy, sarcasm, doubt). Tone and word choice reveal attitude.",
      "Fact: verifiable statement. Opinion: personal belief. Rumour: unverified story. Speculation: guess without evidence. Evidence: data supporting a claim.",
      "Critical listening means questioning: Who is speaking? What is their agenda? Is there proof?"
    ],
    "detailedContent": "What is Bias?\n\nBias means leaning towards one side without a fair reason. Biased speaker ignores facts that do not support their view.\n\nExample of biased language: \"It is obvious that our candidate is the best. No reasonable person would vote for the other.\"\n\nHow to detect bias:\n- Look for extreme words: always, never, impossible, every, none.\n- Notice when the speaker attacks a person instead of an argument (ad hominem).\n- Check if only one side is presented.\n\nAttitude\n\nAttitude is the speaker's feeling. It can be positive (enthusiastic) or negative (angry, fearful). Sarcasm indicates attitude.\n\nExample: \"Oh, wonderful, another tax increase.\" (sarcasm, not genuine happiness).\n\nDistinguishing Fact, Opinion, Rumour, Speculation, Evidence\n\n| Type | Definition | Example |\n|------|------------|---------|\n| Fact | Can be proven | \"Maize is grown in 80% of Malawian farms.\" |\n| Opinion | Personal belief | \"Maize is tastier than rice.\" |\n| Rumour | Unverified information | \"I heard the school will close next month.\" |\n| Speculation | Guess based on incomplete info | \"Probably the rains will start next week.\" |\n| Evidence | Data or testimony supporting a claim | \"According to the Ministry of Agriculture, maize production increased by 10%.\" |\n\nTo evaluate truth, ask: Is there evidence? Who collected it? Is the source reliable? Could there be another explanation?\n\nMalawi Example: Listen to a political speech on the radio. Identify one biased statement and one fact. Compare with what you know. Also, evaluate a rumour about food prices – what evidence would you need?",
    "summary": "Critical listening detects bias (unfair favouring), attitude (emotion), and distinguishes fact from opinion, rumour, speculation. Evaluate claims by asking for evidence and checking sources.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Political Rally Speech",
        "description": "Identify biased language (\"clearly better\", \"everyone knows\") and fact vs opinion."
      },
      {
        "title": "Neighbourhood Rumour",
        "description": "Distinguish rumour from evidence: \"I heard the borehole is broken\" – did anyone check?"
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between a fact and a rumour?",
        "answer": "A fact can be verified; a rumour is unverified and often spreads without evidence.",
        "hint": "Truth vs hearsay."
      },
      {
        "question": "Give an example of a sentence that shows bias.",
        "answer": "\"Everyone knows that this party is the only honest one.\"",
        "hint": "Extreme or universal statement."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 4",
    "topic": "Grammar: Clauses",
    "lessonNumber": 1,
    "lessonTitle": "Main Clauses and Subordinate Clauses",
    "lessonId": "english-f4-clauses-1",
    "order": 21,
    "learningObjectives": [
      "Define a clause (group of words with a subject and verb)",
      "Distinguish between main (independent) clauses and subordinate (dependent) clauses"
    ],
    "introduction": "You have learned simple sentences. Now we build longer, more interesting sentences using CLAUSES. A clause has a subject and a verb. A main clause can stand alone; a subordinate clause cannot. Today we learn the difference.",
    "keyPoints": [
      "Main clause (independent): can stand alone as a sentence. Example: \"The farmer planted maize.\"",
      "Subordinate clause (dependent): cannot stand alone; needs a main clause. Example: \"because the rains had come\" (not a full sentence).",
      "Subordinate clauses start with subordinating conjunctions: because, if, when, although, while, since, unless."
    ],
    "detailedContent": "What is a Clause?\n\nA clause contains a subject and a verb.\n\nMain Clause (Independent)\n\nExpresses a complete thought. Can stand alone.\n\nExamples:\n- \"The sun set.\"\n- \"Children were playing outside.\"\n\nSubordinate Clause (Dependent)\n\nHas a subject and verb but does not express a complete thought. Depends on a main clause.\n\nExamples:\n- \"when the sun set\" (incomplete – when the sun set... what?)\nComplete sentence: \"The children went home when the sun set.\"\n\nCommon subordinating conjunctions:\nafter, although, as, because, before, if, since, so that, than, though, unless, until, when, where, while.\n\nExample complex sentence:\n\"Although it was late (subordinate clause), the children stayed outside (main clause).\"\n\nExercise: Identify the main clause and subordinate clause in:\n1. \"Because the ground was wet, the farmer waited.\"\n2. \"She smiled when she saw her friend.\"",
    "summary": "Main clause = complete sentence. Subordinate clause = incomplete, needs a main clause. Subordinate clauses begin with words like because, when, although, if.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Time Clause",
        "description": "When the rains begin, farmers prepare their fields."
      },
      {
        "title": "Reason Clause",
        "description": "Because the maize was dry, we harvested early."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Identify the subordinate clause: \"She smiled because she was happy.\"",
        "answer": "because she was happy",
        "hint": "Begins with because."
      },
      {
        "question": "What is the main clause in: \"If you work hard, you will succeed.\"",
        "answer": "you will succeed",
        "hint": "Can stand alone."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 4",
    "topic": "Grammar: Clauses",
    "lessonNumber": 2,
    "lessonTitle": "Adverb, Adjective, and Noun Clauses",
    "lessonId": "english-f4-clauses-2",
    "order": 22,
    "learningObjectives": [
      "Identify adverb clauses (modify verbs), adjective clauses (modify nouns), and noun clauses (act as nouns)",
      "Use these clauses to write complex sentences"
    ],
    "introduction": "Subordinate clauses have different roles: some tell when/why (adverb), some describe a noun (adjective), some act as a noun (noun). Today we learn the three types.",
    "keyPoints": [
      "Adverb clause: modifies a verb, answers when, where, why, how. Begins with because, if, when, although, while, since.",
      "Adjective clause: modifies a noun, begins with relative pronouns: who, whom, which, whose, that.",
      "Noun clause: acts as a noun (subject, object, complement). Begins with that, what, whatever, whoever, whether."
    ],
    "detailedContent": "Adverb Clause\n\nFunctions like an adverb: tells time, place, reason, condition, concession.\n\nExamples:\n- \"Because the ground was wet, the farmer waited.\" (reason)\n- \"When the sun set, we returned home.\" (time)\n- \"If you work hard, you will succeed.\" (condition)\n\nAdjective Clause (Relative Clause)\n\nModifies a noun. Begins with relative pronoun: who (people), which (things), that (people or things), whose (possession), where (place), when (time).\n\nExamples:\n- \"The woman who sells vegetables is my aunt.\"\n- \"The bicycle that my father bought is blue.\"\n- \"The house where they live is near the school.\"\n\nNoun Clause\n\nActs as a noun – can be subject, object, or complement.\n\nExamples (as object): \"I know that you are right.\" (the clause is the object of know)\n(as subject): \"What he said surprised everyone.\"\n(as complement): \"The truth is that we were late.\"\n\nComplex Sentences\n\nA complex sentence contains one main clause and at least one subordinate clause.\n\nExample: \"Although it was late (adverb clause), the children (main clause) who wanted to play (adjective clause) stayed outside until their mother called (adverb clause).\"\n\nNow write five complex sentences using each type of subordinate clause at least once. Use topics from Malawi: farming, school, family, or village life.",
    "summary": "Adverb clauses modify verbs (time, reason, condition). Adjective clauses modify nouns (who, which, that). Noun clauses act as nouns (subject/object). Combine to write complex sentences.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Adverb Clause",
        "description": "When the rains begin, farmers prepare their fields."
      },
      {
        "title": "Adjective Clause",
        "description": "The bicycle that my father bought is blue."
      },
      {
        "title": "Noun Clause",
        "description": "We believe that education changes lives."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Identify the subordinate clause type: \"The boy who wears a red shirt is my brother.\"",
        "answer": "Adjective clause",
        "hint": "Modifies boy."
      },
      {
        "question": "What type of clause is \"that you are right\" in \"I know that you are right\"?",
        "answer": "Noun clause",
        "hint": "Acts as object of know."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 4",
    "topic": "Reading: Interpreting Data",
    "lessonNumber": 1,
    "lessonTitle": "Reading Pie Charts, Bar Graphs, and Tables",
    "lessonId": "english-f4-reading-data-1",
    "order": 23,
    "learningObjectives": [
      "Extract specific data points from pie charts, bar graphs, and tables",
      "Identify trends (increase, decrease, comparison) from graphic data"
    ],
    "introduction": "In exams, newspapers, and reports, you often see data presented as pie charts, bar graphs, or tables. Being able to read these quickly and accurately is an important skill. Today we practise.",
    "keyPoints": [
      "Pie chart: shows parts of a whole (percentages or fractions). Each slice represents a category.",
      "Bar graph: compares quantities using bars of different heights. Can show changes over time or compare groups.",
      "Table: organises data in rows and columns for easy reference.",
      "When interpreting, first read the title and labels. Then extract key numbers and identify highest/lowest, trends, or comparisons."
    ],
    "detailedContent": "Understanding Pie Charts\n\nA pie chart is a circle divided into slices. The whole circle represents 100% or total.\n\nExample: Crop area distribution in a village (pie chart)\n- Maize: 60%\n- Groundnuts: 20%\n- Vegetables: 10%\n- Other crops: 10%\n\nWhat can we say? Maize is the most grown crop (60%). Groundnuts are second. Vegetables and other crops are grown equally (10% each).\n\nReading Bar Graphs\n\nA bar graph uses bars of different heights to compare quantities.\n\nExample: Maize yield (kg per hectare) for three years:\n2019: 2000 kg\n2020: 1800 kg\n2021: 2200 kg\n\nWhat can we say? Yield decreased from 2019 to 2020, then increased in 2021 to 2200 kg, which is the highest of the three years.\n\nTables\n\nTables present data in rows and columns. Look at column headings.\n\nExample: Livestock numbers in a village (table)\n| Type | Number |\n|------|--------|\n| Cattle | 150 |\n| Goats | 300 |\n| Chickens | 800 |\n\nWe can say: Chickens are the most numerous (800), followed by goats (300), then cattle (150).\n\nNow write a short paragraph interpreting a bar graph showing monthly rainfall in Lilongwe or a pie chart of energy sources in Malawi (firewood, charcoal, electricity).",
    "summary": "Pie charts show parts of a whole; bar graphs compare quantities; tables organise data. Read titles and labels first. Identify highest/lowest, trends, and comparisons.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Pie Chart: Household Energy",
        "description": "Firewood 70%, charcoal 20%, electricity 5%, other 5%. Interpret poverty."
      },
      {
        "title": "Bar Graph: Literacy by Region",
        "description": "Compare Northern, Central, Southern regions."
      }
    ],
    "practiceQuestions": [
      {
        "question": "If a pie chart has a slice labelled 25%, what fraction does it represent?",
        "answer": "One quarter (1/4)",
        "hint": "A pie is 100%."
      },
      {
        "question": "In a bar graph comparing yields, what does a taller bar mean?",
        "answer": "Higher quantity or value",
        "hint": "Length indicates magnitude."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 4",
    "topic": "Writing: Data Interpretation",
    "lessonNumber": 1,
    "lessonTitle": "Writing a Prose Interpretation of Graphic Data",
    "lessonId": "english-f4-writing-data-1",
    "order": 24,
    "learningObjectives": [
      "Write a clear paragraph that describes the key features of a chart or graph",
      "Use comparative language (more than, less than, similar to) and trend language (increase, decrease, fluctuate)"
    ],
    "introduction": "You have learned to read pie charts and bar graphs. Now you will learn to write a PROSE INTERPRETATION – a paragraph or short essay that explains what the data means. This is a common task in exams.",
    "keyPoints": [
      "Title: indicate the subject of the data.",
      "Introductory sentence: state what the chart/graph/table shows.",
      "Body: describe most important features – highest, lowest, comparisons, trends over time.",
      "Use specific data (numbers) to support statements.",
      "Concluding sentence: summarise the main finding."
    ],
    "detailedContent": "Structure of a Data Interpretation\n\nParagraph 1 (Introduction):\n- State what is being shown.\n- Mention the source (if given) and time period.\n- Example: \"The pie chart below shows the composition of household energy use in rural Malawi.\"\n\nParagraph 2 (Analysis of data):\n- Identify the largest category, the smallest, any notable equalities.\n- For bar graphs over time: describe trends (increased, decreased, fluctuated, remained steady).\n- Use comparison words: higher than, lower than, twice as much as, three times, similar to.\n- Include specific figures in brackets.\n\nExample sentence: \"Firewood is the most common energy source at 75%, which is more than three times the proportion of charcoal (20%).\"\n\nParagraph 3 (Conclusion):\n- Summarise the main finding in one sentence.\n- Example: \"In summary, rural Malawian households rely overwhelmingly on firewood for their energy needs.\"\n\nLanguage for Trends\n\nIncrease: rose, grew, increased, climbed, went up\nDecrease: fell, dropped, decreased, declined, went down\nNo change: remained stable, stayed constant, levelled off\nFluctuation: fluctuated, varied, went up and down\n\nComparative Expressions\n\n- X is higher than Y (X = 60%, Y = 40%)\n- X is twice as high as Y (X = 60%, Y = 30%)\n- X accounts for the largest share at ...%\n- The second largest category is ...\n- There is a slight difference of X percentage points between A and B.\n\nAvoiding Mistakes\n\nDo NOT simply list every number. Group and summarise.\n\nWeak: \"Maize is 60%, groundnuts is 20%, vegetables 10%, other 10%.\"\nBetter: \"Maize accounts for the majority (60%) of the cultivated area, while groundnuts is the second most important crop at 20%. Vegetables and other crops each cover only 10%.\"\n\nNow write an interpretation of the following data: Bar graph showing maize production (in metric tonnes) for three districts: Kasungu 2500, Lilongwe 3200, Mchinji 1800 for the year 2022. Write three paragraphs.",
    "summary": "A prose interpretation describes data in paragraph form. Include an introduction (what the data shows), body (key findings with numbers, comparisons, trends), and conclusion (main summary). Use specific vocabulary for trends and comparisons.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Enrolment by Gender",
        "description": "Write a paragraph from a table of boys and girls enrolment."
      },
      {
        "title": "Crop Yield Trends",
        "description": "Interpret a line graph showing maize yields from 2015 to 2025."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What three parts should your data interpretation have?",
        "answer": "Introduction, body (analysis), conclusion",
        "hint": "Essay structure."
      },
      {
        "question": "What word would you use if data goes up and down without a clear direction?",
        "answer": "Fluctuated",
        "hint": "Varied."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 4",
    "topic": "Literature: Poetry",
    "lessonNumber": 1,
    "lessonTitle": "Analysing Persona, Tone, Mood, Theme",
    "lessonId": "english-f4-literature-poetry-1",
    "order": 25,
    "learningObjectives": [
      "Define persona (speaker) and addressee (who is spoken to) in a poem",
      "Identify tone, mood, and theme in a poem"
    ],
    "introduction": "Poetry uses condensed language, rhythm, and imagery to express feelings and ideas. Today we learn how to analyse a poem by looking at the speaker (persona), the tone, the mood, and the theme.",
    "keyPoints": [
      "Persona: the voice or speaker in the poem – not necessarily the poet. Could be a child, an animal, or an object.",
      "Addressee: the person or thing the poem is speaking to (lover, parent, river, reader).",
      "Tone: speaker’s attitude towards the subject (angry, sad, joyful, sarcastic, hopeful).",
      "Mood: the feeling the poem creates in the reader (melancholy, excitement, fear, calm).",
      "Theme: central message about life (e.g., loss, love, injustice, nature, resilience)."
    ],
    "detailedContent": "Persona – Who is Speaking?\n\nThe persona is a mask the poet puts on. Do not assume the poet is the speaker.\n\nExample: In a poem that says \"I am a hungry child\", the poet may be an adult imagining a child's voice. The persona is that child.\n\nAddressee – Who is Being Spoken To?\n\nSometimes the poem directly addresses someone or something. Example: \"O you winds\", \"My love\", \"Mother\".\n\nTone – What is the Speaker's Attitude?\n\nConveyed through word choice and imagery. Words like \"desolate\", \"weary\", \"hopeless\" → sad or bleak tone. Words like \"dancing\", \"joyful\", \"bright\" → happy tone.\n\nMood – How Does the Poem Make the Reader Feel?\n\nMood is the emotional atmosphere. A funeral poem → somber mood; a victory poem → excited mood.\n\nTheme – What is the Poem About (Deep Meaning)?\n\nTheme is the abstract idea or message. Ask: What insight about life does this poem offer? Examples: \"The importance of preserving the environment\", \"The pain of separation\", \"The courage to stand alone\".\n\nExample Analysis (short original poem)\n\n\"Lake Malawi\"\n\nI am the ancient lake,\nI hold the sun in my arms.\nChildren laugh on my shores,\nBut my waters are troubled.\n\n- Persona: the lake itself (speaking in first person)\n- Addressee: readers / humanity\n- Tone: proud (\"I am the ancient lake\") but also worried (\"my waters are troubled\")\n- Mood: mixture of awe (beauty of lake) and concern (pollution?)\n- Theme: human activity can harm nature; we must protect our natural heritage.\n\nNow choose a short poem from your textbook. Identify the persona, addressee (if any), tone, mood, and theme. Write a short paragraph analysis.",
    "summary": "Persona = speaker in the poem. Addressee = who is spoken to. Tone = speaker’s attitude. Mood = feeling created for reader. Theme = central message. Analyse poems by asking these questions.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Poem: \"The Lake\" by Frank Chipasula",
        "description": "Analyse persona (the lake), mood (calm then turbulent), theme (nature’s power)."
      },
      {
        "title": "Traditional Song as Poem",
        "description": "Analyse a village work song – persona (women pounding maize), tone (rhythmical, determined), mood (energetic)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between persona and poet?",
        "answer": "Persona is the speaker in the poem (fictional); poet is the real author.",
        "hint": "The poet creates a mask."
      },
      {
        "question": "If a poem makes you feel sad, are you describing tone or mood?",
        "answer": "Mood",
        "hint": "Mood is reader’s feeling, tone is speaker’s attitude."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 4",
    "topic": "Literature: Drama",
    "lessonNumber": 1,
    "lessonTitle": "Features of a Play and Types (Tragedy, Comedy, Tragicomedy)",
    "lessonId": "english-f4-literature-play-1",
    "order": 26,
    "learningObjectives": [
      "List the features of a play (dialogue, stage directions, acts, scenes)",
      "Distinguish between tragedy, comedy, and tragicomedy"
    ],
    "introduction": "A play is written to be performed. It uses dialogue, action, and stage directions to tell a story. Today we learn the features of plays and the main types: tragedy (sad ending), comedy (happy ending), and tragicomedy (mixed).",
    "keyPoints": [
      "Play: literary work intended for performance by actors on stage.",
      "Dialogue: conversation between characters.",
      "Stage directions: instructions in brackets (or italics) about setting, movement, tone.",
      "Acts: major divisions; scenes: subdivisions of acts.",
      "Tragedy: serious drama with unhappy ending (e.g., Macbeth).",
      "Comedy: light‑hearted with happy ending, often humorous (e.g., The Importance of Being Earnest).",
      "Tragicomedy: combines serious and comic elements, but ends happily (e.g., The Winter’s Tale)."
    ],
    "detailedContent": "Features of a Play\n\nUnlike a novel, a play is meant to be seen and heard. The script includes:\n- Dialogue: what characters say.\n- Stage directions: tell actors where to stand, how to speak (e.g., angrily, whisper), and what the set looks like.\n- Cast list: lists all characters.\n- Acts and scenes: break the story into parts.\n\nExample of stage directions:\n[Enter CHIFUNDO, looking sad. He sits on a log.]\n\nCHIFUNDO: (sighing) The rains have failed again.\n\nTypes of Plays\n\n1. Tragedy\n- Protagonist (main character) is usually noble or high status.\n- Has a fatal flaw (e.g., pride, jealousy, ambition).\n- Ends in disaster (death, ruin).\n- Purpose: to evoke pity and fear (catharsis).\n- Examples: Shakespeare’s Hamlet, Macbeth.\n\n2. Comedy\n- Light‑hearted story.\n- Conflicts resolved happily.\n- Often includes mistaken identity, funny misunderstandings, love stories.\n- Ends typically with marriage or celebration.\n- Examples: Shakespeare’s A Midsummer Night’s Dream.\n\n3. Tragicomedy\n- Combines serious and comic elements.\n- Has dark moments but a happy ending.\n- Characters may face danger but survive.\n- Example: Shakespeare’s The Winter’s Tale.\n\nAnalysing a Play Scene\n\nWhen you read a scene, answer:\n- Which characters are present? What do they want?\n- What is the conflict?\n- How does the dialogue reveal character?\n- What is the theme?\n\nMalawi Example: Many schools perform plays based on local stories. For instance, a play about a farmer who loses his land to a greedy businessman (tragedy), or a comedy about a lazy husband who learns to work.\n\nNow read a short scene from any play. Identify the features: dialogue, stage directions. Decide whether it is tragedy, comedy, or tragicomedy based on the ending and tone. Write a brief analysis.",
    "summary": "Plays use dialogue, stage directions, acts, scenes. Tragedy: unhappy ending, serious. Comedy: happy ending, humour. Tragicomedy: mixed but ends happily. Analyse by looking at character, conflict, resolution.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "School Drama",
        "description": "A play about a girl who fights to stay in school – tragicomic if she overcomes obstacles."
      },
      {
        "title": "The Patriotic Act (local play)",
        "description": "Identify comic and tragic elements."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the purpose of stage directions?",
        "answer": "To tell actors how to move, speak, and to describe the setting.",
        "hint": "Instructions for performance."
      },
      {
        "question": "A play ends with the main character dying because of his own mistake. What type is it?",
        "answer": "Tragedy",
        "hint": "Unhappy ending, downfall."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Number Systems",
    "lessonNumber": 1,
    "lessonTitle": "Natural Numbers, Whole Numbers, and Place Value",
    "lessonId": "maths-f1-number-systems-1",
    "order": 1,
    "learningObjectives": [
      "Identify natural numbers and whole numbers",
      "Understand and apply place value up to millions"
    ],
    "introduction": "Good day, young mathematician! Have you ever counted money at the market, counted learners in your class, or told your age? You were using natural numbers! Today we explore natural numbers and whole numbers – the building blocks of all mathematics.",
    "keyPoints": [
      "Natural numbers are counting numbers: 1, 2, 3, 4, 5, ...",
      "Whole numbers include zero: 0, 1, 2, 3, 4, 5, ...",
      "Place value: ones, tens, hundreds, thousands, millions, billions.",
      "In Malawi we use numbers to count kwacha, tambala, people, livestock and crops."
    ],
    "detailedContent": "Let me explain natural numbers using examples from Malawi.\n\nNATURAL NUMBERS are the numbers you use when you count. When you say \"I have 5 mangoes\" or \"There are 40 learners in my class\" – these are natural numbers. They start from 1 and go upwards.\n\nWHOLE NUMBERS are just like natural numbers, but they also include ZERO. Zero represents \"nothing\". If you have no money in your pocket, you have zero kwacha.\n\nPLACE VALUE is very important. In the number 2,345:\n- The digit 2 is in the thousands place → value 2000\n- The digit 3 is in the hundreds place → value 300\n- The digit 4 is in the tens place → value 40\n- The digit 5 is in the ones place → value 5\n\nMalawi example: A farmer harvests 1,234 kg of maize. The 1 means 1,000 kg, the 2 means 200 kg, the 3 means 30 kg, the 4 means 4 kg.",
    "summary": "Natural numbers are counting numbers (1,2,3...). Whole numbers include zero. Place value tells the worth of each digit based on its position.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Market Prices",
        "description": "A tomato vendor sells 1,2,3,4 tomatoes – natural numbers."
      },
      {
        "title": "Population",
        "description": "Malawi has about 20 million people – large numbers."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the place value of 7 in 7,891?",
        "answer": "Thousands",
        "hint": "Position."
      },
      {
        "question": "Is 0 a natural number or a whole number?",
        "answer": "Whole number",
        "hint": "Natural starts at 1."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Number Systems",
    "lessonNumber": 2,
    "lessonTitle": "Reading and Writing Large Numbers (Application)",
    "lessonId": "maths-f1-number-systems-2",
    "order": 2,
    "learningObjectives": [
      "Read and write numbers correctly up to millions",
      "Apply number concepts to real‑life situations in Malawi"
    ],
    "introduction": "Now that you know place value, let’s practice reading and writing large numbers. This skill helps you understand prices, populations, and harvest quantities.",
    "keyPoints": [
      "To read a number, group digits in threes from the right (thousands, millions).",
      "Write numbers in words carefully (e.g., 2500 = two thousand five hundred).",
      "Use number sense in shopping, farming, and budgeting."
    ],
    "detailedContent": "Reading Large Numbers\n\nGroup from right: 3,456,789\n- Millions group: three million\n- Thousands group: four hundred fifty-six thousand\n- Units: seven hundred eighty-nine\nTogether: three million, four hundred fifty-six thousand, seven hundred eighty-nine.\n\nWriting numbers: 5,000 kwacha = five thousand kwacha.\n1,250 kg = one thousand two hundred fifty kilograms.\n\nApplication: A farmer sells 20 bags of maize at 15,000 MK each. Total = 20 × 15,000 = 300,000 MK. You need to read and write that amount correctly for records.",
    "summary": "Read large numbers by grouping digits. Write numbers in words for clarity. Apply number skills to daily life.",
    "estimatedTime": "15 mins",
    "malawiExamples": [
      {
        "title": "Crop Harvest",
        "description": "A farmer harvests 2,500 kg of maize – place value helps read this number."
      },
      {
        "title": "Market Transactions",
        "description": "Calculate total cost of multiple items."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Write 4,502 in words.",
        "answer": "Four thousand five hundred two",
        "hint": "Separate thousands and hundreds."
      },
      {
        "question": "If a chicken costs 3,500 MK, how much for 5 chickens?",
        "answer": "17,500 MK",
        "hint": "Multiply."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Number Systems",
    "lessonNumber": 3,
    "lessonTitle": "Integers and the Number Line",
    "lessonId": "maths-f1-number-systems-3",
    "order": 3,
    "learningObjectives": [
      "Define integers and represent them on a number line",
      "Identify positive numbers, negative numbers, and zero"
    ],
    "introduction": "So far we have worked with positive numbers. But what about temperatures below zero or debts? They are represented by NEGATIVE numbers. Together with positives and zero, they form INTEGERS. Today we explore the number line.",
    "keyPoints": [
      "Integers include positive numbers, negative numbers, and zero: ... -3, -2, -1, 0, 1, 2, 3 ...",
      "On a number line, positive numbers are to the right, negative to the left.",
      "Numbers increase as you move right; decrease as you move left."
    ],
    "detailedContent": "Integers\n\nIntegers: all positive numbers, negative numbers, and zero.\n\nNumber line: a straight line with zero in the middle. Positive go to the right, negative to the left.\n\nThe further right, the larger the number. The further left, the smaller.\n\nExample: -3 is less than -2 because -3 is further left. 0 is greater than any negative number.\n\nMalawi examples: Temperature on Mulanje Mountain can drop below zero – negative integers. Bank balance: if you withdraw more than you have, your balance becomes negative (–800 MK) – an integer.",
    "summary": "Integers include positive, negative, and zero. Number line: right is larger, left is smaller. Negative numbers represent values below zero like debt or cold temperatures.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Temperatures on Mulanje",
        "description": "At the peak, temperatures can drop below zero – negative integers."
      },
      {
        "title": "Bank Account",
        "description": "If you withdraw more than you have, balance becomes negative."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which is greater: -5 or -10?",
        "answer": "-5",
        "hint": "On a number line, -5 is to the right of -10."
      },
      {
        "question": "If the temperature drops from 5°C to -3°C, how many degrees did it drop?",
        "answer": "8 degrees",
        "hint": "Count the steps from 5 down to -3."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Number Systems",
    "lessonNumber": 4,
    "lessonTitle": "Operations with Integers (Addition and Subtraction)",
    "lessonId": "maths-f1-number-systems-4",
    "order": 4,
    "learningObjectives": [
      "Add and subtract integers using a number line",
      "Apply integer operations to real‑life problems"
    ],
    "introduction": "Now that you understand integers, let’s learn how to ADD and SUBTRACT them. Using a number line makes it easy.",
    "keyPoints": [
      "Adding a positive number moves right on the number line.",
      "Adding a negative number moves left (like subtracting).",
      "Subtracting a positive number moves left.",
      "Subtracting a negative number moves right (like adding)."
    ],
    "detailedContent": "Addition of Integers\n\n- Adding a positive: move right. Example: 3 + 4 = 7. Start at 3, move 4 steps right.\n- Adding a negative: move left. Example: 5 + (-2) = 3. Start at 5, move 2 steps left (like 5 – 2).\n\nSubtraction of Integers\n\n- Subtracting a positive: move left. Example: 7 – 3 = 4.\n- Subtracting a negative: move right. Example: 4 – (-2) = 6. (Because subtracting a negative is like adding a positive.)\n\nReal‑life example: If you owe 3 friends 4 kwacha each, total debt = –12. If each friend forgives your debt (removes the negative), you save 4 per friend.",
    "summary": "Adding positive moves right; adding negative moves left. Subtracting positive moves left; subtracting negative moves right. Use number line to visualise.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Debt Calculation",
        "description": "If you borrow 500 kwacha from 3 friends, total debt = -1,500 kwacha."
      },
      {
        "title": "Temperature Change",
        "description": "If temperature drops 2 degrees each hour for 5 hours, total change = -10 degrees."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Calculate: -5 + (-3)",
        "answer": "-8",
        "hint": "Moving left on number line."
      },
      {
        "question": "Calculate: 6 – (-2)",
        "answer": "8",
        "hint": "Subtracting negative = adding positive."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Number Systems",
    "lessonNumber": 5,
    "lessonTitle": "Multiplying and Dividing Integers",
    "lessonId": "maths-f1-number-systems-5",
    "order": 5,
    "learningObjectives": [
      "Multiply and divide integers",
      "Apply the rule: same signs give positive, different signs give negative"
    ],
    "introduction": "Now that you can add and subtract integers, let’s multiply and divide them. The golden rule: same signs → positive, different signs → negative.",
    "keyPoints": [
      "Positive × Positive = Positive (e.g., 3 × 4 = 12)",
      "Negative × Negative = Positive (e.g., -3 × -4 = 12)",
      "Positive × Negative = Negative (e.g., 3 × -4 = -12)",
      "Same rules apply to division: (+) ÷ (+) = +, (-) ÷ (-) = +, (+) ÷ (-) = -, (-) ÷ (+) = -"
    ],
    "detailedContent": "Multiplication and Division Rules\n\n- Same signs → positive\n- Different signs → negative\n\nExamples:\n- 3 × 4 = 12\n- (-3) × (-4) = 12\n- 3 × (-4) = -12\n- (-12) ÷ 3 = -4\n- (-12) ÷ (-3) = 4\n\nMalawi example: If you owe 3 friends 4 kwacha each, total debt = -3 × 4 = -12 kwacha. If each friend forgives your debt, that is -12 ÷ (-3) = 4 kwacha saved per friend.",
    "summary": "Same signs → positive; different signs → negative. This rule applies to both multiplication and division.",
    "estimatedTime": "15 mins",
    "malawiExamples": [
      {
        "title": "Debt Forgiveness",
        "description": "-12 ÷ -3 = +4 (debt reduction per friend)"
      },
      {
        "title": "Temperature Drop",
        "description": "Drop 2° per hour for 5 hours: -2 × 5 = -10°."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Calculate: -4 × (-6)",
        "answer": "24",
        "hint": "Negative × Negative = Positive."
      },
      {
        "question": "Calculate: 20 ÷ (-5)",
        "answer": "-4",
        "hint": "Positive ÷ Negative = Negative."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Algebraic Expressions",
    "lessonNumber": 1,
    "lessonTitle": "Like Terms, Unlike Terms, and Simplification",
    "lessonId": "maths-f1-algebraic-expressions-1",
    "order": 6,
    "learningObjectives": [
      "Identify like and unlike terms in an algebraic expression",
      "Combine like terms by addition and subtraction"
    ],
    "introduction": "Hello! In mathematics, we often use letters to represent numbers. These letters are VARIABLES, and when we combine them with numbers and operations, we get ALGEBRAIC EXPRESSIONS. Today we learn to simplify by combining like terms.",
    "keyPoints": [
      "A term is a single number, variable, or product (e.g., 3x, 5y², -7).",
      "Like terms have the same variable(s) raised to the same power.",
      "Unlike terms cannot be combined.",
      "Simplification means adding or subtracting like terms."
    ],
    "detailedContent": "Like Terms\n\nLike terms have identical variable parts.\n\n| Like Terms | Why they are like |\n|------------|-------------------|\n| 3x and 5x | Both have x |\n| 4y² and 7y² | Both have y² |\n| 2ab and 6ab | Both have ab |\n\n| Unlike Terms | Why they are unlike |\n|--------------|---------------------|\n| 3x and 3y | Different variables |\n| 4x and 4x² | Different powers |\n| 2ab and 2a | Different variables |\n\nSimplification\n\n- 3x + 5x = (3+5)x = 8x\n- 7y – 2y = 5y\n- 4a + 3b + 2a – b = (4a+2a) + (3b–b) = 6a + 2b\n\nMalawi example: A farmer harvests 5 baskets of maize (m) and 3 baskets of groundnuts (g) in the morning, and 2 baskets of maize and 4 baskets of groundnuts in the afternoon. Total = 5m+3g+2m+4g = 7m+7g.",
    "summary": "Like terms have identical variable parts. Only like terms can be added or subtracted. Simplifying makes expressions shorter and easier to work with.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Harvest Collection",
        "description": "Combine maize and groundnuts from two harvests."
      },
      {
        "title": "Market Purchase",
        "description": "Calculate total cost by combining like items."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Simplify: 8p – 3p",
        "answer": "5p",
        "hint": "Subtract coefficients."
      },
      {
        "question": "Simplify: 2x + 5y – x + 3y",
        "answer": "x + 8y",
        "hint": "Combine x terms and y terms separately."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Algebraic Expressions",
    "lessonNumber": 2,
    "lessonTitle": "Multiplication and Division of Algebraic Terms",
    "lessonId": "maths-f1-algebraic-expressions-2",
    "order": 7,
    "learningObjectives": [
      "Multiply algebraic terms (coefficients and variables separately)",
      "Divide algebraic terms using index laws"
    ],
    "introduction": "Now that you can add and subtract like terms, we move on to MULTIPLICATION and DIVISION. Unlike addition, you can multiply or divide ANY terms – whether they are like or unlike. Let’s learn how.",
    "keyPoints": [
      "Multiply coefficients, then variables using index laws: xᵃ × xᵇ = xᵃ⁺ᵇ",
      "Divide coefficients, then subtract exponents: xᵃ ÷ xᵇ = xᵃ⁻ᵇ (if a > b)",
      "Examples: 3x × 4x = 12x²; 12x³ ÷ 3x = 4x²"
    ],
    "detailedContent": "Multiplication\n\nMultiply coefficients and add exponents for same bases.\n\nExamples:\n- 3x × 4x = (3×4) × x^{1+1} = 12x²\n- 5y² × 2y³ = 10y^{2+3} = 10y⁵\n- 2a × 3b = 6ab (different variables, keep separate)\n\nDivision\n\nDivide coefficients and subtract exponents.\n\nExamples:\n- 12x³ ÷ 3x = (12÷3) × x^{3-1} = 4x²\n- 10y⁵ ÷ 2y² = 5y³\n- 8ab ÷ 2a = 4b (a cancels)\n\nMalawi example: A farmer sells maize at 200 kwacha per kilogram. He sells x kg on Monday and 2x kg on Tuesday. Total kg = 3x. Revenue = 200 × 3x = 600x kwacha.",
    "summary": "Multiply: multiply coefficients, add exponents. Divide: divide coefficients, subtract exponents. These rules apply to like and unlike terms.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Revenue Calculation",
        "description": "Multiply number of bags by price algebraically."
      },
      {
        "title": "Seed Distribution",
        "description": "Divide total seeds among plots – algebraic division."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Simplify: 4x × 3x²",
        "answer": "12x³",
        "hint": "Multiply coefficients 4×3=12; add exponents 1+2=3."
      },
      {
        "question": "Simplify: 15y⁴ ÷ 3y",
        "answer": "5y³",
        "hint": "15÷3=5; subtract exponents 4-1=3."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Simultaneous Linear Equations",
    "lessonNumber": 1,
    "lessonTitle": "Solving by Elimination (Part 1 – Equal Coefficients)",
    "lessonId": "maths-f2-simultaneous-elimination-1",
    "order": 8,
    "learningObjectives": [
      "Solve simultaneous equations by elimination when coefficients are equal",
      "Check solutions by substitution"
    ],
    "introduction": "Sometimes one equation is not enough. For example, if you buy two items and know the total cost and the difference, you need two equations. Today we solve using ELIMINATION when coefficients match.",
    "keyPoints": [
      "Simultaneous equations: two equations with two unknowns (usually x and y).",
      "Elimination method: add or subtract equations to remove one variable.",
      "Example: 2x + y = 7 and x + y = 5. Subtract: (2x – x) + (y – y) = 7 – 5 → x = 2, then y = 3."
    ],
    "detailedContent": "Example: Solve 2x + y = 7 and x + y = 5\n\nStep 1: Write equations (1) 2x + y = 7, (2) x + y = 5.\nStep 2: Subtract (2) from (1): (2x – x) + (y – y) = 7 – 5 → x = 2.\nStep 3: Substitute x = 2 into (2): 2 + y = 5 → y = 3.\nStep 4: Check in (1): 2(2) + 3 = 4+3=7 ✓.\n\nThis method works when the coefficient of one variable is already the same.",
    "summary": "When coefficients match, add or subtract to eliminate one variable, solve for the other, then substitute back.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Stationery Prices",
        "description": "Find cost of notebook and pen using two purchase scenarios."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Solve: x + y = 10, x – y = 4",
        "answer": "x=7, y=3",
        "hint": "Add the equations."
      },
      {
        "question": "Solve: 2x + y = 8, x – y = 1",
        "answer": "x=3, y=2",
        "hint": "Add to eliminate y."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Simultaneous Linear Equations",
    "lessonNumber": 2,
    "lessonTitle": "Solving by Elimination (Part 2 – Multiplying to Match Coefficients)",
    "lessonId": "maths-f2-simultaneous-elimination-2",
    "order": 9,
    "learningObjectives": [
      "Solve simultaneous equations by elimination after scaling equations",
      "Apply elimination to real‑world problems"
    ],
    "introduction": "Sometimes the coefficients do not match. We can multiply one or both equations by a constant to make them match, then eliminate.",
    "keyPoints": [
      "If coefficients are not equal, multiply one or both equations by appropriate numbers.",
      "Then add or subtract to eliminate a variable.",
      "Example: 3x + 2y = 12 and 2x + y = 7. Multiply second by 2: 4x + 2y = 14. Subtract from first: (3x-4x) = -1x, 2y-2y=0, 12-14=-2 → -x=-2, x=2."
    ],
    "detailedContent": "Example: Solve 3x + 2y = 12 and 2x + y = 7\n\nStep 1: Multiply second equation by 2: 4x + 2y = 14.\nStep 2: Subtract from first: (3x – 4x) + (2y – 2y) = 12 – 14 → -x = -2 → x = 2.\nStep 3: Substitute x = 2 into original second: 2(2) + y = 7 → 4 + y = 7 → y = 3.\nStep 4: Check: 3(2)+2(3)=6+6=12 ✓.\n\nMalawi example: A shop sells notebooks (x) and pens (y). 3 notebooks + 2 pens cost 2,500 MK. 2 notebooks + 1 pen cost 1,600 MK. Solve: x=700, y=200.",
    "summary": "When coefficients differ, multiply one or both equations to make them match, then eliminate and solve.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Stationery Prices",
        "description": "Find cost of notebook and pen using two purchase scenarios."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Solve: 3x + 2y = 11, 2x + 5y = 11",
        "answer": "x=3, y=1",
        "hint": "Multiply first by 5, second by 2 to eliminate y."
      },
      {
        "question": "Solve: 4x – 2y = 10, x + y = 4",
        "answer": "x=3, y=1",
        "hint": "Multiply second by 2 to eliminate y."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Simultaneous Linear Equations",
    "lessonNumber": 3,
    "lessonTitle": "Solving by Substitution (Part 1 – Simple Substitution)",
    "lessonId": "maths-f2-simultaneous-substitution-1",
    "order": 10,
    "learningObjectives": [
      "Solve simultaneous equations by substitution when one variable is already isolated",
      "Use substitution to find both variables"
    ],
    "introduction": "Besides elimination, there is another powerful method: SUBSTITUTION. When one equation already gives a variable in terms of the other, this method is quick and efficient.",
    "keyPoints": [
      "Step 1: Rearrange one equation to express one variable in terms of the other (if not already).",
      "Step 2: Substitute that expression into the other equation.",
      "Step 3: Solve for the remaining variable, then back‑substitute."
    ],
    "detailedContent": "Example: Solve y = 2x + 1 and 3x + 2y = 9\n\nStep 1: Equation (1) already gives y = 2x + 1.\nStep 2: Substitute into (2): 3x + 2(2x + 1) = 9 → 3x + 4x + 2 = 9 → 7x = 7 → x = 1.\nStep 3: Substitute x=1 into (1): y = 2(1) + 1 = 3.\nStep 4: Check in (2): 3(1) + 2(3) = 3+6=9 ✓.\n\nMalawi example: A farmer has goats (g) and chickens (c). The number of goats is twice the number of chickens less 5. Total legs are 60 (goats 4 legs, chickens 2). g = 2c – 5, 4g + 2c = 60. Substitute: 4(2c-5) + 2c = 60 → 8c – 20 + 2c = 60 → 10c = 80 → c = 8, g = 2(8)-5 = 11.",
    "summary": "Substitution solves one equation for a variable and substitutes into the other. Best when a variable is already alone.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Farm Animals",
        "description": "Given relationship between goats and chickens, find numbers."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Solve by substitution: x = 2y, x + y = 9",
        "answer": "x=6, y=3",
        "hint": "Substitute x = 2y into second."
      },
      {
        "question": "Solve by substitution: y = 3x – 2, 2x + y = 13",
        "answer": "x=3, y=7",
        "hint": "Substitute y into second."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Simultaneous Linear Equations",
    "lessonNumber": 4,
    "lessonTitle": "Choosing the Appropriate Method",
    "lessonId": "maths-f2-simultaneous-choice-1",
    "order": 11,
    "learningObjectives": [
      "Choose between elimination and substitution for given pairs",
      "Compare the efficiency of each method"
    ],
    "introduction": "Both elimination and substitution work for any pair of linear equations, but sometimes one is much easier. Today we learn which method to choose.",
    "keyPoints": [
      "If one variable already has coefficient 1, substitution is often easier.",
      "If both variables have small coefficients, elimination is straightforward.",
      "If coefficients are large or fractions, elimination may require multiplication, but still works.",
      "Practice both methods to gain flexibility."
    ],
    "detailedContent": "When to Use Substitution:\n- When one equation is already solved for a variable (e.g., y = 3x + 2).\n- When one variable has coefficient 1 (e.g., x + 2y = 5 → x = 5 – 2y).\n\nWhen to Use Elimination:\n- When both equations are in standard form (ax + by = c) and coefficients are simple.\n- When coefficients of one variable are the same or easy to match.\n\nExample: Solve 3x + 4y = 10 and 2x – 4y = 5. Elimination is ideal because 4y and –4y cancel immediately. Add: 5x = 15 → x=3, then y = 0.25.\n\nExample: Solve y = 2x – 1 and 3x + y = 9. Substitution is easier: replace y.\n\nPractice both methods with this problem: 3x + 2y = 12 and x + y = 5. Try elimination (multiply second by 2) and substitution (solve second for x = 5 – y).",
    "summary": "Use substitution when a variable is isolated or has coefficient 1. Use elimination when coefficients are easy to match. Both methods are valid; choose the quicker one.",
    "estimatedTime": "16 mins",
    "malawiExamples": [
      {
        "title": "Budget Problem",
        "description": "Solve for price of maize and groundnuts using best method."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which method would you choose for: 2x + y = 7, 3x – y = 3?",
        "answer": "Elimination (y cancels directly)",
        "hint": "Coefficients +1 and -1."
      },
      {
        "question": "Which method for: y = 5x – 2, 2x + 3y = 8?",
        "answer": "Substitution",
        "hint": "y is already isolated."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Proportion",
    "lessonNumber": 1,
    "lessonTitle": "Direct Proportion",
    "lessonId": "maths-f2-proportion-direct-1",
    "order": 12,
    "learningObjectives": [
      "Define direct proportion and identify it from tables and graphs",
      "Solve direct proportion problems using the unitary method and equation y = kx"
    ],
    "introduction": "When you buy more oranges, you pay more money – that is direct proportion. When you walk faster, you cover more distance. Today we learn to recognise and solve direct proportion problems.",
    "keyPoints": [
      "Direct proportion: as one quantity increases, the other increases in the same ratio.",
      "Equation: y = kx, where k is the constant of proportionality.",
      "Graph: straight line through the origin.",
      "Unitary method: find value of one unit, then multiply."
    ],
    "detailedContent": "Definition: y ∝ x (proportional) means y = kx.\n\nExample: If 5 kg of maize cost 2,500 MK, then 1 kg costs 500 MK. For 8 kg, cost = 8 × 500 = 4,000 MK.\n\nAlternatively, find k: y = kx → 2500 = k×5 → k = 500, then y = 500×8 = 4000.\n\nTable check: if y/x is constant, it's direct proportion.\n\nMalawi example: The amount of fertiliser needed is proportional to the area of land. A 0.5 hectare field needs 100 kg. For 2 hectares: k = 100/0.5 = 200, so 200×2 = 400 kg.",
    "summary": "Direct proportion: y = kx. Graphs are straight lines through origin. Use unitary method or equation to solve.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Fertiliser Requirement",
        "description": "Calculate fertiliser needed for larger field."
      },
      {
        "title": "Maize Price",
        "description": "Find total cost from price per kg."
      }
    ],
    "practiceQuestions": [
      {
        "question": "If y is directly proportional to x, and y=15 when x=3, find y when x=8.",
        "answer": "40",
        "hint": "k=5, y=5×8=40"
      },
      {
        "question": "A car travels 120 km in 2 hours at constant speed. How far in 5 hours?",
        "answer": "300 km",
        "hint": "Speed = 60 km/h, 60×5=300"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Proportion",
    "lessonNumber": 2,
    "lessonTitle": "Inverse Proportion",
    "lessonId": "maths-f2-proportion-inverse-1",
    "order": 13,
    "learningObjectives": [
      "Define inverse proportion and identify it from tables",
      "Solve inverse proportion problems using xy = k"
    ],
    "introduction": "Now imagine the opposite: if more workers work on a task, the time taken decreases. That is INVERSE PROPORTION. Today we learn to recognise and solve these problems.",
    "keyPoints": [
      "Inverse proportion: as one quantity increases, the other decreases in the same factor.",
      "Equation: xy = k or y = k/x.",
      "Graph: hyperbola (curved).",
      "Examples: time and number of workers, speed and travel time."
    ],
    "detailedContent": "Definition: y ∝ 1/x means xy = k.\n\nExample: 6 workers build a wall in 4 days. Total work = 6 × 4 = 24 worker‑days. With 8 workers: days = 24 / 8 = 3 days.\n\nTable check: if product xy is constant, it's inverse proportion.\n\nMalawi example: A tractor ploughs a field. If 2 tractors take 6 hours, how long for 3 tractors? 2×6 = 12 tractor‑hours, 3×t = 12 → t = 4 hours.",
    "summary": "Inverse proportion: xy = k. As x increases, y decreases. Common in work, speed, and sharing problems.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Tractor Ploughing",
        "description": "More tractors reduce time; find time for different number of tractors."
      },
      {
        "title": "Food Rations",
        "description": "If food lasts certain days for 10 people, how long for 20?"
      }
    ],
    "practiceQuestions": [
      {
        "question": "If y is inversely proportional to x, and y=8 when x=3, find y when x=6.",
        "answer": "4",
        "hint": "k = 8×3=24, y=24/6=4"
      },
      {
        "question": "4 people finish a task in 9 days. How long for 6 people?",
        "answer": "6 days",
        "hint": "4×9=36, 36/6=6"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Quadratic Equations",
    "lessonNumber": 1,
    "lessonTitle": "Solving by Factorisation (Part 1 – Simple Trinomials)",
    "lessonId": "maths-f3-quadratics-factorisation-1",
    "order": 14,
    "learningObjectives": [
      "Identify quadratic expressions in standard form",
      "Factorise quadratics of the form x² + bx + c"
    ],
    "introduction": "Welcome, future problem‑solver! When an equation contains x², it is a QUADRATIC EQUATION. Today we solve them using FACTORISATION when the coefficient of x² is 1.",
    "keyPoints": [
      "A quadratic equation is of the form ax² + bx + c = 0 (a ≠ 0).",
      "For x² + bx + c = 0, find two numbers that multiply to c and add to b.",
      "Example: x² + 5x + 6 = (x + 2)(x + 3) = 0 → x = -2 or x = -3."
    ],
    "detailedContent": "Standard form: ax² + bx + c = 0.\n\nFactorisation for a=1: find factors of c that sum to b.\n\nExample: x² – 9x + 20 = 0. Factors of 20: (–4, –5) sum = –9. So (x – 4)(x – 5) = 0 → x = 4 or x = 5.\n\nMalawi example: A rectangular maize field has length 10 metres longer than its width. Area = 600 m². Let width = w, then w(w+10)=600 → w²+10w-600=0 → (w+30)(w-20)=0 → w=20, length=30.",
    "summary": "Factorise quadratic by finding two numbers that multiply to c and add to b. Use zero product property to solve.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Maize Field Area",
        "description": "Find dimensions given area and length‑width relationship."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Solve x² – 9x + 20 = 0",
        "answer": "x=4 or x=5",
        "hint": "Factors of 20 that sum to -9: -4 and -5."
      },
      {
        "question": "Solve x² + 7x + 12 = 0",
        "answer": "x=-3 or x=-4",
        "hint": "Factors of 12 that sum to 7: 3 and 4, but signs positive? Actually (x+3)(x+4)=0 → x=-3 or -4."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Quadratic Equations",
    "lessonNumber": 2,
    "lessonTitle": "Solving by Factorisation (Part 2 – a ≠ 1)",
    "lessonId": "maths-f3-quadratics-factorisation-2",
    "order": 15,
    "learningObjectives": [
      "Factorise quadratics of the form ax² + bx + c with a ≠ 1",
      "Solve using factorisation and zero product property"
    ],
    "introduction": "Now we look at quadratics where the coefficient of x² is not 1. Factorisation requires a bit more work, but the principle is the same.",
    "keyPoints": [
      "For ax² + bx + c, find two numbers that multiply to a×c and add to b.",
      "Split the middle term, then factor by grouping.",
      "Example: 2x² + 7x + 3 = (2x+1)(x+3) = 0 → x = -½ or x = -3."
    ],
    "detailedContent": "Method: multiply a and c. Find two numbers that multiply to ac and add to b. Split middle term, factor by grouping.\n\nExample: 2x² + 7x + 3. ac = 6, numbers 1 and 6 (sum 7). Write 2x² + 1x + 6x + 3 = x(2x+1) + 3(2x+1) = (2x+1)(x+3).\n\nMalawi example: Profit P = -x² + 20x – 50 (thousands MK). Solve for break‑even P=0: -x²+20x-50=0 → multiply by -1: x²-20x+50=0. Not factorable nicely, but for a≠1 factorisation we already did 2x²+...",
    "summary": "For a≠1, multiply a×c, find factor pair that sums to b, split middle term, factor by grouping, then solve.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Profit Calculation",
        "description": "Break‑even points using factors."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Solve 3x² + 5x – 2 = 0 by factorisation.",
        "answer": "x = 1/3 or x = -2",
        "hint": "Multiply a×c = -6. Factors 6 and -1 sum to 5. Split: 3x²+6x –x –2 = 3x(x+2) –1(x+2) = (x+2)(3x–1)=0."
      },
      {
        "question": "Solve 2x² – 7x + 3 = 0.",
        "answer": "x = 1/2 or x = 3",
        "hint": "ac=6, factors –6 and –1 sum –7. Split, factor."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Quadratic Equations",
    "lessonNumber": 3,
    "lessonTitle": "Solving by Completing the Square",
    "lessonId": "maths-f3-quadratics-completing-square-1",
    "order": 16,
    "learningObjectives": [
      "Complete the square for a quadratic expression",
      "Solve quadratic equations by completing the square"
    ],
    "introduction": "Some quadratic equations are difficult to factorise. For those cases, we need a stronger method: COMPLETING THE SQUARE. This method works for every quadratic equation.",
    "keyPoints": [
      "Completing the square rewrites ax² + bx + c as a(x + p)² + q.",
      "Steps: move constant to RHS; add (b/2)² to both sides; write LHS as perfect square.",
      "Example: x² + 6x + 5 = 0 → x² + 6x = -5 → (x+3)² = 4 → x+3 = ±2 → x = -1 or x = -5."
    ],
    "detailedContent": "Example: x² + 6x + 5 = 0\n\nStep 1: Move constant: x² + 6x = -5.\nStep 2: Take half of coefficient of x: 6/2 = 3, square = 9.\nStep 3: Add 9 to both sides: x² + 6x + 9 = 4 → (x+3)² = 4.\nStep 4: Take square root: x+3 = ±2 → x = -3 ± 2 → x = -1 or -5.\n\nMalawi example: A thrown stone height h = -5t² + 20t + 1. Find when hit ground (h=0). Solve -5t² + 20t + 1 = 0 → divide by -1: 5t² – 20t – 1 = 0. Divide by 5: t² – 4t – 0.2 = 0 → complete square: (t – 2)² = 4.2 → t ≈ 2 ± 2.05 → t ≈ 4.05 s (positive).",
    "summary": "Complete the square by adding (b/2)² to both sides. Then solve by taking square roots. Works for all quadratics.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Projectile Motion",
        "description": "Find when stone lands."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Solve by completing the square: x² – 4x – 12 = 0",
        "answer": "x = 6 or x = -2",
        "hint": "Move 12, add 4 to both sides: (x-2)²=16 → x-2=±4."
      },
      {
        "question": "Express x² + 10x + 20 in completed square form.",
        "answer": "(x+5)² – 5",
        "hint": "Half of 10 is 5, square 25, then 20 = 25 – 5."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Quadratic Equations",
    "lessonNumber": 4,
    "lessonTitle": "The Quadratic Formula",
    "lessonId": "maths-f3-quadratics-formula-1",
    "order": 17,
    "learningObjectives": [
      "State the quadratic formula and use it to solve quadratic equations",
      "Use the discriminant (b² – 4ac) to determine the nature of roots"
    ],
    "introduction": "The quadratic formula is the ultimate tool for solving any quadratic equation – even if it cannot be factorised. Today we learn this powerful formula and the discriminant.",
    "keyPoints": [
      "Quadratic formula: x = [-b ± √(b² – 4ac)] / (2a).",
      "Discriminant (Δ = b² – 4ac) tells number of real roots.",
      "Δ > 0: two distinct real roots; Δ = 0: one repeated root; Δ < 0: no real roots (complex)."
    ],
    "detailedContent": "Formula: For ax² + bx + c = 0, x = [-b ± √(b² – 4ac)] / (2a).\n\nExample: 2x² – 3x – 5 = 0. a=2, b=-3, c=-5. Δ = (-3)² – 4×2×(-5) = 9 + 40 = 49, √49=7. x = [3 ± 7] / 4 → x = 10/4 = 2.5 or x = -4/4 = -1.\n\nDiscriminant significance:\n- Δ > 0: two different real roots.\n- Δ = 0: one repeated real root.\n- Δ < 0: no real roots (two complex roots).",
    "summary": "Quadratic formula solves any quadratic. Discriminant reveals the nature of roots. Memorise the formula and practise using it.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Projectile Motion",
        "description": "Use formula to find landing time."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Use quadratic formula to solve x² – 4x – 12 = 0.",
        "answer": "x = 6 or x = -2",
        "hint": "a=1,b=-4,c=-12, Δ=16+48=64, √64=8, x = [4 ± 8]/2."
      },
      {
        "question": "What is the discriminant of 3x² + 2x + 1 = 0?",
        "answer": "-8",
        "hint": "b² – 4ac = 4 – 12 = -8."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Quadratic Equations",
    "lessonNumber": 5,
    "lessonTitle": "Word Problems Involving Quadratic Equations",
    "lessonId": "maths-f3-quadratics-word-problems-1",
    "order": 18,
    "learningObjectives": [
      "Translate real‑world problems into quadratic equations",
      "Interpret solutions in context and discard extraneous answers"
    ],
    "introduction": "The real power of quadratic equations is in solving practical problems – from area of fields to profit calculations. Today we apply quadratics to everyday situations in Malawi.",
    "keyPoints": [
      "Identify unknown and define variable.",
      "Write equation based on conditions.",
      "Solve using factorisation or formula.",
      "Check that solutions are meaningful (positive lengths, time, etc.)."
    ],
    "detailedContent": "Problem type 1 – Area: A rectangular fish pond has length 4 m more than width. Area = 96 m². Let width = w → w(w+4)=96 → w²+4w-96=0 → (w+12)(w-8)=0 → w=8, length=12.\n\nProblem type 2 – Product: Two consecutive positive integers product = 182. Let n, n+1 → n(n+1)=182 → n²+n-182=0 → (n+14)(n-13)=0 → n=13, integers 13 and 14.\n\nProblem type 3 – Speed: A motorcyclist travels 120 km. If speed increased by 10 km/h, time reduces by 1 hour. Find original speed s. Equation: 120/s – 120/(s+10) = 1 → multiply: 120(s+10) – 120s = s(s+10) → 1200 = s²+10s → s²+10s-1200=0 → (s+40)(s-30)=0 → s=30 km/h.",
    "summary": "Quadratic equations model area, product, speed, profit problems. Solve and check for physical plausibility.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Maize Field Dimensions",
        "description": "Given area and length‑width difference."
      },
      {
        "title": "Bicycle Speed",
        "description": "Find original speed from time saved."
      }
    ],
    "practiceQuestions": [
      {
        "question": "The sum of a number and its reciprocal is 5/2. Find the number.",
        "answer": "2 or 1/2",
        "hint": "x + 1/x = 5/2 → multiply by 2x: 2x²+2=5x → 2x²-5x+2=0 → factor (2x-1)(x-2)=0."
      },
      {
        "question": "A rectangle has perimeter 28 m and area 48 m². Find dimensions.",
        "answer": "Length 8 m, width 6 m",
        "hint": "l + w = 14, lw=48 → w = 14-l → l(14-l)=48 → l²-14l+48=0 → (l-6)(l-8)=0."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Matrices",
    "lessonNumber": 1,
    "lessonTitle": "Introduction to Matrices: Order and Basic Operations",
    "lessonId": "maths-f4-matrices-1",
    "order": 19,
    "learningObjectives": [
      "Define a matrix and identify its order (rows × columns)",
      "Add and subtract matrices of the same order"
    ],
    "introduction": "Have you ever seen a spreadsheet with rows and columns? That is a real‑life MATRIX. Matrices help us organise data and perform complex calculations. Today we learn the basics.",
    "keyPoints": [
      "A matrix is a rectangular array of numbers arranged in rows and columns.",
      "Order: rows × columns. Example: 2×3 matrix has 2 rows and 3 columns.",
      "Addition/subtraction: only possible if matrices have the same order, add corresponding elements."
    ],
    "detailedContent": "Matrix definition: A = [1 2 3; 4 5 6] is a 2×3 matrix.\n\nOrder: rows × columns.\n\nAddition: if matrix A and B have same order, A + B = element‑wise addition.\n\nExample: A = [1 2; 3 4], B = [5 6; 7 8], then A + B = [6 8; 10 12].\n\nSubtraction similarly.\n\nMalawi example: A farmer sells maize and groundnuts to two markets. Sales matrix M = [100 50; 200 80] (rows: markets, columns: maize, groundnuts).",
    "summary": "A matrix is a rectangular array. Order = rows × columns. Add/subtract only same order, element‑wise.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Crop Sales Data",
        "description": "Organise harvest quantities from different villages into a matrix."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the order of a matrix with 3 rows and 4 columns?",
        "answer": "3×4",
        "hint": "rows × columns."
      },
      {
        "question": "Given A = [2 -1] and B = [0 3], find A + B.",
        "answer": "[2 2]",
        "hint": "Add corresponding elements: 2+0=2, -1+3=2."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Matrices",
    "lessonNumber": 2,
    "lessonTitle": "Scalar Multiplication and Matrix Multiplication",
    "lessonId": "maths-f4-matrices-2",
    "order": 20,
    "learningObjectives": [
      "Multiply a matrix by a scalar",
      "Multiply two matrices where columns of first = rows of second"
    ],
    "introduction": "Now that you can add matrices, it is time for the most important operation: MULTIPLICATION. This requires a special rule: the number of columns in the first matrix must equal the number of rows in the second.",
    "keyPoints": [
      "Scalar multiplication: multiply every element by the scalar.",
      "Matrix multiplication AB: if A is m×n and B is n×p, then AB is m×p.",
      "Each element is the dot product of a row of A and a column of B.",
      "Matrix multiplication is NOT commutative (AB ≠ BA)."
    ],
    "detailedContent": "Scalar multiplication: 3 × [2 4; 6 8] = [6 12; 18 24].\n\nMatrix multiplication: A = [1 2; 3 4], B = [5 6; 7 8], then AB = [1×5+2×7   1×6+2×8; 3×5+4×7   3×6+4×8] = [19 22; 43 50].\n\nMalawi example: Quantities matrix Q = [100 50; 200 80] (maize, groundnuts). Price vector P = [200; 300] (price per kg). Revenue = Q × P = [100×200+50×300; 200×200+80×300] = [35000; 64000] MK.",
    "summary": "Scalar multiplies each element. Matrix multiplication requires inner dimensions to match. Multiply rows by columns. Not commutative.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Revenue Calculation",
        "description": "Multiply quantity matrix by price matrix to find total sales per market."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Can you multiply a 3×2 matrix by a 2×4 matrix? If yes, what is the order of the product?",
        "answer": "Yes, 3×4",
        "hint": "3×2 and 2×4 → 3×4."
      },
      {
        "question": "Multiply [1 0; 0 1] by any 2×2 matrix. What do you get?",
        "answer": "The same matrix (identity property)",
        "hint": "Identity matrix acts like 1."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Progressions",
    "lessonNumber": 1,
    "lessonTitle": "Arithmetic Progressions (AP) – nth term",
    "lessonId": "maths-f4-progressions-ap-1",
    "order": 21,
    "learningObjectives": [
      "Identify an arithmetic progression and find the common difference",
      "Calculate the nth term using aₙ = a₁ + (n-1)d"
    ],
    "introduction": "Have you noticed patterns like 5,10,15,20... or 100,95,90,85...? These are ARITHMETIC PROGRESSIONS – sequences where the difference between consecutive terms is constant. Today we learn to describe them.",
    "keyPoints": [
      "An AP has constant common difference d = aₙ – aₙ₋₁.",
      "nth term: aₙ = a₁ + (n-1)d.",
      "Examples: 3,7,11,15,... d=4, a₁=3, a₁₀ = 3 + 9×4 = 39."
    ],
    "detailedContent": "Definition: arithmetic progression (AP) is a sequence where each term differs by a constant d.\n\nFormula: aₙ = a₁ + (n-1)d.\n\nExample: AP 5,9,13,17,... a₁=5, d=4. a₁₅ = 5 + 14×4 = 5+56=61.\n\nMalawi example: A student saves 1,000 MK in week 1, 1,200 in week 2, 1,400 in week 3 (increase 200 each week). Savings in week 12: a₁₂ = 1000 + 11×200 = 3,200 MK.",
    "summary": "AP has constant difference d. nth term: a₁ + (n-1)d.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Weekly Savings",
        "description": "Increasing savings each week by fixed amount."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find the 15th term of AP: 5,9,13,17,...",
        "answer": "61",
        "hint": "a₁=5, d=4, a₁₅ = 5 + 14×4 = 61"
      },
      {
        "question": "What is the common difference of the AP 2,5,8,11,...?",
        "answer": "3",
        "hint": "5-2=3"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Progressions",
    "lessonNumber": 2,
    "lessonTitle": "Arithmetic Progressions – Sum of n terms",
    "lessonId": "maths-f4-progressions-ap-2",
    "order": 22,
    "learningObjectives": [
      "Derive and apply the formula for sum of first n terms of an AP",
      "Use Sₙ = n/2 [2a₁ + (n-1)d] or Sₙ = n/2 (a₁ + aₙ)"
    ],
    "introduction": "Not only can we find any term in an AP, we can also find the total sum of the first n terms. This is useful for total savings, total distance, etc.",
    "keyPoints": [
      "Sum of first n terms: Sₙ = n/2 [2a₁ + (n-1)d]",
      "Also Sₙ = n/2 (a₁ + aₙ).",
      "Example: AP 3,7,11,15,... sum of first 10 terms: S₁₀ = 10/2 [2×3 + 9×4] = 5 × (6+36) = 210."
    ],
    "detailedContent": "Formula: Sₙ = n/2 [2a₁ + (n-1)d] = n/2 (first + last).\n\nExample: AP with a₁=3, d=4, n=10. S₁₀ = 5 × (6 + 36) = 210.\n\nMalawi example: Savings AP: a₁=1000, d=200. Total saved after 12 weeks: S₁₂ = 12/2 × [2000 + 11×200] = 6 × (2000+2200) = 6×4200 = 25,200 MK.",
    "summary": "Sum of AP: Sₙ = n/2 (2a₁ + (n-1)d). Useful for cumulative totals.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Total Savings",
        "description": "Sum of weekly savings after 12 weeks."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find sum of first 20 terms of AP: 2,5,8,11,...",
        "answer": "610",
        "hint": "a₁=2, d=3, S₂₀ = 20/2 (4 + 19×3) = 10 × (4+57)=610"
      },
      {
        "question": "An AP has first term 5 and last term 45. There are 9 terms. Find sum.",
        "answer": "225",
        "hint": "S₉ = 9/2 (5+45) = 4.5×50=225"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Progressions",
    "lessonNumber": 3,
    "lessonTitle": "Geometric Progressions – nth term",
    "lessonId": "maths-f4-progressions-gp-1",
    "order": 23,
    "learningObjectives": [
      "Identify a geometric progression and find the common ratio",
      "Calculate the nth term using aₙ = a₁ × rⁿ⁻¹"
    ],
    "introduction": "When a population doubles every year, or when money grows with compound interest, we see a pattern where each term is multiplied by a constant factor. That is a GEOMETRIC PROGRESSION. Today we learn the nth term.",
    "keyPoints": [
      "Geometric progression (GP): each term multiplied by common ratio r.",
      "nth term: aₙ = a₁ × rⁿ⁻¹.",
      "Example: 2,6,18,54,... r=3, a₈ = 2 × 3⁷ = 2×2187=4374."
    ],
    "detailedContent": "Definition: GP has constant ratio r = aₙ / aₙ₋₁.\n\nFormula: aₙ = a₁ rⁿ⁻¹.\n\nExample: GP 3,6,12,24,... a₁=3, r=2, a₇ = 3 × 2⁶ = 3×64 = 192.\n\nMalawi example: Compound interest. A farmer invests 100,000 MK at 10% per year compounded annually. After n years, amount = 100,000 × (1.10)ⁿ. After 3 years: 100,000 × 1.331 = 133,100 MK.",
    "summary": "GP has constant ratio r. nth term: a₁ rⁿ⁻¹. Models exponential growth/decay.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Compound Interest",
        "description": "Calculate investment growth using GP formula."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find the 7th term of GP: 3,6,12,24,...",
        "answer": "192",
        "hint": "a₁=3, r=2, a₇ = 3×2⁶=192"
      },
      {
        "question": "What is the common ratio of GP 5,15,45,...?",
        "answer": "3",
        "hint": "15/5=3"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Progressions",
    "lessonNumber": 4,
    "lessonTitle": "Geometric Progressions – Sum of n terms",
    "lessonId": "maths-f4-progressions-gp-2",
    "order": 24,
    "learningObjectives": [
      "Apply the formula for sum of the first n terms of a GP",
      "Use Sₙ = a₁(rⁿ – 1)/(r – 1) for r ≠ 1"
    ],
    "introduction": "Just as with AP, we can find the total sum of the first n terms of a GP. This is useful for total savings over time, total population growth, etc.",
    "keyPoints": [
      "Sum of first n terms: Sₙ = a₁(rⁿ – 1)/(r – 1) for r > 1.",
      "Also Sₙ = a₁(1 – rⁿ)/(1 – r) for r < 1.",
      "Example: GP 2,6,18,54,... S₆ = 2 × (3⁶ – 1)/(3 – 1) = 2 × (729 – 1)/2 = 2×728/2 = 728."
    ],
    "detailedContent": "Formula: Sₙ = a₁ (rⁿ – 1) / (r – 1) (for r > 1).\n\nExample: GP 2,6,18,54,162,486. a₁=2, r=3, n=6. S₆ = 2×(729-1)/(2) = 728.\n\nMalawi example: Population growth. If a village grows by 10% each year, initial population 500. After 3 years, population = 500×1.1³ = 665.5 (but sum is not usually used). However for total amount over years in investment, sum might be used for instalments.",
    "summary": "Sum of GP: Sₙ = a₁(rⁿ – 1)/(r – 1). Useful for total growth, savings, instalments.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Compound Interest Total",
        "description": "Total value after several years (single deposit)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find sum of first 5 terms of GP: 5,15,45,...",
        "answer": "605",
        "hint": "a₁=5, r=3, S₅ = 5×(3⁵-1)/(3-1) = 5×(243-1)/2 = 5×242/2 = 605"
      },
      {
        "question": "Find sum of first 4 terms of GP: 16,8,4,2,...",
        "answer": "30",
        "hint": "a₁=16, r=0.5, use formula (1-rⁿ) in numerator."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Linear Equations",
    "lessonNumber": 1,
    "lessonTitle": "Solving Simple Linear Equations (ax + b = c)",
    "lessonId": "maths-f1-linear-equations-1",
    "order": 25,
    "learningObjectives": [
      "Solve equations of the form ax + b = c where a, b, c are integers",
      "Check solutions by substitution"
    ],
    "introduction": "Equations are like balanced scales – what you do to one side, you must do to the other. Today we solve simple linear equations step by step.",
    "keyPoints": [
      "To solve ax + b = c, subtract b from both sides, then divide by a.",
      "Example: 3x + 5 = 14 → 3x = 9 → x = 3.",
      "Always check by substituting back into the original equation."
    ],
    "detailedContent": "Solving ax + b = c\n\nStep 1: Isolate the term with x by adding or subtracting the constant.\nStep 2: Divide by the coefficient of x.\n\nExample 1: 2x + 7 = 15\nSubtract 7 from both sides: 2x = 8\nDivide by 2: x = 4\nCheck: 2(4)+7 = 8+7 = 15 ✓\n\nExample 2: 5x – 3 = 12\nAdd 3: 5x = 15 → x = 3\nCheck: 5(3)-3 = 15-3=12 ✓\n\nExample 3: Solve 4x + 9 = 21 in the context: A farmer has 4 bags of maize and an extra 9 kg, total 21 kg. Find maize per bag. 4x = 12 → x = 3 kg per bag.\n\nNow practise: Solve 7x – 5 = 23, and 6x + 11 = 35.",
    "summary": "Solve ax + b = c by subtracting b then dividing by a. Always check your answer.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Maize Bags",
        "description": "4 bags + 9 kg = 21 kg → each bag 3 kg."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Solve 3x + 4 = 19",
        "answer": "x = 5",
        "hint": "Subtract 4, divide by 3."
      },
      {
        "question": "Solve 2x – 7 = 9",
        "answer": "x = 8",
        "hint": "Add 7, divide by 2."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Linear Equations",
    "lessonNumber": 2,
    "lessonTitle": "Equations with Variables on Both Sides",
    "lessonId": "maths-f1-linear-equations-2",
    "order": 26,
    "learningObjectives": [
      "Solve equations with the variable on both sides (e.g., ax + b = cx + d)",
      "Collect variable terms on one side and constants on the other"
    ],
    "introduction": "Sometimes the unknown appears on both sides of the equation. We can move terms from one side to the other by adding or subtracting. Today we solve such equations.",
    "keyPoints": [
      "Gather variable terms on one side, constant terms on the other.",
      "Example: 5x + 3 = 2x + 12 → subtract 2x: 3x + 3 = 12 → subtract 3: 3x = 9 → x = 3."
    ],
    "detailedContent": "Equation with x on both sides\n\nGoal: get all x terms on left, numbers on right.\n\nExample 1: 7x – 5 = 3x + 11\nSubtract 3x: 4x – 5 = 11\nAdd 5: 4x = 16 → x = 4.\n\nExample 2 (context): A shop sells notebooks. Shop A charges 500 MK per notebook plus a fixed 2000 MK delivery. Shop B charges 400 MK per notebook plus fixed 3000 MK. For how many notebooks are costs equal? 500x + 2000 = 400x + 3000 → 100x = 1000 → x = 10 notebooks.\n\nNow solve: 8x + 2 = 5x + 14; and 4x – 7 = 2x + 5.",
    "summary": "Bring variable terms to one side and constants to the other, then solve.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Mobile Money Transfer",
        "description": "Find units where two pricing plans equal."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Solve 6x + 5 = 2x + 21",
        "answer": "x = 4",
        "hint": "6x-2x=4x, 21-5=16, 4x=16→x=4"
      },
      {
        "question": "Solve 9x – 4 = 5x + 12",
        "answer": "x = 4",
        "hint": "9x-5x=4x, 12+4=16, 4x=16→x=4"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Geometry",
    "lessonNumber": 1,
    "lessonTitle": "Types of Angles and Angle Relationships",
    "lessonId": "maths-f1-angles-1",
    "order": 27,
    "learningObjectives": [
      "Identify acute, right, obtuse, straight, reflex angles",
      "Use angle relationships: vertically opposite angles are equal, angles on a straight line sum to 180°"
    ],
    "introduction": "Angles are everywhere – in buildings, chairs, even your elbow. Today we learn to name angles and find unknown angles using simple rules.",
    "keyPoints": [
      "Acute: between 0° and 90°. Right: exactly 90°. Obtuse: 90°–180°. Straight: 180°. Reflex: 180°–360°.",
      "Vertically opposite angles are equal.",
      "Angles on a straight line sum to 180°."
    ],
    "detailedContent": "Types of angles:\n- Acute: 30°, 45°, 60°\n- Right: 90° (corner of a book)\n- Obtuse: 120°, 150°\n- Straight: 180° (straight line)\n- Reflex: 210°, 300°\n\nAngle rules:\n1. Vertically opposite angles: when two lines cross, opposite angles are equal.\n2. Angles on a straight line: add up to 180°.\n\nExample: Two lines intersect, one angle is 120°. Find the other three angles. Opposite angle = 120°. Adjacent on straight line = 180° – 120° = 60°. The fourth angle is also 60° (vertically opposite to that 60°).\n\nMalawi example: Roof of a house: rafters create angles. A 90° corner is a right angle; an acute angle in the truss.\n\nNow find unknown angles in a diagram: if one angle is 35°, find its vertically opposite and its adjacent on a straight line.",
    "summary": "Acute (<90°), right (90°), obtuse (>90°), straight (180°). Vertically opposite equal; adjacent on a straight line sum to 180°.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Roof Trusses",
        "description": "Identifying acute and obtuse angles in traditional houses."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of angle is 145°?",
        "answer": "Obtuse",
        "hint": "Between 90° and 180°."
      },
      {
        "question": "Two angles on a straight line are 112° and x°. Find x.",
        "answer": "68°",
        "hint": "180 – 112 = 68."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Geometry",
    "lessonNumber": 2,
    "lessonTitle": "Parallel Lines and Transversals",
    "lessonId": "maths-f1-parallel-lines-1",
    "order": 28,
    "learningObjectives": [
      "Identify corresponding, alternate, and co‑interior angles formed by parallel lines",
      "Calculate unknown angles using parallel line properties"
    ],
    "introduction": "Parallel lines never meet. When a transversal crosses them, special angle relationships appear. Today we learn these rules.",
    "keyPoints": [
      "Corresponding angles are equal (F‑pattern).",
      "Alternate angles are equal (Z‑pattern).",
      "Co‑interior angles sum to 180° (C‑pattern)."
    ],
    "detailedContent": "Parallel lines and transversal\n\n1. Corresponding angles (same position relative to the transversal): equal.\n   Example: if one corresponding is 70°, the other is 70°.\n\n2. Alternate angles (between parallel lines, on opposite sides of transversal): equal.\n   Example: Z‑shape.\n\n3. Co‑interior angles (between parallel lines, same side of transversal): add to 180°.\n   Example: if one is 110°, the other is 70°.\n\nMalawi example: The lines on a notebook, railway lines, or rows of maize plants – when a path crosses them, these angle rules apply.\n\nNow find unknowns: given one alternate angle is 38°, find the co‑interior angle.",
    "summary": "Corresponding equal, alternate equal, co‑interior sum to 180°.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Maize Rows",
        "description": "Rows of maize and a cross path illustrate parallel line angles."
      }
    ],
    "practiceQuestions": [
      {
        "question": "If a pair of co‑interior angles are 2x and 3x, find x.",
        "answer": "36°",
        "hint": "2x+3x=180 → 5x=180 → x=36"
      },
      {
        "question": "Corresponding angles are 5x and 75°, find x.",
        "answer": "15°",
        "hint": "5x=75 → x=15"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Geometry",
    "lessonNumber": 3,
    "lessonTitle": "Triangles – Types and Angle Sum",
    "lessonId": "maths-f1-triangles-1",
    "order": 29,
    "learningObjectives": [
      "Classify triangles by sides (scalene, isosceles, equilateral) and by angles (acute, right, obtuse)",
      "State and use the angle sum property of a triangle (sum = 180°)"
    ],
    "introduction": "Triangles are the strongest shape in construction. Today we learn their types and the important fact that all three angles add up to 180°.",
    "keyPoints": [
      "By sides: scalene (all sides different), isosceles (two equal sides), equilateral (all sides equal).",
      "By angles: acute (all <90°), right (one 90°), obtuse (one >90°).",
      "Interior angles sum to 180°: a + b + c = 180°."
    ],
    "detailedContent": "Triangle classification\n\nSides:\n- Scalene: all sides different lengths.\n- Isosceles: two sides equal, base angles equal.\n- Equilateral: all sides equal, all angles 60°.\n\nAngles:\n- Acute: all angles < 90°.\n- Right: one angle = 90° (hypotenuse side).\n- Obtuse: one angle > 90°.\n\nAngle sum: a + b + c = 180°.\n\nExample: In a triangle, two angles are 50° and 70°. Find the third: 180 – 50 – 70 = 60°.\n\nMalawi example: A wooden roof truss forms an isosceles triangle. Base angles are 70° each. Find apex: 180 – 140 = 40°.\n\nNow find: in a right triangle, one acute angle is 35°, find the other acute angle.",
    "summary": "Triangles: scalene, isosceles, equilateral; acute, right, obtuse. Angles add to 180°.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Roof Truss",
        "description": "Isosceles triangle in traditional houses."
      }
    ],
    "practiceQuestions": [
      {
        "question": "In an equilateral triangle, what is each angle?",
        "answer": "60°",
        "hint": "All equal, sum 180°."
      },
      {
        "question": "If an isosceles triangle has vertex angle 40°, find base angles.",
        "answer": "70° each",
        "hint": "Base angles equal; 180-40=140, /2=70"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Geometry",
    "lessonNumber": 4,
    "lessonTitle": "Quadrilaterals – Interior Angles Sum",
    "lessonId": "maths-f1-quadrilaterals-1",
    "order": 30,
    "learningObjectives": [
      "Identify common quadrilaterals: square, rectangle, parallelogram, trapezium",
      "Use the sum of interior angles of a quadrilateral (360°)"
    ],
    "introduction": "Quadrilaterals have four sides. They include squares, rectangles, and many others. Today we learn their angle sum and basic features.",
    "keyPoints": [
      "Sum of interior angles of any quadrilateral = 360°.",
      "Square: all sides equal, all angles 90°.",
      "Rectangle: opposite sides equal, all angles 90°.",
      "Parallelogram: opposite sides parallel, opposite angles equal.",
      "Trapezium: one pair of parallel sides."
    ],
    "detailedContent": "Quadrilaterals\n\nAngle sum: divide into two triangles → each triangle 180°, total 360°.\n\nProperties:\n- Square: equal sides, right angles.\n- Rectangle: equal opposite sides, right angles.\n- Parallelogram: opposite sides parallel, opposite angles equal, adjacent angles supplementary (sum 180°).\n- Rhombus: all sides equal, opposite angles equal.\n- Trapezium: one pair of parallel sides.\n\nExample: In a parallelogram, one angle is 70°. Find the other three. Opposite angle = 70°. Adjacent angles are supplementary: 180-70=110°. So angles: 70°,110°,70°,110°.\n\nMalawi example: A school football field is rectangular. Each corner is 90°.\n\nNow find: if a quadrilateral has angles 85°, 95°, and 100°, find the fourth angle.",
    "summary": "Quadrilateral interior angles sum to 360°. Squares and rectangles have 90° angles. Parallelograms have opposite equal, adjacent supplementary.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Football Field",
        "description": "Rectangle with 90° corners."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Three angles of a quadrilateral are 110°, 80°, and 70°. Find the fourth.",
        "answer": "100°",
        "hint": "360 – (110+80+70) = 360-260=100"
      },
      {
        "question": "In a parallelogram, one angle is 120°. Find the others.",
        "answer": "120°,60°,120°,60°",
        "hint": "Opposite equal, adjacent supplementary."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Mensuration",
    "lessonNumber": 1,
    "lessonTitle": "Area and Perimeter of Rectangles and Squares",
    "lessonId": "maths-f1-area-perimeter-1",
    "order": 31,
    "learningObjectives": [
      "Calculate perimeter and area of squares and rectangles",
      "Apply formulas to real‑life problems (e.g., fencing a field, laying tiles)"
    ],
    "introduction": "How much fencing do you need for a maize field? How many tiles for a floor? These are perimeter and area problems. Today we learn the formulas.",
    "keyPoints": [
      "Perimeter of rectangle = 2(length + width). Square = 4 × side.",
      "Area of rectangle = length × width. Square = side².",
      "Units: perimeter in m, cm; area in m², cm²."
    ],
    "detailedContent": "Formulas\n\nRectangle:\n- Perimeter P = 2(l + w)\n- Area A = l × w\n\nSquare (l = w = s):\n- P = 4s\n- A = s²\n\nExample 1: A rectangular field is 20 m long and 15 m wide. Fence length = 2(20+15)=70 m. Area = 20×15=300 m².\n\nExample 2: A square garden of side 12 m. Perimeter=48 m, area=144 m².\n\nMalawi example: A farmer wants to fence a rectangular vegetable garden 30 m by 20 m. How much wire needed? 2(30+20)=100 m. For planting, he needs area = 600 m².\n\nNow calculate: A rectangle 8 m by 5 m: perimeter and area. A square of side 9 m: perimeter and area.",
    "summary": "Rectangle: P=2(l+w), A=l×w. Square: P=4s, A=s².",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Garden Fence",
        "description": "Perimeter to buy fencing wire."
      },
      {
        "title": "Maize Field Planting",
        "description": "Area to calculate seed needed."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find perimeter and area of a rectangle 12 m by 8 m.",
        "answer": "P=40 m, A=96 m²",
        "hint": "2(12+8)=40, 12×8=96"
      },
      {
        "question": "A square garden has area 64 m². Find side and perimeter.",
        "answer": "Side=8 m, P=32 m",
        "hint": "√64=8, 4×8=32"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Mensuration",
    "lessonNumber": 2,
    "lessonTitle": "Volume of Cuboids and Capacity",
    "lessonId": "maths-f1-volume-1",
    "order": 32,
    "learningObjectives": [
      "Calculate volume of a cuboid using V = length × width × height",
      "Relate volume to capacity (1 cm³ = 1 mL, 1 m³ = 1000 L)"
    ],
    "introduction": "How much water can a fish pond hold? How many bricks fit in a box? That is volume. Today we learn to find the volume of cuboids and convert to capacity.",
    "keyPoints": [
      "Volume = length × width × height (all in same units).",
      "Unit of volume: cm³, m³.",
      "Capacity: 1 cm³ = 1 mL; 1000 cm³ = 1 L; 1 m³ = 1000 L."
    ],
    "detailedContent": "Volume of a cuboid\n\nFormula: V = l × w × h.\n\nExample 1: A water tank is 2 m long, 1.5 m wide, 1 m high. Volume = 2×1.5×1 = 3 m³ = 3000 L (since 1 m³ = 1000 L).\n\nExample 2: A box of maize seeds is 30 cm × 20 cm × 15 cm. Volume = 30×20×15 = 9000 cm³ = 9 L (since 1000 cm³ = 1 L).\n\nMalawi example: A fish pond measures 10 m × 5 m × 1.5 m deep. Volume = 75 m³ = 75,000 L.\n\nNow calculate: A brick 20 cm × 10 cm × 5 cm: volume in cm³ and in litres.",
    "summary": "Volume of cuboid = l × w × h. Capacity: 1 cm³ = 1 mL, 1 m³ = 1000 L.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Fish Pond",
        "description": "Volume in m³ and litres."
      },
      {
        "title": "Water Tank",
        "description": "Capacity for storing rainwater."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A box is 40 cm × 30 cm × 20 cm. Find volume in cm³ and L.",
        "answer": "24,000 cm³ = 24 L",
        "hint": "40×30×20=24000; /1000=24"
      },
      {
        "question": "A classroom is 8 m × 6 m × 3 m. Find volume in m³.",
        "answer": "144 m³",
        "hint": "8×6×3=144"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Graphs",
    "lessonNumber": 1,
    "lessonTitle": "The Cartesian Plane and Plotting Points",
    "lessonId": "maths-f1-cartesian-1",
    "order": 33,
    "learningObjectives": [
      "Draw and label the Cartesian plane (x‑axis, y‑axis, origin)",
      "Plot points given coordinates (x,y)"
    ],
    "introduction": "The Cartesian plane is a map for locating points using two numbers – like a grid. Today we learn to plot points and read coordinates.",
    "keyPoints": [
      "Horizontal axis: x‑axis; vertical: y‑axis. Intersection: origin (0,0).",
      "Coordinates (x,y): first move right/left (x), then up/down (y).",
      "Point (3,2): right 3, up 2. Point (-2,4): left 2, up 4."
    ],
    "detailedContent": "The axes\n\n- x‑axis: positive to right, negative to left.\n- y‑axis: positive up, negative down.\n\nPlotting: for (3,5), start at origin, move 3 right, then 5 up.\n\nQuadrants: Q1 (+,+), Q2 (–,+), Q3 (–,–), Q4 (+,–).\n\nExample: Plot A(2,3), B(‑1,4), C(‑2,‑3), D(4,‑2).\n\nMalawi example: A map of Lilongwe with grid references. The school is at (4,2), market at (1,5), bus station at (‑2,‑1).\n\nNow practise plotting points: (3,3), (‑2,5), (‑4,‑1), (0,4).",
    "summary": "Cartesian plane: x (horizontal), y (vertical). (x,y) – right/left then up/down.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Town Map",
        "description": "Grid references for locations."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What quadrant is (‑5,3) in?",
        "answer": "Quadrant II",
        "hint": "x negative, y positive."
      },
      {
        "question": "Give coordinates of a point 4 units right, 2 units down from origin.",
        "answer": "(4,‑2)",
        "hint": "x=4, y=‑2."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Statistics",
    "lessonNumber": 1,
    "lessonTitle": "Data Collection and Frequency Tables",
    "lessonId": "maths-f1-statistics-1",
    "order": 34,
    "learningObjectives": [
      "Collect and organise data using frequency tables",
      "Calculate the mean (average) of a set of numbers"
    ],
    "introduction": "Statistics helps us understand data – like the average harvest per farmer, or the most common age in a village. Today we learn to collect data and find the mean.",
    "keyPoints": [
      "Frequency table: lists values and how often each occurs.",
      "Mean = sum of all values ÷ number of values.",
      "Example: maize yields (kg): 120, 130, 140, 125, 135. Sum=650, n=5, mean=130 kg."
    ],
    "detailedContent": "Frequency table: record tally marks then counts.\n\nExample: Number of goats in 10 households: 2,3,2,1,3,2,4,3,2,2. Table: 1:1, 2:5, 3:3, 4:1.\n\nMean: sum all values divide by count.\n\nExample: Scores on a test: 5,7,8,6,9,7,5,8. Sum = 55, n=8, mean = 6.875.\n\nMalawi example: A farmer records daily harvest of maize cobs: 40,45,42,48,44. Mean = (40+45+42+48+44)/5 = 219/5 = 43.8 cobs.\n\nNow find mean of: 15,20,25,30,35.",
    "summary": "Frequency tables organise data. Mean = total ÷ count.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Goats per Household",
        "description": "Find average goats per family."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find the mean of 12,15,18,21,24",
        "answer": "18",
        "hint": "Sum=90, n=5 → 18"
      },
      {
        "question": "If the mean of five numbers is 10, what is their total?",
        "answer": "50",
        "hint": "Total = mean × count = 10×5=50"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Statistics",
    "lessonNumber": 2,
    "lessonTitle": "Median, Mode and Range",
    "lessonId": "maths-f1-statistics-2",
    "order": 35,
    "learningObjectives": [
      "Find the median and mode of a data set",
      "Calculate the range (largest – smallest)"
    ],
    "introduction": "Sometimes the mean is not enough. The median is the middle value, the mode is the most common, and the range shows spread. Today we practise these.",
    "keyPoints": [
      "Median: middle value when data sorted (if odd n) or average of two middle values (if even).",
      "Mode: most frequent value. Data can have no mode or multiple modes.",
      "Range = highest – lowest."
    ],
    "detailedContent": "Median:\n- Sort data ascending.\n- Odd count: middle = (n+1)/2 th value.\n- Even count: average of n/2 and (n/2)+1 th values.\n\nMode: value(s) that appear most often.\n\nRange: max – min.\n\nExample: maize yields (kg): 110,120,130,140,150. Median = 130 (3rd). Mode none. Range = 150-110=40.\n\nEven set: 2,4,6,8. Median = (4+6)/2=5.\n\nMalawi example: Ages of children in a village: 5,7,7,8,9,10. Median: (7+8)/2=7.5. Mode=7. Range=10-5=5.\n\nNow find median, mode, range: 3,5,7,7,9,11,11.",
    "summary": "Median: middle value. Mode: most frequent. Range: max – min.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Children Ages",
        "description": "Find typical age using median and mode."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find median of 8,3,9,5,7",
        "answer": "7",
        "hint": "Sort 3,5,7,8,9 → middle 7"
      },
      {
        "question": "Find mode of 2,4,4,6,8,8,8,10",
        "answer": "8",
        "hint": "Appears three times."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Statistics",
    "lessonNumber": 3,
    "lessonTitle": "Bar Charts and Pictograms",
    "lessonId": "maths-f1-bar-charts-1",
    "order": 36,
    "learningObjectives": [
      "Draw and interpret bar charts from frequency tables",
      "Create and interpret pictograms using a key"
    ],
    "introduction": "Charts make data easy to see. Bar charts and pictograms help us compare quantities at a glance. Today we practise drawing them.",
    "keyPoints": [
      "Bar chart: bars of equal width, height proportional to frequency.",
      "Pictogram: uses symbols to represent quantities; a key explains symbol value.",
      "Both need titles and labels."
    ],
    "detailedContent": "Bar chart:\n- Draw axes: x‑axis categories, y‑axis frequency.\n- Bars do not touch.\n\nPictogram:\n- Choose symbol (e.g., a bag).\n- Key: 1 bag = 20 kg of maize.\n- For 100 kg, draw 5 bags.\n\nExample: Crop yields: maize 60%, groundnuts 20%, vegetables 10%, others 10%. Draw bar chart.\n\nMalawi example: Number of livestock in a village: cattle 15, goats 30, chickens 80. Make a bar chart.\n\nNow create a bar chart for your favourite data.",
    "summary": "Bar charts compare frequencies with heights. Pictograms use symbols; key defines value.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Livestock Bar Chart",
        "description": "Compare cattle, goats, chickens."
      }
    ],
    "practiceQuestions": [
      {
        "question": "In a pictogram, one 🐱 = 10 cats. How many cats for 3.5 symbols?",
        "answer": "35",
        "hint": "3.5×10=35"
      },
      {
        "question": "What should a bar chart include?",
        "answer": "Title, labelled axes, equal‑width bars.",
        "hint": "Clear labelling."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Linear Inequalities",
    "lessonNumber": 1,
    "lessonTitle": "Solving Linear Inequalities",
    "lessonId": "maths-f2-inequalities-1",
    "order": 37,
    "learningObjectives": [
      "Solve linear inequalities using inverse operations",
      "Graph solutions on a number line"
    ],
    "introduction": "Inequalities tell us about ranges – “more than”, “at most”, “between”. Today we solve inequalities and show the answer on a number line.",
    "keyPoints": [
      "Solve like linear equations, but when multiplying or dividing by a negative number, reverse the inequality sign.",
      "Graph: open circle for < or >, closed circle for ≤ or ≥.",
      "Example: 3x – 5 < 10 → 3x < 15 → x < 5."
    ],
    "detailedContent": "Solving steps:\n\nExample 1: 2x + 7 ≥ 15 → 2x ≥ 8 → x ≥ 4. Graph: closed circle at 4, shade right.\n\nExample 2: –3x > 9 → divide by –3 (reverse sign) → x < –3. Graph: open circle at –3, shade left.\n\nExample 3 (context): A farmer has 5000 MK to buy fertiliser. Each bag costs 200 MK. How many bags can he buy? 200b ≤ 5000 → b ≤ 25. So at most 25 bags.\n\nNow solve: 5x – 4 ≤ 11 and graph. Also –2x + 3 < 9.",
    "summary": "Inequalities: solve by inverse operations; reverse sign when multiplying/dividing by negative. Graph on number line.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Fertiliser Purchase",
        "description": "Maximum bags affordable within budget."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Solve 4x – 7 > 9",
        "answer": "x > 4",
        "hint": "4x > 16 → x > 4"
      },
      {
        "question": "Graph x ≤ –3 on a number line",
        "answer": "Closed circle at –3, shade left."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Ratio and Proportion",
    "lessonNumber": 1,
    "lessonTitle": "Simplifying and Dividing in Ratios",
    "lessonId": "maths-f2-ratio-1",
    "order": 38,
    "learningObjectives": [
      "Simplify ratios to lowest terms",
      "Divide a quantity into a given ratio"
    ],
    "introduction": "Ratios compare quantities. If you mix fertiliser, the ratio tells how much of each. Today we simplify ratios and share amounts.",
    "keyPoints": [
      "Ratios can be simplified by dividing all parts by common factor.",
      "To divide a quantity in ratio a:b, first find total parts, then value of one part.",
      "Example: share 400 MK in ratio 3:5 → total parts 8, one part 50 MK, so 150 MK and 250 MK."
    ],
    "detailedContent": "Simplifying:\n\nExample: 12:18 = divide by 6 → 2:3.\n\nDivide in ratio:\n\nExample: Divide 720 MK between A and B in ratio 2:3 → total parts 5, one part = 720/5 = 144 MK. A gets 2×144=288 MK, B gets 3×144=432 MK.\n\nMalawi example: A farmer mixes fertiliser in ratio 4:1 (NPK to urea). For 50 kg total, NPK = 4/5 × 50 = 40 kg, urea = 10 kg.\n\nNow simplify 24:36 and divide 500 MK in ratio 2:3.",
    "summary": "Ratios compare quantities. Simplify by dividing common factor. Sharing: total parts, value per part.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Fertiliser Mix",
        "description": "Ratio of NPK to urea."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Simplify 18:24",
        "answer": "3:4",
        "hint": "Divide by 6"
      },
      {
        "question": "Share 300 kg of maize in ratio 2:3:5",
        "answer": "60 kg, 90 kg, 150 kg",
        "hint": "Total parts 10, one part 30 kg"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Ratio and Proportion",
    "lessonNumber": 2,
    "lessonTitle": "Scale Drawings and Map Scales",
    "lessonId": "maths-f2-scale-drawing-1",
    "order": 39,
    "learningObjectives": [
      "Use map scales (e.g., 1:50,000) to find real distances",
      "Construct simple scale drawings given a scale"
    ],
    "introduction": "Maps and plans use scales to represent large areas on paper. Today we learn to read scales and calculate actual distances.",
    "keyPoints": [
      "Scale 1 : n means 1 cm on map = n cm in real life; can also be expressed as a ratio.",
      "Convert units consistently (cm to km: divide by 100,000).",
      "Example: scale 1:100,000, distance on map 6 cm → real = 6 × 100,000 cm = 600,000 cm = 6 km."
    ],
    "detailedContent": "Scale as ratio:\n\nExample: scale 1:50,000. 4 cm on map → real = 4 × 50,000 cm = 200,000 cm = 2 km.\n\nConstructing scale drawing: if a field is 100 m × 60 m, scale 1:1000 → dimensions on paper: 100/1000 = 0.1 m = 10 cm, and 60/1000 = 0.06 m = 6 cm. Draw a rectangle 10 cm × 6 cm.\n\nMalawi example: A map of Lilongwe has scale 1:200,000. Distance between two villages on map 5 cm → real = 5 × 200,000 cm = 1,000,000 cm = 10 km.\n\nNow: scale 1:25,000, map distance 8 cm. Find real distance in km.",
    "summary": "Map scale (1:n) means 1 unit on map = n units real. Use consistent units to calculate distances.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Lilongwe Map",
        "description": "Find real distance between Likuni and Lilongwe City."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Scale 1:500, map distance 12 cm. Real distance in metres?",
        "answer": "60 m",
        "hint": "12×500=6000 cm = 60 m"
      },
      {
        "question": "A field is 120 m × 80 m. Scale 1:2000. Find dimensions on paper.",
        "answer": "6 cm × 4 cm",
        "hint": "120/2000=0.06 m=6 cm, 80/2000=0.04 m=4 cm"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Pythagoras Theorem",
    "lessonNumber": 1,
    "lessonTitle": "The Pythagorean Theorem (a² + b² = c²)",
    "lessonId": "maths-f2-pythagoras-1",
    "order": 40,
    "learningObjectives": [
      "State the Pythagorean theorem (right‑angled triangle)",
      "Calculate the hypotenuse given two legs"
    ],
    "introduction": "Pythagoras discovered a relationship between the sides of a right triangle. Today we use a² + b² = c² to find missing sides.",
    "keyPoints": [
      "c is the hypotenuse (longest side, opposite right angle).",
      "a² + b² = c².",
      "Example: legs 3 cm and 4 cm → c² = 9+16=25 → c=5 cm."
    ],
    "detailedContent": "Pythagoras theorem: a² + b² = c².\n\nExample 1: Find hypotenuse when legs are 6 m and 8 m. c² = 36+64=100 → c=10 m.\n\nExample 2 (context): A rectangular field is 30 m by 40 m. Diagonal path length: √(30²+40²)=√(900+1600)=√2500=50 m.\n\nMalawi example: A ladder leans against a wall. The base is 2 m from wall, top reaches 4.5 m high. How long is ladder? c² = 2²+4.5² = 4+20.25=24.25 → c≈4.92 m.\n\nNow find hypotenuse: legs 5 cm, 12 cm.",
    "summary": "For right triangles: a² + b² = c². Use to find missing sides.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Ladder against wall",
        "description": "Find length using Pythagoras."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find hypotenuse of right triangle with legs 9 cm, 12 cm.",
        "answer": "15 cm",
        "hint": "√(81+144)=√225=15"
      },
      {
        "question": "A right triangle has hypotenuse 13 cm, one leg 5 cm. Find other leg.",
        "answer": "12 cm",
        "hint": "b² = 13² – 5² = 169-25=144 → b=12"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Circle Geometry",
    "lessonNumber": 1,
    "lessonTitle": "Parts of a Circle and Circumference",
    "lessonId": "maths-f2-circle-1",
    "order": 41,
    "learningObjectives": [
      "Identify radius, diameter, circumference, chord, arc, sector",
      "Calculate circumference using C = πd or C = 2πr"
    ],
    "introduction": "Circles are everywhere – wheels, pots, drums. Today we name their parts and learn to calculate the distance around (circumference).",
    "keyPoints": [
      "Radius (r) from centre to edge; diameter (d) = 2r, through centre.",
      "Circumference (C) = πd = 2πr. Use π ≈ 3.14 or 22/7.",
      "Other parts: chord (line joining two points), arc (part of circumference), sector (slice)."
    ],
    "detailedContent": "Parts:\n- Radius: from centre to circumference.\n- Diameter: across circle through centre, d = 2r.\n- Circumference: perimeter of circle. C = πd = 2πr.\n\nExample: A circular well has radius 1.5 m. Circumference = 2×3.14×1.5 = 9.42 m.\n\nMalawi example: A drum (nsonga) used for water has diameter 50 cm. Circumference = π×50 ≈ 157 cm.\n\nNow calculate circumference of a circle with radius 7 cm (π=22/7): C = 2×22/7×7 = 44 cm.",
    "summary": "Radius and diameter; circumference = πd = 2πr.",
    "estimatedTime": "16 mins",
    "malawiExamples": [
      {
        "title": "Water Drum",
        "description": "Circumference to tie rope around."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find circumference of a circle with radius 14 cm (π=22/7).",
        "answer": "88 cm",
        "hint": "2×22/7×14 = 88"
      },
      {
        "question": "Diameter is 10 m. Find circumference using π≈3.14.",
        "answer": "31.4 m",
        "hint": "C=3.14×10=31.4"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Circle Geometry",
    "lessonNumber": 2,
    "lessonTitle": "Area of a Circle",
    "lessonId": "maths-f2-circle-area-1",
    "order": 42,
    "learningObjectives": [
      "Calculate area of a circle using A = πr²",
      "Solve problems involving both area and circumference"
    ],
    "introduction": "How much paint to cover a circular table? How much grass in a circular garden? That is area. Today we learn A = πr².",
    "keyPoints": [
      "Area of circle = πr².",
      "Given diameter, radius = d/2.",
      "Example: radius 5 cm → area = 3.14×25 = 78.5 cm²."
    ],
    "detailedContent": "Formula A = πr².\n\nExample 1: A circular garden has radius 4 m. Area = 3.14×16 = 50.24 m².\n\nExample 2: A pond has diameter 6 m. Radius = 3 m, area = 3.14×9 = 28.26 m².\n\nMalawi example: A traditional round hut has radius 2.5 m. Floor area = 3.14×6.25 ≈ 19.6 m².\n\nNow find area of circle radius 7 cm (π=22/7): A = 22/7 × 7² = 22/7×49 = 154 cm².",
    "summary": "Area of circle = πr². Use radius; if given diameter, divide by 2.",
    "estimatedTime": "16 mins",
    "malawiExamples": [
      {
        "title": "Round Hut Floor",
        "description": "Area for flooring material."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find area of circle with radius 10 cm (π=3.14).",
        "answer": "314 cm²",
        "hint": "3.14×100=314"
      },
      {
        "question": "Diameter 14 cm, find area (π=22/7).",
        "answer": "154 cm²",
        "hint": "r=7, area=22/7×49=154"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Mensuration – Surface Area",
    "lessonNumber": 1,
    "lessonTitle": "Surface Area of Cubes and Cuboids",
    "lessonId": "maths-f2-surface-area-1",
    "order": 43,
    "learningObjectives": [
      "Calculate surface area of a cube and cuboid",
      "Apply formulas to real objects (e.g., boxes, rooms)"
    ],
    "introduction": "To wrap a gift, you need to know the surface area. Today we find total surface area of boxes (cuboids) and cubes.",
    "keyPoints": [
      "Cube: 6 faces, each area = s² → SA = 6s².",
      "Cuboid: SA = 2(lw + lh + wh).",
      "Units: area in cm², m²."
    ],
    "detailedContent": "Cube SA = 6 × side².\n\nCuboid SA = 2(lw + lh + wh).\n\nExample 1: Cube side 4 cm. SA = 6×16 = 96 cm².\n\nExample 2: A box 20 cm × 10 cm × 5 cm. SA = 2(20×10 + 20×5 + 10×5) = 2(200+100+50) = 2×350 = 700 cm².\n\nMalawi example: A maize storage bin (metal) of dimensions 2 m × 1.5 m × 1 m. Surface area (outside) for painting: 2(2×1.5 + 2×1 + 1.5×1) = 2(3+2+1.5) = 2×6.5 = 13 m².\n\nNow calculate surface area of a cube side 10 cm and a cuboid 15 cm × 12 cm × 8 cm.",
    "summary": "Cube: SA=6s². Cuboid: SA=2(lw+lh+wh).",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Maize Bin",
        "description": "Paint area for a metal storage bin."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Cube side 5 cm, find SA.",
        "answer": "150 cm²",
        "hint": "6×25=150"
      },
      {
        "question": "Cuboid 4 m × 3 m × 2 m, find SA.",
        "answer": "52 m²",
        "hint": "2(12+8+6)=2×26=52"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Mensuration – Volume",
    "lessonNumber": 1,
    "lessonTitle": "Volume of Cylinders",
    "lessonId": "maths-f2-cylinder-volume-1",
    "order": 44,
    "learningObjectives": [
      "Calculate volume of a cylinder using V = πr²h",
      "Relate volume to capacity in litres (1 m³ = 1000 L)"
    ],
    "introduction": "Cylinders are common – water tanks, drums, pipes. Today we learn to find their volume and capacity.",
    "keyPoints": [
      "Volume of cylinder = area of base × height = πr²h.",
      "Units: cm³, m³.",
      "Capacity: 1 cm³ = 1 mL, 1 m³ = 1000 L."
    ],
    "detailedContent": "Formula V = πr²h.\n\nExample 1: A cylindrical drum radius 0.5 m, height 1.2 m. Volume = 3.14×0.25×1.2 = 3.14×0.3 = 0.942 m³ = 942 L.\n\nExample 2: A pipe (internal) radius 5 cm, length 3 m = 300 cm. Volume = 3.14×25×300 = 3.14×7500 = 23,550 cm³ = 23.55 L.\n\nMalawi example: A water tank radius 0.7 m, height 1.5 m. V = 3.14×0.49×1.5 ≈ 3.14×0.735 = 2.3079 m³ ≈ 2308 L.\n\nNow find volume of cylinder r=10 cm, h=20 cm (π=3.14).",
    "summary": "Volume of cylinder = πr²h. Convert to litres: 1 m³ = 1000 L, 1000 cm³ = 1 L.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Water Tank",
        "description": "Calculate capacity for rainwater harvesting."
      }
    ],
    "practiceQuestions": [
      {
        "question": "r=7 cm, h=10 cm, π=22/7, find volume.",
        "answer": "1540 cm³",
        "hint": "22/7×49×10 = 1540"
      },
      {
        "question": "A cylinder has volume 1 m³, height 2 m. Find radius (π=3.14).",
        "answer": "0.399 m ≈ 40 cm",
        "hint": "πr²×2=1 → r²=1/(6.28)≈0.159 → r≈0.399 m"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 2",
    "topic": "Probability",
    "lessonNumber": 1,
    "lessonTitle": "Probability of Simple Events",
    "lessonId": "maths-f2-probability-1",
    "order": 45,
    "learningObjectives": [
      "Define probability as number of favourable outcomes / total outcomes",
      "Calculate probability of simple events (e.g., rolling a die, picking a coloured ball)"
    ],
    "introduction": "Probability measures chance – from 0 (impossible) to 1 (certain). Today we calculate the likelihood of simple events.",
    "keyPoints": [
      "P(event) = favourable outcomes / total possible outcomes (all equally likely).",
      "Example: rolling a die – P(5) = 1/6.",
      "Probability 0.5 means even chance."
    ],
    "detailedContent": "Formula: P = (favourable) / (total).\n\nExample 1: A bag has 4 red, 3 blue, 5 green balls. Total = 12. P(red) = 4/12 = 1/3. P(blue) = 3/12 = 1/4.\n\nExample 2: Select a day of week at random. P(Saturday) = 1/7, P(weekend) = 2/7.\n\nMalawi example: In a lottery, 500 tickets, you have 5 tickets. P(win) = 5/500 = 1/100 = 0.01.\n\nNow calculate: A box has 10 eggs, 2 are bad. Probability of picking a good egg?",
    "summary": "Probability = favourable / total. Range 0 to 1.",
    "estimatedTime": "16 mins",
    "malawiExamples": [
      {
        "title": "Eggs in Basket",
        "description": "Probability of good egg."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A deck of 52 cards, probability of drawing a King?",
        "answer": "4/52 = 1/13",
        "hint": "4 kings"
      },
      {
        "question": "If probability of rain is 0.3, what is probability of no rain?",
        "answer": "0.7",
        "hint": "1 – 0.3 = 0.7"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Indices and Logarithms",
    "lessonNumber": 1,
    "lessonTitle": "Laws of Indices (Positive and Negative Exponents)",
    "lessonId": "maths-f3-indices-1",
    "order": 46,
    "learningObjectives": [
      "State and apply laws of indices for multiplication, division, and power of a power",
      "Simplify expressions with integer exponents"
    ],
    "introduction": "Indices (powers) are a shorthand for repeated multiplication. Today we learn the rules to simplify expressions like 2³ × 2⁵ or (x²)³.",
    "keyPoints": [
      "aᵐ × aⁿ = aᵐ⁺ⁿ",
      "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
      "(aᵐ)ⁿ = aᵐⁿ",
      "a⁰ = 1",
      "a⁻ⁿ = 1/aⁿ"
    ],
    "detailedContent": "Laws:\n\n1. Multiply: 3² × 3³ = 3⁵ = 243.\n2. Divide: 4⁵ ÷ 4² = 4³ = 64.\n3. Power of power: (x³)² = x⁶.\n4. Zero exponent: 7⁰ = 1.\n5. Negative exponent: 2⁻³ = 1/2³ = 1/8.\n\nExample: Simplify 2x² × 3x³ = 6x⁵.\nSimplify (2x³)² = 4x⁶.\n\nMalawi example: Population growth: if population doubles every year (factor 2), after 3 years factor = 2³ = 8.\n\nNow simplify: 5² × 5⁴ ÷ 5³, and (3⁻²) × (3⁴).",
    "summary": "Laws: aᵐaⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰=1; a⁻ⁿ=1/aⁿ.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Population Growth",
        "description": "Doubling using powers."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Simplify 2³ × 2⁴",
        "answer": "2⁷ = 128",
        "hint": "3+4=7"
      },
      {
        "question": "Simplify (3²)⁴",
        "answer": "3⁸ = 6561",
        "hint": "2×4=8"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Indices and Logarithms",
    "lessonNumber": 2,
    "lessonTitle": "Introduction to Logarithms",
    "lessonId": "maths-f3-logarithms-1",
    "order": 47,
    "learningObjectives": [
      "Define logarithm as exponent (logₐx = y ↔ aʸ = x)",
      "Use the laws of logarithms for multiplication and division"
    ],
    "introduction": "Logarithms are the inverse of powers. If 10² = 100, then log₁₀ 100 = 2. Today we learn what logs are and how to use them.",
    "keyPoints": [
      "logₐ x = y means aʸ = x.",
      "Common log: base 10 (log₁₀). Natural log: base e (ln).",
      "Laws: log(AB) = log A + log B; log(A/B) = log A – log B; log(Aᵏ) = k log A."
    ],
    "detailedContent": "Definition: logₐ x = y ↔ aʸ = x.\n\nExample: log₁₀ 1000 = 3 because 10³ = 1000.\n\nLaws:\n\n1. log(AB) = log A + log B.\n2. log(A/B) = log A – log B.\n3. log(Aᵏ) = k log A.\n\nExample: log(12) = log(3×4) = log 3 + log 4.\n\nMalawi example: If an earthquake is 1000 times more powerful than another, magnitude difference = log₁₀(1000) = 3.\n\nNow calculate: log 5 + log 2 = log 10 = 1 if base 10.",
    "summary": "logₐx = y means aʸ = x. Laws: sum of logs = log of product; difference = log of quotient; power = exponent × log.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Earthquake Magnitude",
        "description": "Log scale for intensity."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Write 3² = 9 in logarithmic form.",
        "answer": "log₃9 = 2",
        "hint": "Base 3, exponent 2."
      },
      {
        "question": "Simplify log 8 + log 5 – log 4 (base 10).",
        "answer": "log 10 = 1",
        "hint": "log(8×5/4)=log 10=1"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Surds",
    "lessonNumber": 1,
    "lessonTitle": "Simplifying Surds (√)",
    "lessonId": "maths-f3-surds-1",
    "order": 48,
    "learningObjectives": [
      "Simplify surds by factorising perfect squares",
      "Add and subtract surds with the same radicand"
    ],
    "introduction": "Surds are irrational square roots like √2, √3. Today we learn to simplify them and combine like terms.",
    "keyPoints": [
      "√(ab) = √a × √b.",
      "Simplify √72 = √(36×2) = 6√2.",
      "Only surds with the same radicand can be added/subtracted."
    ],
    "detailedContent": "Simplifying:\n\n√48 = √(16×3) = 4√3.\n√125 = √(25×5) = 5√5.\n\nAddition: 3√5 + 2√5 = 5√5.\nSubtraction: 7√2 – 4√2 = 3√2.\n\nCannot combine √3 + √2.\n\nMalawi example: A triangular field has sides √50 m, √50 m, √98 m. Simplify each: √50=5√2, √98=7√2. Perimeter = 5√2+5√2+7√2 = 17√2 m.\n\nNow simplify: √32, √75. Add: 2√7 + 5√7.",
    "summary": "Simplify surds by extracting square factors. Combine like surds by adding coefficients.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Field Perimeter",
        "description": "Add surds for triangle sides."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Simplify √98",
        "answer": "7√2",
        "hint": "98=49×2"
      },
      {
        "question": "Simplify 3√12 – 2√27",
        "answer": "3×2√3 – 2×3√3 = 6√3 – 6√3 = 0",
        "hint": "√12=2√3, √27=3√3"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Graphs of Functions",
    "lessonNumber": 1,
    "lessonTitle": "Plotting Linear Graphs",
    "lessonId": "maths-f3-linear-graphs-1",
    "order": 49,
    "learningObjectives": [
      "Plot points for a linear function y = mx + c",
      "Draw the straight line and interpret gradient and intercept"
    ],
    "introduction": "Linear graphs show relationships like distance over time at constant speed. Today we plot them and understand gradient (slope) and y‑intercept.",
    "keyPoints": [
      "Equation y = mx + c: m = gradient (steepness, rise/run), c = y‑intercept (where line crosses y‑axis).",
      "To plot: choose at least 2 x‑values, compute y, plot points, join.",
      "Example: y = 2x + 1. Table: x=0→y=1, x=1→y=3, x=2→y=5."
    ],
    "detailedContent": "Plotting steps:\n\nExample: y = 3x – 2.\nx: 0,1,2 → y: –2,1,4. Plot (0,-2),(1,1),(2,4); draw line.\n\nGradient m = change in y / change in x.\n\nInterpretation: For a maize yield function, m = yield increase per extra fertiliser unit.\n\nMalawi example: Distance travelled = 60t (t in hours). Graph through (0,0),(1,60),(2,120). Gradient = 60 (speed).\n\nNow create table and plot y = 4x – 3.",
    "summary": "Linear graphs: y = mx + c. Plot points, join line. Gradient = rise/run, intercept = c.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Distance vs Time",
        "description": "Constant speed graph."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the gradient of y = 5x – 2?",
        "answer": "5",
        "hint": "Coefficient of x."
      },
      {
        "question": "Plot points for y = 2x + 3 for x = 0,1,2.",
        "answer": "(0,3),(1,5),(2,7)",
        "hint": "Compute y."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Graphs of Functions",
    "lessonNumber": 2,
    "lessonTitle": "Plotting Quadratic Graphs (Parabolas)",
    "lessonId": "maths-f3-quadratic-graphs-1",
    "order": 50,
    "learningObjectives": [
      "Plot quadratic graphs y = ax² + bx + c for a range of x",
      "Identify turning point (vertex) and axis of symmetry"
    ],
    "introduction": "Quadratic graphs are curved (parabolas). They describe projectile motion, area problems, and optimisation. Today we learn to draw them.",
    "keyPoints": [
      "Choose x‑values, calculate y, plot points, then join with smooth curve.",
      "The graph is symmetric about a vertical line (axis of symmetry).",
      "The turning point (vertex) is the highest or lowest point."
    ],
    "detailedContent": "Example: y = x² – 4x + 3. For x = 0 to 4:\nx:0,1,2,3,4 → y:3,0,-1,0,3.\nPlot points, smooth curve. Vertex at x=2, y=-1.\n\nAxis of symmetry: x = –b/(2a).\n\nMalawi example: The height of a thrown stone h = –5t² + 20t + 1. Plot h vs t to find maximum height.\n\nNow plot y = x² – 2x – 3 for x = –2 to 4.",
    "summary": "Quadratic graphs: parabolic shape, symmetric. Vertex = turning point. Use table of values to plot.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Projectile Motion",
        "description": "Height vs time parabola."
      }
    ],
    "practiceQuestions": [
      {
        "question": "For y = x² – 6x + 8, find the axis of symmetry.",
        "answer": "x = 3",
        "hint": "–b/(2a) = 6/2=3"
      },
      {
        "question": "Plot point when x=0 for y = 2x² – 5x + 1.",
        "answer": "y = 1",
        "hint": "Substitute 0."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Simultaneous Equations (non‑linear)",
    "lessonNumber": 1,
    "lessonTitle": "One Linear, One Quadratic (Graphical and Algebraic)",
    "lessonId": "maths-f3-simultaneous-linear-quadratic-1",
    "order": 51,
    "learningObjectives": [
      "Solve a linear and quadratic system by substitution",
      "Interpret solutions as intersection points"
    ],
    "introduction": "When a line meets a parabola, they can intersect in 0, 1, or 2 points. Today we find those intersections algebraically.",
    "keyPoints": [
      "Substitute the linear equation into the quadratic.",
      "Solve the resulting quadratic equation.",
      "Find corresponding y‑values using the linear equation."
    ],
    "detailedContent": "Example: y = x + 1 and y = x² – 3x + 4.\nSet x+1 = x² – 3x + 4 → 0 = x² – 4x + 3 → (x-1)(x-3)=0 → x=1,3.\nThen y = 2,4. Intersection points (1,2) and (3,4).\n\nMalawi example: A stone thrown (parabola) and a bird flying at constant height (horizontal line). Solve to find when stone reaches bird’s height.\n\nNow solve: y = 2x – 1 and y = x² – 3x + 5.",
    "summary": "Substitute linear into quadratic, solve, then find y. Solutions are intersection points.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Stone and Bird",
        "description": "Find meeting times."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Solve y = x – 2 and y = x² – 5x + 6",
        "answer": "(2,0) and (4,2)",
        "hint": "x-2 = x²-5x+6 → x²-6x+8=0 → (x-2)(x-4)=0"
      },
      {
        "question": "How many solutions for y = 2x+1 and y = x²+1?",
        "answer": "Two (x=0, x=2)",
        "hint": "2x+1=x²+1 → x²-2x=0 → x(x-2)=0"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Variation",
    "lessonNumber": 1,
    "lessonTitle": "Direct and Inverse Variation (Advanced)",
    "lessonId": "maths-f3-variation-1",
    "order": 52,
    "learningObjectives": [
      "Write equations for direct variation (y = kx) and inverse variation (y = k/x)",
      "Find the constant of proportionality from given data"
    ],
    "introduction": "Variation describes how one quantity changes with another. Direct (more x, more y), inverse (more x, less y). Today we use formulas to solve problems.",
    "keyPoints": [
      "Direct: y = kx. Find k using known pair, then predict.",
      "Inverse: y = k/x. xy = k constant.",
      "Example: y ∝ x, y=10 when x=2 → k=5 → y=5x."
    ],
    "detailedContent": "Direct variation: The cost of maize is proportional to weight. If 5 kg cost 400 MK, k = 400/5 = 80. So cost = 80 × weight. For 12 kg, cost = 960 MK.\n\nInverse variation: Time to cultivate a field is inversely proportional to number of workers. If 4 workers take 6 hours, k = 4×6 = 24 worker‑hours. 8 workers take 24/8 = 3 hours.\n\nMalawi example: Harvest (kg) directly proportional to fertiliser used (kg). Given 50 kg fertiliser gives 2000 kg maize, find k and predict for 75 kg.\n\nNow: y ∝ x, y=20 when x=4. Find y when x=7.",
    "summary": "Direct: y = kx. Inverse: xy = k. Use given condition to find k, then solve.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Fertiliser Yield",
        "description": "Direct variation."
      }
    ],
    "practiceQuestions": [
      {
        "question": "y ∝ x, y=15 when x=3. Find y when x=8.",
        "answer": "40",
        "hint": "k=5, y=5×8=40"
      },
      {
        "question": "y ∝ 1/x, y=12 when x=4. Find y when x=6.",
        "answer": "8",
        "hint": "k=48, y=48/6=8"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Variation",
    "lessonNumber": 2,
    "lessonTitle": "Joint and Partial Variation",
    "lessonId": "maths-f3-variation-2",
    "order": 53,
    "learningObjectives": [
      "Write equations for joint variation (y ∝ xz)",
      "Solve problems involving combined variations"
    ],
    "introduction": "Sometimes a quantity depends on more than one factor. Joint variation handles these. Today we solve problems with multiple variables.",
    "keyPoints": [
      "Joint: y ∝ xz → y = kxz.",
      "Partial: y = a + bx (or combination).",
      "Find constant of proportionality using data."
    ],
    "detailedContent": "Joint variation: The weight of a harvest (W) is proportional to both area (A) and fertiliser (F). W = kAF. If 2 ha and 100 kg fertiliser give 4000 kg, k = 4000/(2×100)=20. For 3 ha and 150 kg fertiliser, W = 20×3×150 = 9000 kg.\n\nPartial variation: A taxi charges fixed fee (c) plus per km (m). Cost = a + bx. Given two data points, solve for a and b.\n\nExample: 10 km cost 2500 MK, 15 km cost 3500 MK. Then b = (3500-2500)/(15-10)=1000/5=200 MK/km. a = 2500 – 200×10 = 500. So cost = 500 + 200x.\n\nMalawi example: Cane yield (Y) varies jointly with rainfall (R) and fertiliser (F). Find constant from given data.\n\nNow practise: Y ∝ AD, Y=120 when A=4, D=3. Find Y when A=5, D=6.",
    "summary": "Joint: y = kxz. Partial: y = a + bx (linear). Use data to solve for constants.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Taxi Fare",
        "description": "Fixed charge plus per km."
      }
    ],
    "practiceQuestions": [
      {
        "question": "y ∝ xy, y=24 when x=3, y=2? Actually y ∝ xz? Let y ∝ xz, y=20 when x=2, z=5. Find k and y when x=3,z=10.",
        "answer": "k=2, y=60",
        "hint": "20=k×2×5 → k=2; y=2×3×10=60"
      },
      {
        "question": "Cost part: fixed 3000 MK plus 400 MK per unit. Find cost for 8 units.",
        "answer": "6200 MK",
        "hint": "3000+400×8=6200"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Trigonometry",
    "lessonNumber": 1,
    "lessonTitle": "Sine, Cosine, Tangent for Acute Angles",
    "lessonId": "maths-f3-trigonometry-1",
    "order": 54,
    "learningObjectives": [
      "Define sin θ, cos θ, tan θ in right triangles",
      "Use trig ratios to find unknown sides"
    ],
    "introduction": "Trigonometry connects angles and side lengths of right triangles. It helps find heights of trees or distances across a river. Today we learn sine, cosine, tangent.",
    "keyPoints": [
      "sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent.",
      "SOH‑CAH‑TOA mnemonic.",
      "Used to find sides given angle and one side."
    ],
    "detailedContent": "Example: right triangle with angle 30°, adjacent 10 cm. Find opposite (opp) = tan30° × adj = (1/√3)×10 ≈ 5.77 cm. Hypotenuse = adj / cos30° = 10 / 0.866 ≈ 11.55 cm.\n\nMalawi example: A ladder leans against a wall making 60° with ground. Ladder length 5 m. Height reached = 5 × sin60° = 5 × 0.866 = 4.33 m. Distance from wall = 5 × cos60° = 2.5 m.\n\nNow find: In a right triangle, angle 30°, opposite 8 cm. Find hypotenuse (sin).",
    "summary": "sin = opp/hyp, cos = adj/hyp, tan = opp/adj. Use SOH‑CAH‑TOA.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Ladder against wall",
        "description": "Find height using sine."
      }
    ],
    "practiceQuestions": [
      {
        "question": "In right triangle, angle 45°, opposite 10 cm. Find hypotenuse.",
        "answer": "14.14 cm",
        "hint": "hyp = opp/sin45 = 10/0.707 ≈ 14.14"
      },
      {
        "question": "tan θ = 0.75, find angle θ (use calculator).",
        "answer": "≈ 36.9°",
        "hint": "inverse tangent."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 3",
    "topic": "Vectors",
    "lessonNumber": 1,
    "lessonTitle": "Introduction to Vectors and Scalar Quantities",
    "lessonId": "maths-f3-vectors-1",
    "order": 55,
    "learningObjectives": [
      "Distinguish between scalar and vector quantities",
      "Represent vectors by directed line segments and column notation"
    ],
    "introduction": "Vectors have magnitude and direction – unlike scalars (only magnitude). Today we learn how to write vectors and add them.",
    "keyPoints": [
      "Scalars: mass, speed, distance, energy.",
      "Vectors: displacement, velocity, force, weight.",
      "Column vector: [x; y] means move x horizontally, y vertically.",
      "Magnitude: √(x² + y²)."
    ],
    "detailedContent": "Vectors (examples): displacement from Lilongwe to Mchinji is a vector (direct distance and direction).\n\nColumn vector notation: a = [3; 2] means 3 right, 2 up.\n\nMagnitude: |a| = √(3²+2²) = √13.\n\nAddition: a = [2;1], b = [3;4] → a+b = [5;5].\n\nMalawi example: A boat crosses a river. Its velocity vector water = [3;0], current = [0;2]. Resultant = [3;2].\n\nNow find magnitude of [4;3].",
    "summary": "Vectors have magnitude and direction. Represented as column [x;y]. Add components. Magnitude = √(x²+y²).",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "River Crossing",
        "description": "Add velocity vectors."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find magnitude of vector [6;8]",
        "answer": "10",
        "hint": "√(36+64)=√100=10"
      },
      {
        "question": "Add [2;-3] and [-1;4]",
        "answer": "[1;1]",
        "hint": "2-1=1, -3+4=1"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Algebra – Polynomials",
    "lessonNumber": 1,
    "lessonTitle": "Remainder Theorem",
    "lessonId": "maths-f4-remainder-theorem-1",
    "order": 56,
    "learningObjectives": [
      "State the remainder theorem: when f(x) is divided by (x – a), remainder = f(a)",
      "Find remainders without performing division"
    ],
    "introduction": "Dividing polynomials can be messy. The remainder theorem gives a quick way to find the remainder when dividing by (x – a). Today we learn this shortcut.",
    "keyPoints": [
      "If f(x) is divided by (x – a), remainder = f(a).",
      "Example: f(x) = x² – 3x + 5, divide by (x – 2). f(2) = 4 – 6 + 5 = 3. Remainder is 3."
    ],
    "detailedContent": "Remainder theorem: remainder = f(a).\n\nExample: f(x) = 2x³ – 5x + 7, divided by (x + 2). Note (x+2) = (x – (–2)), so a = –2. f(–2) = 2(–8) –5(–2)+7 = –16 +10 +7 = 1. Remainder = 1.\n\nIf remainder = 0, then (x – a) is a factor.\n\nMalawi example: For polynomial representing total cost, find remainder to check divisibility.\n\nNow find remainder when x² – 4x + 9 is divided by (x – 3).",
    "summary": "Remainder = f(a) when dividing by (x – a).",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Cost Function",
        "description": "Check if divisible by (x – units)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find remainder when x³ – 2x + 3 is divided by (x – 1).",
        "answer": "2",
        "hint": "f(1)=1-2+3=2"
      },
      {
        "question": "If f(x) divided by (x + 4) has remainder 7, what is f(–4)?",
        "answer": "7",
        "hint": "f(–4)=7"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Algebra – Polynomials",
    "lessonNumber": 2,
    "lessonTitle": "Factor Theorem and Factoring Cubics",
    "lessonId": "maths-f4-factor-theorem-1",
    "order": 57,
    "learningObjectives": [
      "State factor theorem: (x – a) is a factor iff f(a) = 0",
      "Factor cubic polynomials using factor theorem and division"
    ],
    "introduction": "If the remainder is zero, the divisor is a factor. The factor theorem helps us find factors of cubic polynomials. Today we use it to factorise.",
    "keyPoints": [
      "If f(a) = 0, then (x – a) is a factor.",
      "Use the factor theorem to test possible roots (factors of constant term).",
      "After finding one factor, perform polynomial division or synthetic division to reduce to quadratic."
    ],
    "detailedContent": "Example: factor f(x) = x³ – 6x² + 11x – 6. Test x=1: f(1)=1-6+11-6=0, so (x-1) factor. Divide to get x² – 5x + 6 = (x-2)(x-3). Thus f(x) = (x-1)(x-2)(x-3).\n\nMalawi example: A profit model P(x) = x³ – 8x² + 19x – 12. Find break‑even points by factoring.\n\nNow factor x³ – 3x² – 4x + 12. Test x=2: 8-12-8+12=0 → (x-2) factor. Divide get x² – x – 6 = (x-3)(x+2). So (x-2)(x-3)(x+2).",
    "summary": "Factor theorem: if f(a)=0 then (x-a) is a factor. Use to factor cubics.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Profit Factorisation",
        "description": "Find break‑even quantities."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Is (x – 3) a factor of x³ – 4x² + x + 6?",
        "answer": "Yes (f(3)=27-36+3+6=0)",
        "hint": "Evaluate f(3)."
      },
      {
        "question": "Factor x³ – 2x² – 5x + 6",
        "answer": "(x-1)(x+2)(x-3)",
        "hint": "Test x=1 →0; divide to get quadratic."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Functions",
    "lessonNumber": 1,
    "lessonTitle": "Domain, Range, and Composite Functions",
    "lessonId": "maths-f4-functions-1",
    "order": 58,
    "learningObjectives": [
      "Define domain (input values) and range (output values)",
      "Find composite functions f(g(x))"
    ],
    "introduction": "Functions relate inputs to outputs. Domain is set of allowed inputs, range is set of outputs. We also combine functions. Today we practise.",
    "keyPoints": [
      "Domain: all possible x‑values. Often all real numbers except where division by zero or even root negative.",
      "Range: all possible y‑values.",
      "Composite: f(g(x)) means “first apply g, then f”."
    ],
    "detailedContent": "Domain example: f(x) = √(x – 3) → x ≥ 3.\n\nRange example: f(x) = x² + 2 → y ≥ 2.\n\nComposite: f(x) = x², g(x) = x+1. f(g(x)) = (x+1)². g(f(x)) = x²+1.\n\nMalawi example: f(x) = price after discount, g(x) = price after tax. Go to market: apply discount then tax.\n\nNow find composite: f(x)=2x, g(x)=3x+1, find f(g(2)).",
    "summary": "Domain = inputs, range = outputs. Composite: f(g(x)).",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Discount then Tax",
        "description": "Composite function for final price."
      }
    ],
    "practiceQuestions": [
      {
        "question": "If f(x)=x+3 and g(x)=2x, find f(g(4)).",
        "answer": "11",
        "hint": "g(4)=8, f(8)=11"
      },
      {
        "question": "Find domain of f(x)=1/(x-5).",
        "answer": "x ≠ 5",
        "hint": "Denominator cannot be zero."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Calculus – Differentiation",
    "lessonNumber": 1,
    "lessonTitle": "Derivative as Gradient of a Curve",
    "lessonId": "maths-f4-differentiation-1",
    "order": 59,
    "learningObjectives": [
      "Explain that derivative = gradient (rate of change)",
      "Differentiate simple powers: if y = xⁿ, then dy/dx = nxⁿ⁻¹"
    ],
    "introduction": "Calculus helps us find rates of change – like speed from distance. The derivative gives the gradient at any point on a curve. Today we begin with power rule.",
    "keyPoints": [
      "Derivative dy/dx is gradient of tangent at a point.",
      "Power rule: d/dx (xⁿ) = n xⁿ⁻¹.",
      "Constant multiple: d/dx (k xⁿ) = k n xⁿ⁻¹.",
      "Sum rule: derivative of sum = sum of derivatives."
    ],
    "detailedContent": "Example: y = x² → dy/dx = 2x. At x=3, gradient = 6.\n\nIf y = 3x⁴ → dy/dx = 12x³.\n\nIf y = x³ + 2x² – 5x + 4 → dy/dx = 3x² + 4x – 5.\n\nMalawi example: Distance travelled s = 5t² (t in seconds). Speed v = ds/dt = 10t m/s. At t=3, speed = 30 m/s.\n\nNow differentiate: y = 4x³ – 2x² + 7.",
    "summary": "dy/dx = gradient. Power rule: d(xⁿ)/dx = n xⁿ⁻¹.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Distance vs Time",
        "description": "Velocity from derivative."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Find derivative of y = 5x³",
        "answer": "15x²",
        "hint": "3×5=15, power 2"
      },
      {
        "question": "If y = 3x² + 2x + 1, find dy/dx at x=2.",
        "answer": "14",
        "hint": "dy/dx=6x+2, at x=2 → 12+2=14"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Calculus – Integration",
    "lessonNumber": 1,
    "lessonTitle": "Integration as Anti‑Differentiation",
    "lessonId": "maths-f4-integration-1",
    "order": 60,
    "learningObjectives": [
      "Define integration as reverse of differentiation",
      "Integrate simple powers: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C"
    ],
    "introduction": "Integration is the opposite of differentiation. It finds the area under a curve or the original function given its rate of change. Today we learn basic integrals.",
    "keyPoints": [
      "Indefinite integral: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ –1).",
      "Adding constant C because derivative of constant is 0.",
      "Integral of sum = sum of integrals."
    ],
    "detailedContent": "Example: ∫ x² dx = x³/3 + C.\n∫ 3x dx = 3 × x²/2 + C = (3x²/2)+C.\n∫ (2x + 1) dx = x² + x + C.\n\nMalawi example: If marginal cost (derivative) is MC = 4q – 2, then total cost function = ∫ MC dq = 2q² – 2q + C.\n\nNow find ∫ (3x² + 4) dx.",
    "summary": "Integration = reverse differentiation. ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Marginal Cost",
        "description": "Find total cost by integration."
      }
    ],
    "practiceQuestions": [
      {
        "question": "∫ 4x³ dx",
        "answer": "x⁴ + C",
        "hint": "4 × x⁴/4 = x⁴"
      },
      {
        "question": "∫ (6x – 5) dx",
        "answer": "3x² – 5x + C",
        "hint": "Integrate term by term."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Statistics – Cumulative Frequency",
    "lessonNumber": 1,
    "lessonTitle": "Cumulative Frequency and Ogive",
    "lessonId": "maths-f4-cumulative-frequency-1",
    "order": 61,
    "learningObjectives": [
      "Construct cumulative frequency tables",
      "Draw an ogive (cumulative frequency curve) and estimate median, quartiles"
    ],
    "introduction": "Cumulative frequency tells us how many values are below a certain point. The ogive graph helps find the median and quartiles. Today we learn these.",
    "keyPoints": [
      "Cumulative frequency = running total of frequencies.",
      "Plot upper class boundaries against cumulative frequency, join with smooth curve (ogive).",
      "Median = 50% mark, lower quartile = 25%, upper quartile = 75%."
    ],
    "detailedContent": "Example: maize yields (kg/ha): 10‑20:5, 20‑30:12, 30‑40:8, 40‑50:3. Cumulative: 5,17,25,28. Upper boundaries: 20,30,40,50. Plot points, draw ogive.\n\nMedian = value at cumulative frequency 14 (half of 28). Interpolate.\n\nMalawi example: From crop yield data, estimate median yield.\n\nNow construct cumulative frequency table given classes 0‑10:2,10‑20:5,20‑30:8,30‑40:4.",
    "summary": "Cumulative frequency = running total. Ogive graph helps find median and quartiles.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Maize Yield Data",
        "description": "Estimate median yield."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Given cumulative frequencies: 3,10,18,22. Total 22. Which cumulative is median?",
        "answer": "11th value falls in second class (10)",
        "hint": "Total 22, median at 11th."
      },
      {
        "question": "Lower quartile position for n=100 is?",
        "answer": "25th",
        "hint": "25% of 100 = 25"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Probability (Compound Events)",
    "lessonNumber": 1,
    "lessonTitle": "Independent and Dependent Events",
    "lessonId": "maths-f4-probability-compound-1",
    "order": 62,
    "learningObjectives": [
      "Define independent events (P(A∩B) = P(A)×P(B))",
      "Use tree diagrams to calculate probabilities for dependent events (without replacement)"
    ],
    "introduction": "Sometimes events affect each other. Today we learn to calculate probabilities for independent and dependent events using multiplication and tree diagrams.",
    "keyPoints": [
      "Independent: outcome of one does not affect the other. P(A and B) = P(A) × P(B).",
      "Dependent: probability changes after first event (e.g., drawing without replacement).",
      "Tree diagrams: multiply along branches, add for multiple outcomes."
    ],
    "detailedContent": "Independent example: Rolling a die (A: 6) and tossing a coin (B: heads). P(A and B) = (1/6)×(1/2)=1/12.\n\nDependent: Two marbles from bag of 3 red, 2 blue, without replacement. P(R then R) = (3/5)×(2/4)=6/20=0.3.\n\nTree diagram: branches for first draw, then second.\n\nMalawi example: In a lottery of 50 tickets, 5 win. First ticket win prob = 5/50; second ticket win given first win = 4/49 (dependent).\n\nNow calculate: P(two heads in two coin tosses, independent).",
    "summary": "Independent: P(A∩B)=P(A)P(B). Dependent: use tree diagram, multiply conditional probabilities.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Lottery",
        "description": "Probability of two winning tickets without replacement."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Two dice rolled. P(both show 6) = ?",
        "answer": "1/36",
        "hint": "1/6 × 1/6"
      },
      {
        "question": "From 10 tickets, 3 win. Pick 2 without replacement. P(both win)?",
        "answer": "3/10 × 2/9 = 6/90 = 1/15",
        "hint": "Multiply fractions."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Kinematics (Distance‑time, Speed‑time graphs)",
    "lessonNumber": 1,
    "lessonTitle": "Interpreting Distance‑Time and Speed‑Time Graphs",
    "lessonId": "maths-f4-kinematics-graphs-1",
    "order": 63,
    "learningObjectives": [
      "Interpret distance‑time graphs (slope = speed)",
      "Interpret speed‑time graphs (slope = acceleration, area = distance)"
    ],
    "introduction": "Graphs of motion help analyse travel. Distance‑time shows position; speed‑time shows speed. Today we read these graphs and calculate distances.",
    "keyPoints": [
      "Distance‑time: slope = speed. Horizontal line = stationary.",
      "Speed‑time: slope = acceleration; area under graph = distance travelled.",
      "Constant speed = horizontal line on speed‑time."
    ],
    "detailedContent": "Distance‑time example: A minibus travels 30 km in 0.5 h, then stops 0.25 h, then 20 km in 0.5 h. Slopes give speeds: 60 km/h, 0, 40 km/h.\n\nSpeed‑time: from 0 to 10 s at 2 m/s², constant 20 m/s for 10 s, decelerate. Area under triangle = ½×10×20=100 m, rectangle = 20×10=200 m, total = 300 m.\n\nMalawi example: A bicycle trip – draw speed‑time graph and find total distance.\n\nNow: A car travels at 30 m/s for 20 s, then decelerates to 0 in 10 s. Deceleration? 30/10 = 3 m/s². Distance = area under graph.",
    "summary": "Distance‑time: slope = speed. Speed‑time: slope = acceleration, area = distance.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Minibus Journey",
        "description": "Find speeds and distances from graph."
      }
    ],
    "practiceQuestions": [
      {
        "question": "On a distance‑time graph, a straight line with slope 0 means?",
        "answer": "Stationary (distance constant)",
        "hint": "No movement."
      },
      {
        "question": "On a speed‑time graph, area under a triangle of base 8 s, height 12 m/s is?",
        "answer": "48 m",
        "hint": "½×8×12=48"
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Linear Programming",
    "lessonNumber": 1,
    "lessonTitle": "Graphical Method for Two Variables",
    "lessonId": "maths-f4-linear-programming-1",
    "order": 64,
    "learningObjectives": [
      "Formulate linear programming problems from worded situations",
      "Solve using graphical method (feasible region, optimal point)"
    ],
    "introduction": "How to maximise profit with limited resources? Linear programming finds the best answer. Today we solve two‑variable problems graphically.",
    "keyPoints": [
      "Constraints are inequalities that define feasible region.",
      "Plot each inequality, shade feasible region.",
      "Objective function (profit) is maximised or minimised at a vertex of feasible region."
    ],
    "detailedContent": "Example: A farmer can grow maize (x ha) and groundnuts (y ha). Constraints: x ≥ 0, y ≥ 0, x + y ≤ 10, x ≤ 6, y ≤ 8. Profit: 200x + 300y (in thousands). Find maximum.\n\nPlot region, vertices: (0,0), (6,0), (6,4), (2,8), (0,8). Evaluate profit: 0, 1200, 200×6+300×4=1200+1200=2400, 200×2+300×8=400+2400=2800, 2400. Best at (2,8): 2800. So 2 ha maize, 8 ha groundnuts.\n\nMalawi example: A bicycle producer: workers limited, painting time limited. Model and find max profit.\n\nNow solve: maximise 3x + 2y subject to x ≥ 0, y ≥ 0, x ≤ 4, y ≤ 3, x + y ≤ 5.",
    "summary": "Linear programming: graph constraints, feasible region, evaluate objective at vertices.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Crop Allocation",
        "description": "Maximise profit with land limits."
      }
    ],
    "practiceQuestions": [
      {
        "question": "In a feasible region, where does the maximum of a linear objective occur?",
        "answer": "At a vertex (corner point)",
        "hint": "Extreme point."
      },
      {
        "question": "Given constraints x≥0, y≥0, 2x+ y ≤ 10, x+2y ≤ 10, what is the maximum of x+y?",
        "answer": "At intersection (10/3,10/3) gives 20/3≈6.67, check vertices: (0,5),(5,0) give 5, so max is 20/3",
        "hint": "Solve simultaneously."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Agricultural Research",
    "lessonNumber": 1,
    "lessonTitle": "Experimental Designs in Agricultural Research",
    "lessonId": "agriculture-f2-experimental-designs-1",
    "order": 1000,
    "learningObjectives": [
      "Identify different experimental designs (CRD, RCBD, Latin Square)",
      "Explain the importance of replication and randomization in experiments"
    ],
    "introduction": "When researchers test new seeds or fertilisers, they must design experiments carefully to get reliable results. Today we learn about common experimental designs used in agricultural research in Malawi.",
    "keyPoints": [
      "Completely Randomised Design (CRD): treatments assigned randomly – suitable for uniform conditions.",
      "Randomised Complete Block Design (RCBD): blocks account for variation (e.g., soil fertility differences).",
      "Latin Square Design: controls variation in two directions (row and column).",
      "Replication: repeating treatments to reduce error.",
      "Randomization: prevents bias by randomly assigning treatments."
    ],
    "detailedContent": "Why Experimental Design Matters\n\nWhen Chitedze Research Station tests a new maize variety, they cannot plant one seed and conclude. They need a design that accounts for natural differences in soil, water, and light.\n\nCommon Designs\n\n1. Completely Randomised Design (CRD):\n   - Treatments assigned completely at random.\n   - Best when experimental area is uniform (e.g., greenhouse).\n   - Simple but not ideal for fields with soil gradients.\n\n2. Randomised Complete Block Design (RCBD):\n   - Blocks are groups of plots that are similar (e.g., same soil type).\n   - Each treatment appears once per block.\n   - Blocks control for known variation.\n   - Most common in Malawi field trials.\n\n3. Latin Square Design:\n   - Arranges treatments in a grid where each row and column has each treatment once.\n   - Controls variation in two directions.\n   - Used when field has fertility gradient both across and down.\n\nKey Concepts\n\n- Replication: Each treatment is applied to several plots (e.g., 3 plots per variety). This reduces the effect of random errors.\n- Randomization: The order of treatments is assigned by chance (using random numbers or lottery). This avoids bias.\n\nExample from Malawi: Testing three maize varieties (MH30, MH37, ZM309). Using RCBD with 4 blocks (replicates). Each block contains all three varieties in random order. At harvest, they compare yields.",
    "summary": "Experimental designs (CRD, RCBD, Latin Square) help researchers obtain reliable results. Replication and randomization reduce error and bias.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Chitedze Maize Trials",
        "description": "RCBD used to compare hybrid maize varieties across different blocks."
      },
      {
        "title": "Fertiliser Rate Experiment",
        "description": "CRD in pots to test effect of different NPK levels on groundnut growth."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is replication important in an agricultural experiment?",
        "answer": "It reduces the effect of random errors and increases reliability of results.",
        "hint": "More plots per treatment."
      },
      {
        "question": "In RCBD, what do the blocks represent?",
        "answer": "Groups of plots that are similar (e.g., same soil type or slope).",
        "hint": "Controls known variation."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 3",
    "topic": "Fish Farming",
    "lessonNumber": 1,
    "lessonTitle": "Introduction to Fish Farming in Malawi",
    "lessonId": "agriculture-f3-fish-farming-1",
    "order": 1001,
    "learningObjectives": [
      "Explain the importance of fish farming in Malawi",
      "Describe the main types of fish ponds and their construction"
    ],
    "introduction": "Fish farming (aquaculture) is growing in Malawi, providing protein and income. Today we learn why fish farming matters and how to construct a simple fish pond.",
    "keyPoints": [
      "Importance: source of protein, income generation, employment, reduces pressure on wild fish stocks.",
      "Common species in Malawi: chambo (Oreochromis), kampango (Bagrus), mpasa (Opsaridium).",
      "Types of ponds: earthen ponds (most common), concrete ponds, liner ponds, cages.",
      "Pond construction: choose site with water source, level ground, clay soil; dig and compact; construct inlet and outlet."
    ],
    "detailedContent": "Importance of Fish Farming\n\n- Nutrition: Fish is rich in protein and omega‑3 fatty acids, combating malnutrition.\n- Income: Selling fish provides regular cash, especially for women.\n- Employment: Fish farming creates jobs in pond construction, feeding, harvesting, and marketing.\n- Environmental: Reduces overfishing in Lake Malawi and other water bodies.\n\nCommon Fish Species Cultured in Malawi\n\n- Tilapia (chambo): hardy, fast-growing, feeds on algae and supplementary feed.\n- Catfish (kampango): tolerates low oxygen, popular for warm waters.\n- Mpasa: a large riverine fish, but difficult to farm; mostly wild.\n\nTypes of Fish Ponds\n\n1. Earthen pond: dug into ground with clay to hold water. Cheap but needs good soil.\n2. Concrete pond: permanent, easy to clean, but expensive.\n3. Liner pond: uses plastic liner; good where clay is poor.\n4. Cage culture: floating cages in lakes or rivers.\n\nSite Selection for an Earthen Pond\n\n- Close to reliable water source (river, borehole, spring).\n- Level ground to reduce excavation.\n- Clay soil (prevents leaking).\n- Not in flood-prone area.\n- Accessible for management and harvesting.\n\nConstruction Steps (earthen pond)\n\n1. Mark the pond shape (rectangular or square).\n2. Remove topsoil and dig to desired depth (0.8–1.5 m).\n3. Compact the bottom and sides.\n4. Build inlet (to bring water) and outlet (to drain water, with screens to prevent fish escape).\n5. Fill with water and test for leaks.\n6. Add lime to adjust pH and kill predators.\n\nMalawi Example: In Zomba, farmers have constructed earthen ponds fed by streams. They grow tilapia and sell to local markets, earning up to 50,000 MK per harvest.",
    "summary": "Fish farming provides food and income. Earthen ponds are cheapest. Choose site with water, clay soil, and level ground. Tilapia is most common in Malawi.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Tilapia Ponds in Zomba",
        "description": "Earthen ponds using stream water produce fish for sale."
      },
      {
        "title": "Cage Culture on Lake Malawi",
        "description": "Floating cages used by cooperatives near Cape Maclear."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is clay soil preferred for earthen fish ponds?",
        "answer": "Clay holds water and prevents seepage.",
        "hint": "It is impermeable."
      },
      {
        "question": "Name one fish species commonly farmed in Malawi.",
        "answer": "Tilapia (chambo) or catfish (kampango)",
        "hint": "Rift valley cichlid."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 4",
    "topic": "Livestock Production",
    "lessonNumber": 1,
    "lessonTitle": "Methods of Livestock Improvement",
    "lessonId": "agriculture-f4-livestock-improvement-1",
    "order": 1002,
    "learningObjectives": [
      "Describe selection, crossbreeding, and artificial insemination",
      "Explain the advantages and limitations of each method"
    ],
    "introduction": "How do farmers get cows that produce more milk or chickens that lay more eggs? The answer is LIVESTOCK IMPROVEMENT. Today we learn the main methods used in Malawi.",
    "keyPoints": [
      "Selection: choosing best animals for breeding based on desired traits (e.g., high milk yield, disease resistance).",
      "Crossbreeding: mating two different breeds to combine good traits (e.g., Malawi Zebu × Friesian).",
      "Artificial Insemination (AI): using semen from superior males to inseminate females.",
      "Advantages of AI: access to elite genetics, no need to keep a bull, reduces disease transmission.",
      "Limitations: requires skilled inseminator, liquid nitrogen storage, higher cost."
    ],
    "detailedContent": "Methods of Livestock Improvement\n\n1. Selection\n   - Farmers choose animals that have desirable traits (high milk, fast growth, good body conformation).\n   - Use records (production, health, pedigree) to make decisions.\n   - Over generations, the herd improves.\n   - Example: Selecting cows that produce 15 litres per day instead of 10 litres.\n\n2. Crossbreeding\n   - Mating two different breeds to get hybrid vigour (heterosis).\n   - Offspring often outperform both parents.\n   - Example: Malawi Zebu (hardy, low milk) × Friesian (high milk, less heat tolerant) → crossbred calves with good milk (10–15 L/day) and hardiness.\n\n3. Artificial Insemination (AI)\n   - Semen is collected from a superior male (e.g., Friesian bull with high milk genetics).\n   - Semen is frozen in liquid nitrogen and shipped to farms.\n   - A trained inseminator deposits the semen into the female’s reproductive tract at the right time (heat).\n   - Advantages:\n     - Access to best bulls worldwide.\n     - No risk of injury from keeping a bull.\n     - Prevents spread of venereal diseases.\n     - Can inseminate many females from one ejaculate.\n   - Limitations:\n     - Requires liquid nitrogen (LN2) and specialised equipment.\n     - Needs skilled AI technician.\n     - Success depends on detecting heat accurately.\n\nOther methods: embryo transfer, genetic engineering (advanced, not common in Malawi).\n\nMalawi Example: The Dairy Development Programme (DDP) in Lilongwe and Mzuzu promotes AI using Friesian semen on local Zebu cows. Farmers pay a small fee per insemination.",
    "summary": "Livestock improvement uses selection (choose best), crossbreeding (combine breeds), and artificial insemination (elite semen). AI offers great benefits but needs skills and equipment.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "AI in Lilongwe",
        "description": "Farmers inseminate their Zebu cows with Friesian semen for better milk."
      },
      {
        "title": "Crossbred Goats",
        "description": "Mbuzi Cross (local × Boer) for faster growth and meat."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is hybrid vigour?",
        "answer": "The improved performance of crossbred offspring compared to their parents.",
        "hint": "Heterosis."
      },
      {
        "question": "Give two advantages of artificial insemination.",
        "answer": "Access to elite genetics and no need to keep a bull.",
        "hint": "Health and cost benefits."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 3",
    "topic": "Nervous and Endocrine Systems",
    "lessonNumber": 1,
    "lessonTitle": "Comparison of Nervous and Hormonal Coordination",
    "lessonId": "biology-f3-coordination-1",
    "order": 1003,
    "learningObjectives": [
      "Compare the nervous system and endocrine system in terms of speed, duration, and mode of action",
      "Explain how they work together to maintain homeostasis"
    ],
    "introduction": "Your body has two main communication systems: the nervous system (fast, short‑lived) and the endocrine system (slower, longer‑lasting). Today we learn how they differ and how they coordinate.",
    "keyPoints": [
      "Nervous system: uses electrical impulses along neurones; rapid response (milliseconds); short duration.",
      "Endocrine system: uses hormones in blood; slower (seconds to minutes); longer-lasting effects.",
      "Both systems interact: hypothalamus links them; nervous system triggers hormone release; hormones can affect nerves.",
      "Homeostasis: together they regulate temperature, blood glucose, water balance, etc."
    ],
    "detailedContent": "Comparison of Nervous and Endocrine Systems\n\n| Feature                | Nervous System                      | Endocrine System                    |\n|------------------------|-------------------------------------|-------------------------------------|\n| Signal type            | Electrical (along neurones) + chemical (neurotransmitters) | Chemical (hormones)                |\n| Speed                  | Very fast (milliseconds)            | Slow (seconds to minutes, even hours) |\n| Duration of effect     | Short (until stimulus stops)        | Long (hormones linger)             |\n| Target                 | Specific cells (e.g., muscles, glands) | Any cell with appropriate receptor |\n| Control centre         | Brain and spinal cord               | Hypothalamus and pituitary gland    |\n\nCoordination between the two systems\n\n- The hypothalamus (in the brain) controls the pituitary gland (master endocrine gland).\n- Example (fight or flight):\n  1. You see a threat (nervous system).\n  2. Sympathetic nerves trigger adrenal gland to release adrenaline (endocrine).\n  3. Adrenaline increases heart rate, breathing, blood flow to muscles.\n  4. Both systems work together to prepare the body.\n\n- Example (blood glucose regulation):\n  - Nervous system monitors glucose levels in brain.\n  - Signals to pancreas release insulin or glucagon (endocrine).\n  - Hormones act on liver and muscles.\n\nHomeostasis\n\nThe two systems constantly interact to maintain a stable internal environment:\n- Temperature: nervous (sweating, shivering) + endocrine (thyroxine controls metabolic rate).\n- Water balance: osmoreceptors in hypothalamus (nervous) → ADH release (endocrine) → kidney reabsorption.\n\nMalawi Example: When you eat a heavy nsima meal, blood glucose rises. Nervous system detects this, signals pancreas to release insulin (endocrine), and glucose is stored as glycogen.",
    "summary": "Nervous system: fast, short-lived, electrical. Endocrine: slower, longer, chemical. They work together to maintain homeostasis via hypothalamus-pituitary link.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Fight or Flight",
        "description": "Seeing a snake triggers both nervous and hormonal responses."
      },
      {
        "title": "Blood Sugar Control",
        "description": "After eating nsima, insulin secretion lowers blood glucose."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is the endocrine response slower than nervous response?",
        "answer": "Hormones must be released into blood and travel to target organs, while electrical impulses travel quickly along nerves.",
        "hint": "Transport time."
      },
      {
        "question": "Which gland connects the nervous and endocrine systems?",
        "answer": "Hypothalamus",
        "hint": "It controls the pituitary."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Laboratory Preparation of Gases",
    "lessonNumber": 1,
    "lessonTitle": "Preparation and Properties of Oxygen, Hydrogen, and Carbon Dioxide",
    "lessonId": "chemistry-f3-gas-preparation-1",
    "order": 1004,
    "learningObjectives": [
      "Describe the laboratory preparation of oxygen, hydrogen, and carbon dioxide",
      "State the physical and chemical properties and uses of each gas"
    ],
    "introduction": "Oxygen supports burning, hydrogen is light and explosive, carbon dioxide puts out fires. Today we learn how to make these gases in the lab and their important properties.",
    "keyPoints": [
      "Oxygen: prepared by catalytic decomposition of hydrogen peroxide (MnO2 as catalyst). Test: glowing splint relights.",
      "Hydrogen: prepared by reaction of dilute acid (HCl or H2SO4) with a metal (zinc or magnesium). Test: burning splint gives pop sound.",
      "Carbon dioxide: prepared by reaction of acid with a carbonate (e.g., CaCO3 + HCl). Test: limewater turns milky.",
      "Properties: O2 colourless, odourless, supports combustion. H2 colourless, odourless, very flammable. CO2 colourless, denser than air, turns limewater milky."
    ],
    "detailedContent": "Preparation of Oxygen\n\nMethod: Decomposition of hydrogen peroxide (H2O2) using manganese(IV) oxide (MnO2) as catalyst.\n\nEquation: 2H2O2(aq) → 2H2O(l) + O2(g)\n\nApparatus: conical flask, thistle funnel, delivery tube, water trough, gas jars.\n\nProcedure:\n- Place MnO2 in flask.\n- Add hydrogen peroxide via thistle funnel.\n- Collect oxygen by downward displacement of water (oxygen is slightly soluble, but this works).\nTest: Insert a glowing splint into the gas; it relights.\n\nProperties of Oxygen:\n- Colourless, odourless, tasteless.\n- Slightly soluble in water.\n- Supports combustion (reacts with many elements).\n- Density slightly higher than air.\n\nUses: Welding, medical oxygen, steelmaking.\n\nPreparation of Hydrogen\n\nMethod: Reaction of dilute hydrochloric acid (or sulphuric acid) with zinc (or magnesium).\n\nEquation: Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g)\n\nApparatus: flask with delivery tube, water trough, gas jars.\n\nTest: Bring a burning splint to the gas; it explodes with a ‘pop’ sound.\n\nProperties of Hydrogen:\n- Colourless, odourless.\n- Very light (lowest density).\n- Flammable (burns with pale blue flame).\n- Reducing agent.\n\nUses: Hydrogenation of oils, rocket fuel, making ammonia (Haber process).\n\nPreparation of Carbon Dioxide\n\nMethod: Reaction of a carbonate (e.g., marble chips CaCO3) with dilute hydrochloric acid.\n\nEquation: CaCO3(s) + 2HCl(aq) → CaCl2(aq) + CO2(g) + H2O(l)\n\nApparatus: flask, thistle funnel, delivery tube. Because CO2 is denser than air, it can be collected by upward displacement of air (or downward delivery).\n\nTest: Bubble the gas through limewater (calcium hydroxide solution); it turns milky (CaCO3 precipitate).\n\nProperties of Carbon Dioxide:\n- Colourless, odourless.\n- Denser than air (used as fire extinguisher).\n- Does not support combustion.\n- Turns limewater milky (test).\n- Slightly soluble in water (forms carbonic acid).\n\nUses: Fire extinguishers, carbonated drinks, dry ice (solid CO2), greenhouse for plants.\n\nMalawi Example: In rural schools, students prepare oxygen using local hydrogen peroxide (from pharmacies) and MnO2 from batteries. CO2 is produced using vinegar and baking soda.",
    "summary": "Oxygen (H2O2 + MnO2), Hydrogen (acid + metal), Carbon dioxide (acid + carbonate). Each has specific tests: glowing splint, pop, limewater milky.",
    "estimatedTime": "25 mins",
    "malawiExamples": [
      {
        "title": "CO2 from Vinegar and Baking Soda",
        "description": "Common kitchen experiment to inflate balloons."
      },
      {
        "title": "Oxygen from Local Bleach",
        "description": "Some teachers use hair developer (H2O2) for demonstrations."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the chemical test for oxygen?",
        "answer": "A glowing splint relights.",
        "hint": "Supports combustion."
      },
      {
        "question": "Why is carbon dioxide used in fire extinguishers?",
        "answer": "It is denser than air and does not support combustion, so it smothers the fire.",
        "hint": "Forms a blanket over the fire."
      }
    ]
  },
  {
    "subject": "English",
    "form": "Form 3",
    "topic": "Writing",
    "lessonNumber": 1,
    "lessonTitle": "Writing a Summary",
    "lessonId": "english-f3-summary-1",
    "order": 1006,
    "learningObjectives": [
      "Identify the main points in a passage",
      "Write a concise summary in one-third of the original length using own words"
    ],
    "introduction": "A summary is a shortened version of a text in your own words. It includes only the main ideas, not every detail. Today we learn how to write effective summaries.",
    "keyPoints": [
      "Step 1: Read the passage carefully to understand the main idea.",
      "Step 2: Underline or list the key points (who, what, where, when, why).",
      "Step 3: Write the summary in your own words – do not copy phrases.",
      "Step 4: Keep it concise – about one‑third of the original length.",
      "Step 5: Use cohesive devices (first, then, finally) and avoid opinions or examples."
    ],
    "detailedContent": "How to Write a Summary\n\nA summary is a brief restatement of the essential ideas of a longer passage. It is used in reports, revision notes, and examinations.\n\nStep 1 – Understand the text\n- Read the passage twice.\n- Identify the topic sentence of each paragraph (often the first or last sentence).\n\nStep 2 – Select key points\n- Ask: Which information is essential? Which is supporting detail?\n- For a narrative: events in chronological order.\n- For an argument: the main claim and supporting reasons.\n- Omit examples, repetition, and minor details.\n\nStep 3 – Write in your own words\n- Change vocabulary (e.g., “start” → “begin”).\n- Change sentence structure (active to passive, or vice versa).\n- Do not copy whole phrases from the original.\n\nStep 4 – Be concise\n- Aim for about one‑third of the original length.\n- Combine related ideas using conjunctions (and, because, so).\n\nStep 5 – Use linkers\n- To order: first, then, after that, finally.\n- To show cause/effect: therefore, consequently, as a result.\n\nExample\n\nOriginal paragraph:\n“Malawi is known as the Warm Heart of Africa. The country has many beautiful lakes, including Lake Malawi, which is home to hundreds of species of cichlid fish. These fish are found nowhere else in the world. Tourists come to Malawi to snorkel and see these colourful fish.”\n\nSummary:\n“Malawi, the Warm Heart of Africa, has unique cichlid fish in Lake Malawi, attracting tourists for snorkelling.”\n\nAvoid: including details like “hundreds of species” or “nowhere else” unless asked.\n\nPractice: Read a short news article from a Malawian newspaper (e.g., The Nation). Write a summary of about 50 words.",
    "summary": "A summary restates main ideas in your own words, about one‑third the original length. Omit examples and minor details. Use own vocabulary and sentence structures.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Summarising an Agriculture Article",
        "description": "Summarise a passage about the Farm Input Subsidy Programme (FISP)."
      },
      {
        "title": "News Summary",
        "description": "Reduce a two‑paragraph news story to three sentences."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What should you avoid including in a summary?",
        "answer": "Minor details, examples, repetitions, and direct quotations.",
        "hint": "Only main points."
      },
      {
        "question": "How long should a summary be compared to the original?",
        "answer": "About one‑third the length.",
        "hint": "Concise."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 4",
    "topic": "Transformations",
    "lessonNumber": 1,
    "lessonTitle": "Reflection, Rotation, Translation, and Enlargement",
    "lessonId": "maths-f4-transformations-1",
    "order": 1007,
    "learningObjectives": [
      "Perform reflections across the x‑axis, y‑axis, and lines y = x, y = –x",
      "Rotate shapes about the origin by 90°, 180°, 270° and translate by a vector",
      "Enlarge shapes by a given scale factor from a centre"
    ],
    "introduction": "Have you ever seen your reflection in a mirror or a picture scaled up? Those are geometric transformations. Today we learn how to move and resize shapes on a coordinate grid.",
    "keyPoints": [
      "Reflection: mirror image across a line (mirror line).",
      "Rotation: turning a shape about a centre (usually origin) by a given angle (90°, 180°, 270°).",
      "Translation: sliding a shape by a vector (a, b).",
      "Enlargement: making a shape bigger or smaller by a scale factor (k) from a centre.",
      "Properties: reflections, rotations, translations preserve shape and size (congruent). Enlargements change size but preserve shape (similar)."
    ],
    "detailedContent": "1. Reflection\n\nA reflection maps a point to its mirror image across a line.\n\n- Across x‑axis: (x, y) → (x, –y)\n- Across y‑axis: (x, y) → (–x, y)\n- Across y = x: (x, y) → (y, x)\n- Across y = –x: (x, y) → (–y, –x)\n\nExample: Reflect A(2,3) across y‑axis → A'(–2,3).\n\n2. Rotation\n\nRotate about the origin (0,0).\n\n- 90° anticlockwise: (x, y) → (–y, x)\n- 180°: (x, y) → (–x, –y)\n- 270° anticlockwise (or 90° clockwise): (x, y) → (y, –x)\n\nExample: Rotate B(4,1) 90° anticlockwise → B'(–1,4).\n\n3. Translation\n\nMove by vector (a, b). Add a to x, b to y.\n\nExample: Translate C(2,5) by vector (3, –2) → C'(5,3).\n\n4. Enlargement\n\nFrom a centre (cx, cy) with scale factor k.\nMultiply (x – cx) and (y – cy) by k, then add centre.\n\nExample: Enlarge D(4,2) from centre (0,0) with k=2 → D'(8,4).\n\nIf k > 1, shape enlarges. If 0 < k < 1, shape reduces. If k negative, shape is inverted.\n\nMalawi Example: A map of Lilongwe with grid lines. Translating a point from City Centre to Area 49 by vector (5,2). Enlarging a small plan of a school to actual size (scale factor 100).",
    "summary": "Transformations: reflection (flip), rotation (turn), translation (slide), enlargement (scale). Coordinates change according to specific rules. Enlargement changes size; others preserve size and shape.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Map of Lilongwe",
        "description": "Translate a point from Kamuzu Central Hospital to Bwaila Hospital using a vector."
      },
      {
        "title": "School Plan Enlargement",
        "description": "Enlarge a 1:200 classroom plan to actual size (k=200)."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Reflect point (3, –4) across the x‑axis. What are the new coordinates?",
        "answer": "(3, 4)",
        "hint": "x stays same, y changes sign."
      },
      {
        "question": "Enlarge point (2,3) from centre (0,0) with scale factor 3.",
        "answer": "(6,9)",
        "hint": "Multiply both coordinates by 3."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Agriculture and Climate Change",
    "lessonNumber": 1,
    "lessonTitle": "Causes and Effects of Climate Change on Agriculture",
    "lessonId": "agriculture-f2-climate-change-1",
    "order": 141,
    "learningObjectives": [
      "Identify the main causes of climate change related to agriculture",
      "Explain the effects of climate change on crop and livestock production in Malawi"
    ],
    "introduction": "Have you noticed that rains are no longer predictable? Some years floods destroy crops, other years droughts. This is CLIMATE CHANGE. Today we learn what causes it and how it affects farmers in Malawi.",
    "keyPoints": [
      "Causes: deforestation, burning of fossil fuels, livestock (methane), use of nitrogen fertilisers, burning crop residues.",
      "Effects on crops: unpredictable rainfall, prolonged dry spells, floods, heat stress on pollination, new pests (fall armyworm).",
      "Effects on livestock: heat stress reduces milk and meat production, water scarcity, increased diseases (trypanosomiasis, ticks).",
      "Farmers in Malawi already experiencing shorter rainy seasons and more frequent droughts."
    ],
    "detailedContent": "What is Climate Change?\n\nClimate change refers to long‑term shifts in temperature, rainfall patterns, and extreme weather events. Human activities are the main drivers.\n\nCauses of Climate Change (related to agriculture)\n\n1. Deforestation: Clearing forests for farmland releases stored carbon dioxide (CO₂). Without trees, less CO₂ is absorbed.\n2. Burning fossil fuels: Tractors, irrigation pumps, and transport of produce burn diesel/petrol, releasing CO₂.\n3. Livestock: Cattle, goats, and sheep produce methane (CH₄) through digestion (enteric fermentation). Manure also releases methane and nitrous oxide.\n4. Nitrogen fertilisers: Applying urea or NPK releases nitrous oxide (N₂O), a potent greenhouse gas.\n5. Burning crop residues: Instead of leaving stalks in the field, burning releases CO₂ and destroys organic matter.\n6. Rice paddies: Flooded rice fields produce methane (less relevant in Malawi but important globally).\n\nEffects of Climate Change on Agriculture in Malawi\n\n- Unpredictable rainfall: The rainy season may start late or end early. Crops fail if rains stop during flowering.\n- Droughts: More frequent and severe. Maize wilts, reservoirs dry up.\n- Floods: Heavy rains wash away topsoil and drown crops. Low‑lying areas (e.g., Lower Shire) are badly affected.\n- Heat stress: High temperatures (above 32°C) reduce maize pollination – empty cobs.\n- Pests and diseases: Fall armyworm became widespread because warmer winters allow it to survive. Cassava mosaic, maize streak virus also worsen.\n- Livestock: Heat stress reduces appetite, milk yield, and fertility. Water shortages increase mortality.\n\nSpecific Malawi Examples:\n- 2015/16 El Niño drought caused massive maize failure and food insecurity.\n- Cyclones Idai and Freddy (2019, 2023) destroyed crops and livestock in southern Malawi.\n- Farmers in Chikwawa now grow short‑season maize varieties to escape dry spells.\n\nSummary of Effects:\n| Effect | Consequence |\n|--------|-------------|\n| Delayed rains | Late planting, reduced yield |\n| Dry spells | Wilting, crop death |\n| Floods | Soil erosion, waterlogging |\n| Heat | Poor pollination, empty maize cobs |\n| New pests | Increased pesticide use, crop loss |\n\nMalawi Example: A farmer in Nsanje used to plant maize in November. Now rains come in December or January. He switched to early‑maturing varieties and practices conservation agriculture to cope.",
    "summary": "Climate change is caused by deforestation, fossil fuels, livestock, and fertilisers. Effects in Malawi include droughts, floods, heat stress, and new pests. These reduce crop and livestock productivity.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "2015/16 Drought",
        "description": "Maize production dropped by 30%, leading to food insecurity."
      },
      {
        "title": "Fall Armyworm Outbreak",
        "description": "Warmer conditions allowed the pest to spread across all maize‑growing regions."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name two agricultural activities that release greenhouse gases.",
        "answer": "Deforestation (clearing land) and using nitrogen fertilisers.",
        "hint": "Think about practices on a farm."
      },
      {
        "question": "How does climate change affect maize pollination?",
        "answer": "High temperatures (heat stress) cause poor pollination, leading to empty cobs.",
        "hint": "Temperature above 32°C."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Irrigation",
    "lessonNumber": 1,
    "lessonTitle": "Importance and Types of Irrigation Systems",
    "lessonId": "agriculture-f2-irrigation-1",
    "order": 142,
    "learningObjectives": [
      "Explain the importance of irrigation in crop production",
      "Describe the main types of irrigation systems (surface, overhead, drip) and their advantages and limitations"
    ],
    "introduction": "In Malawi, we depend on rain, but rain is unreliable. IRRIGATION allows farmers to grow crops even when there is no rain. Today we learn why irrigation is important and the different types available.",
    "keyPoints": [
      "Importance: farming during dry season, higher yields, reduced risk of drought, growing high‑value crops (vegetables, fruits).",
      "Surface irrigation: water flows over soil by gravity (furrow, basin, flood). Low cost but water inefficient.",
      "Overhead irrigation: water sprayed like rain (sprinklers). Suitable for many crops, but expensive and energy‑intensive.",
      "Drip irrigation: water drips directly to plant roots. Very efficient (90%+), but high initial cost.",
      "Choosing a system depends on crop type, water source, topography, and capital."
    ],
    "detailedContent": "Why Irrigate?\n\nRain‑fed farming is risky in Malawi due to climate change. Irrigation provides:\n- Ability to grow crops in dry season (e.g., vegetables, maize, tomatoes).\n- Higher and more reliable yields (irrigated maize yields 4‑6 tonnes/ha vs 2‑3 tonnes/ha rain‑fed).\n- Reduced risk of total crop failure during drought.\n- Opportunity for high‑value cash crops (onions, peppers, paprika) for local and export markets.\n\nTypes of Irrigation Systems\n\n1. Surface Irrigation (Gravity)\n   - Water flows over the soil surface by gravity.\n   - Types: furrow (water runs between rows), basin (small basins around trees), flood (entire field flooded).\n   - Advantages: Low cost, no energy required, simple technology.\n   - Limitations: Water waste (up to 50% lost), uneven distribution, may cause waterlogging or erosion.\n   - Suitable for: Rice, maize, pastures on gentle slopes.\n\n2. Overhead Irrigation (Sprinkler)\n   - Water sprayed through nozzles like rain.\n   - Portable or permanent systems.\n   - Advantages: Suitable for most crops, can cover large areas, relatively uniform distribution.\n   - Limitations: High capital cost (pipes, pumps), energy cost (fuel/electricity), water loss from evaporation (especially in windy conditions).\n   - Suitable for: Vegetables, maize, groundnuts, lawns.\n\n3. Drip Irrigation (Trickle)\n   - Water delivered directly to plant roots through small tubes with emitters.\n   - Advantages: Very water‑efficient (90%+), reduces weed growth (only wetting near plant), can be used with fertigation (adding fertiliser to water).\n   - Limitations: Expensive initial investment, tubes can clog, requires clean water.\n   - Suitable for: High‑value crops – tomatoes, peppers, strawberries, orchard trees.\n\nComparison Table\n\n| System | Water efficiency | Cost | Best for |\n|--------|-----------------|------|----------|\n| Surface | Low (40‑60%) | Low | Cereals, rice |\n| Overhead | Medium (60‑80%) | Medium | Vegetables, field crops |\n| Drip | High (90‑95%) | High | Fruit, high‑value vegetables |\n\nMalawi Example: Many farmers in Lunzu (Blantyre) use drip irrigation for tomatoes. They buy drip kits from organisations like World Vision or Total LandCare. In Dwangwa, sugar estates use overhead irrigation to grow sugarcane.",
    "summary": "Irrigation enables dry‑season farming and higher yields. Surface (low cost, low efficiency), overhead (medium), drip (high efficiency, high cost). Choice depends on crop, water, and budget.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Drip Irrigation for Tomatoes",
        "description": "Farmers near Blantyre use drip kits to grow tomatoes in dry season, earning more than rain‑fed growers."
      },
      {
        "title": "Sugar Estate Overhead Irrigation",
        "description": "Dwangwa and Nchalo estates use centre‑pivot sprinklers to irrigate large sugarcane fields."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which irrigation system is the most water‑efficient?",
        "answer": "Drip irrigation (90‑95% efficiency).",
        "hint": "Water goes directly to roots."
      },
      {
        "question": "What is a limitation of overhead irrigation?",
        "answer": "High cost and water loss due to evaporation, especially on windy days.",
        "hint": "Sprays in the air."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Irrigation",
    "lessonNumber": 2,
    "lessonTitle": "Establishing and Maintaining an Irrigation System",
    "lessonId": "agriculture-f2-irrigation-2",
    "order": 143,
    "learningObjectives": [
      "Identify factors that affect the frequency and timing of irrigation",
      "Describe the steps to establish an irrigation unit and how to maintain it"
    ],
    "introduction": "Choosing the right irrigation system is only the first step. You also need to know when to water, how to set up the system, and how to keep it working. Today we learn these practical aspects.",
    "keyPoints": [
      "Factors affecting irrigation frequency: soil type (sandy needs more frequent), crop type (shallow‑rooted needs more), stage of growth (flowering/fruiting critical), weather (hot, dry, windy increases need).",
      "Steps to establish an irrigation unit: 1. Source of water (river, well, borehole, dam). 2. Pump or gravity system. 3. Main pipes and valves. 4. Distribution lines (sprinklers or drip lines). 5. Test and adjust.",
      "Maintenance: clean filters, check for leaks, flush lines, repair damaged pipes, winterise (drain before frost, where applicable).",
      "In Malawi, manual watering (watering can) is common for small gardens; treadle pumps for small plots; motorised pumps for larger areas."
    ],
    "detailedContent": "When to Irrigate – Factors to Consider\n\n1. Soil type:\n   - Sandy soil: drains quickly, needs frequent irrigation (every 2‑3 days).\n   - Clay soil: holds water, needs less frequent (every 7‑10 days).\n\n2. Crop type:\n   - Shallow‑rooted (onions, lettuce): need more frequent water.\n   - Deep‑rooted (maize, tomatoes): can access deeper water.\n\n3. Growth stage:\n   - Most critical periods: germination, flowering, fruit formation.\n   - Avoid water stress during these stages.\n\n4. Weather:\n   - Hot, dry, windy conditions increase evaporation – irrigate more.\n   - Cloudy, cool, humid – reduce frequency.\n\nHow to Determine When to Irrigate (simple field method)\n- Look at the soil: dig a small hole. If soil at root depth is dry and crumbly, water is needed.\n- Observe plants: wilting at midday (if not recovered by evening) indicates water stress.\n\nSteps to Establish a Small Irrigation Unit (e.g., treadle pump with furrow)\n\n1. Locate water source: shallow well or river.\n2. Install treadle pump (or motorised pump) at source.\n3. Lay main delivery pipe to the field.\n4. Dig furrows between rows (for surface irrigation) or lay drip lines/sprinklers.\n5. Connect and test for even water distribution.\n6. Adjust outlets to ensure all plants receive water.\n\nMaintenance of Irrigation Systems\n\n- Weekly: check for leaks, clean pump strainer, tighten connections.\n- Monthly: flush drip lines (open end caps), clean filters, lubricate pump.\n- After season: drain pipes and pumps (prevent freezing if applicable, but in Malawi just store dry to prevent rust).\n- For treadle pumps: replace rubber washers every 6‑12 months.\n- For motorised pumps: change engine oil and clean spark plugs regularly.\n\nMalawi Example: A farmer in Machinga uses a treadle pump to irrigate a 0.5 ha garden. He waters every 3 days during dry season. He cleans the pump screen daily to prevent clogging.",
    "summary": "Irrigation frequency depends on soil, crop, growth stage, and weather. Establish a unit by securing water source, pump, and distribution lines. Regular maintenance (cleaning, leak checks) keeps system working.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Treadle Pump Garden",
        "description": "Farmers in Machinga use foot‑powered pumps to water vegetables daily."
      },
      {
        "title": "Drip Line Flushing",
        "description": "At the end of each season, drip lines are opened and flushed to remove sediment."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why does sandy soil need more frequent irrigation than clay soil?",
        "answer": "Sandy soil drains quickly and holds less water; clay retains water longer.",
        "hint": "Particle size and porosity."
      },
      {
        "question": "What is one maintenance task for a drip irrigation system?",
        "answer": "Clean filters and flush drip lines to prevent clogging.",
        "hint": "Emitters get blocked by particles."
      }
    ]
  },
  {
    "subject": "Agriculture",
    "form": "Form 2",
    "topic": "Agricultural Research",
    "lessonNumber": 2,
    "lessonTitle": "Conducting Research and Writing a Report",
    "lessonId": "agriculture-f2-conducting-research-1",
    "order": 145,
    "learningObjectives": [
      "Describe the steps of conducting an agricultural experiment (data collection, analysis, evaluation)",
      "Outline the format for writing an agricultural research report"
    ],
    "introduction": "Once the experiment is designed and laid out, you must collect data properly and then write a report. Today we learn how to conduct research and present your findings in a clear report.",
    "keyPoints": [
      "Conducting experiment: apply treatments, take measurements (yield, height, pest damage), record in a notebook.",
      "Data analysis: calculate means, draw graphs (bar charts, line graphs), use statistics if possible (t‑test, ANOVA).",
      "Evaluation: check if results answer the hypothesis; consider errors and limitations.",
      "Report format: Title, Abstract, Introduction, Materials and Methods, Results, Discussion, Conclusion, Recommendations, References."
    ],
    "detailedContent": "Conducting an Agricultural Experiment\n\n1. Plan: Write down what you will measure and when.\n   - Examples: plant height (weekly), number of cobs per plant, yield (kg per plot), pest damage score.\n\n2. Apply treatments: For a fertiliser trial, apply NPK at planting, urea top‑dress, etc. Keep non‑treated plots (control).\n\n3. Data collection:\n   - Use a notebook with columns (plot number, treatment, measurement).\n   - Take observations at same time each day if possible.\n   - For yield: harvest, dry, weigh.\n\n4. Data analysis:\n   - Calculate mean (average) for each treatment.\n   - Draw bar charts to compare treatments.\n   - If possible, use simple statistics like standard deviation or t‑test (optional at Form 2).\n   - Example: Mean yield for fertilised = 5.2 t/ha, unfertilised = 2.1 t/ha.\n\n5. Evaluation:\n   - Did the results support the hypothesis?\n   - Were there errors (e.g., one plot waterlogged, pest attack)?\n   - What would you improve next time?\n\nResearch Report Format\n\n| Section | Content |\n|---------|---------|\n| Title | Clear and descriptive (e.g., \"Effect of NPK fertiliser on maize yield at Chitedze, 2023\") |\n| Abstract | Brief summary of aim, methods, main results, conclusion (150‑200 words) |\n| Introduction | Background, problem statement, objective, hypothesis |\n| Materials and Methods | What you used and what you did (step by step) |\n| Results | Tables, graphs, written summary of findings (no interpretation yet) |\n| Discussion | Explain what results mean, compare with other studies, note errors |\n| Conclusion | Restate main finding and its implications |\n| Recommendations | Suggest what farmers should do or what future research is needed |\n| References | List sources (books, articles) |\n\nMalawi Example: A student does a project on chicken manure vs NPK on maize. She collects data, calculates mean yields, and writes a report. The report is submitted to the teacher for assessment.",
    "summary": "Conduct experiments by applying treatments and collecting data. Analyse by calculating means and drawing graphs. Write a report with clear sections: Introduction, Methods, Results, Discussion, Conclusion.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "School Project",
        "description": "Students compare compost vs NPK on maize yield and write a report for their agriculture class."
      },
      {
        "title": "Farmer Group Trial",
        "description": "A club tests two tomato varieties and presents results to the extension officer."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What information belongs in the Methods section of a report?",
        "answer": "Materials used, experimental design, step‑by‑step procedure.",
        "hint": "So someone can repeat your experiment."
      },
      {
        "question": "Why do you need a control treatment?",
        "answer": "To compare the effect of the treatment; without a control, you cannot know if the treatment caused the result.",
        "hint": "Baseline."
      }
    ]
  },
  {
    "subject": "Mathematics",
    "form": "Form 1",
    "topic": "Percentages",
    "lessonNumber": 1,
    "lessonTitle": "Calculating Percentages and Percentage Increase/Decrease",
    "lessonId": "maths-f1-percentages-1",
    "order": 169,
    "learningObjectives": [
      "Express one quantity as a percentage of another",
      "Calculate percentage increase and decrease in real‑life contexts (prices, population, harvest)"
    ],
    "introduction": "Percentages are used everywhere – discounts in shops, exam scores, population growth. Today we learn to calculate percentages and apply them to everyday situations in Malawi.",
    "keyPoints": [
      "Percentage = (part / whole) × 100%.",
      "Example: 15 out of 50 learners passed → (15/50)×100 = 30%.",
      "Percentage increase = (increase / original) × 100%.",
      "Percentage decrease = (decrease / original) × 100%.",
      "New value = original ± (percentage × original)."
    ],
    "detailedContent": "What is Percentage?\n\nPercentage means \"per hundred\" (cent = hundred). It is a fraction with denominator 100.\n\nFormula: Percentage = (Part / Whole) × 100%\n\nExample 1: A farmer harvested 2000 kg of maize last year and 2500 kg this year. What is the percentage increase?\nIncrease = 2500 – 2000 = 500 kg.\nPercentage increase = (500 / 2000) × 100% = 0.25 × 100% = 25%.\n\nExample 2: The price of fertiliser was 30,000 MK per bag. It decreased by 10%. What is the new price?\nDecrease = 10% of 30,000 = 0.10 × 30,000 = 3,000 MK.\nNew price = 30,000 – 3,000 = 27,000 MK.\n\nExample 3: A student scored 72 out of 80 on a biology test. Percentage = (72/80)×100 = 90%.\n\nFinding the Whole given a Percentage\n\nIf 25% of a number is 50, find the number.\n25% means 25/100 = 0.25. Let number be N. 0.25 × N = 50 → N = 50 / 0.25 = 200.\n\nReal-life Applications in Malawi\n\n- Exam scores: your MSCE results in percentages.\n- Market prices: a shop may offer 10% discount on sugar.\n- Population growth: if a village grows from 500 to 560 people, percentage increase = (60/500)×100 = 12%.\n- Fertiliser application: if a bag of NPK contains 23% nitrogen, you can calculate how much nitrogen you apply.\n\nMalawi Example: A farmer buys a bag of maize at 15,000 MK and sells it at 18,000 MK. Profit = 3,000 MK. Percentage profit = (3000/15000)×100 = 20%.",
    "summary": "Percentage = (part/whole)×100. Increase % = (increase/original)×100. Decrease % = (decrease/original)×100. Used in prices, statistics, and scores.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Maize Profit",
        "description": "Calculate percentage profit when buying and selling maize."
      },
      {
        "title": "Exam Score",
        "description": "Convert a test mark to a percentage."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A learner scored 42 out of 60. What is the percentage?",
        "answer": "70%",
        "hint": "(42/60)×100 = 70"
      },
      {
        "question": "The population of a village increased from 800 to 1000. Find the percentage increase.",
        "answer": "25%",
        "hint": "Increase = 200, (200/800)×100 = 25"
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Investigative Techniques",
    "lessonNumber": 1,
    "lessonTitle": "Safety Measures and Use of Laboratory Apparatus",
    "lessonId": "biology-f1-investigative-safety-1",
    "order": 170,
    "learningObjectives": [
      "State general safety rules in the biology laboratory",
      "Identify common laboratory apparatus and describe their uses"
    ],
    "introduction": "Before we start any experiment, we must learn how to stay SAFE. Today we learn the most important safety rules and the names of common apparatus we will use.",
    "keyPoints": [
      "Safety rules: wear goggles and lab coat, tie back hair, no eating/drinking, report accidents, know first aid kit location.",
      "Hazard symbols: flammable, toxic, corrosive, irritant, explosive.",
      "Common apparatus: beaker, test tube, measuring cylinder, microscope, hand lens, forceps, scalpel, petri dish.",
      "First aid for cuts, burns, and chemical spills."
    ],
    "detailedContent": "Laboratory Safety Rules\n\n1. Wear safety goggles when heating or using chemicals.\n2. Wear a lab coat to protect skin and clothing.\n3. Tie back long hair to prevent it catching fire.\n4. No eating or drinking in the lab – chemicals may contaminate food.\n5. Do not taste chemicals or touch them bare-handed.\n6. If you spill a chemical, wash immediately with plenty of water and inform your teacher.\n7. Know the location of first aid kit, fire extinguisher, and fire blanket.\n8. After lab work, wash your hands thoroughly.\n\nCommon Apparatus in Biology\n\n| Apparatus | Use |\n|-----------|-----|\n| Beaker | Hold and heat liquids |\n| Test tube | Small‑scale reactions |\n| Measuring cylinder | Measure liquid volume |\n| Microscope | Observe very small objects |\n| Hand lens (magnifying glass) | Observe small specimens |\n| Forceps | Pick up small or delicate specimens |\n| Scalpel | Cut thin sections of plant/animal tissue |\n| Petri dish | Culture micro‑organisms or hold specimens |\n| Dissecting tray | Hold specimen during dissection |\n| Thermometer | Measure temperature |\n\nFirst Aid for Common Accidents\n\n- Cut: clean with water, apply antiseptic, cover with sterile bandage.\n- Burn: cool with cold running water for at least 10 minutes.\n- Chemical splash in eye: flush with water for 15 minutes, get medical help.\n\nHow to smell a chemical: Never put your nose directly to the container. Waft vapour towards your nose with your hand.\n\nMalawi Example: In a school dissection of a fish, you must wear gloves and goggles to protect from preservatives like formalin.",
    "summary": "Follow safety rules: goggles, no eating, report accidents. Know apparatus and their uses. First aid for cuts, burns, chemical splashes.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Dissecting a Fish",
        "description": "Use gloves, goggles, and a scalpel safely."
      },
      {
        "title": "First Aid Kit",
        "description": "Located in every laboratory; know where it is."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What should you do if a chemical spills on your skin?",
        "answer": "Wash immediately with plenty of water and tell the teacher.",
        "hint": "Do not wait."
      },
      {
        "question": "Name one piece of apparatus used to measure liquid volume.",
        "answer": "Measuring cylinder",
        "hint": "Graduated."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Investigative Techniques",
    "lessonNumber": 2,
    "lessonTitle": "Drawing Biological Diagrams and Calculating Magnification",
    "lessonId": "biology-f1-biological-drawing-1",
    "order": 171,
    "learningObjectives": [
      "Draw accurate, labelled biological diagrams from observation",
      "Calculate magnification using the formula: magnification = image size / actual size"
    ],
    "introduction": "In biology, a good drawing can show details that words cannot. Today we learn how to draw specimens properly and calculate how much they are magnified under a microscope.",
    "keyPoints": [
      "Rules for biological drawings: large, clear lines, no shading, label lines with a ruler, title.",
      "Magnification = size of image ÷ actual size of specimen.",
      "Actual size = image size ÷ magnification.",
      "Units must be the same (e.g., both in mm or both in µm).",
      "Example: If a cell is drawn 50 mm and actual size is 0.5 mm, magnification = 50/0.5 = 100×."
    ],
    "detailedContent": "Rules for Biological Drawings\n\n- Use a sharp pencil (no pens).\n- Draw large – take at least half a page.\n- Use clear, single lines (no sketching or shading).\n- Keep lines continuous (no feathery lines).\n- Label lines must be straight and drawn with a ruler.\n- Labels should be written horizontally.\n- Include a title (e.g., \"External features of a grasshopper\").\n- State the magnification (e.g., ×40).\n\nCalculating Magnification\n\nWhen you view a specimen through a microscope, the image is magnified.\n\nFormula: Magnification = Image size ÷ Actual size\n\nExamples\n\n1. A red blood cell has actual diameter 0.007 mm. Under a microscope, it appears 0.35 mm in diameter. Magnification = 0.35 ÷ 0.007 = 50×.\n\n2. A drawing of a chloroplast is 40 mm long. The actual length is 0.01 mm. Magnification = 40 ÷ 0.01 = 4000×.\n\nRearranged formulas:\n\n- Actual size = Image size ÷ Magnification\n- Image size = Actual size × Magnification\n\nUnits: Ensure both measurements are in the same units (mm, cm, µm). 1 mm = 1000 µm.\n\nMalawi Example: Draw an onion cell as seen under a microscope. Measure the length of your drawing (50 mm) and estimate actual size (0.5 mm). Magnification = 50/0.5 = 100×. Write \"×100\" under the title.",
    "summary": "Biological drawings: large, clear lines, no shading, labelled with ruler. Magnification = image size ÷ actual size. Always state magnification on drawing.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Onion Cell Drawing",
        "description": "Draw and label nucleus, cell wall, cytoplasm, vacuole."
      },
      {
        "title": "Mosquito Magnification",
        "description": "Calculate magnification of a mosquito wing from a photo."
      }
    ],
    "practiceQuestions": [
      {
        "question": "If a specimen is 2 mm long and its image is 100 mm, what is the magnification?",
        "answer": "50×",
        "hint": "100 ÷ 2 = 50"
      },
      {
        "question": "What should you never use in a biological drawing?",
        "answer": "Shading or a pen",
        "hint": "Use a sharp pencil."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Study Skills",
    "lessonNumber": 1,
    "lessonTitle": "Summarising Information Using Tables and Flow Diagrams",
    "lessonId": "biology-f1-study-skills-1",
    "order": 172,
    "learningObjectives": [
      "Summarise biological information in the form of tables and flow diagrams",
      "Extract key points from texts and reorganise them visually"
    ],
    "introduction": "When you read a textbook, it helps to organise information into tables or flow diagrams. Today we practise turning paragraphs into easy‑to‑remember visuals.",
    "keyPoints": [
      "Tables: rows and columns for comparing characteristics (e.g., plant vs animal cells).",
      "Flow diagrams: boxes and arrows showing steps or processes (e.g., digestion).",
      "Keywords: use short phrases, not full sentences.",
      "Tables are good for differences and similarities.",
      "Flow diagrams are good for sequences and cycles."
    ],
    "detailedContent": "Why Use Tables and Flow Diagrams?\n\nTables help you compare items side by side. Flow diagrams show the order of events or cycles.\n\nHow to Create a Table\n\n1. Decide on the categories (columns).\n2. List the items to compare (rows).\n3. Fill in the characteristics.\n\nExample: Comparing plant and animal cells\n\n| Feature | Plant cell | Animal cell |\n|---------|-----------|-------------|\n| Cell wall | Yes (cellulose) | No |\n| Chloroplasts | Yes | No |\n| Vacuole | Large central | Small/absent |\n| Shape | Fixed (rectangular) | Irregular |\n\nHow to Create a Flow Diagram\n\n1. Identify the starting point.\n2. List each step in order.\n3. Draw boxes and connect with arrows.\n\nExample: Food chain in a maize field\n\n[Maize] → (arrow) [Grasshopper] → (arrow) [Chicken] → (arrow) [Hawk]\n\nExample: Water cycle flow diagram\n\n[Sun] → [Evaporation from lakes] → [Condensation (clouds)] → [Precipitation (rain)] → [Runoff to lakes]\n\nPractice: Take a paragraph about the nitrogen cycle and convert it into a flow diagram.\n\nMalawi Example: Create a flow diagram showing the steps of maize production (land preparation → planting → fertilising → weeding → harvesting).",
    "summary": "Tables compare items (rows and columns). Flow diagrams show sequences (boxes and arrows). Both help summarise information for revision.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Crop Comparison",
        "description": "Use a table to compare maize and groundnuts (roots, leaves, uses)."
      },
      {
        "title": "Life Cycle of a Mosquito",
        "description": "Draw a flow diagram: egg → larva → pupa → adult."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of diagram is best to show the stages of photosynthesis?",
        "answer": "Flow diagram",
        "hint": "Sequence of steps."
      },
      {
        "question": "What type of diagram is best to compare monocots and dicots?",
        "answer": "Table",
        "hint": "Side‑by‑side comparison."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Classification of Living Things",
    "lessonNumber": 1,
    "lessonTitle": "Using a Dichotomous Key to Identify Organisms",
    "lessonId": "biology-f1-dichotomous-key-1",
    "order": 173,
    "learningObjectives": [
      "Explain what a dichotomous key is and how it works",
      "Use a simple dichotomous key to identify unknown organisms"
    ],
    "introduction": "How do scientists identify an unknown insect or plant? They use a DICHOTOMOUS KEY – a series of paired choices (yes/no, this/that). Today we learn to use and make simple keys.",
    "keyPoints": [
      "Dichotomous key: a tool that asks two contrasting questions at each step (e.g., \"has wings\" vs \"no wings\").",
      "Each choice leads to another question until the organism is identified.",
      "Always start at the first step.",
      "In Malawi, keys are used to identify fish in Lake Malawi, insects in maize fields, or trees in forests."
    ],
    "detailedContent": "What is a Dichotomous Key?\n\nDichotomous means \"divided into two branches\". The key presents two alternative features (couplets). You choose the one that matches your specimen, then proceed to the next couplet until you reach the name.\n\nExample Key for Five Animals\n\n1. Has backbone? Go to 2. No backbone? Go to 5.\n2. Has fins? Go to 3. No fins? Go to 4.\n3. Lives in water and breathes with gills → Fish.\n4. Has wings and feathers → Bird. Has hair and gives milk → Mammal.\n5. Has six legs? Go to 6. Has eight legs? Go to 7.\n6. Has two pairs of wings → Insect.\n7. Has two body parts (cephalothorax and abdomen) → Spider.\n\nHow to Use a Key\n\n1. Look closely at the organism.\n2. Read the first pair of statements.\n3. Choose the one that fits.\n4. Follow the instruction (e.g., \"go to 2\" or \"go to 5\").\n5. Repeat until you get a name.\n\nHow to Make Your Own Simple Key\n\n1. Choose a group of organisms (e.g., leaves of different trees).\n2. Pick a feature to separate them into two groups (e.g., broad leaf vs needle leaf).\n3. Keep dividing until each organism has its own description.\n\nMalawi Example: Key for common fish in Lake Malawi\n\n1. Has a rounded tail → Go to 2.\n   Has a forked tail → Go to 3.\n2. Body yellowish with dark vertical bars → Chambo.\n   Body silvery with no bars → Usipa.\n3. Has spots on the body → Mpasa.\n   No spots, long whiskers → Kampango.\n\nPractice: Use the key to identify a fish with a forked tail and spots on the body (answer: Mpasa).",
    "summary": "A dichotomous key uses paired choices to identify organisms. Start at first couplet, follow choices until you get the name. Used in ecology, agriculture, and medicine.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Lake Malawi Fish Key",
        "description": "Identify chambo, usipa, and kampango using a simple key."
      },
      {
        "title": "Key for Maize Pests",
        "description": "Separate fall armyworm from stalk borer using damage signs."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What does \"dichotomous\" mean?",
        "answer": "Divided into two branches",
        "hint": "Two choices at each step."
      },
      {
        "question": "In a dichotomous key, what happens after you make a choice?",
        "answer": "You go to another couplet (pair of questions) or get the identification.",
        "hint": "Follow the instruction."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Animal Structures and Functions",
    "lessonNumber": 1,
    "lessonTitle": "Feeding Structures of Animals",
    "lessonId": "biology-f1-feeding-structures-1",
    "order": 174,
    "learningObjectives": [
      "Identify the feeding structures of different animals (teeth, beaks, mouthparts)",
      "Relate the structure to the type of food the animal eats"
    ],
    "introduction": "Why do cows have flat teeth while dogs have sharp ones? The shape of an animal’s mouthparts tells you what it eats. Today we learn to match feeding structures to diet.",
    "keyPoints": [
      "Herbivores (plant‑eaters): flat, ridged molars for grinding; incisors for cutting; no canines (e.g., cow, goat).",
      "Carnivores (meat‑eaters): sharp canines for tearing; carnassial teeth for shearing (e.g., dog, cat).",
      "Omnivores (eats both): combination of flat and sharp teeth (e.g., human, pig).",
      "Birds: beaks adapted to diet (short strong for seeds, hooked for meat, long for nectar).",
      "Insects: mouthparts adapted – chewing (grasshopper), piercing‑sucking (mosquito), sponging (housefly)."
    ],
    "detailedContent": "Feeding Structures of Animals\n\nHerbivores (eat plants)\n- Teeth: incisors for biting off grass/leaves; large flat molars for grinding cellulose.\n- No prominent canines (or very small).\n- Example: cow, goat, horse, rabbit.\n- Ruminants have additional stomach chambers to digest fibre.\n\nCarnivores (eat meat)\n- Teeth: long, pointed canines for stabbing and tearing; carnassial teeth (modified premolars/molars) for shearing flesh.\n- Example: dog, cat, lion, hyena.\n- Skull has strong jaw muscles for holding prey.\n\nOmnivores (eat both plants and meat)\n- Teeth: incisors for cutting, canines (moderate), molars for grinding.\n- Example: human, pig, bear, chicken.\n\nBirds and Their Beaks\n\n| Bird | Beak type | Food |\n|------|-----------|------|\n| Eagle | Hooked, sharp | Meat (tearing flesh) |\n| Chicken | Short, stout | Seeds, insects (pecking) |\n| Sunbird | Long, curved | Nectar from flowers |\n| Duck | Flat, broad | Plants and small animals from water |\n\nInsect Mouthparts\n\n- Grasshopper: chewing mouthparts (mandibles) for eating leaves.\n- Mosquito: piercing‑sucking (needle‑like stylets) to suck blood.\n- Housefly: sponging (labellum) to suck up liquid food.\n- Butterfly: siphoning (long coiled proboscis) for nectar.\n\nMalawi Example: A chambo fish in Lake Malawi has teeth inside its throat (pharyngeal teeth) to crush snails and algae. Observe a chicken’s beak – it is short and strong for picking grains.",
    "summary": "Herbivores have flat grinding teeth; carnivores have sharp tearing teeth; omnivores have both. Birds and insects have mouthparts adapted to their specific food.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Chicken Beak",
        "description": "Short and strong for pecking maize grains."
      },
      {
        "title": "Grasshopper Mouthparts",
        "description": "Chewing mandibles for eating leaves."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of teeth would a cow have?",
        "answer": "Flat molars and incisors, no sharp canines",
        "hint": "Herbivore."
      },
      {
        "question": "What is the function of a hooked beak in an eagle?",
        "answer": "Tearing meat",
        "hint": "Carnivorous bird."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Essential Mathematical Skills for Chemistry",
    "lessonNumber": 1,
    "lessonTitle": "Scientific Notation, Significant Figures, and Handling Numbers",
    "lessonId": "chemistry-f1-maths-skills-1",
    "order": 175,
    "learningObjectives": [
      "Express very large and very small numbers in scientific notation",
      "Round numbers to appropriate significant figures and state the precision of measurements"
    ],
    "introduction": "In chemistry, we work with very large numbers (like Avogadro’s constant) and very small numbers (like the mass of an atom). Today we learn to write them easily using scientific notation and to round correctly.",
    "keyPoints": [
      "Scientific notation: N × 10^n, where 1 ≤ N < 10 and n is an integer.",
      "Example: 300,000 = 3 × 10⁵; 0.00045 = 4.5 × 10⁻⁴.",
      "Significant figures: digits that carry meaning (non‑zero digits are always significant).",
      "Rules for zeros: zeros between non‑zeros are significant; leading zeros are not; trailing zeros after decimal are significant.",
      "Rounding: if next digit is ≥5, round up; if <5, stay the same."
    ],
    "detailedContent": "Scientific Notation\n\nScientific notation makes very large or very small numbers easier to read and work with.\n\nRules:\n- Move the decimal point to leave one digit to the left (between 1 and 9).\n- Count how many places you moved. That becomes the exponent n (positive if you moved left, negative if you moved right).\n- Multiply by 10^n.\n\nExamples:\n- 5000 = 5 × 10³ (moved decimal 3 places left)\n- 2,300,000 = 2.3 × 10⁶\n- 0.003 = 3 × 10⁻³ (moved decimal 3 places right)\n- 0.00000015 = 1.5 × 10⁻⁷\n\nSignificant Figures (Significant Digits)\n\nSignificant figures indicate the precision of a measurement.\n\nRules for counting significant figures:\n1. All non‑zero digits are significant (1–9).\n2. Zeros between non‑zero digits are significant (e.g., 105 has 3 sig figs).\n3. Leading zeros (to the left of the first non‑zero) are NOT significant (e.g., 0.0025 has 2 sig figs).\n4. Trailing zeros after a decimal point ARE significant (e.g., 3.00 has 3 sig figs).\n5. Trailing zeros in a whole number without a decimal may be ambiguous (e.g., 500 could be 1, 2, or 3 sig figs; use scientific notation to clarify).\n\nExamples:\n- 0.00450 → 3 sig figs (4,5,0 after decimal)\n- 1200 → ambiguous. Write as 1.2×10³ (2 sig figs) or 1.20×10³ (3 sig figs).\n\nRounding to a given number of significant figures\n\n- Identify the digit up to which you want to keep.\n- Look at the next digit: if it is 5 or more, round up the last kept digit; if less than 5, leave it.\n- Replace dropped digits with zeros if they are to the left of the decimal.\n\nExample: Round 0.007528 to 2 significant figures.\nFirst non‑zero is 7 (1st sig fig), next is 5 (2nd sig fig). Next digit is 2 (<5) → 0.0075.\n\nAccuracy vs Precision\n\n- Accuracy: how close a measurement is to the true value.\n- Precision: how close repeated measurements are to each other.\n\nMalawi Example: When weighing fertiliser, a balance reading 5.00 g is precise to 0.01 g (3 sig figs).",
    "summary": "Scientific notation: N×10ⁿ, 1≤N<10. Significant figures indicate precision. Non‑zero digits always count; zeros depend on position. Round using the next digit rule.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Fertiliser Mass",
        "description": "Record 2.50 kg on a balance – 3 significant figures."
      },
      {
        "title": "Water Volume",
        "description": "A measuring cylinder reads 25.0 mL – 3 sig figs."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Write 0.0000678 in scientific notation.",
        "answer": "6.78 × 10⁻⁵",
        "hint": "Move decimal 5 places right."
      },
      {
        "question": "How many significant figures are in 0.04010?",
        "answer": "4",
        "hint": "Leading zeros not counted; 4,0,1,0 are significant after decimal."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Separation Techniques",
    "lessonNumber": 1,
    "lessonTitle": "Crystallisation and Distillation",
    "lessonId": "chemistry-f1-separation-crystallisation-distillation-1",
    "order": 176,
    "learningObjectives": [
      "Describe crystallisation as a method to obtain soluble solids from solutions",
      "Describe simple distillation for separating a pure liquid from a solution"
    ],
    "introduction": "How do we get salt from sea water? How do we get pure water from salty water? Today we learn two important separation methods: CRYSTALLISATION and DISTILLATION.",
    "keyPoints": [
      "Crystallisation: evaporation of solvent leaves solid crystals. Used to recover soluble solids (e.g., salt from brine).",
      "Steps: heat solution to concentrate, cool slowly, crystals form, filter and dry.",
      "Distillation: boiling and condensing a liquid to separate it from dissolved solids.",
      "Apparatus: distillation flask, condenser, receiving flask, heat source.",
      "Example: obtaining pure water from salt water (distillation) or obtaining salt from salt water (crystallisation)."
    ],
    "detailedContent": "Crystallisation\n\nCrystallisation is used to obtain a soluble solid from a solution.\n\nProcedure:\n1. Dissolve the solid in a minimum amount of hot solvent to make a saturated solution.\n2. Allow the solution to cool slowly.\n3. Crystals form as the solvent cools (solubility decreases).\n4. Filter to collect crystals.\n5. Wash with a little cold solvent.\n6. Dry between filter paper.\n\nExample: Obtaining salt from Lake Chilwa brine. The brine is left in shallow pans. Sun evaporates water, and salt crystals remain.\n\nAdvantages: simple, low cost, can be done with solar energy.\n\nDistillation\n\nDistillation separates a liquid from a solution where the solute is non‑volatile (does not boil).\n\nApparatus: distillation flask (with thermometer), condenser, receiving flask.\n\nProcedure:\n1. Heat the solution.\n2. The liquid (e.g., water) boils and turns to vapour.\n3. Vapour passes into the condenser (cold water surrounds it) and turns back to liquid.\n4. Pure liquid (distillate) collects in the receiving flask.\n5. Solid solute (e.g., salt) remains in the flask.\n\nExample: Purifying borehole water in a laboratory. Distilled water is free of minerals and bacteria.\n\nComparison\n\n| Method | Purpose | Product |\n|--------|---------|---------|\n| Crystallisation | Obtain pure solid from solution | Solid crystals |\n| Distillation | Obtain pure liquid from solution | Pure liquid |\n\nMalawi Example: In rural areas, women boil water to kill germs, but that does not remove salt. For desalination (removing salt), distillation would be needed, but it uses more energy. Crystallisation is used at Lake Chilwa to produce salt for sale.",
    "summary": "Crystallisation: evaporate solvent to get solid crystals. Distillation: boil and condense to get pure liquid. Both are important for purifying substances.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Lake Chilwa Salt",
        "description": "Sun evaporates brine, leaving salt crystals."
      },
      {
        "title": "Distilled Water",
        "description": "Used in laboratories and for car batteries."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Which method would you use to obtain pure water from a salt solution?",
        "answer": "Distillation",
        "hint": "Water boils, salt stays."
      },
      {
        "question": "What is the product of crystallisation?",
        "answer": "Solid crystals of the solute",
        "hint": "After evaporation."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Separation Techniques",
    "lessonNumber": 2,
    "lessonTitle": "Chromatography and Its Applications",
    "lessonId": "chemistry-f1-chromatography-1",
    "order": 177,
    "learningObjectives": [
      "Describe how paper chromatography separates mixtures of soluble substances",
      "Calculate Rf values from a chromatogram"
    ],
    "introduction": "Have you ever seen a black ink that separates into blue, red, and yellow? That is CHROMATOGRAPHY. Today we learn how to separate mixtures of coloured substances and find Rf values.",
    "keyPoints": [
      "Chromatography: separates components of a mixture based on different solubilities and attraction to the paper.",
      "Stationary phase: paper (or other solid). Mobile phase: solvent (water, alcohol).",
      "Components move at different speeds – some travel far, some stay near the start.",
      "Rf value = distance moved by component ÷ distance moved by solvent front.",
      "Rf values are characteristic for a substance under the same conditions."
    ],
    "detailedContent": "Paper Chromatography\n\nUsed to separate mixtures of soluble substances (often coloured, but colourless can be made visible with UV light or spraying).\n\nProcedure:\n\n1. Draw a pencil line (baseline) near one end of a chromatography paper.\n2. Place a small drop of the mixture on the line (a concentrated spot).\n3. Add a small amount of solvent (water or alcohol) to a beaker – the solvent level must be below the baseline.\n4. Place the paper in the beaker, cover with a lid (or cling film) to prevent evaporation.\n5. Allow the solvent to rise by capillary action.\n6. When the solvent front is near the top, remove the paper and mark the solvent front.\n7. Dry the paper (chromatogram).\n\nInterpreting a Chromatogram\n\n- Each component appears as a separate spot.\n- The distance moved depends on how soluble it is in the solvent and how strongly it is attracted to the paper.\n\nRf Value\n\nRf = distance moved by solute ÷ distance moved by solvent\n\nRf values are between 0 and 1. They help identify substances.\n\nExample: A yellow spot moved 3.5 cm, solvent front moved 7 cm. Rf = 3.5/7 = 0.50.\n\nApplications\n\n- Identifying plant pigments (chlorophyll, carotenoids).\n- Testing for adulteration in food dyes.\n- Forensic science (identifying inks at a crime scene).\n- Checking purity of pharmaceuticals.\n\nMalawi Example: In a school lab, you can separate the green pigment chlorophyll from a leaf into different bands (chlorophyll a, chlorophyll b, carotenes).",
    "summary": "Paper chromatography separates mixtures based on movement in a solvent. Rf value = distance solute ÷ distance solvent. Used to identify substances.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Leaf Pigments",
        "description": "Extract and separate chlorophyll from a local tree leaf."
      },
      {
        "title": "Ink Analysis",
        "description": "Compare different black pens to see if they are the same brand."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the mobile phase in paper chromatography?",
        "answer": "The solvent (water, alcohol).",
        "hint": "Moves up the paper."
      },
      {
        "question": "If a spot moves 2 cm and the solvent front moves 8 cm, what is the Rf value?",
        "answer": "0.25",
        "hint": "2 ÷ 8 = 0.25"
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Atomic Structure",
    "lessonNumber": 2,
    "lessonTitle": "Electron Configuration of First 20 Elements",
    "lessonId": "chemistry-f1-electron-configuration-1",
    "order": 178,
    "learningObjectives": [
      "Draw the electron configuration (shell diagram) for the first 20 elements",
      "Use the electron arrangement to predict the group and period of an element"
    ],
    "introduction": "Electrons are arranged in shells (energy levels) around the nucleus. This arrangement determines how an element behaves. Today we learn to write electron configurations for the first 20 elements.",
    "keyPoints": [
      "Electron shells: K (1st shell) max 2 electrons; L (2nd) max 8; M (3rd) max 8 for first 20 elements.",
      "Electrons fill lower shells first (closest to nucleus).",
      "Electron configuration written as numbers: e.g., sodium = 2,8,1.",
      "The period (row) in periodic table equals the number of occupied shells.",
      "The group (column) for main group elements equals the number of electrons in the outer shell."
    ],
    "detailedContent": "Electron Shells\n\nElectrons are arranged in energy levels (shells).\n- Shell 1 (K) : maximum 2 electrons\n- Shell 2 (L) : maximum 8 electrons\n- Shell 3 (M) : maximum 8 electrons (for first 20 elements; actually up to 18, but we only need 8 for period 3 elements)\n\nRules:\n- Fill lower shells first.\n- Outer shell cannot have more than 8.\n\nElectron Configuration of First 20 Elements\n\n| Element | Symbol | Atomic number | Electron configuration |\n|---------|--------|---------------|------------------------|\n| Hydrogen | H | 1 | 1 |\n| Helium | He | 2 | 2 |\n| Lithium | Li | 3 | 2,1 |\n| Beryllium | Be | 4 | 2,2 |\n| Boron | B | 5 | 2,3 |\n| Carbon | C | 6 | 2,4 |\n| Nitrogen | N | 7 | 2,5 |\n| Oxygen | O | 8 | 2,6 |\n| Fluorine | F | 9 | 2,7 |\n| Neon | Ne | 10 | 2,8 |\n| Sodium | Na | 11 | 2,8,1 |\n| Magnesium | Mg | 12 | 2,8,2 |\n| Aluminium | Al | 13 | 2,8,3 |\n| Silicon | Si | 14 | 2,8,4 |\n| Phosphorus | P | 15 | 2,8,5 |\n| Sulphur | S | 16 | 2,8,6 |\n| Chlorine | Cl | 17 | 2,8,7 |\n| Argon | Ar | 18 | 2,8,8 |\n| Potassium | K | 19 | 2,8,8,1 |\n| Calcium | Ca | 20 | 2,8,8,2 |\n\nPeriod and Group Prediction\n\n- Period = number of occupied shells.\n  - Example: Sodium (2,8,1) has 3 shells → Period 3.\n- Group (for main group elements) = number of outer shell electrons.\n  - Example: Sodium has 1 outer electron → Group I.\n  - Chlorine has 7 outer electrons → Group VII.\n\nDrawing Shell Diagrams\n\nDraw a circle for the nucleus, then concentric circles for shells. Place dots or crosses for electrons.\n\nMalawi Example: Understanding electron configuration helps explain why sodium (Group I) reacts violently with water, while argon (Group VIII) does not react.",
    "summary": "Electron configuration shows arrangement of electrons in shells. Period = number of shells. Group = number of outer electrons (for main groups). First 20: shells fill 2,8,8,2.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Sodium and Water",
        "description": "Sodium has 1 outer electron, which it loses easily – that is why it reacts strongly."
      },
      {
        "title": "Argon in Light Bulbs",
        "description": "Argon has a full outer shell (8) – it is unreactive, so it is used in light bulbs."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the electron configuration of magnesium (atomic number 12)?",
        "answer": "2,8,2",
        "hint": "12 electrons total."
      },
      {
        "question": "An element has electron configuration 2,8,7. What period and group is it in?",
        "answer": "Period 3, Group VII",
        "hint": "3 shells, 7 outer electrons."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Recording Measurements",
    "lessonNumber": 1,
    "lessonTitle": "Measuring Organisms and Calculating Variables",
    "lessonId": "biology-f1-recording-measurements-1",
    "order": 179,
    "learningObjectives": [
      "Take accurate measurements of organisms (length, mass, volume, temperature)",
      "Calculate derived variables such as surface area, volume, and growth rate from measured data"
    ],
    "introduction": "In biology, we often need to measure organisms – their size, mass, or how fast they grow. Today we learn to take measurements and calculate useful values.",
    "keyPoints": [
      "Length: use a ruler (mm) for small specimens; tape measure for larger animals.",
      "Mass: use a beam balance or electronic balance (grams).",
      "Volume: use a measuring cylinder for liquids; displacement method for irregular solids.",
      "Temperature: use a thermometer (°C).",
      "Derived variables: volume of cuboid = length×width×height; surface area; growth rate = (change in size)/time.",
      "Always record units and estimate to one decimal place where possible."
    ],
    "detailedContent": "Recording Measurements\n\nWhy measure? To compare growth, health, or population characteristics.\n\nLength:\n- For a leaf: place on a ruler and read length in cm or mm.\n- For a fish: from nose to tail tip (not including tail fin).\n- Record to nearest mm (e.g., 45.2 mm).\n\nMass:\n- Use a top‑pan balance.\n- Zero the balance.\n- Place specimen in a container (record container mass separately if needed).\n- Example: a bean seed mass = 0.34 g.\n\nVolume:\n- For liquids: pour into measuring cylinder, read meniscus at eye level.\n- For irregular solids (e.g., a stone): use displacement – add stone to water in a measuring cylinder; volume increase = stone volume.\n- For a small insect: use a graduated syringe with water displacement.\n\nTemperature:\n- Use a thermometer (alcohol or digital).\n- Place bulb in environment (e.g., soil, water, animal mouth) and wait until reading stabilises.\n\nCalculating Derived Variables\n\n1. Surface area of a leaf (approximate as rectangle):\n   Area = length × width (for rectangular leaf). For irregular, trace on graph paper and count squares.\n\n2. Volume of a cuboid (e.g., a block of agar):\n   V = length × width × height (in cm³).\n\n3. Growth rate:\n   Growth rate = (final size – initial size) / time.\n   Example: A seedling grew from 5 cm to 12 cm in 7 days.\n   Growth rate = (12 – 5) / 7 = 7 / 7 = 1 cm/day.\n\n4. Density = mass / volume (g/cm³) – used to compare tissue composition.\n\nMalawi Example: Measure the length and mass of 10 maize seeds, calculate average mass per seed, then predict yield from number of seeds produced.",
    "summary": "Measure length (mm, cm), mass (g), volume (mL, cm³), temperature (°C). Calculate derived variables: area, volume, growth rate, density. Record units and decimal places.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Maize Seed Mass",
        "description": "Measure 10 seeds, calculate average mass, estimate total yield from cob count."
      },
      {
        "title": "Leaf Surface Area",
        "description": "Trace a mango leaf on graph paper and count squares."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A fish grows from 15 cm to 25 cm in 5 months. Calculate growth rate per month.",
        "answer": "2 cm/month",
        "hint": "(25-15)/5 = 2"
      },
      {
        "question": "What instrument measures volume of a liquid?",
        "answer": "Measuring cylinder",
        "hint": "Graduated cylinder."
      }
    ]
  },
  {
    "subject": "Biology",
    "form": "Form 1",
    "topic": "Nutrition in Humans",
    "lessonNumber": 2,
    "lessonTitle": "Common Sources of Food Nutrients and Obesity",
    "lessonId": "biology-f1-food-sources-obesity-1",
    "order": 180,
    "learningObjectives": [
      "Identify local sources of carbohydrates, proteins, fats, vitamins, and minerals",
      "Explain the causes of obesity and ways to prevent it"
    ],
    "introduction": "Not all foods are the same. Today we learn which Malawian foods provide which nutrients, and why eating too much can lead to obesity – a growing health problem even in Malawi.",
    "keyPoints": [
      "Carbohydrate sources: nsima (maize), rice, bread, potatoes.",
      "Protein sources: beans, groundnuts, fish (usipa, chambo), eggs, meat.",
      "Fat sources: cooking oil, groundnuts, avocado.",
      "Vitamin A: pumpkin, mango, bonongwe (pumpkin leaves).",
      "Vitamin C: guava, orange, tomato, lemon.",
      "Calcium: bonongwe, small fish (usipa with bones), milk.",
      "Iron: liver, beans, bonongwe, pumpkin leaves.",
      "Obesity: caused by more energy intake than energy used – too many carbohydrates/fats, not enough exercise.",
      "Prevention: balanced diet, portion control, regular physical activity."
    ],
    "detailedContent": "Local Sources of Essential Nutrients\n\nCarbohydrates (energy)\n- Maize (nsima, maize flour)\n- Rice (mtumbira)\n- Cassava\n- Sweet potatoes\n- Bread (made from wheat)\n\nProteins (growth and repair)\n- Beans (many varieties: nyemba, khungudzu)\n- Groundnuts (peanuts)\n- Fish (usipa, chambo, matemba, kampango)\n- Eggs (mazira)\n- Meat (chicken, goat, beef)\n- Soybeans\n\nFats (energy storage, insulation)\n- Cooking oil (soya, sunflower, palm)\n- Groundnuts (also protein)\n- Avocado (mpepe)\n- Margarine\n\nVitamins\n- Vitamin A (vision, immunity): pumpkin (dzungu), mango (mango), carrots, bonongwe (pumpkin leaves)\n- Vitamin C (immune, wound healing): guava, orange, lemon, tomato, msambala (cabbage)\n- B vitamins: whole grains, beans, meat\n\nMinerals\n- Calcium (bones, teeth): bonongwe, usipa (eaten whole with bones), milk, groundnuts\n- Iron (haemoglobin): liver, beans, bonongwe, pumpkin leaves, dried fish\n- Iodine (thyroid): iodised salt, fish from Lake Malawi\n\nObesity\n\nObesity means having excess body fat, usually measured by Body Mass Index (BMI) > 30.\n\nCauses in Malawi:\n- Increasing consumption of processed foods (soft drinks, fried snacks, white bread).\n- Less physical activity (desk jobs, motorbikes, less walking).\n- Large portion sizes of starchy foods (nsima) without enough vegetables.\n- Genetic factors.\n\nHealth consequences: diabetes, high blood pressure, heart disease, joint problems.\n\nPrevention:\n- Eat a balanced diet with plenty of vegetables and fruits.\n- Reduce sugary drinks and fried foods.\n- Control portion sizes (e.g., not eating more nsima than you need).\n- Exercise regularly – walking, cycling, playing football, working in the garden.\n- In children: encourage active play, limit screen time.\n\nMalawi Example: In urban areas like Lilongwe and Blantyre, obesity is rising due to fast food and sedentary lifestyles. Health campaigns promote active living and traditional vegetables.",
    "summary": "Local foods: nsima (carbs), beans (protein), bonongwe (vitamins, calcium). Obesity = excess energy intake; prevent with balanced diet, portion control, and exercise.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Bonongwe",
        "description": "Pumpkin leaves – rich in vitamin A, calcium, and iron."
      },
      {
        "title": "Usipa Fish",
        "description": "Eaten whole – good source of calcium and protein."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Name two Malawian foods rich in iron.",
        "answer": "Bonongwe and beans (or liver).",
        "hint": "Leafy greens and legumes."
      },
      {
        "question": "What is one way to prevent obesity?",
        "answer": "Regular exercise and eating smaller portions.",
        "hint": "Energy balance."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Scientific Method",
    "lessonNumber": 1,
    "lessonTitle": "The Scientific Method in Chemistry Experiments",
    "lessonId": "chemistry-f1-scientific-method-1",
    "order": 181,
    "learningObjectives": [
      "Describe the steps of the scientific method (observation, question, hypothesis, experiment, analysis, conclusion)",
      "Identify variables (independent, dependent, controlled) in a simple experiment"
    ],
    "introduction": "How do chemists discover new knowledge? They follow a process called the SCIENTIFIC METHOD. Today we learn the steps and how to design fair experiments.",
    "keyPoints": [
      "Steps: Observation → Question → Hypothesis → Experiment → Data analysis → Conclusion.",
      "Hypothesis: a testable explanation (an \"educated guess\").",
      "Variables: independent (changed by experimenter), dependent (measured), controlled (kept constant).",
      "A fair test changes only the independent variable.",
      "Control experiment: a standard for comparison (no treatment or normal conditions)."
    ],
    "detailedContent": "The Scientific Method\n\nScientists use a systematic approach to investigate phenomena.\n\nStep 1 – Observation\nNotice something in the world. Example: \"A piece of iron rusts faster when left in water than when kept dry.\"\n\nStep 2 – Question\nTurn the observation into a question. Example: \"Does water make iron rust faster?\"\n\nStep 3 – Hypothesis\nPropose a possible explanation. Example: \"If iron is exposed to water, then it will rust faster than iron exposed to dry air.\"\n\nStep 4 – Experiment\nDesign a fair test to check the hypothesis.\n\nMust include:\n- Independent variable (what you change): presence of water.\n- Dependent variable (what you measure): time to appear rust, or mass of rust produced.\n- Controlled variables (kept the same): type of iron, temperature, exposure to air, size of iron piece.\n- Control: iron kept completely dry (no water).\n\nStep 5 – Data collection and analysis\n- Record measurements in a table.\n- Draw graphs (e.g., mass of rust vs time).\n- Look for patterns.\n\nStep 6 – Conclusion\n- If data supports hypothesis → accept hypothesis (but not \"proved\").\n- If data does not support → reject or modify hypothesis.\n\nExample: Investigation of how temperature affects the rate of dissolving sugar.\n\n- Hypothesis: Increasing temperature increases the rate of dissolving.\n- Independent variable: temperature of water (20°C, 40°C, 60°C).\n- Dependent variable: time for sugar to completely dissolve.\n- Controlled: same amount of sugar, same stirring, same container.\n- Control: room temperature (20°C) as baseline.\n- Conclusion: As temperature increased, dissolving time decreased. Hypothesis supported.\n\nMalawi Example: A student wants to know if fertiliser makes maize grow taller. Hypothesis: \"Maize with fertiliser will grow taller than maize without fertiliser.\" Independent: fertiliser (yes/no). Dependent: height after 4 weeks. Controlled: same soil, same water, same sunlight.",
    "summary": "Scientific method: observation → hypothesis → experiment (with control and variables) → analysis → conclusion. Variables: independent (changed), dependent (measured), controlled (constant).",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Fertiliser Experiment",
        "description": "Test whether NPK fertiliser increases maize height using control and treatment plots."
      },
      {
        "title": "Salt and Boiling Point",
        "description": "Investigate if salt raises boiling point of water."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the independent variable in an experiment testing the effect of light on plant growth?",
        "answer": "Amount of light (or presence/absence of light).",
        "hint": "What you change."
      },
      {
        "question": "Why is a control important?",
        "answer": "To provide a baseline to compare results and ensure changes are due to the independent variable.",
        "hint": "Without it, you cannot be sure the treatment caused the effect."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 1",
    "topic": "Accuracy and Precision",
    "lessonNumber": 1,
    "lessonTitle": "Accuracy, Precision, and Presentation of Numerical Data",
    "lessonId": "chemistry-f1-accuracy-precision-1",
    "order": 182,
    "learningObjectives": [
      "Distinguish between accuracy and precision in measurements",
      "Present numerical data in tables and graphs (bar charts, line graphs) correctly"
    ],
    "introduction": "When you measure something, you can be close to the true value (accurate) and get the same result each time (precise). Today we learn these concepts and how to present data clearly.",
    "keyPoints": [
      "Accuracy: how close a measurement is to the true value.",
      "Precision: how close repeated measurements are to each other.",
      "Systematic errors affect accuracy (e.g., uncalibrated balance).",
      "Random errors affect precision (e.g., reading scale at angle).",
      "Data tables: rows and columns with headings including units.",
      "Graphs: independent variable on x‑axis, dependent on y‑axis. Bar charts for categories, line graphs for continuous data."
    ],
    "detailedContent": "Accuracy vs Precision\n\nAccuracy = nearness to the true value.\nPrecision = consistency of repeated measurements.\n\nExamples:\n- A balance that gives 5.00 g, 5.02 g, 4.98 g for a 5.00 g standard → accurate and precise.\n- A balance that gives 4.80 g, 4.82 g, 4.79 g for a 5.00 g standard → precise (consistent) but not accurate (biased low).\n- A balance that gives 4.70 g, 5.20 g, 4.90 g for a 5.00 g standard → neither accurate nor precise (scattered).\n\nSystematic errors: always in the same direction (e.g., uncalibrated thermometer reads 1°C too high). Can be corrected by calibration.\n\nRandom errors: unpredictable fluctuations (e.g., reaction time when starting a stopwatch). Reduced by taking many replicates and averaging.\n\nPresenting Numerical Data\n\n1. Tables:\n   - Column headings with units (e.g., \"Time (s)\", \"Mass (g)\").\n   - Data aligned in columns.\n   - Title describing the table.\n\nExample table:\n| Temperature (°C) | Dissolving time (s) |\n|-----------------|---------------------|\n| 20              | 45                   |\n| 40              | 28                   |\n| 60              | 15                   |\n\n2. Bar charts (for categorical data):\n   - x‑axis: categories (e.g., different fertilisers).\n   - y‑axis: measured value (e.g., yield).\n   - Bars should be equal width, not touching.\n\n3. Line graphs (for continuous data, e.g., temperature over time):\n   - x‑axis: independent variable (time, temperature).\n   - y‑axis: dependent variable (height, rate).\n   - Plot points then join with a smooth line or best‑fit curve.\n\nRules for graphs:\n- Label axes with quantity and units.\n- Choose scales that use most of the graph paper.\n- Give the graph a title.\n\nMalawi Example: A student measures the mass of a bag of maize three times: 49.8 kg, 49.9 kg, 50.0 kg. The true mass is 50.0 kg. The measurements are both accurate (close) and precise (consistent).",
    "summary": "Accuracy = closeness to true value. Precision = reproducibility. Use tables for raw data, bar charts for categories, line graphs for trends. Always label axes and include units.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Weighing Maize",
        "description": "Measure a 50 kg bag three times – compare accuracy and precision."
      },
      {
        "title": "Temperature vs Reaction Rate",
        "description": "Plot a line graph of time against temperature for a chemical reaction."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the difference between accuracy and precision?",
        "answer": "Accuracy is how close to the true value; precision is how close repeated measurements are to each other.",
        "hint": "Think \"target\" analogy."
      },
      {
        "question": "On a line graph, which variable goes on the x‑axis?",
        "answer": "Independent variable",
        "hint": "What you change."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Experimental Techniques",
    "lessonNumber": 1,
    "lessonTitle": "Determining the Purity of Substances",
    "lessonId": "chemistry-f3-experimental-purity-1",
    "order": 300,
    "learningObjectives": [
      "Describe methods for determining the purity of substances (melting point, boiling point, chromatography)",
      "Explain why pure substances have sharp melting and boiling points"
    ],
    "introduction": "How do chemists know if a substance is pure? Today we learn about melting point, boiling point, and chromatography – three ways to test purity.",
    "keyPoints": [
      "Pure substances have sharp, fixed melting and boiling points.",
      "Impurities lower the melting point and broaden the melting range.",
      "Impurities raise the boiling point and cause it to occur over a range.",
      "Chromatography: pure substances produce one spot; mixtures produce multiple spots.",
      "Applications: checking drug purity, food additives, water quality."
    ],
    "detailedContent": "Determining Purity\n\nA pure substance contains only one type of particle (element or compound). Impure substances contain contaminants.\n\nMelting Point Test\n\n- A pure solid melts at a specific, sharp temperature (e.g., pure ice at 0°C).\n- An impure solid melts over a range (e.g., 2°C to 5°C) and at a lower temperature (melting point depression).\n- Example: Pure salt (NaCl) melts at 801°C; if sand is mixed, it melts over a range.\n\nBoiling Point Test\n\n- A pure liquid boils at a fixed temperature.\n- Impurities raise the boiling point (boiling point elevation) and cause it to boil over a range.\n- Example: Pure water boils at 100°C; salt water boils above 100°C and over a range.\n\nChromatography\n\n- A pure compound gives one spot on a chromatogram (one Rf value).\n- A mixture gives multiple spots.\n- Used to check purity of pharmaceuticals, food dyes, and natural products.\n\nIn Malawi: Farmers can test the purity of fertilisers by checking if they dissolve completely (impurities leave residue). Laboratories use melting points to verify chemicals.",
    "summary": "Purity: sharp melting/boiling points, single chromatogram spot. Impurities lower melting point, raise boiling point, create multiple spots.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Fertiliser Purity",
        "description": "Farmers test if NPK fertiliser dissolves completely – residue indicates impurities."
      },
      {
        "title": "Water Boiling Test",
        "description": "Salty water boils above 100°C and over a range."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What happens to the melting point of a solid when it contains impurities?",
        "answer": "It decreases (melting point depression).",
        "hint": "Lower temperature, broader range."
      },
      {
        "question": "How would you test if a liquid is pure water using boiling point?",
        "answer": "Pure water boils exactly at 100°C; impurities cause higher and variable boiling point.",
        "hint": "Fixed temperature."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Experimental Techniques",
    "lessonNumber": 2,
    "lessonTitle": "Simple Tests for Ions and Gases",
    "lessonId": "chemistry-f3-ion-gas-tests-1",
    "order": 301,
    "learningObjectives": [
      "Describe simple chemical tests for common aqueous cations (using NaOH and NH3)",
      "Describe tests for common anions (sulphate, halide, nitrate) and gases"
    ],
    "introduction": "When you find an unknown white powder, how do you know what it is? Chemists use specific tests to identify ions and gases. Today we learn the most common ones.",
    "keyPoints": [
      "Flame tests: Li⁺ (crimson), Na⁺ (yellow), K⁺ (lilac), Ca²⁺ (brick red), Cu²⁺ (blue-green).",
      "Cations with NaOH: Cu²⁺ (blue precipitate), Fe²⁺ (green), Fe³⁺ (brown), Al³⁺ (white, soluble in excess).",
      "Cations with NH3: Cu²⁺ (blue precipitate, soluble in excess forming deep blue solution).",
      "Anions: SO₄²⁻ (BaCl₂ + HCl → white precipitate), Cl⁻ (AgNO₃ + HNO₃ → white precipitate).",
      "Gases: O₂ (relights glowing splint), H₂ (pop sound), CO₂ (limewater milky), NH₃ (turns red litmus blue)."
    ],
    "detailedContent": "Tests for Cations (Positive Ions)\n\nFlame tests (for metals):\n- Lithium (Li⁺): crimson red\n- Sodium (Na⁺): bright yellow\n- Potassium (K⁺): lilac\n- Calcium (Ca²⁺): brick red\n- Copper (Cu²⁺): blue-green (with halide, green)\n\nSodium Hydroxide (NaOH) test:\n- Add NaOH solution to the unknown solution.\n- Copper(II) (Cu²⁺): pale blue precipitate\n- Iron(II) (Fe²⁺): green precipitate\n- Iron(III) (Fe³⁺): reddish-brown precipitate\n- Aluminium (Al³⁺): white precipitate, soluble in excess NaOH\n- Calcium (Ca²⁺): white precipitate (only in concentrated solutions)\n- Ammonium (NH₄⁺): ammonia gas on warming (turns damp red litmus blue)\n\nAqueous Ammonia (NH₃) test:\n- Copper(II) (Cu²⁺): blue precipitate, soluble in excess NH₃ to form deep blue solution\n- Iron(II) and Iron(III): similar precipitates, not soluble in excess\n\nTests for Anions (Negative Ions)\n\n- Sulphate (SO₄²⁻): add dilute HCl (to remove carbonates), then BaCl₂ → white precipitate (BaSO₄).\n- Chloride (Cl⁻): add dilute HNO₃, then AgNO₃ → white precipitate (AgCl).\n- Bromide (Br⁻): cream precipitate (AgBr)\n- Iodide (I⁻): yellow precipitate (AgI)\n- Nitrate (NO₃⁻): add NaOH + aluminium foil → warm → ammonia gas (turns damp red litmus blue).\n\nTests for Gases\n\n| Gas | Test | Positive result |\n|-----|------|-----------------|\n| Oxygen (O₂) | Glowing splint | Relights |\n| Hydrogen (H₂) | Burning splint | 'Pop' sound |\n| Carbon dioxide (CO₂) | Bubble through limewater | Milky/cloudy |\n| Ammonia (NH₃) | Damp red litmus paper | Turns blue |\n| Chlorine (Cl₂) | Damp blue litmus paper | Turns white (bleached) |\n\nMalawi Example: A lab technician tests borehole water for chloride (Cl⁻) using silver nitrate – white precipitate indicates contamination from sewage.",
    "summary": "Flame tests, NaOH/NH₃ tests identify cations. BaCl₂ (sulphate), AgNO₃ (halides) identify anions. Gas tests use splints, limewater, litmus.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Borehole Water Test",
        "description": "Test for chloride using AgNO₃ to detect sewage contamination."
      },
      {
        "title": "Limestone Analysis",
        "description": "Test for carbonate by adding acid and bubbling gas through limewater."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A solution gives a white precipitate with BaCl₂ and dilute HCl. What ion is present?",
        "answer": "Sulphate (SO₄²⁻)",
        "hint": "Barium sulphate precipitate."
      },
      {
        "question": "A gas relights a glowing splint. What is it?",
        "answer": "Oxygen",
        "hint": "Supports combustion."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Nitrogen, Sulphur and Phosphorus",
    "lessonNumber": 1,
    "lessonTitle": "Properties and Uses of Nitrogen and Sulphur",
    "lessonId": "chemistry-f3-nitrogen-sulphur-1",
    "order": 302,
    "learningObjectives": [
      "Describe the properties and uses of nitrogen and sulphur",
      "Explain the importance of the Haber process for making ammonia"
    ],
    "introduction": "Nitrogen makes up most of the air you breathe, but it is unreactive. Sulphur is a yellow solid used in matches and fertilisers. Today we learn about these important elements.",
    "keyPoints": [
      "Nitrogen: colourless, odourless gas; inert at room temperature; used in food packaging (prevents oxidation), coolant (liquid nitrogen), and Haber process.",
      "Haber process: N₂ + 3H₂ ⇌ 2NH₃, high pressure (200 atm), temperature 450°C, iron catalyst. Produces ammonia for fertilisers.",
      "Sulphur: yellow solid; found in volcanic areas; used to make sulphuric acid, matches, gunpowder, and vulcanise rubber.",
      "Sulphur dioxide (SO₂): pungent gas; used as preservative (dried fruit), bleach, and manufacture of sulphuric acid.",
      "Contact process: 2SO₂ + O₂ ⇌ 2SO₃, then SO₃ + H₂O → H₂SO₄."
    ],
    "detailedContent": "Nitrogen\n\n- Position: Group V, Period 2.\n- Atomic number 7, electron configuration 2,5.\n- Natural abundance: 78% of air.\n- Properties: colourless, odourless, tasteless, slightly soluble in water, inert at room temperature due to strong triple bond (N≡N).\n- Reactivity: only at high temperatures with oxygen (lightning) or with hydrogen (Haber process).\n\nUses of Nitrogen:\n- Food packaging (displaces oxygen, prevents spoilage).\n- Liquid nitrogen (cryogenics, freezing biological samples).\n- Manufacture of ammonia (fertilisers).\n- Laser cutting and tyre inflation (racing cars).\n\nHaber Process:\n\nN₂(g) + 3H₂(g) ⇌ 2NH₃(g) ΔH = -92 kJ/mol\n\nConditions:\n- Pressure: 200‑250 atmospheres\n- Temperature: 400‑450°C\n- Catalyst: iron (with potassium oxide and aluminium oxide)\n\nAmmonia is used to make nitrogenous fertilisers (urea, ammonium nitrate), explosives, and cleaning products.\n\nSulphur\n\n- Position: Group VI, Period 3.\n- Allotropes: rhombic (yellow, stable below 96°C) and monoclinic (needle-like).\n- Sources: underground deposits (Frasch process), natural gas, crude oil.\n- Properties: yellow solid, insoluble in water, burns with blue flame producing SO₂.\n\nUses of Sulphur:\n- Manufacture of sulphuric acid (most used chemical in industry).\n- Vulcanisation of rubber (strengthens tyre rubber).\n- Matches, gunpowder, and fireworks.\n- Fungicides and insecticides.\n\nContact Process (for H₂SO₄):\n\n1. Sulphur burned: S + O₂ → SO₂\n2. Oxidation: 2SO₂ + O₂ ⇌ 2SO₃ (V₂O₅ catalyst, 450°C)\n3. Absorption: SO₃ + H₂O → H₂SO₄\n\nMalawi Example: The Haber process is not in Malawi, but imported fertilisers (urea) are used extensively. Sulphuric acid is used to make NPK fertilisers.",
    "summary": "Nitrogen is inert, used in food packaging and Haber process (ammonia). Sulphur is yellow, used for sulphuric acid (contact process) and vulcanising rubber.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Imported Fertilisers",
        "description": "Urea and NPK made from ammonia via Haber process."
      },
      {
        "title": "Sulphuric Acid in Industry",
        "description": "Used to make phosphate fertilisers."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What are the conditions of the Haber process?",
        "answer": "200‑250 atm, 450°C, iron catalyst.",
        "hint": "High pressure, moderate temperature."
      },
      {
        "question": "What is the main use of sulphur in Malawi?",
        "answer": "Manufacture of sulphuric acid for fertilisers.",
        "hint": "Contact process."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Nitrogen, Sulphur and Phosphorus",
    "lessonNumber": 2,
    "lessonTitle": "Phosphorus – Properties, Compounds, and Uses",
    "lessonId": "chemistry-f3-phosphorus-1",
    "order": 303,
    "learningObjectives": [
      "Describe the allotropes and properties of phosphorus",
      "Explain the uses of phosphorus and its compounds (fertilisers, matches, toothpaste)"
    ],
    "introduction": "Phosphorus is essential for life – it is in your DNA and bones. It is also used in matches and fertilisers. Today we learn about this reactive element.",
    "keyPoints": [
      "Allotropes: white phosphorus (waxy, toxic, ignites in air) and red phosphorus (powder, less reactive, non‑toxic).",
      "White P stored under water; glows in dark (chemiluminescence).",
      "Red P used in matches, safety glass, and flame retardants.",
      "Phosphorus compounds: phosphoric acid (H₃PO₄) used in fertilisers (superphosphate), toothpaste, and food additives.",
      "Fertilisers: single superphosphate (SSP), triple superphosphate (TSP), DAP (diammonium phosphate)."
    ],
    "detailedContent": "Phosphorus\n\n- Position: Group V, Period 3.\n- Atomic number 15, electron configuration 2,8,5.\n- Does not occur free in nature due to high reactivity; found as phosphate rock (Ca₃(PO₄)₂).\n\nAllotropes:\n\n1. White phosphorus (P₄):\n   - Waxy, pale yellow solid.\n   - Very reactive: ignites spontaneously in air (must be stored under water).\n   - Toxic and causes severe burns.\n   - Glows in the dark (chemiluminescence).\n   - Used in military (incendiary weapons), but banned for many uses.\n\n2. Red phosphorus:\n   - Formed by heating white P at 250°C without air.\n   - Reddish‑brown powder.\n   - Less reactive, non‑toxic, does not ignite spontaneously.\n   - Used in matchbox striking surfaces, safety glass, flame retardants, and in some fertilisers.\n\nUses of Phosphorus Compounds\n\n- Fertilisers: Phosphate rock treated with acid to produce superphosphates (SSP, TSP). Malawi imports these for crop production.\n- Detergents: Sodium tripolyphosphate (STPP) – but now restricted due to eutrophication.\n- Food industry: Phosphoric acid as acidulant (soft drinks).\n- Toothpaste: Sodium fluoride + phosphate compounds for enamel protection.\n- Matches: Red phosphorus on matchbox striking surface.\n\nFertiliser Production:\n\n- Single superphosphate (SSP): Ca₃(PO₄)₂ + 2H₂SO₄ → Ca(H₂PO₄)₂ + 2CaSO₄. Contains 16‑20% P₂O₅.\n- Triple superphosphate (TSP): Ca₃(PO₄)₂ + 4H₃PO₄ → 3Ca(H₂PO₄)₂. Contains 40‑50% P₂O₅.\n\nMalawi Example: Phosphate rock is mined in some countries (not Malawi), but Malawi imports superphosphate fertilisers for maize and groundnuts.",
    "summary": "White P toxic, ignites in air; red P safe, used in matches, flame retardants. Phosphorus compounds essential for fertilisers, detergents, toothpaste.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Superphosphate Fertiliser",
        "description": "Used by Malawian farmers to supply phosphorus for root development."
      },
      {
        "title": "Matchbox Striking Surface",
        "description": "Contains red phosphorus."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why is white phosphorus stored under water?",
        "answer": "It ignites spontaneously in air.",
        "hint": "Very reactive."
      },
      {
        "question": "Name one phosphate fertiliser used in Malawi.",
        "answer": "Single superphosphate (SSP) or triple superphosphate (TSP).",
        "hint": "Phosphorus source."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Chemical Bonding and Properties",
    "lessonNumber": 1,
    "lessonTitle": "Intermolecular Forces: Hydrogen Bonding and van der Waals Forces",
    "lessonId": "chemistry-f3-intermolecular-forces-1",
    "order": 304,
    "learningObjectives": [
      "Describe hydrogen bonding and van der Waals forces as intermolecular forces",
      "Explain how intermolecular forces affect boiling points, solubility, and viscosity"
    ],
    "introduction": "Why does water boil at 100°C but hydrogen sulfide at –60°C? The answer is hydrogen bonding – an extra strong intermolecular force. Today we learn about forces between molecules.",
    "keyPoints": [
      "Intermolecular forces: attractions between molecules (weaker than covalent/ionic bonds).",
      "Van der Waals (London) forces: temporary dipoles; increase with molecular size and surface area.",
      "Hydrogen bonding: strong attraction between H (bonded to N, O, or F) and lone pair on N, O, or F.",
      "Effects: high boiling points (water vs H₂S), surface tension, capillary action.",
      "Hydrogen bonds in DNA (double helix) and proteins (secondary structure)."
    ],
    "detailedContent": "Types of Intermolecular Forces\n\n1. Van der Waals (London dispersion) forces\n   - Present in all molecules (temporary dipoles due to electron movement).\n   - Strength increases with number of electrons (molecular mass) and molecular surface area (shape).\n   - Example: Iodine (I₂) has stronger van der Waals than chlorine (Cl₂) – iodine is solid, chlorine gas.\n\n2. Dipole‑dipole forces\n   - Between polar molecules (permanent dipoles).\n   - Stronger than van der Waals but weaker than hydrogen bonding.\n   - Example: HCl has dipole‑dipole, boiling point –85°C.\n\n3. Hydrogen bonding\n   - Special type of dipole‑dipole.\n   - Occurs when hydrogen is bonded to a small, highly electronegative atom (N, O, or F) and is attracted to a lone pair on another N, O, or F.\n   - Strongest intermolecular force (but still much weaker than covalent bonds).\n\nEffects of Intermolecular Forces\n\n| Property | Effect of strong intermolecular forces |\n|----------|----------------------------------------|\n| Boiling point | Higher (need more energy to overcome forces) |\n| Melting point | Higher |\n| Surface tension | Higher (e.g., water) |\n| Viscosity | Higher (flow slower) |\n| Solubility | Polar substances dissolve in polar solvents (like dissolves like) |\n\nExamples:\n- Water (H₂O) has hydrogen bonding → b.p. 100°C.\n- Hydrogen sulfide (H₂S) has only van der Waals → b.p. –60°C.\n- Hexane (non‑polar) does not dissolve in water (polar); ethanol (polar) dissolves.\n\nBiological importance: Hydrogen bonds hold the double helix of DNA together and determine protein folding.\n\nMalawi Example: Water is a universal solvent due to hydrogen bonding – it dissolves many nutrients for plants.",
    "summary": "Intermolecular forces: van der Waals (all molecules), dipole‑dipole (polar), hydrogen bonding (H with N/O/F). Stronger forces raise boiling points and affect many physical properties.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Water as Solvent",
        "description": "Hydrogen bonding allows water to dissolve salts and sugars in plant sap."
      },
      {
        "title": "Surface Tension",
        "description": "Water striders walk on water due to hydrogen bonding."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why does water have a much higher boiling point than hydrogen sulfide?",
        "answer": "Water has hydrogen bonding; H₂S only has weaker van der Waals forces.",
        "hint": "Stronger intermolecular forces."
      },
      {
        "question": "What type of intermolecular force exists between non‑polar molecules?",
        "answer": "Van der Waals (London dispersion) forces.",
        "hint": "Temporary dipoles."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Allotropy",
    "lessonNumber": 1,
    "lessonTitle": "Allotropy and Allotropes of Carbon",
    "lessonId": "chemistry-f3-allotropy-1",
    "order": 305,
    "learningObjectives": [
      "Define allotropy and describe the structures of diamond and graphite",
      "Relate the properties of diamond and graphite to their structures and uses"
    ],
    "introduction": "Diamond and graphite are both pure carbon, but one is the hardest mineral, the other is soft and slippery. This is allotropy – the same element in different forms. Today we learn why.",
    "keyPoints": [
      "Allotropy: existence of an element in two or more different forms in the same physical state.",
      "Examples: carbon (diamond, graphite, graphene, fullerenes), oxygen (O₂, O₃), sulphur (rhombic, monoclinic).",
      "Diamond: each carbon bonded tetrahedrally to 4 others – giant covalent, very hard, high melting point, does not conduct electricity.",
      "Graphite: layers of hexagons; each carbon bonded to 3 others; layers held by van der Waals forces – soft, slippery, conducts electricity.",
      "Uses: diamond – cutting tools, jewellery; graphite – pencil leads, lubricant, electrodes."
    ],
    "detailedContent": "What is Allotropy?\n\nAllotropy is the property of some elements to exist in two or more different crystalline forms in the same physical state.\n\nAllotropes of Carbon\n\n1. Diamond\n   - Structure: each carbon atom covalently bonded to four others in a tetrahedral arrangement.\n   - Giant covalent network (3‑D).\n   - Extremely hard (hardest natural material).\n   - High melting point (~3550°C).\n   - Does not conduct electricity (no free electrons).\n   - Transparent (when pure) and brilliant when cut.\n   - Uses: cutting tools (drills, saws), polishing, jewellery.\n\n2. Graphite\n   - Structure: carbon atoms arranged in hexagonal layers; each carbon bonded to three others (sp² hybridised).\n   - Layers held by weak van der Waals forces (slide easily).\n   - One free electron per carbon (delocalised) – conducts electricity.\n   - Soft and slippery.\n   - Opaque, black.\n   - Uses: pencil \"lead\", lubricant (dry lubricant), electrodes, carbon brushes in motors, refractory material.\n\n3. Graphene (single layer of graphite)\n   - One atom thick, strongest material known, excellent conductor.\n   - Emerging uses: electronics, composites, sensors.\n\n4. Fullerenes (buckyballs, nanotubes)\n   - Spherical or cylindrical cages of carbon atoms.\n   - Uses: drug delivery, lubricants, superconductors.\n\nExamples of Other Allotropes\n\n- Oxygen: O₂ (dioxygen, necessary for respiration) and O₃ (ozone, UV protection, pollutant at ground level).\n- Sulphur: rhombic (octahedral) and monoclinic (needle‑like).\n\nMalawi Example: Graphite is not mined in Malawi, but pencils are used daily. Diamonds are imported for jewellery.",
    "summary": "Allotropy: same element, different forms. Diamond (3‑D network, hard, insulator). Graphite (layered, soft, conductor). Properties determine uses.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Pencil \"Lead\"",
        "description": "Graphite used in pencils – layers slide off onto paper."
      },
      {
        "title": "Diamond Cutting Tools",
        "description": "Used to cut hard materials like glass and rock."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why does graphite conduct electricity but diamond does not?",
        "answer": "Graphite has delocalised electrons between layers; diamond has all electrons in covalent bonds.",
        "hint": "Free electrons."
      },
      {
        "question": "What type of forces hold graphite layers together?",
        "answer": "Van der Waals forces.",
        "hint": "Weak intermolecular forces."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Alloys",
    "lessonNumber": 1,
    "lessonTitle": "Alloys – Composition, Properties, and Uses",
    "lessonId": "chemistry-f3-alloys-1",
    "order": 306,
    "learningObjectives": [
      "Define an alloy and explain why alloys are produced",
      "Describe the composition and uses of common alloys (steel, brass, bronze, solder)"
    ],
    "introduction": "Pure metals are often too soft or rust too easily. By mixing metals, we create alloys with better properties. Today we learn about common alloys and why they are important.",
    "keyPoints": [
      "Alloy: mixture of two or more elements, at least one is a metal, to improve properties.",
      "Reasons for making alloys: increase hardness, resistance to corrosion, improve appearance, lower cost.",
      "Steel: iron + carbon (0.1‑2%) + other metals – hard, strong, used in construction, vehicles.",
      "Stainless steel: iron + chromium + nickel – rust resistant, used in cutlery, sinks.",
      "Brass: copper + zinc – hard, corrosion resistant, used in musical instruments, valves.",
      "Bronze: copper + tin – hard, used in statues, bearings, medals.",
      "Solder: lead + tin – low melting point, used for joining electrical components."
    ],
    "detailedContent": "What is an Alloy?\n\nAn alloy is a mixture of a metal with one or more other elements (metals or non‑metals). The properties of alloys are different from the pure metals.\n\nWhy make alloys?\n- Increase strength and hardness.\n- Improve resistance to corrosion (rusting).\n- Change colour or appearance.\n- Lower melting point for casting.\n- Reduce cost.\n\nCommon Alloys and Their Uses\n\n| Alloy | Composition | Properties | Uses |\n|-------|-------------|------------|------|\n| Carbon steel | Iron + 0.1‑2% carbon | Hard, strong | Construction, tools, car bodies |\n| Stainless steel | Iron + chromium (10‑20%) + nickel | Corrosion resistant, shiny | Cutlery, sinks, medical instruments |\n| Brass | Copper + zinc (5‑40%) | Hard, corrosion resistant, gold‑like | Musical instruments, door handles, valves |\n| Bronze | Copper + tin (5‑20%) | Hard, low friction | Statues, bearings, medals, ship propellers |\n| Solder | Lead + tin (40‑60%) | Low melting point | Joining electrical wires, plumbing |\n| Duralumin | Aluminium + copper + magnesium + manganese | Strong, lightweight | Aircraft bodies, bicycle frames |\n\nHow alloys improve properties:\n- Distorted metal lattice prevents layers from sliding → harder and stronger.\n- Example: Pure iron is soft; adding carbon makes steel much harder.\n\nMalawi Example: Construction of bridges and buildings uses steel. Household cutlery often made of stainless steel.",
    "summary": "Alloys are mixtures of metals (with other elements) designed to improve hardness, corrosion resistance, or other properties. Steel, brass, bronze, solder are common examples.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Stainless Steel Cutlery",
        "description": "Resists rust even in humid conditions."
      },
      {
        "title": "Brass Door Handles",
        "description": "Durable and attractive, used in many buildings."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the main alloying element in carbon steel?",
        "answer": "Carbon",
        "hint": "0.1‑2% carbon."
      },
      {
        "question": "Why is stainless steel used for kitchen sinks?",
        "answer": "It is corrosion resistant and easy to clean.",
        "hint": "Does not rust."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Heats of Reaction",
    "lessonNumber": 1,
    "lessonTitle": "Exothermic and Endothermic Reactions",
    "lessonId": "chemistry-f3-heats-reaction-1",
    "order": 307,
    "learningObjectives": [
      "Define exothermic and endothermic reactions with examples",
      "Draw and interpret energy level diagrams (enthalpy diagrams)"
    ],
    "introduction": "Some reactions give out heat – they feel hot. Others absorb heat – they feel cold. Today we learn about exothermic and endothermic reactions and how to represent them with energy diagrams.",
    "keyPoints": [
      "Exothermic: releases heat energy to surroundings. ΔH is negative. Products have lower energy than reactants.",
      "Examples: combustion, respiration, neutralisation, condensing, freezing.",
      "Endothermic: absorbs heat energy from surroundings. ΔH is positive. Products have higher energy than reactants.",
      "Examples: photosynthesis, melting, boiling, thermal decomposition.",
      "Energy level diagram: y‑axis = enthalpy, x‑axis = reaction progress. Exothermic: reactants above products; endothermic: reactants below products."
    ],
    "detailedContent": "Exothermic Reactions\n\nEnergy is released to the surroundings, usually as heat. The temperature increases.\n\nEnthalpy change (ΔH) is negative (ΔH < 0).\n\nExamples:\n- Combustion of fuel: CH₄ + 2O₂ → CO₂ + 2H₂O + heat\n- Respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + heat\n- Neutralisation: HCl + NaOH → NaCl + H₂O + heat\n- Hand warmers (oxidation of iron)\n\nEnergy level diagram for exothermic:\n- Reactants at higher energy level.\n- Products at lower energy level.\n- Difference = energy released (ΔH).\n\nEndothermic Reactions\n\nEnergy is absorbed from the surroundings. The temperature decreases.\n\nΔH is positive (ΔH > 0).\n\nExamples:\n- Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\n- Thermal decomposition: CaCO₃ + heat → CaO + CO₂\n- Melting ice: H₂O(s) + heat → H₂O(l)\n- Boiling water: H₂O(l) + heat → H₂O(g)\n\nEnergy level diagram for endothermic:\n- Reactants at lower energy level.\n- Products at higher energy level.\n- Difference = energy absorbed (ΔH).\n\nActivation Energy (Ea)\n\n- The minimum energy required for a reaction to occur.\n- Shown as the \"hump\" on the diagram between reactants and products.\n- Catalysts lower activation energy (makes reaction faster).\n\nMalawi Example: Burning charcoal (exothermic) for cooking. Dissolving ammonium nitrate in a cold pack (endothermic) used for sports injuries.",
    "summary": "Exothermic: releases heat, ΔH negative, products lower energy. Endothermic: absorbs heat, ΔH positive, products higher energy. Energy diagrams show ΔH and activation energy.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Charcoal Combustion",
        "description": "Exothermic – heats nsima."
      },
      {
        "title": "Cold Pack for Injuries",
        "description": "Endothermic – ammonium nitrate in water absorbs heat."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Is photosynthesis exothermic or endothermic?",
        "answer": "Endothermic",
        "hint": "Absorbs light energy."
      },
      {
        "question": "On an energy diagram, where are products in an exothermic reaction?",
        "answer": "Lower than reactants",
        "hint": "Energy released."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Heats of Reaction",
    "lessonNumber": 2,
    "lessonTitle": "Bond Energies and Enthalpy Change Calculations",
    "lessonId": "chemistry-f3-bond-energies-1",
    "order": 308,
    "learningObjectives": [
      "Use bond energies to calculate the overall enthalpy change (ΔH) of a reaction",
      "Predict whether a reaction is exothermic or endothermic from bond energy data"
    ],
    "introduction": "Chemical reactions involve breaking bonds (requires energy) and making bonds (releases energy). By comparing total bond energies, we can calculate the heat change. Today we learn how.",
    "keyPoints": [
      "Bond breaking is endothermic (energy absorbed).",
      "Bond making is exothermic (energy released).",
      "ΔH = total energy absorbed to break bonds – total energy released to form bonds.",
      "If ΔH negative → exothermic; if ΔH positive → endothermic.",
      "Bond energy (kJ/mol) is the energy needed to break 1 mole of bonds in the gas phase."
    ],
    "detailedContent": "Bond Energies\n\nBond energy (or bond enthalpy) is the energy required to break one mole of a specific covalent bond in the gas phase, averaged over many compounds.\n\nExamples (kJ/mol):\n- H–H: 436\n- Cl–Cl: 242\n- H–Cl: 431\n- C–H: 412\n- O=O: 498\n- C=O (in CO₂): 805\n- O–H: 463\n\nCalculation of Enthalpy Change (ΔH)\n\nΔH = Σ(bond energies broken) – Σ(bond energies formed)\n\nIf ΔH negative, reaction exothermic; if positive, endothermic.\n\nExample: Hydrogen and chlorine reaction\nH₂ + Cl₂ → 2HCl\n\nBonds broken:\n- 1 H–H: 436 kJ\n- 1 Cl–Cl: 242 kJ\nTotal broken = 436 + 242 = 678 kJ\n\nBonds formed:\n- 2 H–Cl: 2 × 431 = 862 kJ\n\nΔH = 678 – 862 = –184 kJ/mol (exothermic)\n\nExample: Combustion of methane (simplified)\nCH₄ + 2O₂ → CO₂ + 2H₂O\n\nBonds broken:\n- 4 C–H: 4 × 412 = 1648\n- 2 O=O: 2 × 498 = 996\nTotal = 2644 kJ\n\nBonds formed:\n- 2 C=O: 2 × 805 = 1610\n- 4 O–H: 4 × 463 = 1852\nTotal formed = 3462 kJ\n\nΔH = 2644 – 3462 = –818 kJ/mol (exothermic, matches known value ~ –890 kJ/mol, approximation)\n\nLimitations: Bond energies are averages, not exact for every compound.\n\nMalawi Example: Understanding bond energy helps explain why burning maize stalks (combustion) releases heat – more energy released making C=O and O–H than absorbed breaking C–H and O=O.",
    "summary": "ΔH = Σ(bonds broken) – Σ(bonds formed). Negative ΔH = exothermic (energy released). Positive ΔH = endothermic (energy absorbed). Use bond energy tables.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Burning Maize Stalks",
        "description": "Exothermic – breaks C–H, O=O; forms C=O, O–H and releases heat for cooking."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Calculate ΔH for 2H₂ + O₂ → 2H₂O. Bond energies: H–H=436, O=O=498, O–H=463.",
        "answer": "–482 kJ (or –484? Let me compute: bonds broken: 2×436=872, 1×498=498, total 1370; bonds formed: 4×463=1852; ΔH=1370–1852= –482 kJ",
        "hint": "Watch stoichiometry."
      },
      {
        "question": "Is a reaction with ΔH = +50 kJ exothermic or endothermic?",
        "answer": "Endothermic",
        "hint": "Positive ΔH means energy absorbed."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Alkanals and Alkanones",
    "lessonNumber": 1,
    "lessonTitle": "Aldehydes and Ketones – Structure, Naming, and Tests",
    "lessonId": "chemistry-f3-alkanals-alkanones-1",
    "order": 309,
    "learningObjectives": [
      "Identify the functional group of aldehydes (–CHO) and ketones (C=O)",
      "Name and draw simple aldehydes and ketones (up to 5 carbons)",
      "Distinguish between aldehydes and ketones using Fehling’s or Tollen’s test"
    ],
    "introduction": "Aldehydes and ketones both contain the carbonyl group (C=O), but they behave differently. Today we learn their structures, naming, and how to tell them apart.",
    "keyPoints": [
      "Aldehydes: –CHO group at end of chain; suffix –al. Example: methanal (HCHO), ethanal (CH₃CHO).",
      "Ketones: C=O in middle; suffix –one. Example: propanone (CH₃COCH₃).",
      "Naming: identify longest chain with C=O, number to give C=O lowest number.",
      "Physical properties: polar; smaller ones soluble in water; boiling points higher than alkanes but lower than alcohols.",
      "Aldehydes are easily oxidised (strong reducing agents); ketones are not.",
      "Tests: Fehling’s solution (blue → brick red precipitate) or Tollen’s reagent (silver mirror) with aldehydes; ketones negative."
    ],
    "detailedContent": "Functional Group\n\nBoth aldehydes and ketones contain the carbonyl group (C=O).\n\n- Aldehyde: carbonyl carbon bonded to at least one hydrogen atom. Group is –CHO.\n- Ketone: carbonyl carbon bonded to two carbon atoms (no H).\n\nNomenclature\n\nAldehydes: replace –e of alkane with –al.\n- HCHO methanal (formaldehyde)\n- CH₃CHO ethanal (acetaldehyde)\n- CH₃CH₂CHO propanal\n- CH₃CH₂CH₂CHO butanal\n\nKetones: replace –e with –one, number the carbonyl position if necessary.\n- CH₃COCH₃ propanone (acetone)\n- CH₃CH₂COCH₃ butan‑2‑one\n\nPhysical Properties\n\n- Polar due to C=O.\n- Smaller members (up to 4C) are soluble in water (hydrogen bonding with water).\n- Boiling points higher than alkanes but lower than alcohols (no O–H hydrogen bonding).\n\nChemical Properties\n\n1. Oxidation:\n   - Aldehydes oxidise easily to carboxylic acids (strong reducing agents).\n   - Ketones do not oxidise under mild conditions.\n\n2. Tests to distinguish aldehydes and ketones:\n\n| Test | Aldehyde | Ketone |\n|------|----------|--------|\n| Fehling’s solution (blue) | Brick red precipitate (Cu₂O) | No reaction (remains blue) |\n| Tollen’s reagent ([Ag(NH₃)₂]⁺) | Silver mirror (Ag metal) | No reaction |\n\nFehling’s test procedure:\n- Prepare Fehling’s A (CuSO₄) and Fehling’s B (alkaline tartrate).\n- Mix equal volumes, add organic compound, warm.\n- Aldehyde gives a red precipitate.\n\nTollen’s test:\n- Tollen’s reagent = silver nitrate + ammonia (freshly prepared).\n- Aldehyde deposits silver metal on inside of test tube (silver mirror).\n\nUses:\n- Methanal (formalin): preserving biological specimens.\n- Propanone (acetone): nail polish remover, solvent.\n\nMalawi Example: In a school lab, students use Fehling’s test to distinguish between glucose (aldehyde; reducing sugar) and fructose (ketone? Actually fructose gives positive because it can isomerise under basic conditions – but for pure aldehydes vs ketones, test works).",
    "summary": "Aldehydes (–CHO) oxidise, give positive Fehling’s/Tollen’s; ketones (C=O in chain) do not. Naming: –al, –one. Uses: methanal (preservative), propanone (solvent).",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Formalin in Labs",
        "description": "Methanal used to preserve animal specimens for dissection."
      },
      {
        "title": "Acetone in Nail Polish",
        "description": "Propanone is a common solvent."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Draw and name the aldehyde with 3 carbon atoms.",
        "answer": "CH₃CH₂CHO (propanal)",
        "hint": "Prop‑ with –al."
      },
      {
        "question": "What result would ethanal give with Tollen’s reagent?",
        "answer": "Silver mirror (positive test).",
        "hint": "Aldehyde oxidised."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 3",
    "topic": "Alkanoic Acids",
    "lessonNumber": 1,
    "lessonTitle": "Carboxylic Acids – Structure, Properties, and Reactions",
    "lessonId": "chemistry-f3-alkanoic-acids-1",
    "order": 310,
    "learningObjectives": [
      "Identify the functional group of carboxylic acids (–COOH)",
      "Describe the physical and chemical properties of alkanoic acids"
    ],
    "introduction": "Vinegar contains ethanoic acid. Ant bites contain methanoic acid. These are CARBOXYLIC ACIDS. Today we learn their structure, why they are acidic, and their reactions.",
    "keyPoints": [
      "Functional group: –COOH (carboxyl group).",
      "Naming: replace –e of alkane with –oic acid. Example: methanoic (HCOOH), ethanoic (CH₃COOH).",
      "Physical properties: polar, hydrogen bonding → high boiling points; smaller ones miscible with water.",
      "Weak acids: partially dissociate in water (pH about 2‑3 for 0.1M).",
      "Reactions: with metals (H₂ evolution), bases (salt + water), carbonates (CO₂ effervescence), alcohols (esterification)."
    ],
    "detailedContent": "Structure of Carboxylic Acids\n\nGeneral formula: CₙH₂ₙ₊₁COOH (or CₙH₂ₙO₂).\n\nFunctional group –COOH (carbonyl + hydroxyl).\n\nExamples:\n- Methanoic acid (formic acid): HCOOH (found in ant stings).\n- Ethanoic acid (acetic acid): CH₃COOH (vinegar, 5‑8%).\n- Propanoic acid: CH₃CH₂COOH.\n- Butanoic acid: CH₃CH₂CH₂COOH (rancid butter).\n\nPhysical Properties\n\n- Polar molecules; form dimers (two molecules hydrogen‑bonded).\n- Boiling points higher than alcohols of similar mass (strong hydrogen bonding).\n- Solubility: small acids (up to 4C) soluble in water; solubility decreases as chain lengthens.\n- Odour: pungent; butanoic acid smells like sweat/rancid butter.\n\nChemical Properties (Acidic Behaviour)\n\nCarboxylic acids are weak acids. They partially dissociate:\n\nCH₃COOH ⇌ CH₃COO⁻ + H⁺\n\npH of 0.1M ethanoic acid ≈ 2.9.\n\nReactions:\n\n1. With metals (above hydrogen):\n   2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂\n\n2. With bases (neutralisation):\n   CH₃COOH + NaOH → CH₃COONa + H₂O\n\n3. With carbonates:\n   2CH₃COOH + Na₂CO₃ → 2CH₃COONa + CO₂ + H₂O (effervescence)\n\n4. With alcohols (esterification, needs concentrated H₂SO₄):\n   CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (ethyl ethanoate, fruity smell)\n\n5. With alkalis: soap formation (saponification of fatty acids).\n\nUses:\n- Ethanoic acid: vinegar (food), production of plastics (polyvinyl acetate), solvents.\n- Higher acids: soaps, cosmetics, pharmaceuticals.\n\nMalawi Example: Vinegar (dilute ethanoic acid) is used in cooking and pickling. It also dissolves scale (calcium carbonate) in kettles.",
    "summary": "Carboxylic acids (–COOH) are weak acids. They react with metals, bases, carbonates, and alcohols (esterification). Lower members are soluble, volatile, with pungent odour.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Vinegar for Pickling",
        "description": "Ethanoic acid preserves vegetables and adds sour taste."
      },
      {
        "title": "Ant Sting Treatment",
        "description": "Formic acid from ants neutralised with baking soda."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What gas is produced when ethanoic acid reacts with sodium carbonate?",
        "answer": "Carbon dioxide (CO₂)",
        "hint": "Effervescence."
      },
      {
        "question": "Draw the structure of propanoic acid.",
        "answer": "CH₃CH₂COOH",
        "hint": "3‑carbon chain with –COOH."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 2",
    "topic": "Light",
    "lessonNumber": 1,
    "lessonTitle": "Reflection of Light on Plane Surfaces",
    "lessonId": "physics-f2-light-reflection-1",
    "order": 324,
    "learningObjectives": [
      "State the laws of reflection",
      "Describe the characteristics of images formed by a plane mirror"
    ],
    "introduction": "When you look into a mirror, you see yourself. That is reflection – light bouncing off a smooth surface. Today we learn the laws that govern reflection and how images are formed in plane mirrors.",
    "keyPoints": [
      "First law of reflection: angle of incidence (i) = angle of reflection (r).",
      "Second law: incident ray, reflected ray, and normal all lie in the same plane.",
      "In a plane mirror, image is virtual (cannot be projected), upright, same size, and as far behind the mirror as the object is in front.",
      "Lateral inversion: left side of object appears as right side in image.",
      "Uses: periscopes, dressing mirrors, rear‑view mirrors (convex), solar cookers (concave)."
    ],
    "detailedContent": "Laws of Reflection\n\n1. The angle of incidence equals the angle of reflection: i = r\n2. The incident ray, the reflected ray, and the normal (line perpendicular to the surface at the point of incidence) are all in the same plane.\n\nRay Diagram for a Plane Mirror\n\nDraw a line representing the mirror. Draw an object (e.g., an arrow) in front. To find the image:\n- Draw two rays from the top of the object to the mirror.\n- Use the law of reflection to draw reflected rays.\n- Extend the reflected rays behind the mirror. They meet at a point.\n- That point is the image.\n\nImage Characteristics for Plane Mirror\n\n- Type: Virtual (cannot be captured on a screen)\n- Orientation: Upright (same orientation)\n- Size: Same as object\n- Distance: Image distance = object distance\n- Left-right reversal: Lateral inversion – left side of object appears as right side in image\n\nUses of Plane Mirrors:\n- Dressing mirrors\n- Periscopes (used in submarines to see above the water)\n- Optical instruments (some)\n- In solar cookers, curved mirrors are used, but plane mirrors also reflect sunlight.\n\nMalawi Example:\n- A traditional barbershop uses a plane mirror for customers.\n- A simple periscope can be made from two plane mirrors and a cardboard tube to see over a wall.",
    "summary": "Reflection follows the laws: i = r, and the rays and normal are coplanar. Plane mirrors produce virtual, upright, same-size images with lateral inversion.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Periscope Project",
        "description": "Build a periscope using two plane mirrors to see over obstacles."
      },
      {
        "title": "Solar Cooker Reflection",
        "description": "Use mirrors to concentrate sunlight for cooking."
      }
    ],
    "practiceQuestions": [
      {
        "question": "If a light ray strikes a mirror at an angle of 30° to the normal, what is the angle of reflection?",
        "answer": "30°",
        "hint": "Angle of incidence equals angle of reflection."
      },
      {
        "question": "Is the image in a plane mirror real or virtual?",
        "answer": "Virtual",
        "hint": "You cannot project it onto a screen."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 2",
    "topic": "Light",
    "lessonNumber": 2,
    "lessonTitle": "Refraction of Light",
    "lessonId": "physics-f2-light-refraction-1",
    "order": 325,
    "learningObjectives": [
      "Define refraction as the bending of light when it passes from one medium to another",
      "Explain the concept of refractive index and apply Snell’s law (n = sin i / sin r)"
    ],
    "introduction": "Why does a straw in a glass of water appear bent? Why do fish look closer to the surface than they are? The answer is REFRACTION – the bending of light. Today we learn this important phenomenon.",
    "keyPoints": [
      "Refraction: change in direction of light when it passes obliquely from one transparent medium to another (due to change in speed).",
      "Light bends towards the normal when entering a denser medium (e.g., air → water).",
      "Light bends away from the normal when entering a less dense medium (e.g., water → air).",
      "Refractive index (n) = speed of light in vacuum / speed of light in medium.",
      "Snell’s law: n₁ sin θ₁ = n₂ sin θ₂, or for two media: n = sin i / sin r (where i is angle of incidence in air)."
    ],
    "detailedContent": "What is Refraction?\n\nRefraction is the bending of light as it passes from one transparent medium to another. It occurs because light changes speed in different media.\n\nLight slows down in denser media (e.g., water, glass). Bending direction:\n- From less dense to more dense (e.g., air → glass): bends towards the normal.\n- From more dense to less dense (e.g., water → air): bends away from the normal.\n\nRefractive Index\n\nAbsolute refractive index (n) of a medium: n = c / v\n- c = speed of light in vacuum (3 × 10⁸ m/s)\n- v = speed of light in the medium\n\nExample: Water n ≈ 1.33, glass n ≈ 1.5 (light travels slower in glass than water).\n\nSnell’s Law\n\nWhen light passes from medium 1 to medium 2:\nn₁ sin θ₁ = n₂ sin θ₂\n\nIf medium 1 is air (n ≈ 1), then:\nn = sin i / sin r, where i = angle of incidence, r = angle of refraction.\n\nExample: A ray in air strikes water (n=1.33) at angle 30°. Find angle of refraction.\n1 × sin 30° = 1.33 × sin r\n0.5 = 1.33 sin r\nsin r = 0.5 / 1.33 = 0.376\nr = sin⁻¹(0.376) ≈ 22° (bends towards normal).\n\nReal‑life Applications\n\n- Lenses (converging and diverging) use refraction.\n- Prism splits white light into colours (dispersion).\n- Mirage: refraction of light in hot air near ground (density gradient).\n- Apparent depth: a swimming pool looks shallower than it is.\n\nTotal Internal Reflection (TIR)\n\nWhen light travels from denser to less dense medium at an angle greater than the critical angle, it reflects totally back into the denser medium. Used in optical fibres and endoscopes.\n\nMalawi Example: When spearing fish, you must aim below where you see the fish because refraction makes it appear shallower. A pool of water looks shallower than it really is – a swimming hazard.",
    "summary": "Refraction = bending of light at medium boundary due to speed change. Snell’s law: n = sin i / sin r. Light bends towards normal in denser medium; away in less dense.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Fish Spearing",
        "description": "Aim below the apparent position of a fish due to refraction."
      },
      {
        "title": "Shallow Pool Illusion",
        "description": "Water looks shallower than it is – care required."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A light ray in air hits water at 40° to the normal. If refractive index of water is 1.33, find angle of refraction.",
        "answer": "sin r = sin40/1.33 = 0.643/1.33 = 0.483, r ≈ 28.9°",
        "hint": "Snell’s law: n = sin i / sin r, so sin r = sin i / n"
      },
      {
        "question": "Does light bend towards or away from the normal when entering glass from air?",
        "answer": "Towards the normal (glass is denser).",
        "hint": "Slower speed in glass."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Oxides",
    "lessonNumber": 1,
    "lessonTitle": "Classification of Oxides – Acidic, Basic, Amphoteric",
    "lessonId": "chemistry-f4-oxides-1",
    "order": 313,
    "learningObjectives": [
      "Classify oxides into acidic, basic, amphoteric, and neutral",
      "Describe the reactions of oxides with acids, bases, and water"
    ],
    "introduction": "Metal oxides can react with acids; non-metal oxides react with bases. Some oxides can do both – they are AMPHOTERIC. Today we learn the four classes of oxides and their reactions.",
    "keyPoints": [
      "Acidic oxides: non-metal oxides (e.g., CO₂, SO₂, SO₃, P₄O₁₀). React with bases to form salts, dissolve in water to form acids.",
      "Basic oxides: metal oxides (e.g., Na₂O, MgO, CaO, CuO). React with acids to form salts, dissolve in water to form alkalis (soluble ones).",
      "Amphoteric oxides: react with both acids and bases (e.g., Al₂O₃, ZnO, PbO).",
      "Neutral oxides: no reaction with acids or bases (e.g., CO, NO, H₂O).",
      "Examples: CO₂ + 2NaOH → Na₂CO₃ + H₂O; CaO + 2HCl → CaCl₂ + H₂O; Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O; Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄]."
    ],
    "detailedContent": "Classification of Oxides\n\nOxides are binary compounds containing oxygen and another element.\n\n1. Acidic oxides (acid anhydrides)\n   - Formed by non-metals.\n   - React with bases to give salt and water.\n   - Dissolve in water to produce acids.\n   - Examples: CO₂ (carbonic acid), SO₂ (sulphurous acid), SO₃ (sulphuric acid), P₄O₁₀ (phosphoric acid).\n\n   Reaction: CO₂(g) + Ca(OH)₂(aq) → CaCO₃(s) + H₂O(l)\n\n2. Basic oxides\n   - Formed by metals (especially Group I and II).\n   - React with acids to give salt and water.\n   - Soluble basic oxides (Na₂O, K₂O, CaO) dissolve in water to form alkalis.\n   - Examples: Na₂O, MgO, CaO, CuO, Fe₂O₃.\n\n   Reaction: CaO(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l)\n\n3. Amphoteric oxides\n   - React with both acids and bases.\n   - Examples: Al₂O₃, ZnO, PbO, SnO.\n   - With acid: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O\n   - With base: Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄] (sodium aluminate)\n\n4. Neutral oxides\n   - No reaction with acids or bases.\n   - Examples: CO, NO, N₂O, H₂O (water is neutral).\n\nIdentifying an Oxide Experimentally\n\n- Add a little to water, test pH:\n  - Acidic oxide gives pH < 7.\n  - Basic oxide (soluble) gives pH > 7.\n  - Insoluble? Test with acid and base separately.\n\nMalawi Example: Rust (Fe₂O₃) is a basic oxide – it reacts with acids. Farmers use lime (CaO, basic) to neutralise acidic soils.",
    "summary": "Acidic oxides (non-metals) react with bases; basic oxides (metals) react with acids; amphoteric oxides react with both; neutral oxides react with neither.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Lime in Soil",
        "description": "Calcium oxide (basic) neutralises acidic soils."
      },
      {
        "title": "Aluminium Utensils",
        "description": "Aluminium oxide layer is amphoteric – resists both acid and alkaline foods but can react with strong acids or bases."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What type of oxide is CO₂?",
        "answer": "Acidic oxide",
        "hint": "Non-metal oxide, forms carbonic acid with water."
      },
      {
        "question": "Write the reaction of zinc oxide (ZnO) with sodium hydroxide.",
        "answer": "ZnO + 2NaOH + H₂O → Na₂[Zn(OH)₄] (sodium zincate)",
        "hint": "Amphoteric."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Electrolysis",
    "lessonNumber": 1,
    "lessonTitle": "Products of Electrolysis for Molten and Aqueous Electrolytes",
    "lessonId": "chemistry-f4-electrolysis-products-1",
    "order": 314,
    "learningObjectives": [
      "Define electrolysis and predict products for molten and aqueous electrolytes",
      "Explain preferential discharge using the reactivity series"
    ],
    "introduction": "Electrolysis uses electricity to break down compounds. It is used to extract metals, purify copper and electroplate objects. Today we learn how it works and what products form.",
    "keyPoints": [
      "Electrolysis: decomposition of an electrolyte by electric current.",
      "Components: cathode (‑), anode (+), electrolyte (ionic compound molten or dissolved).",
      "Molten electrolyte: cations reduced at cathode (metal); anions oxidised at anode (non‑metal).",
      "Aqueous electrolyte: water also present; uses reactivity series to predict discharge.",
      "Rules for aqueous solutions: at cathode – less reactive metal or H⁺; at anode – halide (Cl⁻, Br⁻, I⁻) or OH⁻."
    ],
    "detailedContent": "What is Electrolysis?\n\nElectrolysis is the decomposition of an electrolyte (a substance that conducts electricity when molten or in solution) by passing a direct electric current.\n\nSetup: two electrodes (cathode negative, anode positive) connected to a power supply, immersed in the electrolyte.\n\nMolten Electrolytes (e.g., molten NaCl)\n\nIons free to move:\n- Cations (Na⁺) move to cathode: Na⁺ + e⁻ → Na (reduction)\n- Anions (Cl⁻) move to anode: 2Cl⁻ → Cl₂ + 2e⁻ (oxidation)\n\nProducts: sodium metal at cathode, chlorine gas at anode.\n\nAqueous Electrolytes\n\nWater also provides H⁺, OH⁻. Which ions discharge depends on reactivity series and concentration.\n\nRules:\n- At cathode: the less reactive metal (or H⁺) discharges. If metal is more reactive than hydrogen, H⁺ discharges to form H₂ gas.\n- At anode: if halide ions (Cl⁻, Br⁻, I⁻) are present, they discharge. Otherwise, OH⁻ discharges to form O₂ gas.\n\nExample: Electrolysis of aqueous NaCl\n- Cathode: H⁺ from water discharges (Na is very reactive) → H₂ gas.\n- Anode: Cl⁻ discharges → Cl₂ gas.\n\nExample: Electrolysis of copper(II) sulphate solution with inert electrodes (graphite)\n- Cathode: Cu²⁺ discharges (Cu less reactive than H) → Cu metal.\n- Anode: OH⁻ discharges (no halides) → O₂ gas.\n\nPreferential Discharge Series (at anode):\nI⁻ > Br⁻ > Cl⁻ > OH⁻ > SO₄²⁻, NO₃⁻\n\nPreferential Discharge Series (at cathode):\nAg⁺ > Cu²⁺ > H⁺ > Na⁺ > Ca²⁺ > K⁺\n\nMalawi Example: A school lab demonstration of electrolysis of water (using dilute H₂SO₄) produces hydrogen at cathode and oxygen at anode.",
    "summary": "Electrolysis decomposes electrolytes. In molten salts, metal and non‑metal produced. In aqueous solutions, product depends on reactivity series and concentration of ions.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Water Electrolysis",
        "description": "Produces hydrogen and oxygen – can be used to demonstrate splitting water."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What gas is produced at the anode during electrolysis of molten NaCl?",
        "answer": "Chlorine (Cl₂)",
        "hint": "Cl⁻ ions oxidised."
      },
      {
        "question": "In electrolysis of aqueous copper(II) sulphate with graphite electrodes, what is produced at the cathode?",
        "answer": "Copper metal",
        "hint": "Cu²⁺ discharges."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 4",
    "topic": "Electrolysis",
    "lessonNumber": 2,
    "lessonTitle": "Purification of Copper and Electroplating",
    "lessonId": "chemistry-f4-electrolysis-applications-1",
    "order": 315,
    "learningObjectives": [
      "Explain the purification of copper by electrolysis",
      "Describe electroplating and its uses"
    ],
    "introduction": "How do we get pure copper from impure copper? How do we put a thin layer of silver or chrome onto a metal object? Today we learn two important applications of electrolysis.",
    "keyPoints": [
      "Purification of copper: impure copper as anode, pure copper as cathode, copper(II) sulphate electrolyte. Impurities fall off as anode sludge.",
      "Electroplating: depositing a thin layer of metal (e.g., silver, chromium, nickel) onto another object for decoration or corrosion protection.",
      "Setup for electroplating: object to be plated as cathode, metal to be deposited as anode, electrolyte containing ions of the plating metal.",
      "Uses: chrome plating (car bumpers, taps), silver plating (cutlery), gold plating (jewellery), zinc plating (galvanisation)."
    ],
    "detailedContent": "Purification of Copper\n\nCopper obtained from ores is about 99% pure, but electrical wiring needs 99.99% purity.\n\nElectrolysis setup:\n- Anode: impure copper (dissolves)\n- Cathode: thin sheet of pure copper (copper deposits)\n- Electrolyte: copper(II) sulphate solution (CuSO₄)\n\nReactions:\n- At anode: Cu(s) → Cu²⁺(aq) + 2e⁻ (copper dissolves)\n- At cathode: Cu²⁺(aq) + 2e⁻ → Cu(s) (pure copper deposits)\n- Impurities (gold, silver, platinum, etc.) are less reactive, so they do not dissolve. They fall off as anode sludge (valuable).\n\nResult: Pure copper builds up on the cathode; impurities are left behind.\n\nElectroplating\n\nElectroplating is the process of coating one metal with a thin layer of another metal using electrolysis.\n\nPurpose:\n- Improve appearance (shiny, decorative)\n- Prevent corrosion (rust prevention)\n- Increase hardness or reduce friction\n\nSetup:\n- Cathode: object to be plated (must be conductive).\n- Anode: metal to be deposited (or inert if using salt solution).\n- Electrolyte: solution containing ions of the plating metal.\n\nExamples:\n\n1. Silver plating cutlery:\n   - Cathode: cutlery (e.g., spoon)\n   - Anode: silver metal\n   - Electrolyte: silver nitrate solution (AgNO₃)\n   - Reaction: Ag⁺ + e⁻ → Ag(s) on cutlery.\n\n2. Chrome plating (car parts):\n   - Often uses a chromium(III) solution.\n   - Layers: first copper, then nickel, then chromium.\n\n3. Galvanisation (zinc plating iron):\n   - Zinc coating prevents rust – even if scratched, zinc corrodes preferentially (sacrificial protection).\n\nMalawi Example: Bicycle parts are sometimes chrome‑ or nickel‑plated to prevent rust in humid conditions. Copper wiring used in houses is purified by electrolysis.",
    "summary": "Electrolytic refining produces pure copper from impure copper. Electroplating deposits a thin layer of metal onto an object for decoration or corrosion protection.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Copper Refining",
        "description": "Electrolysis purifies copper for electrical wires."
      },
      {
        "title": "Chrome Plated Bicycle Parts",
        "description": "Plated to resist rust."
      }
    ],
    "practiceQuestions": [
      {
        "question": "In copper purification, where does the pure copper deposit?",
        "answer": "At the cathode",
        "hint": "Cu²⁺ gains electrons."
      },
      {
        "question": "Why is chrome plating used on car bumpers?",
        "answer": "To prevent corrosion and provide a shiny appearance.",
        "hint": "Protection and decoration."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 2",
    "topic": "Air and Combustion",
    "lessonNumber": 1,
    "lessonTitle": "Composition of Air and Air Pollution",
    "lessonId": "chemistry-f2-air-composition-1",
    "order": 329,
    "learningObjectives": [
      "State the approximate percentage composition of dry air",
      "Identify common air pollutants, their sources, and effects"
    ],
    "introduction": "The air you breathe is not just one gas – it is a mixture. Today we learn what is in the air, how its components are separated, and what pollutants harm our environment.",
    "keyPoints": [
      "Composition of dry air by volume: nitrogen (78%), oxygen (21%), argon (0.9%), carbon dioxide (0.04%), other gases (trace).",
      "Fractional distillation of liquid air separates components based on boiling points.",
      "Common pollutants: carbon monoxide (CO), sulphur dioxide (SO₂), nitrogen oxides (NOx), particulates (soot), ozone (O₃).",
      "Sources: burning fossil fuels, vehicle exhaust, industrial emissions, deforestation, burning of crop residues.",
      "Effects: respiratory diseases, acid rain, global warming, ozone depletion."
    ],
    "detailedContent": "Composition of Air\n\nIf we remove water vapour and pollutants, dry air consists of:\n- Nitrogen (N₂): 78.08%\n- Oxygen (O₂): 20.95%\n- Argon (Ar): 0.93%\n- Carbon dioxide (CO₂): 0.04%\n- Other noble gases: neon, helium, krypton, xenon (trace)\n\nOxygen is essential for respiration and combustion. Nitrogen is inert – it dilutes oxygen to slow down reactions.\n\nWater vapour varies from near 0% (desert) to 4% (humid tropics). Malawi has higher humidity during rainy season.\n\nSeparation of Air into Components\n\nAir is filtered to remove dust, then cooled and compressed. It is liquefied and then fractionally distilled:\n- Nitrogen (boiling point –196°C) distils first.\n- Argon (boiling point –186°C) comes next.\n- Oxygen (boiling point –183°C) is collected last.\n\nUses of gases:\n- Oxygen: medical, steelmaking, rocket fuel.\n- Nitrogen: food packaging (prevents oxidation), coolant (liquid nitrogen), ammonia production (Haber process).\n- Argon: inert atmosphere for welding, light bulbs.\n\nAir Pollutants and Their Effects\n\n| Pollutant | Sources | Effects |\n|-----------|---------|---------|\n| Carbon monoxide (CO) | Incomplete combustion in car engines, stoves | Binds to haemoglobin, reduces oxygen delivery, fatal in high concentrations |\n| Sulphur dioxide (SO₂) | Burning coal, diesel, industrial processes | Acid rain, respiratory irritation, harms plants |\n| Nitrogen oxides (NOx) | High‑temperature combustion (engines, power plants) | Acid rain, smog, respiratory problems |\n| Particulate matter (soot, dust) | Burning biomass, diesel engines | Lung diseases, reduced visibility, climate impact |\n| Ozone (O₃) (ground‑level) | Photochemical reactions from NOx and VOCs | Damages lungs, reduces crop yields |\n\nMalawi Example: Many households use charcoal and firewood for cooking. If used indoors with poor ventilation, carbon monoxide poisoning is a risk. Shifting to improved cookstoves reduces smoke (particulates) and incomplete combustion.",
    "summary": "Air: 78% N₂, 21% O₂, 0.9% Ar, 0.04% CO₂. Pollutants like CO, SO₂, NOx come from burning fuels and cause health and environmental damage. Separation by fractional distillation of liquid air.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Charcoal Burning",
        "description": "Incomplete combustion produces CO – danger in closed rooms."
      },
      {
        "title": "Improved Cookstoves",
        "description": "Reduce smoke and increase efficiency, reducing pollutants."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the most abundant gas in air?",
        "answer": "Nitrogen (78%)",
        "hint": "Oxygen is second."
      },
      {
        "question": "What dangerous gas is produced by incomplete combustion of charcoal?",
        "answer": "Carbon monoxide (CO)",
        "hint": "Lack of oxygen."
      }
    ]
  },
  {
    "subject": "Chemistry",
    "form": "Form 2",
    "topic": "Soil Chemistry",
    "lessonNumber": 1,
    "lessonTitle": "Chemical Properties of Soil and Soil Pollution",
    "lessonId": "chemistry-f2-soil-chemistry-1",
    "order": 330,
    "learningObjectives": [
      "Describe the chemical composition and properties of soil (pH, CEC, nutrient status)",
      "Explain sources of soil pollution and ways to control it"
    ],
    "introduction": "Soil is not just dirt – it has chemical properties that determine how well plants grow. Today we learn about soil pH, cation exchange capacity (CEC), and how human activities pollute soil.",
    "keyPoints": [
      "Soil composition: mineral matter (45%), organic matter (5%), water (25%), air (25%).",
      "Soil pH: measures acidity/alkalinity; most crops prefer pH 6‑7.",
      "Cation Exchange Capacity (CEC): soil’s ability to hold positively charged nutrients (Ca²⁺, Mg²⁺, K⁺, NH₄⁺). Clay and organic matter have high CEC.",
      "Nutrient status: essential plant nutrients (N, P, K, S, Ca, Mg, Fe, etc.) must be available.",
      "Soil pollutants: excessive fertilisers, pesticides, heavy metals (lead, mercury), industrial waste, sewage.",
      "Effects: reduced crop yields, water contamination, harm to soil organisms (earthworms, microbes).",
      "Control: use organic farming, reduce chemical inputs, phytoremediation (using plants to remove toxins), proper waste disposal."
    ],
    "detailedContent": "Chemical Composition of Soil\n\nSoil is a mixture of:\n- Mineral matter (45%) – sand, silt, clay from weathered rocks.\n- Organic matter (5%) – humus from decomposed plants/animals.\n- Water (25%) – dissolves nutrients.\n- Air (25%) – fills pores, provides oxygen.\n\nSoil pH\n\nSoil pH affects nutrient availability. Most crops grow best at pH 6.0‑7.0.\n\n- Low pH (acidic): aluminium and manganese become toxic; phosphorus is locked away.\n- High pH (alkaline): iron, manganese, zinc become unavailable.\n\nCation Exchange Capacity (CEC)\n\nCEC is the soil’s ability to hold and exchange positive ions (cations). Soils with high CEC (clay, organic) store more nutrients and release them slowly. Sandy soils have low CEC – they need more frequent fertilising.\n\nNutrient Status\n\nEssential plant nutrients: N, P, K (macronutrients) and micronutrients (Fe, Zn, Cu, etc.). Fertilisers replace nutrients removed by crops.\n\nSoil Pollution\n\nSources:\n- Excessive chemical fertilisers (nitrate leaching).\n- Pesticides and herbicides (persistent organic pollutants).\n- Heavy metals from industrial waste, mining, traffic (lead, cadmium).\n- Sewage sludge (pathogens, heavy metals).\n- Acid rain (from SO₂ and NOx) – lowers pH.\n\nEffects:\n- Reduced soil fertility.\n- Contaminated crops (heavy metals in vegetables).\n- Kills beneficial soil organisms (earthworms, nitrogen‑fixing bacteria).\n- Leaching into groundwater – polluted drinking water.\n\nPrevention and Control\n\n- Use organic manure and compost instead of chemical fertilisers.\n- Practice crop rotation and green manures.\n- Integrated pest management (IPM) – reduce pesticide use.\n- Phytoremediation: plant hyperaccumulators (e.g., sunflowers for lead).\n- Proper disposal of industrial and medical waste.\n- Recycle and treat sewage sludge before applying to land.\n\nMalawi Example: Over‑use of NPK fertilisers by smallholders can acidify soil. Adding lime or compost helps. In tobacco‑growing areas, deforestation and chemical runoff cause soil degradation.",
    "summary": "Soil pH and CEC determine fertility. Pollution from fertilisers, pesticides, and waste harms soil. Control methods: organic farming, integrated pest management, phytoremediation.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Soil Acidification",
        "description": "Repeated use of urea acidifies soil; farmers add lime to restore pH."
      },
      {
        "title": "Phytoremediation with Sunflowers",
        "description": "Heavy metals can be removed from soil by hyperaccumulator plants."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is Cation Exchange Capacity (CEC)?",
        "answer": "The soil’s ability to hold and exchange positively charged nutrient ions.",
        "hint": "Clay and organic matter increase it."
      },
      {
        "question": "Name one method to control soil pollution.",
        "answer": "Using organic manure instead of chemical fertilisers (or integrated pest management, phytoremediation).",
        "hint": "Reduce chemicals."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Thermal Expansion",
    "lessonNumber": 1,
    "lessonTitle": "Expansion of Solids, Liquids, and Gases",
    "lessonId": "physics-f4-thermal-expansion-1",
    "order": 339,
    "learningObjectives": [
      "Describe thermal expansion in solids, liquids, and gases in terms of particle behaviour",
      "Explain applications and problems of thermal expansion (e.g., railway gaps, bimetallic strips)"
    ],
    "introduction": "Why is there a gap in railway tracks? Why does a hot lid unscrew easily? The answer is THERMAL EXPANSION – how matter expands when heated. Today we learn the principles and practical consequences.",
    "keyPoints": [
      "When heated, particles gain kinetic energy, vibrate more, and increase separation → expansion.",
      "Solids: linear expansion (length), area expansion, volume expansion. Different materials expand at different rates.",
      "Liquids: volume expansion; water has anomalous expansion between 0°C and 4°C (contracts then expands).",
      "Gases: expand greatly; Charles’s law (V ∝ T at constant pressure).",
      "Practical applications: bimetallic strip (thermostats), riveting, fitting metal tyres onto wheels.",
      "Problems: buckling of rails, cracking of glass, bursting of pipes."
    ],
    "detailedContent": "Thermal Expansion – Particle Explanation\n\nWhen a substance is heated, its particles gain kinetic energy, vibrate more violently, and move farther apart. This increases the volume (or length) of the substance.\n\nLinear Expansion (solids)\n- Increase in length ΔL = α L₀ ΔT, where α is coefficient of linear expansion.\n- Different materials have different α (e.g., steel α = 12×10⁻⁶ /°C, aluminium α = 23×10⁻⁶ /°C).\n\nVolume Expansion (solids and liquids)\n- For solids: ΔV = β V₀ ΔT, where β ≈ 3α (for isotropic materials).\n- For liquids: expansion is generally greater than solids.\n\nAnomalous Expansion of Water\n- Water behaves unusually: from 0°C to 4°C, it contracts (density increases). Above 4°C, it expands normally.\n- This causes ice to float (density lower than water at 4°C), and lakes freeze from top down, protecting aquatic life.\n\nExpansion of Gases\n- Gases expand much more than liquids or solids (Charles’s law: V ∝ T at constant pressure).\n- Volume at constant pressure: V₁/T₁ = V₂/T₂ (T in Kelvin).\n\nApplications of Thermal Expansion\n\n1. Bimetallic strip: two metals with different α bonded together. When heated, it bends. Used in thermostats (e.g., electric irons, ovens).\n2. Fitting metal tyres onto wooden wheels: tyre is heated, expands, placed over wheel; when cooled, it contracts tightly.\n3. Riveting: red‑hot rivet inserted, then cools and contracts, holding parts together.\n4. Railway lines: gaps left between rails to prevent buckling.\n\nProblems of Thermal Expansion\n\n- Railway tracks buckle in hot weather if gaps too small.\n- Glass jars crack when boiling water poured in (uneven expansion).\n- Concrete roads crack; expansion joints needed.\n- Pipes can burst if no expansion loops.\n\nMalawi Example: In Malawi, tin roofs on houses expand in the hot sun and contract at night – you may hear creaking sounds. Bridges have expansion joints to prevent damage.",
    "summary": "Heat → particles move apart → expansion. Solids: linear expansion (α). Water anomalous: 0‑4°C contracts. Applications: bimetallic strip, tyre fitting. Problems: railway gaps, cracks.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Tin Roof Creaking",
        "description": "Expansion and contraction cause noises."
      },
      {
        "title": "Bridge Expansion Joints",
        "description": "Allow bridges to expand in heat without buckling."
      }
    ],
    "practiceQuestions": [
      {
        "question": "Why do railway tracks have gaps between sections?",
        "answer": "To allow expansion on hot days, preventing buckling.",
        "hint": "Metal expands when heated."
      },
      {
        "question": "What is a bimetallic strip used for?",
        "answer": "Thermostats (temperature control in irons, ovens).",
        "hint": "Bends with temperature change."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Frictional Force",
    "lessonNumber": 1,
    "lessonTitle": "Coefficient of Friction and Applications",
    "lessonId": "physics-f4-friction-1",
    "order": 340,
    "learningObjectives": [
      "Define coefficient of friction and calculate frictional force using F = μN (horizontal planes)",
      "Discuss applications and ways to reduce friction"
    ],
    "introduction": "Friction is the force that opposes motion between surfaces. It helps us walk but also wastes energy. Today we learn how to calculate frictional force and how to control it.",
    "keyPoints": [
      "Friction = force that opposes relative motion (static or kinetic).",
      "Normal reaction (N): force perpendicular to surfaces (equals weight on horizontal surface).",
      "Coefficient of friction (μ): ratio of frictional force to normal reaction; μ = F/N.",
      "Static friction (μ_s) > kinetic friction (μ_k).",
      "Formula: F_friction = μ N (horizontal planes).",
      "Applications: brakes, tyres, clutches (need friction). Reducing friction: lubricants, ball bearings, streamlining."
    ],
    "detailedContent": "Frictional Force\n\nFriction arises from irregularities between surfaces. It always opposes motion.\n\nTypes:\n- Static friction: force needed to start motion.\n- Kinetic (sliding) friction: force opposing motion once moving.\n- Rolling friction: usually much smaller than sliding friction.\n\nCoefficient of Friction (μ)\n\nFor two surfaces, the frictional force is proportional to the normal reaction (N):\n\nF = μ N\n\n- μ (mu) is the coefficient of friction; no units.\n- For horizontal surfaces (object on table), N = weight = mg.\n\nExample: A block of mass 5 kg (weight = 50 N) on a wooden table with μ = 0.4. Maximum static friction = 0.4 × 50 = 20 N. To move the block, you need to apply more than 20 N.\n\nTypical values (approximate):\n- Rubber on dry concrete: μ ≈ 0.7‑1.0\n- Metal on metal (dry): μ ≈ 0.3‑0.6\n- Lubricated metal: μ ≈ 0.05‑0.1\n- Ice on ice: μ ≈ 0.03\n\nAdvantages of friction:\n- Walking (soles grip ground).\n- Brakes (stop vehicles).\n- Writing (pen/pencil on paper).\n- Driving (tyres grip road).\n\nDisadvantages:\n- Wears out machinery parts.\n- Wastes energy (reduces efficiency).\n- Overheats moving parts.\n\nWays to reduce friction:\n- Lubricants (oil, grease).\n- Ball bearings (rolling instead of sliding).\n- Polishing surfaces.\n- Streamlining (reduce air friction).\n- Air cushion (hovercraft).\n\nWays to increase friction:\n- Rough surfaces (sand on icy roads).\n- Tyre treads (increase grip).\n- Brake pads (special materials).\n\nMalawi Example: A minibus tyre treads are designed to increase friction with the road, especially during rain. Farmers use grease to reduce friction on wheel axles.",
    "summary": "Friction = μ N. μ depends on surfaces. Static > kinetic. Friction essential for walking, braking, but also causes wear and energy loss. Reduce with lubricants, bearings.",
    "estimatedTime": "20 mins",
    "malawiExamples": [
      {
        "title": "Minibus Tyre Treads",
        "description": "Increase friction to prevent skidding on wet roads."
      },
      {
        "title": "Greasing Wheel Axles",
        "description": "Reduces friction and wear on ox‑carts and bicycles."
      }
    ],
    "practiceQuestions": [
      {
        "question": "A box of mass 20 kg (weight 200 N) is on a floor with μ = 0.3. What is the maximum static friction?",
        "answer": "60 N",
        "hint": "F = μN = 0.3 × 200 = 60 N"
      },
      {
        "question": "Name one way to reduce friction in a bicycle chain.",
        "answer": "Apply lubricant (oil/grease).",
        "hint": "Reduces metal‑to‑metal contact."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Terminal Velocity",
    "lessonNumber": 1,
    "lessonTitle": "Terminal Velocity – Falling in Fluids",
    "lessonId": "physics-f4-terminal-velocity-1",
    "order": 341,
    "learningObjectives": [
      "Explain terminal velocity using forces (weight, drag, upthrust)",
      "Describe factors affecting terminal velocity (mass, shape, fluid density)"
    ],
    "introduction": "Why does a skydiver reach a constant speed? Why do small raindrops fall slowly but hailstones hurt? The answer is terminal velocity. Today we learn how drag and weight balance.",
    "keyPoints": [
      "Terminal velocity: constant maximum velocity reached when net force = 0 (weight = drag + upthrust).",
      "Acceleration phase: weight > drag → accelerates.",
      "Terminal phase: weight = drag (+ upthrust) → constant velocity.",
      "Factors increasing terminal velocity: larger mass, smaller surface area, less streamlined shape, higher fluid density (upthrust).",
      "Examples: skydiver after opening parachute (lower terminal velocity), dust particles settle slowly, rain drops of different sizes."
    ],
    "detailedContent": "Forces on a Falling Object\n\nWhen an object falls through a fluid (air or water), three main forces act:\n\n1. Weight (mg) = downward force due to gravity.\n2. Drag (air resistance or fluid friction) = upward force increases with speed.\n3. Upthrust (buoyancy) = upward force from displaced fluid (significant only for large volumes or dense fluids, often small in air).\n\nStages of Falling:\n\n- Initially: v = 0 → drag = 0 → net force = weight → accelerates downward.\n- As speed increases, drag increases.\n- Eventually, drag (+ upthrust) = weight → net force = 0 → acceleration stops → constant velocity (terminal velocity).\n\nFactors affecting terminal velocity:\n\n| Factor | Effect on terminal velocity |\n|--------|------------------------------|\n| Larger mass | Higher terminal velocity |\n| Larger cross‑sectional area | Lower terminal velocity (more drag) |\n| Streamlined shape | Higher terminal velocity (less drag) |\n| Higher fluid density (e.g., water vs air) | Lower terminal velocity (more upthrust + drag) |\n\nExamples:\n- A skydiver: before parachute (~55 m/s), after parachute (~5 m/s) – large area increases drag.\n- A steel ball drops faster than a feather in air (different mass and area).\n- Raindrops: large drops fall faster than small drops.\n\nGraph: Velocity vs time – curve rises steeply then flattens at terminal velocity.\n\nMalawi Example: When you drop a maize seed and a feather, the seed reaches ground first because its terminal velocity is higher (greater mass, smaller area). A fisherman’s lead sinker sinks quickly in water; a plastic float has very low terminal velocity.",
    "summary": "Terminal velocity when weight = drag + upthrust. Larger mass, smaller area → higher terminal velocity. Skydiver, raindrops, sediment settling are examples.",
    "estimatedTime": "18 mins",
    "malawiExamples": [
      {
        "title": "Maize Seed vs Feather",
        "description": "Seed has higher terminal velocity, falls faster."
      },
      {
        "title": "Fishing Sinker",
        "description": "Lead sinker reaches terminal velocity quickly in water, then falls at constant speed."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What force opposes the motion of a falling object?",
        "answer": "Drag (air resistance) and upthrust.",
        "hint": "Opposite to weight."
      },
      {
        "question": "Why does a skydiver’s terminal velocity decrease when they open the parachute?",
        "answer": "Parachute increases cross‑sectional area, increasing drag, so lower terminal velocity.",
        "hint": "More air resistance."
      }
    ]
  },
  {
    "subject": "Physics",
    "form": "Form 4",
    "topic": "Nuclear Physics",
    "lessonNumber": 2,
    "lessonTitleNumber": 2,
    "lessonTitle": "Nuclear Fission and Fusion,: Nuclear Fission and Fusion, Uses and Safety of Radiation Uses and Safety of Radiation",
    "lessonId": "physics-f4-nuclear-fission-fusion-1-fission-fusion-1",
    "order": 348,
    "learningObjectives": [
      "Explain nuclear fission and chain reaction, and nuclear fusion",
      "State the uses of radioactive isotopes and safety precautions"
    ],
    "introduction": "Nuclear fission splits heavy nuclei, releasing huge energy – used in nuclear introduction: Nuclear fission splits heavy nuclei, releasing huge energy – used in nuclear power and weapons. Nuclear fusion fuses light nuclei – power and weapons. Nuclear fusion fuses light nuclei – powers the sun. Today we learn the differences powers the sun. Today we learn the differences and how radiation is used safely, and how radiation is used safely.",
    "keyPoints": [
      "Fission: splitting of a heavy nucleus (e.g., (e.g., U‑235) into smaller nuclei, releasing energy and neutrons U‑235) into smaller nuclei, releasing energy and neutrons. Controlled chain reaction in reactors; uncontrolled. Controlled chain reaction in reactors; uncontrolled in bombs.",
      "Fusion: joining of light nuclei (e light nuclei (e.g., hydrogen) into helium, releasing.g., hydrogen) into helium, releasing energy. Requires high temperature (millions K). energy. Requires high temperature (millions K).",
      "Uses",
      "Uses of radioisotopes: medicine of radioisotopes: medicine (radiotherapy, tracers), agriculture (sterile insect technique, radiocarbon dating), industry (gauges, smoke detectors).",
      "Dangers: ionising radiation damages DNA → cancer, acute radiation sickness. Protection: distance, shielding (lead, concrete), time (radiotherapy, tracers), agriculture (sterile insect technique, radiocarbon dating), industry (gauges, smoke detectors)."
    ],
    "detailedContent": "Nuclear Fission\n\n\nIn fission, a heavy nucleus (e.g., Uranium‑235) absorbs into two lighter nuclei a neutron and splits into two lighter nuclei (fission fragments), releasing 2‑3 more neutrons (fission fragments), releasing 2‑3 more neutrons and a large amount of energy.\n\nExample and a large amount of energy.\n\nExample: ²³⁵U + n →: ²³⁵U + n → ²³⁶U → ¹ ²³⁶U → ¹⁴¹Ba + ⁹²Kr + 3n + energy\n\nChain reaction: these⁴¹Ba + ⁹²Kr + 3n + energy\n\nChain reaction: these neutrons cause neutrons cause further fissions. In a nuclear reactor, control rods absorb excess neutrons to maintain steady rate further fissions. In a nuclear reactor, control rods absorb excess neutrons to maintain steady rate. In an atomic bomb, uncontrolled chain reaction releases huge energy instantly.\n\nNuclear Fusion\n\nF. In an atomic bomb, uncontrolled chain reaction releases huge energy instantly.\n\nNuclear Fusion\n\nFusion combines two light nuclei (e.g., hydrogen isotopes deuterium andusion combines two light nuclei (e.g., hydrogen isotopes deuterium and tritium) to form tritium) to form a helium nucleus, releasing even a helium nucleus, releasing even more energy per mass than fission. Requires extremely high temperature (millions of °C) to overcome more energy per mass than fission. Requires extremely high temperature (millions of °C) to overcome electrostatic repulsion electrostatic repulsion.\n\nExample: ²H + ³H → ⁴He + n + energy\n\nFusion occurs in the sun and stars. It produces no long‑lived radioactive.\n\nExample: ²H + ³H → ⁴He + n + energy\n\nFusion occurs in the sun and stars. It produces no long‑lived radioactive waste, but containing the plasma is difficult. Research continues (International Thermonuclear Experimental Reactor – ITER).\n\nUses of Radioactive Isotopes\n\n- Medicine: cobalt‑60 for radiotherapy (cancer), iodine‑131 for thyroid disorders, technetium‑ waste, but containing the plasma is difficult. Research continues (International Thermonuclear Experimental Reactor – ITER).\n\nUses of Radioactive Isotopes\n\n- Medicine: cobalt‑60 for radiotherapy (cancer), iodine‑131 for thyroid disorders, technetium‑99m99m for imaging.\n- Agriculture: radioisotope tracers to study fertiliser uptake; sterile for imaging.\n- Agriculture: radioisotope tracers to study fertiliser uptake; sterile insect technique (irradiate male insects to control insect technique (irradiate male insects to control pests).\n pests).\n- Industry: thickness- Industry: thickness gauges gauges, smoke detectors (americium‑241), pipeline leak detection.\n- Archaeology: carbon‑14 dating.\n\nSafety Precautions\n\n- Distance: increase distance from source reduces, smoke detectors (americium‑241), pipeline leak detection.\n- Archaeology: carbon‑14 dating.\n\nSafety Precautions\n\n- Distance: increase distance from source reduces exposure (inverse square law).\n- Shielding: lead aprons, concrete exposure (inverse square law).\n- Shielding: lead aprons, concrete walls.\n- Time: limit time near sources.\n- Personal dosimeters walls.\n- Time: limit time near sources.\n- Personal dosimeters (film (film badges) badges) for workers.\n- Storage: radioactive waste stored in shielded containers; long‑lived waste buried deep underground.\n\nMalawi Example: Hospitals use X‑ for workers.\n- Storage: radioactive waste stored in shielded containers; long‑lived waste buried deep underground.\n\nMalawi Example: Hospitals use X‑rays and gamma sources for treatment (althoughrays and gamma sources for treatment (although specialised facilities limited). The Malawi Bureau of Standards ensures safe handling specialised facilities limited). The Malawi Bureau of Standards ensures safe handling of industrial radiography sources.",
    "summary": "Fission splits heavy nuclei, chain reaction. Fusion combines: Fission splits heavy nuclei, chain reaction. Fusion combines light nuclei, powers sun. Radioisot light nuclei, powers sun. Radioisotopes used in medicine, agriculture, industryopes used in medicine, agriculture, industry. Protection. Protection: distance, shielding, time.",
    "estimatedTime": "22 mins",
    "malawiExamples": [
      {
        "title": "Cancer Radiotherapy",
        "description": "Cobalt‑60 used in radiation therapy."
      },
      {
        "title": "Smoke Detectors",
        "description": "Americium‑241 detects smoke particles."
      }
    ],
    "practiceQuestions": [
      {
        "question": "What is the main advantage of nuclear fusion over fission? What is the main advantage of nuclear fusion over fission?",
        "answer": "No long‑l waste, abundant fuel (hydrogenived radioactive waste, abundant fuel ().",
        "hint": "Cleaner."
      },
      {
        "question": "Give two safety measures when handlinghydrogen).",
        "hint": "Cleaner."
      },
      {
        "question": "Give two safety measures when handling radioactive materials.",
        "answer": "Use shielding (lead), increase distance, limit exposureUse shielding (lead), increase distance, limit exposure time.",
        "hint": "Three ways."
      }
    ]
  }
];



async function seedLessons() {
  console.log('1. Starting seed script...');
  
  if (!process.env.MONGODB_URI) {
    console.error('ERROR: MONGODB_URI environment variable is not defined.');
    process.exit(1);
  }

  try {
    console.log('2. Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('3. Connected to MongoDB');

    console.log('4. Deleting existing lessons...');
    await Lesson.deleteMany({});
    console.log('5. Cleared existing lessons');
    // ===== COPY YOUR ORIGINAL allLessons ARRAY ABOVE =====

// Find duplicates before cleaning
const ids = allLessons.map(l => l.lessonId);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
const uniqueDupes = [...new Set(duplicateIds)];

console.log("Found duplicate lessonIds:", uniqueDupes);
console.log("Number of duplicate entries:", duplicateIds.length);

// De‑duplicate: keep first occurrence of each lessonId
const seen = new Set();
const cleanLessons = allLessons.filter(lesson => {
  if (seen.has(lesson.lessonId)) {
    return false;
  }
  seen.add(lesson.lessonId);
  return true;
});

console.log(`\nOriginal count: ${allLessons.length}`);
console.log(`Cleaned count: ${cleanLessons.length}`);
console.log(`Removed ${allLessons.length - cleanLessons.length} duplicate items`);

// Output the cleaned array – you can copy this entire output
console.log("\nconst allLessons = [");
cleanLessons.forEach((lesson, index) => {
  // Print as compact JSON (you can use util.inspect for full depth)
  process.stdout.write(JSON.stringify(lesson));
  if (index < cleanLessons.length - 1) process.stdout.write(",\n");
});
console.log("\n];");

    console.log(`6. Inserting ${allLessons.length} lessons...`);
    await Lesson.insertMany(allLessons);
    console.log('7. Inserted all lessons');

    console.log('8. Counting lessons in database...');
    const totalCount = await Lesson.countDocuments();
    console.log(`9. Total lessons in DB: ${totalCount}`);

    console.log('\n=== LESSONS PER SUBJECT & FORM ===');
    const summary = await Lesson.aggregate([
      { $group: { _id: { subject: "$subject", form: "$form" }, count: { $sum: 1 } } },
      { $sort: { "_id.subject": 1, "_id.form": 1 } }
    ]);
    
    if (summary.length === 0) {
      console.log('No lessons found in database (summary empty).');
    } else {
      let total = 0;
      for (const item of summary) {
        console.log(`${item._id.subject} - ${item._id.form}: ${item.count}`);
        total += item.count;
      }
      console.log(`\nTOTAL LESSONS BY FORM: ${total}`);
    }

    console.log('\n=== LESSONS PER SUBJECT ===');
    const bySubject = await Lesson.aggregate([
      { $group: { _id: "$subject", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);
    for (const s of bySubject) {
      console.log(`${s._id}: ${s.count}`);
    }

  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }

  process.exit(0);
}

seedLessons();