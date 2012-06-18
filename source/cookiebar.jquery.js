$(document).ready(function () {
  
	/*!
	 * jQuery Cookiebar
	 * https://github.com/ninefour/cookiebar.js
	 *
	 * Copyright 2012, Nathan Pitman
	 * Functions to write and read cookies inspired by http://www.quirksmode.org/js/cookies.html
	 */
	
	// Cookie Policy URL (cp:url)
	var cb_policy = $("link[rel=cookie-policy]").attr("href");
	
	// The markup for the cookie bar itself
	var cb_html = "<div id='cb'><p>This website uses cookies. You can <a href='"+cb_policy+"'>change your cookie settings</a> to disable them, if not we'll assume that you are happy to receive all cookies.</p><button title='Dismiss'><span>Dismiss</span></button></div>";

	// Get the offset of the body to pass to the cookiebar CSS below	
	var cb_offset = $('body').offset();
	
	// The CSS that's applied to the cookiebar (note the base64 encoded dismiss icon)
	var cb_css = "<style>#cb { margin-top: -"+cb_offset['top']+"px; margin-left: -"+cb_offset['left']+"px; margin-right: -"+cb_offset['left']+"px; min-height: 34px; border-top: 1px solid #FFFFFF; border-bottom: 1px solid #CCCCCC; background-image:-moz-linear-gradient(50% 0% -90deg,rgb(236,236,236) 0%,rgb(225,225,225) 100%); background-image:-webkit-gradient(linear,50% 0%,50% 100%,color-stop(0, rgb(236,236,236)),color-stop(1, rgb(225,225,225))); background-image:-webkit-linear-gradient(-90deg,rgb(236,236,236) 0%,rgb(225,225,225) 100%); background-image:linear-gradient(-90deg,rgb(236,236,236) 0%,rgb(225,225,225) 100%); } #cb p { margin: 0 20px 0 0; padding: 10px; color: #000000; font-size: 12px; } @media (max-width: 480px) { #cb p { margin: 0 40px 0 0; } } #cb button { position: absolute; top: 10px; right: 10px; background-color: transparent; width: 15px; height: 15px; border: none; -webkit-border-radius: 7px; -moz-border-radius: 7px; border-radius: 7px; cursor: pointer; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA2CAYAAADK88l3AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAVdEVYdENyZWF0aW9uIFRpbWUAMTcvNi8xMmBTpuoAAAFwSURBVEiJ7dbBUcMwEAXQL0hHKSAt0AHyZVMOXPckpZM0kBlaoJLPAcvIEivLTpjh4H/yQXmOdleJgCwkI0mPhZD0JN/HZ5CskBQTG5GUOIMKxMQKZIZZSIUZyIQdAFwBvBo7Cdn+Q6Ns1563LcWzKPYWzLPs2gbMj5+poRVY3gSQxFOjgNvzkK2tRCaMxWTf3/4OxPesOQA4Nco2OOdiqgXs6T6lrYXf3tLZjMCi2KGFGFigMdmhhRTYW9oySbhK25iHTfYO7dAO7dB/gWZR1aiqvmOdV9XZHdLlCH4uXMP5fI4Wgp+/pYuIeADfUIGkVFiBpFxExDsDqTADmbDFO6SqTs/GGgC4pq213raUQURiXuwt2CAiEcjmaKzFsAbJmzEbyBVY1dG/OSIr6hTKE/CwYj/fgQDAy+12+zwejx+uA0nFb65ZvENmR6SFndJkBwDeQlKMbx9FZMiLnWO9PyNRROq5U9WqrRamqrM75Bfy3nZaXlYsZgAAAABJRU5ErkJggg==); background-size: 9px 27px; background-position: 3px -15px; background-repeat: no-repeat; } @media (max-width: 480px) { #cb button { width: 30px; height: 30px; -webkit-border-radius: 14px; -moz-border-radius: 14px; border-radius: 14px; background-size: 18px 54px; background-position: 6px -30px; } } #cb button:hover { background-color: #999999; background-position: 3px 3px; } @media (max-width: 480px) { #cb button:hover { background-position: 6px 6px; } } #cb button span { display: none; }</style>";
	
	// For reading the cookie
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	// Checks if the cookie exists, if not it renders the cookiebar
	if (!readCookie('cb_vis')) {
		
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