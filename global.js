import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  // container
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff'
  },

  // color
  primaryTextColor: {
    color: '#212121'
  },
  primaryBgColor: {
    backgroundColor: '#212121'
  },
  secondaryTextColor: {
    color: '#454545'
  },
  secondaryBgColor: {
    backgroundColor: '#454545'
  },
  whiteTextColor: {
    color: '#fff'
  },
  whiteBgColor: {
    backgroundColor: '#fff'
  },
  lightTextColor: {
    color: 'rgba(255, 255, 255, .5)'
  },
  lightBgColor: {
    backgroundColor: '#fff'
  },
  textCenter: {
    textAlign: 'center'
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  textUppercase: {
    textTransform: 'uppercase'
  },

  // typography
  text: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'mulish-regular'
  },
  fwLight: {
    fontFamily: 'mulish-light'
  },
  fwRegular: {
    fontFamily: 'mulish-regular'
  },
  fwBold: {
    fontFamily: 'mulish-bold'
  },
  fs10: {
    fontSize: 10,
    lineHeight: 15
  },
  fs12: {
    fontSize: 12,
    lineHeight: 17
  },
  fs14: {
    fontSize: 14,
    lineHeight: 19
  },
  fs16: {
    fontSize: 16,
    lineHeight: 21
  },
  fs18: {
    fontSize: 18,
    lineHeight: 23
  },
  mt0: {
    marginTop: 0
  },

  // aligned items
  flexOne: {
    flex: 1
  },
  hDirection: {
    flexDirection: 'row'
  },
  hAlignItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  hBetweenItems: {
    justifyContent: 'space-between'
  },
  hStartItems: {
    justifyContent: 'flex-start'
  },
  hEndItems: {
    justifyContent: 'flex-end'
  },
  hCenterItems: {
    justifyContent: 'center'
  },

  vDirection: {
    flexDirection: 'column'
  },
  vAlignItems: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  vStartItems: {
    alignItems: 'flex-start'
  },
  vEndItems: {
    alignItems: 'flex-end'
  },
  vCenterItems: {
    alignItems: 'center'
  },

  // button
  button: {
    borderRadius: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#fff'
  },
  buttonLarge: {
    paddingVertical: 14
  },
  buttonRouded: {
    borderRadius: 50
  },

  // form
  input: {
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255,255,255,.3)',
    color: '#fff',
    paddingHorizontal: 6,
    paddingBottom: 6,
    fontSize: 18,
    lineHeight: 23,
    borderRadius: 0,
    marginVertical: 10
  },
  inputLabel: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 0,
    marginHorizontal: 1
  },

  // utils
  mt0: {
    marginTop: 0
  },
  mt1: {
    marginTop: 5
  },
  mt2: {
    marginTop: 10
  },
  mt3: {
    marginTop: 15
  },
  mt4: {
    marginTop: 20
  },
  mt5: {
    marginTop: 25
  },
  mt6: {
    marginTop: 30
  },
  mt7: {
    marginTop: 35
  },
  mt8: {
    marginTop: 40
  },
  ml1: {
    marginLeft: 5
  },
  mr1: {
    marginRight: 5
  }
})

export default globalStyles
