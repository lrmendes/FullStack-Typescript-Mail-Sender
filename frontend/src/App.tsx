import React, { useEffect, useState } from 'react';
import api from './services/api';
import User from './components/User';
import MailForm from './components/MailForm';
import NavBar from './components/NavBar/NavBar';
import { Divider, Spin } from 'antd';
import userEvent from '@testing-library/user-event';

function App() {
  const [userMail,setUserMail] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    api.get<string>('/usermail').then(response => {
      setUserMail(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <NavBar textLeft="TypeScript" textRight="Node & React" title="FullStack Mail Sender"/>
      <Divider plain>Mail Form</Divider>
      <Spin spinning={loading}>
        {userMail !== "" && <MailForm fromMail={userMail} />}
        {userMail === "" && <MailForm fromMail={"example@mail.com"} />}
      </Spin>
    </>
  );
}

export default App;
