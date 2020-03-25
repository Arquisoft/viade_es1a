export const HookExample = () => {
    let varExample = 1;

    function FuncionExample() {
        let varExample2 = varExample;
        return varExample2;
    }

    return (FuncionExample());
};
export default HookExample;