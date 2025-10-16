# AutoHub Raffle System - Design System Documentation

## Overview
This document outlines the design system and UI guidelines for the AutoHub Car Raffle System. The system follows modern web design principles with a focus on clean, accessible, and mobile-first design.

## Color Palette

### Primary Colors
- **Green Primary**: `#10B981` (green-500) - Main brand color
- **Green Dark**: `#065F46` (green-800) - Dark variant for text/accents
- **Green Light**: `#D1FAE5` (green-100) - Light backgrounds/states
- **Emerald Accent**: `#059669` (emerald-600) - Secondary green tone

### Neutral Colors
- **Gray 50**: `#F9FAFB` - Main background
- **Gray 100**: `#F3F4F6` - Card backgrounds, disabled states
- **Gray 200**: `#E5E7EB` - Borders, dividers
- **Gray 300**: `#D1D5DB` - Input borders
- **Gray 600**: `#4B5563` - Secondary text
- **Gray 900**: `#111827` - Primary text

### Status Colors
- **Success**: `#10B981` (green-500)
- **Error**: `#EF4444` (red-500)
- **Warning**: `#F59E0B` (amber-500)
- **Info**: `#3B82F6` (blue-500)

## Typography

### Font Stack
```css
font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Font Scales
- **Heading 1**: `text-3xl` (30px) - Page titles
- **Heading 2**: `text-2xl` (24px) - Section titles
- **Heading 3**: `text-xl` (20px) - Subsection titles
- **Heading 4**: `text-lg` (18px) - Card titles
- **Body Large**: `text-base` (16px) - Main content
- **Body**: `text-sm` (14px) - Secondary content
- **Caption**: `text-xs` (12px) - Small labels, status badges

### Font Weights
- **Light**: `font-light` (300)
- **Normal**: `font-normal` (400) - Default body text
- **Medium**: `font-medium` (500) - Labels, secondary headings
- **Semibold**: `font-semibold` (600) - Buttons, important text
- **Bold**: `font-bold` (700) - Primary headings

## Layout & Spacing

### Container Widths
```css
max-width: 80rem; /* 1280px - main content container */
```

### Spacing Scale (TailwindCSS)
- **xs**: `0.5rem` (8px) - `space-2`
- **sm**: `0.75rem` (12px) - `space-3`
- **md**: `1rem` (16px) - `space-4`
- **lg**: `1.5rem` (24px) - `space-6`
- **xl**: `2rem` (32px) - `space-8`
- **2xl**: `3rem` (48px) - `space-12`

### Grid System
- **Mobile**: 1 column layout
- **Tablet**: 2-3 column layout (`md:grid-cols-2`, `md:grid-cols-3`)
- **Desktop**: 3-4 column layout (`lg:grid-cols-3`, `lg:grid-cols-4`)

## Border Radius

### Standard Radius Values
- **Small**: `rounded-lg` (8px) - Small elements, icons
- **Medium**: `rounded-xl` (12px) - Buttons, inputs, small cards
- **Large**: `rounded-2xl` (16px) - Main cards, modals
- **Extra Large**: `rounded-3xl` (24px) - Special containers

## Component Patterns

### Buttons

#### Primary Button
```vue
<button class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
  Primary Action
</button>
```

#### Secondary Button
```vue
<button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors">
  Secondary Action
</button>
```

#### Danger Button
```vue
<button class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
  Delete Action
</button>
```

### Cards

#### Basic Card
```vue
<div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">Card Title</h3>
  <p class="text-gray-600">Card content goes here</p>
</div>
```

#### Stats Card
```vue
<div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <div class="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center">
        <!-- Icon -->
      </div>
    </div>
    <div class="ml-5 w-0 flex-1">
      <dl>
        <dt class="text-sm font-medium text-gray-500 truncate">Label</dt>
        <dd class="text-2xl font-semibold text-gray-900">Value</dd>
      </dl>
    </div>
  </div>
</div>
```

### Form Elements

#### Input Field
```vue
<input class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" />
```

#### Label
```vue
<label class="block text-sm font-medium text-gray-700 mb-2">
  Field Label
</label>
```

### Alert Messages

#### Success Alert
```vue
<div class="bg-green-50 border border-green-200 rounded-2xl p-4">
  <div class="flex">
    <svg class="h-5 w-5 text-green-400 mt-0.5">...</svg>
    <p class="ml-3 text-sm text-green-800">Success message</p>
  </div>
