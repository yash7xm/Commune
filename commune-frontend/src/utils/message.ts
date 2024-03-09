import { getCurrentDateTime } from "./date-time"

export const pseudoMessage = {
    time: getCurrentDateTime(),
    message: "",
    id: -1,
    userDetail: {
        name: "User_1",
    }
}