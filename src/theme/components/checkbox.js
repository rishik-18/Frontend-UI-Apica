import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const sizes = {
    xs: defineStyle({
        control: {},
        label: {}
    }),
};

const variants = {
    primary: defineStyle({
        control: {
            _checked: {
                borderWidth: '2px'
            },
        },
    }),
};

const Checkbox = defineStyleConfig({
    variants,
    sizes,
    defaultProps: {
        variant: 'primary',
        size: 'xs'
    },
});

export default Checkbox;