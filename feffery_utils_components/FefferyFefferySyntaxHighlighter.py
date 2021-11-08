# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferyFefferySyntaxHighlighter(Component):
    """A FefferyFefferySyntaxHighlighter component.


Keyword arguments:

- id (string; optional)

- codeString (string; required)

- language (string; default 'python')

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, codeString=Component.REQUIRED, language=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'codeString', 'language', 'loading_state']
        self._type = 'FefferyFefferySyntaxHighlighter'
        self._namespace = 'feffery_utils_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'codeString', 'language', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['codeString']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(FefferyFefferySyntaxHighlighter, self).__init__(**args)
