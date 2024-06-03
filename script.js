//Author: Diana Aguirre
//Date: June 2024
//Description: A simple quiz game that allows users to answer multiple-choice questions 
//and progress through the quiz until they complete all questions or run out of time 

// Question sets

const q1set = [
    
    {   
        question: "Who wrote 'To Kill a Mockingbird'?",

        a: "Harper Lee",
        b: "Jane Austen",
        c: "Mark Twain",
        d: "Ernest Hemingway",
        correct: "Harper Lee"
    },
    {
        question: "What is the chemical symbol for gold?",

        a: "Ag",
        b: "Au",
        c: "Pb",
        d: "Fe",
        correct: "Au"
    },
   
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "Pacific Ocean"
    },
   
]
    

const q2set = [

    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        a: "Tofu",
        b: "Miso paste",
        c: "Soy sauce",
        d: "Fish",
        correct: "Miso paste",
    },
    {
        question: "In which year did the Titanic sink?",
        a: "1905",
        b: "1912",
        c: "1923",
        d: "1898",
        correct: "1912"
    },
    {
        question: "Which element has the atomic number 1?",

        a: "Oxygen",
        b: "Helium",
        c: "Nitrogen",
        d: "Hydrogen",
        correct: "Hydrogen"
    }     
]

const q3set = [
    {
        question: "Who painted the Mona Lisa?",
    
            a: "Vincent van Gogh",
            b: "Pablo Picasso",
            c: "Leonardo da Vinci",
            d: "Claude Monet",
            correct: "Leonardo da Vinci",
        },
        
        {
            question: "What is the smallest country in the world by land area?",
            a: "Monaco",
            b: "San Marino",
            c: "Vatican City",
            d: "Liechtenstein",
            correct: "Vatican City",
        },
        {
            question: "Who is known as the Father of Modern Physics?",
            a: "Isaac Newton",
            b: "Albert Einstein",
            c: "Galileo Galilei",
            d: "Niels Bohr",
            correct: "Albert Einstein",
        },

]

const q4set = [
    {
        question: "Who is considered the father of modern economics?",
        a: "John Maynard Keynes",
        b: "Adam Smith",
        c: "Milton Friedman",
        d: "Karl Marx",
        correct: "Adam Smith"
    },
    {
        question: "Which philosopher is known for his theory of forms?",
        a: "Plato",
        b: "Aristotle",
        c: "Socrates",
        d: "Epicurus",
        correct: "Plato"
    },
    {
        question: "What is the Hardy-Weinberg principle used to describe?",
        a: "Natural selection",
        b: "Genetic equilibrium",
        c: "Chemical reactions",
        d: "Quantum mechanics",
        correct: "Genetic equilibrium"
    }
];

const q5set = [
    {
        question: "In which year was the Treaty of Westphalia signed?",
        a: "1648",
        b: "1783",
        c: "1815",
        d: "1919",
        correct: "1648"
    },
    {
        question: "Who developed the general theory of relativity?",
        a: "Isaac Newton",
        b: "Niels Bohr",
        c: "Albert Einstein",
        d: "James Clerk Maxwell",
        correct: "Albert Einstein"
    },
    {
        question: "What does the Heisenberg Uncertainty Principle relate to?",
        a: "Position and momentum",
        b: "Energy and time",
        c: "Wave-particle duality",
        d: "Thermodynamics",
        correct: "Position and momentum"
    }
];

const q6set = [
    {
        question: "Which author wrote 'The Brothers Karamazov'?",
        a: "Fyodor Dostoevsky",
        b: "Leo Tolstoy",
        c: "Anton Chekhov",
        d: "Nikolai Gogol",
        correct: "Fyodor Dostoevsky"
    },
    {
        question: "What is the capital of Bhutan?",
        a: "Thimphu",
        b: "Kathmandu",
        c: "Lhasa",
        d: "Paro",
        correct: "Thimphu"
    },
    {
        question: "Which enzyme is responsible for DNA replication?",
        a: "DNA polymerase",
        b: "RNA polymerase",
        c: "Helicase",
        d: "Ligase",
        correct: "DNA polymerase"
    }
];

const q7set = [
    {
        question: "Who is the author of 'The Wealth of Nations'?",
        a: "David Ricardo",
        b: "Adam Smith",
        c: "John Stuart Mill",
        d: "Thomas Malthus",
        correct: "Adam Smith"
    },
    {
        question: "What is the main function of the mitochondria?",
        a: "Protein synthesis",
        b: "ATP production",
        c: "DNA replication",
        d: "Cell division",
        correct: "ATP production"
    },
    {
        question: "In which city was the League of Nations headquartered?",
        a: "Geneva",
        b: "Brussels",
        c: "Paris",
        d: "London",
        correct: "Geneva"
    }
];

