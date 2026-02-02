import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {  

    const [num , setNum] = useState('0');

    const Heartbeat = () => {
    console.log("Calculate button is pressed!!!");
    const n = parseFloat(num);
    let output = (n + 1);
    setNum(output.toFixed(2));

    };
    return (
        <View style={{flexDirection: 'row',padding: 20,justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={Heartbeat} style={{ padding: 20}} >
                <View>
                    <FontAwesome name="heart" color="orange" size={32}>
                    </FontAwesome>
                </View>
            </TouchableOpacity>
            <View style={{padding: 20, borderRadius: 40 ,justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{fontSize: 25}}>{num}
                </Text>
            </View>
        </View>
    );
}
