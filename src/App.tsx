import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook, Flame, ChevronRight, ShoppingCart, X, Plus } from 'lucide-react';

const Navbar = ({ cartCount, onOpenCart }: { cartCount: number, onOpenCart: () => void }) => (
  <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0 flex items-center space-x-2">
          <Flame className="w-8 h-8 text-red-600" />
          <span className="font-display text-2xl font-bold tracking-wider text-white">BOM ESPETTUS</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-zinc-300 hover:text-red-600 transition-colors text-sm uppercase tracking-widest font-medium">Início</a>
          <a href="#about" className="text-zinc-300 hover:text-red-600 transition-colors text-sm uppercase tracking-widest font-medium">Sobre</a>
          <a href="#menu" className="text-zinc-300 hover:text-red-600 transition-colors text-sm uppercase tracking-widest font-medium">Cardápio</a>
          <a href="#contact" className="text-zinc-300 hover:text-red-600 transition-colors text-sm uppercase tracking-widest font-medium">Contato</a>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-zinc-300 hover:text-red-600 transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-red-700 transition-colors"
          >
            Fazer Pedido
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80" 
        alt="Pizza deliciosa" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="block text-red-600 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-bold"
      >
        O Melhor Espetinho e Pizza da Cidade
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-6xl md:text-8xl lg:text-9xl text-white font-bold leading-none mb-8"
      >
        BOM <span className="text-red-600">ESPETTUS</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button 
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-red-600 text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-red-700 transition-colors inline-flex items-center group"
        >
          Ver Cardápio
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <img src="https://images.unsplash.com/photo-1615719413546-198b25453f85?auto=format&fit=crop&w=1920&q=80" alt="Pizza pattern" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-sm overflow-hidden border-l-4 border-b-4 border-red-600">
            <img 
              src="https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=800&q=80" 
              alt="Forno de pizza e espetos" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-sm overflow-hidden border-4 border-zinc-950 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=80" 
              alt="Espetinhos na brasa" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div>
          <span className="text-red-600 text-sm uppercase tracking-widest mb-4 block font-bold">Nossa História</span>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6 leading-none">
            TRADIÇÃO EM CADA <span className="text-red-600">FATIA E ESPETO</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8 font-light text-lg">
            O Bom Espettus nasceu da paixão pelo autêntico churrasco brasileiro e evoluiu para trazer também as melhores pizzas artesanais da região. 
            Nossa missão é simples: oferecer os melhores cortes de carne, massas de fermentação natural e aquela cerveja estupidamente gelada.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8 font-light text-lg">
            Seja para um happy hour com os amigos ou um jantar em família, 
            aqui você encontra um ambiente descontraído e o verdadeiro sabor da brasa e do forno a lenha.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-red-600"></div>
            <span className="font-display text-xl text-white tracking-wider">QUALIDADE PREMIUM</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

type MenuItem = { name: string, description: string, price: number, popular?: boolean };

const Menu = ({ onAddToCart }: { onAddToCart: (item: MenuItem) => void }) => {
  const [activeCategory, setActiveCategory] = useState("Pizzas");

  const menuData = [
    {
      category: "Pizzas",
      items: [
        { name: "Margherita", description: "Molho de tomate, mussarela, manjericão fresco e azeite.", price: 45, popular: true },
        { name: "Calabresa", description: "Calabresa fatiada, cebola, azeitonas pretas e orégano.", price: 48, popular: true },
        { name: "Quatro Queijos", description: "Mussarela, provolone, parmesão e gorgonzola.", price: 55 },
        { name: "Frango com Catupiry", description: "Frango desfiado temperado e legítimo Catupiry.", price: 52, popular: true },
        { name: "Portuguesa", description: "Presunto, ovos, cebola, ervilha e mussarela.", price: 50 },
        { name: "Pepperoni", description: "Mussarela, pepperoni fatiado e um toque de páprica.", price: 58 }
      ]
    },
    {
      category: "Espetos",
      items: [
        { name: "Alcatra", description: "Corte macio e suculento, tempero da casa.", price: 12, popular: true },
        { name: "Frango com Bacon", description: "Cubos de frango envoltos em bacon crocante.", price: 14 },
        { name: "Coraçãozinho", description: "Tradicional coração de frango temperado na cerveja.", price: 10 },
        { name: "Picanha Angus", description: "A rainha do churrasco, maciez e sabor inigualáveis.", price: 22, popular: true },
        { name: "Cordeiro", description: "Corte de cordeiro temperado com ervas finas.", price: 18 },
        { name: "Pão de Alho Especial", description: "Creme de alho artesanal com queijo gratinado.", price: 10, popular: true }
      ]
    },
    {
      category: "Entradas",
      items: [
        { name: "Dadinhos de Tapioca", description: "Acompanha geleia de pimenta artesanal.", price: 28, popular: true },
        { name: "Batata Rústica", description: "Com alecrim, alho confitado e maionese da casa.", price: 25 },
        { name: "Mix de Pastéis", description: "6 unidades: carne, queijo e palmito.", price: 32 },
        { name: "Bolinho de Costela", description: "Costela desfiada com massa de mandioca.", price: 35, popular: true }
      ]
    },
    {
      category: "Sobremesas",
      items: [
        { name: "Petit Gâteau", description: "Bolo de chocolate com recheio cremoso e sorvete.", price: 28, popular: true },
        { name: "Pudim de Leite", description: "O clássico pudim com calda de caramelo.", price: 18 },
        { name: "Brownie com Sorvete", description: "Brownie morno, sorvete de creme e calda quente.", price: 24 },
        { name: "Pizza de Nutella", description: "Massa fina com Nutella e morangos frescos.", price: 42, popular: true }
      ]
    },
    {
      category: "Bebidas",
      items: [
        { name: "Chopp Artesanal", description: "Pilsen ou IPA. Caneca super gelada (500ml).", price: 12, popular: true },
        { name: "Caipirinha de Limão", description: "Cachaça artesanal, limão tahiti e muito gelo.", price: 18 },
        { name: "Soda Italiana", description: "Maçã verde, Morango ou Cranberry.", price: 14 },
        { name: "Suco Natural", description: "Laranja, Limão ou Maracujá.", price: 9 },
        { name: "Água Mineral", description: "Com ou sem gás.", price: 5 }
      ]
    }
  ];

  const activeItems = menuData.find(c => c.category === activeCategory)?.items || [];

  return (
    <section id="menu" className="py-24 bg-black text-white relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80" alt="Pizza background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-red-600 text-sm uppercase tracking-widest mb-4 block font-bold">Faça seu Pedido</span>
          <h2 className="font-display text-5xl md:text-6xl mb-6">NOSSO <span className="text-red-600">CARDÁPIO</span></h2>
        </div>

        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
          {menuData.map((section) => (
            <button
              key={section.category}
              onClick={() => setActiveCategory(section.category)}
              className={`px-6 py-2 rounded-sm font-display text-xl tracking-wide transition-colors whitespace-nowrap ${
                activeCategory === section.category 
                  ? "bg-red-600 text-white" 
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {section.category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {activeItems.map((item, itemIdx) => (
            <div key={itemIdx} className="group bg-zinc-900/50 p-6 rounded-sm border border-zinc-800 hover:border-red-600/50 transition-all duration-300 hover:bg-zinc-900">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-display text-2xl group-hover:text-red-600 transition-colors tracking-wide">{item.name}</h4>
                    {item.popular && (
                      <span className="bg-red-600/10 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-600/20 uppercase tracking-tighter">
                        Mais Pedido
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed mt-1">{item.description}</p>
                </div>
                <div className="text-right ml-4">
                  <span className="font-display text-xl text-red-600 block mb-2">R$ {item.price.toFixed(2)}</span>
                  <button 
                    onClick={() => onAddToCart(item)}
                    className="p-2 bg-zinc-800 hover:bg-red-600 text-white rounded-full transition-all duration-300 transform active:scale-90"
                    title="Adicionar ao pedido"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1538506904681-c5e9b5c2098e?auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section className="py-4 bg-zinc-950">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {images.map((src, idx) => (
          <div key={idx} className="aspect-square overflow-hidden rounded-sm relative group">
            <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply"></div>
            <img 
              src={src} 
              alt={`Galeria ${idx + 1}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-black pt-20 pb-10 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
            <Flame className="w-6 h-6 text-red-600" />
            <h3 className="font-display text-3xl text-white tracking-wider">BOM ESPETTUS</h3>
          </div>
          <p className="text-zinc-400 font-light leading-relaxed mb-6">
            O point perfeito para quem ama churrasco de verdade, pizzas artesanais, cerveja gelada e bons momentos.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors"><Facebook className="w-6 h-6" /></a>
          </div>
        </div>
        
        <div className="text-center">
          <h4 className="font-display text-xl uppercase tracking-widest text-white mb-6">Contato & Local</h4>
          <ul className="space-y-4 text-zinc-400 font-light">
            <li className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-red-600" />
              <span>Av. das Brasas, 456 - Centro</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-red-600" />
              <span>(11) 98765-4321</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <Clock className="w-5 h-5 text-red-600" />
              <span>Ter - Dom: 18h às 00h</span>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h4 className="font-display text-xl uppercase tracking-widest text-white mb-6">Promoções</h4>
          <p className="text-zinc-400 font-light mb-4">
            Cadastre-se para receber ofertas e cupons de desconto.
          </p>
          <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-sm text-white focus:outline-none focus:border-red-600 transition-colors"
            />
            <button className="px-4 py-3 bg-red-600 text-white uppercase tracking-widest font-bold hover:bg-red-700 transition-colors rounded-sm">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600 uppercase tracking-wider font-medium">
        <p>&copy; {new Date().getFullYear()} Bom Espettus. Todos os direitos reservados.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-red-600 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-red-600 transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black selection:bg-red-600 selection:text-white">
      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />
      <Hero />
      <About />
      <Menu onAddToCart={addToCart} />
      <Gallery />
      <Footer />

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="relative w-full max-w-md bg-zinc-950 h-full shadow-2xl border-l border-zinc-800 flex flex-col"
          >
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
              <h2 className="font-display text-2xl text-white">SEU PEDIDO</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-zinc-500 text-center mt-10">Seu carrinho está vazio.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-zinc-900 p-4 rounded-sm">
                    <div>
                      <h4 className="font-display text-lg text-white">{item.name}</h4>
                      <span className="text-red-600 font-bold">R$ {item.price.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={() => removeFromCart(idx)}
                      className="text-zinc-500 hover:text-red-600 transition-colors p-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-zinc-800 bg-black">
              <div className="flex justify-between items-center mb-6">
                <span className="text-zinc-400 uppercase tracking-widest text-sm font-bold">Total</span>
                <span className="font-display text-3xl text-white">R$ {total.toFixed(2)}</span>
              </div>
              <button 
                disabled={cart.length === 0}
                className="w-full bg-red-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Finalizar Pedido
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
