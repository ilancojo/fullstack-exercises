
const posts = [];

function render() {

    const container = document.getElementById("container")  

     // 1) delete UI
    container.innerHTML = "";
    //$( #container ).empty();

    for (let i = 0; i < posts.length; i++) {
    
        const div = document.createElement("div")
        div.innerText = posts[i].name + ":" + posts[i].text ;
        container.appendChild(div)
    }
}


function addPost() {
    const inputName = document.getElementById("inputName")
    const inputWish = document.getElementById("inputWish")
    const nameVal = inputName.value
    const wishVal = inputWish.value

    posts.push({
        name: nameVal,
        text: wishVal
    })
    render()
}

document.getElementById("postBtn").addEventListener("click", addPost)


