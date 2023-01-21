import { ContainerInput, DefaultInput } from "./styles";

export const InputBase = ({
  placeholder,
  type,
  name,
  register,
  children,
  label,
  error,
  width,
  ...rest
}) => {
  return (
    <ContainerInput>
      <div className="label--input">
        <label>
          <p>{label}</p>
        </label>
      </div>
      <div>
        <DefaultInput
          placeholder={placeholder}
          type={type}
          error={error}
          width={width}
          name={name}
          {...(register !== undefined && register(name))}
          {...rest}
        >
          {children}
        </DefaultInput>

        {error !== undefined && (
          <div className="label--error">
            <label>
              <p>{error}</p>
            </label>
          </div>
        )}
      </div>
    </ContainerInput>
  );
};
