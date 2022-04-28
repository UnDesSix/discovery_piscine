function changeSize (value) {
    // Get the value --size and store it as a int
    let size_px = getComputedStyle(document.documentElement).getPropertyValue('--size');
    let size = parseInt(size_px)

    // Increment/Decrement the size until 420 is reached, then return to 200 and add px at the end
    size += value;
    if (size > 420)
        size = 200;
    if (size < 200)
        size = 200;
    size_px = size + 'px'

    // Change the variable in css sheet
    document.documentElement.style.setProperty('--size', size_px);
}

function changeColor (direction) {
    // Get the value --color-id and store it as a int
    let color_id = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--color-id'));

    // Increment/Decrement the color_id until 3 is reached, then return to 1
    color_id = color_id + direction;
    if (color_id > 3)
        color_id = 1;
    if (color_id < 1)
        color_id = 3;

    // Change the variables in css sheet
    if (color_id == 1) {
        document.documentElement.style.setProperty('--color', 'red');
        document.documentElement.style.setProperty('--color-id', color_id);
    }
    else if (color_id == 2) {
        document.documentElement.style.setProperty('--color', 'green');
        document.documentElement.style.setProperty('--color-id', color_id);
    }
    else {
        document.documentElement.style.setProperty('--color', 'blue');
        document.documentElement.style.setProperty('--color-id', color_id);
    }
}

function clickOnTheBalloon()
{
    changeColor(1)
    changeSize(10)
}

function pressTheBalloon()
{
    changeColor(-1)
    changeSize(-5)
}