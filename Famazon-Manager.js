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

//this is the function for option 1 of the question above.
var viewProducts = function(){
	//connects to the mysql database called products and returns the information from that database
	connection.query('SELECT * FROM Products', function(err, res){
		console.log('');
		console.log('Products for Sale')
		console.log('');	

		//this creates a table outline in the node app to organize the data
		var table = new Table({
			head: ['Item Id#', 'Product Name', 'Department Name', 'Price', 'Stock Quantity'],
			style: {
				head: ['blue'],
				compact: false,
				colAligns: ['center'],
			}
		});

//this loops through the mysql connection and for each item that is returned, the information is then pushed to the table
for(var i=0; i<res.length; i++){
	table.push(
		[res[i].ItemID, res[i].ProductName, res[i].DepartmentName, res[i].Price, res[i].StockQuantity]
	);
}

//this console.logs the table and then ends the mysql query connection
console.log(table.toString());
connection.end();
})
};

//this creates the function for the second option from the prompt
var viewInventory = function(){

//starts the connection to the mysql database Products and only returns items that have a stock quantity of less than 5
connection.query('SELECT * FROM Products WHERE StockQuantity < 5', function(err, res){
console.log('');
console.log('Items With Low Inventory');
console.log('');

var table = new Table({
	head: ['Item Id#', 'Product Name', 'Department Name', 'Price', 'Stock Quantity'],
	style: {
		head: ['blue'],
		compact: false,
		colAligns: ['center'],
	}
});

//loops through the data returned from mysql and pushes it into the table to be logged on the console
for(var i=0; i<res.length; i++){
	table.push(
		[res[i].ItemID, res[i].ProductName, res[i].DepartmentName, res[i].Price, res[i].StockQuantity]
	);
}

console.log(table.toString());
connection.end();
})
};

//creates the function for the third option of the prompt
var addInventory = function(){
	//this adds the variable that will prompt the information needed to replenish the stock quantity of a certain item from the product list
	var addInvt = {
		properties:{
			inventoryID: {
				description: colors.green('What is the ID number of the product you want to add inventory for?')
			},
			inventoryAmount:{
				description: colors.green('How many items do you want to add to the inventory?')
			}
		},
	};

	prompt.start();
