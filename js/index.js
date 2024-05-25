var disabledTextInput = document.getElementById("disabledTextInput");
var exampleForm = document.getElementById("exampleForm");


disabledTextInput.addEventListener("keyup", checkname)
exampleForm.addEventListener("keyup", checkurl)


function checkname() {

    if (disabledTextInput.value.length >= "3") {
        disabledTextInput.classList.add("is-valid")
        disabledTextInput.classList.remove("is-invalid")
        return true;
    }
    else {
        disabledTextInput.classList.remove("is-valid")
        disabledTextInput.classList.add("is-invalid")
        return false;

    }
}



function checkurl() {
    var httpsRegex = /^\w+\.(\w){3,}$/;

    if (httpsRegex.test(exampleForm.value)) {
        exampleForm.classList.add("is-valid")
        exampleForm.classList.remove("is-invalid")
        return true;
    }
    else {
        exampleForm.classList.remove("is-valid")
        exampleForm.classList.add("is-invalid")
        return false;

    }
}


var myArr = JSON.parse(localStorage.getItem("Submits")) ?? [];
display();
function AddSubmit() {
    if (checkname() & checkurl()) {
        var Submit = {
            Name: disabledTextInput.value,
            urlExam: exampleForm.value,
        }
        myArr.push(Submit)



        Ondata();
        clear();

    } else {
        var fexs = new bootstrap.Model(document.getElementById("arr"), {
            Keyboard: false
        })

        fexs.toggle()
    }



}
function display() {
    var mytable = ""

    for (var i = 0; i < myArr.length; i++) {
        mytable += `
    <tr>
    <td>${i + 1}</td>
    <td>${myArr[i].Name}</td>
    <td>
    <a class="btn btn-success" href="${myArr[i].urlExam}">
    <i class="fa-solid fa-eye pe-2"></i>Visit
  </a>
  </td>
    <td>  <button onclick="AddDelete(${i})" class="btn btn-danger pe-2" >
    <i class="fa-solid fa-trash-can"></i>
    Delete
  </button></td>

    </tr>
    `
    }
    console.log(myArr);

    document.getElementById("tableContent").innerHTML = mytable
}
function clear() {

    disabledTextInput.value = ""
    exampleForm.value = ""


}

function Ondata() {
    localStorage.setItem("Submits", JSON.stringify(myArr))

    display();

}
function AddDelete(index) {
    myArr.splice(index, 1)
    Ondata()

}