const q8set = [
    {
        question: "What is the significance of Schrödinger's cat thought experiment?",
        a: "Demonstrating wave-particle duality",
        b: "Illustrating quantum superposition",
        c: "Explaining the uncertainty principle",
        d: "Describing black holes",
        correct: "Illustrating quantum superposition"
    },
    {
        question: "Which artist is known for pioneering Cubism?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Claude Monet",
        d: "Salvador Dalí",
        correct: "Pablo Picasso"
    },
    {
        question: "What is the main theme of Thomas Hobbes' 'Leviathan'?",
        a: "Liberty and fraternity",
        b: "Social contract and sovereign power",
        c: "Economic theory",
        d: "Religious doctrine",
        correct: "Social contract and sovereign power"
    }
];

const q9set = [
    {
        question: "Who proposed the theory of continental drift?",
        a: "Charles Darwin",
        b: "Alfred Wegener",
        c: "Harry Hess",
        d: "James Hutton",
        correct: "Alfred Wegener"
    },
    {
        question: "What is the main principle behind Kant's 'Categorical Imperative'?",
        a: "Utilitarianism",
        b: "Moral relativism",
        c: "Universal moral law",
        d: "Nihilism",
        correct: "Universal moral law"
    },
    {
        question: "Which chemical element has the highest melting point?",
        a: "Tungsten",
        b: "Carbon",
        c: "Iron",
        d: "Osmium",
        correct: "Tungsten"
    }
];

const q10set = [
    {
        question: "Who is credited with the discovery of penicillin?",
        a: "Louis Pasteur",
        b: "Alexander Fleming",
        c: "Robert Koch",
        d: "Joseph Lister",
        correct: "Alexander Fleming"
    },
    {
        question: "What does the term 'metamorphic' refer to in geology?",
        a: "Sedimentary processes",
        b: "Volcanic activity",
        c: "Transformation of rocks",
        d: "Erosion and weathering",
        correct: "Transformation of rocks"
    },
    {
        question: "In economics, what does the Gini coefficient measure?",
        a: "Inflation",
        b: "Income inequality",
        c: "Economic growth",
        d: "Unemployment",
        correct: "Income inequality"
    }
];

const q11set = [
    {
        question: "What is the main function of ribosomes in a cell?",
        a: "Energy production",
        b: "Photosynthesis",
        c: "Protein synthesis",
        d: "Lipid synthesis",
        correct: "Protein synthesis"
    },
    {
        question: "Which historical event is associated with the year 1066?",
        a: "Signing of the Magna Carta",
        b: "Battle of Hastings",
        c: "Fall of Constantinople",
        d: "First Crusade",
        correct: "Battle of Hastings"
    },
    {
        question: "Who is known for the law of universal gravitation?",
        a: "Albert Einstein",
        b: "Isaac Newton",
        c: "Galileo Galilei",
        d: "Johannes Kepler",
        correct: "Isaac Newton"
    }
];

const q12set = [
    {
        question: "Which economic theory is John Maynard Keynes known for?",
        a: "Classical economics",
        b: "Supply-side economics",
        c: "Keynesian economics",
        d: "Marxist economics",
        correct: "Keynesian economics"
    },
    {
        question: "In which work did Niccolò Machiavelli outline political power strategies?",
        a: "The Prince",
        b: "Leviathan",
        c: "Utopia",
        d: "The Social Contract",
        correct: "The Prince"
    },
    {
        question: "Which molecule is known as the 'universal solvent'?",
        a: "Ethanol",
        b: "Methanol",
        c: "Water",
        d: "Acetone",
        correct: "Water"
    }
];


// Define an array of objects representing progress steps with their corresponding prices
const progressSet = [
    { id: 1, price: 0 },
    { id: 2, price: 10000 },
    { id: 3, price: 30000 },
    { id: 4, price: 50000 },
    { id: 5, price: 80000 },
    { id: 6, price: 100000 },
    { id: 7, price: 200000 },
    { id: 8, price: 300000 },
    { id: 9, price: 400000 },
    { id: 10, price: 500000 },
    { id: 11, price: 700000 },
    { id: 12, price: 1000000 }
];

// Function to display progress steps, sorted in descending order of prices
const showProgressSet = (progressSet) => {
    // Select the div element with the class "progress"
    let progress_div = document.querySelector(".progress");

    // Initialize an empty string to hold the HTML content for the progress div
    let progress_divset_data = '';

    // Sort the progressSet array in descending order of prices
    progressSet = progressSet.sort((a, b) => b.price - a.price);

    // Loop through each item in the sorted progressSet array
    progressSet.forEach((item, index) => {
        // Check if the item's price matches specific values to apply different formatting
        if (item.price == 10000 || item.price == 100000 || item.price == 400000 || item.price == 1000000) {
            // Format the item's price with commas
            item.price = item.price.toLocalString();

            // Append a div element with class "progress-in1" and formatted price to the HTML string
            progress_divset_data += `
                <div class="progress-in1">£ ${item.price}</div>
            `;
        } else {
            // Format the item's price with commas
            item.price = item.price.toLocalString();

            // Append a div element with class "progress-in" and formatted price to the HTML string
            progress_divset_data += `
                <div class="progress-in">£ ${item.price}</div>
            `;
        }
    });

    // Update the inner HTML of the progress div with the generated progress steps
    progress_div.innerHTML = progress_divset_data;
};


