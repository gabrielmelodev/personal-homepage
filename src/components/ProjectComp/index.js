import React from 'react';

import { Container,MainPage } from './styles';
import UserTable from '../UseCard';

class Project extends React.Component {
  state = {
    user: null,
    repos: []
  }
  updateUser(user) {
    this.setState({user: user})
  }
  updateRepo(repos) {
    this.setState({repos: repos})
  }

  render() {
  return (
    <Container>
      <MainPage>

      </MainPage>
      <UserTable  user={this.state.user} repos={this.repos}/>

     

    </Container>
  );
  }
}

export default Project;