import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 99999,
    opacity: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  toastContainer: {
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
  },
  actionContainer: {
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start'
  },
  iconStyle: {
    fontSize: 14
  },
});

export default {
  styles,
};
