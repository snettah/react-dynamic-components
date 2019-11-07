import React from "react";
import useForm from "react-hook-form";

function recursiveMap(children, fn) {
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        inputRef: register,
        ref: register,
        children: recursiveMap(child.props.children, fn)
      });
    }

    return fn(child);
  });
}

export default function Form({ children, ...props }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log("data", data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  //   const updatedChilds = React.Children.map(children, child => {
  //     console.log(child);
  //     return React.cloneElement(child, { inputRef: register, ref: register });
  //   });

  //   const updatedChilds = children.map(child => {
  //     return { ...child, props: { ...child.props, inputRef: register, ref: register } };
  //   });

  const updatedChilds = recursiveMap(children);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input name="example" defaultValue="test" ref={register} />

      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" /> */}
      {updatedChilds}
    </form>
  );
}
