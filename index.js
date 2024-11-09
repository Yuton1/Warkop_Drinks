// Fungsi untuk toggle dropdown menu untuk layar kecil
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Fungsi untuk toggle submenu "Menu" di header
function toggleSubMenu(event) {
    event.preventDefault(); // Mencegah link default action
    const submenu = event.target.nextElementSibling;
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
