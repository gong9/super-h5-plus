module.exports = {
    env: {
        browser: true,
        es6: true,
        node:true
      },
    extends:["eslint:recommended"],
    Plugin:["prettier"],
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            es6: true,
        },
    },
    rules:{
        "prettier/prettier":["error",{endOfline:'auto'}]
    }
  
}