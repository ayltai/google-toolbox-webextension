import { GridListTile, IconButton, Tooltip, } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { SortableElement, } from 'react-sortable-hoc';

export const DraggableButton = SortableElement(({ service, configuration, }) => {
    return (
        <GridListTile>
            <Tooltip title={service.name}>
                <IconButton>
                    <img
                        src={service.icon}
                        width={configuration.size}
                        height={configuration.size}
                        alt={service.name} />
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
