const baseStyle = {
    color: '#6e6f79',
    fontFamily: 'Inter'
};

const sizes = {
    paragraph_2_regular: {
        fontSize: '14px',
        fontWeight: 400,
        fontStyle: 'normal'
    },
    label_1_regular: {
        fontSize: '12px',
        fontWeight: 400,
        fontStyle: 'normal'
    },
    label_2_regular: {
        fontSize: '11px',
        fontWeight: 400,
        fontStyle: 'normal'
    }, 
};

const defaultProps = {
    size: 'paragraph_2_regular'
};

const Text = {
    baseStyle,
    sizes,
    defaultProps
};

export default Text;