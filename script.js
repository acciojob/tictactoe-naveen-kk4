//your JS code here. If required.
let players=[];
let decider;
function formSubmitted(event){
	players=[];
	decider=true;
	event.preventDefault();
	players.push(document.getElementById("player-1").value);
	players.push(document.getElementById("player-2").value);
	console.log(players);
	document.getElementsByTagName("form")[0].style.display = "none";
	document.getElementsByClassName("invisible")[0].style.visibility = "visible";
	document.getElementsByClassName("message")[0].innerHTML = `${players[0]} ,you're up`;
	
}

function validateSec(){
	let found = true;
	for(let i = 0;i<9;i+=3){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "O"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 0;i<9;i+=3){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i =1;i<9;i+=3){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "O"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 1;i<9;i+=3){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i =2;i<9;i+=3){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "O"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 2;i<9;i+=3){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i = 0;i<9;i+=4){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "O"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 0;i<9;i+=4){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i = 2;i<8;i+=2){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "O"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 2;i<8;i+=2){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i = 0;i<3;i++){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "O"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 0;i<3;i++){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i = 3;i<6;i++){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "O"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 3;i<6;i++){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i = 6;i<9;i++){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "O"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 6;i<9;i++){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	return false;
	
}
function validateFirst(){
	let found = true;
	for(let i = 0;i<9;i+=3){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "X"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 0;i<9;i+=3){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i =1;i<9;i+=3){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "X"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 1;i<9;i+=3){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i =2;i<9;i+=3){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "X"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 2;i<9;i+=3){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i = 0;i<9;i+=4){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "X"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 0;i<9;i+=4){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i = 2;i<8;i+=2){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "X"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 2;i<8;i+=2){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i = 0;i<3;i++){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "X"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 0;i<3;i++){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i = 3;i<6;i++){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "X"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 3;i<6;i++){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	found=true;
	for(let i = 6;i<9;i++){
         if(document.getElementById(`grid-item-${i}`).innerHTML != "X"){
              found=false;
			  break;
		 }
	}
	if(found){
		for(let i = 6;i<9;i++){
			document.getElementById(`grid-item-${i}`).style.backgroundColor="purple";
	   }

		return true;}
	return false;
	
}
function cellFunction(id){
	if(document.getElementById(id).innerHTML.length!=0){alert("try another block");return;}
	if(decider){
		document.getElementById(id).innerHTML="X";
		decider = false;
		if(validateFirst()){
			document.getElementsByClassName("message")[0].innerHTML = `${players[0]} ,congratulations you won`;   
		}
		else document.getElementsByClassName("message")[0].innerHTML = `${players[1]} ,you're up`;
	}
	else{
		document.getElementById(id).innerHTML="O";
		decider = true;
		if(validateSec()){
			document.getElementsByClassName("message")[0].innerHTML = `${players[1]} ,congratulations you won`;   
		}
		else document.getElementsByClassName("message")[0].innerHTML = `${players[0]} ,you're up`;
	}
	

}
