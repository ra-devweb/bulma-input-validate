// Blur event listener to each input of the form

document.getElementById('name').addEventListener('blur', () => {

    const name  =   document.getElementById('name');

    // Regular Expression validate /Name/

    const re    =   /^[a-zA-Z ]{2,30}$/;

    if (!re.test(name.value)) {

        name.classList.add('is-danger');

        !name.classList.contains('name') ? name.nextElementSibling.nextElementSibling.classList.add('is-invisible') : name.nextElementSibling.nextElementSibling.classList.remove('is-invisible');

    } else {

        name.classList.remove('is-danger');

        name.classList.add('is-success');

        name.nextElementSibling.nextElementSibling.classList.add('is-invisible');

    }

    console.log(name)
})

document.getElementById('email').addEventListener('blur', () => {

    const email  =  document.getElementById('email');

    // Regular Expression validate /Email/

    const re    =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email.value)) {

        email.classList.add('is-danger');

        !email.classList.contains('email') ? email.nextElementSibling.nextElementSibling.classList.add('is-invisible') : email.nextElementSibling.nextElementSibling.classList.remove('is-invisible');

    } else {

        email.classList.remove('is-danger');

        email.classList.add('is-success');

        email.nextElementSibling.nextElementSibling.classList.add('is-invisible');

    }

    console.log(email)
})

document.getElementById('zip').addEventListener('blur', () => {

    const zip   =   document.getElementById('zip');

    // Regular Expression validate /Zip/

    const re    =   /^[0-9]{5}(?:-[0-9]{4})?$/;

    if (!re.test(zip.value)) {

        zip.classList.add('is-danger');

        !zip.classList.contains('zip') ? zip.nextElementSibling.nextElementSibling.classList.add('is-invisible') : zip.nextElementSibling.nextElementSibling.classList.remove('is-invisible');

    } else {

        zip.classList.remove('is-danger');

        zip.classList.add('is-success');

        zip.nextElementSibling.nextElementSibling.classList.add('is-invisible');

    }

    console.log(zip)
})

document.getElementById('phone').addEventListener('blur', () => {

    const phone  =  document.getElementById('phone');

    // Regular Expression validate /Phone/

    const re    =   /^\+?[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/;

    if (!re.test(phone.value)) {

        phone.classList.add('is-danger');

        !phone.classList.contains('phone') ? phone.nextElementSibling.nextElementSibling.classList.add('is-invisible') : phone.nextElementSibling.nextElementSibling.classList.remove('is-invisible');

    } else {

        phone.classList.remove('is-danger');

        phone.classList.add('is-success');

        phone.nextElementSibling.nextElementSibling.classList.add('is-invisible');

    }

    console.log(phone)
})