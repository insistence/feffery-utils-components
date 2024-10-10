# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferyBurger(Component):
    """A FefferyBurger component.
动态菜单图标组件FefferyBurger

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    当前组件css类名.

- style (dict; optional):
    当前组件css样式.

- type (a value equal to: 'default', 'squash', 'cross', 'twirl', 'fade', 'slant', 'spiral', 'divide', 'turn', 'pivot', 'sling', 'squeeze', 'spin', 'rotate'; default 'default'):
    图标类型，可选项有`'default'`、`'squash'`、`'cross'`、`'twirl'`、`'fade'`、`'slant'`、`'spiral'`
    、`'divide'`、`'turn'`、`'pivot'`、`'sling'`、`'squeeze'`、`'spin'`、`'rotate'`
    默认值：`'default'`.

- toggled (boolean; optional):
    设置或监听切换状态.

- size (number; default 32):
    图标像素尺寸  默认值：`32`.

- direction (a value equal to: 'left', 'right'; default 'left'):
    部分类型图标可用，控制动画方向，可选项有`'left'`、`'right'`  默认值：`'left'`.

- duration (number; default 0.3):
    动画过程时长，单位：秒，设置为`0`时将关闭动画  默认值：`0.3`.

- distance (a value equal to: 'sm', 'md', 'lg'; default 'md'):
    图标水平线之间的间距大小规格，可选项有`'sm'`、`'md'`、`'lg'`  默认值：`'md'`.

- color (string; optional):
    图标颜色.

- rounded (boolean; default False):
    是否渲染为圆角矩形  默认值：`False`.

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
    _type = 'FefferyBurger'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, type=Component.UNDEFINED, toggled=Component.UNDEFINED, size=Component.UNDEFINED, direction=Component.UNDEFINED, duration=Component.UNDEFINED, distance=Component.UNDEFINED, color=Component.UNDEFINED, rounded=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'className', 'style', 'type', 'toggled', 'size', 'direction', 'duration', 'distance', 'color', 'rounded', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'style', 'type', 'toggled', 'size', 'direction', 'duration', 'distance', 'color', 'rounded', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(FefferyBurger, self).__init__(**args)
