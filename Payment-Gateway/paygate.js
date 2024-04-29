// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}

//form validation
const donateButton = document.querySelector('.tDonasi');
donateButton.disable = true;

const form = document.querySelector('.input');
form.addEventListener('keyup', function() {
    for(let i = 0; i < form.elements.length; i++) {
        if(form.elements[i].value.length !== 0){
            donateButton.classList.remove('disable');
            donateButton.classList.add('disable');
        } else {
            return false;
        }
    }
});

donateButton.addEventListener('click',async function(e){
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);

    try {
        const response = fetch('php/donate.php', {
            method: 'POST',
            body: data,
        });
        const token = await response.text();
    } catch(err) {
        console.log(err.massage);
    }

    console.log(toen);
    
    window.snap.pay('');
});