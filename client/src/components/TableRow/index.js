import React from "react";
import Button from "../Button";
import "./style.css";

class TableRow extends React.Component {
  render() {
    return (
      <tr key={this.props.key}>
        <td>
          <div className="del-btn-wrapper">
            <Button
              buttonText="X"
              className="delete-btn"
              handleSort={() => {
                this.props.deleteEmployee(this.props.id);
              }}
            />
            {this.props.firstName}
          </div>
        </td>
        <td>{this.props.lastName}</td>
        <td>{this.props.jobTitle}</td>
      </tr>
    );
  }
}

export default TableRow;
