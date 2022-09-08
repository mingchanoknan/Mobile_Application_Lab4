import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Calculator from './app/screen/Calculator';
import Increment from './app/screen/Increment';

// export default function App() {
//   const [myNumber, setNumber] = useState(0);
//   const [isMount, setIsMount] = useState(true);
//   return (
//     <View style={styles.container}>
//       {/* <Calculator/> */}

//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         {!isMount && (
//           <TouchableOpacity onPress={() => setIsMount(true)} >
//             <Text>Mount</Text>
//           </TouchableOpacity>
//         )}
//         {isMount && (
//           <Increment myNumber={myNumber} setIsMount={setIsMount} setNumber={setNumber}/>
//         )}
//       </View>
//     </View>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myNumber: 0,
      isMount: true,
    }
  }
  
  setIsMount = (isMount) => {
    this.setState({isMount})
  }
  setNumber = (myNumber) => {
    this.setState({myNumber: myNumber})
  }

  render() {
    const {myNumber, isMount} = this.state
    return (
      <View style={styles.container}>
        {/* <Calculator/> */}

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {!isMount && (
            <TouchableOpacity onPress={() => setIsMount(true)} >
              <Text>Mount</Text>
            </TouchableOpacity>
          )}
          {isMount && (
            <Increment myNumber={myNumber} setIsMount={this.setIsMount} setNumber={this.setNumber} />
          )}
        </View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
