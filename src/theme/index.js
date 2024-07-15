import { extendTheme } from "@chakra-ui/react";
import { Text, Heading, Table, Checkbox } from "./components";

const theme = extendTheme({
    breakpoints: {
        sm: '550px',
        md: '1050px',
        lg: '1440px'
    },
    components: { Text, Heading, Table, Checkbox },
});

export default theme;