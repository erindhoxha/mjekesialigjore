import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  text: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 12,
  },
  contact: {
   color: THEME.COLORS.GREY_300,
   fontFamily: THEME.FONTS.REGULAR,
   fontSize: 14,
   lineHeight: 18,
   marginBottom: 12,
 },
  contactWrapper: {
   borderTopWidth: 1,
   borderTopColor: THEME.COLORS.GREY_300,
   paddingTop: 12,
   marginTop: 12,
  },
  h1: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 24,
    marginBottom: 12,
  },
  text1: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 2,
  },
  text2: {
    color: THEME.COLORS.GREY_300,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },
  textContainer: {
   flex: 1,
   padding: 32,
  },
  link: {
    color: THEME.COLORS.BRAND_MID,
    textDecorationLine: 'underline',
  },
});