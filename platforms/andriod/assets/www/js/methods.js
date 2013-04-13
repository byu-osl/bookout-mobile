function log_out(){
	alert('implement me!!');
};

function visit_github(){
	window.open('https://github.com/organizations/byu-osl', '_blank', 'location=yes');
};

function log_in(){
	window.open('https://njcarrier.appspot.com/login', '_blank', 'location=yes');
	localStorage.logged_in = 'yes';
	location.reload();
};
function log_out(){
	localStorage.logged_in = 'no';
	location.reload();
};