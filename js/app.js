
document.getElementById("myForm").addEventListener('submit', (e)=>{

	Create();

	Read();

	document.getElementById('myForm').reset();

});


function Create()

{
	let name = document.getElementById("name").value;

	if(name == ''){

		alert("Attention! Le champs doit être complété!");

		return false;
	}
	
		if(localStorage.getItem("names") === null){

			var names = [];

			names.push(name);

			localStorage.setItem("names", JSON.stringify(names));

		} else 

		{
			var names = JSON.parse(localStorage.getItem("names"));

			names.push(name);

			localStorage.setItem("names", JSON.stringify(names));

		}

		Read();

}

function Read()

{
	var userTR = document.getElementById("userTR");

	userTR.innerHTML = '';

	var namesValuesToPrint = JSON.parse(localStorage.getItem("names"));

	if(namesValuesToPrint != null)

	{
		for(var i=0; i < namesValuesToPrint.length; i++) {

			userTR.innerHTML += `
				
			      <div class="bg-dark text-white  border border-success card mb-2">
			        
			       
			        <div class="card-body">
			         <span class="fa fa-user"> </span>
			         <h4 class="text-white">${namesValuesToPrint[i]}</h4>

			         <button onclick="Edit(${i})" class="btn btn-warning"><span class="fa fa-edit"></span>  Edit</button>
			         <button onclick="Delete(${i})" class="btn btn-danger"><span class="fa fa-trash-alt"></span> Delete</button>
			        </div>

			     
			     </div>

			`
		}
	}


}


function Edit(iElement)

{

	var namesValuesToEdit = JSON.parse(localStorage.getItem("names"));

	var userTR = document.getElementById("userTR");

	userTR.innerHTML = '';

	if(namesValuesToEdit != null)
	{
		for(var i=0; i < namesValuesToEdit.length; i++)

		{
			if(iElement == i)
			{
				userTR.innerHTML += `
				
			      <div class="bg-dark text-white  border border-danger card mb-2">
			        
			       
			        <div class="card-body">
			         <span class="fa fa-user"> </span>
			         
			         <input type="text" placeholder="${namesValuesToEdit[i]}" id="newValueName" class="form-control">

			         <button onclick="UpdateEditElement(${i})" class="btn btn-warning"><span class="fa fa-edit"></span>  Validate</button>
			         <button onclick="Read()" class="btn btn-danger"><span class="fa fa-ban"></span> Cancel</button>
			        </div>

			     
			     </div>

			`


			} else 
			{
				userTR.innerHTML += `
				
			      <div class="bg-dark text-white  border border-success card mb-2">
			        
			       
			        <div class="card-body">
			         <span class="fa fa-user"> </span>
			         <h4 class="text-white">${namesValuesToEdit[i]}</h4>

			         <button disabled onclick="Edit(${i})" class="btn btn-warning"><span class="fa fa-edit"></span>  Edit</button>
			         <button disabled  onclick="Delete(${i})" class="btn btn-danger"><span class="fa fa-trash-alt"></span> Delete</button>
			        </div>

			     
			     </div>

			`


			}

		}
	}

}


function UpdateEditElement(iElement)

{
	
	var namesValuesPresent = JSON.parse(localStorage.getItem("names"));

	namesValuesPresent[iElement] = document.getElementById("newValueName").value;

	if(namesValuesPresent[iElement] == '')
	{
		alert("Attention! Tapez la nouvelle valeur ou cliquer sur Cancel pour annuler");
	}
	else 
	{
		localStorage.setItem("names", JSON.stringify(namesValuesPresent));

		Read();

	}

}

function Delete(iElement)

{

	var allNamesValues = JSON.parse(localStorage.getItem("names"));

	allNamesValues.splice(iElement, 1);

	localStorage.setItem("names", JSON.stringify(allNamesValues));

	Read();

}

