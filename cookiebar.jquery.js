$(document).ready(function () {
  
	/*!
	 * jQuery Cookiebar
	 * https://github.com/ninefour/cookiebar.js
	 *
	 * Copyright 2012, Nathan Pitman
	 */
	
	// Cookie Policy URL (cp:url)
	var cb_policy = $("link[rel=cookie-policy]").attr("href");
	
	// The markup for the cookie bar itself
	var cb_html = "<div id='cb'><p>This website uses cookies. You can <a href='"+cb_policy+"'>change your cookie settings</a> to disable them, if not we'll assume that you are happy to receive all cookies.</p><button title='Dismiss'><span>Dismiss</span></button></div>";

	// Get the offset of the body to pass to the cookiebar CSS below	
	var cb_offset = $('body').offset();
	
	// The CSS that's applied to the cookiebar (note the base64 encoded dismiss icon)
	var cb_css = "<style>#cb { margin-top: -"+cb_offset['top']+"px; margin-left: -"+cb_offset['left']+"px; margin-right: -"+cb_offset['left']+"px; min-height: 34px; border-top: 1px solid #FFFFFF; border-bottom: 1px solid #CCCCCC; background-color: #EBEBEB; background-image:-moz-linear-gradient(50% 0% -90deg,rgb(236,236,236) 0%,rgb(225,225,225) 100%); background-image:-webkit-gradient(linear,50% 0%,50% 100%,color-stop(0, rgb(236,236,236)),color-stop(1, rgb(225,225,225))); background-image:-webkit-linear-gradient(-90deg,rgb(236,236,236) 0%,rgb(225,225,225) 100%); background-image:linear-gradient(-90deg,rgb(236,236,236) 0%,rgb(225,225,225) 100%); } #cb p { margin: 0 20px 0 0; padding: 10px; color: #000000; font-size: 12px; } @media (max-width: 480px) { #cb p { margin: 0 40px 0 0; } } #cb button { position: absolute; top: 10px; right: 10px; background-color: transparent; width: 15px; height: 15px; border: none; -webkit-border-radius: 7px; -moz-border-radius: 7px; border-radius: 7px; cursor: pointer; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAVdEVYdENyZWF0aW9uIFRpbWUAMTcvNi8xMmBTpuoAAAPYSURBVGiB7ZnPVdtAEMY/5eWOO8Ad4FSAqQB3gLhojjgdkApwjuOLRQUxFURUgKkgpALsCiYHzcJ6Pas/QTxknr/3/Cxrd2f2t9r9tJITEcFn1JeP7sB76dOCff3oDvhKkqRxXREZAFjHynt7xUQkF5GVAoRlAwAFgLwqQG8+AZTTFpyIDPScU27GqkskIqmIzMIRE5GliIy6BgugtuAMqChcXbI0aBwGX3cJ5w2kpVUESrRNK7BFg+CzLsFq4BpB1YJpkhDO11VXUD5YCzgTqhFYBdy0S6gQTPNOK6Aq89favZSO9M0oSgHsWHFX0rxpRZXq/DWjGHMhJ+dWXa+xury1+euS5UGgVHbnft4lWAuoSrgmV+zBQXkj6uAeYiP2BrAiAmANqlPRCswbwZExhSddQnn5RiLyHEIZg+r0LMa9tLNOdQVmwO0YiAdnQokIEj/gR8vf3essGSZJsrTqKvBKP7ux+gTWpXr72PJWHcD2TQewfdMBbN90ANs3HcD2Tb14xV31apuZBwDCx6YVEUVfb/dmd2+BMfMYwDWA00izewDXRFSEBb0E0yu0RBwo1D2AiX8FewfGzCOUfzYctQyxATAmohVQAWaMYApgjNfXXWvtQE5E67cOTpIkLs8TtqE2iEOGZRsAQ9efSldk5okmuwFwjnJ6nOrxDYAnrdOF8qCjjwCGAG6NulbZEby/laJXjJlTAIuGnbrMsiyvrRXRfD4fA/jtnXpEObXWAMDMOYCLBmUAcJZlWWFeMWYe4hVqA+BMA8I7d6nfALCYz+fD/2BySoPfuW8GRJSivDpbUKpZ0DYF4jfoa+94rJY61sBuoeZ6zmrTVuPg943OmBcp3BaUZzY7sWJg/rqZauC1Nho593FlRpu2OjbOLQw4Cyo0l2MgDuZXvtB5DCJaE9GTBs6xPbfbWnQTLSxz0qVSVOVsulccqR27wNY25z30iN2pBh1c832jUxOwnQXrTcvHWKMOZBnFizxDMRUDu/OOJ761MvOKmQd6bhJp01b3we8dKGYehdMyAncPxMF8C10y88BbUycACp3ny0ibtgqnVR4xil+hoRh5l0AETO3djcQJyt2HbxQnAP7oNwDcZllW1HY/rhyv90TAs3vD/RZGmdNGY1XvFQ3ns3SbZVnalMCS7nSmKLdpvn6gvKVY7meVfSeiWdNN8FgDnAfV7gDMiKjoYhOsuXLUD2RMt7rmmu3ufTnLD52qKzDNMQNw1TLETyJ62Sz07nnMSd1vBntH4usvgCkRbZlPb8GcFHCC8hHFbQhWKM1sGQI59QbsPfRpX799WrB/g3KOjqC/gnEAAAAASUVORK5CYII=); background-size: 9px 27px; background-position: 3px -15px; background-repeat: no-repeat; } @media (max-width: 480px) { #cb button { margin: 0; padding: 0; width: 30px; height: 30px; -webkit-border-radius: 14px; -moz-border-radius: 14px; border-radius: 14px; background-size: 18px 54px; background-position: 6px -30px; } } #cb button:hover { background-color: #999999; background-position: 3px 3px; } @media (max-width: 480px) { #cb button:hover { background-position: 6px 6px; } } #cb button span { display: none; }</style>";
	
	// For reading the cookie
	function cb_vis() {
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf("cb_vis=") == 0) return c.substring("cb_vis=".length,c.length);
		}
		return null;
	}

	// Checks if the cookie exists, if not it renders the cookiebar
	if (!cb_vis()) {
		
		// Append/prepend the cookiebar CSS and content to the document
		$('head').append(cb_css);
		$('body').prepend(cb_html);
		
		// Write the cookie on click to hide the cookie bar
		$('#cb button').click(function() {
			var expires = 365 * 10;
			document.cookie = "cb_vis=0"+expires+"; path=/";
			$('#cb').toggle();
		});

	};

});