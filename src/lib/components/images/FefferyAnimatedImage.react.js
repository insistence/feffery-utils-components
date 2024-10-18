import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyFefferyAnimatedImage = React.lazy(() => import(/* webpackChunkName: "feffery_animated_image" */ '../../fragments/images/FefferyAnimatedImage.react'));

/**
 * 动图组件FefferyAnimatedImage
 */
const FefferyAnimatedImage = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyFefferyAnimatedImage {...props} />
        </Suspense>
    );
}

FefferyAnimatedImage.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名
     */
    className: PropTypes.string,

    /**
     * 必填，定义动图资源地址
     */
    src: PropTypes.string.isRequired,

    /**
     * 动图`alt`信息
     */
    alt: PropTypes.string,

    /**
     * 初始化是否自动播放动图
     * 默认值：`false`
     */
    play: PropTypes.bool,

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
    setProps: PropTypes.func
};

FefferyAnimatedImage.defaultProps = {
    play: false
}

export default FefferyAnimatedImage;

export const propTypes = FefferyAnimatedImage.propTypes;
export const defaultProps = FefferyAnimatedImage.defaultProps;