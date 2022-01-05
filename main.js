const btn = document.getElementById("btn");
const comment = document.getElementById("comments");
const restart = document.getElementById("reBtn");

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
    comment.innerHTML = `${commentsArray[0]} Your click count is:  ${count} times.`;
  } else if (count >= 10 && count < 15) {
    comment.innerHTML = `${commentsArray[1]} Your count is currently ${count} times.`;
  } else if (count >= 15 && count < 20) {
    comment.innerHTML = `${commentsArray[2]} Now, it's ${count} times.`;
  } else {
    comment.innerHTML = `${commentsArray[3]} But why? It's now ${count} times.`;
  }
});

restart.addEventListener("click", () => {
  comment.innerHTML = "";
  count = 0;
});

// alternative way to clear content

// function ClearFields() {
//      comment.innerHTML = " ";
//   count = 0;
// };