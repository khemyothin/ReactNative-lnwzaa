import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


export default function Bmi() {    
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');

    console.log("STATE : ", weight, height, bmi);
    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{padding: 20,backgroundColor: 'white',borderRadius: 10,height: 150,justifyContent: 'space-around',marginVertical: 10}}>
                <Text style={{fontSize: 20}}>Weight (kg.)</Text>
                <TextInput style={{fontSize: 20}} keyboardType= "numeric" placeholder="Input your weight..." />
            </View >
            {/* แถวที่ 2 */}
            <View style={{padding: 20,backgroundColor: 'white',borderRadius: 10,height: 150,justifyContent: 'space-around',marginVertical: 10}}>
                <Text style={{fontSize: 20}}>Height (cm.)</Text>
                <TextInput style={{fontSize: 20}} keyboardType= "numeric" placeholder="Input your height..." />
            </View>
            {/* แถวที่ 3 */}
            <View style={{flexDirection: 'row',marginVertical: 10}}>
                <View style={{flex: 1,padding: 20, backgroundColor: 'white',borderRadius: 10,height: 100,justifyContent: 'center',alignItems: 'center',marginRight: 10}}>
                    <Text style={{fontSize: 20}}>24.22</Text>
                </View>
                <View style={{flex: 1,padding: 20, backgroundColor: 'white',borderRadius: 10,height: 100,justifyContent: 'center',alignItems: 'center',marginLeft: 10}}>
                    <Text style={{fontSize: 20}}>Normal</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            <Button title="Calculate" />            
        </View>
    );
}

