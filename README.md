## BiDirectional Hierarchical (Styled) Sankey Diagram

This is a d3 javascript plugin/library for generating bidirectional hierarchial Sankey diagrams

**Known limitations:**

Diagram uses old D3 v.3. Not compatible with the latest D3 v.4.

Collapser circle size, and top padding of svg don't change even you define different nodeWidth().

Node types, node colors, flow (in and out) colors are not parametrized. You can change/add/remove them in bihisankey.app.js.

### Live Code Demonstration

For a demonstration of the use of this library:

http://kardash.net/styled_sankey/examples/simple_light.html - simple example with white background and black text.

http://kardash.net/styled_sankey/examples/simple_dark.html - simple example with dark background and white text.

http://kardash.net/styled_sankey/examples/hierarchy.html - example with hierarchy interactions and text positioned outside of rectangle nodes.

http://kardash.net/styled_sankey/examples/simple_test.html - the links in the same direction between the same target and source will NOT be merged.

http://kardash.net/styled_sankey/examples/treasury.html - example with two charts overlapping each other.

Additionally developed features in this branch (https://github.com/northam/styled_sankey) forked from https://github.com/Neilos/bihisankey include:

1. Support of **centered text** over the nodes. Default parameter: **labelsAlwaysMiddle(true)**. In case of "false" the text will be rendered outside of the nodes.
2. Text of the node can consist of **1, 2, or 3 lines** now. Every line is an array element of "name" array. Name of the node must by specified as an array.
3. The color of the the node can be one default color (set in css), the same for all nodes, or individual colors depending on node type. Use parameter: **onlyOneTextColor(false|true)**.
4. The links in the same direction between the same target and source may or may NOT be merged. Use function: mergeSameNodesLinks(false). Default is true.
5. Most examples demonstrate a light text on dark background. You can revert the colors, or use any colors of your choice.

NOTE: for the best viewing results use either Firefox or Chrome browser.

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

**Functions**
```javascript
biHiSankey.relayout(); // (re)calculate link paths and node heights but do not change the node positions
biHiSankey.initializeNodes();
biHiSankey.layout(20); // (re)calculate the attributes of all nodes and links. Input param is maximum number of iterations
```

**Bihisnakey App Functions**
```javascript
disableUserInteractions();
update();
```

**Properties**
To return any of the previously set properties:
```javascript
biHiSankey.links();
biHiSankey.visibleLinks();
biHiSankey.linkSpacing();
biHiSankey.nodes();
biHiSankey.nodeWidth();
biHiSankey.nodeSpacing();
biHiSankey.size();
biHiSankey.onlyOneTextColor();
biHiSankey.labelsAlwaysMiddle();
biHiSankey.mergeSameNodesLinks();
```

### License

BiHiSankey is released under the [MIT License](http://opensource.org/licenses/MIT).
