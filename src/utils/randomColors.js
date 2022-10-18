const backgroundColors = [    
    "#144552ff",
    "#1b3a4bff",
    "#212f45ff",
    "#272640ff",
    "#312244ff",
    "#3e1f47ff",
    "#4d194dff",
    "#522546",
    "#88304E",
    "#311D3F",
    "#E23E57",
]

const getRandomColors = number => {
    let colors = [];
    for(let i = 0; i < number;  i++) {
        colors.push(backgroundColors[Math.floor(Math.random() * backgroundColors.length)]);
    }
    return colors;
}

export { getRandomColors };