import React from 'react';
import { Card, Icon, Row, Col, Input, Form, Divider, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import GoalList from './common-components/GoalList';
import goalIcon from '../assets/goal-icon.png';

const headerContainerStyle = {
  marginBottom: '20px',
  paddingBottom: '10px',
  flexDirection: 'row',
};

const subHeaderStyle = {
  fontSize: '18px',
  fontWeight: 600,
};

const headerStyle = {
  fontSize: '32px',
  color: 'black',
  fontWeight: 600,
};

const iconContainer = {
  height: '150px',
  width: '150px',
};

const iconStyle = {
  width: '100%',
};

const headerContentContainerStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

const newGoalContainerStyle = {
  backgroundColor: '#f0f2f5',
  margin: '20px',
  padding: '10px',
  marginTop: '32px',
};

const newGoalHeaderStyle = {
  fontSize: '21px',
  fontWeight: 600,
  color: '#525257',
  paddingTop: '10px',
};
class Goals extends React.Component {
  state = { visible: false };

  render() {
    console.log(this.state.visible);
    return (
      <PageHeaderWrapper>
        <Card>
          <Row gutter={[8, 8]} style={headerContainerStyle}>
            <Col style={iconContainer} xs={5}>
              <img style={iconStyle} src={goalIcon} alt="" />
            </Col>
            <Col style={headerContentContainerStyle} xs={19}>
              <p style={headerStyle}>Your primary goal</p>
              <p style={subHeaderStyle}>
                Apply to new position, your current program ends July 2020
              </p>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[8, 8]}>
            <Col xs={16} span={18}>
              <GoalList
                list={[
                  'Complete Splunk certification in 2020!',
                  'Sign up for virtual manager training.',
                  'Explore career paths in satelite networks.',
                ]}
              />
            </Col>
            <Col xs={8}>
              <div style={newGoalContainerStyle}>
                <div style={{ width: '100%' }}>
                  <img
                    style={{ width: '100%' }}
                    src="https://cdn.dribbble.com/users/673873/screenshots/6339059/superheroes_copy.png"
                    alt=""
                  />
                </div>
                <p style={newGoalHeaderStyle}>Set a new goal</p>
                <Form layout="vertical" hideRequiredMark>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item label="Your New Goal:">
                        <Input.TextArea rows={5} placeholder="Set a New Goal for Yourself!" />
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
              </div>
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
      </PageHeaderWrapper>
    );
  }
}

export default connect(() => ({}))(Form.create()(Goals));
