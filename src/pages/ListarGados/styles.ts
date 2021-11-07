import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: '5%',
    overflow: "hidden",
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

  scroll: {
    marginBottom: "20%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "2%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#C0B8B8",
   
  },

  imageCow:{
    height: 40,
    width: 40,
    alignSelf:'center',
    marginRight:2
  },
  
  card: {
    width: '100%',
    marginBottom: '5%',
    borderRadius: 5,
    borderWidth: 1.0,
    borderColor: "#222",
    backgroundColor: "#FFFFFF",
    height: 150,
  },

  iconCard: {
    height: 110,
    width: "20%",
    marginTop: 22.5,
    marginLeft: 3,
    paddingTop: 30,
    borderRightWidth: 1.2,
    borderRightColor: "#222",
  },

  cardBory: {
    height: 160,
    width: "70%",
    marginTop: -140,
    paddingTop: 20,
    marginLeft: "30%",
  },

  textCard: {
    textAlign: "center",
    color: "#000",
    marginRight: 25,
    fontSize: 12,
  },

  btnCard: {
    textAlign: "center",
    color: "#27b844",
    fontSize: 16,
    marginTop: -40,
    marginRight: -50,
  },

  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 10,

    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },

  footerText: {
    color: "#8fa7b3",
  },

  addButton: {
    width: 56,
    height: 56,
    backgroundColor: "#27b844",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },


});
