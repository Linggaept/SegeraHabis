import ProductDetailClient from "./ProductDetailClient"
const ProductDetailPage = ({ params }: { params: { id: string } }) => {
    return (
        <ProductDetailClient id={params.id} />
    )
}

export default ProductDetailPage;