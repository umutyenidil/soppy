const mainViewFolderName = 'public/pages';

module.exports.indexPageRenderer = ({response}) => {
    const viewFile = `${mainViewFolderName}/index`;

    const params = {
        title: 'Index Page', 
    };

    response.render(viewFile, params);
}

