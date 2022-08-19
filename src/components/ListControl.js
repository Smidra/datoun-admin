export function add_to_list(vyrobny){
  vyrobny.push({id: vyrobny.length+1 });
}

export function remove_from_list(vyrobny){
  vyrobny.pop();
}
