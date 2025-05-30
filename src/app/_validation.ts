type ValidationFunction = (value: string, form?: any) => string | undefined;

export const validateForm = (
  formdata: Record<string, string>,
  validators: Record<string, ValidationFunction>
) => {
  let errors: Record<string, string> = {};
  let isValid = true;

  for (let key in validators) {
    const validate = validators[key];
    const error = validate(formdata[key], formdata); 
    if (error) {
      isValid = false;
      errors[key] = error;
    }
  }

  return { isValid, errors };
};
