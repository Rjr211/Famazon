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

var inventoryUpdate = [];
var addedProduct = [];

connection.connect();

// * List a set of menu options: 1) View Products for Sale 2) View Low Inventory 3) Add to Inventory 4) Add New Product

//creates the prompt that will be loaded when the app loads
var managerOptions = {
	properties:{
		mOptions:{
			description: colors.blue('Key in one of the following options: 1) View Products for Sale 2) View Low Inventory 3) Add to Inventory 4) Add New Product')
		},
	},
};

//start the prompt
prompt.start();
//this prompts the above question and below it states what will be done based on what number the user types
prompt.get(managerOptions, function(err, res){
	if(res.mOptions == 1){
		viewProducts();
	} else if(res.mOptions == 2){
		viewInventory();
	} else if(res.mOptions == 3){
		addInventory();
	} else if(res.mOptions ==4){
		addNewProduct();
	} else {
		console.log('You picked an invalid choice.');
		connection.end();
	}
});

