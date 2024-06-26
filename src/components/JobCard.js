// JobCard.js
import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {job.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {job.company}
        </Typography>
        <Typography color="textSecondary">{job.location}</Typography>
        <Typography variant="body2" component="p">
          {job.description}
        </Typography>
        <Typography color="textSecondary">
          Experience: {job.experience}
        </Typography>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {job.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {job.company}
        </Typography>
        <Typography color="textSecondary">{job.location}</Typography>
        <Typography variant="body2" component="p">
          {job.description}
        </Typography>
        <Typography color="textSecondary">
          Experience: {job.experience}
        </Typography>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};
