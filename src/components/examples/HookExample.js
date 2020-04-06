const HookExample = () => {
    let varExample = 1;

    function funcionExample() {
        let varExample2 = varExample;
        return varExample2;
    }

    return (funcionExample());
};
export default HookExample;


function HookExample2() {
    let varExample = 1;

    function funcionExample() {
        let varExample2 = varExample;
        return varExample2;
    }

    return (funcionExample());
};
export default HookExample2;