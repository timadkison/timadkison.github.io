// Cart functionality
let cart = JSON.parse(localStorage.getItem('artisan-cart')) || [];

// Artist data
const artists = {
    'jane-doe': {
        id: 'jane-doe',
        name: 'Jane Doe',
        specialty: 'Landscape Painting',
        bio: 'Jane Doe is a passionate landscape artist with over 15 years of experience capturing the natural beauty of coastal regions. Her work focuses on the interplay of light and water, creating serene scenes that transport viewers to peaceful shores.',
        location: 'Coastal Bay, CA',
        education: 'MFA in Fine Arts from California College of the Arts',
        exhibitions: ['Coastal Gallery Annual Show 2023', 'Pacific Art Festival 2022', 'Bay Area Landscapes Exhibition 2021'],
        awards: ['Best Seascape Award - Coastal Gallery 2023', 'Emerging Artist Prize - Pacific Art Festival 2022'],
        statement: 'I believe that art has the power to heal and inspire. Through my paintings, I aim to share the tranquility and wonder I find in nature\'s most beautiful moments.',
        image: 'images/artists/jane-doe.jpg',
        website: 'www.janedoeart.com',
        social: {
            instagram: '@janedoeart',
            facebook: 'Jane Doe Art Studio'
        }
    },
    'mark-smith': {
        id: 'mark-smith',
        name: 'Mark Smith',
        specialty: 'Contemporary Sculpture',
        bio: 'Mark Smith is a contemporary sculptor who works primarily with metal and mixed media. His geometric forms explore the relationship between structure and flow, creating pieces that seem to defy gravity while maintaining perfect balance.',
        location: 'San Francisco, CA',
        education: 'BFA in Sculpture from San Francisco Art Institute',
        exhibitions: ['Modern Forms Gallery 2023', 'Bay Area Sculptors Collective 2022', 'Contemporary Art Museum Group Show 2021'],
        awards: ['Innovation in Sculpture Award 2023', 'Best Contemporary Piece - Modern Forms Gallery 2022'],
        statement: 'My work explores the tension between order and chaos, structure and freedom. I use geometric forms to create a visual dialogue about balance in our modern world.',
        image: 'images/artists/mark-smith.jpg',
        website: 'www.marksmithsculpture.com',
        social: {
            instagram: '@marksmithsculptor',
            linkedin: 'Mark Smith - Sculptor'
        }
    },
    'tims-woodshop': {
        id: 'tims-woodshop',
        name: "Tim's Woodshop",
        specialty: 'Handcrafted Wood Furniture & Accessories',
        bio: 'Tim\'s Woodshop has been creating beautiful, functional wooden pieces for over 20 years. Founded by master craftsman Tim Anderson, the shop specializes in sustainable woodworking using locally sourced materials.',
        location: 'Redwood City, CA',
        education: 'Traditional Apprenticeship in Fine Woodworking',
        exhibitions: ['Artisan Craft Fair 2023', 'Sustainable Living Expo 2022', 'Local Makers Market (Monthly)'],
        awards: ['Craftsperson of the Year 2023', 'Sustainability Award - Green Living Magazine 2022'],
        statement: 'We believe in creating pieces that will last for generations. Every piece of wood tells a story, and we aim to honor that story through our craftsmanship.',
        image: 'images/artists/tims-woodshop.jpg',
        website: 'www.timswoodshop.com',
        social: {
            instagram: '@timswoodshop',
            facebook: 'Tims Woodshop'
        }
    },
    'sarah-johnson': {
        id: 'sarah-johnson',
        name: 'Sarah Johnson',
        specialty: 'Mountain & Wilderness Painting',
        bio: 'Sarah Johnson draws inspiration from her adventures in the Sierra Nevada mountains. Her paintings capture the majesty and solitude of high alpine environments with remarkable detail and emotional depth.',
        location: 'Lake Tahoe, CA',
        education: 'BA in Fine Arts from UC Davis',
        exhibitions: ['Mountain Art Festival 2023', 'Wilderness Gallery Solo Show 2022', 'Nature Conservancy Art Auction 2021'],
        awards: ['Best Mountain Landscape 2023', 'Environmental Art Award 2022'],
        statement: 'The mountains have been my greatest teacher. Through my art, I hope to inspire others to protect these magnificent wild places.',
        image: 'images/artists/sarah-johnson.jpg',
        website: 'www.sarahjohnsonart.com',
        social: {
            instagram: '@sarahjohnsonpaints'
        }
    },
    'alex-chen': {
        id: 'alex-chen',
        name: 'Alex Chen',
        specialty: 'Urban Architecture & Cityscapes',
        bio: 'Alex Chen is fascinated by the intersection of light, shadow, and urban architecture. Their work captures the dynamic energy of city life while finding beauty in the geometric patterns of modern buildings.',
        location: 'San Francisco, CA',
        education: 'MFA from California College of the Arts',
        exhibitions: ['Urban Visions Gallery 2023', 'City Art Collective 2022', 'Architecture & Art Symposium 2021'],
        awards: ['Urban Artist of the Year 2023'],
        statement: 'Cities are living, breathing entities. My paintings explore the relationship between human creativity and the urban environment we\'ve built.',
        image: 'images/artists/alex-chen.jpg',
        website: 'www.alexchenart.com',
        social: {
            instagram: '@alexchen_artist',
            twitter: '@alexchenpaints'
        }
    },
    'emily-brown': {
        id: 'emily-brown',
        name: 'Emily Brown',
        specialty: 'Forest & Woodland Scenes',
        bio: 'Emily Brown specializes in capturing the quiet magic of forest environments. Her work often features dappled sunlight filtering through ancient trees, creating atmospheric paintings that evoke peace and contemplation.',
        location: 'Muir Woods, CA',
        education: 'Self-taught with workshops at Plein Air Academy',
        exhibitions: ['Forest Art Festival 2023', 'Nature Lovers Gallery 2022'],
        awards: ['Best Nature Scene 2023'],
        statement: 'Forests hold ancient wisdom. I paint to share the peace and wonder I find walking among the trees.',
        image: 'images/artists/emily-brown.jpg',
        social: {
            instagram: '@emilybrownforestpainter'
        }
    }
    // Additional artists would be added here for all the other artists in the products
};

