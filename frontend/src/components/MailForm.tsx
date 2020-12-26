import { SendOutlined, MailOutlined, UserOutlined  } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';

interface Props {

}

const { TextArea } = Input;


const MailForm: React.FC<Props> = () => {

    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 6 },
    };
    const tailLayout = {
        wrapperCol: { offset: 12, span: 2 },
    };
      
    const onFinish = (values:any) => {
        console.log('Success:', values);
    };
      
    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };
      

    return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="From"
        name="from"
        rules={[{ required: true, message: "Please input the sender's mail!" }]}
      >
        <Input prefix={<UserOutlined />} />
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

