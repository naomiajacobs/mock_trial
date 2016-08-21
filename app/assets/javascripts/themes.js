import getMuiTheme from 'material-ui/styles/getMuiTheme'
const colorManipulator = require('material-ui/utils/colorManipulator')
const colors = require('material-ui/styles/colors')

export const defaultLightTheme = getMuiTheme({
  palette: {
    primary1Color: colors.cyan500,
    primary2Color: colors.cyan700,
    primary3Color: colors.grey400,
    accent1Color: colors.pinkA200,
    accent2Color: colors.grey100,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    secondaryTextColor: (0, colorManipulator.fade)(colors.darkBlack, 0.54),
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: (0, colorManipulator.fade)(colors.darkBlack, 0.3),
    pickerHeaderColor: colors.cyan500,
    clockCircleColor: (0, colorManipulator.fade)(colors.darkBlack, 0.07),
    shadowColor: colors.fullBlack
  }
})

export const cyanDeepPurple = getMuiTheme({
  palette: {
    primary1Color: colors.cyan500,
    primary2Color: colors.cyan700,
    primary3Color: colors.cyan100,
    accent1Color: colors.deepPurpleA200,
    accent2Color: colors.deepPurpleA100,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    secondaryTextColor: (0, colorManipulator.fade)(colors.darkBlack, 0.54),
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: (0, colorManipulator.fade)(colors.darkBlack, 0.3),
    pickerHeaderColor: colors.cyan500,
    clockCircleColor: (0, colorManipulator.fade)(colors.darkBlack, 0.07),
    shadowColor: colors.fullBlack
  }
})