// Product data
const products = {
    'coastal-sunrise': {
        id: 'coastal-sunrise',
        name: 'Coastal Sunrise',
        artist: 'Jane Doe',
        artistId: 'jane-doe',
        price: 250.00,
        description: 'A breathtaking seascape capturing the golden hour magic of dawn breaking over peaceful waters. This stunning piece brings the tranquility of the ocean into your home with its warm palette of oranges, pinks, and soft blues.',
        image: 'images/coastal-sunrise.jpg',
        category: 'framed-art'
    },
    'geometric-flow': {
        id: 'geometric-flow',
        name: 'Geometric Flow',
        artist: 'Mark Smith',
        artistId: 'mark-smith',
        price: 480.00,
        description: 'A striking contemporary sculpture that plays with light and shadow through its dynamic geometric forms. Crafted from brushed aluminum, this piece creates ever-changing visual experiences as light moves throughout the day.',
        image: 'images/geometric-flow.jpg',
        category: 'abstract-sculptures'
    },
    'oak-serving-board': {
        id: 'oak-serving-board',
        name: 'Oak Serving Board',
        artist: "Tim's Woodshop",
        artistId: 'tims-woodshop',
        price: 85.00,
        description: 'Beautifully crafted from sustainable oak, perfect for entertaining and everyday use. Each board features unique grain patterns and is finished with food-safe oil for durability and beauty.',
        image: 'images/oak-serving-board.jpg',
        category: 'wood-crafts'
    },
    // Additional products for category pages
    'mountain-vista': {
        id: 'mountain-vista',
        name: 'Mountain Vista',
        artist: 'Sarah Johnson',
        artistId: 'sarah-johnson',
        price: 320.00,
        description: 'A majestic landscape painting capturing the serene beauty of mountain peaks at sunset.',
        image: 'images/mountain-vista.jpg',
        category: 'framed-art'
    },
    'urban-reflections': {
        id: 'urban-reflections',
        name: 'Urban Reflections',
        artist: 'Alex Chen',
        artistId: 'alex-chen',
        price: 185.00,
        description: 'A contemporary cityscape with dramatic lighting and architectural details.',
        image: 'images/urban-reflections.jpg',
        category: 'framed-art'
    },
    'forest-pathway': {
        id: 'forest-pathway',
        name: 'Forest Pathway',
        artist: 'Emily Brown',
        artistId: 'emily-brown',
        price: 275.00,
        description: 'A peaceful woodland scene that invites viewers into a tranquil forest setting.',
        image: 'images/forest-pathway.jpg',
        category: 'framed-art'
    },
    'wildflower-meadow': {
        id: 'wildflower-meadow',
        name: 'Wildflower Meadow',
        artist: 'Lisa Davis',
        artistId: 'lisa-davis',
        price: 225.00,
        description: 'A vibrant field of wildflowers bursting with color and life.',
        image: 'images/wildflower-meadow.jpg',
        category: 'framed-art'
    },
    'vintage-harbor': {
        id: 'vintage-harbor',
        name: 'Vintage Harbor',
        artist: 'Robert Wilson',
        artistId: 'robert-wilson',
        price: 295.00,
        description: 'A nostalgic harbor scene with fishing boats and weathered docks.',
        image: 'images/vintage-harbor.jpg',
        category: 'framed-art'
    },
    'autumn-leaves': {
        id: 'autumn-leaves',
        name: 'Autumn Leaves',
        artist: 'Michelle Taylor',
        artistId: 'michelle-taylor',
        price: 210.00,
        description: 'A warm autumn scene celebrating the golden colors of fall.',
        image: 'images/autumn-leaves.jpg',
        category: 'framed-art'
    },
    // Abstract Sculptures
    'twisted-harmony': {
        id: 'twisted-harmony',
        name: 'Twisted Harmony',
        artist: 'David Rodriguez',
        artistId: 'david-rodriguez',
        price: 520.00,
        description: 'An elegant twisted form that creates beautiful shadows and highlights.',
        image: 'images/twisted-harmony.jpg',
        category: 'abstract-sculptures'
    },
    'crystalline-dreams': {
        id: 'crystalline-dreams',
        name: 'Crystalline Dreams',
        artist: 'Anna Kowalski',
        artistId: 'anna-kowalski',
        price: 380.00,
        description: 'A geometric sculpture inspired by crystal formations and natural patterns.',
        image: 'images/crystalline-dreams.jpg',
        category: 'abstract-sculptures'
    },
    'flowing-curves': {
        id: 'flowing-curves',
        name: 'Flowing Curves',
        artist: 'Michael Chang',
        artistId: 'michael-chang',
        price: 445.00,
        description: 'Smooth, organic curves that seem to dance in space.',
        image: 'images/flowing-curves.jpg',
        category: 'abstract-sculptures'
    },
    'angular-momentum': {
        id: 'angular-momentum',
        name: 'Angular Momentum',
        artist: 'Jessica Martinez',
        artistId: 'jessica-martinez',
        price: 395.00,
        description: 'Sharp angles and clean lines create a sense of movement and energy.',
        image: 'images/angular-momentum.jpg',
        category: 'abstract-sculptures'
    },
    'spiral-ascension': {
        id: 'spiral-ascension',
        name: 'Spiral Ascension',
        artist: 'Thomas Anderson',
        artistId: 'thomas-anderson',
        price: 560.00,
        description: 'An upward spiral that draws the eye skyward with graceful curves.',
        image: 'images/spiral-ascension.jpg',
        category: 'abstract-sculptures'
    },
    'balance-point': {
        id: 'balance-point',
        name: 'Balance Point',
        artist: 'Karen White',
        artistId: 'karen-white',
        price: 475.00,
        description: 'A carefully balanced composition that defies gravity and expectations.',
        image: 'images/balance-point.jpg',
        category: 'abstract-sculptures'
    },
    // Wood Crafts
    'maple-cutting-board': {
        id: 'maple-cutting-board',
        name: 'Maple Cutting Board',
        artist: "Tim's Woodshop",
        artistId: 'tims-woodshop',
        price: 65.00,
        description: 'A beautiful maple cutting board with juice groove and non-slip feet.',
        image: 'images/maple-cutting-board.jpg',
        category: 'wood-crafts'
    },
    'walnut-jewelry-box': {
        id: 'walnut-jewelry-box',
        name: 'Walnut Jewelry Box',
        artist: 'Craftsman Corner',
        artistId: 'craftsman-corner',
        price: 145.00,
        description: 'Handcrafted walnut jewelry box with velvet-lined compartments.',
        image: 'images/walnut-jewelry-box.jpg',
        category: 'wood-crafts'
    },
    'cedar-planter-box': {
        id: 'cedar-planter-box',
        name: 'Cedar Planter Box',
        artist: 'Green Thumb Crafts',
        artistId: 'green-thumb-crafts',
        price: 95.00,
        description: 'Weather-resistant cedar planter perfect for herbs and small plants.',
        image: 'images/cedar-planter-box.jpg',
        category: 'wood-crafts'
    },
    'cherry-picture-frame': {
        id: 'cherry-picture-frame',
        name: 'Cherry Picture Frame',
        artist: 'Frame Masters',
        artistId: 'frame-masters',
        price: 55.00,
        description: 'Elegant cherry wood frame with hand-carved details.',
        image: 'images/cherry-picture-frame.jpg',
        category: 'wood-crafts'
    },
    'bamboo-tablet-stand': {
        id: 'bamboo-tablet-stand',
        name: 'Bamboo Tablet Stand',
        artist: 'Eco Crafters',
        artistId: 'eco-crafters',
        price: 35.00,
        description: 'Sustainable bamboo stand perfect for tablets and small devices.',
        image: 'images/bamboo-tablet-stand.jpg',
        category: 'wood-crafts'
    },
    'reclaimed-wood-shelf': {
        id: 'reclaimed-wood-shelf',
        name: 'Reclaimed Wood Shelf',
        artist: 'Rustic Revival',
        artistId: 'rustic-revival',
        price: 125.00,
        description: 'Beautiful floating shelf made from reclaimed barn wood.',
        image: 'images/reclaimed-wood-shelf.jpg',
        category: 'wood-crafts'
    }
};

