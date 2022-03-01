import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'; /* Global CSS */
import { UserProvider } from './context/UserContext/UserContext';
import { JobProvider } from './context/JobContext/JobContext'
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './views/Profile/Profile';
import JobCard from './views/JobCard/JobCard';
import CreateEdit from './views/CreateEdit/CreateEdit';
import About from './views/About/About';

export default function App() {
  return (
    <UserProvider>
      <JobProvider>
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign-in">
            <Auth />
          </Route>
          <Route exact path="/sign-up">
            <Auth isSigningUp />
          </Route>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute exact path="/profile/:id">
            <JobCard />
          </PrivateRoute>
          <PrivateRoute exact path="/profile/:id/edit">
            <CreateEdit isEditing/>
          </PrivateRoute>
          <PrivateRoute exact path="/profile/create">
            <CreateEdit />
          </PrivateRoute>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        </BrowserRouter>
      </JobProvider>
    </UserProvider>
  );
}
