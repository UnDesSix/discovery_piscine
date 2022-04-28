let cookies = [];

function createDiv(task) {
    // Create the div_child
    let element = document.createElement("div");
    element.classList.add('task');

    // remove element onclick;
    element.onclick = function () {
        if (window.confirm("Are you sure you want to delete \"" + this.textContent + "\" ?"))
        {
            this.parentElement.removeChild(this);
            let index = cookies.indexOf(this.textContent);
            cookies.splice(index, 1);
            document.cookie = cookies;
        }
    };

    // Create text node inside the element div and append to the div_child
    element.appendChild(document.createTextNode(task));

    // Append the div_child to the div_parent
    document.getElementById('ft_list').insertBefore(element, document.getElementsByClassName('task')[0]);

    cookies.push(element.textContent);
    document.cookie = cookies;
}

function newTask() {
    let task = prompt("Enter the new element");
    createDiv(task);
}

function init() {
    let str = document.cookie;
    const cookies = str.split(',');
    for (const element of cookies) {
        createDiv(element);
        }
}

window.onload = init();