import React from "react";

export const Hook = () => {
    let variableQueLlamaAHookExterno = 1;

    class ClassInHookExample extends React.Component {

        funcionInterna() {
            this.constanteInterna = variableQueLlamaAHookExterno;
        }

        render() {
            return (
                <div>
                    {this.constanteInterna}
                </div>
            );
        }
    }
    return (<ClassInHookExample />);
};

export default Hook;