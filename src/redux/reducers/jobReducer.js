// src/redux/reducers/jobReducer.js
const initialState = {
  jobs: [],
  filters: {
    experience: "",
    companyName: "",
    location: "",
    remote: false,
    role: "",
    minBasePay: 0,
  },
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define cases to update state based on actions
    default:
      return state;
  }
};

export default jobReducer;
