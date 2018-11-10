import * as React from 'react';
// css styling
import * as style from './style.css';
//font awesome set up
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
// importing component
import { ContactContent } from 'app/components';

library.add(fab, fas); //required for font awesome set up, can be removed if you don't wish to use it

export class App extends React.Component {
  render() {
    return (
      <div className={style.new}>
        {/* your components go here */}
        <ContactContent />
      </div>
    );
  }
}
