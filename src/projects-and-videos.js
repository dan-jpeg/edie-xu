const projects = [
    {
        id: "0",
        category: " ",
        location: " ",
        title: "CMMMMC - Ceramic Meets Metal Metal Meets Ceramic",
        description: "",
        material: "Oxidized metal and broken fired stoneware",
        year: "2024",
        dimensions: "70 x 23 x 94 inches (177 x 58 x 240 cm)",
        duration: "15 min",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/ceramic_metal_01.png", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/ceramic_metal_02.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/ceramic_metal_03.JPG"]
    },
    {
        id: "1",
        category: "Group Exhibition",
        location: "Shanghart, ShangHai",
        title: "limited intentionality",
        description: "if, as kant claimed, schematization is the very mechanism for human beings' use of intelligence, then vision can be considered apremise for human reason.  edie xu's works reveal the effect of sexuality on intentional activities, where the relation between body schema and eroticism always implies the object-oriented dimension.",
        material: "stoneware",
        year: "2024",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/limited_intentionality_01.jpeg","https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/limited_intentionality_02.jpeg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/limited_intentionality_03.jpeg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/limited_intentionality_04.jpeg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/limited_intentionality_05.jpeg"]
    },
    {
        id: "2",
        category: " ",
        location: " ",
        title: "0 20 ",
        description: "",
        material: "stoneware",
        year: "2023",
        images: ["https://i.ibb.co/DLZRPMf/PNG-image-3.jpg", "https://i.ibb.co/93ZqQmn/PNG-image-1.jpg", "https://i.ibb.co/tHRbPhC/PNG-image-2.jpg"],
    },
    {
        id: "3",
        category: " ",
        location: " ",
        title: "Thine air",
        description: "",
        material: "unglazed stoneware",
        year: "2023",
        dimensions: "34 x 23 x 15 inches (86 x 58 x 38 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/thine_air_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/thine_air_02.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/thine_air_03.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/thine_air_04.jpg"]
    },

    {
        id: "4",
        category: " ",
        location: " ",
        title: "oxygenated  ",
        description: "",
        material: "stoneware",
        year: "2024",
        dimensions: "34 x 23 x 15 inches (86 x 58 x 38 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/oxygenated_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/oxygenated_02.png", "https://i.ibb.co/TLsfwrc/1-Artboard-1.png", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/oxygenated_04.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/oxygenated_05.jpg"],
    },
    {
        id: "5",
        category: " ",
        location: " ",
        title: "philtrum",
        description: "",
        material: "stoneware with wash",
        year: "2022",
        images:  [
            "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_02.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_03.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_04.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_05.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_06.jpg"
        ],
    },
    // {
    //     id: "5",
    //     category: " ",
    //     location: " ",
    //     title: "N...S...",
    //     description: "consectet cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     material: "stoneware",
    //     year: "2024",
    //     images:  [
    //         "https://i.ibb.co/zPz1y7f/1.png",
    //         "https://i.ibb.co/QnjpLcL/Screenshot-2024-07-31-at-7-13-40-PM.png",
    //         "https://i.ibb.co/vLscbV7/Screenshot-2024-08-01-at-7-09-44-PM.png"
    //     ],
    // },

    {
        id: "6",
        category: " ",
        location: " ",
        title: "Being series 01",
        description: "",
        material: "Unglazed stoneware",
        year: "2022",
        dimensions: "24 x 18 x 15 inches (60 x 45 x 38 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/being-01_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/being-01_02.png"]
    },
    {
        id: "7",
        category: " ",
        location: " ",
        title: "Being series 02",
        description: "",
        material: "Terracotta",
        year: "2023",
        dimensions: "35 x 30 inches (89 x 76 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/being-02_02.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/being-02_02.jpg"]
    },
    {
        id: "8",
        category: " ",
        location: " ",
        title: "White (resonance)",
        description: "",
        material: "Stoneware with glaze",
        year: "2022",
        dimensions: "48 x 24 x 32 inches (121 x 60 x 81 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/white_resonance_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/white_resonance_02.png", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/white_resonance_03.png"]
    },
    {
        id: "9",
        category: " ",
        location: " ",
        title: "Peculiar intimacy",
        description: "",
        material: "Machine knit, metal and plaster",
        year: "2022",
        dimensions: "75 x 65 x 28 inches (190 x 165 x 71 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/peculiar_intimacy_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/peculiar_intimacy_02.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/peculiar_intimacy_03.jpg"]
    },
    // {
    //     id: "6",
    //     category: " ",
    //     location: " ",
    //     title: "Out of place",
    //     description: "consectet cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     material: "stoneware",
    //     year: "2024",
    //     images:  [
    //         "https://i.ibb.co/16J3rRD/1-V6-A8863-copy.jpg",
    //         "https://i.ibb.co/6bXvn8W/1-V6-A8872-copy.jpg",
    //         "https://i.ibb.co/4T0hLLw/1-V6-A8924-copy-2.jpg",
    //         "https://i.ibb.co/FX9YQ0p/1-V6-A8962-copy.jpg",
    //         "https://i.ibb.co/8s3FPvY/3-L7-A6632-copy.jpg",
    //         "https://i.ibb.co/n6hbxWD/3-L7-A6633-copy.jpg",
    //         "https://i.ibb.co/fD09Nk8/3-L7-A8971-copy.jpg",
    //         "https://i.ibb.co/Tbkm63M/3-L7-A8974-copy.jpg",
    //         "https://i.ibb.co/71KxxPS/3-L7-A8979-copy.jpg",
    //         "https://i.ibb.co/LxCmkYV/3-L7-A8981-copy.jpg",
    //         "https://i.ibb.co/RY133Ns/Wechat-IMG221-copy.jpg",
    //         "https://i.ibb.co/V3vVrBK/Wechat-IMG223-copy-2.jpg"
    //     ],
    // },
    // {
    //     id: "7",
    //     category: " ",
    //     location: " ",
    //     title: "Resonate with fragmentation",
    //     description: "consectet cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     material: "stoneware",
    //     year: "2024",
    //     images: [
    //         "https://i.ibb.co/dr91b9L/01-copy.jpg",
    //         "https://i.ibb.co/6X8ykWx/02-copy.jpg",
    //         "https://i.ibb.co/8z4zx7R/03-copy.jpg",
    //         "https://i.ibb.co/89ZDKZ7/04-copy.png"
    //     ]
    // },
    // {
    //     id: "8",
    //     category: " ",
    //     location: " ",
    //     title: "Somatic Attunement",
    //     description: "consectet cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     material: "stoneware fired with greenware",
    //     year: "2024",
    //     images: [
    //         "https://i.ibb.co/vJx0d4N/3L7A6311.jpg",
    //         "https://i.ibb.co/swgvLrP/3L7A6383.jpg",
    //         "https://i.ibb.co/ZXJb8sZ/3L7A6402.jpg",
    //         "https://i.ibb.co/P16C1fg/3L7A6441.jpg",
    //         "https://i.ibb.co/HzCQbgj/3L7A6517.jpg",
    //         "https://i.ibb.co/FXkR815/3L7A6586.jpg",
    //         "https://i.ibb.co/JmxrkBW/3L7A6591.jpg",
    //         "https://i.ibb.co/DRFTQLp/3L7A6594.jpg",
    //         "https://i.ibb.co/tHGJqLS/3L7A6601.jpg",
    //         "https://i.ibb.co/LNJCyFG/3L7A6656.jpg",
    //         "https://i.ibb.co/FgJmXJQ/DSC02337-1-copy.jpg"
    //     ]
    // },

    // {
    //     id: "10",
    //     category: " ",
    //     location: " ",
    //     title: "02 20",
    //     description: "A stoneware piece created in 2023",
    //     material: "Stoneware",
    //     year: "2023",
    //     dimensions: "12 x 12 x 27 inches (30 x 30 x 69 cm)",
    //     images: ["placeholder1.jpg", "placeholder2.jpg"]
    // },
    //
    // {
    //     id: "14",
    //     category: " ",
    //     location: " ",
    //     title: "Being series 02",
    //     description: "A terracotta piece created in 2023",
    //     material: "Terracotta",
    //     year: "2023",
    //     dimensions: "35 x 30 inches (89 x 76 cm)",
    //     images: ["placeholder1.jpg", "placeholder2.jpg"]
    // },

];

