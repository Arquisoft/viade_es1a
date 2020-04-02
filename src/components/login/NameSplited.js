import { useWebId } from "@solid/react";

export const NameSplited = () => {
    let webId = useWebId();

    function nameSplited() {
        let username = String(webId);
        username = username.replace("https://", "");
        username = username.replace(".solid.community/profile/card#me", "");
        return username;
    }

    return (nameSplited());
};
export default NameSplited;