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
  /*   componentDidMount() {
    this.getUserAsync();
  } */

  /*   async getUserAsync() {
    const response = await fetch('api/currentuser');
    const data = await response.json();
    this.setState({ userAsync: data, loading: false });
  } */

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
                  10 New Employees are interested in Juniper training
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
                    fontWeight: 'bold',
                  }}
                >
                  An Employee completed Security+
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
                  Have you updated the list of trainings with the latest 2020 offerings?
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

    /*     console.log('user fetch async', this.state);
    return currentUser && currentUser.name && this.state.userAsync ? (
      <PageHeaderWrapper>
        <Card>
          <h1>
            {greeting}, {currentUser.name}
          </h1>

          <p
            style={{
              textAlign: 'center',
              marginTop: 24,
            }}
          >
            We <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" spin /> {currentUser.name}
          </p>
        </Card>
      </PageHeaderWrapper>
    ) : (
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    ); */
  }
}

//const App = Form.create()(Dashboard);
/* export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(Dashboard); */

export default connect(({}) => ({}))(Form.create()(Dashboard));
