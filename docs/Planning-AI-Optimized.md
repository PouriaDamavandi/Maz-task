# 📦 Frontend Architecture Documentation

## 🧭 Philosophy

This project is built based on **system-first thinking**, not page-first.

### Core Principles:

* Build **reusable components first**
* Separate **logic from UI**
* Treat features as **independent modules**
* Design for **scalability (API, pagination, filters)**

---

# 🧱 High-Level Architecture

```
src/
 ├── assets/
 ├── components/
 │    ├── base/
 │    ├── layout/
 │    ├── product/
 │    ├── sidebar/
 │
 ├── modules/
 │    ├── product/
 │    ├── filter/
 │
 ├── pages/
 │
 ├── composables/
 │
 ├── store/
 │
 ├── router/
 ├── types/
 ├── utils/
```

---

# 🧩 Component System

## 1. Base Components (Atomic)

Reusable, no business logic.

```
components/base/
 ├── BaseButton.vue
 ├── BaseInput.vue
 ├── BaseRadio.vue
 ├── BaseCheckbox.vue
 ├── BaseCard.vue
 ├── BaseAccordion.vue
 ├── BaseIcon.vue
```

### Rules:

* No API calls
* No product logic
* Fully controlled via props

---

## 2. Layout Components

```
components/layout/
 ├── AppHeader.vue
 ├── AppFooter.vue
 ├── AppContainer.vue
```

### AppHeader:

* CTA (left)
* Navigation (right)
* Mobile hamburger

### AppFooter:

* Top (links + social)
* Bottom (copyright)

---

## 3. Product Components

```
components/product/
 ├── ProductCard.vue
 ├── ProductGrid.vue
 ├── ProductDetails.vue
 ├── ProductImage.vue
 ├── ProductBreadcrumb.vue
```

### ProductCard Props:

```
{
  id: string
  title: string
  image: string
}
```

---

## 4. Sidebar Module (Independent)

```
components/sidebar/
 ├── Sidebar.vue
 ├── SidebarSection.vue
 ├── SidebarSearch.vue
 ├── SidebarFilters.vue
 ├── SidebarCategories.vue
 ├── SidebarSort.vue
```

### Key Idea:

👉 Sidebar must be **fully reusable and isolated**

* No dependency on Product Page
* Works with props + emits

---

# 🧠 Business Logic Layer

## Composables

```
composables/
 ├── useProducts.ts
 ├── useFilters.ts
```

### useProducts:

* Fetch products
* Handle pagination

### useFilters:

* Manage selected filters
* Apply filtering logic

---

## Store (Pinia)

```
store/
 ├── product.store.ts
 ├── filter.store.ts
```

---

# 📄 Pages (Thin Layer)

Pages should ONLY compose components.

```
pages/
 ├── Landing.vue
 ├── ProductList.vue
 ├── ProductDetail.vue
```

---

## ProductList.vue

Structure:

```
<AppContainer>
  <Sidebar />
  <ProductGrid />
</AppContainer>
```

---

## ProductDetail.vue

```
<ProductBreadcrumb />
<ProductImage />
<ProductDetails />
```

---

# 🔄 Data Flow

```
API → Store → Composable → Page → Components
```

### Rules:

* Components NEVER call API
* Pages NEVER contain heavy logic

---

# 📊 Component Diagram

```
App
 ├── Header
 ├── RouterView
 │     ├── ProductListPage
 │     │      ├── Sidebar
 │     │      │     ├── Search
 │     │      │     ├── Filters
 │     │      │     └── Categories
 │     │      │
 │     │      └── ProductGrid
 │     │            └── ProductCard
 │     │
 │     └── ProductDetailPage
 │            ├── Breadcrumb
 │            ├── ProductImage
 │            └── ProductDetails
 │
 └── Footer
```

---

# 🚀 Scalability Considerations

Prepare for:

* Pagination
* API integration
* Server-side filtering
* Infinite scroll
* Localization

---

# 🧪 Development Phases

## Phase 1: Base System

* Setup project
* Create base components

## Phase 2: Layout

* Header
* Footer

## Phase 3: Sidebar Module

* Build fully independent

## Phase 4: Product System

* Card
* Grid

## Phase 5: Pages Integration

## Phase 6: API & State

## Phase 7: UX Polish

---

# 🧼 Clean Code Rules

* One responsibility per component
* No duplicated logic
* Use TypeScript everywhere
* Keep components small
* Prefer composition over inheritance

---

# 📌 Final Notes

This structure ensures:

* Maintainability
* Scalability
* Reusability
* Clean separation of concerns

---

If needed next:

* I can generate **actual Vue component boilerplates**
* Or build **Pinia store + API layer**
* Or create **design tokens (SCSS / Tailwind config)**
