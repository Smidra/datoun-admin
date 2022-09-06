// Funkce pro odebirani a pridavani do listuu jsonuu napr. { id: 11 }
// Vyuzito pro pridavani kategorii a vyroben
export function add_to_list(my_list){
  let max = Math.max(...my_list)
  if(max == -Infinity){
    max = 0
  }
  my_list.push( max+1 )
  console.log(my_list)
}

// Nelze odebrat posledni vec z listu
// (Vzdy musi byt alespon jedna vyrobna co vyrabi alespon jednu kategorii zbozi.)
export function remove_from_list(my_list){
  if(my_list.length == 1){
    // pass
  }else{
    my_list.pop();
  }
}

// Odeber z listu podle IDcka a v listu musi zustat alespon minimum polozek
export function remove_from_list_by_id(my_list, id, minimum){
  if(my_list.length <= minimum){
    // pass
  }else{
    // Copypasta ze stacku
    const index = my_list.indexOf(id);
    if (index > -1) { // only splice array when item is found
      my_list.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}