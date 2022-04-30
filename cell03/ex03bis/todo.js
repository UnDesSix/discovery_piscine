function createDiv(task, uid) {
    if (uid == 0)
        uid = Date.now();
    var str_task = "<div class=\"task\" id=\""+ uid + "\">" + task + "</div>";
    $("#ft_list").prepend(str_task);
    addCookie(task, uid);
    $("#" + uid).click(function() {
        if (window.confirm("Are you sure you want to delete \"" + this.textContent + "\" ?"))
        {
            $(this).remove();
            removeCookies($(this).attr('id'));
        }
    });    
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
        const value = cookie.split("=");
        createDiv(value[1], parseInt(value[0]));
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


$(document).ready(function() {
    $("#button").click(function() {
        newTask();
    });
   window.onload = restoreCookies();
});