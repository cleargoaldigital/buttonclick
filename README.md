# buttonclick
JavaScript Code to count button clicks
The code here counts and displays the number of times a button is clicked.
The display also comes with some descriptive, and somehow sarcastic messages - just to add fun to the activities.
It's all about demonstrating the interactivity of JavaScript on the web page.


This page is published at *https://cleargoaldigital.github.io/buttonclick/*

This simple task also led me to learning a couple of lessons:

** how to write a function to clear input field or reset counter/button.

** The importance of *defer* in the *script tag* placed within the head tag of an html file. JavaScript compiles from top to bottom. So, while it is executing the script, button "btn" was not found by the compiler and consequently returned *Uncaught TypeError*.

While the code worked on codepen *https://codepen.io/cleargoal_edu/pen/XWeqONB* without the *defer*, it failed to work on my VSCode if the script tag is placed in the head of the HTML file.

I kept getting *Uncaught TypeError: Cannot read property of null (reading 'addEventListener')*. Then, I googled. Boom, I got the answer!

Google is so good, and useful.

The embedded video is both for record and practice purposes only. It can be removed at any convenient time. 
