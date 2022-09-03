import { Formik, Form } from "formik";

import { Box } from "../../utils/Box";
import { SField, SLabel, SMaskedInput, ButtonSub } from "./Phonebook.styled";
import * as Yup from "yup";

export const Phonebook = ({ add }) => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    number: Yup.string().required("Required"),
  });
  const initialValues = {
    name: "",
    number: "",
  };
  const submit = (value, evt) => {
    add(value);
    evt.resetForm();
  };
  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };
  return (
    <>
      <Box width="250px">
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={SignupSchema}
        >
          <Form>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              <Box mb={3}>
                <SLabel htmlFor="name">
                  <SField
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    onKeyDown={handleEnter}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  />
                </SLabel>
              </Box>
              <div>
                <SLabel htmlFor="number">
                  <SField id="number" name="number">
                    {({ field }) => {
                      return (
                        <SMaskedInput
                          mask="999-99-99"
                          {...field}
                          type="tel"
                          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                          placeholder="Number"
                        />
                      );
                    }}
                  </SField>
                </SLabel>
              </div>

              <ButtonSub type="submit">Submit</ButtonSub>
            </Box>
          </Form>
        </Formik>
      </Box>
    </>
  );
};
