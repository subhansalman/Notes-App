var inputNote=document.querySelector("#inputNote");
var parent=document.querySelector("#parent");
var notesArr=[]

function addNote(){
  if(inputNote.value.length<3){
    alert("Enter The correct prompt")
    return
  }
  var getNotes=localStorage.getItem("notes");
  console.log("get notes", getNotes);

  if(getNotes==null){
    
    var tempArr=[inputNote.value]
    localStorage.setItem("notes",JSON.stringify(tempArr));
  }else{
    var tempArr=JSON.parse(getNotes);
    tempArr.unshift(inputNote.value);
    localStorage.setItem("notes",JSON.stringify(tempArr));
  }


    renderUI()
inputNote.value=" ";

}

function renderUI(){
  var notesArr = JSON.parse(localStorage.getItem("notes"));

 
 
  var cardsUI ="";
  
  for(var i=0; i<notesArr.length; i++){
    cardsUI+=`<div class="alert alert-success d-flex justify-content-between" role="alert">
    ${notesArr[i]}
               <div>
                   <i class="fa-regular fa-pen-to-square" onclick="editHandler(this)" id=${i}></i>
                   <i class="fa-solid fa-trash-can" onclick="deleteHandler(this)" ${i}></i>
               </div>
  
  
             </div>`
  }
  
 


          console.log(cardsUI);
          parent.innerHTML =cardsUI;
          
}



 // function editHandler(ele){
  //   var indexNumber=ele.id;
  //   console.log("index number",indexNumber)
  //   var notesArr=JSON.parse(localStorage.getItem("notes"))
  //   var editPrompt=prompt("Enter your edits")
  //   notesArr.splice(indexNumber, 1,editPrompt)
  //   console.log(notesArr,"notesArr")
  //   localStorage.setItem("notes", JSON.stringify(notesArr))
  //   renderUI()
  
  // }

  function editHandler(ele) {
    var indexNumber = ele.id;
    console.log(indexNumber);
    var notesArr = JSON.parse(localStorage.getItem("notes"));
    var editPrompt = prompt("Enter edit value");
    notesArr.splice(indexNumber, 1, editPrompt);
    console.log("notesArr", notesArr);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    renderUI();
  }



// function deleteHandler(ele){
  //   var notesArr=JSON.parse(localStorage.getItem("notes"))
  //   var index=ele.id;
  //   notesArr.splice(index,1);
  //   console.log("Checking",ele.id,notesArr)
  //   localStorage.setItem("notes",JSON.stringify(notesArr));
  //   renderUI()
  // }
  
  
  
  function deleteHandler(ele) {
    var notesArr = JSON.parse(localStorage.getItem("notes"));
    var index = ele.id;
    notesArr.splice(index, 1);
    console.log("checking,.....", ele.id, notesArr);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    renderUI();
    // ele.parentNode.parentNode.remove();
  }
  
  
 
