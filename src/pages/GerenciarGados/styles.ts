import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: '5%',
    marginTop: 0,
    marginRight: '6%'
  },
  
  card: {
    width: '100%',
    marginBottom: '7%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#222",
    height: 200,
    backgroundColor: "#fff",
  },

  title: {
    width: "60%",
    alignSelf:"center",
    color: "#373b38",
    fontSize: 25,
    marginTop: 25,
    marginBottom: 20,
    textAlign: "center",
    paddingBottom: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: "#222",
  },

  iconCard: {
    height: 160,
    width: "20%",
    marginTop: 20,
    marginLeft: 6,
    paddingTop: 50,
    borderRightWidth: 1,
    borderRightColor: "#222",  
  },

  imageCow:{
    height: 60,
    width: 60,
    alignSelf:'center',
    marginRight:2
  },

  cardBory: {
    height: 140,
    width: "70%",
    marginTop: -160,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: "30%",
  },

  textCard: {
    textAlign: "center",
    color: "#000",
    marginRight: 30,
    fontSize: 15,
  },

  btnCard: {
    width:"50%",
    borderColor: "#373b38",//#ed3456
    padding:8,
    alignSelf:"center",
    marginTop: -25,
    marginRight: -70,
    backgroundColor: "#2c2c2c",
    color:"#fff",
    borderRadius:5,
    fontSize: 18,
    textAlign: "center",
  },

  textBtnCard:{
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  }


});
