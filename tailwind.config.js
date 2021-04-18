module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
       'lightGray1': '#F5F5F5',
       'lightGray2': '#F2F2F2',
       'lightGray3': '#EBEBEB',
       'lightGray4': '#D0D1D1',
       'darkGray': "434343",      
       'orange': '#FE481B',
       'darkOrange': '#B2311F',
       'lightSkin': "#FFE7E3",
       'skin': "#FFB573"
     }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'lightGray1': '#F5F5F5',
      'lightGray2': '#F2F2F2',
      'lightGray3': '#EBEBEB',
      'lightGray4': '#D0D1D1',
      'darkGray': "434343",      
      'orange': '#FE481B',
      'darkOrange': '#B2311F',
      'lightSkin': "#FFE7E3",
      'skin': "#FFB573"
    }),
    fontFamily: {      
      nunito: ["Nunito"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
