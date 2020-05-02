/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...



/** Unique tabs using H6 as an anchor **/
$($('.product-single__content-text').find('h6').get().reverse()).each(function(i) {
  	
  	var tabName = $(this).text();
  	tabContent = '';
  	
  	//check if h6 has text inside
 	if ($(this).text() != '') {
      	
      	//hide h6
    	$(this).hide();
  
      	//combine content between H6 elements
        $(this).nextUntil('h6').each(function() {
            tabContent = tabContent + this.outerHTML;
          	
          	//hide content
            $(this).hide();
        });
		
      	//generate tab HTML
      	$('.js-accordion').prepend('<div id="acc-unique-'+ [i] +'" class="product-single__accordion__item js-accordion-info"><div class="product-single__accordion__item-wrap rte">' + tabContent + '</div></div>');
        $('.js-accordion').prepend('<a href="#acc-unique-'+ [i] +'" class="product-single__accordion__title js-accordion-trigger"><h4 class="product-single__accordion__title-text">' + tabName + '</h4><span class="product-single__accordion__title-icon icon-fallback"><i class="icon icon--plus" aria-hidden="true"></i><span class="icon-fallback__text">Open tab</span></span></a>');

    } else {	

      	//hide empty H6
      	$(this).hide();
    }
});