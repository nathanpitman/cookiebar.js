jQuery Cookiebar
https://github.com/ninefour/cookiebar.js

Cookiebar is a tiny (3kb) little jQuery script which you can use to add an implied consent style bar to the top of your website. It's mildly responsive and minimises HTTP requests (it's just one file). It includes a dismiss button so users can prevent it from being displayed again. If you have any thoughts on how this could be improved please don't hesitate to let me know (nathan@ninefour.co.uk).

*** Using Cookiebar ***

To use Cookiebar simply add a link to the JavaScript to the bottom of your document (before the closing </body>):

<script type="text/javascript" src="https://raw.github.com/ninefour/cookiebar.js/master/cookiebar.jquery.min.js"></script>

…then add the following meta tag to your document head:

<link title="Cookie Policy" rel="cookie-policy" href="/cookie-policy" />

Change the 'content' value of the meta tag to reflect the location of your privacy policy document. That's it - you're done!