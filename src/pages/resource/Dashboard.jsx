import React from 'react';
import { Card, Typography, Icon, Row, Col, Drawer, Form, Button, Input, Divider } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import Link from 'umi/link';
import ToDoList from '../common-components/ToDoList';
import GoalList from '../common-components/GoalList';

const { Text } = Typography;

const hour = new Date().getHours();

const greeting = `Good ${(hour < 12 && 'morning') || (hour < 18 && 'afternoon') || 'evening'}`;

class Dashboard extends React.Component {
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
    const thingsToDo = [
      {
        title: 'Reminder',
        content:
          'Have you signed up for your training for your training yet yet for your training yet?',
      },
      {
        title: '',
        content: 'There are new job openings for your desired career track...',
      },
    ];

    const goals = [
      'Complete Splunk certification in 2020!',
      'Sign up for virtual manager training.',
      'Explore career paths in satelite networks.',
    ];

    const { getFieldDecorator } = this.props.form;
    const managementModules = [
      {
        path: '/program/dashboard',
        title: 'Program Management Modules',
      },
      {
        path: '/learning/dashboard',
        title: 'Learning Management Modules',
      },
      {
        path: '/resource/dashboard',
        title: 'Resource Management Modules',
      },
    ];
    return (
      <PageHeaderWrapper>
        <Card>
          <Typography
            style={{
              fontWeight: 'initial',
              fontSize: '30px',
              letterSpacing: '0.1px',
              textAlign: 'center',
            }}
          >
            {greeting}, Sidney
          </Typography>
          <Divider
            orientation="center"
            style={{
              marginTop: '30px',
            }}
            type="horizontal"
          >
            {managementModules.map(m => (
              <Button
                style={{
                  marginLeft: '5px',
                  marginRight: '5px',
                  height: '50px',
                }}
              >
                <Link to={m.path}>
                  <Text
                    style={{
                      fontSize: '18px',
                    }}
                  >
                    {m.title}
                  </Text>
                </Link>
              </Button>
            ))}
          </Divider>
          <Row gutter={[8, 8]}>
            <Col xs={12} span={6}>
              <ToDoList list={thingsToDo} />
            </Col>
            <Col xs={12} span={18}>
              <GoalList list={goals} showDrawer={this.showDrawer} />
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

export default connect(() => ({}))(Form.create()(Dashboard));
