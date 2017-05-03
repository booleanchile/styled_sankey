## BiDirectional Hierarchical (Styled) Sankey Diagram

This is a d3 javascript plugin/library for generating bidirectional hierarchial Sankey diagrams

**Known limitation: uses old D3 v.3. Not compatible with the latest D3 v.4.**

### Live Code Demonstration

For a demonstration of the use of this library:

http://kardash.net/styled_sankey/treasury.html - "Treasury" example.

http://kardash.net/styled_sankey/simple_light.html - simple example with white background and black text.

http://kardash.net/styled_sankey/simple_dark.html - simple example with dark background and white text.

http://kardash.net/styled_sankey/hierarchy.html - example with hierarchy interactions and text positioned outside of rectangle nodes.

http://kardash.net/styled_sankey/test.html - the links in the same direction between the same target and source will NOT be merged.

Additionally developed features in this branch (https://github.com/northam/styled_sankey) forked from https://github.com/Neilos/bihisankey include:

1. Support of **centered text inside of the rectangle** nodes. Default parameter: **LABEL_ALWAYS_MIDDLE** = true. In case of "false" the text will be rendered outside of the nodes.
2. Text of the node can consist of **1, 2, or 3 lines** now. Every line is an array item of "text" data element.
3. The color of the the node can be default color (specified in css), the same for all nodes, or individual colors depending on node type. Use parameter: **ONLY_DEFAULT_TEXT_COLOR** = false|true.
4. Example (at http://kardash.net/styled_sankey/treasury.html) demonstrates a light text on dark background. You can revert the colors, or use any colors of your choice. See other examples.
5. The links in the same direction between the same target and source may or may NOT be merged. Use function: mergeSameNodesLinks(false). Default is true.

NOTE: The "Treasury" example overlays two Sankey charts on the same html page. You are not obliged to use TWO Sankey charts as it can be considered a code duplication.

NOTE TWO: for the best viewing results use either Firefox or Chrome browser.

### Overview

Start with the example which is more suitable for your needs.

To Set the diagram properties:
```javascript
biHiSankey
  .nodeWidth(30) // sets the pixel width of all nodes (heights are variable, widths are fixed)
  .nodeSpacing(10) // sets the minimum vertical pixel spacing between nodes
  .linkSpacing(4) // sets the vertical pixel spacing between links
  .arrowheadScaleFactor(0.5) // Specifies the proportion of a link's stroke width that should be allowed for the marker at the end of the link e.g. an arrow
  .size([someWidth, someHeight]); // sets the width and height of the diagram in pixels
```

To (re)initialize the sankey diagram with data
```javascript
var someNodes = [
  {"type" => "A", "id" => 1, "parent" => null, "name" => ["Node 1"]},
  {"type" => "A", "id" => 2, "parent" => "1", "name" => ["Node 2"]},
  {"type" => "A", "id" => 3, "parent" => "1", "name" => ["Node 3"]},
  {"type" => "B", "id" => 4, "parent" => null, "name" => ["Node 4"]},
  {"type" => "B", "id" => 5, "parent" => "4", "name" => ["Node 5"]},
  {"type" => "C", "id" => 6, "parent" => "5", "name" => ["Node 6"]},
]
var someLinks = [
  {source: 3, target: 2, value: 20},
  {source: 2, target: 3, value: 90},
  {source: 3, target: 6, value: 40},
  {source: 6, target: 2, value: 70},
  {source: 6, target: 3, value: 10},
]

biHiSankey
  .nodes(someNodes) // pass in the nodes
  .links(someLinks) // pass in the nodes
  .initializeNodes(function (node) {
    // amend or add properties to each node as required
    // ...
  })
```

To (re)calculate the attributes of all nodes and links:
```javascript
biHiSankey.layout(20); // pass in a maximum number of iterations
```

To (re)calculate link paths and node heights but do not change the node positions:
```javascript
biHiSankey.relayout();

```

To return any of the previously set properties:
```javascript
biHiSankey.links();
biHiSankey.visibleLinks();
biHiSankey.linkSpacing();
biHiSankey.nodes();
biHiSankey.nodeWidth();
biHiSankey.nodeSpacing();
biHiSankey.size();
```

### License

BiHiSankey is released under the [MIT License](http://opensource.org/licenses/MIT).
