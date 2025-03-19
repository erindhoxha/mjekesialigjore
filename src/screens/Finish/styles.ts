import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: THEME.COLORS.GREY_800,
    padding: 32,
    paddingTop: 51,
  },
  footer: {
    marginTop: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  scoreButtonSelected: {
    borderWidth: 1,
    borderColor: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BOLD,
    fontWeight: "700",
  },
  bold: {
    fontFamily: THEME.FONTS.BOLD,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  message: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 24,
    marginTop: 12,
  },
  title2: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 24,
    marginBottom: 24,
  },
  sub: {
    color: THEME.COLORS.GREY_100,
    borderRadius: 8,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
  },
  sub2: {
    color: THEME.COLORS.GREY_100,
    borderRadius: 8,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GREY_500,
  },
  explanation: {
    marginTop: 12,
    borderRadius: 12,
  },
  subtitle: {
    color: THEME.COLORS.GREY_100,
    borderRadius: 8,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 14,
    marginTop: 12,
  },
  scoreContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 24,
    flexDirection: "row",
    gap: 12,
  },
  scoreButton: {
    width: 28,
    height: 28,
    backgroundColor: "white",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginRight: 6,
  },
  scoreButtonGray: {
    width: 28,
    height: 28,
    backgroundColor: THEME.COLORS.GREY_500,
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginRight: 6,
  },
  scoreButtonCorrect: {
    backgroundColor: THEME.COLORS.BRAND_LIGHT,
  },
  scoreButtonIncorrect: {
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
  },
  selectedQuestionDetails: {
    marginTop: 24,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.GREY_700,
    padding: 16,
  },
});
