import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/styled-system";
import { tableAnatomy as parts } from '@chakra-ui/anatomy';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = defineStyle({
    thead: {
        th: {
            p: 'inherit'
        },
    },
});

const Table = defineMultiStyleConfig({
    baseStyle,
    defaultProps: {}
});

export default Table;