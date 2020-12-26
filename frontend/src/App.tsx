import React, { useEffect, useState } from 'react';
import api from './services/api';
import User from './components/User';
import MailForm from './components/MailForm';
import NavBar from './components/NavBar/NavBar';
import { Divider } from 'antd';

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<Array<IUser>>([]);
  
  useEffect(() => {
    api.get<Array<IUser>>('/users').then(response => {
      setUsers(response.data);
    });
  });

  return (
    <>
      <NavBar textLeft="TypeScript" textRight="Node & React" title="FullStack Mail Sender"/>
      {users.map(user => <User user={user} key={user.email} />)}
      <Divider plain>Mail Form</Divider>
      <MailForm />
    </>
  );
}

export default App;
