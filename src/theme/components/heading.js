const baseStyle = {
    color: '#44464d',
    fontFamily: 'Poppins'
};

const sizes = {
    subheading_3_medium: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: 500,
        fontStyle: 'bold'
    },
    paragraph_1_medium: {
        fontSize: '16px',
        fontWeight: 500,
        fontStyle: 'bold'
    },
    paragraph_2_medium: {
        fontSize: '14px',
        fontWeight: 500,
        fontStyle: 'bold'  
    }
};

const defaultProps = {
    size: 'subheading_3_medium'
};

const Heading = {
    baseStyle,
    sizes,
    defaultProps
};

export default Heading;