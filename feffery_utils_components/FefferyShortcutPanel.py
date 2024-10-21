# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferyShortcutPanel(Component):
    """A FefferyShortcutPanel component.
快捷指令面板部件FefferyShortcutPanel

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- locale (a value equal to: 'en', 'zh'; default 'zh'):
    设置语言，可选项有`'en'`、`'zh'`  默认值：`'zh'`.

- data (list of dicts; required):
    配置指令面板子项  例：  [       {           id: \"Home\",           title:
    \"Open Home\",           hotkey: \"cmd+h\",           handler: ()
    => {               console.log(\"navigation to home\");
    }       },       {           id: \"Open Projects\",
    title: \"Open Projects\",           hotkey: \"cmd+p\",
    handler: () => {               console.log(\"navigation to
    projects\");           }       },       {           id: \"Theme\",
    title: \"Change theme...\",           children: [
    'Light Theme', 'Dark Theme'           ]       },       {
    id: \"Light Theme\",           title: \"Change theme to Light\",
    parent: 'Theme',           handler: () => {
    console.log(\"theme light\");           }       },       {
    id: \"Dark Theme\",           title: \"Change theme to Dark\",
    parent: 'Theme',           keywords: \"lol\",           handler:
    () => {               console.log(\"theme dark\");           }
    }   ].

    `data` is a list of dicts with keys:

    - id (string; required):
        当前子项的唯一标识，会在顶端热键面包屑中进行显示.

    - title (string; required):
        必填，当前子项标题信息.

    - hotkey (string; optional):
        配置当前子项对应快捷键.

    - handler (string; optional):
        传入字符型的`javascript`函数体源码，在当前子项被激活时触发.

    - parent (string; optional):
        当前子项所属上一层级节点的`id`信息.

    - keywords (string; optional):
        当前子项被搜索时对应的目标关键词.

    - children (list of strings; optional):
        当前子项节点下一层级对应的节点`id`信息数组.

    - section (string; optional):
        分组标题文字.

- triggeredHotkey (dict; optional):
    监听记录最近一次被触发的子项`id`以及对应触发时间的时间戳信息.

    `triggeredHotkey` is a dict with keys:

    - id (string; optional):
        触发子项`id`.

    - timestamp (number; optional):
        触发时间戳.

- placeholder (string; optional):
    定义输入框提示内容，默认会根据`locale`赋以不同的缺省值.

- openHotkey (string; default 'cmd+k,ctrl+k'):
    设置唤出指令面板的快捷键组合  默认值：`'cmd+k,ctrl+k'`.

- theme (a value equal to: 'light', 'dark'; default 'light'):
    设置主题，可选项有`'light'`、`'dark'`  默认值：`'light'`.

- open (boolean; default False):
    更新为`True`时手动展开指令面板.

- close (boolean; default False):
    更新为`True`时手动关闭指令面板.

- panelStyles (dict; optional):
    配置指令面板相关样式参数.

    `panelStyles` is a dict with keys:

    - width (string; optional):
        面板宽度  默认值：`'640px'`.

    - overflowBackground (string; optional):
        面板选项滚动区背景色  默认值：`'rgba(255, 255, 255, 0.5)'`.

    - textColor (string; optional):
        面板字体颜色  默认值：`'rgb(60, 65, 73)'`.

    - fontSize (string; optional):
        面板字体大小  默认值：`'16px'`.

    - top (string; optional):
        面板到顶端的距离  默认值：`'20%'`.

    - accentColor (string; optional):
        面板主色  默认值：`'rgb(110, 94, 210)'`.

    - secondaryBackgroundColor (string; optional):
        面板次要背景色  默认值：`'rgb(239, 241, 244)'`.

    - secondaryTextColor (string; optional):
        面板次要文字颜色  默认值：`'rgb(107, 111, 118)'`.

    - selectedBackground (string; optional):
        面板选中项背景色  默认值：`'rgb(248, 249, 251)'`.

    - actionsHeight (string; optional):
        面板选项区高度  默认值：`'300px'`.

    - groupTextColor (string; optional):
        面板分组标签文字颜色  默认值：`'rgb(144, 149, 157)'`.

    - zIndex (number; optional):
        面板`z-index`  默认值：`1`.

- searchValue (string; optional):
    监听用户当前已输入搜索内容.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_utils_components'
    _type = 'FefferyShortcutPanel'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, data=Component.REQUIRED, triggeredHotkey=Component.UNDEFINED, placeholder=Component.UNDEFINED, openHotkey=Component.UNDEFINED, theme=Component.UNDEFINED, open=Component.UNDEFINED, close=Component.UNDEFINED, panelStyles=Component.UNDEFINED, searchValue=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'locale', 'data', 'triggeredHotkey', 'placeholder', 'openHotkey', 'theme', 'open', 'close', 'panelStyles', 'searchValue', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'locale', 'data', 'triggeredHotkey', 'placeholder', 'openHotkey', 'theme', 'open', 'close', 'panelStyles', 'searchValue', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['data']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(FefferyShortcutPanel, self).__init__(**args)
