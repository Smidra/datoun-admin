// Funkce pro odebirani a pridavani do listuu jsonuu napr. { id: 11 }
// Vyuzito pro pridavani kategorii a vyroben
export function add_to_list(my_list){
  my_list.push({id: my_list.length+1 });
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

// U aliasu jde odebrat i posledni vec.
export function remove_from_list_zero(my_list){
  my_list.pop();
}
