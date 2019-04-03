import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider, addLocaleData } from 'react-intl';

import JobsList from "./components/jobsList";
import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from './locales/es';
import enLocaleData from 'react-intl/locale-data/en';
import localeEnMessages from './locales/en';

addLocaleData([...enLocaleData, ...esLocaleData]);

const messages = {
  'en': localeEnMessages,
  'es': localeEsMessages
}

const language = navigator.language.split('-')[0];

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <JobsList/>
  </IntlProvider>,
  document.getElementById("root")
);