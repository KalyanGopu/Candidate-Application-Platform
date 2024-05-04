import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsFailure,
} from "./actions/jobActions";
import { Container, Grid } from "@material-ui/core";
import JobCard from "./components/JobCard";
import Filter from "./components/Filter";

const App = ({ jobs, loading, error, fetchJobs }) => {
  const [filters, setFilters] = useState({
    location: "",
    // Add more filter options here
  });

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const applyFilters = () => {
    // Apply filters logic here
  };

  return (
    <Container>
      <h1>Job Listings</h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Filter
            filters={filters}
            onChange={handleFilterChange}
            onApply={applyFilters}
          />
        </Grid>
        <Grid item xs={9}>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
  loading: state.jobs.loading,
  error: state.jobs.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => {
    dispatch(fetchJobsRequest());
    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch(fetchJobsSuccess(result)))
      .catch((error) => dispatch(fetchJobsFailure(error.message)));
  },
});

// App.js

// Import fetchJobsRequest, fetchJobsSuccess, and fetchJobsFailure actions

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => {
    dispatch(fetchJobsRequest());
    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch(fetchJobsSuccess(result)))
      .catch((error) => dispatch(fetchJobsFailure(error.message)));
  },
});

// App.js

useEffect(() => {
  fetchJobs();
}, [fetchJobs]);

export default connect(mapStateToProps, mapDispatchToProps)(App);
