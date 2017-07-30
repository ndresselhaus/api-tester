import React from 'react';
import PropTypes from 'prop-types';

const ParameterList = ({title, params = {}, onChange}) => {

    const inputs = Object.keys(params).map(key => {
        const value = params[key];
        return <div key={key}>
            <label>{key}
                <input type="text" value={value} onChange={e => onChange(key, e.target.value)} />
            </label>
        </div>;
    });

    if (!inputs.length) return null;

    return <div>
        <h3>{title}</h3>
        {inputs}
    </div>;
};

ParameterList.propTypes = {
    title: PropTypes.string.isRequired,
    params: PropTypes.object,
    onChange: PropTypes.func.isRequired,
};

export default ParameterList;