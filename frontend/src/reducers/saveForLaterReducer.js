import { REMOVE_FROM_SAVE_FOR_LATER, SAVE_FOR_LATER } from "../constants/saveForLaterConstants";

export const saveForLaterReducer = (state = { saveForLaterItems: [] }, { type, payload }) => {
    switch (type) {
        case SAVE_FOR_LATER:
            const item = payload;
            const isItemExist = state.saveForLaterItems.find((i) => i.product === item.product);
            if (isItemExist) {
                return {
                    ...state,
                    saveForLaterItems: state.saveForLaterItems.map((i) =>
                        i.product === isItemExist.product ? item : i
                    ),
                }
            } else {
                return {
                    ...state,
                    saveForLaterItems: [...state.saveForLaterItems, item]
                }
            }
        case REMOVE_FROM_SAVE_FOR_LATER:
            return {
                ...state,
                saveForLaterItems: state.saveForLaterItems.filter((i) =>
                    i.product !== payload
                ),
            }
        default:
            return state;
    }
}

/*

This file defines a Redux reducer that manages the Save For Later feature of an e-commerce application.

*/

/*

Logical Summary (Short & Crisp)

This reducer manages the Save For Later feature in an e-commerce app.

It stores products that users want to buy later.

When a product is saved:

 - If it already exists, it is updated.

 - If not, it is added to the list.

When a product is removed:

 - It is filtered out using the product ID.

The reducer always returns a new immutable state, following Redux principles.

*/