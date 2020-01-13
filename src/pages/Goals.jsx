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
import Link from 'umi/link';

var hour = new Date().getHours();
var greeting = 'Good ' + ((hour < 12 && 'Morning') || (hour < 18 && 'Afternoon') || 'Evening');

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userAsync: [], loading: true };
  }

  state = { visible: false };

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
          <h1>Your primary goal: Apply to new position, your current program ends July 2020.</h1>
          <Row gutter={[8, 8]}>
            <Col xs={12} span={18}>
              <Card title="Goals">
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
                  Complete Splunk certification in 2020!
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
                  Sign up for virtual manager training.
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
                  Explore career paths in satelite networks.
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
      </PageHeaderWrapper>
    );
  }
}

export default connect(({}) => ({}))(Form.create()(Goals));
