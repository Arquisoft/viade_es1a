export var funtionUpdateList = null;
var funtionUpdateList1 = () => {};
var funtionUpdateList2 = () => {};

export function setUpdateList1(updateList) {
    funtionUpdateList1 = updateList;
    funtionUpdateList = () => {
        funtionUpdateList1();
        funtionUpdateList2();
    };
};

export function setUpdateList2(updateList) {
    funtionUpdateList2 = updateList;
    funtionUpdateList = () => {
        funtionUpdateList1();
        funtionUpdateList2();
    };
};

export default funtionUpdateList;