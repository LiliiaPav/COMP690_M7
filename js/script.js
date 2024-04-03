// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let fmEmpl = document.getElementById("addForm");
let tblEmpl = document.getElementById("employees");
let valCounter = document.getElementById("empCount");
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let counter=0;

// ADD EMPLOYEE
fmEmpl.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const $         = (id) => document.getElementById(id)
    let valEmplId   = $("id").value;
    let valEmplName = $("name").value;
    let valEmplExt  = $("extension").value;
    let valEmplEmail= $("email").value;
    let valEmplDep  = $("department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let tr      = tblEmpl.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let tdID    =tr.insertCell();
    let tdName  =tr.insertCell();
    let tdExt   =tr.insertCell();
    let tdEmail =tr.insertCell();
    let tdDep   =tr.insertCell();
    let tdDel   =tr.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID=document.createTextNode(valEmplId);
    tdID.appendChild(textID);
    let textName=document.createTextNode(valEmplName);
    tdName.appendChild(textName);
    let textExt=document.createTextNode(valEmplExt);
    tdExt.appendChild(textExt);
    let textEmail=document.createTextNode(valEmplEmail);
    tdEmail.appendChild(textEmail);
    let textDep=document.createTextNode(valEmplDep);
    tdDep.appendChild(textDep);

    // CREATE THE DELETE BUTTON
    let deleteBtn=document.createElement('button');
    let text=document.createTextNode('X');
    deleteBtn.appendChild(text);
    deleteBtn.className='btn btn-sm bg-danger text-white text-center';
    tdDel.appendChild(deleteBtn);

    // RESET THE FORM
    fmEmpl.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    counter+=1;
    valCounter.value=counter;
    valCounter.className="text-muted";

})

// DELETE EMPLOYEE
tblEmpl.addEventListener('click', (e) =>{
    console.log(e.target.parentElement.cellIndex)
    if(e.target.parentElement.cellIndex==5){
        if (confirm('Are you sure you want to delete this employee?')){
            tblEmpl.deleteRow(e.target.parentElement.parentElement.rowIndex);
            counter-=1;
            valCounter.value=counter;
        }
    }
})