import {CategoryPreviewContainer, Title, Preview} from './category-preview.styles.jsx';

import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products.filter((_, idx) => idx < 4).map((item) => <ProductCard key={item.id} product={item}/>)}
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;