How to add products
====================

This file explains how to add or update products used by the `Product Range` section on the Brands page.

Location
- Edit: `data/products.json`

Structure
- `categories`: an array of category names (strings).
- `products`: an array of product objects. Each product should include at least the fields below:

  - `id` (string): unique identifier (e.g. `p9`).
  - `title` (string): product display name.
  - `image` (string): image URL or site-root-relative path (e.g. `/assets/images/brands/product-range/product-9.avif`).
  - `alt` (string): alt text for the image.
  - `category` (string): must match one of the names in `categories`.
  - `brand` (string): brand name to show under the product.

Example product entry
```
{
  "id": "p9",
  "title": "New Product Name",
  "image": "/assets/images/brands/product-range/product-9.avif",
  "alt": "New Product",
  "category": "Juice",
  "brand": "Koku"
}
```

Notes
- To add a new category, add the category name to the `categories` array. The page will automatically render a pill for it.
- Make sure image files exist at the specified path and are optimized (webp/avif preferred).
- After saving `data/products.json`, refresh `brands.html` (or restart your local server) to see changes.

Quick local test
```
# serve from project root then open http://localhost:8000/brands.html
python -m http.server 8000
```

If you want, I can add a small admin UI or a script to validate `products.json` before committing.
