
export const Button = ({
    style = {},
    click = null,
    type = 'button',
    className = "",
    disabled = false,
    textButton = '',
    variant = 'primary'
}) => {

    const event = () => {
        click && click();
    }
    return (
        <>
            <button
                style={style}
                disabled={disabled}
                type={type}
                className={`btn btn-${variant} ${className}`}
                onClick={() => event()}
            >
                {textButton}
            </button>
        </>
    )
}