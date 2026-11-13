
function List(){

    const fruits = [{id: 1, name: "Apple", calories: 26 },
                    {id: 2, name: "Banana", calories: 89 },
                    {id: 3, name: "Cherry", calories: 50 },
                    {id: 4, name: "Date", calories: 282 },
                    {id: 5, name: "Elderberry", calories: 73 },]

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER
    // fruits.sort((a, b) => a.calories - b.calories); // ASCENDING ORDER
    // fruits.sort((a, b) => b.calories - a.calories); // DESCENDING ORDER

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const lowCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  
 
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);  

    return <><h1 className="fruit-heading">Fruit List: </h1><ol className="fruit-list">{listItems}</ol></>
}

export default List;