import axios from 'axios';



const Menu_Item_Base_URL = "http://localhost:8080/api/v1/res_menu_item";

const Menu_Type_Base_URL = "http://localhost:8080/api/v1/menuCategories";

class MenuItemService {
    getMenuItems() {
        return axios.get(Menu_Item_Base_URL);
    }

    addMenuType(menuType) {
        return axios.post(Menu_Type_Base_URL, menuType);
    }

    addMenuItem(menuItem) {
        return axios.post(Menu_Item_Base_URL, menuItem);
    }

    getMenuItemById(menuItemId) {
        return axios.get(`http://localhost:8080/api/v1/menu/${menuItemId}`);
    }

    updateMenu(menuItem, menuItemId) {
        return axios.put(Menu_Item_Base_URL + '/' + menuItemId, menuItem);
    }

    deleteMenu(menuItemId) {
        return axios.delete(Menu_Item_Base_URL + '/' + menuItemId);
    }

    getMenuTypeById() {
        let x = axios.get(Menu_Type_Base_URL)
        return x;
    }

    getMenuItemByType(menuItemType) {
        return axios.get(Menu_Item_Base_URL + '/' + menuItemType);
    }

    getAllMenuItemTypes(){
        return axios.get(Menu_Type_Base_URL)
    }

}

export default new MenuItemService()