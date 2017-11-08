import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Label, Progress, Button, Icon, Segment, Item } from 'semantic-ui-react';


class SmartTable extends Component {

    constructor(props){
        super(props);
    }

    getProgressColor = (percent) => {
      if(percent > 75)
        return "blue";
      else if(percent > 50)
        return "yellow";
      else if(percent > 25)
        return "orange";
      return "red";
    }


    render(){
        const columns = [
            {
              Header: 'Name',
              accessor: 'result.name' // String-based value accessors!
            },{
              Header: 'Type',
              accessor: 'result.@type',
              Cell: props => {
                return props.value.map(type => <Label size="tiny" key={type} tag>{type}</Label>)
              }
            },{
              Header: 'Description',
              accessor: 'result.description'
            },{
              Header: 'Score',
              accessor: 'resultScore',
              Cell: props => {
                return <Progress percent={props.value} color={this.getProgressColor(props.value)}/>
              }
            }];


        return(
            <ReactTable
            data={this.props.data}
            columns={columns}
            loading={this.props.loading}
            defaultPageSize={5}
            SubComponent={row => {
              let src, description, header, url; 
              try{
                url = row.original.result.image.url;
                header = row.original.result.name;
                src = row.original.result.image.contentUrl;
                description = row.original.result.detailedDescription.articleBody
              }catch(e){
                // description = 'No description';
                return null;
              }
              return(
                <Segment padded="very" color="olive">
                  <Item.Group>
                  <Item>
                    <Item.Image src={src} size="small" alt="NA" shape="rounded"/>
                    <Item.Content verticalAlign="middle">
                      <Item.Header as="a" href={url}>{header}</Item.Header>
                      <Item.Description>{description}</Item.Description>
                    </Item.Content>
                  </Item>
                  </Item.Group>
                </Segment>
              );
            }}
            />
        );
    }
}

export default SmartTable;