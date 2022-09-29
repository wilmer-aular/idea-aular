export const Input = ({ title, value, type, onChange, name }) => {

    const handleValue = (e) => {
        onChange(e);
    };

    return (
        <>
            <div className="mb-3">
                <label className="form-label">{title}</label>
                <input
                    name={title}
                    className="form-control"
                    type={type ?? 'text'}
                    defaultValue={value}
                    onChange={handleValue}
                    required
                />
            </div>
        </>
    )
}