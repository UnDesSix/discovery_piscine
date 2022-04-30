function createDiv(task, uid) {
    // create the div_child with 'task' as a class
    let element = document.createElement("div");
    element.classList.add('task');

    // generate unique uid based on date and set it as value for 'data-todo' attribute
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
    if (!document.cookie)
        return ;
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const value = cookie.split("=")
        createDiv(value[1], value[0]);
    }
}

function addCookie(cvalue, ckey) {
    const valid_day = 2;
    var now = new Date();

    var expire_date = (new Date(Date.now()+ valid_day * 24 * 60 * 60 * 1000)).toUTCString();
    document.cookie= ckey + "=" + cvalue + ";expires=" + expire_date + "; SameSite=None; Secure";
 }

 function removeCookies(key_to_del) {
    var res = document.cookie;
    var multiple = res.split(";");
    for(var i = 0 ; i < multiple.length; i++) {
        var key = multiple[i].split("=");
        key[0] = parseInt(key[0]);
        if (key[0] == key_to_del)
            document.cookie=key[0]+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=None; Secure";
    }
 }

window.onload = restoreCookies();