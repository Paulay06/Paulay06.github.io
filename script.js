const toggleSwitch = document.getElementById('darkModeToggle');
const body = document.body;

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});


