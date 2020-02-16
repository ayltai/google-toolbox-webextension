import { createMuiTheme, ThemeProvider, useMediaQuery, } from '@material-ui/core';
import arrayMove from 'array-move';
import React from 'react';
import browser from 'webextension-polyfill';

import { DroppableGridList, } from './components/DroppableGridList';
import { CONFIGURATIONS, } from './Config';
import { SERVICES, } from './Data';

export const App = () => {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(() => createMuiTheme({
        palette : {
            type : isDarkMode ? 'dark' : 'light',
        },
    }), [ isDarkMode, ]);

    const [ state, setState, ] = React.useState({
        dragged  : false,
        services : SERVICES,
    });

    if (!state.configuration) browser.storage.sync.get({
        numRows      : CONFIGURATIONS.medium.rows,
        compactStyle : false,
    }, preferences => {
        const configuration = preferences.compactStyle ? CONFIGURATIONS.small : CONFIGURATIONS.medium;
        configuration.rows = preferences.numRows;

        setState({
            ...state,
            configuration,
        });
    });

    return (
        <ThemeProvider theme={theme}>
            <DroppableGridList
                axis='xy'
                services={state.services}
                configuration={state.configuration || CONFIGURATIONS.medium}
                onSortStart={(props, event) => event.preventDefault()}
                onSortMove={() => {
                    setState({
                        ...state,
                        dragged : true,
                    });
                }}
                onSortEnd={({ oldIndex, newIndex, }) => {
                    if (oldIndex === newIndex) {
                        if (state.dragged) {
                            setState({
                                ...state,
                                dragged : false,
                            });
                        } else {
                            browser.tabs.create({
                                url : state.services[oldIndex].url,
                            });

                            window.close();
                        }
                    } else {
                        setState({
                            ...state,
                            dragged  : false,
                            services : arrayMove(state.services, oldIndex, newIndex),
                        });
                    }
                }} />
        </ThemeProvider>
    );
};
