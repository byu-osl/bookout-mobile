$(function(){



	$('#isbn_btn').click(add_book_via_text);
	$('#isbn_form').submit(function(){
		$('#isbn_btn').click();
		return 0;
	})

});



function add_book_via_text(){


	$('#isbn_btn').button('loading');
	$('#isbn_form').removeClass('control-group success warning');
	$('#isbn_form').addClass('control-group warning');
	$('#isbn_text').html('Adding book to your library');
	setTimeout(book_added_successfully_text,3000);
}


function book_added_successfully_text(){
	$('#isbn_btn').button('reset');
	$('#isbn_form').removeClass('control-group success warning');
	$('#isbn_form').addClass('control-group success');
	$('#isbn_text').html('Book added successfully');

	setTimeout(reset_isbn_text,3000);
}

function reset_isbn_text(){
	$('#isbn_btn').button('reset');
	$('#isbn_form').removeClass('control-group success warning');
	$('#isbn_text').html('');
	
}


function book_not_added_text(error){
	$('#isbn_btn').button('reset');
	$('#isbn_form').removeClass('control-group success warning');
	$('#isbn_form').addClass('control-group success');
	$('#isbn_text').html(error);

}


