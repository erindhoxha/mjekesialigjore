import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  question: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 300,
    padding: 32,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  title: {
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GREY_100,
    fontSize: 16,
    marginBottom: 7,
    textAlign: 'center'
  },
  header: {
    width: '100%',
    marginBottom: 21,
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
    width: 24,
    height: 24,
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 6,
  },
  scoreButtonGray: {
    width: 24,
    height: 24,
    backgroundColor: 'gray',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 6,
  },
});