## Graph-Business-Trip

Write a function called business trip that takes arguments: graph and array of city names.
Determine whether the trip is possible with direct flights and how much it would cost. 

## Big O
O(n2)

## Algorithm
- traverse thru graph
- store connected vertices (with weight) in an object, within an array
- return the array
- loop thru array to check: 
    - does var1 exist? 
    - if so, is var2 a value in it's object? 
    - if so, return "True" and object.cost
    - if not, return "False" and null

## Whiteboard
![Whiteboard]()
