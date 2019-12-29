import React from 'react';

const JobMetadata: React.FC<{name: string, value: string|[]}> = ({name, value}) => {
    return (<React.Fragment>
        <h6><strong>{name.toUpperCase()}</strong></h6>
        <p>{typeof value === 'object' ? value.join(', ') : value}</p>
    </React.Fragment>)
};

export default JobMetadata;
