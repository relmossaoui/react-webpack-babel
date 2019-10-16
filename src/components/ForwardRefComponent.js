import React from 'react';

export default React.forwardRef((props, ref) => (
    <button ref={ref}>
        {/* using here a components composition */}
        {props.children}
    </button>
))