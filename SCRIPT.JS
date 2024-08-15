const levels = [
    {
        title: "Level 1: HTML Basics",
        instruction: "Solve the puzzle by fixing the HTML code:",
        code: `
&lt;html&gt;
&lt;h1&gt;Welcome to CodeQuest&lt;/h2&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;/html&gt;`,
        correctCode: `
<html>
<h1>Welcome to CodeQuest</h1>
<p>This is a paragraph.</p>
</html>`,
        feedback: "Great job! You fixed the HTML code."
    },
    {
        title: "Level 2: CSS Basics",
        instruction: "Style the paragraph to be red:",
        code: `
&lt;style&gt;
/* Write your CSS here */
&lt;/style&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;`,
        correctCode: `
<style>
p {
    color: red;
}
</style>
<p>This is a paragraph.</p>`,
        feedback: "Awesome! The paragraph is now red."
    },
    {
        title: "Level 3: JavaScript Basics",
        instruction: "Make the button show an alert on click:",
        code: `
&lt;button onclick="myFunction()"&gt;Click me&lt;/button&gt;
&lt;script&gt;
function myFunction() {
    // Write your JavaScript here
}
&lt;/script&gt;`,
        correctCode: `
<button onclick="myFunction()">Click me</button>
<script>
function myFunction() {
    alert('Button clicked!');
}
</script>`,
        feedback: "Well done! The button now shows an alert."
    }
];

let currentLevel = 0;

const levelTitle = document.getElementById('level-title');
const instruction = document.getElementById('instruction');
const codeContainer = document.getElementById('code');
const codeInput = document.getElementById('code-input');
const submitButton = document.getElementById('submit-button');
const feedback = document.getElementById('feedback');
const nextLevelButton = document.getElementById('next-level-button');

function startLevel(levelIndex) {
    const level = levels[levelIndex];
    levelTitle.textContent = level.title;
    instruction.textContent = level.instruction;
    codeContainer.textContent = level.code;
    codeInput.value = '';
    feedback.textContent = '';
    nextLevelButton.classList.add('hidden');
}

function checkAnswer() {
    const userCode = codeInput.value;
    const correctCode = levels[currentLevel].correctCode.trim();
    if (userCode.trim() === correctCode) {
        feedback.textContent = levels[currentLevel].feedback;
        nextLevelButton.classList.remove('hidden');
    } else {
        feedback.textContent = "Try again!";
    }
}

submitButton.addEventListener('click', checkAnswer);

nextLevelButton.addEventListener('click', () => {
    currentLevel++;
    if (currentLevel < levels.length) {
        startLevel(currentLevel);
    } else {
        levelTitle.textContent = "Congratulations!";
        instruction.textContent = "You've completed all levels.";
        codeContainer.textContent = '';
        codeInput.value = '';
        feedback.textContent = '';
        nextLevelButton.classList.add('hidden');
    }
});

startLevel(currentLevel);
