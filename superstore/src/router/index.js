import hello from "../components/views/hello";
import test from "../components/views/test";
import Inventory from "../components/views/Inventory";
import itemsdetails from "../components/views/itemsdetails";
export const routes =[ {
   path:"",
  component:Inventory
},

  {
    path:"/itemsdetails/:id",
    component:itemsdetails
  }
]
