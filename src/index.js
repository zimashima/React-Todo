import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import { cyan, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: cyan,
        secondary: amber,
        type: 'dark'
    }
    
})

render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
