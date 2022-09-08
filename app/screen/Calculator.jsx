import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            process: '',
            result: '',
        }
    }

    addToProcess(text) {
        let keepProcess = this.state.process
        keepProcess += text;
        this.setState({process: keepProcess})
    }
    calculate() {
        let keepProcess = this.state.process
        let result = eval(keepProcess)
        this.setState({result})
    }
    del() {
        this.setState({process: '', result: ''})
    }
    render() {
        const { process, result } = this.state
        return (
            <View style={[styles.container, {
                flexDirection: "column",
                alignItems: "flex-end"
            }]}>
                <View style={[styles.monitor, {alignItems: "flex-end", justifyContent: "space-evenly"}]}>
                    <Text style={[styles.text]}>{process}</Text>
                    <Text style={styles.text}>{result}</Text>
                </View>
                <View style={styles.controller}>
                    <View style={styles.numpad}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => this.addToProcess("1")} style={styles.num}>
                                <Text style={styles.text}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.addToProcess("2")} style={styles.num}>
                                <Text style={styles.text}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.addToProcess("3")} style={styles.num}>
                                <Text style={styles.text}>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => this.addToProcess("4")} style={styles.num}>
                                <Text style={styles.text}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.addToProcess("5")} style={styles.num}>
                                <Text style={styles.text}>5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.addToProcess("6")}  style={styles.num}>
                                <Text style={styles.text}>6</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => this.addToProcess("7")} style={styles.num}>
                                <Text style={styles.text}>7</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.addToProcess("8")} style={styles.num}>
                                <Text style={styles.text}>8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.addToProcess("9")} style={styles.num}>
                                <Text style={styles.text}>9</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => this.addToProcess(".")} style={styles.num}>
                                <Text style={styles.text}>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.addToProcess("0")} style={styles.num}>
                                <Text style={styles.text}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.calculate()} style={styles.num}>
                                <Text style={styles.text}>=</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.optpad}>
                        <TouchableOpacity onPress={() => this.del()} style={styles.num}>
                            <Text style={styles.text}>Del</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.addToProcess("+")} style={styles.num}>
                            <Text style={styles.text}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.addToProcess("-")} style={styles.num}>
                            <Text style={styles.text}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.addToProcess("*")} style={styles.num}>
                            <Text style={styles.text}>*</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.addToProcess("/")} style={styles.num}>
                            <Text style={styles.text}>/</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    monitor: {
        flex: 1, 
    },
    controller: {
        flex: 2, 
        flexDirection: "row"
    },
    numpad: {
        flex: 3,
    },
    optpad: {
        flex: 1,
    },
    num: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 40
    }
});

export default Calculator;