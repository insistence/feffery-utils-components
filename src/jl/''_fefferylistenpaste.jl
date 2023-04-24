# AUTO GENERATED FILE - DO NOT EDIT

export ''_fefferylistenpaste

"""
    ''_fefferylistenpaste(;kwargs...)

A FefferyListenPaste component.

Keyword arguments:
- `id` (String; optional)
- `enableListenPaste` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `pasteCount` (Real; optional)
- `pasteText` (String; optional)
- `targetContainerId` (String; optional)
"""
function ''_fefferylistenpaste(; kwargs...)
        available_props = Symbol[:id, :enableListenPaste, :loading_state, :pasteCount, :pasteText, :targetContainerId]
        wild_props = Symbol[]
        return Component("''_fefferylistenpaste", "FefferyListenPaste", "feffery_utils_components", available_props, wild_props; kwargs...)
end

