// Funkce pro odebirani a pridavani do listuu jsonuu napr. { id: 11 }
// Vyuzito pro pridavani kategorii a vyroben
export function add_to_list(my_list){
  my_list.push( Math.max(...my_list)+1 )
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

export function remove_from_list_by_id(my_list, id){
  if(my_list.length == 1){
    // pass
  }else{
    // Copypasta ze stacku
    const index = my_list.indexOf(id);
    console.log(index)
    if (index > -1) { // only splice array when item is found
      my_list.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}