import React from "react";
import classes from "./formReg.module.css";
export const MyForm = ({ input, meta, ...props }) => {
    
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div>
        <input
          className={hasError ? classes.formInputerror : classes.formInput}
          {...input}
          {...props}
        />
      </div>
      {hasError && <span className={classes.span}>{meta.error}</span>}
    </div>
  );
};
export const MyFormSelect = ({ input, meta, ...props }) => {
    
    const hasError = meta.visited && meta.error;
    return (
      <div>
        <div>
          <select
            className={hasError ? classes.formInputerror : classes.formInput}
            {...input}
            {...props}
          />
        </div>
        {hasError && <span className={classes.span}>{meta.error}</span>}
      </div>
    );
  };
   