function hideAboutPage (document) {
    let aboutPage = document.getElementById('aboutpage')
    aboutPage.style.visibility = "hidden"
    aboutPage.style.width = "0px"
    aboutPage.style.height = "0px"
    document.getElementById('mainpage').style.visibility = 'visible';
}

function clickSection (section_name, document) {
    console.log(section_name)
    document.getElementById(section_name).classList.remove('hide')
}

function showDemoContent (btnId, document) {
    console.log(btnId)
    let verticalLines = document.getElementsByClassName('demo-vertical-line');
    Array.prototype.forEach.call(verticalLines, function(line){
        if (line.classList.contains('expand')) {
            line.classList.remove('expand')
        } else {
            line.classList.add('expand')
        }
    })
}