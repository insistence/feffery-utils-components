import React from 'react';
import List from 'rc-virtual-list';
import PropTypes from 'prop-types';

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

/**
 * 虚拟滚动组件FefferyVirtualList
 */
const FefferyVirtualList = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        style,
        className,
        key,
        height,
        itemHeight,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children);

    children = children || [];

    return (<List
        id={id}
        style={style}
        className={className}
        key={key}
        itemKey="virtual-list-id"
        height={height}
        itemHeight={itemHeight}
        data={children.map((_, index) => index)}
        children={(index) => children[index]}
        data-dash-is-loading={
            (loading_state && loading_state.is_loading) || undefined
        } />);
}

FefferyVirtualList.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，设置内嵌元素内容
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 虚拟化区域像素高度
     */
    height: PropTypes.number.isRequired,

    /**
     * 每个子元素区域的像素高度
     */
    itemHeight: PropTypes.number.isRequired,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

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
    })
};

// 设置默认参数
FefferyVirtualList.defaultProps = {
}

export default FefferyVirtualList;