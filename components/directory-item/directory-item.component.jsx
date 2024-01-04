import {DirectoryItemContainer, BackgroundImage, Body} from './directory-item.styles.jsx'

const DirectoryItem = ({category}) => {
    const {title, imageUrl} = category;

    return (
        <DirectoryItemContainer>
          <BackgroundImage imageurl={imageUrl} />
          <Body>
            <h2>{title.toUpperCase()}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
    )
} 

export default DirectoryItem