AOS.init();
    


        AOS.init();

        const countdown = document.getElementById("countdown");
        const targetDate = new Date("2025-06-14T09:00:00").getTime();

        setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdown.innerHTML = "<span class='text-sky-600 font-bold'>Hari Bahagia Telah Tiba!</span>";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdown.innerHTML = `
        ${createBox(days, "Hari")}
        ${createBox(hours, "Jam")}
        ${createBox(minutes, "Menit")}
        ${createBox(seconds, "Detik")}
    `;
        }, 1000);

        function createBox(value, label) {
            return `
                <div class="bg-sky-500 rounded-xl shadow-md p-3 w-20 sm:w-24">
                    <div class="text-2xl sm:text-3xl font-bold text-white">${String(value).padStart(2, '0')}</div>
                    <div class="text-xs sm:text-sm mt-1 text-white">${label}</div>
                </div>
                `;
        }
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true,
        });
        // RSVP
        const list = document.getElementById("listUcapan");
        function handleRSVP(e) {
            e.preventDefault();
            const nama = document.getElementById("nama").value;
            const status = document.getElementById("status").value;
            const ucapan = document.getElementById("ucapan").value;
            const item = document.createElement("div");
            item.className = "bg-white shadow p-4 rounded";
            item.innerHTML = `<strong>${nama}</strong> (${status})<br>${ucapan}`;
            list.prepend(item);
            e.target.reset();
        }

    


        const firebaseConfig = {
            apiKey: "AIzaSyBzWbxY7t3O2IO89SpDTD1F_2giL7XhsI8",
            authDomain: "undanganaabazizah.firebaseapp.com",
            databaseURL: "https://undanganaabazizah-default-rtdb.firebaseio.com",
            projectId: "undanganaabazizah",
            storageBucket: "undanganaabazizah.firebasestorage.app",
            messagingSenderId: "713007075108",
            appId: "1:713007075108:web:bd1caef9e542e3d4daedb1",
            measurementId: "G-F0G826SCLT"
        };

        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();
    


        function handleRSVP(e) {
            e.preventDefault();
            const nama = document.getElementById("nama").value;
            const status = document.getElementById("status").value;
            const ucapan = document.getElementById("ucapan").value;
            const data = { nama, status, ucapan, timestamp: Date.now() };
            db.ref("rsvp").push(data);
            e.target.reset();
        }

        function loadRSVP() {
            const list = document.getElementById("listUcapan");
            db.ref("rsvp").orderByChild("timestamp").on("value", (snapshot) => {
                list.innerHTML = "";
                snapshot.forEach((child) => {
                    const d = child.val();
                    const item = document.createElement("div");
                    item.className = "bg-white shadow p-4 rounded";
                    item.innerHTML = `<strong>${d.nama}</strong> (${d.status})<br>${d.ucapan}`;
                    list.prepend(item);
                });
            });
        }

        loadRSVP();
    

AOS.init();


function bukaUndangan() {
    const opening = document.getElementById("opening");
    const undangan = document.getElementById("undangan");
    const musik = document.getElementById("musik");
    const btnMusik = document.getElementById("btnMusik");

    // Animasi keluar
    opening.classList.add("animate__fadeOut");

    // Setelah animasi keluar, tampilkan undangan
    setTimeout(() => {
        opening.style.display = "none";
        undangan.classList.remove("hidden");

        // Putar musik setelah interaksi user
        if (musik) {
            musik.play().then(() => {
                // Update ikon tombol
                if (btnMusik) btnMusik.innerText = "🔊";
            }).catch((err) => {
                console.warn("Musik gagal diputar otomatis:", err);
            });
        }
    }, 1000);
}

function toggleMusik() {
    const musik = document.getElementById("musik");
    const btnMusik = document.getElementById("btnMusik");

    if (musik.paused) {
        musik.play();
        btnMusik.innerText = "🔊";
    } else {
        musik.pause();
        btnMusik.innerText = "🔇";
    }
}
    


        AOS.init({
            duration: 800, // Durasi animasi (ms)
            once: true,    // Hanya animasi saat pertama scroll
        });
    


        function copyText(id) {
            const text = document.getElementById(id).innerText;
            console.log("Menyalin:", text); // Tambahkan ini
          
            navigator.clipboard.writeText(text).then(() => {
              const toast = document.getElementById("toast");
              toast.classList.remove("opacity-0");
              toast.classList.add("opacity-100");
          
              setTimeout(() => {
                toast.classList.remove("opacity-100");
                toast.classList.add("opacity-0");
              }, 2000);
            }).catch(err => {
              console.error("Gagal menyalin:", err);
            });
          }
          function salinTeks(id) {
            const teks = document.getElementById(id).innerText;
            navigator.clipboard.writeText(teks).then(() => {
              const toast = document.getElementById("toast");
              toast.classList.remove("opacity-0");
              toast.classList.add("opacity-100");
        
              setTimeout(() => {
                toast.classList.remove("opacity-100");
                toast.classList.add("opacity-0");
              }, 2000);
            }).catch(err => {
              alert("Gagal menyalin teks");
              console.error("Error:", err);
            });
          }          

          function animasiHujanTeks(idTarget, teks) {
            const target = document.getElementById(idTarget);
            target.innerHTML = "";
          
            teks.split("").forEach((char, i) => {
              const span = document.createElement("span");
              span.className = "huruf-hujan";
              span.textContent = char;
              span.style.animationDelay = `${i * 100}ms`;
              target.appendChild(span);
            });
          }
          
          // Jalankan saat halaman tampil
          document.addEventListener("DOMContentLoaded", () => {
            animasiHujanTeks("namaPria", "H. Aab");
            animasiHujanTeks("namaWanita", "Azizah");
          });
