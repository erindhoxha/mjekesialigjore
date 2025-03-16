import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: THEME.COLORS.GREY_800,
    padding: 32,
    paddingTop: 51,
  },
  scoreButtonSelected: {
    backgroundColor: THEME.COLORS.STAR_GREY,
    borderWidth: 1,
    borderColor: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BOLD,
    fontWeight: '700',
  },
  bold: {
    fontFamily: THEME.FONTS.BOLD,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  message: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 24,
    marginTop: 12
  },
  title2: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 24,
    marginBottom: 24,
  },
  subtitle: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 16,
    marginTop: 8
  },
  scoreContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 24,
    flexDirection: 'row',
    gap: 12,
  },
  scoreButton: {
    width: 28,
    height: 28,
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 6,
  },
  scoreButtonGray: {
    width: 28,
    height: 28,
    backgroundColor: THEME.COLORS.GREY_500,
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: THEME.COLORS.GREY_700,
    borderRadius: 8,
  },
});