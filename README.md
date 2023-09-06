I will create an Etch a Sketch thingy using html, css, and javascript. Wish me luck.

# Notes

## Planning

1. Create a webpage with a 16 x 16 grid of square divs.
	- Create the divs by using only Javascript
		- For Loop create 16 divs across then for loop that loop creating 16 divs in another line. Repeat until 16 divs created in 16 lines.
		- I should use DOM methods like document.createElement('div') or document.appendChild('div')
	- Put the grid squares inside a container div. Put the container div directly inside the html code.
	- You need to make the divs appear as a grid. Use Flexbox
		- I need to refresh myself on how to use flexbox. Then figure out how to loop creating divs and styling it using flexbox automatically
		  Not sure how to do it. Wish me luck lmao
	- Be careful with borders and margins. They can affect the size of the squares.
2. Set up hover effect so that when your mouse passes over a grid div, the grid div's background color changes. 
	- Mouse doesn't have to click to change the color. It only needs to hover over the grid divs
	- Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for
	either of those events as a starting point.
	-There are multiple ways to change the color of the divs, including:
		- adding a new class to the div.
		- changing the div’s background color using JavaScript.
			- Let's use this method. It will be usefule when we tackle Extra Credit 1 in the future.
3. Add a button that sends a pop up, asking the user for the number of squares per side for the new grid. When the number is entered, the existing grid
	should be removed and a new grid should be generated in the same total space as before (960 px wide) so that you have a new sketch pad.
	- Tip. Set the limit of squares to 100 per side. Too much can cause crashes.
	- Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
	- Also check out prompts.
	- You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
4. Push to github.
