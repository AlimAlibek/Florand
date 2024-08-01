import { ThemeConfig } from "antd";
import { useLocation } from "react-router-dom";

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

const useThemeConfig = () => {

  const {pathname} = useLocation();

  return {
    token: {
      fontFamily: 'Onest, sans-serif'
    },
    components: {
        Layout: {
          headerBg: colors.brandBlack,
          bodyBg: pathname !== '/services' ? colors.brandWhite : colors.bgGrey,
          footerBg: colors.brandBlack,
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
            borderRadiusLG: 30,
            defaultHoverBg: colors.brandOrange,
            defaultHoverColor: colors.brandWhite,
            defaultHoverBorderColor: '#000000000',
            defaultActiveBorderColor: '#000000000',
            defaultActiveColor: colors.brandWhite,
            defaultActiveBg: colors.brandOrangeDark,

            colorPrimary: colors.brandOrange,
            colorPrimaryHover: colors.brandOrangeDark,
            colorPrimaryActive: colors.brandOrangeDark,

            controlHeight: 45,
            controlHeightSM: 39,
            controlHeightLG: 50,

            paddingInlineSM: 20,
            paddingInlineLG: 20,

            fontSizeLG: 18
        },

        Typography: {
          colorWarning: colors.brandOrangeDark,
          color: colors.brandWhite,
          colorPrimary: colors.brandWhite,

        },

        Collapse: {
          contentBg: '#000000000'
        },

        Card: {
          borderRadiusLG: 20,
        }

    }
  } as ThemeConfig
}

export default useThemeConfig;
