import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

const country = ["Italian", "Indian", "Indian", "Indian"];

const Home = ({ navigation }) => {
  const [dishes, setDishes] = useState([]);
  const [popularDishes, setPopularDishses] = useState([]);

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const res = await fetch(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
    );
    const response = await res.json();
    // console.log(response)
    setDishes(response.dishes);
    setPopularDishses(response.popularDishes);
  };
  const renderItem = (item) => {
  
    return (
      <TouchableOpacity
        style={{
          height: 100,
          width: 100,
          borderWidth: 1,
          borderColor: "#ff6700",
          borderRadius: 100,
          marginLeft: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={()=>navigation.navigate('detail')}
      >
        {/* <Image  source={require(item.item.image)}/> */}
        <ImageBackground
          source={{
            uri: "https://media.istockphoto.com/id/1333127675/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?s=2048x2048&w=is&k=20&c=WecVEuEacgjdKAfdGiUNSM9B_-2eaIOFcl9VqRvUhbQ=",
          }}
          style={{
            height: 90,
            width: 90,
            overflow: "hidden",
            borderRadius: 45,
            justifyContent: "center",
            alignItems: "center",
          }}
          blurRadius={20}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            {item.item.name}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderdishItem=(item)=>{
    return (
      <>
      <View style={{height:150,width:'80%',alignSelf:'center',borderBottomColor:'#a9a9a9',borderBottomWidth:2,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
       {/* data */}
       <View style={{height:'90%',width:'60%'}}>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',padding:10,alignItems:'center'}}>
          <Text style={{fontSize:15,fontWeight:'500'}}>{item.item.name}</Text>
          <Image source={require('../assets/veg.png')} style={{height:12,width:15}} />
          
          <View style={{flexDirection:'row',backgroundColor:'green',height:12,width:30,justifyContent:'center',alignItems:'center',borderRadius:2}}>
            <Text style={{fontSize:10,color:'white'}}>{item.item.rating}</Text>
            <Image source={require('../assets/star.png')} style={{height:10,width:10,marginLeft:2}} />
          </View>
        </View>

        

          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            {item.item.equipments.map((equip,i)=>{
              return (
                <View key={i} style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/fridge.png')} style={{height:20,width:15}} />
                <Text style={{fontSize:7}}>{equip}</Text>
                </View>
              )
            })}
            <View style={{borderLeftWidth:1,borderLeftColor:'gray',height:'100%',paddingLeft:5}}>
    
            <Text style={{fontSize:10,fontWeight:'500'}}>Ingredients</Text>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} onPress={()=>navigation.navigate('detail')}>
              <Text style={{fontSize:9,color:'orange'}}>View List</Text>
              <Image source={require('../assets/rightArrow.png')} style={{height:10,width:10}} />
            </TouchableOpacity>

            </View>
            
           
          </View>
          
          <Text style={{fontSize:10,margin:5}}>{item.item.description}</Text>
       </View>
       {/* image */}
       <View>
       <Image source={{uri:item.item.image}} style={{height:'60%',width:100,borderRadius:10,}} resizeMode="cover"/>
       <TouchableOpacity style={{ height:30,width:60,backgroundColor:'white',position:'absolute',marginTop:70,alignSelf:'center',justifyContent:'center',alignItems:'center',borderColor:'orange',borderWidth:1,borderRadius:5,elevation:5}}>
        <Text style={{color:'orange',fontWeight:'bold'}}>Add</Text>
       </TouchableOpacity>
       </View>

       
      </View>
      </>
    )
  }

  return (
    <View>
      {/* date and time */}
      <View style={styles.header}></View>
      <View style={styles.dateTime}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/calenderIcon.png")}
            style={styles.icon}
          />
          <Text style={styles.date}>21 May 2021</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/clock.png")} style={styles.icon} />
          <Text style={styles.date}>10:30 Pm-12:30 Pm</Text>
        </View>
      </View>
      {/* country type dishes */}
      <ScrollView horizontal={true} style={{ marginTop: 10 }}>
        {country.map((item, i) => {
          return (
            <TouchableOpacity key={i}>
              <View
                style={
                  item == "Italian"
                    ? [
                        styles.countryList,
                        { borderColor: "#ff6700", backgroundColor: "#ffd7b5" },
                      ]
                    : styles.countryList
                }
              >
                <Text
                  style={
                    item == "Italian" ? { color: "#ff6700" } : { color: "gray" }
                  }
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <Text style={styles.populardishes}>Popular Dishes</Text>

      {/* populardishe */}

      <View style={styles.popularDisContainer}>
        <FlatList
          horizontal={true}
          data={popularDishes}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          
        />
      </View>

      {/* dishes  */}

      <View >

        <View style={styles.menuContainer}>
        <View style={styles.dropContainer}>
          <Text style={{fontWeight:'bold',fontSize:20}}>Recommended</Text>
          <Image source={require('../assets/drop-down-arrow.png')} style={styles.downImg} />
        </View>
       <TouchableOpacity style={styles.menuBtn}>
        <Text style={{color:'white'}}>Menu</Text>
       </TouchableOpacity>
        </View>

      <FlatList 
      data={dishes}
      renderItem={renderdishItem}
      keyExtractor={(item)=>item.id}
      
      
      />
         

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "black",
    position: "absolute",
  },
  dateTime: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    height: 80,
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "gray",
    elevation: 10,
  },
  icon: { height: 25, width: 25 },
  date: { fontSize: 18, fontWeight: "bold", marginLeft: 5 },
  countryList: {
    height: 35,
    width: 80,
    borderWidth: 1,
    borderRadius: 120,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    elevation: 5,
    backgroundColor: "white",
  },
  populardishes: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    marginLeft: 10,
  },
  popularDisContainer: {
    height: 150,
    width: "100%",
    borderBottomWidth:2,
    borderBottomColor:'#a9a9a9',
    padding: 25,
  },
  menuBtn:{height:30,width:70,backgroundColor:'black',borderRadius:10,justifyContent:'center',alignItems:'center',elevation:10},
  downImg:{height:8,width:8,padding:10,marginLeft:10,},
  dropContainer:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
menuContainer:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20},


});

export default Home;
