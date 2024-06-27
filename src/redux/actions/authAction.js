import { UPDATE_ONBOARDING_STATUS } from "../constant";

export const updateOnboarding = (status) => {
    return {
        type: UPDATE_ONBOARDING_STATUS,
        status
    }
}
