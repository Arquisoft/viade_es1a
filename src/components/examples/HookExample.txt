function HookExample2({parametro1, parametro2}) {
    let varExample = parametro1 + parametro2;

    function funcionExample() {
        let varExample2 = varExample;
        return varExample2;
    }

    return (funcionExample());
};
export default HookExample2;

//Llamada al HookExample2: <ShowFriends parametro1=1 parametro2=2 />