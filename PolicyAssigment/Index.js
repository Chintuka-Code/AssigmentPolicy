const nav = document.querySelector('.nav');
const collapseFormHeading = document.querySelectorAll('.policyFormHeading');
const policyFormHeading = document.querySelectorAll('.policyFormHeading > h1');
const formContainer = document.querySelectorAll('.formContainer');
const header = document.querySelector('header');

collapseFormHeading.forEach((list) => {
  list.addEventListener('click', showForm);
});
window.addEventListener('scroll', stickyHeader);

function stickyHeader(e) {
  if (window.pageYOffset > 50) {
    header.classList.add('stickyHeader');
  } else {
    header.classList.remove('stickyHeader');
  }
}

function showMenu(event) {
  nav.classList.toggle('showNav');
}
function showForm(event) {
  const i = event.target.children[1];
  i.classList.toggle('fa-minus-square');
  const currentForm = event.target.nextElementSibling;
  currentForm.classList.toggle('showCurrentForm');
}
function search(e) {
  const currentText = e.target.value.toLowerCase();
  policyFormHeading.forEach((heading, index) => {
    const allHeading = heading.innerText.toLowerCase();
    if (allHeading.indexOf(currentText) > -1) {
      formContainer[index].style.display = '';
    } else {
      formContainer[index].style.display = 'none';
    }
  });
}
