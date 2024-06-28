const state = {
    stockDetails : [
        {
            itemNumber: 1,
            itemName : "plater gold",
            itemPrice : 1300,
            itemQuantity : 30,
            itemImage: '../public\mudassir-zaheer-RbUI-Hc9Hy0-unsplash.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 2,
            itemName : "full pilau",
            itemPrice : 700,
            itemQuantity : 59,
            itemImage: '../public\deepthi-clicks-tUV7SJ3JqB4-unsplash.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        }
        
  ],


}
const getters = {
    stock: (state) => state.stockDetails,

}
const actions = {
    
}
const mutations = {

}
export default {
    state,
    getters,
    actions,
    mutations
    



}