</div>
```

#### Error Alert
```vue
<div class="bg-red-50 border border-red-200 rounded-2xl p-4">
  <div class="flex">
    <svg class="h-5 w-5 text-red-400 mt-0.5">...</svg>
    <p class="ml-3 text-sm text-red-800">Error message</p>
  </div>
</div>
```

## Animation & Transitions

### Standard Transitions
```css
transition-all duration-200 /* For most hover effects */
transition-colors /* For color-only changes */
transition-transform /* For scale/move effects */
```

### Hover Effects
- **Button Hover**: Scale slightly + shadow increase
- **Card Hover**: Subtle shadow increase + border color change
- **Link Hover**: Color transition

### Loading States
- **Spinner**: Rotating animation using `animate-spin`
- **Pulse**: Breathing effect using `animate-pulse`

## Responsive Design

### Breakpoints (TailwindCSS)
- **sm**: `640px` - Small tablets
- **md**: `768px` - Tablets
- **lg**: `1024px` - Small desktops
- **xl**: `1280px` - Large desktops
- **2xl**: `1536px` - Extra large screens

### Mobile-First Approach
Always design for mobile first, then enhance for larger screens:
```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- Content -->
</div>
```

## Accessibility Guidelines

### Color Contrast
- Ensure minimum 4.5:1 contrast ratio for normal text
- Ensure minimum 3:1 contrast ratio for large text
- Use color + other indicators (icons, text) for status

### Focus States
- All interactive elements must have visible focus indicators
- Use `focus:ring-2 focus:ring-green-500 focus:outline-none`

### Semantic HTML
- Use proper heading hierarchy (h1, h2, h3...)
- Use semantic elements (nav, main, section, article)
- Include proper ARIA labels where needed

## Component Library

### Available Components
1. **AlertMessage.vue** - Customizable alert/notification system
2. **BaseCard.vue** - Reusable card container with header/footer slots
3. **DataTable.vue** - Full-featured data table with search, sort, pagination
4. **LoadingModal.vue** - Modal with loading spinner and customizable text
5. **SuccessModal.vue** - Success confirmation modal with action buttons
6. **AppNavigation.vue** - Main site navigation with auth states

### Usage Examples

#### AlertMessage
```vue
<AlertMessage
  type="success"
  title="Success!"
  message="Your action was completed successfully"
  @dismiss="handleDismiss"
/>
```

#### DataTable
```vue
<DataTable
  title="Users"
  :data="users"
  :columns="userColumns"
  :searchable="true"
  :paginated="true"
  :actions="true"
>
  <template #cell-status="{ value }">
    <span :class="getStatusClass(value)">{{ value }}</span>
  </template>
</DataTable>
```

## Development Guidelines

### CSS Utilities Preference
Use TailwindCSS utilities instead of custom CSS whenever possible:
```vue
<!-- Good -->
<div class="flex items-center space-x-4 p-6 bg-white rounded-2xl">

<!-- Avoid -->
<div class="custom-card-style">
```

### Component Composition
Prefer composition over large monolithic components:
```vue
<!-- Good -->
<BaseCard title="Statistics">
  <StatsGrid :data="stats" />
</BaseCard>

<!-- Avoid -->
<StatsCard :title="Statistics" :data="stats" :showHeader="true" :headerSize="large" ... />
```

### Naming Conventions
- **Components**: PascalCase (`BaseCard.vue`)
- **Props**: camelCase (`showHeader`, `itemsPerPage`)
- **Events**: kebab-case (`@user-selected`, `@data-updated`)
- **CSS Classes**: Follow TailwindCSS conventions

## Performance Considerations

### Image Optimization
- Use appropriate image formats (WebP when possible)
- Implement lazy loading for images below the fold
- Provide appropriate alt text for accessibility

### Loading States
- Show loading indicators for actions taking >100ms
- Use skeleton screens for complex data loading
- Implement proper error boundaries

### Bundle Size
- Import only needed TailwindCSS utilities
- Use dynamic imports for large components
- Optimize SVG icons and consider icon fonts for repeated use

## Future Enhancements

### Planned Additions
1. **Dark Mode Support** - Toggle between light/dark themes
2. **Animation Library** - Custom animations using Framer Motion or similar
3. **Component Variants** - Size and style variants for existing components
4. **Form Validation** - Enhanced form validation component system
5. **Toast Notifications** - Non-intrusive notification system

This design system ensures consistency, maintainability, and scalability across the AutoHub Raffle System while providing an excellent user experience.