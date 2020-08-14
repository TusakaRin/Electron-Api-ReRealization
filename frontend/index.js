function hideAboutPage (document) {
    let aboutPage = document.getElementById('aboutpage')
    aboutPage.style.visibility = "hidden"
    aboutPage.style.width = "0px"
    aboutPage.style.height = "0px"
    document.getElementById('mainpage').style.visibility = 'visible';
}

function clickSection (section_name, document, btnId) {
    console.log(section_name)
    let sections = document.getElementsByClassName("content-section")
    Array.prototype.forEach.call(sections, function(section){
        if (section.id !== section_name) {
            section.classList.add('hide')
        }
    })
    document.getElementById(section_name).classList.remove('hide')
    let navBtns = document.getElementsByClassName('nav-button')
    Array.prototype.forEach.call(navBtns, function(btn){
        if (btn.id !== btnId) {
            btn.classList.remove('pressed')
        }
    })
    document.getElementById(btnId).classList.add('pressed')
}

function showDemoContent (btnId, document) {
    const btnIdSectionIdMap = {
        windowCreationDemoBtn: 'windowCreation',
        windowStateDemoBtn: 'windowManageState',
        windowBlurFocusDemoBtn: 'windowBlurFocus',
        windowFramelessBtn: 'windowFrameless'
    }
    let section = document.getElementsByClassName("demo-wrapper " + btnIdSectionIdMap[btnId])[0]
    let demoBoxWrapper = section.getElementsByClassName('demo-box-wrapper')[0]
    let verticalLines = section.getElementsByClassName('demo-vertical-line');
    Array.prototype.forEach.call(verticalLines, function(line){
        if (line.classList.contains('expand')) {
            line.classList.remove('expand')
            demoBoxWrapper.classList.remove('expand')
        } else {
            line.classList.add('expand')
            demoBoxWrapper.classList.add('expand')
        }
    })
}