import React from 'react';
import {
  Card,
  Typography,
  Alert,
  Icon,
  Menu,
  Spin,
  Row,
  Col,
  Badge,
  Drawer,
  Form,
  Button,
  Input,
  Select,
  DatePicker,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { connect } from 'dva';

var hour = new Date().getHours();
var greeting = 'Good ' + ((hour < 12 && 'Morning') || (hour < 18 && 'Afternoon') || 'Evening');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userAsync: [], loading: true };
  }

  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      menu,
    } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <PageHeaderWrapper>
        <Card>
          <h1>{greeting}, Sidney</h1>

          <Row gutter={[8, 8]}>
            <Col xs={12} span={6}>
              <Card title="Things to Do">
                <Card
                  hoverable
                  type="inner"
                  style={{
                    backgroundColor: '#fff',
                    color: 'black',
                    boxShadow: '0 0 0 1px #d9d9d9 inset',
                    border: '2px solid #592c82',
                    borderLeft: '5px solid #592c82',
                    fontWeight: 'bold',
                  }}
                >
                  Employee Sharyn Ballard has selected a new primary desired career track...
                </Card>
                <Card
                  hoverable
                  type="inner"
                  style={{
                    backgroundColor: '#fff',
                    color: 'black',
                    boxShadow: '0 0 0 1px #d9d9d9 inset',
                    border: '2px solid #592c82',
                    borderLeft: '5px solid #592c82',
                    marginTop: 16,
                    fontWeight: 'bold',
                  }}
                >
                  Reminder: Have you followed up with Emmitt Dugas with his AWS training?
                </Card>
              </Card>
            </Col>
            <Col xs={12} span={18}>
              <Card title="Goals">
                <Button type="primary" onClick={this.showDrawer} size="small">
                  <Icon type="plus" /> Set a Goal
                </Button>
                <br />
                <br />
                <Card
                  hoverable
                  type="inner"
                  style={{
                    backgroundColor: '#fff',
                    color: 'black',
                    boxShadow: '0 0 0 1px #d9d9d9 inset',
                    border: '2px solid #592c82',
                    borderLeft: '5px solid #592c82',
                    fontWeight: 'bold',
                  }}
                >
                  Increase the Program Staffing by 10% in 2020!
                </Card>
                <Card
                  hoverable
                  type="inner"
                  style={{
                    backgroundColor: '#fff',
                    color: 'black',
                    boxShadow: '0 0 0 1px #d9d9d9 inset',
                    border: '2px solid #592c82',
                    borderLeft: '5px solid #592c82',
                    marginTop: 16,
                    fontWeight: 'bold',
                  }}
                >
                  Help each employee complete at least one certification in 2020!
                </Card>
              </Card>
            </Col>
          </Row>

          <p
            style={{
              textAlign: 'center',
              marginTop: 24,
            }}
          >
            We <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" spin /> Sidney
          </p>
        </Card>
        <Drawer title="Set a New Goal" onClose={this.onClose} visible={this.state.visible}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Your New Goal:">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'Set a New Goal for Yourself!',
                      },
                    ],
                  })(<Input.TextArea rows={4} placeholder="Set a New Goal for Yourself!" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </PageHeaderWrapper>
    );
  }
}

export default connect(({}) => ({}))(Form.create()(Dashboard));
