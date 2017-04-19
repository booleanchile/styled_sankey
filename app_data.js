var diagramNodes = [
  {"type":"Solution","id":0,"parent":null,"name":["Treasury"],"height":"200"},
  {"type":"Solution","id":1,"parent":null,"number":"101","name":["Clearing"]}, /* not used: for future */
  {"type":"Solution","id":2,"parent":null,"number":"120","name":["Collateral"]}, /* not used: for future */
  {"type":"Solution","id":3,"parent":null,"number":"140","name":["Corporate Treasury"]}, /* not used: for future */
  {"type":"Solution","id":4,"parent":null,"number":"150","name":["Enterprise Risk"]}, /* not used: for future */
  {"type":"Solution","id":5,"parent":null,"number":"160","name":["CCP (Counterparty", "Clearing)"]}, /* not used: for future */
  {"type":"Solution","id":6,"parent":null,"number":"170","name":["Regional:", "Africa Treasury"]}, /* not used: for future */
  {"type":"Financial_Product","id":7,"parent":null,"number":"175","name":["Foreign Exchange"]}, /* not used: for future */
  {"type":"Financial_Product","id":8,"parent":null,"number":"178","name":["Money Market &", "Discount Papers"]}, /* not used: for future */
  {"type":"Financial_Product","id":9,"parent":null,"number":"180","name":["Interest Rates", "Derivatives"]}, /* not used: for future */
  {"type":"Financial_Product","id":10,"parent":null,"number":"188","name":["Fixed Income"]}, /* not used: for future */
  {"type":"Financial_Product","id":11,"parent":null,"number":"188","name":["Equity"]}, /* not used: for future */
  {"type":"Function","id":12,"parent":null,"number":"209","name":["Front Office"]},
  {"type":"Function","id":13,"parent":null,"number":"210","name":["Middle Office"]},
  {"type":"Function","id":14,"parent":null,"number":"215","name":["Operations"]},
  {"type":"Module","id":23,"parent":null,"number":"265","name":["Accounting"]},
  {"type":"Component","id":24,"parent":null,"number":"r","name":["Liquidity Planning"]},
  {"type":"Component","id":25,"parent":null,"number":"","name":["Liquidity Control"]},
  {"type":"Component","id":26,"parent":"or","number":"310","name":["Procurement:", "Cash"]},
  {"type":"Component","id":27,"parent":"r","number":"","name":["Procurement:", "Financial", "Investments"]},
  {"type":"Component","id":28,"parent":null,"number":"810","name":["Trade Workflow"]},
  {"type":"Component","id":29,"parent":null,"number":"910","name":["Banking Book"]},
  {"type":"Component","id":30,"parent":null,"number":"960","name":["Cash Forecast"]},
  {"type":"Interface","id":31,"parent":null,"number":"500","name":["Bloomberg", "Server API:", "Managed B-Pipe"]},
  {"type":"Interface","id":32,"parent":null,"number":"510","name":["Bloomberg", "Data License"]},
  {"type":"Interface","id":33,"parent":null,"number":"540","name":["Bloomberg Trading", "System Interface", "for AIM"]},
  {"type":"Interface","id":34,"parent":null,"number":"560","name":["Bloomberg Trading", "System Interface", "for TOMS"]},
  {"type":"Interface","id":35,"parent":null,"number":"570","name":["Bloomberg VCON", "Interface"]}
]

var diagramLinks = [
  {"source":0, "target":12, "value":1}, /* Solution to Function */
  {"source":0, "target":13, "value":1}, /* Solution to Function */
  {"source":0, "target":14, "value":1}, /* Solution to Function */
  {"source":12, "target":23, "value":1}, /* Function to Module */
  {"source":23, "target":24, "value":1}, /* Module to Component */
  {"source":23, "target":25, "value":1}, /* Module to Component */
  {"source":23, "target":26, "value":1}, /* Module to Component */
  {"source":23, "target":27, "value":1}, /* Module to Component */
  {"source":23, "target":28, "value":1}, /* Module to Component */
  {"source":0, "target":31, "value":1}, /* Solution to Interface */
  {"source":0, "target":32, "value":1}, /* Solution to Interface */
  {"source":0, "target":33, "value":1}, /* Solution to Interface */
  {"source":0, "target":34, "value":1}, /* Solution to Interface */
  {"source":0, "target":35, "value":1}
]
