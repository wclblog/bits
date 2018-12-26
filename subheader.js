jQuery('.subheader ul:eq(0)').empty();

jQuery('.main h2').each(function() {

	var wd = String(jQuery(this).text());
	
	wd = wd.replace(/^(\w*?)\s.*?$/, '$1');
	
	jQuery(this).attr('id', wd);
	
	jQuery('.subheader ul:eq(0)').append('<li><a href="#' + wd + '">' + jQuery(this).text() + '<\/a> | <\/li>');

});
