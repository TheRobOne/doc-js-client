import React, { Component } from 'react';
import Doc from '../Doc/Doc';
import axios from 'axios';

export default class DocList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            docs: []
        }
    }

    componentDidMount() {
        axios.get('https://salty-ocean-22806.herokuapp.com/doc/all')
        .then(res => {
            this.setState({docs: res.data});
        })
    }

    render() {
        console.log(this.state.docs);
        return (
            <>
                {
                    this.state.docs !== [] ?
                    this.state.docs.map(doc => <Doc doc={doc}/>):
                    <p>Huj, nic tu nie ma state</p>
                }
            </>
        )
    }
}
