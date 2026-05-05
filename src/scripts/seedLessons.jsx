const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('../models/Lesson');

dotenv.config();
console.log('URI:', process.env.MONGODB_URI);

const allLessons = [
  // ======================================================================
  // MATHEMATICS - COMPLETE (Forms 1, 2, 3, 4)
  // ======================================================================

  // -------------------- MATHEMATICS FORM 1 --------------------
  // Topic: Number Systems (3 lessons)
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Number Systems',
    lessonNumber: 1,
    lessonTitle: 'Natural Numbers, Whole Numbers, and Place Value',
    lessonId: 'mathematics-f1-number-systems-1',
    order: 1,
    learningObjectives: [
      'Identify natural numbers and whole numbers',
      'Understand and apply place value up to millions',
      'Read and write numbers correctly',
      'Apply number concepts to real-life situations in Malawi'
    ],
    introduction: 'Good day, young mathematician! Have you ever counted money at the market, counted learners in your class, or told your age? You were using natural numbers! Today, we will explore natural numbers and whole numbers - the building blocks of all mathematics.',
    keyPoints: [
      'Natural numbers are counting numbers: 1, 2, 3, 4, 5, ...',
      'Whole numbers include zero: 0, 1, 2, 3, 4, 5, ...',
      'Place value: ones, tens, hundreds, thousands, millions',
      'In Malawi, we use numbers to count kwacha, tambala, people, livestock, and crops'
    ],
    detailedContent: `Let me explain natural numbers using examples from Malawi.

NATURAL NUMBERS are the numbers you use when you count. When you say "I have 5 mangoes" or "There are 40 learners in my class" or "My grandmother is 65 years old" - these are natural numbers. They start from 1 and go upwards: 1, 2, 3, 4, 5... and so on.

WHOLE NUMBERS are just like natural numbers, but they also include ZERO. Zero is special because it represents "nothing". If you have no money in your pocket, you have zero kwacha. If there are no clouds in the sky, we say zero clouds.

PLACE VALUE is very important. In the number 2,345:

The 2 is in the thousands place (2,000)
The 3 is in the hundreds place (300)
The 4 is in the tens place (40)
The 5 is in the ones place (5)

Let me give you a Malawi example. If a farmer harvests 1,234 kg of maize:
- The 1 represents 1,000 kg (one thousand kilograms)
- The 2 represents 200 kg (two hundred kilograms)
- The 3 represents 30 kg (thirty kilograms)
- The 4 represents 4 kg (four kilograms)

Understanding place value helps you read numbers correctly. When you see a price tag of 5,000 kwacha, you know it is five thousand kwacha, not five hundred or fifty!

To read a number like 3,456,789:
- 3,456,789 = 3 million + 456 thousand + 789
- It reads as "three million, four hundred fifty-six thousand, seven hundred eighty-nine"

In Malawi, large numbers appear in agriculture (crop yields), population (census data), and economics (national budget).`,
    summary: 'Natural numbers are counting numbers (1,2,3...). Whole numbers include zero. Place value tells us what each digit in a number represents. Understanding numbers helps us count money, measure quantities, and describe our world.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Market Prices', description: 'A tomato vendor sells 1, 2, 3, or 4 tomatoes - these are natural numbers.' },
      { title: 'Population', description: 'Malawi has about 20 million people - using larger numbers.' },
      { title: 'Crop Harvest', description: 'A farmer harvests 2,500 kg of maize - place value helps read this number.' }
    ],
    practiceQuestions: [
      { question: 'What is the place value of 7 in 7,891?', answer: 'Thousands', hint: 'Look at the position of the digit' },
      { question: 'Is 0 a natural number or a whole number?', answer: 'Whole number', hint: 'Natural numbers start from 1' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Number Systems',
    lessonNumber: 2,
    lessonTitle: 'Integers and the Number Line',
    lessonId: 'mathematics-f1-number-systems-2',
    order: 2,
    learningObjectives: [
      'Define integers and identify positive and negative numbers',
      'Represent integers on a number line',
      'Compare and order integers',
      'Apply integers to real-life situations like temperature and debt'
    ],
    introduction: 'Hello, explorer of numbers! So far we have worked with positive numbers. But what about temperatures below zero? What about debts? These are represented by NEGATIVE numbers. Together with positive numbers and zero, they form INTEGERS. Today, I will show you how integers work and why they are useful.',
    keyPoints: [
      'Integers include positive numbers, negative numbers, and zero: ... -3, -2, -1, 0, 1, 2, 3 ...',
      'A number line helps us visualize integers - positive to the right, negative to the left',
      'Numbers increase as you move right on the number line',
      'Numbers decrease as you move left on the number line',
      'Negative numbers represent values below zero (temperature, depth, debt)'
    ],
    detailedContent: `Let me introduce you to INTEGERS. Integers are all the positive numbers, negative numbers, and zero. They look like this: ... -3, -2, -1, 0, 1, 2, 3 ...

Imagine a thermometer. When it is hot, the temperature is positive, like +25°C. When it is cold, the temperature can be negative, like -5°C. That negative sign means "below zero".

A NUMBER LINE is a straight line that helps us see the order of numbers. Zero is in the middle. Positive numbers go to the right (1, 2, 3...). Negative numbers go to the left (-1, -2, -3...).

The further RIGHT you go, the LARGER the number.
The further LEFT you go, the SMALLER the number.

Let me give you a Malawi example. Imagine you have 500 kwacha (that is +500). If you spend 200 kwacha on exercise books, you have 300 kwacha left (+300). But if instead you borrowed 200 kwacha from a friend because you had no money, you would have a debt of 200 kwacha - which we can represent as -200!

Comparing integers on a number line:
- Numbers to the right are greater than numbers to the left
- -3 is less than -2 because -3 is further left
- -1 is greater than -5 because -1 is further right
- 0 is greater than any negative number
- Any positive number is greater than 0 and greater than any negative number

Here is a helpful memory tool: Think of a number line like a hill. The top of the hill (far right) is the largest number. As you go down the hill to the left, numbers get smaller. At the bottom (far left) are the smallest numbers.

In Malawi, integers appear in:
- BANKING: A negative bank balance means you owe money
- TEMPERATURE: On Mulanje Mountain, temperatures can drop below zero
- SPORTS: Football goal differences can be negative (-2 goal difference)
- HEIGHT: A valley can be at negative elevation (below sea level)`,
    summary: 'Integers include positive numbers, negative numbers, and zero. A number line shows the order of integers - numbers increase to the right, decrease to the left. Negative numbers represent values below zero, like debt or cold temperatures.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Temperatures on Mulanje Mountain', description: 'At the peak, temperatures can drop below zero - negative integers!' },
      { title: 'Bank Account', description: 'If you withdraw more than you have, your balance becomes negative - an integer!' },
      { title: 'Football Goal Difference', description: 'If a team scores 5 goals but concedes 7, their goal difference is -2.' }
    ],
    practiceQuestions: [
      { question: 'Which is greater: -5 or -10?', answer: '-5', hint: 'On a number line, -5 is to the right of -10' },
      { question: 'If the temperature drops from 5°C to -3°C, how many degrees did it drop?', answer: '8 degrees', hint: 'Count the steps from 5 down to -3' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Number Systems',
    lessonNumber: 3,
    lessonTitle: 'Operations with Integers',
    lessonId: 'mathematics-f1-number-systems-3',
    order: 3,
    learningObjectives: [
      'Add and subtract integers using a number line',
      'Multiply and divide integers',
      'Apply the rules of integer operations',
      'Solve real-life problems involving integers'
    ],
    introduction: 'Welcome back, mathematician! Now that you understand what integers are, let me teach you how to ADD, SUBTRACT, MULTIPLY, and DIVIDE them. These operations follow special rules, but once you learn them, working with integers becomes as easy as working with positive numbers!',
    keyPoints: [
      'Adding a positive number moves right on the number line',
      'Adding a negative number moves left on the number line',
      'Subtracting a positive number moves left on the number line',
      'Subtracting a negative number moves right on the number line',
      'Multiplication and division rules: same signs = positive; different signs = negative'
    ],
    detailedContent: `Let me teach you how to perform operations with integers. I will use a number line to help you visualize.

ADDITION OF INTEGERS:

When you ADD a POSITIVE number, you move RIGHT on the number line.
Example: 3 + 4 = 7 (start at 3, move 4 steps right)

When you ADD a NEGATIVE number, you move LEFT on the number line.
Example: 5 + (-2) = 3 (start at 5, move 2 steps left)
Think of it as 5 - 2 = 3

SUBTRACTION OF INTEGERS:

When you SUBTRACT a POSITIVE number, you move LEFT on the number line.
Example: 7 - 3 = 4 (start at 7, move 3 steps left)

When you SUBTRACT a NEGATIVE number, you move RIGHT on the number line.
Example: 4 - (-2) = 6 (start at 4, move 2 steps right)
This is because subtracting a negative is like adding a positive!

MULTIPLICATION AND DIVISION OF INTEGERS:

Here are the rules you must remember:
- Positive × Positive = Positive (e.g., 3 × 4 = 12)
- Negative × Negative = Positive (e.g., -3 × -4 = 12)
- Positive × Negative = Negative (e.g., 3 × -4 = -12)
- Negative × Positive = Negative (e.g., -3 × 4 = -12)

The same rules apply to division:
- Positive ÷ Positive = Positive (e.g., 12 ÷ 4 = 3)
- Negative ÷ Negative = Positive (e.g., -12 ÷ -4 = 3)
- Positive ÷ Negative = Negative (e.g., 12 ÷ -4 = -3)
- Negative ÷ Positive = Negative (e.g., -12 ÷ 4 = -3)

Let me give you a real Malawi example. Imagine you owe 3 friends 4 kwacha each. Your total debt is -3 × 4 = -12 kwacha. If each friend forgives your debt (removes the negative), that is -12 ÷ -3 = 4 kwacha saved per friend!

Another example: The temperature in Lilongwe drops by 2 degrees each hour for 5 hours. Total temperature change = -2 × 5 = -10 degrees.

Remember: "Same signs give positive, different signs give negative" - this is the golden rule for multiplication and division of integers.`,
    summary: 'Adding a positive moves right; adding a negative moves left. Subtracting a positive moves left; subtracting a negative moves right. Multiplication and division: same signs give positive, different signs give negative.',
    estimatedTime: '25 mins',
    malawiExamples: [
      { title: 'Debt Calculation', description: 'If you borrow 500 kwacha from 3 different friends, your total debt is -1,500 kwacha.' },
      { title: 'Temperature Change', description: 'If temperature drops 2 degrees each hour for 5 hours, total change is -10 degrees.' },
      { title: 'Bank Balance', description: 'If your balance is -800 kwacha and you deposit 1,000 kwacha, you have 200 kwacha.' }
    ],
    practiceQuestions: [
      { question: 'Calculate: -5 + (-3)', answer: '-8', hint: 'Moving left on the number line' },
      { question: 'Calculate: -4 × (-6)', answer: '24', hint: 'Negative × Negative = Positive' }
    ]
  },

  // Topic: Algebraic Expressions (3 lessons)
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Algebraic Expressions',
    lessonNumber: 1,
    lessonTitle: 'Variables, Coefficients, and Like Terms',
    lessonId: 'mathematics-f1-algebraic-expressions-1',
    order: 4,
    learningObjectives: [
      'Define variables, constants, and coefficients',
      'Write algebraic expressions from word phrases',
      'Identify like and unlike terms',
      'Simplify algebraic expressions by combining like terms'
    ],
    introduction: 'Hello, algebra explorer! Have you ever seen letters mixed with numbers in mathematics and wondered what they mean? That is ALGEBRA! Algebra is like a secret code where letters stand for unknown numbers. Today, I will teach you how to read and write this code.',
    keyPoints: [
      'A variable is a letter that represents an unknown number (x, y, a, b, p, q)',
      'A coefficient is the number multiplied by a variable (in 5x, 5 is the coefficient)',
      'A constant is a number on its own (in 5x + 3, 3 is the constant)',
      'Like terms have the same variable raised to the same power',
      'We can only add or subtract like terms'
    ],
    detailedContent: `Imagine you are at a market in Lilongwe. You want to buy apples and oranges, but you don't know the price yet. So you say: "Let a = price of one apple" and "Let o = price of one orange". This is algebra! We use letters to represent unknown quantities.

In algebra, we write expressions like 5x + 3y - 2x + 4y. Let me break this down for you:

- The letters x and y are VARIABLES - they can stand for different numbers
- The numbers in front (5, 3, 2, 4) are COEFFICIENTS - they tell us how many of each variable we have
- If there is no coefficient written, it is understood to be 1 (x means 1x)
- A number on its own, like 7, is a CONSTANT

Now, here is the most important rule: You can only add or subtract LIKE TERMS. Like terms have the SAME variable.

LIKE TERMS:
- 5x and 2x (both have x)
- 3y and 4y (both have y)
- 7 and 12 (both constants)

UNLIKE TERMS (cannot be combined):
- 5x and 3y (different variables)
- 2x and 2x² (different powers)
- 4 and 4x (one has variable, one does not)

Let me show you how to simplify: 5x + 3y - 2x + 4y

Step 1: Group the like terms together:
(5x - 2x) + (3y + 4y)

Step 2: Add or subtract the coefficients:
(5 - 2)x + (3 + 4)y = 3x + 7y

That is it! You have simplified the expression.

Let me give you a Malawi example. A farmer is buying fertilizer. Let f = price of one bag of fertilizer. If he buys 10 bags, the cost is 10f. If he later buys 5 more bags, the total is 10f + 5f = 15f.

Another example: A shop sells maize flour. On Monday, they sell 8 bags. On Tuesday, they sell 3 bags. The total sold is 8b + 3b = 11b, where b = one bag of flour.`,
    summary: 'Variables are letters that represent unknown numbers. Coefficients are numbers multiplied by variables. Like terms have the same variable and can be combined by adding or subtracting their coefficients.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Market Shopping', description: 'Let p = price of one tomato. Buying 8 tomatoes costs 8p.' },
      { title: 'Farming Supplies', description: 'Let b = price of one bag of maize seed. 10 bags cost 10b.' },
      { title: 'Fishing', description: 'Let f = number of fish caught per day. 5 days of fishing yields 5f fish.' }
    ],
    practiceQuestions: [
      { question: 'Identify the coefficient in 12x', answer: '12', hint: 'The number in front of the variable' },
      { question: 'Simplify: 7a + 3b - 2a + 5b', answer: '5a + 8b', hint: 'Group a terms and b terms separately' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Algebraic Expressions',
    lessonNumber: 2,
    lessonTitle: 'Substitution and Evaluation',
    lessonId: 'mathematics-f1-algebraic-expressions-2',
    order: 5,
    learningObjectives: [
      'Substitute given values into algebraic expressions',
      'Evaluate algebraic expressions after substitution',
      'Apply substitution to solve real-life problems',
      'Understand the order of operations (BODMAS) in evaluation'
    ],
    introduction: 'Hello again! Now that you know how to write algebraic expressions, what happens when you actually know the value of the variable? That is called SUBSTITUTION. You replace the letter with its actual number and calculate the result. Today, I will show you how to do this step by step.',
    keyPoints: [
      'Substitution means replacing a variable with a given number',
      'Always use parentheses when substituting negative numbers',
      'Follow BODMAS: Brackets, Orders, Division/Multiplication, Addition/Subtraction',
      'Write the expression first, then substitute, then calculate',
      'Check your answer by estimating if it makes sense'
    ],
    detailedContent: `Let me teach you how to SUBSTITUTE values into algebraic expressions.

SUBSTITUTION means replacing a variable (letter) with its actual value (number).

For example, if we have the expression 3x + 5, and we know that x = 4, then:
3x + 5 becomes 3(4) + 5 = 12 + 5 = 17

Here is another example: 2a - 3b, where a = 5 and b = 2
2(5) - 3(2) = 10 - 6 = 4

IMPORTANT: When substituting negative numbers, always put them in parentheses!
Example: x² - 3x, where x = -2
(-2)² - 3(-2) = 4 - (-6) = 4 + 6 = 10
If you forget the parentheses, you might write -2² -3(-2) = -4 - (-6) = -4 + 6 = 2 (WRONG!)

The ORDER OF OPERATIONS (BODMAS) is very important:

B - Brackets first
O - Orders (powers and roots)
D - Division (left to right)
M - Multiplication (left to right)
A - Addition (left to right)
S - Subtraction (left to right)

A common way to remember: "Big Old Dogs Make A Smell" or "Please Excuse My Dear Aunt Sally" (PEMDAS).

Let me give you a real Malawi example. A shopkeeper sells maize flour. The profit is given by P = 50n - 200, where n is the number of bags sold.

If the shopkeeper sells 10 bags, what is the profit?
P = 50(10) - 200 = 500 - 200 = 300 kwacha profit

If the shopkeeper sells only 3 bags:
P = 50(3) - 200 = 150 - 200 = -50 kwacha (a loss of 50 kwacha)

Another example: The distance travelled by a boma (village bus) is D = 60t, where t is hours travelled. If the bus travels for 2.5 hours, the distance is D = 60 × 2.5 = 150 kilometres.

Substitution is a powerful tool for answering "what if" questions. What if the price changes? What if the speed changes? Substitution gives you the answers.`,
    summary: 'Substitution means replacing variables with their actual values. Always follow BODMAS (order of operations) when calculating. Put negative numbers in parentheses. Substitution helps us calculate real-world quantities like profit, cost, and distance.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Profit Calculation', description: 'A vendor\'s profit is 20n - 100, where n is items sold.' },
      { title: 'Travel Distance', description: 'Distance = 60t, where t is hours travelled.' },
      { title: 'Cost Calculation', description: 'Cost = 500k + 1000, where k is kilograms of tomatoes.' }
    ],
    practiceQuestions: [
      { question: 'Evaluate 4x - 7 when x = 3', answer: '5', hint: '4(3) - 7 = 12 - 7 = 5' },
      { question: 'Evaluate a² + 2b when a = -3 and b = 4', answer: '17', hint: '(-3)² + 2(4) = 9 + 8 = 17' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Algebraic Expressions',
    lessonNumber: 3,
    lessonTitle: 'Expanding Brackets',
    lessonId: 'mathematics-f1-algebraic-expressions-3',
    order: 6,
    learningObjectives: [
      'Expand expressions with a single bracket',
      'Expand expressions with two brackets (binomials)',
      'Apply the distributive law correctly',
      'Simplify expanded expressions by collecting like terms'
    ],
    introduction: 'Welcome back, algebra master! Now we are going to learn how to EXPAND brackets. This is like opening a package to see what is inside. When you see something like 3(x + 4), the brackets mean "multiply everything inside by 3". Today, I will teach you how to expand brackets step by step.',
    keyPoints: [
      'The distributive law: a(b + c) = ab + ac',
      'When expanding, multiply the term outside by EVERY term inside the bracket',
      'For two brackets: (a + b)(c + d) = ac + ad + bc + bd (FOIL method)',
      'Always check your expansion by substituting a simple number',
      'Collect like terms after expanding to simplify'
    ],
    detailedContent: `Let me teach you how to EXPAND brackets.

SINGLE BRACKETS (Distributive Law):

The rule is: a(b + c) = ab + ac. Multiply the term outside by EVERY term inside the bracket.

Example 1: 3(x + 4)
= 3 × x + 3 × 4 = 3x + 12

Example 2: 5(2x - 3)
= 5 × 2x + 5 × (-3) = 10x - 15

Example 3: -2(3x - 5)
= -2 × 3x + (-2) × (-5) = -6x + 10

Example 4: x(2x + 3)
= x × 2x + x × 3 = 2x² + 3x

DOUBLE BRACKETS (Two binomials):

Use the FOIL method:
F - First terms: multiply the first term of each bracket
O - Outer terms: multiply the outer terms
I - Inner terms: multiply the inner terms
L - Last terms: multiply the last terms

Example: (x + 3)(x + 5)
F: x × x = x²
O: x × 5 = 5x
I: 3 × x = 3x
L: 3 × 5 = 15
Then add: x² + 5x + 3x + 15 = x² + 8x + 15

Example with negatives: (x - 4)(x + 2)
F: x × x = x²
O: x × 2 = 2x
I: -4 × x = -4x
L: -4 × 2 = -8
Add: x² + 2x - 4x - 8 = x² - 2x - 8

Example: (2x + 3)(x - 1)
F: 2x × x = 2x²
O: 2x × (-1) = -2x
I: 3 × x = 3x
L: 3 × (-1) = -3
Add: 2x² - 2x + 3x - 3 = 2x² + x - 3

(2x + 1)(3x - 2)
F: 2x × 3x = 6x²
O: 2x × (-2) = -4x
I: 1 × 3x = 3x
L: 1 × (-2) = -2
Add: 6x² - 4x + 3x - 2 = 6x² - x - 2

Let me give you a Malawi example. A farmer has a rectangular field. The length is (x + 10) metres and the width is (x + 5) metres. The area is (x + 10)(x + 5) = x² + 15x + 50 square metres.

Expanding brackets is like unpacking. Once you expand, you can see all the parts clearly.`,
    summary: 'Expand brackets by multiplying the term outside by every term inside (distributive law). For two brackets, use FOIL: First, Outer, Inner, Last. Always collect like terms after expanding.',
    estimatedTime: '24 mins',
    malawiExamples: [
      { title: 'Field Area', description: 'A rectangular field with length (x+20) and width (x+10) has area x² + 30x + 200' },
      { title: 'Revenue Calculation', description: 'If price is (p + 5) and quantity sold is (p - 2), revenue is p² + 3p - 10' },
      { title: 'Garden Planning', description: 'A garden with length (x+8) and width (x-3) has area x² + 5x - 24' }
    ],
    practiceQuestions: [
      { question: 'Expand: 4(2x + 5)', answer: '8x + 20', hint: 'Multiply 4 by 2x and 4 by 5' },
      { question: 'Expand: (x + 6)(x - 3)', answer: 'x² + 3x - 18', hint: 'Use FOIL: x² + (-3x) + 6x + (-18)' },
      { question: 'Expand: (2x + 3)(x - 4)', answer: '2x² - 5x - 12', hint: 'FOIL: 2x² - 8x + 3x - 12' }
    ]
  },

  // Topic: Linear Equations (3 lessons - continued from earlier)
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Linear Equations',
    lessonNumber: 1,
    lessonTitle: 'Solving Simple Linear Equations',
    lessonId: 'mathematics-f1-linear-equations-1',
    order: 7,
    learningObjectives: [
      'Define a linear equation in one variable',
      'Solve equations of the form x + a = b and x - a = b',
      'Solve equations of the form ax = b and x/a = b',
      'Check solutions by substitution'
    ],
    introduction: 'Welcome, problem solver! Have you ever needed to find an unknown number and had to do some detective work? That is exactly what solving equations is about! An equation is like a balanced scale - whatever you do to one side, you must do to the other. Today, I will teach you how to solve simple linear equations.',
    keyPoints: [
      'A linear equation has the form ax + b = c, where a, b, and c are constants',
      'The goal is to isolate the variable (get x by itself)',
      'Use inverse operations: addition undoes subtraction, subtraction undoes addition',
      'Use inverse operations: multiplication undoes division, division undoes multiplication',
      'Whatever you do to one side, you MUST do to the other side'
    ],
    detailedContent: `Think of an equation as a BALANCED SCALE. The equal sign (=) is like the balance point. If the scale is balanced, the left side weighs the same as the right side. If you add weight to one side, you must add the same weight to the other side to keep it balanced.

Let me show you how to solve different types of equations.

TYPE 1: x + a = b
Example: x + 5 = 12
What does this mean? Some number (x) plus 5 equals 12. We need to find x.

To get x by itself, we need to remove the +5. The inverse operation of addition is SUBTRACTION. So we subtract 5 from BOTH sides:

x + 5 - 5 = 12 - 5
x = 7

Check: Does 7 + 5 = 12? Yes! So x = 7 is correct.

TYPE 2: x - a = b
Example: x - 3 = 9
The inverse of subtraction is ADDITION. Add 3 to both sides:

x - 3 + 3 = 9 + 3
x = 12

Check: 12 - 3 = 9. Correct!

TYPE 3: ax = b
Example: 3x = 18
Here, 3 is multiplied by x. The inverse of multiplication is DIVISION. Divide both sides by 3:

3x ÷ 3 = 18 ÷ 3
x = 6

Check: 3 × 6 = 18. Correct!

TYPE 4: x/a = b
Example: x/4 = 5
The inverse of division is MULTIPLICATION. Multiply both sides by 4:

(x/4) × 4 = 5 × 4
x = 20

Check: 20 ÷ 4 = 5. Correct!

Let me give you a Malawi example. A student has 500 kwacha. After buying some exercise books, they have 200 kwacha left. How much did they spend?

Let s = amount spent
500 - s = 200
Subtract 500 from both sides: -s = 200 - 500 = -300
Multiply by -1: s = 300 kwacha spent.

Another example: Five friends share 2,500 kwacha equally. How much does each get?
5x = 2500
x = 2500 ÷ 5 = 500 kwacha each.

Remember: Always perform the same operation on BOTH sides of the equation. That keeps the "scale" balanced.`,
    summary: 'A linear equation has the form ax + b = c. To solve, isolate the variable using inverse operations. Addition undoes subtraction, subtraction undoes addition. Multiplication undoes division, division undoes multiplication. Always perform the same operation on both sides.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Spending Money', description: 'If you start with 1,000 kwacha and end with 350 kwacha, how much did you spend? 1,000 - x = 350 → x = 650 kwacha.' },
      { title: 'Sharing Equally', description: 'If 5 friends share 2,500 kwacha equally, each gets x = 2,500 ÷ 5 = 500 kwacha.' },
      { title: 'Walking Distance', description: 'If you walk 3 km per hour, how many hours to walk 15 km? 3h = 15 → h = 5 hours.' }
    ],
    practiceQuestions: [
      { question: 'Solve: x + 7 = 15', answer: 'x = 8', hint: 'Subtract 7 from both sides' },
      { question: 'Solve: 6x = 42', answer: 'x = 7', hint: 'Divide both sides by 6' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Linear Equations',
    lessonNumber: 2,
    lessonTitle: 'Solving Two-Step Linear Equations',
    lessonId: 'mathematics-f1-linear-equations-2',
    order: 8,
    learningObjectives: [
      'Solve equations of the form ax + b = c',
      'Solve equations of the form x/a + b = c',
      'Apply the correct order of inverse operations',
      'Solve real-life problems using two-step equations'
    ],
    introduction: 'Hello again! Now that you can solve simple equations, let us move to TWO-STEP equations. These equations have two operations, so you need two inverse operations to solve them. For example, 2x + 3 = 11 has multiplication (2 × x) and addition (+3). Today, I will show you the correct order to solve these equations.',
    keyPoints: [
      'First, undo addition or subtraction (the operation not attached to the variable)',
      'Then, undo multiplication or division (the operation attached to the variable)',
      'Always perform operations in the reverse order of BODMAS',
      'Check your answer by substituting back into the original equation',
      'Write your solution clearly: x = ...'
    ],
    detailedContent: `Let me teach you how to solve TWO-STEP linear equations.

The key rule: UNDO ADDITION/SUBTRACTION FIRST, THEN UNDO MULTIPLICATION/DIVISION.

Example 1: 2x + 3 = 11

Step 1: Undo the +3 (subtract 3 from both sides)
2x + 3 - 3 = 11 - 3
2x = 8

Step 2: Undo the ×2 (divide both sides by 2)
2x ÷ 2 = 8 ÷ 2
x = 4

Check: 2(4) + 3 = 8 + 3 = 11 ✓

Example 2: 3x - 5 = 16

Step 1: Undo the -5 (add 5 to both sides)
3x - 5 + 5 = 16 + 5
3x = 21

Step 2: Undo the ×3 (divide both sides by 3)
3x ÷ 3 = 21 ÷ 3
x = 7

Check: 3(7) - 5 = 21 - 5 = 16 ✓

Example 3: x/2 + 4 = 10

Step 1: Undo the +4 (subtract 4 from both sides)
x/2 + 4 - 4 = 10 - 4
x/2 = 6

Step 2: Undo the ÷2 (multiply both sides by 2)
(x/2) × 2 = 6 × 2
x = 12

Check: 12/2 + 4 = 6 + 4 = 10 ✓

Example 4: (x - 3)/2 = 5

Here, the variable is inside the bracket. First, undo the ÷2 (multiply by 2):
(x - 3)/2 × 2 = 5 × 2
x - 3 = 10

Then, undo the -3 (add 3):
x - 3 + 3 = 10 + 3
x = 13

Check: (13 - 3)/2 = 10/2 = 5 ✓

Example 5: 5 - 2x = 11 (variable on both sides in a way)

Step 1: Subtract 5 from both sides:
5 - 2x - 5 = 11 - 5
-2x = 6

Step 2: Divide by -2:
-2x ÷ (-2) = 6 ÷ (-2)
x = -3

Check: 5 - 2(-3) = 5 + 6 = 11 ✓

Let me give you a Malawi example. A farmer's monthly profit is given by P = 10n - 200, where n is bags of maize sold. If the profit is 300 kwacha, how many bags were sold?

10n - 200 = 300
10n = 500
n = 50 bags.

Another example: The cost of hiring a minibus is C = 5000 + 200d, where d is kilometres travelled. If the cost is 15,000 kwacha, how many kilometres?
5000 + 200d = 15000
200d = 10000
d = 50 kilometres.

Remember: "Do the opposite operation in the reverse order of BODMAS."`,
    summary: 'To solve two-step equations, first undo addition or subtraction, then undo multiplication or division. Always check your answer by substituting back into the original equation. The order of inverse operations is the reverse of the order in BODMAS.',
    estimatedTime: '24 mins',
    malawiExamples: [
      { title: 'Business Profit', description: 'Profit = 20n - 500. If profit is 700, solve 20n - 500 = 700 → 20n = 1,200 → n = 60 items sold.' },
      { title: 'Temperature Conversion', description: 'C = (F - 32) × 5/9. If C = 25, solve 25 = (F - 32) × 5/9 → F = 77°F' },
      { title: 'Transport Cost', description: 'Cost = 1000 + 150d. If cost is 4,000, solve for d = 20 km.' }
    ],
    practiceQuestions: [
      { question: 'Solve: 4x - 7 = 13', answer: 'x = 5', hint: 'First add 7, then divide by 4' },
      { question: 'Solve: (x + 5)/3 = 7', answer: 'x = 16', hint: 'First multiply by 3, then subtract 5' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Linear Equations',
    lessonNumber: 3,
    lessonTitle: 'Equations with Variables on Both Sides',
    lessonId: 'mathematics-f1-linear-equations-3',
    order: 9,
    learningObjectives: [
      'Solve equations with variables on both sides',
      'Collect variable terms on one side and constants on the other',
      'Apply inverse operations correctly',
      'Solve real-life problems with variables on both sides'
    ],
    introduction: 'Welcome to the final lesson on linear equations! Now we will solve equations where variables appear on BOTH sides, like 3x + 2 = x + 10. These equations may look tricky, but with the right strategy, you will solve them easily. The key is to get all the variable terms on one side and all the constants on the other.',
    keyPoints: [
      'Collect all variable terms on one side (usually the left)',
      'Collect all constant terms on the other side (usually the right)',
      'Use inverse operations to move terms from one side to the other',
      'Simplify both sides before solving',
      'Check your answer in the original equation'
    ],
    detailedContent: `Let me teach you how to solve equations with VARIABLES ON BOTH SIDES.

The strategy: GET VARIABLES ON ONE SIDE, CONSTANTS ON THE OTHER.

Example 1: 3x + 2 = x + 10

Step 1: Get variables on one side. Subtract x from both sides:
3x + 2 - x = x + 10 - x
2x + 2 = 10

Step 2: Get constants on the other side. Subtract 2 from both sides:
2x + 2 - 2 = 10 - 2
2x = 8

Step 3: Solve for x:
2x ÷ 2 = 8 ÷ 2
x = 4

Check: 3(4) + 2 = 12 + 2 = 14; 4 + 10 = 14 ✓

Example 2: 5x - 3 = 2x + 9

Step 1: Subtract 2x from both sides (move x terms left):
5x - 3 - 2x = 2x + 9 - 2x
3x - 3 = 9

Step 2: Add 3 to both sides (move constants right):
3x - 3 + 3 = 9 + 3
3x = 12

Step 3: Divide by 3:
x = 4

Check: 5(4) - 3 = 20 - 3 = 17; 2(4) + 9 = 8 + 9 = 17 ✓

Example 3: 4x + 5 = 6x - 7

Step 1: Subtract 4x from both sides (move x terms right):
4x + 5 - 4x = 6x - 7 - 4x
5 = 2x - 7

Step 2: Add 7 to both sides:
5 + 7 = 2x - 7 + 7
12 = 2x

Step 3: Divide by 2:
x = 6

Check: 4(6) + 5 = 24 + 5 = 29; 6(6) - 7 = 36 - 7 = 29 ✓

Example 4 (with brackets): 2(x + 3) = 3(x - 2)

Step 1: Expand both sides:
2x + 6 = 3x - 6

Step 2: Subtract 2x from both sides:
6 = x - 6

Step 3: Add 6 to both sides:
12 = x

Check: 2(12 + 3) = 2(15) = 30; 3(12 - 2) = 3(10) = 30 ✓

Example 5: 4x - 3 = 2x + 7

Step 1: Subtract 2x from both sides:
2x - 3 = 7

Step 2: Add 3 to both sides:
2x = 10

Step 3: Divide by 2:
x = 5

Check: 4(5) - 3 = 20 - 3 = 17; 2(5) + 7 = 10 + 7 = 17 ✓

Let me give you a Malawi example. Two farmers have maize. Farmer A has 50 bags + 10 per day. Farmer B has 30 bags + 15 per day. After how many days will they have the same?

Let d = number of days
50 + 10d = 30 + 15d
50 - 30 = 15d - 10d
20 = 5d
d = 4 days

Another example: Two minibuses start from the same town. Bus A charges 200 kwacha per passenger plus a 500 kwacha base fee. Bus B charges 250 kwacha per passenger plus a 200 kwacha base fee. How many passengers for equal cost?

200p + 500 = 250p + 200
500 - 200 = 250p - 200p
300 = 50p
p = 6 passengers

Remember: "Move variables to one side, constants to the other, then solve."`,
    summary: 'To solve equations with variables on both sides, collect variable terms on one side and constants on the other using inverse operations. Expand any brackets first. Always check your answer in the original equation.',
    estimatedTime: '25 mins',
    malawiExamples: [
      { title: 'Saving Money', description: 'Chifundo saves 1,000 + 200 per week. Mphatso saves 400 + 250 per week. When will they have equal savings? 1000 + 200w = 400 + 250w → 600 = 50w → w = 12 weeks.' },
      { title: 'Water Tanks', description: 'Tank A has 500L and fills at 20L/min. Tank B has 300L and fills at 30L/min. When equal? 500 + 20t = 300 + 30t → 200 = 10t → t = 20 minutes.' },
      { title: 'Mobile Phone Plans', description: 'Plan A: 2,000 + 100 per minute. Plan B: 1,000 + 150 per minute. When equal cost? 2000 + 100m = 1000 + 150m → 1000 = 50m → m = 20 minutes.' }
    ],
    practiceQuestions: [
      { question: 'Solve: 5x + 3 = 2x + 18', answer: 'x = 5', hint: 'Subtract 2x, then subtract 3, then divide' },
      { question: 'Solve: 3(x - 2) = 2(x + 4)', answer: 'x = 14', hint: 'Expand first, then subtract variables' }
    ]
  },

  // Topic: Angles and Polygons (3 lessons)
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Angles and Polygons',
    lessonNumber: 1,
    lessonTitle: 'Types of Angles and Angle Relationships',
    lessonId: 'mathematics-f1-angles-polygons-1',
    order: 10,
    learningObjectives: [
      'Identify different types of angles (acute, right, obtuse, reflex)',
      'Measure and draw angles using a protractor',
      'Apply angle rules: angles on a straight line, angles at a point',
      'Identify vertically opposite angles'
    ],
    introduction: 'Hello, geometry explorer! Have you ever looked at a house, a soccer field, or a honeycomb and noticed the shapes? Every shape has angles! Angles are everywhere - where two walls meet, where the roof slopes, even where your arm bends. Today, I will help you understand angles and the rules that govern them.',
    keyPoints: [
      'An acute angle is less than 90°',
      'A right angle is exactly 90°',
      'An obtuse angle is between 90° and 180°',
      'A reflex angle is greater than 180°',
      'Angles on a straight line add up to 180°',
      'Angles at a point add up to 360°',
      'Vertically opposite angles are equal'
    ],
    detailedContent: `Let me start by explaining what an ANGLE is. When two lines meet at a point, they form an angle. We measure angles in degrees (°).

TYPES OF ANGLES:

ACUTE ANGLE: less than 90° (like the sharp corner of a book)
Example: 30°, 45°, 60°

RIGHT ANGLE: exactly 90° (like the corner of a piece of paper)

OBTUSE ANGLE: between 90° and 180° (like an open door)
Example: 120°, 150°

REFLEX ANGLE: more than 180° (like the larger angle around a clock)
Example: 270°, 300°

MEASURING ANGLES:
You use a PROTRACTOR to measure angles. A protractor is a semi-circle marked from 0° to 180° in both directions.

Steps to measure an angle:
1. Place the centre of the protractor at the vertex (corner point)
2. Align the base line with one ray of the angle
3. Read where the other ray crosses the scale
4. Use the correct scale (starting from 0)

ANGLE RULES:

RULE 1: ANGLES ON A STRAIGHT LINE add up to 180°.
If a straight line is divided by a ray, the two angles formed sum to 180°.
These are called SUPPLEMENTARY angles.
Example: If one angle is 70°, the other is 110°.

RULE 2: ANGLES AT A POINT add up to 360°.
If several rays meet at a point, all the angles around that point sum to 360°.
Example: Four angles at a point that are 90° each (90+90+90+90=360°).

RULE 3: VERTICALLY OPPOSITE ANGLES are equal.
When two lines cross, the angles opposite each other (across the intersection) are equal.

Let me draw an example in your mind. Two lines cross like an "X". The top angle equals the bottom angle. The left angle equals the right angle.

Let me give you Malawi examples:

- In building a house, carpenters use right angles (90°) to make sure walls are straight.
- In football, when a player shoots from different angles, they think about the angle to the goal.
- In agriculture, the angle of the sun affects how much sunlight crops receive.

A PROTIP: When you see two lines crossing, remember that the angles opposite each other are equal. This is called VERTICALLY OPPOSITE ANGLES.

Now let me show you how to use these rules.

Example 1: Find angle x if it is on a straight line with a 120° angle.
x + 120° = 180°
x = 60°

Example 2: Find angle y if angles around a point are 90°, 110°, and y.
90 + 110 + y = 360°
200 + y = 360°
y = 160°

Example 3: Two lines cross, forming angles of 40° and x. Find x.
Vertically opposite angles are equal, so x = 40°.

Understanding angles helps you in many real-life situations, from constructing buildings to playing sports.`,
    summary: 'Angles are measured in degrees (°). Acute (<90°), right (90°), obtuse (90°-180°), reflex (>180°). Angles on a straight line sum to 180°. Angles at a point sum to 360°. Vertically opposite angles are equal. A protractor measures angles.',
    estimatedTime: '25 mins',
    malawiExamples: [
      { title: 'House Construction', description: 'Carpenters use right angles (90°) to ensure walls are perpendicular to the floor.' },
      { title: 'Football Shooting', description: 'Players consider the angle to the goal when deciding where to shoot.' },
      { title: 'Roof Design', description: 'The pitch (angle) of a roof determines how well rainwater drains.' }
    ],
    practiceQuestions: [
      { question: 'What type of angle is 45°?', answer: 'Acute', hint: 'Less than 90°' },
      { question: 'Two angles on a straight line are 35° and x. Find x.', answer: '145°', hint: 'Angles on a straight line sum to 180°' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Angles and Polygons',
    lessonNumber: 2,
    lessonTitle: 'Parallel Lines and Transversals',
    lessonId: 'mathematics-f1-angles-polygons-2',
    order: 11,
    learningObjectives: [
      'Identify corresponding, alternate, and co-interior angles',
      'State the properties of angles formed by parallel lines and a transversal',
      'Calculate unknown angles using angle properties',
      'Apply angle rules to solve problems'
    ],
    introduction: 'Welcome back! Have you ever noticed railway tracks? They are always the same distance apart - they are PARALLEL lines. When a third line (called a TRANSVERSAL) crosses parallel lines, it creates special angle relationships. Today, I will teach you about these relationships - corresponding angles, alternate angles, and co-interior angles.',
    keyPoints: [
      'Parallel lines never meet and are always the same distance apart',
      'A transversal is a line that crosses two or more other lines',
      'Corresponding angles are equal',
      'Alternate angles are equal',
      'Co-interior angles add up to 180° (supplementary)'
    ],
    detailedContent: `Let me introduce you to parallel lines and transversals.

PARALLEL LINES are lines that never meet. They are always the same distance apart. In Malawi, you see parallel lines in:
- Railway tracks (when present)
- The lines on a notebook
- The edges of a road
- The rows of maize in a field

A TRANSVERSAL is a line that crosses two or more other lines. When a transversal crosses parallel lines, it creates eight angles. These angles have special relationships.

Let me describe the three important relationships:

1. CORRESPONDING ANGLES (F-shape)
Corresponding angles are in the same position relative to the transversal and the parallel lines. They form an "F" shape.
RULE: Corresponding angles are EQUAL.

Imagine a transversal crossing two parallel lines from left to right. The top-left angle on the first line corresponds to the top-left angle on the second line. They are equal.

2. ALTERNATE ANGLES (Z-shape)
Alternate angles are on opposite sides of the transversal and inside the parallel lines. They form a "Z" shape.
RULE: Alternate angles are EQUAL.

3. CO-INTERIOR ANGLES (C-shape)
Co-interior angles are on the same side of the transversal and inside the parallel lines. They form a "C" shape.
RULE: Co-interior angles are SUPPLEMENTARY (add to 180°).

Let me give you a memory tool:
- Corresponding: Same position, like matching seats in two rows (EQUAL)
- Alternate: Opposite sides, like a Z letter (EQUAL)
- Co-interior: Together inside, like a C letter (SUM TO 180°)

Now let me show you how to calculate unknown angles.

Example 1: Two parallel lines with a transversal. One angle is 70°. Find the corresponding angle.
Corresponding angles are equal, so the corresponding angle is also 70°.

Example 2: Two parallel lines with a transversal. One angle is 70°. Find the alternate angle.
Alternate angles are equal, so the alternate angle is also 70°.

Example 3: Two parallel lines with a transversal. One angle is 70°. Find the co-interior angle.
Co-interior angles sum to 180°, so 180° - 70° = 110°.

Example 4: Find all angles if one angle is 120°.
- Corresponding: 120°
- Alternate: 120°
- Co-interior: 180° - 120° = 60°
- The angle adjacent to 120° on the same line: 60° (since angles on a straight line sum to 180°)
- Vertically opposite: 120° and 60°

Let me give you a Malawi example. In a maize field, the rows are parallel. The path through the field (transversal) creates angles. Farmers might use these angles to plan irrigation channels.

Another example: The lines on a soccer field (touchline and goal line) are perpendicular (90°). Corner flags are placed at right angles.

Remember the patterns:
- F pattern (corresponding) → EQUAL
- Z pattern (alternate) → EQUAL
- C pattern (co-interior) → ADD TO 180°`,
    summary: 'Parallel lines never meet. A transversal crosses parallel lines creating angles. Corresponding angles (F-shape) are equal. Alternate angles (Z-shape) are equal. Co-interior angles (C-shape) sum to 180°. These properties help calculate unknown angles.',
    estimatedTime: '24 mins',
    malawiExamples: [
      { title: 'Maize Field Rows', description: 'Rows of maize are parallel. The path through the field acts as a transversal.' },
      { title: 'Road Design', description: 'Where a road crosses railway tracks, the angles follow parallel line rules.' },
      { title: 'Tiling Floors', description: 'Tiles laid in parallel rows create angle patterns.' }
    ],
    practiceQuestions: [
      { question: 'What do we call angles that form an "F" shape?', answer: 'Corresponding angles', hint: 'Same position on parallel lines' },
      { question: 'If a co-interior angle is 110°, what is the other co-interior angle?', answer: '70°', hint: 'Co-interior angles sum to 180°' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Angles and Polygons',
    lessonNumber: 3,
    lessonTitle: 'Polygons and Their Angles',
    lessonId: 'mathematics-f1-angles-polygons-3',
    order: 12,
    learningObjectives: [
      'Define polygons and classify them by number of sides',
      'Calculate the sum of interior angles of any polygon',
      'Find the size of each interior angle in a regular polygon',
      'Find the size of each exterior angle of a regular polygon'
    ],
    introduction: 'Hello, shape master! Today we are going to study POLYGONS - shapes with straight sides. Triangles, squares, pentagons, hexagons - these are all polygons. Did you know that the sum of angles inside any polygon follows a simple formula? Today, I will teach you this formula and show you how to calculate angles in any polygon, from a triangle to a decagon.',
    keyPoints: [
      'A polygon is a closed shape with straight sides',
      'Triangles (3 sides), Quadrilaterals (4 sides), Pentagons (5 sides), Hexagons (6 sides)',
      'Sum of interior angles of an n-sided polygon = (n - 2) × 180°',
      'In a regular polygon, all sides and all interior angles are equal',
      'Each interior angle of a regular n-sided polygon = (n - 2) × 180° ÷ n',
      'The sum of exterior angles of any polygon is always 360°'
    ],
    detailedContent: `Let me introduce you to POLYGONS.

A POLYGON is a closed shape with straight sides. The word comes from Greek: "poly" means many, "gon" means angle.

Here are polygons with different numbers of sides:
- Triangle (3 sides)
- Quadrilateral (4 sides) - squares, rectangles, etc.
- Pentagon (5 sides)
- Hexagon (6 sides)
- Heptagon (7 sides)
- Octagon (8 sides)
- Nonagon (9 sides)
- Decagon (10 sides)

INTERIOR ANGLES (inside the polygon):

The sum of all interior angles in any polygon follows this formula:

SUM OF INTERIOR ANGLES = (n - 2) × 180°, where n = number of sides

Let me prove this to you:

Triangle (n=3): (3-2) × 180° = 1 × 180° = 180° ✓
Quadrilateral (n=4): (4-2) × 180° = 2 × 180° = 360° ✓
Pentagon (n=5): (5-2) × 180° = 3 × 180° = 540° ✓
Hexagon (n=6): (6-2) × 180° = 4 × 180° = 720° ✓

Now, what about REGULAR POLYGONS?

A REGULAR polygon has all sides equal AND all angles equal.

For a regular polygon, each interior angle = [(n - 2) × 180°] ÷ n

Examples:
- Regular triangle (equilateral): (3-2)×180 ÷ 3 = 180 ÷ 3 = 60° each
- Regular quadrilateral (square): (4-2)×180 ÷ 4 = 360 ÷ 4 = 90° each
- Regular pentagon: (5-2)×180 ÷ 5 = 540 ÷ 5 = 108° each
- Regular hexagon: (6-2)×180 ÷ 6 = 720 ÷ 6 = 120° each

EXTERIOR ANGLES:

An exterior angle is formed by extending one side of the polygon. The exterior angle and interior angle are supplementary (add to 180°).

IMPORTANT RULE: The sum of exterior angles of ANY polygon is always 360°.

For a regular polygon, each exterior angle = 360° ÷ n

Check with a square: 360 ÷ 4 = 90° exterior angle. Interior angle = 180 - 90 = 90° ✓

Let me give you a Malawi example. The honeycomb pattern in beehives uses regular hexagons. Each interior angle is 120°, each exterior angle is 60°. This shape allows bees to store the most honey using the least wax.

Another example: Soccer balls are made of pentagons and hexagons. The pattern is called a truncated icosahedron.

Road signs often use triangles (warning signs), octagons (stop signs), and rectangles (speed limit signs).

Now let me show you how to solve problems.

Example 1: Find the sum of interior angles of a heptagon (7 sides).
n = 7, sum = (7-2) × 180 = 5 × 180 = 900°

Example 2: Find each interior angle of a regular octagon.
n = 8, sum = (8-2) × 180 = 6 × 180 = 1080°
Each interior angle = 1080 ÷ 8 = 135°

Example 3: Find the number of sides if the sum of interior angles is 1260°.
1260 = (n-2) × 180
1260 ÷ 180 = n-2
7 = n-2
n = 9 sides (nonagon)

Example 4: Find each exterior angle of a regular pentagon.
Each exterior angle = 360 ÷ 5 = 72°

Remember: The sum of interior angles formula works for ALL polygons, regular or irregular. The sum of exterior angles is ALWAYS 360°.`,
    summary: 'A polygon has n sides. Sum of interior angles = (n-2) × 180°. Each interior angle of a regular polygon = (n-2) × 180° ÷ n. Sum of exterior angles always = 360°. Each exterior angle of a regular polygon = 360° ÷ n.',
    estimatedTime: '24 mins',
    malawiExamples: [
      { title: 'Beehives', description: 'Honeycombs use regular hexagons (120° interior angles) to maximize space.' },
      { title: 'Road Signs', description: 'Stop signs are octagons (135° interior angles). Warning signs are triangles.' },
      { title: 'Tile Patterns', description: 'Floor tiles often use squares (90°) or hexagons (120°).' }
    ],
    practiceQuestions: [
      { question: 'What is the sum of interior angles of an octagon?', answer: '1080°', hint: 'n=8, (8-2)×180 = 1080' },
      { question: 'Find each interior angle of a regular hexagon.', answer: '120°', hint: 'Sum = 720°, divide by 6 = 120°' }
    ]
  },

  // Topic: Statistics (3 lessons)
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Statistics',
    lessonNumber: 1,
    lessonTitle: 'Collecting and Organizing Data',
    lessonId: 'mathematics-f1-statistics-1',
    order: 13,
    learningObjectives: [
      'Collect data through surveys and observations',
      'Organize data into frequency tables',
      'Distinguish between primary and secondary data',
      'Identify different types of data (qualitative vs quantitative)'
    ],
    introduction: 'Good day, data detective! Have you ever wondered how teachers calculate your average score? Or how the government knows how many people live in Malawi? They use STATISTICS - the science of collecting, organizing, and understanding data. Today, we will start with the first step: collecting and organizing data.',
    keyPoints: [
      'Data are pieces of information collected for analysis',
      'Primary data is collected firsthand by the researcher',
      'Secondary data is collected from existing sources',
      'Qualitative data describes categories (e.g., colours, names)',
      'Quantitative data uses numbers (e.g., height, weight, age)',
      'A frequency table shows how often each value occurs'
    ],
    detailedContent: `Let me introduce you to DATA and how to collect it.

DATA are pieces of information. When you ask your classmates their favourite subject, you are collecting data.

TYPES OF DATA BY SOURCE:

PRIMARY DATA: Data you collect yourself directly from the source.
Examples in Malawi:
- Conducting a survey of maize yields from 50 farmers
- Measuring the height of students in your class
- Counting the number of people at a market

SECONDARY DATA: Data collected by someone else that you use.
Examples:
- Population statistics from the National Statistical Office
- Rainfall data from the Department of Climate Change
- Exam results from the Malawi National Examinations Board (MANEB)

TYPES OF DATA BY NATURE:

QUALITATIVE DATA (Categorical): Data that describes qualities or categories.
Examples: Favourite food (nsima, rice, chips), type of crop (maize, tobacco, groundnuts), gender (male, female)

QUANTITATIVE DATA (Numerical): Data that uses numbers.
Examples: Height (150 cm, 160 cm), weight (50 kg, 60 kg), age (14 years, 15 years)
Quantitative data can be DISCRETE (whole numbers like 1,2,3) or CONTINUOUS (measurements like 1.5, 2.3).

ORGANIZING DATA: FREQUENCY TABLES

When you have collected data, you need to organize it. A FREQUENCY TABLE shows how many times each value occurs.

Example: You survey 20 students about how many siblings they have:
3, 2, 4, 2, 1, 3, 2, 4, 2, 3, 1, 2, 3, 4, 2, 1, 3, 2, 2, 3

Create a frequency table:

| Number of Siblings | Tally | Frequency |
|-------------------|-------|-----------|
| 1                 | III   | 3         |
| 2                 | IIII II| 7         |
| 3                 | IIII   | 5         |
| 4                 | III    | 3         |
| 5 or more         | 0     | 0         |
| TOTAL             |       | 20        |

The frequency table makes the data much easier to read and understand.

In Malawi, the National Statistical Office conducts the Malawi Demographic and Health Survey (MDHS) every few years. They collect data from thousands of households. This data helps the government plan schools, hospitals, and roads.

When you collect data, always:
1. Decide what you want to know
2. Plan how to collect the data (survey, observation, measurement)
3. Collect the data carefully
4. Organize the data in a frequency table
5. Check for errors

Now it is your turn! Try collecting data from your classmates about their favourite Malawian food: nsima, rice, cassava, or potatoes. Make a frequency table.`,
    summary: 'Data are pieces of information. Primary data is collected firsthand; secondary data comes from existing sources. Qualitative data describes categories; quantitative data uses numbers. Organize data using frequency tables that show how often each value occurs.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'National Census', description: 'The government conducts a census every 10 years to count the population.' },
      { title: 'School Survey', description: 'You can survey classmates about their favourite subject to collect primary data.' },
      { title: 'Weather Records', description: 'Rainfall data from the Department of Climate Change is secondary data.' }
    ],
    practiceQuestions: [
      { question: 'What is the difference between primary and secondary data?', answer: 'Primary is collected firsthand; secondary comes from existing sources', hint: 'One you collect yourself, one you get from others' },
      { question: 'Is "eye colour" qualitative or quantitative data?', answer: 'Qualitative', hint: 'It describes a category, not a number' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Statistics',
    lessonNumber: 2,
    lessonTitle: 'Measures of Central Tendency: Mean, Median, Mode',
    lessonId: 'mathematics-f1-statistics-2',
    order: 14,
    learningObjectives: [
      'Calculate the mean (average) of a data set',
      'Find the median (middle value) of a data set',
      'Identify the mode (most frequent value) of a data set',
      'Choose the appropriate average for different situations'
    ],
    introduction: 'Hello again! Now that we have collected and organized data, we need to understand what it tells us. AVERAGES help us find a "typical" value in our data. Today, I will teach you three types of averages: the MEAN (average), the MEDIAN (middle), and the MODE (most common). Each tells us something different about the data.',
    keyPoints: [
      'Mean = sum of all values ÷ number of values (the "average")',
      'Median = the middle value when data is arranged in order',
      'Mode = the value that appears most frequently',
      'The mean can be affected by extreme values (outliers)',
      'The median is better for data with outliers',
      'The mode is useful for categorical data'
    ],
    detailedContent: `Let me explain the three measures of central tendency: MEAN, MEDIAN, and MODE.

1. THE MEAN (AVERAGE)

The mean is what most people mean when they say "average". To find the mean:
- Add up all the numbers
- Divide by how many numbers there are

Formula: Mean = (Sum of all values) ÷ (Number of values)

Example: Test scores: 65, 70, 55, 80, 75
Sum = 65 + 70 + 55 + 80 + 75 = 345
Number of scores = 5
Mean = 345 ÷ 5 = 69%

2. THE MEDIAN (MIDDLE)

The median is the middle number when the data is arranged in order.

Steps:
- Arrange the numbers from smallest to largest
- Find the middle number
- If there are two middle numbers, average them

Example (odd number of values): 55, 65, 70, 75, 80
The middle number is 70. So median = 70

Example (even number of values): 55, 65, 70, 75, 80, 85
The two middle numbers are 70 and 75
Median = (70 + 75) ÷ 2 = 145 ÷ 2 = 72.5

3. THE MODE (MOST FREQUENT)

The mode is the value that appears most often.

Example: Shoe sizes: 5, 6, 7, 7, 7, 8, 9
The number 7 appears three times (more than any other). So mode = 7

If all values appear once, there is no mode.
If two values tie for most frequent, the data is bimodal.

WHICH AVERAGE TO USE?

MEAN: Use when data is evenly spread and no outliers. Good for test scores, heights, weights.

MEDIAN: Use when there are outliers (extreme values). Example: House prices (one very expensive house would raise the mean but not the median).

MODE: Use for categorical data. Example: "Most students walk to school" uses the mode.

Let me give you Malawi examples.

Example 1 (Mean): Five farmers harvested maize (kg): 400, 450, 380, 420, 500.
Mean = (400+450+380+420+500) ÷ 5 = 2150 ÷ 5 = 430 kg

Example 2 (Median): Daily wages (kwacha): 1000, 1200, 1100, 5000, 1300
Arrange: 1000, 1100, 1200, 1300, 5000
Median = 1200 kwacha
The mean would be (1000+1100+1200+1300+5000) ÷ 5 = 9600 ÷ 5 = 1920 kwacha. The 5000 outlier makes the mean higher than typical. The median (1200) better represents typical wages.

Example 3 (Mode): Transport to school: walking (15), bicycle (8), minibus (5), car (2)
Mode = "walking" (appears 15 times, most frequent)

In Malawi, the mean is used to calculate average class sizes, average crop yields, etc. The median is used for income data where a few very rich people would skew the mean.`,
    summary: 'Mean = sum ÷ count (average). Median = middle value in ordered data. Mode = most frequent value. Mean is affected by outliers; median is better for skewed data; mode works for categorical data.',
    estimatedTime: '24 mins',
    malawiExamples: [
      { title: 'Average Crop Yield', description: 'Farmers calculate mean harvest to plan for next season.' },
      { title: 'Income Data', description: 'Median income is often reported because a few high earners would increase the mean.' },
      { title: 'Common Travel Method', description: 'Mode identifies how most students travel to school.' }
    ],
    practiceQuestions: [
      { question: 'Find the mean of 10, 15, 20, 25', answer: '17.5', hint: 'Sum = 70, divide by 4 = 17.5' },
      { question: 'Find the median of 8, 12, 5, 10, 15', answer: '10', hint: 'Arrange: 5,8,10,12,15 → middle is 10' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 1',
    topic: 'Statistics',
    lessonNumber: 3,
    lessonTitle: 'Data Presentation: Bar Charts and Pie Charts',
    lessonId: 'mathematics-f1-statistics-3',
    order: 15,
    learningObjectives: [
      'Draw and interpret bar charts',
      'Draw and interpret pie charts',
      'Calculate angles for pie chart sectors',
      'Choose the appropriate chart for different types of data'
    ],
    introduction: 'Welcome back, data detective! Collecting and summarizing data is only the first step. To communicate what you found, you need to PRESENT the data clearly. Today, I will teach you how to create BAR CHARTS and PIE CHARTS - two of the most common ways to show data visually. People understand pictures faster than numbers!',
    keyPoints: [
      'Bar charts use bars of different heights to show frequencies',
      'Pie charts show proportions as slices of a circle',
      'For a pie chart, each sector angle = (frequency ÷ total) × 360°',
      'Bar charts are good for comparing categories',
      'Pie charts are good for showing parts of a whole'
    ],
    detailedContent: `Let me teach you how to present data using BAR CHARTS and PIE CHARTS.

BAR CHARTS:

A bar chart uses bars (rectangles) of different heights to represent frequencies. The taller the bar, the higher the frequency.

Steps to draw a bar chart:
1. Draw horizontal axis (x-axis) for categories
2. Draw vertical axis (y-axis) for frequency
3. Choose a scale for the vertical axis
4. Draw bars of appropriate height for each category
5. Leave spaces between bars (unlike a histogram)

Example: Transport to school
Walking: 15 students
Bicycle: 8 students
Minibus: 5 students
Car: 2 students

Draw a bar chart with:
- Category names on x-axis
- Frequency from 0 to 16 on y-axis
- Bars of heights 15, 8, 5, 2

You would clearly see that walking is the most common, followed by bicycle.

PIE CHARTS:

A pie chart shows how a whole (100%) is divided into parts. The whole circle represents all the data, and each slice represents a category.

To draw a pie chart, you need to calculate the ANGLE for each slice:
Angle = (Frequency ÷ Total) × 360°

Example: Same transport data, total students = 15+8+5+2 = 30

Walking: (15 ÷ 30) × 360° = 0.5 × 360° = 180° (half the circle!)
Bicycle: (8 ÷ 30) × 360° = 0.2667 × 360° = 96°
Minibus: (5 ÷ 30) × 360° = 0.1667 × 360° = 60°
Car: (2 ÷ 30) × 360° = 0.0667 × 360° = 24°

Check: 180° + 96° + 60° + 24° = 360° ✓

Now draw the circle using a compass. Use a protractor to measure each angle. Label each slice with the category and sometimes the frequency or percentage.

WHICH CHART TO USE?

BAR CHART is better when:
- You have many categories
- You want to compare frequencies
- The order of categories matters
- You have nominal data (no natural order)

PIE CHART is better when:
- You have few categories (2-6)
- You want to show parts of a whole (percentages)
- The total adds to 100%
- You want to emphasize proportions

Let me give you Malawi examples.

Example: A bar chart of crop production in different districts (Blantyre, Lilongwe, Mzuzu, Zomba) would clearly show which district produces the most.

Example: A pie chart of land use for a single farm (maize: 50%, tobacco: 30%, groundnuts: 20%) would clearly show how land is divided.

In Malawi, the National Statistical Office uses bar charts to compare population across districts and pie charts to show the percentage of people in different occupations.

A PROTIP: Always include a title and label your axes! Without labels, a chart is just pretty shapes - not information.`,
    summary: 'Bar charts use bar heights to compare frequencies. Pie charts use sector angles to show proportions. For a pie chart, angle = (frequency ÷ total) × 360°. Choose bar charts for comparisons, pie charts for parts of a whole.',
    estimatedTime: '23 mins',
    malawiExamples: [
      { title: 'Crop Comparison', description: 'A bar chart can compare maize production across districts.' },
      { title: 'Land Use', description: 'A pie chart shows how a farmer divides land among different crops.' },
      { title: 'School Population', description: 'A bar chart shows how many students are in each form.' }
    ],
    practiceQuestions: [
      { question: 'What angle represents 25% of a pie chart?', answer: '90°', hint: '360 × 0.25 = 90°' },
      { question: 'When is a bar chart better than a pie chart?', answer: 'When comparing many categories', hint: 'Pie charts get crowded with many slices' }
    ]
  },

  // -------------------- MATHEMATICS FORM 2 --------------------
  // Topic: Pythagoras Theorem (2 lessons)
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Pythagoras Theorem',
    lessonNumber: 1,
    lessonTitle: 'Introduction to Pythagoras Theorem',
    lessonId: 'mathematics-f2-pythagoras-1',
    order: 16,
    learningObjectives: [
      'State Pythagoras theorem',
      'Identify the hypotenuse of a right-angled triangle',
      'Apply Pythagoras theorem to find the hypotenuse',
      'Solve problems involving Pythagoras theorem'
    ],
    introduction: 'Hello, geometry detective! Over 2,500 years ago, a Greek mathematician named Pythagoras discovered a secret about right-angled triangles that we still use today. He found that there is a special relationship between the three sides. Today, I will share this secret with you!',
    keyPoints: [
      'Pythagoras theorem applies only to right-angled triangles',
      'The hypotenuse is the longest side, opposite the right angle',
      'Theorem: a² + b² = c², where c is the hypotenuse',
      'To find the hypotenuse: c = √(a² + b²)',
      'This theorem helps find distances that cannot be measured directly'
    ],
    detailedContent: `Let me introduce you to one of the most famous formulas in all of mathematics: the PYTHAGORAS THEOREM.

First, let me explain what a RIGHT-ANGLED TRIANGLE is. It is a triangle with one angle exactly 90 degrees (a square corner). The side opposite this right angle is called the HYPOTENUSE. It is always the longest side.

The theorem says: In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.

In mathematical language: a² + b² = c², where c is the hypotenuse.

Let me show you how to use this.

Example 1: Find the hypotenuse. A triangle has sides of 3 units and 4 units.
a = 3, b = 4
c² = 3² + 4² = 9 + 16 = 25
c = √25 = 5 units

This is a famous triple: 3-4-5 triangle.

Example 2: A right-angled triangle has sides 6 and 8. Find the hypotenuse.
c² = 6² + 8² = 36 + 64 = 100
c = √100 = 10 units (another triple!)

Example 3: A right-angled triangle has sides 5 and 12.
c² = 25 + 144 = 169
c = √169 = 13 units

These are called Pythagorean Triples - sets of whole numbers that satisfy a² + b² = c².

Let me give you a real-life example from Malawi. Imagine you are standing at one corner of a rectangular maize field. You need to walk to the opposite corner. Instead of walking along the edges, you want to take the diagonal path.

If the field is 60 metres long and 80 metres wide, how long is the diagonal path?

c² = 60² + 80² = 3600 + 6400 = 10,000
c = √10,000 = 100 metres

By taking the diagonal, you save 60 + 80 - 100 = 40 metres! That is why understanding Pythagoras can save you time and energy.

Another example: A ladder is leaning against a wall. The bottom of the ladder is 3 metres from the wall, and the ladder reaches 4 metres up the wall. How long is the ladder?

c² = 3² + 4² = 9 + 16 = 25
c = 5 metres

The ladder is 5 metres long.

Pythagoras theorem is used in construction, navigation, surveying, and many other fields. Builders use the 3-4-5 triangle to check if walls are perpendicular (at right angles). If a triangle with sides 3, 4, and 5 is formed, the angle is exactly 90 degrees.`,
    summary: 'Pythagoras theorem (a² + b² = c²) applies to right-angled triangles, where c is the hypotenuse. To find the hypotenuse, square the other two sides, add them, and take the square root. This theorem helps solve many real-world distance problems.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Field Diagonal', description: 'Walking diagonally across a field saves distance compared to walking around the edges.' },
      { title: 'Ladder Safety', description: 'Ensuring a ladder is at the right angle for safety uses Pythagoras.' },
      { title: 'Construction', description: 'Builders use 3-4-5 triangles to create right angles.' }
    ],
    practiceQuestions: [
      { question: 'Find the hypotenuse of a right triangle with sides 5 and 12', answer: '13', hint: '25 + 144 = 169, √169 = 13' },
      { question: 'What is the hypotenuse if sides are 8 and 15?', answer: '17', hint: '64 + 225 = 289, √289 = 17' }
    ]
  },
  {
    subject: 'Mathematics',
    form: 'Form 2',
    topic: 'Pythagoras Theorem',
    lessonNumber: 2,
    lessonTitle: 'Finding Shorter Sides and Applications',
    lessonId: 'mathematics-f2-pythagoras-2',
    order: 17,
    learningObjectives: [
      'Use Pythagoras theorem to find a shorter side',
      'Rearrange the formula to isolate a or b',
      'Apply Pythagoras theorem to practical problems',
      'Verify if a triangle is right-angled using Pythagoras'
    ],
    introduction: 'Welcome back! Now that you know how to find the hypotenuse, what if you need to find one of the shorter sides? The formula still works - you just need to rearrange it. Today, I will show you how to find a missing shorter side and how to use Pythagoras to check if a triangle is right-angled.',
    keyPoints: [
      'To find a shorter side: a² = c² - b² or b² = c² - a²',
      'Always identify the hypotenuse first (largest number)',
      'Check if a triangle is right-angled: does a² + b² = c²?',
      'This theorem works for any right-angled triangle, not just whole numbers'
    ],
    detailedContent: `Let me teach you how to find a SHORTER side using Pythagoras theorem.

When you know the hypotenuse and one shorter side, you can find the other side.

The formula: a² = c² - b² (or b² = c² - a²)

Example 1: A right-angled triangle has hypotenuse 13 and one side 5. Find the other side.
a² = 13² - 5² = 169 - 25 = 144
a = √144 = 12

Example 2: Hypotenuse = 25, one side = 7. Find the other side.
a² = 25² - 7² = 625 - 49 = 576
a = √576 = 24

Example 3: A television screen is measured diagonally. A TV has a diagonal of 20 inches and width of 16 inches. Find the height.
h² = 20² - 16² = 400 - 256 = 144
h = √144 = 12 inches

Example 4: A kite string is 50 metres long. The kite is flying 30 metres above the ground. How far is the person from the point directly under the kite?
distance² = 50² - 30² = 2500 - 900 = 1600
distance = √1600 = 40 metres

CHECKING IF A TRIANGLE IS RIGHT-ANGLED:

You can use the converse of Pythagoras theorem: If a² + b² = c² (where c is the largest side), then the triangle is right-angled.

Example: A triangle has sides 7, 24, 25.
Check: 7² + 24² = 49 + 576 = 625
25² = 625
Since they are equal, the triangle is right-angled.

If the sum of the squares of the two smaller sides is less than the square of the largest side, the triangle is obtuse (angle > 90°).
If greater than, the triangle is acute (angle < 90°).

Let me give you a Malawi example. A farmer has a triangular piece of land with sides 30 m, 40 m, and 50 m. Is it right-angled?
30² + 40² = 900 + 1600 = 2500
50² = 2500
Yes! The land is right-angled. The farmer can use this to plan irrigation channels.

Another example: A carpenter needs to check if a corner is square (90°). He measures 60 cm along one wall and 80 cm along the other. If the distance between these points is 100 cm, the corner is square.
60² + 80² = 3600 + 6400 = 10,000
100² = 10,000 ✓

Remember: Always check which side is the hypotenuse! The hypotenuse is always the largest number and opposite the right angle.`,
    summary: 'To find a shorter side, use a² = c² - b². To check if a triangle is right-angled, verify if a² + b² = c² (with c the largest side). Pythagoras theorem has many practical applications in construction, navigation, and everyday measurements.',
    estimatedTime: '22 mins',
    malawiExamples: [
      { title: 'Finding Land Dimensions', description: 'If a farmer knows the diagonal and one side of a field, he can calculate the other side.' },
      { title: 'Checking Square Corners', description: 'Builders use 3-4-5 triangles to ensure corners are right angles.' },
      { title: 'Kite Flying', description: 'If you know the string length and height, you can find the horizontal distance.' }
    ],
    practiceQuestions: [
      { question: 'Find the missing side: hypotenuse 17, one side 8', answer: '15', hint: '289 - 64 = 225, √225 = 15' },
      { question: 'Is a triangle with sides 8, 15, 17 right-angled?', answer: 'Yes', hint: '64 + 225 = 289, 289 = 17²' }
    ]
  }
,

// ======================================================================
// MATHEMATICS FORM 2 - CONTINUED
// ======================================================================

// Topic: Similar Triangles (2 lessons)
{
  subject: 'Mathematics',
  form: 'Form 2',
  topic: 'Similar Triangles',
  lessonNumber: 1,
  lessonTitle: 'Identifying Similar Triangles',
  lessonId: 'mathematics-f2-similar-triangles-1',
  order: 18,
  learningObjectives: [
    'Define similar triangles',
    'Identify similar triangles using AAA, SSS, and SAS tests',
    'State that corresponding angles are equal and sides are proportional',
    'Find the scale factor between similar triangles'
  ],
  introduction: 'Welcome, shape detective! Have you ever looked at a map and a real place and noticed they have the same shape but different sizes? Or seen a photograph enlarged to poster size? That is SIMILARITY - when shapes have the same form but different sizes. Today, I will teach you how to recognize similar triangles.',
  keyPoints: [
    'Similar triangles have the same shape but different sizes',
    'Corresponding angles are EQUAL',
    'Corresponding sides are in the SAME PROPORTION (scale factor)',
    'AAA test: All three angles equal',
    'SSS test: All three sides proportional',
    'SAS test: Two sides proportional and included angle equal'
  ],
  detailedContent: `Let me explain what SIMILAR TRIANGLES are. Two triangles are similar if:
- Their corresponding angles are EQUAL
- Their corresponding sides are in the SAME RATIO (proportion)

Imagine taking a photo of a house and then enlarging it. The enlarged photo has the same shape, but everything is bigger. That is similarity!

There are three tests to check if triangles are similar:

TEST 1: AAA (Angle-Angle-Angle)
If all three angles of one triangle equal the three angles of another triangle, they are similar.
Note: If two angles are equal, the third must also be equal (angles in a triangle sum to 180°).

TEST 2: SSS (Side-Side-Side)
If the ratios of all three pairs of corresponding sides are equal, they are similar.

TEST 3: SAS (Side-Angle-Side)
If two sides are in the same proportion and the INCLUDED angle (the angle between them) is equal, they are similar.

Let me show you examples.

Example 1: Triangle ABC has angles 50°, 60°, 70°. Triangle DEF has angles 50°, 60°, 70°.
By AAA test, the triangles are similar.

Example 2: Triangle PQR has sides 3, 4, 5. Triangle XYZ has sides 6, 8, 10.
Ratios: 6/3 = 2, 8/4 = 2, 10/5 = 2 (all equal)
By SSS test, the triangles are similar, scale factor 2.

Example 3: Triangle ABC has sides 4 and 5 with included angle 30°. Triangle DEF has sides 8 and 10 with included angle 30°.
Ratio 8/4 = 2, 10/5 = 2, included angle equal
By SAS test, the triangles are similar, scale factor 2.

In Malawi, maps use similarity. The map is a smaller, similar version of the actual land. If a map has scale 1:100,000, that means 1 cm on the map represents 100,000 cm (1 km) on the ground.`,
  summary: 'Similar triangles have equal corresponding angles and proportional corresponding sides. Three tests confirm similarity: AAA (angles equal), SSS (sides proportional), and SAS (two sides proportional, included angle equal). The scale factor is the ratio of corresponding sides.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Maps', description: 'A map of Malawi is similar to the actual country, just much smaller.' },
    { title: 'Enlarged Photos', description: 'When you enlarge a photo, the enlarged version is similar to the original.' },
    { title: 'Building Models', description: 'Architects make small-scale models similar to actual buildings.' }
  ],
  practiceQuestions: [
    { question: 'What does AAA stand for in similarity tests?', answer: 'Angle-Angle-Angle', hint: 'All three angles' },
    { question: 'If triangle A sides are 2,3,4 and triangle B sides are 4,6,8, are they similar?', answer: 'Yes', hint: 'All ratios are 2' }
  ]
},
{
  subject: 'Mathematics',
  form: 'Form 2',
  topic: 'Similar Triangles',
  lessonNumber: 2,
  lessonTitle: 'Using Similar Triangles to Find Unknown Lengths',
  lessonId: 'mathematics-f2-similar-triangles-2',
  order: 19,
  learningObjectives: [
    'Use similarity to find unknown lengths',
    'Set up and solve proportions',
    'Apply similarity to real-life measurement problems',
    'Use the scale factor to enlarge or reduce shapes'
  ],
  introduction: 'Welcome back! Now that you can identify similar triangles, let us use them to find unknown lengths. Similarity allows us to measure things that are too big, too far, or too dangerous to measure directly. Today, I will show you how to use similarity to find heights, distances, and other measurements.',
  keyPoints: [
    'Corresponding sides of similar triangles are proportional',
    'Set up a proportion: side1/side2 = side3/side4',
    'Cross-multiply and solve for the unknown',
    'The scale factor k = second triangle side ÷ first triangle side',
    'Similarity is used in surveying, navigation, and indirect measurement'
  ],
  detailedContent: `Let me teach you how to use similar triangles to find unknown lengths.

The key principle: Corresponding sides are proportional.

If triangle ABC is similar to triangle DEF, then:
AB/DE = BC/EF = AC/DF

Example 1: Triangle ABC has sides 3, 4, 5. Triangle DEF is similar with scale factor 3. Find the sides of DEF.
Scale factor 3 means each side is multiplied by 3:
DE = 3 × 3 = 9
EF = 4 × 3 = 12
DF = 5 × 3 = 15

Example 2: Triangle PQR is similar to triangle XYZ. PQ = 6, QR = 8, XY = 9. Find YZ.
PQ/XY = QR/YZ
6/9 = 8/YZ
Cross multiply: 6 × YZ = 9 × 8 = 72
YZ = 72 ÷ 6 = 12

Now, let me show you a real-world application.

MEASURING A TREE HEIGHT (Indirect Measurement):

Suppose you want to measure the height of a tall tree, but you cannot climb it. You can use similar triangles!

How to do it:
1. Stand a stick vertically in the ground
2. Measure the height of the stick (say, 1 metre)
3. Measure the length of the stick's shadow (say, 1.5 metres)
4. Measure the length of the tree's shadow (say, 12 metres)

The sun's rays create similar triangles! The tree and its shadow form a triangle. The stick and its shadow form a triangle.

Set up a proportion:
Tree height / Stick height = Tree shadow / Stick shadow
Tree height / 1 = 12 / 1.5
Tree height = 12 ÷ 1.5 = 8 metres

Without climbing the tree, you know it is 8 metres tall!

MEASURING A RIVER WIDTH:

Suppose you need to measure the width of a river without swimming across. You can use similar triangles!

Method:
1. Stand at point A on one side
2. Place a stick at point B on your side
3. Sight across to a point C on the opposite side
4. Create a smaller similar triangle on your side

By measuring the sides of the smaller triangle, you can calculate the river width.

In Malawi, surveyors use similar triangles to measure land, farmers use it to estimate harvest volumes, and engineers use it to design bridges and roads.`,
  summary: 'Similar triangles allow indirect measurement. Set up a proportion from corresponding sides and solve. Use similarity to measure heights of trees or buildings, widths of rivers, and other inaccessible distances without direct measurement.',
  estimatedTime: '23 mins',
  malawiExamples: [
    { title: 'Tree Height', description: 'Use shadows to calculate tree height without climbing.' },
    { title: 'River Width', description: 'Use similar triangles to measure across a river without crossing.' },
    { title: 'Field Area', description: 'Estimate crop yield by measuring a small similar section.' }
  ],
  practiceQuestions: [
    { question: 'A 2 m stick casts a 3 m shadow. A tree casts a 15 m shadow. How tall is the tree?', answer: '10 m', hint: 'Tree/2 = 15/3 → Tree = 10 m' },
    { question: 'If triangle ABC ~ triangle DEF, AB=4, BC=6, DE=10, find EF.', answer: '15', hint: '4/10 = 6/EF → EF = 15' }
  ]
},

// Topic: Mensuration (2 lessons)
{
  subject: 'Mathematics',
  form: 'Form 2',
  topic: 'Mensuration',
  lessonNumber: 1,
  lessonTitle: 'Area and Perimeter of 2D Shapes',
  lessonId: 'mathematics-f2-mensuration-1',
  order: 20,
  learningObjectives: [
    'Calculate the perimeter of rectangles, squares, triangles, and circles',
    'Calculate the area of rectangles, squares, triangles, and circles',
    'Apply formulas to solve practical problems',
    'Distinguish between area and perimeter'
  ],
  introduction: 'Hello, measurement master! Have you ever wondered how much paint is needed to cover a wall? Or how much fencing is needed for a garden? These questions involve PERIMETER (distance around) and AREA (space inside). Today, I will teach you the formulas for common shapes.',
  keyPoints: [
    'Perimeter is the distance around a shape (measured in length units)',
    'Area is the space inside a shape (measured in square units)',
    'Rectangle: Perimeter = 2(l+w), Area = l × w',
    'Square: Perimeter = 4s, Area = s²',
    'Triangle: Perimeter = a+b+c, Area = ½ × base × height',
    'Circle: Circumference = 2πr or πd, Area = πr²'
  ],
  detailedContent: `Let me teach you how to calculate PERIMETER and AREA.

PERIMETER is the distance around the outside of a shape. Imagine walking around a field - the distance you walk is the perimeter.

AREA is the amount of space inside a shape. Imagine covering a floor with tiles - the number of tiles needed is the area.

Here are the formulas you need to remember:

1. RECTANGLE:
- Perimeter = 2 × (length + width) = 2(l + w)
- Area = length × width = l × w

Example: A rectangle has length 8 m, width 5 m.
Perimeter = 2(8+5) = 2 × 13 = 26 m
Area = 8 × 5 = 40 m²

2. SQUARE:
- Perimeter = 4 × side = 4s
- Area = side × side = s²

Example: A square has side 6 m.
Perimeter = 4 × 6 = 24 m
Area = 6 × 6 = 36 m²

3. TRIANGLE:
- Perimeter = side1 + side2 + side3
- Area = ½ × base × height

Example: A triangle has base 10 m, height 6 m.
Area = ½ × 10 × 6 = 30 m²

4. CIRCLE:
- Circumference (perimeter) = 2 × π × radius = 2πr, or π × diameter = πd
- Area = π × radius² = πr²
(π ≈ 3.14)

Example: A circle has radius 5 m.
Circumference = 2 × 3.14 × 5 = 31.4 m
Area = 3.14 × 5² = 3.14 × 25 = 78.5 m²

Let me give you Malawi examples.

Example 1 (Fencing): A farmer wants to fence a rectangular maize field that is 50 m long and 30 m wide. How much fencing is needed?
Perimeter = 2(50+30) = 2 × 80 = 160 m

Example 2 (Paint): A classroom wall is 8 m long and 3 m high. How many square metres need painting?
Area = 8 × 3 = 24 m²

Example 3 (Circular Garden): A farmer plants a circular vegetable garden with radius 7 m. What is the area?
Area = π × 7² = 3.14 × 49 = 153.86 m²

Remember: Perimeter uses regular length units (m, cm, km). Area uses square units (m², cm², km²). Never mix them!`,
  summary: 'Perimeter is distance around (length units). Area is space inside (square units). Rectangle: A=l×w, P=2(l+w). Square: A=s², P=4s. Triangle: A=½×b×h. Circle: A=πr², C=2πr. Use these formulas for construction, farming, and planning.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Fencing a Field', description: 'Calculate perimeter to know how much fence wire to buy.' },
    { title: 'Painting a Classroom', description: 'Calculate wall area to know how much paint is needed.' },
    { title: 'Circular Garden', description: 'Plan a circular vegetable garden by calculating its area.' }
  ],
  practiceQuestions: [
    { question: 'Find the area of a rectangle 12 m by 8 m', answer: '96 m²', hint: '12 × 8 = 96' },
    { question: 'Find the circumference of a circle radius 10 m (use π=3.14)', answer: '62.8 m', hint: '2 × 3.14 × 10 = 62.8' }
  ]
},
{
  subject: 'Mathematics',
  form: 'Form 2',
  topic: 'Mensuration',
  lessonNumber: 2,
  lessonTitle: 'Volume and Surface Area of 3D Shapes',
  lessonId: 'mathematics-f2-mensuration-2',
  order: 21,
  learningObjectives: [
    'Calculate the volume of cubes, cuboids, and cylinders',
    'Calculate the surface area of cubes, cuboids, and cylinders',
    'Distinguish between volume and surface area',
    'Apply mensuration to real-life storage and container problems'
  ],
  introduction: 'Hello, 3D explorer! Now that you understand 2D shapes, let us move to 3D shapes. Have you ever wondered how much water a tank can hold (volume) or how much metal is needed to make a container (surface area)? Today, I will teach you how to calculate volume and surface area of common 3D shapes.',
  keyPoints: [
    'Volume is the space inside a 3D shape (cubic units)',
    'Surface area is the total area of all faces (square units)',
    'Cube: Volume = s³, Surface Area = 6s²',
    'Cuboid: Volume = l × w × h, Surface Area = 2(lw + lh + wh)',
    'Cylinder: Volume = πr²h, Surface Area = 2πr² + 2πrh'
  ],
  detailedContent: `Let me help you understand VOLUME and SURFACE AREA.

VOLUME is the amount of space inside a 3D shape. Think of filling a tank with water - the amount of water is the volume. Volume is measured in CUBIC units (cm³, m³).

SURFACE AREA is the total area of all the surfaces (faces) of a 3D shape. Think of wrapping a gift - the amount of wrapping paper needed is the surface area. Surface area is measured in SQUARE units (cm², m²).

Here are the formulas:

1. CUBE (all sides equal, s = side length):
- Volume = s × s × s = s³
- Surface Area = 6 × s² (six faces, each with area s²)

Example: A cube with side 5 cm
Volume = 5³ = 125 cm³
Surface Area = 6 × 25 = 150 cm²

2. CUBOID (rectangular box, length l, width w, height h):
- Volume = l × w × h
- Surface Area = 2(lw + lh + wh)

Example: A box with length 10 cm, width 6 cm, height 4 cm
Volume = 10 × 6 × 4 = 240 cm³
Surface Area = 2(10×6 + 10×4 + 6×4) = 2(60 + 40 + 24) = 2 × 124 = 248 cm²

3. CYLINDER (circular prism, radius r, height h):
- Volume = π × r² × h = πr²h
- Surface Area = 2πr² + 2πrh (two circles + curved surface)

Example: A cylinder with radius 5 cm, height 10 cm
Volume = π × 5² × 10 = 3.14 × 25 × 10 = 785 cm³
Surface Area = 2π(5)² + 2π(5)(10) = 2π×25 + 2π×50 = 50π + 100π = 150π ≈ 471 cm²

Let me give you Malawi examples.

Example 1 (Water Tank): A cylindrical water tank has radius 1 m and height 2 m. How much water can it hold?
Volume = π × 1² × 2 = 3.14 × 2 = 6.28 m³
1 m³ = 1000 litres, so capacity = 6,280 litres

Example 2 (Fish Pond): A fish pond is a rectangular cuboid measuring 5 m long, 3 m wide, and 1.5 m deep. How much water is needed to fill it?
Volume = 5 × 3 × 1.5 = 22.5 m³ = 22,500 litres

Example 3 (Storage Box): A farmer needs a wooden box to store maize. The box is 1 m × 0.8 m × 0.5 m. How much wood is needed for the surface?
Surface Area = 2(1×0.8 + 1×0.5 + 0.8×0.5) = 2(0.8 + 0.5 + 0.4) = 2 × 1.7 = 3.4 m² of wood

Remember: Volume = how much fits INSIDE. Surface area = how much material to COVER the outside. Both are important for planning storage, construction, and packaging.`,
  summary: 'Volume is space inside a 3D shape (cubic units). Surface area is total area of all faces (square units). Cube: V=s³, SA=6s². Cuboid: V=lwh, SA=2(lw+lh+wh). Cylinder: V=πr²h, SA=2πr²+2πrh. These formulas help calculate storage capacity and material needs.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Water Tank Capacity', description: 'Calculate volume to know how many litres a tank holds.' },
    { title: 'Fish Pond Volume', description: 'Calculate pond volume to know how many fish it can support.' },
    { title: 'Storage Box', description: 'Calculate surface area to know how much wood is needed.' }
  ],
  practiceQuestions: [
    { question: 'Find the volume of a cube with side 4 m', answer: '64 m³', hint: '4 × 4 × 4 = 64' },
    { question: 'Find the volume of a cylinder radius 3 cm, height 7 cm (use π=3.14)', answer: '197.82 cm³', hint: '3.14 × 9 × 7 = 197.82' }
  ]
},

// -------------------- MATHEMATICS FORM 3 --------------------
// Topic: Quadratic Equations (3 lessons)
{
  subject: 'Mathematics',
  form: 'Form 3',
  topic: 'Quadratic Equations',
  lessonNumber: 1,
  lessonTitle: 'Solving Quadratic Equations by Factorization',
  lessonId: 'mathematics-f3-quadratic-equations-1',
  order: 22,
  learningObjectives: [
    'Identify quadratic equations in standard form',
    'Factorise quadratic expressions',
    'Solve quadratic equations by factorisation',
    'Check solutions by substitution'
  ],
  introduction: 'Hello, equation solver! You have already learned to solve linear equations. Now we are going to take a step up to QUADRATIC equations - where the variable is squared. These equations may seem harder, but they can solve many real-world problems that linear equations cannot.',
  keyPoints: [
    'A quadratic equation has the form ax² + bx + c = 0, where a ≠ 0',
    'The highest power of x is 2 (from Latin "quadratus" meaning square)',
    'Factorisation method: write as (x + p)(x + q) = 0',
    'p + q = b and p × q = c',
    'If product = 0, then either factor = 0'
  ],
  detailedContent: `Let me explain what makes a QUADRATIC equation special. The highest power of x is 2 - that is why it is called "quadratic".

The standard form is: ax² + bx + c = 0, where a, b, and c are numbers, and a cannot be zero.

Let me teach you the FACTORISATION method (when possible).

To solve x² + 5x + 6 = 0:

Step 1: Find two numbers that multiply to give c (6) and add to give b (5). Those numbers are 2 and 3.

Step 2: Write as (x + 2)(x + 3) = 0

Step 3: If the product is zero, either factor is zero:
x + 2 = 0 or x + 3 = 0

Step 4: Solve each:
x = -2 or x = -3

Check: (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓
(-3)² + 5(-3) + 6 = 9 - 15 + 6 = 0 ✓

The solutions are x = -2 and x = -3.

Another example: x² - 5x + 6 = 0
Find numbers that multiply to 6 and add to -5: -2 and -3
(x - 2)(x - 3) = 0
x = 2 or x = 3

Example with negative constant: x² + 2x - 8 = 0
Find numbers that multiply to -8 and add to 2: 4 and -2
(x + 4)(x - 2) = 0
x = -4 or x = 2

Example with a > 1: 2x² + 5x + 2 = 0
Multiply a × c = 4. Find numbers that multiply to 4 and add to 5: 4 and 1
Rewrite: 2x² + 4x + 1x + 2 = 0
Group: 2x(x + 2) + 1(x + 2) = 0
(2x + 1)(x + 2) = 0
x = -½ or x = -2

Let me give you a Malawi example. A farmer wants to fence a rectangular garden. The garden is 5 metres longer than it is wide, and the area is 84 square metres. What are the dimensions?

Let width = w, then length = w + 5
Area = w × (w + 5) = 84
w² + 5w - 84 = 0
Solve: (w + 12)(w - 7) = 0
w = -12 (not possible) or w = 7
So width = 7 m, length = 12 m

Not all quadratics factorise easily. When they don't, we use other methods (completing the square or the quadratic formula).`,
  summary: 'Quadratic equations have the form ax² + bx + c = 0. Factorisation method: find numbers that multiply to c and add to b. Write as (x + p)(x + q) = 0. Solutions are x = -p and x = -q. Not all quadratics factorise - use other methods when needed.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Garden Area', description: 'Find dimensions of a rectangular garden given area and length-width relationship.' },
    { title: 'Projectile Height', description: 'The height of a kicked football can be modelled by a quadratic equation.' },
    { title: 'Profit Maximisation', description: 'Quadratic equations help find the price that maximises profit.' }
  ],
  practiceQuestions: [
    { question: 'Solve x² + 7x + 12 = 0', answer: 'x = -3 or -4', hint: 'Numbers that multiply to 12, add to 7: 3 and 4' },
    { question: 'Solve x² - 7x + 12 = 0', answer: 'x = 3 or 4', hint: 'Numbers that multiply to 12, add to -7: -3 and -4' }
  ]
},
{
  subject: 'Mathematics',
  form: 'Form 3',
  topic: 'Quadratic Equations',
  lessonNumber: 2,
  lessonTitle: 'Solving Quadratic Equations by Completing the Square',
  lessonId: 'mathematics-f3-quadratic-equations-2',
  order: 23,
  learningObjectives: [
    'Complete the square for quadratic expressions',
    'Solve quadratic equations by completing the square',
    'Write quadratic expressions in vertex form',
    'Apply completing the square to real problems'
  ],
  introduction: 'Welcome back! Some quadratic equations cannot be factorised easily. For those, we use a method called COMPLETING THE SQUARE. This method works for EVERY quadratic equation. Today, I will teach you how to "complete the square" and use it to solve equations.',
  keyPoints: [
    'Completing the square rewrites ax² + bx as (x + p)² - p²',
    'For x² + bx: add (b/2)² to complete the square',
    'Always add the same amount to both sides of the equation',
    'This method works for all quadratic equations',
    'The vertex form is (x + p)² + q'
  ],
  detailedContent: `Let me teach you how to COMPLETE THE SQUARE.

The idea is to rewrite x² + bx as a perfect square minus something.

Remember: (x + p)² = x² + 2px + p²
So x² + bx = (x + b/2)² - (b/2)²

Let me show you step by step.

Example 1: Solve x² + 6x - 7 = 0

Step 1: Move the constant to the other side:
x² + 6x = 7

Step 2: Take half of b (b=6, half is 3), square it (3² = 9)
Add 9 to both sides:
x² + 6x + 9 = 7 + 9
x² + 6x + 9 = 16

Step 3: The left side is now a perfect square:
(x + 3)² = 16

Step 4: Take square root of both sides:
x + 3 = ±4

Step 5: Solve:
x = -3 + 4 = 1 or x = -3 - 4 = -7

Check: 1² + 6(1) - 7 = 1+6-7=0 ✓
(-7)² + 6(-7) - 7 = 49 - 42 - 7 = 0 ✓

Example 2: Solve x² - 8x + 10 = 0

Step 1: x² - 8x = -10
Step 2: Half of -8 is -4, square = 16. Add 16 to both sides:
x² - 8x + 16 = -10 + 16 = 6
Step 3: (x - 4)² = 6
Step 4: x - 4 = ±√6
Step 5: x = 4 ± √6 ≈ 4 ± 2.45 = 6.45 or 1.55

Example 3: Solve 2x² + 8x - 5 = 0

Step 1: Divide by 2: x² + 4x - 2.5 = 0
Step 2: x² + 4x = 2.5
Step 3: Half of 4 is 2, square = 4. Add 4 to both sides:
x² + 4x + 4 = 2.5 + 4 = 6.5
Step 4: (x + 2)² = 6.5
Step 5: x + 2 = ±√6.5
x = -2 ± 2.55 = 0.55 or -4.55

Why is this useful? The vertex form (x + p)² + q tells us the maximum or minimum point of a quadratic function. For a farmer maximising profit or an engineer minimising materials, this is essential.

In Malawi, completing the square is used in physics (projectile motion), economics (profit maximisation), and engineering (bridge design).`,
  summary: 'Completing the square rewrites ax² + bx by adding (b/2)². Steps: move constant, add (b/2)² to both sides, write as (x + p)² = value, take square root, solve. This method works for all quadratic equations.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Maximising Profit', description: 'The vertex form shows the price that gives maximum profit.' },
    { title: 'Projectile Motion', description: 'The maximum height of a kicked ball can be found from vertex form.' },
    { title: 'Area Optimisation', description: 'Find dimensions that maximise area for a given perimeter.' }
  ],
  practiceQuestions: [
    { question: 'What number should be added to complete x² + 8x?', answer: '16', hint: '(8/2)² = 16' },
    { question: 'Solve (x - 2)² = 25', answer: 'x = 7 or -3', hint: 'x - 2 = ±5' }
  ]
},
{
  subject: 'Mathematics',
  form: 'Form 3',
  topic: 'Quadratic Equations',
  lessonNumber: 3,
  lessonTitle: 'The Quadratic Formula',
  lessonId: 'mathematics-f3-quadratic-equations-3',
  order: 24,
  learningObjectives: [
    'State the quadratic formula',
    'Use the quadratic formula to solve equations',
    'Calculate the discriminant to determine the number of solutions',
    'Apply the quadratic formula to real problems'
  ],
  introduction: 'Welcome to the final lesson on quadratic equations! Today, I will give you the most powerful tool of all: the QUADRATIC FORMULA. This formula can solve ANY quadratic equation, even the ones that don\'t factorise and would be messy with completing the square. Memorize this formula - it will serve you well!',
  keyPoints: [
    'The quadratic formula: x = [-b ± √(b² - 4ac)] / 2a',
    'The discriminant (Δ) = b² - 4ac determines the number of solutions',
    'If Δ > 0: two distinct real solutions',
    'If Δ = 0: one real solution (double root)',
    'If Δ < 0: no real solutions (solutions are complex)'
  ],
  detailedContent: `Let me teach you the QUADRATIC FORMULA.

For any quadratic equation ax² + bx + c = 0, the formula is:

x = [-b ± √(b² - 4ac)] / 2a

The symbol ± means "plus or minus" - it gives two answers.

The expression under the square root, b² - 4ac, is called the DISCRIMINANT (Greek letter Delta, Δ).

Let me show you examples.

Example 1: Solve x² + 5x + 6 = 0
Here a = 1, b = 5, c = 6

x = [-5 ± √(5² - 4×1×6)] / (2×1)
x = [-5 ± √(25 - 24)] / 2
x = [-5 ± √1] / 2
x = [-5 ± 1] / 2
x = (-5 + 1)/2 = -4/2 = -2
x = (-5 - 1)/2 = -6/2 = -3

Example 2: Solve 2x² - 5x - 3 = 0
a = 2, b = -5, c = -3

x = [5 ± √((-5)² - 4×2×(-3))] / (2×2)
x = [5 ± √(25 + 24)] / 4
x = [5 ± √49] / 4
x = [5 ± 7] / 4
x = (5+7)/4 = 12/4 = 3
x = (5-7)/4 = -2/4 = -0.5

Example 3: Solve x² - 4x + 4 = 0
a = 1, b = -4, c = 4
Δ = 16 - 16 = 0 (one solution)
x = [4 ± √0] / 2 = 4/2 = 2

Example 4: Solve 2x² + 5x + 3 = 0
a = 2, b = 5, c = 3
Δ = 25 - 24 = 1
x = [-5 ± √1] / 4 = [-5 ± 1] / 4
x = (-5+1)/4 = -4/4 = -1
x = (-5-1)/4 = -6/4 = -1.5

THE DISCRIMINANT:

- If Δ > 0: TWO different real solutions
- If Δ = 0: ONE solution (repeated root)
- If Δ < 0: NO real solutions (the graph does not touch the x-axis)

Let me give you a Malawi example. A farmer throws a maize seed upward. The height h metres after t seconds is h = -5t² + 20t + 2. When does the seed hit the ground? (h = 0)
-5t² + 20t + 2 = 0
Multiply by -1: 5t² - 20t - 2 = 0
a=5, b=-20, c=-2
t = [20 ± √(400 + 40)] / 10 = [20 ± √440] / 10
t = [20 ± 20.98] / 10
t = 4.1 seconds or -0.1 seconds (ignore negative)
The seed hits the ground after about 4.1 seconds.

The quadratic formula is your universal tool for any quadratic equation. Memorize it!`,
  summary: 'The quadratic formula x = [-b ± √(b² - 4ac)] / 2a solves any quadratic equation. The discriminant Δ = b² - 4ac determines the number of solutions: Δ > 0 (two solutions), Δ = 0 (one solution), Δ < 0 (no real solutions). This formula is essential for science, engineering, and economics.',
  estimatedTime: '25 mins',
  malawiExamples: [
    { title: 'Projectile Motion', description: 'Calculate when a thrown object hits the ground.' },
    { title: 'Profit Maximisation', description: 'Find the break-even points for a business.' },
    { title: 'Area Problems', description: 'Solve for dimensions given area relationships.' }
  ],
  practiceQuestions: [
    { question: 'Solve x² - 3x - 10 = 0 using the formula', answer: 'x = 5 or -2', hint: 'a=1, b=-3, c=-10' },
    { question: 'What is the discriminant of x² + 4x + 5 = 0?', answer: '-4', hint: '16 - 20 = -4' }
  ]
},

// Topic: Circle Geometry - Chord Properties (2 lessons)
{
  subject: 'Mathematics',
  form: 'Form 3',
  topic: 'Circle Geometry',
  lessonNumber: 1,
  lessonTitle: 'Chord Properties of Circles',
  lessonId: 'mathematics-f3-circle-geometry-1',
  order: 25,
  learningObjectives: [
    'Identify parts of a circle: chord, radius, diameter, arc',
    'State that the perpendicular from centre to a chord bisects the chord',
    'State that equal chords are equidistant from the centre',
    'Calculate chord lengths using Pythagoras theorem'
  ],
  introduction: 'Good day, geometry explorer! Have you ever looked at a wheel, a pizza, or the moon and wondered about the mathematics hidden inside circles? Today, we will explore chords - the straight lines that connect two points on a circle. Understanding chords helps you design wheels, arches, and even circular buildings.',
  keyPoints: [
    'A chord is a straight line joining any two points on a circle',
    'The diameter is the longest chord (passes through centre)',
    'The perpendicular from the centre to a chord bisects the chord',
    'Equal chords are equidistant from the centre',
    'Chords that are equidistant from the centre are equal'
  ],
  detailedContent: `Let me introduce you to CHORDS.

A CHORD is a straight line joining any two points on the circumference of a circle.

The DIAMETER is a special chord that passes through the centre. It is the longest possible chord.

THEOREM 1: The perpendicular from the centre of a circle to a chord bisects the chord.

Imagine a circle with centre O. Draw a chord AB. Draw a line from O perpendicular to AB, meeting AB at point M. Then M is the midpoint of AB (AM = MB).

THEOREM 2: Equal chords are equidistant from the centre.

If two chords AB and CD have equal length, then their distances from the centre O are equal.

THEOREM 3 (Converse): Chords that are equidistant from the centre are equal in length.

Let me show you how to use these properties.

Example 1: A circle has radius 10 cm. A chord is 12 cm from the centre. What is the length of the chord?

Draw a perpendicular from centre to chord. This creates a right-angled triangle with:
- Radius (10 cm) as hypotenuse
- Distance from centre to chord (12 cm) is one side
- Wait - 12 cm is longer than the radius? That cannot happen!
The distance from centre to chord must be less than the radius (otherwise the chord doesn't exist).
So correct example: distance = 6 cm

Half the chord = √(10² - 6²) = √(100 - 36) = √64 = 8 cm
Full chord = 16 cm

Example 2: A circle has radius 13 cm. A chord is 24 cm long. How far is the chord from the centre?

Half the chord = 12 cm
Distance² = 13² - 12² = 169 - 144 = 25
Distance = 5 cm

Example 3: Two chords are 8 cm and 6 cm from the centre. Which is longer?
The chord that is closer to the centre (6 cm) is longer.

In Malawi, engineers use chord properties when designing:
- Round grain silos (to calculate distances)
- Circular water tanks (for support structures)
- Arches for bridges and buildings
- Roundabouts on roads

Construction workers use the "equal chords" property to ensure circular structures are balanced.`,
  summary: 'A chord joins two points on a circle. The perpendicular from the centre to a chord bisects it. Equal chords are equidistant from the centre. Use Pythagoras theorem with radius and half-chord to find missing lengths. These properties are essential for circular design.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Grain Silo', description: 'Calculate the length of support beams inside a circular silo.' },
    { title: 'Roundabout Design', description: 'Design lanes with equal width using chord properties.' },
    { title: 'Water Tank', description: 'Calculate distances for internal partitions in circular tanks.' }
  ],
  practiceQuestions: [
    { question: 'A chord is 12 cm from centre, radius is 13 cm. Find chord length.', answer: '10 cm', hint: 'Half chord = √(169-144)=5, full=10' },
    { question: 'Two chords are 5 cm and 8 cm from centre. Which is longer?', answer: 'The one 5 cm from centre', hint: 'Closer to centre = longer' }
  ]
},
{
  subject: 'Mathematics',
  form: 'Form 3',
  topic: 'Circle Geometry',
  lessonNumber: 2,
  lessonTitle: 'Angle Properties of Circles',
  lessonId: 'mathematics-f3-circle-geometry-2',
  order: 26,
  learningObjectives: [
    'State that the angle at the centre is twice the angle at the circumference',
    'State that angles in the same segment are equal',
    'State that the angle in a semicircle is a right angle',
    'Apply angle properties to solve circle geometry problems'
  ],
  introduction: 'Welcome back! Now that you understand chord properties, let us explore ANGLE properties of circles. These are some of the most beautiful theorems in geometry. Did you know that any angle drawn in a semicircle is always a right angle (90°)? Today, I will prove these amazing facts to you.',
  keyPoints: [
    'Angle at the centre is twice angle at the circumference (subtended by same arc)',
    'Angles in the same segment (same arc) are equal',
    'Angle in a semicircle is 90° (right angle)',
    'Opposite angles of a cyclic quadrilateral sum to 180°'
  ],
  detailedContent: `Let me teach you the important ANGLE PROPERTIES of circles.

THEOREM 1: The angle at the centre is TWICE the angle at the circumference (when both angles subtend the same arc).

Draw a circle with centre O. Pick two points A and B on the circle (forming an arc AB). Pick another point C on the circle (on the opposite arc). Then:
Angle AOB (at centre) = 2 × Angle ACB (at circumference)

THEOREM 2: Angles in the same segment are EQUAL.

Pick points A, B, C, and D all on the same arc. Then:
Angle ACB = Angle ADB

THEOREM 3: The angle in a SEMICIRCLE is 90° (a right angle).

If AB is a diameter (passes through centre), then for any point C on the circle:
Angle ACB = 90°

THEOREM 4: Opposite angles of a CYCLIC QUADRILATERAL sum to 180°.

A cyclic quadrilateral has all four vertices on the circle.
If ABCD is a cyclic quadrilateral, then:
∠A + ∠C = 180° and ∠B + ∠D = 180°

Let me show you how to use these theorems.

Example 1: Angle at centre is 80°. Find the angle at circumference subtended by the same arc.
Angle at circumference = 80° ÷ 2 = 40°

Example 2: Angle at circumference is 35°. Find the angle at centre.
Angle at centre = 2 × 35° = 70°

Example 3: In a cyclic quadrilateral, one angle is 110°. Find the opposite angle.
Opposite angle = 180° - 110° = 70°

Example 4: AB is a diameter, and C is a point on the circle. If angle CAB = 30°, find angle CBA.
Angle in semicircle = 90°, so angle ACB = 90°
Angles in triangle sum to 180°, so angle CBA = 180° - 90° - 30° = 60°

Let me give you a Malawi example. A roundabout has a circular shape. A building is located at point C on the circumference. The angle subtended by the road at the centre is 120°. What is the angle at the building?
Angle at centre = 2 × angle at circumference
120° = 2 × angle C
Angle C = 60°

These angle properties are used in navigation, surveying, and design. Sailors use them for navigation. Engineers use them for bridge and tunnel design.`,
  summary: 'Angle at centre = 2 × angle at circumference (same arc). Angles in same segment are equal. Angle in a semicircle is 90°. Opposite angles of a cyclic quadrilateral sum to 180°. These theorems are fundamental in circle geometry and practical applications.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Roundabout Design', description: 'Calculate viewing angles for drivers on circular roads.' },
    { title: 'Bridge Design', description: 'Use cyclic quadrilateral properties for arch bridges.' },
    { title: 'Navigation', description: 'Sailors use angles in circles to navigate.' }
  ],
  practiceQuestions: [
    { question: 'Angle at centre is 100°, find angle at circumference.', answer: '50°', hint: 'Halve the centre angle' },
    { question: 'In a cyclic quadrilateral, two opposite angles sum to?', answer: '180°', hint: 'Opposite angles of cyclic quadrilateral' }
  ]
}
,
// ======================================================================
// PHYSICS - COMPLETE (Forms 1, 2, 3, 4)
// ======================================================================

// -------------------- PHYSICS FORM 1 --------------------
// Topic: Energy (3 lessons)
{
  subject: 'Physics',
  form: 'Form 1',
  topic: 'Energy',
  lessonNumber: 1,
  lessonTitle: 'Forms of Energy',
  lessonId: 'physics-f1-energy-1',
  order: 1,
  learningObjectives: [
    'Define energy and state its SI unit',
    'Identify different forms of energy',
    'Give examples of energy in everyday Malawian life',
    'Distinguish between potential and kinetic energy'
  ],
  introduction: 'Good day, energy explorer! Energy is everywhere - in the food you eat, in the fuel that powers cars, in the sunlight that warms your skin. Without energy, nothing would happen. Today, I will help you understand what energy is and the different forms it takes.',
  keyPoints: [
    'Energy is the ability to do work or cause change',
    'The SI unit of energy is the joule (J)',
    'Kinetic energy is the energy of motion',
    'Potential energy is stored energy waiting to be used',
    'Chemical energy is stored in food and fuel',
    'Thermal energy is heat energy',
    'Electrical energy comes from flowing electrons',
    'Light and sound are also forms of energy'
  ],
  detailedContent: `Let me help you understand ENERGY. Energy is the ability to do WORK or cause CHANGE. When you have energy, you can make things happen.

Let me explain the different FORMS OF ENERGY:

1. KINETIC ENERGY: The energy of MOTION.
- A moving bicycle has kinetic energy
- A running person has kinetic energy
- A flowing river has kinetic energy
- The faster something moves, the more kinetic energy it has

2. POTENTIAL ENERGY: STORED energy waiting to be used.
- A ball on a high shelf has gravitational potential energy
- A stretched rubber band has elastic potential energy
- Water held behind a dam has gravitational potential energy

3. CHEMICAL ENERGY: Energy stored in chemical bonds.
- Food (nsima, vegetables, meat) contains chemical energy
- Batteries contain chemical energy
- Petrol and diesel contain chemical energy
- Your body converts chemical energy from food into movement

4. THERMAL (HEAT) ENERGY: Energy from the movement of particles.
- The hotter something is, the more thermal energy it has
- A cup of tea has thermal energy
- The sun radiates thermal energy

5. ELECTRICAL ENERGY: Energy from the flow of electrons.
- Lightning is electrical energy
- The electricity in power lines is electrical energy
- Batteries produce electrical energy

6. LIGHT ENERGY: Energy from electromagnetic waves.
- The sun produces light energy
- Light bulbs produce light energy
- Fire produces light energy

7. SOUND ENERGY: Energy from vibrations.
- Speaking produces sound energy
- Drums produce sound energy
- Music is sound energy

In Malawi, we use many forms of energy daily:
- We eat nsima (chemical energy) to get energy to work
- We use firewood (chemical energy) to cook food (thermal energy)
- ESCOM provides electrical energy for lights and appliances
- The sun provides light energy for growing crops

Remember: Energy is never lost - it just changes from one form to another. This is the Law of Conservation of Energy!`,
  summary: 'Energy is the ability to do work, measured in joules (J). Forms include kinetic (motion), potential (stored), chemical (food/fuel), thermal (heat), electrical, light, and sound. Energy transforms from one form to another but is never created or destroyed.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Nsima for Energy', description: 'Your body converts chemical energy from nsima into kinetic energy for walking and working.' },
    { title: 'Firewood', description: 'Firewood contains chemical energy that is released as thermal energy for cooking.' },
    { title: 'Solar Energy', description: 'Malawi has abundant sunlight that can be converted into electrical energy using solar panels.' }
  ],
  practiceQuestions: [
    { question: 'What type of energy does a moving bicycle have?', answer: 'Kinetic energy', hint: 'Energy of motion' },
    { question: 'What type of energy is stored in food?', answer: 'Chemical energy', hint: 'Energy in chemical bonds' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 1',
  topic: 'Energy',
  lessonNumber: 2,
  lessonTitle: 'Energy Transformations',
  lessonId: 'physics-f1-energy-2',
  order: 2,
  learningObjectives: [
    'Describe energy transfers and transformations',
    'State and apply the law of conservation of energy',
    'Draw energy flow diagrams',
    'Identify energy transformations in everyday appliances'
  ],
  introduction: 'Hello again! Now that you know the different forms of energy, let us see how energy CHANGES from one form to another. This is called ENERGY TRANSFORMATION. The most important rule in physics is that energy cannot be created or destroyed - only transformed. Today, I will show you how this works in everything around us.',
  keyPoints: [
    'The Law of Conservation of Energy: energy cannot be created or destroyed, only transformed',
    'Total energy before = Total energy after (energy is conserved)',
    'Energy transformations happen in all devices and natural processes',
    'An energy flow diagram shows the input, useful output, and wasted energy'
  ],
  detailedContent: `Let me teach you about ENERGY TRANSFORMATIONS.

The most important law in physics is THE LAW OF CONSERVATION OF ENERGY.

This law states: ENERGY CANNOT BE CREATED OR DESTROYED. IT CAN ONLY BE TRANSFORMED FROM ONE FORM TO ANOTHER.

The total amount of energy in the universe always stays the same. It just changes form.

Let me show you examples of energy transformations:

EXAMPLE 1: EATING NSIMA
- Input: Chemical energy in nsima
- Transformation: Body breaks down food
- Output: Kinetic energy (walking, working) + Thermal energy (body heat)

EXAMPLE 2: SWITCHING ON A TORCH
- Input: Chemical energy in battery
- Transformation: Chemical → Electrical (through wires) → Light (in bulb) + Thermal (heat from bulb)
- Output: Light energy (useful) + Thermal energy (wasted)

EXAMPLE 3: HYDROELECTRIC POWER (Nkula Falls, Malawi)
- Input: Gravitational potential energy (water held behind dam)
- Transformation: Potential → Kinetic (falling water) → Mechanical (turbine spinning) → Electrical (generator)
- Output: Electrical energy for homes and businesses

EXAMPLE 4: A CAR ENGINE
- Input: Chemical energy (petrol/diesel)
- Transformation: Chemical → Thermal (burning fuel) → Mechanical (engine moving) + Sound (engine noise) + Thermal (exhaust heat)
- Output: Mechanical energy (useful) + Sound and heat (wasted)

ENERGY FLOW DIAGRAMS:

We can show energy transformations using diagrams:

Electrical energy → Light energy + Thermal energy
(A torch)

Chemical energy → Kinetic energy + Thermal energy
(Eating food)

Gravitational potential → Kinetic → Electrical
(Hydroelectric dam)

In Malawi, energy transformations happen in many places:
- At Nkula Falls hydroelectric plant (potential → electrical)
- In your home when you cook (chemical → thermal)
- In your body when you work (chemical → kinetic)
- In a solar panel (light → electrical)

REMEMBER: Some energy is always "wasted" as heat or sound, but it is not destroyed - it just goes into the environment. The useful output + wasted output = total input.`,
  summary: 'The Law of Conservation of Energy: energy cannot be created or destroyed, only transformed from one form to another. Energy flow diagrams show input, useful output, and wasted energy. Understanding energy transformations helps us design more efficient devices.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Nkula Falls Dam', description: 'Gravitational potential energy of stored water becomes kinetic, then electrical energy.' },
    { title: 'Cooking on Firewood', description: 'Chemical energy in wood becomes thermal energy for cooking and light energy.' },
    { title: 'Solar Panels', description: 'Many homes in Malawi use solar panels to transform light energy into electrical energy.' }
  ],
  practiceQuestions: [
    { question: 'A torch transforms chemical energy into what two forms?', answer: 'Light energy and thermal energy', hint: 'The bulb produces light and heat' },
    { question: 'What happens to the "lost" energy in a car engine?', answer: 'It becomes heat and sound in the environment', hint: 'Energy is not destroyed, just transformed' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 1',
  topic: 'Energy',
  lessonNumber: 3,
  lessonTitle: 'Sources of Energy - Renewable and Non-Renewable',
  lessonId: 'physics-f1-energy-3',
  order: 3,
  learningObjectives: [
    'Identify renewable and non-renewable energy sources',
    'Compare advantages and disadvantages of different energy sources',
    'Explain the importance of energy conservation',
    'Relate energy sources to Malawi\'s energy situation'
  ],
  introduction: 'Welcome back! Where does our energy come from? In Malawi, we use firewood, charcoal, electricity from hydroelectric dams, solar panels, and petrol for cars. Today, I will help you understand the different SOURCES of energy, which ones are renewable (can be replaced), and which are non-renewable (will run out).',
  keyPoints: [
    'Renewable energy sources can be replenished naturally',
    'Non-renewable energy sources are finite and will eventually run out',
    'Renewable: solar, wind, hydroelectric, geothermal, biomass',
    'Non-renewable: coal, oil, natural gas, nuclear (uranium)',
    'Malawi uses hydroelectric (renewable) and biomass (renewable) mainly',
    'Energy conservation means using less energy'
  ],
  detailedContent: `Let me classify ENERGY SOURCES into two main types: RENEWABLE and NON-RENEWABLE.

RENEWABLE ENERGY SOURCES (can be replaced naturally):

1. SOLAR ENERGY: Energy from the sun.
- Malawi has abundant sunlight year-round
- Used in solar panels to generate electricity
- Used to heat water (solar water heaters)
- Clean and free after installation, but panels are expensive initially

2. HYDROELECTRIC ENERGY: Energy from falling water.
- Malawi's main source of electricity (Nkula, Tedzani, Kapichira dams)
- Clean and reliable during rainy season
- Affected by drought when water levels drop

3. BIOMASS ENERGY: Energy from living or recently living things.
- Firewood, charcoal, agricultural waste
- Malawi's most common energy source (cooking, heating)
- Widely available but deforestation is a problem

4. WIND ENERGY: Energy from moving air.
- Used in wind turbines to generate electricity
- Not yet common in Malawi, but potential in some areas

5. GEOTHERMAL ENERGY: Heat from inside the Earth.
- Used for electricity generation and heating
- Not currently used in Malawi

NON-RENEWABLE ENERGY SOURCES (finite, will run out):

1. COAL: Formed from ancient plants.
- Malawi has some coal deposits (Livingstone, Mchenga)
- Used for electricity and heating in industry
- Pollutes air and contributes to climate change

2. OIL (PETROLEUM): Formed from ancient marine organisms.
- Used for petrol, diesel, kerosene
- All imported into Malawi (expensive)
- Burns to release greenhouse gases

3. NATURAL GAS: Formed with oil deposits.
- Used for cooking and heating
- Not currently used in Malawi

4. NUCLEAR: Energy from splitting atoms.
- Not used in Malawi
- Produces radioactive waste

COMPARISON:

| Source | Renewable? | Malawi Use | Advantages | Disadvantages |
|--------|------------|------------|------------|---------------|
| Hydroelectric | Yes | High | Clean, cheap | Drought affects |
| Solar | Yes | Growing | Abundant | Expensive initially |
| Biomass | Yes | Very high | Available | Deforestation |
| Coal | No | Low | Cheap | Pollution |
| Oil | No | High (imported) | Convenient | Expensive, pollution |

ENERGY CONSERVATION:

We must use energy wisely because:
- Non-renewable sources will run out
- Burning fossil fuels causes pollution and climate change
- Even renewable sources require resources to harness

Ways to conserve energy in Malawi:
- Turn off lights when not in use
- Use solar water heaters instead of electric
- Use energy-efficient bulbs
- Walk or bicycle instead of taking a car for short trips
- Cook with improved cookstoves to use less firewood

In Malawi, our main challenge is balancing development needs with environmental protection. As we grow, we need more energy, but we also need to protect our forests and environment for future generations.`,
  summary: 'Renewable energy (solar, hydro, biomass, wind, geothermal) can be replenished naturally. Non-renewable energy (coal, oil, gas, nuclear) is finite. Malawi relies on hydroelectric and biomass energy. Energy conservation helps save resources and protect the environment.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Fishermen on Lake Malawi', description: 'Fishermen use kerosene lamps (non-renewable) but could use solar lights (renewable).' },
    { title: 'Mulanje Mountain Forest', description: 'Deforestation for firewood shows the need for alternative energy sources.' },
    { title: 'ESCOM Power Cuts', description: 'Load shedding happens when water levels are low, showing hydroelectric limitations.' }
  ],
  practiceQuestions: [
    { question: 'Name two renewable energy sources used in Malawi.', answer: 'Hydroelectric and biomass (or solar)', hint: 'Think of dams and firewood' },
    { question: 'Why are non-renewable energy sources a concern for future generations?', answer: 'They will eventually run out', hint: 'Limited supply' }
  ]
},

// Topic: Electric Current (3 lessons)
{
  subject: 'Physics',
  form: 'Form 1',
  topic: 'Electric Current',
  lessonNumber: 1,
  lessonTitle: 'Understanding Electric Current',
  lessonId: 'physics-f1-electric-current-1',
  order: 4,
  learningObjectives: [
    'Define electric current and state its SI unit',
    'Explain the difference between conductors and insulators',
    'Understand that electric current is the flow of electrons',
    'Construct simple electric circuits'
  ],
  introduction: 'Hello, electricity explorer! Have you ever wondered how a torch lights up when you switch it on? Or how a radio plays music? The answer is ELECTRIC CURRENT - the flow of tiny particles called electrons. Today, I will help you understand what electric current is and how it works.',
  keyPoints: [
    'Electric current is the flow of electric charge (electrons) through a conductor',
    'Current is measured in amperes (amps, A)',
    'Conductors allow current to flow easily (metals like copper, aluminium)',
    'Insulators do not allow current to flow (plastic, rubber, wood, glass)',
    'A complete circuit is needed for current to flow',
    'Current flows from positive (+) to negative (-) terminal of a battery'
  ],
  detailedContent: `Let me explain ELECTRIC CURRENT.

Electric current is the FLOW of tiny particles called ELECTRONS through a conductor. Electrons are negatively charged particles found in atoms.

Think of electricity like water flowing through a pipe. The water is like electrons, and the pipe is like a wire. The pump that pushes water is like a battery that pushes electrons.

CONDUCTORS VS INSULATORS:

CONDUCTORS are materials that allow electric current to flow easily.
- Most metals: copper, aluminium, iron, gold, silver
- Why? Because they have "free electrons" that can move
- In Malawi, copper wire is used for household wiring

INSULATORS are materials that do NOT allow electric current to flow.
- Plastic, rubber, wood, glass, air, dry cotton
- Why? Because electrons are tightly bound and cannot move
- These materials are used as covers on wires for safety

SIMPLE ELECTRIC CIRCUIT:

A basic circuit needs:
1. A source of electricity (battery/cell)
2. Connecting wires (conductors)
3. A device that uses electricity (bulb, buzzer, motor)
4. A switch to turn on/off (optional)

The circuit must be COMPLETE (unbroken loop) for current to flow.

CIRCUIT SYMBOLS (you need to know these):
- Cell/Battery: _____| |_____ (long line +, short line -)
- Wire: ─────── (straight line)
- Bulb: ───(O)─── (circle with cross inside)
- Switch: ───/ ──── (open) or ────/ ───(closed) NO - actually standard is broken line
- Let me describe: A switch is shown as a break in the wire that can be connected.

CURRENT DIRECTION:

By convention, we say current flows from POSITIVE (+) terminal to NEGATIVE (-) terminal of a battery. However, electrons (which are negative) actually flow from negative to positive!

In Malawi, electric current powers:
- Lights in homes and schools
- Radios and televisions
- Charging phones
- Refrigerators in shops
- Water pumps for irrigation

SAFETY FIRST: Never touch electrical wires or put metal objects into sockets! Always use insulated tools when working with electricity.`,
  summary: 'Electric current is the flow of electrons through a conductor, measured in amperes (A). Conductors (metals) allow current to flow; insulators (rubber, plastic) stop current. A complete circuit is needed for current to flow. Current flows from positive to negative terminals.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Torch', description: 'The battery pushes electrons through the circuit, lighting the bulb.' },
    { title: 'Cell Phone Charger', description: 'Electric current from the wall socket charges the phone battery.' },
    { title: 'Radio', description: 'Current from batteries or mains powers the circuits that produce sound.' }
  ],
  practiceQuestions: [
    { question: 'What is the SI unit of electric current?', answer: 'Ampere (A)', hint: 'Named after André-Marie Ampère' },
    { question: 'Why are electric wires covered in plastic?', answer: 'Plastic is an insulator for safety', hint: 'Prevents electric shock' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 1',
  topic: 'Electric Current',
  lessonNumber: 2,
  lessonTitle: 'Measuring Current and Voltage',
  lessonId: 'physics-f1-electric-current-2',
  order: 5,
  learningObjectives: [
    'Measure electric current using an ammeter',
    'Measure voltage using a voltmeter',
    'Understand the difference between current and voltage',
    'Connect ammeters and voltmeters correctly in circuits'
  ],
  introduction: 'Welcome back! Now that you know what electric current is, how do we MEASURE it? We use an AMMETER to measure current and a VOLTMETER to measure voltage. Today, I will teach you how to use these instruments and understand what they tell us about an electric circuit.',
  keyPoints: [
    'Ammeter measures current in amperes (A)',
    'Voltmeter measures voltage (potential difference) in volts (V)',
    'Ammeter must be connected IN SERIES (in the path of the current)',
    'Voltmeter must be connected IN PARALLEL (across the component)',
    'Voltage is the "push" that makes current flow',
    'Current is the "flow" of charge being pushed'
  ],
  detailedContent: `Let me teach you how to MEASURE electric current and voltage.

THE AMMETER:

An AMMETER measures electric current in AMPERES (A).

IMPORTANT: An ammeter must be connected IN SERIES with the circuit. This means the current flows THROUGH the ammeter.

HOW TO CONNECT AN AMMETER:
- Break the circuit (open the wire)
- Connect the ammeter so the current flows into the + terminal and out of the - terminal
- The current flows through the ammeter and then continues to the rest of the circuit

THE VOLTMETER:

A VOLTMETER measures VOLTAGE (potential difference) in VOLTS (V).

Voltage is the "push" or "pressure" that makes current flow. You can think of it like water pressure in a pipe.

IMPORTANT: A voltmeter must be connected IN PARALLEL across a component.

HOW TO CONNECT A VOLTMETER:
- Connect the + terminal of the voltmeter to the + side of the component
- Connect the - terminal of the voltmeter to the - side of the component
- The voltmeter does NOT need to be in the main path of the current

CURRENT VS VOLTAGE:

| Quantity | Symbol | Unit | Measures | How to Connect |
|----------|--------|------|----------|----------------|
| Current | I | Amps (A) | Flow of charge | In series |
| Voltage | V | Volts (V) | Push/pressure | In parallel |

Analogy: Water in a pipe
- Current = amount of water flowing per second
- Voltage = water pressure pushing the water

PRACTICAL EXAMPLE:

A simple circuit with one battery and one bulb:
- Current through the bulb = current everywhere in the circuit (same)
- Voltage across the bulb = how hard the battery is pushing

To measure current: connect ammeter in series between battery and bulb
To measure voltage: connect voltmeter across the bulb (parallel)

In Malawi, electricians use multimeters (combination of ammeter and voltmeter) to check circuits in homes, schools, and businesses. Understanding how to measure current and voltage helps diagnose electrical problems.

REMEMBER: Never connect an ammeter in parallel - it will create a short circuit and blow the fuse or damage the meter!`,
  summary: 'Ammeters measure current (amperes) connected IN SERIES. Voltmeters measure voltage (volts) connected IN PARALLEL. Current is the flow of charge; voltage is the push that causes flow. Always connect meters correctly to avoid damage.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'ESCOM Technician', description: 'Electricians use multimeters to check voltage at homes and businesses.' },
    { title: 'Car Battery Check', description: 'A mechanic tests a car battery voltage to see if it needs replacement.' },
    { title: 'School Lab', description: 'Students use ammeters and voltmeters to study circuits.' }
  ],
  practiceQuestions: [
    { question: 'How is an ammeter connected in a circuit?', answer: 'In series', hint: 'Current must flow through it' },
    { question: 'What happens if you connect an ammeter in parallel across a battery?', answer: 'Short circuit - too much current', hint: 'Low resistance path' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 1',
  topic: 'Electric Current',
  lessonNumber: 3,
  lessonTitle: 'Series and Parallel Circuits',
  lessonId: 'physics-f1-electric-current-3',
  order: 6,
  learningObjectives: [
    'Compare series and parallel circuits',
    'Calculate total resistance in series circuits',
    'Explain the advantages of parallel circuits in homes',
    'Construct and analyse series and parallel circuits'
  ],
  introduction: 'Hello again! There are two basic ways to connect components in a circuit: SERIES and PARALLEL. In series, components are connected one after another like chain links. In parallel, components are connected side by side like rungs on a ladder. Today, I will help you understand the difference and why your home uses parallel circuits.',
  keyPoints: [
    'Series circuit: components connected in a single path',
    'Parallel circuit: components connected in multiple paths',
    'In series: same current through all components, voltage divides',
    'In parallel: same voltage across all components, current divides',
    'Total resistance in series: R_total = R₁ + R₂ + R₃ + ...',
    'Total resistance in parallel: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...',
    'A break in series stops ALL current; a break in parallel affects only that branch'
  ],
  detailedContent: `Let me explain SERIES and PARALLEL circuits.

SERIES CIRCUIT:

In a series circuit, components are connected one after another - like beads on a string. There is only ONE path for current to flow.

Properties of series circuits:
- The SAME current flows through every component
- The voltage splits (divides) among the components
- Total resistance = sum of all resistances
- If ONE component breaks (or is removed), the ENTIRE circuit stops!

Example: Old Christmas tree lights - when one bulb burns out, all lights go out!

Total resistance: R_total = R₁ + R₂ + R₃

Example: Three resistors 10Ω, 20Ω, 30Ω in series:
R_total = 10 + 20 + 30 = 60Ω

PARALLEL CIRCUIT:

In a parallel circuit, components are connected side by side - like multiple paths. Current has multiple paths to flow.

Properties of parallel circuits:
- The SAME voltage appears across every component
- The current splits among the branches
- Total resistance is LESS than the smallest individual resistance
- If ONE branch breaks, current continues through other branches

Total resistance: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃

Example: Three resistors 10Ω, 20Ω, 30Ω in parallel:
1/R_total = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60
R_total = 60/11 ≈ 5.45Ω (much less than 10Ω!)

COMPARISON TABLE:

| Property | Series | Parallel |
|----------|--------|----------|
| Paths | Single | Multiple |
| Current | Same everywhere | Divides among branches |
| Voltage | Divides among components | Same everywhere |
| Total Resistance | R₁ + R₂ + R₃ | 1/(1/R₁ + 1/R₂ + 1/R₃) |
| One breaks | All stop | Others continue |
| Example | Old Christmas lights | Home wiring |

WHY ARE HOMES WIRED IN PARALLEL?

Your home is wired in PARALLEL for good reasons:
1. You can turn on/off each appliance independently
2. Each appliance gets the full 230V (Malawi mains voltage)
3. If one appliance breaks, others still work
4. Each appliance draws only the current it needs

In Malawi, homes, schools, and businesses are wired in parallel. The ESCOM supply is 230V, and each socket and light is connected in parallel.

Let me give you practical examples:

Example 1: A 12V battery connected to two bulbs in series. Each bulb gets 6V (half voltage). They are dim.

Example 2: A 12V battery connected to two bulbs in parallel. Each bulb gets 12V (full voltage). They are bright.

Example 3: Christmas lights (series) vs home lights (parallel) - the difference is why you can turn one lamp off without affecting others.

Remember: In series, everything shares; in parallel, everything gets the same.`,
  summary: 'Series circuits have one path; current is same, voltage divides. Parallel circuits have multiple paths; voltage is same, current divides. Homes use parallel circuits so each appliance works independently. Total resistance in series adds; in parallel it decreases (1/R = sum of 1/R).',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Home Wiring', description: 'Your home circuit is parallel so lights and sockets work independently.' },
    { title: 'Torch', description: 'Batteries in a torch are connected in series to increase voltage.' },
    { title: 'Solar Panels', description: 'Panels can be connected in series (more voltage) or parallel (more current).' }
  ],
  practiceQuestions: [
    { question: 'If a bulb breaks in a series circuit, what happens to the others?', answer: 'All go out', hint: 'Only one path' },
    { question: 'Calculate total resistance of 4Ω and 6Ω in parallel.', answer: '2.4Ω', hint: '1/4 + 1/6 = 5/12, reciprocal = 2.4Ω' }
  ]
},

// Topic: Magnets (2 lessons)
{
  subject: 'Physics',
  form: 'Form 1',
  topic: 'Magnets',
  lessonNumber: 1,
  lessonTitle: 'Properties of Magnets',
  lessonId: 'physics-f1-magnets-1',
  order: 7,
  learningObjectives: [
    'Identify the properties of magnets',
    'State the basic law of magnetism',
    'Identify the poles of a magnet',
    'Distinguish between magnetic and non-magnetic materials'
  ],
  introduction: 'Hello, magnetism explorer! Have you ever used a magnet to stick a note to a refrigerator? Or seen a compass point north? That is MAGNETISM at work! Today, I will help you understand the properties of magnets and how they interact with different materials.',
  keyPoints: [
    'Magnets attract magnetic materials (iron, steel, nickel, cobalt)',
    'Magnets do NOT attract non-magnetic materials (copper, aluminium, wood, plastic)',
    'Every magnet has two poles: North (N) and South (S)',
    'Like poles repel (N-N or S-S); unlike poles attract (N-S)',
    'The magnetic force is strongest at the poles',
    'A freely suspended magnet always points north-south'
  ],
  detailedContent: `Let me introduce you to MAGNETS and their properties.

WHAT IS A MAGNET?

A magnet is an object that produces a magnetic field and can attract magnetic materials.

MAGNETIC MATERIALS (attracted to magnets):
- Iron
- Steel (contains iron)
- Nickel
- Cobalt
- Some alloys (mixtures of metals)

In Malawi, everyday magnetic items include:
- Iron sheets on roofs
- Steel nails
- Some tools (hammers, spanners)
- Refrigerator doors (have magnetic seals)

NON-MAGNETIC MATERIALS (not attracted to magnets):
- Copper (used in electrical wires)
- Aluminium (used in pots, window frames)
- Wood
- Plastic
- Glass
- Rubber

MAGNETIC POLES:

Every magnet has TWO poles: NORTH (N) and SOUTH (S).

Properties of poles:
- The magnetic force is STRONGEST at the poles
- The force is weakest in the middle of the magnet
- You cannot have a magnet with only one pole

THE BASIC LAW OF MAGNETISM:

- LIKE poles REPEL (North repels North; South repels South)
- UNLIKE poles ATTRACT (North attracts South)

Experiment: Bring two magnets together:
- If you try to push N towards N, you feel them push apart (repel)
- If you bring N towards S, they pull together (attract)

DIRECTIONAL PROPERTY:

When a magnet is freely suspended, it always points:
- North pole points toward Earth's geographic North
- South pole points toward Earth's geographic South

This is how a COMPASS works! The compass needle is a small magnet that aligns with Earth's magnetic field.

TYPES OF MAGNETS:

1. Permanent magnets: Always magnetic (e.g., bar magnets, horseshoe magnets)
2. Temporary magnets: Magnetic only when near another magnet (e.g., iron paperclips)
3. Electromagnets: Magnetic only when electricity flows (we will learn later)

In Malawi, magnets are used in:
- Compasses for navigation on Lake Malawi
- Speakers and headphones
- Electric motors (fans, pumps)
- Magnetic catches on doors
- Recycling to separate iron from other materials

A PROTIP: Keep magnets away from:
- Electronics (can damage credit cards, phones, computers)
- Other magnets (strong impacts can weaken them)
- Heat (high temperatures can destroy magnetism)

Remember the rule: "Opposites attract, likes repel!"`,
  summary: 'Magnets attract magnetic materials (iron, steel, nickel). Every magnet has North and South poles. Like poles repel; unlike poles attract. A freely suspended magnet points north-south, which is how compasses work.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Compass on Lake Malawi', description: 'Fishermen use magnetic compasses to navigate and find their way.' },
    { title: 'Speaker Magnets', description: 'Sound systems in Malawi use magnets to produce sound.' },
    { title: 'Magnetic Catches', description: 'Many cupboards and doors use magnetic catches to stay closed.' }
  ],
  practiceQuestions: [
    { question: 'What happens when you bring two North poles together?', answer: 'They repel', hint: 'Like poles repel' },
    { question: 'Name a magnetic material.', answer: 'Iron or steel', hint: 'Common metals in roofs and tools' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 1',
  topic: 'Magnets',
  lessonNumber: 2,
  lessonTitle: 'Magnetic Fields and Making Magnets',
  lessonId: 'physics-f1-magnets-2',
  order: 8,
  learningObjectives: [
    'Describe a magnetic field',
    'Draw magnetic field patterns',
    'Explain how to make a magnet (magnetisation)',
    'Explain how to destroy magnetism (demagnetisation)'
  ],
  introduction: 'Welcome back! You cannot "see" a magnetic field, but you can see its effects. Today, I will show you how to visualize magnetic fields using iron filings, and how to make and destroy magnets. These skills are important for many practical applications in Malawi, from repairing speakers to using magnetic tools.',
  keyPoints: [
    'A magnetic field is the region around a magnet where magnetic force acts',
    'Magnetic field lines show the direction and strength of the field',
    'Field lines go from North to South outside the magnet',
    'Closer lines = stronger field (especially at poles)',
    'Magnetisation: stroking, using electricity (electromagnet), or hammering in a magnetic field',
    'Demagnetisation: heating, hammering, or using alternating current'
  ],
  detailedContent: `Let me explain MAGNETIC FIELDS and how to make/destroy magnets.

MAGNETIC FIELD:

The magnetic field is the REGION around a magnet where magnetic force can be felt. You cannot see it, but you can detect it with a compass or iron filings.

MAGNETIC FIELD LINES (how we draw them):

Rules for drawing magnetic field lines:
- Lines point from NORTH pole to SOUTH pole OUTSIDE the magnet
- Lines are continuous loops (they go through the magnet from S to N)
- Lines never cross
- The STRONGER the field, the CLOSER the lines together

Field patterns for different magnets:

- BAR MAGNET: Lines curve from N to S, most concentrated at poles
- HORSESHOE MAGNET: Lines are more concentrated between the poles
- TWO LIKE POLES: Field lines bend away from each other (repulsion)
- TWO UNLIKE POLES: Field lines connect from one to the other (attraction)

HOW TO SEE A MAGNETIC FIELD:

Experiment: Place a bar magnet on a table. Cover it with paper. Sprinkle iron filings evenly. Tap gently. The filings will align along the magnetic field lines!

HOW TO MAKE A MAGNET (MAGNETISATION):

Method 1: STROKING
- Take an unmagnetised steel bar
- Stroke it repeatedly in ONE direction with a strong magnet
- The bar becomes magnetised

Method 2: ELECTRIC CURRENT (Electromagnet)
- Wrap insulated wire around an iron bar
- Pass electric current through the wire
- The iron becomes magnetic (only while current flows)

Method 3: HAMMERING
- Place an iron bar in a magnetic field
- Hammer it repeatedly
- The vibrations help align the magnetic domains

HOW TO DESTROY A MAGNET (DEMAGNETISATION):

Method 1: HEATING
- Heat the magnet to a high temperature (above Curie point)
- The domains become random, losing magnetism

Method 2: HAMMERING
- Hammer the magnet vigorously
- The vibrations disrupt the domain alignment

Method 3: ALTERNATING CURRENT
- Place the magnet inside a coil carrying AC
- The changing field randomises the domains

Method 4: DROPPING
- Dropping a magnet repeatedly can weaken it

PRACTICAL APPLICATIONS IN MALAWI:

- Making magnets for school science labs
- Repairing speakers (speakers have strong magnets)
- Using electromagnets in scrap yards to lift iron
- Magnetic catches for doors and cabinets

A PROTIP: Store bar magnets in pairs with keepers (soft iron bars connecting the poles) to preserve their magnetism. Store them with unlike poles together (N touching S) to reduce self-demagnetisation.

Remember: You can make a magnet, but you can also destroy one!`,
  summary: 'Magnetic field is the region around a magnet where forces act. Field lines go N→S outside. Make magnets by stroking, electricity, or hammering in a field. Demagnetise by heating, hammering, or AC. Field patterns show attraction or repulsion.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Iron Filings Experiment', description: 'Malawi school labs use this to show invisible magnetic fields.' },
    { title: 'Electromagnet in Scrap Yard', description: 'Lifts iron scrap efficiently.' },
    { title: 'Speaker Magnets', description: 'Radio repair shops handle speaker magnets.' }
  ],
  practiceQuestions: [
    { question: 'How can you destroy a magnet?', answer: 'Heat it or hammer it', hint: 'Disrupts magnetic domains' },
    { question: 'What do magnetic field lines show?', answer: 'Direction and strength of the field', hint: 'Closer lines = stronger field' }
  ]
},

// -------------------- PHYSICS FORM 2 --------------------
// Topic: Density (3 lessons)
{
  subject: 'Physics',
  form: 'Form 2',
  topic: 'Density',
  lessonNumber: 1,
  lessonTitle: 'Understanding Density',
  lessonId: 'physics-f2-density-1',
  order: 9,
  learningObjectives: [
    'Define density and state its formula',
    'Calculate density given mass and volume',
    'State the SI unit of density',
    'Explain why some objects float and others sink'
  ],
  introduction: 'Have you ever wondered why a heavy ship made of steel floats on water, but a small stone sinks? The answer is DENSITY! Density tells us how tightly packed the particles are in a substance. Today, I will help you understand density and why it matters in everyday life in Malawi.',
  keyPoints: [
    'Density = mass ÷ volume (ρ = m/V)',
    'Unit: kilograms per cubic metre (kg/m³) or grams per cubic centimetre (g/cm³)',
    '1 g/cm³ = 1000 kg/m³',
    'Density of water = 1 g/cm³ = 1000 kg/m³',
    'Objects with density LESS than water FLOAT',
    'Objects with density GREATER than water SINK'
  ],
  detailedContent: `Let me explain DENSITY.

Density is how much MASS is packed into a given VOLUME. A dense material has particles packed tightly together. A less dense material has particles spread apart.

The formula for density is:
Density = Mass ÷ Volume
Or symbolically: ρ = m/V
(ρ is the Greek letter "rho")

The SI unit of density is kilograms per cubic metre (kg/m³). For smaller objects, we use grams per cubic centimetre (g/cm³).

Conversion: 1 g/cm³ = 1000 kg/m³

DENSITY OF WATER:

Water has a density of 1 g/cm³ (or 1000 kg/m³). This is our reference point:
- If an object's density is LESS than 1 g/cm³, it FLOATS in water (e.g., wood, plastic, oil)
- If an object's density is GREATER than 1 g/cm³, it SINKS in water (e.g., iron, stone, glass)

Let me show you calculations:

Example 1: A wooden block has mass 200g and volume 250cm³. Find its density.
ρ = m/V = 200g ÷ 250cm³ = 0.8 g/cm³
Since 0.8 < 1, this wood will FLOAT on water.

Example 2: A stone has mass 150g and volume 50cm³. Find its density.
ρ = 150 ÷ 50 = 3 g/cm³
Since 3 > 1, this stone will SINK.

Example 3: A steel nail. Density of steel is about 7.8 g/cm³. A steel ship floats because it is mostly hollow - the average density (including air inside) is less than 1 g/cm³.

DENSITIES OF COMMON MATERIALS:

| Material | Density (g/cm³) | Density (kg/m³) | Float/Sink? |
|----------|----------------|----------------|-------------|
| Air | 0.0012 | 1.2 | Floats |
| Wood | 0.4 - 0.9 | 400 - 900 | Floats |
| Water | 1.0 | 1000 | Reference |
| Glass | 2.5 | 2500 | Sinks |
| Aluminium | 2.7 | 2700 | Sinks |
| Iron/Steel | 7.8 | 7800 | Sinks |
| Lead | 11.3 | 11300 | Sinks |
| Gold | 19.3 | 19300 | Sinks |

In Malawi, understanding density helps:
- Fishermen know which nets sink or float
- Builders choose materials (lightweight for roofs, heavy for foundations)
- Farmers check soil density for planting
- Engineers design floating structures on Lake Malawi

A PROTIP: To find the volume of an irregular object, use displacement: Submerge it in water and measure how much water is displaced. This equals the volume of the object.`,
  summary: 'Density = mass ÷ volume (ρ = m/V). Units: g/cm³ or kg/m³. Water density = 1 g/cm³. Objects less dense than water float; objects denser than water sink. Density explains why ships float and stones sink.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Lake Malawi Fishing', description: 'Fishermen understand density to make nets that sink properly.' },
    { title: 'Building Materials', description: 'Lightweight materials for roofs, dense materials for foundations.' },
    { title: 'Boat Design', description: 'Steel boats float because their average density is less than water.' }
  ],
  practiceQuestions: [
    { question: 'Calculate the density of an object with mass 50g and volume 25cm³', answer: '2 g/cm³', hint: '50 ÷ 25 = 2' },
    { question: 'Will an object with density 0.5 g/cm³ float in water?', answer: 'Yes', hint: 'Less than 1 g/cm³' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 2',
  topic: 'Density',
  lessonNumber: 2,
  lessonTitle: 'Measuring Density',
  lessonId: 'physics-f2-density-2',
  order: 10,
  learningObjectives: [
    'Measure the density of regular solids',
    'Measure the density of irregular solids using displacement',
    'Measure the density of liquids using a density bottle',
    'Apply density measurements in practical situations'
  ],
  introduction: 'Welcome back! Knowing the formula for density is one thing, but how do we ACTUALLY measure density in the lab? Today, I will teach you practical methods to find the density of regular solids, irregular solids, and liquids. These skills are used by engineers, geologists, and even cooks!',
  keyPoints: [
    'For regular solids: measure dimensions, calculate volume, measure mass',
    'For irregular solids: use displacement to find volume (water displacement)',
    'For liquids: use a density bottle (specific gravity bottle)',
    'Always use consistent units (g and cm³ for g/cm³; kg and m³ for kg/m³)'
  ],
  detailedContent: `Let me teach you how to MEASURE density in the laboratory.

MEASURING DENSITY OF A REGULAR SOLID (e.g., a cube, cuboid, cylinder):

Steps:
1. Measure the mass using a balance (in grams or kilograms)
2. Calculate the volume using the appropriate formula:
   - Cube: V = side³
   - Cuboid: V = length × width × height
   - Cylinder: V = π × radius² × height
3. Calculate density: ρ = mass ÷ volume

Example: A metal cube has side 5 cm and mass 1000 g.
Volume = 5 × 5 × 5 = 125 cm³
Density = 1000 g ÷ 125 cm³ = 8 g/cm³ (likely iron or steel)

MEASURING DENSITY OF AN IRREGULAR SOLID (e.g., a stone):

Steps (Displacement Method):
1. Measure the mass of the stone (m)
2. Fill a measuring cylinder with water (record volume V₁)
3. Gently lower the stone into the water (record new volume V₂)
4. Volume of stone = V₂ - V₁
5. Density = mass ÷ (V₂ - V₁)

Example: Stone mass = 150 g
Initial water volume = 50 cm³
Water volume with stone = 70 cm³
Stone volume = 70 - 50 = 20 cm³
Density = 150 ÷ 20 = 7.5 g/cm³

MEASURING DENSITY OF A LIQUID:

Steps (Density Bottle Method):
1. Measure mass of empty density bottle (m₁)
2. Fill bottle with water (to mark), measure mass (m₂)
3. Mass of water = m₂ - m₁
4. Since density of water = 1 g/cm³, Volume of bottle = mass of water
5. Empty and dry bottle
6. Fill with liquid, measure mass (m₃)
7. Mass of liquid = m₃ - m₁
8. Density of liquid = (mass of liquid) ÷ (mass of water)

Example: Empty bottle mass = 20g
With water: 70g → water mass = 50g → bottle volume = 50cm³
With oil: 65g → oil mass = 45g
Oil density = 45g ÷ 50cm³ = 0.9 g/cm³ (oil floats on water)

PRACTICAL APPLICATIONS IN MALAWI:

- Farmers: Check soil density to determine compaction
- Fishermen: Density of fish determines net design
- Engineers: Check building materials meet standards
- Pharmacists: Measure density of medicines
- Cooks: Oil floats on water (density difference)

Density is a characteristic property - it helps identify unknown materials. Every pure substance has a unique density (at a given temperature and pressure).`,
  summary: 'Measure regular solids by formula, irregular solids by displacement, liquids by density bottle. Density = mass/volume. Displacement works because submerged objects displace their own volume of water.',
  estimatedTime: '23 mins',
  malawiExamples: [
    { title: 'Soil Testing', description: 'Farmers check soil density to know if it is too compacted for planting.' },
    { title: 'Fish Market', description: 'Fish density affects whether they float or sink in holding tanks.' },
    { title: 'Building Materials', description: 'Engineers test concrete density before approving construction.' }
  ],
  practiceQuestions: [
    { question: 'A stone displaces 30cm³ of water and has mass 90g. Find density.', answer: '3 g/cm³', hint: '90 ÷ 30 = 3' },
    { question: 'Why is displacement used for irregular solids?', answer: 'Can\'t measure dimensions directly', hint: 'No simple formula' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 2',
  topic: 'Density',
  lessonNumber: 3,
  lessonTitle: 'Applications of Density',
  lessonId: 'physics-f2-density-3',
  order: 11,
  learningObjectives: [
    'Apply density to real-world problems',
    'Explain buoyancy in terms of density',
    'Calculate the density of mixtures',
    'Understand the importance of density in Malawi'
  ],
  introduction: 'Hello again! Now that you know how to calculate density, let us explore its real-world applications. Density explains why hot air balloons rise, why oil floats on water, and how submarines dive and surface. Understanding density is essential for many careers in Malawi, from engineering to environmental science.',
  keyPoints: [
    'Buoyancy: objects float if their average density is less than the fluid',
    'Hot air rises because it is less dense than cold air',
    'Oil floats on water because oil is less dense',
    'Submarines control density by taking in or expelling water',
    'The density of a mixture is the total mass divided by total volume'
  ],
  detailedContent: `Let me show you how DENSITY applies to real-world situations.

BUOYANCY (WHY THINGS FLOAT):

Archimedes' Principle: The buoyant force on an object equals the weight of the fluid it displaces.

An object will FLOAT if its density is LESS than the density of the fluid.
An object will SINK if its density is GREATER than the density of the fluid.

Examples:
- Wood (density 0.6 g/cm³) floats on water (1 g/cm³)
- A steel ship floats because it is hollow (average density < 1)
- A submarine can dive (fill tanks with water, density increases) and surface (empty tanks, density decreases)

HOT AIR BALLOONS:

When you heat air, its particles spread apart, so its density DECREASES. Hot air is less dense than cold air, so the balloon rises.

In Malawi, hot air balloons are not common, but the principle applies to:
- Smoke rising from a fire
- Warm air rising in a room
- Convection currents in cooking

OIL AND WATER:

Oil is less dense than water (0.9 g/cm³ vs 1.0 g/cm³), so oil floats on top of water. This is why:
- Oil spills on Lake Malawi form a slick on the surface
- Salad dressing separates (oil on top)
- Cooking oil floats on water

DENSITY OF MIXTURES:

When you mix two substances, the density of the mixture is:
Density = (mass₁ + mass₂) / (volume₁ + volume₂)

Example: Mix 200g of water (density 1, volume 200cm³) with 100g of ethanol (density 0.79, volume 126.6cm³)
Total mass = 300g
Total volume = 200 + 126.6 = 326.6 cm³
Mixture density = 300 ÷ 326.6 = 0.92 g/cm³

DENSITY IN MALAWI:

| Application | How Density Matters |
|-------------|---------------------|
| Fishing | Nets designed to sink or float based on density |
| Building | Concrete density determines strength |
| Mining | Ore density helps identify valuable minerals |
| Medicine | Urine density tests for health |
| Agriculture | Soil density affects root growth |
| Water Treatment | Sediment density affects settling |

Environmental Example: When fertilisers run into rivers, they can increase water density, affecting aquatic life. Understanding density helps monitor pollution.

Remember: Density is a physical property that helps us identify substances and predict their behaviour.`,
  summary: 'Objects float if their density is less than the fluid. Hot air rises because it is less dense. Oil floats on water. Submarines control density to dive or surface. Density explains many everyday phenomena and has practical applications across industries.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Lake Malawi Pollution', description: 'Density measurements help monitor pollution levels.' },
    { title: 'Mining at Kayelekera', description: 'Ore density helps identify uranium-rich rocks.' },
    { title: 'Concrete Testing', description: 'Engineers test concrete density to ensure building safety.' }
  ],
  practiceQuestions: [
    { question: 'Why does a steel ship float?', answer: 'Average density less than water (hollow)', hint: 'Contains air inside' },
    { question: 'Why does oil float on water?', answer: 'Oil is less dense than water', hint: 'Density comparison' }
  ]
},

// Topic: Thermal Expansion (2 lessons)
{
  subject: 'Physics',
  form: 'Form 2',
  topic: 'Thermal Expansion',
  lessonNumber: 1,
  lessonTitle: 'Expansion of Solids, Liquids, and Gases',
  lessonId: 'physics-f2-thermal-expansion-1',
  order: 12,
  learningObjectives: [
    'Explain that most substances expand when heated and contract when cooled',
    'Describe the expansion of solids, liquids, and gases',
    'Explain why different materials expand at different rates',
    'Demonstrate expansion using simple experiments'
  ],
  introduction: 'Good day, scientist! Have you ever noticed that a metal lid that is stuck can be loosened by running hot water over it? Or that railway tracks have small gaps between them? These are examples of THERMAL EXPANSION - materials expanding when heated. Today, I will explain how and why this happens.',
  keyPoints: [
    'Most substances EXPAND when heated and CONTRACT when cooled',
    'Gases expand the most, liquids less, solids the least (but all expand)',
    'Different materials expand at different rates (different coefficients)',
    'Expansion is caused by particles vibrating more and needing more space',
    'Expansion joints prevent damage from thermal expansion (bridges, rails)'
  ],
  detailedContent: `Let me explain THERMAL EXPANSION.

When you heat a substance, its particles gain energy and vibrate more. They need more space, so the substance expands. When you cool it, particles slow down and move closer together, so the substance contracts.

EXPANSION IN SOLIDS:

Solids expand when heated, but only a small amount. Examples:
- A metal ball that fits through a ring at room temperature may not fit when heated
- Railway tracks expand on hot days - gaps prevent buckling
- Bridges have expansion joints (rubber or metal sections that can move)

In Malawi, you can see expansion gaps on:
- The M1 road bridges
- Railway tracks (where they exist)
- Metal roofs (screws allow movement)

EXPANSION IN LIQUIDS:

Liquids expand more than solids.

Example: A thermometer uses liquid (mercury or alcohol) expansion. When it gets hot, the liquid expands and rises up the tube.

Bimetal strips (two different metals bonded together) bend when heated because one metal expands more than the other.

EXPANSION IN GASES:

Gases expand the MOST when heated.

Example: A hot air balloon rises because the air inside is heated, expands, becomes less dense than surrounding air, and the balloon floats.

Applications:
- A football becomes harder in hot weather (air inside expands)
- A tyre can burst if over-inflated on a hot day
- A sealed container can explode if heated (pressure builds)

THE BIMETAL STRIP:

A bimetal strip is made of two different metals (e.g., iron and brass) bonded together. When heated:
- Brass expands more than iron
- The strip bends toward the iron side

This is used in:
- Thermostats (temperature control in irons, ovens, refrigerators)
- Fire alarms (bimetal strip bends and completes circuit when hot)
- Indicators (shows when temperature is reached)

WHY DOES EXPANSION MATTER IN MALAWI?

| Situation | Why Expansion Matters |
|-----------|----------------------|
| Houses | Roof sheets expand in heat - need space to move |
| Water Pipes | Burst if frozen (water expands) or if too tight |
| Cookware | Metal pots expand when heated |
| Engines | Engine parts need space to expand when hot |

A PROTIP: Never tightly seal a container when liquid is hot. As it cools, the liquid contracts and can create a vacuum, making the lid almost impossible to open!

Experiment: Heat a metal ball and try to pass it through a ring. When hot, it won't fit. When cool, it fits again.`,
  summary: 'Most materials expand when heated and contract when cooled. Gases expand most, solids least. Expansion joints prevent damage. Bimetal strips use different expansion rates in thermostats and fire alarms. Understanding expansion prevents structural damage.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Railway Tracks', description: 'Gaps between tracks prevent buckling on hot days.' },
    { title: 'Bridges', description: 'Expansion joints allow bridge sections to move with temperature.' },
    { title: 'Water Pipes', description: 'Pipes need room to expand; frozen pipes can burst.' }
  ],
  practiceQuestions: [
    { question: 'Why do railway tracks have gaps?', answer: 'To allow expansion on hot days', hint: 'Prevents buckling' },
    { question: 'Which expands most when heated: solid, liquid, or gas?', answer: 'Gas', hint: 'Particles move most freely' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 2',
  topic: 'Thermal Expansion',
  lessonNumber: 2,
  lessonTitle: 'Practical Applications and Problems',
  lessonId: 'physics-f2-thermal-expansion-2',
  order: 13,
  learningObjectives: [
    'Identify practical applications of thermal expansion',
    'Explain how to fix problems caused by expansion',
    'Describe the unusual expansion of water between 0°C and 4°C',
    'Apply expansion knowledge to solve everyday problems'
  ],
  introduction: 'Welcome back! Thermal expansion can be useful or problematic depending on the situation. Today, I will show you how engineers use expansion to their advantage and how to prevent damage when expansion causes problems. We will also learn about the strange behaviour of water near freezing – which is crucial for fish survival in Lake Malawi!',
  keyPoints: [
    'Useful expansion: thermometers, thermostats, bimetal strips',
    'Problematic expansion: bridges buckling, pipes bursting, rails warping',
    'Solutions: expansion joints, gaps, flexible connections',
    'Water is unusual: expands from 0°C to 4°C, then contracts (most dense at 4°C)',
    'Ice is less dense than water - that is why ice floats!'
  ],
  detailedContent: `Let me show you how thermal expansion is used and how we manage its problems.

USEFUL APPLICATIONS OF THERMAL EXPANSION:

1. THERMOMETERS:
- Liquid (mercury or coloured alcohol) expands when hot, rises up the tube
- Scale is calibrated to read temperature
- Medical thermometers have a constriction that holds the reading

2. THERMOSTATS:
- Bimetal strip bends when temperature changes
- Bending opens or closes electrical contacts
- Controls heaters, ovens, irons, refrigerators

3. FIRE ALARMS:
- Bimetal strip completes circuit when hot enough
- Triggers the alarm

4. TIGHTENING RIVETS:
- Heat the rivet, insert, let cool
- As it contracts, it tightens the joint

SOLUTIONS TO EXPANSION PROBLEMS:

1. EXPANSION JOINTS (Bridges):
- Rubber or metal joints allow movement
- Prevents buckling and cracking

2. RAILWAY GAPS:
- Small gaps between rail sections
- Allow expansion on hot days

3. PIPES (Water and Steam):
- Expansion loops (U-shaped sections)
- Flexible joints

4. ROOFING:
- Roof sheets attached with screws in slots (allow movement)
- Space between sheets

THE UNUSUAL EXPANSION OF WATER:

Water behaves differently than most substances between 0°C and 4°C:

From 0°C to 4°C: Water CONTRACTS (unusual!)
From 4°C upward: Water expands normally

This means water is DENSEST at 4°C.

Consequences for Lake Malawi:
- In winter, surface water cools to 4°C and sinks (it is densest)
- This circulates nutrients
- Ice forms only on the surface (because ice is less dense than liquid water)
- Fish can survive under the ice because water below is liquid

WHY ICE FLOATS:
- Ice has a crystal structure that takes more space
- Density of ice = 0.92 g/cm³ (less than water)
- This is why ice cubes float in your drink!

IN MALAWI:

| Application | How Expansion Affects It |
|-------------|-------------------------|
| Road Construction | Expansion joints prevent cracking |
| Plumbing | Pipes need space to expand |
| Roofing | Roof sheets need movement space |
| Lake Malawi | Water density cycle affects fishing |
| Concrete | Steel reinforcement handles tension |

A PROTIP: When a glass jar lid is stuck, run hot water over the lid. The metal lid expands more than the glass, making it easier to open!

Experiment: Fill a bottle completely with water and cap it tightly. Place it in a freezer. The bottle will crack because water expands when freezing (unlike most substances).`,
  summary: 'Thermal expansion is used in thermometers, thermostats, and tightening rivets. Problems are managed with expansion joints and gaps. Water is unusual: most dense at 4°C, ice floats because it is less dense. This is vital for aquatic life in Lake Malawi.',
  estimatedTime: '23 mins',
  malawiExamples: [
    { title: 'Lake Malawi Fish', description: 'Water density cycle brings nutrients; fish survive because ice floats.' },
    { title: 'Stuck Jar Lids', description: 'Hot water expands the metal lid, making it easier to open.' },
    { title: 'Roads and Bridges', description: 'Expansion joints prevent cracking during hot days.' }
  ],
  practiceQuestions: [
    { question: 'Why does ice float on water?', answer: 'Ice is less dense than water', hint: 'Density of ice is 0.92 g/cm³' },
    { question: 'What is the temperature of maximum density for water?', answer: '4°C', hint: 'Between freezing and room temperature' }
  ]
}
,

// ======================================================================
// PHYSICS FORM 3 - CONTINUED
// ======================================================================

// Topic: Pressure (3 lessons)
{
  subject: 'Physics',
  form: 'Form 3',
  topic: 'Pressure',
  lessonNumber: 1,
  lessonTitle: 'Pressure in Solids',
  lessonId: 'physics-f3-pressure-1',
  order: 14,
  learningObjectives: [
    'Define pressure and state its SI unit',
    'Calculate pressure exerted by solids',
    'Explain factors affecting pressure',
    'Apply pressure concepts to everyday situations'
  ],
  introduction: 'Hello, science explorer! Have you ever wondered why a sharp knife cuts more easily than a blunt one? Or why a tractor has wide tyres while a racing bicycle has thin ones? The answer lies in a concept called PRESSURE. Today, I will help you understand what pressure is and how it affects our daily lives in Malawi.',
  keyPoints: [
    'Pressure is defined as force per unit area: P = F/A',
    'The SI unit of pressure is the Pascal (Pa), which equals 1 N/m²',
    'For the same force, pressure increases when area decreases',
    'For the same force, pressure decreases when area increases',
    'Pressure is why sharp knives cut easily and why snowshoes prevent sinking'
  ],
  detailedContent: `Let me explain pressure using a simple example.

Imagine you are holding a book. The weight (force) of the book is spread over the area of your hand. That force per unit area is what we call PRESSURE.

The formula for pressure is: P = F / A
Where:
- P = pressure (in Pascals, Pa)
- F = force (in Newtons, N)
- A = area (in square metres, m²)

1 Pascal = 1 Newton per square metre (1 Pa = 1 N/m²)

Now, if you hold the same book but balance it on just one finger, what happens? The same force (the weight of the book) is now concentrated on a much smaller area. So the pressure increases dramatically!

Think about these examples:

1. SHARP KNIFE: The blade has a very thin edge (small area). When you push with your hand (force), the pressure at the edge is enormous, so it cuts easily. A blunt knife has a larger contact area, so less pressure and it does not cut well.

2. TRACTOR TYRES: Tractors used in Malawian farms have wide tyres. Why? Because the wide tyres spread the tractor's weight over a larger area, reducing pressure on the soil. This prevents the tractor from sinking into soft ground.

3. HIGH HEEL SHOES: A woman wearing high heels exerts much more pressure than an elephant! Because the heel area is tiny, the pressure is enormous. That is why high heels can damage wooden floors.

4. SCHOOL BAGS: Wide shoulder straps spread the weight over a larger area, reducing pressure on your shoulders. Thin straps concentrate the force and hurt.

Let me show you calculations:

Example 1: A box weighing 100 N rests on a table. The area of contact is 0.5 m². Calculate the pressure.
P = F/A = 100 N ÷ 0.5 m² = 200 Pa

Example 2: The same box is placed on its side with contact area 0.2 m².
P = 100 ÷ 0.2 = 500 Pa (pressure increased because area decreased)

Example 3: A student weighing 400 N stands on one foot. The foot area is 0.02 m².
Pressure = 400 ÷ 0.02 = 20,000 Pa

When the student stands on both feet (area = 0.04 m²):
Pressure = 400 ÷ 0.04 = 10,000 Pa (half the pressure)

In Malawi, understanding pressure helps:
- Farmers choose appropriate tyres for their tractors
- Builders design foundations that don't sink into soil
- Students choose comfortable school bags
- Engineers design safe buildings

Remember: For the same force, SMALLER AREA = HIGHER PRESSURE, and LARGER AREA = LOWER PRESSURE.`,
  summary: 'Pressure = force ÷ area (P = F/A). SI unit is Pascal (Pa) = 1 N/m². Small area = high pressure (knives, needles). Large area = low pressure (tractor tyres, snowshoes). Understanding pressure helps in tool design, construction, and everyday safety.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Tractor Tyres', description: 'Wide tyres reduce pressure on soil, preventing sinking.' },
    { title: 'School Bags', description: 'Wide straps reduce pressure on shoulders.' },
    { title: 'Building Foundations', description: 'Wide foundations reduce pressure on soil, preventing collapse.' }
  ],
  practiceQuestions: [
    { question: 'A 500 N weight rests on an area of 0.1 m². Calculate pressure.', answer: '5000 Pa', hint: '500 ÷ 0.1 = 5000' },
    { question: 'Why do sharp knives cut better than blunt ones?', answer: 'Smaller area gives higher pressure', hint: 'Force same, area smaller' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 3',
  topic: 'Pressure',
  lessonNumber: 2,
  lessonTitle: 'Pressure in Liquids',
  lessonId: 'physics-f3-pressure-2',
  order: 15,
  learningObjectives: [
    'Explain that pressure in liquids increases with depth',
    'Derive and apply the formula p = ρgh',
    'State that pressure in liquids acts equally in all directions',
    'Explain why dams are built wider at the bottom'
  ],
  introduction: 'Have you ever dived into a swimming pool and felt pressure in your ears? That is LIQUID PRESSURE! The deeper you go, the more pressure you feel. Today, I will explain why liquid pressure increases with depth and why this is important for designing dams, water tanks, and even swimming pools in Malawi.',
  keyPoints: [
    'Pressure in liquids increases with depth: p = ρgh',
    'ρ (rho) = density of liquid (kg/m³)',
    'g = acceleration due to gravity (9.8 m/s², often 10 for calculations)',
    'h = depth (metres)',
    'Liquid pressure acts equally in all directions',
    'Pressure depends only on depth and density, not on container shape'
  ],
  detailedContent: `Let me explain PRESSURE IN LIQUIDS.

When you dive into a pool, you feel pressure in your ears. That pressure increases as you go deeper. Why? Because the weight of the water above you increases with depth.

The formula for liquid pressure is: P = ρgh
Where:
- P = pressure (in Pascals, Pa)
- ρ (rho) = density of the liquid (kg/m³)
- g = acceleration due to gravity (9.8 m/s² ≈ 10 m/s²)
- h = depth (in metres)

Let me show you calculations:

Example 1: Calculate the pressure at the bottom of a lake that is 5 metres deep. Density of water = 1000 kg/m³, g = 10 m/s².
P = 1000 × 10 × 5 = 50,000 Pa (or 50 kPa)

Example 2: Calculate the pressure at the bottom of a swimming pool 2 metres deep.
P = 1000 × 10 × 2 = 20,000 Pa (20 kPa)

Example 3: A dam holds water to a depth of 20 metres. What is the pressure at the bottom?
P = 1000 × 10 × 20 = 200,000 Pa = 200 kPa

IMPORTANT PROPERTIES OF LIQUID PRESSURE:

1. Pressure increases with depth. The deeper you go, the greater the pressure.

2. Pressure at the same depth is the SAME in all directions. Water squirts out of a hole in all directions with the same force.

3. Pressure depends ONLY on depth and density, NOT on the shape of the container. A tall thin column and a short wide container have the same pressure at the same depth.

4. A connecting vessel (communicating vessels) will have the same liquid level in all branches because pressure equalises.

WHY ARE DAMS BUILT WIDER AT THE BOTTOM?

Dams are built wider at the bottom because pressure is greatest at the greatest depth. The bottom of the dam must withstand much higher pressure than the top, so it needs to be thicker and stronger.

Think about the Kamuzu Dam or other water reservoirs in Malawi. The dam wall is much thicker at the bottom than at the top.

PRACTICAL APPLICATIONS IN MALAWI:

| Application | How Liquid Pressure Applies |
|-------------|----------------------------|
| Water Towers | Water stored high gives pressure to taps |
| Dams | Thicker bottom withstands higher pressure |
| Swimming Pools | Deeper areas have more pressure |
| Water Pipes | Burst if pressure too high |

Let me give you a calculation example:

A water storage tank in Lilongwe is 10 metres high. What is the pressure at the bottom?
P = 1000 × 10 × 10 = 100,000 Pa = 100 kPa

This pressure is what pushes water through pipes to homes.

Remember: Liquid pressure = density × gravity × depth. Pressure increases with depth and density, but not with container shape.`,
  summary: 'Liquid pressure = ρgh. Pressure increases with depth and density. Pressure acts equally in all directions at the same depth. Dams are wider at the bottom because pressure is greatest there. This formula is essential for designing water systems and understanding diving.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Kamuzu Dam', description: 'Dam walls are thicker at the bottom to withstand higher pressure.' },
    { title: 'Water Towers', description: 'Height of tower determines water pressure in homes.' },
    { title: 'Lake Malawi Diving', description: 'Divers feel pressure increase as they go deeper.' }
  ],
  practiceQuestions: [
    { question: 'Calculate pressure at 10m depth in water (ρ=1000 kg/m³, g=10 m/s²)', answer: '100,000 Pa', hint: '1000 × 10 × 10 = 100,000' },
    { question: 'Why are dams thicker at the bottom?', answer: 'Pressure is greatest at greatest depth', hint: 'Bottom must withstand more force' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 3',
  topic: 'Pressure',
  lessonNumber: 3,
  lessonTitle: 'Atmospheric Pressure and Applications',
  lessonId: 'physics-f3-pressure-3',
  order: 16,
  learningObjectives: [
    'Explain atmospheric pressure',
    'Describe experiments that demonstrate atmospheric pressure',
    'State how atmospheric pressure changes with altitude',
    'Apply knowledge of atmospheric pressure to everyday situations'
  ],
  introduction: 'Welcome back! Did you know that the air around you has weight and is pressing on you from all sides? This is ATMOSPHERIC PRESSURE. You don\'t feel it because your body pushes back equally. Today, I will demonstrate the power of atmospheric pressure and explain why your ears pop when travelling up Mulanje Mountain.',
  keyPoints: [
    'Atmospheric pressure is the pressure exerted by the weight of air',
    'At sea level, atmospheric pressure = 101,325 Pa ≈ 101 kPa',
    'Atmospheric pressure DECREASES with increasing altitude',
    'A barometer measures atmospheric pressure',
    'We don\'t feel it because our bodies push back equally'
  ],
  detailedContent: `Let me explain ATMOSPHERIC PRESSURE.

The Earth is surrounded by a layer of air called the atmosphere. This air has weight. The weight of the air pressing down on us is called ATMOSPHERIC PRESSURE.

At sea level, atmospheric pressure is about 101,325 Pascals (101 kPa). That is like having a 1 kg weight pressing on every square centimetre of your body!

Why don't we feel it? Because the fluids inside our bodies push outward with the same pressure. There is balance.

DEMONSTRATIONS OF ATMOSPHERIC PRESSURE:

1. THE COLLAPSING CAN EXPERIMENT:
- Put a small amount of water in a metal can
- Heat until steam fills the can
- Quickly seal the can and cool
- The can collapses! (Steam condensed, pressure inside dropped, atmospheric pressure crushed it)

2. THE DRINKING STRAW:
- When you suck on a straw, you reduce pressure inside your mouth
- Atmospheric pressure pushes the drink up the straw
- You don't "suck" the drink up; atmospheric pressure pushes it!

3. THE MAGDEBURG HEMISPHERES:
- Two metal hemispheres fit together to form a sphere
- Air is pumped out
- Teams of horses cannot pull them apart! (Atmospheric pressure holds them together)

4. EGG IN A BOTTLE:
- A peeled hard-boiled egg sits on a bottle opening
- Light a match and drop it in the bottle
- The egg gets sucked in (heating then cooling changes pressure)

ALTITUDE AND PRESSURE:

As altitude increases, atmospheric pressure DECREASES.

- At sea level: 101 kPa
- At 1000 m (like parts of Mulanje): about 90 kPa
- At 5000 m: about 54 kPa

When you drive up Mulanje Mountain, your ears may "pop". This happens because the pressure outside changes faster than the pressure inside your ears can adjust.

PRACTICAL APPLICATIONS:

| Application | How Atmospheric Pressure Works |
|-------------|-------------------------------|
| Syringe | Pulling plunger creates low pressure, fluid pushed in |
| Vacuum Packing | Air removed, atmospheric pressure seals package |
| Suction Cups | Air pushed out, pressure holds them on |
| Aircraft | Cabin pressurised so passengers can breathe |

In Malawi, understanding atmospheric pressure helps:
- Pilots flying over Malawi
- Climbers on Mulanje Mountain
- Engineers designing sealed containers
- Doctors using syringes

A PROTIP: When cooking at high altitudes, water boils at a lower temperature (because pressure is lower). This affects cooking times for nsima and other foods.

Remember: Atmospheric pressure is the weight of air. It decreases with altitude. We demonstrate it with collapsing cans, straws, and suction cups.`,
  summary: 'Atmospheric pressure is the weight of air (101 kPa at sea level). It decreases with altitude. Demonstrations: collapsing can, drinking straw, Magdeburg hemispheres. This explains ear popping on mountains and how syringes and suction cups work.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Mulanje Mountain', description: 'Ears pop when driving up due to pressure change.' },
    { title: 'Cooking nsima', description: 'Cooking time changes at high altitude.' },
    { title: 'Medical Syringes', description: 'Atmospheric pressure pushes medicine into syringe.' }
  ],
  practiceQuestions: [
    { question: 'What is atmospheric pressure at sea level?', answer: '101 kPa (approx)', hint: '101,325 Pa' },
    { question: 'What happens to atmospheric pressure as altitude increases?', answer: 'It decreases', hint: 'Less air above' }
  ]
},

// Topic: Gas Laws (3 lessons)
{
  subject: 'Physics',
  form: 'Form 3',
  topic: 'Gas Laws',
  lessonNumber: 1,
  lessonTitle: 'Boyle\'s Law - Pressure and Volume',
  lessonId: 'physics-f3-gas-laws-1',
  order: 17,
  learningObjectives: [
    'State Boyle\'s law',
    'Explain the relationship between pressure and volume at constant temperature',
    'Apply Boyle\'s law to solve problems',
    'Describe experiments to verify Boyle\'s law'
  ],
  introduction: 'Hello, gas explorer! Gases behave differently from solids and liquids. They can be compressed easily. Today, I will teach you about BOYLE\'S LAW, which describes how the pressure and volume of a gas are related when the temperature stays the same. This is important for understanding bicycle pumps, syringes, and even how we breathe!',
  keyPoints: [
    'Boyle\'s law: For a fixed mass of gas at constant temperature, pressure × volume = constant',
    'Equation: P₁V₁ = P₂V₂',
    'When volume decreases, pressure increases',
    'When volume increases, pressure decreases',
    'This explains how a bicycle pump works'
  ],
  detailedContent: `Let me explain BOYLE'S LAW.

Robert Boyle discovered that for a fixed amount of gas at constant temperature, the pressure and volume are inversely related. This means:

When you SQUEEZE a gas (decrease volume), the pressure INCREASES.
When you let a gas expand (increase volume), the pressure DECREASES.

The mathematical equation is: P₁V₁ = P₂V₂
Where:
- P₁ = initial pressure
- V₁ = initial volume
- P₂ = final pressure
- V₂ = final volume

Let me show you calculations:

Example 1: A gas occupies 2 m³ at a pressure of 100 kPa. If the volume is reduced to 1 m³ at constant temperature, what is the new pressure?
P₁V₁ = P₂V₂
100 × 2 = P₂ × 1
200 = P₂ × 1
P₂ = 200 kPa (pressure doubled when volume halved)

Example 2: A gas at 150 kPa has volume 0.5 m³. If the pressure increases to 300 kPa, what is the new volume?
150 × 0.5 = 300 × V₂
75 = 300 × V₂
V₂ = 75 ÷ 300 = 0.25 m³ (volume halved when pressure doubled)

Example 3: A bicycle pump has a cylinder volume of 0.0005 m³. When you push the plunger, the volume decreases to 0.0001 m³. If the initial pressure is 100 kPa, what is the final pressure?
100 × 0.0005 = P₂ × 0.0001
0.05 = P₂ × 0.0001
P₂ = 0.05 ÷ 0.0001 = 500 kPa

EXPERIMENT TO VERIFY BOYLE'S LAW:

You can use a Boyle's law apparatus:
- A gas trapped in a tube by a column of oil
- Change the pressure by adding weights
- Measure the volume of gas
- Plot P against 1/V to get a straight line

REAL-LIFE APPLICATIONS IN MALAWI:

| Application | How Boyle's Law Works |
|-------------|----------------------|
| Bicycle Pump | Pushing plunger decreases volume, increases pressure to push air into tyre |
| Syringe | Pulling plunger increases volume, decreases pressure, sucks in fluid |
| Breathing | Diaphragm moves down, lung volume increases, pressure decreases, air rushes in |
| Spray Cans | Pressurised gas propels liquid out when valve opens |

In Malawi, Boyle's law is used in:
- Bicycle repair shops (pumping tyres)
- Hospitals (syringes for medicine)
- Scuba diving (if you dive, pressure changes affect air volume in lungs)
- Spray painting (compressed air sprayers)

A PROTIP: Never heat a sealed container! As temperature increases, pressure increases (we learn this next lesson). A sealed can can explode if heated because the gas expands.

Remember: Boyle's law: P₁V₁ = P₂V₂ at constant temperature. Pressure and volume are inversely related. Squeeze gas → pressure up. Let gas expand → pressure down.`,
  summary: 'Boyle\'s law: P₁V₁ = P₂V₂ (constant temperature, fixed mass). Pressure and volume are inversely related. Half volume = double pressure. This explains bike pumps, syringes, breathing, and spray cans.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Bicycle Pump', description: 'Squeezing air reduces volume, increases pressure to inflate tyres.' },
    { title: 'Syringe', description: 'Pulling plunger increases volume, decreases pressure, draws in medicine.' },
    { title: 'Spray Painting', description: 'Compressed air propels paint through nozzle.' }
  ],
  practiceQuestions: [
    { question: 'A gas at 200 kPa has volume 0.3 m³. Pressure increases to 600 kPa. Find new volume.', answer: '0.1 m³', hint: '200×0.3=600×V → V=60÷600=0.1' },
    { question: 'What happens to pressure when volume is halved?', answer: 'Pressure doubles', hint: 'Inversely proportional' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 3',
  topic: 'Gas Laws',
  lessonNumber: 2,
  lessonTitle: 'Charles\' Law - Volume and Temperature',
  lessonId: 'physics-f3-gas-laws-2',
  order: 18,
  learningObjectives: [
    'State Charles\' law',
    'Explain the relationship between volume and temperature at constant pressure',
    'Convert between Celsius and Kelvin scales',
    'Apply Charles\' law to solve problems'
  ],
  introduction: 'Welcome back! Have you ever seen a hot air balloon rise? Or noticed that a football becomes harder on a hot day? These are examples of CHARLES\' LAW, which describes how gases expand when heated. Today, I will explain how temperature affects gas volume when pressure stays constant.',
  keyPoints: [
    'Charles\' law: For a fixed mass of gas at constant pressure, volume ÷ temperature = constant',
    'Equation: V₁/T₁ = V₂/T₂',
    'Temperature MUST be in Kelvin (K), not Celsius (°C)',
    'Kelvin = Celsius + 273',
    'Absolute zero (0 K = -273°C) is the coldest possible temperature'
  ],
  detailedContent: `Let me explain CHARLES' LAW.

Jacques Charles discovered that for a fixed amount of gas at constant pressure, the volume is directly proportional to the absolute temperature.

This means: When you HEAT a gas, it EXPANDS (volume increases). When you COOL a gas, it CONTRACTS (volume decreases).

The equation is: V₁/T₁ = V₂/T₂
Where:
- V₁ = initial volume
- T₁ = initial temperature (in Kelvin)
- V₂ = final volume
- T₂ = final temperature (in Kelvin)

IMPORTANT: You MUST use the KELVIN temperature scale!

Converting between Celsius and Kelvin:
- Kelvin = Celsius + 273
- Celsius = Kelvin - 273

Absolute zero is 0 K = -273°C. At this temperature, particles have no kinetic energy.

Let me show you calculations:

Example 1: A gas occupies 2 m³ at 27°C. If the temperature increases to 127°C at constant pressure, what is the new volume?
First convert to Kelvin: 27°C = 27 + 273 = 300 K; 127°C = 127 + 273 = 400 K
V₁/T₁ = V₂/T₂
2/300 = V₂/400
Cross multiply: 2 × 400 = 300 × V₂
800 = 300 × V₂
V₂ = 800 ÷ 300 = 2.67 m³ (volume increased)

Example 2: A gas has volume 0.5 m³ at 100°C. If it cools to 0°C, what is the new volume?
Convert: 100°C = 373 K; 0°C = 273 K
0.5/373 = V₂/273
0.5 × 273 = 373 × V₂
136.5 = 373 × V₂
V₂ = 136.5 ÷ 373 = 0.366 m³ (volume decreased)

Example 3: A balloon has volume 1 m³ at 30°C. If the temperature drops to 10°C, what happens?
303 K → 283 K
1/303 = V₂/283 → V₂ = (1 × 283) ÷ 303 = 0.93 m³ (balloon shrinks)

REAL-LIFE APPLICATIONS IN MALAWI:

| Application | How Charles' Law Works |
|-------------|------------------------|
| Hot Air Balloons | Heating air expands, becomes less dense, balloon rises |
| Football/ Tyres | On hot days, air expands → higher pressure (feels harder) |
| Thermometers | Liquid expands but this also applies to gas thermometers |
| Baking | Bread rises because gas in dough expands when heated |

In Malawi, Charles' law affects:
- Tyre pressure (check tyres when cool for accurate reading)
- Bread making (yeast produces gas that expands when baked)
- Weather balloons (expand as they rise into colder air)

A PROTIP: Check your car tyres early in the morning when they are cool. If you check after driving, the air is hot and expanded, giving a false high reading. When the tyres cool, pressure drops, and you might be under-inflated.

Remember: Charles' law: V₁/T₁ = V₂/T₂ at constant pressure. Volume increases with temperature (in Kelvin). Always use Kelvin scale! Absolute zero = -273°C.`,
  summary: 'Charles\' law: V₁/T₁ = V₂/T₂ (constant pressure, fixed mass). Volume is proportional to absolute temperature (Kelvin). Heating gas expands it; cooling contracts it. Always convert °C to K by adding 273. This explains hot air balloons and tyre pressure changes.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Car Tyres', description: 'Tyres feel harder on hot days because air expands.' },
    { title: 'Bread Baking', description: 'Gas in dough expands when heated, making bread rise.' },
    { title: 'Hot Air Balloons', description: 'Heated air expands, becomes less dense, lifts balloon.' }
  ],
  practiceQuestions: [
    { question: 'Convert 25°C to Kelvin.', answer: '298 K', hint: '25 + 273 = 298' },
    { question: 'A gas at 300 K has volume 0.6 m³. If temperature drops to 200 K, find volume.', answer: '0.4 m³', hint: '0.6/300 = V/200 → V = 0.4' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 3',
  topic: 'Gas Laws',
  lessonNumber: 3,
  lessonTitle: 'Pressure Law and Combined Gas Law',
  lessonId: 'physics-f3-gas-laws-3',
  order: 19,
  learningObjectives: [
    'State the Pressure Law (Gay-Lussac\'s law)',
    'Explain the relationship between pressure and temperature at constant volume',
    'Combine Boyle\'s and Charles\' laws into the combined gas law',
    'Apply gas laws to solve complex problems'
  ],
  introduction: 'Welcome to the final gas law lesson! Today, you will learn the PRESSURE LAW (how pressure changes with temperature at constant volume) and how to combine all three gas laws into one powerful equation. This will help you solve any problem involving gases, from weather balloons to car engines.',
  keyPoints: [
    'Pressure Law: For fixed mass at constant volume, P₁/T₁ = P₂/T₂',
    'Combined Gas Law: P₁V₁/T₁ = P₂V₂/T₂',
    'All temperatures must be in Kelvin',
    'The combined law works when any two of P, V, T change',
    'If temperature is constant → Boyle\'s law (P₁V₁ = P₂V₂)',
    'If pressure is constant → Charles\' law (V₁/T₁ = V₂/T₂)',
    'If volume is constant → Pressure Law (P₁/T₁ = P₂/T₂)'
  ],
  detailedContent: `Let me explain the PRESSURE LAW and the COMBINED GAS LAW.

PRESSURE LAW (Gay-Lussac's Law):

For a fixed mass of gas at constant volume, the pressure is directly proportional to the absolute temperature.

Equation: P₁/T₁ = P₂/T₂ (T in Kelvin)

This means: When you HEAT a gas in a sealed container, the pressure INCREASES. When you COOL it, the pressure DECREASES.

Example: A sealed container of gas at 300 K has pressure 200 kPa. If heated to 400 K, what is the new pressure?
P₁/T₁ = P₂/T₂
200/300 = P₂/400
200 × 400 = 300 × P₂
80,000 = 300 × P₂
P₂ = 80,000 ÷ 300 = 266.7 kPa

This is why aerosol cans have warnings: "Do not expose to heat". Pressure can build up and cause explosion!

THE COMBINED GAS LAW:

We can combine all three gas laws into one equation:

P₁V₁/T₁ = P₂V₂/T₂

This equation works for ANY change in pressure, volume, and temperature (as long as mass is constant).

If one variable is constant, it simplifies to the appropriate law:
- Temperature constant → P₁V₁ = P₂V₂ (Boyle)
- Pressure constant → V₁/T₁ = V₂/T₂ (Charles)
- Volume constant → P₁/T₁ = P₂/T₂ (Pressure Law)

Let me show you examples:

Example 1: A gas has initial pressure 100 kPa, volume 2 m³, temperature 300 K. It is changed to pressure 150 kPa, temperature 350 K. Find new volume.
P₁V₁/T₁ = P₂V₂/T₂
(100 × 2)/300 = (150 × V₂)/350
200/300 = (150 × V₂)/350
0.667 = (150 × V₂)/350
0.667 × 350 = 150 × V₂
233.3 = 150 × V₂
V₂ = 233.3 ÷ 150 = 1.56 m³

Example 2: A weather balloon has volume 1 m³ at ground level (100 kPa, 300 K). At altitude, pressure is 50 kPa, temperature is 250 K. Find new volume.
(100 × 1)/300 = (50 × V₂)/250
100/300 = (50 × V₂)/250
0.333 = (50 × V₂)/250
0.333 × 250 = 50 × V₂
83.3 = 50 × V₂
V₂ = 83.3 ÷ 50 = 1.67 m³ (balloon expands)

PRACTICAL APPLICATIONS IN MALAWI:

| Application | How Gas Laws Apply |
|-------------|---------------------|
| Weather Balloons | Expand at altitude (lower pressure) |
| Car Engines | Compression heats gases (Boyle + Pressure Law) |
| Aerosol Cans | Risk of explosion if heated (Pressure Law) |
| Refrigerators | Gas compression and expansion cycle |

In Malawi, gas laws are used in:
- Meteorological balloons for weather forecasting
- Refrigeration repair shops
- Engine mechanics
- Food preservation (vacuum sealing)

A PROTIP: If you ever travel from Lilongwe (high altitude) to the lakeshore (low altitude), sealed packets may swell or shrink due to pressure differences - that is the combined gas law in action!

Remember: Combined gas law: P₁V₁/T₁ = P₂V₂/T₂. Temperature must be in Kelvin. Use this to solve any gas problem when mass is constant.`,
  summary: 'Pressure Law: P₁/T₁ = P₂/T₂ at constant volume. Combined Gas Law: P₁V₁/T₁ = P₂V₂/T₂. This combines Boyle\'s, Charles\'s, and Pressure laws. Temperature must be in Kelvin. This explains weather balloons, car engines, and why aerosol cans should not be heated.',
  estimatedTime: '23 mins',
  malawiExamples: [
    { title: 'Weather Balloons', description: 'Balloons expand at altitude due to lower pressure.' },
    { title: 'Aerosol Cans', description: 'Heating increases pressure, can explode.' },
    { title: 'Car Engines', description: 'Compression strokes use gas laws to increase temperature.' }
  ],
  practiceQuestions: [
    { question: 'A gas at 250 K, 150 kPa, 0.5 m³ is changed to 350 K, 200 kPa. Find volume.', answer: '0.304 m³', hint: 'P₁V₁/T₁ = P₂V₂/T₂ → (150×0.5)/250 = (200×V₂)/350' },
    { question: 'Why do sealed packets swell at high altitude?', answer: 'Lower external pressure allows gas inside to expand', hint: 'Combined gas law' }
  ]
}
,

// ======================================================================
// BIOLOGY FORM 1
// ======================================================================

// Topic: Characteristics of Living Things (2 lessons)
{
  subject: 'Biology',
  form: 'Form 1',
  topic: 'Characteristics of Living Things',
  lessonNumber: 1,
  lessonTitle: 'The Seven Characteristics of Life (MRS GREN)',
  lessonId: 'biology-f1-characteristics-1',
  order: 20,
  learningObjectives: [
    'List the seven characteristics of living things',
    'Explain each characteristic with examples',
    'Distinguish between living and non-living things',
    'Apply MRS GREN to identify living organisms'
  ],
  introduction: 'Good day, young biologist! Look around you. The dog barking, the maize plant growing, the bird flying - they are all alive. But what makes something alive? What is the difference between a living dog and a toy dog? Today, I will teach you the seven characteristics that all living things share. Once you know these, you will never confuse a living thing with a non-living thing again!',
  keyPoints: [
    'M - Movement: Living things can move (animals move, plants grow towards light)',
    'R - Respiration: Living things release energy from food',
    'S - Sensitivity: Living things respond to changes in their environment',
    'G - Growth: Living things increase in size and complexity',
    'R - Reproduction: Living things produce offspring',
    'E - Excretion: Living things remove waste products',
    'N - Nutrition: Living things take in and use food'
  ],
  detailedContent: `Let me introduce you to the seven characteristics of living things. Biologists use the acronym "MRS GREN" to remember them:

M - MOVEMENT: Living things can move. Animals move from place to place - a chicken walking, a fish swimming, a person running. Plants move too, but more slowly - a sunflower turns towards the sun, roots grow towards water.

R - RESPIRATION: This is NOT the same as breathing! Respiration is the chemical process that releases energy from food. All living things need energy to stay alive. When you eat nsima, your cells use oxygen to release the energy from the food.

S - SENSITIVITY: Living things can detect and respond to changes in their environment. When you touch a hot stove, you pull your hand away quickly. When a plant's leaves are touched, some plants (like the sensitive plant, which grows in Malawi) close their leaves.

G - GROWTH: Living things grow and develop. A baby grows into an adult. A maize seed grows into a tall plant with cobs. A chicken egg hatches into a chick that grows into a hen.

R - REPRODUCTION: Living things produce offspring. This can be sexual (involving two parents) or asexual (one parent). This characteristic ensures that species continue. A hen lays eggs that hatch into chicks. A maize plant produces seeds that grow into new plants.

E - EXCRETION: Living things remove waste products from their bodies. When you sweat, urinate, or breathe out carbon dioxide, you are excreting. Plants also excrete - they release oxygen as a waste product of photosynthesis.

N - NUTRITION: Living things need food. Animals eat other organisms (plants or other animals) for food. Plants make their own food through photosynthesis using sunlight.

Let me test you. Is a car alive? A car moves (M), but it does not grow (G), reproduce (R), excrete (E), or need nutrition (N) in the biological sense. So a car is NOT alive.

Is a seed alive? A seed is a dormant living thing. It does not move much, but it respires (very slowly), it can grow when conditions are right, and it can reproduce (grow into a plant that makes seeds). So yes, seeds are alive!

Now, here is a question for you: A fire moves, grows, and needs fuel (like nutrition). Is fire alive? Think about it. Fire does not have cells, does not reproduce offspring, and does not excrete waste. So fire is not considered alive.

In Malawi, you can see these characteristics everywhere:
- A chicken scratching for food (nutrition, movement)
- A maize plant growing taller (growth)
- A dog panting on a hot day (response to temperature - sensitivity)
- A farmer harvesting groundnuts (products of reproduction)

Understanding these seven characteristics helps biologists classify organisms and understand the natural world around us.

Remember MRS GREN - it will help you remember all seven characteristics!`,
  summary: 'All living things share seven characteristics: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, and Nutrition (MRS GREN). These characteristics distinguish living from non-living things. Understanding these helps us identify and study life in all its forms.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Chicken Life Cycle', description: 'A hen lays eggs (reproduction), chicks grow (growth), chicks scratch for food (nutrition).' },
    { title: 'Maize Plant', description: 'Seed germinates (growth), grows toward light (sensitivity), produces seeds (reproduction).' },
    { title: 'Dog on a Hot Day', description: 'Pants (response to temperature), drinks water (nutrition), runs (movement).' }
  ],
  practiceQuestions: [
    { question: 'What does the "R" in MRS GREN stand for?', answer: 'Respiration', hint: 'Not reproduction' },
    { question: 'Is a car considered alive? Why?', answer: 'No, it does not grow, reproduce, excrete, or need nutrition', hint: 'Missing most characteristics' }
  ]
},
{
  subject: 'Biology',
  form: 'Form 1',
  topic: 'Characteristics of Living Things',
  lessonNumber: 2,
  lessonTitle: 'Cells - The Basic Unit of Life',
  lessonId: 'biology-f1-characteristics-2',
  order: 21,
  learningObjectives: [
    'State the cell theory',
    'Explain why the cell is the basic unit of life',
    'Distinguish between unicellular and multicellular organisms',
    'Identify examples of unicellular organisms'
  ],
  introduction: 'Hello again! Now that you know what makes something alive, let us look at the basic building block of all living things - the CELL. Every living thing on Earth is made of cells. Some organisms have just one cell, while others have trillions. Today, you will learn about the cell theory and the difference between unicellular and multicellular organisms.',
  keyPoints: [
    'Cell theory: All living things are made of cells',
    'Cells are the basic structural and functional units of life',
    'All cells come from pre-existing cells (cells divide)',
    'Unicellular organisms consist of a single cell (bacteria, amoeba)',
    'Multicellular organisms consist of many specialized cells (humans, maize, chickens)'
  ],
  detailedContent: `Let me introduce you to CELL THEORY - the foundation of all biology.

The cell theory has three main principles:

1. All living things are made of one or more cells.
2. The cell is the basic structural and functional unit of life.
3. All cells come from pre-existing cells (cells divide to make new cells).

UNICELLULAR ORGANISMS:

These organisms are made of only ONE cell! You cannot see them without a microscope. Examples include:

- BACTERIA: The smallest living organisms. Some bacteria in Malawi are helpful (like those that make chambo from milk), while others cause diseases.

- AMOEBA: Found in pond water in Malawi. It moves by extending "false feet" (pseudopods) and engulfs food.

- PARAME: Another pond water organism that moves using tiny hairs called cilia.

- YEAST: A fungus used to make bread rise and to brew traditional beer (masese).

These single cells must do everything: eat, move, reproduce, excrete waste - all within one tiny cell!

MULTICELLULAR ORGANISMS:

Most living things you see in Malawi are made of many cells. You, a maize plant, a chicken, a goat - all are multicellular.

In multicellular organisms, cells SPECIALIZE (take on different jobs):

- Muscle cells contract to help you move
- Nerve cells transmit signals
- Red blood cells carry oxygen
- Root hair cells absorb water and nutrients
- Leaf cells carry out photosynthesis

CELL SPECIALIZATION IN MALAWI EXAMPLES:

| Organism | Specialized Cells |
|----------|-------------------|
| Maize Plant | Root cells (absorb water), Leaf cells (photosynthesis), Stem cells (support, transport) |
| Chicken | Muscle cells (movement), Blood cells (transport oxygen), Egg cells (reproduction) |
| Human | Nerve cells (sense touch), Muscle cells (move), Stomach cells (digest food) |

WHY ARE CELLS SO SMALL?

Cells are tiny because they need to exchange materials (oxygen, nutrients, waste) through their surface. As a cell gets larger, its volume increases faster than its surface area. If a cell were too big, it could not get enough nutrients in or get waste out fast enough.

Imagine a village in Malawi. The village has many houses, each with a family. One family cannot do everything for the whole village - they specialize. Some families farm, some fish, some run shops, some teach. Cells in your body work the same way!

In Malawi, when we look at a maize leaf under a microscope, we can see the cells arranged like bricks in a wall. Each cell is alive and working.

Understanding cells helps doctors treat diseases, helps farmers grow better crops, and helps scientists develop new medicines. Every part of biology starts with the cell.`,
  summary: 'Cell theory: all living things are made of cells; cells are the basic unit of life; cells come from pre-existing cells. Unicellular organisms (bacteria, amoeba) have one cell. Multicellular organisms (plants, animals) have many specialized cells. Cell size is limited by surface area to volume ratio.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Yeast in Baking', description: 'Yeast is a unicellular fungus used to make bread rise.' },
    { title: 'Maize Plant Cells', description: 'A maize plant has specialized cells for roots, leaves, and stems.' },
    { title: 'Pond Water', description: 'Pond water in Malawi contains amoeba and paramecium - unicellular organisms.' }
  ],
  practiceQuestions: [
    { question: 'What are the three parts of cell theory?', answer: 'All living things made of cells; cells are basic unit; cells come from existing cells', hint: 'Three main principles' },
    { question: 'Give an example of a unicellular organism found in Malawi.', answer: 'Yeast, bacteria, amoeba, paramecium', hint: 'Microscopic organisms' }
  ]
}
,

// ======================================================================
// BIOLOGY FORM 2
// ======================================================================

// Topic: The Cell (Structure and Function) - 3 lessons
{
  subject: 'Biology',
  form: 'Form 2',
  topic: 'The Cell',
  lessonNumber: 1,
  lessonTitle: 'Parts of an Animal Cell',
  lessonId: 'biology-f2-the-cell-1',
  order: 22,
  learningObjectives: [
    'Identify the main parts of an animal cell under a microscope',
    'State the functions of each cell organelle',
    'Draw and label a typical animal cell',
    'Relate cell structures to their functions'
  ],
  introduction: 'Welcome to the microscopic world of the cell! Today, we will explore the inside of an ANIMAL CELL. Imagine a busy city - it has a control centre, power stations, factories, and transport systems. A cell is just like that! It has different parts called ORGANELLES, each with its own special job.',
  keyPoints: [
    'Cell membrane: Controls what enters and leaves the cell (like a security gate)',
    'Nucleus: Control centre containing DNA (the "brain" of the cell)',
    'Cytoplasm: Jelly-like substance where chemical reactions happen',
    'Mitochondria: Powerhouses that release energy from food',
    'Ribosomes: Protein factories',
    'Vacuoles: Storage compartments (small in animal cells)'
  ],
  detailedContent: `Let me take you on a tour inside an animal cell. Each part has a specific job - we call these parts ORGANELLES (little organs).

1. CELL MEMBRANE
The cell membrane is like a security gate or a wall with doors. It surrounds the entire cell and controls what enters and leaves. It allows nutrients (like glucose and oxygen) to enter and waste products to leave. Without the cell membrane, the cell would not be able to maintain its internal environment.

2. NUCLEUS
The nucleus is the CONTROL CENTRE - the "brain" of the cell. It contains DNA (deoxyribonucleic acid), which carries all the instructions for the cell's activities. The nucleus tells the cell when to grow, when to divide, and what proteins to make. Without a nucleus, a cell cannot function properly and will die.

3. CYTOPLASM
The cytoplasm is the jelly-like substance that fills the cell. All the organelles float in it. Many chemical reactions (like breaking down glucose for energy) happen in the cytoplasm. It is mostly water with dissolved nutrients and other molecules.

4. MITOCHONDRIA (singular: mitochondrion)
Mitochondria are the POWERHOUSES of the cell. They take food molecules (like glucose) and combine them with oxygen to release energy. This process is called RESPIRATION. The more active a cell is, the more mitochondria it has. For example, muscle cells have many mitochondria because they need lots of energy to contract.

5. RIBOSOMES
Ribosomes are the FACTORIES that make PROTEINS. Proteins are essential for building cell structures and for chemical reactions (enzymes are proteins). Ribosomes can be found floating in the cytoplasm or attached to other structures. They read the instructions from the DNA and build proteins accordingly.

6. VACUOLES
Vacuoles are STORAGE compartments. They store water, nutrients, and waste products. In animal cells, vacuoles are small and numerous. (Plant cells have one large vacuole - we will learn about that in the next lesson).

Let me give you a memory tool: Think of a school.
- The cell membrane is like the school fence (controls who enters)
- The nucleus is like the head teacher's office (control centre)
- The cytoplasm is like the school grounds (where activities happen)
- Mitochondria are like the school kitchen (provides energy to students)
- Ribosomes are like the classrooms (where learning/protein production happens)

In Malawi, we can see the importance of these cell parts:
- Athletes need more mitochondria in their muscle cells for energy
- Your skin cells have a strong cell membrane to protect against germs
- Nerve cells have long extensions to carry messages

Drawing tip: When drawing an animal cell, make it roundish. Draw the cell membrane as a thin line around the outside. Draw the nucleus as a large circle inside. Draw many small dots (ribosomes) and some oval shapes (mitochondria). Label each part clearly.`,
  summary: 'Animal cells contain a cell membrane (controls entry/exit), nucleus (control centre), cytoplasm (where reactions occur), mitochondria (release energy), ribosomes (make proteins), and vacuoles (store materials). Each organelle has a specific function that keeps the cell alive.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Athletes\' Muscles', description: 'Muscle cells have many mitochondria for energy during sports.' },
    { title: 'Skin Protection', description: 'Skin cell membranes protect against bacteria and injury.' },
    { title: 'Nerve Signals', description: 'Nerve cells have long extensions to send signals from brain to body.' }
  ],
  practiceQuestions: [
    { question: 'Which organelle is called the "powerhouse" of the cell?', answer: 'Mitochondria', hint: 'Releases energy from food' },
    { question: 'What does the nucleus contain?', answer: 'DNA (genetic material)', hint: 'The control centre contains instructions' }
  ]
},
{
  subject: 'Biology',
  form: 'Form 2',
  topic: 'The Cell',
  lessonNumber: 2,
  lessonTitle: 'Plant Cells - Unique Features',
  lessonId: 'biology-f2-the-cell-2',
  order: 23,
  learningObjectives: [
    'Identify the parts of a typical plant cell',
    'State the functions of plant cell organelles',
    'Distinguish between plant and animal cells',
    'Draw and label a typical plant cell'
  ],
  introduction: 'Hello again! Now that you understand animal cells, let us explore PLANT cells. Plant cells have some parts that animal cells do not have. Have you ever wondered why plants can stand upright while animals have skeletons? Or why plants are green? The answers lie in the unique parts of plant cells!',
  keyPoints: [
    'Plant cells have a CELL WALL (rigid outer layer for support) - animal cells do not',
    'Plant cells have CHLOROPLASTS (contain chlorophyll for photosynthesis) - animal cells do not',
    'Plant cells have a LARGE CENTRAL VACUOLE (stores water and nutrients) - animal cells have many small vacuoles',
    'Plant cells are usually rectangular; animal cells are more rounded',
    'Both plant and animal cells have nucleus, cytoplasm, mitochondria, ribosomes, and cell membrane'
  ],
  detailedContent: `Let me introduce you to the three special parts of a PLANT CELL that animal cells do NOT have.

1. CELL WALL
Imagine a brick wall outside a house. The cell wall is like that - a rigid outer layer that surrounds the cell membrane. It is made of a tough material called CELLULOSE.

Functions of the cell wall:
- Provides SUPPORT and SHAPE to the plant (that is why plants can stand upright without bones!)
- Protects the cell from bursting when water enters
- Allows water and dissolved substances to pass through

In Malawi, when you look at a maize stalk, it stands tall because millions of maize cells have strong cell walls.

2. CHLOROPLASTS
Chloroplasts are the green structures inside plant cells. They contain a green pigment called CHLOROPHYLL.

Functions of chloroplasts:
- Capture sunlight energy
- Carry out PHOTOSYNTHESIS (making food using sunlight, carbon dioxide, and water)
- Give plants their green colour

That is why the leaves of maize, bananas, mango trees, and most plants in Malawi are green - they contain chlorophyll in their chloroplasts!

3. LARGE CENTRAL VACUOLE
While animal cells have many small vacuoles, plant cells have ONE large central vacuole. It can take up most of the cell's space.

Functions of the large central vacuole:
- Stores WATER (helps the plant stay turgid/firm)
- Stores nutrients and waste products
- Provides support (when full of water, it pushes against the cell wall, keeping the plant upright)

When a plant is wilting (drooping) because it has not been watered, it is because the large central vacuoles have lost water and the cells have become soft.

COMPARISON TABLE:

| Feature | Plant Cell | Animal Cell |
|---------|------------|-------------|
| Cell wall | YES | NO |
| Chloroplasts | YES | NO |
| Large vacuole | YES (one large) | NO (many small) |
| Shape | Rectangular | Rounded |
| Nucleus | YES | YES |
| Cytoplasm | YES | YES |
| Mitochondria | YES | YES |
| Ribosomes | YES | YES |

Let me give you a Malawi example. An onion bulb is a plant cell. Onion cells do NOT have chloroplasts because they grow underground and never see sunlight. That is why an onion is not green! But onion cells still have cell walls and large vacuoles.

When you eat nsima (made from maize), you are eating plant cells. The cell walls of maize give the nsima its structure.

Let me explain turgor pressure (the pressure inside a plant cell when the vacuole is full of water). When a plant has enough water:
- The vacuole is full
- It pushes against the cell wall
- The plant stands firm and upright (turgid)

When a plant lacks water:
- The vacuole shrinks
- The cell wall has nothing pushing against it
- The plant droops and wilts (flaccid)

This is why farmers in Malawi water their crops during dry spells - to keep the vacuoles full and the plants upright!

Drawing tip: When drawing a plant cell, make it rectangular. Draw the cell wall as a thick outer line, and the cell membrane as a thin inner line. Draw chloroplasts as oval shapes with dots inside (representing the green granules). Draw the large central vacuole as a big empty space in the middle of the cell. Label all parts.`,
  summary: 'Plant cells have three unique parts: cell wall (support), chloroplasts (photosynthesis), and large central vacuole (storage). Animal cells lack these structures. Both cell types share a nucleus, cytoplasm, mitochondria, ribosomes, and cell membrane.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Maize Plant', description: 'Maize stem cells have thick cell walls that allow the plant to grow tall without falling over.' },
    { title: 'Onion Cells', description: 'Onion cells have no chloroplasts because they grow underground, so onions are not green.' },
    { title: 'Wilting Plants', description: 'When a tomato plant wilts in the afternoon, its cells have lost water from the vacuoles.' }
  ],
  practiceQuestions: [
    { question: 'What part of a plant cell is responsible for photosynthesis?', answer: 'Chloroplasts', hint: 'The green structures' },
    { question: 'Do animal cells have a cell wall?', answer: 'No', hint: 'Animals have skeletons instead' }
  ]
},
{
  subject: 'Biology',
  form: 'Form 2',
  topic: 'The Cell',
  lessonNumber: 3,
  lessonTitle: 'Cell Division - Mitosis and Meiosis',
  lessonId: 'biology-f2-the-cell-3',
  order: 24,
  learningObjectives: [
    'Explain why cells divide',
    'Describe the stages of mitosis',
    'Describe the stages of meiosis',
    'Distinguish between mitosis and meiosis'
  ],
  introduction: 'Welcome back! How does a baby grow into an adult? How does a wound heal? How do we produce eggs and sperm? The answer is CELL DIVISION! Today, you will learn about two types of cell division: MITOSIS (for growth and repair) and MEIOSIS (for reproduction). This is one of the most important topics in biology!',
  keyPoints: [
    'Cells divide for growth, repair, and reproduction',
    'Mitosis: produces two identical daughter cells (for growth and repair)',
    'Meiosis: produces four genetically different cells (for sexual reproduction)',
    'Mitosis maintains chromosome number; meiosis halves it',
    'Both processes start with DNA replication'
  ],
  detailedContent: `Let me explain CELL DIVISION.

WHY DO CELLS DIVIDE?

1. GROWTH: A baby grows into an adult by making more cells.
2. REPAIR: When you cut your skin, new cells divide to heal the wound.
3. REPRODUCTION: Making new organisms (sexual reproduction uses meiosis, asexual uses mitosis).

MITOSIS (Growth and Repair):

Mitosis produces TWO daughter cells that are IDENTICAL to the parent cell. Each daughter cell has the SAME number of chromosomes as the parent.

Stages of Mitosis:

1. PROPHASE: Chromosomes condense and become visible. The nuclear membrane breaks down.

2. METAPHASE: Chromosomes line up in the middle of the cell.

3. ANAPHASE: Chromatids (the two copies of each chromosome) separate and move to opposite ends.

4. TELOPHASE: Nuclear membranes reform around the chromosomes at each end.

5. CYTOKINESIS: The cell splits into two identical daughter cells.

Where does mitosis happen in Malawi?
- When a maize seed germinates, cells divide by mitosis to grow the seedling
- When a chicken heals a cut, skin cells divide by mitosis
- When you grow taller, bone and muscle cells divide by mitosis

MEIOSIS (Reproduction):

Meiosis produces FOUR daughter cells that are GENETICALLY DIFFERENT from the parent cell. Each daughter cell has HALF the number of chromosomes (this is important for sexual reproduction).

Stages of Meiosis:

Meiosis has two divisions:

MEIOSIS I:
- Prophase I: Chromosomes pair up and exchange genetic material (crossing over)
- Metaphase I: Pairs line up randomly
- Anaphase I: Pairs separate
- Telophase I: Two cells form, each with half the chromosomes

MEIOSIS II: Similar to mitosis, but starting with half the chromosomes

The result: FOUR genetically unique cells (gametes) - sperm in males, eggs in females.

Where does meiosis happen in Malawi?
- In a rooster, meiosis produces sperm
- In a hen, meiosis produces eggs
- In a maize plant, meiosis produces pollen and ovules

COMPARISON TABLE:

| Feature | Mitosis | Meiosis |
|---------|---------|---------|
| Purpose | Growth, repair | Sexual reproduction |
| Number of divisions | 1 | 2 |
| Daughter cells produced | 2 | 4 |
| Chromosome number | Same as parent | Half of parent |
| Genetic variation | None (identical) | Yes (crossing over, independent assortment) |
| Where it occurs | Body (somatic) cells | Reproductive organs |
| Examples in Malawi | Healing cuts, growing | Making eggs and sperm |

IMPORTANCE OF GENETIC VARIATION:

Meiosis creates genetic variation through:
1. CROSSING OVER: Chromosomes exchange pieces during Prophase I
2. INDEPENDENT ASSORTMENT: Chromosomes line up randomly at Metaphase I

This is why siblings (even twins) are not identical! Genetic variation is important for evolution and survival of species.

In Malawi, farmers benefit from genetic variation when they select the best maize seeds for planting. The variation comes from meiosis in the parent plants.

Remember: MITOSIS = Making identical copies (M for "Make copies"). MEIOSIS = Making eggs and sperm (M for "Make gametes").`,
  summary: 'Mitosis produces 2 identical cells for growth and repair. Meiosis produces 4 genetically different cells (gametes) for reproduction. Mitosis maintains chromosome number; meiosis halves it. Meiosis creates genetic variation through crossing over and independent assortment.',
  estimatedTime: '25 mins',
  malawiExamples: [
    { title: 'Wound Healing', description: 'When you cut your finger, mitosis produces new skin cells to heal it.' },
    { title: 'Maize Growth', description: 'A maize seed germinates and grows through mitosis of cells.' },
    { title: 'Chicken Reproduction', description: 'Meiosis produces eggs in hens and sperm in roosters.' }
  ],
  practiceQuestions: [
    { question: 'How many daughter cells does mitosis produce?', answer: '2', hint: 'Two identical cells' },
    { question: 'What is the main purpose of meiosis?', answer: 'To produce gametes (eggs and sperm) for sexual reproduction', hint: 'For reproduction' }
  ]
}
,

// ======================================================================
// BIOLOGY FORM 3
// ======================================================================

// Topic: Transport in Plants (3 lessons)
{
  subject: 'Biology',
  form: 'Form 3',
  topic: 'Transport in Plants',
  lessonNumber: 1,
  lessonTitle: 'Need for Transport in Plants',
  lessonId: 'biology-f3-transport-plants-1',
  order: 25,
  learningObjectives: [
    'Explain why plants need a transport system',
    'Identify the two transport tissues: xylem and phloem',
    'Describe the structure of xylem and phloem',
    'Distinguish between xylem and phloem functions'
  ],
  introduction: 'Good day, plant scientist! Have you ever wondered how water from the soil reaches the leaves at the top of a tall maize plant? Or how the sugar made in the leaves gets to the roots? Plants have transport systems just like our blood circulation! Today, I will introduce you to the two transport tissues: XYLEM and PHLOEM.',
  keyPoints: [
    'Xylem transports water and minerals from roots to leaves (one-way)',
    'Phloem transports sugars (food) from leaves to all parts (two-way)',
    'Xylem vessels are dead, hollow tubes with lignin for strength',
    'Phloem is made of living cells with sieve tubes and companion cells',
    'Plants need transport because they are large and have distant parts'
  ],
  detailedContent: `Let me explain why plants need a transport system.

WHY DO PLANTS NEED TRANSPORT?

Plants are large organisms with parts far apart:
- Roots are underground, absorbing water and minerals
- Leaves are above ground, making food through photosynthesis
- Stems connect them but need to move materials between them

Without a transport system, water could not reach the top leaves, and food could not reach the roots.

XYLEM - Water Transport:

Xylem transports WATER and MINERALS from the roots UP to the leaves.

Structure of Xylem:
- Made of dead cells (no living contents)
- Hollow tubes (like straws)
- Lignin in the walls (makes them strong and waterproof)
- Pits allow water to move sideways

Functions of Xylem:
1. Transports water and dissolved minerals upward
2. Provides mechanical support (lignin makes stems strong)

In Malawi, the xylem in maize plants allows water to travel from roots to the top of tall plants. Without xylem, plants would wilt and die.

PHLOEM - Food Transport:

Phloem transports SUGARS (the food made by photosynthesis) from the leaves to ALL parts of the plant.

Structure of Phloem:
- Made of living cells
- Sieve tubes (end walls have holes like a sieve)
- Companion cells (help the sieve tubes function)

Functions of Phloem:
1. Transports sucrose and other nutrients
2. Moves food both up and down (two-way), depending on where it is needed

COMPARISON TABLE:

| Feature | Xylem | Phloem |
|---------|-------|--------|
| Material transported | Water and minerals | Sugars (food) |
| Direction | One-way (up only) | Two-way (up and down) |
| Cells | Dead at maturity | Living |
| Cell wall | Thick with lignin | Thin |
| Support function | Yes | No |
| Location | Inside of stem (wood) | Outside (inner bark) |

In a tree (like the mango trees common in Malawi), the wood is xylem and the bark contains phloem.

HOW DO WE SEE TRANSPORT?

Experiment: Place a celery stalk (or any plant stem) in coloured water. After a few hours, cut across the stem. You will see coloured dots - these are the xylem vessels!

In Malawi, you can try this with a cassava stem or a sunflower stem.

TURGOR PRESSURE AND WILTING:

When a plant has enough water, the vacuoles in cells are full, creating turgor pressure. The plant stands firm (turgid).

When a plant lacks water, the vacuoles shrink, the plant loses support and wilts (flaccid). This is why crops in Malawi need water during dry spells.

Remember: XYLEM = Water up (X for Xylem - think of X as a path going UP). PHLOEM = Food everywhere (P for Phloem - think of P as "phood" going both ways).`,
  summary: 'Xylem transports water and minerals upward through dead hollow tubes. Phloem transports sugars (food) both ways through living sieve tubes. Xylem also provides support. Both tissues are essential for plant survival and growth.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Maize Plant', description: 'Xylem transports water from roots to leaves; phloem transports sugar from leaves to developing cobs.' },
    { title: 'Mango Tree', description: 'The wood (xylem) supports the tree; the bark (phloem) transports food.' },
    { title: 'Wilting Crops', description: 'During dry spells, lack of water causes wilting because xylem cannot transport enough water.' }
  ],
  practiceQuestions: [
    { question: 'What does xylem transport?', answer: 'Water and minerals', hint: 'From roots to leaves' },
    { question: 'Is phloem made of living or dead cells?', answer: 'Living', hint: 'Sieve tubes and companion cells are alive' }
  ]
},
{
  subject: 'Biology',
  form: 'Form 3',
  topic: 'Transport in Plants',
  lessonNumber: 2,
  lessonTitle: 'Water Movement - Transpiration and Cohesion',
  lessonId: 'biology-f3-transport-plants-2',
  order: 26,
  learningObjectives: [
    'Define transpiration and explain its importance',
    'Describe the cohesion-tension theory of water movement',
    'Identify factors affecting transpiration rate',
    'Explain how plants adapt to reduce water loss in dry conditions'
  ],
  introduction: 'Welcome back! How does water "climb" from the roots to the top of a 50-metre tree? The answer involves two forces: TRANSPIRATION (water evaporating from leaves) and COHESION (water molecules sticking together). Today, you will learn how water defies gravity to reach the highest leaves.',
  keyPoints: [
    'Transpiration: loss of water vapour from leaves through stomata',
    'Cohesion: water molecules stick together (like a chain)',
    'Tension: created by transpiration pulls water up the xylem',
    'Transpiration rate increases with light, temperature, wind, and decreases with humidity',
    'Plants adapt to dry conditions with fewer stomata, waxy leaves, or sunken stomata'
  ],
  detailedContent: `Let me explain how water moves through a plant.

THE COHESION-TENSION THEORY:

This theory explains how water travels from roots to leaves against gravity. It involves three steps:

1. WATER LOSS (Transpiration): Water evaporates from leaf cells into the air spaces, then out through stomata (tiny pores on leaves).

2. CREATING TENSION: As water evaporates, it creates a "pull" (negative pressure/tension) in the leaf cells.

3. PULLING THE WATER CHAIN: Water molecules are cohesive (they stick together). The tension pulls the entire column of water up the xylem, like pulling a chain.

This works because water molecules stick to each other (cohesion) and stick to the walls of xylem vessels (adhesion).

TRANSPIRATION:

Transpiration is the loss of water vapour from plant leaves.

Why is transpiration important?
1. Creates the pull that moves water up from roots
2. Cools the plant (like sweating in humans)
3. Moves minerals up from the roots
4. Maintains turgor pressure in cells

FACTORS AFFECTING TRANSPIRATION RATE:

| Factor | Effect | Explanation |
|--------|--------|-------------|
| Light | Increases | Stomata open in light |
| Temperature | Increases | Water evaporates faster |
| Humidity | Decreases | Air is already saturated |
| Wind | Increases | Removes water vapour |

In Malawi, transpiration is highest on hot, sunny, windy days, and lowest on cool, humid, still days.

STOMATA:

Stomata (singular: stoma) are tiny pores on the leaf surface, mainly on the underside. Each stoma is surrounded by two guard cells that control its opening.

- Open stomata: Allow CO2 in for photosynthesis, but water vapour escapes
- Closed stomata: Conserve water, but no CO2 enters

PLANT ADAPTATIONS TO REDUCE WATER LOSS:

Plants in dry areas (like parts of Malawi during dry season) have adaptations:

1. Thick, waxy cuticle: Reduces evaporation
2. Fewer stomata: Less water loss
3. Sunken stomata: Trap water vapour, reducing loss
4. Hairs on leaves: Reduce air flow, trapping moisture
5. Small or rolled leaves: Reduce surface area for evaporation

Examples in Malawi:
- Baobab tree: Thick bark, stores water in trunk
- Cactus (introduced): Thick cuticle, no leaves
- Mango tree: Waxy leaves reduce water loss

TRANSPIRATION STREAM:

The continuous column of water moving from roots to leaves is called the transpiration stream. It can move water at rates of several metres per hour!

Experiment to show transpiration: Place a plastic bag over a leafy branch. Within minutes, you will see water droplets inside the bag - these come from transpiration.

In Malawi, farmers notice that crops transpire more in hot weather, so they need more water. This is why irrigation is important during dry spells.

Remember: Transpiration is a necessary "evil" - it causes water loss but is essential for moving water and minerals through the plant.`,
  summary: 'Transpiration (water loss from leaves) creates tension that pulls water up the xylem. Water molecules stick together (cohesion) forming a continuous column. Transpiration rate increases with light, temperature, wind and decreases with humidity. Plants adapt to reduce water loss in dry conditions.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Baobab Tree', description: 'Adapted to dry conditions with thick bark and water storage.' },
    { title: 'Irrigation Timing', description: 'Farmers water in early morning or evening when transpiration is lower.' },
    { title: 'Waxy Mango Leaves', description: 'Mango trees have waxy leaves to reduce water loss.' }
  ],
  practiceQuestions: [
    { question: 'What is transpiration?', answer: 'Loss of water vapour from leaves through stomata', hint: 'Evaporation from plant leaves' },
    { question: 'How does humidity affect transpiration rate?', answer: 'High humidity decreases transpiration', hint: 'Air already has water vapour' }
  ]
},
{
  subject: 'Biology',
  form: 'Form 3',
  topic: 'Transport in Plants',
  lessonNumber: 3,
  lessonTitle: 'Translocation - Food Transport in Phloem',
  lessonId: 'biology-f3-transport-plants-3',
  order: 27,
  learningObjectives: [
    'Define translocation',
    'Explain the pressure flow (mass flow) hypothesis',
    'Identify sources and sinks in plants',
    'Explain how phloem transport is affected by damage'
  ],
  introduction: 'Hello again! Now that you understand how water moves up the plant, what about food? The sugar made in leaves needs to travel to roots, fruits, and other non-photosynthetic parts. This process is called TRANSLOCATION. Today, you will learn how phloem moves food to where it is needed most.',
  keyPoints: [
    'Translocation: movement of sugars (sucrose) through phloem',
    'Source: where sugar is produced (leaves) or stored (storage organs)',
    'Sink: where sugar is used or stored (roots, fruits, growing tips)',
    'Pressure flow hypothesis: high pressure at source pushes sap to sink',
    'Phloem transports both up and down depending on need'
  ],
  detailedContent: `Let me explain TRANSLOCATION.

WHAT IS TRANSLOCATION?

Translocation is the movement of organic nutrients (mainly sucrose) through the phloem from where they are made to where they are needed or stored.

SOURCES AND SINKS:

- SOURCES: Parts that produce or release sugar
  - Photosynthetic leaves
  - Storage organs that break down starch (e.g., potato tubers during sprouting)

- SINKS: Parts that use or store sugar
  - Roots
  - Growing tips (stems and roots)
  - Developing fruits and seeds
  - Storage organs (e.g., cassava roots)

In Malawi:
- Source: Maize leaves during the growing season
- Sink: Developing maize cobs (storing sugar as starch)

THE PRESSURE FLOW HYPOTHESIS (Mass Flow Theory):

This explains how phloem transports sap:

Step 1: Sugar is loaded into phloem at the SOURCE (e.g., leaves)
Step 2: The sugar lowers the water potential, so water enters the phloem from xylem
Step 3: The increased water increases pressure at the source
Step 4: Sap (sugar solution) flows DOWN the pressure gradient to the SINK
Step 5: At the sink, sugar is unloaded, water leaves the phloem, pressure drops

Think of it like water flowing from a high-pressure pipe to a low-pressure pipe. The sugar creates the pressure difference!

TWO-WAY TRANSPORT:

Unlike xylem (which only goes up), phloem can transport in both directions:

- In summer, leaves (source) send sugar to roots (sink) for storage
- In spring, roots (now the source) send sugar up to growing buds (sink)

PROOF OF PHLOEM TRANSPORT:

The ring-barking experiment:
- Remove a ring of bark (including phloem) around a tree trunk
- The xylem (wood) remains intact
- Result: The tree dies above the ring (no food reaches roots)
- The roots die, and eventually the whole tree dies

In Malawi, this is why you should not damage the bark of trees - it can kill them!

PHLOEM AND PLANT HEALTH:

When phloem is damaged:
- Food cannot reach roots
- Roots weaken and may die
- The whole plant suffers

Examples in Malawi:
- Girdling (ring-barking) by animals or insects can kill fruit trees like mango and avocado
- Proper pruning techniques protect phloem

In a maize plant, during cob formation, most sugar goes to the developing cobs (sink). After harvest, the remaining stalk dies.

Remember: Phloem transports food both ways, from source to sink. Xylem transports water one way (up). Together, they keep the plant alive and growing.`,
  summary: 'Translocation is the movement of sugars through phloem from sources (where made) to sinks (where used or stored). The pressure flow hypothesis explains that sugar loading creates high pressure that pushes sap to sinks. Phloem transport is two-way and essential for plant survival.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Cassava Roots', description: 'Cassava stores starch in roots (sink); during new growth, roots become source.' },
    { title: 'Mango Trees', description: 'Fruits (sink) receive sugar from leaves (source) to grow sweet.' },
    { title: 'Ring-barking', description: 'Removing bark kills trees because phloem cannot transport food to roots.' }
  ],
  practiceQuestions: [
    { question: 'What is the difference between xylem and phloem transport direction?', answer: 'Xylem one-way up; phloem two-way', hint: 'Water vs food' },
    { question: 'What happens to a tree if phloem is damaged?', answer: 'Food cannot reach roots; tree dies', hint: 'Ring-barking experiment' }
  ]
},

// Topic: Transport in Animals (3 lessons)
{
  subject: 'Biology',
  form: 'Form 3',
  topic: 'Transport in Animals',
  lessonNumber: 1,
  lessonTitle: 'Components of Blood',
  lessonId: 'biology-f3-transport-animals-1',
  order: 28,
  learningObjectives: [
    'Identify the components of blood',
    'State the functions of red blood cells, white blood cells, platelets, and plasma',
    'Explain the importance of each blood component',
    'Distinguish between blood, plasma, and serum'
  ],
  introduction: 'Good day, future doctor! Have you ever seen blood and wondered what is inside? Blood is not just red liquid - it transports oxygen, fights infections, and seals wounds. Today, I will introduce you to the four main components of blood and their important jobs in keeping you healthy.',
  keyPoints: [
    'Blood composition: Plasma (55%), Red blood cells (44%), White blood cells and platelets (1%)',
    'Plasma: Liquid carrying dissolved substances (water, nutrients, hormones, waste)',
    'Red blood cells: Carry oxygen using haemoglobin; no nucleus',
    'White blood cells: Fight infections; have nucleus',
    'Platelets: Cell fragments that help blood clot'
  ],
  detailedContent: `Let me explain the COMPONENTS OF BLOOD.

Blood is a tissue made of cells floating in a liquid called plasma. A healthy person has about 5 litres of blood.

COMPOSITION OF BLOOD (by volume):
- Plasma: 55%
- Red blood cells: 44%
- White blood cells and platelets: 1%

1. PLASMA (55% of blood)

Plasma is the LIQUID part of blood. It is about 92% water and 8% dissolved substances.

What plasma carries:
- Nutrients (glucose, amino acids, vitamins, minerals from digestion)
- Hormones (chemical messengers)
- Waste products (urea, carbon dioxide) to kidneys and lungs
- Antibodies (proteins that fight disease)
- Clotting factors
- Heat (distributes body heat)

2. RED BLOOD CELLS (Erythrocytes) - 44% of blood

Red blood cells are the most numerous cells in blood (about 25 trillion in an adult!).

Features:
- Biconcave disc shape (increases surface area for oxygen exchange)
- No nucleus (more space for haemoglobin)
- Contain HAEMOGLOBIN (iron-containing protein that binds oxygen)

Function: Transport oxygen from lungs to all body cells, and carry some carbon dioxide back.

In Malawi, people with anaemia have too few red blood cells or too little haemoglobin, making them tired and weak.

3. WHITE BLOOD CELLS (Leukocytes)

White blood cells are fewer than red cells (only 1% of blood), but they are very important.

Types of white blood cells:
- Phagocytes: Engulf and digest bacteria and debris
- Lymphocytes: Produce antibodies to fight specific infections

Function: DEFEND the body against disease-causing micro-organisms.

When you have an infection, your body produces more white blood cells. This is why doctors test white blood cell count.

4. PLATELETS (Thrombocytes)

Platelets are tiny fragments of cells (not full cells).

Function: Help blood CLOT (coagulate) to stop bleeding.

How blood clotting works:
1. A blood vessel is cut
2. Platelets stick to the wound and release chemicals
3. These chemicals convert fibrinogen (in plasma) into fibrin
4. Fibrin forms a mesh that traps red blood cells, forming a clot

In Malawi, people with bleeding disorders (like haemophilia) have problems with clotting.

BLOOD VS PLASMA VS SERUM:

- Blood: whole blood (cells + plasma + clotting factors)
- Plasma: blood without cells (contains clotting factors)
- Serum: plasma without clotting factors (after blood clots)

IMPORTANCE OF EACH COMPONENT IN MALAWI:

| Component | Importance |
|-----------|------------|
| Red blood cells | Oxygen to working muscles (farmers, labourers) |
| White blood cells | Fighting malaria, infections |
| Platelets | Healing cuts and wounds |
| Plasma | Transporting nutrients from nsima, vegetables |

Remember: Red cells carry oxygen; white cells fight infection; platelets clot blood; plasma carries everything.`,
  summary: 'Blood has four components: plasma (liquid carrier), red blood cells (oxygen transport), white blood cells (infection fighting), and platelets (clotting). Each component has a vital role in maintaining health and survival.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Anaemia in Malawi', description: 'Iron deficiency from poor diet causes too few red blood cells - fatigue and weakness.' },
    { title: 'Cuts and Wounds', description: 'Platelets quickly clot blood to stop bleeding from injuries.' },
    { title: 'Fighting Malaria', description: 'White blood cells increase to fight malaria parasites.' }
  ],
  practiceQuestions: [
    { question: 'Which blood component carries oxygen?', answer: 'Red blood cells', hint: 'Contain haemoglobin' },
    { question: 'What is the function of platelets?', answer: 'Blood clotting', hint: 'Stop bleeding' }
  ]
}
,

// Continue with remaining Biology Form 3-4 and Chemistry...

// ======================================================================
// CHEMISTRY FORM 1
// ======================================================================

// Topic: Introduction to Chemistry (2 lessons)
{
  subject: 'Chemistry',
  form: 'Form 1',
  topic: 'Introduction to Chemistry',
  lessonNumber: 1,
  lessonTitle: 'What is Chemistry?',
  lessonId: 'chemistry-f1-intro-1',
  order: 29,
  learningObjectives: [
    'Define chemistry and explain its importance',
    'Identify the branches of chemistry',
    'Recognise chemistry in everyday life in Malawi',
    'Describe careers that use chemistry'
  ],
  introduction: 'Hello, future chemist! Have you ever wondered why salt dissolves in water? How soap cleans? How batteries produce electricity? The answer is CHEMISTRY! Chemistry is the study of matter, its properties, and how it changes. Today, I will introduce you to the world of chemistry and show you how it is part of everything you do in Malawi.',
  keyPoints: [
    'Chemistry is the study of matter, its properties, composition, and changes',
    'Matter is anything that has mass and takes up space',
    'Branches: Organic (carbon compounds), Inorganic (non-carbon), Physical, Analytical, Biochemistry',
    'Chemistry is everywhere: cooking, cleaning, medicines, farming, batteries'
  ],
  detailedContent: `Let me introduce you to CHEMISTRY.

WHAT IS CHEMISTRY?

Chemistry is the scientific study of MATTER - what it is made of, what its properties are, and how it changes.

Matter is anything that has MASS and takes up SPACE. You, your desk, the air you breathe, the water you drink - all matter!

BRANCHES OF CHEMISTRY:

1. ORGANIC CHEMISTRY: Study of carbon-containing compounds
   - Examples: plastics, petrol, medicines, food

2. INORGANIC CHEMISTRY: Study of non-carbon compounds
   - Examples: salts, metals, minerals, water

3. PHYSICAL CHEMISTRY: Study of the physical principles behind chemical reactions
   - Examples: reaction rates, energy changes

4. ANALYTICAL CHEMISTRY: Study of what substances are present and how much
   - Examples: testing water quality, food analysis

5. BIOCHEMISTRY: Study of chemical processes in living things
   - Examples: digestion, respiration, photosynthesis

CHEMISTRY IN EVERYDAY LIFE IN MALAWI:

| Activity | Chemistry Involved |
|----------|-------------------|
| Cooking nsima | Heating starch causes gelatinisation |
| Fermenting mahewu | Yeast converts sugar to alcohol and CO2 |
| Soap making | Saponification - fat + alkali → soap |
| Water purification | Chlorine kills bacteria |
| Battery operation | Chemical reactions produce electricity |
| Fertiliser use | Chemicals provide plant nutrients |
| Medicine | Chemical compounds cure diseases |

CAREERS IN CHEMISTRY:

In Malawi, chemists work as:
- Pharmacists (dispensing medicines)
- Agricultural chemists (testing soil, fertilisers)
- Environmental chemists (testing water quality)
- Industrial chemists (manufacturing)
- Forensic chemists (crime labs)
- Food chemists (quality control)
- Teachers and lecturers

THE SCIENTIFIC METHOD:

Chemists use the scientific method:
1. Make an observation
2. Ask a question
3. Form a hypothesis (educated guess)
4. Conduct an experiment
5. Analyse results
6. Draw a conclusion

LABORATORY SAFETY:

In chemistry, safety is very important:
- Wear goggles and lab coats
- Never taste or smell chemicals directly
- Handle acids and bases with care
- Know where safety equipment is (fire extinguisher, first aid kit, eye wash)
- Wash hands before leaving the lab

In Malawi, chemistry is used daily:
- Farmers use fertilisers (chemicals)
- Cooks use baking soda (sodium bicarbonate)
- Mechanics use battery acid (sulphuric acid)
- Doctors prescribe medicines (chemical compounds)

Remember: Chemistry is the central science - it connects physics, biology, and earth science. Understanding chemistry helps you understand the world around you!`,
  summary: 'Chemistry is the study of matter, its properties, and changes. It has many branches (organic, inorganic, physical, analytical, biochemistry). Chemistry is everywhere in daily life from cooking to medicine. Many careers in Malawi require chemistry knowledge.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Mahewu Fermentation', description: 'Yeast converts sugar to alcohol and CO2 - chemical reaction.' },
    { title: 'Soap Making', description: 'Mixing oil/fat with sodium hydroxide produces soap (saponification).' },
    { title: 'Water Purification', description: 'Chlorine kills bacteria in drinking water.' }
  ],
  practiceQuestions: [
    { question: 'What is matter?', answer: 'Anything that has mass and takes up space', hint: 'Everything around you' },
    { question: 'Name one branch of chemistry.', answer: 'Organic, inorganic, physical, analytical, or biochemistry', hint: 'Five main branches' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 1',
  topic: 'Introduction to Chemistry',
  lessonNumber: 2,
  lessonTitle: 'Laboratory Safety and Equipment',
  lessonId: 'chemistry-f1-intro-2',
  order: 30,
  learningObjectives: [
    'Identify common laboratory apparatus',
    'State the use of each apparatus',
    'Explain laboratory safety rules',
    'Recognise hazard symbols and their meanings'
  ],
  introduction: 'Welcome to the chemistry laboratory! The lab is an exciting place, but it can also be dangerous if you do not follow rules. Today, I will teach you about the equipment you will use and the safety rules that will keep you and your classmates safe.',
  keyPoints: [
    'Common apparatus: beaker, test tube, conical flask, measuring cylinder, Bunsen burner',
    'Safety rules: wear goggles, no eating, no running, report spills, wash hands',
    'Hazard symbols: flammable, toxic, corrosive, irritant, explosive',
    'First aid: know where eye wash station and first aid kit are'
  ],
  detailedContent: `Let me introduce you to LABORATORY EQUIPMENT and SAFETY.

COMMON LABORATORY APPARATUS:

| Apparatus | Use |
|-----------|-----|
| Beaker | Holding and heating liquids (not accurate volume) |
| Test tube | Small reactions, heating small amounts |
| Conical flask (Erlenmeyer) | Swirling liquids without spilling |
| Measuring cylinder | Measuring accurate volumes of liquids |
| Bunsen burner | Heating substances |
| Tripod and gauze | Supporting containers for heating |
| Evaporating dish | Evaporating liquids to leave solids |
| Funnel | Pouring liquids into narrow openings |
| Filter paper | Separating solids from liquids |
| Test tube holder | Holding hot test tubes |
| Spatula | Transferring solid chemicals |
| Pipette/dropper | Transferring small, accurate volumes |
| Mortar and pestle | Grinding solids |

LABORATORY SAFETY RULES:

BEFORE YOU START:
1. Wear safety goggles to protect your eyes
2. Tie back long hair (it can catch fire)
3. Roll up loose sleeves
4. Remove dangling jewellery
5. Know where the fire extinguisher, first aid kit, and eye wash station are

DURING THE EXPERIMENT:
1. Never taste or smell chemicals directly - waft gently if needed
2. Never run in the laboratory
3. Do not eat or drink in the lab
4. Handle chemicals with care - read labels twice
5. Heat test tubes away from yourself and others
6. Never leave a lit Bunsen burner unattended
7. Report any spills or breakages immediately

AFTER THE EXPERIMENT:
1. Wash your hands thoroughly
2. Clean your work area
3. Dispose of chemicals as instructed (never pour chemicals down the sink unless told to)
4. Return equipment to its place

HAZARD SYMBOLS:

| Symbol | Meaning | Examples |
|--------|---------|----------|
| 🔥 Flammable | Catches fire easily | Ethanol, petrol |
| ☠️ Toxic | Poisonous, can cause death | Mercury, lead salts |
| ⚠️ Corrosive | Destroys skin and materials | Strong acids and bases |
| ❗ Irritant | Causes skin/eye irritation | Dilute acids |
| 💥 Explosive | Can explode | Some peroxides |

WHAT TO DO IN AN EMERGENCY:

- Chemical spill: Tell the teacher immediately. Do not clean yourself.
- Fire: Tell the teacher, use fire extinguisher if trained, evacuate if large.
- Chemical in eye: Use eye wash station for 15 minutes. Tell teacher.
- Cut from broken glass: Tell teacher. Do not pick up glass with bare hands.

In Malawian schools, many laboratories have limited equipment, but safety rules apply everywhere. Even a simple experiment with vinegar and baking soda requires care!

Remember: Safety first! A good chemist is a safe chemist. Always follow the rules, and never take shortcuts that could lead to accidents.`,
  summary: 'Common lab apparatus includes beakers, test tubes, measuring cylinders, and Bunsen burners. Safety rules protect you and others. Recognise hazard symbols: flammable, toxic, corrosive, irritant, explosive. Know what to do in emergencies.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Local Materials', description: 'In resource-limited labs, beakers and test tubes are most common.' },
    { title: 'Household Chemicals', description: 'Many household chemicals have hazard symbols (e.g., bleach is corrosive).' }
  ],
  practiceQuestions: [
    { question: 'What should you do if you spill a chemical?', answer: 'Tell the teacher immediately', hint: 'Do not clean yourself' },
    { question: 'What does the flammable symbol mean?', answer: 'Catches fire easily', hint: 'Beware of fire' }
  ]
}
,

// ======================================================================
// CHEMISTRY FORM 2
// ======================================================================

// Topic: Atomic Structure (3 lessons)
{
  subject: 'Chemistry',
  form: 'Form 2',
  topic: 'Atomic Structure',
  lessonNumber: 1,
  lessonTitle: 'The Structure of the Atom',
  lessonId: 'chemistry-f2-atomic-structure-1',
  order: 31,
  learningObjectives: [
    'Describe the structure of an atom',
    'Name the subatomic particles and their properties',
    'Explain the arrangement of electrons in shells',
    'Draw the structure of atoms of the first 20 elements'
  ],
  introduction: 'Greetings, future chemist! Have you ever looked at a grain of sand and wondered what it is made of? Everything around us - the air we breathe, the water we drink, the ground we walk on - is made of tiny particles called ATOMS. Today, I will take you inside the atom to discover its secrets.',
  keyPoints: [
    'An atom has a central nucleus containing protons and neutrons',
    'Electrons orbit the nucleus in shells (energy levels)',
    'Protons: positive charge (+1), mass 1 amu, in nucleus',
    'Neutrons: no charge (0), mass 1 amu, in nucleus',
    'Electrons: negative charge (-1), mass ~0 (1/1840 amu), in shells'
  ],
  detailedContent: `Let me paint a picture for you. Imagine the atom as a tiny solar system. At the centre is the NUCLEUS - this is like the sun. Orbiting around the nucleus are ELECTRONS - these are like planets circling the sun.

Now, what is inside the nucleus? The nucleus contains two types of particles:

- PROTONS: These have a POSITIVE charge (+1)
- NEUTRONS: These have NO charge (neutral)

The electrons that orbit around the nucleus have a NEGATIVE charge (-1).

Here is something fascinating: Most of the atom is actually EMPTY SPACE! If an atom were the size of a football stadium, the nucleus would be the size of a pea at the centre. The electrons would be tiny specks whizzing around in the vast empty space.

Let me give you the masses of these particles:
- Proton: approximately 1 atomic mass unit (amu)
- Neutron: approximately 1 amu
- Electron: approximately 1/1840 amu (very tiny!)

This means that almost all the mass of an atom is in the nucleus.

ELECTRON ARRANGEMENT (Bohr Model):

Electrons are arranged in SHELLS (energy levels) around the nucleus:

- First shell (closest to nucleus) can hold up to 2 electrons
- Second shell can hold up to 8 electrons
- Third shell can hold up to 8 electrons (first 20 elements)

The arrangement of electrons is called the ELECTRON CONFIGURATION.

Examples of electron configurations for the first 5 elements:

| Element | Atomic Number | Electron Configuration |
|---------|---------------|----------------------|
| Hydrogen | 1 | 1 |
| Helium | 2 | 2 |
| Lithium | 3 | 2,1 |
| Beryllium | 4 | 2,2 |
| Boron | 5 | 2,3 |

Example with 3 shells: Sodium (atomic number 11):
- Shell 1: 2 electrons
- Shell 2: 8 electrons
- Shell 3: 1 electron
Configuration: 2,8,1

THE IMPORTANCE OF THE OUTER SHELL:

The electrons in the outer shell (valence electrons) determine how an atom will react with others. Atoms want to have a full outer shell (like noble gases).

This explains why:
- Sodium (outer shell 1 electron) reacts easily (wants to lose it)
- Chlorine (outer shell 7 electrons) reacts easily (wants to gain 1)
- Noble gases (full outer shell) are unreactive

In Malawi, understanding atoms helps us understand:
- Why iron rusts (reaction with oxygen)
- Why salt dissolves in water (interactions between sodium, chlorine, and water)
- Why fertilisers work (nutrient atoms are taken up by plants)

A PROTIP: To find the number of neutrons, subtract the atomic number from the mass number. For carbon-12: 12 - 6 = 6 neutrons.

Remember: Protons and neutrons in the nucleus; electrons orbit in shells. Protons positive, neutrons neutral, electrons negative. The outer shell electrons determine chemical behaviour.`,
  summary: 'An atom consists of a nucleus (protons + neutrons) surrounded by orbiting electrons. Protons (+), neutrons (0), electrons (-). Electrons are arranged in shells (2,8,8...). The outer shell electrons determine chemical reactivity.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Rusting', description: 'Iron atoms react with oxygen atoms - electron transfer.' },
    { title: 'Salt Dissolving', description: 'Sodium and chlorine atoms separate in water.' },
    { title: 'Fertilisers', description: 'Plants take in nitrogen and phosphorus atoms from fertilisers.' }
  ],
  practiceQuestions: [
    { question: 'What particles are found in the nucleus?', answer: 'Protons and neutrons', hint: 'Not electrons' },
    { question: 'What is the electron configuration of oxygen (atomic number 8)?', answer: '2,6', hint: '2 in first shell, 6 in second' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 2',
  topic: 'Atomic Structure',
  lessonNumber: 2,
  lessonTitle: 'Atomic and Mass Numbers',
  lessonId: 'chemistry-f2-atomic-structure-2',
  order: 32,
  learningObjectives: [
    'Define atomic number and mass number',
    'Calculate the number of protons, neutrons, and electrons',
    'Explain what isotopes are and give examples',
    'Calculate relative atomic mass from isotopic abundance'
  ],
  introduction: 'Hello again! Every atom of an element has the same number of protons, but they can have different numbers of neutrons. These versions are called ISOTOPES. Today, you will learn how to identify atoms using atomic numbers and mass numbers, and why isotopes are important.',
  keyPoints: [
    'Atomic number (Z) = number of protons = identifies the element',
    'Mass number (A) = number of protons + neutrons',
    'Number of neutrons = A - Z',
    'In a neutral atom, electrons = protons',
    'Isotopes: same Z, different A (same element, different neutrons)',
    'Relative atomic mass = weighted average of isotope masses'
  ],
  detailedContent: `Let me explain ATOMIC NUMBER and MASS NUMBER.

ATOMIC NUMBER (Z):

The atomic number is the number of PROTONS in an atom.

This number identifies the element:
- Every carbon atom has 6 protons (Z = 6)
- Every oxygen atom has 8 protons (Z = 8)
- Every sodium atom has 11 protons (Z = 11)

In a neutral atom, the number of electrons EQUALS the number of protons. So atomic number also tells you the number of electrons.

MASS NUMBER (A):

The mass number is the number of PROTONS + NEUTRONS in an atom.

Number of neutrons = Mass number - Atomic number (A - Z)

Example: Carbon-12 (most common carbon)
- Atomic number (Z) = 6
- Mass number (A) = 12
- Number of neutrons = 12 - 6 = 6

Example: Oxygen-16
- Z = 8, A = 16
- Neutrons = 16 - 8 = 8

ISOTOPES:

Isotopes are atoms of the SAME element (same number of protons) but with DIFFERENT numbers of neutrons.

Examples:

| Element | Isotope | Protons | Neutrons | Mass Number |
|---------|---------|---------|----------|-------------|
| Carbon | Carbon-12 | 6 | 6 | 12 |
| Carbon | Carbon-13 | 6 | 7 | 13 |
| Carbon | Carbon-14 | 6 | 8 | 14 |
| Chlorine | Chlorine-35 | 17 | 18 | 35 |
| Chlorine | Chlorine-37 | 17 | 20 | 37 |

Carbon-14 is radioactive and is used in CARBON DATING to determine the age of ancient artefacts and fossils.

RELATIVE ATOMIC MASS:

The relative atomic mass (Ar) you see on the periodic table is the WEIGHTED AVERAGE of the masses of all naturally occurring isotopes.

Example: Chlorine has two isotopes:
- Chlorine-35: 75% abundance
- Chlorine-37: 25% abundance

Relative atomic mass = (35 × 0.75) + (37 × 0.25) = 26.25 + 9.25 = 35.5

NOTATION FOR ISOTOPES:

We write isotopes as: ¹²C or ¹²₆C (carbon-12)
- The top number (12) is the mass number
- The bottom number (6) is the atomic number

In Malawi, isotopes are used in:
- Medicine (radioactive isotopes for diagnosis and treatment)
- Agriculture (tracing fertiliser uptake)
- Archaeology (carbon dating ancient human remains)
- Industry (detecting leaks, measuring thickness)

A PROTIP: The atomic number is the element's "ID card" - it never changes. The mass number can change, giving different isotopes.

Remember: Atomic number = protons = element identity. Mass number = protons + neutrons. Isotopes have same protons, different neutrons.`,
  summary: 'Atomic number (Z) = protons = identifies element. Mass number (A) = protons + neutrons. Number of neutrons = A - Z. Isotopes: same Z, different A. Relative atomic mass is weighted average of isotope masses.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Carbon Dating', description: 'Carbon-14 is used to date ancient bones and artefacts found in Malawi.' },
    { title: 'Medical Imaging', description: 'Radioactive isotopes detect cancer and other diseases.' },
    { title: 'Fertiliser Research', description: 'Isotopes track how fertilisers move in soil.' }
  ],
  practiceQuestions: [
    { question: 'An atom has 6 protons and 8 neutrons. What is its mass number?', answer: '14', hint: 'Protons + neutrons = 6+8=14' },
    { question: 'What is an isotope?', answer: 'Same element (same protons), different neutrons', hint: 'Different mass numbers' }
  ]
}
,

// ======================================================================
// BIOLOGY FORM 4
// ======================================================================

// Topic: Reproduction in Humans (4 lessons)
{
  subject: 'Biology',
  form: 'Form 4',
  topic: 'Reproduction in Humans',
  lessonNumber: 1,
  lessonTitle: 'Male Reproductive System',
  lessonId: 'biology-f4-reproduction-1',
  order: 33,
  learningObjectives: [
    'Identify the parts of the male reproductive system',
    'State the functions of each part',
    'Describe the process of sperm production',
    'Explain the role of hormones in male reproduction'
  ],
  introduction: 'Good day! Today, we begin an important topic: HUMAN REPRODUCTION. Understanding how our bodies work helps us make informed decisions about our health. Let us start with the MALE REPRODUCTIVE SYSTEM. You will learn about the organs involved, their functions, and how sperm are produced.',
  keyPoints: [
    'Testes: produce sperm and testosterone',
    'Epididymis: stores sperm',
    'Vas deferens: carries sperm from epididymis to urethra',
    'Seminal vesicles, prostate gland, Cowper\'s glands: produce seminal fluid',
    'Urethra: carries semen and urine (not at same time)',
    'Penis: delivers sperm into female reproductive system'
  ],
  detailedContent: `Let me explain the MALE REPRODUCTIVE SYSTEM.

The male reproductive system has several organs that work together to produce sperm and deliver them to the female.

MAIN ORGANS AND THEIR FUNCTIONS:

1. TESTES (singular: testis)
- Location: Scrotum (sac outside the body)
- Function: Produce sperm (spermatogenesis) and testosterone
- Why outside the body? Sperm need a temperature about 2°C cooler than body temperature

2. EPIDIDYMIS
- Location: Coiled tube on top of each testis
- Function: Stores sperm as they mature (takes about 2-3 weeks)

3. VAS DEFERENS (Sperm duct)
- Location: Tube from epididymis to urethra
- Function: Carries sperm from epididymis to urethra during ejaculation

4. SEMINAL VESICLES
- Location: Behind bladder
- Function: Produce seminal fluid (rich in fructose to nourish sperm)

5. PROSTATE GLAND
- Location: Below bladder
- Function: Produces alkaline fluid that neutralizes vaginal acidity

6. COWPER'S GLANDS (Bulbourethral glands)
- Location: Below prostate
- Function: Produce clear fluid that lubricates urethra

7. URETHRA
- Location: Tube inside penis
- Function: Carries semen (during ejaculation) and urine (at other times)

8. PENIS
- Function: Delivers sperm into the female reproductive system

SPERM PRODUCTION (Spermatogenesis):

Spermatogenesis occurs in the seminiferous tubules inside the testes.

Process:
- Begins at puberty (around age 12-14)
- Produces millions of sperm daily
- Each sperm takes about 64-72 days to develop

Structure of a sperm:
- Head: contains DNA (genetic material)
- Acrosome: tip of head, contains enzymes to penetrate egg
- Midpiece: contains mitochondria for energy
- Tail: flagellum for swimming

HORMONES IN MALE REPRODUCTION:

- Follicle Stimulating Hormone (FSH): stimulates sperm production
- Luteinizing Hormone (LH): stimulates testosterone production
- Testosterone: male sex hormone (deepens voice, facial hair, muscle development)

In Malawi, understanding male reproduction helps:
- Men understand their own bodies
- Couples plan families
- Diagnose fertility problems
- Prevent sexually transmitted infections

PUBERTY CHANGES IN MALES:

- Testes and penis enlarge
- Voice deepens
- Facial and body hair grows
- Muscle mass increases
- Production of sperm begins

Remember: The testes produce sperm and testosterone. Sperm travel through epididymis, vas deferens, and urethra. Accessory glands add fluid to make semen.`,
  summary: 'The male reproductive system includes testes (sperm and testosterone production), epididymis (storage), vas deferens (transport), accessory glands (seminal fluid), urethra, and penis. Sperm production (spermatogenesis) begins at puberty and continues throughout life.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Family Planning', description: 'Understanding reproduction helps couples plan when to have children.' },
    { title: 'STI Prevention', description: 'Knowing the reproductive system helps in preventing infections.' }
  ],
  practiceQuestions: [
    { question: 'Where are sperm produced?', answer: 'Testes', hint: 'Inside the scrotum' },
    { question: 'What is the function of the prostate gland?', answer: 'Produces alkaline fluid to neutralize vaginal acidity', hint: 'Part of seminal fluid' }
  ]
},
{
  subject: 'Biology',
  form: 'Form 4',
  topic: 'Reproduction in Humans',
  lessonNumber: 2,
  lessonTitle: 'Female Reproductive System',
  lessonId: 'biology-f4-reproduction-2',
  order: 34,
  learningObjectives: [
    'Identify the parts of the female reproductive system',
    'State the functions of each part',
    'Describe the process of egg production (oogenesis)',
    'Explain the role of hormones in the menstrual cycle'
  ],
  introduction: 'Welcome back! Today, we study the FEMALE REPRODUCTIVE SYSTEM. The female body has amazing abilities: producing eggs, supporting a growing baby for 9 months, and giving birth. Let us explore the organs involved and how they work together.',
  keyPoints: [
    'Ovaries: produce eggs (ova) and female hormones (oestrogen, progesterone)',
    'Fallopian tubes (oviducts): carry eggs from ovaries to uterus; fertilization occurs here',
    'Uterus (womb): where baby develops during pregnancy',
    'Cervix: lower opening of uterus into vagina',
    'Vagina: birth canal, receives sperm during intercourse',
    'Vulva: external female genitalia'
  ],
  detailedContent: `Let me explain the FEMALE REPRODUCTIVE SYSTEM.

MAIN ORGANS AND THEIR FUNCTIONS:

1. OVARIES
- Location: Two small organs on each side of the uterus
- Function: Produce eggs (ova) through oogenesis; produce female hormones (oestrogen and progesterone)

A baby girl is born with about 1-2 million eggs. By puberty, about 300,000 remain. Only about 400 eggs are released during a woman's lifetime.

2. FALLOPIAN TUBES (Oviducts)
- Location: Tubes connecting ovaries to uterus
- Function: Carry eggs from ovaries to uterus; site of FERTILIZATION

The fallopian tubes have finger-like projections (fimbriae) that sweep the egg into the tube.

3. UTERUS (Womb)
- Location: Pear-shaped organ between bladder and rectum
- Function: Where the fetus develops during pregnancy

The uterus has three layers:
- Perimetrium: outer covering
- Myometrium: thick muscle layer (contracts during childbirth)
- Endometrium: inner lining (sheds during menstruation)

4. CERVIX
- Location: Lower part of uterus, opening into vagina
- Function: Produces mucus that changes during the cycle; dilates during childbirth

5. VAGINA
- Location: Muscular tube from cervix to outside
- Function: Receives sperm during intercourse; birth canal; passage for menstrual flow

6. VULVA
- External female genitalia (labia, clitoris, vaginal opening)

EGG PRODUCTION (Oogenesis):

Oogenesis begins before a girl is born. Eggs are arrested in development until puberty.

- Before birth: Eggs begin development (primary oocytes)
- At birth: 1-2 million primary oocytes
- Puberty: About 300,000 remain
- Each month: One egg matures and is released (ovulation)
- Menopause: No more eggs are released

Structure of an egg:
- Largest cell in the human body (visible without microscope)
- Contains nutrients for the developing embryo
- Surrounded by protective layers

HORMONES IN FEMALE REPRODUCTION:

- Oestrogen: Develops female secondary characteristics (breasts, body shape); thickens uterine lining
- Progesterone: Maintains uterine lining for pregnancy
- FSH (Follicle Stimulating Hormone): Stimulates egg development
- LH (Luteinizing Hormone): Triggers ovulation

In Malawi, understanding female reproduction helps:
- Girls understand changes during puberty
- Women make health decisions
- Couples understand fertility and family planning

PUBERTY CHANGES IN FEMALES:

- Breasts develop
- Hips widen
- Body fat increases
- Menstruation begins
- Hair growth under arms and pubic area

Remember: Ovaries produce eggs and hormones. Fallopian tubes transport eggs; fertilization happens there. Uterus supports the developing baby.`,
  summary: 'The female reproductive system includes ovaries (eggs and hormones), fallopian tubes (transport, fertilization), uterus (baby development), cervix, and vagina. Oogenesis produces eggs, which are released monthly during the menstrual cycle from puberty to menopause.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Puberty Education', description: 'Understanding puberty helps girls navigate physical changes.' },
    { title: 'Pregnancy Care', description: 'Knowing the reproductive system helps expectant mothers seek proper care.' },
    { title: 'Menstrual Hygiene', description: 'Understanding menstruation helps manage hygiene effectively.' }
  ],
  practiceQuestions: [
    { question: 'Where are eggs produced?', answer: 'Ovaries', hint: 'Female gonads' },
    { question: 'Where does fertilization occur?', answer: 'Fallopian tubes (oviducts)', hint: 'Between ovary and uterus' }
  ]
},
{
  subject: 'Biology',
  form: 'Form 4',
  topic: 'Reproduction in Humans',
  lessonNumber: 3,
  lessonTitle: 'The Menstrual Cycle',
  lessonId: 'biology-f4-reproduction-3',
  order: 35,
  learningObjectives: [
    'Describe the stages of the menstrual cycle',
    'Explain the role of hormones in the menstrual cycle',
    'Identify the fertile period',
    'Relate the menstrual cycle to fertility and family planning'
  ],
  introduction: 'Hello again! The menstrual cycle is a monthly cycle that prepares the female body for pregnancy. Understanding this cycle is important for health, hygiene, and family planning. Today, you will learn about the four stages of the cycle and how hormones control them.',
  keyPoints: [
    'Menstrual cycle lasts about 28 days (can vary 21-35 days)',
    'Four stages: Menstruation, Follicular phase, Ovulation, Luteal phase',
    'Ovulation occurs around day 14 (release of egg)',
    'Hormones: FSH, LH, oestrogen, progesterone',
    'Fertile period: 5 days before ovulation + day of ovulation'
  ],
  detailedContent: `Let me explain the MENSTRUAL CYCLE.

The menstrual cycle is a series of changes the female body goes through each month to prepare for possible pregnancy. The average cycle is 28 days, but cycles from 21 to 35 days are normal.

STAGES OF THE MENSTRUAL CYCLE:

STAGE 1: MENSTRUATION (Days 1-5)
- The uterine lining (endometrium) breaks down and is shed
- Results in bleeding (period)
- Caused by a drop in oestrogen and progesterone
- Day 1 is the first day of bleeding

STAGE 2: FOLLICULAR PHASE (Days 1-13, overlaps with menstruation)
- FSH (Follicle Stimulating Hormone) causes an egg follicle to develop
- Oestrogen levels rise
- The uterine lining thickens to prepare for a possible pregnancy
- One egg matures

STAGE 3: OVULATION (Day 14 approximately)
- LH (Luteinizing Hormone) surges
- The mature egg is released from the ovary
- The egg travels down the fallopian tube
- The egg can be fertilized for about 24 hours
- This is the most fertile time

STAGE 4: LUTEAL PHASE (Days 15-28)
- The ruptured follicle turns into the corpus luteum
- The corpus luteum produces progesterone
- Progesterone maintains the uterine lining
- If no pregnancy: corpus luteum breaks down, hormones drop, cycle restarts
- If pregnancy occurs: embryo produces hCG (pregnancy hormone) to maintain the lining

HORMONE GRAPH (Levels during 28-day cycle):

| Day | FSH | LH | Oestrogen | Progesterone |
|-----|-----|----|-----------|--------------|
| 1-5 | Low | Low | Low | Low |
| 6-13 | Rising | Low | Rising | Low |
| 14 | High | High | High (peak) | Low |
| 15-28 | Low | Low | Moderate | High (peaks day 21) |

FERTILE PERIOD:

- The egg lives about 24 hours after ovulation
- Sperm can live up to 5 days in the female reproductive tract
- Fertile window = 5 days before ovulation + day of ovulation
- Day 10-15 (in a 28-day cycle) are the most fertile days

FAMILY PLANNING METHODS:

Natural methods (based on cycle):
- Calendar method: track cycle length to predict fertile days
- Basal body temperature method: temperature rises after ovulation
- Cervical mucus method: mucus changes consistency at ovulation

In Malawi, understanding the menstrual cycle helps:
- Girls understand normal body changes
- Women plan or avoid pregnancy
- Detect fertility problems
- Recognize when to seek medical help

COMMON CYCLE PROBLEMS:

- Irregular cycles: can be caused by stress, illness, hormonal imbalance
- Painful periods (dysmenorrhea): can be managed with exercise, heat, or medication
- Heavy bleeding (menorrhagia): may need medical attention
- No periods (amenorrhea): can be caused by pregnancy, low body weight, hormonal issues

Remember: Day 1 = first day of bleeding. Ovulation occurs ~day 14. The fertile window is 5 days before and the day of ovulation. Hormones control the entire cycle.`,
  summary: 'The menstrual cycle has four stages: menstruation (shedding lining), follicular phase (egg develops), ovulation (egg released), luteal phase (lining maintained). Hormones (FSH, LH, oestrogen, progesterone) control the cycle. The fertile period is 5 days before ovulation and the day of ovulation.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Family Planning', description: 'Understanding cycles helps couples plan when to have children.' },
    { title: 'Teen Health Education', description: 'Girls learn about normal cycle variations and hygiene.' },
    { title: 'Fertility Awareness', description: 'Couples use cycle tracking to achieve or avoid pregnancy.' }
  ],
  practiceQuestions: [
    { question: 'On which day does ovulation typically occur in a 28-day cycle?', answer: 'Day 14', hint: 'Middle of cycle' },
    { question: 'What hormone is produced by the corpus luteum?', answer: 'Progesterone', hint: 'Maintains uterine lining' }
  ]
},
{
  subject: 'Biology',
  form: 'Form 4',
  topic: 'Reproduction in Humans',
  lessonNumber: 4,
  lessonTitle: 'Fertilization, Pregnancy, and Birth',
  lessonId: 'biology-f4-reproduction-4',
  order: 36,
  learningObjectives: [
    'Describe the process of fertilization',
    'Explain the development of the zygote to embryo to fetus',
    'Describe the structure and function of the placenta',
    'Explain the process of birth'
  ],
  introduction: 'Welcome to the final lesson on human reproduction! Today, we follow the journey from fertilization (sperm meeting egg) through pregnancy (9 months of growth) to birth. This is truly one of the most amazing processes in biology – how a single cell develops into a complete baby!',
  keyPoints: [
    'Fertilization: sperm penetrates egg in fallopian tube; forms zygote',
    'Zygote divides into embryo, then fetus',
    'Placenta: provides oxygen, nutrients; removes waste; produces hormones',
    'Gestation: 40 weeks (9 months) from last menstrual period',
    'Birth: labor contractions, cervix dilation, delivery of baby, delivery of placenta'
  ],
  detailedContent: `Let me explain FERTILIZATION, PREGNANCY, AND BIRTH.

FERTILIZATION:

Fertilization occurs when a sperm penetrates an egg in the fallopian tube.

Process:
1. Millions of sperm are deposited in the vagina during intercourse
2. Sperm swim through cervix, uterus, into fallopian tubes
3. Only about 100 sperm reach the egg
4. One sperm penetrates the egg's protective layers
5. The egg immediately forms a barrier to prevent other sperm from entering
6. The nuclei of the sperm and egg fuse
7. The result is a ZYGOTE (fertilized egg) with 46 chromosomes (23 from each parent)

DEVELOPMENT STAGES:

Weeks 1-2 (Zygote to Implantation):
- Zygote begins dividing as it travels down fallopian tube (morula, then blastocyst)
- Blastocyst implants into the uterine wall (about day 7-10)

Weeks 3-8 (Embryo):
- Major organs begin to form (heart, brain, limbs)
- Heart starts beating at about week 6
- By week 8, all major organs have begun forming

Weeks 9-40 (Fetus):
- Organs continue to develop and mature
- The fetus grows in size and weight
- Can hear sounds (including mother's voice) from week 18
- Can survive outside womb (with help) from week 24

THE PLACENTA:

The placenta is an organ that develops during pregnancy, attached to the uterine wall and connected to the baby by the umbilical cord.

Functions of the placenta:
- Provides oxygen from mother to baby
- Provides nutrients (glucose, amino acids, vitamins, minerals)
- Removes waste products (carbon dioxide, urea) from baby
- Produces hormones (hCG, oestrogen, progesterone) to maintain pregnancy
- Prevents mother's immune system from attacking baby (not completely)

The umbilical cord contains three blood vessels:
- One vein: carries oxygen-rich blood from placenta to baby
- Two arteries: carry oxygen-poor blood from baby to placenta

THE AMNIOTIC SAC:

The amniotic sac is a fluid-filled membrane that surrounds and protects the developing baby.

Functions of amniotic fluid:
- Cushions the baby from injury
- Maintains constant temperature
- Allows baby to move and develop muscles
- Prevents the umbilical cord from being compressed

BIRTH (LABOUR AND DELIVERY):

Labour is triggered by hormones, especially oxytocin.

Stages of birth:

Stage 1: Dilation (hours)
- Uterine contractions begin (5-20 minutes apart)
- Cervix dilates (opens) to 10 cm
- Amniotic sac breaks ("water breaks")

Stage 2: Delivery of baby (30 minutes to 2 hours)
- Strong, frequent contractions (every 2-3 minutes)
- Mother pushes with each contraction
- Baby's head emerges first, then the body
- Umbilical cord is clamped and cut

Stage 3: Delivery of placenta (5-30 minutes after baby)
- Uterus continues to contract
- Placenta detaches and is pushed out
- Contractions continue to reduce bleeding

BREASTFEEDING:

Breast milk provides:
- Perfect nutrition for the baby
- Antibodies that protect against infections
- Bonding between mother and baby

In Malawi, understanding pregnancy and birth helps:
- Pregnant women seek proper antenatal care
- Expectant fathers support their partners
- Communities prepare for safe deliveries at health facilities
- New mothers understand infant care

Remember: Fertilization occurs in fallopian tube; placenta provides oxygen and nutrients; gestation is about 40 weeks; birth has three stages (dilation, delivery of baby, delivery of placenta).`,
  summary: 'Fertilization (sperm + egg) produces a zygote. The zygote develops into an embryo (weeks 3-8) then fetus (weeks 9-40). The placenta provides oxygen, nutrients, and waste removal. Birth has three stages: dilation, delivery of baby, and delivery of placenta.',
  estimatedTime: '26 mins',
  malawiExamples: [
    { title: 'Antenatal Care', description: 'Pregnant women in Malawi attend clinics to monitor baby\'s growth.' },
    { title: 'Safe Motherhood', description: 'Understanding the birth process helps prepare for safe delivery.' },
    { title: 'Breastfeeding Campaigns', description: 'Malawi promotes exclusive breastfeeding for first 6 months.' }
  ],
  practiceQuestions: [
    { question: 'Where does fertilization occur?', answer: 'Fallopian tube (oviduct)', hint: 'Between ovary and uterus' },
    { question: 'What is the function of the placenta?', answer: 'Provides oxygen and nutrients, removes waste', hint: 'Baby\'s life support' }
  ]
},

// ======================================================================
// CHEMISTRY FORM 3
// ======================================================================

// Topic: Chemical Bonding (3 lessons)
{
  subject: 'Chemistry',
  form: 'Form 3',
  topic: 'Chemical Bonding',
  lessonNumber: 1,
  lessonTitle: 'Ionic Bonding',
  lessonId: 'chemistry-f3-bonding-1',
  order: 37,
  learningObjectives: [
    'Explain why atoms form bonds',
    'Describe ionic bonding using the octet rule',
    'Draw dot-and-cross diagrams for ionic compounds',
    'State the properties of ionic compounds'
  ],
  introduction: 'Hello, chemistry explorer! Why do atoms stick together? Why does sodium chloride (table salt) form crystals? The answer is CHEMICAL BONDING. Today, we study IONIC BONDING – the bond formed when atoms transfer electrons. This is how many minerals and salts in Malawi are formed.',
  keyPoints: [
    'Atoms bond to achieve a full outer electron shell (octet rule)',
    'Ionic bonding: transfer of electrons from metal to non-metal',
    'Metals lose electrons to form positive ions (cations)',
    'Non-metals gain electrons to form negative ions (anions)',
    'Opposite charges attract (electrostatic force)',
    'Ionic compounds: high melting point, conduct electricity when molten or dissolved'
  ],
  detailedContent: `Let me explain IONIC BONDING.

WHY DO ATOMS BOND?

Atoms bond to become more STABLE. Most atoms want to have a full outer shell of electrons (like the noble gases). The noble gases (helium, neon, argon) are very stable and do not react easily.

The OCTET RULE: Atoms tend to gain, lose, or share electrons to achieve a full outer shell of 8 electrons (or 2 for hydrogen and helium).

IONIC BONDING:

Ionic bonding occurs between a METAL and a NON-METAL.

Process:
1. The metal atom LOSES one or more electrons (becomes a positive ion/cation)
2. The non-metal atom GAINS those electrons (becomes a negative ion/anion)
3. The opposite charges attract, forming an ionic bond

EXAMPLE 1: SODIUM CHLORIDE (NaCl - table salt)

Sodium (Na): atomic number 11, electron configuration 2,8,1
- Has 1 electron in outer shell
- Wants to lose it to have a full shell (2,8)

Chlorine (Cl): atomic number 17, electron configuration 2,8,7
- Has 7 electrons in outer shell
- Wants to gain 1 electron to have a full shell (2,8,8)

The reaction:
- Sodium loses 1 electron → Na⁺
- Chlorine gains that electron → Cl⁻
- Na⁺ and Cl⁻ attract → NaCl

DOT-AND-CROSS DIAGRAM (sodium chloride):

Sodium: Na × (one dot in outer shell)
Chlorine: Cl with 7 dots around it

After transfer:
Na⁺ (no dots – full shell) and Cl⁻ (8 dots – full shell)

EXAMPLE 2: MAGNESIUM OXIDE (MgO)

Magnesium (Mg): atomic number 12, configuration 2,8,2 (loses 2 electrons → Mg²⁺)
Oxygen (O): atomic number 8, configuration 2,6 (gains 2 electrons → O²⁻)

Mg²⁺ and O²⁻ attract → MgO

EXAMPLE 3: CALCIUM CHLORIDE (CaCl₂)

Calcium (Ca): configuration 2,8,8,2 (loses 2 electrons → Ca²⁺)
Chlorine (Cl): each needs 1 electron (gains 1 → Cl⁻)

Need 2 chlorine atoms for each calcium: CaCl₂

PROPERTIES OF IONIC COMPOUNDS:

| Property | Explanation |
|----------|-------------|
| High melting and boiling points | Strong electrostatic attraction requires lots of energy to break |
| Hard and brittle | Layers can shift, causing repulsion and cracking |
| Conduct electricity when molten or dissolved | Ions are free to move and carry charge |
| Do not conduct when solid | Ions are fixed in lattice positions |
| Soluble in water (many) | Water molecules pull ions apart |

In Malawi, ionic compounds are everywhere:
- Table salt (NaCl) from Lake Malawi salt pans
- Limestone (CaCO₃) used for building
- Fertilizers (KNO₃, NH₄NO₃)
- Baking soda (NaHCO₃)

IONIC LATTICE:

Ionic compounds form a giant lattice structure. Each positive ion is surrounded by negative ions, and each negative ion is surrounded by positive ions. This repeating pattern makes crystals.

In Lake Malawi, the water is slightly salty because of dissolved ionic compounds from surrounding rocks.

Remember: Ionic bonds = metal + non-metal = transfer of electrons = positive and negative ions attract.`,
  summary: 'Ionic bonding occurs between metals and non-metals through electron transfer. Metals become positive ions (cations); non-metals become negative ions (anions). Opposite charges attract. Ionic compounds have high melting points, conduct electricity when molten/dissolved, and form crystal lattices.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Lake Malawi Salt', description: 'Evaporating water leaves sodium chloride (NaCl) - an ionic compound.' },
    { title: 'Limestone', description: 'Calcium carbonate (CaCO₃) is used for building and cement.' },
    { title: 'Fertilisers', description: 'Many fertilisers are ionic salts that dissolve in water for plant uptake.' }
  ],
  practiceQuestions: [
    { question: 'What type of elements typically form ionic bonds?', answer: 'Metal and non-metal', hint: 'One loses, one gains electrons' },
    { question: 'Why do ionic compounds conduct electricity when dissolved?', answer: 'Ions are free to move', hint: 'Fixed in solid, mobile in liquid' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 3',
  topic: 'Chemical Bonding',
  lessonNumber: 2,
  lessonTitle: 'Covalent Bonding',
  lessonId: 'chemistry-f3-bonding-2',
  order: 38,
  learningObjectives: [
    'Describe covalent bonding using the octet rule',
    'Draw dot-and-cross diagrams for covalent molecules',
    'Distinguish between single, double, and triple bonds',
    'State the properties of covalent compounds'
  ],
  introduction: 'Welcome back! Not all bonds involve transferring electrons. In COVALENT BONDING, atoms SHARE electrons. This is how water, oxygen, and most organic compounds are formed. Today, you will learn how atoms share electrons to become stable.',
  keyPoints: [
    'Covalent bonding: sharing of electrons between non-metal atoms',
    'Each shared pair of electrons forms a covalent bond',
    'Single bond: 1 pair shared; double bond: 2 pairs; triple bond: 3 pairs',
    'Covalent compounds: lower melting points, do not conduct electricity',
    'Simple molecules have weak intermolecular forces'
  ],
  detailedContent: `Let me explain COVALENT BONDING.

Covalent bonding occurs between NON-METAL atoms. Instead of transferring electrons like in ionic bonding, the atoms SHARE electrons so that each has a full outer shell.

EXAMPLE 1: HYDROGEN (H₂)

Each hydrogen atom has 1 electron. It wants 2 (like helium).

The two hydrogen atoms share their electrons:
- Each hydrogen provides 1 electron
- They share this pair
- Each hydrogen now "owns" 2 electrons (full shell)

Symbol: H-H (the line represents the shared pair)

EXAMPLE 2: WATER (H₂O)

Oxygen has 6 electrons in its outer shell (needs 2 more)
Each hydrogen has 1 electron (needs 1 more)

Oxygen shares 1 pair with each hydrogen:
- Two shared pairs total
- Each hydrogen has a full shell (2 electrons)
- Oxygen has a full shell (8 electrons – 2 of its own, and 1 from each H)

Structure: H-O-H (bent shape)

EXAMPLE 3: OXYGEN (O₂)

Each oxygen atom has 6 electrons in outer shell (needs 2 more)

They share TWO pairs of electrons (double bond)

Structure: O=O (two lines = double bond)

EXAMPLE 4: NITROGEN (N₂)

Each nitrogen atom has 5 electrons in outer shell (needs 3 more)

They share THREE pairs of electrons (triple bond)

Structure: N≡N (three lines = triple bond)

DOT-AND-CROSS DIAGRAMS:

In dot-and-cross diagrams:
- Use different symbols for electrons from different atoms (e.g., • and ×)
- Show all outer shell electrons
- Shared pairs are placed between atoms

PROPERTIES OF COVALENT COMPOUNDS:

| Property | Explanation |
|----------|-------------|
| Low melting and boiling points | Weak intermolecular forces between molecules |
| Often soft or gaseous at room temperature | Little energy needed to separate molecules |
| Do not conduct electricity | No charged particles free to move |
| Often insoluble in water | Non-polar molecules don't mix with polar water |
| Soluble in organic solvents | Like dissolves like (non-polar in non-polar) |

INTERMOLECULAR FORCES:

These are the forces BETWEEN molecules (not within). They determine physical properties.

- Van der Waals forces: very weak (all molecules)
- Dipole-dipole forces: stronger (polar molecules)
- Hydrogen bonding: strongest (H bonded to F,O,N)

EXAMPLE: Water has hydrogen bonding, so it has a higher boiling point than similar-sized molecules.

In Malawi, covalent compounds include:
- Water (H₂O) – essential for life
- Oxygen (O₂) – in the air we breathe
- Carbon dioxide (CO₂) – produced by respiration
- Ethanol (C₂H₅OH) – in traditional beer (masese)
- Sugar (C₁₂H₂₂O₁₁) – in sugar cane

DIFFERENCES BETWEEN IONIC AND COVALENT:

| Feature | Ionic | Covalent |
|---------|-------|----------|
| Bond type | Electron transfer | Electron sharing |
| Between | Metal + non-metal | Non-metal + non-metal |
| Melting point | High | Low |
| Conductivity | When molten/dissolved | Never |
| State at room temp | Solid | Gas, liquid, or soft solid |

Remember: Covalent bond = sharing electrons between non-metals. Each shared pair = one bond. Single, double, and triple bonds possible. Covalent compounds have low melting points and do not conduct electricity.`,
  summary: 'Covalent bonding involves sharing electrons between non-metal atoms to achieve full outer shells. Single bonds share 1 pair, double bonds share 2 pairs, triple bonds share 3 pairs. Covalent compounds have low melting/boiling points and do not conduct electricity.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Water', description: 'H₂O is a covalent compound essential for farming and daily life.' },
    { title: 'Sugar from Sugarcane', description: 'Sugar is a covalent compound harvested in Malawi.' },
    { title: 'Ethanol in Masese', description: 'Traditional beer contains ethanol (covalent compound).' }
  ],
  practiceQuestions: [
    { question: 'What type of atoms form covalent bonds?', answer: 'Non-metals', hint: 'Sharing electrons' },
    { question: 'How many shared pairs in a double bond?', answer: '2 pairs (4 electrons total)', hint: 'More than single, less than triple' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 3',
  topic: 'Chemical Bonding',
  lessonNumber: 3,
  lessonTitle: 'Metallic Bonding and Properties of Metals',
  lessonId: 'chemistry-f3-bonding-3',
  order: 39,
  learningObjectives: [
    'Describe metallic bonding',
    'Explain the properties of metals using the metallic bond model',
    'Distinguish between metals and non-metals',
    'Explain why alloys are stronger than pure metals'
  ],
  introduction: 'Hello again! Have you ever wondered why metals conduct electricity, can be bent into wires, and are shiny? The answer is METALLIC BONDING. Today, you will learn how metal atoms bond together and why metals have their unique properties.',
  keyPoints: [
    'Metallic bonding: positive metal ions in a "sea of delocalized electrons"',
    'Delocalized electrons: free to move throughout the metal lattice',
    'Metals conduct electricity because electrons are free to move',
    'Metals are malleable (can be hammered) and ductile (can be drawn into wires)',
    'Alloys are mixtures of metals (e.g., brass, steel) – harder than pure metals'
  ],
  detailedContent: `Let me explain METALLIC BONDING.

Metal atoms have few electrons in their outer shells. They lose these electrons easily.

In a metal, atoms are arranged in a regular lattice. The outer electrons are not attached to any particular atom – they are DELOCALIZED (free to move throughout the metal).

The structure of a metal:
- Positive metal ions (cations) in fixed positions
- A "sea" of delocalized electrons surrounding them
- Electrostatic attraction between positive ions and negative electrons holds the metal together

This model explains all the properties of metals.

PROPERTIES OF METALS AND THEIR EXPLANATIONS:

| Property | Explanation from Metallic Bonding |
|----------|-----------------------------------|
| High melting and boiling points | Strong attraction between ions and electrons requires lots of energy to overcome |
| Good conductors of electricity | Delocalized electrons can move freely through the metal |
| Good conductors of heat | FREE electrons carry thermal energy quickly |
| Malleable (can be hammered into sheets) | Layers of ions can slide over each other without breaking bonds |
| Ductile (can be drawn into wires) | Same reason – ions can move without breaking |
| Shiny (lustrous) | Electrons interact with light, reflecting it |
| Sonorous (ring when struck) | Vibrations travel through the lattice |

ALLOYS:

An alloy is a mixture of a metal with other elements (metals or non-metals).

Why make alloys?
- Alloys are usually HARDER and STRONGER than pure metals
- Alloys may be more resistant to corrosion
- Alloys may have other improved properties

COMMON ALLOYS:

| Alloy | Components | Uses in Malawi |
|-------|------------|----------------|
| Brass | Copper + zinc | Door handles, musical instruments, decorative items |
| Bronze | Copper + tin | Statues, coins, bells |
| Steel | Iron + carbon (0.1-2%) | Construction, tools, cars |
| Stainless steel | Iron + chromium + nickel | Cutlery, sinks, medical instruments |
| Solder | Tin + lead (or tin + silver) | Joining electrical wires |

WHY ARE ALLOYS HARDER?

In a pure metal, all atoms are the same size, so layers can slide easily. In an alloy, atoms of different sizes disrupt the regular lattice, making it harder for layers to slide. This increases hardness and strength.

In Malawi, metals and alloys are used everywhere:
- Iron sheets for roofing (steel)
- Cooking pots (aluminium or stainless steel)
- Tools (steel)
- Coins (various alloys)
- Bicycle frames (steel)
- Wire (copper)

METALS VS NON-METALS:

| Property | Metals | Non-metals |
|----------|--------|------------|
| Appearance | Shiny | Dull |
| Conductivity | Good conductors | Poor conductors (insulators) |
| Malleability | Malleable and ductile | Brittle |
| Melting point | Usually high | Usually low |
| State at room temp | Solid (except Hg) | Gas, liquid, or solid |

In the periodic table, metals are on the left and centre, non-metals on the right.

ELECTRON SEA MODEL:

Think of a metal as a box of ball bearings (positive ions) surrounded by a liquid (the electron sea). The ball bearings are stuck in place, but the liquid can flow anywhere. That is why electrons can move but ions stay put.

Remember: Metals = positive ions + delocalized electrons. This explains conductivity, malleability, ductility, and high melting points. Alloys are mixtures that are harder than pure metals.`,
  summary: 'Metallic bonding consists of positive metal ions in a sea of delocalized electrons. This explains conductivity, malleability, ductility, and high melting points. Alloys are mixtures of metals that are usually harder and stronger than pure metals.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Iron Sheets', description: 'Steel roofing sheets are strong and durable alloys.' },
    { title: 'Cooking Pots', description: 'Aluminium pots conduct heat efficiently.' },
    { title: 'Bicycle Frames', description: 'Steel frames are strong yet can be shaped into tubes.' }
  ],
  practiceQuestions: [
    { question: 'What holds metal atoms together in metallic bonding?', answer: 'Attraction between positive ions and delocalized electrons', hint: 'Sea of electrons' },
    { question: 'Why are alloys harder than pure metals?', answer: 'Different-sized atoms disrupt the lattice, preventing layers from sliding', hint: 'Irregular structure' }
  ]
}
,

// ======================================================================
// CHEMISTRY FORM 3 (CONTINUED)
// ======================================================================

// Topic: The Mole Concept (3 lessons)
{
  subject: 'Chemistry',
  form: 'Form 3',
  topic: 'The Mole Concept',
  lessonNumber: 1,
  lessonTitle: 'Introduction to the Mole',
  lessonId: 'chemistry-f3-mole-1',
  order: 40,
  learningObjectives: [
    'Define the mole as a unit of measurement',
    'State Avogadro\'s number (6.02 × 10²³)',
    'Calculate the number of particles from moles and vice versa',
    'Explain why chemists use the mole'
  ],
  introduction: 'Hello, future chemist! How do chemists count atoms when they are too small to see? They use a special unit called the MOLE. One mole contains 602,000,000,000,000,000,000,000 particles! Today, you will learn about this enormous number and how to use it.',
  keyPoints: [
    'A mole is the amount of substance containing 6.02 × 10²³ particles',
    'Avogadro\'s number (NA) = 6.02 × 10²³ particles per mole',
    'Number of particles = moles × Avogadro\'s number',
    'Moles = number of particles ÷ Avogadro\'s number',
    'The mole allows chemists to count atoms and molecules'
  ],
  detailedContent: `Let me explain the MOLE CONCEPT.

WHAT IS A MOLE?

A mole is a counting unit, just like a dozen means 12, a gross means 144, and a ream means 500. A mole means 6.02 × 10²³ particles.

Avogadro's number = 6.02 × 10²³ (602 sextillion!)

This number was chosen because:
- 1 mole of carbon-12 atoms has a mass of exactly 12 grams
- 1 mole of any substance contains the same number of particles

WHY DO WE NEED THE MOLE?

Atoms and molecules are too small to count individually. The mole connects the microscopic world (atoms/molecules) to the macroscopic world (grams we can weigh).

THE MOLE RELATIONSHIPS:

Number of particles = moles × Avogadro's number
Moles = number of particles ÷ Avogadro's number

Let me show you calculations:

Example 1: How many particles are in 2 moles of water?
Particles = 2 × 6.02 × 10²³ = 1.204 × 10²⁴ molecules

Example 2: How many moles are in 3.01 × 10²³ particles?
Moles = 3.01 × 10²³ ÷ 6.02 × 10²³ = 0.5 moles

Example 3: How many atoms are in 0.25 moles of iron?
Atoms = 0.25 × 6.02 × 10²³ = 1.505 × 10²³ atoms

RELATING MOLES TO MASS (Molar Mass):

The molar mass of an element is its atomic mass in grams per mole.

- Carbon-12: 12 g/mol
- Oxygen: 16 g/mol
- Water (H₂O): 18 g/mol (16 + 1 + 1)

Number of moles = mass (g) ÷ molar mass (g/mol)

Example: How many moles are in 36 g of water?
Moles = 36 g ÷ 18 g/mol = 2 moles

MOLAR VOLUME OF GASES:

At standard temperature and pressure (STP: 0°C, 1 atm), 1 mole of any gas occupies 22.4 litres.

Volume of gas = moles × 22.4 L/mol

Example: What volume does 2 moles of oxygen gas occupy at STP?
Volume = 2 × 22.4 = 44.8 litres

In Malawi, the mole concept is used in:
- Preparing chemical solutions (hospitals, labs)
- Calculating fertiliser requirements (agriculture)
- Manufacturing (soap, beverages)
- Environmental testing (water quality)

SCALE OF AVOGADRO'S NUMBER:

To understand how big Avogadro's number is:
- If you had 6.02 × 10²³ grains of sand, you could cover all of Malawi many times over
- If you had that many seconds, it would be 20 million times the age of the universe
- If you could count atoms at 1 million per second, it would take 19 million years to count 1 mole!

Remember: Mole = 6.02 × 10²³ particles. It connects mass to number of particles. Moles = mass ÷ molar mass. At STP, 1 mole of gas = 22.4 L.`,
  summary: 'A mole contains 6.02 × 10²³ particles (Avogadro\'s number). The mole connects the micro (atoms) to macro (grams) world. Moles = mass ÷ molar mass. At STP, 1 mole of gas occupies 22.4 litres.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Fertiliser Calculation', description: 'Farmers calculate moles of nutrients needed per hectare.' },
    { title: 'Medicine Dosage', description: 'Pharmacists use mole concepts to prepare solutions.' },
    { title: 'Water Treatment', description: 'Chemists calculate moles of chlorine needed to disinfect water.' }
  ],
  practiceQuestions: [
    { question: 'How many particles are in 3 moles?', answer: '1.806 × 10²⁴', hint: '3 × 6.02 × 10²³' },
    { question: 'What is the molar mass of CO₂? (C=12, O=16)', answer: '44 g/mol', hint: '12 + (16×2) = 44' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 3',
  topic: 'The Mole Concept',
  lessonNumber: 2,
  lessonTitle: 'Empirical and Molecular Formulae',
  lessonId: 'chemistry-f3-mole-2',
  order: 41,
  learningObjectives: [
    'Define empirical and molecular formulae',
    'Calculate empirical formula from percentage composition',
    'Calculate molecular formula from empirical formula and molar mass',
    'Distinguish between empirical and molecular formulae'
  ],
  introduction: 'Welcome back! The chemical formula of a compound can be written in two ways: EMPIRICAL FORMULA (simplest ratio) and MOLECULAR FORMULA (actual number of atoms). Today, you will learn how to find both from experimental data.',
  keyPoints: [
    'Empirical formula: simplest whole number ratio of atoms in a compound',
    'Molecular formula: actual number of atoms in a molecule',
    'Molecular formula = (empirical formula) × n, where n is a whole number',
    'To find empirical formula: convert percentages to grams, to moles, divide by smallest'
  ],
  detailedContent: `Let me explain EMPIRICAL and MOLECULAR FORMULAE.

DEFINITIONS:

- EMPIRICAL FORMULA: The simplest whole number ratio of atoms in a compound.
  Example: Hydrogen peroxide has empirical formula HO (1:1 ratio)

- MOLECULAR FORMULA: The actual number of atoms in a molecule.
  Example: Hydrogen peroxide has molecular formula H₂O₂

- The molecular formula is always a whole number multiple of the empirical formula:
  Molecular formula = (Empirical formula) × n

CALCULATING EMPIRICAL FORMULA:

Method: percentage composition → mass (assume 100g) → moles → divide by smallest

Example: A compound is 40% carbon, 6.7% hydrogen, and 53.3% oxygen. Find empirical formula.

Step 1: Assume 100g compound (40g C, 6.7g H, 53.3g O)

Step 2: Convert to moles
C: 40 ÷ 12 = 3.33 mol
H: 6.7 ÷ 1 = 6.7 mol
O: 53.3 ÷ 16 = 3.33 mol

Step 3: Divide by smallest (3.33)
C: 3.33 ÷ 3.33 = 1
H: 6.7 ÷ 3.33 = 2
O: 3.33 ÷ 3.33 = 1

Empirical formula = CH₂O

CALCULATING MOLECULAR FORMULA:

Find the empirical formula mass, then find n = molar mass ÷ empirical mass.

Example: The compound above has molar mass 180 g/mol. Find molecular formula.

Empirical mass = 12 + (1×2) + 16 = 30 g/mol
n = 180 ÷ 30 = 6
Molecular formula = (CH₂O) × 6 = C₆H₁₂O₆ (glucose!)

PRACTICE EXAMPLES:

Example 1: A compound is 75% carbon, 25% hydrogen. Find empirical formula.

C: 75 ÷ 12 = 6.25 mol
H: 25 ÷ 1 = 25 mol
Divide by 6.25: C = 1, H = 4
Empirical formula = CH₄

Example 2: A compound has empirical formula CH₂ and molar mass 28 g/mol. Find molecular formula.

Empirical mass = 12 + 2 = 14 g/mol
n = 28 ÷ 14 = 2
Molecular formula = C₂H₄ (ethene)

WHEN EMPIRICAL = MOLECULAR:
- Water (H₂O) – simplest ratio is 2:1
- Carbon dioxide (CO₂)
- Methane (CH₄)

WHEN EMPIRICAL ≠ MOLECULAR:
- Glucose: empirical CH₂O, molecular C₆H₁₂O₆
- Hydrogen peroxide: empirical HO, molecular H₂O₂
- Ethene: empirical CH₂, molecular C₂H₄

In Malawi, these calculations are used in:
- Analysing fertiliser composition
- Determining drug purity (pharmaceuticals)
- Quality control in food processing
- Environmental analysis (air and water pollutants)

A PROTIP: The empirical formula is like a recipe ratio; the molecular formula is how many batches you actually make.

Remember: Empirical = simplest ratio. Molecular = actual numbers. Molecular = empirical × n. To find empirical formula: percentages → grams → moles → divide by smallest.`,
  summary: 'Empirical formula is the simplest whole number ratio of atoms. Molecular formula is the actual number of atoms. Molecular = empirical × n. Calculate empirical from percentage composition, then find n using molar mass.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Fertiliser Analysis', description: 'Chemists determine empirical formulae of fertilisers to check composition.' },
    { title: 'Sugar Processing', description: 'Glucose (C₆H₁₂O₆) is analysed during sugar production.' }
  ],
  practiceQuestions: [
    { question: 'A compound is 80% C, 20% H. Find empirical formula.', answer: 'CH₃', hint: '80/12=6.67, 20/1=20, divide by 6.67 → 1:3' },
    { question: 'Empirical formula CH₂O, molar mass 60 g/mol. Find molecular formula.', answer: 'C₂H₄O₂', hint: 'n = 60÷30=2' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 3',
  topic: 'The Mole Concept',
  lessonNumber: 3,
  lessonTitle: 'Concentration of Solutions',
  lessonId: 'chemistry-f3-mole-3',
  order: 42,
  learningObjectives: [
    'Define concentration and state its units',
    'Calculate concentration in mol/dm³ and g/dm³',
    'Prepare a solution of known concentration',
    'Use concentration in stoichiometric calculations'
  ],
  introduction: 'Hello again! When you make a cup of tea, how much sugar you add determines how sweet it is. Similarly, in chemistry, CONCENTRATION tells us how much solute is dissolved in a solvent. Today, you will learn how to calculate and prepare solutions of specific concentrations.',
  keyPoints: [
    'Concentration = amount of solute ÷ volume of solution',
    'Units: mol/dm³ (molarity, M) or g/dm³',
    'Molarity (M) = moles ÷ volume (in dm³)',
    'To prepare a solution: calculate mass needed, dissolve, make up to volume',
    'Concentration affects reaction rates and properties'
  ],
  detailedContent: `Let me explain CONCENTRATION OF SOLUTIONS.

DEFINITION:

Concentration tells us how much SOLUTE is dissolved in a given volume of SOLVENT (usually water).

The formula is: Concentration = moles ÷ volume (in dm³)

Units:
- mol/dm³ (moles per cubic decimetre) – also called MOLARITY (M)
- g/dm³ (grams per cubic decimetre)

1 dm³ = 1 litre = 1000 cm³

CALCULATING CONCENTRATION:

Example 1: 0.5 moles of NaCl dissolved in 2 dm³ of water. Find concentration.
Concentration = 0.5 mol ÷ 2 dm³ = 0.25 mol/dm³ (0.25 M)

Example 2: 40 g of NaOH dissolved in 1 dm³ of water. Find concentration in g/dm³ and mol/dm³.
- g/dm³ = 40 g/dm³
- Molar mass of NaOH = 23+16+1=40 g/mol
- Moles = 40 ÷ 40 = 1 mol
- Concentration = 1 mol/dm³ (1 M)

RELATING MOLES, CONCENTRATION, AND VOLUME:

Moles = concentration × volume (in dm³)

Example: How many moles are in 0.5 dm³ of 2 M HCl?
Moles = 2 × 0.5 = 1 mol

PREPARING A SOLUTION:

To prepare 1 dm³ of 0.5 M NaCl:

Step 1: Calculate mass needed
Molar mass NaCl = 23 + 35.5 = 58.5 g/mol
Moles needed = 0.5 mol
Mass = 0.5 × 58.5 = 29.25 g

Step 2: Weigh 29.25 g of NaCl

Step 3: Dissolve in some water (about 500 cm³)

Step 4: Transfer to 1 dm³ volumetric flask

Step 5: Add water to the mark

Step 6: Mix thoroughly

DILUTION:

When diluting, moles stay the same: C₁V₁ = C₂V₂

Example: What volume of 2 M HCl is needed to make 500 cm³ of 0.5 M HCl?
C₁V₁ = C₂V₂
2 × V₁ = 0.5 × 500
V₁ = (0.5 × 500) ÷ 2 = 250 ÷ 2 = 125 cm³

So take 125 cm³ of 2 M HCl and add water to make 500 cm³.

CONCENTRATION IN EVERYDAY LIFE IN MALAWI:

| Example | Concentration |
|---------|---------------|
| Soft drinks | About 0.5 M sugar |
| Vinegar | About 0.8 M acetic acid |
| Lemon juice | About 0.3 M citric acid |
| Lake Malawi | Very dilute salts (about 0.05 M) |
| Pharmanova medicines | Various concentrations |

IMPORTANCE OF CONCENTRATION:

- Medicines: too strong = toxic, too weak = ineffective
- Fertilisers: correct concentration for plant uptake
- Water treatment: right amount of chlorine kills germs
- Cooking: recipes specify concentrations (e.g., 1 teaspoon salt per litre)

In Malawi, concentration calculations are used by:
- Nurses preparing IV solutions
- Farmers mixing fertiliser solutions
- Water treatment plant operators
- Laboratory technicians

A PROTIP: Always add acid to water, not water to acid! It prevents dangerous splashing.

Remember: Concentration = moles ÷ volume (in dm³). Molarity is mol/dm³. To prepare a solution, calculate mass needed, dissolve, and dilute to correct volume. C₁V₁ = C₂V₂ for dilutions.`,
  summary: 'Concentration = moles ÷ volume in dm³ (mol/dm³ = Molarity). To prepare a solution, calculate required mass, dissolve, and dilute to volume. For dilutions, use C₁V₁ = C₂V₂. Concentration affects chemical behaviour and is essential in medicine, farming, and industry.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'IV Drip Solutions', description: 'Hospitals prepare 0.9% NaCl (saline) – about 0.15 M.' },
    { title: 'Fertiliser Mixing', description: 'Farmers dissolve fertiliser in water at specific concentrations.' },
    { title: 'Water Treatment', description: 'Concentration of chlorine must be just right to kill germs but be safe.' }
  ],
  practiceQuestions: [
    { question: 'Calculate the concentration if 0.2 moles are in 0.5 dm³.', answer: '0.4 mol/dm³', hint: '0.2 ÷ 0.5 = 0.4' },
    { question: 'What volume of 4 M HCl is needed to make 200 cm³ of 1 M HCl?', answer: '50 cm³', hint: 'C₁V₁ = C₂V₂ → 4×V₁ = 1×200 → V₁=50' }
  ]
},

// ======================================================================
// ENGLISH FORM 1
// ======================================================================

// Topic: Parts of Speech - Nouns (2 lessons)
{
  subject: 'English',
  form: 'Form 1',
  topic: 'Parts of Speech - Nouns',
  lessonNumber: 1,
  lessonTitle: 'Types of Nouns',
  lessonId: 'english-f1-nouns-1',
  order: 43,
  learningObjectives: [
    'Define a noun',
    'Identify common and proper nouns',
    'Identify concrete and abstract nouns',
    'Identify countable and uncountable nouns'
  ],
  introduction: 'Good day, English learner! Every sentence you speak or write contains nouns. Nouns are naming words – they name people, places, things, or ideas. Today, you will learn about the different types of nouns and how to use them correctly.',
  keyPoints: [
    'A noun is a word that names a person (teacher), place (Lilongwe), thing (book), or idea (love)',
    'Common nouns: general names (city, student, river) – NOT capitalised (unless starting sentence)',
    'Proper nouns: specific names (Lilongwe, Mary, Lake Malawi) – ALWAYS capitalised',
    'Concrete nouns: can be seen/touched (table, mango, chicken)',
    'Abstract nouns: cannot be seen/touched (love, happiness, freedom)',
    'Countable nouns: can be counted (one book, two books)',
    'Uncountable nouns: cannot be counted (water, rice, information)'
  ],
  detailedContent: `Let me explain NOUNS.

All nouns are naming words, but they can be grouped in different ways.

COMMON NOUNS vs PROPER NOUNS:

COMMON NOUNS name general things:
- city, country, river, month, day, person, teacher, doctor

PROPER NOUNS name specific things:
- Lilongwe, Malawi, Lake Malawi, January, Monday, Mrs Phiri, Dr Banda

PROPER NOUNS are ALWAYS capitalised!

Examples in sentences:
- "I live in a city." (common) vs "I live in Lilongwe." (proper)
- "She is a doctor." (common) vs "She is Dr Chisale." (proper)

CONCRETE NOUNS vs ABSTRACT NOUNS:

CONCRETE NOUNS can be experienced with your five senses (see, hear, touch, taste, smell):
- table, chair, chicken, mango, water, book, phone

ABSTRACT NOUNS cannot be experienced with your senses – they are ideas, feelings, or concepts:
- love, happiness, sadness, freedom, time, education, health

Examples in sentences:
- "The mango is sweet." (concrete – you can taste it)
- "I feel happiness." (abstract – you cannot touch happiness)

COUNTABLE NOUNS vs UNCOUNTABLE NOUNS:

COUNTABLE NOUNS can be counted. They have both singular and plural forms:
- one book, two books; one mango, three mangoes; one student, ten students

UNCOUNTABLE NOUNS cannot be counted. They usually have no plural form:
- water, rice, sugar, salt, information, advice, furniture

We cannot say "one water" or "two waters" (unless referring to bottles).

Instead we say: "a glass of water", "a cup of rice", "a piece of advice"

Examples in sentences:
- "I bought three books." (countable)
- "I need some water." (uncountable)

Nouns can belong to multiple categories at once:
- "Malawi" is proper + concrete
- "Love" is common + abstract
- "Mango" is common + concrete + countable

COMMON SUFFIXES FOR NOUNS:

Sometimes we add endings to verbs or adjectives to make nouns:
- -tion: educate → education
- -ment: develop → development
- -ness: happy → happiness
- -ity: active → activity
- -er/-or: teach → teacher, act → actor

In Malawi, nouns are everywhere in our daily language:
- Place names: Lilongwe, Blantyre, Mzuzu, Zomba, Mulanje
- Food names: nsima, chambo, mango, banana
- People names: Mary, John, Chifundo, Thoko

Remember: Nouns name people, places, things, or ideas. Proper nouns are specific and capitalised. Concrete nouns are physical; abstract nouns are ideas. Countable nouns have plurals; uncountable nouns do not.`,
  summary: 'Nouns name people, places, things, or ideas. Proper nouns are specific and capitalised. Common nouns are general. Concrete nouns are physical; abstract nouns are ideas. Countable nouns have plurals; uncountable nouns do not.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Place Names', description: 'Lilongwe, Blantyre, Mzuzu, Zomba (proper nouns)' },
    { title: 'Food Names', description: 'Nsima, chambo, mango, banana (common, concrete nouns)' }
  ],
  practiceQuestions: [
    { question: 'Is "Lilongwe" a common or proper noun?', answer: 'Proper', hint: 'Specific name of a city' },
    { question: 'Is "water" countable or uncountable?', answer: 'Uncountable', hint: 'We say "some water", not "one water"' }
  ]
},
{
  subject: 'English',
  form: 'Form 1',
  topic: 'Parts of Speech - Nouns',
  lessonNumber: 2,
  lessonTitle: 'Singular and Plural Nouns',
  lessonId: 'english-f1-nouns-2',
  order: 44,
  learningObjectives: [
    'Form plurals of regular nouns',
    'Form plurals of common irregular nouns',
    'Use correct plural forms in sentences',
    'Distinguish between singular and plural noun usage'
  ],
  introduction: 'Welcome back! One book is singular; two books are plural. Most nouns follow simple rules to become plural, but some are irregular. Today, you will learn the rules for forming plurals in English.',
  keyPoints: [
    'Most nouns: add -s (book → books, pen → pens)',
    'Nouns ending in s, sh, ch, x, z: add -es (bus → buses, box → boxes)',
    'Nouns ending in consonant + y: change y to i and add -es (baby → babies)',
    'Nouns ending in f or fe: change f to v and add -es (knife → knives)',
    'Some nouns have irregular plurals (man → men, child → children)',
    'Some nouns are the same in singular and plural (sheep, fish)'
  ],
  detailedContent: `Let me explain how to form PLURALS in English.

REGULAR PLURALS (the most common rule):

RULE 1: Most nouns add -s
- book → books
- pen → pens
- girl → girls
- mango → mangoes? Wait – this is special! Most add -s, but mango and potato add -es.

RULE 2: Nouns ending in s, sh, ch, x, z add -es
- bus → buses
- dish → dishes
- church → churches
- box → boxes
- buzz → buzzes

RULE 3: Nouns ending in consonant + y: change y to i and add -es
- baby → babies
- city → cities
- country → countries
- party → parties

But if the noun ends in vowel + y, just add -s:
- boy → boys
- day → days
- key → keys

RULE 4: Nouns ending in f or fe: change f to v and add -es
- knife → knives
- wife → wives
- leaf → leaves
- thief → thieves

Exceptions: roof → roofs, chief → chiefs (just add -s)

RULE 5: Some nouns ending in o: add -es
- potato → potatoes
- tomato → tomatoes
- mango → mangoes

Exceptions: piano → pianos, photo → photos (just add -s)

IRREGULAR PLURALS (must memorise):

| Singular | Plural |
|----------|--------|
| man | men |
| woman | women |
| child | children |
| foot | feet |
| tooth | teeth |
| goose | geese |
| mouse | mice |
| ox | oxen |

NOUNS THAT STAY THE SAME:

| Singular/Plural |
|-----------------|
| sheep |
| fish |
| deer |
| species |
| aircraft |

NOUNS THAT ARE ALWAYS PLURAL (no singular):
- clothes, trousers, scissors, glasses (eyewear), thanks

NOUNS THAT ARE ALWAYS SINGULAR (even though they end in s):
- mathematics, physics, news, measles

In Malawi, you will use plurals every day:
- "How many books do you have?"
- "We have three cows."
- "Children are playing."

A PROTIP: When using numbers, the noun is plural: "five mangoes" not "five mango".

Except when the number is one: "one mango".

Remember: Most nouns add -s. Nouns ending in s/sh/ch/x/z add -es. Nouns ending in consonant+y: change y to i and add -es. Some are irregular – memorise them!`,
  summary: 'Regular plurals: add -s (most nouns), add -es (s,sh,ch,x,z), change y to i + -es (consonant+y), change f to v + -es. Irregular plurals: man→men, child→children, etc. Some nouns stay the same (sheep).',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Food Words', description: 'Mango → mangoes, banana → bananas, tomato → tomatoes.' },
    { title: 'Farm Words', description: 'Cow → cows, chicken → chickens, sheep → sheep (same!).' }
  ],
  practiceQuestions: [
    { question: 'What is the plural of "baby"?', answer: 'Babies', hint: 'Consonant + y: change y to i and add -es' },
    { question: 'What is the plural of "child"?', answer: 'Children', hint: 'Irregular plural – special spelling' }
  ]
},

// Topic: Parts of Speech - Verbs (2 lessons)
{
  subject: 'English',
  form: 'Form 1',
  topic: 'Parts of Speech - Verbs',
  lessonNumber: 1,
  lessonTitle: 'Action and Linking Verbs',
  lessonId: 'english-f1-verbs-1',
  order: 45,
  learningObjectives: [
    'Define a verb',
    'Identify action verbs',
    'Identify linking verbs (to be verbs)',
    'Distinguish between action and linking verbs'
  ],
  introduction: 'Hello! Verbs are the "doing" or "being" words in a sentence. Without verbs, you cannot express action or state of being. Today, you will learn about ACTION verbs (what you do) and LINKING verbs (what you are).',
  keyPoints: [
    'A verb shows action, occurrence, or state of being',
    'Action verbs: show physical or mental action (run, think, eat, write)',
    'Linking verbs: connect the subject to information about it (is, am, are, was, were)',
    'The most common linking verb is "to be" (be, am, is, are, was, were, being, been)',
    'Other linking verbs: seem, become, appear, feel, look, smell, sound, taste'
  ],
  detailedContent: `Let me explain VERBS.

Every complete sentence must have a verb. Verbs tell us what the subject DOES or IS.

ACTION VERBS:

Action verbs show PHYSICAL or MENTAL action.

Physical actions (you can see them):
- run, walk, jump, eat, drink, write, read, cook, build, plant

Mental actions (happen in your mind):
- think, believe, know, understand, remember, forget, want, need, love, hate

Examples in sentences:
- "Chifundo RUNS to school every day." (physical action)
- "I THINK maths is interesting." (mental action)
- "The farmer PLANTS maize in November." (physical action)
- "I REMEMBER my teacher's name." (mental action)

LINKING VERBS (State of Being Verbs):

Linking verbs do not show action. They CONNECT the subject to a description.

The most common linking verbs are forms of "TO BE":

- I am
- You are
- He/She/It is
- We are
- They are

Past tense:
- I was
- You were
- He/She/It was
- We were
- They were

Examples in sentences:
- "The mango IS sweet." (the verb "is" links "mango" to "sweet")
- "I AM a student." (the verb "am" links "I" to "student")
- "They WERE happy." (the verb "were" links "they" to "happy")

OTHER LINKING VERBS:

These verbs can also link the subject to a description:

- seem: "He SEEMS tired."
- become: "She BECAME a teacher."
- appear: "The food APPEARS ready."
- feel: "I FEEL happy."
- look: "You LOOK beautiful."
- smell: "The nsima SMELLS good."
- sound: "That music SOUNDS nice."
- taste: "The chambo TASTES delicious."

HOW TO TELL THE DIFFERENCE:

Some verbs can be action OR linking, depending on context.

Example with "feel":
- Action: "I FEEL the soft cloth." (I am touching it – action)
- Linking: "I FEEL happy." (describing my state – linking)

Example with "smell":
- Action: "I SMELL the flowers." (action)
- Linking: "The flowers SMELL sweet." (describing the flowers)

In Malawi, verbs are used constantly:
- "Children PLAY in the village." (action)
- "Mr Banda IS the head teacher." (linking)
- "We EAT nsima for dinner." (action)
- "Lake Malawi IS beautiful." (linking)

A PROTIP: If you can replace the verb with "is", "am", or "are" and the sentence still makes sense, it is a linking verb.

Example: "The mango tastes sweet." → "The mango IS sweet." ✓ (linking)
"I taste the mango." → "I am the mango." ✗ (action)

Remember: Action verbs show doing. Linking verbs show being. Every sentence needs a verb. The most common linking verb is "to be".`,
  summary: 'Verbs show action or state of being. Action verbs show physical or mental action. Linking verbs connect the subject to a description. The most common linking verb is "to be" (am, is, are, was, were).',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Farming Actions', description: 'The farmer PLANTS, WATERS, and HARVESTS crops.' },
    { title: 'School Life', description: 'Students READ, WRITE, and LEARN. Teachers TEACH.' }
  ],
  practiceQuestions: [
    { question: 'Identify the verb: "The children are playing."', answer: 'Are playing', hint: 'Are = linking? or part of action?' },
    { question: 'Is "think" an action or linking verb?', answer: 'Action (mental)', hint: 'Mental action, not state of being' }
  ]
},
{
  subject: 'English',
  form: 'Form 1',
  topic: 'Parts of Speech - Verbs',
  lessonNumber: 2,
  lessonTitle: 'Verb Tenses - Present and Past',
  lessonId: 'english-f1-verbs-2',
  order: 46,
  learningObjectives: [
    'Identify present tense verbs',
    'Identify past tense verbs',
    'Form regular past tense verbs',
    'Identify common irregular past tense verbs'
  ],
  introduction: 'Welcome back! Verbs tell us WHEN an action happens – in the present (now), past (before now), or future (later). Today, you will learn about PRESENT and PAST tenses.',
  keyPoints: [
    'Present tense: action happening NOW (I walk, he walks, they walk)',
    'Past tense: action happened BEFORE NOW (I walked, he walked)',
    'Regular past tense: add -ed to the verb (walk → walked, play → played)',
    'Irregular past tense: special form (go → went, eat → ate, see → saw)',
    'Third person singular (he, she, it): add -s or -es in present tense'
  ],
  detailedContent: `Let me explain VERB TENSES – focusing on PRESENT and PAST.

PRESENT TENSE:

Present tense shows action happening NOW or habitual action (things you do regularly).

For most verbs:
- I walk
- You walk
- We walk
- They walk
- He/She/It walkS (add -s)

Examples:
- "I EAT nsima every day." (habitual)
- "She WALKS to school." (habitual)
- "The sun SHINES brightly." (current state)

PRESENT TENSE SPELLING RULES:

1. Most verbs: add -s (run → runs, play → plays)
2. Verbs ending in s, sh, ch, x, z: add -es (push → pushes, watch → watches)
3. Verbs ending in consonant + y: change y to i and add -es (cry → cries)
4. Irregular: have → has, do → does, go → goes

PAST TENSE:

Past tense shows action that happened BEFORE NOW.

REGULAR PAST TENSE: add -ed

- walk → walked
- play → played
- clean → cleaned
- cook → cooked

Spelling rules for -ed:
1. Most verbs: add -ed (jump → jumped)
2. Verbs ending in e: add -d (live → lived)
3. Verbs ending in consonant + y: change y to i and add -ed (cry → cried)
4. Short verbs ending in consonant-vowel-consonant: double last letter + ed (stop → stopped)

IRREGULAR PAST TENSE (must memorise):

| Present | Past |
|---------|------|
| go | went |
| eat | ate |
| see | saw |
| drink | drank |
| run | ran |
| sing | sang |
| swim | swam |
| write | wrote |
| read | read (same spelling, different pronunciation) |
| buy | bought |
| teach | taught |
| think | thought |
| break | broke |
| speak | spoke |
| drive | drove |
| ride | rode |
| fly | flew |
| grow | grew |
| know | knew |
| begin | began |
| choose | chose |
| freeze | froze |
| steal | stole |
| wear | wore |
| wake | woke |

SENTENCE EXAMPLES:

Present:
- "I EAT breakfast at 7 am."
- "She GOES to school every day."

Past:
- "Yesterday, I ATE breakfast at 8 am."
- "She WENT to school yesterday."

COMMON MISTAKE TO AVOID:

Do not mix tenses in the same sentence unless time changes:
❌ "I WENT to the market and BUY vegetables." (Went = past; Buy = present)
✓ "I WENT to the market and BOUGHT vegetables." (both past)

In Malawi, you use tenses constantly:
- "I study English now." (present)
- "I studied English yesterday." (past)
- "Farmers plant maize in November." (present habitual)
- "Farmers planted maize last month." (past)

A PROTIP: Many irregular verbs have patterns. For example:
- sing → sang → sung
- ring → rang → rung
- begin → began → begun (similar)

Remember: Present tense = now; add -s for he/she/it. Regular past = add -ed. Irregular past = special memorised forms. Use the same tense throughout a sentence.`,
  summary: 'Present tense shows action now or habitually. For he/she/it, add -s or -es. Past tense shows action before now. Regular verbs add -ed. Irregular verbs have special forms that must be memorised. Do not mix tenses in one sentence.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Daily Routine', description: 'I WAKE up at 6 am. I EAT breakfast. I GO to school.' },
    { title: 'Yesterday', description: 'Yesterday, I WOKE up at 6 am. I ATE breakfast. I WENT to school.' }
  ],
  practiceQuestions: [
    { question: 'What is the past tense of "play"?', answer: 'Played', hint: 'Add -ed – regular' },
    { question: 'What is the past tense of "go"?', answer: 'Went', hint: 'Irregular – memorise' }
  ]
}
,

// ======================================================================
// CHEMISTRY FORM 4
// ======================================================================

// Topic: Rates of Reaction (3 lessons)
{
  subject: 'Chemistry',
  form: 'Form 4',
  topic: 'Rates of Reaction',
  lessonNumber: 1,
  lessonTitle: 'Factors Affecting Reaction Rate',
  lessonId: 'chemistry-f4-rates-1',
  order: 47,
  learningObjectives: [
    'Define rate of reaction',
    'Explain how concentration affects reaction rate',
    'Explain how temperature affects reaction rate',
    'Explain how surface area affects reaction rate'
  ],
  introduction: 'Hello, chemist! Have you noticed that food spoils faster in hot weather? Or that small pieces of sugar dissolve faster than large lumps? These are examples of REACTION RATE – how fast a chemical reaction happens. Today, you will learn what factors make reactions go faster or slower.',
  keyPoints: [
    'Rate of reaction: how fast reactants are used up or products are formed',
    'Higher concentration = faster reaction (more particles collide)',
    'Higher temperature = faster reaction (particles move faster, collide more often and with more energy)',
    'Smaller particle size / larger surface area = faster reaction (more particles exposed)',
    'Catalyst: substance that speeds up a reaction without being used up'
  ],
  detailedContent: `Let me explain the FACTORS AFFECTING RATE OF REACTION.

Rate of reaction tells us how FAST a chemical reaction happens. We can measure it by:
- How quickly reactants disappear
- How quickly products appear

FACTOR 1: CONCENTRATION

Higher concentration = faster reaction.

Why? More particles in the same volume means more collisions per second. More collisions → more reactions.

Example: Alka-Seltzer tablet fizzes faster in less water (higher concentration) than in more water (lower concentration).

In Malawi, when farmers mix fertiliser, higher concentration solutions react faster with soil.

FACTOR 2: TEMPERATURE

Higher temperature = faster reaction.

Why? Particles move faster at higher temperatures. Faster movement means:
- More frequent collisions
- More energetic collisions (more likely to overcome activation energy)

Rule of thumb: Increasing temperature by 10°C often doubles the reaction rate!

Example: Food spoils faster in hot weather. Milk sours faster when left out of the refrigerator.

In Malawi, during hot season, chemical reactions happen faster – this affects everything from cooking to rusting.

FACTOR 3: SURFACE AREA

Smaller particles = larger surface area = faster reaction.

Why? Only the particles on the surface can react. Smaller pieces have more surface exposed.

Example:
- A whole match takes time to burn; sawdust burns instantly!
- Powdered sugar dissolves faster than sugar cubes.

In Malawi:
- Grinding maize into flour increases surface area for cooking
- Chopping firewood into smaller pieces helps it burn faster

FACTOR 4: CATALYSTS

A catalyst speeds up a reaction without being used up.

How? Catalysts provide an alternative reaction pathway with lower activation energy.

Examples:
- Enzymes in your body (biological catalysts)
- Manganese dioxide speeds up hydrogen peroxide decomposition
- Iron in the Haber process (making fertilisers)

In Malawi:
- Yeast contains enzymes that speed up fermentation for mahewu
- Catalytic converters in cars reduce pollution

FACTOR 5: PRESSURE (for gases)

Higher pressure = faster reaction (like concentration but for gases).

Why? Higher pressure pushes gas particles closer together, increasing collisions.

COLLISION THEORY SUMMARY:

For a reaction to happen:
1. Particles must COLLIDE
2. Particles must have enough ENERGY (activation energy)
3. Particles must have the correct ORIENTATION

Factors that increase collisions or energy will increase reaction rate.

RATE OF REACTION IN MALAWI:

| Example | Factor at work |
|---------|----------------|
| Cooking nsima | High temperature speeds starch gelatinisation |
| Refrigerating food | Low temperature slows spoilage reactions |
| Grinding fertiliser | Larger surface area for faster soil reaction |
| Using yeast | Enzymes catalyse fermentation |

A PROTIP: The same factors that speed up desirable reactions also speed up undesirable ones (like rusting and spoilage). Understanding rates helps us control both.

Remember: Rate depends on concentration, temperature, surface area, catalysts, and pressure (for gases). Higher concentration, temperature, surface area, and pressure = faster reactions. Catalysts speed up reactions without being used up.`,
  summary: 'Rate of reaction is affected by concentration (higher = faster), temperature (higher = faster), surface area (larger = faster), catalysts (add = faster), and pressure (higher = faster for gases). Collision theory explains why – more collisions with more energy lead to faster reactions.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Cooking Nsima', description: 'High temperature speeds up the cooking process.' },
    { title: 'Refrigeration', description: 'Keeping food cold slows down spoilage reactions.' },
    { title: 'Grinding Fertiliser', description: 'Smaller particles dissolve faster in soil.' }
  ],
  practiceQuestions: [
    { question: 'What happens to reaction rate when temperature increases?', answer: 'Reaction rate increases', hint: 'Particles move faster' },
    { question: 'Why does powdered sugar dissolve faster than sugar cubes?', answer: 'Larger surface area', hint: 'More particles exposed' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 4',
  topic: 'Rates of Reaction',
  lessonNumber: 2,
  lessonTitle: 'Measuring Reaction Rate',
  lessonId: 'chemistry-f4-rates-2',
  order: 48,
  learningObjectives: [
    'Measure reaction rates using different methods',
    'Plot and interpret concentration vs time graphs',
    'Calculate average and instantaneous rates',
    'Explain the shape of rate graphs'
  ],
  introduction: 'Welcome back! How do chemists actually MEASURE how fast a reaction is happening? They can track how quickly reactants disappear or products appear. Today, you will learn about methods for measuring reaction rates and how to interpret the graphs.',
  keyPoints: [
    'Monitor gas volume: measure gas produced over time',
    'Monitor mass change: measure mass loss over time (if gas escapes)',
    'Monitor colour change: use colorimeter or timing',
    'Monitor precipitate formation: time until cross disappears',
    'Average rate = total change ÷ total time',
    'Initial rate is steepest slope at t=0'
  ],
  detailedContent: `Let me explain how to MEASURE REACTION RATES.

METHOD 1: MEASURING GAS PRODUCTION

When a reaction produces a gas (like CO₂), we can measure the volume of gas collected over time.

Apparatus:
- Conical flask with reactants
- Delivery tube to inverted measuring cylinder (water displacement)
- Stopwatch

Data collected: Volume of gas (cm³) at different times (seconds)

Example: Marble chips (CaCO₃) + hydrochloric acid → CO₂ gas

METHOD 2: MEASURING MASS LOSS

If gas escapes, the mass of the reaction mixture decreases.

Apparatus:
- Flask on a balance
- Stopwatch

Data collected: Mass (g) at different times (seconds)

METHOD 3: MEASURING COLOUR CHANGE

When a reactant or product is coloured, we can time how long colour takes to change.

Example: Sodium thiosulfate + hydrochloric acid → sulphur precipitate (turns cloudy)

We time how long until a cross under the flask disappears.

METHOD 4: MEASURING pH CHANGE

If the reaction produces or consumes H⁺ ions, pH changes.

Example: Acid-base reactions

GRAPHING REACTION RATE:

Two types of graphs:

1. Reactant disappearing: as time increases, amount of reactant DECREASES
   - Starts steep (fast), becomes less steep (slower), flattens (finished)

2. Product forming: as time increases, amount of product INCREASES
   - Starts steep (fast), becomes less steep (slower), flattens (finished)

CALCULATING RATES:

Average rate = Total change ÷ Total time

Example: 50 cm³ of gas produced in 100 seconds
Average rate = 50 ÷ 100 = 0.5 cm³/s

Instantaneous rate = rate at a specific time = slope of tangent to curve at that time

The INITIAL RATE is the rate at t=0 – the steepest part of the curve.

Why does rate decrease over time?

As reactants are used up, their concentration decreases → fewer collisions → slower rate

Eventually, reactants run out → rate reaches zero

In Malawi, rate measurements are used in:
- Food industry (how quickly products ferment)
- Pharmaceutical manufacturing (how quickly drugs dissolve)
- Environmental monitoring (how quickly pollutants break down)

A PROTIP: The shape of the curve is always the same – steep at the start (lots of reactants), then levelling off (reactants used up). Only the STEEPNESS changes depending on conditions (temperature, concentration).

Remember: Measure gas volume, mass loss, colour change, or precipitate formation. Graphs show rate decreasing over time. Average rate = total ÷ total time. Instantaneous rate = slope of tangent. Initial rate is fastest.`,
  summary: 'Reaction rates can be measured by gas volume, mass loss, colour change, or precipitate formation. Graphs show rate decreasing as reactants are used up. Average rate = total change ÷ total time. The slope of the curve gives instantaneous rate.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Fermentation Monitoring', description: 'Measuring gas production from mahewu fermentation.' },
    { title: 'Drug Testing', description: 'Measuring how quickly medicines dissolve.' }
  ],
  practiceQuestions: [
    { question: 'Why does reaction rate decrease over time?', answer: 'Reactants are used up, concentration decreases', hint: 'Fewer collisions' },
    { question: 'What does the steepest slope on a rate graph represent?', answer: 'Initial rate (fastest rate)', hint: 'Highest concentration of reactants' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 4',
  topic: 'Rates of Reaction',
  lessonNumber: 3,
  lessonTitle: 'Catalysts and Enzymes',
  lessonId: 'chemistry-f4-rates-3',
  order: 49,
  learningObjectives: [
    'Define a catalyst',
    'Explain how catalysts work (activation energy)',
    'Distinguish between homogeneous and heterogeneous catalysts',
    'Explain the importance of enzymes as biological catalysts'
  ],
  introduction: 'Hello again! Some reactions are too slow to be useful. But we can speed them up using CATALYSTS – substances that increase reaction rate without being used up. Your own body uses biological catalysts called ENZYMES to digest food. Today, you will learn how catalysts work.',
  keyPoints: [
    'Catalyst: speeds up a reaction without being consumed',
    'Catalysts work by lowering activation energy (energy barrier)',
    'Homogeneous catalyst: same phase as reactants (e.g., all in solution)',
    'Heterogeneous catalyst: different phase (e.g., solid catalyst with gas/liquid reactants)',
    'Enzymes: biological catalysts (proteins) that are very specific',
    'Catalysts do not change the final products or yield'
  ],
  detailedContent: `Let me explain CATALYSTS and ENZYMES.

WHAT IS A CATALYST?

A catalyst is a substance that increases the rate of a chemical reaction without being used up. It is regenerated at the end.

How does it work?

Without a catalyst, reactant molecules need a lot of energy to react (activation energy barrier). A catalyst provides an ALTERNATIVE PATHWAY with a LOWER activation energy.

This means more molecules have enough energy to react, so the reaction speeds up.

ENERGY DIAGRAM:

Without catalyst: high "hump" (activation energy)
With catalyst: lower "hump" (easier to overcome)

TYPES OF CATALYSTS:

HOMOGENEOUS CATALYST:
- Same physical state as reactants
- Example: H⁺ ions catalysing ester hydrolysis
- Advantage: molecules mix intimately
- Disadvantage: difficult to separate from products

HETEROGENEOUS CATALYST:
- Different physical state from reactants
- Example: Platinum in catalytic converters (solid catalyst, gas reactants)
- Iron in Haber process (solid catalyst, gas reactants)
- Advantage: easy to separate and reuse
- Disadvantage: only surface atoms work

CATALYTIC CONVERTERS:

Cars have catalytic converters that change harmful exhaust gases into less harmful ones:
- CO → CO₂
- NOx → N₂ + O₂
- Unburnt hydrocarbons → CO₂ + H₂O

The catalyst (platinum, palladium, rhodium) is NOT used up – it lasts for many years.

ENZYMES (Biological Catalysts):

Enzymes are proteins that catalyse reactions in living things.

Properties of enzymes:
- Very specific (each enzyme catalyses only ONE reaction)
- Work best at optimum temperature (about 37°C for human enzymes)
- Work best at optimum pH (stomach enzymes need acid; others need neutral)
- Can be denatured (destroyed) by high heat or extreme pH

Examples of enzymes:
- Amylase: breaks down starch into sugars (in saliva)
- Pepsin: breaks down proteins in stomach
- Catalase: breaks down hydrogen peroxide (in cells)
- Yeast enzymes: convert sugar to alcohol and CO₂ (fermentation)

In Malawi, catalysts and enzymes are everywhere:
- Yeast in mahewu and bread making (catalyses fermentation)
- Catalytic converters in cars (reduce pollution)
- Enzymes in your body (digest food)
- Manganese dioxide (catalyst for hydrogen peroxide decomposition)

Reaction pathway: A + B → C

With catalyst: A + catalyst → intermediate → catalyst + C (catalyst recycled)

A PROTIP: A catalyst does NOT affect the amount of product – only how FAST you get there. The yield (final amount) is the same with or without catalyst.

Remember: Catalyst speeds up reaction without being used up. Works by lowering activation energy. Homogeneous = same phase; heterogeneous = different phase. Enzymes are biological catalysts (proteins). They are very specific and sensitive to temperature and pH.`,
  summary: 'Catalysts speed up reactions by lowering activation energy without being consumed. Homogeneous catalysts are in the same phase; heterogeneous are in different phases. Enzymes are biological catalysts that are very specific and work best at optimum temperature and pH.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Mahewu Fermentation', description: 'Yeast enzymes catalyse sugar → alcohol + CO₂.' },
    { title: 'Bread Making', description: 'Yeast produces CO₂ that makes bread rise.' },
    { title: 'Catalytic Converters', description: 'Cars in Malawi have catalysts to reduce pollution.' }
  ],
  practiceQuestions: [
    { question: 'What is a catalyst?', answer: 'Speeds up a reaction without being consumed', hint: 'Not used up' },
    { question: 'What type of catalyst is an enzyme?', answer: 'Biological catalyst (protein)', hint: 'Found in living things' }
  ]
},

// ======================================================================
// ENGLISH FORM 2
// ======================================================================

// Topic: Adjectives (2 lessons)
{
  subject: 'English',
  form: 'Form 2',
  topic: 'Adjectives',
  lessonNumber: 1,
  lessonTitle: 'Descriptive and Limiting Adjectives',
  lessonId: 'english-f2-adjectives-1',
  order: 50,
  learningObjectives: [
    'Define an adjective',
    'Identify descriptive adjectives',
    'Identify limiting adjectives (articles, demonstratives, possessives)',
    'Use adjectives correctly in sentences'
  ],
  introduction: 'Good day! Have you ever wanted to describe something? "The sweet mango", "the tall boy", "the blue sky" – the words "sweet", "tall", and "blue" are ADJECTIVES. They add detail and colour to your language. Today, you will learn how to use adjectives effectively.',
  keyPoints: [
    'An adjective describes or modifies a noun or pronoun',
    'Descriptive adjectives: describe quality (sweet, tall, blue, big, small)',
    'Limiting adjectives: specify which noun (this, that, my, your, a, an, the)',
    'Articles: a, an, the',
    'Demonstratives: this, that, these, those',
    'Possessives: my, your, his, her, its, our, their'
  ],
  detailedContent: `Let me explain ADJECTIVES.

Adjectives are words that DESCRIBE nouns. They tell you more about the noun – what kind, which one, or how many.

DESCRIPTIVE ADJECTIVES:

These describe the QUALITY of a noun. They answer "What kind?"

Examples:
- colour: red, blue, green, yellow, white, black
- size: big, small, large, tiny, huge, enormous
- shape: round, square, flat, curved
- age: new, old, young, ancient, modern
- opinion: beautiful, ugly, delicious, terrible, wonderful
- material: wooden, plastic, metal, cotton, silk

Sentences:
- "The DELICIOUS nsima was served hot."
- "She wore a BEAUTIFUL chitenje."
- "The TALL mango tree provides shade."

LIMITING ADJECTIVES:

These specify WHICH noun. They do not describe qualities; they point out or limit.

1. ARTICLES: a, an, the
- "A mango" (any mango, not specific)
- "An apple" (apple – 'an' before vowel sound)
- "The mango" (a specific mango)

2. DEMONSTRATIVES: this, that, these, those
- THIS mango (near me, singular)
- THAT mango (far from me, singular)
- THESE mangoes (near me, plural)
- THOSE mangoes (far from me, plural)

3. POSSESSIVES: my, your, his, her, its, our, their
- MY book
- YOUR pen
- HIS bicycle
- HER dress
- OUR school
- THEIR village

4. NUMBERS (also limit)
- ONE student, TWO cows, the FIRST day

COMPARING WITH ADJECTIVES:

We can compare things using adjectives:

POSITIVE (no comparison): tall, sweet, big
COMPARATIVE (comparing two things): taller, sweeter, bigger
SUPERLATIVE (comparing three or more): tallest, sweetest, biggest

Rules:
- One-syllable: add -er (taller), -est (tallest)
- Ends with e: add -r (nicer), -st (nicest)
- Consonant + vowel + consonant: double last letter (big → bigger)
- Two syllables ending in y: change y to i (happy → happier)
- Longer adjectives: use more/most (more beautiful, most beautiful)

Irregular comparisons:
- good → better → best
- bad → worse → worst
- many → more → most
- little → less → least

In Malawi, you use adjectives constantly:
- "The SWEET mango from Ngabu"
- "A COLD bottle of Coca-Cola"
- "The WIDE Shire River"
- "MY village is near THE market"

A PROTIP: Adjectives usually come BEFORE the noun in English (the blue sky), but after linking verbs (the sky IS blue).

Order of adjectives (when using more than one):
Opinion → Size → Shape → Age → Colour → Origin → Material → Noun
Example: "a BEAUTIFUL (opinion) large (size) round (shape) old (age) red (colour) Malawian (origin) wooden (material) mask"

Remember: Adjectives describe nouns. Descriptive adjectives tell what kind. Limiting adjectives tell which one. Adjectives can compare (positive, comparative, superlative).`,
  summary: 'Adjectives describe nouns. Descriptive adjectives tell qualities (colour, size, shape). Limiting adjectives specify which noun (articles: a, an, the; demonstratives: this, that; possessives: my, your). Adjectives have comparative (-er) and superlative (-est) forms.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Describing Food', description: 'sweet mango, hot nsima, cold drink, fresh fish' },
    { title: 'Describing People', description: 'tall boy, young girl, kind teacher, strong farmer' }
  ],
  practiceQuestions: [
    { question: 'Identify the adjective: "The red car is fast."', answer: 'red', hint: 'Describes the car' },
    { question: 'What is the comparative form of "big"?', answer: 'Bigger', hint: 'Double the g and add -er' }
  ]
},
{
  subject: 'English',
  form: 'Form 2',
  topic: 'Adjectives',
  lessonNumber: 2,
  lessonTitle: 'Adjective Order and Position',
  lessonId: 'english-f2-adjectives-2',
  order: 51,
  learningObjectives: [
    'Place adjectives correctly before nouns',
    'Use adjectives after linking verbs',
    'Order multiple adjectives correctly',
    'Avoid common adjective errors'
  ],
  introduction: 'Welcome back! When you use multiple adjectives to describe a noun, they must go in a specific order. "A red big car" sounds wrong; it should be "a big red car". Today, you will learn the correct order of adjectives in English.',
  keyPoints: [
    'Adjectives usually come BEFORE the noun (attributive position)',
    'Adjectives can come AFTER linking verbs (predicate position)',
    'Multiple adjective order: Opinion → Size → Shape → Age → Colour → Origin → Material → Purpose → Noun',
    'Do not use commas between opinion adjectives and the noun',
    'Use commas between adjectives of the same category'
  ],
  detailedContent: `Let me explain ADJECTIVE ORDER and POSITION.

POSITION OF ADJECTIVES:

There are TWO positions for adjectives:

1. ATTRIBUTIVE POSITION (BEFORE the noun)
- "a BEAUTIFUL flower"
- "a TALL building"
- "a SWEET mango"

2. PREDICATE POSITION (AFTER a linking verb)
- "The flower IS beautiful."
- "The building IS tall."
- "The mango IS sweet."

Both are correct, but attributive is more common for single adjectives.

ORDER OF MULTIPLE ADJECTIVES:

When you use two or more adjectives before a noun, they MUST follow this order:

OPINION → SIZE → SHAPE → AGE → COLOUR → ORIGIN → MATERIAL → PURPOSE → NOUN

Let me explain each category:

1. OPINION: beautiful, ugly, delicious, terrible, nice
2. SIZE: big, small, large, tiny, huge, enormous
3. SHAPE: round, square, flat, curved, rectangular
4. AGE: new, old, young, ancient, modern
5. COLOUR: red, blue, green, black, white, yellow
6. ORIGIN: Malawian, African, Chinese, European
7. MATERIAL: wooden, plastic, metal, cotton, silk
8. PURPOSE: (what it is for) sleeping (bag), dining (table), cooking (pot)

EXAMPLES:

Correct order:
- "a BEAUTIFUL (opinion) large (size) round (shape) old (age) red (colour) wooden (material) box"
- "DELICIOUS (opinion) Malawian (origin) nsima"
- "A NICE (opinion) big (size) black (colour) car"

Incorrect order (wrong!):
- "a WOODEN (material) ROUND (shape) table" → should be "a ROUND wooden table"
- "a RED (colour) BIG (size) car" → should be "a BIG red car"

COMMAS BETWEEN ADJECTIVES:

- Use commas when adjectives are of the SAME category:
  "beautiful, talented, intelligent student" (all opinions)

- Do NOT use commas when adjectives are of DIFFERENT categories:
  "a beautiful red dress" (opinion + colour – no comma)

SPECIAL NOTE: Numbers (quantity) usually come first:
- "TWO (number) sweet (opinion) mangoes"
- "THREE (number) big (size) red (colour) cars"

In Malawi, you use multiple adjectives daily:
- "a DELICIOUS hot fresh nsima" (opinion + temperature + age)
- "a BEAUTIFUL long blue chitenje" (opinion + size + colour)
- "a STRONG Malawian farmer" (opinion + origin)

A PROTIP: If you are unsure about the order, try breaking down by category. Most native speakers learn by ear, but this rule will help you.

Common mistake to avoid:
- Do NOT say "more better" (better is already comparative)
- Do NOT say "most fastest" (fastest is already superlative)
- Use "better" and "best" for good; "worse" and "worst" for bad

Remember: Adjectives come before nouns OR after linking verbs. Multiple adjectives follow this order: Opinion → Size → Shape → Age → Colour → Origin → Material → Purpose → Noun. Use commas only between adjectives of the same type.`,
  summary: 'Adjectives can be before nouns (attributive) or after linking verbs (predicate). Multiple adjectives follow the order: Opinion → Size → Shape → Age → Colour → Origin → Material → Purpose → Noun. Use commas only for adjectives of the same category.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Describing Chitenje', description: 'a beautiful blue cotton Malawian chitenje' },
    { title: 'Describing Food', description: 'a delicious hot fresh plate of nsima' }
  ],
  practiceQuestions: [
    { question: 'Correct the order: "a wooden round table"', answer: 'a round wooden table', hint: 'Shape before material' },
    { question: 'What is the correct order for "red big car"?', answer: 'big red car', hint: 'Size before colour' }
  ]
},

// Topic: Adverbs (2 lessons)
{
  subject: 'English',
  form: 'Form 2',
  topic: 'Adverbs',
  lessonNumber: 1,
  lessonTitle: 'Types of Adverbs',
  lessonId: 'english-f2-adverbs-1',
  order: 52,
  learningObjectives: [
    'Define an adverb',
    'Identify adverbs of manner',
    'Identify adverbs of time',
    'Identify adverbs of place'
  ],
  introduction: 'Hello! Adjectives describe nouns; ADVERBS describe verbs, adjectives, or other adverbs. They tell us HOW, WHEN, or WHERE an action happens. Today, you will learn about different types of adverbs and how to use them.',
  keyPoints: [
    'An adverb modifies a verb, adjective, or another adverb',
    'Adverbs of manner: HOW (quickly, slowly, carefully, loudly)',
    'Adverbs of time: WHEN (yesterday, today, tomorrow, now, soon)',
    'Adverbs of place: WHERE (here, there, inside, outside, everywhere)',
    'Many adverbs end in -ly (quickly, softly, beautifully)'
  ],
  detailedContent: `Let me explain ADVERBS.

Adverbs tell us more about HOW, WHEN, or WHERE an action happens.

ADVERBS OF MANNER (HOW):

These adverbs describe HOW an action is done. Most end in -ly.

How to form adverbs of manner:
- Add -ly to adjectives: quick → quickly, beautiful → beautifully
- If adjective ends in y: change y to i and add -ly: happy → happily
- If adjective ends in le: change e to y: gentle → gently
- Irregular: good → well, fast → fast (same), hard → hard (same)

Examples in sentences:
- "She ran QUICKLY to school."
- "He spoke SOFTLY."
- "The farmer worked HARD."
- "The children played HAPPILY."

ADVERBS OF TIME (WHEN):

These adverbs tell WHEN or HOW OFTEN an action happens.

Examples:
- Specific time: today, yesterday, tomorrow, now, then, soon, later
- Frequency: always, usually, often, sometimes, rarely, never

Sentences:
- "I will go to the market TOMORROW."
- "They ALWAYS eat nsima for dinner."
- "She SOMETIMES walks to school."
- "We visited the lake YESTERDAY."

ADVERBS OF PLACE (WHERE):

These adverbs tell WHERE an action happens.

Examples:
- here, there, inside, outside, upstairs, downstairs, everywhere, nowhere

Sentences:
- "Please sit HERE."
- "The children are playing OUTSIDE."
- "I looked EVERYWHERE for my book."
- "Go UPSTAIRS and find your room."

ADVERBS CAN MODIFY:

1. VERBS: "She sings BEAUTIFULLY." (modifies sings)

2. ADJECTIVES: "The food is VERY delicious." (modifies delicious)

3. OTHER ADVERBS: "She runs VERY quickly." (modifies quickly)

In Malawi, you use adverbs every day:
- "The chambo is cooked PERFECTLY." (manner)
- "Farmers plant maize SOON." (time)
- "The children play THERE." (place)

FORMING ADVERBS FROM ADJECTIVES:

| Adjective | Adverb |
|-----------|--------|
| quick | quickly |
| beautiful | beautifully |
| careful | carefully |
| happy | happily |
| gentle | gently |
| fast | fast (no change) |
| hard | hard (no change) |
| good | well (irregular) |

A PROTIP: Not all words ending in -ly are adverbs (friendly, lovely, likely are adjectives). Always check what word they modify.

Remember: Adverbs modify verbs, adjectives, or other adverbs. Adverbs of manner tell HOW (often -ly). Adverbs of time tell WHEN. Adverbs of place tell WHERE.`,
  summary: 'Adverbs modify verbs, adjectives, or other adverbs. Adverbs of manner tell HOW (often ending in -ly). Adverbs of time tell WHEN. Adverbs of place tell WHERE. Form many adverbs by adding -ly to adjectives.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Manner in Cooking', description: 'She cooks nsima PERFECTLY. He harvests maize CAREFULLY.' },
    { title: 'Time in Farming', description: 'Farmers plant SOON. They harvest LATER.' }
  ],
  practiceQuestions: [
    { question: 'What is the adverb in "She danced beautifully"?', answer: 'beautifully', hint: 'Tells HOW she danced' },
    { question: 'Change "happy" to an adverb', answer: 'happily', hint: 'Change y to i and add -ly' }
  ]
},
{
  subject: 'English',
  form: 'Form 2',
  topic: 'Adverbs',
  lessonNumber: 2,
  lessonTitle: 'Comparative and Superlative Adverbs',
  lessonId: 'english-f2-adverbs-2',
  order: 53,
  learningObjectives: [
    'Form comparative adverbs',
    'Form superlative adverbs',
    'Use comparative and superlative adverbs correctly',
    'Distinguish between adjective and adverb comparisons'
  ],
  introduction: 'Welcome back! Just like adjectives, adverbs can also be compared. "She runs FASTER than me" and "He works the HARDEST" use comparative and superlative adverbs. Today, you will learn how to form and use them.',
  keyPoints: [
    'Comparative adverbs: compare TWO actions (faster, more quickly)',
    'Superlative adverbs: compare THREE or more actions (fastest, most quickly)',
    'One-syllable adverbs: add -er (comparative), -est (superlative)',
    'Adverbs ending in -ly: use more (comparative), most (superlative)',
    'Irregular comparative adverbs: well → better → best; badly → worse → worst'
  ],
  detailedContent: `Let me explain COMPARATIVE and SUPERLATIVE ADVERBS.

We use comparative and superlative adverbs to compare HOW actions are done.

COMPARATIVE ADVERBS:

Comparative adverbs compare TWO actions.

How to form:

1. SHORT ADVERBS (one syllable): add -er
   - fast → faster
   - hard → harder
   - soon → sooner
   - Examples: "She runs FASTER than me." "He works HARDER than his brother."

2. ADVERBS ENDING IN -ly: use "more"
   - quickly → more quickly
   - carefully → more carefully
   - beautifully → more beautifully
   - Examples: "She drives MORE CAREFULLY than her friend." "He speaks MORE CLEARLY than his sister."

3. IRREGULAR ADVERBS:
   - well → better
   - badly → worse
   - far → farther/further
   - Examples: "You sing BETTER than me." "He did WORSE on the exam."

SUPERLATIVE ADVERBS:

Superlative adverbs compare THREE or more actions.

How to form:

1. SHORT ADVERBS (one syllable): add -est
   - fast → fastest
   - hard → hardest
   - soon → soonest
   - Examples: "She runs the FASTEST in the class." "He works the HARDEST."

2. ADVERBS ENDING IN -ly: use "most"
   - quickly → most quickly
   - carefully → most carefully
   - beautifully → most beautifully
   - Examples: "She drives the MOST CAREFULLY of all." "Among all, he speaks the MOST CLEARLY."

3. IRREGULAR ADVERBS:
   - well → best
   - badly → worst
   - far → farthest/furthest
   - Examples: "You sing the BEST in the choir." "He did the WORST on the exam."

COMPARISON STRUCTURE:

Comparative: adverb + than
- "She ran FASTER THAN him."
- "He arrived SOONER THAN expected."

Superlative: the + adverb
- "She ran THE FASTEST."
- "He arrived THE SOONEST."

DIFFERENCE BETWEEN ADJECTIVE AND ADVERB COMPARISONS:

| Adjective | Adverb |
|-----------|--------|
| Describes a noun | Describes a verb |
| "She is a FAST runner." (modifies runner) | "She runs FAST." (modifies runs) |
| "She is FASTER than him." | "She runs FASTER than him." |
| "She is the FASTEST." | "She runs the FASTEST." |

In Malawi, you use comparative and superlative adverbs often:
- "Farmers who use fertiliser grow crops MORE QUICKLY."
- "The first maize harvest comes SOONER than the second."
- "Among all the students, Chifundo writes the MOST BEAUTIFULLY."

A PROTIP: When in doubt, most adverbs ending in -ly use "more/most". Short adverbs (fast, hard, soon) use -er/-est.

Common mistakes to avoid:
- ❌ "She runs more faster" (double comparative)
- ✓ "She runs faster."
- ❌ "He works more harder" (double comparative)
- ✓ "He works harder."

Remember: Comparative adverbs compare TWO actions (add -er or use more). Superlative adverbs compare THREE or more (add -est or use most). Irregular adverbs have special forms (well→better→best). Do not use double comparatives.`,
  summary: 'Comparative adverbs compare two actions (faster, more quickly, better). Superlative adverbs compare three or more actions (fastest, most quickly, best). One-syllable adverbs use -er/-est; -ly adverbs use more/most; some are irregular.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Farming Comparison', description: '"Maize grows FASTER in rich soil." "Groundnuts grow MORE SLOWLY than maize."' },
    { title: 'Student Performance', description: '"She solves maths problems QUICKER than her classmates."' }
  ],
  practiceQuestions: [
    { question: 'What is the comparative of "quickly"?', answer: 'more quickly', hint: '-ly adverbs use "more"' },
    { question: 'What is the superlative of "well"?', answer: 'best', hint: 'Irregular: well→better→best' }
  ]
},

// ======================================================================
// AGRICULTURE FORM 1
// ======================================================================

// Topic: Introduction to Agriculture (2 lessons)
{
  subject: 'Agriculture',
  form: 'Form 1',
  topic: 'Introduction to Agriculture',
  lessonNumber: 1,
  lessonTitle: 'What is Agriculture?',
  lessonId: 'agriculture-f1-intro-1',
  order: 54,
  learningObjectives: [
    'Define agriculture',
    'Explain the importance of agriculture in Malawi',
    'Identify branches of agriculture',
    'Distinguish between subsistence and commercial farming'
  ],
  introduction: 'Good day, future farmer! Agriculture is the backbone of Malawi\'s economy. It provides food, employment, and income for most Malawians. Today, you will learn what agriculture is, why it is so important for our country, and the different types of farming.',
  keyPoints: [
    'Agriculture: the science and practice of growing crops and raising livestock',
    'Malawi\'s economy depends on agriculture (80% of export earnings)',
    'Subsistence farming: growing food for your own family',
    'Commercial farming: growing crops or raising animals for sale',
    'Branches: crop production, livestock production, agricultural economics, agricultural engineering'
  ],
  detailedContent: `Let me introduce you to AGRICULTURE.

WHAT IS AGRICULTURE?

Agriculture is the science, art, and business of growing crops and raising animals for food, fibre, and other products.

The word comes from Latin: "ager" (field) + "cultura" (cultivation).

WHY IS AGRICULTURE IMPORTANT IN MALAWI?

Malawi's economy depends heavily on agriculture:

- 80% of Malawi's export earnings come from agriculture (mainly tobacco)
- 65% of Malawi's GDP comes from agriculture
- 90% of Malawians are employed in agriculture
- Agriculture provides food for the nation
- Tobacco, tea, sugarcane, and groundnuts are major cash crops

TYPES OF FARMING:

1. SUBSISTENCE FARMING:
- Growing food to feed your own family
- Small plots of land (usually less than 1 hectare)
- Uses family labour
- Little or no surplus for sale
- Most common in rural Malawi
- Crops: maize, groundnuts, beans, vegetables

2. COMMERCIAL FARMING:
- Growing crops or raising animals for sale
- Large farms
- Uses hired labour and machinery
- Produces surplus for market
- Found on large estates (tea, tobacco, sugarcane)
- Crops: tobacco, tea, sugarcane, macadamia

3. MIXED FARMING (both subsistence and commercial):
- Some crops for home consumption, some for sale
- Very common in Malawi
- Example: Maize for home, tobacco or groundnuts for sale

BRANCHES OF AGRICULTURE:

1. CROP PRODUCTION (Agronomy):
- Growing field crops (maize, tobacco, groundnuts)
- Growing vegetables (tomatoes, onions, cabbage)
- Growing fruits (mangoes, bananas, oranges)

2. LIVESTOCK PRODUCTION (Animal Husbandry):
- Raising chickens (layers and broilers)
- Raising pigs
- Raising cattle (beef and dairy)
- Raising goats and sheep

3. AGRICULTURAL ECONOMICS:
- Marketing of farm products
- Farm management
- Agricultural finance
- Agribusiness

4. AGRICULTURAL ENGINEERING:
- Farm machinery
- Irrigation systems
- Farm structures (sheds, silos)
- Soil and water conservation

5. FORESTRY:
- Growing and managing trees
- Production of timber, firewood, and charcoal

6. FISHERIES:
- Fish farming (aquaculture)
- Lake Malawi fishing

In Malawi, agriculture is everywhere:
- Maize fields across the country (nsima is our staple food)
- Tobacco estates in Lilongwe and Kasungu
- Tea estates in Mulanje and Thyolo
- Sugarcane around Nchalo
- Fishing villages along Lake Malawi

A PROTIP: Most Malawian farmers practice mixed farming – they grow maize for food and a cash crop (tobacco or groundnuts) for income.

Remember: Agriculture is the cultivation of crops and animals. It is vital for Malawi's economy and food security. Subsistence farming feeds families; commercial farming earns money. There are many branches of agriculture.`,
  summary: 'Agriculture is the science and practice of growing crops and raising livestock. It is essential for Malawi (90% employment, 80% exports). Subsistence farming feeds families; commercial farming earns income. Branches include crop production, livestock, agricultural economics, and agricultural engineering.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Maize', description: 'The main food crop grown by almost every Malawian farmer.' },
    { title: 'Tobacco', description: 'Major export crop grown commercially in Lilongwe and Kasungu.' },
    { title: 'Lake Malawi Fishing', description: 'Provides chambo, usipa, and other fish for local consumption and sale.' }
  ],
  practiceQuestions: [
    { question: 'What percentage of Malawians are employed in agriculture?', answer: '90%', hint: 'Nearly everyone works on a farm' },
    { question: 'What is the difference between subsistence and commercial farming?', answer: 'Subsistence grows food for family; commercial grows for sale', hint: 'Purpose of production' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 1',
  topic: 'Introduction to Agriculture',
  lessonNumber: 2,
  lessonTitle: 'Farm Tools and Equipment',
  lessonId: 'agriculture-f1-intro-2',
  order: 55,
  learningObjectives: [
    'Identify common farm tools',
    'State the use of each farm tool',
    'Explain how to maintain farm tools',
    'Practice safe use of farm tools'
  ],
  introduction: 'Welcome back! Every farmer needs tools to work the land, plant crops, and harvest. Some tools are simple hand tools, others are large machines. Today, you will learn about the common farm tools used in Malawi and how to use them safely.',
  keyPoints: [
    'Hand tools: hoe (khasu), axe (nkhwangwa), panga knife, shovel, rake, watering can',
    'Animal-drawn implements: plough, harrow, cart',
    'Farm machinery: tractor, cultivator, planter, harvester',
    'Maintenance: clean after use, store in dry place, sharpen blades, oil moving parts',
    'Safety: wear protective gear, use tools correctly, keep tools away from children'
  ],
  detailedContent: `Let me explain FARM TOOLS AND EQUIPMENT.

HAND TOOLS (used by most Malawian farmers):

1. HOE (Khasu):
- Most important farm tool in Malawi
- Used for digging, weeding, ridging, and harvesting potatoes/groundnuts
- Maintenance: clean soil off after use, sharpen the blade, oil to prevent rust

2. AXE (Nkhwangwa):
- Used for cutting wood, clearing land, splitting firewood
- Maintenance: sharpen regularly, oil the metal head

3. PANGA KNIFE:
- Used for cutting grass, trimming trees, harvesting
- Maintenance: sharpen blade, keep clean

4. SHOVEL:
- Used for digging holes, moving soil, mixing cement
- Maintenance: clean after use, store dry

5. RAKE:
- Used for gathering leaves, grass, and crop residues
- Gathering harvested groundnuts
- Maintenance: clean tines, straighten bent tines

6. WATERING CAN:
- Used for watering vegetable gardens and seedlings
- Maintenance: clean nozzle holes, store upside down

7. SPRAYER (manual or backpack):
- Used for applying pesticides, herbicides, and liquid fertiliser
- Maintenance: clean after each use, check for leaks

8. PRUNING SHEARS:
- Used for trimming branches, harvesting fruits
- Maintenance: sharpen blades, oil moving parts

ANIMAL-DRAWN IMPLEMENTS:

1. PLOUGH:
- Drawn by oxen or donkeys
- Used for primary tillage (turning soil)
- Opens the soil for planting

2. HARROW:
- Drawn behind plough
- Used for breaking soil clods and levelling

3. CART:
- Drawn by oxen or donkeys
- Used for transporting crops, water, firewood, and manure

FARM MACHINERY (large farms and estates):

1. TRACTOR:
- Powerful machine that pulls implements
- Can be used for ploughing, harrowing, planting, and transport

2. CULTIVATOR:
- Tractor-drawn implement for weeding and secondary tillage

3. PLANTER:
- Machine that plants seeds at correct depth and spacing

4. HARVESTER:
- Machine that harvests grains (combine harvester)

5. IRRIGATION EQUIPMENT:
- Pumps, sprinklers, drip irrigation systems

MAINTENANCE OF FARM TOOLS:

To make tools last longer:
- Clean tools after each use (remove soil, plant residue)
- Dry tools before storage (prevents rust)
- Store tools in a dry, covered place (not on the ground)
- Sharpen blades regularly (hoe, axe, panga, shears)
- Oil metal parts to prevent rust
- Tighten loose handles and nuts
- Replace broken parts

SAFETY WHEN USING FARM TOOLS:

- Wear protective gear (gloves, boots, goggles when needed)
- Use the right tool for the job
- Keep tools sharp (dull tools are more dangerous)
- Carry tools pointing down
- Keep tools away from children
- Do not leave tools lying in the field
- When using tractors: ensure rollover protection, never carry passengers

In Malawi, most smallholder farmers use hand tools. Animal-drawn ploughs are common where oxen are available. Tractors are used mainly on large estates.

A PROTIP: A well-maintained hoe can last for 5-10 years. A neglected hoe will rust and break within months.

Remember: Hand tools (hoe, axe, panga) are the most common in Malawi. Animal-drawn ploughs increase efficiency. Tractors are used on large farms. Clean, dry, and oil tools after use. Always use tools safely.`,
  summary: 'Common farm tools in Malawi include the hoe (khasu), axe (nkhwangwa), panga, shovel, rake, and watering can. Animal-drawn ploughs and tractors are used for larger farms. Maintain tools by cleaning, drying, sharpening, and oiling. Always use tools safely.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'The Hoe (Khasu)', description: 'The most important tool for most Malawian farmers, used for everything.' },
    { title: 'Ox-drawn Plough', description: 'Common in central and northern regions where farmers have oxen.' }
  ],
  practiceQuestions: [
    { question: 'What is the most common farm tool in Malawi?', answer: 'Hoe (khasu)', hint: 'Used for digging, weeding, ridging' },
    { question: 'How should you maintain a farm tool?', answer: 'Clean, dry, oil, sharpen, store in dry place', hint: 'Prevents rust and damage' }
  ]
}
,


// ======================================================================
// AGRICULTURE FORM 2
// ======================================================================

// Topic: Soil Fertility (2 lessons)
{
  subject: 'Agriculture',
  form: 'Form 2',
  topic: 'Soil Fertility',
  lessonNumber: 1,
  lessonTitle: 'Understanding Soil Fertility',
  lessonId: 'agriculture-f2-soil-fertility-1',
  order: 56,
  learningObjectives: [
    'Define soil fertility',
    'Distinguish between fertile and infertile soil',
    'Identify signs of fertile and infertile soil',
    'Explain the importance of soil fertility for crop production'
  ],
  introduction: 'Good day, young agriculturist! Have you ever wondered why crops grow better in some fields than others? The answer is SOIL FERTILITY. Fertile soil produces healthy crops; infertile soil produces poor yields. Today, you will learn what makes soil fertile and how to recognise fertile soil.',
  keyPoints: [
    'Soil fertility: ability of soil to provide essential nutrients for plant growth',
    'Fertile soil: dark colour, good structure, holds water, contains organic matter',
    'Infertile soil: pale colour, compacted, drains too fast or too slowly, lacks nutrients',
    'Essential nutrients: nitrogen (N), phosphorus (P), potassium (K), calcium (Ca), magnesium (Mg), and others',
    'Signs of fertile soil: dark colour, crumbly texture, earthworms present, good crop growth'
  ],
  detailedContent: `Let me explain SOIL FERTILITY.

WHAT IS SOIL FERTILITY?

Soil fertility is the ability of soil to provide plants with the nutrients they need to grow well.

A fertile soil has:
- Adequate plant nutrients (macronutrients and micronutrients)
- Good soil structure (allows roots to grow, water to infiltrate, air to circulate)
- Appropriate pH (not too acidic or alkaline)
- Sufficient organic matter
- Good water-holding capacity

SIGNS OF FERTILE SOIL:

- DARK colour (from organic matter)
- CRUMBLY structure (easily crumbles in hand)
- Earthworms present (they improve soil structure)
- Plants grow well with dark green leaves
- Good drainage (water soaks in, not puddles)
- Holds moisture (does not dry out too quickly)

SIGNS OF INFERTILE SOIL:

- PALE colour (yellowish or grey)
- HARD, compacted structure (difficult to dig)
- CRUSTS on surface after rain
- Stunted, yellow plants
- Poor drainage (water pools)
- Cracks when dry
- Few earthworms

MACRONUTRIENTS (needed in large amounts):

| Nutrient | Symbol | Role in Plants |
|----------|--------|----------------|
| Nitrogen | N | Leaf growth, green colour |
| Phosphorus | P | Root growth, flowering, fruiting |
| Potassium | K | Overall health, disease resistance |
| Calcium | Ca | Cell wall strength |
| Magnesium | Mg | Chlorophyll (makes plants green) |
| Sulphur | S | Protein production |

MICRONUTRIENTS (needed in small amounts):

- Iron (Fe), Manganese (Mn), Zinc (Zn), Copper (Cu), Boron (B), Molybdenum (Mo)

WHY IS SOIL FERTILITY IMPORTANT IN MALAWI?

- Most Malawians depend on maize for food
- Maize requires fertile soil for good yields
- Poor soil fertility leads to low harvests and hunger
- Fertile soil reduces need for expensive fertilisers

In Malawi, soil fertility varies by region:
- Lilongwe and central region: moderate fertility
- Thyolo and Mulanje: tea-growing areas, acidic soils
- Lakeshore areas: sandy soils, lower fertility
- Low-lying areas: clay soils, can be waterlogged

CAUSES OF SOIL INFERTILITY:

- Continuous cropping without fertiliser
- Soil erosion (loss of topsoil)
- Leaching (nutrients washed away by heavy rain)
- Overuse of land (no fallow periods)
- Burning of crop residues (destroys organic matter)
- Acidic or alkaline pH (nutrients unavailable)

In Malawi, farmers often plant the same field with maize year after year without fertiliser. This depletes soil fertility and leads to declining yields.

A PROTIP: Looking at the colour of maize leaves can tell you about soil fertility:
- Dark green leaves = good fertility (enough nitrogen)
- Yellow-green leaves = low nitrogen (poor fertility)

Remember: Fertile soil produces healthy crops. Signs of fertile soil: dark colour, crumbly texture, earthworms. Infertile soil is pale, hard, and produces stunted crops. Soil fertility is essential for food security in Malawi.`,
  summary: 'Soil fertility is the ability to provide essential nutrients for plant growth. Fertile soil is dark, crumbly, has earthworms, and produces healthy green crops. Infertile soil is pale, compacted, and produces stunted yellow crops. Fertility is essential for food security.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Maize Leaves', description: 'Dark green leaves = fertile soil; yellow-green leaves = low nitrogen.' },
    { title: 'Earthworms', description: 'Presence of earthworms indicates good soil fertility and structure.' }
  ],
  practiceQuestions: [
    { question: 'What colour is fertile soil?', answer: 'Dark (brown/black)', hint: 'From organic matter' },
    { question: 'Name one sign of infertile soil.', answer: 'Stunted yellow plants, hard surface, pale colour, cracking', hint: 'Plants look unhealthy' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 2',
  topic: 'Soil Fertility',
  lessonNumber: 2,
  lessonTitle: 'Maintaining Soil Fertility',
  lessonId: 'agriculture-f2-soil-fertility-2',
  order: 57,
  learningObjectives: [
    'Explain methods of maintaining soil fertility',
    'Describe crop rotation and its benefits',
    'Explain the importance of fallowing',
    'Describe the use of organic matter to improve fertility'
  ],
  introduction: 'Welcome back! Soil fertility does not last forever. Each harvest removes nutrients from the soil. If you do nothing, the soil becomes infertile. Today, you will learn how to MAINTAIN soil fertility so your land continues to produce good harvests year after year.',
  keyPoints: [
    'Crop rotation: growing different crops in a field each season',
    'Fallowing: leaving land unplanted for a season to regain fertility',
    'Organic matter: adding compost, manure, or crop residues to soil',
    'Green manure: growing plants specifically to plough into the soil',
    'Fertilisers: adding nutrients (organic or inorganic)'
  ],
  detailedContent: `Let me explain how to MAINTAIN SOIL FERTILITY.

METHOD 1: CROP ROTATION

Crop rotation means growing different crops in a field each season, not the same crop year after year.

Benefits of crop rotation:
- Different crops use different nutrients (prevents depletion)
- Legumes (groundnuts, beans) add nitrogen to soil
- Breaks pest and disease cycles
- Improves soil structure

Example rotation (2-year cycle):
- Year 1, Season 1: Maize (uses lots of nitrogen)
- Year 1, Season 2: Fallow or cover crop
- Year 2, Season 1: Groundnuts (adds nitrogen back)
- Year 2, Season 2: Vegetables

Malawi example: In Kasungu, tobacco farmers rotate with maize or groundnuts.

METHOD 2: FALLOWING

Fallow means leaving a field unplanted for one or more seasons.

Benefits:
- Soil naturally regains fertility
- Weeds are controlled
- Moisture is conserved
- Organic matter builds up

In traditional Malawian farming, fallow periods were common. With population pressure, fallowing is now less practiced.

METHOD 3: ADDING ORGANIC MATTER

Organic matter improves soil structure and adds nutrients.

Sources of organic matter:
- COMPOST: Decayed plant material (kitchen scraps, leaves, grass)
- MANURE: Animal waste (cattle, chicken, goat)
- CROP RESIDUES: Leftover stalks, leaves after harvest
- GREEN MANURE: Plants grown and ploughed into soil (e.g., sunhemp, cowpeas)

How to make compost:
1. Collect plant materials (leaves, grass, kitchen scraps)
2. Add manure if available
3. Pile in layers
4. Keep moist but not wet
5. Turn every few weeks
6. Ready in 2-4 months

METHOD 4: USING FERTILISERS

Fertilisers add specific nutrients to the soil.

Types of fertilisers:
- ORGANIC: Manure, compost, bone meal (slow release)
- INORGANIC: Chemical fertilisers (fast release)

Common inorganic fertilisers in Malawi:
- UREA: High nitrogen (46% N) – for leafy growth
- COMPOUND D: 8% N, 20% P₂O₅, 20% K₂O – for maize and tobacco
- CAN (Calcium Ammonium Nitrate): 27% N
- NPK blends for specific crops

METHOD 5: LIMING (for acidic soils)

Some soils become too acidic for crops. Adding lime (calcium carbonate) neutralises acidity.

Signs of acidic soil:
- Poor crop growth despite fertiliser
- Moss or weeds that like acid
- Aluminium toxicity

In Malawi, tea-growing areas (Mulanje, Thyolo) have acidic soils that need liming.

METHOD 6: CONSERVATION TILLAGE

Reducing tillage helps maintain soil organic matter and structure.

Minimum tillage: plough only where you plant
Zero tillage: plant directly into previous crop residues

In Malawi, conservation agriculture is promoted to maintain soil fertility.

COMPARISON OF FERTILITY MANAGEMENT METHODS:

| Method | Cost | Effectiveness | Time to see results |
|--------|------|---------------|---------------------|
| Crop rotation | Low | High | 2-3 seasons |
| Fallowing | None | Low (needs long time) | 1-2 years |
| Compost | Low | Medium | 1 season |
| Manure | Low (if own animals) | Medium | 1 season |
| Inorganic fertiliser | High | High | Immediate |
| Lime | Medium | High (if acidic) | 1 season |

In Malawi, smallholder farmers should use a combination of methods:
- Crop rotation (groundnuts after maize)
- Compost from crop residues and manure
- Inorganic fertiliser for immediate nutrient needs

A PROTIP: Never burn crop residues! Burning destroys organic matter and releases nutrients into the air. Instead, leave residues on the field or compost them.

Remember: Maintain soil fertility through crop rotation, fallowing, adding organic matter, using fertilisers, liming acidic soils, and conservation tillage. A combination of methods works best for Malawian farmers.`,
  summary: 'Maintain soil fertility through crop rotation (different crops each season), fallowing (resting land), adding organic matter (compost, manure), using fertilisers (organic or inorganic), liming (for acidic soils), and conservation tillage.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'Maize-Groundnut Rotation', description: 'Plant groundnuts after maize – groundnuts add nitrogen for the next maize crop.' },
    { title: 'Composting', description: 'Many farmers make compost from crop residues and kitchen waste.' }
  ],
  practiceQuestions: [
    { question: 'Why is crop rotation beneficial?', answer: 'Prevents nutrient depletion, breaks pest cycles, legumes add nitrogen', hint: 'Different crops use different nutrients' },
    { question: 'What is green manure?', answer: 'Plants grown and ploughed into soil to add organic matter', hint: 'Living fertiliser' }
  ]
},

// Topic: Irrigation (2 lessons)
{
  subject: 'Agriculture',
  form: 'Form 2',
  topic: 'Irrigation',
  lessonNumber: 1,
  lessonTitle: 'Importance and Types of Irrigation',
  lessonId: 'agriculture-f2-irrigation-1',
  order: 58,
  learningObjectives: [
    'Define irrigation',
    'Explain the importance of irrigation in Malawi',
    'Identify different types of irrigation systems',
    'Describe surface irrigation'
  ],
  introduction: 'Hello! In Malawi, we depend on rain for our crops. But rain does not always come when needed. IRRIGATION allows farmers to water crops artificially. Today, you will learn why irrigation is important for Malawi and the different irrigation methods.',
  keyPoints: [
    'Irrigation: artificial application of water to crops',
    'Importance: farming during dry season, drought protection, higher yields',
    'Surface irrigation: water flows over soil surface (furrow, basin, flood)',
    'Overhead irrigation: water sprayed through sprinklers',
    'Drip irrigation: water drips slowly near plant roots (most efficient)'
  ],
  detailedContent: `Let me explain IRRIGATION.

WHAT IS IRRIGATION?

Irrigation is the artificial application of water to crops. Instead of relying only on rainfall, farmers supply water through channels, pipes, or sprinklers.

WHY IS IRRIGATION IMPORTANT IN MALAWI?

1. DRY SEASON FARMING:
- Most rain falls November to April
- Irrigation allows farming May to October (vegetables, maize in some areas)

2. DROUGHT PROTECTION:
- When rains fail, irrigation saves crops
- Prevents hunger and food shortages

3. HIGHER YIELDS:
- Irrigated crops produce more than rain-fed crops
- Can have 2-3 harvests per year

4. CROP DIVERSIFICATION:
- Grow vegetables and fruits that need consistent water
- Tomatoes, onions, cabbage, peppers, bananas

In Malawi, irrigated areas include:
- Sugar estates (Nchalo, Dwangwa)
- Rice schemes (Karonga, Salima)
- Vegetable gardens near lakes and rivers
- Tea estates (supplemental irrigation)

TYPES OF IRRIGATION SYSTEMS:

1. SURFACE IRRIGATION (oldest method)

Water flows over the soil surface by gravity.

Types of surface irrigation:
- FLOOD IRRIGATION: Water covers whole field
- FURROW IRRIGATION: Water flows in small channels between crop rows
- BASIN IRRIGATION: Water held in basins around trees

Advantages of surface irrigation:
- Low cost (no pumps or pipes needed)
- Simple technology
- Can use gravity from rivers

Disadvantages:
- Water waste (evaporation, runoff)
- Uneven water distribution
- Can cause waterlogging and salinisation
- Requires levelled land

In Malawi, surface irrigation used for rice in Karonga and Salima.

2. OVERHEAD (SPRINKLER) IRRIGATION

Water is sprayed through sprinklers, like rain.

Components:
- Pump
- Pipes
- Sprinkler heads

Advantages:
- Even water distribution
- Suitable for most crops
- Can cover large areas

Disadvantages:
- High cost (pump, pipes)
- Water loss from wind and evaporation
- Requires energy (electricity or fuel)

Used on tea estates in Mulanje and Thyolo.

3. DRIP (TRICKLE) IRRIGATION

Water drips slowly near plant roots through small tubes or emitters.

Advantages:
- Most efficient (90-95% water used by plants)
- Minimal water loss
- No wetting of leaves (reduces disease)
- Can use with low water pressure
- Fertilisers can be added (fertigation)

Disadvantages:
- High initial cost
- Tubes can clog
- Requires clean water

Used for high-value crops: tomatoes, peppers, strawberries, bananas.

COMPARISON TABLE:

| Feature | Surface | Sprinkler | Drip |
|---------|---------|-----------|------|
| Cost | Low | Medium | High |
| Water efficiency | Low (40-60%) | Medium (60-80%) | High (90-95%) |
| Labour needed | High | Medium | Low |
| Suitable crops | Rice, maize | Most crops | Vegetables, fruits |
| Energy needed | None (gravity) | High | Low |

In Malawi, Drip irrigation is promoted for vegetable gardens to save water.

A PROTIP: The best irrigation method depends on your crop, land, water source, and budget. For small-scale vegetable gardens, drip or watering can be best.

Remember: Irrigation allows farming in dry season, protects against drought, and increases yields. Surface irrigation is simple but wastes water. Sprinkler irrigation is even. Drip irrigation is most efficient but expensive. Choose method based on crop and resources.`,
  summary: 'Irrigation is artificial watering of crops. It allows dry-season farming, drought protection, and higher yields. Surface irrigation (furrow, basin) is simple but inefficient. Sprinkler irrigation is even but costly. Drip irrigation is most efficient (90-95%) and best for vegetables.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Karonga Rice', description: 'Surface irrigation used for rice in Karonga and Salima.' },
    { title: 'Mulanje Tea', description: 'Sprinkler irrigation used on tea estates.' }
  ],
  practiceQuestions: [
    { question: 'What are the benefits of irrigation?', answer: 'Dry-season farming, drought protection, higher yields', hint: 'Water when rain is absent' },
    { question: 'Which irrigation method is most water-efficient?', answer: 'Drip irrigation', hint: 'Water goes directly to roots' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 2',
  topic: 'Irrigation',
  lessonNumber: 2,
  lessonTitle: 'Drip Irrigation and Water Management',
  lessonId: 'agriculture-f2-irrigation-2',
  order: 59,
  learningObjectives: [
    'Explain how drip irrigation works',
    'Describe the components of a drip system',
    'Explain water conservation techniques',
    'Calculate irrigation water requirements'
  ],
  introduction: 'Welcome back! Drip irrigation is the smart way to water crops, especially when water is scarce. Today, you will learn how drip irrigation works, its components, and how to manage water efficiently for your crops.',
  keyPoints: [
    'Drip irrigation: water delivered directly to plant roots through tubes',
    'Components: water source, pump, filter, main line, sub-main, drip tape/emitters',
    'Advantages: saves water, reduces weeds, prevents diseases, allows fertigation',
    'Water conservation: mulch, water early morning or evening, improve soil organic matter'
  ],
  detailedContent: `Let me explain DRIP IRRIGATION.

HOW DRIP IRRIGATION WORKS:

Water drips slowly (1-4 litres per hour) through small holes (emitters) placed near plant roots. Only the root zone gets wet – the rest of the soil stays dry.

COMPONENTS OF A DRIP IRRIGATION SYSTEM:

1. WATER SOURCE:
- River, well, borehole, lake, reservoir, or tank

2. PUMP:
- Creates pressure to push water through pipes
- Can be electric, petrol, or solar-powered

3. FILTER:
- Removes sand, dirt, and debris that could clog emitters
- Mesh filter or sand filter

4. MAIN LINE:
- Large pipe from pump to field

5. SUB-MAINS:
- Smaller pipes branching from main line

6. DRIP TAPE OR DRIP LINE:
- Flexible tube with emitters built in
- Placed along crop rows

7. EMITTERS or DRIPPERS:
- Small openings where water comes out
- Flow rate: 1-8 litres per hour

ADVANTAGES OF DRIP IRRIGATION:

1. WATER SAVINGS:
- Uses 30-70% less water than sprinkler systems
- No evaporation from wet soil surface

2. WEED REDUCTION:
- Only crop rows get water; between rows stays dry
- Fewer weeds means less labour

3. DISEASE PREVENTION:
- Leaves stay dry (many plant diseases need wet leaves)
- Less fungal disease

4. FERTIGATION:
- Can add liquid fertiliser through the system
- Nutrients go directly to roots

5. WORKS WITH LOW PRESSURE:
- Can use gravity if tank is elevated

DISADVANTAGES:

- High initial cost
- Tubes can clog (need good filter)
- Mice or insects may damage tubes
- Requires clean water source

WATER CONSERVATION TECHNIQUES:

1. MULCHING:
- Cover soil with organic matter (leaves, grass) or plastic
- Reduces evaporation, keeps soil moist longer

2. WATER AT BEST TIME:
- Early morning (before 9 am) or evening (after 5 pm)
- Less evaporation than noon watering

3. IMPROVE SOIL ORGANIC MATTER:
- Compost and manure help soil hold water
- Allows longer between waterings

4. USE RAINWATER HARVESTING:
- Collect roof runoff into tanks
- Store water for dry periods

5. CHECK FOR LEAKS:
- Repair leaking pipes and emitters
- Saves water and money

CALCULATING WATER REQUIREMENT:

Example: Tomato crop
- Water need per plant: 2 litres per day
- Number of plants: 1000
- Total water per day = 2000 litres (2 m³)

For a 5-day irrigation cycle:
- Total water = 2000 × 5 = 10,000 litres (10 m³)

In Malawi, small-scale drip kits are available from organisations like Total LandCare, Malawi Farmers Union, and private dealers.

A PROTIP: Start small with drip irrigation – a 100 m² garden can be irrigated with a bucket elevated 1 metre above ground (gravity drip). No pump needed!

Remember: Drip irrigation delivers water directly to plant roots. It saves water, reduces weeds, prevents disease, and allows fertigation. Use mulch, water at cool times, and repair leaks to conserve water. Even a simple gravity drip system can work for small gardens.`,
  summary: 'Drip irrigation delivers water directly to roots through tubes and emitters. It saves water (30-70%), reduces weeds, prevents leaf diseases, and allows fertigation. Use mulch, water at optimal times, and repair leaks to conserve water. Small-scale gravity drip systems work without pumps.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Vegetable Gardens', description: 'Drip irrigation is ideal for tomatoes, onions, and peppers in Malawi.' },
    { title: 'Water Conservation', description: 'Mulching with maize stalks reduces evaporation in dry areas.' }
  ],
  practiceQuestions: [
    { question: 'What is one advantage of drip irrigation?', answer: 'Saves water, reduces weeds, prevents disease, or allows fertigation', hint: 'Many benefits' },
    { question: 'When is the best time to water crops?', answer: 'Early morning or evening', hint: 'Less evaporation' }
  ]
},

// Topic: Maize Production (2 lessons)
{
  subject: 'Agriculture',
  form: 'Form 2',
  topic: 'Maize Production',
  lessonNumber: 1,
  lessonTitle: 'Land Preparation and Planting',
  lessonId: 'agriculture-f2-maize-1',
  order: 60,
  learningObjectives: [
    'Describe land preparation for maize',
    'Select good quality maize seed',
    'Explain correct planting methods',
    'Calculate plant population'
  ],
  introduction: 'Hello, maize farmer! Maize is the most important crop in Malawi – it is our national food. Growing maize successfully requires good land preparation, quality seed, and proper planting. Today, you will learn the essential steps for establishing a good maize crop.',
  keyPoints: [
    'Clear land of weeds and previous crop residues',
    'Plough or dig to loosen soil (depth 15-20 cm)',
    'Ridging: make ridges 75-90 cm apart',
    'Use certified maize seed (recommended varieties)',
    'Plant at correct depth (3-5 cm) and spacing (25-30 cm within row)',
    'Two seeds per station, later thin to one plant'
  ],
  detailedContent: `Let me explain MAIZE PRODUCTION.

Maize is the staple food of Malawi. Most families eat nsima (maize porridge) every day. Good maize production starts with proper land preparation and planting.

STEP 1: LAND CLEARING

- Remove weeds, bushes, and previous crop stalks
- Do NOT burn crop residues (burns organic matter)
- Use remaining stalks for mulch or compost

STEP 2: TILLAGE (PLOUGHING/DIGGING)

Purpose:
- Loosen soil for root growth
- Incorporate organic matter
- Control weeds

Traditional method:
- Dig with hoe (khasu) to 15-20 cm depth
- Break soil clods

Animal-drawn plough:
- Plough when soil is moist (not wet, not dry)
- Plough depth 15-20 cm

Tractor ploughing:
- Used on larger farms
- Deeper ploughing possible

STEP 3: RIDGING

Ridges are raised rows where maize is planted.

Benefits of ridges:
- Improve drainage
- Concentrate soil fertility
- Make weeding easier
- Reduce erosion

Ridge spacing:
- Recommended: 75-90 cm between ridges
- Standard Malawian recommendation: 75 cm

This is narrower than traditional (90 cm) and gives higher yields.

STEP 4: SELECTING MAIZE SEED

Use CERTIFIED SEED from:

- Malawi Seed Company
- SeedCo
- Smallholder farmers' groups (certified)

Recommended varieties for Malawi:

| Variety | Days to maturity | Characteristics |
|---------|-----------------|----------------|
| SC 419 | 130-140 | High yield, early |
| SC 403 | 120-130 | Early, good for low fertility |
| SC 537 | 140-150 | High yield, late |
| ZM 309 | 130-140 | Open-pollinated, can save seed |
| MH 18 | 130-140 | Hybrid, high yield |

Note: Hybrid seed must be bought each year (do not save). Open-pollinated varieties can be saved for next season.

STEP 5: PLANTING

When to plant:
- At the start of rains (November to December)
- Plant immediately after good rain

How to plant:
- Plant 2 seeds per station
- Depth: 3-5 cm (not too deep)
- Spacing: 25-30 cm within row
- Cover with soil

CALCULATING PLANT POPULATION:

Plant population per hectare = (row spacing in metres) × (plant spacing in metres)

Example:
- Ridge spacing = 0.75 m
- Plant spacing = 0.30 m
- Plant population = 10000 ÷ (0.75 × 0.30) = 10000 ÷ 0.225 ≈ 44,444 plants per hectare

With two seeds per station, you need 88,888 seeds per hectare (about 10-12 kg of seed).

STEP 6: THINNING

After germination (about 2 weeks), remove the weaker seedling at each station. Leave one strong plant per station.

WHY THIN?
- Prevents competition for water and nutrients
- Gives each plant enough space
- Produces larger cobs

In Malawi, smallholder farmers plant maize on ridges with hand hoe. Use recommended spacing (75 cm between ridges, 30 cm within row) for best yields.

A PROTIP: If rains are delayed, wait for good rain before planting. Planting in dry soil risks seed rotting or poor germination.

Remember: Prepare land by clearing, ploughing, and ridging. Use certified seed of recommended varieties. Plant 2 seeds per station at depth 3-5 cm, 75 cm between ridges, 30 cm within row. Thin to one plant per station.`,
  summary: 'Prepare land by clearing, ploughing, and ridging (75 cm spacing). Plant certified maize seed at 3-5 cm depth, 2 seeds per station, 30 cm within row. Thin to one plant per station. Calculate plant population: 10,000 ÷ (row spacing × plant spacing).',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Traditional Hoe Farming', description: 'Most Malawian farmers use a hoe to dig and ridge.' },
    { title: 'Recommended Spacing', description: '75 cm between ridges, 30 cm between plants – gives higher yields.' }
  ],
  practiceQuestions: [
    { question: 'What is the recommended ridge spacing for maize in Malawi?', answer: '75 cm', hint: 'Standard recommendation' },
    { question: 'How many seeds per station when planting maize?', answer: '2 seeds', hint: 'Later thin to one plant' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 2',
  topic: 'Maize Production',
  lessonNumber: 2,
  lessonTitle: 'Weeding, Fertilising, and Harvesting',
  lessonId: 'agriculture-f2-maize-2',
  order: 61,
  learningObjectives: [
    'Explain weeding importance and schedule',
    'Describe fertiliser application for maize',
    'Identify maturity signs for harvest',
    'Explain proper harvesting and storage'
  ],
  introduction: 'Welcome back! After planting, the maize crop needs care: weeding, fertilising, and eventual harvesting. Good management during the growing season means the difference between a poor harvest and a bumper crop. Today, you will learn how to care for maize until harvest.',
  keyPoints: [
    'Weed early and often – weeds compete for water and nutrients',
    'Apply basal fertiliser at planting (Compound D)',
    'Apply top-dressing when maize is knee-high (Urea)',
    'Harvest when cobs are dry and grains are hard',
    'Dry maize thoroughly before storage to prevent mould'
  ],
  detailedContent: `Let me explain WEEDING, FERTILISING, and HARVESTING maize.

WEEDING:

Weeds compete with maize for water, nutrients, and sunlight. They can reduce yields by 50% or more!

Weeding schedule:

- FIRST WEEDING: 2-3 weeks after planting (when maize is 15-20 cm tall)
- SECOND WEEDING: 5-6 weeks after planting (when knee-high)

Use a hoe to weed between ridges and along ridges.

FERTILISER APPLICATION:

Maize needs fertiliser to produce good yields, especially on soils used for many years.

Two types of fertiliser for maize:

1. BASAL FERTILISER (at planting):
- Used: Compound D, NPK 23:21:0, or similar
- Contains: Nitrogen (N), Phosphorus (P), Potassium (K)
- Application: Place in planting hole or along row before covering seed
- Rate: 100-200 kg per hectare (about 1 bottle top per station)

2. TOP-DRESSING FERTILISER (when maize is knee-high, 5-6 weeks after planting):
- Used: Urea (46% Nitrogen) or CAN
- Contains: Only Nitrogen (for leaf growth)
- Application: Apply on soil surface near the maize plants
- Rate: 100-150 kg per hectare (about 1 bottle top per station)

Why top-dress? Maize needs extra nitrogen when it grows fast.

Without fertiliser: 0.5-1.0 tonnes per hectare
With fertiliser: 2-4 tonnes per hectare or more

HARVESTING:

When is maize ready to harvest?

Signs of maturity:
- Husks (outer leaves) turn yellow-brown
- Grains are hard when pressed with fingernail
- Grains have a black layer at the tip (inspection)
- Maize stalks are drying and turning brown

How to harvest:
- Break cob from stalk, leaving husk attached
- Some farmers remove husks immediately
- Others leave husks on for protection

DRYING:

After harvest, maize must be dried to prevent mould.

- Spread cobs in sunlight for 3-7 days
- Turn occasionally for even drying
- Maize is dry when grain cannot be dented with fingernail
- Kernel moisture should be 12-14% for storage

STORAGE:

DO NOT store wet maize – it will grow mould (aflatoxins) which are harmful.

Good storage methods:
- Traditional maize crib (raised platform)
- Granaries
- Metal or plastic drums with airtight lids
- Maize sheller then store grain in bags in dry place

TREATMENT FOR STORAGE:

- Mix with ash (traditional method)
- Use Actellic dust (insecticide)
- Store in airtight containers

In Malawi, maize is stored in cribs (nkhokwe) raised off ground to allow air circulation.

COMMON PROBLEMS:

- WEEVILS: Insects that eat stored maize – treat with Actellic
- AFLATOXIN: Poisonous mould from damp storage – dry thoroughly
- RODENTS: Rats and mice eat maize – use traps, cats, or seal containers

A PROTIP: Harvest a few cobs and shell them. If the grain is hard and the black layer is visible, the maize is ready. If grain is soft, wait longer.

Remember: Weed twice (2-3 weeks and 5-6 weeks after planting). Apply basal fertiliser at planting, top-dress at knee-high. Harvest when cobs are dry and grains hard. Dry maize thoroughly before storage. Store in raised crib or airtight containers, treat for weevils.`,
  summary: 'Weed maize twice (2-3 weeks and 5-6 weeks after planting). Apply basal fertiliser (Compound D) at planting. Apply top-dressing (Urea) when maize is knee-high. Harvest when cobs are dry and grains hard. Dry thoroughly before storing to prevent mould and weevils.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Maize Crib (Nkhokwe)', description: 'Traditional raised platform for storing maize cobs.' },
    { title: 'Top-dressing', description: 'Urea applied when maize is knee-high (waist-high in adults).' }
  ],
  practiceQuestions: [
    { question: 'When should first weeding be done?', answer: '2-3 weeks after planting', hint: 'When maize is 15-20 cm tall' },
    { question: 'How do you know maize is ready to harvest?', answer: 'Husks yellow-brown, grains hard, black layer at tip', hint: 'Drying signs' }
  ]
}
,

// ======================================================================
// ENGLISH FORM 3
// ======================================================================

// Topic: Prepositions (1 lesson)
{
  subject: 'English',
  form: 'Form 3',
  topic: 'Prepositions',
  lessonNumber: 1,
  lessonTitle: 'Prepositions and Prepositional Phrases',
  lessonId: 'english-f3-prepositions-1',
  order: 62,
  learningObjectives: [
    'Define a preposition',
    'Identify common prepositions',
    'Use prepositions correctly in sentences',
    'Identify prepositional phrases'
  ],
  introduction: 'Hello! Prepositions are small words that show relationships between words. They tell us WHERE (in, on, under), WHEN (before, after, during), or HOW (by, with, without). Today, you will learn how to use prepositions correctly.',
  keyPoints: [
    'Preposition: word showing relationship between a noun/pronoun and another word',
    'Common prepositions: in, on, at, for, with, by, to, from, of, about, between, among, during, before, after, under, over, through',
    'Prepositional phrase: preposition + object (noun/pronoun) + modifiers',
    'Prepositions tell position (in the box), direction (to the market), time (after school), or manner (with a hoe)',
    'Never end a sentence with a preposition in formal writing'
  ],
  detailedContent: `Let me explain PREPOSITIONS.

A preposition is a word that shows the relationship between a noun or pronoun and another word in the sentence.

COMMON PREPOSITIONS:

| Category | Prepositions |
|----------|--------------|
| Position | in, on, at, under, over, above, below, beside, between, among, inside, outside, near, far |
| Direction | to, from, into, out of, through, across, along, towards |
| Time | before, after, during, since, until, at, on, in (with time) |
| Manner | by, with, without, like |
| Other | of, about, for, against, despite, except |

EXAMPLES IN SENTENCES:

Position:
- "The book is ON the table."
- "The cat is UNDER the chair."
- "The farmer works IN the field."
- "The school is BETWEEN the church and the market."

Direction:
- "I am going TO Lilongwe."
- "The river flows THROUGH the village."
- "She walked TOWARDS the school."
- "We came FROM the market."

Time:
- "I wake up AT 6 o'clock."
- "Maize is planted IN November."
- "We eat nsima FOR dinner."
- "The rains come DURING December to March."

Manner:
- "The farmer dug the field WITH a hoe."
- "She wrote the letter BY hand."
- "He walked WITHOUT a hat."

PREPOSITIONAL PHRASES:

A prepositional phrase includes the preposition, its object (a noun or pronoun), and any modifiers.

Examples:
- "in the field" (preposition: in, object: field)
- "under the big mango tree" (preposition: under, object: tree)
- "during the rainy season" (preposition: during, object: season)
- "with great care" (preposition: with, object: care)

Prepositional phrases act like adjectives (describing nouns) or adverbs (describing verbs).

- As adjective: "The book ON THE TABLE is mine." (which book?)
- As adverb: "She ran TO THE MARKET." (where did she run?)

COMMON MISTAKES TO AVOID:

1. Do NOT use "of" instead of "have": ❌ "I should of gone" → ✓ "I should have gone"

2. Do NOT confuse "between" and "among":
   - BETWEEN for two items: "between you and me"
   - AMONG for three or more: "among the students"

3. Do NOT confuse "in" and "into":
   - IN = already inside: "I am IN the house"
   - INTO = entering: "I walked INTO the house"

4. Do NOT use unnecessary prepositions: ❌ "Where is he at?" → ✓ "Where is he?"

FORMAL WRITING RULE:

In formal writing, do not end a sentence with a preposition.

Informal: "This is the book I was looking FOR."
Formal: "This is the book FOR WHICH I was looking."

In Malawi, prepositions are used constantly:
- "We live IN Lilongwe."
- "The children are playing UNDER the tree."
- "I will meet you AFTER school."

A PROTIP: If you are unsure whether a word is a preposition, see if it can be followed by a noun. "He went IN" (no noun) – "in" is an adverb here. "He went IN the house" (has noun "house") – "in" is a preposition.

Remember: Prepositions show relationships (position, direction, time, manner). Common prepositions: in, on, at, to, from, by, with, for, during, after, before. A prepositional phrase = preposition + object (noun/pronoun). Do not end formal sentences with prepositions.`,
  summary: 'Prepositions show relationships between words (position, direction, time, manner). Common prepositions: in, on, at, to, from, by, with, for, during, after, before. A prepositional phrase = preposition + object. Do not end formal sentences with prepositions.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Farming Context', description: 'The farmer works IN the field WITH a hoe. He comes FROM the village.' },
    { title: 'Daily Life', description: 'Children play UNDER the mango tree. We eat nsima FOR dinner.' }
  ],
  practiceQuestions: [
    { question: 'Identify the preposition: "She sat under the tree."', answer: 'under', hint: 'Shows position' },
    { question: 'What is the prepositional phrase in "The book is on the table."?', answer: 'on the table', hint: 'Preposition + object' }
  ]
},

// Topic: Conjunctions and Interjections (1 lesson)
{
  subject: 'English',
  form: 'Form 3',
  topic: 'Conjunctions and Interjections',
  lessonNumber: 1,
  lessonTitle: 'Conjunctions and Interjections',
  lessonId: 'english-f3-conjunctions-1',
  order: 63,
  learningObjectives: [
    'Define conjunctions',
    'Identify coordinating conjunctions',
    'Identify subordinating conjunctions',
    'Define and use interjections'
  ],
  introduction: 'Hello! Conjunctions are joining words – they connect words, phrases, or sentences. Interjections are exclamations that express strong feelings. Today, you will learn how to use conjunctions to connect ideas and interjections to express emotion.',
  keyPoints: [
    'Conjunctions: words that connect other words, phrases, or clauses',
    'Coordinating conjunctions: for, and, nor, but, or, yet, so (FANBOYS)',
    'Subordinating conjunctions: because, although, since, unless, while, when, if',
    'Interjections: exclamations showing strong emotion (Oh! Wow! Ouch! Help!)'
  ],
  detailedContent: `Let me explain CONJUNCTIONS and INTERJECTIONS.

CONJUNCTIONS:

Conjunctions are joining words. They connect words, phrases, or whole sentences.

COORDINATING CONJUNCTIONS (FANBOYS):

These connect equal parts of a sentence. Remember: FANBOYS

| Letter | Conjunction | Use | Example |
|--------|-------------|-----|---------|
| F | For | Shows reason | "He is happy, FOR it is raining." |
| A | And | Adds information | "I bought maize AND groundnuts." |
| N | Nor | Negative addition | "He did not call, NOR did he write." |
| B | But | Shows contrast | "The food is cheap, BUT it is not fresh." |
| O | Or | Shows choice | "Plant maize OR groundnuts this season." |
| Y | Yet | Shows contrast (similar to but) | "She is young, YET very strong." |
| S | So | Shows result | "It was raining, SO we stayed home." |

Examples in sentences:
- "The farmer planted maize AND groundnuts."
- "School starts at 7 am, BUT I was late."
- "Would you like nsima OR rice for dinner?"

SUBORDINATING CONJUNCTIONS:

These connect a main clause with a dependent clause (cannot stand alone). They show relationships like cause, time, condition.

Common subordinating conjunctions:
- CAUSE/EFFECT: because, since, as
- TIME: when, while, after, before, until, since
- CONDITION: if, unless, provided that
- CONTRAST: although, even though, whereas

Examples:
- "The crops died BECAUSE there was no rain." (cause)
- "We will harvest WHEN the maize is dry." (time)
- "IF the rains come, we will plant." (condition)
- "ALTHOUGH it was dry, the farmers still planted." (contrast)

SUBORDINATE CLAUSE vs MAIN CLAUSE:
- Main clause: Complete thought (can stand alone)
- Subordinate clause: Incomplete thought (needs main clause)

Example: "Because the rains were late (subordinate), the farmers worried (main)."

INTERJECTIONS:

Interjections are exclamations that express strong feelings. They are often followed by an exclamation mark.

Common interjections:
- Surprise: Wow! Oh! Ah! Really!
- Pain: Ouch! Ow! Oh no!
- Happiness: Yes! Hooray! Great!
- Sadness: Alas! Oh dear!
- Disgust: Yuck! Ew!
- Attention: Hey! Look! Listen!

Examples:
- "WOW! That mango is sweet!"
- "OUCH! I cut my finger."
- "ALAS! The crops have failed."
- "HEY! Come here."

Interjections are often used in informal writing and speech. In formal writing, use them sparingly.

In Malawi, you use conjunctions and interjections often:
- "I planted maize AND also planted groundnuts."
- "We will go to the market IF the rain stops."
- "WOW! The nsima is delicious!"
- "ALAS! The harvest was poor this year."

A PROTIP: When using a subordinating conjunction at the beginning of a sentence, put a comma after the subordinate clause:
✓ "Because it was raining, we stayed home."
✓ "We stayed home because it was raining." (no comma needed)

Remember: Conjunctions connect words, phrases, or clauses. Coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so) connect equal parts. Subordinating conjunctions (because, although, if, when, while) connect main and dependent clauses. Interjections express strong emotion (Wow! Ouch! Help!).`,
  summary: 'Coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so) connect equal parts. Subordinating conjunctions (because, although, if, when, while) connect main and dependent clauses. Interjections express strong emotion (Wow! Ouch!).',
  estimatedTime: '18 mins',
  malawiExamples: [
    { title: 'Farming Decisions', description: 'Plant maize AND groundnuts, OR plant tobacco for cash.' },
    { title: 'Daily Exclamations', description: 'WOW! The harvest is good. ALAS! The rains have stopped.' }
  ],
  practiceQuestions: [
    { question: 'What does the acronym FANBOYS stand for?', answer: 'For, And, Nor, But, Or, Yet, So', hint: 'Coordinating conjunctions' },
    { question: 'Identify the interjection: "Ouch! I stepped on a thorn."', answer: 'Ouch!', hint: 'Shows pain' }
  ]
},

// Topic: Sentence Types (2 lessons)
{
  subject: 'English',
  form: 'Form 3',
  topic: 'Sentence Types',
  lessonNumber: 1,
  lessonTitle: 'Simple and Compound Sentences',
  lessonId: 'english-f3-sentences-1',
  order: 64,
  learningObjectives: [
    'Identify simple sentences',
    'Identify compound sentences',
    'Use coordinating conjunctions to form compound sentences',
    'Distinguish between simple and compound sentences'
  ],
  introduction: 'Good day! Sentences come in different types. Some are short and simple (one idea), others are longer and combine ideas. Today, you will learn about SIMPLE sentences (one independent clause) and COMPOUND sentences (two independent clauses joined by a conjunction).',
  keyPoints: [
    'Simple sentence: one independent clause (one subject + one predicate)',
    'Compound sentence: two or more independent clauses joined by a conjunction',
    'Coordinating conjunctions (FANBOYS) join compound sentences',
    'Use a comma before the conjunction in compound sentences'
  ],
  detailedContent: `Let me explain SIMPLE and COMPOUND sentences.

SIMPLE SENTENCE:

A simple sentence has ONE independent clause. It has one subject and one predicate, but can have multiple nouns or verbs.

Structure: Subject + Verb (+ object/complement)

Examples:
- "The farmer planted maize." (one subject, one verb)
- "The farmer and his son planted maize." (two subjects, one verb – still simple)
- "The farmer planted and harvested maize." (one subject, two verbs – still simple)
- "The farmer planted maize and groundnuts." (one subject, one verb, two objects – still simple)

A simple sentence expresses ONE complete thought.

COMPOUND SENTENCE:

A compound sentence has TWO or more independent clauses joined by a coordinating conjunction (FANBOYS).

Structure: Independent clause + , + conjunction + independent clause

Examples:
- "The farmer planted maize, AND his son watered the field."
- "You can plant tobacco, OR you can plant maize."
- "The rains came late, BUT the crops still grew."
- "I wanted to go to the market, SO I walked to town."

Each part before and after the conjunction could stand alone as a complete sentence.

PUNCTUATION RULE:

In compound sentences, use a COMMA BEFORE the conjunction.

✓ "The sun was hot, AND the farmers rested."
✗ "The sun was hot AND the farmers rested." (missing comma)

Exception: Very short compound sentences with only two words may not need a comma:
- "I came AND I saw." (acceptable, but comma optional)

COMMON MISTAKES:

1. COMMA SPLICE: Using only a comma without a conjunction
   ❌ "The sun was hot, the farmers rested." (incorrect)
   ✓ "The sun was hot, SO the farmers rested."

2. RUN-ON SENTENCE: No punctuation or conjunction
   ❌ "The sun was hot the farmers rested." (incorrect)
   ✓ "The sun was hot, SO the farmers rested."

In Malawi, you use simple and compound sentences daily:
- Simple: "The farmer wakes early." (one idea)
- Simple: "He eats breakfast and goes to the field." (still one idea)
- Compound: "The sun rises, AND the farmer begins work."

A PROTIP: To check if a sentence is compound, see if you can split it into two complete sentences. If yes, it is compound.

Remember: Simple sentence = one independent clause (one complete thought). Compound sentence = two or more independent clauses joined by a comma and a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so). Avoid comma splices and run-on sentences.`,
  summary: 'Simple sentence: one independent clause (one complete thought). Compound sentence: two or more independent clauses joined by a comma + coordinating conjunction (FANBOYS). Avoid comma splices (comma without conjunction) and run-ons (no punctuation).',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Farming', description: 'Simple: The farmer plants maize. Compound: The farmer plants maize, AND his wife weeds the field.' },
    { title: 'School', description: 'Simple: Students study English. Compound: The teacher explains the lesson, AND the students listen carefully.' }
  ],
  practiceQuestions: [
    { question: 'Is "The farmer and his wife work hard" simple or compound?', answer: 'Simple', hint: 'One subject, one verb – no conjunction joining clauses' },
    { question: 'Correct this sentence: "The rain stopped we went home."', answer: 'The rain stopped, SO we went home.', hint: 'Need a conjunction' }
  ]
},
{
  subject: 'English',
  form: 'Form 3',
  topic: 'Sentence Types',
  lessonNumber: 2,
  lessonTitle: 'Complex Sentences',
  lessonId: 'english-f3-sentences-2',
  order: 65,
  learningObjectives: [
    'Identify complex sentences',
    'Use subordinating conjunctions',
    'Distinguish between independent and dependent clauses',
    'Punctuate complex sentences correctly'
  ],
  introduction: 'Welcome back! Complex sentences have one main idea (independent clause) and one or more supporting ideas (dependent clauses). Today, you will learn how to use subordinating conjunctions to create complex sentences that show relationships like cause, time, and condition.',
  keyPoints: [
    'Complex sentence: one independent clause + one or more dependent clauses',
    'Dependent clause cannot stand alone (needs the main clause)',
    'Subordinating conjunctions: because, although, since, unless, while, when, if, after, before',
    'If dependent clause comes first, use a comma after it',
    'If independent clause comes first, no comma needed'
  ],
  detailedContent: `Let me explain COMPLEX sentences.

Simple sentence = one independent clause
Compound sentence = two independent clauses
Complex sentence = one independent clause + one or more dependent clauses

INDEPENDENT vs DEPENDENT CLAUSES:

- INDEPENDENT CLAUSE: Can stand alone as a complete sentence.
  Example: "The farmer planted maize."

- DEPENDENT CLAUSE: Cannot stand alone. It needs the main clause to complete its meaning.
  Example: "Because the rains came" (incomplete – reader asks "what happened?")

SUBORDINATING CONJUNCTIONS:

These introduce dependent clauses. Common subordinating conjunctions:

| Conjunction | Relationship | Example |
|-------------|--------------|---------|
| because | cause | "Because it rained, the crops grew." |
| although | contrast | "Although it was dry, the farmer planted." |
| if | condition | "If the rains come, we will plant." |
| when | time | "When the sun rises, the farmer wakes." |
| while | time | "While the children slept, the mother cooked." |
| after | time | "After the harvest, we will sell the maize." |
| before | time | "Before planting, prepare the land." |
| since | cause/time | "Since the drought, food is scarce." |
| unless | condition | "Unless it rains, the crops will die." |

COMPLEX SENTENCE EXAMPLES:

Dependent clause FIRST (use comma):
- "Because the rains were late, the maize was stunted."
- "Although he worked hard, the harvest was poor."
- "If you prepare the land well, you will get good yields."

Dependent clause SECOND (no comma needed):
- "The maize was stunted because the rains were late."
- "The harvest was poor although he worked hard."
- "You will get good yields if you prepare the land well."

WHAT IS THE DIFFERENCE BETWEEN COMPOUND AND COMPLEX?

| Feature | Compound | Complex |
|---------|----------|---------|
| Clauses | Two or more independent | One independent + dependent |
| Can clauses stand alone? | Yes (both) | Only the independent clause |
| Joining word | Coordinating conjunction (FANBOYS) | Subordinating conjunction |
| Example | "It rained, SO we planted." | "We planted BECAUSE it rained." |

SENTENCE TYPES SUMMARY:

| Type | Structure | Example |
|------|-----------|---------|
| Simple | 1 independent clause | "The farmer works." |
| Compound | 2+ independent clauses (FANBOYS) | "The farmer works, AND his wife cooks." |
| Complex | 1 independent + dependent (subordinating) | "The farmer works BECAUSE he needs money." |
| Compound-Complex | 2+ independent + dependent | "The farmer works because he needs money, AND his wife cooks." |

In Malawi, complex sentences help express detailed ideas:
- "ALTHOUGH the rains were poor, many farmers still harvested maize."
- "We will have a good harvest IF we use fertiliser."

A PROTIP: If you can remove the joining word and the clause can stand alone, it is compound (independent + independent). If the clause cannot stand alone, it is complex (independent + dependent).

Remember: Complex sentences have one independent clause and one or more dependent clauses. Dependent clauses start with subordinating conjunctions (because, although, if, when, while). Use a comma when the dependent clause comes first. Complex sentences show cause, time, condition, or contrast.`,
  summary: 'Complex sentence = one independent clause + one or more dependent clauses. Dependent clauses start with subordinating conjunctions (because, although, if, when, while). Use a comma when the dependent clause comes first; no comma when it comes second.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Cause and Effect', description: 'Because the fertiliser was expensive, the farmer bought less.' },
    { title: 'Condition', description: 'If the rains come early, we will plant in October.' }
  ],
  practiceQuestions: [
    { question: 'Is "When the rain stops, we will plant maize" simple, compound, or complex?', answer: 'Complex', hint: 'One independent + one dependent clause' },
    { question: 'Identify the subordinating conjunction: "Although it was dry, the farmer planted."', answer: 'Although', hint: 'Shows contrast' }
  ]
},

// Topic: Tenses (Advanced) - 2 lessons
{
  subject: 'English',
  form: 'Form 3',
  topic: 'Tenses - Continuous',
  lessonNumber: 1,
  lessonTitle: 'Present and Past Continuous Tenses',
  lessonId: 'english-f3-continuous-tenses-1',
  order: 66,
  learningObjectives: [
    'Form the present continuous tense',
    'Form the past continuous tense',
    'Use continuous tenses to describe ongoing actions',
    'Distinguish between simple and continuous tenses'
  ],
  introduction: 'Hello! Simple tenses tell us when an action happens (now, past, future). CONTINUOUS tenses tell us that an action was, is, or will be IN PROGRESS. "I read" (simple) vs "I am reading" (continuous – right now). Today, you will learn present and past continuous tenses.',
  keyPoints: [
    'Present continuous: am/is/are + verb-ing (action happening NOW)',
    'Past continuous: was/were + verb-ing (action happening IN THE PAST over time)',
    'Use present continuous for actions in progress now, or future planned actions',
    'Use past continuous for actions interrupted by another event',
    'Signal words: now, at the moment, while, when'
  ],
  detailedContent: `Let me explain CONTINUOUS TENSES.

PRESENT CONTINUOUS:

Use: Action happening RIGHT NOW.

Form: am/is/are + verb-ing

Examples:
- "I AM READING a book right now."
- "She IS COOKING nsima in the kitchen."
- "The farmer IS PLANTING maize in the field."
- "We ARE WAITING for the rain to stop."

PRESENT CONTINUOUS for future plans:

We also use present continuous for planned future actions.
- "I AM VISITING Lilongwe tomorrow."
- "We ARE LEAVING at 6 am."

PAST CONTINUOUS:

Use: Action that was IN PROGRESS at a specific time in the past.

Form: was/were + verb-ing

Examples:
- "Yesterday at 7 am, I WAS WALKING to school."
- "The children WERE PLAYING when the rain started."
- "The farmer WAS PLOUGHING the field all morning."

PAST CONTINUOUS with "when" (interrupted action):

When one action interrupted another, the longer action is past continuous, the shorter action is simple past.

Structure: Past continuous (longer action) + when + simple past (interruption)

Examples:
- "I WAS SLEEPING when the phone rang."
- "The farmer WAS PLANTING when the rain started."
- "We WERE EATING dinner when the guest arrived."

PAST CONTINUOUS with "while" (two simultaneous actions):

Two actions happening at the same time.

Structure: Past continuous + while + past continuous

Examples:
- "While I WAS COOKING, my sister WAS CLEANING."
- "The farmer WAS WATERING while his wife WAS WEEDING."

SIMPLE vs CONTINUOUS:

| Simple | Continuous |
|--------|------------|
| Completed action | Action in progress |
| "I read a book." (finished) | "I am reading a book." (still reading) |
| "She cooked nsima." (finished) | "She was cooking nsima." (in progress) |
| "We planted maize." (finished) | "We are planting maize." (still planting) |

NON-CONTINUOUS VERBS (Stative Verbs):

Some verbs are NOT normally used in continuous form:

- BELIEVE, KNOW, THINK (opinion) – not "I am believing"
- WANT, NEED, LIKE, LOVE, HATE – not "I am wanting"
- SEE, HEAR, SMELL, TASTE – not "I am seeing"

Instead: "I believe" (not "I am believing").

In Malawi, continuous tenses describe ongoing actions:
- "The children ARE PLAYING outside right now."
- "Yesterday at this time, I WAS STUDYING for my exam."

A PROTIP: If you can substitute "right now" or "at that moment" and it makes sense, use continuous tense.

Remember: Present continuous = am/is/are + verb-ing (action now or future plan). Past continuous = was/were + verb-ing (action in progress in the past). Use past continuous for interrupted actions (with when) or simultaneous actions (with while). Some verbs are not used in continuous (believe, know, want).`,
  summary: 'Present continuous (am/is/are + verb-ing) = action happening now or planned future. Past continuous (was/were + verb-ing) = action in progress at a past time. Past continuous + when + simple past = interrupted action. Past continuous + while + past continuous = simultaneous actions.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Present Continuous', description: 'The farmer IS PLANTING maize right now.' },
    { title: 'Past Continuous', description: 'Yesterday morning, the farmer WAS PLOUGHING when it started to rain.' }
  ],
  practiceQuestions: [
    { question: 'Form the present continuous of "She (cook)"', answer: 'She is cooking', hint: 'am/is/are + verb-ing' },
    { question: 'Form the past continuous of "They (plant)"', answer: 'They were planting', hint: 'was/were + verb-ing' }
  ]
},
{
  subject: 'English',
  form: 'Form 3',
  topic: 'Tenses - Perfect',
  lessonNumber: 2,
  lessonTitle: 'Present Perfect and Past Perfect Tenses',
  lessonId: 'english-f3-perfect-tenses-2',
  order: 67,
  learningObjectives: [
    'Form the present perfect tense',
    'Form the past perfect tense',
    'Use present perfect for past actions with present relevance',
    'Use past perfect for actions before another past action'
  ],
  introduction: 'Welcome back! Perfect tenses connect past actions to other times. The PRESENT PERFECT connects the past to NOW ("I have eaten" – I am full now). The PAST PERFECT connects two past events ("I had eaten before he arrived"). Today, you will learn these useful tenses.',
  keyPoints: [
    'Present perfect: have/has + past participle (action completed with present relevance)',
    'Past perfect: had + past participle (action completed before another past action)',
    'Signal words for present perfect: ever, never, already, yet, just, since, for',
    'Signal words for past perfect: before, after, by the time, already'
  ],
  detailedContent: `Let me explain PERFECT TENSES.

PRESENT PERFECT:

Use: Action that started in the past and continues to now, or action completed at an unspecified time with relevance to now.

Form: have/has + past participle

Examples:
- "I HAVE FINISHED my homework." (now it is done)
- "She HAS LIVED in Lilongwe for 10 years." (still living there)
- "The farmer HAS PLANTED the maize." (the field is planted now)
- "We HAVE NEVER seen such a big harvest." (experience up to now)

Past participles:
- Regular verbs: add -ed (work → worked, finish → finished)
- Irregular verbs: special forms (eat → eaten, go → gone, see → seen, write → written)

PRESENT PERFECT vs SIMPLE PAST:

| Present Perfect | Simple Past |
|----------------|-------------|
| Connects to now | Finished in past, no connection |
| "I have eaten." (I am not hungry) | "I ate." (just fact, no connection) |
| "She has lived here for 10 years." (still living) | "She lived there for 10 years." (no longer lives) |

PRESENT PERFECT signal words:
- EVER: "Have you EVER visited the lake?"
- NEVER: "I have NEVER tried that food."
- ALREADY: "We have ALREADY eaten."
- YET: "Have you finished YET?" (questions/negatives)
- JUST: "I have JUST arrived."
- SINCE: "I have lived here SINCE 2010." (starting point)
- FOR: "I have lived here FOR 10 years." (duration)

PAST PERFECT:

Use: Action that was completed BEFORE another action in the past.

Form: had + past participle

Example: "I HAD EATEN before he arrived."
- First: I ate
- Second: He arrived

PAST PERFECT sentence structure:

Main clause (simple past) + before/after/when + past perfect clause (earlier action)

Examples:
- "The farmer HAD PLANTED before the rain started."
- "After the farmer HAD HARVESTED, he sold the maize."
- "By the time we arrived, the meeting HAD ALREADY STARTED."

PAST PERFECT vs SIMPLE PAST:

Without past perfect (confusing order):
"After the farmer planted, it rained." (could be same time or after)

With past perfect (clear order):
"After the farmer HAD PLANTED, it rained." (planting finished first)

In Malawi, perfect tenses connect events:
- "I HAVE LIVED in Mzuzu for five years." (present perfect – still there)
- "The farmer HAD APPLIED fertiliser before the rains came." (past perfect – fertiliser first)

A PROTIP: If you are unsure whether to use present perfect or simple past, ask: "Does this action affect the present moment?" If yes, use present perfect.

Remember: Present perfect = have/has + past participle (connects past to present). Use with ever, never, already, yet, just, since, for. Past perfect = had + past participle (shows which action happened first in the past). Use with before, after, by the time.`,
  summary: 'Present perfect (have/has + past participle) connects past actions to the present. Use with ever, never, already, yet, just, since, for. Past perfect (had + past participle) shows which action happened first in the past. Use with before, after, by the time.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Present Perfect', description: 'I HAVE LIVED in Lilongwe since 2015. (still living there)' },
    { title: 'Past Perfect', description: 'The farmer HAD PLANTED before the rains came. (planting finished first)' }
  ],
  practiceQuestions: [
    { question: 'Form the present perfect of "They (eat)"', answer: 'They have eaten', hint: 'have/has + past participle' },
    { question: 'Form the past perfect of "She (finish)"', answer: 'She had finished', hint: 'had + past participle' }
  ]
}
,

// ======================================================================
// CHEMISTRY FORM 4 (REMAINING)
// ======================================================================

// Topic: Redox Reactions (2 lessons)
{
  subject: 'Chemistry',
  form: 'Form 4',
  topic: 'Redox Reactions',
  lessonNumber: 1,
  lessonTitle: 'Oxidation and Reduction',
  lessonId: 'chemistry-f4-redox-1',
  order: 68,
  learningObjectives: [
    'Define oxidation and reduction',
    'Identify oxidation and reduction in reactions',
    'Explain redox in terms of electron transfer',
    'Identify oxidising and reducing agents'
  ],
  introduction: 'Hello! Have you noticed how iron turns rusty? Or how a cut apple turns brown? These are OXIDATION reactions. Today, you will learn about REDOX (reduction-oxidation) reactions – reactions where electrons are transferred between substances. This is fundamental to batteries, rusting, and many industrial processes.',
  keyPoints: [
    'Oxidation: loss of electrons, gain of oxygen, loss of hydrogen',
    'Reduction: gain of electrons, loss of oxygen, gain of hydrogen',
    'OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)',
    'Oxidising agent: substance that causes oxidation (itself is reduced)',
    'Reducing agent: substance that causes reduction (itself is oxidised)'
  ],
  detailedContent: `Let me explain REDOX REACTIONS.

Oxidation and reduction ALWAYS happen together – you cannot have one without the other.

DEFINITIONS:

OXIDATION can be defined in three ways:
1. Loss of ELECTRONS
2. Gain of OXYGEN
3. Loss of HYDROGEN

REDUCTION can be defined in three ways:
1. Gain of ELECTRONS
2. Loss of OXYGEN
3. Gain of HYDROGEN

MEMORY AID: OIL RIG
- Oxidation Is Loss (of electrons)
- Reduction Is Gain (of electrons)

EXAMPLES:

Example 1: Magnesium + Oxygen → Magnesium oxide
2Mg + O₂ → 2MgO

- Magnesium (Mg) → Mg²⁺ + 2e⁻ (magnesium LOSES electrons → OXIDISED)
- Oxygen (O₂) + 4e⁻ → 2O²⁻ (oxygen GAINS electrons → REDUCED)

Example 2: Copper oxide + Hydrogen → Copper + Water
CuO + H₂ → Cu + H₂O

- Copper(II) oxide (CuO) loses oxygen → Cu (REDUCED)
- Hydrogen gains oxygen → H₂O (OXIDISED)

Example 3: Iron rusting (slow oxidation)
4Fe + 3O₂ → 2Fe₂O₃ (iron oxide)

- Iron loses electrons → Fe³⁺ (OXIDISED)
- Oxygen gains electrons → O²⁻ (REDUCED)

OXIDISING AGENTS AND REDUCING AGENTS:

- OXIDISING AGENT: Causes oxidation in another substance. It itself is REDUCED.
- REDUCING AGENT: Causes reduction in another substance. It itself is OXIDISED.

Examples:
- Oxygen (O₂) is a strong oxidising agent
- Hydrogen (H₂) is a strong reducing agent
- Chlorine (Cl₂) is an oxidising agent
- Carbon (C) is a reducing agent (used in metal extraction)

OXIDATION STATES (Numbers):

We can track oxidation by assigning oxidation numbers.

Rules for oxidation numbers:
- Element in natural form: 0 (e.g., Mg, O₂, H₂)
- Monatomic ion: charge of ion (Na⁺ = +1, Cl⁻ = -1)
- Oxygen in compounds: usually -2 (except peroxides -1)
- Hydrogen in compounds: usually +1 (except metal hydrides -1)
- Sum of oxidation numbers in neutral compound = 0
- Sum in polyatomic ion = charge of ion

Example: In Fe₂O₃
- Oxygen = -2 each → total -6
- Iron = +3 each → total +6
- Sum = 0

Increase in oxidation number = OXIDATION
Decrease in oxidation number = REDUCTION

In Malawi, redox reactions happen everywhere:
- Rusting of iron sheets on roofs
- Bleaching stains with chlorine
- Batteries (chemical to electrical energy)
- Digestion of food (slow oxidation)

A PROTIP: When balancing redox equations, first balance atoms, then balance electrons lost with electrons gained.

Remember: Oxidation = loss of electrons, gain of oxygen, loss of hydrogen. Reduction = gain of electrons, loss of oxygen, gain of hydrogen. OIL RIG helps remember. Oxidising agents cause oxidation (themselves reduced). Reducing agents cause reduction (themselves oxidised).`,
  summary: 'Oxidation = loss of electrons (OIL). Reduction = gain of electrons (RIG). Oxidising agent causes oxidation (itself reduced). Reducing agent causes reduction (itself oxidised). Oxidation number increases = oxidation; decreases = reduction.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Rusting', description: 'Iron sheets on roofs rust (oxidise) when exposed to oxygen and moisture.' },
    { title: 'Batteries', description: 'Car batteries use redox reactions to produce electricity.' }
  ],
  practiceQuestions: [
    { question: 'What is the OIL RIG memory aid?', answer: 'Oxidation Is Loss, Reduction Is Gain (of electrons)', hint: 'Remember the acronym' },
    { question: 'If a substance loses electrons, is it oxidised or reduced?', answer: 'Oxidised', hint: 'OIL – Oxidation Is Loss' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 4',
  topic: 'Redox Reactions',
  lessonNumber: 2,
  lessonTitle: 'Applications of Redox Reactions',
  lessonId: 'chemistry-f4-redox-2',
  order: 69,
  learningObjectives: [
    'Explain rusting as a redox reaction',
    'Describe methods of rust prevention',
    'Explain how batteries work (galvanic cells)',
    'Explain displacement reactions as redox'
  ],
  introduction: 'Welcome back! Redox reactions are not just theory – they have real-world applications. Today, you will learn about RUSTING (how to prevent it), BATTERIES (how they produce electricity), and DISPLACEMENT REACTIONS (how metals compete).',
  keyPoints: [
    'Rusting: iron reacts with oxygen and water to form hydrated iron(III) oxide (Fe₂O₃·xH₂O)',
    'Conditions for rust: oxygen AND water present',
    'Prevention: painting, oiling, galvanising (zinc coating), sacrificial protection',
    'Batteries: galvanic cells convert chemical energy to electrical energy',
    'Displacement reactions: more reactive metal displaces less reactive metal from its compound'
  ],
  detailedContent: `Let me explain APPLICATIONS OF REDOX REACTIONS.

APPLICATION 1: RUSTING

Rusting is the oxidation of iron in the presence of oxygen and water.

Chemical equation: 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O (hydrated iron(III) oxide)

Conditions for rust:
- Oxygen must be present
- Water must be present

If either is absent, rust does NOT occur.

Prevention of rust:

1. PAINTING:
   - Paint forms a barrier excluding oxygen and water
   - Used on cars, gates, roofs

2. OILING/GREASING:
   - Oil/grease forms protective layer
   - Used on tools, bicycle chains

3. GALVANISING:
   - Coating iron with zinc
   - Zinc reacts before iron (more reactive)
   - Used on roofing sheets, buckets

4. SACRIFICIAL PROTECTION:
   - Attach a more reactive metal (zinc or magnesium) to iron
   - The reactive metal corrodes instead of iron
   - Used on ship hulls, underground pipes

5. ALLOYING:
   - Make stainless steel (iron + chromium + nickel)
   - Chromium forms protective oxide layer

In Malawi, rust prevention extends the life of iron sheets, tools, and vehicles.

APPLICATION 2: BATTERIES (Galvanic Cells)

A battery converts chemical energy into electrical energy using redox reactions.

Simple galvanic cell (Daniel cell):
- Zinc electrode in zinc sulphate solution (Zn → Zn²⁺ + 2e⁻ – oxidation)
- Copper electrode in copper sulphate solution (Cu²⁺ + 2e⁻ → Cu – reduction)
- Electrons flow through wire from zinc to copper
- Salt bridge allows ions to flow to complete circuit

Zinc is oxidised (loses electrons); copper is reduced (gains electrons).

This produces ELECTRICITY!

Dry cell (common battery):
- Zinc case (oxidised)
- Carbon rod (reduced)
- Paste containing ammonium chloride (electrolyte)

APPLICATION 3: DISPLACEMENT REACTIONS

More reactive metals displace less reactive metals from their compounds.

Example: Zinc + Copper sulphate → Zinc sulphate + Copper
Zn + CuSO₄ → ZnSO₄ + Cu

- Zinc is oxidised (Zn → Zn²⁺ + 2e⁻)
- Copper is reduced (Cu²⁺ + 2e⁻ → Cu)

The REACTIVITY SERIES determines who displaces whom:

Most reactive: Potassium, Sodium, Calcium, Magnesium, Aluminium, Carbon, Zinc, Iron, Tin, Lead, Hydrogen, Copper, Silver, Gold (least reactive)

A metal can displace ANY metal below it in the series.

In Malawi, displacement reactions are used in:
- Wastewater treatment (removing heavy metals)
- Mining (extracting metals)

A PROTIP: The more reactive the metal, the more easily it oxidises (loses electrons). That is why sodium must be stored under oil – it reacts with air!

Remember: Rusting needs oxygen and water. Prevent by painting, oiling, galvanising, sacrificial protection, or alloying. Batteries use redox to produce electricity. More reactive metals displace less reactive metals in displacement reactions.`,
  summary: 'Rusting occurs when iron reacts with oxygen and water. Prevent by painting, oiling, galvanising (zinc coating), sacrificial protection (more reactive metal), or alloying (stainless steel). Batteries use spontaneous redox to produce electricity. More reactive metals displace less reactive metals from compounds.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Rust Prevention on Roofing', description: 'Galvanised iron sheets are common on Malawian houses.' },
    { title: 'Dry Cell Batteries', description: 'Used in torches, radios, and remote controls.' }
  ],
  practiceQuestions: [
    { question: 'What two conditions are needed for iron to rust?', answer: 'Oxygen and water', hint: 'Both must be present' },
    { question: 'What is galvanising?', answer: 'Coating iron with zinc', hint: 'Zinc protects iron' }
  ]
}
,

// ======================================================================
// AGRICULTURE FORM 3
// ======================================================================

// Topic: Soil Properties (2 lessons)
{
  subject: 'Agriculture',
  form: 'Form 3',
  topic: 'Soil Properties',
  lessonNumber: 1,
  lessonTitle: 'Physical Properties of Soil',
  lessonId: 'agriculture-f3-soil-properties-1',
  order: 70,
  learningObjectives: [
    'Describe soil texture and its importance',
    'Describe soil structure and its importance',
    'Explain soil porosity and water holding capacity',
    'Identify different soil types (sand, silt, clay, loam)'
  ],
  introduction: 'Good day, soil scientist! Not all soils are the same. Some are sandy and drain quickly; others are clay and hold water. Understanding soil properties helps farmers choose the right crops and management practices. Today, you will learn about the physical properties of soil that affect crop growth.',
  keyPoints: [
    'Soil texture: proportion of sand, silt, and clay particles',
    'Sand: largest particles (0.05-2 mm), drains quickly, low nutrients',
    'Silt: medium particles (0.002-0.05 mm), good fertility',
    'Clay: smallest particles (<0.002 mm), holds water, high nutrients, can be waterlogged',
    'Loam: mixture of sand, silt, and clay – ideal for most crops',
    'Soil structure: how soil particles clump together (crumbly, blocky, platy, massive)',
    'Soil porosity: amount of air spaces between particles (affects drainage and root growth)'
  ],
  detailedContent: `Let me explain the PHYSICAL PROPERTIES OF SOIL.

SOIL TEXTURE:

Soil texture refers to the relative proportions of sand, silt, and clay particles.

| Particle | Size range | Characteristics |
|----------|------------|-----------------|
| Sand | 0.05-2 mm | Gritty, drains quickly, low nutrients, warms quickly |
| Silt | 0.002-0.05 mm | Smooth like flour, good fertility |
| Clay | <0.002 mm | Sticky when wet, hard when dry, holds water, high nutrients |

SANDY SOIL:
- Advantages: drains well, easy to work, warms quickly in spring
- Disadvantages: low nutrients, low water holding capacity (crops need frequent watering)
- Crops suited: groundnuts, cassava, early vegetables

CLAY SOIL:
- Advantages: high nutrients, high water holding capacity
- Disadvantages: poor drainage, hard to work, cracks when dry, waterlogs when wet
- Crops suited: rice (if puddled), maize (with drainage)

SILT SOIL:
- Advantages: good fertility, holds moisture well
- Disadvantages: can be compacted easily

LOAM SOIL (IDEAL):
- Balanced mixture of sand, silt, and clay
- Advantages: good drainage, good water holding, good nutrients, easy to work
- Best for most crops: maize, vegetables, tobacco, fruits

TESTING SOIL TEXTURE BY HAND (Feel Method):

1. Take a moist soil sample
2. Rub between fingers:
   - Gritty = sand
   - Smooth = silt
   - Sticky = clay

3. Try to form a ribbon:
   - No ribbon = sandy
   - Short ribbon (<2.5 cm) = loamy sand or sandy loam
   - Medium ribbon (2.5-5 cm) = clay loam
   - Long ribbon (>5 cm) = clay

SOIL STRUCTURE:

Soil structure is how soil particles clump together into aggregates.

Types of soil structure:
- CRUMB (GRANULAR): Small, rounded crumbs – ideal for plant growth
- BLOCKY: Irregular blocks – common in subsoil
- PLATY: Flat, plate-like layers – can restrict root growth
- PRISMATIC: Vertical columns – common in clay soils
- MASSIVE: No structure – very hard, poor for crops

SOIL POROSITY:

Porosity is the amount of pore spaces (air spaces) between soil particles.

- Well-structured soil = high porosity = good aeration and drainage
- Compacted soil = low porosity = poor root growth, waterlogging

Factors affecting porosity:
- Organic matter content (more OM = higher porosity)
- Tillage (ploughing increases porosity temporarily)
- Compaction (tractors, animals, rain can compact soil)

In Malawi, soil properties vary by region:
- Lakeshore areas: sandy soils (good for groundnuts)
- Central region: sandy loam (good for maize and tobacco)
- Highlands (Mulanje, Thyolo): clay and clay loam (tea, but needs drainage)

A PROTIP: Adding organic matter (compost, manure) improves all soils – it adds nutrients to sandy soils and improves drainage in clay soils.

Remember: Soil texture = proportion of sand, silt, clay (affects drainage and nutrients). Sandy soil drains well but low nutrients. Clay soil holds water and nutrients but drains poorly. Loam is ideal. Soil structure affects root growth. Porosity affects aeration and drainage.`,
  summary: 'Soil texture (sand, silt, clay proportions) affects drainage and nutrients. Sandy soil drains quickly; clay holds water; loam is ideal. Soil structure affects root growth; crumbly structure is best. Porosity affects aeration and drainage. Add organic matter to improve any soil.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Lakeshore Soils', description: 'Sandy soils around Lake Malawi are good for groundnuts.' },
    { title: 'Tea-growing Areas', description: 'Mulanje and Thyolo have clay soils that need drainage for tea.' }
  ],
  practiceQuestions: [
    { question: 'What type of soil is best for most crops?', answer: 'Loam', hint: 'Balanced mixture of sand, silt, clay' },
    { question: 'Which soil particle is smallest?', answer: 'Clay', hint: '<0.002 mm' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 3',
  topic: 'Soil Properties',
  lessonNumber: 2,
  lessonTitle: 'Chemical Properties of Soil',
  lessonId: 'agriculture-f3-soil-properties-2',
  order: 71,
  learningObjectives: [
    'Explain soil pH and its importance for crops',
    'Describe soil organic matter and its role',
    'Explain cation exchange capacity (CEC)',
    'Identify signs of nutrient deficiencies'
  ],
  introduction: 'Welcome back! The chemical properties of soil determine which nutrients are available to plants. Soil pH affects nutrient availability. Organic matter feeds the soil. Today, you will learn how to assess and improve the chemical properties of your soil for better crop yields.',
  keyPoints: [
    'Soil pH: measure of acidity or alkalinity (scale 0-14)',
    'Most crops grow best at pH 6.0-7.0 (slightly acidic to neutral)',
    'Acidic soil (< pH 5.5): add lime to raise pH',
    'Alkaline soil (> pH 7.5): add sulphur or organic matter to lower pH',
    'Soil organic matter: decomposed plant and animal material',
    'Cation Exchange Capacity (CEC): soil\'s ability to hold and release nutrients',
    'Clay and organic matter have high CEC; sand has low CEC'
  ],
  detailedContent: `Let me explain the CHEMICAL PROPERTIES OF SOIL.

SOIL pH (Potential Hydrogen):

Soil pH measures how acidic or alkaline the soil is on a scale of 0 to 14.

- pH below 7: ACIDIC
- pH 7: NEUTRAL
- pH above 7: ALKALINE (basic)

Optimal pH for most crops: 6.0 to 7.0 (slightly acidic to neutral)

Why does pH matter? At the wrong pH, nutrients are "locked" and unavailable to plants.

| Nutrient | Available at pH |
|----------|-----------------|
| Nitrogen | 6.0-8.0 |
| Phosphorus | 6.0-7.0 |
| Potassium | 6.0-7.5 |
| Iron | 5.0-6.5 |
| Manganese | 5.0-6.5 |

Signs of pH problems:
- Acidic soil: Poor growth, yellow leaves (iron deficiency), moss growing
- Alkaline soil: Stunted growth, yellow between veins (iron chlorosis)

Correcting soil pH:
- Acidic soil (too low): Add LIME (calcium carbonate)
- Alkaline soil (too high): Add SULPHUR or organic matter (compost, manure)

SOIL ORGANIC MATTER (SOM):

Organic matter is decomposed plant and animal material in soil.

Benefits of organic matter:
- Improves soil structure
- Increases water holding capacity
- Adds nutrients (slow release)
- Increases CEC (holds more nutrients)
- Feeds soil organisms (earthworms, microbes)

Sources of organic matter:
- Crop residues (maize stalks, groundnut shells)
- Compost
- Animal manure
- Green manure (cover crops ploughed in)

In Malawi, adding manure or compost is essential for maintaining soil fertility.

CATION EXCHANGE CAPACITY (CEC):

CEC is the soil's ability to hold and release positively charged nutrients (cations: Ca²⁺, Mg²⁺, K⁺, NH₄⁺).

Soils with high CEC:
- Hold more nutrients
- Are more fertile
- Need less frequent fertiliser

CEC order:
Clay (high) > Loam (medium) > Sand (low)

Organic matter also increases CEC.

NUTRIENT DEFICIENCY SIGNS:

| Nutrient | Deficiency Sign |
|----------|-----------------|
| Nitrogen (N) | Older leaves turn yellow, stunted growth |
| Phosphorus (P) | Purple or red leaves, poor root growth |
| Potassium (K) | Yellow/brown edges on leaves, weak stems |
| Magnesium (Mg) | Yellow between veins on older leaves |
| Iron (Fe) | Yellow between veins on YOUNG leaves |
| Zinc (Zn) | Small, twisted leaves; short internodes |

In Malawi, nitrogen deficiency is most common in maize (yellow-green leaves). Adding fertiliser or manure solves this.

A PROTIP: Get your soil tested! The Department of Agricultural Research Services (DARS) can test soil for pH and nutrients. This saves money – you only buy what your soil needs.

Remember: Most crops prefer pH 6.0-7.0. Add lime to acidic soil; add sulphur or organic matter to alkaline soil. Organic matter improves all soils. CEC is higher in clay and organic soils. Nutrient deficiencies show specific leaf symptoms.`,
  summary: 'Most crops prefer pH 6.0-7.0. Acidic soil (lime needed); alkaline soil (sulphur or organic matter needed). Organic matter improves structure, water holding, and nutrients. CEC measures nutrient-holding capacity (clay and organic matter have high CEC). Nutrient deficiencies cause specific leaf symptoms.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Maize Nitrogen Deficiency', description: 'Yellow-green maize leaves indicate low nitrogen.' },
    { title: 'Tea Soils', description: 'Tea-growing areas in Mulanje have acidic soils.' }
  ],
  practiceQuestions: [
    { question: 'What is the optimal pH range for most crops?', answer: '6.0-7.0', hint: 'Slightly acidic to neutral' },
    { question: 'What does low CEC in sandy soil mean?', answer: 'Soil cannot hold many nutrients', hint: 'Nutrients wash away' }
  ]
},

// Topic: Crop Husbandry - Vegetables (2 lessons)
{
  subject: 'Agriculture',
  form: 'Form 3',
  topic: 'Vegetable Production',
  lessonNumber: 1,
  lessonTitle: 'Growing Vegetables - Site Selection and Nursery',
  lessonId: 'agriculture-f3-vegetables-1',
  order: 72,
  learningObjectives: [
    'Select a suitable site for vegetable production',
    'Construct a vegetable nursery',
    'Prepare vegetable beds',
    'Explain the importance of nursery management'
  ],
  introduction: 'Hello, vegetable farmer! Vegetables are important for nutrition and income. Growing vegetables requires more care than field crops, but the rewards are greater. Today, you will learn how to select a good site for vegetables and how to raise healthy seedlings in a nursery.',
  keyPoints: [
    'Choose site with: sunlight, water source, good soil, protection from wind',
    'Vegetable nursery: protected area where seedlings are raised before transplanting',
    'Nursery advantages: better germination, easier management, stronger seedlings',
    'Make raised beds (1 m wide) for drainage and easy access',
    'Water nursery regularly, protect from sun (shade) and rain (cover)'
  ],
  detailedContent: `Let me explain VEGETABLE PRODUCTION.

SITE SELECTION FOR VEGETABLES:

Choose a site with:

1. FULL SUNLIGHT: Vegetables need 6-8 hours of direct sun daily.
2. WATER SOURCE: Near river, well, borehole, or tap for irrigation.
3. GOOD SOIL: Well-drained loam with organic matter. Avoid waterlogged areas.
4. PROTECTION: Windbreak (trees or fence) to protect delicate seedlings.
5. PREVIOUS CROP: Avoid land where same family vegetables grew (prevent disease).

VEGETABLE NURSERY:

A nursery is a protected area where seedlings are raised before transplanting to the main garden.

Advantages of using a nursery:
- Better germination (controlled conditions)
- Easier to water and weed small area
- Protect seedlings from pests and harsh weather
- Stronger, healthier seedlings
- Save seed (only plant healthy seedlings)

CONSTRUCTING A NURSERY:

1. Choose site: Near water, protected from wind, good drainage.
2. Size: As needed – enough for your garden (e.g., 2 m × 1 m).
3. Clear and level the ground.
4. Construct shade (if needed): Bamboo poles + grass or shade cloth for hot areas.
5. Construct frame: Raised beds 1 m wide (any length).

MAKING NURSERY BEDS:

1. Dig soil to 15 cm depth.
2. Remove stones, weeds, debris.
3. Mix in compost or well-rotted manure (5 kg per square metre).
4. Rake level.
5. Make raised beds (10-15 cm high) for drainage.

SOWING SEEDS IN NURSERY:

1. Make shallow furrows (rows) 5-10 cm apart.
2. Sow seeds thinly (not too thick – prevents overcrowding).
3. Cover seeds lightly with soil (depth = 2-3 times seed diameter).
4. Water gently (use fine spray).
5. Cover with dry grass or straw (keeps moisture, protects from sun).

NURSERY MANAGEMENT:

- WATER daily or twice daily (keep moist, not waterlogged).
- REMOVE weeds as soon as they appear.
- REMOVE cover after seeds germinate (5-10 days).
- APPLY fertiliser? Not needed in nursery – transplant soon.
- HARDEN OFF: Reduce water a week before transplanting to strengthen seedlings.

Pests in nursery:
- Cutworms: Kill seedlings at base – check daily.
- Birds: Use bird scarers or netting.
- Damping off (fungus): Caused by overwatering – improve drainage, thin seedlings.

Common vegetables grown in nurseries in Malawi:
- Tomatoes
- Onions
- Cabbage
- Lettuce
- Peppers
- Eggplant

In Malawi, many farmers start tomatoes and cabbage in nurseries before transplanting to the main garden.

A PROTIP: Keep a nursery log – record planting date, germination date, variety, and any problems. This helps improve next season.

Remember: Choose site with sun, water, good soil, and wind protection. Nurseries protect young seedlings. Make raised beds (1 m wide). Sow seeds thinly, cover lightly. Water regularly. Harden off before transplanting.`,
  summary: 'Choose vegetable site with full sunlight, water source, good soil, and wind protection. Nursery protects young seedlings; provides better germination and stronger plants. Make raised beds 1 m wide; add compost. Sow seeds thinly, water regularly, and harden off before transplanting.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Tomato Nursery', description: 'Many Malawian farmers start tomatoes in nurseries near water sources.' },
    { title: 'Cabbage Production', description: 'Cabbage seedlings are raised in nurseries for 4-6 weeks before transplanting.' }
  ],
  practiceQuestions: [
    { question: 'Why use a nursery for vegetables?', answer: 'Better germination, easier management, stronger seedlings', hint: 'Protected environment' },
    { question: 'How wide should vegetable beds be?', answer: '1 metre', hint: 'Easy to reach from both sides' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 3',
  topic: 'Vegetable Production',
  lessonNumber: 2,
  lessonTitle: 'Transplanting and Garden Management',
  lessonId: 'agriculture-f3-vegetables-2',
  order: 73,
  learningObjectives: [
    'Transplant seedlings correctly',
    'Prepare vegetable garden beds',
    'Apply fertiliser to vegetables',
    'Control pests and diseases in vegetables'
  ],
  introduction: 'Welcome back! After raising seedlings in the nursery, it is time to transplant them to the main garden. Today, you will learn how to transplant correctly, prepare the garden, and manage vegetables for the best yield.',
  keyPoints: [
    'Transplant when seedlings have 4-6 true leaves (4-6 weeks old)',
    'Water nursery thoroughly before transplanting',
    'Transplant in evening or cloudy day (reduces stress)',
    'Spacing depends on crop: tomatoes 50-60 cm, cabbage 40-50 cm, onions 5-10 cm',
    'Apply basal fertiliser at transplanting; top-dress later',
    'Control pests: aphids, red spider mites, caterpillars, whiteflies'
  ],
  detailedContent: `Let me explain TRANSPLANTING and GARDEN MANAGEMENT.

WHEN TO TRANSPLANT:

Transplant seedlings when:
- 4-6 weeks old
- Have 4-6 true leaves (not the first seed leaves)
- Are 10-15 cm tall (depending on crop)

Do not leave too long in nursery – seedlings become root-bound and stunted.

PREPARING THE GARDEN BED:

1. Clear area of weeds.
2. Dig or plough to 20-30 cm depth.
3. Remove stones and debris.
4. Add compost or manure (2-5 kg per square metre).
5. Rake level.
6. Make raised beds or ridges (improves drainage).

TRANSPLANTING PROCEDURE:

Step 1: Water nursery thoroughly 2-3 hours before transplanting (moist soil holds roots better).

Step 2: Prepare planting holes at correct spacing.

Step 3: Gently remove seedlings from nursery – use a trowel, keep soil on roots.

Step 4: Place seedling in hole at same depth as in nursery (do not bury stem).

Step 5: Fill hole with soil and press gently.

Step 6: Water immediately after transplanting.

Step 7: Provide shade if hot (leaves or shade cloth for 2-3 days).

SPACING FOR COMMON VEGETABLES:

| Vegetable | Between plants | Between rows |
|-----------|---------------|--------------|
| Tomato | 50-60 cm | 75-100 cm |
| Cabbage | 40-50 cm | 50-60 cm |
| Onion | 5-10 cm | 20-30 cm |
| Lettuce | 25-30 cm | 30-40 cm |
| Pepper | 40-50 cm | 60-75 cm |
| Eggplant | 50-60 cm | 75-100 cm |

FERTILISER APPLICATION:

Basal fertiliser (at transplanting):
- Use Compound D or NPK 23:21:0 (or similar)
- Apply in hole or along row before planting
- Rate: 100-150 kg per hectare

Top-dressing (after transplanting):
- Apply Urea (nitrogen) 3-4 weeks after transplanting
- Rate: 50-100 kg per hectare
- Apply again for long-season crops

Starter solution (alternative for small gardens):
- Mix 1 tablespoon of complete fertiliser in 10 litres water
- Apply 0.5 litre per plant at transplanting

WATERING:

- Water immediately after transplanting
- Water daily for first week
- After establishment: every 2-3 days (depending on rain)
- Water in morning or evening

PEST AND DISEASE CONTROL:

Common vegetable pests in Malawi:

| Pest | Signs | Control |
|------|-------|---------|
| Aphids | Curled leaves, sticky residue | Soap solution, neem oil |
| Red spider mites | Tiny webs, speckled leaves | Spray water, neem oil |
| Caterpillars | Holes in leaves | Pick off, Bt insecticide |
| Whiteflies | White insects under leaves | Yellow sticky traps, neem oil |
| Cutworms | Seedlings cut at base | Collar around stem |

Common diseases:
- Damping off (seedlings rot): Improve drainage, reduce water
- Late blight (tomatoes): Brown spots on leaves – copper fungicide
- Powdery mildew: White powder on leaves – sulphur spray

In Malawi, many small-scale vegetable farmers use integrated pest management (IPM):
- Rotate crops each season
- Remove infected plants
- Use neem sprays (locally available)
- Encourage natural enemies (ladybirds eat aphids)

A PROTIP: After transplanting, mulch around plants with dry grass or leaves. Mulch conserves water, suppresses weeds, and prevents soil splashing onto leaves (reduces disease).

Remember: Transplant at 4-6 weeks, water nursery first, transplant in evening. Space correctly. Apply basal fertiliser at transplanting, top-dress later. Water regularly. Control pests with neem, soap, or IPM. Mulch to conserve water and suppress weeds.`,
  summary: 'Transplant seedlings when they have 4-6 true leaves (4-6 weeks old). Water nursery before transplanting. Space correctly (tomato 50-60 cm). Apply basal fertiliser at transplanting; top-dress with nitrogen later. Control pests with neem and integrated pest management. Mulch after transplanting.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Tomato Production', description: 'Tomatoes are a high-value crop for Malawian farmers – use stakes for support.' },
    { title: 'Neem Spray', description: 'Neem leaves can be soaked in water to make organic insecticide.' }
  ],
  practiceQuestions: [
    { question: 'When should you transplant seedlings?', answer: 'At 4-6 weeks old, when they have 4-6 true leaves', hint: 'Not too early or too late' },
    { question: 'Why mulch vegetable gardens?', answer: 'Conserves water, suppresses weeds, prevents disease', hint: 'Cover the soil' }
  ]
},

// Topic: Livestock - Pigs (2 lessons)
{
  subject: 'Agriculture',
  form: 'Form 3',
  topic: 'Pig Production',
  lessonNumber: 1,
  lessonTitle: 'Breeds and Housing for Pigs',
  lessonId: 'agriculture-f3-pigs-1',
  order: 74,
  learningObjectives: [
    'Identify common pig breeds in Malawi',
    'Describe good pig housing',
    'Explain management systems for pigs',
    'Select breeding stock'
  ],
  introduction: 'Good day, livestock farmer! Pigs are an excellent source of meat and income. They grow quickly, produce many piglets, and can eat a variety of feeds. Today, you will learn about pig breeds, housing, and how to choose good breeding animals.',
  keyPoints: [
    'Common breeds in Malawi: Large White, Landrace, Duroc, and crosses',
    'Good pig house: dry, well-ventilated, easy to clean, protects from weather',
    'Management systems: free-range (not recommended), semi-intensive (shed with yard), intensive (fully confined)',
    'Intensive system gives best growth and disease control',
    'Select breeding sows: good mother, 12-14 teats, good health, sound legs',
    'Select boar: aggressive (but not dangerous), good growth rate, good conformation'
  ],
  detailedContent: `Let me explain PIG PRODUCTION.

PIG BREEDS IN MALAWI:

| Breed | Colour | Characteristics |
|-------|--------|-----------------|
| Large White | White | Long body, upright ears, good mother, many piglets |
| Landrace | White | Long body, floppy ears, good milk production |
| Duroc | Red/brown | Rapid growth, hardy, good meat quality |
| Crossbred | Varies | Combines best traits (e.g., Large White × Landrace) |

Most Malawian pig farmers use crossbred pigs for better performance.

PIG HOUSING REQUIREMENTS:

A good pig house should have:

1. DRY: Keep rain out, proper drainage.
2. WELL-VENTILATED: Airflow reduces disease.
3. EASY TO CLEAN: Concrete floor with slope for drainage.
4. PROTECTED: From sun, rain, wind, and predators.
5. SPACIOUS: Enough room for pigs to move.

Space requirements:
- Weaner piglets: 0.5-0.7 m² per pig
- Growing pigs (30-60 kg): 0.7-1.0 m² per pig
- Finishing pigs (60-100 kg): 1.0-1.5 m² per pig
- Pregnant sow: 1.5-2.0 m²
- Sow with piglets: 4-5 m²

Pig house design (simple):
- Concrete floor with slope (water runs out)
- Sleeping area: Solid walls (no drafts)
- Feeding area: Trough along front
- Outdoor run (exercise)
- Roof: Iron sheets with eaves for ventilation

MANAGEMENT SYSTEMS:

1. EXTENSIVE (free-range) – NOT RECOMMENDED:
- Pigs roam freely
- Advantages: Low cost
- Disadvantages: Diseases, parasites, theft, poor growth

2. SEMI-INTENSIVE:
- Pigs have shelter + outdoor run
- Advantages: More space, lower feed costs (some grazing)
- Disadvantages: More labour, disease risk from outside

3. INTENSIVE (RECOMMENDED):
- Pigs confined in pens
- Advantages: Best growth, disease control, easier management, higher productivity
- Disadvantages: Higher cost (feed, housing)

SELECTING BREEDING STOCK:

Selecting a GILT (young female for breeding):
- Age: 6-8 months
- Weight: 80-100 kg
- Teats: 12-14 well-spaced, functional teats
- Legs: Strong, sound
- Health: Vaccinated, no signs of disease
- Mother: Good mothering ability

Selecting a BOAR (male for breeding):
- Temperament: Aggressive (but not dangerous!) – shows interest in females
- Conformation: Strong legs, deep body, good muscling
- Testicles: Two, well-developed
- Growth rate: Fast (from good background)
- Health: No disease, vaccinated

Signs of heat (oestrus) in sows:
- Swollen red vulva
- Restless, mounts other pigs
- Stands still when pressure applied to back ("standing heat")
- Lasts 2-3 days, repeats every 21 days

Breeding:
- Mate sow on second day of heat
- Mate again 12-24 hours later
- Gestation: 114 days (3 months, 3 weeks, 3 days)

In Malawi, many smallholder pig farmers use intensive or semi-intensive systems with crossbred pigs.

A PROTIP: Keep records! Record breeding dates, farrowing dates, number of piglets, weaning weights, and health treatments. Good records improve management.

Remember: Common breeds: Large White, Landrace, Duroc, crosses. Good housing: dry, ventilated, cleanable. Intensive system gives best growth. Select gilts with 12-14 teats and good health. Select boars with good growth and conformation. Gestation = 114 days.`,
  summary: 'Common pig breeds in Malawi: Large White, Landrace, Duroc, and crosses. Good pig housing must be dry, ventilated, and easy to clean. Intensive system gives best growth and disease control. Select gilts with 12-14 good teats. Gestation is 114 days.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Crossbred Pigs', description: 'Most Malawian pig farmers use Large White × Landrace crosses for hybrid vigour.' },
    { title: 'Concrete Floors', description: 'Concrete floors with slope make cleaning easier and reduce disease.' }
  ],
  practiceQuestions: [
    { question: 'How many teats should a good gilt have?', answer: '12-14 well-spaced teats', hint: 'To feed many piglets' },
    { question: 'How long is pig gestation?', answer: '114 days (3 months, 3 weeks, 3 days)', hint: 'Farrowing' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 3',
  topic: 'Pig Production',
  lessonNumber: 2,
  lessonTitle: 'Feeding and Health Management of Pigs',
  lessonId: 'agriculture-f3-pigs-2',
  order: 75,
  learningObjectives: [
    'Explain pig feed requirements',
    'Describe feeding programme for pigs at different stages',
    'Identify common pig diseases',
    'Implement disease prevention measures'
  ],
  introduction: 'Welcome back! Feeding is the biggest cost in pig production (60-70% of costs). Good feeding means good growth and profit. Health management prevents losses. Today, you will learn what to feed pigs and how to keep them healthy.',
  keyPoints: [
    'Pigs need energy (maize), protein (soya, fish meal), minerals, vitamins, and water',
    'Creep feed for piglets (starting at 2 weeks)',
    'Grower feed (20-50 kg pigs), finisher feed (50 kg+ pigs)',
    'Sow feed during pregnancy and lactation',
    'Common diseases: African Swine Fever (ASF), E. coli, worms, mange',
    'Prevention: vaccination, hygiene, quarantine new pigs, foot bath'
  ],
  detailedContent: `Let me explain FEEDING AND HEALTH MANAGEMENT OF PIGS.

PIG NUTRIENT REQUIREMENTS:

Pigs need:
- ENERGY: From maize, maize bran, wheat bran
- PROTEIN: From soya bean meal, groundnut cake, fish meal
- MINERALS: Calcium, phosphorus, salt
- VITAMINS: A, D, E, B-complex
- WATER: Clean, fresh water always available

FEEDING PROGRAMME BY STAGE:

PIGLETS (newborn to 4 weeks):
- First 1-2 weeks: Only sow's milk (colostrum first 24 hours is essential)
- Week 2: Introduce CREEP FEED (small pellets, palatable)
- Creep feed: Maize + soya + milk powder + minerals
- By weaning (week 4-5): Eating 200-300 g creep feed per day

WEANER PIGLETS (5-10 weeks, 5-20 kg):
- Feed: Starter/grower ration (18% protein)
- Feed 2-3 times daily
- Amount: 5% of body weight

GROWING PIGS (10-20 weeks, 20-50 kg):
- Feed: Grower ration (16% protein)
- Feed 2 times daily
- Amount: 3-4% of body weight

FINISHING PIGS (20-24 weeks, 50-100 kg):
- Feed: Finisher ration (14% protein)
- Feed 2 times daily
- Amount: 2-3% of body weight

PREGNANT SOW:
- Feed: Sow ration (12-14% protein)
- Amount: 2-2.5 kg per day (increase in last month)
- Limit fatness (overweight sows have farrowing problems)

LACTATING SOW (with piglets):
- Feed: Lactation ration (16-18% protein)
- Amount: Ad libitum (as much as she will eat)
- Increase gradually after farrowing

SAMPLE PIG FEED MIXTURES (for smallholder farmers):

Creep feed (18% protein):
- Maize: 65%
- Soya bean meal: 20%
- Fish meal: 10%
- Minerals/vitamins: 5%

Grower feed (16% protein):
- Maize: 70%
- Soya bean meal: 15%
- Fish meal: 8%
- Wheat bran: 5%
- Minerals/vitamins: 2%

Finisher feed (14% protein):
- Maize: 75%
- Soya bean meal: 10%
- Fish meal: 5%
- Wheat bran: 8%
- Minerals/vitamins: 2%

COMMON PIG DISEASES:

| Disease | Cause | Signs | Prevention |
|---------|-------|-------|------------|
| African Swine Fever (ASF) | Virus | High fever, death within days | No vaccine – strict biosecurity, don't feed swill |
| E. coli (scours) | Bacteria | Diarrhoea in piglets | Hygiene, vaccinate sow |
| Swine dysentery | Bacteria | Bloody diarrhoea | Hygiene, antibiotics |
| Worms (roundworm) | Parasite | Poor growth, coughing | Regular deworming (every 3 months) |
| Mange | Mite | Itching, thick skin | Acaricide spray |
| Piglet anaemia | Iron deficiency | Pale, weak | Iron injection at 3 days |

AFRICAN SWINE FEVER (ASF) – SERIOUS THREAT:

ASF is a viral disease with 100% death rate. No treatment or vaccine.

Prevention (most important):
- DO NOT feed pigs swill (cooked kitchen waste from hotels/restaurants)
- Quarantine new pigs for 2 weeks
- Limit visitors
- Disinfect boots and equipment
- Report sick pigs to vet immediately

BIOSECURITY (disease prevention):

1. FOOTBATH: disinfectant at entrance
2. QUARANTINE: New pigs separate for 2 weeks
3. CLEANING: Clean pens daily, disinfect weekly
4. VACCINATION: For E. coli, erysipelas (where available)
5. DEWORMING: Every 3 months
6. RODENT CONTROL: Rats carry diseases
7. NO SWILL FEEDING: Risk of ASF

SIGNS OF SICK PIG:
- Not eating
- Lethargic, lying down
- Coughing or diarrhoea
- High fever
- Separates from group

If sick, isolate immediately and call vet.

In Malawi, African Swine Fever is a major threat. Never feed pigs swill (kitchen waste containing pork). Many outbreaks have been traced to swill feeding.

A PROTIP: Keep a "closed herd" – breed your own sows and do not buy pigs from unknown sources. This reduces disease risk.

Remember: Feed pigs according to stage (creep, grower, finisher, sow). Protein levels decrease as pigs grow. Prevent ASF with strict biosecurity – no swill feeding, quarantine new pigs. Deworm regularly. Keep pens clean. Isolate sick pigs immediately.`,
  summary: 'Feed pigs according to stage: creep (piglets), grower (20-50 kg), finisher (50+ kg), sow ration (pregnant/lactating). African Swine Fever (ASF) is the biggest threat – prevent with biosecurity (no swill feeding, quarantine new pigs). Deworm every 3 months. Keep pens clean.',
  estimatedTime: '24 mins',
  malawiExamples: [
    { title: 'ASF in Malawi', description: 'African Swine Fever outbreaks have devastated pig farmers. Never feed swill.' },
    { title: 'Local Feed Ingredients', description: 'Maize bran and groundnut cake are locally available pig feeds.' }
  ],
  practiceQuestions: [
    { question: 'What is the biggest disease threat to pigs in Malawi?', answer: 'African Swine Fever (ASF)', hint: '100% fatal' },
    { question: 'How often should pigs be dewormed?', answer: 'Every 3 months', hint: 'Regular schedule' }
  ]
}
,

// ======================================================================
// ENGLISH FORM 4
// ======================================================================

// Topic: Composition Writing (2 lessons)
{
  subject: 'English',
  form: 'Form 4',
  topic: 'Composition Writing',
  lessonNumber: 1,
  lessonTitle: 'Narrative and Descriptive Essays',
  lessonId: 'english-f4-composition-1',
  order: 76,
  learningObjectives: [
    'Write narrative essays',
    'Write descriptive essays',
    'Use vivid language and sensory details',
    'Organise essays with clear structure'
  ],
  introduction: 'Hello, writer! Essay writing is an important skill for exams and for life. Today, you will learn about NARRATIVE essays (telling a story) and DESCRIPTIVE essays (painting a picture with words). Both require creativity, organisation, and attention to detail.',
  keyPoints: [
    'Narrative essay: tells a story about a real or imagined event',
    'Narrative structure: introduction (setting, characters) → rising action → climax → falling action → conclusion',
    'Descriptive essay: describes a person, place, object, or event using sensory details',
    'Descriptive structure: introduction (overall impression) → body (details by sight, sound, smell, touch, taste) → conclusion',
    'Use vivid verbs and specific nouns (avoid "good", "nice", "bad")'
  ],
  detailedContent: `Let me explain COMPOSITION WRITING.

NARRATIVE ESSAY:

A narrative essay tells a story. It can be about something that happened to you (personal narrative) or an imagined event.

Structure of a narrative essay:

1. INTRODUCTION (Paragraph 1):
   - Hook: Interesting opening sentence
   - Setting: Where and when did the story happen?
   - Characters: Who is in the story?
   - Thesis: What is the main point of the story?

2. RISING ACTION (Paragraphs 2-3):
   - Events leading to the climax
   - Build tension or interest

3. CLIMAX (Paragraph 4):
   - The most exciting or important moment
   - The turning point

4. FALLING ACTION (Paragraph 5):
   - What happened after the climax?
   - How did things resolve?

5. CONCLUSION (Paragraph 6):
   - What did you learn?
   - Reflect on the experience

EXAMPLE NARRATIVE TOPICS:
- "The day I will never forget"
- "My first day at secondary school"
- "A lesson I learned from farming"
- "An accident I witnessed"

DESCRIPTIVE ESSAY:

A descriptive essay paints a picture with words. It uses sensory details (sight, sound, smell, touch, taste) to make the reader feel like they are there.

Structure of a descriptive essay:

1. INTRODUCTION (Paragraph 1):
   - Introduce the subject
   - Give overall impression
   - Thesis: What is special about this subject?

2. BODY (Paragraphs 2-4):
   - Paragraph 2: What do you SEE? (colours, shapes, sizes, movement)
   - Paragraph 3: What do you HEAR? (sounds, voices, music, silence)
   - Paragraph 4: What do you SMELL, TOUCH, TASTE? (odours, textures, flavours)

3. CONCLUSION (Paragraph 5):
   - Summarise main impression
   - Why is this subject memorable?

EXAMPLE DESCRIPTIVE TOPICS:
- "A Malawian market"
- "My grandmother's kitchen"
- "The sunrise over Lake Malawi"
- "A busy school morning"

WRITING TIPS:

Use VIVID VERBS (not just "walked" but "strolled", "marched", "tiptoed").

Use SPECIFIC NOUNS (not just "food" but "nsima", "chambo", "mango").

Use SENSORY DETAILS (tell what you see, hear, smell, feel, taste).

Avoid weak words: "good", "nice", "bad", "a lot".

Example (weak): "The market was nice. There was a lot of food. The people were good."

Example (strong): "The air at Limbe Market smelled of ripe mangoes and fresh fish. Vendors called out to passersby, their voices competing with the clucking of chickens and the rumble of minibuses."

USE FIGURATIVE LANGUAGE:

- SIMILE: comparing with "like" or "as" ("as busy as an anthill")
- METAPHOR: direct comparison ("the market was a beehive of activity")
- PERSONIFICATION: giving human qualities to objects ("the sun smiled down")

In Malawi, Common narrative topics for MSCE exams:
- "Describe an accident you witnessed"
- "Narrate an experience that taught you a valuable lesson"
- "Describe a traditional ceremony in your community"

A PROTIP: Write an outline before you start. Plan your introduction, body paragraphs, and conclusion. This saves time and makes your essay clearer.

Remember: Narrative tells a story (introduction, rising action, climax, resolution, lesson). Descriptive paints a picture (sensory details: see, hear, smell, touch, taste). Use vivid verbs and specific nouns. Include figurative language (similes, metaphors). Always plan with an outline.`,
  summary: 'Narrative essays tell a story with an introduction, rising action, climax, falling action, and conclusion. Descriptive essays paint a picture using sensory details (sight, sound, smell, touch, taste). Use vivid verbs, specific nouns, and figurative language. Always outline before writing.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'MSCE Exam Topic', description: '"Describe a market in your community" – use sensory details.' },
    { title: 'Personal Narrative', description: '"The first time I went fishing on Lake Malawi" – tell the story.' }
  ],
  practiceQuestions: [
    { question: 'What four types of details are used in descriptive writing?', answer: 'Sight, sound, smell, touch, taste (any 4)', hint: 'Five senses' },
    { question: 'What is the climax of a narrative essay?', answer: 'The most exciting or important moment; the turning point', hint: 'Peak of the story' }
  ]
},
{
  subject: 'English',
  form: 'Form 4',
  topic: 'Composition Writing',
  lessonNumber: 2,
  lessonTitle: 'Expository and Argumentative Essays',
  lessonId: 'english-f4-composition-2',
  order: 77,
  learningObjectives: [
    'Write expository essays',
    'Write argumentative essays',
    'Present evidence to support claims',
    'Organise essays logically'
  ],
  introduction: 'Hello again! Not all essays tell stories or describe scenes. Some EXPLAIN (expository) and others PERSUADE (argumentative). Today, you will learn how to write essays that inform readers and essays that convince them.',
  keyPoints: [
    'Expository essay: explains or informs about a topic (factual, neutral)',
    'Argumentative essay: takes a position and tries to persuade the reader',
    'Expository structure: introduction (topic) → body (facts, examples, steps) → conclusion',
    'Argumentative structure: introduction (thesis) → body (arguments FOR) → counter-arguments (rebuttal) → conclusion',
    'Use evidence: facts, statistics, examples, expert opinions, personal experience'
  ],
  detailedContent: `Let me explain EXPOSITORY and ARGUMENTATIVE essays.

EXPOSITORY ESSAY:

An expository essay explains or informs. It presents facts without the writer's opinion. The purpose is to teach the reader.

Types of expository essays:
- Process (how to do something)
- Compare/contrast
- Cause/effect
- Definition

Structure of expository essay:

1. INTRODUCTION (Paragraph 1):
   - Hook to interest reader
   - Background information
   - Thesis statement (what the essay will explain)

2. BODY (Paragraphs 2-4):
   - Each paragraph covers ONE main point
   - Topic sentence at beginning of paragraph
   - Evidence: facts, statistics, examples, steps
   - Transition words: first, next, then, finally, for example, in addition

3. CONCLUSION (Paragraph 5):
   - Restate thesis (in different words)
   - Summarise main points
   - Final thought

EXAMPLE EXPOSITORY TOPICS:
- "How to prepare nsima" (process)
- "The importance of maize in Malawi" (cause/effect)
- "Compare subsistence and commercial farming" (compare/contrast)

PERSUASIVE (ARGUMENTATIVE) ESSAY:

A persuasive essay takes a position and tries to convince the reader to agree. The writer gives arguments FOR their position and answers arguments AGAINST.

Structure of persuasive essay:

1. INTRODUCTION (Paragraph 1):
   - Hook
   - Background on the issue
   - THESIS: Your position (what you want to prove)

2. ARGUMENTS FOR (Paragraphs 2-4):
   - Paragraph 2: Strongest argument + evidence
   - Paragraph 3: Second argument + evidence
   - Paragraph 4: Third argument + evidence

3. COUNTER-ARGUMENTS (Paragraph 5):
   - Acknowledge opposing views
   - Rebut (explain why your position is still stronger)

4. CONCLUSION (Paragraph 6):
   - Restate thesis
   - Summarise arguments
   - Call to action (what should the reader do?)

EXAMPLE PERSUASIVE TOPICS:
- "All students should study agriculture"
- "Malawi should invest more in irrigation"
- "Farmers should use organic fertilisers instead of chemical"
- "Every village should have a secondary school"

USING EVIDENCE:

Good arguments need proof. Use:

- FACTS: "Malawi's population is growing at 2.8% per year."
- STATISTICS: "80% of Malawians depend on agriculture."
- EXAMPLES: "In Dedza, farmers who used compost increased yields by 30%."
- EXPERT OPINIONS: "According to the Ministry of Agriculture..."
- PERSONAL EXPERIENCE: "When my family started crop rotation..."

TRANSITION WORDS:

For expository (sequence): first, second, next, then, finally, after that, meanwhile

For argumentative (adding points): furthermore, moreover, in addition, also, equally important

For argumentative (contrast): however, on the other hand, although, despite, in contrast

For argumentative (conclusion): therefore, thus, consequently, as a result, for this reason

In Malawi, both types appear in MSCE exams:
- Expository: "Explain the importance of saving water during dry season."
- Persuasive: "Should students be required to wear school uniforms? Give reasons."

A PROTIP: For persuasive essays, imagine someone who disagrees with you. What would they say? Answer their objections in your counter-argument paragraph – this makes your essay stronger.

Remember: Expository essays EXPLAIN (facts, neutral). Argumentative essays PERSUADE (position + evidence + counter-arguments). Use evidence: facts, statistics, examples, expert opinions. Use transition words to connect ideas. Acknowledge and rebut counter-arguments for stronger persuasive essays.`,
  summary: 'Expository essays explain or inform (process, compare/contrast, cause/effect) using facts. Argumentative essays persuade (take a position, give evidence, address counter-arguments). Use evidence (facts, statistics, examples, expert opinions). Use transition words to connect ideas.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Expository Topic', description: 'Explain the steps of planting maize.' },
    { title: 'Argumentative Topic', description: 'Should Malawi invest more in irrigation? Argue for or against.' }
  ],
  practiceQuestions: [
    { question: 'What is the difference between expository and argumentative essays?', answer: 'Expository explains facts; argumentative persuades with a position', hint: 'One informs, one convinces' },
    { question: 'Why include counter-arguments in a persuasive essay?', answer: 'To address opposing views and strengthen your position', hint: 'Anticipate objections' }
  ]
}
,

// ======================================================================
// AGRICULTURE FORM 4
// ======================================================================

// Topic: Agricultural Marketing (2 lessons)
{
  subject: 'Agriculture',
  form: 'Form 4',
  topic: 'Agricultural Marketing',
  lessonNumber: 1,
  lessonTitle: 'Marketing Channels and Functions',
  lessonId: 'agriculture-f4-marketing-1',
  order: 78,
  learningObjectives: [
    'Define agricultural marketing',
    'Identify marketing channels',
    'Explain marketing functions',
    'Describe the role of middlemen'
  ],
  introduction: 'Good day, agribusiness student! Growing crops is only half the job. You must also SELL them. Agricultural marketing involves getting farm products from the farmer to the consumer. Today, you will learn how marketing works and the different channels products take to reach buyers.',
  keyPoints: [
    'Agricultural marketing: activities involved in moving farm products from producer to consumer',
    'Marketing functions: buying, selling, transporting, storing, grading, processing, financing',
    'Marketing channels: path from farmer to consumer (farmer → trader → wholesaler → retailer → consumer)',
    'Middlemen (intermediaries) provide services but add to cost',
    'Cooperatives help farmers get better prices by selling together'
  ],
  detailedContent: `Let me explain AGRICULTURAL MARKETING.

WHAT IS AGRICULTURAL MARKETING?

Agricultural marketing includes all activities between producing a crop and the final consumer buying it:
- Assembling (collecting from many farmers)
- Grading (sorting by quality)
- Packaging
- Transport
- Storage
- Processing
- Selling

MARKETING CHANNELS:

The path a product takes from farmer to consumer:

CHANNEL 1: Farmer → Consumer (shortest)
- Farmer sells directly at farm gate or local market
- Example: Selling vegetables at roadside

CHANNEL 2: Farmer → Retailer → Consumer
- Farmer sells to shopkeeper who sells to customers

CHANNEL 3: Farmer → Wholesaler → Retailer → Consumer
- Farmer sells to large buyer who sells to shops

CHANNEL 4: Farmer → Agent → Wholesaler → Retailer → Consumer (longest)
- Many middlemen, each adds cost

In Malawi, common channels:
- Maize: Farmer → Trader → Wholesaler → Mill → Shop → Consumer
- Tobacco: Farmer → Auction → Buyer → Processor → Export
- Vegetables: Farmer → Market trader → Consumer (short)

MARKETING FUNCTIONS:

| Function | Description |
|----------|-------------|
| Buying | Purchasing from farmers |
| Selling | Finding buyers for products |
| Transport | Moving products (bicycle, ox-cart, lorry) |
| Storage | Keeping products until needed (cribs, silos, warehouses) |
| Grading | Sorting by size, quality, colour |
| Processing | Milling maize, shelling groundnuts, drying fish |
| Financing | Paying farmers, providing credit |
| Risk bearing | Price changes, spoilage, theft |

MIDDLEMEN (INTERMEDIARIES):

Middlemen are people who buy from farmers and sell to others.

Types of middlemen:
- TRADERS: Buy small amounts from farmers, sell to wholesalers
- WHOLESALERS: Buy large quantities, store, sell to retailers
- RETAILERS: Sell small quantities to consumers
- AGENTS: Represent buyers (e.g., tobacco auction floors)

Advantages of middlemen:
- Convenient for farmers (sell near home)
- Provide transport and storage
- Provide market information
- Take risk of price changes

Disadvantages of middlemen:
- Each adds cost → lower price for farmer
- Farmers may be exploited (low prices)
- Farmers have no control over final price

In Malawi, farmers often receive only 30-50% of the final consumer price. Middlemen take the rest.

COOPERATIVES:

A cooperative is when farmers join together to market their products.

Advantages:
- Sell in bulk (better prices)
- Share transport and storage costs
- Have more bargaining power
- Share profits

Examples in Malawi:
- Farmers' cooperatives for coffee, macadamia, groundnuts
- Dairy cooperatives for milk

A PROTIP: Keep records of prices – know the market price before you sell. Farmers who sell without knowing the price often get cheated.

Remember: Agricultural marketing moves products from farmer to consumer. Marketing functions include buying, selling, transport, storage, grading, processing, and financing. Middlemen provide services but add cost. Cooperatives help farmers get better prices by selling together.`,
  summary: 'Agricultural marketing is moving farm products from producer to consumer. Marketing functions include buying, selling, transport, storage, grading, processing. Middlemen provide services but add cost. Cooperatives help farmers get better prices by selling together.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Tobacco Marketing', description: 'Tobacco is sold at auction floors, a direct channel from farmer to buyer.' },
    { title: 'Maize Marketing', description: 'Farmers sell to traders who sell to ADMARC or private millers.' }
  ],
  practiceQuestions: [
    { question: 'What is a marketing channel?', answer: 'The path a product takes from producer to consumer', hint: 'Farmer to eater' },
    { question: 'How do cooperatives help farmers?', answer: 'Sell together for better prices, share costs, more bargaining power', hint: 'Strength in numbers' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 4',
  topic: 'Agricultural Marketing',
  lessonNumber: 2,
  lessonTitle: 'Marketing Problems and Solutions',
  lessonId: 'agriculture-f4-marketing-2',
  order: 79,
  learningObjectives: [
    'Identify marketing problems in Malawi',
    'Explain price fluctuations and their causes',
    'Describe ways to improve agricultural marketing',
    'Explain the role of ADMARC'
  ],
  introduction: 'Welcome back! Marketing agricultural products in Malawi has many challenges: poor roads, lack of storage, price fluctuations, and exploitation of farmers. Today, you will learn about these problems and possible solutions to improve farmers\' income.',
  keyPoints: [
    'Marketing problems: poor roads, lack of storage, price fluctuations, lack of market information, exploitation of farmers',
    'ADMARC: Agricultural Development and Marketing Corporation (government buyer)',
    'Price fluctuations: glut at harvest time (low prices), scarcity in lean season (high prices)',
    'Solutions: better roads, storage facilities, market information systems, cooperatives, value addition'
  ],
  detailedContent: `Let me explain MARKETING PROBLEMS AND SOLUTIONS.

MARKETING PROBLEMS IN MALAWI:

1. POOR TRANSPORTATION:
- Many rural areas have bad roads, especially in rainy season
- Farmers cannot get products to market
- Products spoil before reaching buyers
- High transport costs reduce farmer profit

2. LACK OF STORAGE:
- Farmers lack proper storage (cribs, silos)
- Maize spoils from moisture and pests
- Farmers forced to sell immediately after harvest (low prices)

3. PRICE FLUCTUATIONS:
- Harvest time: Too much supply, prices low
- Lean season: Scarce supply, prices high
- Farmers who sell at harvest get low prices
- Those who can store get higher prices later

4. LACK OF MARKET INFORMATION:
- Farmers do not know prices in different markets
- Traders know prices and exploit farmers
- Farmers may sell for 100 kwacha when price elsewhere is 200

5. EXPLOITATION BY MIDDLEMEN:
- Farmers are desperate to sell (need cash)
- Traders offer low prices
- Farmers cannot bargain effectively

6. PERISHABLE PRODUCTS:
- Vegetables, fruits, milk spoil quickly
- Must sell immediately or lose product
- Farmers get low prices

7. LIMITED PROCESSING:
- Selling raw products is less profitable
- Processed products (maize flour, peanut butter) have higher value

THE ROLE OF ADMARC:

ADMARC (Agricultural Development and Marketing Corporation) is a government parastatal.

Functions of ADMARC:
- Buy maize from farmers at announced price (price floor)
- Sell maize to consumers at affordable price (price ceiling)
- Provide storage (silos)
- Distribute fertiliser (subsidised)
- Stabilise prices (buy when price low, sell when price high)

Problems with ADMARC:
- Not always present in all areas
- Sometimes cannot buy because lacks funds
- May buy low quality, reject good maize

PRICE FLOOR AND CEILING:

- PRICE FLOOR: Minimum price ADMARC will pay (protects farmers)
- PRICE CEILING: Maximum price ADMARC charges consumers (protects consumers)

Example: ADMARC buys maize at 200 kwacha (floor) and sells at 250 kwacha (ceiling). Private traders may offer less than 200 or charge more than 250.

SOLUTIONS TO MARKETING PROBLEMS:

| Problem | Solution |
|---------|----------|
| Poor roads | Rural road rehabilitation |
| Lack of storage | Build silos, promote cribs, provide hermetic bags |
| Price fluctuations | ADMARC, storage, farmer cooperatives |
| Lack of information | Market information systems (mobile phones, radio) |
| Exploitation | Cooperatives, weighbridges, transparency |
| Perishable products | Processing (drying, canning), cold storage |
| Limited processing | Establish small-scale processing plants |

MARKET INFORMATION SYSTEMS:

Farmers can get market information through:
- Mobile phones (MiFarm, Farm Radio Trust)
- Radio price broadcasts
- Extension officers
- Farmer cooperatives

VALUE ADDITION:

Processing farm products increases value:

| Raw product | Processed product | Value increase |
|-------------|-------------------|----------------|
| Maize | Maize flour | 2-3x |
| Groundnuts | Peanut butter | 3-4x |
| Tomatoes | Tomato sauce | 3-5x |
| Milk | Yoghurt, cheese | 4-6x |
| Mangoes | Dried mango, juice | 3-5x |

In Malawi, small-scale value addition (maize milling, peanut butter making) can greatly increase farmer income.

A PROTIP: Do not sell everything at harvest. If possible, store some to sell later when prices are higher. Use hermetic bags (airtight) or chemical treatments to prevent spoilage.

Remember: Marketing problems include poor roads, lack of storage, price fluctuations, lack of information, exploitation, perishability, and limited processing. ADMARC provides a price floor and stabilises markets. Solutions include better roads, storage, market information, cooperatives, and value addition. Processing raw products increases value.`,
  summary: 'Marketing problems in Malawi: poor roads, lack of storage, price fluctuations, lack of market information, exploitation, perishability, limited processing. ADMARC provides price floor and stabilises markets. Solutions: better infrastructure, storage, market information systems, cooperatives, value addition.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'ADMARC', description: 'ADMARC buys maize at announced price and sells subsidised fertiliser.' },
    { title: 'Hermetic Bags', description: 'Airtight bags store grain without chemicals, reducing post-harvest loss.' }
  ],
  practiceQuestions: [
    { question: 'Why do prices drop at harvest time?', answer: 'Too much supply (glut) - all farmers sell at once', hint: 'Many sellers, same buyers' },
    { question: 'How can a farmer get higher price for tomatoes?', answer: 'Process into tomato sauce, or store in cool place', hint: 'Add value or delay sale' }
  ]
},

// Topic: Agribusiness (2 lessons)
{
  subject: 'Agriculture',
  form: 'Form 4',
  topic: 'Agribusiness',
  lessonNumber: 1,
  lessonTitle: 'Farm Planning and Record Keeping',
  lessonId: 'agriculture-f4-agribusiness-1',
  order: 80,
  learningObjectives: [
    'Explain the importance of farm planning',
    'Develop a simple farm plan',
    'Keep farm records',
    'Use records to improve decision making'
  ],
  introduction: 'Hello, farm manager! Farming is a business. To make profit, you must PLAN what to produce and RECORD what you do. Good records help you know if you are making money. Today, you will learn how to plan your farm and keep useful records.',
  keyPoints: [
    'Farm planning: deciding what to grow, how much to plant, when to plant, inputs needed',
    'Farm plan should include: crops/animals, area, planting dates, inputs, expected yields, expected income',
    'Farm records: all written information about farm operations',
    'Types of records: production records, financial records, inventory records, labour records',
    'Records help: track profit/loss, make better decisions, get loans, pay taxes'
  ],
  detailedContent: `Let me explain FARM PLANNING AND RECORD KEEPING.

FARM PLANNING:

Farm planning is deciding what to produce, how much, and how to do it.

Why plan?
- Uses resources efficiently (land, labour, money)
- Avoids waste
- Helps budget (know costs before planting)
- Predicts income
- Identifies problems before they happen

Elements of a farm plan:

1. CROPS/ANIMALS: What will you produce?
2. AREA/HOW MANY: How much land? How many animals?
3. PLANTING/BREEDING DATE: When?
4. INPUTS NEEDED: Seeds, fertiliser, pesticides, feed, medicine
5. LABOUR NEEDED: How many workers? How many hours?
6. EQUIPMENT NEEDED: Hoes, sprayers, ploughs
7. EXPECTED YIELD: How much will you harvest?
8. EXPECTED INCOME: What will you earn?
9. EXPECTED COSTS: What will you spend?
10. EXPECTED PROFIT: Income – Costs

SAMPLE FARM PLAN (1 hectare maize):

| Item | Details |
|------|---------|
| Crop | Maize (SC 419) |
| Area | 1 hectare |
| Planting | 15 November (after first rains) |
| Seeds | 10 kg |
| Fertiliser | 100 kg Compound D, 100 kg Urea |
| Labour | Family labour, 1 extra worker for weeding |
| Expected yield | 3,500 kg (70 bags) |
| Expected price | 250 kwacha/kg |
| Expected income | 875,000 kwacha |
| Expected costs | Fertilisers: 150,000, Seeds: 20,000, Labour: 50,000, Transport: 30,000 |
| Expected profit | 625,000 kwacha |

FARM RECORDS:

Farm records are written information about what happens on the farm.

Why keep records?
- KNOW if you are making profit (not just guessing)
- COMPARE different crops or methods
- PLAN better for next season
- GET LOANS (banks want to see records)
- PAY TAXES correctly
- TRACK expenses and income

TYPES OF RECORDS:

1. PRODUCTION RECORDS:
- What was planted? When? Where?
- How much harvested?
- Problems (pests, diseases, drought)
- Solutions used

2. FINANCIAL RECORDS:
- What you SPENT (inputs, labour, transport)
- What you EARNED (sales)
- Net profit or loss

3. INVENTORY RECORDS:
- What you HAVE (tools, seeds, fertiliser, feed)
- What you USED
- What needs REPLACING

4. LABOUR RECORDS:
- Who worked? When? Hours?
- What task?
- Payment made?

5. LIVESTOCK RECORDS:
- Animals born, died, sold
- Breeding dates
- Health treatments
- Milk/egg production

SAMPLE FINANCIAL RECORD:

| Date | Item | Quantity | Unit Price | Total | In/Out |
|------|------|----------|------------|-------|--------|
| 1 Nov | Seeds (maize) | 10 kg | 2,000 | 20,000 | Out |
| 10 Dec | Compound D | 100 kg | 1,000 | 100,000 | Out |
| 15 Dec | Labour (weeding) | 2 days | 10,000 | 20,000 | Out |
| 15 Apr | Maize sales | 3,000 kg | 250 | 750,000 | In |
| | NET PROFIT | | | | 610,000 |

Simple record keeping (for small farmers):
- Keep a NOTEBOOK
- Write down everything you spend
- Write down everything you receive
- Write down problems and what worked well

In Malawi, farmers who keep records often earn more because they know which crops are profitable.

A PROTIP: Take photos with your phone – photos of yields, crop problems, receipts. This is a form of record keeping that can help you remember and show others.

Remember: Farm planning decides what, how much, and when to produce. Elements: crops, area, inputs, labour, expected yield, expected income, costs, profit. Farm records include production, financial, inventory, labour, and livestock records. Records help you know if you are making profit and plan better.`,
  summary: 'Farm planning involves deciding what and how much to produce, calculating inputs, labour, expected yield, income, costs, and profit. Farm records (production, financial, inventory, labour, livestock) help track profit, make better decisions, and get loans. Simple notebooks work for small farmers.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Maize Budget', description: 'Calculate expected profit before planting to decide if worth it.' },
    { title: 'Simple Notebook', description: 'Many successful smallholder farmers keep a notebook of expenses and income.' }
  ],
  practiceQuestions: [
    { question: 'Why keep farm records?', answer: 'To track profit/loss, make better decisions, get loans', hint: 'Know if you are making money' },
    { question: 'What is included in a farm plan?', answer: 'Crops, area, inputs, labour, expected yield, income, costs, profit', hint: 'Plan before planting' }
  ]
},
{
  subject: 'Agriculture',
  form: 'Form 4',
  topic: 'Agribusiness',
  lessonNumber: 2,
  lessonTitle: 'Costs, Revenue, and Profit',
  lessonId: 'agriculture-f4-agribusiness-2',
  order: 81,
  learningObjectives: [
    'Define fixed and variable costs',
    'Calculate total costs, revenue, and profit',
    'Explain break-even point',
    'Make decisions based on cost analysis'
  ],
  introduction: 'Welcome back! Farming is a business – you spend money (costs) and earn money (revenue). The difference is PROFIT. To succeed, you must understand your costs and know which crops or animals are most profitable. Today, you will learn how to calculate profit and compare different farm enterprises.',
  keyPoints: [
    'Fixed costs: do NOT change with production (land rent, equipment depreciation, insurance)',
    'Variable costs: change with production (seeds, fertiliser, feed, labour)',
    'Total cost = fixed costs + variable costs',
    'Revenue = quantity sold × price',
    'Profit = revenue – total cost',
    'Break-even point: where revenue = total cost (no profit, no loss)'
  ],
  detailedContent: `Let me explain COSTS, REVENUE, AND PROFIT.

TYPES OF COSTS:

FIXED COSTS: Costs that do NOT change with how much you produce.

Examples:
- Land rent (pay same whether you plant 1 hectare or not)
- Equipment (hoe, plough – you already bought it)
- Depreciation (tools wearing out)
- Insurance (if you have)
- Interest on loans

VARIABLE COSTS: Costs that DO change with how much you produce.

Examples:
- Seeds (more land = more seeds)
- Fertilisers (more land = more fertiliser)
- Pesticides
- Labour (more work = more pay)
- Transport (more produce = more trips)
- Animal feed (more animals = more feed)

TOTAL COST = Fixed Costs + Variable Costs

REVENUE:

Revenue is the money you get from sales.

Revenue = Quantity × Price

Example: Sell 1,000 kg of maize at 250 kwacha/kg
Revenue = 1,000 × 250 = 250,000 kwacha

PROFIT:

Profit = Revenue – Total Cost

If Revenue > Total Cost = PROFIT
If Revenue < Total Cost = LOSS
If Revenue = Total Cost = BREAK-EVEN

EXAMPLE 1: MAIZE PRODUCTION (1 hectare)

Fixed costs:
- Hoe depreciation: 5,000
- Land rent: 20,000
Total fixed = 25,000

Variable costs:
- Seeds: 20,000
- Fertiliser: 150,000
- Labour: 50,000
- Transport: 30,000
Total variable = 250,000

Total Cost = 25,000 + 250,000 = 275,000 kwacha

Revenue:
- Yield: 1,500 kg
- Price: 250 kwacha/kg
- Revenue = 1,500 × 250 = 375,000 kwacha

Profit = 375,000 – 275,000 = 100,000 kwacha

EXAMPLE 2: TOBACCO PRODUCTION (1 hectare)

Total Cost: 400,000 kwacha
Revenue: 600,000 kwacha
Profit: 200,000 kwacha (higher than maize, but also higher risk)

Which is more profitable per kwacha invested? Compare profit per hectare.

COMPARING PROFITABILITY:

| Crop | Revenue | Cost | Profit | Profit per kwacha invested |
|------|---------|------|--------|---------------------------|
| Maize | 375,000 | 275,000 | 100,000 | 0.36 |
| Tobacco | 600,000 | 400,000 | 200,000 | 0.50 |
| Groundnuts | 450,000 | 300,000 | 150,000 | 0.50 |

Tobacco and groundnuts have better profit per kwacha invested, but consider risk and market access.

BREAK-EVEN ANALYSIS:

Breakeven point is where you earn just enough to cover costs.

For maize example:
- Variable cost per kg = total variable ÷ yield = 250,000 ÷ 1,500 = 167 kwacha/kg
- Fixed cost per kg = fixed ÷ yield = 25,000 ÷ 1,500 = 17 kwacha/kg
- Total cost per kg = 184 kwacha/kg

Breakeven price = total cost per kg = 184 kwacha/kg

If price falls below 184 kwacha/kg, you lose money.

In Malawi, farmers who do not calculate costs may continue farming at a loss without knowing it.

HOW TO REDUCE COSTS:

- Use family labour instead of hired
- Compost instead of expensive fertiliser
- Save seeds from own harvest (for open-pollinated varieties)
- Maintain tools to last longer
- Join a cooperative to buy inputs cheaper

HOW TO INCREASE REVENUE:

- Increase yield (better seeds, fertiliser, irrigation)
- Sell at better price (storage, better market)
- Process products (sell maize flour not grain)
- Sell directly to consumers (bypass middlemen)

A PROTIP: Keep a simple notebook of all expenses (even small ones like "10 kwacha for rope"). At the end of the season, add them up. Many farmers underestimate their costs and think they made more profit than they actually did.

Remember: Fixed costs do not change with production; variable costs change. Total cost = fixed + variable. Revenue = quantity × price. Profit = revenue – total cost. Breakeven is where revenue = total cost. Understand your costs to know if you are really making profit.`,
  summary: 'Fixed costs (land, equipment) do not change with production. Variable costs (seeds, fertiliser, labour) change with production. Revenue = quantity × price. Profit = revenue – total cost. Breakeven is where revenue = total cost. Calculate costs to know which crops are profitable.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Hidden Costs', description: 'Many farmers forget to count their own labour as a cost – but it still has value.' },
    { title: 'Price Drop Risk', description: 'If maize price drops below 184 kwacha/kg, the farmer in the example loses money.' }
  ],
  practiceQuestions: [
    { question: 'What is the difference between fixed and variable costs?', answer: 'Fixed costs do not change with production; variable costs change', hint: 'Land rent vs seeds' },
    { question: 'How is profit calculated?', answer: 'Revenue minus total cost', hint: 'Money in minus money out' }
  ]
}
,

// ======================================================================
// PHYSICS FORM 4
// ======================================================================

// Topic: Newton's Laws of Motion (2 lessons)
{
  subject: 'Physics',
  form: 'Form 4',
  topic: "Newton's Laws of Motion",
  lessonNumber: 1,
  lessonTitle: 'First and Second Laws',
  lessonId: 'physics-f4-newtons-laws-1',
  order: 82,
  learningObjectives: [
    'State Newton\'s First Law of Motion (law of inertia)',
    'State Newton\'s Second Law of Motion (F = ma)',
    'Explain inertia with examples',
    'Apply F = ma to solve problems'
  ],
  introduction: 'Hello, physics explorer! Over 300 years ago, Sir Isaac Newton discovered three laws that explain how everything moves – from a ball rolling on the ground to a rocket flying to space. Today, you will learn the FIRST and SECOND laws: the law of inertia and the law of force and acceleration.',
  keyPoints: [
    'First Law (Inertia): An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an external force',
    'Inertia: resistance to change in motion (depends on mass – more mass = more inertia)',
    'Second Law: F = ma (Force = mass × acceleration)',
    'Acceleration is in the same direction as the net force',
    'Unit of force: Newton (N) = 1 kg·m/s²'
  ],
  detailedContent: `Let me explain NEWTON'S LAWS OF MOTION.

NEWTON'S FIRST LAW (Law of Inertia):

"A body at rest remains at rest, and a body in motion continues in motion with constant velocity, unless acted upon by an external force."

What does this mean?

- A book on a table stays there forever unless something pushes it.
- A moving bicycle continues moving straight at the same speed unless something stops it (brakes, friction, hill).

INERTIA is the resistance to change in motion. More mass = more inertia.

Examples in Malawi:
- You lurch forward when a minibus suddenly stops (your body wants to keep moving)
- It is harder to push a loaded cart than an empty one (more mass, more inertia)
- Shaking a mango tree to get fruit – the trunk moves but the fruit stays (inertia)

NEWTON'S SECOND LAW (F = ma):

"The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass."

Formula: F = m × a
Where:
- F = force (Newtons, N)
- m = mass (kilograms, kg)
- a = acceleration (metres per second squared, m/s²)

This means:
- More force = more acceleration
- More mass = less acceleration (for same force)

Examples:

Example 1: What force is needed to accelerate a 2 kg mass at 5 m/s²?
F = m × a = 2 × 5 = 10 N

Example 2: A 500 N force pushes a 100 kg cart. Find acceleration.
a = F ÷ m = 500 ÷ 100 = 5 m/s²

Example 3 (Malawi): A farmer pushes a 50 kg wheelbarrow with 200 N force. What is acceleration?
a = 200 ÷ 50 = 4 m/s²

If the wheelbarrow is loaded to 100 kg, acceleration = 200 ÷ 100 = 2 m/s² (half as fast).

WEIGHT AS A FORCE:

Weight is the force of gravity on an object.

Weight = mass × g (where g = 9.8 m/s² ≈ 10 m/s²)

Example: A 60 kg person weighs W = 60 × 10 = 600 N

FALLING OBJECTS:

All objects fall at the same acceleration (g = 10 m/s²) if air resistance is negligible.

A heavy object and a light object dropped from the same height hit the ground at the same time (this surprised people before Newton!).

Why? Acceleration depends on force AND mass. Heavier objects have more gravitational force, but also more mass. The ratio F/m is the same.

In Malawi, understanding Newton's laws helps explain:
- Why you need to apply brakes to stop a bicycle (external force needed)
- Why a loaded truck takes longer to stop than a car (more mass)
- Why seatbelts are important (your body wants to keep moving during a crash)

A PROTIP: Remember the first law as: "Inertia means things keep doing what they are doing unless something changes them."

Remember: First Law (inertia) – objects resist changes in motion. Second Law (F = ma) – force = mass × acceleration. More force = more acceleration. More mass = less acceleration (for same force). Weight = mass × g = force of gravity.`,
  summary: 'Newton\'s First Law (inertia): objects resist changes in motion. Newton\'s Second Law: F = ma (force = mass × acceleration). Weight = m × g (force of gravity). More mass = more inertia. More force = more acceleration. Falling objects accelerate at the same rate (g ≈ 10 m/s²).',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Minibus Lurch', description: 'Passengers lurch forward when the minibus suddenly stops – inertia.' },
    { title: 'Loaded Bicycle', description: 'A loaded bicycle is harder to push and harder to stop – more inertia.' }
  ],
  practiceQuestions: [
    { question: 'What force is needed to accelerate a 10 kg object at 4 m/s²?', answer: '40 N', hint: 'F = m × a = 10 × 4 = 40' },
    { question: 'What is the weight of a 50 kg person on Earth? (g = 10 m/s²)', answer: '500 N', hint: 'W = m × g = 50 × 10 = 500' }
  ]
},
{
  subject: 'Physics',
  form: 'Form 4',
  topic: "Newton's Laws of Motion",
  lessonNumber: 2,
  lessonTitle: 'Third Law and Momentum',
  lessonId: 'physics-f4-newtons-laws-2',
  order: 83,
  learningObjectives: [
    'State Newton\'s Third Law of Motion',
    'Explain action-reaction pairs',
    'Define momentum',
    'State the law of conservation of momentum'
  ],
  introduction: 'Welcome back! Newton\'s Third Law says: "For every action, there is an equal and opposite reaction." When you push on something, it pushes back on you with the same force. Today, you will learn about action-reaction pairs and momentum – a measure of "motion content" that is conserved in collisions.',
  keyPoints: [
    'Third Law: For every action, there is an equal and opposite reaction',
    'Action and reaction act on DIFFERENT objects (never cancel each other)',
    'Momentum (p) = mass × velocity (p = m × v)',
    'Unit: kg·m/s',
    'Law of conservation of momentum: total momentum before = total momentum after (in isolated system)'
  ],
  detailedContent: `Let me explain NEWTON'S THIRD LAW and MOMENTUM.

NEWTON'S THIRD LAW:

"For every action, there is an equal and opposite reaction."

Action and reaction forces act on DIFFERENT objects.

Examples:

1. WALKING:
- Your foot pushes BACKWARD on the ground (action)
- The ground pushes FORWARD on your foot (reaction)
- This propels you forward

2. ROWING A BOAT (on Lake Malawi):
- The oar pushes WATER BACKWARD (action)
- The water pushes OAR FORWARD (reaction)
- The boat moves forward

3. JUMPING:
- You push DOWN on the ground (action)
- The ground pushes UP on you (reaction)
- You lift off

4. ROCKET (not common in Malawi, but principle important):
- Rocket pushes HOT GASES DOWN (action)
- Gases push ROCKET UP (reaction)
- Rocket lifts off

Why don't action and reaction cancel each other? Because they act on DIFFERENT objects. You cannot cancel a force on your foot with a force on the ground.

MOMENTUM:

Momentum is "mass in motion" – a measure of how hard it is to stop an object.

Formula: p = m × v
p = momentum (kg·m/s)
m = mass (kg)
v = velocity (m/s)

Example 1: A 5 kg ball moving at 4 m/s.
p = 5 × 4 = 20 kg·m/s

Example 2: A 1,000 kg car at 20 m/s.
p = 1,000 × 20 = 20,000 kg·m/s
Much harder to stop than the ball!

CONSERVATION OF MOMENTUM:

"Total momentum before = Total momentum after" (in isolated system with no external forces).

This explains collisions.

Inelastic collision (objects stick together):
m₁v₁ + m₂v₂ = (m₁ + m₂)v_after

Example: A 2 kg ball at 3 m/s hits a stationary 1 kg ball and sticks.
Before: p = (2 × 3) + (1 × 0) = 6 + 0 = 6 kg·m/s
After: total mass = 3 kg, velocity = ? 

6 = 3 × v_after
v_after = 2 m/s

Elastic collision (objects bounce apart):
m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'

REAL-WORLD EXAMPLES IN MALAWI:

- When a car hits another car, the total momentum before equals total momentum after
- When a football player kicks a ball, the player and ball exchange momentum
- When two minibuses crash, the change in momentum explains the damage

MOMENTUM AND FORCE (Impulse):

Force = change in momentum ÷ time

F = Δp / Δt = (mv - mu) / t

This explains why airbags save lives:
- Airbags INCREASE the time of stopping
- Force = change in momentum ÷ time
- More time = LESS force (less injury)

A PROTIP: When a vehicle suddenly stops, the force on passengers is large because the time is small. Seat belts and airbags increase stopping time – reducing force.

Remember: Third Law: action and reaction are equal, opposite, and on different objects. Momentum = mass × velocity. Law of conservation of momentum: total momentum before = total momentum after (no external forces). Force = change in momentum ÷ time. Longer stopping time = less force (airbags).`,
  summary: 'Newton\'s Third Law: action and reaction are equal, opposite, and act on different objects. Momentum (p = m × v) is mass × velocity. Law of conservation of momentum: total momentum before = total momentum after (isolated system). Force = change in momentum ÷ time.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Walking', description: 'Your foot pushes back, ground pushes forward – you move.' },
    { title: 'Airbags', description: 'Airbags increase stopping time, reducing force on passengers.' }
  ],
  practiceQuestions: [
    { question: 'What is the momentum of a 2 kg ball moving at 10 m/s?', answer: '20 kg·m/s', hint: 'p = m × v = 2 × 10 = 20' },
    { question: 'True or false: Action and reaction forces cancel each other.', answer: 'False', hint: 'They act on different objects' }
  ]
},

// Topic: Hooke's Law (1 lesson)
{
  subject: 'Physics',
  form: 'Form 4',
  topic: "Hooke's Law",
  lessonNumber: 1,
  lessonTitle: 'Hooke\'s Law and Elasticity',
  lessonId: 'physics-f4-hookes-law-1',
  order: 84,
  learningObjectives: [
    'State Hooke\'s law',
    'Define elastic limit',
    'Calculate spring constant from Force–extension graph',
    'Apply Hooke\'s law to solve problems'
  ],
  introduction: 'Hello! Have you ever stretched a rubber band or bounced on a mattress? These objects return to their original shape when you let go – they are ELASTIC. Hooke\'s Law describes how much a spring stretches when you pull it. Today, you will learn about springs, forces, and the elastic limit.',
  keyPoints: [
    'Hooke\'s Law: Force is proportional to extension (F = kx)',
    'F = force (N), k = spring constant (N/m), x = extension (m)',
    'Elastic limit: maximum force/stretch before permanent deformation',
    'Beyond elastic limit: material does not return to original shape (plastic deformation)',
    'Graph of F vs x: straight line through origin (slope = k)'
  ],
  detailedContent: `Let me explain HOOKE'S LAW.

HOOKE'S LAW:

"The extension of a spring is directly proportional to the force applied, provided the elastic limit is not exceeded."

Formula: F = k × x
Where:
- F = force (Newtons, N)
- k = spring constant (N/m) – measures stiffness
- x = extension (metres, m)

A larger k means a stiffer spring (harder to stretch).

EXTENSION vs FORCE GRAPH:

When you plot F (y-axis) against x (x-axis), you get a straight line through the origin.

Slope of graph = k (spring constant)

ELASTIC LIMIT:

Up to the elastic limit, the spring returns to its original length when the force is removed.

BEYOND elastic limit:
- The spring does NOT return to original length
- Permanent deformation occurs (spring is "stretched out")

EXAMPLES:

Example 1: A spring has spring constant 50 N/m. What force is needed to extend it by 0.2 m?
F = k × x = 50 × 0.2 = 10 N

Example 2: A 20 N force extends a spring by 0.4 m. Find spring constant.
k = F ÷ x = 20 ÷ 0.4 = 50 N/m

Example 3: A spring extends 0.1 m when a 5 N weight is hung. Find extension for 15 N weight.
k = 5 ÷ 0.1 = 50 N/m
x = F ÷ k = 15 ÷ 50 = 0.3 m (or 3× original)

APPLICATIONS:

1. SPRING BALANCE:
- Measures weight – extension proportional to weight
- Used in markets for weighing produce

2. VEHICLE SUSPENSION:
- Springs absorb bumps
- Keep wheels on ground

3. DOOR LATCHES, CLOTHES PEGS:
- Small springs provide force

4. TRAMPOLINE:
- Springs store energy when stretched, release when bounce back

In Malawi, spring balances are used at markets to weigh tomatoes, maize, and fish.

A PROTIP: The same spring has the SAME spring constant whether stretched or compressed. F = kx works for both.

Remember: Hooke's Law: F = kx (force proportional to extension). k = spring constant (stiffness). Elastic limit: maximum force before permanent deformation. Beyond elastic limit: plastic deformation. Graph of F vs x is straight line through origin; slope = k.`,
  summary: 'Hooke\'s Law: F = kx (force proportional to extension). k is spring constant (stiffness). Up to elastic limit, spring returns to original shape. Beyond elastic limit, permanent deformation. Graph of force vs extension is straight line through origin; slope = k.',
  estimatedTime: '18 mins',
  malawiExamples: [
    { title: 'Market Spring Balance', description: 'Vendors use spring balances to weigh produce – extension equals weight.' },
    { title: 'Bicycle Suspension', description: 'Some bicycles have springs to absorb bumps.' }
  ],
  practiceQuestions: [
    { question: 'A spring extends 0.05 m when 2 N force is applied. Find spring constant.', answer: '40 N/m', hint: 'k = F ÷ x = 2 ÷ 0.05 = 40' },
    { question: 'What happens beyond the elastic limit?', answer: 'Permanent deformation (spring does not return)', hint: 'Spring is "stretched out"' }
  ]
},


// CHEMISTRY FORM 4 (REMAINING)


// Topic: Electrolysis (2 lessons)
{
  subject: 'Chemistry',
  form: 'Form 4',
  topic: 'Electrolysis',
  lessonNumber: 1,
  lessonTitle: 'Principles of Electrolysis',
  lessonId: 'chemistry-f4-electrolysis-1',
  order: 85,
  learningObjectives: [
    'Define electrolysis',
    'Identify components of an electrolytic cell',
    'Explain the process of electrolysis',
    'Predict products of electrolysis for molten compounds'
  ],
  introduction: 'Hello, electrochemist! Have you ever seen metal objects plated with shiny chrome? Or copper purified? These are done by ELECTROLYSIS – using electricity to cause chemical reactions. Today, you will learn how electrolysis works and how to predict what products form when you pass electricity through different substances.',
  keyPoints: [
    'Electrolysis: decomposition of a compound by passing electricity through it',
    'Electrolytic cell components: electrodes (cathode, anode), electrolyte, power supply',
    'Cathode: negative electrode (attracts positive ions)',
    'Anode: positive electrode (attracts negative ions)',
    'Cations (+) move to cathode and gain electrons (reduction)',
    'Anions (-) move to anode and lose electrons (oxidation)'
  ],
  detailedContent: `Let me explain ELECTROLYSIS.

WHAT IS ELECTROLYSIS?

Electrolysis is the decomposition of a compound (electrolyte) when electricity is passed through it.

COMPONENTS OF AN ELECTROLYTIC CELL:

| Component | Description |
|-----------|-------------|
| Electrolyte | Liquid containing ions (molten ionic compound or solution) |
| Cathode | Negative electrode (attracts positive ions) |
| Anode | Positive electrode (attracts negative ions) |
| Power supply | Provides DC electricity |
| Bulb/ammeter | Shows current flowing |

HOW ELECTROLYSIS WORKS:

1. Positive ions (cations) are attracted to the CATHODE (negative)
   - They GAIN electrons: REDUCTION
   - Cation + e⁻ → Metal (or hydrogen)

2. Negative ions (anions) are attracted to the ANODE (positive)
   - They LOSE electrons: OXIDATION
   - Anion → element + e⁻

ELECTROLYSIS OF MOLTEN COMPOUNDS (no water present):

The products are the elements from the compound.

Example 1: Molten Lead(II) Bromide (PbBr₂)

Ions: Pb²⁺ and Br⁻

At CATHODE (-): Pb²⁺ + 2e⁻ → Pb (silver liquid metal)

At ANODE (+): 2Br⁻ → Br₂ + 2e⁻ (brown gas)

Overall: PbBr₂ → Pb + Br₂

Example 2: Molten Sodium Chloride (NaCl)

Ions: Na⁺ and Cl⁻

At CATHODE: Na⁺ + e⁻ → Na (silver metal)

At ANODE: 2Cl⁻ → Cl₂ + 2e⁻ (green gas)

Overall: 2NaCl → 2Na + Cl₂

Example 3: Molten Copper(II) Chloride (CuCl₂)

At CATHODE: Cu²⁺ + 2e⁻ → Cu (red-brown metal)

At ANODE: 2Cl⁻ → Cl₂ + 2e⁻

INDUSTRIAL APPLICATIONS:

- EXTRACTION OF METALS: Aluminium from molten bauxite
- PURIFICATION OF COPPER impure copper → pure copper
- ELECTROPLATING: coating metal with a thin layer (chrome, silver, gold)
- PRODUCTION OF CHLORINE, HYDROGEN, SODIUM HYDROXIDE

In Malawi, electrolysis is used in:
- Battery charging (car batteries)
- Electroplating (repair shops)
- Water treatment (chlorine production)

A PROTIP: Remember: Reduction occurs at the Cathode (RCC or Red Cat – Reduction at Cathode). Oxidation occurs at the Anode (Oxy An – Oxidation at Anode).

Remember: Electrolysis decomposes compounds using electricity. Cations (+) go to cathode and are reduced (gain electrons). Anions (-) go to anode and are oxidised (lose electrons). For molten compounds, products are the elements.`,
  summary: 'Electrolysis decomposes compounds using electricity. Cations (+) go to cathode and gain electrons (reduction). Anions (-) go to anode and lose electrons (oxidation). For molten compounds, products are the elements (e.g., Pb and Br₂ from PbBr₂).',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Battery Charging', description: 'Car batteries are recharged using electrolysis.' },
    { title: 'Chrome Plating', description: 'Some shops electroplate metal parts to prevent rust.' }
  ],
  practiceQuestions: [
    { question: 'What is attracted to the cathode?', answer: 'Positive ions (cations)', hint: 'Opposites attract' },
    { question: 'What happens to cations at the cathode?', answer: 'They gain electrons (reduction)', hint: 'RCC – Reduction at Cathode' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 4',
  topic: 'Electrolysis',
  lessonNumber: 2,
  lessonTitle: 'Electrolysis of Aqueous Solutions and Uses',
  lessonId: 'chemistry-f4-electrolysis-2',
  order: 86,
  learningObjectives: [
    'Predict products of electrolysis for aqueous solutions',
    'Explain preferential discharge',
    'Describe the electrolysis of water',
    'Describe uses of electrolysis'
  ],
  introduction: 'Welcome back! When the electrolyte contains WATER (aqueous solution), the products can be different because water also contains H⁺ and OH⁻ ions. Some ions are discharged (react) preferentially. Today, you will learn how to predict products in water and the important industrial uses of electrolysis.',
  keyPoints: [
    'In aqueous solutions, water produces H⁺ and OH⁻ ions',
    'Preferential discharge: which ion reacts first depends on position in reactivity series',
    'Cathode: metal ions below hydrogen are discharged; above hydrogen, H⁺ discharges to form H₂',
    'Anode: if halide present, halogen is discharged; if not, OH⁻ discharges to form O₂',
    'Electrolysis used in: purification of copper, electroplating, production of hydrogen, chlorine, sodium hydroxide'
  ],
  detailedContent: `Let me explain ELECTROLYSIS OF AQUEOUS SOLUTIONS.

In aqueous solutions, we have more than just the ions from the compound – we also have H⁺ and OH⁻ from water.

H₂O ⇌ H⁺ + OH⁻

Which ion discharges (reacts) at each electrode depends on:

CATHODE (reduction – gain electrons):

- If the metal is below HYDROGEN in reactivity series (Cu, Ag, Au), the metal discharges (forms metal)
- If the metal is above HYDROGEN (Na, Mg, Al, Zn, Fe), H⁺ discharges to form HYDROGEN GAS

Reactivity Series (simplified):
Potassium (K), Sodium (Na), Calcium (Ca), Magnesium (Mg), Aluminium (Al), Carbon, Zinc (Zn), Iron (Fe), Tin (Sn), Lead (Pb), HYDROGEN, Copper (Cu), Silver (Ag), Gold (Au)

ANODE (oxidation – lose electrons):

- If HALIDE ions (Cl⁻, Br⁻, I⁻) are present, they discharge (form Cl₂, Br₂, I₂)
- If no halides, OH⁻ discharges to form OXYGEN GAS (O₂)

EXAMPLES:

Example 1: Sodium chloride solution (NaCl in water)
Ions: Na⁺, Cl⁻, H⁺, OH⁻

Cathode: Na is above hydrogen → H⁺ discharges → H₂ gas (bubbles)
2H⁺ + 2e⁻ → H₂

Anode: Cl⁻ present → Cl₂ gas (green, bleach smell)
2Cl⁻ → Cl₂ + 2e⁻

Overall products: H₂ gas + Cl₂ gas + NaOH solution (Na⁺ and OH⁻ left in solution)

This is how chlorine, hydrogen, and sodium hydroxide are produced industrially.

Example 2: Copper(II) chloride solution (CuCl₂ in water)
Ions: Cu²⁺, Cl⁻, H⁺, OH⁻

Cathode: Cu is below hydrogen → Cu²⁺ discharges → Cu metal (red layer)
Cu²⁺ + 2e⁻ → Cu

Anode: Cl⁻ present → Cl₂ gas

Overall: copper metal deposits, chlorine gas released

This is used in PURIFICATION OF COPPER.

Example 3: Copper(II) sulphate solution (CuSO₄ in water) with inert electrodes
Ions: Cu²⁺, SO₄²⁻, H⁺, OH⁻

Cathode: Cu²⁺ discharges → Cu metal

Anode: no halides → OH⁻ discharges → O₂ gas
4OH⁻ → 2H₂O + O₂ + 4e⁻

Overall: copper deposits, oxygen gas.

Example 4: Electrolysis of water (using dilute H₂SO₄ or NaOH to conduct electricity)
Ions: H⁺, OH⁻ (plus SO₄²⁻ or Na⁺ which do not discharge)

Cathode: H⁺ discharges → 2H₂ (hydrogen gas)
Anode: OH⁻ discharges → O₂ (oxygen gas)

2H₂O → 2H₂ + O₂

Electrolysis of water produces hydrogen (used as fuel) and oxygen.

ELECTROPLATING:

Electroplating uses electrolysis to coat a metal with a thin layer of another metal.

Example: Chrome plating (car parts)
- Cathode: object to be plated (steel)
- Anode: chromium
- Electrolyte: chromium salt solution

During electrolysis, chromium from the anode dissolves and deposits on the cathode object.

USES OF ELECTROLYSIS IN MALAWI:

| Use | Example |
|-----|---------|
| Purifying copper | Copper wire production |
| Electroplating | Preventing rust on metal parts |
| Battery charging | Recharging car batteries |
| Producing chlorine | Water treatment (disinfection) |

A PROTIP: If you ever see green gas (chlorine) or smell bleach during an experiment, it likely came from electrolysis of chloride solution.

Remember: In aqueous solutions, fight for ions at electrodes. Preferential discharge: metals below hydrogen discharge; above hydrogen, H⁺ discharges → hydrogen gas. Halides discharge at anode; if no halides, OH⁻ discharges → oxygen gas. Electrolysis is used for metal purification, electroplating, and producing gases.`,
  summary: 'In aqueous solutions, water provides H⁺ and OH⁻ ions. CATHODE: metals below hydrogen discharge; above hydrogen, H⁺ discharges to H₂. ANODE: halides discharge (Cl₂, Br₂, I₂); if no halides, OH⁻ discharges to O₂. Uses: copper purification, electroplating, production of H₂, Cl₂, NaOH.',
  estimatedTime: '22 mins',
  malawiExamples: [
    { title: 'Water Treatment', description: 'Chlorine produced by electrolysis is used to disinfect drinking water.' },
    { title: 'Car Batteries', description: 'Lead-acid batteries are recharged using electrolysis.' }
  ],
  practiceQuestions: [
    { question: 'In electrolysis of NaCl solution, what gas forms at the anode?', answer: 'Chlorine (Cl₂)', hint: 'Halide present' },
    { question: 'If you electrolyse water, what gases are produced?', answer: 'Hydrogen (H₂) and oxygen (O₂)', hint: '2H₂O → 2H₂ + O₂' }
  ]
},

// Topic: Organic Chemistry - Introduction (2 lessons)
{
  subject: 'Chemistry',
  form: 'Form 4',
  topic: 'Organic Chemistry',
  lessonNumber: 1,
  lessonTitle: 'Introduction to Organic Chemistry',
  lessonId: 'chemistry-f4-organic-1',
  order: 87,
  learningObjectives: [
    'Define organic chemistry',
    'Explain why carbon is special',
    'Draw and name alkanes (up to C₁₀)',
    'Distinguish between alkanes and alkenes'
  ],
  introduction: 'Hello, organic chemist! Organic chemistry is the study of carbon compounds. Carbon is unique – it can form millions of different compounds, from the fuel in your car to the DNA in your body. Today, you will learn the basics of naming and drawing organic molecules.',
  keyPoints: [
    'Organic chemistry: study of carbon compounds (excluding simple compounds like CO₂, carbonates)',
    'Carbon forms four bonds, can bond to itself, and forms chains and rings',
    'Alkanes: single bonds only (saturated hydrocarbons)',
    'General formula for alkanes: CₙH₂ₙ₊₂',
    'Alkenes: contain carbon-carbon double bond (unsaturated)',
    'General formula for alkenes: CₙH₂ₙ'
  ],
  detailedContent: `Let me explain ORGANIC CHEMISTRY.

WHY IS CARBON SPECIAL?

1. Carbon has FOUR electrons in its outer shell – can form FOUR bonds.
2. Carbon can bond to OTHER CARBON atoms – forms long chains and rings.
3. Carbon can form single, double, and triple bonds.
4. Carbon can form millions of different compounds.

ALKANES (Saturated Hydrocarbons):

Alkanes have ONLY single bonds between carbons. They are "saturated" because all carbon bonds are filled with hydrogen.

General formula: CₙH₂ₙ₊₂

NAMING ALKANES (IUPAC system):

Number of carbons → Prefix
1 carbon → meth-
2 carbons → eth-
3 carbons → prop-
4 carbons → but-
5 carbons → pent-
6 carbons → hex-
7 carbons → hept-
8 carbons → oct-
9 carbons → non-
10 carbons → dec-

Add -ane at the end for alkane.

Examples:

| Formula | Name |
|---------|------|
| CH₄ | Methane |
| C₂H₆ | Ethane |
| C₃H₈ | Propane |
| C₄H₁₀ | Butane |
| C₅H₁₂ | Pentane |
| C₆H₁₄ | Hexane |
| C₁₀H₂₂ | Decane |

DRAWING ALKANES:

Methane (CH₄): central carbon with four hydrogens
Ethane (C₂H₆): H₃C–CH₃
Propane (C₃H₈): H₃C–CH₂–CH₃

ALKANES (cont): PROPERTIES

- Non-polar (do not dissolve in water)
- Less dense than water (float)
- Burn readily (fuels)

ALKENES (Unsaturated Hydrocarbons):

Alkenes have at least ONE DOUBLE BOND between carbons.

General formula: CₙH₂ₙ

NAMING ALKENES:

Same prefixes but ending -ENE. Number the first carbon of the double bond.

Examples:

| Formula | Name |
|---------|------|
| C₂H₄ | Ethene |
| C₃H₆ | Propene |
| C₄H₈ | But-1-ene or But-2-ene |

ALKANES vs ALKENES:

| Feature | Alkanes | Alkenes |
|---------|---------|---------|
| Bond type | Single bonds only | Has double bond |
| Formula | CₙH₂ₙ₊₂ | CₙH₂ₙ |
| Reactivity | Less reactive | More reactive (double bond can open) |
| Test with bromine water | No reaction (brown stays) | Goes colourless (bromine adds to double bond) |
| Example fuels | Methane, petrol | Ethene (plastic, fruit ripening) |

TEST FOR ALKENES (Bromine water test):
- Add bromine water (brown)
- Alkene: brown → colourless
- Alkane: brown stays brown

In Malawi, alkanes are used as fuels (paraffin, petrol). Alkenes are used for making plastics and ripening fruits (ethene).

A PROTIP: The number of hydrogens in alkanes (2n+2) is always even. For alkenes (2n), also even.

Remember: Organic chemistry is the study of carbon compounds. Carbon forms 4 bonds. Alkanes (CₙH₂ₙ₊₂) have only single bonds. Alkenes (CₙH₂ₙ) have double bonds. Name alkanes with -ane, alkenes with -ene. Bromine water tests: alkene turns bromine colourless.`,
  summary: 'Organic chemistry studies carbon compounds due to carbon\'s four bonds and ability to form chains. Alkanes: single bonds only, CₙH₂ₙ₊₂. Alkenes: contain double bonds, CₙH₂ₙ. Name alkanes with -ane, alkenes with -ene. Bromine water tests: alkene turns colourless.',
  estimatedTime: '20 mins',
  malawiExamples: [
    { title: 'Paraffin', description: 'Paraffin lamp fuel is an alkane (mixture of C₉-C₁₆).' },
    { title: 'Fruit Ripening', description: 'Ethene (alkene) is used to ripen bananas and mangoes.' }
  ],
  practiceQuestions: [
    { question: 'What is the formula of pentane?', answer: 'C₅H₁₂', hint: 'CₙH₂ₙ₊₂, n=5' },
    { question: 'What is the test for an alkene?', answer: 'Add bromine water – turns colourless', hint: 'Bromine adds across double bond' }
  ]
},
{
  subject: 'Chemistry',
  form: 'Form 4',
  topic: 'Organic Chemistry',
  lessonNumber: 2,
  lessonTitle: 'Alkanols (Alcohols)',
  lessonId: 'chemistry-f4-organic-2',
  order: 88,
  learningObjectives: [
    'Identify the functional group of alcohols (-OH)',
    'Name and draw structures of alkanols',
    'Describe the preparation of ethanol by fermentation',
    'Describe uses of ethanol'
  ],
  introduction: 'Welcome back! Alcohols are organic compounds containing the -OH group. The alcohol you drink (ethanol) is produced by fermentation of sugar. Today, you will learn about alkanols, their names, how ethanol is made, and its many uses.',
  keyPoints: [
    'Functional group for alcohols: –OH (hydroxyl)',
    'Alkanols: alkanes with –OH replacing one H',
    'General formula: CₙH₂ₙ₊₁OH (or CₙH₂ₙ₊₂O)',
    'Naming: replace -e of alkane with -ol (methanol, ethanol, propanol, butanol)',
    'Ethanol produced by fermentation of glucose or sugar: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂',
    'Uses: alcoholic drinks, solvent, fuel ( mixed with petrol), antiseptic'
  ],
  detailedContent: `Let me explain ALKANOLS (ALCOHOLS).

ALKANOLS are alcohols derived from alkanes. They contain the HYDROXYL functional group (–OH).

General formula: CₙH₂ₙ₊₁OH

NAMING ALKANOLS:
- Same as alkanes but remove -e and add -ol
- For longer chains, number the carbon that has the OH group

| Name | Formula |
|------|---------|
| Methanol | CH₃OH |
| Ethanol | CH₃CH₂OH |
| Propanol | CH₃CH₂CH₂OH |
| Butanol | CH₃CH₂CH₂CH₂OH |

DRAWING ALCOHOLS:

Ethanol: CH₃–CH₂–OH
Propan-1-ol: CH₃–CH₂–CH₂–OH
Propan-2-ol: CH₃–CH(OH)–CH₃ (OH on middle carbon)

CLASSIFICATION OF ALCOHOLS:

- PRIMARY (1°): OH at end of chain (ethanol, propan-1-ol)
- SECONDARY (2°): OH on middle carbon with one H (propan-2-ol)
- TERTIARY (3°): OH on carbon with no H (not exam)

PREPARATION OF ETHANOL (FERMENTATION):

Ethanol is produced by the action of YEAST on sugar (glucose).

Equation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂
Glucose → Ethanol + Carbon dioxide

Conditions:
- Yeast (enzyme)
- 25-35°C (warm, not hot)
- Anaerobic (no oxygen)

Process:
1. Sugar dissolved in water
2. Yeast added
3. Fermentation for several days
4. Ethanol produced (up to 15%, then yeast dies)

Concentrating ethanol:
- Distillation separates ethanol from water (ethanol boils at 78°C)
- Can produce up to 95% ethanol

PROPERTIES OF ETHANOL:

- Colourless liquid
- Flammable
- Soluble in water (polar OH group)
- Boiling point: 78°C (lower than water)

USES OF ETHANOL:

| Use | Example in Malawi |
|-----|-------------------|
| Alcoholic beverages | Masese, traditional beer, spirits |
| Fuel | Mixed with petrol (gasohol) in some vehicles |
| Solvent | Perfumes, medicines, paints |
| Antiseptic | Sterilising skin before injection |
| Industrial | Manufacturing other chemicals |

In Malawi, fermentation is used to produce traditional beer (masese). Sugar cane is a common source.

A PROTIP: Ethanol for drinking is taxed; industrial ethanol (denatured) has poison added so people cannot drink it – illegal to drink!

Remember: Alkanols (alcohols) have –OH group, formula CₙH₂ₙ₊₁OH. Name ends with -ol (methanol, ethanol). Ethanol is produced by fermentation of glucose (sugar) by yeast. Equation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Uses: drinks, fuel, solvent, antiseptic.`,
  summary: 'Alkanols have –OH functional group (hydroxyl). General formula CₙH₂ₙ₊₁OH. Ethanol is produced by fermentation of glucose: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Uses: beverages, fuel, solvent, antiseptic.',
  estimatedTime: '18 mins',
  malawiExamples: [
    { title: 'Masese', description: 'Traditional beer is made by fermenting sugar cane or maize.' },
    { title: 'Fuel', description: 'Some vehicles in Malawi run on ethanol-blended petrol.' }
  ],
  practiceQuestions: [
    { question: 'Draw the structure of ethanol.', answer: 'CH₃–CH₂–OH', hint: 'Two carbons, OH at end' },
    { question: 'What gas is produced during fermentation?', answer: 'Carbon dioxide (CO₂)', hint: 'Makes bubbles' }
  ]
}
];


// console.log('Seed file structure complete. Add remaining lessons following this pattern.');

async function seedLessons() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(' Connected to MongoDB');
    
    await Lesson.deleteMany({});
    console.log(' Cleared existing lessons');
    
    await Lesson.insertMany(allLessons);
    console.log(` Inserted ${allLessons.length} lessons`);
    
    const summary = {};
    allLessons.forEach(lesson => {
      const key = `${lesson.subject} - ${lesson.form}`;
      summary[key] = (summary[key] || 0) + 1;
    });
    
    console.log('\n Summary by subject and form:');
    Object.entries(summary).forEach(([subject, count]) => {
      console.log(`   - ${subject}: ${count} lessons`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error(' Error seeding lessons:', error);
    process.exit(1);
  }
}

seedLessons();