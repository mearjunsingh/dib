from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import joblib

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Item(BaseModel):
    pg: int
    gc: int
    bp: int
    st: int
    ins: int
    bmi: float
    dpf: float
    age: int

@app.post("/predict")
def read_root(item: Item):
    item = dict(item)

    model = joblib.load('./algorithm/diabetes_prediction.joblib')

    input_data = [value for value in item.values()]

    predictions = model.predict([input_data])
    print(predictions)

    if predictions[0] == 0:
        msg = 'The person is is not diabetic'

    else:
        msg = 'The person is diabetic'

    return {
        'prediction': str(predictions[0]),
        'message': msg,
    }