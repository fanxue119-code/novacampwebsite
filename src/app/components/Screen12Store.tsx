import { ShoppingCart, ArrowRight, Check, Home } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onNavigate: (screen: string) => void;
}

interface CartItem {
  id: string;
  size: string;
  quantity: number;
}

export function Screen12Store({ onNavigate }: Props) {
  const [cart, setCart] = useState<Record<string, CartItem[]>>({});
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');

  const products = [
    {
      id: 'afterparty-ticket',
      name: 'After Party 门票',
      color: '8月19日 20:30-23:00',
      price: 199,
      originalPrice: 0,
      sizes: ['门票'],
      tag: '🎉 热卖中'
    },
    {
      id: 'tshirt-black',
      name: 'Nova Camp 纪念T恤',
      color: '经典黑',
      price: 168,
      originalPrice: 228,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      tag: '限量款'
    },
    {
      id: 'tshirt-white',
      name: 'Nova Camp 纪念T恤',
      color: '纯白',
      price: 168,
      originalPrice: 228,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      tag: '热销'
    },
    {
      id: 'hoodie-black',
      name: 'Nova Camp 卫衣',
      color: '经典黑',
      price: 298,
      originalPrice: 398,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      tag: '限量款'
    },
    {
      id: 'hoodie-gray',
      name: 'Nova Camp 卫衣',
      color: '灰色',
      price: 298,
      originalPrice: 398,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      tag: ''
    },
    {
      id: 'cap-black',
      name: 'Nova Camp 棒球帽',
      color: '经典黑',
      price: 98,
      originalPrice: 148,
      sizes: ['均码'],
      tag: '新品'
    },
    {
      id: 'bag',
      name: 'Nova Camp 帆布袋',
      color: '米白色',
      price: 68,
      originalPrice: 98,
      sizes: ['均码'],
      tag: ''
    }
  ];

  const addToCart = (productId: string, size: string) => {
    setCart(prev => {
      const productCart = prev[productId] || [];
      const existingItem = productCart.find(item => item.size === size);
      
      if (existingItem) {
        return {
          ...prev,
          [productId]: productCart.map(item =>
            item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...prev,
          [productId]: [...productCart, { id: productId, size, quantity: 1 }]
        };
      }
    });
    
    setSelectedProduct(null);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, items) => {
      return total + items.reduce((sum, item) => sum + item.quantity, 0);
    }, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, items]) => {
      const product = products.find(p => p.id === productId);
      if (!product) return total;
      const itemsTotal = items.reduce((sum, item) => sum + item.quantity, 0);
      return total + product.price * itemsTotal;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            NOVA STORE
          </div>
          <nav className="flex gap-4 items-center">
            <button onClick={() => onNavigate('landing')} className="hover:text-red-500 transition-colors">
              <Home className="w-5 h-5" />
            </button>
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <div className="absolute -top-2 -right-2 bg-[#dc2626] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[35vh] mt-14 bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, #dc2626 40px, #dc2626 42px)'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white mb-3" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2.5rem',
            letterSpacing: '0.05em'
          }}>
            OFFICIAL<br/>MERCHANDISE
          </h1>
          <p className="text-gray-300 text-sm">限量纪念品 · 售完即止</p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-14 bg-white z-40 border-b border-gray-300">
        <div className="flex px-6 gap-6 overflow-x-auto py-4">
          {['全部商品', '服装', '配饰', '限量款'].map((tab) => (
            <button
              key={tab}
              className={`text-sm whitespace-nowrap pb-2 ${
                tab === '全部商品'
                  ? 'border-b-2 border-black font-semibold'
                  : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-8">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-300 hover:border-black transition-colors">
              {/* Product Image Placeholder */}
              <div className="relative bg-gray-100 aspect-square">
                <img
                  src={`https://images.unsplash.com/photo-${
                    product.id.includes('tshirt') ? '1521572163474-6864f9cf17ab' :
                    product.id.includes('hoodie') ? '1556821840-3a63f95609a7' :
                    product.id.includes('cap') ? '1588850561407-ed78c282e89b' :
                    '1591047139829-d91aecb6caea'
                  }?w=400&h=400&fit=crop`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.tag && (
                  <div className="absolute top-2 left-2 bg-[#dc2626] text-white text-xs px-2 py-1">
                    {product.tag}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h3 className="text-sm font-semibold mb-0.5 line-clamp-1">{product.name}</h3>
                <div className="text-xs text-gray-600 mb-2">{product.color}</div>
                
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-bold text-[#dc2626]">¥{product.price}</span>
                  {product.originalPrice > 0 && (
                    <span className="text-xs text-gray-400 line-through">¥{product.originalPrice}</span>
                  )}
                </div>

                <button
                  onClick={() => {
                    setSelectedProduct(product.id);
                    setSelectedSize(product.sizes[0]);
                  }}
                  className="w-full bg-black text-white py-2 text-xs hover:bg-gray-800 transition-colors"
                >
                  选择规格
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end max-w-[390px] mx-auto">
          <div className="bg-white w-full rounded-t-2xl p-6 animate-slide-up">
            {(() => {
              const product = products.find(p => p.id === selectedProduct);
              if (!product) return null;

              return (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                      <div className="text-sm text-gray-600">{product.color}</div>
                    </div>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="text-2xl leading-none"
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-2xl font-bold text-[#dc2626]">¥{product.price}</span>
                    {product.originalPrice > 0 && (
                      <span className="text-sm text-gray-400 line-through">¥{product.originalPrice}</span>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold mb-3">选择尺码</div>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`flex-1 py-2 border-2 text-sm font-semibold transition-colors ${
                            selectedSize === size
                              ? 'border-black bg-black text-white'
                              : 'border-gray-300 hover:border-black'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 bg-gray-50 p-4 text-sm space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>100%纯棉材质，亲肤舒适</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>原创设计，Nova Camp 2026专属</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>预售商品，8月10日开始发货</span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product.id, selectedSize)}
                    className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 flex items-center justify-center gap-2 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span className="tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem' }}>
                      加入购物车
                    </span>
                  </button>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Floating Cart Button */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black p-4 z-40 max-w-[390px] mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-xs text-gray-600 mb-1">购物车 ({getTotalItems()} 件)</div>
              <div className="text-xl font-bold text-[#dc2626]">¥{getTotalPrice()}</div>
            </div>
            <button
              onClick={() => onNavigate('payment')}
              className="bg-black text-white px-8 py-3 flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              <span className="tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                去结算
              </span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}