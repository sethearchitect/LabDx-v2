const dropdownTabs = document.querySelectorAll('dropdown-tab');

//Product panel title tab
const panelNames = document.querySelectorAll('.tab-title');
//Product panel dropdown content
const dropdownContent = document.getElementsByClassName('panel-drop-content');
//product panels dropdown button
const dropdownbtn = document.querySelectorAll('#dropdown-btn');
//FAQ question title tabs
const questions = document.querySelectorAll('.question');

//Dynamically set height of dropdown name label
// function setDynamicHeight(elem) {
//     let height = elem.children[0].offsetHeight;
//     elem.style.height = `${height}px`;
// }
// window.addEventListener('resize', () => {
//     dropdownTabs.forEach(dropdownTab => {
//         setDynamicHeight(dropdownTab);
//     });
//     questions.forEach(question => {
//         setDynamicHeight(question);
//     });
// })



//Add event listeners to product panel dropdown titles
panelNames.forEach(panel => {
    panel.addEventListener('click', dropDown);
    console.log(panel);
})

//Event Handler function
// function dropDown(event) {

//     console.log(event);

//     // if (!panelNames && event.target.closest('.dropdown-tab') != null) return;
//     let currentDropdown;
//     let currentDropdownBtn;
//     if (panelNames) {

//         currentDropdown = event.target.closest('.dropdown-tab');

//         //dropdown btn transition on expand
//         currentDropdownBtn = event.target.closest('.tab-title').children[1];
//         currentDropdownBtn.classList.toggle('rotate');

//         if (currentDropdown.style.height != '100%') {
//             currentDropdown.style.height = '100%';
//         } else {
//             currentDropdown.style.height = `${currentDropdown.children[0].offsetHeight}px`
//         }


//     }

// }

function dropDown() {
    let parent = this.closest('.dropdown-tab');
    let btn = this.children[1];
    btn.classList.toggle('rotate');
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        parent.style.rowGap = null;
    } else {
        parent.style.rowGap = '16px';
        content.style.maxHeight = content.scrollHeight + "px";
    }
}