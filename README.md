# Vue Shop Frontend

## Overview
This is a minimal frontend for a simple e-commerce shop built with **Vue 3 + TypeScript + Pinia + Vue Router**.

The application displays products from a Laravel API and renders them as clean product cards.

## Features
- Product listing page (shop)
- Category page (basic structure)
- Product cards with:
  - Image
  - Name
  - Short description
  - Price
- API integration with Laravel backend
- State management using Pinia
- Routing with Vue Router
- TypeScript support

## Tech Stack
- Vue 3
- TypeScript
- Pinia
- Vue Router
- Vite

## Project Structure
```
src/
  components/
  views/
    ShopView.vue
    CategoriesView.vue
  stores/
    products.ts
  router/
    index.ts
  api/
    http.ts
```

## API Endpoints Used
- `GET /api/products`
- `GET /api/categories`

## Notes
- Product descriptions are truncated on the backend API.
- Images are served from Laravel storage.
- UI is intentionally minimal and functional.

## Future Improvements
- Product detail page
- Filters (price, category, tags)
- Search functionality
- Pagination UI
- Cart system

---

Simple frontend for learning and building a full-stack Laravel + Vue e-commerce system.

