


type Item = {
    title : string;
    rating : number;
}

function filterByRating(items : Item[]): { title: string; rating: string }[] {

   const filteredItem =  items.filter(item => item.rating >= 4)
   const singleItem =  filteredItem.map(item => ({
      title: item.title,
      rating: item.rating.toFixed(1), 
    }));

    return singleItem;


}


const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

