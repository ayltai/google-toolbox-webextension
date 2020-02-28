import { createMuiTheme, ThemeProvider, useMediaQuery, } from '@material-ui/core';
import arrayMove from 'array-move';
import React from 'react';

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
        services : SERVICES.sort((left, right) => left.featured && right.featured ? 0 : left.featured ? -1 : right.featured ? 1 : left.name.localeCompare(right.name)),
    });

    React.useEffect(() => {
        window.chrome.storage.sync.get({
            numRows      : CONFIGURATIONS.medium.rows,
            compactStyle : false,
            services     : state.services,
        }, preferences => {
            const configuration = preferences.compactStyle ? CONFIGURATIONS.small : CONFIGURATIONS.medium;
            configuration.rows = preferences.numRows;

            setState({
                ...state,
                configuration,
                services : preferences.services,
            });
        });
    }, []);

    const handleClick = index => {
        window.chrome.tabs.create({
            url : state.services[index].url,
        });

        window.close();
    };

    const handleMove = (from, to) => {
        const services = arrayMove(state.services, from, to);

        setState({
            ...state,
            services,
            dragged : false,
        });

        window.chrome.storage.sync.set({
            services,
        });
    };

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
                            handleClick(oldIndex);
                        }
                    } else {
                        handleMove(oldIndex, newIndex);
                    }
                }} />
        </ThemeProvider>
    );
};
