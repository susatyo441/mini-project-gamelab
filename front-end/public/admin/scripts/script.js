function initLogoutButton() {
    var logoutButton = document.getElementById("logoutButton");
  
    logoutButton.addEventListener("click", function () {
      // Mengambil token dari localStorage
      var token = localStorage.getItem("token");
  
      // Membuat permintaan POST ke API logout
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/logout", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer " + token);
  
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          // Logout berhasil
          console.log("Logout berhasil");
          // Hapus token dari localStorage
          localStorage.removeItem("token");
          // Redirect ke halaman login atau halaman lain yang Anda inginkan
          window.location.href = "login.html"; // Ganti dengan halaman login Anda
        } else {
          // Logout gagal
          console.error("Logout gagal:", xhr.statusText);
          // Tampilkan pesan error kepada pengguna jika diperlukan
          alert("Logout gagal. Silakan coba lagi.");
        }
      };
  
      xhr.onerror = function () {
        // Terjadi kesalahan koneksi
        console.error("Terjadi kesalahan koneksi.");
        // Tampilkan pesan error kepada pengguna jika diperlukan
        alert("Terjadi kesalahan koneksi.");
      };
  
      xhr.send();
    });
  }