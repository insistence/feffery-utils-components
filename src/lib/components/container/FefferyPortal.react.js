// react核心
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

/**
 * 传送门组件FefferyPortal
 */
const FefferyPortal = (props) => {
    const {
        children,
        targetSelector,
        setProps,
        loading_state
    } = props;

    if (children && targetSelector) {
        return createPortal(children, document.querySelector(targetSelector));
    }
    return <></>;
}

FefferyPortal.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，设置需要传送的子元素
     */
    children: PropTypes.node,

    /**
     * 传送目标对应的`css`选择器
     */
    targetSelector: PropTypes.string,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

FefferyPortal.defaultProps = {
}

export default FefferyPortal;