// Initialize page
$(document).ready(function() {
    updateCartCount();
    setupNavigation();
    setupProductDetails();
    setupCartPage();
    setupArtistPage();
    
    // Setup mobile navigation toggle
    $('.nav-toggle').click(function() {
        $('.nav-menu').toggleClass('active');
        $(this).attr('aria-expanded', $('.nav-menu').hasClass('active'));
    });
});

// Navigation setup
function setupNavigation() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    $('.nav-link').removeClass('active');
    $(`.nav-link[href*="${currentPage}"]`).addClass('active');
}

// Artist page setup
function setupArtistPage() {
    if (window.location.pathname.includes('artist.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const artistId = urlParams.get('id');
        
        if (artistId && artists[artistId]) {
            displayArtistDetails(artists[artistId]);
        }
    }
}

// Display artist details
function displayArtistDetails(artist) {
    document.title = `${artist.name} - The Local Artisan Studio`;
    
    $('#artist-image').attr({
        'src': artist.image,
        'alt': `Portrait of ${artist.name}`
    });
    
    $('#artist-name').text(artist.name);
    $('#artist-specialty').text(artist.specialty);
    $('#artist-location').text(artist.location);
    $('#artist-bio').text(artist.bio);
    $('#artist-education').text(artist.education);
    $('#artist-statement').text(artist.statement);
    
    // Handle exhibitions
    if (artist.exhibitions && artist.exhibitions.length > 0) {
        const exhibitionsList = $('#artist-exhibitions');
        exhibitionsList.empty();
        artist.exhibitions.forEach(exhibition => {
            exhibitionsList.append(`<li>${exhibition}</li>`);
        });
    }
    
    // Handle awards
    if (artist.awards && artist.awards.length > 0) {
        const awardsList = $('#artist-awards');
        awardsList.empty();
        artist.awards.forEach(award => {
            awardsList.append(`<li>${award}</li>`);
        });
    } else {
        $('#awards-section').hide();
    }
    
    // Handle website
    if (artist.website) {
        $('#artist-website').attr('href', `https://${artist.website}`).text(artist.website);
    } else {
        $('#website-section').hide();
    }
    
    // Handle social media
    const socialContainer = $('#artist-social');
    socialContainer.empty();
    if (artist.social) {
        Object.entries(artist.social).forEach(([platform, handle]) => {
            socialContainer.append(`
                <span class="social-link">
                    <strong>${platform.charAt(0).toUpperCase() + platform.slice(1)}:</strong> ${handle}
                </span>
            `);
        });
    }
    
    // Load artist's works
    loadArtistWorks(artist.id);
}

// Load artist's works
function loadArtistWorks(artistId) {
    const artistWorks = Object.values(products).filter(product => product.artistId === artistId);
    const worksGrid = $('#artist-works-grid');
    
    if (artistWorks.length > 0) {
        worksGrid.empty();
        artistWorks.forEach(product => {
            const workCard = `
                <div class="artist-work-card">
                    <div class="work-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <div class="image-placeholder" aria-hidden="true">[Image: ${product.name}]</div>
                    </div>
                    <div class="work-info">
                        <h4>${product.name}</h4>
                        <p class="work-price">$${product.price.toFixed(2)}</p>
                        <a href="details.html?item=${product.id}" class="view-work-btn">View Details</a>
                    </div>
                </div>
            `;
            worksGrid.append(workCard);
        });
    } else {
        worksGrid.html('<p>No works currently available from this artist.</p>');
    }
}

// Product details page setup
function setupProductDetails() {
    if (window.location.pathname.includes('details.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('item');
        
        if (productId && products[productId]) {
            displayProductDetails(products[productId]);
        }
    }
}

// Display product details
function displayProductDetails(product) {
    document.title = `${product.name} - The Local Artisan Studio`;
    
    $('#product-image').attr({
        'src': product.image,
        'alt': `${product.name} by ${product.artist}`
    });
    
    $('#product-name').text(product.name);
    
    // Make artist name clickable if artist data exists
    const artistElement = $('#product-artist');
    if (product.artistId && artists[product.artistId]) {
        artistElement.html(`by <a href="artist.html?id=${product.artistId}" class="artist-link">${product.artist}</a>`);
    } else {
        artistElement.text(`by ${product.artist}`);
    }
    
    $('#product-description').text(product.description);
    $('#product-price').text(`$${product.price.toFixed(2)}`);
    
    // Setup add to cart button
    $('#add-to-cart').off('click').on('click', function() {
        addToCart(product);
    });
}

// Add item to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('artisan-cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show feedback
    const button = $('#add-to-cart');
    const originalText = button.text();
    button.text('Added to Cart!').prop('disabled', true);
    
    setTimeout(() => {
        button.text(originalText).prop('disabled', false);
    }, 1500);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('artisan-cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
}

// Update cart count in navigation
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    $('#cart-count').text(totalItems);
    
    if (totalItems > 0) {
        $('#cart-count').show();
    } else {
        $('#cart-count').hide();
    }
}

// Setup cart page
function setupCartPage() {
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    }
}

