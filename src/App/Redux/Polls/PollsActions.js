import pollsContants from "./PollsConstants";

export const savePolls = polls => ({
  type: pollsContants.SAVE_POLLS,
  payload: polls,
});
