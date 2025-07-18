'use client';
import React, { useState } from 'react';

interface ProductCard {
  id: string;
  type: 'Basic' | 'Standard' | 'Premium';
  price: string;
  images: string[];
  description: string;
}

const NewArrivalPage: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const products: ProductCard[] = [
    {
      id: '1',
      type: 'Basic',
      price: '$29',
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=400&h=300&fit=crop'
      ],
      description: 'Essential GDG merchandise with clean design and comfortable fit. Perfect for everyday wear and coding sessions.'
    },
    {
      id: '2',
      type: 'Standard',
      price: '$49',
      images: [
        'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop'
      ],
      description: 'Enhanced quality with premium materials and exclusive GDG designs. Ideal for meetups and tech conferences.'
    },
    {
      id: '3',
      type: 'Premium',
      price: '$79',
      images: [
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=300&fit=crop'
      ],
      description: 'Luxury collection with superior craftsmanship and limited edition designs. For the ultimate developer experience.'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({
    '1': 0,
    '2': 0,
    '3': 0
  });

  const nextImage = (productId: string) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: (prev[productId] + 1) % products.find(p => p.id === productId)!.images.length
    }));
  };

  const prevImage = (productId: string) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: prev[productId] === 0 
        ? products.find(p => p.id === productId)!.images.length - 1 
        : prev[productId] - 1
    }));
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-black animate-pulse"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-thin text-white mb-4 tracking-wide">
            GDG <span className="text-blue-400">DEV-DRIP</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative group transform transition-all duration-500 hover:scale-105 ${
                index === 1 ? 'lg:mt-0 mt-4' : 'lg:mt-8'
              }`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 w-80 h-[600px] relative overflow-hidden shadow-2xl">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl transition-opacity duration-300 ${
                  hoveredCard === product.id ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Product Type and Price */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h3 className="text-2xl font-light text-white">{product.type}</h3>
                  <span className="text-3xl font-bold text-blue-400">{product.price}</span>
                </div>

                {/* Image Gallery */}
                <div className="relative mb-6 h-48 bg-gray-800/50 rounded-2xl overflow-hidden">
                  <img
                    src={product.images[currentImageIndex[product.id]]}
                    alt={`${product.type} merchandise`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  
                  {/* Image navigation */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => prevImage(product.id)}
                      className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => nextImage(product.id)}
                      className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      ›
                    </button>
                  </div>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {product.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          imgIndex === currentImageIndex[product.id] 
                            ? 'bg-blue-400' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="relative z-10">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  {/* Action Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Add to Cart
                  </button>
                </div>

                {/* Floating animation */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent transform transition-transform duration-1000 ${
                    hoveredCard === product.id ? 'translate-y-0' : 'translate-y-full'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-4">New arrivals every week</p>
          <button className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalPage;