// Button Start
let startGame = document.getElementById('startGame');
// Container Description
let conDesc = document.getElementById('conDesc');
// Container Loader
let loader = document.getElementById('containerLoading');
// Container Input Name
let inputName = document.getElementById('inputName');
// Button Start Attention
let buttonAtt = document.getElementById('startAttention');
// Container Attention
let attention = document.getElementById('attention');
// Container Question
let startQuestion = document.getElementById('QuestionStart');
// Container Guess
let guessImage = document.getElementById('guessImage');
// Timer Function 
function startTimer() {
    var duration = 65; // Durasi dalam detik

    var timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = formatTime(duration);

    var timerInterval = setInterval(function () {
        duration--;

        if (duration >= 0) {
            timerDisplay.textContent = formatTime(duration);
        } else {
            clearInterval(timerInterval);
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda Kehabisan Waktu!\nAnda Menjawab ${score/10}`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
        }
    }, 1000);
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}


// Event
startGame.addEventListener('click', () => {
    inputName.style.display = "none"
    conDesc.style.display = "none";
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        inputName.style.display = "flex";
    }, 500);
});

startAttention.addEventListener('click', () => {
    inputName.style.display = "none";
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        attention.style.display = "flex";
    }, 500);

    // Player Name
    let playerName = document.getElementById('nama').value;
    // Greeting 
    let greeting = `Halo ${playerName}`;
    // Tag P For Greeting
    let greet = document.getElementById('greet');
    greet.textContent = greeting;

});

startQuestion.addEventListener('click', () => {
    attention.style.display = "none";
    guessImage.style.display = "flex"

    startTimer();
});
// Setup Score
var score = 0;
// Setup Nyawa
let nyawa = 3;
let nyawaElement = document.getElementById('nyawaUI');
nyawaElement.textContent = nyawa;
// Handler Pertanyaan 1
let checkjawaban1 = document.getElementById('checkjawaban1');

let pertanyaan1 = document.getElementById('pertanyaan1');
let pertanyaan2 = document.getElementById('pertanyaan2');

checkjawaban1.addEventListener('click', () => {
    let jawaban1 = document.getElementById('jawaban1').value;
    if(jawaban1 == "PKI" || jawaban1 == "pki"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan1.style.display = "none";
        pertanyaan2.style.display = "block";
    }else if(jawaban1 !== "PKI" && jawaban1 !== "pki" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 2
let checkjawaban2 = document.getElementById('checkjawaban2');

let pertanyaan3 = document.getElementById('pertanyaan3');

checkjawaban2.addEventListener('click', () => {
    let jawaban2 = document.getElementById('jawaban2').value;
    if(jawaban2 == "G30S PKI" || jawaban2 == "g30s pki"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan2.style.display = "none";
        pertanyaan3.style.display = "block";
    }else if(jawaban2 !== "G30S PKI" && jawaban2 !== "g30s pki" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 3
let checkjawaban3 = document.getElementById('checkjawaban3');

let pertanyaan4 = document.getElementById('pertanyaan4');

checkjawaban3.addEventListener('click', () => {
    let jawaban3 = document.getElementById('jawaban3').value;
    if(jawaban3 == "Dipa Nusantara Aidit" || jawaban3 == "dipa nusantara aidit"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan3.style.display = "none";
        pertanyaan4.style.display = "block";
    }else if(jawaban3 !== "Dipa Nusantara Aidit" && jawaban3 !== "dipa nusantara aidit" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 4
let checkjawaban4 = document.getElementById('checkjawaban4');

let pertanyaan5 = document.getElementById('pertanyaan5');

checkjawaban4.addEventListener('click', () => {
    let jawaban4 = document.getElementById('jawaban4').value;
    if(jawaban4 == "Chakrabirawa" || jawaban4 == "chakrabirawa"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan4.style.display = "none";
        pertanyaan5.style.display = "block";
    }else if(jawaban4 !== "Chakrabirawa" && jawaban4 !== "chakrabirawa" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 5
let checkjawaban5 = document.getElementById('checkjawaban5');

let pertanyaan6 = document.getElementById('pertanyaan6');

checkjawaban5.addEventListener('click', () => {
    let jawaban5 = document.getElementById('jawaban5').value;
    if(jawaban5 == "Suharto" || jawaban5 == "suharto"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan5.style.display = "none";
        pertanyaan6.style.display = "block";
    }else if(jawaban5 !== "Suharto" && jawaban5 !== "suharto" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 6
let checkjawaban6 = document.getElementById('checkjawaban6');

let pertanyaan7 = document.getElementById('pertanyaan7');

checkjawaban6.addEventListener('click', () => {
    let jawaban6 = document.getElementById('jawaban6').value;
    if(jawaban6 == "Jendral Ah Nasution" || jawaban6 == "jendral ah nasution"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan6.style.display = "none";
        pertanyaan7.style.display = "block";
    }else if(jawaban6 !== "Jendral Ah Nasution" && jawaban6 !== "jendral ah nasution" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 7
let checkjawaban7 = document.getElementById('checkjawaban7');

let pertanyaan8 = document.getElementById('pertanyaan8');

checkjawaban7.addEventListener('click', () => {
    let jawaban7 = document.getElementById('jawaban7').value;
    if(jawaban7 == "Ade Irma" || jawaban7 == "ade irma"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan7.style.display = "none";
        pertanyaan8.style.display = "block";
    }else if(jawaban7 !== "Ade Irma" && jawaban7 !== "ade irma" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 8
let checkjawaban8 = document.getElementById('checkjawaban8');

let pertanyaan9 = document.getElementById('pertanyaan9');

checkjawaban8.addEventListener('click', () => {
    let jawaban8 = document.getElementById('jawaban8').value;
    if(jawaban8 == "Piere Tendean" || jawaban8 == "piere tendean"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan8.style.display = "none";
        pertanyaan9.style.display = "block";
    }else if(jawaban8 !== "Piere Tendean" && jawaban8 !== "piere tendean" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 9
let checkjawaban9 = document.getElementById('checkjawaban9');

let pertanyaan10 = document.getElementById('pertanyaan10');

checkjawaban9.addEventListener('click', () => {
    let jawaban9 = document.getElementById('jawaban9').value;
    if(jawaban9 == "Sukitman" || jawaban9 == "sukitman"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan9.style.display = "none";
        pertanyaan10.style.display = "block";
    }else if(jawaban9 !== "Sukitman" && jawaban9 !== "sukitman" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 10
let checkjawaban10 = document.getElementById('checkjawaban10');

let pertanyaan11 = document.getElementById('pertanyaan11');

checkjawaban10.addEventListener('click', () => {
    let jawaban10 = document.getElementById('jawaban10').value;
    if(jawaban10 == "Letkol Untung" || jawaban10 == "letkol untung"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan10.style.display = "none";
        pertanyaan11.style.display = "block";
    }else if(jawaban10 !== "Letkol Untung" && jawaban10 !== "letkol untung" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 11
let checkjawaban11 = document.getElementById('checkjawaban11');

let pertanyaan12 = document.getElementById('pertanyaan12');

checkjawaban11.addEventListener('click', () => {
    let jawaban11 = document.getElementById('jawaban11').value;
    if(jawaban11 == "Jendral Ahmad Yani" || jawaban11 == "jendral ahmad yani"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan11.style.display = "none";
        pertanyaan12.style.display = "block";
    }else if(jawaban11 !== "Jendral Ahmad Yani" && jawaban11 !== "jendral ahmad yani" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 12
let checkjawaban12 = document.getElementById('checkjawaban12');

let pertanyaan13 = document.getElementById('pertanyaan13');

checkjawaban12.addEventListener('click', () => {
    let jawaban12 = document.getElementById('jawaban12').value;
    if(jawaban12 == "Brigadir Donals Isaac Panjaitan" || jawaban12 == "brigadir donals isaac panjaitan"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan12.style.display = "none";
        pertanyaan13.style.display = "block";
    }else if(jawaban12 !== "Brigadir Donals Isaac Panjaitan" && jawaban12 !== "brigadir donals isaac panjaitan" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 13
let checkjawaban13 = document.getElementById('checkjawaban13');

let pertanyaan14 = document.getElementById('pertanyaan14');

checkjawaban13.addEventListener('click', () => {
    let jawaban13 = document.getElementById('jawaban13').value;
    if(jawaban13 == "Lubang Buaya" || jawaban13 == "lubang buaya"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan13.style.display = "none";
        pertanyaan14.style.display = "block";
    }else if(jawaban13 !== "Lubang Buaya" && jawaban13 !== "lubang buaya" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 14
let checkjawaban14 = document.getElementById('checkjawaban14');

let pertanyaan15 = document.getElementById('pertanyaan15');

checkjawaban14.addEventListener('click', () => {
    let jawaban14 = document.getElementById('jawaban14').value;
    if(jawaban14 == "Barisan Tani Indonesia" || jawaban14 == "barisan tani indonesia"){
        score += 10;
        Swal.fire(
            'Wow!',
            'Jawaban Anda Benar',
            'success'
          )
        pertanyaan14.style.display = "none";
        pertanyaan15.style.display = "block";
    }else if(jawaban14 !== "Barisan Tani Indonesia" && jawaban14 !== "barisan tani indonesia" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});

// Handler Pertanyaan 15
let checkjawaban15 = document.getElementById('checkjawaban15');

checkjawaban15.addEventListener('click', () => {
    let jawaban15 = document.getElementById('jawaban15').value;
    if(jawaban15 == "Gestok" || jawaban15 == "gestok"){
        score += 10;
        if(score == 150){
            Swal.fire(
                'Wow!',
                'Selamat Anda Menjawab 15 Pertanyaan Dengan Benar!',
                'success'
              )
        }else if(score < 150){
            Swal.fire(
                'Wow!',
                'Jawaban Anda Benar',
                'success'
            )
            setTimeout(() => {
                location.reload();
            }, 600);
        }

    }else if(jawaban15 !== "Gestok" && jawaban15 !== "gestok" && nyawa > 0){
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: `Anda kehabisan nyawa!\nAda Menjawab ${score/10} Dengan Benar`,
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }else{
        nyawa--;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jawaban Anda Salah!',
        });
        nyawaElement.textContent = nyawa;
          if (nyawa === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over',
                text: 'Anda kehabisan nyawa!',
        });
        setTimeout(() => {
            location.reload();
        }, 1500);
            // Lakukan tindakan lain jika nyawa habis
            // Misalnya, mengakhiri permainan atau mengatur ulang pertanyaan
        }
    }
});


// Go To About Page
let goToAbout = document.getElementById('goToAbout');
goToAbout.addEventListener('click', () => {
    window.location.href = 'about.html';
})