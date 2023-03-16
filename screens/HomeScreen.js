import React, { useState } from 'react'
import { Text, View , Image, ScrollView,Linking, StyleSheet} from 'react-native'
import { Card,Title,Paragraph } from 'react-native-paper'
import articles from '../data'

const HomeScreen =()=>  {
    const [isLoading,setIsLoading]=useState(true)  

    // useEffect(() => {
    //     axios.get("https://newsapi.org/v2/everything?q=Apple&from=2023-03-16&sortBy=popularity&apiKey=62ea2a9a3af94cab9bbe2ecfe1ad784e").then((response) => {
    //     console.log("response",response.data.articles)    
    //     // setArticles(response.data);
    //     });
    //   }, []);

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.container}>Home Screen</Text>
        <ScrollView>
            {isLoading ? (
                articles.map(article=>{
                    const {title,description,url,urlToImage,publishedAt}=article;
                    return(
                        <Card
                        key={url}
                        style={styles.card}
                        onPress={()=>{Linking.openURL(`${url}`)}}
                        >
                            <View style={styles.cardDescImg}>
                                {/* text */}
                                <View style={styles.cardTitle}>
                                    <Title>{title}</Title>
                                </View>
                                {/* image */}
                                <View style={{flex:1/3,margin:10}}>
                                    <Image style={{width:120,height:120}} source={{uri:urlToImage}} />
                                </View>

                            </View>
                                {/* description */}
                                <View style={{margin:10}}>
                                    <Paragraph>{description}</Paragraph>
                                    <Text>Published At : {publishedAt}</Text>
                                </View>
                        </Card>
                    )
                })
            ):(
                <Text style={{justifyContent:'center',alignItems:'center'}}>Loading . . .</Text>
            )}
        </ScrollView>
      </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    container: {
        backgroundColor:'#023e8a',
        color:'white',
        height:'10%',
        width:'100%',
        // paddingTop:Platform.OS==='android' ? 20 : 40
        paddingTop:50,
        paddingBottom:50,
        fontSize:20
    },
    card:{
        marginTop:10,
        borderColor:'black',
        borderRadius:5,
        borderBottomWidth:1
    },
    cardDescImg:{flexDirection:'row'},
    cardTitle:{
        justifyContent:'space-around',
        flex:2/3,
        margin:10
    }
  });
  