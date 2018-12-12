import React, { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  once: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  style: PropTypes.object,
  className: PropTypes.string,
  offset: PropTypes.number,
  partialVisibility: PropTypes.bool,
  nodeRef: PropTypes.object,
  tag: PropTypes.string,
};

export class TrackVisibility extends PureComponent {
  static propTypes = propTypes;

  static defaultProps = {
    once: false,
    offset: 0,
    partialVisibility: false,
    tag: 'div',
  };

  constructor(props) {
    super(props);
    this.ownProps = Object.keys(propTypes);
    this.state = { isVisible: false };

    props.nodeRef && this.setNodeRef(props.nodeRef);
  }

  componentDidMount() {
    this.attachListener();
    this.isComponentVisible();
  }

  componentDidUpdate(prevProps) {
    if (Object.is(this.getChildProps(this.props), this.getChildProps(prevProps))) {
      this.isComponentVisible();
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  setNodeRef = (ref) => {
    this.nodeRef = ref;
  };

  getChildProps(props = this.props) {
    const childProps = {};
    Object.keys(props).forEach((key) => {
      if (!~this.ownProps.indexOf(key)) {
        childProps[key] = props[key];
      }
    });
    return childProps;
  }

  getChildren() {
    if (typeof this.props.children === 'function') {
      return this.props.children({
        ...this.getChildProps(),
        isVisible: this.state.isVisible,
      });
    }

    return Children.map(this.props.children, child => cloneElement(child, {
      ...this.getChildProps(),
      isVisible: this.state.isVisible,
    }));
  }

  isVisible = (
    {
      top, left, bottom, right, width, height,
    },
    windowWidth,
    windowHeight,
  ) => {
    const { offset, partialVisibility } = this.props;

    if (top + right + bottom + left === 0) {
      return false;
    }

    const topThreshold = 0 - offset;
    const leftThreshold = 0 - offset;
    const widthCheck = windowWidth + offset;
    const heightCheck = windowHeight + offset;

    return partialVisibility
      ? top + height >= topThreshold
        && left + width >= leftThreshold
        && bottom - height <= heightCheck
        && right - width <= widthCheck
      : top >= topThreshold
        && left >= leftThreshold
        && bottom <= heightCheck
        && right <= widthCheck;
  };

  isComponentVisible = () => {
    if (!this.nodeRef || !this.nodeRef.getBoundingClientRect) return;

    const html = document.documentElement;
    const { once } = this.props;
    const boundingClientRect = this.nodeRef.getBoundingClientRect();
    const windowWidth = window.innerWidth || html.clientWidth;
    const windowHeight = window.innerHeight || html.clientHeight;

    const isVisible = this.isVisible(
      boundingClientRect,
      windowWidth,
      windowHeight,
    );

    if (isVisible && once) {
      this.removeListener();
    }

    this.setState({ isVisible });
  };

  handleChangeWindow = () => {
    this.isComponentVisible();
  };

  attachListener() {
    window.addEventListener('scroll', this.handleChangeWindow);
    window.addEventListener('resize', this.handleChangeWindow);
  }

  removeListener() {
    window.removeEventListener('scroll', this.handleChangeWindow);
    window.removeEventListener('resize', this.handleChangeWindow);
  }

  render() {
    const {
      className, style, nodeRef, tag: Tag,
    } = this.props;
    const props = {
      ...(className && { className }),
      ...(style && { style }),
    };

    return (
      <Tag ref={!nodeRef && this.setNodeRef} {...props}>
        {this.getChildren()}
      </Tag>
    );
  }
}
