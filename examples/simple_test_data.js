var diagramNodes = [
    { "type": "Asset", "id": "a", "parent": null, "name": ["Assets"] },
    { "type": "Expense", "id": "e", "parent": null, "name": ["Expenses"] }
]

var diagramLinks = [
    { "source": "a", "target": "e", "value": 5 },
    { "source": "e", "target": "a", "value": 5 },
    { "source": "a", "target": "e", "value": 5 }
]
