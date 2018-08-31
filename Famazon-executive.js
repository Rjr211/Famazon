var mysql = require('mysql');
var prompt = require('prompt');
var colors = require('colors/safe');
var Table = require('cli-table');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'Famazon', 
});

ar newDept = [];


connection.connect();

//creates the question that will be prompted to the user
var executiveOptions = {
	properties:{
		eOptions:{
			description: colors.blue('Key in one of the following options: 1) View Product Sales by Department 2) Create New Department')
		},
	},
};

prompt.start();

//gets the information responded by the user from the prompt
prompt.get(executiveOptions, function(err, res){
	//this explains what should be done based on what the user answered to the prompt
	if(res.eOptions == 1){
		viewProductSales();
	} else if(res.eOptions == 2){
		createDepartment();
	} else{
		console.log('You picked an invalid choice!');
		connection.end();
	}
});
