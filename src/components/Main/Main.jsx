import '../Main/main.css'
import Aside from '../Aside/Aside';
import { Routes, Route, Navigate} from 'react-router-dom';
// import DialogsContainer from '../Dialogs/DialogsContainer';
// import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
// import FormContainer from '../Login/FormContainer';
import React, { Suspense } from 'react';
import Preloader from '../common/Preloader';

const DialogsContainer = React.lazy(() => import ('../Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import ('../Users/UsersContainer'))
const FormContainer = React.lazy(() => import ('../Login/FormContainer'))


function Main() {

  return (
    <main>
      <div className='container'>
        <div className='flexrow-main'>
          <Aside />
          <div className='content'>
            <Routes>
              <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>
              <Route path="/" element={<Navigate to="/profile" />} />
            </Routes>
            <Suspense fallback={<Preloader />}>
                <Routes>
                <Route path="/find" element={ <UsersContainer />} />
                <Route path="/dialogs" element={<DialogsContainer />} />
                <Route path="/login" element={<FormContainer/>} />
                </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}


export default Main;