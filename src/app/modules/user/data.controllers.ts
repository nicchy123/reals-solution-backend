import { DataServices } from "./data.services";
import { sendResponse } from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createData = catchAsync(async (req, res) => {
  const result = await DataServices.createDataIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: `data created successfully!`,
    data: result,
  });
});
const getDataFromoDB = catchAsync(async (req, res) => {
  const result = await DataServices.getDataFromoDB();

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: `data retrieved successfully!`,
    data: result,
  });
});




export const DataControllers = {
  createData,
  getDataFromoDB

};
