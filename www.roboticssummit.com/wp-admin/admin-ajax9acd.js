jQuery('#16511195341109840168 ul.scheduleday_wrapper li.scheduleday_title').on( 'click', function(e) {
	jQuery('#16511195341109840168 ul.scheduleday_wrapper li.scheduleday_title').removeClass('active');
	jQuery(this).addClass('active');
	
	var targetTab = jQuery(this).attr('data-tab');
	jQuery('#16511195341109840168 ul.scheduleday_wrapper.tab_content').addClass('hide');
	jQuery('#16511195341109840168 ul#'+targetTab).removeClass('hide');
});

jQuery('#16511195341109840168 li .session_content_wrapper.expandable').on( 'click', function(e) {
	var targetID = jQuery(this).attr('data-expandid');
	
	jQuery('#'+targetID).toggleClass('hide');
	jQuery(this).toggleClass('active');
});
jQuery('#session_filter_16511195341109840168 li a').on( 'click', function(e) {
	var targetFilter = jQuery(this).attr('data-filter');
	
	jQuery('#session_filter_16511195341109840168 li a').removeClass('active');
	jQuery(this).addClass('active');
	
	if(targetFilter != '')
	{
		jQuery('#16511195341109840168 ul.scheduleday_wrapper li').removeClass('hide');
		
		jQuery('#16511195341109840168 ul.scheduleday_wrapper li').each(function(){
			if(!jQuery(this).hasClass(targetFilter) && !jQuery(this).hasClass('scheduleday_title'))
			{
				jQuery(this).addClass('hide');
			}
		});
	}
	else
	{
		jQuery('#16511195341109840168 ul.scheduleday_wrapper li').removeClass('hide');
	}
});

jQuery('#session_expand_16511195341109840168').on( 'click', function(e) {
	jQuery('#16511195341109840168 ul.scheduleday_wrapper li .session_content_wrapper.expandable').trigger('click');
	
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
});
