import React, { useEffect, useState } from 'react';
import '././styles.css';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/product');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Error fetching products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Produits phares</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`/images${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Prix: €{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
