import { ThemeConfig } from "antd";

const colors = {
  brandOrange: '#FF5C04',
  brandOrangeDark: '#E75201',

  brandBlack: '#303030',
  brandGreyDark: '#4D4E4E',
  brandGrey: '#969696',

  bgGrey: '#F3F3F1',
  lightGrey: '#EFF0F2',
  brandWhite: '#FFFFFF'

}

export default {
    components: {
        Layout: {
          headerBg: colors.brandBlack,
          bodyBg: colors.brandWhite
        },

        Menu: {
          darkItemSelectedBg: '#000000000',
          darkItemSelectedColor: colors.brandOrangeDark,
          darkItemColor: colors.brandWhite,
          darkItemHoverColor: colors.brandGrey,

          fontSize: 16,

          popupBg: colors.brandBlack,
          darkPopupBg: colors.brandBlack
        },


        Button: {
            defaultBg: colors.brandGreyDark,
            colorText: colors.brandWhite,
            colorBorder: '#000000000',
            borderRadius: 20,
            borderRadiusSM: 20,
            borderRadiusLG: 20,
            defaultHoverBg: colors.brandOrange,
            defaultHoverColor: colors.brandWhite,
            defaultHoverBorderColor: '#000000000',
            defaultActiveBorderColor: '#000000000',
            defaultActiveColor: colors.brandWhite,
            defaultActiveBg: colors.brandOrangeDark,

            controlHeight: 45,
            controlHeightSM: 39,
            controlHeightLG: 50,

            paddingInlineSM: 20

        },

        Collapse: {
          contentBg: '#000000000'
        }

    }
} as ThemeConfig
