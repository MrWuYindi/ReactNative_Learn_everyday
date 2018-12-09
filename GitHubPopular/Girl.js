import React,{ Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

export default class Girl extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tips}>I am Gril.</Text>
                <Text style={styles.tips}>我收到了男孩送的:{this.props.what}</Text>
                <Text style={styles.tips} 
                    onPress={()=>{
                        this.props.onCallBack('一盒巧克力');
                        this.props.navigator.pop();
                    }}>回赠,男孩巧克力</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'red',
        justifyContent: 'center'
    },
    tips:{
        fontSize:22
    }
})