// Call the showProgressSet function to display the progress steps
showProgressSet(progressSet);

let currentQuestion = 1;
let score = 0;

// Select the question container and answer container elements
const question = document.querySelector(".question-container p");
const allAnswersCont = document.querySelector(".answer-container");

// Function to display answer options for the current question
const setAllAnswersCont = (randomQuestion) => {
    allAnswersCont.innerHTML = `
        <div class="answerin">
            <div class="hr"></div>
            <p onClick="selectOption('${randomQuestion.a}', '${randomQuestion.correct}')"> 
                <span>A.</span> ${randomQuestion.a}
            </p>
            <div class="hr"></div>
            <p onClick="selectOption('${randomQuestion.b}', '${randomQuestion.correct}')">
                <span>B.</span> ${randomQuestion.b}
            </p>
            <div class="hr"></div>
        </div>
        <div class="answerin">
            <div class="hr"></div>
            <p onClick="selectOption('${randomQuestion.c}', '${randomQuestion.correct}')">
                <span>C.</span> ${randomQuestion.c}
            </p>
            <div class="hr"></div>
            <p onClick="selectOption('${randomQuestion.d}', '${randomQuestion.correct}')">
                <span>D.</span> ${randomQuestion.d}
            </p>
            <div class="hr"></div>
        </div>
    `;
};

// Function to set the current question and its answers based on the current question number
const setQuestionAndAnswer = (currentQuestion) => {
    let randomQuestion;
    if (currentQuestion == 1) {
        let random = Math.floor(Math.random() * q1set.length);
        randomQuestion = q1set[random];
    } else if (currentQuestion == 2) {
        let random = Math.floor(Math.random() * q2set.length);
        randomQuestion = q2set[random];
    } else if (currentQuestion == 3) {
        let random = Math.floor(Math.random() * q3set.length);
        randomQuestion = q3set[random];
    } else if (currentQuestion == 4) {
        let random = Math.floor(Math.random() * q4set.length);
        randomQuestion = q4set[random];
    } else if (currentQuestion == 5) {
        let random = Math.floor(Math.random() * q5set.length);
        randomQuestion = q5set[random];
    } else if (currentQuestion == 6) {
        let random = Math.floor(Math.random() * q6set.length);
        randomQuestion = q6set[random];
    } else if (currentQuestion == 7) {
        let random = Math.floor(Math.random() * q7set.length);
        randomQuestion = q7set[random];
    } else if (currentQuestion == 8) {
        let random = Math.floor(Math.random() * q8set.length);
        randomQuestion = q8set[random];
    } else if (currentQuestion == 9) {
        let random = Math.floor(Math.random() * q9set.length);
        randomQuestion = q9set[random];
    } else if (currentQuestion == 10) {
        let random = Math.floor(Math.random() * q10set.length);
        randomQuestion = q10set[random];
    } else if (currentQuestion == 11) {
        let random = Math.floor(Math.random() * q11set.length);
        randomQuestion = q11set[random];
    } else if (currentQuestion == 12) {
        let random = Math.floor(Math.random() * q12set.length);
        randomQuestion = q12set[random];
    }

    question.innerHTML = randomQuestion.question;
    setAllAnswersCont(randomQuestion);
};

// Set the first question and its answers
setQuestionAndAnswer(currentQuestion);

// Function to highlight the current progress step based on the current question
const setActiveProgressItem = (currentQuestion) => {
    let progressSetDiv = document.querySelector(".progress");
    let progressSetDivData = progressSetDiv.querySelectorAll("div");
    let progressSetDivDataLength = progressSetDivData.length;

    // Remove the active class from all progress steps
    progressSetDivData.forEach((item) => {
        item.classList.remove("active");
    });

    // Add the active class to the current progress step
    progressSetDivData[progressSetDivDataLength - currentQuestion].classList.add("active");
};

// Highlight the first progress step
setActiveProgressItem(currentQuestion);

let timer = document.querySelector(".timer p");
let time = 60;

// Function to handle the selection of an answer option
const selectOption = (selectedOption, correctAnswer) => {
    if (selectedOption == correctAnswer && time > 0) {
        currentQuestion++;
        if (currentQuestion > 12) {
            alert("Congratulations! You have won £1,000,000");
            time = 0;
            return;
        }
        setActiveProgressItem(currentQuestion);
        setQuestionAndAnswer(currentQuestion);
        alert("Correct Answer!");
        time = 60;
    } else if (time <= 0) {
        alert("Time is up");
    } else {
        alert("Wrong Answer");
    }
};

// Function to set and update the timer
const setTimer = () => setInterval(() => {
    if (time == 0) {
        clearInterval(setTimer());
        alert("Time is up");
        return;
    }
    time--;
    timer.innerHTML = "Time left: 00:" + time + "s";
}, 1000);

// Start the timer
setTimer();


