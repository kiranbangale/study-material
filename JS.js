// Object - it is key value pair - it can be of any type in js
	var obj_name = {
		key1: value1,
		key2: value2,
		key3: value3
	}

	var myObj = {
		name: 'kiran',
		empId: 50686,
		address: 'H-21'
	}

// Array - collection of similer type of elements but in js an array can be collection of any type
	var arr_name = [element1, element2, element3];

	var myArr = ['kiran', 'Grahita', 'DJ'];
	var myArr1 = ['kiran', 12, true];

// Function declaration
	function fun_name(params) {

	}

// Function call
	fun_name();
	fun_name(params);

// Scope
	() - Generates scope - ex: if(some_condition) execute_some_code
	(){} - Also generates scope - ex: if(some_condition) { execute_some_code }
	(){
		var a=12;
		(){
			a//a=12;
		}
	}

// Modules
	- Isolates the scope

	//=============
		var a;

		(
			var a=0;
			function abc() {a = 12;}
			function xyz() {a;}
		);

		(
			var a;
			function pqr() {a = 13;}
		);

		a=?;
	//=============

// IIFs - Immediatally Invoked Functions

()();

()(params);

(
	var a,b,c;
	function pqr (params) {
		//some code;
	};
)(params);

(function (global) {
	global
}(window));

/*Events, sync-asyn, scope, modules, window, document, DOM, BOM, IIFs, prototypical inheritance.*/
