import "./styles.css";

const ProductInfo: React.FC = () => {
  return (
    <aside className="product-info">
      <span className="product-code">código - 42402</span>
      <h3 className="product-name">Sofá Margot II - Rosé</h3>
      <p className="product-price">R$ 4.000</p>
      <button className="button-buy">Adicionar à cesta</button>
    </aside>
  );
};

export default ProductInfo;
