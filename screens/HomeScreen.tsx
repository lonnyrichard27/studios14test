import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MainCard, MovieCard } from '../components';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image source={require('../assets/images/AUDIOTERIA-3D-SINGLE-LINE-reverse 1.png')} />
      </View>
      <MainCard 
        showBox={true}
        mainText='DANDARE: Season 1'
        secondaryText='Step into the future with Dan Dare. It’s got addiction, abuse, drugs, financial ruin...'
        imageSource={require('../assets/images/dandare.png')}
      />

      {/* premiere release */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.headerText}>Premiere Release</Text>
        <ScrollView style={{ }} horizontal={true} showsHorizontalScrollIndicator={false}>
          <MovieCard 
            mainText='Pilgrim'
            secondaryText='Step into Tudor Chambers. It’s got addiction, abuse, drugs, financial ruin...'
            imageSource={require('../assets/images/img1.png')}
          />
          <MovieCard 
            mainText='Bad Seed'
            secondaryText='Step into the future with Dan Dare. It’s got addiction, abuse, drugs, financial ruin...'
            imageSource={require('../assets/images/img2.jpg')}
          />
        </ScrollView>
      </View>
      <View style={{ paddingHorizontal: 20, paddingBottom: 80 }}>
        <Text style={styles.headerText}>Adventure</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <MovieCard 
            mainText='A game for Gentlemen'
            secondaryText='Step into the future with Dan Dare. It’s got addiction, abuse, drugs, financial ruin...'
            imageSource={require('../assets/images/img3.jpg')}
          />
          <MovieCard 
            mainText='The Afterlives of Doctor Gachet'
            secondaryText='Step into the future with Dan Dare. It’s got addiction, abuse, drugs, financial ruin...'
            imageSource={require('../assets/images/img4.jpg')}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 50,
  },
  headerText:{
    fontSize: 28,
    color: '#fff',
    // marginLeft: 20,
    marginVertical: 20,
    fontWeight: '900',
  }
});
