const properties = {
    myFolder: "/private/rutas/",
    shareFolder: "/public/rutasCompartidas/",
    profile: "/profile/card#me",
    inbox: "/inbox/",
    inboxSinBarra: "inbox/",
    groupFolder: "/private/group/",
    layers: [
        //Satelite
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        //Topografo
        "http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
        //Terreno
        "http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg",
        //Indicaciones
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        //Mordor
        "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png"
    ]
};

export default properties;
