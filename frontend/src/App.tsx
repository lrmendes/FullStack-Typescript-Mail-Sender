import React, { useEffect, useState } from 'react';
import api from './services/api';
import MailForm from './components/MailForm';
import NavBar from './components/NavBar/NavBar';
import { Divider, Spin, Alert, Row, Col } from 'antd';
import IAlert from './interfaces/Alert';

interface UserMail {
  mail: string,
  error: boolean
}

type NominalAlertSetState = React.Dispatch<React.SetStateAction<IAlert>>;
type NominalLoadingSetState = React.Dispatch<React.SetStateAction<boolean>>;

function useNominalAlertState(init: IAlert) {
    return useState<IAlert>(init) as [IAlert, NominalAlertSetState]
}

function useNominalLoadingState(init: boolean) {
  return useState<boolean>(init) as [boolean, NominalLoadingSetState]
}

function App() {
  const [userMail,setUserMail] = useState<UserMail>({
    mail: "",
    error: false
  });
  const [loading,setLoading] = useNominalLoadingState(true);
  const [alert, setAlert] = useNominalAlertState({
    message: "",
    type: "success",
    show: false,
  });
  
  useEffect(() => {
    api.gets().getUserMail().then(response => {
      setLoading(false);
      setUserMail({ mail: response.data, error: false });
    }).catch(error => {
      setLoading(false);
      setUserMail({ mail: "", error: true, });
      setAlert({
        message: "Could not receive the sender's email from backend server.",
        type: "error",
        show: true,
      })
    });
  }, []);

  return (
    <>
      <NavBar textLeft="TypeScript" textRight="Node & React" title="FullStack Mail Sender"/>
      <Divider plain>Mail Form</Divider>

      <Row gutter={[16, 24]} justify="center">

        <Col span={16}>
          {alert.show && <Alert message={alert.message} type={alert.type} />}
        </Col>

        <Col span={16}>
          <Spin spinning={loading}>
            {userMail.mail !== "" && <MailForm fromMail={userMail.mail} setAlert={setAlert} setLoading={setLoading} />}
            {userMail.mail === "" && <MailForm fromMail={""} setAlert={setAlert}  setLoading={setLoading} />}
          </Spin>
        </Col>

      </Row>
      
    </>
  );
}

export default App;
