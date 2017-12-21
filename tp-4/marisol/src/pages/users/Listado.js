import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Table, Button } from 'antd';
const { Content } = Layout;

const columns = [{
  title: 'Nombre',
  dataIndex: 'name',
  width: '20%',
}, {
  title: 'User Name',
  dataIndex: 'username', 
  width: '20%',
},{
  title: 'Email',
  dataIndex: 'email', 
  width: '20%',
},{
  title: 'Telefono',
  dataIndex: 'phone', 
  width: '20%',
},{
  title: 'Website',
  dataIndex: 'website', 
  width: '20%',
}
];

class Listado extends React.Component {

  state = { 
    showUserForm: false,
    userSeleccionado: {} 
  }
  
  componentWillMount(){
    this.props.actions.fetchUsers();
  }

  handlePlusClick = () => {
    this.setState({ userSeleccionado: null });
    this.setState({ showUserForm: true });
  }

  handleCloseParametrosForm= () => {
    this.setState({ showUserForm: false });
  }

  render() {
    return (
      <div className="content-inner">
        <Layout >
          <Content>
            <Button className="editable-add-btn" onClick={this.handlePlusClick}>Nuevo User</Button>
            <Table 
              columns={columns}
              rowKey={record => record.id}
              dataSource={this.props.users}
              loading={this.props.trabajando}
            />
          </Content>
        </Layout>
      </div>
    );
  }
  
}

Listado.propTypes = {
  trabajando: PropTypes.bool.isRequired,
  users:PropTypes.array.isRequired,
  actions: PropTypes.shape({
    fetchUsers: PropTypes.func,
    guardarUser: PropTypes.func,
    eliminarUser: PropTypes.func,
  }).isRequired,
};

Listado.defaultProps = {
  trabajando: false,
  users:[]
};


export default Listado;
