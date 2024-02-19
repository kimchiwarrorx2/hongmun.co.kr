
// Function to open a modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  var noShowChecked = localStorage.getItem(modalId + '-noShow') === 'true';
  if (!noShowChecked) {
    modal.style.display = 'block';
  }
}

// Function to close a modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Function to set no show preference
function setNoShow(modalId) {
  var checkbox = document.getElementById('noShow' + modalId.slice(-1));
  localStorage.setItem(modalId + '-noShow', checkbox.checked);
}

// Event listener to close modals when clicking outside of them
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
}

// Initialization to open modals
window.onload = function() {
  openModal('popup1');
  openModal('popup2');
}
