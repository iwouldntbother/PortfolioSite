import React from 'react';
import './detail.css';

class Detail extends React.Component {

    constructor(state) {
        self.state = state;
    }

    render() {
        return <div class="detailContainer (self.state) ? openDetail : closeDetail">
            Test
        </div>
    }
}

export default Detail;