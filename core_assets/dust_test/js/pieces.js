function set_title(){
	dust.render(
		"title_content", 
		{title:'Temp Gen'},
		function(err, out){
			$('head')
			  .html(out + $('head').html());
		}
	);
};

function set_header(which){
	dust.render(
		which, 
		base,
		function(err, out){
			$('body').html(out);
		}
	);
};


function set_footer(){
	dust.render(
		'footer', 
		base,
		function(err, out){
			$('body').html($('body').html() +out);
		}
	);
};
