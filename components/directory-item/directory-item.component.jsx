import {DirectoryItemContainer, BackgroundImage, Body} from './directory-item.styles.jsx'

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const {title, imageUrl, route} = category;

    const navigate = useNavigate();

    const NavigateTo = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={NavigateTo}>
          <BackgroundImage imageurl={imageUrl} />
          <Body>
            <h2>{title.toUpperCase()}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
    )
} 

export default DirectoryItem