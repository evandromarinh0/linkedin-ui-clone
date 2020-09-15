import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
    return(
        <Container>
            <ProfileCircle src="https://avatars1.githubusercontent.com/u/62427759?s=460&u=dbd723ed7e6b3f382aefa30ab5455d9b86809166&v=4" />
            <SearchInput placeholder="Pesquisar" />
            <MessageIcon />
        </Container>
    );
}

export default MobileHeader;