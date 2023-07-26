import React from 'react';
import Label from '../../Label';
import { Button } from '../../buttons';
import { TextInput } from '../../inputs';

const DiabetesForm = () => {
  return (
    <form className="mx-5 md:mx-auto max-w-screen-md flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Label to="pregnancies">Blood Pressure Level</Label>
        <TextInput type="text" placeholder="1" />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="pregnancies">Skin Thickness Level</Label>
        <TextInput type="text" placeholder="1" />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="pregnancies">Insulin Level</Label>
        <TextInput type="text" placeholder="1" />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="pregnancies">BMI Value</Label>
        <TextInput type="text" placeholder="1" />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="pregnancies">
          Diabetes Pedigree Functional Value
        </Label>
        <TextInput type="text" placeholder="1" />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="pregnancies">Age of Person</Label>
        <TextInput type="text" placeholder="1" />
      </div>

      <div className="mt-2">
        <Button type="submit">Diabetes Test Result</Button>
      </div>
    </form>
  );
};

export default DiabetesForm;
