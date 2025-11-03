# The Local Artisan Studio - E-commerce Website

A 5-page e-commerce website for a local art and craft studio, built with modern web technologies and focusing on accessibility.

## ?? Project Overview

The Local Artisan Studio showcases handcrafted artwork from talented local artists and craftspeople. The website features:

- **Clean, modern design** with a white/light gray background and blue accent colors
- **Fully responsive** mobile-first approach
- **Accessibility-focused** with proper ARIA labels, semantic HTML, and keyboard navigation
- **Local state management** for shopping cart functionality (no backend required)
- **Artist profiles** with detailed biographies and portfolios

## ?? File Structure

```
Project/
??? index.html                    # Home page with featured products
??? framed-art.html              # Framed art category page
??? abstract-sculptures.html     # Abstract sculptures category page  
??? wood-crafts.html             # Wood crafts category page
??? all-products.html            # All products in one scrollable page (NEW)
??? details.html                 # Product detail page (dynamic)
??? cart.html                    # Shopping cart page
??? artists.html                 # Artists listing page
??? artist.html                  # Individual artist profile page
??? styles/
?   ??? main.css                 # Main CSS styles
?   ??? artist.css               # Artist-specific styles
?   ??? all-products.css         # All products page styles (NEW)
??? js/
?   ??? main.js                  # JavaScript functionality & cart management
??? images/
    ??? placeholder.txt          # Placeholder for product images
    ??? artists/                 # Artist portrait photos
```

## ?? Features

### Navigation & Structure
- **Sticky navigation** with active page indicators
- **Mobile-responsive hamburger menu**
- **Breadcrumb navigation** on detail and cart pages
- **Shopping cart counter** with live updates
- **Artists section** in navigation (NEW)

### Home Page (index.html)
- **Hero section** with call-to-action
- **Featured products** showcasing 3 items:
  - Coastal Sunrise (Framed Art) - $250.00
  - Geometric Flow (Abstract Sculpture) - $480.00  
  - Oak Serving Board (Wood Craft) - $85.00
- **About section** describing the studio
- **Clickable artist names** linking to artist profiles (NEW)

### Artist Features (NEW)
- **Artists listing page** (`artists.html`) showcasing all featured artists
- **Individual artist profiles** (`artist.html`) with:
  - Professional portrait and biography
  - Artist statement and philosophy
  - Education and training background
  - Exhibition history and awards
  - Contact information and social media
  - Portfolio of available works
- **Clickable artist links** throughout the site (product pages, cart, etc.)

### Category Pages
Each category displays **6+ products** in a responsive grid:
- **Framed Art**: Paintings and artwork from local artists
- **Abstract Sculptures**: Contemporary sculptural pieces
- **Wood Crafts**: Handcrafted wooden items and furniture
- **Artist links** in product cards for easy profile access (NEW)

### Product Details (details.html)
- **Large product image** with placeholder support
- **Detailed information**: name, artist, description, price
- **Clickable artist name** linking to artist profile (NEW)
- **"Add to Cart" functionality** with user feedback
- **Product features** and shipping information
- **Related products** suggestions

### Shopping Cart (cart.html)
- **Cart table** showing items, prices, quantities
- **Clickable artist names** in cart items (NEW)
- **Remove items** functionality
- **Running total** calculation  
- **Order summary** with shipping options
- **Checkout button** (demo only - shows alert)
- **Empty cart state** with continue shopping link

### All Products Page (NEW)
- **Comprehensive view** of all artwork in a single scrollable page
- **Category sections** organized by type (Framed Art, Sculptures, Wood Crafts)
- **Filtering system** to view all categories or filter by specific type
- **Sorting options** by name, price (low/high), or artist
- **View modes** - switch between grid and list views
- **Product statistics** showing totals and price ranges
- **Quick category navigation** with links to individual category pages
- **Back to top button** for easy navigation
- **Responsive design** that works on all devices

## ??? Technology Stack

- **HTML5**: Semantic structure with accessibility landmarks
- **CSS3**: Grid and Flexbox layouts, CSS custom properties, smooth transitions
- **JavaScript/jQuery**: Cart management, dynamic content loading, mobile navigation
- **Local Storage**: Persistent cart state across page reloads

