$(document).ready(function () {
  
	/*!
	 * jQuery Cookiebar Plugin
	 * https://github.com/ninefour/jquery-cookiebar
	 *
	 * Copyright 2012, Klaus Hartl
	 * Functions to write, read and delete cookies from the Cookie plug-in written by Klaus Hartl (https://github.com/carhartl/jquery-cookie)
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.opensource.org/licenses/GPL-2.0
	 */
	
	// Cookie Policy URL, change this to match the relative URL of your cookie policy file
	var cb_policy = $("meta[name=cp:url]").attr("content");
	
	// The markup for the cookie bar itself
	var cb_content = "<div id='cookiebar'><p>This website uses cookies. You can <a href='"+cb_policy+"'>change your cookie settings</a> to disable them, if not we'll assume that you are happy to receive all cookies.</p><button title='Dismiss'><span>Dismiss</span></button></div>";
	
	// The CSS that's applied to the cookiebar (note the base64 encoded dismiss icon)
	var cb_css = "<style>#cookiebar { position: static; min-height: 34px; border-top: 1px solid #FFFFFF; border-bottom: 1px solid #CCCCCC; background-image:-moz-linear-gradient(50% 0% -90deg,rgb(236,236,236) 0%,rgb(225,225,225) 100%); background-image:-webkit-gradient(linear,50% 0%,50% 100%,color-stop(0, rgb(236,236,236)),color-stop(1, rgb(225,225,225))); background-image:-webkit-linear-gradient(-90deg,rgb(236,236,236) 0%,rgb(225,225,225) 100%); background-image:linear-gradient(-90deg,rgb(236,236,236) 0%,rgb(225,225,225) 100%); } #cookiebar p { margin: 0 20px 0 0; padding: 10px; color: #000000; font-size: 12px; } @media (max-width: 480px) { #cookiebar p { margin: 0 40px 0 0; } } #cookiebar button { position: absolute; top: 10px; right: 10px; background-color: transparent; width: 15px; height: 15px; border: none; -webkit-border-radius: 7px; -moz-border-radius: 7px; border-radius: 7px; cursor: pointer; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA2CAYAAADK88l3AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAVdEVYdENyZWF0aW9uIFRpbWUAMTcvNi8xMmBTpuoAAAFwSURBVEiJ7dbBUcMwEAXQL0hHKSAt0AHyZVMOXPckpZM0kBlaoJLPAcvIEivLTpjh4H/yQXmOdleJgCwkI0mPhZD0JN/HZ5CskBQTG5GUOIMKxMQKZIZZSIUZyIQdAFwBvBo7Cdn+Q6Ns1563LcWzKPYWzLPs2gbMj5+poRVY3gSQxFOjgNvzkK2tRCaMxWTf3/4OxPesOQA4Nco2OOdiqgXs6T6lrYXf3tLZjMCi2KGFGFigMdmhhRTYW9oySbhK25iHTfYO7dAO7dB/gWZR1aiqvmOdV9XZHdLlCH4uXMP5fI4Wgp+/pYuIeADfUIGkVFiBpFxExDsDqTADmbDFO6SqTs/GGgC4pq213raUQURiXuwt2CAiEcjmaKzFsAbJmzEbyBVY1dG/OSIr6hTKE/CwYj/fgQDAy+12+zwejx+uA0nFb65ZvENmR6SFndJkBwDeQlKMbx9FZMiLnWO9PyNRROq5U9WqrRamqrM75Bfy3nZaXlYsZgAAAABJRU5ErkJggg==); background-size: 9px 27px; background-position: 3px -15px; background-repeat: no-repeat; } @media (max-width: 480px) { #cookiebar button { width: 30px; height: 30px; -webkit-border-radius: 14px; -moz-border-radius: 14px; border-radius: 14px; background-size: 18px 54px; background-position: 6px -30px; } } #cookiebar button:hover { background-color: #999999; background-position: 3px 3px; } @media (max-width: 480px) { #cookiebar button:hover { background-position: 6px 6px; } } #cookiebar button span { display: none; }</style>";
	
	// For writing and reading the cookie
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
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

	if (!readCookie('cb_visibility')) {
		
		// Append/prepend the cookiebar CSS and content to the document
		$('head').append(cb_css);
		$('body').prepend(cb_content);
		
		// Write the cookie on click to hide the cookie bar
		$('#cookiebar button').click(function() {
			createCookie('cb_visibility',0,365);
			$('#cookiebar').toggle();
		});

	};

});