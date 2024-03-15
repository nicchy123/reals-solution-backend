import { TData } from "./data.interfaces";
import { Data } from "./data.model";


const createDataIntoDB = async (payload: TData) => {
  const result = Data.insertMany(payload);
  return result;
};

const getDataFromoDB = async () => {
  const result = Data.find();
  return result;
};


export const DataServices = {
  createDataIntoDB,
  getDataFromoDB

};
