// Get the timer element from the DOM
const timerDisplay = document.getElementById('counter');

// Variable for holding the current count
let count = 0;

// Function to update the timer every second
function incrementTimer() {
    count++;
    timerDisplay.textContent = count;
}

//  when the page loads Start the timer
let timerInterval = setInterval(incrementTimer, 1000);


// Get the plus and minus buttons from the DOM
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

// Event listener for the plus button
plusButton.addEventListener('click', function() {
    count++;
    timerDisplay.textContent = count;
});

// Event listener for the minus button
minusButton.addEventListener('click', function() {
    count--;
    timerDisplay.textContent = count;
});

const likeButton = document.getElementById('heart');
const likesList = document.querySelector('.likes');

// Object to store like counts
const likeCounts = {};

// Event listener for the like button
likeButton.addEventListener('click', function() {
    if (likeCounts[count]) {
        likeCounts[count]++;
    } else {
        likeCounts[count] = 1;
    }
    
    // Update the likes list
    updateLikesList();
});

// Function to update the likes list in the DOM
function updateLikesList() {
    // Clear previous list
    likesList.innerHTML = '';

    // Populate with current like counts
    for (let num in likeCounts) {
        const li = document.createElement('li');
        li.textContent = `${num} has been liked ${likeCounts[num]} times`;
        likesList.appendChild(li);
    }
}

// Get the pause and resume buttons from the DOM
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');
const buttons = [plusButton, minusButton, likeButton, pauseButton];

// Event listener for the pause button
pauseButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    buttons.forEach(button => {
        button.disabled = true;
    });
    pauseButton.style.display = 'none';
    resumeButton.style.display = 'inline-block';
});

// Event listener for the resume button
resumeButton.addEventListener('click', function() {
    timerInterval = setInterval(incrementTimer, 1000);
    buttons.forEach(button => {
        button.disabled = false;
    });
    pauseButton.style.display = 'inline-block';
    resumeButton.style.display = 'none';
});

// Get the comment input and form elements from the DOM
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('list');

// Event listener for the comment form submission
commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Create a new comment element
    const comment = document.createElement('li');
    comment.textContent = commentInput.value;

    // Append the comment to the comments list
    commentsList.appendChild(comment);

    // Clear the comment input field
    commentInput.value = '';
});