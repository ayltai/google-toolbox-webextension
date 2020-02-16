import { Button, makeStyles } from '@material-ui/core';
import { ExpandMore, Settings } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import browser from 'webextension-polyfill';

export const ExpandablePanel = props => {
    const useStyles = makeStyles(theme => ({
        container : {
            display        : 'flex',
            flexWrap       : 'wrap',
            overflow       : 'hidden',
            justifyContent : 'flex-start',
        },
        fluid     : {
            flex : 1,
        },
        button    : {
            margin : theme.spacing(2),
            width  : '100%',
        },
    }));

    const classes = useStyles();

    const [ expanded, setExpanded, ] = React.useState(false);

    return (
        <div className={classes.container}>
            {props.children}
            {!expanded && (
                <Button
                    className={classes.button}
                    color='default'
                    variant='outlined'
                    startIcon={<ExpandMore />}
                    onClick={() => {
                        setExpanded(true);

                        if (props.onExpand) props.onExpand();
                    }}>
                    More
                </Button>
            )}
            {expanded && (
                <Button
                    className={classes.button}
                    color='default'
                    variant='outlined'
                    startIcon={<Settings />}
                    onClick={() => {
                        browser.runtime.openOptionsPage();

                        window.close();
                    }}>
                    Preferences
                </Button>
            )}
        </div>
    );
};

ExpandablePanel.propTypes = {
    children : PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
    onExpand : PropTypes.func,
};
