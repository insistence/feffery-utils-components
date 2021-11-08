import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    a11yDark,
    atomDark,
    coldarkCold,
    coldarkDark,
    coy,
    coyWithoutShadows,
    darcula,
    dracula,
    nord,
    okaidia,
    prism,
    solarizedlight,
    twilight
} from 'react-syntax-highlighter/dist/esm/styles/prism';

// 定义代码语法高亮组件FefferySyntaxHighlighter，api参数参考https://github.com/react-syntax-highlighter/react-syntax-highlighter
export default class FefferySyntaxHighlighter extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            codeStyle,
            codeString,
            language,
            showLineNumbers,
            showInlineLineNumbers,
            setProps
        } = this.props;

        const str2style = new Map([
            ['a11y-dark', a11yDark],
            ['atom-dark', atomDark],
            ['coldark-cold', coldarkCold],
            ['coldark-dark', coldarkDark],
            ['coy', coy],
            ['coy-without-shadows', coyWithoutShadows],
            ['darcula', darcula],
            ['dracula', dracula],
            ['nord', nord],
            ['okaidia', okaidia],
            ['prism', prism],
            ['solarizedlight', solarizedlight],
            ['twilight', twilight]
        ])

        return (
            <SyntaxHighlighter id={id}
                style={str2style.get(codeStyle)}
                showLineNumbers={showLineNumbers}
                showInlineLineNumbers={showInlineLineNumbers}
                language={language}>
                {codeString}
            </SyntaxHighlighter>
        );
    }
}

// 定义参数或属性
FefferySyntaxHighlighter.propTypes = {
    // 部件id
    id: PropTypes.string,

    // 定义代码高亮风格，默认为'prism'
    codeStyle: PropTypes.string,

    // 定义代码内容字符串
    codeString: PropTypes.string.isRequired,

    // 定义编程语言类型，默认为'python'
    language: PropTypes.string.isRequired,

    // 设置是否展示代码行标，默认false
    showLineNumbers: PropTypes.bool,

    showInlineLineNumbers: PropTypes.bool,

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

// 设置默认参数
FefferySyntaxHighlighter.defaultProps = {
    codeStyle: 'prism'
}
