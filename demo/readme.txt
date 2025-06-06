This is a demo version of a clickjack attack known as likejacking.
The webpage 'victim.html' is a demo blog page showing a blog written on some site.
This page contains main blog, prev and next buttons and comment and like buttons.
This page has a like and comment button with animation to show the click event.
When liked it also shows a message "Thanks for liking the blog." on the console log page of browser..
..to show that the event has executed successfully.

Now the attacker, performing clickjacking, uses the attacker.html webpage, which shows a lottery..
..message luring the user/victim to click the button and hijack that click into transferring..
..like to the victim.html page.
The successful execution can be seen through the console of the browser which will show the message..
"Thanks for liking the blog." marking the executed attack a success.
