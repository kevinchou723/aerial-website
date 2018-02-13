
## Aerial Chen's website
built with create react app

## Add static.json in the root directory
The heroku build pack deploys your site on heroku as a static application so you have to tell it that
for ALL routes, it should just go to your root document so react can handle the routing.The
default root document in create - react - app aps is index.html.  If you don't add it, when you enter straight to 
a sub path, it will return a 404