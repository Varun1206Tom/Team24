document.addEventListener('DOMContentLoaded', function () {
  const dataPath = '/data/products.json';
  const pillsContainer = document.getElementById('categoryPills');
  const productsContainer = document.getElementById('productCards');

  // ✅ Pagination state
  let visibleCount = 6;
  const LOAD_COUNT = 6;
  let currentCategory = 'All';
  let allProducts = [];

  function createPill(name, active = false) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-sm rounded-pill category-pill px-3 px-md-4';
    if (active) btn.classList.add('active-filter');
    btn.textContent = name;
    btn.dataset.category = name;
    return btn;
  }

  function createProductCard(p) {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-6 col-lg-4 product-col';
    col.dataset.category = p.category;

    const card = document.createElement('div');
    card.className = 'custom-card p-2 p-md-3';

    const imgWrap = document.createElement('div');
    imgWrap.className = 'card-img-wrapper';

    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.alt || p.title;

    imgWrap.appendChild(img);

    const title = document.createElement('h6');
    title.className = 'card-title mt-3';
    title.textContent = p.title;

    const bottom = document.createElement('div');
    bottom.className = 'd-flex justify-content-between align-items-center mt-3';

    const info = document.createElement('div');
    info.className = 'card-info';
    info.innerHTML = `
      <span class="category">${p.category}</span><br>
      <span class="brand">${p.brand}</span>
    `;

    const addBtn = document.createElement('button');
    addBtn.className = 'add-btn';
    addBtn.type = 'button';
    addBtn.dataset.productId = p.id;
    addBtn.textContent = '+';

    addBtn.addEventListener('click', function () {
      const id = this.dataset.productId;
      alert('Add clicked for product: ' + id + '\n' + p.title);
    });

    bottom.appendChild(info);
    bottom.appendChild(addBtn);

    card.appendChild(imgWrap);
    card.appendChild(title);
    card.appendChild(bottom);

    col.appendChild(card);
    return col;
  }

  // ✅ MAIN RENDER FUNCTION (UPDATED)
  function renderProducts(products, category = 'All') {
    productsContainer.innerHTML = '';
    currentCategory = category;

    const filtered =
      category === 'All'
        ? products
        : products.filter(p => p.category === category);

    if (!filtered.length) {
      productsContainer.innerHTML =
        '<div class="col-12 text-center">No products found</div>';
      return;
    }

    // ✅ Show limited products only for "All"
    const toShow =
      category === 'All'
        ? filtered.slice(0, visibleCount)
        : filtered;

    const fragment = document.createDocumentFragment();
    toShow.forEach(p => fragment.appendChild(createProductCard(p)));

    productsContainer.appendChild(fragment);

    // ✅ Handle Load More button
    handleLoadMore(filtered);
  }

  // ✅ LOAD MORE BUTTON LOGIC
  function handleLoadMore(filtered) {
    // Remove existing button
    const existingBtn = document.getElementById('loadMoreWrapper');
    if (existingBtn) existingBtn.remove();

    // Only for "All"
    if (currentCategory !== 'All') return;

    // Show button only if more products exist
    if (visibleCount < filtered.length) {
      const wrapper = document.createElement('div');
      wrapper.id = 'loadMoreWrapper';
      wrapper.className = 'col-12 text-center mt-3';

      const loadMoreText = document.createElement('span');
      loadMoreText.textContent = 'More';
      loadMoreText.style.cursor = 'pointer';
      loadMoreText.style.color = 'black';
      loadMoreText.style.fontWeight = '500';

      // optional hover effect
      loadMoreText.addEventListener('mouseenter', () => {
        loadMoreText.style.textDecoration = 'underline';
      });

      loadMoreText.addEventListener('mouseleave', () => {
        loadMoreText.style.textDecoration = 'none';
      });

      loadMoreText.addEventListener('click', function () {
        visibleCount += LOAD_COUNT;
        renderProducts(allProducts, 'All');
      });

      wrapper.appendChild(loadMoreText);
      productsContainer.appendChild(wrapper);
    }
  }

  function setActivePill(clicked) {
    const pills = pillsContainer.querySelectorAll('button');
    pills.forEach(b => b.classList.toggle('active-filter', b === clicked));
  }

  fetch(dataPath)
    .then(r => r.json())
    .then(data => {
      const categories = data.categories || [];
      allProducts = data.products || [];

      // ✅ Render pills
      pillsContainer.appendChild(createPill('All', true));
      categories.forEach(cat =>
        pillsContainer.appendChild(createPill(cat))
      );

      // ✅ Click handling
      pillsContainer.addEventListener('click', function (e) {
        const btn = e.target.closest('button');
        if (!btn) return;

        const cat = btn.dataset.category;

        setActivePill(btn);

        // ✅ Reset count when switching category
        visibleCount = LOAD_COUNT;

        renderProducts(allProducts, cat);
      });

      // ✅ Initial render
      renderProducts(allProducts, 'All');
    })
    .catch(err => {
      console.error('Failed to load products data', err);
      productsContainer.innerHTML =
        '<div class="col-12 text-center text-danger">Failed to load products.</div>';
    });
});