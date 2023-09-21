const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function() {
    menuNav.classList.toggle("menu-active");
});
// Section Navigation
var prevScrollPos = window.pageYOffset;
var navigation = document.querySelector('.navigation');
var scrolledClassAdded = false;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 0 && !scrolledClassAdded) {
    navigation.classList.add('scrolled');
    scrolledClassAdded = true;
  } else if (currentScrollPos === 0 && scrolledClassAdded) {
    navigation.classList.remove('scrolled');
    scrolledClassAdded = false;
  }

  prevScrollPos = currentScrollPos;
});

const menuLinks = document.querySelectorAll('.menu-navigation a');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Menghapus kelas "active" dari semua tautan
    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove('active');
    });

    // Menambahkan kelas "active" pada tautan yang diklik
    link.classList.add('active');
  });
});

// Mendapatkan semua tautan di dalam navigasi
const menuLink = document.querySelectorAll('.menu-navigation a');

// Mendapatkan semua section yang ingin dipantau posisinya
const sections = document.querySelectorAll('section');

// Fungsi untuk menentukan tautan yang aktif berdasarkan posisi scroll
function setActiveLink() {
  const currentScrollPos = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
      // Menghapus kelas "active" dari semua tautan
      menuLinks.forEach((link) => {
        link.classList.remove('active');
      });

      // Menambahkan kelas "active" pada tautan yang terkait dengan section yang sedang ditampilkan
      const targetLink = document.querySelector(`.menu-navigation a[href="#${section.id}"]`);
      if (targetLink) {
        targetLink.classList.add('active');
      }
    }
  });
}

// Mendengarkan event scroll dan memanggil fungsi setActiveLink()
window.addEventListener('scroll', setActiveLink);


// *section navigation

// Section About
// Array dengan daftar nama dan peran yang akan ditampilkan secara bergantian
var data = [
    { name: "Riva Azriel", role: "Programmer" },
    { name: "Programmer", role: "Web Design" },
    { name: "Web Design", role: "3D Model" },
    { name: "3D Model", role: "Riva Azriel" }
  ];
  
  // Variabel untuk melacak indeks data saat ini
  var dataIndex = 0;
  
  // Variabel untuk melacak indeks karakter saat ini
  var charIndex = 0;
  
  // Element HTML untuk menampilkan teks
  var textElement = document.getElementById("text");
  
  // Fungsi untuk menampilkan karakter secara animasi
  function typeWriter() {
    if (charIndex < data[dataIndex].name.length) {
      textElement.textContent += data[dataIndex].name.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 200); // Waktu penundaan antara setiap karakter (dalam milidetik)
    } else {
      setTimeout(eraseText, 1000); // Waktu penundaan sebelum teks dihapus (dalam milidetik)
    }
  }
  
  // Fungsi untuk menghapus teks secara animasi
  function eraseText() {
    if (charIndex > 0) {
      textElement.textContent = data[dataIndex].name.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 70); // Waktu penundaan antara setiap penghapusan karakter (dalam milidetik)
    } else {
      dataIndex++;
      if (dataIndex >= data.length) {
        dataIndex = 0;
      }
      setTimeout(typeWriter, 500); // Waktu penundaan sebelum teks berikutnya ditampilkan (dalam milidetik)
    }
  }
  
  // Panggil fungsi typeWriter untuk memulai animasi
  typeWriter();
  // *section About



 // Mendapatkan semua elemen dengan class animate-section
const animateSections = document.querySelectorAll(".slide-in-fwd-center");

// Fungsi untuk mendeteksi saat elemen masuk ke viewport
const checkViewport = () => {
  animateSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
};

// Event listener saat melakukan scroll atau muat ulang halaman
window.addEventListener("scroll", checkViewport);
window.addEventListener("load", checkViewport);


// Mendapatkan elemen card dan mengubahnya menjadi array
const cards = Array.from(document.querySelectorAll('.card'));

// Fungsi untuk memberikan animasi muncul pada card
function animateCards(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}

// Membuat instance dari Intersection Observer
const observer = new IntersectionObserver(animateCards, {
  root: null,
  threshold: 0.05 // Mengatur sejauh mana elemen harus terlihat dalam viewport sebelum animasi dimainkan
});

// Mengamati setiap elemen card
cards.forEach(card => {
  observer.observe(card);
});


document.addEventListener("DOMContentLoaded", function() {
  // Temukan elemen form
  var form = document.querySelector("form");

  // Tambahkan event listener pada submit button
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah submit form secara default

    // Tampilkan notifikasi "Terima kasih telah menghubungi kami"
    alert("Terima kasih telah menghubungi kami!");

    // Atur nilai input form menjadi kosong setelah notifikasi muncul
    form.reset();
  });
});