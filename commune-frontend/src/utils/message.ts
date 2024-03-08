import { getCurrentDateTime } from "./date-time"

export const pseudoMessage = {
    createdAt: getCurrentDateTime(),
    message: "",
    type: "pseudo",
    userDetail: {
        name: "User_1",
    }
}