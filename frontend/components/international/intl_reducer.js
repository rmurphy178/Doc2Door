// import { enabledLanguages, localizationData } from '../international/setup';
// import { SWITCH_LANGUAGE } from './intl_actions';
//
// const initLocale = global.navigator && global.navigator.language || 'en';
//
// const initialState = {
//   locale: initLocale,
//   enabledLanguages,
//   ...localizationData[newLang] || {}),
// };
//
// const IntlReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SWITCH_LANGUAGE: {
//       const { type, ...actionWithoutType } = action; // eslint-disable-line
//       return { ...state, ...actionWithoutType };
//     }
//     default:
//       return state;
//   }
// };
//
// export default IntlReducer;
