const btn = document.querySelector("#btn");
const comment = document.querySelector("#comments");
const restart = document.querySelector("#reBtn");

let count = 0;
const commentsArray = [
  'You have clicked the button. ',
  "Really, you like to click this button. ",
  "Why do you keep clicking it? ",
  "Now you are just being annoying. "
];

btn.addEventListener("click", () => {
  count++;
  if (count < 10) {
    comment.textContent = `${commentsArray[0]} Your click count is:  ${count} times.`;
  } else if (count >= 10 && count < 15) {
    comment.textContent = `${commentsArray[1]} Your count is currently ${count} times.`;
  } else if (count >= 15 && count < 20) {
    comment.textContent = `${commentsArray[2]} Now, it's ${count} times.`;
  } else {
    comment.textContent = `${commentsArray[3]} But why? It's now ${count} times.`;
  }
});

restart.addEventListener("click", () => {
  comment.textContent = "";
  count = 0;
});


// alternative way to clear content

// function ClearFields() {
//      comment.textContent = " ";
//   count = 0;
// };

// More from TheOdinProject

