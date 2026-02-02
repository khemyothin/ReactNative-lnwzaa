import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Bmi() {    
    const [weight , setWeight] = useState('120');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');
    const [des , setDes] = useState('0');

    console.log("STATE : ", weight, height, bmi);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        const w = parseFloat(weight);
        const h = parseFloat(height);  
        let output = (w/ (h/100 * h/100));
        setBmi(output.toFixed(2));
        let description = "";
        if (output<18.5)
            description ="Underweight";
        else if (output>=18.5 && output<=24.99)
            description ="Normal";
        else if (output>=25 && output<=29.99)
            description ="Overweight";
        else if (output>=30 && output<=39.99)
            description ="Obese";
        else
            description ="Extremely Obese";
        setDes(description);
    };


    
    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{padding: 20,backgroundColor: 'white',borderRadius: 10,height: 150,justifyContent: 'space-around',marginVertical: 10}}>
                <Text style={{fontSize: 20}}>Weight (kg.)</Text>
                <TextInput 
                    value={ weight }
                    style={{fontSize: 20}} 
                    keyboardType= "numeric" 
                    placeholder="Input your weight..." 
                    onChangeText={ (newWeight) => setWeight(newWeight) }
                />
            </View >
            {/* แถวที่ 2 */}
            <View style={{padding: 20,backgroundColor: 'white',borderRadius: 10,height: 150,justifyContent: 'space-around',marginVertical: 10}}>
                <Text style={{fontSize: 20}}>Height (cm.)</Text>
                <TextInput 
                    value={ height }
                    style={{fontSize: 20}} 
                    keyboardType= "numeric" 
                    placeholder="Input your height..." 
                    onChangeText={ (newHeight) => setHeight(newHeight) }
                />
            </View>
            {/* แถวที่ 3 */}
            <View style={{flexDirection: 'row',marginVertical: 10}}>
                <View style={{flex: 1,padding: 20, backgroundColor: 'white',borderRadius: 10,height: 100,justifyContent: 'center',alignItems: 'center',marginRight: 10}}>
                    <Text style={{fontSize: 20}}>{ bmi }</Text>
                </View>
                <View style={{flex: 1,padding: 20, backgroundColor: 'white',borderRadius: 10,height: 100,justifyContent: 'center',alignItems: 'center',marginLeft: 10}}>
                    <Text style={{fontSize: 20}}>{des}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            <TouchableOpacity onPress={onPressButton} style={{marginVertical: 10}}>
                 <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40, }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                            Calculate
                    </Text>
                </View>
            </TouchableOpacity>
     
        </View>
    );
}