// Display cart items
function displayCartItems() {
    const cartItemsContainer = $('#cart-items');
    const cartTotal = $('#cart-total');
    
    if (cart.length === 0) {
        cartItemsContainer.html(`
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Browse our collection to find beautiful artwork and crafts!</p>
                <a href="index.html" class="cta-button">Start Shopping</a>
            </div>
        `);
        cartTotal.text('$0.00');
        return;
    }
    
    let total = 0;
    let cartHTML = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Artist</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        
        // Create artist link if artist data exists
        const artistDisplay = item.artistId && artists[item.artistId] 
            ? `<a href="artist.html?id=${item.artistId}" class="artist-link">${item.artist}</a>`
            : item.artist;
        
        cartHTML += `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                        <div>
                            <strong>${item.name}</strong>
                        </div>
                    </div>
                </td>
                <td>${artistDisplay}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${subtotal.toFixed(2)}</td>
                <td>
                    <button class="remove-btn" onclick="removeFromCart('${item.id}')" aria-label="Remove ${item.name} from cart">
                        Remove
                    </button>
                </td>
            </tr>
        `;
    });
    
    cartHTML += `
            </tbody>
        </table>
    `;
    
    cartItemsContainer.html(cartHTML);
    cartTotal.text(`$${total.toFixed(2)}`);
}

