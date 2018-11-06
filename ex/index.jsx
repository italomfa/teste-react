import React from 'react';
import ReactDOM from 'react-dom';
import ComponenteTeste, { Primario, Secundario } from './ComponenteTeste';

ReactDOM.render(<div>
    <Primario/>
    <Secundario/>
</div>, document.getElementById('app'));