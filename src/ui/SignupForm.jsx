import { useForm } from "react-hook-form";
// import Button from "../../ui/Button";
import Form from "./Form";

import Input from "./Input";
// import { useSignup } from "./useSignup";
import FormRow from "./FormRow";
import { styled } from "styled-components";

// Email regex: /\S+@\S+\.\S+/

const Button = styled.button`
  background-color: var(--main-brown-color);
  color: #fff;
  margin-top: 5rem;
  /* margin-left: 22rem; */
  font-size: 2rem;
  padding: 1.2rem 4.2rem;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--main-lightbrown-color);
  }
`;

function SignupForm() {
  // const { signup, isLoading } = useSignup();

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  function onSubmit() {
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name">
        <Input
          type="text"
          // disabled={isLoading}
          id="fullName"
          {...register("fullName", { required: "This feild is required" })}
        />
      </FormRow>

      <FormRow label="Email address">
        <Input
          type="email"
          // disabled={isLoading}
          id="email"
          {...register("email", {
            required: "This feild is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email",
            },
          })}
        />
      </FormRow>

      <FormRow label="Enter Your Message...">
        <Input
          className="text-input"
          type="text"
          // disabled={isLoading}
          id="fullName"
          {...register("fullName", { required: "This feild is required" })}
        />
      </FormRow>

      <Button>Submit</Button>
    </Form>
  );
}

export default SignupForm;
