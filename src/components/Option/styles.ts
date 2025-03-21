import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 76,
    backgroundColor: THEME.COLORS.GREY_800,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "transparent",
  },
  title: {
    color: THEME.COLORS.GREY_100,
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginRight: 32,
    flex: 1,
  },
  checked: {
    borderColor: THEME.COLORS.BRAND_LIGHT
  },
  correct: {
    borderColor: THEME.COLORS.BRAND_MID,
    borderWidth: 1,
  },
  incorrect: {
    borderColor: THEME.COLORS.DANGER_LIGHT,
    borderWidth: 1,
  },
});