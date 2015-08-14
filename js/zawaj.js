/**
 * Zawaj Template 
 *
 * Javascript actions, methods, and functions
 *
 * @package Zawaj
 * @version 1.0
 */
jQuery(document).ready(function($){
	"use strict";

	/**
	 * Initialize WOW Js
	 */
	new WOW().init();
	
	/**
	 * Mobile Menu Toggle function
	 */
	$('.menu-toggler').click(function(e){
		e.preventDefault();
		var $menu = $('ul.menu-ul', $(this).parent().parent());
		
		$menu.toggle();
		
		return;
	});


	/**
	 * Menu Toggle
	 * Fade-in/out
	 */
	$('.main-menu-toggler').click(function(e){
		e.preventDefault();
		$('.zawaj-menu .menu-ul').fadeToggle();
	});

	/**
	 * Sub Menu Toggle
	 */
	$('.toggle').click(function(e){
		e.preventDefault();

		$('>ul.sub-menu', $(this).parent().parent()).slideToggle();
	});
	
	/**
	 * jQuery Custom Select
	 */
	$('select.zawaj-select').customSelect();

	/**
	 * Wait for resize end before re-initialising
	 * the customSelect plugin to avoid
	 * browser lag and heavy memory consumption
	 * 
	 */
	function resizeCallBack(){
		$('select.zawaj-select').customSelect();
	}

	var begin;
	window.onresize = function(){
	  clearTimeout(begin);
	  begin = setTimeout(resizeCallBack, 100);
	};

	 /**
	  * Add 'msie' class to body for ie browsers
	  */
	 var ua = window.navigator.userAgent;
	    var msie = ua.indexOf("MSIE ");
	 
	 if (msie > 0) {
	  $('body').addClass('msie');
	 }
 
	/**
	 * Demo Template Customiser
	 * You can remove the Javascript below 
	 * for your convenience
	 */
	var htmlCustomiser  = '<div id="zawajCustomiser" class="type-italic">';

			htmlCustomiser += '<div id="zawajCustomiserBody">';
				
				// layout
				htmlCustomiser += '<label class="block" for="zawajCustomiserLayout">Select Layout:</label>';

				htmlCustomiser += '<select class="zawajCustomiserSelect zawaj-select" id="zawajCustomiserLayout" name="zawajCustomiserLayout">';
					htmlCustomiser += '<option value="fluid">Fluid</option>';
					htmlCustomiser += '<option value="boxed">Boxed</option>';
				htmlCustomiser += '</select>';
				// layout end

				// header skin
				htmlCustomiser += '<label class="block" for="zawajCustomiserHeader">Header Style:</label>';

				htmlCustomiser += '<select class="zawajCustomiserSelect zawaj-select" id="zawajCustomiserHeader" name="zawajCustomiserLayout">';
					htmlCustomiser += '<option value="">Style 1</option>';
					htmlCustomiser += '<option value="style-2">Style 2</option>';
					htmlCustomiser += '<option value="style-3">Style 3</option>';
					htmlCustomiser += '<option value="style-4">Style 4</option>';
					htmlCustomiser += '<option value="style-5">Style 5</option>';
					htmlCustomiser += '<option value="style-6">Style 6</option>';
					htmlCustomiser += '<option value="style-7">Style 7</option>';
					htmlCustomiser += '<option value="style-8">Style 8</option>';
					htmlCustomiser += '<option value="style-9">Style 9</option>';
				htmlCustomiser += '</select>';
				// header skin end
				
			htmlCustomiser += '</div>';

			htmlCustomiser += '<div id="zawajCustomiserToggle">';
			htmlCustomiser += '</div>';

		htmlCustomiser += '</div>';

	$('body').append(htmlCustomiser);

	$('#zawajCustomiserToggle').on('click', function(){
		$(this).parent().toggleClass('active');
	});

	$('#zawajCustomiserLayout').on('change', function(){
		$('body').toggleClass('boxed');
	});

	$('#zawajCustomiserHeader').on('change', function(){
		// the style class collection
		var styleClass = '';
		// the current style selected
		var currentStyle = $(this).val();
		// the collection of styles that toplinks should be remove
		var noTopLinksStyleCollection = ['style-4', 'style-5', 'style-6', 'style-7'];
		// the header object
		var $header = $('.zawaj-header');

		// iterate through each of the given styles and remove each of the class
		for (var i=1; i<=9; i++) {
			styleClass = 'style-' + i;
			if ($header.hasClass(styleClass)) {
				$header.removeClass(styleClass);
			}
		}

		// check if the current selected style belongs 
		// to no top links style collection. Display
		// the toplinks accordingly
		if (-1 != $.inArray(currentStyle, noTopLinksStyleCollection)) {
			$('.zawaj-header .top-links').css('display', 'none');
		} else {
			$('.zawaj-header .top-links').css('display', 'block');
		}
		// finally, add the current style selected
		$header.addClass(currentStyle);
	});
	// instantiate custom select for customiser
	$('select.zawajCustomiserSelect').customSelect();

});