export { projects };

const videos = [
    {
        id: "v1",
        title: "石子路",
        year: "2023",
        duration: "7 Min",
        videoUrl: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/videos/%E7%9F%B3%E5%AD%90%E8%B7%AF.mov",
        thumbnail: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/%E3%80%8A%E7%9F%B3%E5%AD%90%E8%B7%AF%E3%80%8B_thumbnail.jpeg"
    },
    {
        id: "v2",
        title: "Erase",
        year: "2020",
        duration: "12min",
        videoUrl: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/videos/Erase.mp4",
        thumbnail: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/erase_thumbnail.jpeg"
    },
    {
        id: "v3",
        title: "Dog Walk",
        year: "2020",
        duration: "6min",
        videoUrl: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/videos/dog-walk.mov",
        thumbnail: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/dog-walk_thumbnail.jpeg"
    },
    {
        id: "v4",
        title: "Skin Contact",
        year: "2019",
        duration: "19min",
        videoUrl: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/videos/skin-contact.mp4",
        thumbnail: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/skin-contact_thumbnail.jpeg"
    },
    {
        id: "v5",
        title: "Re",
        year: "2019",
        duration: "8min",
        videoUrl: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/videos/re.MP4",
        thumbnail: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/re_thumbnail.jpeg"
    },
    {
        id: "v6",
        title: "Untitled",
        year: "2019",
        duration: "13min",
        videoUrl: "",
        thumbnail: "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/%E3%80%8A%E7%9F%B3%E5%AD%90%E8%B7%AF%E3%80%8B_thumbnail.jpeg"
    }
];

export { videos };
