import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Increment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        console.log("Consrtucting")
    }
    componentWillMount() {
        console.log("Component Will Mount");
    }
    componentDidMount() {
        console.log("Component Did Mount");
    }
    componentWillReceiveProps() {
        console.log("Component Will Receive Props")
    }
    shouldComponentUpdate(newProps, newState) {
        console.log("should component update");
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Component Will Update")
    }
    componentDidUpdate(PrevProps, PrevState) {
        console.log("Component Did Update")
    }
    componentWillUnmount() {
        console.log("Component Will Unmount")
    }
    unmount() {
        this.props.setIsMount(false);
        this.props.setNumber(0);
    }
    render() {
        const myNumber = this.props.myNumber
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> {myNumber}</Text>
                <TouchableOpacity onPress={() => this.props.setNumber(myNumber + 1)}>
                    <Text>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.unmount()}>
                    <Text>Unmount</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Increment