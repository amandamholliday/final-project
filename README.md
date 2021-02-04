# Laugh Map

## Introduction

Laugh Map is a search tool for a user to find comedy shows happening near them at all times. By entering the name of your city - a list of shows will display with name, date, time, address, and venue. There's also a "View On Map" button that will show you where the venue is located using Google Maps.

### Initial wireframe:

![amanda_holliday_laughmap_wireframe](https://res.cloudinary.com/dzgeqcksj/image/upload/c_scale,w_760/v1612462404/Screen_Shot_2021-02-02_at_3.48.53_PM_jiskz7.png)

## Functionality

I used two different APIs: PredictHQ and Google Maps

PredictHQ is a very complex database that has a vast library of events that are happening all around the world. I was able to integrate this API with Google Maps to display all the data on the page.

![amanda_holliday_laughmap](https://res.cloudinary.com/dzgeqcksj/image/upload/c_scale,w_777/v1612301418/Screen_Shot_2021-02-02_at_4.27.07_PM_x8eps4.png)


## Issues

While deploying my project to heroku, I was able to deploy successfully, however I was encountering errors getting my API to make fetch requests. The API works correctly in localhost:3000, but not on heroku: 

* The error read something like "Access to fetch at '(my predictHQ API)' from origin 'laughmap.herokuapp.com' has been blocked by CORS policy: Request header field access-control-allow origin is not allowed by Access-Control-Allow-Headers in preflight response. *

After some heavy googling and trial and error, I got the fetch request to work by adding 'http://www.https://cors-anywhere.herokuapp.com/' to the BEGINING of my fetch request.

I'm not 100% sure this is a good fix to the problem, it may only be a temporary solution for now?

## Going forward

This is a project that's really important to me and is a continuous work in progress. :) There's so much more I want to do with it. I plan on making an extra search bar for specific dates, a clickable calendar tool, a markercluster with Google Maps, and a separate route for people to post their own fliers for shows!