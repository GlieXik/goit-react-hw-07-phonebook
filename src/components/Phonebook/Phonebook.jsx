import { Formik, Form } from "formik";
import { Component } from "react";
import { Box } from "../../utils/Box";
import { SField, SLabel, SMaskedInput, ButtonSub } from "./Phonebook.styled";
import * as Yup from "yup";

export class Phonebook extends Component {
  SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    number: Yup.string().required("Required"),
  });
  initialValues = {
    name: "",
    number: "",
  };
  submit = (value, evt) => {
    this.props.add(value);
    evt.resetForm();
  };

  render() {
    const { initialValues, submit, SignupSchema } = this;
    return (
      <>
        <Box width="250px">
          <h1>Phonebook</h1>
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
  }
}
