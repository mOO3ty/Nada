var bookname = document.getElementById("sitename")
var bookurl = document.getElementById("site")
var bookmarks = []
var modaalvalid= document.getElementById("modaal")
var closemodal = document.querySelectorAll(".modal-header i ")

if (localStorage.getItem("dataaaaa")) {
    var bookmarks = JSON.parse(localStorage.getItem("dataaaaa"))
    displayData()

}

bookname.addEventListener("keyup" ,function () {
    if (regexname.test(bookname.value)) {
        bookname.classList.replace("form-control1","form-control")
        bookname.classList.add("is-valid")
        bookname.classList.remove("is-invalid")
  
    }else{
        bookname.classList.replace("form-control1","form-control")
        bookname.classList.add("is-invalid")
        bookname.classList.remove("is-valid")

    }
     
})

bookurl.addEventListener("keyup" ,function () {
    if (regexurl.test(bookurl.value)) {
        bookurl.classList.replace("form-control1","form-control")
        bookurl.classList.add("is-valid")
        bookurl.classList.remove("is-invalid")

  
    }else{
        bookurl.classList.replace("form-control1","form-control")
        bookurl.classList.add("is-invalid")
        bookurl.classList.remove("is-valid")

    }
     
})

closemodal[0].addEventListener("click", valid )
modaalvalid.addEventListener("click", valid )
document.addEventListener("keyup",function (e) {
    if(e.code==="Escape" ){
        valid()
    }
})

function valid() {
    modaalvalid.classList.replace("d-flex","d-none")
}

function submit() {
if (regexname.test(bookname.value)&& regexurl.test(bookurl.value)) {
    

    var book = {
        Bookname: bookname.value,
        Bookurl: bookurl.value
    }
    bookmarks.push(book)
    localStorage.setItem("dataaaaa", JSON.stringify(bookmarks))
    displayData()
}
    
else{
    modaalvalid.classList.replace("d-none","d-flex")
}
  

}

function displayData() {
    var data = "";
    for (var i = 0; i < bookmarks.length; i++) {
        data += ` <tr>
        <td>`+ (i + 1) + `</td>
        <td>`+ bookmarks[i].Bookname + `</td>
        <td><a href="`+ bookmarks[i].Bookurl + `" target=_blank  class="text-decoration-none"> <button class="btn btn-visit" type="button"><i class="fa-solid fa-eye pe-2"></i> Visit</button></td></a>
        <td><button class="btn btn-delete" type="button"onclick="deletebook(`+ i + `)">  <i class="fa-solid fa-trash pe-2"></i>Delete</button></td>
      
    </tr>`
    }
    document.getElementById("tabledata").innerHTML = data
}

function deletebook(index) {
    bookmarks.splice(index, 1)
    localStorage.setItem("dataaaaa", JSON.stringify(bookmarks))
    displayData()

}

var regexname= /^.{3,}$/
var regexurl= /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/

