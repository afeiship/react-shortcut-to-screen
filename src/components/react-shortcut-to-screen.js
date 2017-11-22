import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
  };

  static defaultProps = {
    visible: true
  };
  /*===properties end===*/

  constructor(props){
    super(props);
    this.state = {
      visible: props.visible
    };
  }

  componentWillReceiveProps(nextProps){
    const { visible } = nextProps;
    this.setState({ visible });
  }

  _onCLoseClick = e =>{
    this.setState({
      visible: false
    });
  };

  render(){
    const {className, visible, ...props} = this.props;
    return (
      <div {...props} hidden={!this.state.visible} className={classNames('react-shortcut-to-screen',className)}>
        <div className="con">
            <div className="ic-bg ic-closebtn" onClick={this._onCLoseClick} />
            <div className="tip">
            <img src="//3gimg.qq.com/wap30/infoapp/touch/itravel/images/sc/home.png" />
            <p>先点击<span className="ic-bg ic-add"></span><br />再"添加到主屏幕"</p></div>
            <div className="ic-bg ic-arrow" />
          </div>
      </div>
    );
  }
}
