import CategoryItem from '../category-item/category-item.component'
import '../category-item/category-item.styles.scss'
import './category-container.styles.scss'

const CategoryContainer = ({category}) => {
    return (
          <div className='categories-container'>
            {category.map((x) => (<CategoryItem key={x.id} category = {x} />))}
          </div>
      )
}

export default CategoryContainer