// Generate category products
function getCategoryProducts(category) {
    return Object.values(products).filter(product => product.category === category);
}

// Load category page products
function loadCategoryProducts(category, pageTitle) {
    if ($('.category-grid').length > 0) {
        document.title = `${pageTitle} - The Local Artisan Studio`;
        const categoryProducts = getCategoryProducts(category);
        const grid = $('.category-grid');
        
        grid.empty();
        
        categoryProducts.forEach(product => {
            // Create artist link if artist data exists
            const artistDisplay = product.artistId && artists[product.artistId] 
                ? `<a href="artist.html?id=${product.artistId}" class="artist-link">by ${product.artist}</a>`
                : `by ${product.artist}`;
            
            const productCard = `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name} by ${product.artist}" loading="lazy">
                        <div class="image-placeholder" aria-hidden="true">[Image Placeholder: ${product.name}]</div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="artist-name">${artistDisplay}</p>
                        <p class="product-price" aria-label="Price: $${product.price}">$${product.price.toFixed(2)}</p>
                        <a href="details.html?item=${product.id}" class="view-details-btn">View Details</a>
                    </div>
                </div>
            `;
            grid.append(productCard);
        });
    }
}

// Expose functions globally for onclick handlers
window.removeFromCart = removeFromCart;
window.loadCategoryProducts = loadCategoryProducts;