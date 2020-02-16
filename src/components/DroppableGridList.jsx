import { Divider, GridList, makeStyles, } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { SortableContainer, } from 'react-sortable-hoc';

import { DraggableButton, } from './DraggableButton';
import { ExpandablePanel } from './ExpandablePanel';

export const DroppableGridList = SortableContainer(({ services, configuration, }) => {
    const useStyles = makeStyles(() => ({
        divider : {
            width  : '100% !important',
            height : '1px !important',
        },
    }));

    const classes = useStyles();

    const [ expanded, setExpanded, ] = React.useState(false);

    const length = configuration.cols * configuration.rows;

    return (
        <ExpandablePanel onExpand={() => setExpanded(true)}>
            <GridList
                cellHeight={configuration.size + 24}
                cols={configuration.cols}>
                {services.slice(0, length).map((service, index) => (
                    <DraggableButton
                        key={service.id}
                        index={index}
                        service={service}
                        configuration={configuration} />
                ))}
                {expanded && (<Divider className={classes.divider} />)}
                {expanded && services.slice(length, services.length).map((service, index) => (
                    <DraggableButton
                        key={service.id}
                        index={index + length}
                        service={service}
                        configuration={configuration} />
                ))}
            </GridList>
        </ExpandablePanel>
    );
});

DroppableGridList.propTypes = {
    axis          : PropTypes.string,
    services      : PropTypes.arrayOf(PropTypes.object).isRequired,
    configuration : PropTypes.object.isRequired,
    onSortStart   : PropTypes.func,
    onSortMove    : PropTypes.func,
    onSortEnd     : PropTypes.func,
};
