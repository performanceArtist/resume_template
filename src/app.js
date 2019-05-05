import './fonts/arialmt/fonts.css';
import './fonts/arialmt_bold/fonts.css';
import './favicons';

import './main.scss';

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('./components', true, /\.scss$/));
importAll(require.context('./composite', true, /\.scss$/));