## ? Accessibility Features

- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`
- **ARIA labels**: Screen reader support for navigation and interactive elements
- **Keyboard navigation**: Full keyboard accessibility for all interactive elements
- **Focus indicators**: Clear visual focus states for keyboard users
- **Alt text**: Descriptive alternative text for all images
- **Color contrast**: Good contrast ratios for readability
- **Responsive text**: Scalable font sizes for different devices

## ?? Artist Profiles

The website includes **6 featured artists** with detailed profiles:

### Jane Doe - Landscape Painting
- **Location**: Coastal Bay, CA
- **Specialty**: Seascape and coastal paintings
- **Education**: MFA in Fine Arts from California College of the Arts
- **Featured Work**: Coastal Sunrise ($250)

### Mark Smith - Contemporary Sculpture  
- **Location**: San Francisco, CA
- **Specialty**: Geometric metal sculptures
- **Education**: BFA in Sculpture from San Francisco Art Institute
- **Featured Work**: Geometric Flow ($480)

### Tim's Woodshop - Handcrafted Wood Furniture
- **Location**: Redwood City, CA
- **Specialty**: Sustainable woodworking
- **Background**: 20+ years of traditional craftsmanship
- **Featured Work**: Oak Serving Board ($85)

### Sarah Johnson - Mountain & Wilderness Painting
- **Location**: Lake Tahoe, CA
- **Specialty**: Sierra Nevada landscapes
- **Education**: BA in Fine Arts from UC Davis

### Alex Chen - Urban Architecture & Cityscapes
- **Location**: San Francisco, CA
- **Specialty**: City architecture and urban scenes
- **Education**: MFA from California College of the Arts

### Emily Brown - Forest & Woodland Scenes
- **Location**: Muir Woods, CA
- **Specialty**: Forest environments and atmospheric lighting
- **Background**: Self-taught with Plein Air Academy workshops

## ?? Shopping Cart Features

- **Add to cart** from any product detail page
- **Persistent storage** using localStorage  
- **Live counter** in navigation
- **Remove items** individually
- **Automatic totals** calculation
- **Artist links** in cart items for easy profile access (NEW)
- **Empty cart handling** with helpful messaging
- **Demo checkout** with user notification

## ?? Responsive Design

- **Mobile-first** approach with progressive enhancement
- **Breakpoints**: 768px (tablet) and 480px (mobile)
- **Flexible grids** that adapt to screen size
- **Touch-friendly** buttons and navigation
- **Optimized typography** for different screen sizes

## ?? Design Elements

- **Color Palette**: 
  - Primary: #2c5aa0 (Blue)
  - Secondary: #27ae60 (Green)  
  - Accent: #e74c3c (Red for cart counter)
  - Background: #fafafa (Light gray)
  - Text: #333333 (Dark gray)

- **Typography**: Segoe UI font family for clean, modern look
- **Shadows**: Subtle box shadows for depth and hierarchy
- **Transitions**: Smooth hover effects and animations
- **Icons**: Unicode symbols for simple, accessible icons

## ?? Getting Started

1. Open `index.html` in a web browser
2. Navigate through the different pages using the menu
3. Click on artist names to view their detailed profiles (NEW)
4. Visit the "Artists" page to see all featured artists (NEW)
5. Click "View Details" on any product to see the detail page
6. Add items to cart and view the shopping cart
7. Test the responsive design by resizing the browser window

## ?? Notes

- This is a **demonstration website** - no actual payment processing
- **Images are placeholders** - in production, real product and artist images would be added
- **Cart data persists** in localStorage until manually cleared
- **All functionality is client-side** - no server required
- **Artist data** is stored in JavaScript objects for demo purposes

## ?? Future Enhancements

- Add actual product and artist images
- Implement user accounts and login
- Add product search and filtering by artist
- Include customer reviews and ratings
- Add inventory management
- Integrate with payment processing
- Add order history and tracking
- Implement artist commission request system
- Add artist blog/news section