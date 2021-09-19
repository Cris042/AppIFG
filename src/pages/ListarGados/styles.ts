import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '92%',
    padding: '5%',
    marginTop: '8%',
    marginBottom: '2%',
    marginLeft: '4%',
    marginRight: '4%',
    overflow: "hidden",
  },

  title: {
    color: "#27b844",
    fontSize: 24,
    marginBottom: 15,
    marginTop: 18,
    marginLeft: "17%",
    marginRight: "17%",
    textAlign: "center",
    paddingBottom: 24,
    borderBottomWidth: 1.2,
    borderBottomColor: "#222",
  },

  scroll: {
    marginBottom: "20%",
    padding: "10%",
    borderRadius: 20,
    borderWidth: 0.7,
    borderColor: "#ccc",
   
  },
  
  card: {
    width: '100%',
    marginBottom: '5%',
    borderRadius: 20,
    borderWidth: 1.0,
    borderColor: "#DFDCDC",
    height: 160,
  },

  iconCard: {
    height: 120,
    width: "20%",
    marginTop: 20,
    marginLeft: 3,
    paddingTop: 35,
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
    marginTop: -35,
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
