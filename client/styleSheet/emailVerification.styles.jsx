import { StyleSheet } from "react-native";
import { SIZES } from "../constance/sizes";


const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		minHeight: SIZES.height,
		paddingHorizontal: 15,
    gap: 10,
	},
  mode: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingVertical: 15,
  },
  constainer: {
		flex: 1,
		flexDirection: "column",
    gap: 10,
	},
  textInputContainer: {
    flexDirection: 'row',
    width: SIZES.width,
    borderBottomWidth: 2,
    padding: 5,
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 0,
  },
});

export default styles;
