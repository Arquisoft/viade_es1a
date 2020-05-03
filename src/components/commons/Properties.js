const properties = {
    //myFolder: "/private/rutas/",
    myFolder: "/viade/routes/",
    myFolderSinBarra: "viade/routes/",
    shareFolder: "/public/viade/routes/",
    profile: "/profile/card#me",
    inbox: "/inbox/",
    inboxSinBarra: "inbox/",
    layers: [
        //Satelite
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        //Topografo
        "http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
        //Indicaciones
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        //Terreno
        "http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg",
        //Mordor
        "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png"
    ]
};

export default properties;
