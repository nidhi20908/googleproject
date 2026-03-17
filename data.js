// ============================================================
// MAISON — Shared Data & State
// ============================================================

const PRODUCTS = [
  {id:1,name:'Silk Draped Blouse',brand:'MAISON',price:18900,category:'Women',badge:'New',colors:['#f9f6f0','#1a1714','#8b4a4a'],sizes:['XS','S','M','L','XL'],desc:'Luxuriously soft 100% silk blouse with a fluid drape. Features a subtle bias cut that moves gracefully with the body.',bg:'#d4c5b0'},
  {id:2,name:'Tailored Wool Blazer',brand:'MAISON',price:34500,category:'Men',badge:null,colors:['#1a1714','#2d3a2d','#4a3d30'],sizes:['S','M','L','XL','XXL'],desc:'Single-breasted blazer in fine Italian wool. Slim silhouette with notched lapels and two-button front.',bg:'#b0b8b0'},
  {id:3,name:'Cashmere Turtleneck',brand:'MAISON',price:22800,category:'Women',badge:'New',colors:['#c8b89a','#1a1714','#8b4a4a'],sizes:['XS','S','M','L'],desc:'Pure Grade A cashmere in a classic ribbed turtleneck. Softer with every wear.',bg:'#c8b89a'},
  {id:4,name:'Linen Wide-Leg Trousers',brand:'MAISON',price:16500,category:'Men',badge:'Sale',salePrice:11900,colors:['#e8e2d8','#1a1714','#8b7a5a'],sizes:['S','M','L','XL'],desc:'Breathable linen trousers with a relaxed wide-leg cut. Elastic waist with a polished press.',bg:'#d0cabb'},
  {id:5,name:'Leather Belt Bag',brand:'MAISON',price:29500,category:'Accessories',badge:null,colors:['#4a3d30','#1a1714','#8b1a1a'],sizes:['One Size'],desc:'Full-grain leather belt bag with adjustable gold-tone hardware. Compact yet functional.',bg:'#a08060'},
  {id:6,name:'Wool Midi Skirt',brand:'MAISON',price:14900,category:'Women',badge:'Sale',salePrice:9900,colors:['#1a1714','#4a3d30','#2d1a20'],sizes:['XS','S','M','L','XL'],desc:'A-line midi skirt in soft boiled wool. Features an invisible side zip and a subtle flare from knee.',bg:'#c0a8a0'},
  {id:7,name:'Oxford Dress Shirt',brand:'MAISON',price:12800,category:'Men',badge:null,colors:['#f9f6f0','#b8d0e0','#4a4540'],sizes:['S','M','L','XL','XXL'],desc:'Classic Oxford cloth shirt with a modern slim fit. Italian MOP buttons and double-needle stitching.',bg:'#d0dce0'},
  {id:8,name:'Suede Ankle Boots',brand:'MAISON',price:42000,category:'Accessories',badge:'New',colors:['#4a3d30','#1a1714','#8b4a4a'],sizes:['36','37','38','39','40','41'],desc:'Crafted in buttery Italian suede. Block heel for all-day comfort with a pointed toe silhouette.',bg:'#9a8060'},
  {id:9,name:'Pleated Midi Dress',brand:'MAISON',price:26500,category:'Women',badge:null,colors:['#8b4a4a','#1a1714','#f9f6f0'],sizes:['XS','S','M','L'],desc:'Flowing pleated midi dress in satin-finish fabric. V-neckline and adjustable tie waist.',bg:'#c0a0a0'},
  {id:10,name:'Merino Crew Sweater',brand:'MAISON',price:19500,category:'Men',badge:null,colors:['#2d3a2d','#8b7a5a','#1a1714'],sizes:['S','M','L','XL'],desc:'Superfine merino wool crew neck. Ribbed cuffs, hem, and collar. Garment-washed for a soft hand feel.',bg:'#b0b8a8'},
  {id:11,name:'Silk Scarf',brand:'MAISON',price:8900,category:'Accessories',badge:'New',colors:['#8b4a4a','#4a3d30','#2d3a2d'],sizes:['One Size'],desc:'Hand-rolled edges on pure silk twill. A signature print inspired by Baroque tapestry motifs.',bg:'#d4a898'},
  {id:12,name:'High-Waist Slim Jeans',brand:'MAISON',price:13500,category:'Women',badge:null,colors:['#1a2030','#4a4540','#8b7a5a'],sizes:['24','25','26','27','28','29','30'],desc:'Premium selvedge denim in a high-rise slim fit. Five-pocket styling with signature embossed rivets.',bg:'#8090a8'},
];

// Shared cart & wishlist state (saved to localStorage)
function getCart() {
  try { return JSON.parse(localStorage.getItem('maison_cart')) || []; } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('maison_cart', JSON.stringify(cart));
}
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('maison_wish')) || []; } catch { return []; }
}
function saveWishlist(wish) {
  localStorage.setItem('maison_wish', JSON.stringify(wish));
}

function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function formatPrice(p) {
  return '₹' + p.toLocaleString('en-IN');
}
