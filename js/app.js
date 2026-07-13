// app.js

let currentCategory = "Phones";
let currentBrand = null;
let searchQuery = "";

const productContainer = document.getElementById("products");
const categoryLabel = document.getElementById("catlabel");
const categories = document.querySelectorAll(".category");
const phoneBrandsBar = document.getElementById("phoneBrands");
const phoneBrandItems = document.querySelectorAll(".phone-brand");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");

function applyCategoryTheme(categoryId) {
    const cat = APP_DATA.categories.find(c => c.id === categoryId);

    if (!cat) return;

    document.documentElement.style.setProperty("--accent", cat.color);
    document.documentElement.style.setProperty("--accent-text", cat.textColor);
}

function updateSectionTitle() {
    if (!categoryLabel) return;

    if (searchQuery) {
        categoryLabel.textContent = "Search Results";
        return;
    }

    if (currentCategory === "Phones" && currentBrand) {
        categoryLabel.textContent = `${currentBrand} Phones`;
        return;
    }

    const cat = APP_DATA.categories.find(c => c.id === currentCategory);
    categoryLabel.textContent = cat ? cat.name : "Products";
}

function getFilteredProducts() {
    if (searchQuery) {
        const query = searchQuery.toLowerCase();

        return APP_DATA.products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            (product.brand && product.brand.toLowerCase().includes(query))
        );
    }

    let products = APP_DATA.products.filter(
        product => product.category === currentCategory
    );

    if (currentCategory === "Phones" && currentBrand) {
        products = products.filter(product => product.brand === currentBrand);
    }

    return products;
}

function renderProducts() {
    const products = getFilteredProducts();

    productContainer.innerHTML = "";
    updateSectionTitle();

    if (products.length === 0) {
        productContainer.innerHTML = `
            <h3 class="empty-message">No products found.</h3>
        `;
        return;
    }

    const grid = document.createElement("div");
    grid.className = "product-grid";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "pcard";

        const brandTag = product.brand
            ? `<p class="brand-tag">${product.brand}</p>`
            : "";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            ${brandTag}
            <p class="name">${product.name}</p>
            <p class="desc">${product.description}</p>
            <p class="price">${formatCurrency(product.price)}</p>
            <button
                class="addbtn"
                onclick="addToCart('${product.name}', ${product.price})">
                Add to Cart
            </button>
        `;

        grid.appendChild(card);
    });

    productContainer.appendChild(grid);
}

function setPhoneBrandsVisible(show) {
    if (!phoneBrandsBar) return;

    phoneBrandsBar.classList.toggle("visible", show);
}

function clearPhoneBrandSelection() {
    currentBrand = null;
    phoneBrandItems.forEach(item => item.classList.remove("active"));
}

function selectCategory(categoryId) {
    currentCategory = categoryId;
    searchQuery = "";

    if (searchInput) {
        searchInput.value = "";
    }

    clearPhoneBrandSelection();
    setPhoneBrandsVisible(categoryId === "Phones");
    applyCategoryTheme(categoryId);
    renderProducts();
}

function selectPhoneBrand(brandId) {
    currentBrand = brandId;
    searchQuery = "";

    if (searchInput) {
        searchInput.value = "";
    }

    phoneBrandItems.forEach(item => {
        item.classList.toggle("active", item.dataset.brand === brandId);
    });

    renderProducts();
}

categories.forEach(category => {
    category.addEventListener("click", () => {
        categories.forEach(item => item.classList.remove("active"));
        category.classList.add("active");
        selectCategory(category.dataset.target);
    });
});

phoneBrandItems.forEach(brand => {
    brand.addEventListener("click", () => {
        selectPhoneBrand(brand.dataset.brand);
    });
});

if (searchInput) {
    searchInput.addEventListener("input", () => {
        searchQuery = searchInput.value.trim();

        if (searchQuery) {
            categories.forEach(item => item.classList.remove("active"));
            clearPhoneBrandSelection();
            setPhoneBrandsVisible(false);
        } else {
            const activeCategory = document.querySelector(
                `.category[data-target="${currentCategory}"]`
            );

            if (activeCategory) {
                activeCategory.classList.add("active");
            }

            setPhoneBrandsVisible(currentCategory === "Phones");
        }

        renderProducts();
    });
}

if (searchClear) {
    searchClear.addEventListener("click", () => {
        searchQuery = "";

        if (searchInput) {
            searchInput.value = "";
            searchInput.focus();
        }

        const activeCategory = document.querySelector(
            `.category[data-target="${currentCategory}"]`
        );

        if (activeCategory) {
            activeCategory.classList.add("active");
        }

        setPhoneBrandsVisible(currentCategory === "Phones");
        renderProducts();
    });
}

window.onload = () => {
    const defaultCategory = document.querySelector(
        `.category[data-target="${currentCategory}"]`
    );

    if (defaultCategory) {
        defaultCategory.classList.add("active");
    }

    setPhoneBrandsVisible(true);
    applyCategoryTheme(currentCategory);
    renderProducts();
    renderCart();
};
