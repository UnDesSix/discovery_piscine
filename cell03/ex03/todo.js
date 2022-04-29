function createDiv(task, uid) {
    // Create the div_child
    let element = document.createElement("div");
    element.classList.add('task');
    if (uid == 0)
        uid = Date.now()

    element.setAttribute('data-todo', uid);

    // remove element onclick;
    element.onclick = function () {
    if (window.confirm("Are you sure you want to delete \"" + this.textContent + "\" ?"))
        {            
            // remove the div cliked on
            this.parentElement.removeChild(this);

            // remove the right cookie
            removeCookies(this.getAttribute('data-todo'));
        }
    };

    // Create text node inside the element div and append to the div_child
    element.appendChild(document.createTextNode(task));

    // Append the div_child to the div_parent
    document.getElementById('ft_list').insertBefore(element, document.getElementsByClassName('task')[0]);

    addCookie(element.textContent, uid)
}

function newTask() {
    let task = prompt("Enter the new element");
    if (task)
        createDiv(task, 0);
}


function restoreCookies() {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const value = cookie.split("=")
        createDiv(value[1], value[0]);
    }
}


function addCookie(cvalue, ckey) {
    var now = new Date();
    now.setTime(now.getTime() + 1 * 3600 * 1000);

    document.cookie= ckey + "=" + cvalue + ";expires=" + now.toUTCString() + "; SameSite=None; Secure";
 }

 function removeCookies(key_to_del) {
    var res = document.cookie;
    var multiple = res.split(";");
    for(var i = 0 ; i < multiple.length; i++) {
       var key = multiple[i].split("=");
       key[0] = parseInt(key[0]);
       if (key[0] == key_to_del)
       {
        document.cookie=key[0]+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=None; Secure";
    }
    }
 }

window.onload = restoreCookies();