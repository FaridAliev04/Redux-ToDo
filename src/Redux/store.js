// import { configureStore } from "@reduxjs/toolkit";
// import {crud} from "./crud";

// export const store=configureStore({
//     reducer:{
//         name:crud
//     }
// })

import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./crud";
import  updataId  from "./updataId";

export const store = configureStore({
    reducer: {
        crud: crudReducer,
        updata:updataId
    },
});
