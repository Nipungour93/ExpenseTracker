/**
 * @format
 * Label Component
 */

 import React from 'react';
 import {View} from 'react-native';
 import {Text} from 'react-native-paper';
 import {ScaledSheet} from 'react-native-size-matters';
 
 const InputLabel = ({containerStyle, textStyles, children, ...rest}) => {
   return (
     <View style={[styles.containerStyle, containerStyle]}>
       <Text style={[styles.textStyle, textStyles]} {...rest}>
         {children}
       </Text>
     </View>
   );
 };
 
 const styles = ScaledSheet.create({
   containerStyle: {
    width:'100%'
   },
   textStyle: {
     fontWeight: '600',
     color: '#000',
     fontFamily: 'Poppins-Regular',
   },
 });
 
 export {InputLabel};
 