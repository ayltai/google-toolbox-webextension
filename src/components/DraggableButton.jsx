import { Avatar, GridListTile, IconButton, makeStyles, Tooltip, } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { SortableElement, } from 'react-sortable-hoc';

export const DraggableButton = SortableElement(({ service, configuration, }) => {
    const useStyles = makeStyles(theme => ({
        iconButton : {
            margin : theme.spacing(1),
        },
        avatar     : {
            width  : configuration.size,
            height : configuration.size,
        },
    }));

    const classes = useStyles();

    return (
        <GridListTile>
            <Tooltip title={service.name}>
                <IconButton
                    className={classes.iconButton}
                    size='small'>
                    <Avatar
                        className={classes.avatar}
                        variant='square'
                        src={`images/${service.id}.png`}>
                        {service.name.substr(0, 1)}
                    </Avatar>
                </IconButton>
            </Tooltip>
        </GridListTile>
    );
});

DraggableButton.propTypes = {
    index         : PropTypes.number.isRequired,
    service       : PropTypes.object.isRequired,
    configuration : PropTypes.object.isRequired,
};
