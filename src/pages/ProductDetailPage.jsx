import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetails";

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetail />
      </Navbar>
    </div>
  );
};

export default ProductDetailPage;
