# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferyListenBounding(Component):
    """A FefferyListenBounding component.


Keyword arguments:

- id (string; optional):
    组件id.

- bounding (dict; optional):
    监听目标元素的边界相关参数.

- key (string; optional):
    辅助强制刷新用.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- target (string; required):
    必填，设置监听目标元素id."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_utils_components'
    _type = 'FefferyListenBounding'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, target=Component.REQUIRED, bounding=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bounding', 'key', 'loading_state', 'target']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bounding', 'key', 'loading_state', 'target']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['target']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(FefferyListenBounding, self).__init__(**args)
