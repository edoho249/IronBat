import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { products } from "./_data";
import '../styles/Shop.css';


export default function Shop() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
   
  };

  return (
    <main className="page" id="shop">
      <div className="grid">
        {products.map(p => (
          <div key={p.id} className="card product" onClick={() => navigate(`/product/${p.id}`)}>
            <div className="card-media">
              <img src={p.img} alt={p.name} />
            </div>
            <div className="card-body">
              <h3>{p.name}</h3>
              <p className="muted">{p.short}</p>
             <div className="card-foot">
  <div className="price">{p.price}</div>
  <div className="buttons-wrapper">
    <button
      className="cart-btn"
      onClick={(e) => handleAddToCart(e, p)}
    >
      Add to Cart
    </button>
    <button
      className="details-btn"
      onClick={(e) => {
        e.stopPropagation(); 
        navigate(`/product/${p.id}`);
      }}
    >
      View Details
    </button>
  </div>
</div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
