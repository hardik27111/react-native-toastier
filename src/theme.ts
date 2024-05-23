const colors = {
  base: {
    white: '#fff',
    black: '#000'
  },
  green: {
    100: '#d7ebcc',
    200: '#9bce80',
    300: '#4ba61a'
  },
  blue: {
    100: '#cce2ff',
    200: '#80b7ff',
    300: '#1a7dff'
  },
  orange: {
    100: '#fff1e6',
    200: '#ffb780',
    300: '#ff7d1a'
  },
  red: {
    100: '#ec8d8d',
    200: '#f7d1d1',
    300: '#dc3131',
  },
  gray: {
    100: '#fafafa',
    200: '#eeeeee',
    300: '#d0cfd0',
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
    backgroundColor: colors.orange[300],
    borderColor: colors.orange[300]
  }
};

const theme = {
  colors,
  toast
}

export default theme