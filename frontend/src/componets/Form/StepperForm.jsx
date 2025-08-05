import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const StepperForm = ({
  initialValues,
  stepFieldMap,
  stepComponents,
  stepLabels,
  onStepSubmit, // function to send data to backend
  validationSchema
}) => {
  const [step, setStep] = useState(0);

  const isLastStep = step === stepComponents.length - 1;

  const handleNext = async (values, actions) => {
    const fieldsToSubmit = stepFieldMap[step];
    const dataToSubmit = fieldsToSubmit.reduce((acc, field) => {
      acc[field] = values[field];
      return acc;
    }, {});

    try {
      await onStepSubmit(dataToSubmit, step);
      if (!isLastStep) setStep((prev) => prev + 1);
    } catch (err) {
      console.error("Submit error:", err);
    }
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[step]}
      onSubmit={handleNext}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          {/* Stepper header */}
          <div className="flex justify-between mb-4">
            {stepLabels.map((label, i) => (
              <div
                key={i}
                className={`w-full text-center py-2 rounded-full text-sm font-medium cursor-pointer ${
                  step === i
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setStep(i)}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Current step content */}
          <div>{stepComponents[step]}</div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded"
            >
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepperForm;
