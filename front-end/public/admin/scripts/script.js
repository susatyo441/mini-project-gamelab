function initLogoutButton() {
  var logoutButton = document.getElementById("logoutButton");

  logoutButton.addEventListener("click", function () {
    // Mengambil token dari localStorage
    var token = localStorage.getItem("token");

    // Membuat permintaan POST ke API logout
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/logout`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + token);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        localStorage.removeItem("token");
        window.location.href = "/admin/login.html";
      } else {
        console.error("Logout gagal:", xhr.statusText);
        alert("Logout gagal. Silakan coba lagi.");
      }
    };

    xhr.onerror = function () {
      console.error("Terjadi kesalahan koneksi.");
      alert("Terjadi kesalahan koneksi.");
    };

    xhr.send();
  });
}

// Periksa apakah pengguna memiliki token saat mengakses halaman produk
async function validateLogin() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/admin/login.html";
      return;
    }

    const response = await fetch(
      `${API_URL}/products/search?name=validasi_login`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        window.location.href = "/admin/login.html";
        return;
      }
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    alert("Terjadi kesalahan saat memvalidasi login.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  validateLogin();
});
