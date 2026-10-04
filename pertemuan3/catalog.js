// ====================================================================
// Filter kategori produk (interaksi ringan, bukan bagian wajib tugas
// tapi membuat katalog terasa lebih hidup).
// ====================================================================

const filterButtons = document.querySelectorAll(".filter-btn");
const productItems = document.querySelectorAll(".product-item");
const emptyState = document.getElementById("emptyState");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    let visibleCount = 0;

    productItems.forEach((item) => {
      const matches = filter === "semua" || item.getAttribute("data-category") === filter;
      item.style.display = matches ? "" : "none";
      if (matches) visibleCount++;
    });

    emptyState.classList.toggle("d-none", visibleCount > 0);
  });
});
