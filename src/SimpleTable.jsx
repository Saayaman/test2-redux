import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(id, title, state, url, createdAt, updatedAt) {
  return { id, title, state, url, createdAt, updatedAt };
}

const rows = [
  createData('123456789', "Random title1", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
  createData('123456712', "Random title2", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
  createData('223456789', "Random title3", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
  createData('323456789', "Random title4", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
  createData('423456789', "Random title5", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
];

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Url</TableCell>
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Updated at</TableCell>
            <TableCell align="right">
              <AddIcon color="primary" onClick={() => {
                props.openModal();
                props.setIsAddButton(true);
              }} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.url}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>
              <TableCell align="right">
                {/* This is edit button */}
                <CreateIcon color="secondary" onClick={() => {
                  props.setIsAddButton(false);
                  props.openModal();
                }} /><DeleteIcon color="secondary" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}