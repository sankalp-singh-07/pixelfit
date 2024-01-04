import DirectoryItem from '../directory-item/directory-item.component'
import '../directory-item/directory-item.styles.scss'
import './category-container.styles.scss'

const CategoryContainer = ({category}) => {
    return (
          <div className='categories-container'>
            {category.map((x) => (<DirectoryItem key={x.id} category = {x} />))}
          </div>
      )
}

export default CategoryContainer