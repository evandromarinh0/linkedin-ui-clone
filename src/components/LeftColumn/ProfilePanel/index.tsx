import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars1.githubusercontent.com/u/62427759?s=460&u=dbd723ed7e6b3f382aefa30ab5455d9b86809166&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Evandro Marinho</h1>
        <h2>Frontend Dev in Development</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1023</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">846</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
