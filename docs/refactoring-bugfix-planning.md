Challanges , Problems and Observations UI and Functionality Summary:

after implementing 7 phases by AI and Myself, there are many things didnt cover and needs to be fixed, also there are several bugs in the give file figma and also there are things that i have not see it coming and realized it after implementations, in real world task we could talk with ui designer and fix the issues and until then task would be blocked for developing, but since we need to deliver these tasks quick we need to impervise ourselves

here are the things we need to fix and refactor again:

Product List Page Observations:

fonts settings doesnt work properly

given api data doesnt match with data that exist in figma

on Desktop size everythings looks fine but in tablet device we saw a new filter on sidebar which says (Availble products), lets say if product didnt had price or it was zero lets make it not available

We have needed to store and cache api to prevent multiple api call, we used pinia store,

and also we save it on url that by refreshing user still gets the same result and not loose about filters, searches and sorting

on mobile device there are no ui, for our products and looking at DIGIKALA as a refrence sidebar app disappear on mobile and laptop devices,

since we need to work a lot in our responsive there might be a best practice for vue to handle it all more simple and prevent the hard code

there are problems in page layout must be fixed, current files are not match with what we expect from figma at all, might need critical refactoring is some areas and minor fixes in other places,

sidebar should be dynamic, and on the tablet size it should move in above place of the products

there are no design system in our product and figuring all colors and icons is a bit hard need to find a quick solution for this task

some base components also might needs refactoring since they behave different and we do not have a shared ui library for this

colors for many things like texts and links and other things doesnt follow an exact rule to be followed for keeping the code clean we need solutions

product cards also need refactored to match with ui,

active filter ui must be fixed as well

Product Unique Page Observations:

same as Product List page here also given api doesnt match with figma

breadcrumb looks like just shows where we are but we cant use it as navigate ourself that would be cool feature since there is no back button

image has zoom functionality but it doesnt clear how it should work so we need to impervise as well,

product unique page needs some critical and minor fixes

Header and Footer :

needs to refactor some functionality and some features like to be handle dynamically instead of static, also its csss is a mess!

Overall we need 1st Fix all of our ui problems, then functionality and add features to solve our issues
