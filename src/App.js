import './App.scss';
import { Route } from 'react-router';
import { Footer, Header, PostInfo, Posts, CreateNewPost } from './components';
import './components/Posts.scss';
import EditPost from './components/EditPost';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Route path='/' component={Posts} exact />
        <Route path='/posts/:id' component={PostInfo} exact />
        <Route path='/edit-post/:id' component={EditPost} exact />
        <Route path='/create-post' component={CreateNewPost} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
