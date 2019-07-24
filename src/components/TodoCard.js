import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class TodoCard extends React.Component {
  render(){
    return (
        <div>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={10}>
                            <FormControlLabel
                                control={
                                <Checkbox color="primary" checked={this.props.done||false} disabled={this.props.done||false} onChange={()=>this.props.UpdateStatus(this.props.id)}  />
                                }
                                label={this.props.text}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Button disabled={this.props.done} onClick={()=>this.props.ClickEdit(this.props.id)} color="default">
                                Edit
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={()=>this.props.ClickDelete(this.props.id)} color="default">
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br/>
        </div>
    );
  }
}