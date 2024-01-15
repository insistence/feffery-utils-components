import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyFefferyNetBackground = React.lazy(() => import(/* webpackChunkName: "feffery_net_background" */ '../../fragments/animations/FefferyNetBackground.react'));

const FefferyNetBackground = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyFefferyNetBackground {...props} />
        </Suspense>
    );
}


// 定义参数或属性
FefferyNetBackground.propTypes = {
    /**
     * 组件id
     */
    id: PropTypes.string,

    /**
     * 设置内嵌元素内容
     */
    children: PropTypes.node,

    /**
     * css类名
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 自定义css字典
     */
    style: PropTypes.object,

    /**
     * 辅助刷新用唯一标识key值
     */
    key: PropTypes.string,

    /**
     * 设置是否开启鼠标控制，默认为true
     */
    mouseControls: PropTypes.bool,

    /**
     * 设置是否开启触摸控制，默认为true
     */
    touchControls: PropTypes.bool,

    /**
     * 设置是否开启陀螺仪控制，默认为false
     */
    gyroControls: PropTypes.bool,

    /**
     * 设置最小高度，默认为200.00
     */
    minHeight: PropTypes.number,

    /**
     * 设置最小宽度，默认为200.00
     */
    minWidth: PropTypes.number,

    /**
     * 设置比例，默认为1.00
     */
    scale: PropTypes.number,

    /**
     * 设置移动端比例，默认为1.00
     */
    scaleMobile: PropTypes.number,

    /**
     * 设置net颜色，默认为'#ff3f81'
     */
    color: PropTypes.string,

    /**
     * 设置背景颜色，默认为'#23153c'
     */
    backgroundColor: PropTypes.string,

    /**
     * 设置net点的数量，范围1到20，默认为10
     */
    points: PropTypes.number,

    /**
     * 设置最大距离，范围10到40，默认为20
     */
    maxDistance: PropTypes.number,

    /**
     * 设置间距，范围10到20，默认为15
     */
    spacing: PropTypes.number,

    /**
     * 设置是否展示点，默认为true
     */
    showDots: PropTypes.bool,

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

// 设置默认参数
FefferyNetBackground.defaultProps = {
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: '#ff3f81',
    backgroundColor: '#23153c',
    points: 10,
    maxDistance: 20,
    spacing: 15,
    showDots: true
}

export default FefferyNetBackground;

export const propTypes = FefferyNetBackground.propTypes;
export const defaultProps = FefferyNetBackground.defaultProps;