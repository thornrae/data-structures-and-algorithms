# FIFO Animal Shelter

## Challenge Description
- Create class called AnimalShelter which holds only dogs & cats - operates FIFO (queue).
- Implement enqueue(animal) which adds animal to shelter.  Animal can be dog or car object
- Implement Dequeue (pref) which returns either a dog or a cat. If pref is not DOG or CAT return NULL

## Approach & Efficiency
Big O: O(n)

- Create 'animal type' property within AnimalShelter class constructor.
- `this.animal: animal`  
And animal can be either dog or cat.
- In the dequeue(pref) will return dog or cat based on which is passed in
- If pref is not dog or cat, return null (for ex: dequeue(frog)  => return null)

## Solution
