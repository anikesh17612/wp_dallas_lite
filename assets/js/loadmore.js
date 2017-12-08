/* ******************************************************** */
/* ************* LOAD MORE POST ************* ***************/
/* ******************************************************** */
var ajaxurl = loadmore_params.adminUrl+"admin-ajax.php";
		var page = 2;
		jQuery(function($) {
			jQuery('body').on('click', '.loadmore', function() {
				var data = {
					'action': 'load_posts_by_ajax',
					'page': page,
					'wpdal_loadpost': 1
				};

				jQuery.post(ajaxurl, data, function(response) {
					if(response){
						jQuery('.site-main').append(response);
						page++;
					}else{
						jQuery('.loadmore').hide();
					}
				});
			});
		});
/* ******************************************************** */
/* **		 ADD CLASS IN BODY IN CASE OF BOX LAYOUT	*****/
/* ******************************************************** */
jQuery(document).ready(function(){
	var currentBodyLayout =loadmore_params.body_layout;
	if(currentBodyLayout == 'box_layout'){
		jQuery('body').addClass('box_layout');
	}
})
/* ******************************************************** */
/* ****************	BACK TO TOP LINK  ***********************/
/* ******************************************************** */	

jQuery(document).ready(function(){
	jQuery(".backtotop").hide();
	jQuery(".backtotop").on('click',function(){
		jQuery("html, body").animate({scrollTop: $("body").offset().top}, 500);
	});
	
})	

jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 10) {
        jQuery(".backtotop").stop(true, true).fadeIn();
    } else {
       jQuery(".backtotop").stop(true, true).fadeOut();
    }
});