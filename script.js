function checkName() {
    var name = document.getElementById('nameInput').value;
    var notFoundMsg = document.getElementById('notFound');

    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    document.querySelector('.content').style.display = 'none';
    notFoundMsg.style.display = 'block';
}
