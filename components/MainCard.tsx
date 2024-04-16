import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface BtnProps {
  showBox?: boolean;
  mainText: string;
  secondaryText: string;
  imageSource: any;
}
const MainCard: React.FC<BtnProps> = ({ showBox = false, mainText, secondaryText, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={styles.secondaryText}>{secondaryText}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>View more</Text>
          </Pressable>
          {showBox && <View style={styles.squareContainer}>
            <View style={styles.whiteSquare} />
            <View style={styles.whiteSquare} />
            <View style={styles.orangeSquare} />
          </View>}
        </View>
      </View>
    </View>
  )
}

export default MainCard;

const styles = StyleSheet.create({
  textContainer:{ 
    paddingHorizontal: 20, 
    marginTop: 20 
  },
  mainText:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  secondaryText:{
    color: 'white',
    marginTop: 20,
  },
  btn:{
    marginTop: 20,
    backgroundColor: '#CB5715',
    padding: 10,
    borderRadius: 5 
  },
  btnText:{
    color: 'white',
    fontSize: 16,
    lineHeight: 17.85,
    fontWeight: 'bold'
  },
  squareContainer:{
    marginTop: 20,
    flexDirection: 'row'
  },
  whiteSquare: { 
    width: 9, 
    height: 10, 
    backgroundColor: 'white', 
    marginHorizontal: 2 
  },
  orangeSquare: { 
    width: 9, 
    height: 10, 
    backgroundColor: '#B87100', 
    marginHorizontal: 2 
  },

})