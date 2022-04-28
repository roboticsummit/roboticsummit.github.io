var grid = jQuery('#2762').masonry({
  itemSelector: '.scheduleday_wrapper',
  gutter: 40
});

jQuery('#2762 li .session_content_wrapper.expandable').on( 'click', function(e) {
	var targetID = jQuery(this).attr('data-expandid');
	
	jQuery(this).parent('li').find('#'+targetID).toggleClass('hide');
	jQuery(this).toggleClass('active');
	grid.masonry();
});
jQuery('#session_filter_2762 li a').on( 'click', function(e) {
	var targetFilter = jQuery(this).attr('data-filter');
	
	jQuery('#session_filter_2762 li a').removeClass('active');
	jQuery(this).addClass('active');
	
	if(targetFilter != '')
	{
		jQuery('#2762 ul.scheduleday_wrapper li').removeClass('hide');
		
		jQuery('#2762 ul.scheduleday_wrapper li').each(function(){
			if(!jQuery(this).hasClass(targetFilter) && !jQuery(this).hasClass('scheduleday_title'))
			{
				jQuery(this).addClass('hide');
			}
		});
	}
	else
	{
		jQuery('#2762 ul.scheduleday_wrapper li').removeClass('hide');
	}
	
	grid.masonry();
});

jQuery('#session_expand_2762').on( 'click', function(e) {
	jQuery('#2762 ul.scheduleday_wrapper li .session_content_wrapper.expandable').trigger('click');
	
	if(jQuery(this).hasClass('do_expand'))
	{
		jQuery(this).removeClass('do_expand');
		jQuery(this).addClass('do_collapse');
		
		jQuery(this).html('Collapse All -');
	}
	else
	{
		jQuery(this).addClass('do_expand');
		jQuery(this).removeClass('do_collapse');
		
		jQuery(this).html('Expand All +');
	}
	
	grid.masonry();
});