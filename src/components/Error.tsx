import React from 'react';
import './Error.scss';

export default ({ error }: ErrorProps) => {
    if (!error) {
        return (<></>);
    }

    return (
        <div className="Error-message">{error}</div>
    );
}

interface ErrorProps {
    error: string;
}