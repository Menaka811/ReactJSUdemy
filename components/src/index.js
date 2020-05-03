import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App= ()=>{
    return (
    <div className="ui container comments">
    <ApprovalCard >
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentTxt="Good blog" image={faker.image.avatar()}/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="Alex" timeAgo="Today at 5:45PM" commentTxt="Great Job" image={faker.image.avatar()}/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="Jane" timeAgo="Today at 6:45PM" commentTxt="Very informative" image={faker.image.avatar()}/>
    </ApprovalCard>
    </div>
    );
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

