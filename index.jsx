import React, { Component } from 'react';
import PropTypes from 'prop-types';

class React3DRotationBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rotateXDeg: 0,
            rotateYDeg: 0
        }

        this._moveBox = this._moveBox.bind(this);
    }

    _moveBox(e) {
        const rotateForce = this.props.rotateForce;
        const docWidth = this.docWidth;
        const docHeight = this.docHeight;

        // rotate range: -rotateForce ~ rotateForce
        this.setState({
            rotateXDeg: -((e.pageY / docHeight * 2 - 1) * rotateForce),
            rotateYDeg: (e.pageX / docWidth * 2 - 1) * rotateForce
        })
    }

    componentDidMount() {
        this.docWidth = document.body.offsetWidth;
        this.docHeight = document.body.offsetHeight;
        document.body.addEventListener('mousemove', this._moveBox);
    }

    componentWillUnmount() {
        document.body.removeEventListener('mousemove', this._moveBox);
    }

    render() {
        const props = this.props;
        return <div className={`motion-box ${this.props.className || ''}`} style={
            {
                perspective: props.perspective,
                minWidth: props.minWidth,
                minHeight: props.minHeight
            }
        }>
            <div
                style={{ transformStyle: 'preserve-3d', transform: `rotateX(${this.state.rotateXDeg}deg) rotateY(${this.state.rotateYDeg}deg)` }}>
                {this.props.children}
            </div>
        </div>

    }
}

React3DRotationBox.propTypes = {
    className: PropTypes.string,
    perspective: PropTypes.string,
    minWidth: PropTypes.string,
    minHeight: PropTypes.string,
    rotateForce: PropTypes.number
}

React3DRotationBox.defaultProps = {
    rotateForce: 10,
    perspective: '800px',
    minWidth: '300px',
    minHeight: '300px'
}

export default React3DRotationBox;