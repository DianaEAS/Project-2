Author: Diana Aguirre
Date: June 2024
Description: A simple quiz game that allows users to answer multiple-choice questions 
and progress through the quiz until they complete all questions or run out of time 


#Introduction
This project is a simple quiz game implemented using HTML, CSS, and JavaScript. It allows users to answer multiple-choice questions and progress through the quiz until they complete all questions or run out of time.

#Table of Contents
Setup
Usage
Features
Potential Weak Points
Future Improvements

#Setup 

To use this quiz game, follow these steps:
Download or clone the repository to your local machine.
Open the index.html file in a web browser.
Start playing the quiz!

#Usage

Upon opening the index.html file, users will see the quiz interface.
Users can select an answer for each question by clicking on the respective option (A, B, C, or D).
If the selected answer is correct, the user progresses to the next question.
If the selected answer is incorrect, an alert notifies the user, and they may try again.
The game ends when the user completes all questions or when time runs out.

#Features 

Dynamic Question Loading: Questions are loaded dynamically from question sets based on the current question number.
Answer Selection: Users can select an answer for each question by clicking on the options provided.
Progress Tracking: The progress bar at the top indicates the user's progress through the quiz.
Timer: A timer displays the remaining time for each question.

#Potential Weak Points

Hardcoded Question Sets: The current implementation relies on predefined question sets (e.g., q1set, q2set). This limits the flexibility of adding or modifying questions without changing the code.
Repetitive Code in setQuestionAndAnswer: The function uses repetitive code to select a random question from each question set. This could be optimized.
Timer Implementation: The timer function uses setInterval and clearInterval improperly, leading to potential bugs.
Alert Usage: Using alert for feedback can be intrusive and disrupts the user experience. It would be better to use in-page elements for feedback.
Class "right": The class right can be expanded to include additional button functionalities, such as a "fifty-fifty" button that eliminates two incorrect answers.

#Future Improvements

Dynamic Question Loading: Implement a dynamic way to load question sets, possibly from an external JSON file or an API.
Optimize setQuestionAndAnswer: Refactor the function to reduce repetition, perhaps by using an array of question sets and indexing.
Enhanced Timer Management: Improve the timer logic to ensure proper handling of interval clearing.
UI Feedback: Replace alert calls with in-page elements such as modals, toast notifications, or dedicated message areas to provide a smoother user experience.
Score Tracking and Display: Implement a more sophisticated score tracking system and display the score to the user in real-time.
