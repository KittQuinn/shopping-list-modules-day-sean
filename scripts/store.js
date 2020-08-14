import item from './item.js';
const items = [];
const hideCheckedItems = false;
/* Use the Array find() method to return the specific item from store.items. */

const findById = function(id){
  return items.find(item => item.id === id);
}

const addItem = function(name){
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch(error) {
    throw `Cannot add item: ${error.message}`;
  };
};

const findAndToggleChecked = function(id){
  const itemName = findById(id);
  itemName.checked = !itemName.checked;
};

const findAndUpdateName = function(id, newName){
  try {
    item.validateName(newName);
    const itemName = findById(id);
    itemName.name = newName;
  } catch(error) {
    throw `Cannot update name: ${error.message}`;
  }
};

const findAndDelete = function(id){
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
};


const toggleCheckedFilter = function(){
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  toggleCheckedFilter,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  items,
  hideCheckedItems
};
