document.addEventListener("DOMContentLoaded", function(){
	var btnShowForm = document.getElementsByClassName("btn-show-search-form")[0];
	var searchForm = document.getElementsByClassName("search-form")[0];
	var counterWrapper = Array.prototype.slice.call(document.getElementsByClassName("counter-wrapper"), 0);

	function showForm(event){
		if (event.target == btnShowForm){
			searchForm.classList.toggle("search-form-show");
			event.preventDefault();
		}
	}

	function counterIncDec(event){
		var target = event.target;
		var input;

		if (target.classList.contains("counter-btn-inc")){
			input = findField(this, "counter-field");
			if (input == -1) return;
			incValue(input);
		} else if (target.classList.contains("counter-btn-dec")){
			input = findField(this, "counter-field");
			if (input == -1) return;
			decValue(input);
		}
		event.preventDefault();
	}

	function onlyNumbers(event){
		target = event.target;
		if (!target.classList.contains("counter-field")) return;

		if (event.code.indexOf("Digit") == -1 && event.code.indexOf("Numpad") == -1) event.preventDefault();
	}
	
	counterWrapper.forEach(function(val, ind, arr){
		val.addEventListener("click", counterIncDec, false);
		val.addEventListener("keypress", onlyNumbers, false);
	});

	btnShowForm.addEventListener("click", showForm, false);

	/*  Вспомогательные функции  */

	function findField(parent, className){
		for (var i = 0; i < parent.children.length; i++) {
			if (parent.children[i].classList.contains("counter-field")){
				return parent.children[i];
			}
			else return -1;
		}
	}

	function incValue(field){
		if (!field.value) return;

		field.value++;
	}

	function decValue(field){
		if (!field.value || (field.value == 0)) return;
		
		field.value--;
	}

}, false);