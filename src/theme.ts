const colors = {
  base: {
    white: '#fff',
    black: '#000'
  },
  green: {
    100: '#eafaea',
    200: '#98e698',
    300: '#32cd32'
  },
  blue: {
    100: '#e5f4ff',
    200: '#7fcaff',
    300: '#0096FF'
  },
  yellow: {
    100: '#fdf8ea',
    200: '#f9e6ad',
    300: '#F1C232'
  },
  red: {
    100: '#fdecea',
    200: '#f9a19a',
    300: '#F44336',
  },
  gray: {
    100: '#fcfcfc',
    200: '#f2f1f0',
    300: '#E5E4E2',
    400: '#C0C0C0',
  },
}

const toast = {
  success: {
    color: colors.base.white,
    backgroundColor: colors.green[300],
    borderColor: colors.green[300]
  },
  info: {
    color: colors.base.white,
    backgroundColor: colors.blue[300],
    borderColor: colors.blue[300]
  },
  danger: {
    color: colors.base.white,
    backgroundColor: colors.red[300],
    borderColor: colors.red[300]
  },
  default: {
    color: colors.base.black,
    backgroundColor: colors.gray[300],
    borderColor: colors.gray[300]
  },
  warning: {
    color: colors.base.white,
    backgroundColor: colors.yellow[300],
    borderColor: colors.yellow[300]
  }
};

const theme = {
  colors,
  toast
}

export default theme