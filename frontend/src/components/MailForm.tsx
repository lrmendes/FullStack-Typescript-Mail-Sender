import { SendOutlined, MailOutlined, UserOutlined  } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import { SendMailForm } from '../interfaces/Mail';
import api from '../services/api';
import IAlert from '../interfaces/Alert';

type NominalSetState = React.Dispatch<React.SetStateAction<IAlert>>;

interface Props {
  fromMail: string,
  setAlert: NominalSetState,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const { TextArea } = Input;

const MailForm: React.FC<Props> = ({fromMail, setAlert, setLoading}) => {

    const layout = {
        labelCol: { span: 4 },
    };
    const tailLayout = {
        wrapperCol: { offset: 12, span: 2 },
    };
      
    const onFinish = (values:SendMailForm) => {
        setLoading(true);

        api.posts().postLog(values).then(response => {
          setAlert({
            message: "Email successfully sent.",
            type: "success",
            show: true,
          });
        }).catch(err => {
          let msg = "Error when trying to contact the backend server."
          if (err.response) {
            msg = "Error: " + err.response.data.data;
          }
          setAlert({
            message: msg,
            type: "error",
            show: true,
          });
        }).finally(() => {
          setLoading(false);
        });
    };
      
    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };
      

    return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ from: fromMail }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="From"
        name="from"
        rules={[{ required: true, message: "Please input the sender's mail!" }]}
      >
        <Input prefix={<UserOutlined />} readOnly={true} />
      </Form.Item>

      <Form.Item
        label="To"
        name="to"
        rules={[{ required: true, message: "Please input the receiver's mail!" }]}
      >
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        label="Subject"
        name="subject"
        rules={[{ required: true, message: "Please input the subject!" }]}
      >
        <Input prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item 
        label="Message"
        name="html"
        rules={[{ required: true, message: "Please input the subject!" }]}
      >
        <TextArea rows={6} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" shape="round" icon={<SendOutlined />} size={'large'}>
          Send
        </Button>
      </Form.Item>

    </Form>
    )
}

export default MailForm;

