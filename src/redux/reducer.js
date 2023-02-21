export const data = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "loading":
      return payload;
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};

export const comments = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "cmLoading":
      return payload;
    case "cmSuccess":
      return payload;
    case "cmFailed":
      return payload;
    default:
      return state;
  }
};
