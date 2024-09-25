import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    {
        rules: {
        "class-methods-use-this": "off",
        "arrow-parens": "off",
        "prefer-arrow-callback": "off",
        "func-names": "off",
        "object-curly-newline": "off"
        },
    },
];

