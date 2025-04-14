import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GREY_600,
    paddingHorizontal: 32,
    paddingTop: 54,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
  },
  subtitle: {
    fontSize: 14,
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.REGULAR,
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  history: {
    width: 44,
    height: 44,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.GREY_100,
  },
});
