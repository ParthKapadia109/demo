import React, { Component } from 'react'
// import axios from 'axios'

class ServiceDetail extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        let id = this.props.match.params.ServiceDetail_id
        // axios.get('http://localhost:3000/Service')
        this.setState({
            id: id
        })
    }
    render() {
        return ( 
            <>  
                <div className='container text-center p-2'>
                <h4>{this.state.id}</h4>
                </div>
            </>
        )
    }
}
export default ServiceDetail
