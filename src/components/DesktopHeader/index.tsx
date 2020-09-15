import React from 'react';

import { Container, ContentWrapper, LinkedInIcon, SearchInput, HomeIcon, NotificationIcon, ProfileCircle, CaretDownIcon } from './styles';

const DesktopHeader: React.FC = () => {
    return(
        <Container>
            <ContentWrapper>
                <div className="left">
                    <LinkedInIcon />
                    <SearchInput placeholder="Pesquisar" />
                </div>

                <div className="right">
                    <nav>
                        <button className="active">
                            <HomeIcon />
                            <span>Início</span>
                        </button>

                        <button>
                            <NotificationIcon />
                            <span>Notificações</span>
                        </button>

                        <button>
                            <ProfileCircle src="https://avatars1.githubusercontent.com/u/62427759?s=460&u=dbd723ed7e6b3f382aefa30ab5455d9b86809166&v=4" />
                            <span>Eu <CaretDownIcon /></span>
                        </button>
                    </nav>
                </div>
            </ContentWrapper>
        </Container>
    );
}

export default DesktopHeader;