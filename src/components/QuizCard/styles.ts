import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

const dimensions = Dimensions.get("window");

const CARDS_PER_ROW = 2;
const HORIZONTAL_PADDING_SCREEN = 32 * 2;
const MARGIN = 6 * 2;

const CARD_WIDTH = (dimensions.width - HORIZONTAL_PADDING_SCREEN - MARGIN) / CARDS_PER_ROW;

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    backgroundColor: THEME.COLORS.GREY_700,
    borderRadius: 6,
    padding: 16,
    margin: MARGIN,
  },
  score: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  scoreTitle: {
    fontSize: 12,
    color: THEME.COLORS.BRAND_LIGHT,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Cardo_700Bold", // TODO: Add font serif or Georgia
    color: THEME.COLORS.GREY_300,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.GREY_600,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 600,
    color: THEME.COLORS.GREY_100,
    marginTop: 12,
  },
  description: {
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GREY_100,
    lineHeight: 20,
    width: "100%",
  },
  pytjet: {
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GREY_300,
    marginTop: 8,
  },
  descriptionView: {
    paddingTop: 8, // Add this
    borderTopColor: THEME.COLORS.GREY_500,
    borderTopWidth: 1,
    flex: 1,
    flexGrow: 1,
    marginTop: 8,
    width: "100%",
  },
});
