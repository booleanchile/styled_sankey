var diagramNodes = [
  {"type":"Solution","id":0,"parent":null,"name":["Treasury"]},
  {"type":"Function","id":12,"parent":null,"number":"209","name":["Front Office"]},
  {"type":"Function","id":13,"parent":null,"number":"210","name":["Middle Office"]},
  {"type":"Function","id":14,"parent":13,"number":"215","name":["Operations"]},

  {"type":"Module","id":23,"parent":null,"number":"265","name":["Front Office"]},
  {"type":"Module","id":24,"parent":null,"number":"265","name":["Middle Office:", "P&L and Risk"]},
  {"type":"Module","id":25,"parent":null,"number":"265","name":["Middle Office:", "Market Risk"]},
  {"type":"Module","id":27,"parent":null,"number":"265","name":["Operations:", "Trade Lifecycle"]},
  {"type":"Module","id":28,"parent":27,"number":"265","name":["Operations:", "Trade Matching"]},

  {"type":"Component","id":44,"parent":null,"number":"301","name":["Liquidity Planning"]},
  {"type":"Component","id":45,"parent":null,"number":"302","name":["Liquidity Control"]},
  {"type":"Component","id":46,"parent":null,"number":"310","name":["Procurement:", "Cash"]},
  {"type":"Component","id":47,"parent":null,"number":"311","name":["Procurement:", "Financial", "Investments"]},
  {"type":"Component","id":48,"parent":null,"number":"810","name":["Anglo-Saxon", "Treasury Model"]},
  {"type":"Component","id":49,"parent":null,"number":"910","name":["Trade Workflow"]},
  {"type":"Component","id":50,"parent":null,"number":"960","name":["Account", "Workflow"]}
]

var diagramLinks = [
  {"source":0, "target":12, "value":1}, /* Solution to Function */
  {"source":0, "target":13, "value":1}, /* Solution to Function */
  {"source":0, "target":14, "value":1}, /* Solution to Function */

  {"source":12, "target":23, "value":1}, /* Function to Module */
  {"source":13, "target":24, "value":1}, /* Function to Module */
  {"source":13, "target":25, "value":1}, /* Function to Module */
  {"source":14, "target":27, "value":1}, /* Function to Module */
  {"source":14, "target":28, "value":1}, /* Function to Module */

  {"source":23, "target":50, "value":1}, /* Module to Component */
  {"source":23, "target":46, "value":1}, /* Module to Component */
  {"source":24, "target":49, "value":1}, /* Module to Component */
  {"source":25, "target":49, "value":1}, /* Module to Component */
  {"source":27, "target":46, "value":1}, /* Module to Component */
  {"source":28, "target":49, "value":1}
]
