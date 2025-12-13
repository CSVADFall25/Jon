Special Note: 

Here is access to my p5js editor collection of sketches in case the videos have trouble running in VS code: 

https://editor.p5js.org/jcrescenzo/collections/GXERC4DAC

I removed most of the video clips, leaving sample clips, to prevent the GitHub from being too large. 

Here is a google drive link to exported media using p5js to create video effects: https://drive.google.com/drive/folders/1RcWw7IdOkPUDVApklgIZnl6RtPXi3W56?usp=drive_link



Product - i.e. what you made:

I made three sketches which use the pixel array to create essentially video filters. I shot pre-recorded video with my IPhone or Black Magic Camera and used p5js to create pixel effects and export the media as .pngs or gifs.

I used CCapture, a javascript library to capture png frames outside the standard 15 frame range used by save function. I then used these to edit and create a roughly 30 second video, using Premiere. I also exported and created 3 gifs from another sketch.


Concept and Motivation - i.e why you made it:

While p5js allows for the quick embedding of creative works, communication via social media is important to social institutions and artists. My project seeks to explore the process of using p5js in the creation of media for social media communication channels.
 
As someone who has worked in communications for over a decade, I am curious to explore how p5js can be integrated in the work flow of social media creation. As an open-sourced library with a vibrant community of contributions and the accessibility offered by an online editor,  I believe it will continue to grow in use for creators. The main advantage of p5js is the ability to create unique generative effects to images and video through the manipulation of pixel values. 

This project is just the initial investigation into some of the current limitations and advantages of pajamas  as a creative tool for social media communications. My goal is to find future areas where I can contribute to making p5js a more accessible tool for video and photo creators. 

Overall I am curious about how to explore this process of exporting media from p5js so we can push it to social media channels. In this process I discuss what work paths are available, functionalities within p5js and extended libraries and the steps involved in the process. 

 Process - i.e. how you made it:

Importing and Displaying 

P5js currently has a file limit of 5MB. A 30 second video recorded at 1080 compressed to either mp4 or web formats are 6.3MB and 6.5MB. Clips should be limited to 15 seconds at 1080 resolution and be optimized for the web. Compression of video is a complicated process and it is important for users to set up and save their workflows to prevent bottlenecks. One thing to note is that certain applied effects such ASC artwork uses text and low resolution video is preferred. By having a high resolution this made the p5js sketches run very slow. 


Sketching 

I give credit to Daniel Schiffman and Patt Vira, who are friends, for their tutorials to help make these works. I would also like to credit Allison Parrish of NYU on her work and Jeff Thompson for giving a tutorial on using CCapture.js. 

Each of the 3 sketches uses loadPixel function and creates a pixel index based on their RGBA value. One of the major hurdles is to make sure to correctly calculate and loop through the pixel array. Video comes in many sizes and resolutions which makes using p5js difficult if you are working with different video sizes. One area I would like to explore making this as flexible as possible on the user. 

Exporting from p5js 

GIFs

P5js currently has a built-in function to create GIFs. The function saveGif requires only two parameters [filenames, time duration] and can be used with another event function, such as keyPress to save sketches as GIFs. With just a few lines of codes. I believe this function was created by a conference held by the PRocessing foundation in 2023

PNGs
CCapture is an open source library which allows users to capture videos at a fixed framerate  which the user can specify. It exports pngs as well as webm formats.

This was a particularly troublesome issue in deploying within the sketch and I believe is one of the largest obstacles to p5js being more widely used by video creators. Unlike graphics created within p5js, when using video, the p5js must have a loop function and be placed with the setup. This is contrary to the documentation. The videos will not run while the capture function will still work.   






