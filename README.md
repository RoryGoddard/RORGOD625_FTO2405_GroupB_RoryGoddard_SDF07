# [SDF07] Project: CodeSpace Pets Instagram Profile

## Project Overview

I was tasked with designing a responsive and mobile friendly Instagram profile page. We were to use a variety of different properties in CSS to achieve this, namely media queries, display grid, flexbox, among others.

## Challenges Faced

Where to even start? Grid still does not come easy to me but I decided early on to settle for a grid for the profile information, and then a seperate grid for the image gallery. 
The plan then would be to style children elements within with flexbox. This is what I ended up doing, although, my first and arguably biggest mistake was thinking I could get the layout right with pixels
initially and then later I could change different properties to rem and em to get the responsive and mobile friendly design. This was a large oversight on my part and it took me a full day to correct. 
Truly a mistake I will only make once. You quickly underestimate how many different things are calcuating their sizes, padding, margin, etc off of pixels, and it gets away from you so fast.

Anyways, aside from that first glaring mistake, I also decided I wanted to add dark mode functionality to my clone of the page. Below is an excerpt from the comments I left on the first version of my function in JS:

"There are a number of limitations and problems with this fucntion, namely that its changing the values of the css variables instead of swapping variables themselves
This could lead to issues in the future if I were to change the values in the styles document to be completely different colours,
However I don't have the knowledge currently to implement this in a better way

The other glaring limitation with it is because I am hosting it on a live server, and I hope you will too, I have had to construct this 
convoluted template string in order to get the desired functionality with regards to the SVG files. This is a compatibility nightmare, I know, 
but I decided to go through with it for now as I really wanted to add this functionality, and I will learn to do it properly in the future"

I was having an issue getting the path to the svg's to work, as upon clicking them, I wanted to change to the other (sun/moon) in order to indicate to the user what mode they are on, and that they can change.
I ended up finding a solution on stackoverflow where I could make the path a template string consisting of the protocol, the domain, and the port, following by the relative path to the svg's. This worked, but it was
glaringly obvious to me that it was a disasterpiece of code. I then later tried to just use "./images..." and suddenly it worked. So I undid everything, and the problem no longer exists thankfully

The other issues I faced were notably getting list items to behave with flexbox, to get them on one line (so easy when you know how to do it) and to get the spacing right in the grid cell. I did eventually manage with this too 
but again, stackoverflow is a godsend.

I also really struggled with the hover effects on the gallery items, I couldn't get the colour to show on hover, nor could I get the list items to display over the images. This problem however was greatly compounded by chrome
caching my css changes. I spent a solid 2 hours writing different styles to try different techniques, googling what I could be doing wrong, until I found a post where someone said to try clearing the cache/another browser.

As soon as I opened firefox, the display was totally different. As painful and annoying as that was, I got it right in the end through firefox, which is also amazing at displaying your grid to you as well as the properties that are
currently being applied to different elements wihtin that grid cell. Using firefoxes developer tools was really helpful in me overcoming this challenge.

The final thing I had issues with was the loading image at the bottom of the page. I first wrapped mine in a div, applied the css and key frames, and it was working! Quick and easy! Except it was generating a bunch of empty space, then also removing that space, very quickly, at the bottom of the page. If you scrolled into it, the browser got really wacky. A while of troubleshooting and googling went by, and Stackoverflow came in clutch oncemore with someone pointing out that this can be fixed by using display block on the div, instead of flex, and this worked a treat.

## Final Thoughts

100% this was by far and away the most difficult challenge I've done so far. Javascript comes easy but CSS is definitely something I need to revise. I am not entirely satisfied with how website looks on extra large displays, but I am in contrast very satisifed with how responsive it is with everything down to 320px width. This has really highlighted to me that I need to spend more time with CSS, and I have found what greatly confounds problems is when elements do not behave the way you expect them to within flex or grid containers. Having said that, I will definitely be revising the topics I struggled with in order to build a better mental model.
