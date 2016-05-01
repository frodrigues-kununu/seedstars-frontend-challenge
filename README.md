# seedstars-frontend-challenge
Code for my seedstars frontend challenge.

##Challenge Details

The purpose of this challenge is to understand how you use HTML/CSS/Javascript.
Please note that both challenges are mandatory.


Challenge 1 - Javascript
------------------------

Build a HackerNews (http://news.ycombinator.com/) infinite scroll news listing page.

Using one of the many online API to connect to HackerNews, get the data, and build a webpage
which lists all the items from HN. The page should have infinite scroll (when user reaches the
end of the page more articles should be loaded).

No need to do any special design here, please focus on functionality and performance.


Challenge 2 - Html/CSS
----------------------

Please design a webpage using html/css, preferably using tools that simplify your life eg: SCSS, gulp.js, etc
Have a look at HTML_CSS.zip for the design reference of what you should implement.

The the resulting webpage should be responsive.


Make reasonable assumptions, state your assumptions, and proceed. Once you have completed the
challenge let us know and share your thoughts on the problems/solutions.

Good luck!

##Challenge Assumptions

###Challenge 1 - Javascript
* I assumed that i could use third party libraries and directives. I used ngInfiniteScroll (https://github.com/sroze/ngInfiniteScroll) to implement the infinite scroll functionality.
* I also assumed that Hacker News items can be either stories, comments, jobs, Ask HNs and polls as stated in the Items section of the Hacker News API page (https://github.com/HackerNews/API#items).

###Challenge 2 - Html/CSS
* I used the details provided in the design to implement this challenge. I chose reasonable values for details not specified in the design.
* I assumed i could use javascript besides HTML and CSS so i implemented a basic AngularJS app with routing.

##Build the apps
The app requires **Node**, **npm** (to install and run **gulp**, **bower**, as well as a node **http-server** if needed), **bower** (to install frontend dependencies) and **git**.

* If you don't have **git** installed, download and install it by following the instructions specified on https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/
* Download and install **Node** from https://nodejs.org/en/

Afterwards open the command prompt / terminal and run the following commands (you might need to prefix some of them with `sudo`):

* Download the project into your computer by running `git clone https://github.com/scorchloh/seedstars-frontend-challenge.git`
* Navigate to the `/seedstar-frontend-challenge` folder
* Install the **Node modules** required by running `npm install`
* Install **bower** `npm install -g bower`
* Install frontend dependencies by running `bower install`

##Run the apps
###Infinite Scroll Web App (Challenge 1 - Javascript)
To test this app simply navigate from the root of the project to `/src/infiniteScrollWebApp` and open the **index.html** file on a browser. The web app lists new items before they are listed hacker news.
The result should look like this:

![infiniteScrollApp Gif](http://i.imgur.com/wzJq7nU.gif "infiniteScrollWebApp")

###Dashboard Web App (Challenge 2 - Html/CSS)
There are 2 ways to run this app. The first and easiest one is to navigate from the root of the project to `/src/dashboardWebApp` and open the **index.html** file on **Firefox**.

In case you want to test the app using **Google Chrome** a Web Server is needed. Either create a project on an IDE (like Netbeans) and run it from there or, if you installed the node modules dependencies earlier, open the terminal and type the following command `http-server`. This should start an **http server**. You can then view the webpage by acessing http://localhost:8080/src/dashboardWebApp/ in your browser. This is needed because **Google Chrome** restricts XHR calls when using the `file://` protocol and AngularJS templates are downloaded via XHR.
Either way, the result should look like this:

![dashboardApp Gif](http://i.imgur.com/34fpXRz.gif "dashboardScrollWebApp")

##gulp
The **gulp** default task compiles the sass files from the folder `/src/dashboardWebApp/sass` to css and writes the result in `/src/dashboardWebApp/css`, afterwards it will watch for changes made to the `/src/dashboardWebApp/sass` and recompile the files if a change occurs.

##Browsers tested on
Both web applications were tested on:
* Google Chrome 49.0.2623.112
* Mozilla Firefox 45.0.2
* Microsoft Edge 25.10586.0.0
* Internet Explorer 11.212.10586.0 (although the fonts are not rendering correctly)
