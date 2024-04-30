// // konversi ke rupiah
// const rupiah = (number) => {
//     return new Intl.NumberFormat('id-ID', {
//         style: 'currency',
//         currency: 'IDR',
//         minimumFractionDigits: 0,
//     }).format(number);
// }

// //form validation
// const donateButton = document.querySelector('.tDonasi');
// donateButton.disable = true;

// const form = document.querySelector('.input');
// form.addEventListener('keyup', function () {
//     for (let i = 0; i < form.elements.length; i++) {
//         if (form.elements[i].value.length !== 0) {
//             donateButton.classList.remove('disable');
//             donateButton.classList.add('disable');
//         } else {
//             return false;
//         }
//     }
// });

// donateButton.addEventListener('click', async function (e) {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const data = new URLSearchParams(formData);
//     const objData = Object.fromEntries(data);

//     try {
//         const response = fetch('php/donate.php', {
//             method: 'POST',
//             body: data,
//         });
//         const token = await response.text();
//     } catch (err) {
//         console.log(err.massage);
//     }

//     console.log(toen);

//     window.snap.pay('');
// });

const pay1 = document.querySelector('.pay1');
const pay2 = document.querySelector('.pay2');
const pay3 = document.querySelector('.pay3');
const qris = document.querySelector('.qris');
const ewallet = document.querySelector('.ewallet');
const bank = document.querySelector('.bank');
const nominal = document.querySelector('.nominal');
const poin = document.querySelector('.poin');
const poinTotal = document.querySelector('.poinTotal');
const nominalTotal = document.querySelector('.nominalTotal');
const totalDonasi = document.querySelector('.totalDonasi');

pay1.addEventListener('click', function () {
    qris.classList.toggle("d-none"); // Toggle visibility of QRIS
    ewallet.classList.add("d-none"); // Hide eWallet
    bank.classList.add("d-none");    // Hide Bank
});

pay2.addEventListener('click', function () {
    ewallet.classList.toggle("d-none"); // Toggle visibility of eWallet
    qris.classList.add("d-none");       // Hide QRIS
    bank.classList.add("d-none");       // Hide Bank
});

pay3.addEventListener('click', function () {
    bank.classList.toggle("d-none");   // Toggle visibility of Bank
    qris.classList.add("d-none");      // Hide QRIS
    ewallet.classList.add("d-none");   // Hide eWallet
});

nominal.addEventListener('keydown', function () {

    nominalTotal.innerHTML = "Rp." + nominal.value;

})

poin.addEventListener('keydown', function () {
    poinTotal.innerHTML = poin.value;

})

window.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        let poinNumber = Number(poin.value);
        let nominalNumber = Number(nominal.value);
        let totalKonversi = (poinNumber * 100) + nominalNumber;
        totalDonasi.innerHTML = "Rp." + totalKonversi;
    }
})



