import {Form, Input, InputNumber, Select, Button, Row, Col} from 'antd';
import s from './style.module.css'
import services from './services';

const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const Inputs: React.FC = () => {

    const onFinish = (form: any) => {
        console.log(form)
    }

    return (
      <Form
        className={s.form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        size='small'
      >
        <Row gutter={24} justify="center">
            <Col
                span={24}
                sm={24}
                md={12}
            >
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: ''}]}
                  className={s.formItem}
                >
                  <Input size='large' placeholder='Имя'/>
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: '' }]}
                  className={s.formItem}
                >
                  <InputNumber
                    style={{width: '100%'}}
                    size='large'
                    placeholder='+7(---) --- -- --'
                    type='number'
                    controls={false}
                  />
                </Form.Item>

                <Form.Item
                  name="E-mail"
                  rules={[{ required: true, message: '', validator: (a, b, c) => {
                    if (!emailReg.test(b)) {
                        return Promise.reject(new Error(''))
                    } else {
                        return Promise.resolve();
                    }
                  } }]}
                  className={s.formItem}
                >
                  <Input size='large' placeholder='E-mail'/>
                </Form.Item>

            </Col>
            <Col
                span={24}
                sm={24}
                md={12}
                lg={12}
            >

                <Form.Item
                  name="service"
                  hasFeedback={false}
                  rules={[{ required: true, message: '' }]}
                  className={s.formItem}
                >
                  <Select size='large' placeholder='Услуга' options={services}/>
                </Form.Item>

                <Form.Item
                  name="city"
                  rules={[{ required: true, message: ''}]}
                  className={s.formItem}
                >
                  <Input size='large' placeholder='Город'/>
                </Form.Item>

                <Form.Item
                  name="company"
                  rules={[{ required: true, message: '' }]}
                  className={s.formItem}
                >
                  <Input size='large' placeholder='Компания'/>
                </Form.Item>

            </Col>
            <Col span={24}>
                <Form.Item className={s.submitFormItem}>
                  <Button size='large' block type="primary" htmlType="submit">
                    Оставить заявку
                  </Button>
                </Form.Item>
            </Col>
        </Row>

        <div className={s.securityAlert}>
            Нажимая кнопку «Оставить заявку» вы даете согласие на обработку персональных данных.
        </div>

      </Form>
    )
}

export default Inputs;
