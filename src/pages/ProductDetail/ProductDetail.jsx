import { InternalLinkMoveTest } from '@/components';
import ProductDetailTable from '@/components/ProductDetailTable/ProductDetailTable';

export default function ProductDetail() {
  return (
    <>
      <ProductDetailTable price={19000} />
      <InternalLinkMoveTest />
    </>
  );
}
