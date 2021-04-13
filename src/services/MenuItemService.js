import axios from'axios';



const Menu_Item_Base_URL= "http://localhost:8080/api/v1/res_menu_item";

class MenuItemService  {
   getMenuItems(){
       return axios.get(Menu_Item_Base_URL);
   }

   addMenuItem(menuItem){
       return axios.post(Menu_Item_Base_URL, menuItem);
   }

   getMenuItemById(menuItemId){
            return axios.get(Menu_Item_Base_URL + '/' + menuItemId);
   }
}

export default new MenuItemService()