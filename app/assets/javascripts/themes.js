import getMuiTheme from 'material-ui/styles/getMuiTheme'
const colorManipulator = require('material-ui/utils/colorManipulator')
const colors = require('material-ui/styles/colors')

const values = [
  'red',
  'pink',
  'purple',
  'deepPurple',
  'indigo',
  'blue',
  'lightBlue',
  'cyan',
  'teal',
  'green',
  'lightGreen',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deepOrange',
  'brown',
  'blueGrey',
  'grey',
]

function createMuiTheme(primary, accent) {
  const primary1Color = `${primary}500`
  const primary2Color = `${primary}700`
  const primary3Color = `${primary}100`
  const accent1Color = `${accent}A200`
  const accent2Color = `${accent}A100`
  const accent3Color = `${accent}A400`
  return getMuiTheme({
    palette: {
      primary1Color: colors[primary1Color],
      primary2Color: colors[primary2Color],
      primary3Color: colors[primary3Color],
      accent1Color: colors[accent1Color],
      accent2Color: colors[accent2Color],
      accent3Color: colors[accent3Color],
      textColor: colors.darkBlack,
      secondaryTextColor: (0, colorManipulator.fade)(colors.darkBlack, 0.54),
      alternateTextColor: colors.white,
      canvasColor: colors.white,
      borderColor: colors.grey300,
      disabledColor: (0, colorManipulator.fade)(colors.darkBlack, 0.3),
      pickerHeaderColor: colors[primary1Color],
      clockCircleColor: (0, colorManipulator.fade)(colors.darkBlack, 0.07),
      shadowColor: colors.fullBlack
    }
  })
}

export const cyanPink = createMuiTheme('cyan', 'pink')
export const cyanDeepPurple = createMuiTheme('cyan', 'deepPurple')
