import json
import dash
from dash import html
import feffery_utils_components as fuc
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        # # 背景图
        # html.Img(
        #     src=dash.get_asset_url('bg.png'),
        #     style={
        #         'width': '100%',
        #         'height': '100%',
        #         'objectFit': 'contain',
        #         'display': 'block'
        #     }
        # ),
        fuc.FefferyDraggable(
            fuc.FefferyResizable(
                html.Div(
                    id='show-bounding',
                    style={
                        'display': 'flex',
                        'height': '100%',
                        'justifyContent': 'center',
                        'alignItems': 'center',
                        'border': '2px solid #1890ff',
                        'boxSizing': 'border-box',
                        'padding': 2
                    }
                ),
                id='demo-resizable',
                boundsSelector='#demo-bounds',
                defaultSize={
                    'width': 500,
                    'height': 120
                }
            ),
            id='demo-draggable',
            initialX=400,
            initialY=200,
            showDragLine=True,
            # boundsSelector='#demo-bounds',
            # draggable=False,
        ),
        # 示例边界范围
        html.Div(
            id='demo-bounds',
            style={
                'position': 'fixed',
                'top': 100,
                'right': 100,
                'bottom': 100,
                'left': 100,
                # 'backgroundColor': '#f0f0f0'
            }
        )
    ],
    style={
        'height': '100vh',
        'position': 'relative'
    }
)


@app.callback(
    Output('show-bounding', 'children'),
    [Input('demo-draggable', 'x'),
     Input('demo-draggable', 'y'),
     Input('demo-resizable', 'size'),
     Input('demo-draggable', 'isFocusWithin')]
)
def show_bounding(x, y, size, isFocusWithin):

    if x and y and size:
        return f'x: {x}, y: {y}, width: {size["width"]}, height: {size["height"]}, isFocusWithin: {isFocusWithin}'


if __name__ == '__main__':
    app.run_server(debug=True)
