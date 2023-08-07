import PropTypes from 'prop-types';

import Label from '../../Label';
import { Button } from '../../buttons';
import { TextInput } from '../../inputs';

const DiabetesForm = ({ value, setValue, handleSubmit }) => {
  const { pg, gc, bp, st, ins, bmi, dpf, age } = value;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <Label to="pg">Pregnancies</Label>
        <TextInput
          required
          type="text"
          id="pg"
          name="pg"
          value={pg}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="gc">Glucose</Label>
        <TextInput
          required
          type="text"
          name="gc"
          id="gc"
          value={gc}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="bp">Blood Pressure Level</Label>
        <TextInput
          required
          type="text"
          id="bp"
          name="bp"
          value={bp}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="st">Skin Thickness Level</Label>
        <TextInput
          required
          type="text"
          name="st"
          id="st"
          value={st}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="Insulin">Insulin Level</Label>
        <TextInput
          required
          type="text"
          name="ins"
          id="ins"
          value={ins}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="bmi">BMI Value</Label>
        <TextInput
          required
          type="text"
          name="bmi"
          id="bmi"
          value={bmi}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="dpf">Diabetes Pedigree Functional Value</Label>
        <TextInput
          required
          type="dpf"
          name="dpf"
          id="dpf"
          value={dpf}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label to="age">Age of Person</Label>
        <TextInput
          required
          type="text"
          id="age"
          name="age"
          value={age}
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <Button type="submit">Diabetes Test Result</Button>
      </div>
    </form>
  );
};

DiabetesForm.propTypes = {
  value: PropTypes.shape({
    pg: PropTypes.string.isRequired,
    gc: PropTypes.string.isRequired,
    bp: PropTypes.string.isRequired,
    st: PropTypes.string.isRequired,
    ins: PropTypes.string.isRequired,
    bmi: PropTypes.string.isRequired,
    dpf: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
  }).isRequired,
  setValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default DiabetesForm;
