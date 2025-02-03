import PropTypes, { string } from 'prop-types';

const Button = ({ id, className, bg, text, fontSize, title, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: bg || '#4CAF50',
                color: text || '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: fontSize
                    ? typeof (fontSize) === string
                        ? fontSize
                        : `${fontSize}px`
                    : "15px"
            }}
            id={id}
            className={className}
        >
            {title}
        </button>
    );
};

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    bg: PropTypes.string,
    text: PropTypes.string,
    fontSize: PropTypes.number || PropTypes.string,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Button;