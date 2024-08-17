function scrollPage(num) {
    const form = document.getElementById("signUpForm");
    const hero = document.getElementById("malaysia-hero");
    const dest = document.getElementById("destinations");


    switch (num) {
        case 1:
            hero.scrollIntoView({ behavior: 'smooth', block: "start" });
            break;
        case 2:
            dest.scrollIntoView({ behavior: 'smooth', block: "start" });
            break;
        case 3:
            form.scrollIntoView({ behavior: 'smooth', block: "start" });
            break;
    }
}

function saveDetails(e) {
    e.preventDefault();
    let expDate = new Date();
    var emailAddr = document.getElementById('email').value;
    var name = document.getElementById('name').value;

    expDate.setMinutes(expDate.getMinutes() + 10);

    document.cookie = 'name=' + name + ';email=' + emailAddr + ';path=/';

    console.log('Details saved');
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}


function getName() {
    var name = getCookie('name');

    if (name) {
        this.document.getElementById('username').innerText = name + ', ';
    }
    else {
        this.document.getElementById('username').innerText = '';
    }
}


window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navigation');
    if (window.scrollY > 900) {
        navbar.classList.add('bg-light');
    } else {
        navbar.classList.remove('bg-light');
        navbar.style.backgroundColor = 'none';
    }
})