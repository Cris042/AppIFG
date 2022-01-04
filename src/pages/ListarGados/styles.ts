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
    width: "60%",
    marginLeft: "18%",
    marginRight: '18%',
    color: "#27b844",
    fontSize: 24,
    marginTop: 35,
    marginBottom: 40,
    textAlign: "center",
    paddingBottom: 22,
    borderBottomWidth: 1.5,
    borderBottomColor: "#C0B8B8",
  },

  scroll: {
    marginBottom: "20%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "2%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#C0B8B8",
   
  },
  
  card: {
    width: '100%',
    marginBottom: '5%',
    borderRadius: 20,
    borderWidth: 1.0,
    borderColor: "#222",
    backgroundColor: "#FFFFFF",
    height: 150,
  },

  iconCard: {
    height: "90%",
    width: "20%",
    marginTop: 10,
    marginLeft: 6,
    paddingTop: "16%",
    borderRightWidth: 1.2,
    borderRightColor: "#222",
  },

  cardBory: {
    height: "95%",
    width: "70%",
    marginTop: -140,
    paddingTop: 20,
    marginLeft: "30%",
  },

  textCard: {
    textAlign: "center",
    color: "#000",
    marginRight: 25,
    fontSize: 10,
  },

  btnCard: {
    textAlign: "center",
    color: "#27b844",
    fontSize: 14,
    marginTop: -30,
    marginRight: -50,
  },

  footer: {
    position: "absolute",
    left: 14,
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
